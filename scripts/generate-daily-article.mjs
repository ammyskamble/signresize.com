// scripts/generate-daily-article.mjs
// Automated Daily Article Generator & Publisher for SignResize.in
// Supports Google Gemini API (via GEMINI_API_KEY) with intelligent automated rotating curriculum fallback

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const dataFilePath = path.join(projectRoot, 'src', 'data', 'blogPostsData.ts');

function getTodayFormatted() {
  const d = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  return `${months[d.getMonth()]} ${String(d.getDate()).padStart(2, '0')}, ${d.getFullYear()}`;
}

/**
 * Rich editorial fallback pool covering core examination categories & compliance guidelines
 */
const CURRICULUM_POOL = [
  {
    slugBase: 'rrb-ntpc-2026-master-document-rules-preparation-strategy',
    title: 'RRB NTPC 2026: Scanned Document Upload Rules, Sectional Weightage & High-Yield Preparation Strategy',
    excerpt: 'Complete candidate guide for Railway RRB NTPC 2026: CBT-1 marking scheme, 10-20KB signature rules, photograph guidelines, step-by-step navigation, and speed calculation methods.',
    category: 'Study Prep',
    author: 'SignResize Academic Research Desk',
    authorRole: 'Railway Recruitment Strategy Desk',
    readTime: '8 min read',
    tags: ['RRB NTPC', 'Railway Exams', 'CBT 1 Prep', 'Signature 10-20KB', 'Maths Shortcuts', 'Document Guidelines'],
    relatedExamPreset: 'rrb-railway',
    generateHtml: (dateStr) => `
      <h2>RRB NTPC 2026: Master Examination Overview &amp; Selection Stages</h2>
      <p>The Railway Recruitment Boards (RRB) have activated the recruitment calendar for <strong>Non-Technical Popular Categories (NTPC)</strong>. Covering graduate posts like Goods Guard, Senior Clerk-cum-Typist, and Commercial Apprentice, as well as undergraduate roles like Junior Clerk and Train Clerk, competition across all Indian railway zones is exceptionally high.</p>

      <p>Succeeding in CBT-1 and CBT-2 requires a structured study routine paired with strict document compliance during the online registration process.</p>

      <div class="my-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
        <h4 class="font-bold text-primary mb-2">⚡ CBT-1 Exam Pattern &amp; Time Distribution</h4>
        <ul class="space-y-1.5 text-sm text-foreground/90">
          <li><strong>General Awareness:</strong> 40 Questions (Current Affairs, General Science, Indian History, Geography, Static GK)</li>
          <li><strong>Mathematics:</strong> 30 Questions (Number Systems, Decimals, Fractions, LCM-HCF, Ratio, Percentages, Mensuration, Time &amp; Work)</li>
          <li><strong>General Intelligence &amp; Reasoning:</strong> 30 Questions (Analogies, Coding, Syllogisms, Venn Diagrams, Mathematical Operations)</li>
          <li><strong>Total Time:</strong> 90 Minutes (100 Questions with 1/3rd negative marking per incorrect response)</li>
        </ul>
      </div>

      <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
        <div class="flex items-center justify-between text-slate-400 text-[11px]">
          <span>⚡ Railway Exam Portal Rules &amp; Negative Marking Snippet</span>
          <span>RRB Specification Standard</span>
        </div>
        <pre class="overflow-x-auto text-emerald-400"><code>CBT-1 Score = (Correct Attempts × 1.0) - (Incorrect Attempts × 0.333)
Shortlisting Ratio for CBT-2 = 1:20 (Twenty times the vacancy count per Zone)</code></pre>
      </div>

      <h2>Document Upload Compliance for Railway Portals</h2>
      <p>Railway recruitment notices explicitly enforce strict parameters for candidate photo and scanned signature uploads:</p>
      <ul>
        <li><strong>Scanned Passport Photo:</strong> Clear color photograph against a light white background taken within 3 months. File size must range between <strong>20 KB and 50 KB</strong> in JPG/JPEG format. Spectacles with tint or flash glare will be rejected.</li>
        <li><strong>Candidate Signature:</strong> Must be signed in running handwriting on clean white unruled paper using a black ballpoint pen. File weight must be between <strong>10 KB and 20 KB</strong> (140 &times; 60 pixels). Capital letter signatures trigger immediate cancellation.</li>
      </ul>

      <div class="my-8 p-6 rounded-2xl bg-card border border-border shadow-sm">
        <h3 class="text-base font-bold text-foreground mb-4 flex items-center gap-2">
          <span>📐</span> RRB Document Formatting Workflow
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-center">
          <div class="p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-1.5 sm:space-y-2">
            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs sm:text-sm">1</div>
            <span class="font-bold text-xs text-foreground">Sign on White Paper</span>
            <span class="text-[10px] sm:text-[11px] text-muted-foreground">Use dark black ballpoint pen</span>
          </div>
          <div class="p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-1.5 sm:space-y-2">
            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs sm:text-sm">2</div>
            <span class="font-bold text-xs text-foreground">Crop 140x60 Ratio</span>
            <span class="text-[10px] sm:text-[11px] text-muted-foreground">Remove surrounding excess paper</span>
          </div>
          <div class="p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-1.5 sm:space-y-2">
            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs sm:text-sm">3</div>
            <span class="font-bold text-xs text-foreground">Background White Filter</span>
            <span class="text-[10px] sm:text-[11px] text-muted-foreground">Clean phone shadows automatically</span>
          </div>
          <div class="p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-1.5 sm:space-y-2">
            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs sm:text-sm">4</div>
            <span class="font-bold text-xs text-foreground">Target 10-20 KB</span>
            <span class="text-[10px] sm:text-[11px] text-muted-foreground">Compress for zero portal error</span>
          </div>
        </div>
      </div>

      <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Need RRB Signature &amp; Photo Formatted?</h4>
        <p class="text-xs sm:text-sm text-muted-foreground mt-1">Use our dedicated RRB Railway preset to crop, clean dark shadows, and compress into the exact 10–20 KB bound in seconds.</p>
        <div class="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 mt-3">
          <a href="/rrb-signature-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:opacity-95 transition w-full sm:w-auto">
            Open RRB Resizer &rarr;
          </a>
          <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-semibold text-xs sm:text-sm hover:opacity-95 transition w-full sm:w-auto">
            Resize Passport Photo &rarr;
          </a>
        </div>
      </div>

      <h2>Step-by-Step Railway Registration Workflow</h2>
      <div class="my-8 space-y-4">
        <div class="relative border-l-2 border-primary/30 ml-4 pl-6 space-y-6">
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">1</div>
            <h4 class="font-bold text-foreground text-sm">Select Zonal RRB Portal</h4>
            <p class="text-xs text-muted-foreground mt-1">Visit your chosen zonal portal (e.g. RRB Mumbai, RRB Chennai, RRB Chandigarh) and initiate candidate registration.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">2</div>
            <h4 class="font-bold text-foreground text-sm">Upload Photo (20-50 KB) &amp; Signature (10-20 KB)</h4>
            <p class="text-xs text-muted-foreground mt-1">Upload JPEG files formatted with SignResize. Verify that your signature image displays clearly without horizontal stretch.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">3</div>
            <h4 class="font-bold text-foreground text-sm">Confirm Community Certificate Upload (SC/ST)</h4>
            <p class="text-xs text-muted-foreground mt-1">If applying for free rail travel authority, upload your scanned caste certificate in PDF format under 500 KB.</p>
          </div>
        </div>
      </div>

      <h2>Recommended Daily Study Strategy</h2>
      <p>Divide your daily preparation into 3 focused blocks: 2 hours for Arithmetic speed drills, 1.5 hours for Logical Reasoning puzzle practice, and 2 hours for General Science and Current Affairs revision.</p>
    `
  },
  {
    slugBase: 'state-psc-otr-registration-photo-signature-guidelines',
    title: 'State PSC One-Time Registration (OTR): Mandatory Signature & Photo Guidelines for UPPSC, BPSC, MPSC & RPSC',
    excerpt: 'Detailed checklist for State Public Service Commission One-Time Registration portals: dimensions, dual-boundary compression, step-by-step navigation, and white background verification.',
    category: 'Guidelines & Tips',
    author: 'SignResize Technical Verification Team',
    authorRole: 'State Commission Standards Desk',
    readTime: '7 min read',
    tags: ['State PSC', 'OTR Registration', 'UPPSC', 'BPSC', 'MPSC', 'RPSC', 'Document Guidelines'],
    relatedExamPreset: 'uppsc-uttar-pradesh',
    generateHtml: (dateStr) => `
      <h2>State PSC One-Time Registration (OTR) Mandate</h2>
      <p>State Public Service Commissions across India—including <strong>UPPSC (Uttar Pradesh), BPSC (Bihar), MPSC (Maharashtra), and RPSC (Rajasthan)</strong>—have made OTR mandatory. Photographs and signatures uploaded during OTR are permanently locked to candidate profiles for all future competitive exam notices.</p>

      <h2>State Commission Document Comparison Matrix</h2>
      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-3 border-b">Commission</th>
              <th class="p-3 border-b">Signature Size &amp; Specs</th>
              <th class="p-3 border-b">Photo Dimensions &amp; Size</th>
              <th class="p-3 border-b">Special Rules</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            <tr>
              <td class="p-3 font-semibold text-primary">UPPSC OTR</td>
              <td class="p-3 font-mono">10 KB – 20 KB (140&times;60 px)</td>
              <td class="p-3 font-mono">20 KB – 50 KB (3.5&times;4.5 cm)</td>
              <td class="p-3">White background; Candidate name &amp; photo date beneath picture</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">BPSC (Bihar)</td>
              <td class="p-3 font-mono">10 KB – 20 KB (Separate Files)</td>
              <td class="p-3 font-mono">20 KB – 50 KB (3.5&times;4.5 cm)</td>
              <td class="p-3">Requires two separate uploads for Hindi and English running signatures</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">MPSC (Maharashtra)</td>
              <td class="p-3 font-mono">10 KB – 20 KB</td>
              <td class="p-3 font-mono">20 KB – 50 KB (200&times;230 px)</td>
              <td class="p-3">Black ballpoint pen on plain white sheet; Cursive running writing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
        <div class="flex items-center justify-between text-slate-400 text-[11px]">
          <span>⚡ State OTR Portal Error Prevention Code Snippet</span>
          <span>Portal Validation Standard</span>
        </div>
        <pre class="overflow-x-auto text-emerald-400"><code>If photo_background != "white" OR signature_casing == "BLOCK_CAPS":
    Return Portal_Error: "Document failed OCR automated quality check"</code></pre>
      </div>

      <h2>Step-by-Step State OTR Navigation Workflow</h2>
      <div class="my-8 space-y-4">
        <div class="relative border-l-2 border-primary/30 ml-4 pl-6 space-y-6">
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">1</div>
            <h4 class="font-bold text-foreground text-sm">Register OTR Profile</h4>
            <p class="text-xs text-muted-foreground mt-1">Enter Aadhar / Mobile / Email to generate permanent OTR Registration ID on your State PSC portal.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">2</div>
            <h4 class="font-bold text-foreground text-sm">Upload High-Contrast Photos &amp; Signatures</h4>
            <p class="text-xs text-muted-foreground mt-1">Use SignResize to remove background phone shadows and compress signatures precisely to the 10–20 KB bound.</p>
          </div>
        </div>
      </div>

      <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Prepare Your OTR Files in 1 Click</h4>
        <p class="text-sm text-muted-foreground mt-1">Select your state commission preset to automatically apply exact dimensions and compression limits directly in your browser.</p>
        <a href="/#tool-workspace" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
          Launch State PSC Resizer &rarr;
        </a>
      </div>
    `
  },
  {
    slugBase: 'upsc-csat-paper-2-master-blueprint-comprehension-hacks',
    title: 'UPSC CSE Prelims: CSAT Paper-II Qualifying Blueprint, Reading Comprehension & Speed Logic Hacks',
    excerpt: 'Master the 33% CSAT qualifying cutoff with proven strategies for high-accuracy reading comprehension, critical reasoning, arithmetic problem selection, and UPSC OTR document rules.',
    category: 'Study Prep',
    author: 'SignResize Academic Research Desk',
    authorRole: 'Civil Services Methodology Team',
    readTime: '8 min read',
    tags: ['UPSC Prelims', 'CSAT Strategy', 'Reading Comprehension', 'Aptitude Speed', 'Civil Services', 'UPSC OTR'],
    relatedExamPreset: 'upsc-civil-services',
    generateHtml: (dateStr) => `
      <h2>The Decisive Role of CSAT (Paper-II) in UPSC Prelims</h2>
      <p>In recent Civil Services examinations, CSAT Paper-II has proven to be the major hurdle for thousands of aspirants. Despite scoring 100+ in General Studies Paper-I, failing to secure the mandatory qualifying threshold of <strong>33% (66.67 marks out of 200)</strong> results in immediate disqualification.</p>

      <h2>CSAT Sectional Breakdown &amp; Target Matrix</h2>
      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-3 border-b">Section</th>
              <th class="p-3 border-b">Questions</th>
              <th class="p-3 border-b">Target Attempt</th>
              <th class="p-3 border-b">Scoring &amp; Accuracy Strategy</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            <tr>
              <td class="p-3 font-semibold text-primary">Reading Comprehension</td>
              <td class="p-3 font-mono">25–28 Qs</td>
              <td class="p-3 font-mono">20 Qs</td>
              <td class="p-3">Identify author's central assumption, corollaries, and rational implications. Avoid extreme options.</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">Quantitative Aptitude</td>
              <td class="p-3 font-mono">35–40 Qs</td>
              <td class="p-3 font-mono">15 Qs</td>
              <td class="p-3">Focus on Number Systems, Remainder Theorem, Percentages, Ratio, Work &amp; Time. Avoid complex P&amp;C.</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">Logical &amp; Analytical Reasoning</td>
              <td class="p-3 font-mono">15–20 Qs</td>
              <td class="p-3 font-mono">12 Qs</td>
              <td class="p-3">Prioritize Syllogisms, Blood Relations, Direction Sense, and linear seating arrangements.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
        <div class="flex items-center justify-between text-slate-400 text-[11px]">
          <span>⚡ UPSC CSAT Safe Attempt &amp; Score Calculation Snippet</span>
          <span>UPSC Marking Standard</span>
        </div>
        <pre class="overflow-x-auto text-emerald-400"><code>Target: Attempt 45 Questions with >= 80% Accuracy
Raw Score = (36 Correct × 2.50) - (9 Wrong × 0.833) = 90 - 7.50 = 82.50 Marks (Comfortably clears 66.67)</code></pre>
      </div>

      <h2>UPSC OTR Document Upload Rules</h2>
      <p>Candidates registering on the UPSC One Time Registration portal (upsconline.nic.in) must adhere to precise file specifications for photo and signature uploads:</p>
      <ul>
        <li><strong>Passport Photograph:</strong> 350 &times; 350 pixels, size strictly <strong>20 KB to 300 KB</strong>. Must state candidate's name and photo date at the bottom.</li>
        <li><strong>Scanned Signature:</strong> 140 &times; 60 pixels, size strictly <strong>10 KB to 20 KB</strong> in black ink.</li>
      </ul>

      <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Preparing UPSC OTR Documents?</h4>
        <p class="text-sm text-muted-foreground mt-1">Ensure your UPSC passport photo and signature comply with official OTR specs before the registration portal closes.</p>
        <a href="/upsc-signature-resize/" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
          Open UPSC Resizer Preset &rarr;
        </a>
      </div>
    `
  }
];

