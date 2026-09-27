import fs from 'fs';
import path from 'path';

const distDir = './dist';

// Collect all HTML files
function getHtmlFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(getHtmlFiles(full));
    } else if (item.name.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

const htmlFiles = getHtmlFiles(distDir);
console.log(`Analyzing ${htmlFiles.length} HTML files in dist/ for inlink distribution...`);

// Inlink map: url -> count
const inlinks = {};

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  // Match href="..."
  const matches = [...content.matchAll(/href=["'](\/[^"']*)["']/g)].map(m => m[1]);
  for (const rawHref of matches) {
    const clean = rawHref.split('#')[0].split('?')[0];
    if (clean.startsWith('/blog/')) {
      inlinks[clean] = (inlinks[clean] || 0) + 1;
    }
  }
}

console.log('\n=== BLOG POST INLINKS IN GENERATED DIST ===');
const sorted = Object.entries(inlinks).sort((a, b) => b[1] - a[1]);
for (const [url, count] of sorted) {
  console.log(`${url.padEnd(75)}: ${count} inlinks`);
}
