import fs from 'fs';

const hiHtml = fs.readFileSync('dist/hi/blog/tnpsc-group-4-2-2026-master-guide-otr-photo-name-date-signature-rules/index.html', 'utf8');
const mrHtml = fs.readFileSync('dist/mr/blog/tnpsc-group-4-2-2026-master-guide-otr-photo-name-date-signature-rules/index.html', 'utf8');

// Check Devanagari character counts
const hiDevanagari = (hiHtml.match(/[\u0900-\u097F]/g) || []).length;
const mrDevanagari = (mrHtml.match(/[\u0900-\u097F]/g) || []).length;

console.log('HI Devanagari characters:', hiDevanagari);
console.log('MR Devanagari characters:', mrDevanagari);

console.log('\n--- HI Sample Content ---');
console.log(hiHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(1000, 2000));
