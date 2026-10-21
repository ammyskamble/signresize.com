import type { ExamPreset, ProcessedImageResult } from '../types';
export interface FileFacts { size: number; type: string; name: string; width: number; height: number; }
export interface UploadIssue { code: string; message: string; fix: string; }
export type ExportRule = Pick<ExamPreset, 'widthPx' | 'heightPx' | 'minKb' | 'maxKb'> & { format: string };
export function inspectBackground(pixels: ArrayLike<number>, width: number, height: number, notes: string): UploadIssue[] {
  const lightAllowed = /light|gr[ae]y|off-white/i.test(notes);
  if (!/white|light.*background|background.*light|gr[ae]y.*background/i.test(notes)) return [];
  const isPhoto = /photo|portrait|passport|face/i.test(notes);
  let total = 0, unsuitable = 0;
  // For photos:
  // The background is around the head and upper shoulders. The bottom region (y > 50%) is the candidate's torso, suit, collar, or Coast Guard slate.
  // For signatures and documents:
  // All 4 outer perimeter margins are paper borders.
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    if (isPhoto) {
      if (y > height * 0.50) continue; // Skip bottom half where clothes, chest, and slate sit
      if (x > width * 0.15 && x < width * 0.85 && y > height * 0.12) continue; // Skip central face area
    } else {
      if (x > width * 0.08 && x < width * 0.92 && y > height * 0.08 && y < height * 0.92) continue;
    }
    const i = (y * width + x) * 4;
    const r = pixels[i], g = pixels[i + 1], b = pixels[i + 2];
    total++;
    if (pixels[i + 3] < 200 || Math.min(r, g, b) < (lightAllowed ? 200 : 235) || Math.max(r, g, b) - Math.min(r, g, b) > 36) unsuitable++;
  }
  if (!total || unsuitable / total < 0.32) return [];
  return [{ code: 'background', message: `Possible background problem: the image background looks coloured, dark, or shadowed. This preset calls for ${lightAllowed ? 'a plain light background' : 'a white background'}.`, fix: 'Check the background around the subject. Retake against the required plain background, or use Make Background White.' }];
}

