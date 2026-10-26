import fs from 'fs';

function inspectPage(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  console.log('=== FILE:', filePath, '===');
  console.log('Size:', html.length, 'bytes');

  const canonMatch = html.match(/rel=["']canonical["']\s+href=["']([^"']+)["']/i) || html.match(/href=["']([^"']+)["']\s+rel=["']canonical["']/i);
  console.log('Canonical:', canonMatch ? canonMatch[1] : 'NONE');

  const hreflangs = [...html.matchAll(/rel=["']alternate["']\s+hreflang=["']([^"']+)["']\s+href=["']([^"']+)["']/gi)];
  console.log('Hreflangs:', hreflangs.map(m => `${m[1]} -> ${m[2]}`));

  const robotsMatch = html.match(/name=["']robots["']\s+content=["']([^"']+)["']/i);
  console.log('Robots meta:', robotsMatch ? robotsMatch[1] : 'NONE');

  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  console.log('Title:', titleMatch ? titleMatch[1] : 'NONE');
}

inspectPage('dist/blog/tnpsc-group-4-2-2026-master-guide-otr-photo-name-date-signature-rules/index.html');
inspectPage('dist/hi/blog/tnpsc-group-4-2-2026-master-guide-otr-photo-name-date-signature-rules/index.html');
inspectPage('dist/mr/blog/tnpsc-group-4-2-2026-master-guide-otr-photo-name-date-signature-rules/index.html');
