import assert from 'node:assert/strict';
import fs from 'node:fs';
import { build } from 'esbuild';
const result = await build({ stdin: { contents: "export * from './src/utils/uploadValidation'; export { EXAM_PRESETS, PHOTO_PRESETS, DOCUMENT_PRESETS } from './src/data/examPresets';", resolveDir: process.cwd() }, bundle: true, write: false, platform: 'node', format: 'esm' });
const { fileIntakeError, MAX_UPLOAD_BYTES, inspectSource, inspectExport, inspectBackground, EXAM_PRESETS, PHOTO_PRESETS, DOCUMENT_PRESETS } = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
const solidPixels = (r, g, b, a = 255) => Uint8ClampedArray.from(Array.from({ length: 16 * 16 }, () => [r, g, b, a]).flat());
const customRule = { widthPx: 280, heightPx: 120, minKb: 20, maxKb: 40, format: 'JPEG' };
const customOutput = { width: 280, height: 120, sizeBytes: 30 * 1024, format: 'JPG' };
assert.equal(inspectExport(customOutput, customRule).length, 0, 'Custom exports must match the active settings');
assert.ok(inspectExport(customOutput, EXAM_PRESETS.find(p => p.id === 'ssc-general')).length > 0, 'Custom export must retain an exam mismatch warning');
assert.ok(inspectExport({ ...customOutput, width: 140 }, customRule).some(i => i.code === 'pixels'), 'Stale results must not pass new settings');
assert.equal(inspectBackground(solidPixels(255, 255, 255), 16, 16, 'plain white background').length, 0);
assert.equal(inspectBackground(solidPixels(40, 120, 210), 16, 16, 'plain white background')[0].code, 'background');
assert.equal(inspectBackground(solidPixels(220, 220, 220), 16, 16, 'light gray background').length, 0);
assert.equal(inspectBackground(solidPixels(220, 220, 220), 16, 16, 'white background').length, 1);
assert.equal(inspectBackground(solidPixels(255, 255, 255, 0), 16, 16, 'white paper').length, 1);
assert.equal(inspectBackground(solidPixels(0, 0, 0), 16, 16, 'Upload a clear certificate').length, 0, 'Do not invent background rules');
for (const preset of [...EXAM_PRESETS, ...PHOTO_PRESETS, ...DOCUMENT_PRESETS]) {
  assert.equal(inspectExport({ width: preset.widthPx, height: preset.heightPx, sizeBytes: preset.minKb * 1024, format: preset.format }, preset).length, 0, preset.id);
}
assert.match(fileIntakeError({ name: 'scan.jpg', type: 'image/jpeg', size: 0 }), /empty/);
assert.match(fileIntakeError({ name: 'scan.jpg', type: 'image/jpeg', size: MAX_UPLOAD_BYTES + 1 }), /15 MB/);
assert.equal(fileIntakeError({ name: 'scan.jpg', type: 'image/jpeg', size: MAX_UPLOAD_BYTES }), null);
assert.match(fileIntakeError({ name: 'scan.pdf', type: 'application/pdf', size: 100 }), /not a supported image/);
assert.equal(fileIntakeError({ name: 'scan.JPG', type: '', size: 100 }), null);
for (const rule of [EXAM_PRESETS.find(p => p.id === 'ssc-general'), PHOTO_PRESETS[0], DOCUMENT_PRESETS.find(p => p.id === 'handwritten-declaration')]) {
  const source = { name: 'scan.png', type: 'image/png', width: rule.widthPx * 2, height: rule.heightPx * 2, size: (rule.maxKb + 1) * 1024 };
  assert.deepEqual(inspectSource(source, rule).map(i => i.code), ['pixels', 'bytes', 'format']);
  const output = { width: rule.widthPx, height: rule.heightPx, sizeBytes: rule.minKb * 1024, format: 'JPG' };
  assert.equal(inspectExport(output, rule).length, 0, 'Exact minimum bytes are allowed');
  assert.equal(inspectExport({ ...output, sizeBytes: rule.maxKb * 1024 }, rule).length, 0, 'Exact maximum bytes are allowed');
  assert.ok(inspectExport({ ...output, sizeBytes: rule.maxKb * 1024 + 1 }, rule).some(i => i.code === 'bytes'), 'One byte over the limit must fail even if rounded KB looks valid');
  assert.ok(inspectExport({ ...output, sizeBytes: rule.minKb * 1024 - 1 }, rule).some(i => i.code === 'bytes'));
  assert.ok(inspectExport({ ...output, width: rule.widthPx - 1 }, rule).some(i => i.code === 'pixels'));
  assert.ok(inspectExport({ ...output, format: 'WebP' }, rule).some(i => i.code === 'format'));
}
const home = fs.readFileSync('dist/index.html', 'utf8');
assert.ok(home.indexOf('Upload image') < home.indexOf('Application preparation'), 'Primary upload must precede promotional cards');
assert.ok(home.indexOf('Upload image') < home.indexOf('id="exam-day-toolkit"'), 'Primary upload must precede secondary tools');
assert.equal((home.match(/<h1\b/g) || []).length, 1, 'One primary heading');
console.log('PASS: rejected intake files, exact byte boundaries, signature/photo/document preset feedback, export dimensions and formats, and tools-first homepage.');
