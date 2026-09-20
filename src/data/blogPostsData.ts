export interface QuickFact {
  label: string;
  value: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Exam Alerts' | 'Study Prep' | 'Guidelines & Tips' | 'Career Opportunity';
  publishDate: string;
  lastUpdated?: string;
  author: string;
  authorRole: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  relatedExamPreset?: string; // e.g. 'ssc-general', 'ibps-sbi', 'rrb-railway', 'upsc-civil-services'
  quickFacts?: QuickFact[];
  faqs?: FAQItem[];
  contentHtml: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "upsc-csat-paper-2-master-blueprint-comprehension-hacks-mu9kjz22",
    title: "UPSC CSE Prelims: CSAT Paper-II Qualifying Blueprint, Reading Comprehension & Speed Logic Hacks",
    excerpt: "Master the 33% CSAT qualifying cutoff with proven strategies for high-accuracy reading comprehension, critical reasoning, arithmetic problem selection, and UPSC OTR document rules.",
    category: "Study Prep",
    publishDate: "Sept 20, 2026",
    author: "SignResize Academic Research Desk",
    authorRole: "Civil Services Methodology Team",
    readTime: "8 min read",
    featured: true,
    tags: ["UPSC Prelims","CSAT Strategy","Reading Comprehension","Aptitude Speed","Civil Services","UPSC OTR"],
    relatedExamPreset: "upsc-civil-services",
    contentHtml: `
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
  },

  {
    slug: "state-psc-otr-registration-photo-signature-guidelines-mu83y5zr",
    title: "State PSC One-Time Registration (OTR): Mandatory Signature & Photo Guidelines for UPPSC, BPSC, MPSC & RPSC",
    excerpt: "Detailed checklist for State Public Service Commission One-Time Registration portals: dimensions, dual-boundary compression, step-by-step navigation, and white background verification.",
    category: "Guidelines & Tips",
    publishDate: "Sept 19, 2026",
    author: "SignResize Technical Verification Team",
    authorRole: "State Commission Standards Desk",
    readTime: "7 min read",
    featured: false,
    tags: ["State PSC","OTR Registration","UPPSC","BPSC","MPSC","RPSC","Document Guidelines"],
    relatedExamPreset: "uppsc-uttar-pradesh",
    contentHtml: `
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
    slug: "ssc-cgl-2026-master-application-preparation-guide",
    title: "SSC CGL 2026 Master Application & Preparation Guide: Tier-1 Strategy, Photo/Signature Rules & Step-by-Step Portal Navigation",
    excerpt: "Comprehensive 2026 candidate handbook for Staff Selection Commission CGL: Tier-1 sectional breakdown, live webcam photo setup, 10-20KB signature rules, step-by-step portal navigation, and 90-day study timetable.",
    category: "Exam Alerts",
    publishDate: "Sept 18, 2026",
    author: "SignResize Examination Standards Desk",
    authorRole: "Staff Selection Commission Analytics Team",
    readTime: "9 min read",
    featured: false,
    tags: ["SSC CGL 2026", "Tier 1 Preparation", "Live Photo Rules", "Signature 10-20KB", "Govt Exam Strategy", "Portal Guide"],
    relatedExamPreset: "ssc-general",
    contentHtml: `
      <h2>SSC CGL 2026: Complete Recruitment Overview &amp; Key Milestones</h2>
      <p>The Staff Selection Commission (SSC) has released the official notification for the <strong>Combined Graduate Level (CGL) Examination 2026</strong>. Covering over 17,700 positions across premier central ministries—including Assistant Audit Officer (AAO), Assistant Section Officer (ASO in MEA and IB), Inspector of Income Tax, and Central Excise Inspector—CGL is India's most sought-after non-UPSC recruitment drive.</p>
      
      <p>Achieving a merit rank among 30+ lakh applicants demands a two-pronged strategy: securing high accuracy in Tier-1 Computer Based Examination (CBE) and adhering strictly to SSC's revamped digital document verification rules during online submission.</p>

      <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
        <h4 class="font-bold text-primary text-base flex items-center gap-2">
          <span>⚡</span> SSC CGL 2026 Critical Timelines &amp; Cutoff Benchmarks
        </h4>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-foreground/90 pt-1">
          <li><strong>Application Window:</strong> Open till Sept 24, 2026 (23:00 Hrs)</li>
          <li><strong>Correction Window:</strong> Sept 27 to Sept 29, 2026</li>
          <li><strong>Tier-I CBT Window:</strong> Oct – Nov 2026</li>
          <li><strong>Target Tier-1 Score:</strong> 150+ Marks (UR Category)</li>
        </ul>
      </div>

      <h2>Tier-1 Exam Blueprint &amp; Sectional Scoring Rules</h2>
      <p>Tier-1 serves as a qualifying screening test consisting of 100 multiple-choice questions carrying 200 total marks. Candidates get 60 minutes with a negative marking penalty of <strong>0.50 marks</strong> per incorrect answer.</p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-3 border-b">Subject Section</th>
              <th class="p-3 border-b">Questions</th>
              <th class="p-3 border-b">Marks</th>
              <th class="p-3 border-b">Recommended Time</th>
              <th class="p-3 border-b">High-Yield Focus Areas</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            <tr>
              <td class="p-3 font-semibold text-primary">General Intelligence &amp; Reasoning</td>
              <td class="p-3 font-mono">25</td>
              <td class="p-3 font-mono">50</td>
              <td class="p-3 font-mono">15 Mins</td>
              <td class="p-3">Analogies, Coding-Decoding, Syllogisms, Paper Folding, Non-verbal Series</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">General Awareness</td>
              <td class="p-3 font-mono">25</td>
              <td class="p-3 font-mono">50</td>
              <td class="p-3 font-mono">10 Mins</td>
              <td class="p-3">Polity (Articles/Amendments), History, Modern Science, Last 8 Months Current Affairs</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">Quantitative Aptitude</td>
              <td class="p-3 font-mono">25</td>
              <td class="p-3 font-mono">50</td>
              <td class="p-3 font-mono">25 Mins</td>
              <td class="p-3">Geometry, Mensuration 3D, Trigonometry, Algebra, Profit &amp; Loss, DI</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">English Comprehension</td>
              <td class="p-3 font-mono">25</td>
              <td class="p-3 font-mono">50</td>
              <td class="p-3 font-mono">10 Mins</td>
              <td class="p-3">Cloze Test, Error Spotting, Idioms/Phrases, One-Word Substitution, Active-Passive</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
        <div class="flex items-center justify-between text-slate-400 text-[11px]">
          <span>⚡ Tier-1 Score Calculation Formula &amp; Penalty Rule Snippet</span>
          <span>SSC Calculation Standard</span>
        </div>
        <pre class="overflow-x-auto text-emerald-400"><code>Total Tier-1 Raw Score = (Correct Attempts × 2.0) - (Incorrect Attempts × 0.50)
Target Safe Zone: 75+ Correct Attempts with >= 88% Accuracy -> ~150 Net Score</code></pre>
      </div>

      <h2>Document Processing &amp; Verification Pipeline</h2>
      <p>Under the revised SSC online portal (ssc.gov.in), candidate photographs are captured via a live browser camera stream, while signatures must be uploaded as scanned digital files matching rigid dimensions and file weight.</p>

      <div class="my-8 p-6 rounded-2xl bg-card border border-border shadow-sm">
        <h3 class="text-base font-bold text-foreground mb-4 flex items-center gap-2">
          <span>📐</span> 4-Step Official Document Processing Pipeline
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">1</div>
            <span class="font-bold text-xs text-foreground">Live Photo Capture</span>
            <span class="text-[11px] text-muted-foreground">Bright lighting, plain background, no caps/glasses</span>
          </div>
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">2</div>
            <span class="font-bold text-xs text-foreground">Signature Crop</span>
            <span class="text-[11px] text-muted-foreground">Crop to exact 140 &times; 60 px canvas ratio</span>
          </div>
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">3</div>
            <span class="font-bold text-xs text-foreground">Shadow Filter</span>
            <span class="text-[11px] text-muted-foreground">Convert grey paper shadow to pure white</span>
          </div>
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">4</div>
            <span class="font-bold text-xs text-foreground">KB Compression</span>
            <span class="text-[11px] text-muted-foreground">Strict 10.0 KB to 20.0 KB file weight</span>
          </div>
        </div>
      </div>

      <h2>Signature Rules: Accepted vs Rejected Compliance</h2>
      <p>Every year, over <strong>1.2 lakh SSC applications are rejected</strong> during automated registration checks due to improper signature formatting. Review the visual comparison below before uploading your file:</p>

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
            <li>✅ Natural running cursive handwriting</li>
            <li>✅ Black ballpoint pen on plain white paper</li>
            <li>✅ Dimensions: 140 &times; 60 px | Size: 14.8 KB (Matches 10–20 KB bound)</li>
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
            <li>❌ ALL CAPITAL / BLOCK LETTERS (Triggers auto-rejection)</li>
            <li>❌ Grey camera shadow or dirty paper background</li>
            <li>❌ Size: 8.2 KB (Fails minimum 10.0 KB limit)</li>
          </ul>
        </div>
      </div>

      <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Format Your SSC Signature Right Now</h4>
        <p class="text-sm text-muted-foreground mt-1">Resize, clean white paper background, and compress your signature to exact 140&times;60 px and 10–20 KB limits directly on your device.</p>
        <div class="flex flex-wrap gap-3 mt-3">
          <a href="/ssc-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
            Launch SSC Signature Tool &rarr;
          </a>
          <a href="/photo-resizer/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-95 transition">
            Resize Passport Photo &rarr;
          </a>
        </div>
      </div>

      <h2>Step-by-Step SSC Portal Application &amp; Upload Navigation Guide</h2>
      <p>Follow this exact step-by-step workflow to complete your application without registration errors or portal lockouts:</p>

      <div class="my-8 space-y-4">
        <div class="relative border-l-2 border-primary/30 ml-4 pl-6 space-y-6">
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">1</div>
            <h4 class="font-bold text-foreground text-sm">Access One-Time Registration (OTR) Portal</h4>
            <p class="text-xs text-muted-foreground mt-1">Visit <code>ssc.gov.in</code>. Log in using your Registration Number and Password. Verify your basic demographic details and educational certificates.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">2</div>
            <h4 class="font-bold text-foreground text-sm">Capture Live Webcam Photograph</h4>
            <p class="text-xs text-muted-foreground mt-1">Click 'Capture Live Photo'. Stand against a plain light background. Ensure your face is centered inside the green oval overlay before clicking capture.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">3</div>
            <h4 class="font-bold text-foreground text-sm">Upload Formatted 10–20 KB Signature</h4>
            <p class="text-xs text-muted-foreground mt-1">Click 'Choose File' under Signature Upload. Select your 140&times;60 px JPEG signature file created via SignResize. Confirm that file size is strictly between 10 KB and 20 KB.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">4</div>
            <h4 class="font-bold text-foreground text-sm">Select Examination Centre &amp; Post Preferences</h4>
            <p class="text-xs text-muted-foreground mt-1">Select 3 preferred exam cities within your regional zone. Input post preference codes carefully for Tier-2 allocation.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">5</div>
            <h4 class="font-bold text-foreground text-sm">Final Application Preview &amp; Fee Payment</h4>
            <p class="text-xs text-muted-foreground mt-1">Thoroughly review the generated PDF preview. Check for spelling, photo clarity, and signature alignment. Proceed to complete the ₹100 fee via BHIM UPI or Net Banking.</p>
          </div>
        </div>
      </div>

      <div class="my-6 p-4 rounded-xl bg-card border border-border space-y-1">
        <p class="text-xs font-bold text-primary uppercase tracking-wider">💡 Pro-Tip for SSC Registration</p>
        <p class="text-xs text-muted-foreground leading-relaxed">Always download and save your final submitted SSC Application Form PDF. Note down your Application ID and keep a copy of the uploaded signature file on your phone for verification during Tier-1 exam entry.</p>
      </div>
    `
  },

  {
    slug: "rrb-ntpc-2026-master-document-rules-preparation-strategy",
    title: "RRB NTPC 2026: Scanned Document Upload Rules, Sectional Weightage & High-Yield Preparation Strategy",
    excerpt: "Complete candidate guide for Railway RRB NTPC 2026: CBT-1 marking scheme, 10-20KB signature rules, photograph guidelines, step-by-step navigation, and speed calculation methods.",
    category: "Study Prep",
    publishDate: "Sept 17, 2026",
    author: "SignResize Academic Research Desk",
    authorRole: "Railway Recruitment Strategy Desk",
    readTime: "8 min read",
    featured: false,
    tags: ["RRB NTPC", "Railway Exams", "CBT 1 Prep", "Signature 10-20KB", "Maths Shortcuts", "Document Guidelines"],
    relatedExamPreset: "rrb-railway",
    contentHtml: `
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
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">1</div>
            <span class="font-bold text-xs text-foreground">Sign on White Paper</span>
            <span class="text-[11px] text-muted-foreground">Use dark black ballpoint pen</span>
          </div>
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">2</div>
            <span class="font-bold text-xs text-foreground">Crop 140x60 Ratio</span>
            <span class="text-[11px] text-muted-foreground">Remove surrounding excess paper</span>
          </div>
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">3</div>
            <span class="font-bold text-xs text-foreground">Background White Filter</span>
            <span class="text-[11px] text-muted-foreground">Clean phone shadows automatically</span>
          </div>
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">4</div>
            <span class="font-bold text-xs text-foreground">Target 10-20 KB</span>
            <span class="text-[11px] text-muted-foreground">Compress for zero portal error</span>
          </div>
        </div>
      </div>

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
    slug: "upsc-csat-paper-2-master-blueprint-comprehension-hacks",
    title: "UPSC CSE Prelims: CSAT Paper-II Qualifying Blueprint, Reading Comprehension & Speed Logic Hacks",
    excerpt: "Master the 33% CSAT qualifying cutoff with proven strategies for high-accuracy reading comprehension, critical reasoning, arithmetic problem selection, and UPSC OTR document rules.",
    category: "Study Prep",
    publishDate: "Sept 16, 2026",
    author: "SignResize Academic Research Desk",
    authorRole: "Civil Services Methodology Team",
    readTime: "8 min read",
    featured: false,
    tags: ["UPSC Prelims", "CSAT Strategy", "Reading Comprehension", "Aptitude Speed", "Civil Services", "UPSC OTR"],
    relatedExamPreset: "upsc-civil-services",
    contentHtml: `
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
  },

  {
    slug: "state-psc-otr-registration-photo-signature-guidelines",
    title: "State PSC One-Time Registration (OTR): Mandatory Signature & Photo Guidelines for UPPSC, BPSC, MPSC & RPSC",
    excerpt: "Detailed checklist for State Public Service Commission One-Time Registration portals: dimensions, dual-boundary compression, step-by-step navigation, and white background verification.",
    category: "Guidelines & Tips",
    publishDate: "Sept 15, 2026",
    author: "SignResize Technical Verification Team",
    authorRole: "State Commission Standards Desk",
    readTime: "7 min read",
    featured: false,
    tags: ["State PSC", "OTR Registration", "UPPSC", "BPSC", "MPSC", "RPSC", "Document Guidelines"],
    relatedExamPreset: "uppsc-uttar-pradesh",
    contentHtml: `
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
    slug: "ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines",
    title: "IBPS PO & Clerk 2026 Master Upload Guide: Exact Photo, Signature, Thumb Impression & Declaration Rules",
    excerpt: "Comprehensive formatting rules for all 4 mandatory IBPS uploads: photograph (20-50KB), running signature (10-20KB), left thumb impression (20-50KB), and handwritten declaration (50-100KB) with step-by-step navigation.",
    category: "Guidelines & Tips",
    publishDate: "Sept 14, 2026",
    author: "SignResize Examination Standards Desk",
    authorRole: "Official Banking Document Compliance Team",
    readTime: "8 min read",
    featured: false,
    tags: ["IBPS PO", "IBPS Clerk", "Handwritten Declaration", "Left Thumb Impression", "Bank Exam Guidelines", "Document Rules"],
    relatedExamPreset: "ibps-sbi",
    contentHtml: `
      <h2>The 4 Mandatory Digital Uploads for IBPS &amp; SBI Recruitment</h2>
      <p>Applying for banking recruitment exams conducted by the <strong>Institute of Banking Personnel Selection (IBPS)</strong> or <strong>State Bank of India (SBI)</strong> requires uploading four distinct scanned assets during online registration. Failing even one parameter results in immediate application rejection or biometric failure at the exam venue.</p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-3 border-b">Document</th>
              <th class="p-3 border-b">File Size Range</th>
              <th class="p-3 border-b">Dimensions &amp; Resolution</th>
              <th class="p-3 border-b">Mandatory Ink &amp; Canvas Rules</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            <tr>
              <td class="p-3 font-semibold text-primary">Passport Photo</td>
              <td class="p-3 font-mono">20 KB to 50 KB</td>
              <td class="p-3 font-mono">200 &times; 230 px (3.5 &times; 4.5 cm)</td>
              <td class="p-3">Light or pure white background</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">Candidate Signature</td>
              <td class="p-3 font-mono">10 KB to 20 KB</td>
              <td class="p-3 font-mono">140 &times; 60 px (4.0 &times; 2.0 cm)</td>
              <td class="p-3">Black ink ballpoint pen; Cursive running writing</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">Left Thumb Impression (LTI)</td>
              <td class="p-3 font-mono">20 KB to 50 KB</td>
              <td class="p-3 font-mono">240 &times; 240 px (3.0 &times; 3.0 cm)</td>
              <td class="p-3">Blue or black ink on clean white paper</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">Handwritten Declaration</td>
              <td class="p-3 font-mono">50 KB to 100 KB</td>
              <td class="p-3 font-mono">800 &times; 400 px (10.0 &times; 5.0 cm)</td>
              <td class="p-3">Candidate's own handwriting in English (Black ink)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-6 p-4 rounded-xl bg-card border border-border">
        <p class="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">IBPS Official Handwritten Declaration Verbatim Text</p>
        <blockquote class="italic text-foreground font-serif text-sm sm:text-base border-l-4 border-primary pl-4 py-1">
          &ldquo;I, _______ (Name of the candidate), hereby declare that all the information submitted by me in the application form is correct, true and valid. I will present the supporting documents as and when required.&rdquo;
        </blockquote>
      </div>

      <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Resize for IBPS / SBI in 3 Seconds</h4>
        <p class="text-sm text-muted-foreground mt-1">Format your signature, thumb impression, and declaration to exact pixel dimensions and KB bounds with zero server uploads.</p>
        <div class="flex flex-wrap gap-3 mt-3">
          <a href="/ibps-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
            Resize IBPS Signature &rarr;
          </a>
          <a href="/thumb-impression-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-95 transition">
            Format Thumb Impression &rarr;
          </a>
        </div>
      </div>
    `
  },

  {
    slug: "top-5-mistakes-photo-signature-rejection-govt-exams",
    title: "Top 5 Signature & Photo Mistakes That Lead to Government Exam Rejection",
    excerpt: "Avoid the most frequent mistakes that disqualify thousands of candidates in SSC, UPSC, IBPS, and State PSC applications before the exam day.",
    category: "Guidelines & Tips",
    publishDate: "Sept 10, 2026",
    author: "SignResize Technical Verification Team",
    authorRole: "Exam Portal Standards & Verification",
    readTime: "6 min read",
    featured: false,
    tags: ["Rejection Prevention", "Exam Guidelines", "Document Resizing", "PAN / SSC", "Quality Control"],
    relatedExamPreset: "ssc-general",
    contentHtml: `
      <h2>Why Do Exam Commissions Reject Candidate Documents?</h2>
      <p>Government recruitment portals like SSC, UPSC, NTA, and IBPS use automated optical scanning software. When an uploaded signature fails dimension or contrast checks, the software flags it as invalid, resulting in immediate rejection without manual review.</p>

      <h2>The 5 Most Common Disqualification Traps</h2>
      <ol class="space-y-4">
        <li>
          <strong>1. Signatures in BLOCK / ALL CAPITAL Letters:</strong>
          <p>Writing your full name in capital letters is not legally regarded as a running signature. SSC, IBPS, and SBI explicitly declare block capital signatures invalid.</p>
        </li>
        <li>
          <strong>2. Grey or Shadowed Camera Background:</strong>
          <p>Taking a picture of your signature under indoor lighting produces grey paper with phone shadows. Always use our <em>"Clean White Paper"</em> filter before uploading to get crisp, pure white background.</p>
        </li>
        <li>
          <strong>3. Incorrect Aspect Ratio (Stretched or Squashed):</strong>
          <p>Forcing a rectangular signature into a square box without proper canvas padding distorts your signature, causing biometric mismatches at the exam center.</p>
        </li>
        <li>
          <strong>4. Blue Ink When Black Pen is Mandated:</strong>
          <p>IBPS, SSC, and RRB strictly demand <strong>Black Ink</strong> ballpoint pens for optical character recognition (OCR) scanning clarity.</p>
        </li>
        <li>
          <strong>5. Violating Minimum KB Limit (Under 10KB or Under 20KB):</strong>
          <p>If an exam portal requires min 20KB and your file is 18.5KB, the portal will show "File size too small". SignResize's Dual-Boundary engine prevents this by matching the exact range.</p>
        </li>
      </ol>
    `
  },

  {
    slug: "upsc-cse-2026-preparation-roadmap-daily-study-plan",
    title: "UPSC CSE 2026 Daily Study Strategy: Comprehensive 90-Day High-Yield Roadmap",
    excerpt: "Detailed hour-by-hour daily timetable, 4-phase subject mastery plan, NCERT mapping, CSAT qualifying hacks, and PYQ analysis methodology for civil services aspirants.",
    category: "Study Prep",
    publishDate: "Sept 08, 2026",
    author: "SignResize Academic Research Desk",
    authorRole: "Competitive Exam Methodology Team",
    readTime: "8 min read",
    featured: false,
    tags: ["UPSC CSE", "Study Strategy", "Prelims 2026", "Time Management", "NCERT Roadmap"],
    relatedExamPreset: "upsc-civil-services",
    contentHtml: `
      <h2>The Structured 90-Day Foundation Blueprint</h2>
      <p>Succeeding in the Civil Services Examination (CSE) does not require studying 16 hours a day; it requires systematic consistency, sharp syllabus boundaries, and relentless revision of standard public academic sources. This comprehensive roadmap is designed to guide both full-time aspirants and working professionals through a step-by-step preparation cycle.</p>

      <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20">
        <h3 class="text-base font-bold text-primary mb-2">📌 The Golden Rules of High-Yield Preparation</h3>
        <ul class="space-y-1.5 text-sm text-foreground/90">
          <li><strong>One Standard Source per Subject:</strong> Read one standard government or canonical academic reference five times rather than five different commercial coaching booklets once.</li>
          <li><strong>Official PYQ-First Approach:</strong> Solve the last 10 years of official Previous Year Questions (PYQs) published by the Union Public Service Commission before taking mock tests.</li>
          <li><strong>Active Recall over Passive Highlighting:</strong> Test yourself after every study session using short notes, flash summaries, and mental retrieval.</li>
          <li><strong>Never Neglect Paper II (CSAT):</strong> Allocate at least 60 to 90 minutes daily from day one to comfortably clear the 33% (66 marks) qualifying benchmark.</li>
        </ul>
      </div>

      <h2>Daily Study Timetable: Realistic 8-Hour Master Routine</h2>
      <div class="my-5 overflow-x-auto">
        <table class="w-full text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-3 border-b border-border">Time Slot</th>
              <th class="p-3 border-b border-border">Session Type</th>
              <th class="p-3 border-b border-border">Target Objective &amp; Activities</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border text-xs sm:text-sm">
            <tr>
              <td class="p-3 font-mono font-semibold text-primary">06:00 AM – 08:30 AM</td>
              <td class="p-3 font-semibold">Slot 1: Core Static Subject</td>
              <td class="p-3 text-muted-foreground">Highest mental alertness window. Cover dense static subjects (Polity / Modern History / Economy).</td>
            </tr>
            <tr>
              <td class="p-3 font-mono font-semibold text-primary">09:30 AM – 11:30 AM</td>
              <td class="p-3 font-semibold">Slot 2: Current Affairs &amp; PIB</td>
              <td class="p-3 text-muted-foreground">Standard national daily newspaper analysis + official Press Information Bureau (PIB.gov.in) releases.</td>
            </tr>
            <tr>
              <td class="p-3 font-mono font-semibold text-primary">02:00 PM – 04:30 PM</td>
              <td class="p-3 font-semibold">Slot 3: CSAT &amp; Aptitude Drills</td>
              <td class="p-3 text-muted-foreground">Practice Reading Comprehension inferences and quantitative problem solving.</td>
            </tr>
            <tr>
              <td class="p-3 font-mono font-semibold text-primary">07:00 PM – 09:00 PM</td>
              <td class="p-3 font-semibold">Slot 4: Revision &amp; PYQs</td>
              <td class="p-3 text-muted-foreground">Active recall, solving 30 PYQs, and summarizing today's key takeaways.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  // ─── BATCH: Standardized Top-10 FAQ Master Posts for Live Exams ───

  {
    slug: "ssc-cgl-2026-top-10-faq-aspirants-guide",
    title: "SSC CGL 2026: Top 10 FAQs Every Aspirant Must Know Before Applying — Eligibility, Live Photo & Tier-1 Strategy",
    excerpt: "Authoritative candidate advisory for SSC CGL 2026 answering top 10 frequently asked questions: live camera requirements, 140×60 px signature bounds, Tier-1 qualifying vs Tier-2 merit rules, post preferences, and cutoffs.",
    category: "Exam Alerts",
    publishDate: "Sept 20, 2026",
    lastUpdated: "Sept 20, 2026",
    author: "SignResize Examination Standards Desk",
    authorRole: "Staff Selection Commission Analytics Team",
    readTime: "9 min read",
    featured: false,
    tags: ["SSC CGL 2026","FAQ","Live Photo Guidelines","Signature 10-20KB","Tier-1 Strategy","Syllabus Breakdown"],
    relatedExamPreset: "ssc-general",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Staff Selection Commission (SSC)"
        },
        {
            "label": "Total Vacancies",
            "value": "17,727 Posts (Group B & C)"
        },
        {
            "label": "Application Last Date",
            "value": "Sept 24, 2026 (23:00 Hrs)"
        },
        {
            "label": "Correction Window",
            "value": "Sept 27 – Sept 29, 2026"
        },
        {
            "label": "Selection Stages",
            "value": "Tier-1 (Screening) + Tier-2 (Merit)"
        },
        {
            "label": "Document Specs",
            "value": "Live Webcam Photo + 140×60 px Sign (10–20 KB)"
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>SSC CGL 2026: Comprehensive Recruitment Overview &amp; Cadre Analysis</h2>
        <p>The Staff Selection Commission has officially notified <strong>17,727 vacancies</strong> for the Combined Graduate Level Examination 2026. This mega-drive recruits officers into Group 'B' Gazetted (Assistant Audit Officer / Assistant Accounts Officer), Group 'B' Non-Gazetted (Assistant Section Officer in CSS, MEA, IB, AFHQ; Inspector of Income Tax; Central Excise &amp; Preventive Officer), and Group 'C' positions (Tax Assistant, Auditor, Accountant) across premier ministries.</p>
        <p>Because the online application deadline closes on <strong>September 24, 2026 (23:00 Hrs)</strong>, aspirants must navigate both rigorous academic standards and strict digital document compliance. SSC's portal employs automated algorithmic validation for photographic quality and signature aspect ratios, rejecting thousands of applications annually without manual review.</p>

        <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
          <h4 class="font-bold text-primary text-base flex items-center gap-2">
            <span>⚡</span> SSC CGL 2026 Key Milestones &amp; Salary Matrix
          </h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/90 pt-1">
            <li><strong>Pay Level 8 (AAO):</strong> ₹47,600 – ₹1,51,100 (In-hand ~₹75,000–₹85,000)</li>
            <li><strong>Pay Level 7 (ASO, Inspectors):</strong> ₹44,900 – ₹1,42,400 (In-hand ~₹68,000–₹78,000)</li>
            <li><strong>Pay Level 5/6 (Auditors, Div. Acct):</strong> ₹29,200 – ₹1,12,400 (In-hand ~₹45,000–₹58,000)</li>
            <li><strong>Pay Level 4 (Tax Assistant):</strong> ₹25,500 – ₹81,100 (In-hand ~₹38,000–₹46,000)</li>
          </ul>
        </div>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Tier-1 Exam Blueprint &amp; Scoring Penalty Mechanics</h2>
        <p>Tier-1 is a qualifying Computer Based Examination consisting of 100 multiple-choice questions for 200 marks, administered in a 60-minute window. Each incorrect answer incurs a penalty deduction of <strong>0.50 marks (25%)</strong>.</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Section</th>
                <th class="p-3 border-b">Questions</th>
                <th class="p-3 border-b">Marks</th>
                <th class="p-3 border-b">Target Time</th>
                <th class="p-3 border-b">High-Weightage Chapters</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">General Intelligence &amp; Reasoning</td>
                <td class="p-3 font-mono">25</td>
                <td class="p-3 font-mono">50</td>
                <td class="p-3 font-mono">14 min</td>
                <td class="p-3">Coding-Decoding, Number Analogies, Syllogisms, Paper Folding, Venn Diagrams</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">General Awareness</td>
                <td class="p-3 font-mono">25</td>
                <td class="p-3 font-mono">50</td>
                <td class="p-3 font-mono">8 min</td>
                <td class="p-3">Polity Articles, Modern History, National Income, Last 6 Months PIB &amp; Current Affairs</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Quantitative Aptitude</td>
                <td class="p-3 font-mono">25</td>
                <td class="p-3 font-mono">50</td>
                <td class="p-3 font-mono">26 min</td>
                <td class="p-3">Algebra Formulas, Geometry Circle Theorems, Trigonometry, DI, Profit &amp; Loss</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">English Comprehension</td>
                <td class="p-3 font-mono">25</td>
                <td class="p-3 font-mono">50</td>
                <td class="p-3 font-mono">12 min</td>
                <td class="p-3">Cloze Test, Idioms, Grammatical Error Spotting, One Word Substitution</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
          <div class="flex items-center justify-between text-slate-400 text-[11px]">
            <span>⚡ Tier-1 Formula &amp; Cutoff Projection</span>
            <span>SSC Standard Formula</span>
          </div>
          <pre class="overflow-x-auto text-emerald-400"><code>Net Raw Score = (Correct Attempts × 2.0) - (Incorrect Attempts × 0.50)
Target Safe Zone (UR/OBC): 76+ Attempts with 90% Accuracy → ~146–152 Net Raw Marks</code></pre>
        </div>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        <h2>Document Compliance: Live Photo &amp; 140×60 px Signature Standards</h2>
        <p>The updated SSC application engine on <code>ssc.gov.in</code> rejects traditional scanned photo uploads in favor of interactive live camera capture, while enforcing rigid dimension limits for scanned signatures.</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Document</th>
                <th class="p-3 border-b">Dimensions</th>
                <th class="p-3 border-b">File Size</th>
                <th class="p-3 border-b">Format / Ink</th>
                <th class="p-3 border-b">Mandatory Verification Rule</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">Candidate Photograph</td>
                <td class="p-3">Live Webcam Capture</td>
                <td class="p-3">Auto-compressed</td>
                <td class="p-3">JPEG (Portal Captured)</td>
                <td class="p-3">80% face frame fill, white background, no spectacles/caps</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Scanned Signature</td>
                <td class="p-3 font-mono">140 × 60 px (4×2 cm)</td>
                <td class="p-3 font-mono">10.0 KB to 20.0 KB</td>
                <td class="p-3">JPG / JPEG (Black Ink)</td>
                <td class="p-3">Continuous running script on plain white unruled paper</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="my-6 p-5 rounded-2xl bg-rose-500/10 border-2 border-rose-500/30 space-y-2">
          <h4 class="font-bold text-rose-700 dark:text-rose-300 text-sm flex items-center gap-2">
            <span>⚠️</span> Reasons SSC Automatically Rejects CGL Applications
          </h4>
          <ul class="text-xs text-rose-900 dark:text-rose-200 space-y-1 list-disc pl-4">
            <li>Signing in <strong>BLOCK / CAPITAL letters</strong> (instant disqualification under Notification Clause 11.2).</li>
            <li>Uploading signatures below 10.0 KB or above 20.0 KB, or with blurred grey shadow backgrounds.</li>
            <li>Live photo captured with glasses, colored tints, backlighting, or tilted head posture.</li>
            <li>Mismatch between candidate name in Matriculation Certificate and Aadhaar / OTR profile.</li>
          </ul>
        </div>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
          <h4 class="text-base font-bold text-foreground">Format Your SSC Signature in Seconds</h4>
          <p class="text-sm text-muted-foreground mt-1">SignResize crops to exact 140×60 px, removes grey smartphone paper shadows, and compresses strictly within 10.0–20.0 KB.</p>
          <a href="/ssc-signature-resize/" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">Open SSC Signature Resizer &rarr;</a>
        </div>
      </section>

      <section id="strategy" class="space-y-4 mt-8">
        <h2>High-Yield Preparation Strategy for Tier-1</h2>
        <p>To safely cross the expected Tier-1 cut-off of 145–150 marks, structure your remaining preparation time into three disciplined phases:</p>
        <ul class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <li><strong>Phase 1 (Speed Calculation):</strong> Dedicate the first 45 minutes of each morning to multiplication drills, fraction-to-percentage tables, squares (1–50), and cubes (1–30) to eliminate calculation bottlenecks in Quantitative Aptitude.</li>
          <li><strong>Phase 2 (Topic Mastery &amp; PYQs):</strong> Solve the last 5 years of SSC CGL, CHSL, and CPO Tier-1 papers. Focus specifically on recent TCS question trends in English Comprehension and Reasoning syllogisms.</li>
          <li><strong>Phase 3 (Daily Full-Length CBE Mocks):</strong> Take one full 60-minute mock test at your exact examination shift timing (e.g. 9:00 AM or 12:30 PM). Spend twice the exam duration (120 minutes) analyzing negative marks and unattempted questions in an error logbook.</li>
        </ul>
      </section>
    `,
    faqs: [
        {
            "question": "What is the educational eligibility and final year graduation rule for SSC CGL 2026?",
            "answer": "Candidates must possess a Bachelor's Degree in any discipline from a recognized University or Institute established under Central or State legislation. For general posts (such as ASO, Tax Assistant, and Inspectors), no minimum percentage is mandated. Final-year students are eligible to apply only if their degree result is formally declared by their University on or before the crucial cut-off date specified in the official notification. For specialized roles like Assistant Audit Officer (AAO) or Junior Statistical Officer (JSO), specific coursework in Statistics, Mathematics, Economics, or Chartered Accountancy is mandatory."
        },
        {
            "question": "What are the age limits and category relaxation rules across different SSC CGL posts?",
            "answer": "Age limits vary by post group: 18 to 27 years for Auditor and Junior Accountant; 18 to 30 years for Inspector of Income Tax, Central Excise Inspector, and ASO in CSS; and up to 32 years for Junior Statistical Officer (JSO). Upper-age relaxation conforms to Central Government statutory rules: OBC (Non-Creamy Layer) candidates receive +3 years, SC/ST candidates receive +5 years, and PwBD candidates receive +10 years (+13 years for PwBD-OBC, +15 years for PwBD-SC/ST). Ex-Servicemen (ESM) receive 3 years deduction after subtracting completed military service from actual age."
        },
        {
            "question": "How does the SSC live webcam photograph capture system work on the new portal?",
            "answer": "Under the revamped SSC portal (ssc.gov.in) and the official MySSC mobile application, candidates do not upload a pre-scanned photo file. Instead, the portal activates the device camera to capture a live photograph. The candidate must look straight into the camera, ensuring their face fills approximately 80% of the frame against a plain, light-colored background. Adequate frontal lighting is required without shadows behind the ears. Candidates must remove spectacles, contact lenses with tint, caps, scarves, or headwear (except mandatory religious head coverings that do not obscure the facial perimeter from chin to forehead)."
        },
        {
            "question": "What is the exact signature specification and file size required for SSC CGL 2026?",
            "answer": "Candidates must upload a cropped digital scan of their handwritten signature. Specifications: dimensions must measure exactly 140 pixels in width by 60 pixels in height (aspect ratio ~4.0 cm × 2.0 cm at 200 DPI). The file size must fall strictly between 10.0 KB and 20.0 KB in JPG or JPEG format. The signature must be penned in black ballpoint ink on clean, unruled white paper. Signatures written in capital/block letters, illegible smudged marks, or signatures displaying dark grey scanner shadows are flagged by automated scrutiny and cause immediate rejection."
        },
        {
            "question": "Does the Tier-1 examination score count towards the final SSC CGL 2026 merit ranking?",
            "answer": "No. Tier-1 is purely a qualifying screening test. Its score is utilized exclusively to shortlist candidates for Tier-2 examination at an approximate vacancy multiple of 1:10 to 1:12 across categories. The all-India final merit list, cadre ranking, and ministerial post allocation are formulated 100% on the aggregate score obtained in Tier-2 (Paper-I: Sections 1 and 2), provided the candidate clears the minimum qualifying cut-offs in the Computer Knowledge Test (CKT) and the Data Entry Speed Test (DEST)."
        },
        {
            "question": "What is the Tier-1 exam pattern and negative marking penalty?",
            "answer": "Tier-1 consists of 100 multiple-choice questions carrying 200 marks, scheduled for 60 minutes (80 minutes for eligible scribe-using PwD candidates). The exam comprises four equal sections: General Intelligence & Reasoning (25 Qs / 50 Marks), General Awareness (25 Qs / 50 Marks), Quantitative Aptitude (25 Qs / 50 Marks), and English Comprehension (25 Qs / 50 Marks). A negative marking deduction of 0.50 marks (25%) is penalized for every incorrect answer. Unattempted questions incur no mark penalty."
        },
        {
            "question": "How should candidates structure their post preferences for SSC CGL 2026?",
            "answer": "Post preferences are submitted online prior to Tier-2 or during the Option-cum-Preference window. Candidates should evaluate three parameters: career growth vs posting location. Aspirants seeking home-state or Delhi postings typically prioritize ASO in Central Secretariat Service (CSS), Ministry of External Affairs (MEA), or AFHQ. Those prioritizing field enforcement, authority, and grade pay prioritize Inspector of Income Tax (ITI), Central Excise Inspector, Preventive Officer, or Sub-Inspector in the Central Bureau of Investigation (CBI). For desk-bound roles with minimal transfers, Auditor (CAG/CGDA) and Division Accountant are popular."
        },
        {
            "question": "What is the application fee, and who is eligible for a full fee exemption?",
            "answer": "The online registration fee is ₹100. However, female candidates of all categories, Scheduled Castes (SC), Scheduled Tribes (ST), Persons with Benchmark Disabilities (PwBD), and Ex-Servicemen (ESM) eligible for reservation are completely exempted from paying any fee. Fee payments can be made online via BHIM UPI, Net Banking, or Visa/Mastercard/RuPay credit or debit cards up to September 25, 2026 (23:00 Hrs)."
        },
        {
            "question": "Can I correct mistakes in my SSC CGL application during the correction window?",
            "answer": "Yes. SSC provides an official 'Window for Application Form Correction' from September 27 to September 29, 2026 (23:00 Hrs). During this 3-day window, candidates can modify demographic information, exam center choices, live photo, or scanned signature. SSC levies a uniform correction charge of ₹200 for the first modification, and ₹500 for a second resubmission. Only the data in the latest submitted application will be considered valid."
        },
        {
            "question": "What is the starting in-hand salary for SSC CGL Pay Level 7 and Pay Level 4 posts?",
            "answer": "Salary depends on Pay Level and city classification (Class X, Y, or Z). For Pay Level 7 posts (Inspector of Income Tax, Central Excise, ASO): Basic Pay is ₹44,900. With current Dearness Allowance (DA ~50%), House Rent Allowance (HRA 30% in Class X cities like Delhi/Mumbai), and Transport Allowance (TA ~₹4,950), gross monthly pay is ~₹85,000, yielding a net in-hand salary of approximately ₹73,000–₹78,000 after NPS and insurance deductions. For Pay Level 4 posts (Tax Assistant): Basic Pay is ₹25,500, with gross salary ~₹45,000 and net in-hand salary around ₹38,000–₹41,000 in Tier-1 metro cities."
        }
    ]
  },

  {
    slug: "rrb-ntpc-2026-top-10-faq-complete-guide",
    title: "RRB NTPC 2026: Top 10 FAQs on Eligibility, RRB Zone Selection, Exam Pattern & Document Guidelines",
    excerpt: "Everything Railway aspirants must know for RRB NTPC 2026: single zone rule, graduate vs undergraduate posts, 35×45 mm photo rules, 10–20 KB signature specs, CBAT/TST typing tests, and normalization.",
    category: "Study Prep",
    publishDate: "Sept 20, 2026",
    lastUpdated: "Sept 20, 2026",
    author: "SignResize Examination Standards Desk",
    authorRole: "Railway Recruitment Strategy Desk",
    readTime: "9 min read",
    featured: false,
    tags: ["RRB NTPC","Railway Recruitment","RRB Zone Rules","Signature 10-20KB","CBT-1 Blueprint","Typing Test"],
    relatedExamPreset: "rrb-railway",
    quickFacts: [
        {
            "label": "Conducting Agency",
            "value": "Railway Recruitment Boards (RRBs)"
        },
        {
            "label": "Post Categories",
            "value": "Graduate (Levels 5-6) & Undergrad (Levels 2-3)"
        },
        {
            "label": "Application Last Date",
            "value": "October 15, 2026"
        },
        {
            "label": "Selection Stages",
            "value": "CBT-1 + CBT-2 + CBAT / Typing + DV"
        },
        {
            "label": "Negative Marking",
            "value": "1/3rd (0.33 marks) per wrong answer"
        },
        {
            "label": "Document Specs",
            "value": "35×45 mm Photo (20-50 KB) + Sign (10-20 KB)"
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>RRB NTPC 2026: Selection Architecture &amp; Vacancy Distribution</h2>
        <p>The Railway Recruitment Boards have released the master notification for <strong>Non-Technical Popular Categories (NTPC)</strong>. The drive recruits across Indian Railways for both Graduate posts (Station Master, Goods Train Manager, Senior Commercial-cum-Ticket Clerk, Senior Clerk-cum-Typist) and Undergraduate 12th-pass posts (Junior Clerk-cum-Typist, Accounts Clerk-cum-Typist, Commercial-cum-Ticket Clerk).</p>
        <p>Applying requires critical strategic choices, foremost among them being <strong>RRB Zone Selection</strong>. Candidates can apply to only ONE regional RRB board. Zone selection determines your competition pool, cutoff thresholds, and lifetime cadre posting jurisdiction.</p>

        <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
          <h4 class="font-bold text-primary text-base flex items-center gap-2">
            <span>⚡</span> NTPC Post Hierarchy &amp; Medical Standards
          </h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/90 pt-1">
            <li><strong>Station Master (Level 6):</strong> Basic ₹35,400 | Medical Category: <strong>A-2</strong> (Strict vision test, no spectacles permitted)</li>
            <li><strong>Goods Train Manager (Level 5):</strong> Basic ₹29,200 | Medical Category: <strong>A-3</strong></li>
            <li><strong>Sr. Clerk-cum-Typist (Level 5):</strong> Basic ₹29,200 | Medical Category: <strong>C-2</strong> (Typing skill mandatory)</li>
            <li><strong>Jr. Clerk-cum-Typist (Level 2):</strong> Basic ₹19,900 | Medical Category: <strong>C-2</strong> (12th Pass eligibility)</li>
          </ul>
        </div>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>CBT-1 Examination Blueprint &amp; Marking Scheme</h2>
        <p>CBT-1 is a common preliminary screening stage for all posts, comprising 100 objective questions for 100 marks with a duration of 90 minutes (120 minutes for PwBD with scribe). Negative marking is strictly <strong>1/3rd (0.33 marks)</strong> per incorrect answer.</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Subject Section</th>
                <th class="p-3 border-b">Questions</th>
                <th class="p-3 border-b">Marks</th>
                <th class="p-3 border-b">Recommended Timing</th>
                <th class="p-3 border-b">Core Scoring Topics</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">General Awareness</td>
                <td class="p-3 font-mono">40</td>
                <td class="p-3 font-mono">40</td>
                <td class="p-3 font-mono">25 min</td>
                <td class="p-3">Science (Physics, Chemistry, Bio), Indian Railways History, Modern India, Current Events</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Mathematics</td>
                <td class="p-3 font-mono">30</td>
                <td class="p-3 font-mono">30</td>
                <td class="p-3 font-mono">35 min</td>
                <td class="p-3">Number Systems, LCM/HCF, Ratio, Percentages, Time &amp; Work, SI/CI, Mensuration</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">General Intelligence &amp; Reasoning</td>
                <td class="p-3 font-mono">30</td>
                <td class="p-3 font-mono">30</td>
                <td class="p-3 font-mono">30 min</td>
                <td class="p-3">Coding-Decoding, Mathematical Operations, Blood Relations, Syllogisms, Venn Diagrams</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
          <div class="flex items-center justify-between text-slate-400 text-[11px]">
            <span>⚡ RRB Normalization &amp; Shortlist Formula</span>
            <span>Indian Railways Formula Standard</span>
          </div>
          <pre class="overflow-x-auto text-emerald-400"><code>Shortlisting Ratio for CBT-2 = 1:20 (20 times category-wise vacancies per level)
Percentile Normalization adjusts for difficulty variances across multi-day shifts.</code></pre>
        </div>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        <h2>Document Specifications: Photo &amp; Scanned Signature Rules</h2>
        <p>RRB application processing uses automated document rejection filters. Any deviation from the rigid 35×45 mm photo dimensions or 10–20 KB signature file weight results in application invalidation.</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Document</th>
                <th class="p-3 border-b">Dimensions</th>
                <th class="p-3 border-b">File Size Bounds</th>
                <th class="p-3 border-b">Format &amp; Quality</th>
                <th class="p-3 border-b">Rejection Trigger</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">Passport Photograph</td>
                <td class="p-3 font-mono">35 × 45 mm (320 × 240 px)</td>
                <td class="p-3 font-mono">20.0 KB to 50.0 KB</td>
                <td class="p-3">JPG / JPEG, light background</td>
                <td class="p-3">Tinted spectacles, caps, selfies, photos older than 3 months</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Candidate Signature</td>
                <td class="p-3 font-mono">140 × 60 px (50 × 20 mm)</td>
                <td class="p-3 font-mono">10.0 KB to 20.0 KB</td>
                <td class="p-3">JPG / JPEG, Black ink</td>
                <td class="p-3">Capital/block letters, blue ink, paper shadows, size &lt;10 KB</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
          <h4 class="text-base font-bold text-foreground">Prepare Your RRB Documents Instantly</h4>
          <p class="text-sm text-muted-foreground mt-1">Our dedicated RRB preset crops to official 140×60 px, whitens scanner shadows, and compresses strictly into 10–20 KB bounds.</p>
          <a href="/rrb-signature-resize/" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">Open RRB Resizer Tool &rarr;</a>
        </div>
      </section>

      <section id="strategy" class="space-y-4 mt-8">
        <h2>High-Yield Preparation Blueprint for CBT-1</h2>
        <p>In RRB NTPC, General Awareness accounts for 40% of the entire paper. Focus on high-yield General Science topics (NCERT 9th &amp; 10th Physics formulas, Chemistry reactions, and Human Biology) alongside Railway static trivia. Practice 30 timed Mathematics drills daily using speed shortcuts for LCM, Time &amp; Work, and Mensuration.</p>
      </section>
    `,
    faqs: [
        {
            "question": "Can I apply for multiple RRB zones in RRB NTPC 2026?",
            "answer": "No. Candidates can select and apply to ONLY ONE regional Railway Recruitment Board (e.g. RRB Mumbai, RRB Allahabad, RRB Chennai, RRB Chandigarh, etc.). Applying to more than one RRB is treated as a fraudulent duplicate registration under Railway Recruitment rules, leading to instant disqualification of all submitted forms and a possible debarment from all future railway examinations for up to 3 years."
        },
        {
            "question": "Can a candidate apply for both Graduate and Undergraduate level posts?",
            "answer": "Yes, provided the candidate holds a recognized graduation degree. Such candidates are eligible to compete for both Graduate posts (Level 5 & 6) and Undergraduate posts (Level 2 & 3). However, the candidate submits only one unified application for their chosen RRB zone and registers their post preference order during registration. A single common CBT-1 is conducted; subsequently, separate CBT-2 examinations are held for each respective 7th CPC Pay Level."
        },
        {
            "question": "What is the shortlisting ratio from CBT-1 to CBT-2 in RRB NTPC?",
            "answer": "Candidates are shortlisted for CBT-2 at a ratio of 20 times (1:20) the community-wise vacancies for each post and Pay Level within the chosen RRB zone, based on their normalized percentile score in CBT-1. Because CBT-1 marks are normalized across multiple examination sessions, hitting a high accuracy rate with minimal negative marking is vital to qualify in the 1:20 bracket."
        },
        {
            "question": "What is the Computer Based Aptitude Test (CBAT) and who has to appear for it?",
            "answer": "CBAT (Aptitude Test) is mandatory only for candidates who have opted for the post of Station Master (Level 6) or Traffic Assistant (Level 4). Candidates are shortlisted for CBAT at a ratio of 8 times the vacancy count. The test consists of five battery modules (Intelligence Test, Selective Attention Test, Spatial Orientation, Information Ordering, and Personality Test). Candidates must score a minimum T-score of 42 marks in EACH test battery separately to qualify. In the final merit, CBAT carries 30% weightage, and CBT-2 carries 70% weightage."
        },
        {
            "question": "What are the rules and speed criteria for the Typing Skill Test (TST)?",
            "answer": "The Typing Skill Test is required for clerical posts: Senior Clerk-cum-Typist, Junior Accounts Assistant-cum-Typist, Senior Time Keeper (Level 5), and Junior Clerk-cum-Typist (Level 2). The typing test is qualifying in nature. Candidates must achieve a minimum speed of 30 words per minute (WPM) in English OR 25 words per minute in Hindi on a computer terminal. Editing tools, backspace, and spellcheck utilities are disabled during the test."
        },
        {
            "question": "What is the exact photograph specification for RRB online registration?",
            "answer": "Candidates must upload a recent clear color photograph taken within the last 3 months against a plain white or light-colored background. Dimensions must be 35 mm × 45 mm (approx. 320 × 240 pixels) with file size strictly between 20.0 KB and 50.0 KB in JPG/JPEG format. The facial profile must occupy 75% of the frame. Photos taken wearing sunglasses, tinted spectacles, hats, or with backlighting are rejected."
        },
        {
            "question": "What are the signature specifications for RRB NTPC application upload?",
            "answer": "The signature must be penned on clean white unruled paper using a black ballpoint pen. Dimensions must measure 140 × 60 pixels (50 mm × 20 mm) with file size strictly between 10.0 KB and 20.0 KB in JPG or JPEG format. Signatures written in capital or block letters, signatures in blue or red ink, or images with visible grey scanner shadows are disqualified by RRB document verification filters."
        },
        {
            "question": "How does the RRB score normalization formula work in multi-session CBTs?",
            "answer": "Because RRB NTPC exams are conducted over dozens of days and multiple shifts, raw marks cannot be directly compared. RRB uses a mathematical Percentile Score Normalization method based on the mean and standard deviation of marks of all candidates across shifts. The normalized score reflects a candidate's relative percentile position compared to peers in their shift, ensuring no candidate is disadvantaged by an unusually difficult question paper."
        },
        {
            "question": "What are the strict medical fitness standards for Station Master and Goods Guard?",
            "answer": "Railway medical fitness standards are among the most stringent in public recruitment. Station Master requires Medical Standard A-2: distant vision must be 6/9, 6/9 without glasses (no glasses permitted, no refractive surgery/LASIK allowed), near vision Sn 0.6, 0.6, plus clearing tests for Color Vision, Binocular Vision, Field of Vision, and Night Vision. Goods Train Manager requires Medical Standard A-3: distant vision 6/9, 6/9 with or without glasses (power must not exceed 2D)."
        },
        {
            "question": "What is the starting salary and allowances for Station Master and Goods Guard?",
            "answer": "Station Master (Level 6) has a Basic Pay of ₹35,400. In Class X metro cities, with DA (~50%), HRA (30%), and Transport Allowance, the gross monthly salary is ~₹68,000–₹72,000. Goods Train Manager (Level 5) starts at Basic Pay of ₹29,200, but enjoys generous Running Allowances (Kilometre Allowance for train running duties ~₹4.50 to ₹5.50 per km), allowing monthly take-home earnings to frequently exceed ₹65,000–₹75,000."
        }
    ]
  },

  {
    slug: "ibps-po-2026-top-10-faq-banking-aspirants",
    title: "IBPS PO 2026: Top 10 FAQs on Eligibility, Handwritten Declaration, Left Thumb & Cutoffs",
    excerpt: "Authoritative candidate handbook for IBPS PO 2026: exact handwritten declaration text, black ink rules, left thumb impression guidelines, sectional cutoff strategy, and 80:20 final merit ratio.",
    category: "Exam Alerts",
    publishDate: "Sept 20, 2026",
    lastUpdated: "Sept 20, 2026",
    author: "SignResize Examination Standards Desk",
    authorRole: "Banking Personnel Research Team",
    readTime: "8 min read",
    featured: false,
    tags: ["IBPS PO 2026","Bank Exam","Handwritten Declaration","Thumb Impression","Prelims Cutoff","Banking Career"],
    relatedExamPreset: "ibps-sbi",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Institute of Banking Personnel Selection (IBPS)"
        },
        {
            "label": "Participating Banks",
            "value": "11 Public Sector Banks (PNB, BoB, Canara, etc.)"
        },
        {
            "label": "Application Last Date",
            "value": "October 20, 2026"
        },
        {
            "label": "Selection Stages",
            "value": "Prelims + Mains + Personal Interview"
        },
        {
            "label": "Final Merit Weight",
            "value": "80% Mains Score + 20% Interview Score"
        },
        {
            "label": "Document Specs",
            "value": "Photo (20-50KB), Sign (10-20KB), Thumb (20-50KB), Declaration (50-100KB)"
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>IBPS PO 2026: Public Sector Banking Career Gateway</h2>
        <p>The Institute of Banking Personnel Selection conducts the common recruitment process for Probationary Officers and Management Trainees across 11 major Public Sector Banks across India. The PO role offers high prestige, swift promotion ladders to Executive Director/CMD levels, and generous banking allowances.</p>
        <p>Banking application forms demand four distinct digital uploads: Passport Photograph, Scanned Signature, Left Thumb Impression (LTI), and a mandatory Handwritten Declaration penned by the candidate personally. Any discrepancy in declaration wording or ink color leads to cancellation.</p>

        <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
          <h4 class="font-bold text-primary text-base flex items-center gap-2">
            <span>⚡</span> Participating Public Sector Banks &amp; Career Ladder
          </h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/90 pt-1">
            <li><strong>Premier Banks:</strong> Punjab National Bank, Bank of Baroda, Canara Bank, Union Bank of India</li>
            <li><strong>Scale I Officer (PO):</strong> Basic ₹36,000 – ₹48,480 (Gross ~₹65,000–₹72,000)</li>
            <li><strong>Scale II (Manager):</strong> Attainable within 3–4 years through internal fast-track promotion channels</li>
            <li><strong>Key Perks:</strong> Leased accommodation (up to ₹30,000 in Mumbai), petrol allowance, medical coverage</li>
          </ul>
        </div>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Prelims &amp; Mains Examination Pattern &amp; Sectional Cutoffs</h2>
        <p>Unlike many central exams, IBPS enforces <strong>both Sectional Cut-offs and Overall Cut-offs</strong> in both Prelims and Mains. Failing in even one section (e.g. English by 0.25 marks) disqualifies the candidate despite high overall scores.</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Prelims Section</th>
                <th class="p-3 border-b">Questions</th>
                <th class="p-3 border-b">Marks</th>
                <th class="p-3 border-b">Sectional Time</th>
                <th class="p-3 border-b">Typical Sectional Cutoff (UR)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">English Language</td>
                <td class="p-3 font-mono">30</td>
                <td class="p-3 font-mono">30</td>
                <td class="p-3 font-mono">20 min (locked)</td>
                <td class="p-3 font-mono">8.50 – 11.00 Marks</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Quantitative Aptitude</td>
                <td class="p-3 font-mono">35</td>
                <td class="p-3 font-mono">35</td>
                <td class="p-3 font-mono">20 min (locked)</td>
                <td class="p-3 font-mono">8.00 – 10.50 Marks</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Reasoning Ability</td>
                <td class="p-3 font-mono">35</td>
                <td class="p-3 font-mono">35</td>
                <td class="p-3 font-mono">20 min (locked)</td>
                <td class="p-3 font-mono">9.50 – 12.00 Marks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        <h2>Document Upload Rules: Photo, Signature, Thumb &amp; Declaration</h2>
        <p>IBPS mandates four uploaded documents with precise size and color requirements:</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Upload Element</th>
                <th class="p-3 border-b">Pixel Dimensions</th>
                <th class="p-3 border-b">File Weight</th>
                <th class="p-3 border-b">Ink / Format Rule</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">Passport Photograph</td>
                <td class="p-3 font-mono">200 × 230 px</td>
                <td class="p-3 font-mono">20 KB – 50 KB</td>
                <td class="p-3">Color, white background, light clothes</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Scanned Signature</td>
                <td class="p-3 font-mono">140 × 60 px</td>
                <td class="p-3 font-mono">10 KB – 20 KB</td>
                <td class="p-3"><strong>Black ink only</strong> (Blue ink rejected)</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Left Thumb Impression</td>
                <td class="p-3 font-mono">240 × 240 px (3×3 cm)</td>
                <td class="p-3 font-mono">20 KB – 50 KB</td>
                <td class="p-3">Blue or Black ink pad on white paper</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Handwritten Declaration</td>
                <td class="p-3 font-mono">800 × 400 px</td>
                <td class="p-3 font-mono">50 KB – 100 KB</td>
                <td class="p-3"><strong>Black ink only</strong>, candidate's own hand</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
          <h4 class="text-base font-bold text-foreground">Prepare All 4 IBPS Documents in 1 Minute</h4>
          <p class="text-sm text-muted-foreground mt-1">Our IBPS / SBI preset handles 10-20KB signatures, 20-50KB thumb impressions, and 50-100KB declaration documents in your browser.</p>
          <a href="/ibps-signature-resize/" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">Open IBPS Resizer Tool &rarr;</a>
        </div>
      </section>
    `,
    faqs: [
        {
            "question": "What is the exact text to write for the IBPS PO Handwritten Declaration?",
            "answer": "The text of the handwritten declaration must be penned strictly in English on plain white paper using black ballpoint ink. The verbatim text is: 'I, _______ (Name of the candidate), hereby declare that all the information submitted by me in the application form is correct, true and valid. I will present the supporting documents as and when required.' Writing in capital/block letters, typing the text, or having another person write it causes immediate application cancellation."
        },
        {
            "question": "What ink color is mandatory for the IBPS signature and declaration?",
            "answer": "IBPS explicitly mandates BLACK ballpoint ink for both the Candidate Signature and the Handwritten Declaration. Uploading signatures in blue, green, or red ink, or using gel pens that bleed through the paper, is a direct violation of Notification Annexure II and results in application rejection. For the Left Thumb Impression, either blue or black ink is permissible."
        },
        {
            "question": "What should a candidate do if their left thumb is injured or missing?",
            "answer": "If a candidate does not have a left thumb, they may use their right thumb impression. If both thumbs are missing, the impression of one of the fingers of the left hand (starting from index finger) can be used. If no fingers are available on the left hand, right hand fingers can be used. The candidate must clearly state the specific finger used on the application form and in the uploaded document title."
        },
        {
            "question": "How do sectional timers and sectional cut-offs operate in IBPS PO Prelims?",
            "answer": "IBPS PO Prelims has 100 questions divided into three sections: English Language (30 Qs), Quantitative Aptitude (35 Qs), and Reasoning Ability (35 Qs). Each section is locked with a strict 20-minute countdown timer. You cannot navigate between sections or switch before the 20 minutes expire. Candidates must qualify in each of the three sections individually by securing minimum cut-off marks decided by IBPS, in addition to clearing the overall aggregate cutoff."
        },
        {
            "question": "What is the final merit list calculation ratio between Mains and Interview?",
            "answer": "Prelims marks are purely qualifying and are NOT added to the final score. The final merit ranking is calculated using a combined score of Mains Examination and Personal Interview in an 80:20 ratio. The Mains score (out of 225 marks) is converted to a weightage out of 80, while the Interview score (out of 100 marks, minimum qualifying 40%) is converted to a weightage out of 20."
        },
        {
            "question": "How should candidates select their bank preferences in the online application?",
            "answer": "Bank preference cannot be altered after final submission. Candidates should prioritize public sector banks based on vacancy numbers, headquarter location, transfer policies, and financial health (Prompt Corrective Action status). Top preferences typically include: Bank of Baroda, Punjab National Bank, Canara Bank, and Union Bank of India. Even if a bank currently shows 'Not Reported' (NR) vacancies, rank them based on personal preference, as NR banks frequently add vacancies during final allotment."
        },
        {
            "question": "What is the educational qualification cutoff date and percentage criteria?",
            "answer": "Candidates must possess a Bachelor's Degree in any discipline from a recognized University. Unlike past years, there is NO minimum percentage requirement (even 50% or passing division is eligible). However, the degree result must have been officially declared on or before the crucial closing date of online registration. Candidates must input their exact graduation marks percentage rounded to two decimal places (e.g. 59.99% cannot be rounded to 60.00%)."
        },
        {
            "question": "What is the financial year validity required for OBC-NCL and EWS certificates?",
            "answer": "For OBC (Non-Creamy Layer) candidates, the certificate must be issued based on the income of the previous financial year and must clearly state non-creamy layer status. For EWS candidates, the Income and Asset Certificate must be valid for the current financial year based on gross annual family income of the preceding financial year. Certificates issued under State Government format that do not conform to Central Government format are rejected during document verification."
        },
        {
            "question": "What is the structure of the descriptive English paper in IBPS PO Mains?",
            "answer": "Immediately following the objective test in Mains, candidates take a 30-minute online English Language Descriptive Test (Letter Writing & Essay) carrying 25 marks. The test must be typed on a computer keyboard. The descriptive paper is evaluated only for candidates who clear the objective test sectional and aggregate cut-offs. Qualifying marks in Descriptive English are mandatory for shortlisting to the interview."
        },
        {
            "question": "What is the starting monthly in-hand salary and perks for an IBPS PO?",
            "answer": "Under the 12th Bipartite Wage Settlement, the starting Basic Pay of a Scale-I Probationary Officer is ₹36,000 (with 4 advance increments for POs). Including Dearness Allowance (~50%), House Rent Allowance (or leased accommodation up to ₹25,000–₹30,000 in Mumbai), City Compensatory Allowance, and Special Allowance, gross pay is approximately ₹65,000–₹72,000. Net in-hand monthly salary ranges between ₹55,000 and ₹62,000 alongside reimbursement for petrol, newspaper, and medical benefits."
        }
    ]
  },

  {
    slug: "sbi-clerk-2026-top-10-faq-junior-associates",
    title: "SBI Clerk 2026: Top 10 FAQs on Eligibility, State Selection, LPT & No-Sectional Cutoff Rules",
    excerpt: "Everything candidates ask about SBI Junior Associates: single-state application rule, Local Language Test (LPT) conditions, the unique no-sectional-cutoffs policy, and career progression to Officer.",
    category: "Career Opportunity",
    publishDate: "Sept 20, 2026",
    lastUpdated: "Sept 20, 2026",
    author: "SignResize Academic Research Desk",
    authorRole: "Banking Recruitment Strategy Desk",
    readTime: "8 min read",
    featured: false,
    tags: ["SBI Clerk 2026","Junior Associate","LPT Test","No Sectional Cutoff","State Vacancy Rules","Bank Jobs"],
    relatedExamPreset: "ibps-sbi",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "State Bank of India (SBI)"
        },
        {
            "label": "Designation",
            "value": "Junior Associate (Customer Support & Sales)"
        },
        {
            "label": "Selection Stages",
            "value": "Prelims + Mains + Local Language Test (LPT)"
        },
        {
            "label": "Sectional Cut-offs",
            "value": "NONE (Aggregate Marks Only)"
        },
        {
            "label": "State Selection",
            "value": "Strictly ONE State / UT only"
        },
        {
            "label": "Document Specs",
            "value": "Photo (20-50 KB) + Signature (10-20 KB)"
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>SBI Clerk (Junior Associate) 2026: Selection System &amp; Job Profile</h2>
        <p>State Bank of India recruits thousands of <strong>Junior Associates (Customer Support &amp; Sales)</strong> annually across its nationwide network. Unlike IBPS clerical cadres, SBI Clerks operate under state-specific vacancies and cannot transfer outside their assigned Circle for at least 5 to 8 years.</p>
        <p>A signature feature of the SBI recruitment process is the complete <strong>absence of sectional cutoffs</strong>: candidates qualify solely on overall aggregate marks, providing a massive advantage to candidates with specialized strengths.</p>

        <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
          <h4 class="font-bold text-primary text-base flex items-center gap-2">
            <span>⚡</span> SBI Junior Associate Key Career Highlights
          </h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/90 pt-1">
            <li><strong>Starting In-Hand Salary:</strong> ~₹34,000 – ₹38,000 in metro cities</li>
            <li><strong>Promotion Opportunity:</strong> Eligible for Trainee Officer (JMGS-I) internal examination after 3 years</li>
            <li><strong>Work-Life Balance:</strong> Regular branch working hours without frequent transfer dislocation</li>
            <li><strong>Medical &amp; Travel:</strong> 100% medical reimbursement for self and dependent family, LFC allowance</li>
          </ul>
        </div>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Prelims &amp; Mains Examination Pattern: Aggregate Scoring Advantage</h2>
        <p>SBI does not maintain minimum sectional cut-offs in either Prelims or Mains. If a candidate scores low in English but dominates Quantitative Aptitude and Reasoning, their high aggregate score qualifies them for Mains.</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Prelims Section</th>
                <th class="p-3 border-b">Questions</th>
                <th class="p-3 border-b">Marks</th>
                <th class="p-3 border-b">Sectional Time</th>
                <th class="p-3 border-b">Scoring Rule</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">English Language</td>
                <td class="p-3 font-mono">30</td>
                <td class="p-3 font-mono">30</td>
                <td class="p-3 font-mono">20 min</td>
                <td class="p-3">0.25 negative marking per error</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Numerical Ability</td>
                <td class="p-3 font-mono">35</td>
                <td class="p-3 font-mono">35</td>
                <td class="p-3 font-mono">20 min</td>
                <td class="p-3">Simplification, Number Series, Arithmetic</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Reasoning Ability</td>
                <td class="p-3 font-mono">35</td>
                <td class="p-3 font-mono">35</td>
                <td class="p-3 font-mono">20 min</td>
                <td class="p-3">Puzzles, Seating Arrangements, Syllogisms</td>
              </tr>
              <tr class="bg-muted/30 font-bold">
                <td class="p-3">Total / Composite</td>
                <td class="p-3 font-mono">100</td>
                <td class="p-3 font-mono">100</td>
                <td class="p-3 font-mono">60 min</td>
                <td class="p-3 text-emerald-600 dark:text-emerald-400">NO Sectional Cut-off</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        <h2>Document Specifications for SBI Clerk Portal</h2>
        <p>SBI adheres strictly to IBPS portal digital standards: <strong>Photo: 20–50 KB (200×230 px)</strong>, <strong>Signature: 10–20 KB (140×60 px in black ink)</strong>. Signatures in capital letters are disqualified immediately.</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
          <h4 class="text-base font-bold text-foreground">Resize Your SBI Clerk Photo &amp; Signature</h4>
          <p class="text-sm text-muted-foreground mt-1">Ensure 100% compliance with SBI portal file boundaries using our instant client-side resizer tool.</p>
          <a href="/ibps-signature-resize/" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">Launch SBI Resizer Preset &rarr;</a>
        </div>
      </section>
    `,
    faqs: [
        {
            "question": "Can an aspirant apply for SBI Clerk vacancies across multiple states?",
            "answer": "No. A candidate can apply for vacancies in only ONE State / Union Territory. There is no provision to apply for more than one circle. If a candidate submits multiple applications for different states, only the latest valid application registered with fee payment is considered, and all prior submissions are nullified."
        },
        {
            "question": "What is the Local Language Test (LPT) and who is exempted from taking it?",
            "answer": "Candidates shortlisted for final selection must demonstrate proficiency (reading, writing, speaking, and understanding) in the specified local language of the State/UT they applied for. The Local Language Test is conducted before joining. However, candidates who produce 10th or 12th standard mark sheets or certificates indicating they studied the local language as an official subject are completely exempted from the LPT."
        },
        {
            "question": "Is it true that SBI Clerk has no sectional cutoff marks?",
            "answer": "Yes, this is completely true. Unlike IBPS PO, IBPS Clerk, and SBI PO, the State Bank of India does NOT enforce minimum qualifying marks for individual sections in either the Preliminary or Mains Examination. Candidates are shortlisted purely on their overall aggregate score, subject to qualifying the minimum aggregate benchmark determined by the Bank."
        },
        {
            "question": "Can an SBI Junior Associate transfer to another state or circle after joining?",
            "answer": "Under the current SBI service policy, Junior Associates are not eligible for inter-circle transfer (transfer to another state or circle) until completing 5 years of service for female candidates and 8 years for male candidates, except on extraordinary medical or compassionate grounds. Candidates must carefully choose their application state, as they will spend the majority of their early banking career in that circle."
        },
        {
            "question": "What is the age limit and educational qualification for SBI Clerk 2026?",
            "answer": "Candidates must be between 20 and 28 years of age. Standard statutory age relaxations apply: SC/ST candidates get +5 years (up to 33), OBC candidates get +3 years (up to 31), and PwBD candidates get +10 to +15 years. Candidates must possess a Graduation degree in any discipline from a recognized University. Final year students are eligible provided they produce proof of having passed the graduation examination on or before the cutoff date."
        },
        {
            "question": "What is the exam pattern for SBI Clerk Mains examination?",
            "answer": "SBI Clerk Mains consists of 190 questions carrying 200 marks, with a duration of 2 hours and 40 minutes across four sections: General/Financial Awareness (50 Qs / 50 Marks / 35 min), General English (40 Qs / 40 Marks / 35 min), Quantitative Aptitude (50 Qs / 50 Marks / 45 min), and Reasoning Ability & Computer Aptitude (50 Qs / 60 Marks / 45 min). Each wrong answer incurs a 1/4th mark deduction."
        },
        {
            "question": "What is the SBI Clerk waitlist policy and how many candidates are empaneled?",
            "answer": "SBI maintains a reserve waitlist of up to 50% of the total declared state-wise vacancies. The waitlist is released in quarterly tranches over a period of one year from the date of final result declaration. Candidates who marginally miss the final state cutoff often secure appointments as non-joining candidates create vacant positions."
        },
        {
            "question": "What are the photo and signature upload requirements for SBI Clerk?",
            "answer": "The candidate's photograph must be a clear 200 × 230 pixel color image on white background, with file size strictly between 20.0 KB and 50.0 KB in JPG/JPEG. The signature must measure 140 × 60 pixels, strictly between 10.0 KB and 20.0 KB in JPG/JPEG, penned in black ballpoint ink on white paper. Capital letter signatures are strictly prohibited."
        },
        {
            "question": "What is the starting monthly in-hand salary for an SBI Junior Associate?",
            "answer": "Under the 12th Bipartite Wage Settlement, the starting Basic Pay of a Junior Associate is ₹19,900 (with 2 advance increments for graduates, starting Basic ₹20,900). With DA, Special Allowance, Transport Allowance, and HRA, gross pay is ~₹39,000–₹42,000. In-hand net salary ranges between ₹34,000 and ₹38,000 per month depending on city classification."
        },
        {
            "question": "What is the internal promotion path from SBI Clerk to Officer?",
            "answer": "SBI offers rapid internal career promotion channels. After 3 years of service as a Junior Associate, employees can appear for internal written examinations and interviews for promotion to Trainee Officer (JMGS Scale-I), which puts them on par with directly recruited Probationary Officers. Alternatively, after 4 years, candidates can qualify for promotion to Junior Management Grade Scale-I via the JMGS-I internal fast-track channel."
        }
    ]
  },

  {
    slug: "upsc-cds-nda-2026-top-10-faq-defence-guide",
    title: "UPSC CDS & NDA II 2026: Top 10 FAQs on Eligibility, OTR Photo Rules, SSB Procedure & Medical Standards",
    excerpt: "Complete candidate defense guide for UPSC CDS & NDA II: OTR 10-day-old photograph rule, visual acuity/spectacles standards, 5-day SSB interview protocol, female candidate eligibility, and academy options.",
    category: "Career Opportunity",
    publishDate: "Sept 20, 2026",
    lastUpdated: "Sept 20, 2026",
    author: "SignResize Examination Standards Desk",
    authorRole: "Defence Services Advisory Desk",
    readTime: "9 min read",
    featured: false,
    tags: ["UPSC CDS","NDA 2026","SSB Interview","UPSC OTR Photo","Medical Standards","Defence Career"],
    relatedExamPreset: "upsc-civil-services",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Union Public Service Commission (UPSC)"
        },
        {
            "label": "Academies",
            "value": "IMA, INA, AFA, OTA (CDS) & NDA Khadakwasla"
        },
        {
            "label": "Selection Stages",
            "value": "Written Examination + 5-Day SSB + Medicals"
        },
        {
            "label": "Photo Rule",
            "value": "OTR 10-Day Recency with Printed Name & Date"
        },
        {
            "label": "Negative Marking",
            "value": "1/3rd (0.33 marks) per incorrect answer"
        },
        {
            "label": "Gender Eligibility",
            "value": "Both Male & Female Unmarried Candidates"
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>UPSC Combined Defence Services (CDS) &amp; NDA: Pathways to Commissioned Ranks</h2>
        <p>The Union Public Service Commission conducts the CDS and NDA examinations twice a year to commission officers into the Indian Army, Indian Navy, and Indian Air Force. Successful candidates enter the prestigious Indian Military Academy (IMA), Indian Naval Academy (INA), Air Force Academy (AFA), Officers Training Academy (OTA), or the National Defence Academy (NDA Khadakwasla).</p>
        <p>Defense selection demands mental acuity, emotional resilience, and strict physical fitness. Furthermore, UPSC has implemented the <strong>10-Day Photo Recency Rule</strong> on its One Time Registration (OTR) portal (<code>upsconline.nic.in</code>), requiring candidates' photographs to be taken within 10 days of application submission with name and date imprinted.</p>

        <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
          <h4 class="font-bold text-primary text-base flex items-center gap-2">
            <span>⚡</span> Defence Academies &amp; Commission Types
          </h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/90 pt-1">
            <li><strong>IMA Dehradun (CDS):</strong> Permanent Commission (Army) | Age: 19–24 | Degree in any discipline</li>
            <li><strong>INA Ezhimala (CDS):</strong> Permanent Commission (Navy) | Age: 19–24 | Engineering Degree</li>
            <li><strong>AFA Dundigal (CDS):</strong> Permanent Commission (Air Force) | Age: 20–24 | Degree with Physics &amp; Maths</li>
            <li><strong>OTA Chennai (CDS):</strong> Short Service Commission (Army) | Age: 19–25 | Male &amp; Female candidates</li>
          </ul>
        </div>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Written Examination Blueprint &amp; Marking Scheme</h2>
        <p>For IMA, INA, and AFA, the examination comprises three 2-hour papers (English, General Knowledge, Elementary Mathematics) carrying 100 marks each (300 total). For OTA, candidates appear ONLY for English and General Knowledge (200 total marks). Negative marking is <strong>1/3rd (0.33 marks)</strong>.</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Subject Paper</th>
                <th class="p-3 border-b">Questions</th>
                <th class="p-3 border-b">Marks</th>
                <th class="p-3 border-b">Duration</th>
                <th class="p-3 border-b">Qualifying Benchmark</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">English</td>
                <td class="p-3 font-mono">120</td>
                <td class="p-3 font-mono">100</td>
                <td class="p-3 font-mono">2 Hours</td>
                <td class="p-3 font-mono">Min 20% Sectional Cutoff</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">General Knowledge</td>
                <td class="p-3 font-mono">120</td>
                <td class="p-3 font-mono">100</td>
                <td class="p-3 font-mono">2 Hours</td>
                <td class="p-3 font-mono">Min 20% Sectional Cutoff</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Elementary Mathematics (Not for OTA)</td>
                <td class="p-3 font-mono">100</td>
                <td class="p-3 font-mono">100</td>
                <td class="p-3 font-mono">2 Hours</td>
                <td class="p-3 font-mono">Min 20% Sectional Cutoff</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        <h2>UPSC OTR Document Upload Rules: 10-Day Photo &amp; Signature Standards</h2>
        <p>UPSC requires strict compliance with OTR portal digital parameters:</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Element</th>
                <th class="p-3 border-b">Pixel Dimensions</th>
                <th class="p-3 border-b">File Weight</th>
                <th class="p-3 border-b">Critical Rule</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">Passport Photograph</td>
                <td class="p-3 font-mono">350 × 350 px to 1000 × 1000 px</td>
                <td class="p-3 font-mono">20 KB – 300 KB</td>
                <td class="p-3">Taken within 10 days; Candidate Name and Date of Photo clearly imprinted at the bottom</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Scanned Signature</td>
                <td class="p-3 font-mono">350 × 350 px to 1000 × 1000 px</td>
                <td class="p-3 font-mono">20 KB – 300 KB</td>
                <td class="p-3">Black ballpoint pen on plain white paper; running script only</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
          <h4 class="text-base font-bold text-foreground">Resize for UPSC OTR Portal</h4>
          <p class="text-sm text-muted-foreground mt-1">Our UPSC preset formats your photograph with name/date imprint and keeps file size within the strict 20–300 KB range.</p>
          <a href="/upsc-signature-resize/" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">Launch UPSC Resizer Preset &rarr;</a>
        </div>
      </section>
    `,
    faqs: [
        {
            "question": "What is the UPSC 10-day-old photo rule with name and date?",
            "answer": "Under revised UPSC guidelines, the uploaded photograph must not be more than 10 days old from the date of online application submission. Furthermore, the candidate's name (matching matriculation certificate) and the exact date on which the photograph was clicked must be legibly printed in bold text at the bottom of the photograph against a white strip. Uploading older photos or photos lacking this imprinted metadata will lead to application cancellation."
        },
        {
            "question": "What are the age limits and educational criteria for CDS entries?",
            "answer": "For Indian Military Academy (IMA): 19 to 24 years, Bachelor's degree in any discipline. For Indian Naval Academy (INA): 19 to 24 years, Engineering degree (B.E./B.Tech). For Air Force Academy (AFA): 20 to 24 years (up to 26 for Commercial Pilot License holders), Degree in Engineering or Graduation with Physics and Mathematics at 10+2 level. For Officers Training Academy (OTA): 19 to 25 years, Degree in any discipline. Candidates must be unmarried."
        },
        {
            "question": "Are female candidates eligible for UPSC CDS and NDA II?",
            "answer": "Yes, female candidates are fully eligible for both examinations. In CDS, women candidates compete for admission to the Officers Training Academy (OTA Chennai) for Short Service Commission (Non-Technical) courses. In NDA, female candidates are admitted across all three wings (Army, Navy, and Air Force) on an equal footing with male cadets following Supreme Court directives."
        },
        {
            "question": "What is the written exam pattern differences between IMA/INA/AFA and OTA?",
            "answer": "For IMA, INA, and AFA, the exam has three distinct papers: English (100 Marks, 2 Hours), General Knowledge (100 Marks, 2 Hours), and Elementary Mathematics (100 Marks, 2 Hours), totaling 300 marks. For OTA Chennai, there is NO Mathematics paper: candidates appear only for English (100 Marks) and General Knowledge (100 Marks), totaling 200 marks. Candidates must score at least 20% qualifying marks in each individual paper."
        },
        {
            "question": "What are the visual acuity, spectacles, and LASIK standards for Defence?",
            "answer": "For Army (IMA/OTA): Distant vision uncorrected 6/36 in both eyes, correctable with glasses to 6/6 (better eye) and 6/9 (worse eye). Myopia must not exceed -3.50D and Hypermetropia +2.50D. For Air Force (AFA): Distant vision 6/6 in one eye and 6/9 in other, correctable to 6/6 (Myopia -0.75D, Hypermetropia +1.5D). LASIK surgery is permitted only for candidates above 20 years of age with specific corneal thickness and stability criteria, but is completely disqualified for NDA flying branch entries."
        },
        {
            "question": "What is the 5-day Services Selection Board (SSB) interview procedure?",
            "answer": "The 5-day SSB interview tests Officer Like Qualities (OLQs): Day 1 (Screening Test: Officer Intelligence Rating OIR & Picture Perception & Discussion Test PPDT; screened-out candidates return home). Day 2 (Psychological Tests: TAT, WAT, SRT, and Self Description). Day 3 & 4 (Group Testing Officer GTO tasks: Group Discussion, Progressive Group Task, Military Planning Exercise, Snake Race, Command Task). Day 5 (Final Board Conference). Personal Interviews are conducted across Days 2 to 4."
        },
        {
            "question": "What is the negative marking deduction rule in UPSC CDS?",
            "answer": "Each question carries multiple choices with 1/3rd (0.33) negative marking penalty for incorrect responses. In English and GK, where 120 questions carry 100 marks (each question = 0.833 marks), the penalty for a wrong answer is 0.277 marks. In Mathematics, where 100 questions carry 100 marks (each = 1 mark), a wrong answer penalizes 0.33 marks. Unattempted questions carry zero penalty."
        },
        {
            "question": "What medical conditions lead to permanent rejection during defence medicals?",
            "answer": "Common grounds for permanent medical rejection include: Knock Knees (inter-malleolar distance > 5 cm), Flat Foot, Severe Varicose Veins, Cubitus Valgus (carrying angle > 15° for males, > 18° for females), Color Blindness (for Flying/Navy), Deviated Nasal Septum (DNS) causing obstruction, Chronic Otitis Media, and unauthorized permanent Tattoos (tattoos on inner forearm or dorsum of hand only are permitted under strict cultural rules)."
        },
        {
            "question": "What is the training duration and monthly stipend at IMA, AFA, and OTA?",
            "answer": "At IMA Dehradun, training is 18 months for direct entries; at INA Ezhimala, 18 months; at AFA Dundigal, 74 weeks; and at OTA Chennai, 49 weeks. During the training period, Gentleman and Lady Cadets receive a fixed monthly stipend of ₹56,100 (starting Pay Level 10 of Lieutenant). Upon successful commissioning, arrears of allowances are disbursed."
        },
        {
            "question": "What is the starting salary and allowances of a newly commissioned Lieutenant?",
            "answer": "A newly commissioned Lieutenant (Army), Sub-Lieutenant (Navy), or Flying Officer (Air Force) starts at Pay Level 10 with Basic Pay of ₹56,100. Adding Military Service Pay (MSP ₹15,500), Dearness Allowance (~50%), High Altitude or Field Area allowances (ranging from ₹10,500 to ₹42,500 in Siachen/High Altitude), and Flying Allowance (for pilots ₹25,000), gross pay easily ranges between ₹1,05,000 and ₹1,35,000 per month."
        }
    ]
  },

  {
    slug: "uppsc-ro-aro-2026-top-10-faq-aspirants",
    title: "UPPSC RO/ARO 2026: Top 10 FAQs on Exam Pattern, 'O' Level Equivalents & Typing Rules",
    excerpt: "Everything candidates need to know about UP Review Officer / Assistant Review Officer: 'O' Level diploma equivalence, Hindi typing tests, 1/3rd negative marking, and General Hindi scoring hacks.",
    category: "Guidelines & Tips",
    publishDate: "Sept 20, 2026",
    lastUpdated: "Sept 20, 2026",
    author: "SignResize Academic Research Desk",
    authorRole: "State Civil Services Strategy Desk",
    readTime: "9 min read",
    featured: false,
    tags: ["UPPSC RO ARO","Samiksha Adhikari","O Level Equivalence","Hindi Typing Test","General Hindi 60 Marks","UP Secretariat"],
    relatedExamPreset: "uppsc-services",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Uttar Pradesh Public Service Commission (UPPSC)"
        },
        {
            "label": "Designations",
            "value": "Review Officer (RO) & Assistant Review Officer (ARO)"
        },
        {
            "label": "Secretariat Post",
            "value": "UP Secretariat (Lucknow), UPPSC, Board of Revenue"
        },
        {
            "label": "Pay Matrix",
            "value": "RO: Level 8 (₹47,600) | ARO: Level 7 (₹44,900)"
        },
        {
            "label": "Negative Marking",
            "value": "1/3rd (0.33 marks) per incorrect response"
        },
        {
            "label": "Document Specs",
            "value": "UPPSC OTR Photo & Signature (10–20 KB)"
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>UPPSC Samiksha Adhikari (RO) &amp; Sahayak Samiksha Adhikari (ARO) 2026</h2>
        <p>The Uttar Pradesh Public Service Commission conducts the prestigious <strong>RO/ARO (Samiksha Adhikari / Sahayak Samiksha Adhikari)</strong> examination. Based largely in the Uttar Pradesh Secretariat (Sachivalaya, Lucknow), Board of Revenue, and UPPSC headquarters (Prayagraj), these officers oversee policy files, cabinet decisions, legislative drafting, and administrative scrutiny.</p>
        <p>Unlike provincial civil service (PCS) exams requiring vast subjective GS papers, RO/ARO selection hinges on an objective Preliminary test and a high-scoring <strong>General Hindi (Samanya Hindi)</strong> paper where top candidates regularly score 55+ out of 60 marks.</p>

        <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
          <h4 class="font-bold text-primary text-base flex items-center gap-2">
            <span>⚡</span> RO vs ARO Key Distinctions
          </h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/90 pt-1">
            <li><strong>Review Officer (RO):</strong> Pay Level 8 (₹47,600–₹1,51,100). Simple Graduation degree in any discipline. NO 'O' Level diploma or typing test required.</li>
            <li><strong>Assistant Review Officer (ARO):</strong> Pay Level 7 (₹44,900–₹1,42,400). Graduation + NIELIT 'O' Level (or recognized equivalent diploma) + Hindi typing speed of 25 WPM.</li>
          </ul>
        </div>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Preliminary Examination Pattern: The 200-Mark Blueprint</h2>
        <p>The Preliminary exam consists of two objective papers totaling 200 marks, with a strict <strong>1/3rd (0.33 marks)</strong> negative marking penalty per incorrect answer.</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Paper</th>
                <th class="p-3 border-b">Subject</th>
                <th class="p-3 border-b">Questions</th>
                <th class="p-3 border-b">Marks</th>
                <th class="p-3 border-b">Duration</th>
                <th class="p-3 border-b">Target Safe Score</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">Paper-I</td>
                <td class="p-3">General Studies (History, Geography, Polity, Science, UP Special, Current Affairs)</td>
                <td class="p-3 font-mono">140</td>
                <td class="p-3 font-mono">140</td>
                <td class="p-3 font-mono">2 Hours</td>
                <td class="p-3 font-mono">85–92 Marks</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Paper-II</td>
                <td class="p-3">General Hindi (6 Specific Grammar Topics, 10 Questions Each)</td>
                <td class="p-3 font-mono">60</td>
                <td class="p-3 font-mono">60</td>
                <td class="p-3 font-mono">1 Hour</td>
                <td class="p-3 font-mono">54–57 Marks</td>
              </tr>
              <tr class="bg-muted/30 font-bold">
                <td class="p-3">Total</td>
                <td class="p-3">Composite Preliminary Screening Score</td>
                <td class="p-3 font-mono">200</td>
                <td class="p-3 font-mono">200</td>
                <td class="p-3 font-mono">3 Hours</td>
                <td class="p-3 text-emerald-600 dark:text-emerald-400 font-mono">138–142 Marks (Cutoff Zone)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        <h2>UPPSC OTR Portal Compliance for Scanned Documents</h2>
        <p>Candidates must first generate a <strong>One-Time Registration (OTR) Number</strong> on <code>uppsc.up.nic.in</code>. Both photograph and signature must measure strictly between <strong>10.0 KB and 20.0 KB</strong> in JPG/JPEG format.</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
          <h4 class="text-base font-bold text-foreground">Prepare UPPSC OTR Signature in 10-20 KB</h4>
          <p class="text-sm text-muted-foreground mt-1">Our UPPSC tool preset converts your signature to official 140×60 px, cleans smartphone shadows, and sets file size strictly between 10 KB and 20 KB.</p>
          <a href="/uppsc-signature-resize/" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">Open UPPSC Resizer Preset &rarr;</a>
        </div>
      </section>
    `,
    faqs: [
        {
            "question": "Is 'O' Level diploma mandatory for both Review Officer (RO) and Assistant Review Officer (ARO)?",
            "answer": "No. 'O' Level diploma is NOT mandatory for Review Officer (RO / Samiksha Adhikari). Any candidate with a simple Bachelor's Degree in any discipline from a recognized University is fully eligible for the RO post. The NIELIT 'O' Level computer diploma (or recognized equivalent qualification) and Hindi typing speed test are mandatory ONLY for the post of Assistant Review Officer (ARO / Sahayak Samiksha Adhikari)."
        },
        {
            "question": "What computer diplomas are recognized as equivalent to NIELIT 'O' Level by UPPSC?",
            "answer": "Under the official Uttar Pradesh Government order regarding 'O' Level equivalence, diplomas or degrees of at least 1 year duration in Computer Science / IT from UGC or AICTE recognized universities are accepted. This includes: BCA, MCA, B.Sc (Computer Science/IT), B.Tech in CS/IT, PGDCA (Post Graduate Diploma in Computer Applications of minimum 1 year), and specialized DOEACC diploma courses. Private unaccredited 3-month or 6-month computer certificates are rejected."
        },
        {
            "question": "What are the rules and fonts for the Hindi Typing Test for ARO?",
            "answer": "The Hindi typing test is qualifying in nature and is conducted on a computer terminal for candidates who clear the Mains examination. Candidates must achieve a minimum speed of 25 words per minute (WPM) in Hindi. UPPSC officially conducts the typing test in KrutiDev 010 or Mangal font (InScript / Remington keyboard layout). Knowledge of English typing is an additional desirable qualification that gives preference if two candidates have identical marks."
        },
        {
            "question": "What are the six syllabus topics covered in the 60-mark General Hindi Paper-II?",
            "answer": "The 60-mark General Hindi paper is renowned for its high precision. It consists of exactly 6 topics carrying 10 questions and 10 marks each: 1. Vilom Shabd (Antonyms), 2. Vakya evam Vartani Shuddhi (Sentence and Spelling Correction), 3. Anek Shabdon ke liye Ek Shabd (One-word Substitution), 4. Tatbhav evam Tatsam Shabd, 5. Visheshan evam Visheshya (Adjectives and Nouns), and 6. Paryayvachi Shabd (Synonyms)."
        },
        {
            "question": "What is the negative marking penalty in UPPSC RO/ARO?",
            "answer": "A negative marking penalty of 1/3rd (0.33 marks) is enforced for every incorrect response in both Preliminary Paper-I (GS) and Paper-II (General Hindi), as well as in the objective components of the Mains Examination. Unattempted questions incur no mark penalty."
        },
        {
            "question": "Can candidates from other Indian states apply for UPPSC RO/ARO 2026?",
            "answer": "Yes, candidates from all Indian states and Union Territories are completely eligible to apply. However, all non-UP domiciled candidates are treated under the Unreserved (General) category, regardless of their caste, OBC, SC, ST, or EWS status in their home states. They cannot claim reservation benefits or age relaxations."
        },
        {
            "question": "What is the examination structure of UPPSC RO/ARO Mains?",
            "answer": "The Mains examination carries 400 total marks across three papers: Paper-I (General Studies objective: 120 Questions / 120 Marks / 2 Hours); Paper-II (General Hindi and Drafting: Part 1 Conventional drafting 100 Marks + Part 2 General Vocabulary objective 60 Marks / 2.5 Hours); Paper-III (Hindi Essay: 3 Essays across literature, national development, and international events: 120 Marks / 3 Hours). There is NO personal interview; final selection is formulated 100% on Mains marks."
        },
        {
            "question": "What are the photograph and signature specifications for UPPSC OTR registration?",
            "answer": "On the UPPSC OTR portal, both photograph and signature must be uploaded as JPG/JPEG files with file weights strictly between 10.0 KB and 20.0 KB. The photograph must be a clear studio portrait against a white or light grey background without spectacles or caps. The signature must be penned on white paper in black ink within a 140 × 60 pixel crop."
        },
        {
            "question": "What are the promotion avenues for a Review Officer in the UP Civil Secretariat?",
            "answer": "A Review Officer (Pay Level 8) enjoys a prestigious bureaucratic career in the UP Secretariat. The promotional ladder proceeds to Section Officer (Anubhag Adhikari, Level 10), Under Secretary (Anu Sachiv, Level 11), Deputy Secretary (Up Sachiv, Level 12), Joint Secretary (Sanyukta Sachiv, Level 13), and Special Secretary (Vishesh Sachiv, Level 13A). Many officers ultimately earn induction into the Indian Administrative Service (IAS)."
        },
        {
            "question": "What is the monthly in-hand salary of a newly appointed Review Officer?",
            "answer": "A Review Officer starts at Pay Level 8 with a Basic Pay of ₹47,600. In Lucknow (Class Y city), with current Dearness Allowance (~50%), House Rent Allowance (18% ~₹8,568), and Secretariat Allowance, gross monthly pay is approximately ₹78,000–₹82,000. After NPS and standard deductions, the net take-home salary is approximately ₹69,000–₹72,000 per month."
        }
    ]
  },

  {
    slug: "ssc-gd-constable-2026-top-10-faq-complete-guide",
    title: "SSC GD Constable 2026: Top 10 FAQs on PET/PST Standards, Force Preferences & Live Photo Rules",
    excerpt: "Everything candidates ask about SSC GD Constable: 5km/1.6km running times, height and chest physical standards, force preference strategy (SSF vs CISF vs CRPF vs BSF), and live camera rules.",
    category: "Career Opportunity",
    publishDate: "Sept 20, 2026",
    lastUpdated: "Sept 20, 2026",
    author: "SignResize Examination Standards Desk",
    authorRole: "Paramilitary Recruitment Strategy Desk",
    readTime: "9 min read",
    featured: false,
    tags: ["SSC GD 2026","Paramilitary Forces","PET Physical Standards","Force Preference","Live Photo Capture","10th Pass Jobs"],
    relatedExamPreset: "ssc-general",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Staff Selection Commission (SSC)"
        },
        {
            "label": "Forces Included",
            "value": "BSF, CISF, CRPF, SSB, ITBP, AR, SSF"
        },
        {
            "label": "Educational Criteria",
            "value": "10th Class (Matriculation) Pass"
        },
        {
            "label": "Physical Efficiency Test",
            "value": "Male: 5 km in 24 min | Female: 1.6 km in 8.5 min"
        },
        {
            "label": "Physical Standard Test",
            "value": "Height: 170 cm (Male) / 157 cm (Female)"
        },
        {
            "label": "Document Specs",
            "value": "Live Webcam Photo + Signature (140×60 px, 10–20 KB)"
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>SSC GD Constable 2026: Recruitment Overview &amp; Paramilitary Forces</h2>
        <p>The Staff Selection Commission conducts the General Duty (GD) Constable recruitment for over <strong>39,000 vacancies</strong> across Central Armed Police Forces (CAPFs) and allied organizations: Border Security Force (BSF), Central Industrial Security Force (CISF), Central Reserve Police Force (CRPF), Sashastra Seema Bal (SSB), Indo-Tibetan Border Police (ITBP), Assam Rifles (AR), and Secretariat Security Force (SSF).</p>
        <p>As India's largest 10th-pass recruitment drive, selection requires clearing a four-stage process: Computer Based Examination (CBE), Physical Efficiency Test (PET), Physical Standard Test (PST), and Detailed Medical Examination (DME).</p>

        <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
          <h4 class="font-bold text-primary text-base flex items-center gap-2">
            <span>⚡</span> Force Preference Hierarchy Recommendations
          </h4>
          <p class="text-xs text-muted-foreground leading-relaxed">
            Aspirants must rank forces carefully during registration. Top recommended preference order based on posting peace, family quarters, and career conditions:
          </p>
          <ol class="text-xs sm:text-sm text-foreground/90 space-y-1 list-decimal pl-4 pt-1 font-semibold">
            <li><strong>SSF (Secretariat Security Force):</strong> Elite Delhi central ministry postings, regular hours, excellent quarters</li>
            <li><strong>CISF (Central Industrial Security Force):</strong> Airports, metro stations, industrial plants with family accommodation</li>
            <li><strong>SSB (Sashastra Seema Bal):</strong> Indo-Nepal and Indo-Bhutan peaceful borders</li>
            <li><strong>ITBP (Indo-Tibetan Border Police):</strong> High-altitude Himalayan border policing</li>
            <li><strong>CRPF (Central Reserve Police Force):</strong> Internal security, counter-insurgency, anti-Naxal operations</li>
            <li><strong>BSF (Border Security Force):</strong> Indo-Pakistan and Indo-Bangladesh frontline defense</li>
            <li><strong>Assam Rifles (AR):</strong> North-East frontier security under Indian Army operational control</li>
          </ol>
        </div>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Computer Based Examination (CBE) Blueprint</h2>
        <p>The online exam features 80 multiple-choice questions carrying 160 total marks (2 marks per question) to be attempted in 60 minutes. Negative marking is <strong>0.25 marks (12.5%)</strong> per incorrect answer.</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Section</th>
                <th class="p-3 border-b">Questions</th>
                <th class="p-3 border-b">Marks</th>
                <th class="p-3 border-b">Target Time</th>
                <th class="p-3 border-b">Scoring Highlights</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">General Intelligence &amp; Reasoning</td>
                <td class="p-3 font-mono">20</td>
                <td class="p-3 font-mono">40</td>
                <td class="p-3 font-mono">15 min</td>
                <td class="p-3">Analogies, Arithmetic reasoning, Series, Coding</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">General Knowledge &amp; Awareness</td>
                <td class="p-3 font-mono">20</td>
                <td class="p-3 font-mono">40</td>
                <td class="p-3 font-mono">8 min</td>
                <td class="p-3">Indian Constitution, History, Geography, Basic Science, Sports</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Elementary Mathematics</td>
                <td class="p-3 font-mono">20</td>
                <td class="p-3 font-mono">40</td>
                <td class="p-3 font-mono">25 min</td>
                <td class="p-3">Decimals, Ratio, Profit &amp; Loss, Discount, Time &amp; Distance</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">English or Hindi (Candidate's Choice)</td>
                <td class="p-3 font-mono">20</td>
                <td class="p-3 font-mono">40</td>
                <td class="p-3 font-mono">12 min</td>
                <td class="p-3">Comprehension, Error finding, Synonyms/Antonyms</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        <h2>Document Upload Rules: Live Photo &amp; 140×60 px Signature</h2>
        <p>SSC portal uses live webcam capture for photographs. For signatures, upload a scanned file cropped to <strong>140 × 60 pixels (10.0 KB to 20.0 KB)</strong> in black ballpoint ink on white paper. Capital letter signatures are disqualified.</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
          <h4 class="text-base font-bold text-foreground">Prepare Your SSC GD Signature in Seconds</h4>
          <p class="text-sm text-muted-foreground mt-1">Our SSC tool automatically crops to 140×60 px and compresses within the 10–20 KB bound for instant portal acceptance.</p>
          <a href="/ssc-signature-resize/" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">Open SSC Signature Resizer &rarr;</a>
        </div>
      </section>
    `,
    faqs: [
        {
            "question": "What are the age limits, cut-off date, and educational criteria for SSC GD Constable 2026?",
            "answer": "Candidates must have passed 10th Class (Matriculation) from a recognized Board of Education before the prescribed cut-off date. The candidate's age must fall between 18 and 23 years. Upper age relaxations apply strictly: SC/ST candidates receive +5 years (up to 28 years), OBC candidates receive +3 years (up to 26 years), and Ex-Servicemen receive 3 years deduction after military service deduction."
        },
        {
            "question": "What are the Physical Efficiency Test (PET) running time standards for Male and Female candidates?",
            "answer": "For Male candidates: running distance of 5 kilometers to be completed within 24 minutes. For Female candidates: running distance of 1.6 kilometers to be completed within 8 minutes and 30 seconds. For candidates belonging to the Ladakh Region: Male candidates run 1.6 km in 7 minutes; Female candidates run 800 meters in 5 minutes. The PET is purely qualifying in nature with zero marks awarded."
        },
        {
            "question": "What are the Physical Standard Test (PST) height and chest measurement criteria?",
            "answer": "Standard Height requirement is: Male candidates — 170 cm; Female candidates — 157 cm. Standard Chest requirement for Male candidates is: Unexpanded 80 cm, with a mandatory minimum expansion of 5 cm (expanded 85 cm). Relaxations apply: ST male candidates height 162.5 cm / chest 76-81 cm; ST female candidates height 150 cm; candidates hailing from Garhwal, Kumaon, Himachal Pradesh, Gorkhas, and North-Eastern states receive relaxed height of 165 cm (Male) / 155 cm (Female)."
        },
        {
            "question": "How should candidates decide their Paramilitary Force preference order?",
            "answer": "Preference order determines your final force allocation based on merit and cannot be altered post-submission. The most recommended preference hierarchy is: 1. SSF (highest quality of life, Delhi posting), 2. CISF (airport and metro duty, family housing), 3. SSB (friendly Indo-Nepal borders), 4. ITBP (Himalayan borders), 5. CRPF (largest central force, dynamic duties), 6. BSF (border defense), and 7. Assam Rifles."
        },
        {
            "question": "What is the Computer Based Examination (CBE) pattern and negative marking penalty?",
            "answer": "The CBE comprises 80 objective multiple-choice questions for 160 marks (2 marks per question) to be attempted in 60 minutes across four subjects: General Intelligence & Reasoning (20 Qs / 40 M), General Knowledge & General Awareness (20 Qs / 40 M), Elementary Mathematics (20 Qs / 40 M), and English or Hindi (20 Qs / 40 M). Negative marking is 0.25 marks deducted for each wrong answer."
        },
        {
            "question": "What are the bonus marks awarded to NCC Certificate holders?",
            "answer": "Candidates possessing National Cadet Corps (NCC) certificates receive bonus incentive marks added to their normalized CBE score: NCC 'C' Certificate holders receive 5% bonus marks (8 marks out of 160); NCC 'B' Certificate holders receive 3% bonus marks (4.8 marks); and NCC 'A' Certificate holders receive 2% bonus marks (3.2 marks). The bonus is granted only upon producing the original certificate during document verification."
        },
        {
            "question": "How is the live webcam photograph captured for SSC GD online registration?",
            "answer": "SSC GD utilizes live camera capture directly on ssc.gov.in or the MySSC mobile app. Candidates must capture their live image looking straight ahead against a plain, light-colored background. Facial features (both eyes, nose, mouth, and ears) must occupy 80% of the oval guide. Wearing caps, sunglasses, or spectacles with reflection is forbidden and triggers automatic rejection."
        },
        {
            "question": "What are the exact signature upload specifications for SSC GD?",
            "answer": "The signature must be a scanned JPG/JPEG file measuring exactly 140 pixels wide by 60 pixels high. The file size must be strictly between 10.0 KB and 20.0 KB, penned in black ballpoint ink on clean white unruled paper. Signatures written in capital block letters, blurred images, or images with dark phone shadows will lead to immediate cancellation of candidature."
        },
        {
            "question": "What medical conditions cause disqualification during Detailed Medical Examination (DME)?",
            "answer": "Candidates must meet rigorous military medical standards: distant vision must be 6/6 (better eye) and 6/9 (worse eye) without glasses (glasses are strictly disqualified for GD combat roles). Disqualifying conditions include: Color Blindness (CP-III required), Knock Knees, Flat Foot, Squint, Varicose Veins, active DNS, hearing loss, and permanent tattoos on unauthorized body parts (tattoos are allowed only on the inner forearm or saluting arm if depicting religious symbols within 1/4th forearm size)."
        },
        {
            "question": "What is the monthly in-hand salary and risk allowances for an SSC GD Constable?",
            "answer": "Constable (General Duty) is placed under Pay Level 3 (₹21,700 – ₹69,100). Starting Basic Pay is ₹21,700. Adding Dearness Allowance (~50%), House Rent Allowance, Ration Money Allowance (~₹3,900 per month), and Hair Cutting/Soap allowances, standard gross pay is ~₹38,000. In high-risk, counter-insurgency, or high-altitude areas (J&K, North-East, Naxal zones), additional Risk & Hardship Allowance (ranging from ₹9,700 up to ₹17,300 per month) increases total monthly take-home earnings to ₹45,000–₹52,000."
        }
    ]
  }
];
