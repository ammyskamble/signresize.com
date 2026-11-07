export const PHOTO_SHEET = { width: 1800, height: 1200, photoWidth: 413, photoHeight: 531, columns: 4, rows: 2, dpi: 300 };
export function photoSheetPositions() {
  const s = PHOTO_SHEET;
  const gapX = (s.width - s.columns * s.photoWidth) / (s.columns + 1);
  const gapY = (s.height - s.rows * s.photoHeight) / (s.rows + 1);
  return Array.from({ length: 8 }, (_, i) => ({
    x: Math.round(gapX + (i % s.columns) * (s.photoWidth + gapX)),
    y: Math.round(gapY + Math.floor(i / s.columns) * (s.photoHeight + gapY)),
    width: s.photoWidth, height: s.photoHeight,
  }));
}
export function coverCrop(width: number, height: number, targetRatio: number, zoom = 1, x = 50, y = 50) {
  const cropWidth = Math.min(width, height * targetRatio) / zoom;
  const cropHeight = cropWidth / targetRatio;
  return { x: (width - cropWidth) * x / 100, y: (height - cropHeight) * y / 100, width: cropWidth, height: cropHeight };
}
export function lightingSummary(rgba: Uint8ClampedArray, width: number) {
  let total = 0, left = 0, right = 0, leftCount = 0, rightCount = 0;
  for (let i = 0; i < rgba.length; i += 4) {
    const luminance = rgba[i] * .2126 + rgba[i + 1] * .7152 + rgba[i + 2] * .0722;
    total += luminance;
    if ((i / 4) % width < width / 2) { left += luminance; leftCount++; }
    else { right += luminance; rightCount++; }
  }
  const average = total / (rgba.length / 4);
  return { average: Math.round(average), uneven: Math.abs(left / leftCount - right / rightCount) > 45,
    label: average < 65 ? 'Too dark — add light in front of you' : average > 220 ? 'Very bright — reduce glare' : 'Lighting looks usable' };
}
