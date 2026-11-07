import fs from 'fs';

const filePath = 'src/data/blogPostsData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Revert errant syntax at line 15962
// Look for `, \r\n    "title_mr": "NEET UG 2026` or `, \n    "title_mr": "NEET UG 2026`
const errantIdx = content.indexOf(',\r\n    "title_mr": "NEET UG 2026');
const errantIdxLF = content.indexOf(',\n    "title_mr": "NEET UG 2026');
const foundErrant = errantIdx !== -1 ? errantIdx : errantIdxLF;

if (foundErrant !== -1) {
  const afterErrant = content.indexOf('for (const post of BLOG_POSTS)', foundErrant);
  console.log('Found errant block at:', foundErrant, 'ends before:', afterErrant);
  // Revert back to closing of verifiedPoliceArticleUpdates
  // Before errant was `  },\r\n};`
  // Let's replace the whole region from `  },\r\n,\r\n    "title_mr"` to `for (const post of BLOG_POSTS)`
  const beforeSlice = content.substring(0, foundErrant);
  const afterSlice = content.substring(afterErrant);
  
  // Make sure beforeSlice ends with `  },\r\n};\r\n\r\n`
  let cleanBefore = beforeSlice.trimEnd();
  if (cleanBefore.endsWith(',')) {
    cleanBefore = cleanBefore.slice(0, -1);
  }
  if (!cleanBefore.endsWith('};')) {
    cleanBefore += '\r\n};';
  }
  content = cleanBefore + '\r\n\r\n' + afterSlice;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Reverted errant syntax!');
} else {
  console.log('Errant syntax block not found by exact string, checking lines...');
}
