import fs from 'fs';

const filePath = 'src/data/blogPostsData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Find the JEE Main post
const startIdx = content.indexOf('jee-main-2026-session-1-registration-syllabus-photo-signature-guidelines');
if (startIdx === -1) {
  console.error("JEE Main post not found in blogPostsData.ts");
  process.exit(1);
}

const nextPostIdx = content.indexOf("slug: 'wb-police-constable-si-2026-physical-test-syllabus-photo-signature-guide'", startIdx);
if (nextPostIdx === -1) {
  console.error("WB Police post marker not found");
  process.exit(1);
}

// Extract current post segment
const postSegment = content.substring(startIdx, nextPostIdx);

// 1. Update quickFacts in postSegment
let updatedSegment = postSegment;

// Replace 90 questions / attempt 75 with 75 compulsory questions (20 MCQs + 5 Numericals)
updatedSegment = updatedSegment.replace(
  "value: '300 Marks (90 Questions: attempt 75 across Physics, Chem & Maths)'",
  "value: '300 Marks (75 Compulsory Questions: 25 Physics, 25 Chemistry, 25 Mathematics — Zero Optional Choice)'"
);

updatedSegment = updatedSegment.replace(
  "value: '300 अंक (90 प्रश्न: 75 हल करने अनिवार्य, फिजिक्स/केमिस्ट्री/मैथ्स)'",
  "value: '300 अंक (75 अनिवार्य प्रश्न: 25 फिजिक्स, 25 केमिस्ट्री, 25 मैथ्स — कोई वैकल्पिक छूट नहीं)'"
);

updatedSegment = updatedSegment.replace(
  "value: '३०० गुण (९० प्रश्न: ७५ सोडवणे बंधनकारक)'",
  "value: '३०० गुण (७५ अनिवार्य प्रश्न: २५ भौतिक, २५ रसायन, २५ गणित — शून्य ऐच्छिक पर्याय)'"
);

// 2. Update FAQs regarding Section B
updatedSegment = updatedSegment.replace(
  "In Section B, candidates are presented with 10 numerical questions per subject and must attempt exactly 5.",
  "Starting from the updated NTA exam framework, Section B has exactly 5 numerical questions per subject, and ALL 5 ARE COMPULSORY (total 15 numerical questions across the test, zero optional choice). The COVID-era 10-question optional facility has been officially discontinued."
);

updatedSegment = updatedSegment.replace(
  "सेक्शन B में 10 में से केवल 5 प्रश्न हल करने होते हैं।",
  "NTA ने कोविड-काल की 10 प्रश्नों वाली वैकल्पिक व्यवस्था समाप्त कर दी है। अब सेक्शन B में प्रत्येक विषय में 5 न्यूमेरिकल प्रश्न होते हैं और सभी 5 हल करना अनिवार्य है (कुल 15 न्यूमेरिकल, शून्य विकल्प)।"
);

updatedSegment = updatedSegment.replace(
  "सेक्शन B मधील १० पैकी ५ प्रश्न सोडवणे अनिवार्य असते.",
  "NTA ने जुनी १० प्रश्नांची ऐच्छिक पद्धत बंद केली आहे. आता सेक्शन B मध्ये प्रत्येक विषयात ५ न्यूमेरिकल प्रश्न असून सर्व ५ प्रश्न सोडवणे अनिवार्य आहे (एकूण १५ प्रश्न, शून्य पर्याय)."
);

