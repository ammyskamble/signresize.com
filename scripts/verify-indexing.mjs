import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const origin = 'https://signresize.in';
const rules = fs.readFileSync('public/_redirects', 'utf8').split(/\r?\n/)
  .map(line => line.trim().split(/\s+/))
  .filter(([source, , status]) => source?.startsWith('/') && /^30[1278]$/.test(status));
const exactRules = new Map(rules.filter(([source]) => !source.includes('*')).map(([source, target]) => [source, target]));
const htmlPath = pathname => path.join('dist', pathname, 'index.html');
const readPage = pathname => fs.readFileSync(htmlPath(pathname), 'utf8');
const canonical = html => html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
const noindex = html => /<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(html);

for (const [source, target] of rules) {
  assert.notEqual(source, target, `Self redirect: ${source}`);
  assert.ok(!exactRules.has(target), `Redirect chain: ${source} -> ${target}`);
  assert.ok(fs.existsSync(htmlPath(target)), `Missing redirect destination: ${source} -> ${target}`);
}

const xml = fs.readFileSync('dist/sitemap-0.xml', 'utf8');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.ok(urls.length > 0, 'Sitemap must not be empty');
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');
const brokenLinks = new Map();
for (const url of urls) {
  const pathname = new URL(url).pathname;
  assert.ok(!exactRules.has(pathname), `Redirect in sitemap: ${url}`);
  const html = readPage(pathname);
  assert.ok(!noindex(html), `Noindex in sitemap: ${url}`);
  assert.equal(canonical(html), url, `Non-canonical sitemap URL: ${url}`);
  assert.ok(!/http-equiv="refresh"/i.test(html), `HTML redirect in sitemap: ${url}`);
  for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    let link;
    try { link = new URL(href.replaceAll('&amp;', '&'), url); } catch { continue; }
    if (link.origin !== origin || !link.pathname.endsWith('/')) continue;
    if (fs.existsSync(htmlPath(link.pathname)) || exactRules.has(link.pathname)) continue;
    const pages = brokenLinks.get(link.pathname) || [];
    if (pages.length < 3) pages.push(pathname);
    brokenLinks.set(link.pathname, pages);
  }
}
assert.equal(brokenLinks.size, 0, `Broken internal page links: ${JSON.stringify([...brokenLinks])}`);
assert.equal(fs.readFileSync('dist/sitemap.xml', 'utf8'), xml, 'Legacy sitemap must match');
console.log(`Indexing checks passed: ${urls.length} sitemap URLs, ${rules.length} redirect rules, internal page links.`);
