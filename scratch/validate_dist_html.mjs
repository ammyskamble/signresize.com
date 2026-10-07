// scratch/validate_dist_html.mjs
import fs from 'fs';

const files = [
  'dist/blog/ssc-cgl-2026-master-application-preparation-guide/index.html',
  'dist/blog/mp-police-constable-2026-vacancy-syllabus-physical-chart-salary/index.html'
];

for (const f of files) {
  if (!fs.existsSync(f)) {
    console.error('File not found:', f);
    continue;
  }
  const content = fs.readFileSync(f, 'utf8');
  console.log('--- ' + f + ' ---');
  console.log('Size:', content.length, 'bytes');
  console.log('Contains schema ld+json:', content.includes('application/ld+json'));
  console.log('Contains canonical:', content.includes('rel="canonical"'));
  console.log('Contains OpenGraph:', content.includes('property="og:title"'));
  console.log('Contains FAQ items:', content.includes('FAQ') || content.includes('faq'));
  console.log('Contains broken placeholders (undefined/NaN):', content.includes('undefined') || content.includes('NaN'));
}
