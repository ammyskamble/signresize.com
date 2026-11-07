import { inspectBackground, inspectRuledPaper, type UploadIssue } from '../utils/uploadValidation';
import type { CropArea, FilterOptions, OutputFormat, ProcessedImageResult, ToolTargetMode } from '../types';

interface ProcessRequest {
  bitmap: ImageBitmap;
  sourceWidth: number;
  sourceHeight: number;
  crop: CropArea;
  targetWidth: number;
  targetHeight: number;
  rotation: number;
  flipH: boolean;
  flipV: boolean;
  filters: FilterOptions;
  format: OutputFormat;
  minKb: number;
  maxKb: number;
  targetKb: number;
  targetType: ToolTargetMode;
  candidateName: string;
  dateOfPhoto: string;
  addNameDateStamp: boolean;
  documentHighContrast: boolean;
  presetNotes?: string;
}

function applyFilters(ctx: OffscreenCanvasRenderingContext2D, width: number, height: number, filters: FilterOptions) {
  const { cleanPaper, brightness, contrast, blackAndWhite } = filters;
  if (!cleanPaper && brightness === 0 && contrast === 0 && !blackAndWhite) return;
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const factor = contrast === 0 ? 1 : (259 * (contrast + 255)) / (255 * (259 - contrast));
  const offset = (brightness / 50) * 128;
  for (let i = 0; i < data.length; i += 4) {
    let r = Math.max(0, Math.min(255, factor * (data[i] + offset - 128) + 128));
    let g = Math.max(0, Math.min(255, factor * (data[i + 1] + offset - 128) + 128));
    let b = Math.max(0, Math.min(255, factor * (data[i + 2] + offset - 128) + 128));
    const lum = (r * 54 + g * 183 + b * 19) >> 8;
    if (cleanPaper) {
      if (lum > 155) {
        const blend = (lum - 155) / 100;
        r += (255 - r) * blend; g += (255 - g) * blend; b += (255 - b) * blend;
      } else {
        r *= .85; g *= .85; b *= .85;
      }
    }
    if (blackAndWhite) {
      const bw = ((r * 77 + g * 150 + b * 29) >> 8);
      r = g = b = bw > 160 ? 255 : (bw * 179) >> 8;
    }
    data[i] = r; data[i + 1] = g; data[i + 2] = b;
  }
  ctx.putImageData(imageData, 0, 0);
}

function stampNameAndDate(ctx: OffscreenCanvasRenderingContext2D, width: number, height: number, name: string, date: string) {
  if (!name.trim() && !date.trim()) return;
  const bannerH = Math.max(26, Math.round(height * .18));
  const bannerY = height - bannerH;
  ctx.fillStyle = '#fff'; ctx.fillRect(0, bannerY, width, bannerH);
  ctx.strokeStyle = '#1e293b'; ctx.lineWidth = Math.max(1, Math.round(height * .003));
  ctx.beginPath(); ctx.moveTo(0, bannerY); ctx.lineTo(width, bannerY); ctx.stroke();
  const both = Boolean(name.trim() && date.trim());
  const size = Math.max(9, Math.round(bannerH * (both ? .36 : .55)));
  ctx.fillStyle = '#000'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = `bold ${size}px sans-serif`;
  if (both) {
    ctx.fillText(name.trim().toUpperCase(), width / 2, bannerY + bannerH * .32, width * .94);
    ctx.font = `600 ${Math.max(8, size - 1)}px monospace`;
    ctx.fillText(`DOP: ${date.trim()}`, width / 2, bannerY + bannerH * .72, width * .94);
  } else {
    ctx.fillText((name.trim() || `DOP: ${date.trim()}`).toUpperCase(), width / 2, bannerY + bannerH * .5, width * .94);
  }
}

function applyDocumentContrast(ctx: OffscreenCanvasRenderingContext2D, width: number, height: number) {
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const factor = (259 * 275) / (255 * 235);
  for (let i = 0; i < data.length; i += 4) {
    let r = Math.max(0, Math.min(255, factor * (data[i] - 128) + 128));
    let g = Math.max(0, Math.min(255, factor * (data[i + 1] - 128) + 128));
    let b = Math.max(0, Math.min(255, factor * (data[i + 2] - 128) + 128));
    const lum = (r * 77 + g * 150 + b * 29) >> 8;
    if (lum > 175) { const boost = ((lum - 175) * 40) >> 6; r += boost; g += boost; b += boost; }
    else if (lum < 110) { r *= .88; g *= .88; b *= .88; }
    data[i] = r; data[i + 1] = g; data[i + 2] = b;
  }
  ctx.putImageData(imageData, 0, 0);
}

