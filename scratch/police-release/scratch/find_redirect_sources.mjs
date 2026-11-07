import fs from 'fs';
import path from 'path';

function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        getFiles(filePath, fileList);
      }
    } else if (file.endsWith('.astro') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.mjs')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = getFiles('src');
console.log('Total files checked in src:', files.length);

const nonSlashLinks = [];
// Match href="/something" or href='/something' where something has no dot, no trailing slash, no query/hash
const hrefRegex = /href=["'](\/[a-zA-Z0-9_\-]+)["']/g;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    const url = match[1];
    if (url !== '/' && !url.includes('.')) {
      nonSlashLinks.push({ file: path.relative('.', file), url });
    }
  }
}

console.log('Total non-trailing-slash internal hrefs found:', nonSlashLinks.length);
const counts = {};
for (const item of nonSlashLinks) {
  counts[item.url] = (counts[item.url] || 0) + 1;
}
console.log(Object.entries(counts).sort((a,b) => b[1] - a[1]));

// Also check for links matching any of the GSC URLs
const gscList = [
  '/gate-signature-resize',
  '/clat-signature-resize',
  '/ugc-net-signature-resize',
  '/blog',
  '/ssc-signature-resize',
  '/thumb-impression-resize',
  '/rrb-signature-resize',
  '/agniveer-signature-resize',
  '/tnpsc-signature-resize',
  '/ssc-general',
  '/hi',
  '/bpsc-signature-resize',
  '/signature-creator',
  '/wbpsc-signature-resize',
  '/rbi-signature-resize',
  '/privacy',
  '/hpsc-ppsc-signature-resize',
  '/state-tet-signature-resize',
  '/kpsc-signature-resize',
  '/government-jobs',
  '/document-resizer',
  '/ibps-signature-resize',
  '/cat-signature-resize',
  '/appsc-tspsc-signature-resize',
  '/mr',
  '/pan-card-signature-resize',
  '/terms',
  '/gpsc-signature-resize',
  '/ctet-signature-resize',
  '/indian-coast-guard-signature-resize',
  '/passport-seva-signature-resize',
  '/opsc-signature-resize',
  '/photo-resizer',
  '/disclaimer',
  '/xat-signature-resize',
  '/afcat-signature-resize',
  '/sebi-nabard-signature-resize',
  '/upsc-signature-resize',
  '/uppsc-signature-resize',
  '/isro-drdo-signature-resize',
  '/capf-signature-resize',
  '/pan-card-photo-resize',
  '/cmat-nmat-signature-resize',
  '/rpsc-signature-resize',
  '/lsat-india-signature-resize',
  '/about',
  '/ailet-signature-resize',
  '/contact',
  '/sarathi-dl-signature-resize',
  '/compress-image-to-kb',
  '/nta-neet-jee-signature-resize',
  '/snap-signature-resize',
  '/signature-resizer',
  '/signature-creator'
];

console.log('\n--- Where are GSC non-slash URLs found in codebase? ---');
for (const target of gscList) {
  const matches = nonSlashLinks.filter(l => l.url === target);
  if (matches.length > 0) {
    console.log(`Target: ${target} (count: ${matches.length})`);
    const files = [...new Set(matches.map(m => m.file))];
    files.forEach(f => console.log('   in ' + f));
  }
}
