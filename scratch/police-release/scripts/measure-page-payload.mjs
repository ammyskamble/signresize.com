import fs from 'node:fs';
import path from 'node:path';
import { gzipSync } from 'node:zlib';
const results = {};
for (const route of ['', 'admit-card-photo-print-sheet', 'about']) {
  const html = fs.readFileSync(path.join('dist', route, 'index.html'), 'utf8');
  const roots = [...html.matchAll(/(?:src|component-url|renderer-url)="(\/_astro\/[^"?]+\.js)"/g)].map(m => m[1]);
  const files = new Set();
  function visit(url) {
    const file = path.join('dist', url);
    if (files.has(file) || !fs.existsSync(file)) return;
    files.add(file);
    const code = fs.readFileSync(file, 'utf8');
    for (const match of code.matchAll(/\bfrom\s*["']([^"']+)["']|\bimport\s*["']([^"']+)["']/g)) {
      const specifier = match[1] || match[2];
      if (specifier.startsWith('.')) visit(path.posix.join(path.posix.dirname(url), specifier));
    }
  }
  roots.forEach(visit);
  results['/' + (route ? route + '/' : '')] = {
    javascriptFiles: files.size,
    rawBytes: [...files].reduce((sum, file) => sum + fs.statSync(file).size, 0),
    gzipBytes: [...files].reduce((sum, file) => sum + gzipSync(fs.readFileSync(file)).length, 0),
    files: [...files].map(file => path.basename(file)),
  };
}
const output = process.argv[2];
if (output) fs.writeFileSync(output, JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
