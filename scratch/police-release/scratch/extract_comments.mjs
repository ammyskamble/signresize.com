import fs from 'fs';

const filePath = 'C:/Users/Admin/.gemini/antigravity-ide/brain/9d20a0b2-0a29-4d1f-9ad6-1d080fe0df69/.system_generated/steps/4/content.md';
const content = fs.readFileSync(filePath, 'utf8');

// Find shreddit-comment or comment bodies
const comments = [];
const regex = /<shreddit-comment[^>]*author="([^"]*)"[^>]*>([\s\S]*?)<\/shreddit-comment>/g;
let match;
while ((match = regex.exec(content)) !== null) {
  const author = match[1];
  const bodyHtml = match[2];
  
  // extract comment text
  const textMatch = bodyHtml.match(/<div slot="comment"[\s\S]*?<div id="[^"]*-post-rtjson-content"[^>]*>([\s\S]*?)<\/div>/);
  let text = textMatch ? textMatch[1] : '';
  text = text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text.length > 10) {
    comments.push({ author, text });
  }
}

console.log(`Found ${comments.length} comments.`);
fs.writeFileSync('scratch/extracted_comments.json', JSON.stringify(comments.slice(0, 30), null, 2), 'utf8');
for (let i = 0; i < Math.min(10, comments.length); i++) {
  console.log(`[${comments[i].author}]: ${comments[i].text.slice(0, 150)}...`);
}
