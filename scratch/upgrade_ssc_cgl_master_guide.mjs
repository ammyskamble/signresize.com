// scratch/upgrade_ssc_cgl_master_guide.mjs
import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/blogPostsData.ts');
let fileContent = fs.readFileSync(filePath, 'utf-8');

const sscSlug = 'slug: "ssc-cgl-2026-master-application-preparation-guide",';
const nextSlug = 'slug: "rrb-ntpc-2026-master-document-rules-preparation-strategy",';

const startIndex = fileContent.indexOf(sscSlug);
const nextIndex = fileContent.indexOf(nextSlug);

if (startIndex === -1 || nextIndex === -1) {
  console.error('Could not locate slug anchors in file!');
  process.exit(1);
}

// Find the opening brace before startIndex
const openBraceIndex = fileContent.lastIndexOf('  {', startIndex);
// Find the opening brace before nextIndex
const nextOpenBraceIndex = fileContent.lastIndexOf('  {', nextIndex);

const upgradedPost = `  {
    slug: "ssc-cgl-2026-master-application-preparation-guide",
    title: "SSC CGL 2026 Master Guide: Tier-1 & Tier-2 Strategy, Signature 10-20KB Resize & Live Photo Rules",
    metaTitle: "SSC CGL 2026 Master Guide: Photo, Signature & Syllabus",
    metaDescription: "Complete SSC CGL 2026 master guide: 140x60 px signature resize (10-20 KB), live webcam photo setup, Tier-1 & Tier-2 syllabus, salary matrix, and portal steps.",
    excerpt: "Comprehensive candidate blueprint for Staff Selection Commission CGL 2026: Tier-1 & Tier-2 sectional weightage, 10-20KB signature resize rules, live webcam photo setup, and 7th CPC salary matrix.",
    category: "Exam Alerts",
    country: "IN",
    publishDate: "Sept 18, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Oct 07, 2026",
    deployedAt: "Oct 07, 2026 • 11:45 PM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "Staff Selection Commission Analytics Team",
    readTime: "11 min read",
    featured: true,
    tags: [
      "SSC CGL 2026",
      "SSC Signature Resize",
      "10 to 20 KB Signature",
      "Live Photo Rules",
      "Tier 1 Preparation",
      "Tier 2 Pattern",
      "SSC Salary Matrix",
      "Govt Exam Strategy"
    ],
    relatedExamPreset: "ssc-general",
    quickFacts: [
      { label: "Conducting Body", value: "Staff Selection Commission (SSC, New Delhi)" },
      { label: "Target Cadres", value: "ASO (MEA, CSS, IB), Income Tax Inspector, GST Inspector, CBI SI, Auditor, Tax Assistant" },
      { label: "Selection Framework", value: "Tier-1 (Screening) + Tier-2 (Merit Ranking) + DEST Typing Test" },
      { label: "Signature Bounds", value: "140 × 60 px | 10 KB to 20 KB | Black Ink on White Paper (No Capital Letters)" },
      { label: "Photo Format", value: "Live Webcam Stream / MySSC Mobile App (Plain Light Background, No Caps/Glasses)" },
      { label: "Tier-1 Blueprint", value: "100 MCQs | 200 Marks | 60 Minutes | Negative Marking: 0.50 Marks" },
      { label: "Tier-2 Merit Total", value: "390 Marks (Maths 90 + Reasoning 90 + English 135 + GA 75) + Qualifying Modules" },
      { label: "Starting Pay Matrix", value: "₹35,000 to ₹85,000 Gross Monthly (Pay Level 4 to Level 8, 7th CPC)" },
      { label: "Official Web Portal", value: "ssc.gov.in (One-Time Registration OTR)" }
    ],
    faqs: [
      {
        question: "What are the official signature dimensions and file size bounds for SSC CGL?",
        answer: "==SSC requires scanned signatures to measure exactly 140 pixels in width by 60 pixels in height (aspect ratio roughly 4.0 cm × 2.0 cm), with file size strictly between 10.0 KB and 20.0 KB in JPG or JPEG format. Signatures must be written in running cursive handwriting using a black ballpoint pen on unruled white paper. Signatures in ALL CAPITAL or BLOCK letters are rejected automatically.=="
      },
      {
        question: "How do I resize my signature for SSC to 10–20 KB online?",
        answer: "==Sign on clean white paper using a black ballpoint pen, take a clear photo in good light, crop tightly with a 2–3 mm margin, upload it to the free SignResize SSC Signature Tool, select the SSC preset (140×60 px / 10–20 KB), and download your portal-compliant JPG file ready for ssc.gov.in.=="
      },
      {
        question: "Can I use blue ink for my SSC signature upload?",
        answer: "==While black ballpoint ink is officially mandated by the Staff Selection Commission for high-contrast optical scanner verification, dark blue ink signatures can be accepted only if they reproduce with sharp, dark strokes on pure white paper without grey background shadows. Gel ink and fountain pens are prohibited because they bleed into paper fibers.=="
      },
      {
        question: "What are the live photo webcam capture rules on ssc.gov.in?",
        answer: "==SSC does not permit pre-scanned photo uploads for CGL; candidates must capture a live photo using the browser webcam on ssc.gov.in or via the official MySSC mobile application. The photo must feature a plain light-colored background, face occupying 80% of the frame, frontal lighting without shadows, and completely unobstructed eyes without caps, tinted spectacles, or reading glasses.=="
      },
      {
        question: "What is the Tier-1 exam pattern and negative marking penalty in SSC CGL 2026?",
        answer: "==Tier-1 consists of 100 multiple-choice questions for 200 marks across four subjects: General Intelligence and Reasoning (25Q/50M), General Awareness (25Q/50M), Quantitative Aptitude (25Q/50M), and English Comprehension (25Q/50M). Duration is 60 minutes with a negative marking penalty of 0.50 marks per incorrect response. Tier-1 is qualifying in nature.=="
      },
      {
        question: "How is the final SSC CGL merit list calculated in Tier-2?",
        answer: "==Final merit ranking is calculated out of 390 marks in Tier-2 Paper-I: Mathematical Abilities (30Q × 3 = 90 marks), Reasoning (30Q × 3 = 90 marks), English Language (45Q × 3 = 135 marks), and General Awareness (25Q × 3 = 75 marks). Candidates must also qualify the Computer Knowledge Module (60 marks) and the Data Entry Speed Test (DEST typing).=="
      },
      {
        question: "What is the typing speed requirement in the SSC CGL DEST test?",
        answer: "==Candidates must complete 2,000 key depressions over a 15-minute passage on a computer terminal, which equates to an effective typing speed of approximately 27 words per minute (WPM). The DEST test is mandatory for all posts and qualifying in nature with permissible error limits between 5% and 10%.=="
      },
      {
        question: "What is the educational qualification and age eligibility for SSC CGL?",
        answer: "==Candidates must possess a Bachelor's Degree in any discipline from a recognized university on or before the crucial closing date. The age limit ranges between 18–27, 18–30, or up to 32 years depending on post cadre, with statutory relaxations of +3 years for OBC, +5 years for SC/ST, and +10 to +15 years for PwBD.=="
      },
      {
        question: "What is the in-hand salary for Pay Level 7 posts like ASO and Income Tax Inspector?",
        answer: "==Pay Level 7 posts carry a basic pay of ₹44,900. In Class X metro cities (such as Delhi, Mumbai, Bengaluru), with 50% Dearness Allowance (DA), 30% HRA, and Transport Allowance, gross monthly pay is approximately ₹85,000, yielding a net in-hand monthly salary of approximately ₹73,000 to ₹77,000 after NPS deductions.=="
      },
      {
        question: "Can an average candidate clear SSC CGL from scratch in 6 months?",
        answer: "==Yes. A proven 6-month roadmap involves: Months 1–3 dedicated to syllabus completion and core arithmetic/grammar concepts, Months 4–5 solving 5,000+ TCS previous year questions (PYQs) to build sectional speed, and Month 6 attempting 40+ full-length mock tests with comprehensive error log revision.=="
      }
    ],
    contentHtml: \`
      <div class="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
        <h4 class="font-bold text-primary mb-2">⚡ Direct Answer: SSC CGL 2026 Master Examination &amp; Upload Blueprint</h4>
        <p class="text-sm text-foreground/90 leading-relaxed">
          The Staff Selection Commission Combined Graduate Level (SSC CGL 2026) examination recruits for premier Group B and Group C central government posts across Indian ministries. Application compliance on <strong>ssc.gov.in</strong> requires a two-step digital upload: a <strong>live webcam photo</strong> captured against a plain light background without spectacles or caps, and a <strong>140 × 60 pixel scanned signature</strong> strictly compressed between <strong>10.0 KB and 20.0 KB</strong> in black running ink. Final merit rankings depend exclusively on <strong>Tier-2 Paper-I (390 Marks)</strong> alongside qualifying Computer Knowledge and Data Entry Speed Test (DEST) benchmarks.
        </p>
      </div>

      <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
        <div class="flex items-center justify-between text-slate-400 text-[11px]">
          <span>⚡ Official SSC Scoring &amp; Merit Formula</span>
          <span>Staff Selection Commission Rulebook</span>
        </div>
        <pre class="overflow-x-auto text-emerald-400"><code>Tier-1 Raw Score = (Correct Attempts × 2.0) - (Incorrect Attempts × 0.50) [Qualifying Only]
Tier-2 Merit Score = (Maths 30Q × 3) + (Reasoning 30Q × 3) + (English 45Q × 3) + (GA 25Q × 3) = 390 Marks
Qualifying Modules: Computer Knowledge (20Q × 3 = 60 Marks) + DEST Typing (2000 Key Depressions / 15 Mins)</code></pre>
      </div>

      <h2 id="overview">⚡ 1. SSC CGL 2026 Examination Snapshot &amp; Cadre Hierarchy</h2>
      <p>
        The Combined Graduate Level Examination is India's most prestigious non-civil services examination, attracting over 30 lakh applicants each recruitment cycle. Recruited officers serve across premier intelligence, tax, vigilance, and administrative directorates:
      </p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground font-semibold">
              <th class="p-3 border border-border">Cadre Group &amp; Pay Level</th>
              <th class="p-3 border border-border">Premier Job Designations</th>
              <th class="p-3 border border-border">Controlling Ministry / Department</th>
              <th class="p-3 border border-border">Age Bracket (UR)</th>
              <th class="p-3 border border-border">Initial Gross Monthly Pay</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold text-primary">Pay Level 8 (₹47,600 – ₹1,51,100)</td>
              <td class="p-3 border border-border">Assistant Audit Officer (AAO), Assistant Accounts Officer</td>
              <td class="p-3 border border-border">Comptroller &amp; Auditor General of India (CAG)</td>
              <td class="p-3 border border-border">18 to 30 Years</td>
              <td class="p-3 border border-border font-mono">₹90,000 – ₹95,000</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold text-primary">Pay Level 7 (₹44,900 – ₹1,42,400)</td>
              <td class="p-3 border border-border">ASO in MEA, CSS, IB, Railway; Inspector of Income Tax (CBDT); GST Inspector (CBIC)</td>
              <td class="p-3 border border-border">Ministry of External Affairs, Finance, Home Affairs</td>
              <td class="p-3 border border-border">20 to 30 Years</td>
              <td class="p-3 border border-border font-mono">₹82,000 – ₹86,000</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold text-primary">Pay Level 6 (₹35,400 – ₹1,12,400)</td>
              <td class="p-3 border border-border">Sub-Inspector in CBI, NIA; Divisional Accountant (CAG); Statistical Investigator</td>
              <td class="p-3 border border-border">Central Bureau of Investigation, MoSPI</td>
              <td class="p-3 border border-border">18 to 30 Years</td>
              <td class="p-3 border border-border font-mono">₹65,000 – ₹70,000</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold text-primary">Pay Level 5 (₹29,200 – ₹92,300)</td>
              <td class="p-3 border border-border">Auditor, Accountant, Junior Accountant</td>
              <td class="p-3 border border-border">CAG, CGA, Controller General of Defence Accounts (CGDA)</td>
              <td class="p-3 border border-border">18 to 27 Years</td>
              <td class="p-3 border border-border font-mono">₹54,000 – ₹58,000</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold text-primary">Pay Level 4 (₹25,500 – ₹81,100)</td>
              <td class="p-3 border border-border">Tax Assistant (CBDT &amp; CBIC), Upper Division Clerk (UDC)</td>
              <td class="p-3 border border-border">Revenue, Narcotics, Military Engineer Services (MES)</td>
              <td class="p-3 border border-border">18 to 27 Years</td>
              <td class="p-3 border border-border font-mono">₹46,000 – ₹50,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Securing a final appointment begins with flawless digital application compliance. Aspirants can instantly format their uploads using our 
        <a href="/ssc-signature-resize/" class="text-primary font-semibold underline hover:text-primary/80">SSC Signature Resizer (10–20 KB)</a> 
        and inspect other national examination requirements on our 
        <a href="/government-jobs/" class="text-primary font-semibold underline hover:text-primary/80">Government Job Directory</a>.
      </p>

      <h2 id="signature-rules">✍️ 2. Official SSC Signature Specifications &amp; Step-by-Step Resizing Protocol</h2>
      <p>
        Over <strong>1.2 lakh online applications are rejected annually</strong> during preliminary automated scrutiny on <code>ssc.gov.in</code> due to non-compliant signatures. To prevent disqualification, candidates must adhere strictly to the commission's official dimensions and file size bounds:
      </p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground font-semibold">
              <th class="p-3 border border-border">Technical Parameter</th>
              <th class="p-3 border border-border">Official Commission Standard</th>
              <th class="p-3 border border-border">Why Non-Compliance Triggers Rejection</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Pixel Dimensions</td>
              <td class="p-3 border border-border font-mono">140 × 60 Pixels (Aspect Ratio 7:3)</td>
              <td class="p-3 border border-border">Non-standard dimensions distort signature aspect ratios on generated admit cards.</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Physical Equivalent</td>
              <td class="p-3 border border-border">4.0 cm Width × 2.0 cm Height</td>
              <td class="p-3 border border-border">Official print specification for biometric attendance sheets at examination centres.</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Strict File Weight</td>
              <td class="p-3 border border-border font-mono text-emerald-600 dark:text-emerald-400 font-bold">10.0 KB to 20.0 KB</td>
              <td class="p-3 border border-border">Files under 10 KB suffer heavy pixelation; files over 20 KB are blocked by portal upload filters.</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">File Format</td>
              <td class="p-3 border border-border font-mono">JPG / JPEG Only</td>
              <td class="p-3 border border-border">PNG, PDF, or WEBP extensions cause immediate upload script failure.</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Ink Color &amp; Type</td>
              <td class="p-3 border border-border">Dark Black Ballpoint Pen (Recommended)</td>
              <td class="p-3 border border-border">High-speed OCR scanners at exam centres convert signatures to binary bitmaps; faint blue ink can disappear.</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Handwriting Style</td>
              <td class="p-3 border border-border font-bold text-rose-600 dark:text-rose-400">Natural Running Cursive Handwriting</td>
              <td class="p-3 border border-border">Signatures in ALL CAPITAL / BLOCK letters cause automatic disqualification.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-8 p-6 rounded-2xl bg-card border border-border shadow-sm">
        <h3 class="text-base font-bold text-foreground mb-4 flex items-center gap-2">
          <span>📐</span> How to Resize Your Signature for SSC in 5 Easy Steps
        </h3>
        <p class="text-xs text-muted-foreground mb-4">
          Follow this proven 5-step workflow to prepare a compliant signature on any mobile phone or computer:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">1</div>
            <span class="font-bold text-xs text-foreground">Sign on Paper</span>
            <span class="text-[11px] text-muted-foreground">Clean, unruled white paper with dark black/blue ballpoint pen</span>
          </div>
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">2</div>
            <span class="font-bold text-xs text-foreground">Capture Photo</span>
            <span class="text-[11px] text-muted-foreground">Take a well-lit photo avoiding phone shadows or yellow bulbs</span>
          </div>
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">3</div>
            <span class="font-bold text-xs text-foreground">Crop Margins</span>
            <span class="text-[11px] text-muted-foreground">Crop closely leaving a tiny 2–3 mm margin around strokes</span>
          </div>
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">4</div>
            <span class="font-bold text-xs text-foreground">Select Preset</span>
            <span class="text-[11px] text-muted-foreground">Open SignResize and pick the SSC preset (140×60 px / 10–20 KB)</span>
          </div>
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">5</div>
            <span class="font-bold text-xs text-foreground">Download JPG</span>
            <span class="text-[11px] text-muted-foreground">Automated white filter cleans paper; download ready file</span>
          </div>
        </div>
      </div>

      <div class="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-5 rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/5 space-y-3">
          <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
            <span><svg class="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg></span>
            <span>VALID / ACCEPTED SSC SIGNATURE</span>
          </div>
          <div class="h-24 rounded-xl bg-white border border-emerald-200 flex items-center justify-center p-3 shadow-inner">
            <svg class="w-48 h-16" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 40 C30 10, 40 45, 60 25 C80 5, 90 45, 110 30 C130 15, 140 35, 160 20 C170 12, 185 28, 190 22" stroke="#111827" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 48 L175 48" stroke="#111827" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <ul class="text-xs space-y-1 text-slate-700 dark:text-slate-300">
            <li>✅ Continuous natural running cursive handwriting</li>
            <li>✅ Black ballpoint pen on pure white unruled paper</li>
            <li>✅ Exact 140 &times; 60 px canvas | Size: 14.8 KB (Matches 10–20 KB bound)</li>
          </ul>
        </div>

        <div class="p-5 rounded-2xl border-2 border-rose-500/30 bg-rose-500/5 space-y-3">
          <div class="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-xs uppercase tracking-wider">
            <span><svg class="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg></span>
            <span>REJECTED / DISQUALIFIED SIGNATURE</span>
          </div>
          <div class="h-24 rounded-xl bg-slate-200 border border-rose-200 flex items-center justify-center p-3 shadow-inner">
            <span class="font-mono font-bold tracking-widest text-slate-800 text-lg">VIKRAM SHARMA</span>
          </div>
          <ul class="text-xs space-y-1 text-slate-700 dark:text-slate-300">
            <li>❌ ALL CAPITAL / BLOCK LETTERS (Triggers automated portal rejection)</li>
            <li>❌ Grey camera shadow or dirty yellow paper background</li>
            <li>❌ File Size: 8.2 KB (Fails minimum 10.0 KB limit)</li>
          </ul>
        </div>
      </div>

      <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Resize Your Signature for SSC Now</h4>
        <p class="text-sm text-muted-foreground mt-1">
          SignResize automates cropping, white background cleaning, and file compression to 140×60 px and 10–20 KB directly in your browser without uploading your signature to any remote server.
        </p>
        <div class="flex flex-wrap gap-3 mt-3">
          <a href="/ssc-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
            Launch SSC Signature Resizer &rarr;
          </a>
          <a href="/photo-resizer/" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-95 transition">
            Passport Photo Resizer &rarr;
          </a>
        </div>
      </div>

      <h2 id="live-photo">📸 3. SSC Live Photo &amp; Webcam Capture Protocol (ssc.gov.in &amp; MySSC App)</h2>
      <p>
        With the launch of the new portal <code>ssc.gov.in</code>, the Staff Selection Commission completely abolished pre-scanned photograph uploads. Candidates must capture their live photograph in real-time during the application process:
      </p>

      <div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-3">
        <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
          <span>⚠️</span> Mandatory Live Webcam Rules to Prevent Rejection
        </h4>
        <ul class="list-disc pl-5 text-sm space-y-1.5 text-foreground/90">
          <li><strong>Plain Light Background:</strong> Sit or stand against a plain white or light off-white wall. Avoid patterned wallpapers, curtains, or cluttered bookshelves.</li>
          <li><strong>Zero Spectacles / Sunglasses:</strong> Remove all spectacles, including prescription reading glasses. Flash reflection on lenses obscures iris biometrics and results in automated AI rejection.</li>
          <li><strong>Frontal Eye Level &amp; 80% Coverage:</strong> Position the camera directly at eye level. Your face, neck, and shoulder contours must occupy at least 80% of the green oval alignment frame.</li>
          <li><strong>Uniform Frontal Lighting:</strong> Ensure direct frontal light on your face. Backlighting from windows or harsh overhead lighting casts shadows behind your ears and under your jawline.</li>
          <li><strong>Headwear Restrictions:</strong> Caps, hats, and beanies are strictly prohibited. Religious head coverings are permitted only if the entire facial oval from hairline to chin is fully visible.</li>
        </ul>
      </div>

      <h3>Capturing via the Official 'MySSC' Mobile Application</h3>
      <p>
        If your laptop webcam suffers from low resolution or poor lighting, use the official <strong>MySSC</strong> Android application available on the Google Play Store:
      </p>
      <ol class="list-decimal pl-5 space-y-2 text-sm text-foreground/90 my-3">
        <li>Log into the application using your 13-digit One-Time Registration (OTR) number and password.</li>
        <li>Navigate to the active application form under 'Capture Live Photo'.</li>
        <li>Grant camera permissions and hold the phone steadily at eye level in a brightly lit room.</li>
        <li>Align your face within the digital oval until the frame indicator turns green, then tap capture.</li>
      </ol>

      <h2 id="exam-pattern">📚 4. Tier-1 &amp; Tier-2 Examination Blueprint &amp; Subject Weightage</h2>
      <p>
        The SSC CGL examination is conducted in two computer-based stages: Tier-1 acts as a qualifying filter, while Tier-2 determines 100% of the final merit ranking.
      </p>

      <h3>Tier-1 Computer Based Examination (CBE) – Qualifying Screening</h3>
      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground font-semibold">
              <th class="p-3 border border-border">Subject Section</th>
              <th class="p-3 border border-border">Question Count</th>
              <th class="p-3 border border-border">Maximum Marks</th>
              <th class="p-3 border border-border">Ideal Time Budget</th>
              <th class="p-3 border border-border">High-Yield Focus Areas</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold text-primary">General Intelligence &amp; Reasoning</td>
              <td class="p-3 border border-border font-mono">25</td>
              <td class="p-3 border border-border font-mono">50</td>
              <td class="p-3 border border-border font-mono">15 Mins</td>
              <td class="p-3 border border-border">Analogies, Coding-Decoding, Non-Verbal Series, Syllogisms, Blood Relations</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold text-primary">General Awareness</td>
              <td class="p-3 border border-border font-mono">25</td>
              <td class="p-3 border border-border font-mono">50</td>
              <td class="p-3 border border-border font-mono">10 Mins</td>
              <td class="p-3 border border-border">Polity Articles/Amendments, Modern History, Static GK, 8 Months Current Affairs</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold text-primary">Quantitative Aptitude</td>
              <td class="p-3 border border-border font-mono">25</td>
              <td class="p-3 border border-border font-mono">50</td>
              <td class="p-3 border border-border font-mono">25 Mins</td>
              <td class="p-3 border border-border">Geometry, Mensuration 2D/3D, Trigonometry, Algebra, Profit &amp; Loss, Data Interpretation</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold text-primary">English Comprehension</td>
              <td class="p-3 border border-border font-mono">25</td>
              <td class="p-3 border border-border font-mono">50</td>
              <td class="p-3 border border-border font-mono">10 Mins</td>
              <td class="p-3 border border-border">Cloze Test, Error Spotting, Idioms/Phrases, One-Word Substitution, Active-Passive Voice</td>
            </tr>
            <tr class="border-b border-border/50 font-bold bg-muted">
              <td class="p-3 border border-border">Total Tier-1 Examination</td>
              <td class="p-3 border border-border font-mono">100</td>
              <td class="p-3 border border-border font-mono">200</td>
              <td class="p-3 border border-border font-mono">60 Minutes</td>
              <td class="p-3 border border-border">Negative Penalty: 0.50 Marks (Qualifying Only)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Tier-2 Examination Pattern – 390-Mark Merit Architecture</h3>
      <p>
        Tier-2 Paper-I is conducted on a single day and comprises three sequential sections. Only Section-I and Section-II scores count toward the final 390-mark merit list:
      </p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground font-semibold">
              <th class="p-3 border border-border">Tier-2 Section</th>
              <th class="p-3 border border-border">Module Subjects</th>
              <th class="p-3 border border-border">Questions &amp; Marks</th>
              <th class="p-3 border border-border">Weightage</th>
              <th class="p-3 border border-border">Merit Evaluation Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Section I (1 Hour)</td>
              <td class="p-3 border border-border">Mathematical Abilities (30Q) + Reasoning (30Q)</td>
              <td class="p-3 border border-border font-mono">60 Questions × 3 = 180 Marks</td>
              <td class="p-3 border border-border font-mono">46.1%</td>
              <td class="p-3 border border-border font-semibold text-emerald-600 dark:text-emerald-400">Counts for Final Merit List</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Section II (1 Hour)</td>
              <td class="p-3 border border-border">English Language (45Q) + General Awareness (25Q)</td>
              <td class="p-3 border border-border font-mono">70 Questions × 3 = 210 Marks</td>
              <td class="p-3 border border-border font-mono">53.9%</td>
              <td class="p-3 border border-border font-semibold text-emerald-600 dark:text-emerald-400">Counts for Final Merit List</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Section III Module 1 (15 Mins)</td>
              <td class="p-3 border border-border">Computer Knowledge Test (20Q)</td>
              <td class="p-3 border border-border font-mono">20 Questions × 3 = 60 Marks</td>
              <td class="p-3 border border-border font-mono">Qualifying</td>
              <td class="p-3 border border-border text-amber-600 font-semibold">Must qualify; higher cut-off for ASO/Tax Assistant</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Section III Module 2 (15 Mins)</td>
              <td class="p-3 border border-border">Data Entry Speed Test (DEST)</td>
              <td class="p-3 border border-border font-mono">2,000 Key Depressions (~27 WPM)</td>
              <td class="p-3 border border-border font-mono">Qualifying</td>
              <td class="p-3 border border-border text-amber-600 font-semibold">Mandatory for all posts; disqualification if failed</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="salary">💰 5. 7th Pay Commission Salary Breakdown Across City Tiers</h2>
      <p>
        Salaries for SSC CGL recruits are governed by the 7th Central Pay Commission. Total in-hand remuneration depends significantly on whether your posting is in a Class X (Metropolitan), Class Y (Urban), or Class Z (Rural/Small Town) location:
      </p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground font-semibold">
              <th class="p-3 border border-border">Pay Matrix Level</th>
              <th class="p-3 border border-border">Basic Pay Scale</th>
              <th class="p-3 border border-border">Dearness Allowance (DA 50%)</th>
              <th class="p-3 border border-border">HRA (Class X - 30%)</th>
              <th class="p-3 border border-border">Approx. Gross Monthly Pay</th>
              <th class="p-3 border border-border">Net In-Hand Earnings</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold text-primary">Level 8 (AAO)</td>
              <td class="p-3 border border-border font-mono">₹47,600</td>
              <td class="p-3 border border-border font-mono">₹23,800</td>
              <td class="p-3 border border-border font-mono">₹14,280</td>
              <td class="p-3 border border-border font-mono">₹92,800</td>
              <td class="p-3 border border-border font-mono text-emerald-600 dark:text-emerald-400 font-bold">₹79,000 – ₹83,000</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold text-primary">Level 7 (ASO, ITI, GST)</td>
              <td class="p-3 border border-border font-mono">₹44,900</td>
              <td class="p-3 border border-border font-mono">₹22,450</td>
              <td class="p-3 border border-border font-mono">₹13,470</td>
              <td class="p-3 border border-border font-mono">₹85,600</td>
              <td class="p-3 border border-border font-mono text-emerald-600 dark:text-emerald-400 font-bold">₹73,000 – ₹77,000</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold text-primary">Level 6 (CBI SI, DA)</td>
              <td class="p-3 border border-border font-mono">₹35,400</td>
              <td class="p-3 border border-border font-mono">₹17,700</td>
              <td class="p-3 border border-border font-mono">₹10,620</td>
              <td class="p-3 border border-border font-mono">₹68,200</td>
              <td class="p-3 border border-border font-mono text-emerald-600 dark:text-emerald-400 font-bold">₹58,000 – ₹62,000</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold text-primary">Level 5 (Auditor)</td>
              <td class="p-3 border border-border font-mono">₹29,200</td>
              <td class="p-3 border border-border font-mono">₹14,600</td>
              <td class="p-3 border border-border font-mono">₹8,760</td>
              <td class="p-3 border border-border font-mono">₹56,400</td>
              <td class="p-3 border border-border font-mono text-emerald-600 dark:text-emerald-400 font-bold">₹48,000 – ₹51,000</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold text-primary">Level 4 (Tax Assistant)</td>
              <td class="p-3 border border-border font-mono">₹25,500</td>
              <td class="p-3 border border-border font-mono">₹12,750</td>
              <td class="p-3 border border-border font-mono">₹7,650</td>
              <td class="p-3 border border-border font-mono">₹49,500</td>
              <td class="p-3 border border-border font-mono text-emerald-600 dark:text-emerald-400 font-bold">₹41,000 – ₹44,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="portal-navigation">🪪 6. Step-by-Step ssc.gov.in Portal Navigation &amp; OTR Workflow</h2>
      <p>
        The Staff Selection Commission operates exclusively on its new digital platform (<code>ssc.gov.in</code>). Candidates must follow these sequential steps to submit their application without technical locks:
      </p>

      <ol class="list-decimal pl-5 space-y-3 text-sm text-foreground/90 my-4">
        <li><strong>One-Time Registration (OTR):</strong> Create or update your profile with your Aadhaar number, matriculation roll number, and personal details. Double-check your name spelling against your 10th marksheet.</li>
        <li><strong>Initiate Application:</strong> Under the 'Live Examinations' dashboard, click 'Apply' beside Combined Graduate Level Examination.</li>
        <li><strong>Capture Live Photo:</strong> Use your browser webcam or the MySSC mobile app. Ensure a light plain wall behind you and no glasses on your face. Verify that your face occupies 80% of the oval overlay.</li>
        <li><strong>Upload Scanned Signature:</strong> Select your 140 × 60 px JPG file resized via SignResize. Verify that file weight is strictly between 10 KB and 20 KB and written in natural cursive handwriting.</li>
        <li><strong>Select Exam Centres &amp; Post Preferences:</strong> Choose 3 regional test cities and input your cadre preferences.</li>
        <li><strong>Final Preview &amp; Fee Payment:</strong> Review every data field on the generated PDF preview. Submit the ₹100 fee via BHIM UPI, Net Banking, or Visa/Mastercard (women, SC, ST, PwBD, and Ex-Servicemen are 100% exempt).</li>
      </ol>
    \`
  },
`;

const newFileContent = fileContent.slice(0, openBraceIndex) + upgradedPost + fileContent.slice(nextOpenBraceIndex);
fs.writeFileSync(filePath, newFileContent, 'utf-8');
console.log('Successfully upgraded SSC CGL Master Guide in blogPostsData.ts');
