import fs from 'fs';

let content = fs.readFileSync('src/data/blogPostsData.ts', 'utf8');

const p46Idx = content.indexOf('slug: "bpsc-teletalk-bangladesh-photo-signature-resize-guide-2026"');
const p47Idx = content.indexOf('slug: "bcs-exam-bangladesh-complete-guide-2026-syllabus-preparation-photo-upload"');

if (p46Idx !== -1 && p47Idx !== -1) {
  let bdSection = content.substring(p46Idx);
  
  // Replace href="/photo-resizer/" with href="/teletalk-photo-signature-resize/" in BD section
  const updatedBdSection = bdSection.replaceAll('href="/photo-resizer/"', 'href="/teletalk-photo-signature-resize/"');
  
  content = content.substring(0, p46Idx) + updatedBdSection;
  
  fs.writeFileSync('src/data/blogPostsData.ts', content, 'utf8');
  console.log('Successfully updated all remaining /photo-resizer/ links in BD articles!');
} else {
  console.log('Could not find BD posts!');
}
