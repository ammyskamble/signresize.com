import fs from 'fs';

const pages = fs.readFileSync('src/data/examPagesData.ts', 'utf8');
const slugs = [...pages.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

const keywords = ['jam', 'kerala', 'cuet', 'bssc', 'upsssc', 'dsssb', 'rrb', 'ctet', 'police'];

for (const kw of keywords) {
  const matches = slugs.filter(s => s.includes(kw));
  console.log(`${kw}:`, matches);
}
