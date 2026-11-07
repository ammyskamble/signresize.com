import fs from 'fs';
const text = fs.readFileSync('src/data/blogPostsData.ts', 'utf8');
// Split at batch marker
const splitMarker = '// ─── BATCH: Top-10 FAQ Posts for all 7 Live Exams';
const part1 = text.split(splitMarker)[0];
console.log('Part 1 length:', part1.length);
fs.writeFileSync('scratch/part1_existing.ts', part1);
