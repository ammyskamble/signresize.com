import fs from 'fs';

const filePath = 'C:/Users/Admin/.gemini/antigravity-ide/brain/9d20a0b2-0a29-4d1f-9ad6-1d080fe0df69/.system_generated/steps/4/content.md';
const content = fs.readFileSync(filePath, 'utf8');

console.log('shreddit-comment count:', (content.match(/<shreddit-comment/g) || []).length);
const commentIdx = content.indexOf('<shreddit-comment');
if (commentIdx !== -1) {
  console.log(content.slice(commentIdx, commentIdx + 1500));
} else {
  console.log('Searching for comment tags or author names...');
  const authors = [...content.matchAll(/author="([^"]+)"/g)].map(m => m[1]);
  console.log('Authors found:', authors.slice(0, 15));
}
