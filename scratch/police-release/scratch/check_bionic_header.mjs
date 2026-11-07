import fs from 'fs';
const content = fs.readFileSync('C:/Users/Admin/.gemini/antigravity-ide/brain/0f5bdae0-22a0-4f94-87eb-b1bf38089d5d/.system_generated/steps/888/content.md', 'utf8');

const matches = [...content.matchAll(/mobile-nav-drawer/g)];
console.log('Matches count:', matches.length);
matches.forEach((m, idx) => {
  console.log(`\n--- Match ${idx} (pos ${m.index}) ---`);
  console.log(content.slice(Math.max(0, m.index - 50), m.index + 500));
});