/**
 * Optionally prompts Google Gemini API if GEMINI_API_KEY is present
 */
async function tryGenerateWithGemini(existingSlugs, todayFormatted) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  console.log('GEMINI_API_KEY detected. Requesting fresh long-form article from Gemini API...');
  const prompt = `You are the lead editor for SignResize.in, a premier document compliance & competitive examination guidance portal in India.
Current Date: ${todayFormatted}
Categories to choose from: 'Exam Alerts' | 'Study Prep' | 'Guidelines & Tips' | 'Career Opportunity'
Existing slugs to avoid: ${JSON.stringify(existingSlugs.slice(0, 10))}

Generate an exhaustive, highly detailed, long-form master article (1200+ words) for Indian competitive exams (e.g. SSC, UPSC, RRB, Banking, State PSCs).
CRITICAL EDITORIAL CONSTRAINTS:
1. Title and Content MUST match 100% in deep detail. Never write a generic superficial summary.
2. Must include an HTML SVG diagram / visual illustration or visual comparison card (e.g. Accepted vs Rejected signature graphic).
3. Must include a numbered Step-by-Step Navigation guide timeline (<div class="my-8 space-y-4">...</div>).
4. Must include a Rule / Code / Formula Snippet callout box (<div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800">...</div>).
5. Must include a comparative spec/strategy HTML table (<table>...</table>).
6. Must include an interactive SignResize tool callout card (<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">...</div>) linking to /photo-resizer/, /ssc-signature-resize/, /upsc-signature-resize/, or /rrb-signature-resize/.

Provide your output strictly in valid JSON format matching this schema:
{
  "slug": "unique-hyphenated-lowercase-slug-2026",
  "title": "Exhaustive SEO Title (under 90 chars)",
  "excerpt": "2-3 informative sentences summarizing the article",
  "category": "Exam Alerts" | "Study Prep" | "Guidelines & Tips" | "Career Opportunity",
  "publishDate": "${todayFormatted}",
  "lastUpdated": "${todayFormatted}",
  "author": "SignResize Examination Standards Desk" or "SignResize Academic Research Desk",
  "authorRole": "Official Document Compliance Team" or "Competitive Exam Methodology Team",
  "readTime": "8 min read",
  "tags": ["5-6", "relevant", "keywords"],
  "relatedExamPreset": "ssc-general" | "upsc-civil-services" | "rrb-railway" | "ibps-sbi",
  "quickFacts": [
    { "label": "Conducting Body", "value": "Name of Commission" },
    { "label": "Total Vacancies", "value": "Number of vacancies" },
    { "label": "Application Deadline", "value": "Key date" },
    { "label": "Selection Stages", "value": "Stages summary" },
    { "label": "Document Specs", "value": "Dimensions & KB bounds" }
  ],
  "contentHtml": "<semantic HTML with <h2>, <h3>, <p>, <ul>, <ol>, SVG graphics, step-by-step navigation, code/rule snippets, comparison <table>, and SignResize tool callouts>",
  "faqs": [
    { "question": "Clear candidate question?", "answer": "In-depth, 3-5 sentence authoritative answer with official rules, cutoffs, and advice." }
  ]
}
Output ONLY raw JSON with no surrounding markdown backticks.`;

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 2500 }
      })
    });

    if (!res.ok) {
      console.warn(`Gemini API returned status ${res.status}: ${await res.text()}`);
      return null;
    }

    const data = await res.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
    const cleanJson = rawText.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
    const parsed = JSON.parse(cleanJson);

    if (parsed.slug && parsed.title && parsed.contentHtml) {
      return parsed;
    }
  } catch (err) {
    console.warn('Gemini API generation failed, falling back to curriculum pool:', err.message);
  }
  return null;
}

