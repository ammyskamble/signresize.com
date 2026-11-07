// scratch/parse_part1.mjs
import fs from 'node:fs';

const raw = fs.readFileSync('scratch/part1_existing.ts', 'utf8');

// Strip TypeScript types so Node can evaluate it as plain JavaScript
let js = raw
  .replace(/export interface BlogPost \{[\s\S]*?\}\n\n/, '')
  .replace(/export const BLOG_POSTS: BlogPost\[\] =/, 'const BLOG_POSTS =');

// Fix trailing comma or whitespace at the end
js = js.trim();
if (!js.endsWith('];')) {
  if (js.endsWith(',')) {
    js = js.slice(0, -1) + '];';
  } else {
    js += '\n];';
  }
}

// Add module export
js += '\nexport default BLOG_POSTS;';

fs.writeFileSync('scratch/part1_cleaned.mjs', js, 'utf8');
console.log('Cleaned part1 written. Testing import...');

import('./part1_cleaned.mjs').then(m => {
  console.log(`Successfully loaded ${m.default.length} posts from part1_cleaned.mjs`);
  m.default.forEach((p, i) => {
    console.log(`${i+1}. ${p.slug}`);
  });
}).catch(err => {
  console.error('Failed to import part1_cleaned.mjs:', err);
});
