import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

function* htmlFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(file);
    else if (entry.name.endsWith('.html')) yield file;
  }
}
let pages = 0;
for (const file of htmlFiles('dist')) {
  const html = fs.readFileSync(file, 'utf8');
  if (!html.includes('id="tool-workspace"')) continue;
  if (html.includes('id="tool-workspace"') && html.includes('compact-studio')) {
    // The separate rail-based preview retains its own navigation.
    if (file.includes('studio-preview') && !file.includes('live-layout-preview')) continue;
  }
  assert.equal((html.match(/aria-label="Studio image type"/g) || []).length, 1, `Missing or duplicated mode tabs: ${file}`);
  const group = html.match(/aria-label="Studio image type"[^>]*>([\s\S]*?)<\/div>/)?.[1];
  assert.ok(group, file);
  assert.equal((group.match(/<button\b/g) || []).length, 3, `Three modes required: ${file}`);
  assert.equal((group.match(/aria-pressed="true"/g) || []).length, 1, `One selected mode required: ${file}`);
  assert.equal((html.match(/id="exam-preset-selector"/g) || []).length, 1, `Duplicate preset selectors: ${file}`);
  assert.equal((html.match(/id="crop-workspace"/g) || []).length, 1, file);
  assert.ok(html.includes('id="download-btn"'), file);
  pages++;
}
const read = slug => fs.readFileSync(path.join('dist', slug, 'index.html'), 'utf8');
for (const [slug, label] of [['photo-resizer', 'Photo'], ['document-resizer', 'Documents'], ['make-signature-background-white', 'Signature'], ['hi', 'हस्ताक्षर'], ['mr', 'स्वाक्षरी']]) {
  const html = read(slug);
  assert.match(html, new RegExp(`aria-pressed="true"[^>]*>[\\s\\S]*?<span>${label}</span>`), `Wrong initial mode/language: ${slug}`);
}
assert.ok(read('photo-with-name-and-date-maker').includes('id="candidate-name-input"'), 'Name/date controls must remain available');
assert.ok(read('handwritten-declaration-resizer').includes('High-Clarity Document Text Booster'), 'Declaration keeps document tools');
assert.ok(pages > 40, `Expected the full resizer route set, checked ${pages}`);
console.log(`PASS: integrated mode tabs, unique selectors, canvas and download controls on ${pages} resizer pages; initial modes, Hindi/Marathi labels, and specialised tools retained.`);
