import assert from 'node:assert/strict';
import fs from 'node:fs';
import { build } from 'esbuild';
const result = await build({ stdin: { contents: "export * from './src/utils/examDayTools'; export * from './src/utils/applicationWindows'; export { createPdfFromJpegBlob } from './src/utils/pdfGenerator';", resolveDir: process.cwd() }, bundle: true, write: false, platform: 'node', format: 'esm' });
const { PHOTO_SHEET: sheet, photoSheetPositions, coverCrop, lightingSummary, activeApplications, daysUntilClose, createPdfFromJpegBlob } = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
const positions = photoSheetPositions();
assert.equal(positions.length, 8);
for (const p of positions) {
  assert.ok(p.x > 0 && p.y > 0 && p.x + p.width < sheet.width && p.y + p.height < sheet.height);
  assert.ok(Math.abs(p.width / 300 * 25.4 - 35) < .05);
  assert.ok(Math.abs(p.height / 300 * 25.4 - 45) < .05);
}
for (const [i, a] of positions.entries()) for (const b of positions.slice(i + 1)) {
  assert.ok(a.x + a.width <= b.x || b.x + b.width <= a.x || a.y + a.height <= b.y || b.y + b.height <= a.y, 'Photos must not overlap');
}
for (const [w, h] of [[1200, 600], [350, 450], [600, 1800]]) for (const zoom of [1, 2.5]) for (const offset of [0, 50, 100]) {
  const c = coverCrop(w, h, 35 / 45, zoom, offset, offset);
  assert.ok(c.x >= 0 && c.y >= 0 && c.x + c.width <= w + .001 && c.y + c.height <= h + .001);
  assert.ok(Math.abs(c.width / c.height - 35 / 45) < .00001);
}
const pdf = await createPdfFromJpegBlob(new Blob([new Uint8Array([255, 216, 255, 217])], { type: 'image/jpeg' }), 1800, 1200, { pageSize: '4x6' });
assert.match(await pdf.text(), /\/MediaBox \[0 0 432\.00 288\.00\]/);
const item = { id: 'test', title: 'Test', label: 'Test', opensOn: '2026-10-15', closesOn: '2026-10-21', closingTime: '17:30:00', toolUrl: '/', sourceUrl: 'https://example.com', verifiedOn: '2026-10-16' };
assert.equal(activeApplications([item], new Date('2026-10-14T18:29:00Z')).length, 0);
assert.equal(activeApplications([item], new Date('2026-10-14T18:30:00Z')).length, 1);
assert.equal(activeApplications([item], new Date('2026-10-21T11:59:59Z')).length, 1);
assert.equal(activeApplications([item], new Date('2026-10-21T12:00:00Z')).length, 0);
assert.equal(daysUntilClose(item, new Date('2026-10-15T18:30:00Z')), 5);
assert.equal(activeApplications([{ ...item, closingTime: null }], new Date('2026-10-21T18:30:00Z')).length, 0);
assert.match(lightingSummary(new Uint8ClampedArray(64 * 64 * 4), 64).label, /Too dark/);
for (const slug of ['photo-with-name-and-date-maker', 'admit-card-photo-print-sheet', 'handwritten-declaration-resizer', 'live-webcam-photo-checker', 'rrb-ntpc-undergraduate-document-guide']) {
  const html = fs.readFileSync(`dist/${slug}/index.html`, 'utf8');
  assert.match(html, new RegExp(`rel="canonical" href="https://signresize.in/${slug}/"`));
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
}
console.log('PASS: 8-photo physical dimensions, no overlap, crop bounds, 6×4 PDF size, IST deadline boundaries, lighting helper, and five generated tool routes.');
