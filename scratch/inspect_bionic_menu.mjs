import fs from 'fs';
const content = fs.readFileSync('C:/Users/Admin/.gemini/antigravity-ide/brain/0f5bdae0-22a0-4f94-87eb-b1bf38089d5d/.system_generated/steps/888/content.md', 'utf8');

// Find mobile menu toggle and drawer script in bionicmetricx
const scriptMatch = content.match(/mobile-menu-toggle[\s\S]{1,2000}/);
if (scriptMatch) {
  console.log('Bionic script snippet:\n', scriptMatch[0].slice(0, 1000));
}

// Find CSS for header and dropdown
const cssMatches = [...content.matchAll(/@media[^{]+\{[^}]+\}/g)];
console.log('\nMedia queries:');
cssMatches.slice(0, 10).forEach(m => console.log(m[0]));
