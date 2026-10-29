const fs = require('fs');

const content = fs.readFileSync('src/data/blogPostsData.ts', 'utf-8');

const regex = /title:\s*["']([^"']+)["'][\s\S]*?slug:\s*["']([^"']+)["'][\s\S]*?description:\s*["']([^"']+)["']/g;
let match;
while ((match = regex.exec(content)) !== null) {
  if (match[2].includes('maharashtra') || match[2].includes('wbpsc') || match[2].includes('blue-ink') || match[2].includes('mp-police') || match[2].includes('uppsc-ro')) {
    console.log('Slug:', match[2]);
    console.log('Title:', match[1]);
    console.log('Desc:', match[3]);
    console.log('----------------');
  }
}

