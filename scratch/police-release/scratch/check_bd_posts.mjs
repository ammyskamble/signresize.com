import fs from 'fs';

const content = fs.readFileSync('src/data/blogPostsData.ts', 'utf8');

const p46Start = content.indexOf('slug: "bpsc-teletalk-bangladesh-photo-signature-resize-guide-2026"');
const p47Start = content.indexOf('slug: "bcs-exam-bangladesh-complete-guide-2026-syllabus-preparation-photo-upload"');

console.log('--- POST 46 (BPSC Teletalk Guide) ---');
const p46Text = content.substring(p46Start, p47Start);
const p46Hrefs = [...p46Text.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]);
console.log('P46 Hrefs:', p46Hrefs);

console.log('\n--- POST 47 (BCS Exam Complete Guide) ---');
const p47Text = content.substring(p47Start);
const p47Hrefs = [...p47Text.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]);
console.log('P47 Hrefs:', p47Hrefs);