// 3. Update Section 3 HTML in contentHtml:
// Replace Section 3 table and descriptions
const oldSection3 = `<h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="exam-pattern">📝 3. Exam Pattern: Paper 1 (B.Tech) vs Paper 2 & Marking Scheme</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    NTA administers JEE Main Paper 1 as a Computer-Based Test (CBT) consisting of 90 questions worth 300 marks. Crucially, negative marking applies equally across both multiple-choice and numerical questions:
  </p>

  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs relative table-scroll-hint-wrapper">
    <div class="p-3 bg-slate-100 dark:bg-slate-800/80 border-b border-border flex items-center justify-between text-xs font-semibold">
      <span class="flex items-center gap-1.5 text-foreground font-bold"><span>📐</span> Paper 1 (B.E. / B.Tech) Subject Structure & Question Choice</span>
      <span class="text-[11px] text-primary font-bold sm:hidden flex items-center gap-1 bg-primary/15 px-2.5 py-0.5 rounded-full border border-primary/25 shadow-2xs animate-pulse">
        <span>👉</span> Swipe table
      </span>
    </div>
    <div class="pointer-events-none absolute top-10 bottom-0 right-0 w-8 bg-gradient-to-l from-card via-card/90 to-transparent sm:hidden z-10"></div>
    <div class="overflow-x-auto relative">
      <table class="w-full text-xs sm:text-sm border-collapse min-w-[550px]">
        <thead>
          <tr class="bg-muted/40 text-muted-foreground text-left border-b border-border">
            <th class="p-3 font-semibold">Subject Domain</th>
            <th class="p-3 font-semibold">Section A (Compulsory MCQs)</th>
            <th class="p-3 font-semibold">Section B (Numericals: 5 of 10)</th>
            <th class="p-3 font-semibold">Total Questions Attempted</th>
            <th class="p-3 font-semibold">Total Marks</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Mathematics</td>
            <td class="p-3">20 Questions</td>
            <td class="p-3">Attempt 5 out of 10</td>
            <td class="p-3 font-bold text-foreground">25 Questions</td>
            <td class="p-3 font-bold text-foreground">100 Marks</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Physics</td>
            <td class="p-3">20 Questions</td>
            <td class="p-3">Attempt 5 out of 10</td>
            <td class="p-3 font-bold text-foreground">25 Questions</td>
            <td class="p-3 font-bold text-foreground">100 Marks</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Chemistry</td>
            <td class="p-3">20 Questions</td>
            <td class="p-3">Attempt 5 out of 10</td>
            <td class="p-3 font-bold text-foreground">25 Questions</td>
            <td class="p-3 font-bold text-foreground">100 Marks</td>
          </tr>
          <tr class="bg-primary/5 font-bold">
            <td class="p-3 text-primary">Cumulative Totals</td>
            <td class="p-3 text-primary">60 MCQs</td>
            <td class="p-3 text-primary">15 Numericals (out of 30)</td>
            <td class="p-3 text-primary">75 Questions</td>
            <td class="p-3 text-primary">300 Marks</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`;

const newSection3 = `<h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="exam-pattern">📝 3. Exam Pattern: Paper 1 (B.Tech) 75-Question Scheme & Marking System</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    NTA administers JEE Main Paper 1 as a Computer-Based Test (CBT) consisting of <strong>strictly 75 compulsory questions worth 300 marks</strong>. <em>Important Update:</em> The National Testing Agency has officially discontinued the COVID-era optional choice in Section B. There are no longer 10 questions to pick 5 from; all 5 numerical value questions per subject are now mandatory:
  </p>

  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs relative table-scroll-hint-wrapper">
    <div class="p-3 bg-slate-100 dark:bg-slate-800/80 border-b border-border flex items-center justify-between text-xs font-semibold">
      <span class="flex items-center gap-1.5 text-foreground font-bold"><span>📐</span> Paper 1 (B.E. / B.Tech) Structure: 75 Compulsory Questions (Zero Optional Choice)</span>
      <span class="text-[11px] text-primary font-bold sm:hidden flex items-center gap-1 bg-primary/15 px-2.5 py-0.5 rounded-full border border-primary/25 shadow-2xs animate-pulse">
        <span>👉</span> Swipe table
      </span>
    </div>
    <div class="pointer-events-none absolute top-10 bottom-0 right-0 w-8 bg-gradient-to-l from-card via-card/90 to-transparent sm:hidden z-10"></div>
    <div class="overflow-x-auto relative">
      <table class="w-full text-xs sm:text-sm border-collapse min-w-[550px]">
        <thead>
          <tr class="bg-muted/40 text-muted-foreground text-left border-b border-border">
            <th class="p-3 font-semibold">Subject Domain</th>
            <th class="p-3 font-semibold">Section A (Compulsory MCQs)</th>
            <th class="p-3 font-semibold">Section B (Compulsory Numericals)</th>
            <th class="p-3 font-semibold">Total Questions</th>
            <th class="p-3 font-semibold">Subject Marks</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Mathematics</td>
            <td class="p-3">20 MCQs</td>
            <td class="p-3 font-semibold text-foreground">5 Questions (All 5 Compulsory)</td>
            <td class="p-3 font-bold text-foreground">25 Questions</td>
            <td class="p-3 font-bold text-foreground">100 Marks</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Physics</td>
            <td class="p-3">20 MCQs</td>
            <td class="p-3 font-semibold text-foreground">5 Questions (All 5 Compulsory)</td>
            <td class="p-3 font-bold text-foreground">25 Questions</td>
            <td class="p-3 font-bold text-foreground">100 Marks</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Chemistry</td>
            <td class="p-3">20 MCQs</td>
            <td class="p-3 font-semibold text-foreground">5 Questions (All 5 Compulsory)</td>
            <td class="p-3 font-bold text-foreground">25 Questions</td>
            <td class="p-3 font-bold text-foreground">100 Marks</td>
          </tr>
          <tr class="bg-primary/5 font-bold">
            <td class="p-3 text-primary">Cumulative Totals</td>
            <td class="p-3 text-primary">60 MCQs</td>
            <td class="p-3 text-primary">15 Numericals (Zero Optional Choice)</td>
            <td class="p-3 text-primary">75 Questions</td>
            <td class="p-3 text-primary">300 Marks</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`;

