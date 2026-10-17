import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const routes = ['background-remover', 'photo-background-remover', 'make-signature-background-white', 'blog/handwritten-signature-transparent-png-pdf-word', 'blog/resize-remove-bg-photo-kb'];
const sitemap = fs.readFileSync('dist/sitemap-0.xml', 'utf8');
const search = fs.readFileSync('dist/search-index.json', 'utf8');
const titles = new Set();
for (const route of routes) {
  const html = fs.readFileSync(`dist/${route}/index.html`, 'utf8');
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${route}: one H1`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `${route}: unique title`); titles.add(title);
  assert.ok(html.includes(`rel="canonical" href="https://signresize.in/${route}/"`), `${route}: canonical`);
  assert.ok(sitemap.includes(`https://signresize.in/${route}/`), `${route}: sitemap`);
  assert.ok(search.includes(`/${route}/`), `${route}: site search`);
  assert.ok(!/100% Passed|guaranteed acceptance/i.test(html), `${route}: no acceptance guarantee`);
  for (const [, href] of html.matchAll(/href="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    if (href.startsWith('//')) continue;
    const local = path.join('dist', href);
    assert.ok(fs.existsSync(local) || fs.existsSync(path.join(local, 'index.html')), `${route}: broken local link ${href}`);
  }
  for (const [, json] of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) JSON.parse(json);
}
const white = fs.readFileSync('dist/make-signature-background-white/index.html', 'utf8');
assert.ok(!white.includes('defaultCleanBackground'), 'Old unsupported property removed');
console.log('PASS: five pages, unique titles, canonical URLs, sitemap/search discovery, local links and structured data.');
