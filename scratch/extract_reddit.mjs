import fs from 'fs';

const filePath = 'C:/Users/Admin/.gemini/antigravity-ide/brain/9d20a0b2-0a29-4d1f-9ad6-1d080fe0df69/.system_generated/steps/4/content.md';
const content = fs.readFileSync(filePath, 'utf8');

console.log('Total file length:', content.length);

let pos = 0;
while (true) {
  const found = content.indexOf('Hey Champions', pos);
  if (found === -1) break;
  console.log('\n--- Found "Hey Champions" at index', found, '---');
  console.log(content.slice(found, found + 1000));
  pos = found + 1;
}

// Check for shreddit-post or post body
const matches = [...content.matchAll(/<shreddit-post[^>]*>/g)];
console.log('shreddit-post matches:', matches.length);
for (const m of matches) {
  console.log(m[0].slice(0, 300));
}

// Search for the post content container
const textBodyIdx = content.indexOf('slot="text-body"');
console.log('slot="text-body" index:', textBodyIdx);
if (textBodyIdx !== -1) {
  console.log(content.slice(textBodyIdx, textBodyIdx + 2000));
}