if (updatedSegment.includes(oldSection3)) {
  updatedSegment = updatedSegment.replace(oldSection3, newSection3);
  console.log("Successfully replaced Section 3 table and description");
} else {
  console.error("Could not find exact oldSection3 match");
}

// 4. Add Category Certificate Rules in Section 2
const targetInSec2 = `<!-- Section 3: Exam Pattern & Marking Scheme -->`;
const categoryCardHtml = `<!-- Category Certificate Upload & Financial Year Validity Callout -->
  <div class="my-6 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-border space-y-2 shadow-xs">
    <div class="flex items-center justify-between flex-wrap gap-2">
      <div class="flex items-center gap-2">
        <span class="text-base">🏛️</span>
        <h3 class="text-xs sm:text-sm font-bold text-foreground">Category Certificate Rules & Financial Year Validity (OBC-NCL, EWS, SC, ST)</h3>
      </div>
      <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">April 1 Cutoff Rule</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-muted-foreground pt-1">
      <div class="p-3 rounded-xl bg-card border border-border space-y-1">
        <strong class="text-foreground text-[11px] block">OBC-NCL & Gen-EWS Validity:</strong>
        <p class="leading-relaxed text-[11px]">
          Must be issued on or after <strong>1st April of the preceding financial year</strong> (issued on or after April 1, 2025 for 2026 admissions). Older financial year certificates are strictly invalid for JoSAA seat allotment.
        </p>
      </div>
      <div class="p-3 rounded-xl bg-card border border-border space-y-1">
        <strong class="text-foreground text-[11px] block">Registration vs JoSAA Counseling:</strong>
        <p class="leading-relaxed text-[11px]">
          During NTA registration, candidates input category details and may upload a declaration/undertaking if the fresh certificate is pending. However, the original valid certificate must be uploaded during JoSAA document verification.
        </p>
      </div>
    </div>
  </div>

  `;

if (updatedSegment.includes(targetInSec2)) {
  updatedSegment = updatedSegment.replace(targetInSec2, categoryCardHtml + targetInSec2);
  console.log("Successfully added Category Certificate Rules to Section 2");
} else {
  console.error("Target marker in Section 2 not found");
}

