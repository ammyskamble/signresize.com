import fs from 'fs';
import path from 'path';

const blogFilePath = path.resolve('src/data/blogPostsData.ts');
let fileContent = fs.readFileSync(blogFilePath, 'utf8');

// Find CTET post contentHtml boundaries
const startMarker = '    contentHtml: `';
const endMarker = '    slug: "rrb-ntpc-2026-master-document-rules-preparation-strategy-mutne4bd"';

const startIndex = fileContent.indexOf(startMarker);
const endIndex = fileContent.indexOf(endMarker, startIndex);

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find CTET post markers");
  process.exit(1);
}

// Find the closing backtick of contentHtml before the next post
const nextPostIndex = fileContent.lastIndexOf('  },', endIndex);
console.log("Found bounds:", { startIndex, nextPostIndex, endIndex });
