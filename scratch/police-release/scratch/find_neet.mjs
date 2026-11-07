import fs from 'fs';

const content = fs.readFileSync('src/data/blogPostsData.ts', 'utf8');
const lines = content.split(/\r?\n/);
let startLine = -1;
let endLine = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('"slug": "neet-ug-2026-master-guide-postcard-photo-signature-rules"')) {
    startLine = i + 1;
  }
  if (startLine !== -1 && i > startLine) {
    if (lines[i].startsWith('  {') || lines[i].startsWith('];') || lines[i].startsWith('const verifiedPoliceArticleUpdates')) {
      endLine = i;
      break;
    }
  }
}
console.log(`NEET post spans line ${startLine} to line ${endLine}`);