async function compress(canvas: OffscreenCanvas, format: OutputFormat, minKb: number, maxKb: number, targetKb: number): Promise<Blob> {
  if (format === 'image/png') return canvas.convertToBlob({ type: format });
  let low = .08, high = .98, quality = high;
  let best: Blob | null = null;
  let bestDiff = Infinity;
  for (let i = 0; i < 4; i++) {
    const blob = await canvas.convertToBlob({ type: format, quality });
    const kb = blob.size / 1024;
    if (Math.abs(kb - targetKb) < bestDiff) { best = blob; bestDiff = Math.abs(kb - targetKb); }
    if ((kb >= minKb && kb <= maxKb) || (i === 0 && kb < minKb && format === 'image/jpeg')) { best = blob; break; }
    if (kb > targetKb) high = quality; else low = quality;
    quality = (low + high) / 2;
  }
  let result = best || await canvas.convertToBlob({ type: format, quality: .8 });
  // A very simple signature can be smaller than a portal's minimum even at
  // maximum quality. Preserve its pixels and meet that requirement with legal
  // JPEG COM segments, matching the main-thread compatibility encoder.
  if (format === 'image/jpeg' && result.size < minKb * 1024) result = await padJpegWithComments(result, Math.ceil(minKb * 1024) - result.size);
  return result;
}

async function padJpegWithComments(jpeg: Blob, extraBytes: number): Promise<Blob> {
  const bytes = new Uint8Array(await jpeg.arrayBuffer());
  if (bytes[0] !== 0xff || bytes[1] !== 0xd8) return jpeg;
  let insertAt = 2;
  while (insertAt + 4 < bytes.length && bytes[insertAt] === 0xff) {
    const marker = bytes[insertAt + 1];
    if ((marker >= 0xe0 && marker <= 0xef) || marker === 0xfe) insertAt += 2 + ((bytes[insertAt + 2] << 8) | bytes[insertAt + 3]);
    else break;
  }
  const parts: BlobPart[] = [jpeg.slice(0, insertAt)];
  let remaining = Math.max(4, extraBytes);
  while (remaining > 0) {
    let size = Math.min(remaining, 65537);
    if (remaining > size && remaining - size < 4) size -= 4;
    const payload = new Uint8Array(size - 4); payload.fill(32);
    const length = payload.length + 2;
    parts.push(new Uint8Array([0xff, 0xfe, length >> 8, length & 0xff]), payload);
    remaining -= size;
  }
  parts.push(jpeg.slice(insertAt));
  return new Blob(parts, { type: 'image/jpeg' });
}

self.onmessage = async (event: MessageEvent<ProcessRequest>) => {
  try {
    const request = event.data;
    const canvas = new OffscreenCanvas(request.targetWidth, request.targetHeight);
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) throw new Error('Canvas 2D context unavailable');
    const rotated = request.rotation === 90 || request.rotation === 270;
    const sourceW = rotated ? request.sourceHeight : request.sourceWidth;
    const sourceH = rotated ? request.sourceWidth : request.sourceHeight;
    const x = Math.max(0, Math.min(sourceW - 1, request.crop.x));
    const y = Math.max(0, Math.min(sourceH - 1, request.crop.y));
    const w = Math.max(1, Math.min(sourceW - x, request.crop.width));
    const h = Math.max(1, Math.min(sourceH - y, request.crop.height));
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, request.targetWidth, request.targetHeight);
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    ctx.save();
    ctx.scale(request.targetWidth / w, request.targetHeight / h);
    ctx.translate(sourceW / 2 - x, sourceH / 2 - y);
    ctx.rotate(request.rotation * Math.PI / 180);
    ctx.scale(request.flipH ? -1 : 1, request.flipV ? -1 : 1);
    ctx.drawImage(request.bitmap, -request.sourceWidth / 2, -request.sourceHeight / 2, request.sourceWidth, request.sourceHeight);
    ctx.restore();
    request.bitmap.close();
    applyFilters(ctx, request.targetWidth, request.targetHeight, request.filters);
    if (request.targetType === 'photo' && request.addNameDateStamp) stampNameAndDate(ctx, request.targetWidth, request.targetHeight, request.candidateName, request.dateOfPhoto);
    if (request.targetType === 'document' && request.documentHighContrast) applyDocumentContrast(ctx, request.targetWidth, request.targetHeight);
    const pixels = ctx.getImageData(0, 0, request.targetWidth, request.targetHeight).data;
    const issues: UploadIssue[] = request.presetNotes ? inspectBackground(pixels, request.targetWidth, request.targetHeight, request.presetNotes) : [];
    if (request.targetType === 'signature') issues.push(...inspectRuledPaper(pixels, request.targetWidth, request.targetHeight));
    const blob = await compress(canvas, request.format, request.minKb, request.maxKb, request.targetKb);
    const result: ProcessedImageResult = {
      blob, dataUrl: '', width: request.targetWidth, height: request.targetHeight, sizeBytes: blob.size,
      sizeKb: Number((blob.size / 1024).toFixed(2)), format: request.format === 'image/jpeg' ? 'JPG' : request.format === 'image/png' ? 'PNG' : 'WebP',
      withinTargetBounds: blob.size >= request.minKb * 1024 && blob.size <= request.maxKb * 1024,
    };
    self.postMessage({ result, issues });
  } catch (error) {
    self.postMessage({ error: error instanceof Error ? error.message : 'Image processing failed' });
  }
};
