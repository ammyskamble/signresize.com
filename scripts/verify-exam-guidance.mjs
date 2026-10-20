import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { build } from 'esbuild';

const bundled = await build({
  stdin: {
    contents: `export { EXAM_PAGES_DATA } from './src/data/examPagesData.ts';
      export { ALL_COMBINED_PRESETS } from './src/data/examPresets.ts';
      export { EXAM_GUIDANCE } from './src/data/examGuidance.ts';
      export { getComplianceAudit } from './src/utils/complianceRules.ts';`,
    resolveDir: process.cwd(),
  },
  bundle: true, platform: 'node', format: 'esm', write: false,
});
const { EXAM_PAGES_DATA, ALL_COMBINED_PRESETS, EXAM_GUIDANCE, getComplianceAudit } =
  await import(`data:text/javascript;base64,${Buffer.from(bundled.outputFiles[0].text).toString('base64')}`);
const titles = new Set();
for (const slug of Object.keys(EXAM_GUIDANCE)) {
  const page = EXAM_PAGES_DATA.find(page => page.slug === slug);
  assert.ok(page, `Missing page: ${slug}`);
  assert.ok(!titles.has(page.pageTitle), `Duplicate title: ${slug}`);
  titles.add(page.pageTitle);
  const preset = ALL_COMBINED_PRESETS.find(preset => preset.id === page.presetId);
  assert.ok(preset, `Missing tool preset: ${slug}`);
  for (const field of ['widthPx', 'heightPx', 'minKb', 'maxKb']) {
    assert.equal(page[field], preset[field], `${slug}: page/tool ${field} mismatch`);
  }
  assert.equal(preset.portalExactSpecsVerified, false, `${slug}: must not imply portal approval`);
  const audit = getComplianceAudit(preset, preset.targetType || 'signature');
  assert.equal(audit.badge, 'NOTICE CHECK REQUIRED');
  assert.equal(audit.officialUrl, preset.sourceUrl);
  assert.ok(!JSON.stringify(audit).includes('100% disqualification'));
  assert.ok(page.sources.length && page.verifiedOn, `${slug}: missing evidence metadata`);
  assert.ok(!/official.*140|140.*official|free ssc.gov.in tool/i.test(page.metaDescription));
  for (const link of EXAM_GUIDANCE[slug].links) {
    assert.ok(existsSync(`dist${link.href}index.html`), `Broken internal link: ${link.href}`);
  }
  const html = readFileSync(`dist/${slug}/index.html`, 'utf8');
  assert.ok(html.includes(`href="https://signresize.in/${slug}/"`), `${slug}: missing self canonical`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${slug}: H1 count`);
  assert.ok(html.indexOf('id="exam-requirements-heading"') < html.indexOf('id="exam-tool"'), `${slug}: requirements must precede tool`);
  assert.ok(!html.includes('SSC CGL 2026 Document Matrix'), `${slug}: obsolete template`);
  for (const source of page.sources) assert.ok(html.includes(source.url.replaceAll('&', '&amp;')));
}
assert.equal(ALL_COMBINED_PRESETS.find(p => p.id === 'ctet-exam').minKb, 3);
const archive = readFileSync('dist/ctet-photo-signature-size-2022/index.html', 'utf8');
assert.ok(archive.includes('Historical reference'));
assert.ok(archive.includes('2022103152.pdf'));
assert.ok(archive.includes('3–30 KB'));
assert.ok(readFileSync('dist/sitemap-0.xml', 'utf8').includes('/ctet-photo-signature-size-2022/'));
for (const slug of ['osssc-photo-resizer', 'osssc-signature-resize', 'upsssc-pet-signature-resize', 'bssc-signature-resize']) {
  assert.ok(!readFileSync(`dist/${slug}/index.html`, 'utf8').includes('SSC CGL 2026 Document Matrix'), `${slug}: unrelated SSC content`);
}
console.log(`PASS: ${titles.size} source-backed pages, page/preset consistency, archive, sitemap and unrelated-exam regression checks.`);
