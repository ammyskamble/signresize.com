import fs from 'fs';
import path from 'path';

const blogPostsPath = path.resolve('src/data/blogPostsData.ts');
let content = fs.readFileSync(blogPostsPath, 'utf8');

const postMarker = `"slug": "maharashtra-police-bharti-2026-top-10-faq-guide"`;
const startIndex = content.indexOf(postMarker);
if (startIndex === -1) {
  console.error("Could not find post marker");
  process.exit(1);
}

const objStartIndex = content.lastIndexOf('{', startIndex);

let braceCount = 0;
let objEndIndex = -1;
for (let i = objStartIndex; i < content.length; i++) {
  if (content[i] === '{') braceCount++;
  else if (content[i] === '}') {
    braceCount--;
    if (braceCount === 0) {
      objEndIndex = i;
      break;
    }
  }
}

if (objEndIndex === -1) {
  console.error("Could not find end of post object");
  process.exit(1);
}

const postStr = content.substring(objStartIndex, objEndIndex + 1);
const postObj = JSON.parse(postStr);

// Add video link callout box into contentHtml inside Section 4
const videoBoxHtml = `
  <!-- Video Callout Guide -->
  <div class="my-6 p-4 sm:p-5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-foreground space-y-2">
    <div class="flex items-center justify-between flex-wrap gap-2">
      <h4 class="font-bold text-rose-700 dark:text-rose-300 text-sm sm:text-base flex items-center gap-2">
        <span>🎥</span> Maharashtra Police Bharti Physical Test Demonstration Video
      </h4>
      <a href="https://www.youtube.com/watch?v=f8XYRLZ4PFc" target="_blank" rel="noopener noreferrer" class="px-3.5 py-1.5 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 transition flex items-center gap-1.5 shadow-xs">
        <span>Watch YouTube Guide</span>
        <span>↗</span>
      </a>
    </div>
    <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
      For practical video guidance on achieving top physical scores, watch the <a href="https://www.youtube.com/watch?v=f8XYRLZ4PFc" target="_blank" rel="noopener noreferrer" class="text-primary font-bold underline">Maharashtra Police Bharti Physical Test Guide</a> breaking down event techniques, 1600m/800m running pacing, 100m sprint starts, and Shot Put throwing forms for male and female aspirants.
    </p>
  </div>
`;

if (!postObj.contentHtml.includes('f8XYRLZ4PFc')) {
  // Inject before Section 5
  postObj.contentHtml = postObj.contentHtml.replace('<section id="section-5"', videoBoxHtml + '\n<section id="section-5"');
}

const updatedJSON = JSON.stringify(postObj, null, 2);
content = content.substring(0, objStartIndex) + updatedJSON + content.substring(objEndIndex + 1);

fs.writeFileSync(blogPostsPath, content, 'utf8');
console.log("Successfully updated video link in maharashtra-police-bharti-2026-top-10-faq-guide!");
