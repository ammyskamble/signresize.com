import fs from 'fs';

const targetFilePath = 'D:/Testing/Blogs/BionicsMetrix.online/src/data/articles.ts';
let lines = fs.readFileSync(targetFilePath, 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('}}') && lines[i+1] && lines[i+1].includes('faqs: [')) {
    console.log(`Fixing line ${i+1}: ${lines[i]}`);
    lines[i] = lines[i].replace('}}', '}');
  }
}

fs.writeFileSync(targetFilePath, lines.join('\n'), 'utf8');
console.log("File saved!");
