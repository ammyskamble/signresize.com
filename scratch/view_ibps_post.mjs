import fs from 'fs';

const content = fs.readFileSync('src/data/blogPostsData.ts', 'utf8');
const slug = 'ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines';
const startIdx = content.indexOf(`"slug": "${slug}"`);
const endIdx = content.indexOf('"slug":', startIdx + 30);
const block = content.substring(startIdx, endIdx);
console.log(block);
