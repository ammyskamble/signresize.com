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
    slugBase: 'rrb-ntpc-2026-document-upload-rules-preparation-strategy',
    title: 'RRB NTPC 2026: Scanned Document Upload Rules, Sectional Weightage & High-Yield Preparation Strategy',
    excerpt: 'Complete candidate guide for Railway RRB NTPC 2026: CBT-1 marking scheme, 10-20KB signature rules, photograph guidelines, and speed calculation methods.',
    category: 'Study Prep',
    author: 'SignResize Academic Research Desk',
    authorRole: 'Railway Recruitment Strategy Desk',
    readTime: '6 min read',
    tags: ['RRB NTPC', 'Railway Exams', 'CBT 1 Prep', 'Signature 10-20KB', 'Maths Shortcuts'],
    relatedExamPreset: 'rrb-railway',
    generateHtml: (dateStr) => `
      <h2>RRB NTPC 2026: Key Examination Overview</h2>
      <p>The Railway Recruitment Boards (RRB) have activated the recruitment calendar for <strong>Non-Technical Popular Categories (NTPC)</strong>. With intense competition spanning across undergraduate and graduate posts, excelling in Computer Based Test 1 (CBT-1) requires both conceptual clarity and exact document compliance during registration.</p>

      <div class="my-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
        <h4 class="font-bold text-primary mb-2">⚡ CBT-1 Exam Pattern &amp; Time Distribution</h4>
        <ul class="space-y-1 text-sm">
          <li><strong>General Awareness:</strong> 40 Questions (Current Affairs, General Science, Indian History, Geography)</li>
          <li><strong>Mathematics:</strong> 30 Questions (Number Systems, Decimals, Fractions, LCM-HCF, Ratio, Percentages, Mensuration)</li>
          <li><strong>General Intelligence &amp; Reasoning:</strong> 30 Questions (Analogies, Coding, Syllogisms, Venn Diagrams)</li>
          <li><strong>Total Time:</strong> 90 Minutes (100 Questions with 1/3rd negative marking per incorrect response)</li>
        </ul>
      </div>

      <h2>Document Upload Compliance to Avoid Cancellation</h2>
      <p>Railway recruitment notices explicitly enforce strict criteria for candidate photograph and scanned signature files:</p>
      <ul>
        <li><strong>Scanned Photograph:</strong> Clear color passport photograph taken against a light or white background. Must be between <strong>20 KB and 50 KB</strong> in JPG format. Glasses with glare or tinted lenses are strictly barred.</li>
        <li><strong>Candidate Signature:</strong> Must be signed in running handwriting on white unruled paper using a black ballpoint pen. File weight must be between <strong>10 KB and 20 KB</strong> (140 &times; 60 pixels). Signatures written in capital letters will result in immediate disqualification.</li>
      </ul>

      <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Need RRB Signature &amp; Photo Formatted?</h4>
        <p class="text-sm text-muted-foreground mt-1">Use our dedicated RRB Railway preset to crop, clean dark shadows, and compress into the exact 10–20 KB bound in seconds.</p>
        <div class="flex flex-wrap gap-3 mt-3">
          <a href="/rrb-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
            Open RRB Resizer &rarr;
          </a>
          <a href="/photo-resizer/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-95 transition">
            Resize Passport Photo &rarr;
          </a>
        </div>
      </div>

      <h2>Recommended Daily Study Strategy</h2>
      <p>Divide your preparation into 3 focused blocks: devote 2 hours to Arithmetic drills, 1.5 hours to Logical Reasoning puzzles, and 2 hours to Current Affairs revision and Static GK topics like General Science and Modern Indian History.</p>
    `
  },
  {
    slugBase: 'state-psc-one-time-registration-otr-document-standards',
    title: 'State PSC One-Time Registration (OTR): Mandatory Signature & Photo Guidelines for UPPSC, BPSC, MPSC & RPSC',
    excerpt: 'Detailed checklist for State Public Service Commission One-Time Registration portals: dimensions, dual-boundary compression, and white background verification.',
    category: 'Guidelines & Tips',
    author: 'SignResize Technical Verification Team',
    authorRole: 'State Commission Standards Desk',
    readTime: '5 min read',
    tags: ['State PSC', 'OTR Registration', 'UPPSC', 'BPSC', 'MPSC', 'Document Guidelines'],
    relatedExamPreset: 'uppsc-uttar-pradesh',
    generateHtml: (dateStr) => `
      <h2>The Shift to Permanent One-Time Registration (OTR)</h2>
      <p>State Public Service Commissions across India—including <strong>UPPSC (Uttar Pradesh), BPSC (Bihar), MPSC (Maharashtra), and RPSC (Rajasthan)</strong>—have made One-Time Registration (OTR) mandatory. Once an applicant registers their profile, the uploaded photograph and signature are permanently tied to their profile across all upcoming recruitment examinations.</p>

      <h2>Key Dimension &amp; File Size Comparison</h2>
      <div class="my-5 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-2.5 border-b">Commission</th>
              <th class="p-2.5 border-b">Signature Size</th>
              <th class="p-2.5 border-b">Photo Dimensions &amp; Size</th>
              <th class="p-2.5 border-b">Special Mandatory Requirements</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            <tr>
              <td class="p-2.5 font-semibold text-primary">UPPSC OTR</td>
              <td class="p-2.5 font-mono">10 KB – 20 KB (140&times;60 px)</td>
              <td class="p-2.5 font-mono">20 KB – 50 KB (3.5&times;4.5 cm)</td>
              <td class="p-2.5">Clear white background, name and date beneath photo</td>
            </tr>
            <tr>
              <td class="p-2.5 font-semibold text-primary">BPSC (Bihar)</td>
              <td class="p-2.5 font-mono">10 KB – 20 KB (Hindi &amp; English)</td>
              <td class="p-2.5 font-mono">20 KB – 50 KB</td>
              <td class="p-2.5">Separate uploads for Hindi and English running signatures</td>
            </tr>
            <tr>
              <td class="p-2.5 font-semibold text-primary">MPSC (Maharashtra)</td>
              <td class="p-2.5 font-mono">10 KB – 20 KB</td>
              <td class="p-2.5 font-mono">20 KB – 50 KB (200&times;230 px)</td>
              <td class="p-2.5">Strict natural cursive handwriting; black ballpoint pen</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Common Pitfalls in State OTR Forms</h2>
      <ol class="space-y-2 text-sm text-foreground/90">
        <li><strong>Uploading Low-Resolution Phone Snapshots:</strong> Taking a picture under low indoor lighting causes grey or shadowy backgrounds that fail automatic optical validation. Always use our "Clean White Sheet" contrast filter.</li>
        <li><strong>Disregarding Hindi Signature Uploads:</strong> For BPSC and select northern state portals, candidates must supply both an English and a Hindi running signature. Ensure both files match the 10–20 KB bound.</li>
      </ol>

      <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Prepare Your OTR Files in 1 Click</h4>
        <p class="text-sm text-muted-foreground mt-1">Select your state commission preset to automatically apply the exact dimensions and compression limits directly in your browser.</p>
        <a href="/#tool-workspace" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
          Launch State PSC Resizer &rarr;
        </a>
      </div>
    `
  },
  {
    slugBase: 'upsc-csat-paper-2-qualifying-speed-strategy-comprehension-hacks',
    title: 'UPSC CSE Prelims: CSAT Paper-II Qualifying Blueprint, Reading Comprehension & Speed Logic Hacks',
    excerpt: 'Master the 33% CSAT qualifying cutoff with proven strategies for high-accuracy reading comprehension, critical reasoning, and arithmetic problem selection.',
    category: 'Study Prep',
    author: 'SignResize Academic Research Desk',
    authorRole: 'Civil Services Methodology Team',
    readTime: '7 min read',
    tags: ['UPSC Prelims', 'CSAT Strategy', 'Reading Comprehension', 'Aptitude Speed', 'Civil Services'],
    relatedExamPreset: 'upsc-civil-services',
    generateHtml: (dateStr) => `
      <h2>The Critical Role of Paper-II (CSAT) in UPSC Prelims</h2>
      <p>In recent years, the Civil Services Aptitude Test (CSAT Paper-II) has become the decisive eliminator for thousands of diligent aspirants. Despite scoring 100+ in General Studies Paper-I, failing to attain the minimum qualifying threshold of <strong>33% (66.67 marks out of 200)</strong> results in automatic disqualification from the Mains examination.</p>

      <h2>The Three Pillars of CSAT Paper-II</h2>
      <div class="my-4 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-2.5 border-b">Section</th>
              <th class="p-2.5 border-b">Average Questions</th>
              <th class="p-2.5 border-b">Target Attempt</th>
              <th class="p-2.5 border-b">Scoring Strategy</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            <tr>
              <td class="p-2.5 font-semibold text-primary">Reading Comprehension</td>
              <td class="p-2.5 font-mono">25–28 Qs</td>
              <td class="p-2.5 font-mono">20–22 Qs</td>
              <td class="p-2.5">Focus on central assumptions, logical corollaries, and primary inferences.</td>
            </tr>
            <tr>
              <td class="p-2.5 font-semibold text-primary">Quantitative Aptitude</td>
              <td class="p-2.5 font-mono">35–40 Qs</td>
              <td class="p-2.5 font-mono">15–18 Qs</td>
              <td class="p-2.5">Select high-accuracy topics: Number Systems, Remainder Theorem, Percentages, Ratio, and Time &amp; Work.</td>
            </tr>
            <tr>
              <td class="p-2.5 font-semibold text-primary">Logical &amp; Analytical Reasoning</td>
              <td class="p-2.5 font-mono">15–20 Qs</td>
              <td class="p-2.5 font-mono">12–15 Qs</td>
              <td class="p-2.5">Prioritize Syllogisms, Blood Relations, Direction Sense, and simple linear arrangements.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The "45-Question Safe Zone" Rule</h2>
      <p>To comfortably secure 80+ marks without risking negative marking penalties (0.83 marks deducted per wrong answer), target attempting <strong>45 to 50 well-vetted questions</strong> with at least 80% accuracy. Never rush into solving lengthy combinatorics or multi-case circular puzzles early in the paper.</p>

      <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Preparing UPSC OTR Documents?</h4>
        <p class="text-sm text-muted-foreground mt-1">Ensure your UPSC passport photo (350&times;350 px, 20–300 KB) and signature (140&times;60 px, 10–20 KB) comply with official OTR standards before the application portal closes.</p>
        <a href="/upsc-signature-resize/" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
          Open UPSC Resizer Preset &rarr;
        </a>
      </div>
    `
  },
  {
    slugBase: 'ssc-chsl-tier-1-speed-typing-photo-signature-guidelines',
    title: 'SSC CHSL 2026: Tier-1 Speed Strategy, English Comprehension Hacks & Live Photo Guidelines',
    excerpt: 'Key tactics to crack SSC CHSL Tier-1 with 160+ target scores, Tier-2 typing speed preparation, and live webcam photo compliance rules.',
    category: 'Exam Alerts',
    author: 'SignResize Examination Standards Desk',
    authorRole: 'Staff Selection Commission Analytics Team',
    readTime: '5 min read',
    tags: ['SSC CHSL', 'Tier 1 Prep', 'Typing Speed', 'Live Photo Guidelines', 'Govt Jobs'],
    relatedExamPreset: 'ssc-general',
    generateHtml: (dateStr) => `
      <h2>SSC CHSL 2026: Blueprint for LDC, JSA &amp; DEO Success</h2>
      <p>The Staff Selection Commission Combined Higher Secondary Level (CHSL) examination remains one of India's most popular recruitment routes for 10+2 candidates. With over 30 lakh applicants competing for Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), and Data Entry Operator (DEO) positions, achieving a competitive cut-off score requires consistent sectional discipline.</p>

      <h2>The Live Webcam Photo Rule &amp; Signature Compliance</h2>
      <p>Under the revised SSC online application platform, candidate photographs are captured directly using a live webcam or smartphone camera during form submission. Keep these critical requirements in mind:</p>
      <ul>
        <li><strong>Illumination:</strong> Sit in front of a natural light source or well-lit wall. Shadows behind your head or ears will cause the AI verification scanner to flag your submission.</li>
        <li><strong>Eye Contact &amp; Posture:</strong> Look straight into the lens with both ears visible and a neutral facial expression. Spectacles with reflections, caps, or mufflers will trigger automated rejection.</li>
        <li><strong>Scanned Signature (10–20 KB):</strong> Must be signed in black ballpoint pen on plain white paper, cropped to 140 &times; 60 pixels, and compressed within the 10.0 KB to 20.0 KB limit. Capital letter signatures will be rejected without appeal.</li>
      </ul>

      <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Format Your SSC Signature in Seconds</h4>
        <p class="text-sm text-muted-foreground mt-1">Avoid application rejection. Crop, remove phone shadows, and compress your signature to 10–20 KB with 100% privacy.</p>
        <a href="/ssc-signature-resize/" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
          Resize for SSC CHSL &rarr;
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

  console.log('GEMINI_API_KEY detected. Requesting fresh article from Gemini API...');
  const prompt = `You are the lead editor for SignResize.in, a specialized document preparation and competitive exam prep portal in India.
Current Date: ${todayFormatted}
Categories to choose from: 'Exam Alerts' | 'Study Prep' | 'Guidelines & Tips' | 'Career Opportunity'
Existing slugs to avoid: ${JSON.stringify(existingSlugs.slice(0, 10))}

Generate a fresh, highly detailed, realistic, and practical article for Indian competitive exams (e.g. SSC, UPSC, RRB, Banking, State PSCs, Defense).
Provide your output strictly in valid JSON format matching this schema:
{
  "slug": "unique-hyphenated-lowercase-slug-2026",
  "title": "Compelling SEO Title (under 80 chars)",
  "excerpt": "2-3 informative sentences summarizing the article",
  "category": "Exam Alerts" | "Study Prep" | "Guidelines & Tips" | "Career Opportunity",
  "publishDate": "${todayFormatted}",
  "author": "SignResize Examination Standards Desk" or "SignResize Academic Research Desk",
  "authorRole": "Official Document Compliance Team" or "Competitive Exam Methodology Team",
  "readTime": "5 min read",
  "tags": ["3-5", "relevant", "tags"],
  "relatedExamPreset": "ssc-general" | "upsc-civil-services" | "rrb-railway" | "ibps-sbi",
  "contentHtml": "<semantic HTML with <h2>, <h3>, <p>, <ul>, <ol>, comparison <table> if relevant, and an action callout linking to /photo-resizer/, /ssc-signature-resize/, /ibps-signature-resize/, or /compress-image-to-kb/>"
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
    author: ${JSON.stringify(article.author || 'SignResize Examination Standards Desk')},
    authorRole: ${JSON.stringify(article.authorRole || 'Official Document Compliance Team')},
    readTime: ${JSON.stringify(article.readTime || '5 min read')},
    featured: true,
    tags: ${JSON.stringify(article.tags || [])},
    relatedExamPreset: ${article.relatedExamPreset ? JSON.stringify(article.relatedExamPreset) : 'undefined'},
    contentHtml: \`
${article.contentHtml.trim()}
    \`
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