// 5. Add Studio vs Live Webcam Distinction in Section 5
const targetInSec5 = `<!-- Section 6: Cursive Signature Standards -->`;
const webcamVsStudioHtml = `<!-- Operational Step-by-Step: Studio Photo vs Live Webcam Distinction -->
  <div class="my-6 p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 space-y-2.5 shadow-xs">
    <div class="flex items-center gap-2">
      <span class="text-base">📸</span>
      <h3 class="text-xs sm:text-sm font-bold text-foreground">Operational Distinction: Studio Photo Upload vs Live Webcam Capture</h3>
    </div>
    <p class="text-xs text-muted-foreground leading-relaxed">
      Aspirants must perform <strong>both steps sequentially</strong> during the NTA registration workflow to complete biometric validation:
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
      <div class="p-3 rounded-xl bg-card border border-border space-y-1">
        <div class="flex items-center gap-1.5 font-bold text-indigo-700 dark:text-indigo-300">
          <span class="w-4 h-4 rounded-full bg-indigo-100 dark:bg-indigo-900/60 flex items-center justify-center text-[10px]">1</span>
          <span>Upload Studio Passport Photo First:</span>
        </div>
        <p class="text-[11px] text-muted-foreground leading-relaxed">
          Upload a formal, high-resolution portrait cropped to <strong>300×400 px (3.5×4.5 cm)</strong> and compressed to <strong>10–200 KB JPG</strong> against a pure white backdrop with 80% face coverage and visible ears.
        </p>
      </div>
      <div class="p-3 rounded-xl bg-card border border-border space-y-1">
        <div class="flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-300">
          <span class="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center text-[10px]">2</span>
          <span>Grant Camera Access for Live Selfie:</span>
        </div>
        <p class="text-[11px] text-muted-foreground leading-relaxed">
          Allow browser webcam access when prompted. Sit facing bright natural light (no backlighting or glare), remove spectacles, and capture the real-time selfie. NTA's automated facial engine confirms identity parity.
        </p>
      </div>
    </div>
  </div>

  `;

if (updatedSegment.includes(targetInSec5)) {
  updatedSegment = updatedSegment.replace(targetInSec5, webcamVsStudioHtml + targetInSec5);
  console.log("Successfully added Studio vs Live Webcam Distinction to Section 5");
} else {
  console.error("Target marker in Section 5 not found");
}

// 6. Enrich Section 6: Cursive Signature Standards
const targetSec6 = `<h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="signature-specs">✍️ 6. Cursive Signature Standards: 4–30 KB Running Hand Rule</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    Candidate signatures are verified during attendance logging at examination centers and counseling biometric verification. Disconnected block printing triggers automatic cancellation:
  </p>`;

const enrichedSec6 = `<h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="signature-specs">✍️ 6. Cursive Signature Standards: 4–30 KB Running Hand Rule</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    Candidate signatures are verified during attendance logging at examination centers and JoSAA counseling biometric checks. Disconnected block printing triggers automatic cancellation:
  </p>

  <div class="my-6 p-4 rounded-2xl bg-card border border-border space-y-3 shadow-xs">
    <div class="flex items-center justify-between border-b border-border pb-2">
      <span class="text-xs font-bold uppercase tracking-wider text-primary">NTA Mandatory Signature Protocol</span>
      <span class="text-[11px] font-mono bg-primary/10 text-primary px-2 py-0.5 rounded font-bold">140 × 60 px • 4 to 30 KB</span>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-muted-foreground">
      <div class="p-2.5 rounded-xl bg-muted/40 space-y-1">
        <strong class="text-foreground block text-[11px]">Pen & Ink Medium:</strong>
        <p class="text-[11px] leading-relaxed">Use a fresh black or dark blue ballpoint pen. Fountain pens, gel pens, or sketch markers bleed into paper fibers, causing low-contrast blur.</p>
      </div>
      <div class="p-2.5 rounded-xl bg-muted/40 space-y-1">
        <strong class="text-foreground block text-[11px]">Paper Specification:</strong>
        <p class="text-[11px] leading-relaxed">Sign on plain, clean, unruled white paper. Do not use notebook pages with horizontal ruled lines or grid squares.</p>
      </div>
      <div class="p-2.5 rounded-xl bg-muted/40 space-y-1">
        <strong class="text-foreground block text-[11px]">Strict Running Handwriting:</strong>
        <p class="text-[11px] leading-relaxed">Signatures must be written in normal running script. Capital letters, initials only, or box printing will result in disqualification.</p>
      </div>
    </div>
  </div>`;

if (updatedSegment.includes(targetSec6)) {
  updatedSegment = updatedSegment.replace(targetSec6, enrichedSec6);
  console.log("Successfully enriched Section 6 signature specifications");
} else {
  console.error("Target Section 6 marker not found");
}

// Replace in overall content
content = content.substring(0, startIdx) + updatedSegment + content.substring(nextPostIdx);
fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully updated blogPostsData.ts with all JEE Main refinements!");
