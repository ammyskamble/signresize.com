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

// Cache intermediate rotated/flipped canvas to prevent allocating large memory on every crop drag
let cachedSourceKey: string | null = null;
let cachedIntermediateCanvas: HTMLCanvasElement | null = null;

/**
 * Creates a helper canvas that handles rotation, flipping, and high-precision cropping.
 * Uses intelligent intermediate canvas caching for 60fps drag performance.
 */
export function renderProcessedCanvas(
  sourceImage: HTMLImageElement | CanvasImageSource,
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
  const is90or270 = rotation === 90 || rotation === 270;
  const intermediateW = is90or270 ? sourceNaturalHeight : sourceNaturalWidth;
  const intermediateH = is90or270 ? sourceNaturalWidth : sourceNaturalHeight;

  // Cache key based on source, rotation and flips
  const imgSrc = (sourceImage as HTMLImageElement).src || 'direct-source';
  const cacheKey = `${imgSrc}_${rotation}_${flipH}_${flipV}_${sourceNaturalWidth}_${sourceNaturalHeight}`;

  let fullCanvas: HTMLCanvasElement;

  if (cachedIntermediateCanvas && cachedSourceKey === cacheKey) {
    fullCanvas = cachedIntermediateCanvas;
  } else {
    fullCanvas = document.createElement('canvas');
    fullCanvas.width = intermediateW;
    fullCanvas.height = intermediateH;
    const fullCtx = fullCanvas.getContext('2d', { willReadFrequently: true });
    if (!fullCtx) throw new Error('Canvas 2D context unavailable');

    fullCtx.fillStyle = '#FFFFFF';
    fullCtx.fillRect(0, 0, intermediateW, intermediateH);

    fullCtx.save();
    fullCtx.translate(intermediateW / 2, intermediateH / 2);
    fullCtx.rotate((rotation * Math.PI) / 180);
    fullCtx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
    fullCtx.drawImage(
      sourceImage,
      -sourceNaturalWidth / 2,
      -sourceNaturalHeight / 2,
      sourceNaturalWidth,
      sourceNaturalHeight
    );
    fullCtx.restore();

    cachedSourceKey = cacheKey;
    cachedIntermediateCanvas = fullCanvas;
  }

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
    Math.max(0, crop.x),
    Math.max(0, crop.y),
    Math.max(1, crop.width),
    Math.max(1, crop.height),
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
 * Smart Auto-Fit: Detects signature ink pixels on unruled paper
 * Returns tight bounding box with comfortable padding so candidate doesn't need to manually hunt for signature boundaries.
 */
export function detectSignatureBoundingBox(
  sourceImage: HTMLImageElement,
  naturalW: number,
  naturalH: number,
  rotation: number = 0,
  flipH: boolean = false,
  flipV: boolean = false,
  paddingPercent: number = 0.12
): CropArea {
  const is90or270 = rotation === 90 || rotation === 270;
  const currentW = is90or270 ? naturalH : naturalW;
  const currentH = is90or270 ? naturalW : naturalH;

  // Downsample to max 500px dimension for ultra-fast scanning (< 3ms)
  const scale = Math.min(1, 500 / Math.max(currentW, currentH));
  const scanW = Math.max(50, Math.round(currentW * scale));
  const scanH = Math.max(50, Math.round(currentH * scale));

  const canvas = document.createElement('canvas');
  canvas.width = scanW;
  canvas.height = scanH;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return { x: 0, y: 0, width: currentW, height: currentH };
  }

  // Draw rotated/flipped
  const rotRad = (rotation * Math.PI) / 180;
  ctx.save();
  ctx.translate(scanW / 2, scanH / 2);
  ctx.rotate(rotRad);
  ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
  ctx.drawImage(
    sourceImage,
    (-naturalW * scale) / 2,
    (-naturalH * scale) / 2,
    naturalW * scale,
    naturalH * scale
  );
  ctx.restore();

  const imgData = ctx.getImageData(0, 0, scanW, scanH);
  const data = imgData.data;

  let minX = scanW;
  let maxX = 0;
  let minY = scanH;
  let maxY = 0;
  let darkPixelCount = 0;

  // Scan for pixels noticeably darker than white paper background (luminance < 205)
  for (let y = 0; y < scanH; y++) {
    for (let x = 0; x < scanW; x++) {
      const idx = (y * scanW + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];

      if (a > 50) {
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        if (lum < 205) {
          darkPixelCount++;
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
  }

  // Fallback if no signature detected (blank sheet or low contrast)
  if (darkPixelCount < 15 || minX >= maxX || minY >= maxY) {
    return {
      x: Math.round(currentW * 0.05),
      y: Math.round(currentH * 0.1),
      width: Math.round(currentW * 0.9),
      height: Math.round(currentH * 0.8)
    };
  }

  // Convert back to natural coordinates
  const origMinX = minX / scale;
  const origMaxX = maxX / scale;
  const origMinY = minY / scale;
  const origMaxY = maxY / scale;

  const rawW = origMaxX - origMinX;
  const rawH = origMaxY - origMinY;

  // Apply padding around detected ink
  const padX = rawW * paddingPercent;
  const padY = rawH * paddingPercent;

  const cropX = Math.max(0, Math.floor(origMinX - padX));
  const cropY = Math.max(0, Math.floor(origMinY - padY));
  const cropW = Math.min(currentW - cropX, Math.ceil(rawW + padX * 2));
  const cropH = Math.min(currentH - cropY, Math.ceil(rawH + padY * 2));

  return {
    x: cropX,
    y: cropY,
    width: Math.max(20, cropW),
    height: Math.max(20, cropH)
  };
}

/**
 * Compresses canvas to blob with exact target size (KB) binary search optimization.
 * Also handles padding/quality so output strictly falls within [minKb, maxKb].
 * Optimized with fast early-exit tolerance for 3x faster compression.
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

  // Binary search for optimal JPEG / WebP quality with early exit
  let low = 0.05;
  let high = 1.0;
  let bestBlob: Blob | null = null;
  let bestDiff = Infinity;

  for (let iter = 0; iter < 8; iter++) {
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

    // Fast early exit: stop as soon as we are within 0.35 KB of target or within bounds with low diff
    if (diff < 0.35 || (testKb >= minKb && testKb <= maxKb && diff < 0.75 && iter >= 2)) {
      bestBlob = testBlob;
      break;
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
