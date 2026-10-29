import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { build } from 'esbuild';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const bundle = await build({
  stdin: { contents: `export { ComplianceRejectionAudit } from './src/components/tool/ComplianceRejectionAudit'; export { ExportChecksDialog } from './src/components/tool/ImageRuleChecks'; export { ALL_COMBINED_PRESETS } from './src/data/examPresets';`, resolveDir: process.cwd() },
  bundle: true, platform: 'node', format: 'cjs', packages: 'external', write: false,
});
const module = { exports: {} };
new Function('require', 'module', 'exports', bundle.outputFiles[0].text)(createRequire(import.meta.url), module, module.exports);
const { ComplianceRejectionAudit, ExportChecksDialog, ALL_COMBINED_PRESETS } = module.exports;
for (const id of ['wbpsc-west-bengal', 'wbpsc-signature-138x59', 'wbpsc-photo', 'wbpsc-document', 'bpsc', 'bpsc-tre-hindi-sign', 'bpsc-tre-english-sign', 'indian-coast-guard', 'indian-coast-guard-photo', 'indian-coast-guard-document', 'indian-coast-guard-thumb-doc', 'rrb-ntpc', 'iit-jam', 'iit-jam-photo']) {
  const preset = ALL_COMBINED_PRESETS.find(p => p.id === id);
  assert.equal(preset.portalExactSpecsVerified, false);
  const result = { width: preset.widthPx, height: preset.heightPx, format: 'JPG', sizeBytes: preset.minKb * 1024, sizeKb: preset.minKb, withinTargetBounds: true };
  const render = processedResult => renderToStaticMarkup(React.createElement(ComplianceRejectionAudit, { preset, mode: preset.targetType, processedResult }));
  const pass = render(result);
  assert.ok(pass.includes('PRESET CHECKS PASSED'));
  assert.ok(pass.includes('do not certify portal acceptance'));
  assert.ok(!pass.includes('File matches official'));
  if (id === 'indian-coast-guard' || id === 'indian-coast-guard-photo') {
    const dialog = renderToStaticMarkup(React.createElement(ExportChecksDialog, { open: true, result, preset, rule: preset, mode: preset.targetType, busy: false, onClose() {}, onDownload() {}, onRestore() {} }));
    assert.ok(!dialog.includes('slate confirmation required'), '2027 final export dialog must not require a slate');
    const downloadButton = (dialog.match(/<button\b[^>]*>[\s\S]*?<\/button>/g) || []).find(button => button.includes('Download Verified File'));
    assert.ok(downloadButton && !/<button[^>]*\sdisabled(?:=|\s|>)/.test(downloadButton), 'valid 2027 export must be enabled');
    assert.equal(preset.minKb, 10);
    assert.equal(preset.maxKb, 100);
    assert.ok(!pass.includes('physical chalkboard'), '2027 preset must not require slate confirmation');
    assert.ok(render({ ...result, sizeBytes: 60 * 1024, sizeKb: 60 }).includes('PRESET CHECKS PASSED'), '60 KB must pass the corrected range');
    assert.ok(!render({ ...result, sizeBytes: 101 * 1024, sizeKb: 101 }).includes('PRESET CHECKS PASSED'), '101 KB must fail');
  }
  if (id === 'rrb-ntpc') {
    assert.equal(preset.minKb, 30);
    assert.equal(preset.maxKb, 49);
    assert.equal(preset.inkRequirement, 'Black Ink Only');
    assert.ok(preset.widthPx >= 140 && preset.heightPx >= 60);
    for (const size of [30, 40, 49]) assert.ok(render({ ...result, sizeKb: size, sizeBytes: size * 1024 }).includes('PRESET CHECKS PASSED'), `NTPC ${size} KB must pass`);
    for (const size of [29, 50, 70]) assert.ok(!render({ ...result, sizeKb: size, sizeBytes: size * 1024 }).includes('PRESET CHECKS PASSED'), `NTPC ${size} KB must fail`);
  }
  if (id === 'iit-jam' || id === 'iit-jam-photo') {
    const photo = id.endsWith('-photo');
    assert.equal(preset.minKb, 50);
    assert.equal(preset.maxKb, photo ? 200 : 150);
    assert.equal(preset.aspectRatio, preset.widthPx / preset.heightPx, 'JAM crop and output ratios must agree');
    assert.ok(preset.widthPx >= (photo ? 240 : 280) && preset.widthPx <= (photo ? 480 : 560));
    assert.ok(preset.heightPx >= (photo ? 320 : 80) && preset.heightPx <= (photo ? 640 : 160));
    for (const size of [50, preset.maxKb]) assert.ok(render({ ...result, sizeKb: size, sizeBytes: size * 1024 }).includes('PRESET CHECKS PASSED'), `${id}: ${size} KB should pass`);
    for (const size of [20, 49, preset.maxKb + 1]) assert.ok(!render({ ...result, sizeKb: size, sizeBytes: size * 1024 }).includes('PRESET CHECKS PASSED'), `${id}: ${size} KB should fail`);
  }
  const fail = render({ ...result, width: preset.widthPx + 1 });
  assert.ok(!fail.includes('PRESET CHECKS PASSED'), `${id}: wrong pixel size must not pass`);
  if (id === 'bpsc' || id.startsWith('bpsc-tre-')) {
    assert.ok(preset.maxKb * 1024 < 20000, `${id}: stay below 20 KB under either common KB convention`);
    const overLimit = render({ ...result, sizeBytes: 20 * 1024, sizeKb: 20 });
    assert.ok(!overLimit.includes('PRESET CHECKS PASSED'), `${id}: 20 KB must not pass an under-20 KB preset`);
  }
}
console.log('PASS: JAM 2027 size bounds and canvas ratios; NTPC 30-49 KB and black-ink preset; Coast Guard 10-100 KB bounds and no implicit slate requirement; WBPSC and BPSC exports distinguish preset checks from portal approval; wrong dimensions and BPSC 20 KB boundary do not pass.');
