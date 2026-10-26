import fs from 'fs';

const html = fs.readFileSync('dist/index.html', 'utf8');

// Find major blocks
console.log('Total HTML length:', html.length);

const sections = [
  'head',
  'header',
  'main',
  'footer',
  'script'
];

// Check size of each component in HTML
const checks = [
  { name: 'Inline CSS (<style>)', match: html.match(/<style[^>]*>[\s\S]*?<\/style>/gi) },
  { name: 'JSON-LD Schemas', match: html.match(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi) },
  { name: 'Header (<header>)', match: html.match(/<header[^>]*>[\s\S]*?<\/header>/gi) },
  { name: 'Footer (<footer>)', match: html.match(/<footer[^>]*>[\s\S]*?<\/footer>/gi) },
  { name: 'SignatureTool container', match: html.match(/<astro-island[^>]*>[\s\S]*?<\/astro-island>/gi) },
  { name: 'Exam Directory', match: html.match(/id="exam-directory"[\s\S]*?(?=<section|<footer)/i) },
  { name: 'Exam Specs Table', match: html.match(/id="exam-specs"[\s\S]*?(?=<section|<footer)/i) },
  { name: 'Application Preparation Cards', match: html.match(/home-preparation[\s\S]*?<\/details>/i) },
];

for (const c of checks) {
  if (c.match) {
    const totalLen = c.match.reduce((acc, m) => acc + m.length, 0);
    console.log(`${c.name}: ${(totalLen / 1024).toFixed(1)} KB`);
  } else {
    console.log(`${c.name}: not matched directly`);
  }
}
