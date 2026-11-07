import fs from 'fs';

const content = fs.readFileSync('src/data/blogPostsData.ts', 'utf8');
const hrefRegex = /href=["'](\/[a-zA-Z0-9_\-]+)["']/g;
let match;
const found = {};
while ((match = hrefRegex.exec(content)) !== null) {
  const url = match[1];
  if (url !== '/' && !url.includes('.')) {
    found[url] = (found[url] || 0) + 1;
  }
}
console.log('Non-slash hrefs in blogPostsData.ts:', Object.entries(found));

const examContent = fs.readFileSync('src/data/examPagesData.ts', 'utf8');
const examFound = {};
while ((match = hrefRegex.exec(examContent)) !== null) {
  const url = match[1];
  if (url !== '/' && !url.includes('.')) {
    examFound[url] = (examFound[url] || 0) + 1;
  }
}
console.log('Non-slash hrefs in examPagesData.ts:', Object.entries(examFound));
