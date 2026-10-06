import fs from 'fs';

const content = fs.readFileSync('src/data/blogPostsData.ts', 'utf8');
const lines = content.split('\n');

const postStartLines = [];

lines.forEach((line, idx) => {
  if (line.match(/^\s*{\s*id:\s*["']/)) {
    const slugLine = lines.slice(idx, idx + 10).find(l => l.includes('slug:'));
    const slug = slugLine ? slugLine.trim() : 'NO SLUG';
    const countryLine = lines.slice(idx, idx + 15).find(l => l.includes('country:'));
    const country = countryLine ? countryLine.trim() : 'IN';
    postStartLines.push({ lineNum: idx + 1, slug, country });
  }
});

console.log(`Found ${postStartLines.length} posts starting with { id:`);
postStartLines.forEach(p => console.log(`Line ${p.lineNum}: ${p.slug} (${p.country})`));
