import fs from 'fs';

const content = fs.readFileSync('src/data/blogPostsData.ts', 'utf8');

const matches = [...content.matchAll(/country:\s*["']([^"']+)["']/g)];
console.log('Country tags in file:');
matches.forEach((m, idx) => console.log(`${idx + 1}. ${m[1]}`));