/**
 * Main execution routine
 */
async function main() {
  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const dryRun = args.includes('--dry-run');

  const today = getTodayFormatted();
  console.log(`[SignResize Daily Publisher] Checking date: ${today}`);

  if (!fs.existsSync(dataFilePath)) {
    throw new Error(`Data file not found at ${dataFilePath}`);
  }

  const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
  const existingSlugs = [...fileContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  const existingDates = [...fileContent.matchAll(/publishDate:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

  // Check if today's article already exists
  if (!force && existingDates.includes(today)) {
    console.log(`[SignResize Daily Publisher] Article for "${today}" already published. Nothing to do. (Use --force to override)`);
    process.exit(0);
  }

  // 1. Try Gemini API if key is present
  let article = await tryGenerateWithGemini(existingSlugs, today);

  // 2. Fallback to rich curriculum pool
  if (!article) {
    console.log('Selecting next high-yield article from curriculum pool...');
    const candidate = CURRICULUM_POOL.find(item => !existingSlugs.some(s => s.startsWith(item.slugBase)));
    
    if (candidate) {
      article = {
        slug: candidate.slugBase,
        title: candidate.title,
        excerpt: candidate.excerpt,
        category: candidate.category,
        publishDate: today,
        author: candidate.author,
        authorRole: candidate.authorRole,
        readTime: candidate.readTime,
        featured: true,
        tags: candidate.tags,
        relatedExamPreset: candidate.relatedExamPreset,
        contentHtml: candidate.generateHtml(today)
      };
    } else {
      // Dynamic fallback if all base slugs were used
      const ts = Date.now().toString(36);
      const fallbackItem = CURRICULUM_POOL[existingSlugs.length % CURRICULUM_POOL.length];
      article = {
        slug: `${fallbackItem.slugBase}-${ts}`,
        title: fallbackItem.title,
        excerpt: fallbackItem.excerpt,
        category: fallbackItem.category,
        publishDate: today,
        author: fallbackItem.author,
        authorRole: fallbackItem.authorRole,
        readTime: fallbackItem.readTime,
        featured: true,
        tags: fallbackItem.tags,
        relatedExamPreset: fallbackItem.relatedExamPreset,
        contentHtml: fallbackItem.generateHtml(today)
      };
    }
  }

  if (dryRun) {
    console.log('[Dry Run] Generated article:');
    console.log(JSON.stringify(article, null, 2));
    process.exit(0);
  }

  // Reset any previous featured posts to featured: false
  let updatedContent = fileContent.replace(/featured:\s*true/g, 'featured: false');

  // Format post object
  const postString = `  {
    slug: ${JSON.stringify(article.slug)},
    title: ${JSON.stringify(article.title)},
    excerpt: ${JSON.stringify(article.excerpt)},
    category: ${JSON.stringify(article.category)},
    publishDate: ${JSON.stringify(article.publishDate)},
    lastUpdated: ${JSON.stringify(article.lastUpdated || article.publishDate)},
    author: ${JSON.stringify(article.author || 'SignResize Examination Standards Desk')},
    authorRole: ${JSON.stringify(article.authorRole || 'Official Document Compliance Team')},
    readTime: ${JSON.stringify(article.readTime || '5 min read')},
    featured: true,
    tags: ${JSON.stringify(article.tags || [])},
    relatedExamPreset: ${article.relatedExamPreset ? JSON.stringify(article.relatedExamPreset) : 'undefined'},
    quickFacts: ${JSON.stringify(article.quickFacts || [], null, 4).replace(/^/gm, '    ').trim()},
    contentHtml: \`
${article.contentHtml.trim()}
    \`,
    faqs: ${JSON.stringify(article.faqs || [], null, 4).replace(/^/gm, '    ').trim()}
  },
`;

  // Insert at top of BLOG_POSTS array
  const marker = 'export const BLOG_POSTS: BlogPost[] = [';
  const markerIndex = updatedContent.indexOf(marker);
  if (markerIndex === -1) {
    throw new Error(`Marker "${marker}" not found in blogPostsData.ts`);
  }

  const insertionPoint = markerIndex + marker.length;
  updatedContent =
    updatedContent.slice(0, insertionPoint) +
    '\n' +
    postString +
    updatedContent.slice(insertionPoint);

  fs.writeFileSync(dataFilePath, updatedContent, 'utf-8');
  console.log(`[SignResize Daily Publisher] Successfully published: "${article.title}" (${article.slug})`);
}

main().catch(err => {
  console.error('[SignResize Daily Publisher] Error:', err);
  process.exit(1);
});
