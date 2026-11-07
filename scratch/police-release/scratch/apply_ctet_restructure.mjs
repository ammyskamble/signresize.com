import fs from 'fs';
import path from 'path';
import { ctetArticleHtml } from './ctet_restructured_content.mjs';

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

const nextPostIndex = fileContent.lastIndexOf('  },', endIndex);
const before = fileContent.slice(0, startIndex + startMarker.length);
const after = fileContent.slice(nextPostIndex);

const updatedContent = before + '\n' + ctetArticleHtml.trim() + '\n`\n' + after;

fs.writeFileSync(blogFilePath, updatedContent, 'utf8');
console.log("Successfully replaced CTET contentHtml with failure-state diagnostic architecture!");
