import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { build } from 'esbuild';

const bundle = await build({
  stdin: {
    contents: `export { EXAM_PAGES_DATA } from './src/data/examPagesData'; export { ALL_COMBINED_PRESETS, SIGNATURE_PRESETS, PHOTO_PRESETS, DOCUMENT_PRESETS } from './src/data/examPresets';`,
    resolveDir: process.cwd(),
  },
  bundle: true, platform: 'node', format: 'cjs', write: false,
});
const module = { exports: {} };
new Function('require', 'module', 'exports', bundle.outputFiles[0].text)(createRequire(import.meta.url), module, module.exports);
const { EXAM_PAGES_DATA, ALL_COMBINED_PRESETS, SIGNATURE_PRESETS, PHOTO_PRESETS, DOCUMENT_PRESETS } = module.exports;
assert.equal(new Set(ALL_COMBINED_PRESETS.map(p => p.id)).size, ALL_COMBINED_PRESETS.length, 'preset IDs must be unique');
for (const preset of ALL_COMBINED_PRESETS) {
  for (const key of ['widthPx', 'heightPx', 'minKb', 'maxKb', 'recommendedKb']) assert.ok(Number.isFinite(preset[key]), `${preset.id}: ${key} must be finite`);
  assert.ok(preset.widthPx > 0 && preset.heightPx > 0, `${preset.id}: dimensions must be positive`);
  assert.ok(preset.minKb >= 0 && preset.minKb <= preset.recommendedKb && preset.recommendedKb <= preset.maxKb, `${preset.id}: invalid size bounds`);
  assert.ok(Math.abs(preset.aspectRatio - preset.widthPx / preset.heightPx) < 0.03, `${preset.id}: incorrect aspect ratio`);
}
assert.ok(SIGNATURE_PRESETS.every(p => p.targetType !== 'photo' && p.targetType !== 'document'), 'photo/document presets must not appear as signature presets');
assert.ok(PHOTO_PRESETS.every(p => p.targetType === 'photo'), 'photo presets must use photo mode');
assert.ok(DOCUMENT_PRESETS.every(p => p.targetType === 'document'), 'document presets must use document mode');
for (const page of EXAM_PAGES_DATA) {
  const preset = ALL_COMBINED_PRESETS.find(p => p.id === page.presetId);
  assert.ok(preset, `${page.slug}: missing preset ${page.presetId}`);
  for (const key of ['widthPx', 'heightPx', 'minKb', 'maxKb']) assert.equal(page[key], preset[key], `${page.slug}: ${key} differs from its preset`);
}
const sbi = PHOTO_PRESETS.find(p => p.id === 'sbi-clerk-photo');
assert.deepEqual([sbi.widthPx, sbi.heightPx, sbi.minKb, sbi.maxKb], [200, 230, 20, 50]);
console.log(`PASS: ${ALL_COMBINED_PRESETS.length} unique presets and ${EXAM_PAGES_DATA.length} page/preset mappings`);
