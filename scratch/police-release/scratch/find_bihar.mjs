import fs from 'fs';

const content = fs.readFileSync('src/data/examPresets.ts', 'utf8');

function find(pattern) {
  const re = new RegExp(`id:\\s*['"]([^'"]*${pattern}[^'"]*)['"]`, 'gi');
  return [...content.matchAll(re)].map(m => m[1]);
}

console.log('bihar:', find('bihar'));
console.log('police:', find('police'));
