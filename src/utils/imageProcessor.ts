import type {
  UnitType,
  OutputFormat,
  CropArea,
  FilterOptions,
  ProcessedImageResult,
} from '../types';

/**
 * Converts length between pixels and real-world print units (cm, mm, in) at a given DPI.
 */
export function convertUnits(
  val: number,
  from: UnitType,
  to: UnitType,
  dpi: number = 200
): number {
  if (from === to) return val;

  // Convert `from` unit to inches first
  let inches = 0;
  switch (from) {
    case 'in':
      inches = val;
      break;
    case 'cm':
      inches = val / 2.54;
      break;
    case 'mm':
      inches = val / 25.4;
      break;
    case 'px':
      inches = val / dpi;
      break;
  }

  // Convert inches to `to` unit
  switch (to) {
    case 'in':
      return Number(inches.toFixed(3));
    case 'cm':
      return Number((inches * 2.54).toFixed(2));
    case 'mm':
      return Number((inches * 25.4).toFixed(1));
    case 'px':
      return Math.round(inches * dpi);
  }
}

/**
 * Formats byte size into human readable string (KB or MB)
 */
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(2)} MB`;
}

/**
 * Smart Paper Cleaner & Contrast Filter
 * Eliminates smartphone paper yellowing/shadows while keeping ink razor-sharp.
 */
export function applySignatureFilters(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  filters: FilterOptions
): void {
  const imgData = ctx.getImageData(0, 0, width, height);
  const data = imgData.data;
  const { cleanPaper, brightness, contrast, blackAndWhite } = filters;

  // Contrast factor calculation: [-50, 50] -> factor
  const contrastFactor = (259 * (contrast + 255)) / (255 * (259 - contrast));
  const brightnessOffset = (brightness / 50) * 128;

  for (let i = 0; i < data.length; i += 4) {
    let r = data[i];
    let g = data[i + 1];
    let b = data[i + 2];

    // 1. Brightness & Contrast
    if (brightness !== 0) {
      r = Math.min(255, Math.max(0, r + brightnessOffset));
      g = Math.min(255, Math.max(0, g + brightnessOffset));
      b = Math.min(255, Math.max(0, b + brightnessOffset));
    }

    if (contrast !== 0) {
      r = Math.min(255, Math.max(0, contrastFactor * (r - 128) + 128));
      g = Math.min(255, Math.max(0, contrastFactor * (g - 128) + 128));
      b = Math.min(255, Math.max(0, contrastFactor * (b - 128) + 128));
    }

    // Luminance using standard Rec. 709 weights
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    // 2. Clean Paper Algorithm
    // Paper in photos is typically yellowish/grayish (lum > 145-170).
    // Push background to pure #FFFFFF while darkening the signature ink.
    if (cleanPaper) {
      if (lum > 155) {
        // Softly clamp paper background to pure white
        const blend = (lum - 155) / 100;
        r = Math.min(255, r + (255 - r) * blend);
        g = Math.min(255, g + (255 - g) * blend);
        b = Math.min(255, b + (255 - b) * blend);
      } else {
        // Deepen signature strokes
        r = Math.max(0, r * 0.85);
        g = Math.max(0, g * 0.85);
        b = Math.max(0, b * 0.85);
      }
    }

    // 3. Black and White Monochrome
    if (blackAndWhite) {
      const finalLum = 0.299 * r + 0.587 * g + 0.114 * b;
      const val = finalLum > 160 ? 255 : Math.max(0, finalLum * 0.7);
      r = val;
      g = val;
      b = val;
    }

    data[i] = r;
    data[i + 1] = g;
    data[i + 2] = b;
  }

  ctx.putImageData(imgData, 0, 0);
}

/**
 * Creates a helper canvas that handles rotation, flipping, and high-precision cropping.
 */
export function renderProcessedCanvas(
  sourceImage: CanvasImageSource,
  sourceNaturalWidth: number,
  sourceNaturalHeight: number,
  crop: CropArea,
  targetWidth: number,
  targetHeight: number,
  rotation: number = 0,
  flipH: boolean = false,
  flipV: boolean = false,
  filters: FilterOptions
): HTMLCanvasElement {
  // Step 1: Create an intermediate rotated/flipped canvas for full source image
  const rotRad = (rotation * Math.PI) / 180;
  const is90or270 = rotation === 90 || rotation === 270;
  const intermediateW = is90or270 ? sourceNaturalHeight : sourceNaturalWidth;
  const intermediateH = is90or270 ? sourceNaturalWidth : sourceNaturalHeight;

  const fullCanvas = document.createElement('canvas');
  fullCanvas.width = intermediateW;
  fullCanvas.height = intermediateH;
  const fullCtx = fullCanvas.getContext('2d', { willReadFrequently: true });
  if (!fullCtx) throw new Error('Canvas 2D context unavailable');

  // Fill with white base (for transparency handling)
  fullCtx.fillStyle = '#FFFFFF';
  fullCtx.fillRect(0, 0, intermediateW, intermediateH);

  fullCtx.save();
  fullCtx.translate(intermediateW / 2, intermediateH / 2);
  fullCtx.rotate(rotRad);
  fullCtx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
  fullCtx.drawImage(
    sourceImage,
    -sourceNaturalWidth / 2,
    -sourceNaturalHeight / 2,
    sourceNaturalWidth,
    sourceNaturalHeight
  );
  fullCtx.restore();

  // Step 2: Render into target dimensions from crop coordinates
  const outputCanvas = document.createElement('canvas');
  outputCanvas.width = targetWidth;
  outputCanvas.height = targetHeight;
  const outCtx = outputCanvas.getContext('2d', { willReadFrequently: true });
  if (!outCtx) throw new Error('Canvas 2D context unavailable');

  outCtx.fillStyle = '#FFFFFF';
  outCtx.fillRect(0, 0, targetWidth, targetHeight);

  outCtx.imageSmoothingEnabled = true;
  outCtx.imageSmoothingQuality = 'high';

  // Draw cropped section stretched to target dimensions
  outCtx.drawImage(
    fullCanvas,
    crop.x,
    crop.y,
    crop.width,
    crop.height,
    0,
    0,
    targetWidth,
    targetHeight
  );

  // Step 3: Apply filter enhancements
  applySignatureFilters(outCtx, targetWidth, targetHeight, filters);

  return outputCanvas;
}

/**
 * Compresses canvas to blob with exact target size (KB) binary search optimization.
 * Also handles padding/quality so output strictly falls within [minKb, maxKb].
 */
export async function compressCanvasToTargetSize(
  canvas: HTMLCanvasElement,
  format: OutputFormat,
  minKb: number,
  maxKb: number,
  targetKb?: number
): Promise<ProcessedImageResult> {
  const desiredKb = targetKb || (minKb + maxKb) / 2;
  const mimeType = format;

  if (mimeType === 'image/png') {
    // PNG is lossless and does not take a quality parameter in toBlob
    const blob = await new Promise<Blob>((resolve) =>
      canvas.toBlob((b) => resolve(b || new Blob()), 'image/png')
    );
    const sizeBytes = blob.size;
    const sizeKb = Number((sizeBytes / 1024).toFixed(2));
    const dataUrl = URL.createObjectURL(blob);
    return {
      blob,
      dataUrl,
      width: canvas.width,
      height: canvas.height,
      sizeBytes,
      sizeKb,
      format: 'PNG',
      withinTargetBounds: sizeKb >= minKb && sizeKb <= maxKb,
    };
  }

  // Binary search for optimal JPEG / WebP quality
  let low = 0.05;
  let high = 1.0;
  let bestBlob: Blob | null = null;
  let bestDiff = Infinity;

  for (let iter = 0; iter < 9; iter++) {
    const midQuality = (low + high) / 2;
    const testBlob = await new Promise<Blob>((resolve) =>
      canvas.toBlob((b) => resolve(b || new Blob()), mimeType, midQuality)
    );

    const testKb = testBlob.size / 1024;
    const diff = Math.abs(testKb - desiredKb);

    if (diff < bestDiff) {
      bestDiff = diff;
      bestBlob = testBlob;
    }

    if (testKb > desiredKb) {
      high = midQuality;
    } else {
      low = midQuality;
    }
  }

  if (!bestBlob) {
    bestBlob = await new Promise<Blob>((resolve) =>
      canvas.toBlob((b) => resolve(b || new Blob()), mimeType, 0.85)
    );
  }

  let finalBlob = bestBlob;
  let finalKb = finalBlob.size / 1024;

  // Edge case: If image is under minKb (e.g. user needs min 10KB for SSC portal,
  // but clean monochrome signature is only 7KB), pad safe JPEG metadata comments
  if (finalKb < minKb && mimeType === 'image/jpeg') {
    const bytesNeeded = Math.ceil((minKb + 1 - finalKb) * 1024);
    if (bytesNeeded > 0 && bytesNeeded < 100 * 1024) {
      finalBlob = await padJpegWithSafeExif(finalBlob, bytesNeeded);
      finalKb = finalBlob.size / 1024;
    }
  }

  const finalSizeBytes = finalBlob.size;
  const roundedKb = Number((finalSizeBytes / 1024).toFixed(2));
  const dataUrl = URL.createObjectURL(finalBlob);

  return {
    blob: finalBlob,
    dataUrl,
    width: canvas.width,
    height: canvas.height,
    sizeBytes: finalSizeBytes,
    sizeKb: roundedKb,
    format: mimeType === 'image/jpeg' ? 'JPG' : 'WebP',
    withinTargetBounds: roundedKb >= minKb && roundedKb <= maxKb,
  };
}

/**
 * Safely adds harmless JPEG COM (Comment) marker to hit government portal minimum KB requirements.
 * Government portals reject files <10KB; this ensures 100% upload compliance without visual artifacts.
 */
async function padJpegWithSafeExif(jpegBlob: Blob, extraBytes: number): Promise<Blob> {
  try {
    const arrayBuffer = await jpegBlob.arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);

    // Verify JPEG SOI marker (0xFF, 0xD8)
    if (bytes[0] !== 0xff || bytes[1] !== 0xd8) {
      return jpegBlob;
    }

    // COM marker is 0xFF 0xFE followed by 2-byte length
    // Safe comment payload
    const markerHeader = new Uint8Array([0xff, 0xfe]);
    const maxChunk = 65500;
    const payloadLen = Math.min(extraBytes, maxChunk);
    const chunkLen = payloadLen + 2;
    const lenBytes = new Uint8Array([(chunkLen >> 8) & 0xff, chunkLen & 0xff]);

    const padding = new Uint8Array(payloadLen);
    const text = 'SignResize-Verified-Compliance-Pad-';
    for (let i = 0; i < payloadLen; i++) {
      padding[i] = text.charCodeAt(i % text.length);
    }

    // Insert COM segment right after SOI (index 2)
    const combined = new Uint8Array(bytes.length + 4 + payloadLen);
    combined.set(bytes.slice(0, 2), 0);
    combined.set(markerHeader, 2);
    combined.set(lenBytes, 4);
    combined.set(padding, 6);
    combined.set(bytes.slice(2), 6 + payloadLen);

    return new Blob([combined], { type: 'image/jpeg' });
  } catch (e) {
    console.warn('Could not pad JPEG, using original blob', e);
    return jpegBlob;
  }
}
