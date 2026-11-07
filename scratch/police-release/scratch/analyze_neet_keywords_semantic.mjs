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

const postJsonStr = content.slice(postStart, postEnd);
const textLower = postJsonStr.toLowerCase();

const phraseKeywords = [
  { kw: "neet", vol: ">100K", kd: "Easy" },
  { kw: "neet admit card 2026", vol: ">100K", kd: "Hard" },
  { kw: "neet full form", vol: ">100K", kd: "Easy" },
  { kw: "neet 2026", vol: ">100K", kd: "Hard" },
  { kw: "nta neet", vol: ">100K", kd: "Hard" },
  { kw: "neet 2026 exam date", vol: ">100K", kd: "Hard" },
  { kw: "neet pg 2025", vol: ">100K", kd: "Hard" },
  { kw: "neet exam date 2026", vol: ">100K", kd: "Hard" },
  { kw: "neet result 2026", vol: ">100K", kd: "Easy" },
  { kw: "neet admit card", vol: ">100K", kd: "Easy" },
  { kw: "neet pg", vol: ">100K", kd: "Sign up" },
  { kw: "neet registration 2026", vol: ">10,000", kd: "-" },
  { kw: "neet ug 2026", vol: ">10,000", kd: "-" },
  { kw: "neet 2026 registration", vol: ">10,000", kd: "-" },
  { kw: "neet 2026 registration date", vol: ">10,000", kd: "-" },
  { kw: "neet registration", vol: ">10,000", kd: "-" },
  { kw: "neet exam", vol: ">10,000", kd: "-" },
  { kw: "neet pg counselling 2025", vol: ">10,000", kd: "-" },
  { kw: "neet syllabus 2026", vol: ">10,000", kd: "-" },
  { kw: "neet ug", vol: ">10,000", kd: "-" }
];

const questionKeywords = [
  { kw: "neet ka full form", vol: ">10,000", kd: "Easy" },
  { kw: "full form of neet", vol: ">10,000", kd: "Easy" },
  { kw: "is neet admit card released 2026", vol: ">10,000", kd: "Hard" },
  { kw: "how many days left for neet 2026", vol: ">1,000", kd: "Easy" },
  { kw: "what is neet exam", vol: ">1,000", kd: "Easy" },
  { kw: "neet ka result kab aayega 2026", vol: ">1,000", kd: "Easy" },
  { kw: "how many marks are required in neet for mbbs", vol: ">1,000", kd: "Easy" },
  { kw: "neet kya hai", vol: ">1,000", kd: "Easy" },
  { kw: "is neet 2026 cancelled", vol: ">1,000", kd: "Easy" },
  { kw: "how many students appeared for neet 2026", vol: ">1,000", kd: "Easy" },
  { kw: "when is neet exam 2026", vol: ">1,000", kd: "Sign up" },
  { kw: "neet paper leak how many times", vol: ">1,000", kd: "-" },
  { kw: "neet ka exam kab hoga 2026", vol: ">1,000", kd: "-" },
  { kw: "neet kya hota hai", vol: ">1,000", kd: "-" },
  { kw: "when is neet 2026", vol: ">1,000", kd: "-" },
  { kw: "is neet 2026 paper leaked", vol: ">1,000", kd: "-" },
  { kw: "neet ka form kab aayega 2026", vol: ">1,000", kd: "-" },
  { kw: "neet ki taiyari kaise kare", vol: ">1,000", kd: "-" },
  { kw: "what is the full form of neet", vol: ">1,000", kd: "-" },
  { kw: "who leaked neet paper 2026", vol: ">1,000", kd: "-" }
];

console.log("Analyzing...");

function checkKeyword(kw) {
  const exact = textLower.includes(kw.toLowerCase());
  return { exact };
}

console.log(JSON.stringify({
  phrases: phraseKeywords.map(p => ({ ...p, exact: checkKeyword(p.kw).exact })),
  questions: questionKeywords.map(q => ({ ...q, exact: checkKeyword(q.kw).exact }))
}, null, 2));
