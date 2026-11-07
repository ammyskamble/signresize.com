import fs from 'fs';
import path from 'path';

const slug = 'tnpsc-group-4-2-2026-master-guide-otr-photo-name-date-signature-rules';
const distDir = 'dist';

let totalLinks = 0;
const linkedFrom = [];

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      scanDir(full);
    } else if (file.endsWith('.html') && !file.includes('sitemap')) {
      const html = fs.readFileSync(full, 'utf8');
      if (html.includes(slug)) {
        // Exclude self links
        if (!full.includes(slug)) {
          totalLinks++;
          linkedFrom.push(full.replace('dist\\', '').replace('dist/', ''));
        }
      }
    }
  }
}

scanDir(distDir);
console.log(`Found ${totalLinks} pages linking to ${slug}:`);
console.log(linkedFrom.slice(0, 30));
