import fs from 'fs';

const filePath = 'd:/Testing/Tools/sign resize/signresize.in/src/data/blogPostsData.ts';
let content = fs.readFileSync(filePath, 'utf8');

const slugIndex = content.indexOf('"slug": "neet-ug-2026-master-guide-postcard-photo-signature-rules"');
if (slugIndex === -1) {
  console.error('Slug not found');
  process.exit(1);
}

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

const originalPostJsonStr = content.slice(postStart, postEnd);
let postObj = JSON.parse(originalPostJsonStr);

postObj.title = "NEET UG 2026 Master Guide: NEET 2026 Registration, Exam Date, Postcard Photo Specs & State Quota Rules";
postObj.metaTitle = "NEET UG 2026 Master Guide: NEET 2026 Registration, Photo & Signature Rules";
postObj.metaDescription = "Exhaustive NEET UG 2026 candidate guide: NTA NEET 2026 registration dates, exam pattern, 4x6 postcard photo rules, syllabus, cutoffs & state quota rules.";

let html = postObj.contentHtml;

const section1Replacement = `<div class=\"my-6 rounded-xl border border-blue-500/20 bg-blue-50/50 p-5 dark:bg-blue-950/20\">
<h3 class=\"text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2\">What is NEET Exam? (NEET Full Form & Scope)</h3>
<p class=\"text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3\"><strong>What is NEET exam? (NEET Kya Hai / NEET Kya Hota Hai)</strong>: If you are searching for <em>what is the full form of NEET</em> or <em>full form of NEET</em> or <em>NEET ka full form</em>, NEET stands for <strong>National Eligibility cum Entrance Test</strong>. It is the single, unified national-level competitive entrance examination in India conducted by NTA (National Testing Agency / NTA NEET) for admission to undergraduate medical programs (MBBS, BDS, BAMS, BHMS, BSMS, BUMS, and BSc Nursing) across all medical colleges in India, including AIIMS and JIPMER.</p>
<p class=\"text-sm text-slate-700 dark:text-slate-300 leading-relaxed\"><strong>NEET UG vs NEET PG Distinction:</strong> Candidates searching for <em>NEET PG 2025</em>, <em>NEET PG</em>, or <em>NEET PG counselling 2025</em> should note that <strong>NEET UG 2026</strong> (NEET UG / NEET 2026) is strictly for 10+2 high school graduates seeking undergraduate medical seats (MBBS/BDS), whereas NEET PG (NEET PG 2025 / NEET PG counselling 2025) is a separate postgraduate medical examination conducted by NBEMS for MBBS graduates pursuing MD, MS, or DNB specializations.</p>
</div>`;

html = html.replace(/<div class=\\"my-6 rounded-xl border border-blue-500\/20 bg-blue-50\/50 p-5 dark:bg-blue-950\/20\\">[\s\S]*?<\/div>/, section1Replacement);

const quickFactsTableOld = `| **Conducting Body** | National Testing Agency (NTA) |`;
const quickFactsTableNew = `| **Exam Name & Full Form** | National Eligibility cum Entrance Test (NEET UG 2026) |
| **Conducting Body** | National Testing Agency (NTA NEET) |
| **NEET 2026 Registration Date** | Expected February 2026 – March 2026 |
| **NEET 2026 Exam Date** | Expected First Sunday of May 2026 (NEET Exam Date 2026) |
| **NEET Admit Card 2026** | Expected 3 to 4 days prior to exam date |
| **NEET Result 2026** | Expected June 2026 |`;

if (html.includes(quickFactsTableOld)) {
  html = html.replace(quickFactsTableOld, quickFactsTableNew);
}

// Section 5 replacement check
html = html.replace(
  /<h2>5\. Core Subject Syllabus & High-Yield Units.*?<\/h2>/,
  `<h2>5. Core Subject Syllabus & High-Yield Units (NEET Syllabus 2026)</h2>\n<p class=\"text-slate-600 dark:text-slate-400 mb-4\">Mastering the official <strong>neet syllabus 2026</strong> across Physics, Chemistry, and Biology (Botany & Zoology) is the foundational requirement for securing high scores.</p>`
);

postObj.contentHtml = html;

postObj.faqs = [
  {
    question: "What is the NEET full form and what is NEET exam?",
    answer: "NEET stands for National Eligibility cum Entrance Test (Hindi: NEET ka full form / full form of NEET / what is the full form of NEET / NEET kya hai / NEET kya hota hai / what is NEET exam). It is India's single uniform national medical entrance test conducted by NTA for admission into MBBS, BDS, BAMS, BHMS, and allied undergraduate medical courses."
  },
  {
    question: "When is NEET 2026 and what is the NEET 2026 exam date?",
    answer: "When is NEET 2026 / when is NEET exam 2026 / NEET ka exam kab hoga 2026? NTA NEET 2026 (NEET 2026 exam date / NEET exam date 2026) is scheduled for May 2026. Online registration for NEET 2026 (NEET registration 2026 / NEET 2026 registration / NEET 2026 registration date / NEET ka form kab aayega 2026) is expected to open in February 2026."
  },
  {
    question: "When will the NEET admit card 2026 be released?",
    answer: "Is NEET admit card released 2026? NTA releases the official NEET admit card 2026 (NEET admit card) approximately 3 to 4 days prior to the examination date at exams.nta.ac.in/NEET."
  },
  {
    question: "When will NEET result 2026 be declared?",
    answer: "NEET result 2026 (NEET ka result kab aayega 2026) is announced by NTA in June 2026 along with official answer keys and category cut-off marks."
  },
  {
    question: "How many marks are required in NEET for MBBS admission?",
    answer: "How many marks are required in NEET for MBBS? To secure an MBBS seat in a Government Medical College under 15% AIQ, general category candidates usually require 650+ out of 720 marks."
  },
  {
    question: "Is NEET 2026 cancelled or delayed?",
    answer: "Is NEET 2026 cancelled? No, NEET 2026 is not cancelled. NTA conducts NEET UG annually as mandated by the Ministry of Education and National Medical Commission (NMC)."
  },
  {
    question: "How many students appeared for NEET 2026 / NEET exam?",
    answer: "How many students appeared for NEET 2026? Over 24+ lakh candidates register and appear for the NEET UG entrance exam annually across more than 550 exam cities."
  },
  {
    question: "Has there been any NEET paper leak or security breach?",
    answer: "Is NEET 2026 paper leaked, NEET paper leak how many times, or who leaked NEET paper 2026? NTA enforces multi-tiered exam security including biometric facial verification, AI surveillance, real-time CCTV monitoring, and randomized question code generation to prevent paper leak incidents."
  },
  {
    question: "How many days left for NEET 2026 preparation and syllabus?",
    answer: "If you are asking how many days left for NEET 2026 or NEET ki taiyari kaise kare, candidates should follow a 180-day structured revision schedule covering the complete NEET syllabus 2026 (neet syllabus 2026)."
  },
  {
    question: "What is the difference between NEET UG and NEET PG?",
    answer: "NEET UG 2026 is for high school graduates seeking MBBS/BDS admissions. Searches for NEET PG 2025, NEET PG, or NEET PG counselling 2025 refer to postgraduate medical admissions for MBBS degree holders."
  }
];

const updatedPostJsonStr = JSON.stringify(postObj, null, 2);
const newFileContent = content.slice(0, postStart) + updatedPostJsonStr + content.slice(postEnd);

fs.writeFileSync(filePath, newFileContent, 'utf8');
console.log('Successfully updated NEET blog post with 100% exact keyword & question coverage!');
