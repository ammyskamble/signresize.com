import fs from 'fs';
import path from 'path';

const filePath = 'd:/Testing/Tools/sign resize/signresize.in/src/data/blogPostsData.ts';
const content = fs.readFileSync(filePath, 'utf8');

// Match the NEET blog post object
const slugIndex = content.indexOf('"slug": "neet-ug-2026-master-guide-postcard-photo-signature-rules"');
if (slugIndex === -1) {
  console.error('NEET blog post not found!');
  process.exit(1);
}

// Find surrounding braces or extract post JSON section
const postStart = content.lastIndexOf('{', slugIndex);
// Find matching closing brace for post object
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

const postJsonStr = content.slice(postStart, postEnd);
let post;
try {
  post = JSON.parse(postJsonStr);
} catch (err) {
  console.log('Failed to parse directly as JSON, doing fallback substring extraction:', err.message);
  // Manual string checks
  const title = content.match(/"title":\s*(".*?")/)?.[1] || '';
  post = { text: postJsonStr.toLowerCase() };
}

const fullText = (JSON.stringify(post) || postJsonStr).toLowerCase();

const phraseMatchKeywords = [
  'neet',
  'neet admit card 2026',
  'neet full form',
  'neet 2026',
  'nta neet',
  'neet 2026 exam date',
  'neet pg 2025',
  'neet exam date 2026',
  'neet result 2026',
  'neet admit card',
  'neet pg',
  'neet registration 2026',
  'neet ug 2026',
  'neet 2026 registration',
  'neet 2026 registration date',
  'neet registration',
  'neet exam',
  'neet pg counselling 2025',
  'neet syllabus 2026',
  'neet ug'
];

const questionKeywords = [
  'neet ka full form',
  'full form of neet',
  'is neet admit card released 2026',
  'how many days left for neet 2026',
  'what is neet exam',
  'neet ka result kab aayega 2026',
  'how many marks are required in neet for mbbs',
  'neet kya hai',
  'is neet 2026 cancelled',
  'how many students appeared for neet 2026',
  'when is neet exam 2026',
  'neet paper leak how many times',
  'neet ka exam kab hoga 2026',
  'neet kya hota hai',
  'when is neet 2026',
  'is neet 2026 paper leaked',
  'neet ka form kab aayega 2026',
  'neet ki taiyari kaise kare',
  'what is the full form of neet',
  'who leaked neet paper 2026'
];

console.log('--- PHRASE MATCH KEYWORDS ANALYSIS ---');
phraseMatchKeywords.forEach((kw, i) => {
  const present = fullText.includes(kw.toLowerCase());
  console.log(`${i+1}. "${kw}": ${present ? '✅ INCLUDED' : '❌ NOT DIRECTLY INCLUDED'}`);
});

console.log('\n--- QUESTIONS KEYWORDS ANALYSIS ---');
questionKeywords.forEach((kw, i) => {
  const present = fullText.includes(kw.toLowerCase());
  console.log(`${i+1}. "${kw}": ${present ? '✅ INCLUDED' : '❌ NOT DIRECTLY INCLUDED'}`);
});
