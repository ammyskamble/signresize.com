import fs from 'fs';
const code = fs.readFileSync('src/data/blogPostsData.ts', 'utf8');
const slugs = [...code.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
console.log(`Found ${slugs.length} posts:`);
slugs.forEach((s, idx) => console.log(`${idx + 1}. ${s}`));
