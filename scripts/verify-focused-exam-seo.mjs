import assert from 'node:assert/strict';
import fs from 'node:fs';
import { build } from 'esbuild';

const result = await build({
  stdin: { contents: "export { EXAM_PAGES_DATA } from './src/data/examPagesData'; export { EXAM_PRESETS } from './src/data/examPresets'; export { compressCanvasToTargetSize } from './src/utils/imageProcessor';", resolveDir: process.cwd() },
  bundle: true, write: false, platform: 'node', format: 'esm',
});
const { EXAM_PAGES_DATA: pages, EXAM_PRESETS: presets, compressCanvasToTargetSize: compress } = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
assert.equal(presets[0].id, 'ssc-general', 'Preserve the homepage default preset');
assert.equal(new Set(pages.map(p => p.slug)).size, pages.length, 'Unique page URLs');
assert.equal(new Set(presets.map(p => p.id)).size, presets.length, 'Unique presets');
const sitemap = fs.readFileSync('dist/sitemap-0.xml', 'utf8');
const search = JSON.parse(fs.readFileSync('dist/search-index.json', 'utf8'));
const rows = Array.isArray(search) ? search : Object.values(search).flat();
for (const slug of ['sbi-signature-resize', 'iit-jam-signature-resize', 'sbi-po-signature-resize', 'sbi-clerk-signature-resize', 'ibps-signature-resize', 'gate-signature-resize']) {
  const page = pages.find(p => p.slug === slug);
  const preset = presets.find(p => p.id === page.presetId);
  for (const field of ['widthPx', 'heightPx', 'minKb', 'maxKb']) assert.equal(page[field], preset[field], `${slug}: ${field} matches actual preset`);
  const html = fs.readFileSync(`dist/${slug}/index.html`, 'utf8');
  assert.match(html, new RegExp(`rel="canonical" href="https://signresize.in/${slug}/"`));
  assert.match(html, /name="robots" content="index, follow/);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, 'One H1 per page');
  assert.ok(sitemap.includes(`https://signresize.in/${slug}/`), `${slug}: sitemap`);
  assert.ok(rows.some(r => r.url === `/${slug}/`), `${slug}: site search`);
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
  if (page.sources) assert.ok(html.includes(page.sources[0].url.replaceAll('&', '&amp;')), `${slug}: source link`);
  for (const [, href] of html.matchAll(/href="(\/[^"?#]*\/)"/g)) {
    assert.ok(fs.existsSync(`dist${href}index.html`), `${slug}: generated internal link ${href}`);
  }
  for (const target of page.relatedTools || []) assert.ok(fs.existsSync(`dist/${target}/index.html`), `${slug}: related link ${target}`);
}
const home = fs.readFileSync('dist/index.html', 'utf8');
for (const slug of ['sbi-signature-resize', 'iit-jam-signature-resize']) assert.ok(home.includes(`href="/${slug}/"`), `${slug}: crawlable homepage link`);
const jam = pages.find(p => p.slug === 'iit-jam-signature-resize');
assert.equal(jam.widthPx / jam.heightPx, 3.5);
assert.equal(jam.minKb, 50);
assert.equal(jam.maxKb, 150);

// A mock encoder exercises size and dimension decisions without changing any browser.
function encodedCanvas(width, height, bytes) {
  return { width, height, toBlob(callback, type) {
    const jpeg = new Uint8Array(bytes); jpeg.set([0xff, 0xd8]); jpeg.set([0xff, 0xd9], bytes - 2);
    callback(new Blob([jpeg], { type }));
  } };
}
let output = await compress(encodedCanvas(560, 160, 1800), 'image/jpeg', 50, 150, 100, true);
assert.equal(output.width, 560); assert.equal(output.height, 160);
assert.ok(output.sizeBytes >= 50 * 1024 && output.sizeBytes <= 150 * 1024);
assert.ok(output.withinTargetBounds, 'JAM minimum padding retains valid size bounds');
const padded = new Uint8Array(await output.blob.arrayBuffer());
assert.deepEqual([...padded.slice(0, 4)], [0xff, 0xd8, 0xff, 0xfe]);
assert.deepEqual([...padded.slice(-2)], [0xff, 0xd9]);
URL.revokeObjectURL(output.dataUrl);
output = await compress(encodedCanvas(140, 60, 20 * 1024 + 1), 'image/jpeg', 10, 20, 15, true);
assert.equal(output.withinTargetBounds, false, 'A one-byte oversize file must fail even when rounded KB looks valid');
assert.equal(output.width, 140); assert.equal(output.height, 60);
URL.revokeObjectURL(output.dataUrl);
output = await compress(encodedCanvas(2000, 1000, 1000), 'image/jpeg', 10, 20, 15, true);
assert.equal(output.width, 2000); assert.equal(output.height, 1000, 'Signature dimensions are not silently reduced');
URL.revokeObjectURL(output.dataUrl);
console.log('PASS: page/preset consistency, canonical/indexing directives, sitemap, search, source/related links, homepage default, JPEG minimum padding, exact byte limits, and preserved dimensions.');