export function inspectRuledPaper(pixels: ArrayLike<number>, width: number, height: number): UploadIssue[] {
  if (width < 30 || height < 20) return [];
  const startY = Math.floor(height * 0.08);
  const endY = Math.floor(height * 0.92);
  const minRun = Math.floor(width * 0.55);
  const ruledRows: number[] = [];
  let blueLineDetected = false;

  for (let y = startY; y <= endY; y++) {
    let consecutiveLinePixels = 0;
    let maxConsecutive = 0;
    let totalLinePixels = 0;

    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = pixels[idx];
      const g = pixels[idx + 1];
      const b = pixels[idx + 2];
      const a = pixels[idx + 3];

      if (a < 200) {
        consecutiveLinePixels = 0;
        continue;
      }

      const lum = 0.299 * r + 0.587 * g + 0.114 * b;

      // Blue/cyan notebook ruled line
      const isBlueTint = b > r + 15 && b > g + 8 && lum < 235;
      if (isBlueTint) blueLineDetected = true;

      // Grey/black notebook line with local vertical contrast against paper above or below
      let isGreyLine = false;
      if (lum < 215) {
        const step = Math.min(3, Math.max(1, Math.floor(height * 0.05)));
        const idxAbove = (Math.max(0, y - step) * width + x) * 4;
        const idxBelow = (Math.min(height - 1, y + step) * width + x) * 4;
        const lumAbove = 0.299 * pixels[idxAbove] + 0.587 * pixels[idxAbove + 1] + 0.114 * pixels[idxAbove + 2];
        const lumBelow = 0.299 * pixels[idxBelow] + 0.587 * pixels[idxBelow + 1] + 0.114 * pixels[idxBelow + 2];
        if (lumAbove - lum > 25 || lumBelow - lum > 25) {
          isGreyLine = true;
        }
      }

      if (isBlueTint || isGreyLine) {
        consecutiveLinePixels++;
        totalLinePixels++;
        if (consecutiveLinePixels > maxConsecutive) maxConsecutive = consecutiveLinePixels;
      } else {
        consecutiveLinePixels = 0;
      }
    }

    if (maxConsecutive >= minRun || totalLinePixels >= width * 0.65) {
      ruledRows.push(y);
    }
  }

  // Genuine notebook paper has blue tint lines or multiple parallel ruled lines across the sheet
  if (blueLineDetected && ruledRows.length > 0 || ruledRows.length >= 2) {
    return [{
      code: 'ruled_paper',
      message: 'Ruled notebook lines detected across signature. Official exam portals (including UPSSSC PET Clause 9.3) strictly reject signatures on lined or checked notebook paper.',
      fix: 'Retake or crop your signature on clean, plain white unruled paper (कागज सादा और सफेद बिना लाइन वाला) using a black or blue pen.'
    }];
  }

  return [];
}
export const MAX_UPLOAD_BYTES = 15 * 1024 * 1024;
export function fileIntakeError(file: Pick<FileFacts, 'size' | 'type' | 'name'>): string | null {
  if (file.size === 0) return 'This file is empty. Choose a saved JPG, PNG, or WebP image.';
  if (file.size > MAX_UPLOAD_BYTES) return 'This file exceeds the 15 MB editor limit. Export a smaller image or lower your scanner resolution, then upload again.';
  const extension = file.name.split('.').pop()?.toLowerCase();
  const allowed = ['jpg', 'jpeg', 'png', 'webp', 'jfif', 'bmp', 'gif', 'svg', 'heic', 'heif', 'tif', 'tiff'];
  if (!file.type.startsWith('image/') && !allowed.includes(extension || '')) return 'This file is not a supported image. Export the page as JPG, PNG, or WebP. Renaming a PDF or document does not convert it.';
  return null;
}
export function inspectSource(file: FileFacts, rule: Pick<ExamPreset, 'widthPx' | 'heightPx' | 'minKb' | 'maxKb' | 'format'>): UploadIssue[] {
  const issues: UploadIssue[] = [];
  if (file.width !== rule.widthPx || file.height !== rule.heightPx) issues.push({ code: 'pixels', message: `Uploaded: ${file.width} × ${file.height} px. Target: ${rule.widthPx} × ${rule.heightPx} px.`, fix: 'The editor resizes the export automatically. Check the crop so no words or part of your face are cut off.' });
  if (file.size < rule.minKb * 1024 || file.size > rule.maxKb * 1024) issues.push({ code: 'bytes', message: `Uploaded: ${(file.size / 1024).toFixed(2)} KB. Target: ${rule.minKb}–${rule.maxKb} KB.`, fix: 'The editor adjusts the export size. Check the downloaded file, not the original upload.' });
  const isJpeg = file.type === 'image/jpeg' || (!file.type && /\.(jpe?g|jfif)$/i.test(file.name));
  const isPng = file.type === 'image/png' || (!file.type && /\.png$/i.test(file.name));
  if (rule.format === 'PNG' ? !isPng : !isJpeg) issues.push({ code: 'format', message: `This preset uses ${rule.format}; the uploaded image uses another format.`, fix: `Choose ${rule.format} for export. The editor converts the image; changing the file extension is not enough.` });
  if (file.width < rule.widthPx || file.height < rule.heightPx) issues.push({ code: 'resolution', message: 'The original image is smaller than the target dimensions.', fix: 'Use a clearer, higher-resolution scan if the resized result looks blurry. Upscaling cannot recover missing detail.' });
  return issues;
}
export function inspectExport(result: Pick<ProcessedImageResult, 'width' | 'height' | 'sizeBytes' | 'format'>, rule: ExportRule): UploadIssue[] {
  const issues: UploadIssue[] = [];
  if (result.width !== rule.widthPx || result.height !== rule.heightPx) issues.push({ code: 'pixels', message: `Export is ${result.width} × ${result.height} px; the selected preset needs ${rule.widthPx} × ${rule.heightPx} px.`, fix: 'Restore the selected preset’s dimensions and process again.' });
  if (result.sizeBytes < rule.minKb * 1024 || result.sizeBytes > rule.maxKb * 1024) issues.push({ code: 'bytes', message: `Export is ${(result.sizeBytes / 1024).toFixed(2)} KB; the selected preset needs ${rule.minKb}–${rule.maxKb} KB.`, fix: 'Restore the preset’s KB bounds. For a file still too large, use JPG and simplify the background or crop.' });
  const normalized = result.format.toUpperCase().replace('JPEG', 'JPG');
  if (normalized !== rule.format.replace('JPEG', 'JPG')) issues.push({ code: 'format', message: `Export is ${result.format}; the selected preset needs ${rule.format}.`, fix: `Choose ${rule.format} as the output format and process again.` });
  return issues;
}
