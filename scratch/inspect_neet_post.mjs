import fs from 'fs';

const filePath = 'd:/Testing/Tools/sign resize/signresize.in/src/data/blogPostsData.ts';
const content = fs.readFileSync(filePath, 'utf8');

const slugIndex = content.indexOf('"slug": "neet-ug-2026-master-guide-postcard-photo-signature-rules"');
const postStart = content.lastIndexOf('{', slugIndex);
let braceCount = 0;
let postEnd = -1;
for (let i = postStart; i < content.length; i++) {
  if (content[i] === '{') braceCount++;
  else if (content[i] === '}') {
    braceCount--;
    if (braceCount === 0) {
      postEnd = i + 1;
      break;
    }
  }
}

const postStr = content.slice(postStart, postEnd);
console.log('LENGTH:', postStr.length);
console.log('SAMPLE START:', postStr.slice(0, 500));
