import fs from 'fs';

const testUrls = [
  'dist/mr/blog/neet-ug-2026-master-guide-postcard-photo-signature-rules/index.html',
  'dist/mr/blog/nicl-assistant-recruitment-2026-notification-syllabus-photo-signature-guide/index.html',
  'dist/hi/blog/ssc-gd-exam-date-2026-cbt-shift-timings-schedule-guide/index.html',
  'dist/mr/blog/ssc-gd-exam-date-2026-cbt-shift-timings-schedule-guide/index.html',
  'dist/mr/blog/teletalk-bangladesh-photo-signature-300x300-300x80-guide-2026/index.html'
];

for (const path of testUrls) {
  const exists = fs.existsSync(path);
  console.log(path, 'exists:', exists);
  if (exists) {
    const html = fs.readFileSync(path, 'utf8');
    const hasNoindex = html.includes('noindex');
    const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
    console.log(' -> hasNoindex:', hasNoindex, 'canonical:', canonicalMatch ? canonicalMatch[1] : 'none');
  }
}

// Check _redirects in dist
const redirects = fs.readFileSync('dist/_redirects', 'utf8');
const teletalkMr = redirects.includes('/mr/blog/teletalk-bangladesh-photo-signature-300x300-300x80-guide-2026');
const teletalkHi = redirects.includes('/hi/blog/teletalk-bangladesh-photo-signature-300x300-300x80-guide-2026');
console.log('dist/_redirects has Teletalk MR:', teletalkMr, 'HI:', teletalkHi);
