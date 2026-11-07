import fs from 'fs';

const filePath = 'C:/Users/Admin/.gemini/antigravity-ide/brain/9d20a0b2-0a29-4d1f-9ad6-1d080fe0df69/.system_generated/steps/4/content.md';
const content = fs.readFileSync(filePath, 'utf8');

const commentBlocks = content.split('<shreddit-comment ');
const results = [];

for (let i = 1; i < commentBlocks.length; i++) {
  const block = commentBlocks[i];
  const authorMatch = block.match(/author="([^"]*)"/);
  const author = authorMatch ? authorMatch[1] : 'unknown';
  
  // Look for text in <p> tags before the next comment or end of this block
  const pMatches = [...block.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
  const text = pMatches.map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean).join(' ');
  
  if (text && text.length > 5 && !text.includes('Client Experiments') && !text.includes('JavaScript')) {
    results.push({ author, text });
  }
}

console.log(`Parsed ${results.length} comments.`);
fs.writeFileSync('scratch/extracted_comments_clean.json', JSON.stringify(results, null, 2), 'utf8');

// Print first 20 comments
for (let i = 0; i < Math.min(20, results.length); i++) {
  console.log(`\n[${results[i].author}]: ${results[i].text}`);
}
