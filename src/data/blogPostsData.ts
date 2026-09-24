// src/data/blogPostsData.ts
// Comprehensive, SEO-optimized Govt Examination & Document Preparation Master Blog Repository

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
  metaTitle?: string;
  metaDescription?: string;
  excerpt: string;
  category: 'Exam Alerts' | 'Study Prep' | 'Guidelines & Tips' | 'Career Opportunity';
  publishDate: string;
  publishTime?: string;
  lastUpdated?: string;
  deployedAt?: string;
  author: string;
  authorRole: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  relatedExamPreset?: string;
  quickFacts?: QuickFact[];
  faqs?: FAQItem[];
  contentHtml: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "state-psc-otr-registration-photo-signature-guidelines-mufa2ff3",
    title: "State PSC One-Time Registration (OTR): Mandatory Signature & Photo Guidelines for UPPSC, BPSC, MPSC & RPSC",
    excerpt: "Detailed checklist for State Public Service Commission One-Time Registration portals: dimensions, dual-boundary compression, step-by-step navigation, and white background verification.",
    category: "Guidelines & Tips",
    publishDate: "Sept 24, 2026",
    lastUpdated: "Sept 24, 2026",
    author: "SignResize Technical Verification Team",
    authorRole: "State Commission Standards Desk",
    readTime: "7 min read",
    featured: true,
    tags: ["State PSC","OTR Registration","UPPSC","BPSC","MPSC","RPSC","Document Guidelines"],
    relatedExamPreset: "uppsc-uttar-pradesh",
    quickFacts: [],
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
    `,
    faqs: []
  },

  {
    slug: "rrb-ntpc-2026-master-document-rules-preparation-strategy-muduvfwu",
    title: "RRB NTPC 2026: Scanned Document Upload Rules, Sectional Weightage & High-Yield Preparation Strategy",
    excerpt: "Complete candidate guide for Railway RRB NTPC 2026: CBT-1 marking scheme, 10-20KB signature rules, photograph guidelines, step-by-step navigation, and speed calculation methods.",
    category: "Study Prep",
    publishDate: "Sept 23, 2026",
    lastUpdated: "Sept 23, 2026",
    author: "SignResize Academic Research Desk",
    authorRole: "Railway Recruitment Strategy Desk",
    readTime: "8 min read",
    featured: false,
    tags: ["RRB NTPC","Railway Exams","CBT 1 Prep","Signature 10-20KB","Maths Shortcuts","Document Guidelines"],
    relatedExamPreset: "rrb-railway",
    quickFacts: [],
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
    `,
    faqs: []
  },

  {
    slug: "how-to-change-signature-in-outlook",
    title: "How to Change Signature in Outlook: Complete 2025 Guide (Desktop, Web & Mobile)",
    metaTitle: "How to Change Signature in Outlook (2025) — Desktop, Web & Mobile Guide",
    metaDescription: "Learn how to change your email signature in Outlook in under 2 minutes. Step-by-step guide for Outlook 365, Outlook Web (OWA), Outlook on Mac, iOS & Android. Includes HTML signature tips and common fixes.",
    excerpt: "Complete step-by-step guide to changing your email signature in Microsoft Outlook — covers Outlook 365 desktop, Outlook Web App, Mac, iPhone and Android with screenshots and expert tips for professional signatures.",
    category: "Guidelines & Tips",
    publishDate: "Sep 23, 2026",
    lastUpdated: "Sep 23, 2026",
    author: "SignResize Editorial Team",
    authorRole: "Productivity & Digital Signature Expert",
    readTime: "7 min read",
    featured: false,
    tags: [
      "How to Change Signature in Outlook",
      "Outlook Signature",
      "Email Signature",
      "Outlook 365 Signature",
      "Outlook Web Signature",
      "Change Email Signature",
      "Microsoft Outlook",
      "Professional Email Signature",
      "Outlook Signature HTML",
      "Outlook Signature Image"
    ],
    quickFacts: [
      { label: "Applies To", value: "Outlook 365, 2021, 2019, OWA, Mac, iOS, Android" },
      { label: "Time Required", value: "Under 2 minutes" },
      { label: "Signature Path (Windows)", value: "File → Options → Mail → Signatures" },
      { label: "Signature Path (Web)", value: "Settings ⚙ → View All Settings → Compose → Email Signature" },
      { label: "Image Format", value: "JPEG / PNG (max 5 MB)" },
      { label: "HTML Allowed", value: "Yes — full HTML formatting supported" }
    ],
    faqs: [
      {
        question: "How do I change my email signature in Outlook 365?",
        answer: "Open Outlook 365 → click File → Options → Mail → click the 'Signatures…' button. In the Signatures and Stationery dialog, select the signature you want to edit from the list (or click 'New' to create one), make your changes in the editor, then click OK. Your new signature will apply to new emails and/or replies depending on your dropdown settings."
      },
      {
        question: "How do I change signature in Outlook Web App (OWA)?",
        answer: "Log in to Outlook Web (outlook.office.com) → click the Settings gear icon (⚙) at the top right → select 'View all Outlook settings' → go to Mail → Compose and reply → scroll to 'Email signature'. Edit your signature text or image, then click Save."
      },
      {
        question: "Can I insert a handwritten signature image into Outlook?",
        answer: "Yes! Use SignResize's free Signature Generator to type your name and download a clean transparent PNG signature. Then in Outlook's Signature editor, click the Insert Picture icon, choose your signature PNG, and place it at the bottom of your email template."
      }
    ],
    contentHtml: `
<h2>Why Update Your Outlook Email Signature?</h2>
<p>Your email signature is your digital business card. Whether you are sending client proposals, responding to job recruiters, or communicating with colleagues, a crisp, professional signature with your updated title, contact details, and brand signature image builds trust and authority.</p>

<p>Microsoft Outlook stores signatures differently across its desktop app, web browser (OWA), Mac version, and mobile apps (iOS &amp; Android). This guide walks you through changing your signature step-by-step on <strong>every device and Outlook platform</strong> in under 2 minutes.</p>

<div class="my-6 p-4 rounded-xl bg-primary/5 border border-primary/20 text-sm">
  <h4 class="font-bold text-primary mb-1">⚡ Quick Navigation by Platform:</h4>
  <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 font-medium">
    <li>• <a href="#method-1-outlook-365-desktop-windows" class="text-primary hover:underline">Method 1: Outlook 365 / Windows Desktop</a></li>
    <li>• <a href="#method-2-outlook-web-app-owa--new-outlook" class="text-primary hover:underline">Method 2: Outlook Web (OWA) &amp; New Outlook</a></li>
    <li>• <a href="#method-3-outlook-for-mac" class="text-primary hover:underline">Method 3: Outlook for Mac</a></li>
    <li>• <a href="#method-4-outlook-mobile-app-ios--android" class="text-primary hover:underline">Method 4: Outlook Mobile (iOS &amp; Android)</a></li>
  </ul>
</div>

<h2>Method 1: Change Signature in Outlook 365 / Windows Desktop</h2>
<p>If you use Microsoft Outlook 365, Outlook 2021, 2019, or 2016 on a Windows desktop PC:</p>

<ol class="space-y-3 text-sm list-decimal list-inside my-4">
  <li>Open the <strong>Outlook desktop app</strong>.</li>
  <li>Click on <strong>File</strong> in the top-left menu bar.</li>
  <li>Select <strong>Options</strong> from the left sidebar panel.</li>
  <li>In the Outlook Options window, select <strong>Mail</strong> from the left menu.</li>
  <li>Click the <strong>Signatures...</strong> button on the right side.</li>
  <li>Under <em>Select signature to edit</em>, click your existing signature name, or click <strong>New</strong> to type a name for a new signature.</li>
  <li>In the <em>Edit signature</em> box below, type or paste your new text, format fonts, insert links, or click the image icon to upload your handwritten signature PNG.</li>
  <li>Under <em>Choose default signature</em> on the top-right:
    <ul class="list-disc list-inside ml-6 mt-1 space-y-1 text-slate-600 dark:text-slate-400">
      <li>Set <strong>New messages</strong> to your signature.</li>
      <li>Set <strong>Replies/forwards</strong> to your signature (or leave as <em>(none)</em> if preferred).</li>
    </ul>
  </li>
  <li>Click <strong>OK</strong> twice to save your settings.</li>
</ol>

<h2>Method 2: Change Signature in Outlook Web App (OWA) &amp; New Outlook</h2>
<p>If you access email via web browser (outlook.office.com / outlook.live.com) or the New Outlook app:</p>

<ol class="space-y-3 text-sm list-decimal list-inside my-4">
  <li>Click the <strong>Settings gear icon ⚙</strong> in the top-right header toolbar.</li>
  <li>Click <strong>View all Outlook settings</strong> (or <strong>Accounts → Signatures</strong> in New Outlook).</li>
  <li>Navigate to <strong>Mail</strong> → <strong>Compose and reply</strong>.</li>
  <li>Under <em>Email signature</em>, select your signature or click <strong>+ New signature</strong>.</li>
  <li>Type your text into the rich text editor. You can change font family, color, align text, add hyperlinks, and insert inline logo image.</li>
  <li>Under <em>Select default signatures</em>, choose when to automatically include your signature:
    <ul class="list-disc list-inside ml-6 mt-1 space-y-1 text-slate-600 dark:text-slate-400">
      <li>For new messages</li>
      <li>For replies and forwards</li>
    </ul>
  </li>
  <li>Click <strong>Save</strong> at the bottom of the window.</li>
</ol>

<h2>Method 3: Change Signature in Outlook for Mac</h2>
<p>If you use Microsoft Outlook on macOS:</p>

<ol class="space-y-3 text-sm list-decimal list-inside my-4">
  <li>In the menu bar, click <strong>Outlook</strong> → <strong>Preferences</strong>.</li>
  <li>Click <strong>Signatures</strong>.</li>
  <li>Select the signature to edit from the left panel, or click <strong>+</strong> to create a new one.</li>
  <li>Edit the content in the right panel. You can drag-and-drop an image directly into the editor.</li>
  <li>In the <em>Default Signatures</em> section, assign the signature to your account.</li>
  <li>Close the Preferences window — changes save automatically.</li>
</ol>

<h2>Method 4: Change Signature in Outlook Mobile App (iOS &amp; Android)</h2>
<p>The Outlook app for iPhone, iPad, and Android supports plain-text signatures:</p>

<ol class="space-y-2 text-sm list-decimal list-inside my-4">
  <li>Open the Outlook app and tap your <strong>profile picture</strong> or initials (top-left).</li>
  <li>Tap the <strong>Settings gear ⚙</strong> icon (bottom-left).</li>
  <li>Scroll down and tap your <strong>email account name</strong>.</li>
  <li>Tap <strong>Signature</strong>.</li>
  <li>Clear the existing text and type your new signature.</li>
  <li>Tap the <strong>checkmark ✓</strong> (iOS) or back arrow (Android) to save.</li>
</ol>

<h2>How to Add a Professional Image Signature in Outlook</h2>
<p>Adding your handwritten signature as an image in Outlook creates a more personal and professional email. Here's the recommended workflow:</p>

<ol class="space-y-3 text-sm list-decimal list-inside my-4">
  <li><strong>Create your signature image</strong> — use <a href="/signature-generator/" class="text-primary font-semibold hover:underline">SignResize.in's free Signature Generator</a> to type your name and export it as a beautiful cursive PNG with transparent background.</li>
  <li><strong>Resize &amp; compress</strong> — your signature image should ideally be 300–500 px wide and under 100 KB for fast email loading.</li>
  <li><strong>Insert in Outlook</strong> — in the Signatures editor (File → Options → Mail → Signatures), click the image icon, browse to your PNG/JPEG file, and insert it.</li>
  <li><strong>Right-click the inserted image</strong> → <em>Format Picture</em> to resize it within the editor if needed.</li>
  <li>Add your name, title, phone number as text below the image.</li>
</ol>

<h2>Outlook Signature Best Practices for 2025</h2>
<ul class="space-y-2 text-sm list-disc list-inside my-4">
  <li>Keep your signature to <strong>4–6 lines</strong> max — long signatures feel spammy.</li>
  <li>Include: <strong>Name → Job Title → Company → Phone → Website/LinkedIn</strong>.</li>
  <li>Use <strong>one accent colour</strong> that matches your brand — avoid rainbow text.</li>
  <li>Include a <strong>handwritten signature image</strong> for a personal touch on client-facing emails.</li>
  <li>Avoid including large images or social media icons that inflate email file size.</li>
  <li>Test your signature by sending yourself a test email and viewing on mobile.</li>
</ul>

<div class="my-6 p-4 rounded-xl bg-primary/5 border border-primary/20 text-sm">
  <h4 class="font-bold text-primary mb-2">✨ Create a Professional Signature Image — Free</h4>
  <p>Use <a href="/signature-generator/" class="text-primary font-semibold hover:underline">SignResize.in's Signature Generator</a> to type your name and instantly generate a beautiful handwritten-style signature in seconds. Download as transparent PNG — perfect for inserting into Outlook, Gmail, or any email client.</p>
</div>
`
  },
  {
    slug: "state-psc-otr-registration-photo-signature-guidelines-mucfcta1",
    title: "State PSC One-Time Registration (OTR): Mandatory Signature & Photo Guidelines for UPPSC, BPSC, MPSC & RPSC",
    excerpt: "Detailed checklist for State Public Service Commission One-Time Registration portals: dimensions, dual-boundary compression, step-by-step navigation, and white background verification.",
    category: "Guidelines & Tips",
    publishDate: "Sep 22, 2026",
    lastUpdated: "Sep 22, 2026",
    author: "SignResize Technical Verification Team",
    authorRole: "State Commission Standards Desk",
    readTime: "7 min read",
    featured: false,
    tags: ["State PSC","OTR Registration","UPPSC","BPSC","MPSC","RPSC","Document Guidelines"],
    relatedExamPreset: "uppsc-uttar-pradesh",
    quickFacts: [],
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
    `,
    faqs: []
  },
  {
    slug: "rrb-ntpc-2026-master-document-rules-preparation-strategy-mub0xzde",

    title: "RRB NTPC 2026: Scanned Document Upload Rules, Sectional Weightage & High-Yield Preparation Strategy",
    excerpt: "Complete candidate guide for Railway RRB NTPC 2026: CBT-1 marking scheme, 10-20KB signature rules, photograph guidelines, step-by-step navigation, and speed calculation methods.",
    category: "Study Prep",
    publishDate: "Sept 21, 2026",
    lastUpdated: "Sept 21, 2026",
    author: "SignResize Academic Research Desk",
    authorRole: "Railway Recruitment Strategy Desk",
    readTime: "8 min read",
    featured: false,
    tags: ["RRB NTPC","Railway Exams","CBT 1 Prep","Signature 10-20KB","Maths Shortcuts","Document Guidelines"],
    relatedExamPreset: "rrb-railway",
    quickFacts: [],
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
    `,
    faqs: []
  },

  {
    slug: "ssc-cgl-2026-master-application-preparation-guide",
    title: "SSC CGL 2026 Master Application & Preparation Guide: Tier-1 Strategy, Photo/Signature Rules & Step-by-Step Portal Navigation",
    metaTitle: "SSC CGL 2026 Master Guide: Tier-1, Photo & Sign Rules",
    metaDescription: "Comprehensive SSC CGL 2026 handbook: Tier-1 scoring strategy, live webcam photo rules, 10-20KB signature bounds & timetable. Resize documents online free!",
    excerpt: "Comprehensive 2026 candidate handbook for Staff Selection Commission CGL: Tier-1 sectional breakdown, live webcam photo setup, 10-20KB signature rules, step-by-step portal navigation, and 90-day study timetable.",
    category: "Exam Alerts",
    publishDate: "Sept 18, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "Staff Selection Commission Analytics Team",
    readTime: "9 min read",
    featured: false,
    tags: ["SSC CGL 2026","Tier 1 Preparation","Live Photo Rules","Signature 10-20KB","Govt Exam Strategy","Portal Guide"],
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
            "label": "Selection Stages",
            "value": "Tier-1 (Screening) + Tier-2 (Merit)"
        },
        {
            "label": "Target Tier-1 Score",
            "value": "150+ Marks (UR Category)"
        },
        {
            "label": "Document Specs",
            "value": "Live Webcam Photo + 140×60 px Sign (10–20 KB)"
        }
    ],
    faqs: [
        {
            "question": "What is the Tier-1 exam pattern and negative marking penalty in SSC CGL 2026?",
            "answer": "Tier-1 comprises 100 multiple-choice questions carrying 200 marks, scheduled for 60 minutes across four subjects: Reasoning (25Q/50M), General Awareness (25Q/50M), Quantitative Aptitude (25Q/50M), and English (25Q/50M). A penalty deduction of 0.50 marks (25%) is enforced for each incorrect answer."
        },
        {
            "question": "What are the live photo webcam capture rules on ssc.gov.in?",
            "answer": "SSC requires a live picture captured through the browser webcam or MySSC mobile application against a plain light background. Face features must cover 80% of the oval frame without caps, sunglasses, reading spectacles, or face-covering headwear."
        },
        {
            "question": "What are the signature dimensions and file size bounds for SSC CGL?",
            "answer": "The signature must measure exactly 140 pixels in width by 60 pixels in height (aspect ratio ~4.0 cm × 2.0 cm), strictly between 10.0 KB and 20.0 KB in JPG/JPEG format, written in black ballpoint ink on unruled white paper. Capital or block letters cause immediate rejection."
        },
        {
            "question": "Does the Tier-1 score count towards the final SSC CGL merit list?",
            "answer": "No, Tier-1 is purely qualifying in nature to shortlist candidates for Tier-2 at a 1:10 vacancy ratio. The final merit ranking is determined 100% on aggregate marks obtained in Tier-2 Paper-I, provided the candidate qualifies the Computer Knowledge Module and DEST."
        },
        {
            "question": "What is the educational qualification required for SSC CGL?",
            "answer": "Candidates must hold a Bachelor's Degree in any discipline from a recognized University before the prescribed cut-off date. Final-year students are eligible only if results are declared on or before the closing date."
        },
        {
            "question": "What is the age limit and relaxation criteria for SSC CGL posts?",
            "answer": "Age limits vary between 18–27, 18–30, and up to 32 years depending on post cadre. Standard statutory relaxations apply: OBC candidates receive +3 years, SC/ST candidates receive +5 years, and PwBD candidates receive +10 to +15 years."
        },
        {
            "question": "What are the top posts available in SSC CGL 2026?",
            "answer": "Key positions include Assistant Section Officer (ASO in CSS, MEA, IB), Inspector of Income Tax, Central Excise Inspector, Assistant Audit Officer (AAO), Sub-Inspector in CBI, and Tax Assistant."
        },
        {
            "question": "What is the application fee and exemption criteria for SSC CGL?",
            "answer": "The application fee is ₹100. All female candidates, Scheduled Castes (SC), Scheduled Tribes (ST), Persons with Benchmark Disabilities (PwBD), and Ex-Servicemen are 100% exempted from paying the fee."
        },
        {
            "question": "What is the application correction window timeline and charges?",
            "answer": "The correction window operates from September 27 to September 29, 2026. SSC charges ₹200 for the first modification and ₹500 for a second resubmission."
        },
        {
            "question": "What is the in-hand salary for Pay Level 7 posts in SSC CGL?",
            "answer": "For Pay Level 7 posts (Basic ₹44,900): In Class X metro cities, gross monthly pay is ~₹85,000, yielding net in-hand earnings of approximately ₹73,000–₹78,000 after NPS and insurance deductions."
        },
        {
            "question": "Can an average student clear SSC CGL from zero in 6 months?",
            "answer": "Yes. A 6-month roadmap: Months 1–3: Complete 100% syllabus fundamentals and concept notes. Months 4–5: Solve 5,000+ TCS PYQs and build sectional speed. Month 6: Attempt 40 full-length mocks, analyze every incorrect question, and revise formula sheets daily."
        }
    ],
    contentHtml: `
<h2 id="overview">SSC CGL 2026: Complete Recruitment Overview &amp; Key Milestones</h2>
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

      <h2 id="document-specs" id="exam-pattern">Tier-1 Exam Blueprint &amp; Sectional Scoring Rules</h2>
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

      
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
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
    
<h2 id="strategy">SSC CGL 2026 Master Application & Preparation Guide: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your SSC CGL 2026 Master Application & Preparation Guide Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "rrb-ntpc-2026-master-document-rules-preparation-strategy",
    title: "RRB NTPC 2026: Scanned Document Upload Rules, Sectional Weightage & High-Yield Preparation Strategy",
    metaTitle: "RRB NTPC 2026 Master Guide: Document Rules & Strategy",
    metaDescription: "Complete RRB NTPC 2026 handbook: CBT-1 marking scheme, 35x45mm photo rules, 10-20KB signature bounds & timetable. Resize railway documents online free!",
    excerpt: "Complete candidate guide for Railway RRB NTPC 2026: CBT-1 marking scheme, 10-20KB signature rules, photograph guidelines, step-by-step navigation, and speed calculation methods.",
    category: "Study Prep",
    publishDate: "Sept 17, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Academic Research Desk",
    authorRole: "Railway Recruitment Strategy Desk",
    readTime: "8 min read",
    featured: false,
    tags: ["RRB NTPC","Railway Exams","CBT 1 Prep","Signature 10-20KB","Maths Shortcuts","Document Guidelines"],
    relatedExamPreset: "rrb-railway",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Railway Recruitment Boards (RRBs)"
        },
        {
            "label": "Total Vacancies",
            "value": "11,558+ Posts (Graduate & Undergrad)"
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
    faqs: [
        {
            "question": "What is the CBT-1 examination pattern for RRB NTPC?",
            "answer": "CBT-1 consists of 100 objective questions carrying 100 marks in 90 minutes across General Awareness (40 Qs), Mathematics (30 Qs), and Reasoning (30 Qs) with 1/3rd negative marking per incorrect answer."
        },
        {
            "question": "Can an aspirant apply to more than one Railway Recruitment Board (RRB)?",
            "answer": "No. Candidates can select and apply to ONLY ONE regional RRB board. Submitting applications to multiple boards leads to immediate disqualification and debarment."
        },
        {
            "question": "What is the shortlisting ratio from CBT-1 to CBT-2 in RRB NTPC?",
            "answer": "Candidates are shortlisted for CBT-2 at a ratio of 20 times (1:20) the community-wise vacancy count for each 7th CPC Pay Level based on their normalized percentile score in CBT-1."
        },
        {
            "question": "What are the photo and signature upload requirements for RRB NTPC?",
            "answer": "Color photograph (35×45 mm, 20.0 KB to 50.0 KB in JPG) against a plain light background. Signature (140×60 px, 10.0 KB to 20.0 KB in black ink) in running cursive handwriting on white paper."
        },
        {
            "question": "What is the Computer Based Aptitude Test (CBAT) for Station Master?",
            "answer": "CBAT comprises 5 test batteries requiring a minimum T-score of 42 marks in each battery separately. In final merit, CBAT carries 30% weightage and CBT-2 carries 70% weightage."
        },
        {
            "question": "What are the typing speed criteria for RRB clerical posts?",
            "answer": "Candidates must achieve a minimum speed of 30 words per minute in English OR 25 words per minute in Hindi on a computer terminal without backspace or spellcheck tools."
        },
        {
            "question": "What is the medical standard required for Station Master posts?",
            "answer": "Station Master requires strict Medical Standard A-2: distant vision 6/9, 6/9 without spectacles (no glasses allowed, no LASIK permitted) with full color and night vision."
        },
        {
            "question": "Can 12th pass candidates apply for RRB NTPC recruitment?",
            "answer": "Yes, 12th pass candidates are eligible for Undergraduate level posts (Level 2 & 3), including Junior Clerk-cum-Typist, Accounts Clerk, and Commercial-cum-Ticket Clerk."
        },
        {
            "question": "How does RRB score normalization work across multi-shift exams?",
            "answer": "RRB calculates normalized percentile marks based on the mean and standard deviation of raw marks across examination shifts to eliminate difficulty variance."
        },
        {
            "question": "What is the monthly in-hand salary for a Station Master and Goods Guard?",
            "answer": "Station Master starts at Level 6 with gross pay of ~₹68,000–₹72,000. Goods Train Manager starts at Level 5 with gross pay often exceeding ₹65,000–₹75,000 including running allowances."
        },
        {
            "question": "Can I clear RRB NTPC through self-study and free online mock tests?",
            "answer": "Yes. RRB NTPC has predictable question types derived directly from Class 10th maths and basic reasoning. Consistent 4 hours of self-study, solving previous RRB papers, and taking free weekly online mocks is completely sufficient to score 80+ in CBT-1."
        }
    ],
    contentHtml: `
<h2 id="exam-pattern" id="overview">RRB NTPC 2026: Master Examination Overview &amp; Selection Stages</h2>
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

      <h2 id="document-specs">Document Upload Compliance for Railway Portals</h2>
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

      
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
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

      <h2 id="strategy">Recommended Daily Study Strategy</h2>
      <p>Divide your daily preparation into 3 focused blocks: 2 hours for Arithmetic speed drills, 1.5 hours for Logical Reasoning puzzle practice, and 2 hours for General Science and Current Affairs revision.</p>
    
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your RRB NTPC 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "upsc-csat-paper-2-master-blueprint-comprehension-hacks",
    title: "UPSC CSE Prelims: CSAT Paper-II Qualifying Blueprint, Reading Comprehension & Speed Logic Hacks",
    metaTitle: "UPSC CSAT Paper 2 Blueprint: Comprehension & Logic Hacks",
    metaDescription: "Master the 33% UPSC CSAT qualifying cutoff with proven strategies for high-accuracy reading comprehension, arithmetic problem selection & OTR document rules.",
    excerpt: "Master the 33% CSAT qualifying cutoff with proven strategies for high-accuracy reading comprehension, critical reasoning, arithmetic problem selection, and UPSC OTR document rules.",
    category: "Study Prep",
    publishDate: "Sept 16, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Academic Research Desk",
    authorRole: "Civil Services Methodology Team",
    readTime: "8 min read",
    featured: false,
    tags: ["UPSC Prelims","CSAT Strategy","Reading Comprehension","Aptitude Speed","Civil Services","UPSC OTR"],
    relatedExamPreset: "upsc-civil-services",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Union Public Service Commission (UPSC)"
        },
        {
            "label": "Exam Stage",
            "value": "Civil Services Prelims Paper-II (CSAT)"
        },
        {
            "label": "Qualifying Threshold",
            "value": "33% Mandatory (66.67 Marks out of 200)"
        },
        {
            "label": "Total Questions",
            "value": "80 Questions (2.5 Marks each, 2 Hours)"
        },
        {
            "label": "Negative Marking",
            "value": "0.833 Marks (33.3%) per wrong attempt"
        },
        {
            "label": "Document Specs",
            "value": "OTR Photo (Name/Date Strip) + Sign (20-300 KB)"
        }
    ],
    faqs: [
        {
            "question": "What is the minimum qualifying score required in UPSC CSAT Paper-II?",
            "answer": "Candidates must secure a minimum of 33% marks (66.67 marks out of 200) in CSAT Paper-II to qualify Prelims. CSAT marks are not added to the cutoff merit, but failing to clear 66.67 marks disqualifies the candidate even with 150+ in GS Paper-I."
        },
        {
            "question": "What is the negative marking deduction in UPSC CSAT?",
            "answer": "Each question carries 2.5 marks. A negative marking penalty of 0.833 marks (33.3%) is deducted for each incorrect response. Unattempted questions carry zero penalty."
        },
        {
            "question": "How many questions should a candidate safely attempt in CSAT?",
            "answer": "To safely achieve 80+ marks above the 66.67 threshold, candidates should target 48 to 55 well-selected questions with an accuracy rate of at least 80%."
        },
        {
            "question": "What are the high-yield topics in CSAT Reading Comprehension?",
            "answer": "Key comprehension question types include Crux of the Passage, Most Logical & Rational Inference, Assumption based questions, and Practical Implications."
        },
        {
            "question": "What are the UPSC OTR photo upload guidelines?",
            "answer": "UPSC requires photographs taken within 10 days of application submission with candidate name and photo capture date imprinted at the bottom in square 1:1 aspect ratio (20–300 KB)."
        },
        {
            "question": "What arithmetic topics carry the highest weightage in CSAT?",
            "answer": "Number Systems (divisibility rules, unit digits, remainders), Permutation & Combination, Probability, Percentages, Ratio & Proportion, and Coding Logic."
        },
        {
            "question": "Can non-mathematics background candidates clear UPSC CSAT?",
            "answer": "Yes. By mastering Reading Comprehension (27–30 questions) and basic logical reasoning (15–18 questions), candidates can comfortably qualify without advanced mathematics."
        },
        {
            "question": "Is rough work space provided in the CSAT question booklet?",
            "answer": "Yes, dedicated blank pages for rough work are provided at the end of the CSAT test booklet. Candidates can use pen or pencil for calculations."
        },
        {
            "question": "What are the signature upload specifications for UPSC OTR?",
            "answer": "Signatures must measure 350×350 to 1000×1000 pixels (20.0 KB to 300.0 KB in JPG) penned in black ballpoint ink on clean white unruled paper."
        },
        {
            "question": "What is the best mock test strategy for UPSC CSAT preparation?",
            "answer": "Solve the last 10 years of official UPSC CSAT previous year question papers (2014–2024) within strict 2-hour timed conditions between 2:30 PM and 4:30 PM."
        }
    ],
    contentHtml: `
<h2 id="overview">The Decisive Role of CSAT (Paper-II) in UPSC Prelims</h2>
      <p>In recent Civil Services examinations, CSAT Paper-II has proven to be the major hurdle for thousands of aspirants. Despite scoring 100+ in General Studies Paper-I, failing to secure the mandatory qualifying threshold of <strong>33% (66.67 marks out of 200)</strong> results in immediate disqualification.</p>

      <h2 id="exam-pattern">CSAT Sectional Breakdown &amp; Target Matrix</h2>
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

      <h2 id="document-specs">UPSC OTR Document Upload Rules</h2>
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
    

<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2 id="strategy">UPSC CSE Prelims: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your UPSC CSE Prelims Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "state-psc-otr-registration-photo-signature-guidelines",
    title: "State PSC One-Time Registration (OTR): Mandatory Signature & Photo Guidelines for UPPSC, BPSC, MPSC & RPSC",
    metaTitle: "State PSC OTR Guidelines: Photo & Signature Resize Rules",
    metaDescription: "Master One-Time Registration across UPPSC, BPSC, MPSC, TNPSC & KPSC: exact photo dimensions, 10-20KB signature bounds & portal navigation. Resize free!",
    excerpt: "Detailed checklist for State Public Service Commission One-Time Registration portals: dimensions, dual-boundary compression, step-by-step navigation, and white background verification.",
    category: "Guidelines & Tips",
    publishDate: "Sept 15, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Technical Verification Team",
    authorRole: "State Commission Standards Desk",
    readTime: "7 min read",
    featured: false,
    tags: ["State PSC","OTR Registration","UPPSC","BPSC","MPSC","RPSC","Document Guidelines"],
    relatedExamPreset: "uppsc-uttar-pradesh",
    quickFacts: [
        {
            "label": "Target Portals",
            "value": "UPPSC, BPSC, MPSC, TNPSC, KPSC, RPSC"
        },
        {
            "label": "System Type",
            "value": "One-Time Registration (OTR) Candidate Profile"
        },
        {
            "label": "Photo Standard",
            "value": "3.5×4.5 cm (20–50 KB JPG, Light Background)"
        },
        {
            "label": "Signature Standard",
            "value": "140×60 px (10–20 KB JPG, Black Ballpoint Ink)"
        },
        {
            "label": "Validity",
            "value": "Lifetime OTR Profile for all State PSC Applications"
        },
        {
            "label": "Dual Signature Rule",
            "value": "BPSC requires both Hindi and English signatures"
        }
    ],
    faqs: [
        {
            "question": "What is One-Time Registration (OTR) in State Public Service Commissions?",
            "answer": "OTR is a unified digital profile system that stores a candidate's verified identity, educational credentials, photograph, and signature once, enabling instant 1-click applications for all future commission exams."
        },
        {
            "question": "What is the exact signature dimension and file size for State PSC OTR?",
            "answer": "Most State PSCs (UPPSC, MPSC, TNPSC, KPSC) mandate scanned signatures measuring 140 × 60 pixels with file size strictly between 10.0 KB and 20.0 KB in JPG/JPEG format."
        },
        {
            "question": "Why does BPSC require both Hindi and English signatures in OTR?",
            "answer": "The Bihar Public Service Commission mandates two separate signature uploads: one in English running script and one in Hindi Devanagari script (15–20 KB each) for bi-script verification."
        },
        {
            "question": "Can I edit my photograph and signature after OTR final submission?",
            "answer": "Yes, State PSCs provide profile modification windows before applying for specific notifications, though major personal changes may require OTP Aadhaar re-authentication."
        },
        {
            "question": "What are the common reasons State PSC portals reject uploaded photos?",
            "answer": "Photos older than 6 months, selfies, blurred portraits, dark background shadows, wearing sunglasses or caps, and file sizes exceeding 50 KB are the leading reasons for rejection."
        },
        {
            "question": "What ink color is mandatory for State PSC signatures?",
            "answer": "Black ballpoint ink on clean white unruled paper is strictly mandated. Signatures in blue gel ink, fountain pen, or pencil are rejected during scrutiny."
        },
        {
            "question": "Is Domicile Certificate mandatory during State PSC OTR?",
            "answer": "Domicile certificates are mandatory only for candidates seeking state-specific reservation benefits (OBC, SC, ST, EWS). Non-domicile candidates can register under Unreserved/General category."
        },
        {
            "question": "What resolution and DPI should be used when scanning documents for OTR?",
            "answer": "Scan documents at 200 DPI (dots per inch) in true color for photos and grayscale/black-and-white for signatures to maintain optimal clarity within 10–20 KB boundaries."
        },
        {
            "question": "What should candidates do if OTR photo displays upside down or distorted?",
            "answer": "Clear browser cache, ensure image aspect ratio matches 3.5:4.5 exactly without EXIF orientation tags, and re-upload through SignResize automated canvas normalizer."
        },
        {
            "question": "How does SignResize ensure 100% OTR portal acceptance?",
            "answer": "SignResize provides pre-configured presets for UPPSC, BPSC, MPSC, and TNPSC that automatically crop to exact pixels and compress strictly within commission KB limits."
        },
        {
            "question": "Can I clear State PSC examinations without attending offline coaching in capital cities?",
            "answer": "Yes. With state board textbooks, standard reference works, and online test series available everywhere, thousands of candidates from small towns and rural areas top State PSC exams (UPPSC, BPSC, MPSC, TNPSC) every year solely through home self-study."
        }
    ],
    contentHtml: `
<h2 id="overview">State PSC One-Time Registration (OTR) Mandate</h2>
      <p>State Public Service Commissions across India—including <strong>UPPSC (Uttar Pradesh), BPSC (Bihar), MPSC (Maharashtra), and RPSC (Rajasthan)</strong>—have made OTR mandatory. Photographs and signatures uploaded during OTR are permanently locked to candidate profiles for all future competitive exam notices.</p>

      <h2 id="document-specs" id="exam-pattern">State Commission Document Comparison Matrix</h2>
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

      
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
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
    
<h2 id="strategy">State PSC One-Time Registration (OTR): High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your State PSC One-Time Registration (OTR) Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines",
    title: "IBPS PO & Clerk 2026 Master Upload Guide: Exact Photo, Signature, Thumb Impression & Declaration Rules",
    metaTitle: "IBPS PO & Clerk Document Guide: Photo, Sign, Thumb Rules",
    metaDescription: "Official IBPS 2026 document handbook: 140x60 sign specs, left thumb impression, exact handwritten declaration wording & photo bounds. Resize online free!",
    excerpt: "Comprehensive formatting rules for all 4 mandatory IBPS uploads: photograph (20-50KB), running signature (10-20KB), left thumb impression (20-50KB), and handwritten declaration (50-100KB) with step-by-step navigation.",
    category: "Guidelines & Tips",
    publishDate: "Sept 14, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "Official Banking Document Compliance Team",
    readTime: "8 min read",
    featured: false,
    tags: ["IBPS PO","IBPS Clerk","Handwritten Declaration","Left Thumb Impression","Bank Exam Guidelines","Document Rules"],
    relatedExamPreset: "ibps-sbi",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Institute of Banking Personnel Selection (IBPS)"
        },
        {
            "label": "Applicable Exams",
            "value": "IBPS PO, IBPS Clerk, RRB Officer & Office Assistant"
        },
        {
            "label": "Photo Specs",
            "value": "200×230 px (20–50 KB JPG, White Background)"
        },
        {
            "label": "Signature Specs",
            "value": "140×60 px (10–20 KB JPG, Black Ink Only)"
        },
        {
            "label": "Left Thumb Specs",
            "value": "240×240 px (20–50 KB JPG, Blue/Black Ink)"
        },
        {
            "label": "Declaration Specs",
            "value": "800×400 px (50–100 KB JPG, Own Handwriting)"
        }
    ],
    faqs: [
        {
            "question": "What is the exact text of the IBPS handwritten declaration?",
            "answer": "The text must be handwritten in English on white paper in black ink: 'I, _______ (Name of candidate), hereby declare that all the information submitted by me in the application form is correct, true and valid. I will present the supporting documents as and when required.'"
        },
        {
            "question": "Why does IBPS disqualify signatures written in capital letters?",
            "answer": "A signature represents an individual's personal running cursive mark. Capital or block letters lack individual handwriting characteristics and can be easily forged, triggering instant disqualification."
        },
        {
            "question": "What are the exact dimensions and file weight for the Left Thumb Impression?",
            "answer": "Left Thumb Impression must measure 240 × 240 pixels (approx. 3 cm × 3 cm) with file weight strictly between 20.0 KB and 50.0 KB in JPG/JPEG format on plain white paper."
        },
        {
            "question": "What ink colors are permitted for IBPS documents?",
            "answer": "Black ballpoint ink is mandatory for the Signature and Handwritten Declaration. Blue or black ink stamp pad is permitted for the Left Thumb Impression."
        },
        {
            "question": "Can someone else write the handwritten declaration on my behalf?",
            "answer": "No. If IBPS detects that the handwritten declaration was penned by another person, the candidate's application is rejected and they may be permanently debarred."
        },
        {
            "question": "What should a candidate do if their left thumb is injured or amputated?",
            "answer": "The candidate may use their right thumb impression or an impression of one of the fingers of the left hand, explicitly mentioning the finger used in the application."
        },
        {
            "question": "What are the photo dimensions for IBPS registration?",
            "answer": "The photograph must measure 200 × 230 pixels (4.5 × 3.5 cm) with file size strictly between 20.0 KB and 50.0 KB in JPG/JPEG format against a light or white background."
        },
        {
            "question": "Can I upload the declaration in Hindi or regional languages?",
            "answer": "No. Under official IBPS guidelines, the declaration must be written in English only. Declarations submitted in Hindi or regional languages are treated as invalid."
        },
        {
            "question": "What is the maximum file size permitted for the handwritten declaration?",
            "answer": "The file size for the handwritten declaration must fall strictly between 50.0 KB and 100.0 KB in JPG or JPEG format."
        },
        {
            "question": "How can I resize all 4 IBPS documents in under 2 minutes?",
            "answer": "Use SignResize dedicated IBPS preset tool to crop, remove phone paper shadows, and compress all four files into their exact KB boundaries directly in your browser."
        },
        {
            "question": "Can an average student clear banking exams in 4 months of structured preparation?",
            "answer": "Yes. Banking exams have standard syllabus boundaries. Practicing simplification, approximation, number series, quadratic equations, and standard seating arrangements daily for 4 months builds the speed needed to easily clear Prelims and Mains cutoffs."
        }
    ],
    contentHtml: `
<h2 id="document-specs" id="overview">The 4 Mandatory Digital Uploads for IBPS &amp; SBI Recruitment</h2>
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
    

<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2 id="exam-pattern">IBPS PO & Clerk 2026 Master Upload Guide: Examination Structure &amp; Selection Blueprint</h2>
<p>Understanding the multi-tier selection stages, sectional weightages, and negative marking scheme ensures strategic preparation without risking disqualification.</p>
<h2 id="strategy">IBPS PO & Clerk 2026 Master Upload Guide: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your IBPS PO & Clerk 2026 Master Upload Guide Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "top-5-mistakes-photo-signature-rejection-govt-exams",
    title: "Top 5 Signature & Photo Mistakes That Lead to Government Exam Rejection",
    metaTitle: "Top 5 Photo & Signature Mistakes Causing Exam Rejection",
    metaDescription: "Avoid costly application rejection in SSC, UPSC & IBPS: learn the top 5 photo & signature upload errors, capital letter signature rules & safe resizing hacks.",
    excerpt: "Avoid the most frequent mistakes that disqualify thousands of candidates in SSC, UPSC, IBPS, and State PSC applications before the exam day.",
    category: "Guidelines & Tips",
    publishDate: "Sept 10, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Technical Verification Team",
    authorRole: "Exam Portal Standards & Verification",
    readTime: "6 min read",
    featured: false,
    tags: ["Rejection Prevention","Exam Guidelines","Document Resizing","PAN / SSC","Quality Control"],
    relatedExamPreset: "ssc-general",
    quickFacts: [
        {
            "label": "Target Exams",
            "value": "SSC, UPSC, RRB, IBPS, State PSCs, NTA"
        },
        {
            "label": "Annual Rejections",
            "value": "Over 4.5 Lakh Applications Disqualified Annually"
        },
        {
            "label": "Top Pitfall #1",
            "value": "Signatures in ALL CAPITAL / BLOCK Letters"
        },
        {
            "label": "Top Pitfall #2",
            "value": "Spectacles Glare & Shadows in Live Web Photos"
        },
        {
            "label": "Top Pitfall #3",
            "value": "File Size Outside Strict KB Dual Boundaries"
        },
        {
            "label": "Recommended Fix",
            "value": "Client-Side Automated 140×60 px & KB Compression"
        }
    ],
    faqs: [
        {
            "question": "What is the #1 reason government exam portals reject signatures?",
            "answer": "Writing signatures in ALL CAPITAL / BLOCK letters is the single most common cause of rejection. Official commission rules explicitly mandate continuous running cursive handwriting."
        },
        {
            "question": "Why are live webcam photos rejected on SSC and BPSC portals?",
            "answer": "Common rejection triggers include wearing spectacles with reflection, improper frontal lighting causing shadows behind ears, and face covering less than 80% of the frame."
        },
        {
            "question": "What happens if my signature file size is 9.8 KB when the limit is 10-20 KB?",
            "answer": "Automated commission portal upload filters immediately block submissions outside exact limits. SignResize adjusts compression quality to land files safely in the middle (e.g. 15 KB)."
        },
        {
            "question": "Why is blue gel pen or fountain pen ink rejected in signatures?",
            "answer": "Gel and fountain pen ink frequently bleeds into paper fibers, causing digital scanning blur. Commissions mandate dark black ballpoint pen on unruled white paper for high contrast."
        },
        {
            "question": "Can I upload a cropped selfie as my passport photo?",
            "answer": "No. Selfies have wide-angle lens distortion, poor lighting, and informal backgrounds that violate passport standards, leading to rejection during document scrutiny."
        },
        {
            "question": "How do dark paper shadows from smartphone photos cause rejection?",
            "answer": "Taking a picture of white paper with a smartphone casts grey hand or phone shadows that scanning algorithms flag as dirty background. SignResize white-filter tool removes shadows automatically."
        },
        {
            "question": "What is the UPSC 10-day-old photograph rule with name and date?",
            "answer": "UPSC requires uploaded photos to be taken within 10 days of submission, with candidate full name and date of photo capture imprinted at the bottom in bold text."
        },
        {
            "question": "What is the difference between aspect ratio and file size in KB?",
            "answer": "Aspect ratio represents pixel dimensions (e.g. 140×60 pixels), while file size represents storage weight (e.g. 10–20 KB). Both parameters must be satisfied simultaneously."
        },
        {
            "question": "Can an application rejected for photo/signature errors be corrected later?",
            "answer": "Only if the commission provides an official correction window (such as SSC's 3-day correction period). If missed, rejection is permanent with zero refund."
        },
        {
            "question": "How does SignResize prevent application rejections?",
            "answer": "SignResize applies pre-configured official dimension templates, contrast-enhancing shadow filters, and precision KB compression directly in your browser with zero data loss."
        },
        {
            "question": "Can minor document mistakes prevent me from clearing an exam even if I score above the cutoff?",
            "answer": "Yes. Examination boards strictly reject candidates whose uploaded photo has spectacles, caps, or blurred biometrics, or whose signature was uploaded in BLOCK/CAPITAL letters, irrespective of their examination score. Following official specifications using SignResize eliminates this risk completely."
        }
    ],
    contentHtml: `
<h2 id="document-specs" id="overview">Why Do Exam Commissions Reject Candidate Documents?</h2>
      <p>Government recruitment portals like SSC, UPSC, NTA, and IBPS use automated optical scanning software. When an uploaded signature fails dimension or contrast checks, the software flags it as invalid, resulting in immediate rejection without manual review.</p>

      
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

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
    
<h2 id="exam-pattern">Top 5 Signature & Photo Mistakes That Lead to Government Exam Rejection: Examination Structure &amp; Selection Blueprint</h2>
<p>Understanding the multi-tier selection stages, sectional weightages, and negative marking scheme ensures strategic preparation without risking disqualification.</p>
<h2 id="strategy">Top 5 Signature & Photo Mistakes That Lead to Government Exam Rejection: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your Top 5 Signature & Photo Mistakes That Lead to Government Exam Rejection Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "upsc-cse-2026-preparation-roadmap-daily-study-plan",
    title: "UPSC CSE 2026 Daily Study Strategy: Comprehensive 90-Day High-Yield Roadmap",
    metaTitle: "UPSC CSE 2026 Roadmap: Daily Study Plan & OTR Guidelines",
    metaDescription: "Complete 12-month UPSC CSE 2026 roadmap: static subject timetable, answer writing drills, CSAT qualifying hacks & OTR document rules. Read the guide free!",
    excerpt: "Detailed hour-by-hour daily timetable, 4-phase subject mastery plan, NCERT mapping, CSAT qualifying hacks, and PYQ analysis methodology for civil services aspirants.",
    category: "Study Prep",
    publishDate: "Sept 08, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Academic Research Desk",
    authorRole: "Competitive Exam Methodology Team",
    readTime: "8 min read",
    featured: false,
    tags: ["UPSC CSE","Study Strategy","Prelims 2026","Time Management","NCERT Roadmap"],
    relatedExamPreset: "upsc-civil-services",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Union Public Service Commission (UPSC)"
        },
        {
            "label": "Target Examination",
            "value": "Civil Services Examination (CSE) 2026"
        },
        {
            "label": "Cadres Recruited",
            "value": "IAS, IPS, IFS, IRS, Central Services Group A & B"
        },
        {
            "label": "Selection Stages",
            "value": "Prelims (GS + CSAT) + Mains (9 Papers) + Interview"
        },
        {
            "label": "Daily Study Target",
            "value": "7 to 8 Focused Hours across 4 Targeted Study Slots"
        },
        {
            "label": "Document Specs",
            "value": "UPSC OTR Photo (10-Day Recency) + Sign (20-300 KB)"
        }
    ],
    faqs: [
        {
            "question": "How many hours of daily study are required to clear UPSC CSE 2026?",
            "answer": "A focused, disciplined study routine of 7 to 8 hours daily over 12 to 14 months—divided into static syllabus, daily newspaper/PIB analysis, CSAT practice, and revision—is optimal."
        },
        {
            "question": "When should an aspirant begin answer writing practice for UPSC Mains?",
            "answer": "Begin answer writing after completing basic NCERTs and one round of standard static reference books (approx. 3–4 months into preparation), writing 2 quality answers daily with peer evaluation."
        },
        {
            "question": "What is the UPSC One-Time Registration (OTR) photo guideline?",
            "answer": "The photograph must be taken within 10 days of application submission, showing the candidate's face occupying 75% of the frame, with candidate name and photo date imprinted at the bottom."
        },
        {
            "question": "How should an aspirant balance Prelims General Studies and CSAT?",
            "answer": "Dedicate 5 to 6 hours daily to GS Paper-I (Polity, Economy, Modern History, Environment) and 1.5 to 2 hours daily to CSAT reading comprehension and arithmetic problem-solving."
        },
        {
            "question": "What are the age limits and attempt limits for UPSC Civil Services?",
            "answer": "General/EWS: 21 to 32 years (6 attempts). OBC: 21 to 35 years (9 attempts). SC/ST: 21 to 37 years (Unlimited attempts up to age cap). PwBD: up to 42 years."
        },
        {
            "question": "What are the signature upload specifications for UPSC CSE?",
            "answer": "Signatures must measure between 350×350 and 1000×1000 pixels (file size strictly between 20.0 KB and 300.0 KB in JPG) penned in black ballpoint ink on clean white unruled paper."
        },
        {
            "question": "How should an aspirant select their Optional Subject for Mains?",
            "answer": "Base optional selection on syllabus overlap with General Studies, personal academic interest, availability of authentic study material, and consistent scoring trends over the last 5 years."
        },
        {
            "question": "What is the importance of solving Previous Year Questions (PYQs)?",
            "answer": "Solving the last 10 years of Prelims and Mains PYQs reveals repeated core themes, UPSC question phrasing traps, and helps calibrate your static note-making."
        },
        {
            "question": "Can working professionals clear UPSC CSE with a full-time job?",
            "answer": "Yes. Many working professionals clear CSE by committing 4 focused hours on weekdays (2 morning + 2 evening) and 10–12 hours on weekends with high-efficiency note revision."
        },
        {
            "question": "What is the starting salary and training structure for an IAS Officer?",
            "answer": "An IAS Officer starts training at LBSNAA Mussoorie at Pay Level 10 (Basic ₹56,100). Adding DA, HRA, and allowances, gross monthly salary is ~₹95,000–₹1,05,000 alongside official accommodation."
        }
    ],
    contentHtml: `
<h2 id="exam-pattern" id="overview">The Structured 90-Day Foundation Blueprint</h2>
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

      <h2 id="strategy">Daily Study Timetable: Realistic 8-Hour Master Routine</h2>
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
    
<h2 id="document-specs">UPSC CSE 2026 Daily Study Strategy: Official Document Upload Specifications</h2>
<p>Strict compliance with portal dimensions, resolution, and file sizes is mandatory to clear preliminary automated portal verification.</p>
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your UPSC CSE 2026 Daily Study Strategy Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "ssc-cgl-2026-top-10-faq-aspirants-guide",
    title: "SSC CGL 2026: Top 10 FAQs Every Aspirant Must Know Before Applying — Eligibility, Live Photo & Tier-1 Strategy",
    metaTitle: "SSC CGL 2026: Live Photo, 140x60 Sign & Eligibility FAQs",
    metaDescription: "Official SSC CGL 2026 guide: live photo rules, 140x60 signature size, eligibility criteria and top FAQs. Resize your photo and signature online free!",
    excerpt: "Authoritative candidate advisory for SSC CGL 2026: official live photo guidelines, exact 140×60 px signature bounds, educational eligibility, Tier-1 negative marking, and post preferences.",
    category: "Exam Alerts",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "Staff Selection Commission Analytics Team",
    readTime: "9 min read",
    featured: false,
    tags: ["SSC CGL 2026","SSC CGL Eligibility Criteria","SSC CGL Live Photo Guidelines","SSC CGL Signature Size 140x60","Tier-1 Strategy","Syllabus Breakdown"],
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
        },
        {
            "question": "Can an average student clear SSC CGL 2026 on the first attempt with self-study?",
            "answer": "Yes. Thousands of candidates clear SSC CGL every year through disciplined self-study without expensive coaching. The blueprint to clear on the first attempt: (1) Master arithmetic and advanced maths fundamentals through NCERTs and standard books. (2) Build daily vocabulary and grammar rules for English Comprehension. (3) Solve 30+ full-length Tier-1 and Tier-2 mock tests with deep error analysis. (4) Maintain consistent 5–6 hours of focused daily study over 6 to 9 months."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>SSC CGL 2026: Comprehensive Recruitment Overview &amp; Key Dates</h2>
        <p>Looking for the official <strong>SSC CGL 2026 eligibility criteria</strong>, <strong>SSC CGL live photo guidelines</strong>, and exact <strong>SSC CGL signature size 140x60</strong> specifications? With over <strong>17,727 vacancies</strong> announced by the Staff Selection Commission, this authoritative handbook provides everything you need to know to submit an error-free application on <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">ssc.gov.in</a> and clear the Tier-1 computer-based examination.</p>
        
        <p>This massive recruitment drive fills coveted positions across India's premier central ministries, including Assistant Section Officer (ASO) in MEA, CSS, and IB, Inspector of Income Tax (ITI), Central Excise Inspector, and Sub-Inspector in the CBI. If you are also tracking other major recruitments, explore our comprehensive <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a> for active deadlines and application portals.</p>

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

      <section id="eligibility" class="space-y-4 mt-8">
        <h2>SSC CGL 2026 Eligibility Criteria &amp; Age Limits</h2>
        <p>Before filling out the One-Time Registration (OTR) form, ensure you satisfy the official eligibility benchmarks:</p>

        <h3>Educational Eligibility Criteria &amp; Final-Year Degree Rules</h3>
        <p>Candidates must hold a <strong>Bachelor's Degree</strong> in any discipline from a recognized University or Institute established under Central or State legislation. Final-year graduation students are eligible to apply provided their final degree results are formally declared by their University on or before the cut-off date specified in the SSC notification.</p>

        <h3>Category-Wise Age Limits &amp; Statutory Relaxations</h3>
        <p>The general age limit spans <strong>18 to 32 years</strong> depending on the specific post group. Age relaxations follow Central Government statutory norms:</p>
        <ul>
          <li><strong>OBC (Non-Creamy Layer):</strong> +3 years upper-age relaxation</li>
          <li><strong>SC / ST:</strong> +5 years upper-age relaxation</li>
          <li><strong>PwBD (Persons with Benchmark Disabilities):</strong> +10 years (+13 for OBC, +15 for SC/ST)</li>
          <li><strong>Ex-Servicemen (ESM):</strong> 3 years deduction after military service</li>
        </ul>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>SSC CGL 2026 Exam Pattern &amp; Tier-1 Scoring Scheme</h2>
        <p>Tier-1 is an online Computer Based Examination comprising 100 multiple-choice questions for 200 marks in a 60-minute session. Each wrong attempt carries a penalty deduction of <strong>0.50 marks (25%)</strong>.</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Section</th>
                <th class="p-3 border-b">Questions</th>
                <th class="p-3 border-b">Marks</th>
                <th class="p-3 border-b">Target Time</th>
                <th class="p-3 border-b">High-Yield Scoring Areas</th>
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
            <span>⚡ Tier-1 Raw Score Formula &amp; Safe Cutoff Benchmarks</span>
            <span>SSC Standard Formula</span>
          </div>
          <pre class="overflow-x-auto text-emerald-400"><code>Net Raw Score = (Correct Attempts × 2.0) - (Incorrect Attempts × 0.50)
Target Safe Zone (UR/OBC): 76+ Attempts with 90% Accuracy → ~146–152 Net Raw Marks</code></pre>
        </div>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>SSC CGL Live Photo Guidelines &amp; Signature Specifications</h2>
        <p>The updated application engine on <code>ssc.gov.in</code> rejects traditional scanned passport photos in favor of interactive live camera capture, while enforcing strict dimensions for scanned signatures.</p>

        <h3>SSC CGL Live Photo Guidelines: Camera &amp; Lighting Rules</h3>
        <ul>
          <li><strong>Live Capture Only:</strong> SSC does NOT accept uploaded image files for candidate photographs. You must use a live laptop webcam or smartphone camera via the MySSC application.</li>
          <li><strong>80% Face Frame Fill:</strong> The candidate's face (from forehead to chin and both ears) must occupy 80% of the live capture oval frame.</li>
          <li><strong>Zero Spectacles / Glare:</strong> Spectacles, reading glasses, sunglasses, hats, caps, and scarves are strictly prohibited during photo capture.</li>
          <li><strong>Light Background:</strong> Position yourself against a plain white or light-colored wall with bright frontal lighting to eliminate shadows behind the head.</li>
        </ul>

        <h3>SSC CGL Signature Size 140x60: Exact Dimensions &amp; KB Limits</h3>
        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Parameter</th>
                <th class="p-3 border-b">Official Specification</th>
                <th class="p-3 border-b">Compliance Standard</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">Pixel Dimensions</td>
                <td class="p-3 font-mono font-bold">140 × 60 pixels</td>
                <td class="p-3">Aspect ratio ~4.0 cm width × 2.0 cm height at 200 DPI</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">File Size (KB)</td>
                <td class="p-3 font-mono font-bold">10.0 KB to 20.0 KB</td>
                <td class="p-3">Dual strict boundary (files &lt;10 KB or &gt;20 KB are auto-rejected)</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">File Format</td>
                <td class="p-3 font-mono font-bold">JPG / JPEG only</td>
                <td class="p-3">PNG, PDF, or WebP files will not upload</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Ink &amp; Paper</td>
                <td class="p-3 font-mono font-bold">Black Ballpoint Pen</td>
                <td class="p-3">Unruled plain white paper (Blue ink/gel ink is rejected)</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Handwriting Style</td>
                <td class="p-3 font-mono font-bold">Running Cursive Script</td>
                <td class="p-3 text-rose-600 dark:text-rose-400 font-bold">BLOCK / CAPITAL letters cause immediate disqualification</td>
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

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Resize Your SSC Signature in 10 Seconds</h4>
          <p class="text-sm text-muted-foreground">Don't risk portal rejection. Use our dedicated <a href="/ssc-signature-resize/" class="text-primary font-bold underline">SSC Signature Resizer Tool</a> to automatically crop to 140×60 px, whiten smartphone paper shadows, and compress within exact 10.0–20.0 KB limits. You can also format certificates with our <a href="/document-resizer/" class="text-primary font-bold underline">Document Resizer</a> or <a href="/compress-image-to-kb/" class="text-primary font-bold underline">Compress Image to 10-20 KB</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/ssc-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Open SSC Signature Tool (140x60)</span>
              <span>&rarr;</span>
            </a>
            <a href="/photo-resizer/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Passport Photo Resizer
            </a>
          </div>
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
    
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your SSC CGL 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "rrb-ntpc-2026-top-10-faq-complete-guide",
    title: "RRB NTPC 2026: Top 10 FAQs on Eligibility, RRB Zone Selection, Exam Pattern & Document Guidelines",
    metaTitle: "RRB NTPC 2026 FAQs: Photo Rules, CBT Cutoff & Pay Scale",
    metaDescription: "Official RRB NTPC 2026 FAQ guide: 35x45mm photo rules, CBT-1 & 2 exam pattern, Station Master cutoffs and medical standards. Resize documents online free!",
    excerpt: "Everything Railway aspirants must know for RRB NTPC 2026: single zone rule, graduate vs undergraduate posts, 35×45 mm photo rules, 10–20 KB signature specs, CBAT/TST typing tests, and normalization.",
    category: "Study Prep",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
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
        },
        {
            "question": "Can I clear RRB NTPC 2026 with 4 to 6 months of focused preparation?",
            "answer": "Yes, 4 to 6 months of structured preparation is more than enough to clear RRB NTPC. Since CBT-1 has no sectional time limits and questions are at matriculation/10+2 level difficulty, focus on maximizing speed and accuracy in Mathematics (30 Qs) and Reasoning (30 Qs) where you can easily score 50+ out of 60 marks. Dedicate 2 hours daily to General Awareness, NCERT General Science, and Railway current affairs."
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
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

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
    
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your RRB NTPC 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "ibps-po-2026-top-10-faq-banking-aspirants",
    title: "IBPS PO 2026: Top 10 FAQs on Eligibility, Handwritten Declaration, Left Thumb & Cutoffs",
    metaTitle: "IBPS PO 2026 FAQs: Handwritten Text, Thumb & Photo Rules",
    metaDescription: "Official IBPS PO 2026 FAQ guide: handwritten declaration text, left thumb impression specs, 140x60 sign rules & Prelims cutoffs. Resize documents online free!",
    excerpt: "Authoritative candidate handbook for IBPS PO 2026: exact handwritten declaration text, black ink rules, left thumb impression guidelines, sectional cutoff strategy, and 80:20 final merit ratio.",
    category: "Exam Alerts",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
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
        },
        {
            "question": "Can a beginner or working aspirant clear IBPS PO 2026 without coaching?",
            "answer": "Yes. Banking exams test speed, accuracy, and question selection rather than memorization. Beginners can crack IBPS PO in 4–5 months by: (1) Mastering Vedic maths, tables up to 30, and percentage fraction equivalents for speedy Quantitative calculations. (2) Solving 4–5 high-level puzzle sets daily for Reasoning. (3) Reading an editorial daily for English and Descriptive Paper. (4) Taking 2 timed sectional tests daily."
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
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

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
    
<h2 id="strategy">IBPS PO 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your IBPS PO 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "sbi-clerk-2026-top-10-faq-junior-associates",
    title: "SBI Clerk 2026: Top 10 FAQs on Eligibility, State Selection, LPT & No-Sectional Cutoff Rules",
    metaTitle: "SBI Clerk 2026 FAQs: State Vacancy, LPT & Photo Rules",
    metaDescription: "Official SBI Clerk 2026 guide: State vacancy rules, Language Proficiency Test (LPT), Prelims pattern & photo/sign guidelines. Resize documents online free!",
    excerpt: "Everything candidates ask about SBI Junior Associates: single-state application rule, Local Language Test (LPT) conditions, the unique no-sectional-cutoffs policy, and career progression to Officer.",
    category: "Career Opportunity",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
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
        },
        {
            "question": "Can an average graduate student clear SBI Clerk 2026 in 90 days?",
            "answer": "Yes. SBI Clerk has zero sectional cutoffs in Prelims and Mains, allowing candidates to capitalize on their strongest sections. With 90 days of dedicated 6-hour daily study, complete the basic syllabus in the first 45 days and spend the remaining 45 days attempting one full Prelims mock test daily and solving 50 puzzle and arithmetic questions."
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
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>Document Specifications for SBI Clerk Portal</h2>
        <p>SBI adheres strictly to IBPS portal digital standards: <strong>Photo: 20–50 KB (200×230 px)</strong>, <strong>Signature: 10–20 KB (140×60 px in black ink)</strong>. Signatures in capital letters are disqualified immediately.</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
          <h4 class="text-base font-bold text-foreground">Resize Your SBI Clerk Photo &amp; Signature</h4>
          <p class="text-sm text-muted-foreground mt-1">Ensure 100% compliance with SBI portal file boundaries using our instant client-side resizer tool.</p>
          <a href="/ibps-signature-resize/" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">Launch SBI Resizer Preset &rarr;</a>
        </div>
      </section>
    
<h2 id="strategy">SBI Clerk 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your SBI Clerk 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "upsc-cds-nda-2026-top-10-faq-defence-guide",
    title: "UPSC CDS & NDA II 2026: Top 10 FAQs on Eligibility, OTR Photo Rules, SSB Procedure & Medical Standards",
    metaTitle: "UPSC CDS, NDA 2026: Photo Rules, SSB & Eligibility FAQs",
    metaDescription: "Official UPSC CDS and NDA II 2026 guide: OTR 10-day photo rules, SSB interview process, medical standards and top FAQs. Resize defense documents online free!",
    excerpt: "Complete candidate defense guide for UPSC CDS & NDA II: OTR 10-day-old photograph rule, visual acuity/spectacles standards, 5-day SSB interview protocol, and female candidate eligibility.",
    category: "Career Opportunity",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "Defence Services Advisory Desk",
    readTime: "9 min read",
    featured: false,
    tags: ["UPSC CDS 2026","NDA 2026","UPSC OTR Photo Rules","SSB Interview Process","UPSC Defence Eligibility","Visual Acuity Standards"],
    relatedExamPreset: "upsc-civil-services",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Union Public Service Commission (UPSC)"
        },
        {
            "label": "Target Academies",
            "value": "IMA, INA, AFA, OTA (CDS) & NDA Khadakwasla"
        },
        {
            "label": "Selection Stages",
            "value": "Written Exam + 5-Day SSB + Medical Board"
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
        },
        {
            "question": "Can I clear UPSC CDS & NDA II 2026 on my first attempt?",
            "answer": "Yes, hundreds of cadets join IMA, AFA, INA, and NDA on their very first attempt. The written examination tests standard Class 10th to 12th fundamentals. Pair 4 hours of academic study (English grammar, NCERT Science/Polity/History, and Elementary Mathematics) with daily physical fitness (running 3 km, pushups, pull-ups) and newspaper analysis for the 5-Day SSB Interview."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>UPSC Combined Defence Services (CDS) &amp; NDA: Pathways to Commissioned Ranks</h2>
        <p>Looking for the official <strong>UPSC CDS 2026 eligibility criteria</strong>, <strong>UPSC OTR photo rules</strong>, and exact <strong>SSB interview guidelines</strong>? With hundreds of commissioned officer vacancies across the Indian Armed Forces, this comprehensive candidate handbook breaks down everything you need to know about applying on <a href="https://upsconline.nic.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">upsconline.nic.in</a> and succeeding at the Services Selection Board (SSB).</p>
        
        <p>The Union Public Service Commission conducts CDS and NDA to train young officers for the Indian Army, Indian Navy, and Indian Air Force. If you are preparing documents for other competitive recruitments, explore our <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a>.</p>

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
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>UPSC OTR Document Upload Rules: 10-Day Photo &amp; Signature Standards</h2>
        <p>UPSC enforces strict digital scrutiny on its One Time Registration (OTR) portal. Deviation from the 10-day recency rule results in application cancellation.</p>

        <h3>UPSC OTR Photograph Rules: Name &amp; Date Imprint</h3>
        <ul>
          <li><strong>10-Day Recency:</strong> The photo must be captured within 10 days of online form submission.</li>
          <li><strong>Printed Name &amp; Date:</strong> Candidate's full name and the exact photo capture date must be printed in bold at the bottom.</li>
          <li><strong>File Boundaries:</strong> Square 1:1 aspect ratio (350×350 to 1000×1000 px), 20 KB to 300 KB JPG.</li>
        </ul>

        <h3>UPSC Scanned Signature Specifications</h3>
        <ul>
          <li><strong>Black Ballpoint Ink:</strong> Signed on clean white unruled paper.</li>
          <li><strong>Square Aspect Ratio:</strong> 350×350 to 1000×1000 pixels with file size between 20 KB and 300 KB.</li>
        </ul>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Prepare UPSC Defense Documents Instantly</h4>
          <p class="text-sm text-muted-foreground">Format your photo with name/date imprint and resize signatures to 20-300 KB using our dedicated <a href="/upsc-signature-resize/" class="text-primary font-bold underline">UPSC Signature Resizer Tool</a> or <a href="/photo-resizer/" class="text-primary font-bold underline">Passport Photo Resizer</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/upsc-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Open UPSC Resizer Preset</span>
              <span>&rarr;</span>
            </a>
            <a href="/document-resizer/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Government Document Resizer
            </a>
          </div>
        </div>
      </section>

      <section id="strategy" class="space-y-4 mt-8">
        <h2>SSB Interview Preparation &amp; Daily Routine</h2>
        <p>Written score gets you to the SSB, but Officer Like Qualities (OLQs) decide your recommendation. Dedicate daily time to newspaper editorial analysis, physical running (2.4 km in under 12 minutes), and group discussion public speaking practice.</p>
      </section>
    
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your UPSC CDS & NDA II 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "uppsc-ro-aro-2026-top-10-faq-aspirants",
    title: "UPPSC RO/ARO 2026: Top 10 FAQs on Exam Pattern, 'O' Level Equivalents & Typing Rules",
    metaTitle: "UPPSC RO/ARO 2026: O-Level, Typing, Prelims Pattern FAQs",
    metaDescription: "Official UPPSC RO/ARO 2026 guide: O-level equivalence, Hindi typing speed rules, General Hindi 60 marks strategy & top FAQs. Resize UPPSC photos online free!",
    excerpt: "Everything candidates need to know about UP Review Officer / Assistant Review Officer: 'O' Level diploma equivalence, Hindi typing tests, 1/3rd negative marking, and General Hindi scoring hacks.",
    category: "Guidelines & Tips",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
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
        },
        {
            "question": "Can I clear UPPSC RO/ARO 2026 through self-study without offline coaching?",
            "answer": "Yes. The decisive factor in UPPSC RO/ARO is General Hindi (Paper-II, 60 marks), which has a fixed syllabus of 6 topics (Vilom, Vakya Shuddhi, Anek Shabdon Ke Ek Shabd, Tatsam-Tadbhav, Visheshan, and Paryayvachi). Aspirants who score 55+ in Hindi and 75–80 in General Studies effortlessly clear the Prelims cutoff from home."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>UPPSC Samiksha Adhikari (RO) &amp; Sahayak Samiksha Adhikari (ARO) 2026</h2>
        <p>Looking for the official <strong>UPPSC RO ARO eligibility criteria</strong>, <strong>NIELIT O Level equivalence rules</strong>, and exact <strong>Hindi typing speed requirements</strong>? With prestigious postings in the Uttar Pradesh Civil Secretariat (Lucknow), Board of Revenue, and UPPSC office (Prayagraj), this authoritative handbook provides everything you need to apply on <a href="https://uppsc.up.nic.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">uppsc.up.nic.in</a> and master both Prelims and Mains.</p>
        
        <p>Review Officers oversee government policy files, legislative drafts, and administrative scrutiny. Check other state recruitments in our <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a>.</p>

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
            </tbody>
          </table>
        </div>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>UPPSC OTR Portal Compliance for Scanned Documents</h2>
        <p>Candidates must first generate a <strong>One-Time Registration (OTR) Number</strong> on <code>uppsc.up.nic.in</code>. Both photograph and signature must measure strictly between <strong>10.0 KB and 20.0 KB</strong> in JPG/JPEG format.</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Format UPPSC OTR Signature &amp; Photo</h4>
          <p class="text-sm text-muted-foreground">Resize your signature to official 140×60 px (10–20 KB) and format documents using our <a href="/uppsc-signature-resize/" class="text-primary font-bold underline">UPPSC Signature Resizer</a> or <a href="/document-resizer/" class="text-primary font-bold underline">Document Resizer</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/uppsc-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Launch UPPSC Resizer</span>
              <span>&rarr;</span>
            </a>
            <a href="/compress-image-to-kb/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Compress Image to 10-20 KB
            </a>
          </div>
        </div>
      </section>
    
<h2 id="strategy">UPPSC RO/ARO 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your UPPSC RO/ARO 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "ssc-gd-constable-2026-top-10-faq-complete-guide",
    title: "SSC GD Constable 2026: Top 10 FAQs on PET/PST Standards, Force Preferences & Live Photo Rules",
    metaTitle: "SSC GD Constable 2026: PET/PST, Live Photo & Force FAQs",
    metaDescription: "Official SSC GD Constable 2026 guide: 5km running times, PST height/chest standards, live camera rules and force preference order. Resize documents online free!",
    excerpt: "Everything candidates ask about SSC GD Constable: 5km/1.6km running times, height and chest physical standards, force preference strategy (SSF vs CISF vs CRPF vs BSF), and live camera rules.",
    category: "Career Opportunity",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
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
        },
        {
            "question": "Can I clear SSC GD Constable 2026 in 3 months of preparation?",
            "answer": "Yes. The written examination tests basic 10th-standard subjects (Reasoning, Elementary Maths, General Knowledge, and Hindi/English). With 3 months of disciplined study (3–4 hours study + 1 hour running practice), achieving 120+ marks out of 160 is completely realistic. Concurrently build your stamina to complete the 5 km physical run in under 24 minutes."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>SSC GD Constable 2026: Recruitment Overview &amp; Paramilitary Forces</h2>
        <p>Looking for the official <strong>SSC GD 2026 eligibility criteria</strong>, <strong>PET running standards</strong>, and exact <strong>SSC GD live photo guidelines</strong>? With over <strong>39,000 vacancies</strong> across Central Armed Police Forces (CAPFs), this authoritative handbook provides everything you need to apply on <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">ssc.gov.in</a> and qualify through computer-based and physical rounds.</p>
        
        <p>Constable GD recruits protect India across BSF, CISF, CRPF, SSB, ITBP, Assam Rifles, and SSF. Explore other 10th-pass government drives in our <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a>.</p>

        <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
          <h4 class="font-bold text-primary text-base flex items-center gap-2">
            <span>⚡</span> Force Preference Hierarchy Recommendations
          </h4>
          <ol class="text-xs sm:text-sm text-foreground/90 space-y-1 list-decimal pl-4 pt-1 font-semibold">
            <li><strong>SSF (Secretariat Security Force):</strong> Elite Delhi central ministry postings, regular hours</li>
            <li><strong>CISF (Central Industrial Security Force):</strong> Airports, metro stations, industrial plants with family quarters</li>
            <li><strong>SSB (Sashastra Seema Bal):</strong> Peaceful Indo-Nepal and Indo-Bhutan borders</li>
            <li><strong>ITBP (Indo-Tibetan Border Police):</strong> High-altitude Himalayan border policing</li>
            <li><strong>CRPF (Central Reserve Police Force):</strong> Internal security and counter-insurgency</li>
            <li><strong>BSF (Border Security Force):</strong> Indo-Pakistan and Indo-Bangladesh frontline defense</li>
            <li><strong>Assam Rifles (AR):</strong> North-East frontier security under Army operational command</li>
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
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>Document Upload Rules: Live Photo &amp; 140×60 px Signature</h2>
        <p>SSC portal uses live webcam capture for photographs. For signatures, upload a scanned file cropped to <strong>140 × 60 pixels (10.0 KB to 20.0 KB)</strong> in black ballpoint ink on white paper.</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Prepare SSC GD Signature in 10-20 KB</h4>
          <p class="text-sm text-muted-foreground">Format your signature to exact 140×60 px dimensions and keep file size under 20 KB using our instant <a href="/ssc-signature-resize/" class="text-primary font-bold underline">SSC Signature Resizer Tool</a> or <a href="/compress-image-to-kb/" class="text-primary font-bold underline">Compress Image to 10-20 KB</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/ssc-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Open SSC GD Resizer Tool</span>
              <span>&rarr;</span>
            </a>
            <a href="/photo-resizer/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Passport Photo Resizer
            </a>
          </div>
        </div>
      </section>
    
<h2 id="strategy">SSC GD Constable 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your SSC GD Constable 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "maharashtra-police-bharti-2026-top-10-faq-guide",
    title: "Maharashtra Police Bharti 2026: Top 10 FAQs on Physical Test, Cutoffs, 12th Pass Rules & Documents",
    metaTitle: "Maharashtra Police Bharti 2026: Physical Test, FAQ Guide",
    metaDescription: "Maharashtra Police Bharti 2026 guide: 50-mark physical test standards, 100-mark written exam, eligibility & top FAQs. Resize police documents online free!",
    excerpt: "Comprehensive candidate handbook for Maharashtra Police Bharti 2026: 17,400+ constable & driver vacancies, physical ground marks, written exam pattern, and photo/sign upload rules.",
    category: "Career Opportunity",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "Maharashtra State Police Recruitment Desk",
    readTime: "9 min read",
    featured: false,
    tags: ["Maharashtra Police Bharti 2026","Police Constable Bharti","Physical Ground Test","MahaPolice Application","12th Pass Govt Jobs"],
    relatedExamPreset: "mpsc-general",
    quickFacts: [
        {
            "label": "Conducting Authority",
            "value": "Maharashtra State Police Department (MahaPolice)"
        },
        {
            "label": "Total Vacancies",
            "value": "17,471+ Posts (Constable, SRPF, Driver)"
        },
        {
            "label": "Educational Criteria",
            "value": "12th Standard (HSC) Pass from recognized board"
        },
        {
            "label": "Physical Test (Ground)",
            "value": "50 Marks (1600m / 800m run, 100m sprint, Shot Put)"
        },
        {
            "label": "Written Examination",
            "value": "100 Objective Marks (Qualifying minimum 50% on ground)"
        },
        {
            "label": "Document Specs",
            "value": "Photo (20-50 KB) + Signature (140×60 px, 10-20 KB)"
        }
    ],
    faqs: [
        {
            "question": "What is the educational qualification required for Maharashtra Police Bharti 2026?",
            "answer": "Candidates must have passed Higher Secondary School Certificate (10+2 / 12th Standard) Examination from the Maharashtra State Board of Secondary and Higher Secondary Education or an equivalent examination recognized by the Government. For candidates belonging to tribal areas recognized under ITDP, 10th standard pass is accepted. For Police Driver posts, candidates must also possess a valid driving license (LMV/TR) at the time of application."
        },
        {
            "question": "What are the height and chest physical standards for Male and Female candidates?",
            "answer": "For Male candidates: Minimum height must be 165 cm. Chest measurement must be unexpanded minimum 79 cm, with a mandatory minimum expansion of 5 cm (expanded 84 cm). For Female candidates: Minimum height must be 158 cm (chest measurement is not applicable). Concessions in height and chest apply for candidates hailing from declared naxal/tribal zones and sportspersons."
        },
        {
            "question": "How is the physical test (ground test) scored out of 50 marks?",
            "answer": "The Physical Ground Test carries 50 marks. For Male candidates: 1600-meter run carries 20 marks, 100-meter sprint carries 15 marks, and Shot Put (Gola Phek, 7.26 kg) carries 15 marks. For Female candidates: 800-meter run carries 20 marks, 100-meter sprint carries 15 marks, and Shot Put (4.0 kg) carries 15 marks. Candidates must score at least 50% (25 marks) to qualify for the written exam."
        },
        {
            "question": "Can a candidate apply for multiple police units or commissionerates in Maharashtra?",
            "answer": "Candidates can apply for different posts (e.g. Police Constable in one unit and SRPF or Driver in another). However, applying for the same post (Police Constable) across multiple district commissionerates in violation of recruitment rules is invalid, as physical testing across units is conducted concurrently, leading to disqualification if dates conflict."
        },
        {
            "question": "What is the pattern and syllabus for the 100-mark written examination?",
            "answer": "The written exam is an OMR-based test comprising 100 multiple-choice questions carrying 100 marks with a duration of 90 minutes. Subjects include: 1. Mathematics (Ankganit - 25 Marks), 2. General Knowledge & Current Affairs (Samanya Gyan - 25 Marks), 3. Intellectual Test / Reasoning (Buddhimatecha Chachani - 25 Marks), and 4. Marathi Grammar (Marathi Vyakaran - 25 Marks). Questions are set strictly in the Marathi language."
        },
        {
            "question": "Is there negative marking in the Maharashtra Police written exam?",
            "answer": "No, under the official Maharashtra Police Constable recruitment rules, there is no negative marking penalty for incorrect answers in the written examination. Candidates are encouraged to attempt all 100 questions within the 90-minute limit."
        },
        {
            "question": "What is the age limit and relaxation criteria for Maharashtra Police Bharti 2026?",
            "answer": "For Open/General category candidates: Age must be between 18 and 28 years on the crucial date. For reserved categories (SC, ST, VJ/DT, NT, OBC, SBC, EWS): Upper age limit is relaxed up to 33 years (+5 years). Sportspersons receive up to 33 years, and Ex-Servicemen receive 3 years plus completed military service duration."
        },
        {
            "question": "What are the photo and signature specifications for the MahaPolice recruitment portal?",
            "answer": "The photograph must be a clear recent color passport portrait measuring 160 × 200 pixels, with file size strictly between 20.0 KB and 50.0 KB in JPG/JPEG format on a light background without caps or dark glasses. The signature must measure 140 × 60 pixels, strictly between 10.0 KB and 20.0 KB in JPG/JPEG format, penned in black ballpoint ink on clean white paper."
        },
        {
            "question": "What certificates are mandatory during document scrutiny for Maharashtra candidates?",
            "answer": "Mandatory documents include: 10th and 12th Mark sheets/Board Certificates, Domicile Certificate of Maharashtra, Caste Certificate and valid Non-Creamy Layer (NCL) Certificate (valid for current financial year for OBC/NT/SBC), EWS Eligibility Certificate (if applicable), and MSCIT or recognized Computer Literacy Certificate."
        },
        {
            "question": "What is the monthly salary of a Maharashtra Police Constable after joining?",
            "answer": "A Police Constable is appointed under 7th Pay Commission Pay Matrix Level S-7 with Basic Pay of ₹21,700 (Pay Scale ₹21,700–₹69,100). Adding Dearness Allowance (~50%), House Rent Allowance (27% in Mumbai/Pune Class X cities, 18% in Class Y), Transport Allowance, and Police Special Allowance, gross pay is ~₹42,000–₹45,000. Net in-hand monthly salary ranges between ₹36,000 and ₹39,000."
        },
        {
            "question": "Can an average candidate clear Maharashtra Police Bharti 2026 on the first attempt?",
            "answer": "Yes, absolutely. Over 70% of selected Maharashtra Police constables start from average academic and physical fitness backgrounds. Clearing Bharti requires a balanced dual approach: (1) Ground Physical Endurance: Dedicate 2 hours every morning to 1600m/800m running drills and shot put technique to comfortably secure at least 35–42 out of 50 marks (minimum qualifying is 25). (2) Written Exam: Study 4–5 hours daily focusing on Marathi Grammar, Basic Mathematics, Reasoning, and Maharashtra GK/Current Affairs. Practicing previous 5 years' question papers under timer conditions ensures scoring 85+ marks in the 100-mark written exam."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>Maharashtra Police Constable Bharti 2026: Mega Recruitment Overview</h2>
        <p>Looking for the official <strong>Maharashtra Police Bharti 2026 eligibility criteria</strong>, <strong>physical ground test rules</strong>, and exact <strong>MahaPolice document upload guidelines</strong>? With over <strong>17,471 vacancies</strong> announced across District Police, State Reserve Police Force (SRPF), Bandsman, and Police Driver cadres, this authoritative handbook provides everything you need to apply on <a href="https://policerecruitment2024.mahait.org" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">policerecruitment.mahait.org</a> and secure high marks in both ground physicals and written exams.</p>
        
        <p>Police recruitment in Maharashtra is among the most competitive state drives. If you are also tracking central and defense vacancies, explore our comprehensive <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a>.</p>

        <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
          <h4 class="font-bold text-primary text-base flex items-center gap-2">
            <span>⚡</span> MahaPolice Cadre Vacancies &amp; Selection Flow
          </h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/90 pt-1">
            <li><strong>Police Constable (Sipahi):</strong> Pay Matrix S-7 (₹21,700–₹69,100)</li>
            <li><strong>SRPF Armed Police:</strong> State Reserve Police Force Battalions across Maharashtra</li>
            <li><strong>Police Constable Driver:</strong> Requires valid LMV / TR driving license</li>
            <li><strong>Selection Order:</strong> Stage 1 Physical Test (50 Marks) → Stage 2 Written Test (100 Marks)</li>
          </ul>
        </div>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Physical Efficiency Test (Ground) &amp; Written Examination Blueprint</h2>
        <p>Candidates must score a minimum of <strong>50% (25 marks out of 50)</strong> in the Physical Ground Test to qualify for the 100-mark Written Examination. Shortlisting ratio for the written test is 1:10 based on ground test merit.</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Physical Event</th>
                <th class="p-3 border-b">Male Standards</th>
                <th class="p-3 border-b">Female Standards</th>
                <th class="p-3 border-b">Maximum Marks</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">Distance Run</td>
                <td class="p-3 font-mono">1,600 Meters (within 5m 10s for full marks)</td>
                <td class="p-3 font-mono">800 Meters (within 2m 50s for full marks)</td>
                <td class="p-3 font-mono font-bold">20 Marks</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Sprint Run</td>
                <td class="p-3 font-mono">100 Meters (within 11.50s for full marks)</td>
                <td class="p-3 font-mono">100 Meters (within 14.00s for full marks)</td>
                <td class="p-3 font-mono font-bold">15 Marks</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Shot Put (Gola Phek)</td>
                <td class="p-3 font-mono">7.26 kg ball (Throw 8.50+ meters)</td>
                <td class="p-3 font-mono">4.00 kg ball (Throw 6.00+ meters)</td>
                <td class="p-3 font-mono font-bold">15 Marks</td>
              </tr>
              <tr class="bg-muted/30 font-bold">
                <td class="p-3">Total Ground Score</td>
                <td class="p-3" colspan="2">Must score minimum 25 marks to qualify for written exam</td>
                <td class="p-3 font-mono text-emerald-600 dark:text-emerald-400">50 Marks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>Document Specifications: Photo, Signature &amp; Certificate Uploads</h2>
        <p>The Maharashtra Police recruitment portal employs strict image dimension algorithms. Avoid portal errors using exact measurements:</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Document</th>
                <th class="p-3 border-b">Pixel Dimensions</th>
                <th class="p-3 border-b">File Size</th>
                <th class="p-3 border-b">Format / Ink</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">Passport Photo</td>
                <td class="p-3 font-mono">160 × 200 px (3.5×4.5 cm)</td>
                <td class="p-3 font-mono">20.0 KB to 50.0 KB</td>
                <td class="p-3">Color JPG, light background, no caps/sunglasses</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Candidate Signature</td>
                <td class="p-3 font-mono">140 × 60 px (5×2 cm)</td>
                <td class="p-3 font-mono">10.0 KB to 20.0 KB</td>
                <td class="p-3">Black ballpoint pen on plain white paper</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Resize Maharashtra Police Documents in Seconds</h4>
          <p class="text-sm text-muted-foreground">Format your photo and signature to exact MahaPolice pixel and KB boundaries with our <a href="/mpsc-signature-resize/" class="text-primary font-bold underline">Maharashtra Signature Resizer</a> or <a href="/compress-image-to-kb/" class="text-primary font-bold underline">Compress Image to 10-20 KB</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/mpsc-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Open Maharashtra Resizer</span>
              <span>&rarr;</span>
            </a>
            <a href="/photo-resizer/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Passport Photo Resizer
            </a>
          </div>
        </div>
      </section>
    
<h2 id="strategy">Maharashtra Police Bharti 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your Maharashtra Police Bharti 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "ssc-chsl-2026-top-10-faq-aspirants-guide",
    title: "SSC CHSL 2026: Top 10 FAQs on 12th Pass Eligibility, Typing Speed, Live Photo & Tier-1 Pattern",
    metaTitle: "SSC CHSL 2026: 12th Pass, Typing Speed & Live Photo FAQs",
    metaDescription: "Official SSC CHSL 2026 guide: 12th pass eligibility, DEO/LDC typing speed rules, live camera capture & Tier-1 syllabus. Resize SSC documents online free!",
    excerpt: "Authoritative candidate handbook for SSC CHSL 2026: 10+2 eligibility, LDC/DEO post breakdown, typing speed standards, 140×60 px signature rules, and Tier-1 preparation.",
    category: "Exam Alerts",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "Staff Selection Commission Analytics Team",
    readTime: "9 min read",
    featured: false,
    tags: ["SSC CHSL 2026","10+2 Govt Jobs","LDC DEO Typing Test","SSC Live Photo","SSC CHSL Syllabus","Signature 140x60"],
    relatedExamPreset: "ssc-general",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Staff Selection Commission (SSC)"
        },
        {
            "label": "Posts Offered",
            "value": "Lower Division Clerk (LDC), JSA, Data Entry Operator (DEO)"
        },
        {
            "label": "Educational Criteria",
            "value": "12th Standard (10+2) Pass from recognized board"
        },
        {
            "label": "Selection Stages",
            "value": "Tier-1 (Objective CBE) + Tier-2 (Objective + Skill/Typing)"
        },
        {
            "label": "Typing Requirement",
            "value": "35 WPM English or 30 WPM Hindi (LDC); 8,000 KDPH (DEO)"
        },
        {
            "label": "Document Specs",
            "value": "Live Webcam Photo + Signature (140×60 px, 10–20 KB)"
        }
    ],
    faqs: [
        {
            "question": "What is the educational qualification for SSC CHSL 2026?",
            "answer": "Candidates must have passed 12th Standard (10+2) or equivalent examination from a recognized Board or University. For the post of Data Entry Operator (DEO / DEO Grade 'A') in the Office of Comptroller and Auditor General of India (CAG), Ministry of Consumer Affairs, candidates must have passed 12th Standard in Science stream with Mathematics as a subject."
        },
        {
            "question": "What are the typing speed requirements for LDC and DEO posts in Tier-2?",
            "answer": "For Lower Division Clerk (LDC) / Junior Secretariat Assistant (JSA): Candidates must achieve a typing speed of 35 words per minute (WPM) in English (approx. 10,500 key depressions per hour) OR 30 words per minute in Hindi (approx. 9,000 KDPH) in a 10-minute test. For Data Entry Operator (DEO): Speed requirement is 8,000 key depressions per hour (approx. 27 WPM) for general DEO, and 15,000 KDPH (approx. 50 WPM) for DEO Grade 'A' in CAG."
        },
        {
            "question": "What is the age limit and relaxation criteria for SSC CHSL 2026?",
            "answer": "Candidates must be between 18 and 27 years of age on the crucial date. Standard Central Government age relaxations apply: OBC candidates receive +3 years (up to 30 years), SC/ST candidates receive +5 years (up to 32 years), and PwBD candidates receive +10 to +15 years."
        },
        {
            "question": "Does Tier-1 marks count towards final merit in SSC CHSL?",
            "answer": "No. Tier-1 is purely qualifying in nature to shortlist candidates for Tier-2. The final all-India merit list and post allocation are based 100% on the aggregate score obtained in Tier-2 (Paper-I: Sections 1 & 2), subject to clearing the Computer Knowledge Module and Skill Test / Typing Test."
        },
        {
            "question": "What is the negative marking deduction in SSC CHSL Tier-1 and Tier-2?",
            "answer": "In Tier-1, each question carries 2 marks with a negative marking penalty of 0.50 marks (25%) per incorrect answer. In Tier-2 Paper-I, each question carries 3 marks with a negative marking penalty of 1 mark (33.3%) per wrong response. Unattempted questions carry zero penalty."
        },
        {
            "question": "How does the live webcam photo capture work on the SSC portal for CHSL?",
            "answer": "Candidates capture a live photograph directly through the browser webcam on ssc.gov.in or using the MySSC mobile app. The candidate's face must occupy 80% of the frame against a plain light-colored background. No spectacles, tinted lenses, caps, or headwear (except mandatory religious headwear that does not obscure facial outline) are permitted."
        },
        {
            "question": "What are the exact signature specifications for SSC CHSL online application?",
            "answer": "The signature must be a scanned digital image measuring 140 pixels wide by 60 pixels high (aspect ratio ~4.0 cm × 2.0 cm). The file size must strictly fall between 10.0 KB and 20.0 KB in JPG/JPEG format. It must be written in black ballpoint ink in running cursive handwriting on unruled white paper. Signatures written in capital or block letters are automatically rejected."
        },
        {
            "question": "Can 12th appearing students apply for SSC CHSL 2026?",
            "answer": "Students appearing in their 12th standard examination can apply only if their final 12th result is formally declared by their recognized educational board on or before the crucial cut-off date specified in the official notification."
        },
        {
            "question": "What is the application fee and correction fee structure for SSC CHSL?",
            "answer": "The online registration fee is ₹100. Female candidates, SC, ST, PwBD, and Ex-Servicemen are 100% exempted from paying the fee. During the application correction window, SSC charges ₹200 for the first correction and ₹500 for a second resubmission."
        },
        {
            "question": "What is the starting monthly in-hand salary for an LDC and DEO?",
            "answer": "For LDC/JSA (Pay Level 2, Basic ₹19,900): In Class X metro cities (Delhi, Mumbai), gross salary is ~₹39,000, yielding net in-hand pay of approximately ₹34,000–₹36,000 per month. For DEO (Pay Level 4, Basic ₹25,500): Gross pay is ~₹46,000, with net in-hand salary around ₹40,000–₹43,000 per month."
        },
        {
            "question": "Can an average 12th-pass aspirant clear SSC CHSL 2026 on the first attempt?",
            "answer": "Yes. SSC CHSL syllabus is very similar to SSC CGL but with standard 12th-level arithmetic and comprehension. To clear on your first attempt: (1) Complete syllabus fundamentals across Reasoning, Maths, English, and GK within 3 months. (2) Solve last 5 years' TCS question papers. (3) Start 30 minutes of daily keyboard typing practice to easily achieve the required 35 words per minute speed for LDC/DEO posts."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>SSC CHSL 2026: Premier 10+2 Central Government Gateway</h2>
        <p>Looking for the official <strong>SSC CHSL 2026 eligibility criteria</strong>, <strong>SSC CHSL live photo guidelines</strong>, and exact <strong>LDC typing speed requirements</strong>? The Combined Higher Secondary Level (10+2) Examination recruits young aspirants directly after 12th standard into central ministries, administrative tribunals, and constitutional bodies as Lower Division Clerks (LDC), Junior Secretariat Assistants (JSA), and Data Entry Operators (DEO) on <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">ssc.gov.in</a>.</p>
        
        <p>Explore other 12th-pass recruitments across India in our <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a>.</p>

        <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
          <h4 class="font-bold text-primary text-base flex items-center gap-2">
            <span>⚡</span> CHSL Post Hierarchy &amp; Pay Levels
          </h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/90 pt-1">
            <li><strong>LDC / JSA:</strong> Pay Level 2 (₹19,900 – ₹63,200 | Net ~₹34,000–₹38,000)</li>
            <li><strong>Data Entry Operator (DEO):</strong> Pay Level 4 (₹25,500 – ₹81,100 | Net ~₹42,000–₹46,000)</li>
            <li><strong>DEO Grade 'A':</strong> Pay Level 4 in CAG and Ministry of Consumer Affairs</li>
          </ul>
        </div>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Tier-1 &amp; Tier-2 Examination Pattern</h2>
        <p>Tier-1 consists of 100 questions carrying 200 marks in 60 minutes with <strong>0.50 marks negative marking</strong>. Tier-1 is qualifying in nature. Tier-2 decides the final merit list alongside the mandatory Data Entry Speed Test (DEST).</p>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>SSC CHSL Document Upload Compliance</h2>
        <p>SSC uses live camera capture for photos and mandates scanned signatures measuring <strong>140 × 60 pixels (10.0 KB to 20.0 KB)</strong> in black ballpoint ink. Block capital signatures are disqualified.</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Prepare SSC CHSL Signature in Seconds</h4>
          <p class="text-sm text-muted-foreground">Format your signature to exact 140×60 px (10–20 KB) with our dedicated <a href="/ssc-signature-resize/" class="text-primary font-bold underline">SSC Signature Resizer Tool</a> or format documents via <a href="/document-resizer/" class="text-primary font-bold underline">Document Resizer</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/ssc-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Open SSC CHSL Resizer</span>
              <span>&rarr;</span>
            </a>
            <a href="/compress-image-to-kb/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Compress Image to 10-20 KB
            </a>
          </div>
        </div>
      </section>
    
<h2 id="strategy">SSC CHSL 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your SSC CHSL 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "rrb-alp-technician-2026-top-10-faq-guide",
    title: "RRB ALP & Technician 2026: Top 10 FAQs on ITI/Diploma Eligibility, Vision Standards & CBT Blueprint",
    metaTitle: "RRB ALP, Tech 2026: Vision Rules, ITI & CBT Pattern FAQs",
    metaDescription: "Official RRB ALP & Technician 2026 guide: A-1 vision standards without glasses, ITI/Diploma trades, CBT-2 pattern & top FAQs. Resize railway documents free!",
    excerpt: "Comprehensive candidate handbook for Railway RRB ALP & Technician 2026: 18,799+ posts, strict A-1 medical vision criteria, CBAT psycho test, and document upload rules.",
    category: "Study Prep",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Academic Research Desk",
    authorRole: "Railway Technical Recruitment Desk",
    readTime: "9 min read",
    featured: false,
    tags: ["RRB ALP 2026","Technician Grade 3","Railway Loco Pilot","A-1 Vision Standards","CBAT Psycho Test","Railway Document Specs"],
    relatedExamPreset: "rrb-railway",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Railway Recruitment Boards (RRBs)"
        },
        {
            "label": "Total Vacancies",
            "value": "18,799+ Posts (ALP & Technician)"
        },
        {
            "label": "Educational Criteria",
            "value": "Matriculation + ITI / Diploma in Engineering"
        },
        {
            "label": "Medical Standard (ALP)",
            "value": "Strict A-1 (Distant vision 6/6 without glasses, no LASIK)"
        },
        {
            "label": "Selection Stages",
            "value": "CBT-1 + CBT-2 (Part A & B) + CBAT (Psycho) + DV"
        },
        {
            "label": "Document Specs",
            "value": "Photo (35×45 mm, 20-50 KB) + Signature (10-20 KB)"
        }
    ],
    faqs: [
        {
            "question": "What is the educational qualification for Assistant Loco Pilot (ALP)?",
            "answer": "Candidates must have passed 10th Class (Matriculation) PLUS hold an ITI Certificate in recognized trades (Fitter, Electrician, Instrument Mechanic, Millwright, Wireman, Tractor Mechanic, Diesel Mechanic, Turner, Machinist, RAC) OR hold a 3-year Diploma in Mechanical, Electrical, Electronics, or Automobile Engineering from a recognized institution. Degree holders (B.E./B.Tech) in these engineering disciplines are also eligible."
        },
        {
            "question": "What is the Medical Standard A-1 required for Assistant Loco Pilot?",
            "answer": "Medical Standard A-1 is strictly enforced: Distant Vision must be 6/6, 6/6 without glasses (no glasses or spectacles permitted). Near Vision must be Sn: 0.6, 0.6 without glasses. Candidates must pass tests for Color Vision, Binocular Vision, Field of Vision, and Night Vision. Candidates who have undergone LASIK, PRK, or any refractive eye surgery are permanently disqualified."
        },
        {
            "question": "What is the Computer Based Aptitude Test (CBAT) for ALP candidates?",
            "answer": "CBAT (Psycho Test) is mandatory only for candidates who qualify CBT-2 for the post of ALP. Candidates equal to 8 times the vacancy are shortlisted. The test comprises 5 battery tests (Memory Test, Following Directions, Depth Perception, Concentration, and Perceptual Speed). Candidates must score a minimum T-score of 42 marks in EACH test battery separately to qualify. CBAT carries 30% weightage in final merit."
        },
        {
            "question": "What is the passing criteria for CBT-2 Part B (Trade Test)?",
            "answer": "CBT-2 Part B is a qualifying technical test consisting of 75 questions based on DGET curriculum for the candidate's chosen trade. Candidates must score a mandatory minimum of 35% marks (26.25 marks out of 75) regardless of their category (UR, OBC, SC, ST). Part B marks are not added to final merit, but failing Part B disqualifies the candidate even if they scored 100/100 in Part A."
        },
        {
            "question": "What is the negative marking penalty in RRB ALP CBT-1 and CBT-2?",
            "answer": "A negative marking penalty of 1/3rd (0.33 marks) is deducted for each incorrect answer in CBT-1 and CBT-2 (Part A and Part B). However, there is NO negative marking in the Computer Based Aptitude Test (CBAT Psycho Test)."
        },
        {
            "question": "Can a candidate apply for multiple RRB zones in ALP 2026?",
            "answer": "No. Candidates can apply to ONLY ONE regional Railway Recruitment Board (RRB). Applying to more than one RRB is considered a duplicate registration, resulting in immediate rejection of all submitted applications."
        },
        {
            "question": "What are the photo and signature upload requirements for RRB ALP?",
            "answer": "The candidate's photograph must be a clear color portrait (35 × 45 mm, 20.0 KB to 50.0 KB in JPG/JPEG) taken against a plain light background within 3 months. The signature must measure 140 × 60 pixels, strictly between 10.0 KB and 20.0 KB in JPG/JPEG, penned in black ballpoint ink on clean white unruled paper in running cursive handwriting."
        },
        {
            "question": "What is the age limit and relaxation for RRB ALP candidates?",
            "answer": "The general age limit is 18 to 33 years (inclusive of 3-year COVID relaxation). Reserved categories receive standard statutory relaxations: OBC (Non-Creamy Layer) gets +3 years (up to 36 years), SC/ST gets +5 years (up to 38 years), and Ex-Servicemen get service years deduction + 3 years."
        },
        {
            "question": "What is the difference between ALP and Technician posts in RRB recruitment?",
            "answer": "ALP is a train-running cadre responsible for piloting electric and diesel trains, requiring strict A-1 medical vision and the CBAT psycho test. Technician Grade 3 posts are workshop and depot-based technical roles (Carriage & Wagon, Diesel Electrical, Track Machine, Signal & Telecommunication) requiring B-1 or C-1 medical standards, without requiring the CBAT psycho test."
        },
        {
            "question": "What is the starting in-hand salary and running allowance for an Assistant Loco Pilot?",
            "answer": "ALP starts at 7th CPC Pay Level 2 with Basic Pay of ₹19,900. In addition to DA (~50%), HRA, and Transport Allowance, ALPs earn generous Running Allowance (Kilometre Allowance for train running duties at approx. ₹4.50 to ₹5.50 per km), allowing monthly gross earnings to routinely reach ₹52,000–₹65,000, with net in-hand salary ~₹45,000–₹58,000."
        },
        {
            "question": "Can an ITI or Diploma candidate clear RRB ALP & Technician 2026?",
            "answer": "Yes. The majority of successful ALP and Technician candidates are ITI and Diploma holders. The key to clearing is: (1) Score 75+ in CBT-1 by mastering Basic Science & Engineering, Maths, and Reasoning. (2) In CBT-2 Part B, secure at least 35% qualifying marks in your trade theory. (3) For ALP aspirants, practice memory and observation tests for the CBAT aptitude stage."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>RRB Assistant Loco Pilot (ALP) &amp; Technician 2026 Recruitment</h2>
        <p>Looking for the official <strong>RRB ALP eligibility criteria</strong>, <strong>strict A-1 medical vision standards</strong>, and exact <strong>railway document upload rules</strong>? Covering over <strong>18,799 vacancies</strong> across Indian Railways, this guide breaks down trade qualifications, Computer Based Tests, and psycho batteries on <a href="https://rrbcdg.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">rrbcdg.gov.in</a>.</p>
        
        <p>Assistant Loco Pilots drive Indian Railways electric and diesel locomotives, commanding high running allowances. Explore other technical government jobs in our <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a>.</p>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>CBT-1, CBT-2 &amp; CBAT Psycho Test Structure</h2>
        <p>CBT-1 has 75 questions in 60 minutes (screening test). CBT-2 has Part A (100 questions / 90 min, decides merit) and Part B (75 questions / 60 min, technical trade test requiring 35% pass mark). Negative marking is <strong>1/3rd mark</strong>.</p>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>RRB ALP Document Upload Specifications</h2>
        <p>Upload a color photo (35×45 mm, 20–50 KB) on white background and scanned signature (140×60 px, 10–20 KB) in black ink. Capital signatures are rejected.</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Prepare RRB ALP Signature in 10-20 KB</h4>
          <p class="text-sm text-muted-foreground">Resize your railway signature to 140×60 px and compress within 10–20 KB bounds using our <a href="/rrb-signature-resize/" class="text-primary font-bold underline">RRB Signature Resizer</a> or <a href="/document-resizer/" class="text-primary font-bold underline">Document Resizer</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/rrb-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Open RRB ALP Tool</span>
              <span>&rarr;</span>
            </a>
            <a href="/photo-resizer/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Passport Photo Resizer
            </a>
          </div>
        </div>
      </section>
    
<h2 id="strategy">RRB ALP & Technician 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your RRB ALP & Technician 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "india-post-gds-2026-top-10-faq-complete-guide",
    title: "India Post GDS 2026: Top 10 FAQs on 10th Merit Selection, Cutoffs, BPM/ABPM Posts & Documents",
    metaTitle: "India Post GDS 2026: 10th Merit, BPM Posts & Cutoffs FAQ",
    metaDescription: "Official India Post GDS 2026 guide: 10th class merit cutoff rules, BPM/ABPM salaries, photo/sign upload specs & top FAQs. Resize GDS documents online free!",
    excerpt: "Everything candidates ask about India Post GDS 2026: 44,000+ Branch Postmaster (BPM) & ABPM vacancies, 10th marks merit cutoffs, no exam selection, and photo specs.",
    category: "Career Opportunity",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Academic Research Desk",
    authorRole: "Postal Department Recruitment Desk",
    readTime: "8 min read",
    featured: false,
    tags: ["India Post GDS 2026","Gramin Dak Sevak","10th Merit Govt Jobs","BPM ABPM Salary","Post Office Recruitment","Photo Resizer 50KB"],
    relatedExamPreset: "ssc-general",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Department of Posts (India Post, Govt. of India)"
        },
        {
            "label": "Total Vacancies",
            "value": "44,228+ Posts across 23 Postal Circles"
        },
        {
            "label": "Designations",
            "value": "Branch Postmaster (BPM) & Assistant Branch Postmaster (ABPM)"
        },
        {
            "label": "Selection Mode",
            "value": "100% Merit-Based (No Written Exam / No Interview)"
        },
        {
            "label": "Educational Criteria",
            "value": "10th Class (Secondary) Pass with Maths & English"
        },
        {
            "label": "Document Specs",
            "value": "Photo (200×230 px, &lt;50 KB) + Signature (140×60 px, &lt;20 KB)"
        }
    ],
    faqs: [
        {
            "question": "Is there any written examination or interview for India Post GDS selection?",
            "answer": "No. India Post GDS recruitment has NO written examination and NO personal interview. Selection is formulated 100% on the basis of a candidate's 10th Standard (Secondary School Examination) marks. An automated system-generated merit list is prepared based on the aggregate percentage scored in 10th board exams."
        },
        {
            "question": "What is the educational qualification required for GDS recruitment?",
            "answer": "Candidates must have passed 10th Standard (Secondary School Examination) from a recognized Board of Education with passing marks in Mathematics and English as compulsory or elective subjects. Candidates must also have studied the official local language of their postal circle up to at least 10th standard."
        },
        {
            "question": "What are the roles and differences between BPM and ABPM posts?",
            "answer": "Branch Postmaster (BPM): Heads the Branch Post Office, manages postal operations, India Post Payments Bank (IPPB) transactions, speed post bookings, and village financial inclusion. Time-Related Continuity Allowance (TRCA) Level 1 starts at ₹12,000–₹29,380. Assistant Branch Postmaster (ABPM / Dak Sevak): Handles mail delivery, stamps sale, letterbox clearance, and mail conveyance. TRCA Level 1 starts at ₹10,000–₹24,470."
        },
        {
            "question": "How are merit scores calculated if my 10th board awarded CGPA or grades instead of marks?",
            "answer": "For candidates whose board results display CGPA or letter grades, multiplication factor rules apply: For CBSE candidates, the CGPA is multiplied by 9.5 to compute the percentage. For boards with grade points, standard board conversion tables must be followed. Providing manual marks without approved board conversion leads to cancellation during document verification."
        },
        {
            "question": "What are the age limits and relaxation criteria for India Post GDS?",
            "answer": "Candidates must be between 18 and 40 years of age on the closing date of application submission. Age relaxations apply: OBC candidates receive +3 years (up to 43 years), SC/ST candidates receive +5 years (up to 45 years), PwD candidates receive +10 years, and PwD + OBC receive +13 years."
        },
        {
            "question": "What are the exact photo and signature upload requirements on the GDS portal?",
            "answer": "The photograph must be a clear recent color passport picture measuring 200 × 230 pixels, with file size strictly between 20.0 KB and 50.0 KB in JPG/JPEG format. The signature must measure 140 × 60 pixels, with file size strictly between 10.0 KB and 20.0 KB in JPG/JPEG format, penned on clean white unruled paper in black ink."
        },
        {
            "question": "Is computer knowledge or a computer certificate mandatory for GDS joining?",
            "answer": "Candidates must have basic computer knowledge. A certificate of at least 60 days duration from a recognized computer training institute is required, unless the candidate studied Computer Science as a formal subject in 10th, 12th, or college level."
        },
        {
            "question": "Can a candidate apply for postal circles outside their home state?",
            "answer": "Yes, candidates can apply for posts in any postal circle across India, provided they have studied the specified local language of that circle up to 10th standard and can read, write, and speak it fluently."
        },
        {
            "question": "How many preference posts can a candidate select in their GDS application?",
            "answer": "Candidates can select up to a maximum of 20 to 50 post preferences across eligible divisions within a chosen postal circle in a single application form."
        },
        {
            "question": "What is the monthly in-hand salary of a BPM and ABPM including allowances?",
            "answer": "Branch Postmaster (BPM) receives a minimum TRCA of ₹12,000 for 4 hours of daily duty. Adding Dearness Allowance (~50%), Office Maintenance Allowance (OMA ₹500), and stationary allowance, gross monthly pay is ~₹18,500–₹21,000. Assistant Branch Postmaster (ABPM) receives TRCA of ₹10,000, with gross monthly pay around ~₹15,500–₹17,500."
        },
        {
            "question": "Can I get selected in India Post GDS 2026 with average 10th marks?",
            "answer": "Selection in India Post GDS is 100% merit-based on 10th-grade percentages with no entrance examination. While popular urban division cutoffs often exceed 95%+, candidates with 75% to 88% marks frequently get selected in subsequent merit lists (Lists 2, 3, and 4) by strategically choosing rural, tribal, or remote branch post offices with lower applicant ratios."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>India Post Gramin Dak Sevak (GDS) 2026: No-Exam Merit Gateway</h2>
        <p>Looking for the official <strong>India Post GDS 2026 eligibility criteria</strong>, <strong>10th class merit cutoff calculations</strong>, and exact <strong>GDS photo/signature specifications</strong>? With over <strong>44,228 vacancies</strong> announced across 23 postal circles, this guide explains selection on <a href="https://indiapostgdsonline.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">indiapostgdsonline.gov.in</a>.</p>
        
        <p>GDS recruitment offers direct government employment with zero written examination. Check other 10th-pass vacancies in our <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a>.</p>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Selection Mechanics &amp; Merit List Compilation</h2>
        <p>Selection is formulated automatically by an online computerized system based on candidate 10th standard board percentage calculated to four decimal places. Candidates who studied English, Mathematics, and the local regional language as compulsory subjects are prioritized.</p>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>India Post GDS Document Upload Rules</h2>
        <p>Portal guidelines enforce: <strong>Photograph: under 50.0 KB (200×230 px)</strong> and <strong>Signature: under 20.0 KB (140×60 px)</strong> in JPG format.</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Resize India Post GDS Documents in 1 Click</h4>
          <p class="text-sm text-muted-foreground">Crop and compress your photo to under 50 KB and signature to under 20 KB using our <a href="/photo-resizer/" class="text-primary font-bold underline">Photo Resizer</a> or <a href="/document-resizer/" class="text-primary font-bold underline">Document Resizer</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/photo-resizer/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Open GDS Photo Resizer (50 KB)</span>
              <span>&rarr;</span>
            </a>
            <a href="/ssc-signature-resize/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Signature Resizer (20 KB)
            </a>
          </div>
        </div>
      </section>
    
<h2 id="strategy">India Post GDS 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your India Post GDS 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "up-police-constable-si-2026-top-10-faq-guide",
    title: "UP Police Constable & SI 2026: Top 10 FAQs on 60,000+ Posts, Physical Running Standards & OMR Exam",
    metaTitle: "UP Police Constable 2026: 60K Posts, PET Running & FAQs",
    metaDescription: "Official UP Police Constable 2026 guide: 4.8km running standards, 300-mark OMR exam blueprint, eligibility & top FAQs. Resize UP police photos online free!",
    excerpt: "Everything candidates ask about UP Police Constable & SI 2026: 60,244 vacancies, 4.8km running criteria, Digilocker document upload rules, and OMR written exam strategy.",
    category: "Career Opportunity",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "UP Police Recruitment Advisory Desk",
    readTime: "9 min read",
    featured: false,
    tags: ["UP Police Constable 2026","UPPRPB Bharti","UP Police Running Test","UP Police OMR Exam","Digilocker Upload","Police Constable Jobs"],
    relatedExamPreset: "uppsc-services",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "UP Police Recruitment & Promotion Board (UPPRPB)"
        },
        {
            "label": "Total Vacancies",
            "value": "60,244+ Constable Posts (Direct Recruitment)"
        },
        {
            "label": "Educational Criteria",
            "value": "12th Standard (Intermediate) Pass from recognized board"
        },
        {
            "label": "Physical Running Test",
            "value": "Male: 4.8 km in 25 min | Female: 2.4 km in 14 min"
        },
        {
            "label": "Written Examination",
            "value": "300 Marks (150 Objective Questions, 2 Hours OMR)"
        },
        {
            "label": "Document Specs",
            "value": "Photo (20-50 KB) + Signature (5-20 KB in Black Ink)"
        }
    ],
    faqs: [
        {
            "question": "What is the educational qualification for UP Police Constable 2026?",
            "answer": "Candidates must have passed 12th Standard (Intermediate) from a recognized Board of Secondary Education (such as UP Board, CBSE, ICSE, or state equivalence). For Sub-Inspector (SI) posts, candidates must hold a Bachelor's Degree in any discipline from a recognized University."
        },
        {
            "question": "What are the physical running standards for Male and Female candidates in UP Police?",
            "answer": "For Male candidates: running distance of 4.8 kilometers to be completed within 25 minutes. For Female candidates: running distance of 2.4 kilometers to be completed within 14 minutes. The Physical Efficiency Test (PET) is purely qualifying in nature; failing to finish within the allotted time leads to instant elimination."
        },
        {
            "question": "What are the height and chest measurement criteria for UP Police Constable?",
            "answer": "For Male candidates: Minimum height is 168 cm (160 cm for ST candidates). Chest measurement must be unexpanded minimum 79 cm with mandatory 5 cm expansion (expanded 84 cm). For Female candidates: Minimum height is 152 cm (147 cm for ST candidates) with minimum weight requirement of 40 kg."
        },
        {
            "question": "What is the negative marking deduction in the UP Police written exam?",
            "answer": "Each question carries 2 marks. A negative marking penalty of 0.50 marks (25%) is deducted for each incorrect answer across all 4 subjects (General Knowledge, General Hindi, Numerical & Mental Ability, Mental Aptitude/Reasoning). Unattempted questions incur no mark deduction."
        },
        {
            "question": "Can candidates from outside Uttar Pradesh apply for UP Police Constable?",
            "answer": "Yes, candidates from all Indian states are eligible to apply. However, all non-UP domicile candidates are categorized under the Unreserved (General) category, regardless of their caste or reservation status in their home states."
        },
        {
            "question": "What are the age limits and relaxation norms for UP Police Constable?",
            "answer": "Standard age limit is 18 to 22 years for male candidates and 18 to 25 years for female candidates. Following government orders, age relaxations of 3 to 5 years apply for SC, ST, and OBC candidates domiciled in Uttar Pradesh."
        },
        {
            "question": "What are the photo and signature specifications for the UPPRPB portal?",
            "answer": "Photograph must be a clear recent color passport portrait (3.5 × 4.5 cm, 20.0 KB to 50.0 KB in JPG format) against a white or light grey background without spectacles or caps. The signature must measure 3.5 × 1.5 cm with file size strictly between 5.0 KB and 20.0 KB in JPG format, signed in black ink on white paper."
        },
        {
            "question": "How does the Digilocker integration work during online registration?",
            "answer": "UPPRPB integrates with Digilocker to automatically fetch verified 10th and 12th certificates, domicile, and category documents. Candidates with active Digilocker accounts can authorize instant document verification, eliminating manual upload discrepancies."
        },
        {
            "question": "What is the normalization formula used by UPPRPB for multi-shift exams?",
            "answer": "UPPRPB uses the standard Percentile-based Normalization Formula approved by the Supreme Court to adjust raw scores across multi-day, multi-shift examinations, ensuring uniform fairness across question paper difficulties."
        },
        {
            "question": "What is the monthly starting salary for a UP Police Constable?",
            "answer": "Constable is appointed under Pay Matrix Level 3 (Pay Band ₹5,200–₹20,200 with Grade Pay ₹2,000). Starting Basic Pay is ₹21,700. Including DA (~50%), HRA, and allowances, gross salary is ~₹38,000–₹41,000, with net in-hand salary of approximately ₹33,000–₹36,000 per month."
        },
        {
            "question": "Can I clear UP Police Constable 2026 written exam and 4.8 km run in 60 days?",
            "answer": "Yes. The 60,244 vacancies offer unprecedented odds. In 60 days: (1) Written: Practice General Hindi (37 Qs) and Reasoning (55 Qs)—these two sections alone account for 92 out of 150 questions (184 marks out of 300). (2) Physical: Begin jogging 2–3 km daily from day one, gradually increasing endurance to complete 4.8 km in 25 minutes."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>UP Police Constable Recruitment 2026: 60,000+ Mega Drive</h2>
        <p>Looking for the official <strong>UP Police Constable 2026 eligibility criteria</strong>, <strong>physical running test standards</strong>, and exact <strong>UPPRPB document upload guidelines</strong>? Covering over <strong>60,244 vacancies</strong> announced by the Uttar Pradesh Police Recruitment and Promotion Board (UPPRPB, Lucknow), this comprehensive handbook explains everything you need to apply on <a href="https://uppbpb.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">uppbpb.gov.in</a>.</p>
        
        <p>This historic recruitment offers direct appointment as Civil Police Constables across Uttar Pradesh. Explore other state police drives in our <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a>.</p>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Written Examination Pattern: 300-Mark OMR Blueprint</h2>
        <p>The written exam is conducted offline via OMR sheets, featuring 150 questions carrying 300 marks (2 marks per question) in 2 hours. Negative marking is <strong>0.50 marks (25%)</strong> per incorrect answer.</p>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>UPPRPB Document &amp; Digilocker Compliance</h2>
        <p>Candidates must upload documents through Digilocker or scanned files: <strong>Photo (3.5×4.5 cm, 20–50 KB)</strong> and <strong>Signature (3.5×1.5 cm, 5–20 KB)</strong> in black ink.</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Prepare UP Police Documents Instantly</h4>
          <p class="text-sm text-muted-foreground">Resize your photo to 20-50 KB and signature to 5-20 KB with our <a href="/uppsc-signature-resize/" class="text-primary font-bold underline">UP Police Resizer Preset</a> or <a href="/document-resizer/" class="text-primary font-bold underline">Document Resizer</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/uppsc-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Open UP Police Resizer</span>
              <span>&rarr;</span>
            </a>
            <a href="/compress-image-to-kb/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Compress Image to 20 KB
            </a>
          </div>
        </div>
      </section>
    
<h2 id="strategy">UP Police Constable & SI 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your UP Police Constable & SI 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "rbi-grade-b-assistant-2026-top-10-faq-guide",
    title: "RBI Grade B & Assistant 2026: Top 10 FAQs on 60% Graduation Rule, Phase-II Pattern & Salary",
    metaTitle: "RBI Grade B 2026: 60% Rule, Phase-II Pattern, Salary FAQs",
    metaDescription: "Official RBI Grade B & Assistant 2026 guide: 60% graduation criteria, Phase-II descriptive blueprint, salary & top FAQs. Resize RBI documents online free!",
    excerpt: "Authoritative candidate handbook for Reserve Bank of India Grade B (General/DEPR/DSIM) & Assistant 2026: 60% degree rules, descriptive economic papers, and salary.",
    category: "Career Opportunity",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Academic Research Desk",
    authorRole: "Central Banking Advisory Desk",
    readTime: "9 min read",
    featured: false,
    tags: ["RBI Grade B 2026","RBI Assistant","Reserve Bank of India","Economic and Social Issues","Finance and Management","Banking Careers"],
    relatedExamPreset: "ibps-sbi",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Reserve Bank of India Services Board (RBISB)"
        },
        {
            "label": "Designations",
            "value": "Officers in Grade 'B' (General / DEPR / DSIM) & Assistant"
        },
        {
            "label": "Educational Criteria",
            "value": "Minimum 60% in Graduation (50% for SC/ST/PwBD)"
        },
        {
            "label": "Selection Stages",
            "value": "Phase-I (Online) + Phase-II (Objective & Descriptive) + Interview"
        },
        {
            "label": "Gross Monthly Salary",
            "value": "Grade B: ~₹1,16,000+ | Assistant: ~₹47,000+"
        },
        {
            "label": "Document Specs",
            "value": "Photo (20-50 KB) + Signature (10-20 KB in Black Ink)"
        }
    ],
    faqs: [
        {
            "question": "What is the mandatory 60% graduation percentage rule for RBI Grade B?",
            "answer": "Candidates must possess a minimum of 60% marks (50% for SC/ST/PwBD) in their Bachelor's degree, as well as in 12th (or Diploma) and 10th Standard examinations. The percentage is calculated by dividing total aggregate marks across all semesters/years by maximum possible marks; rounding off (e.g. 59.99% to 60%) is not permitted."
        },
        {
            "question": "What is the maximum number of attempts permitted for RBI Grade B Phase-I?",
            "answer": "General category candidates are permitted a maximum of 6 attempts at the Phase-I examination. There is no restriction on attempts for SC, ST, OBC, EWS, and PwBD candidates."
        },
        {
            "question": "What are the age limits and relaxation criteria for RBI Grade B 2026?",
            "answer": "Candidates must be between 21 and 30 years of age. For candidates possessing M.Phil. or Ph.D. qualifications, the upper age limit is extended up to 32 and 34 years respectively. Standard statutory age relaxations apply for OBC (+3) and SC/ST (+5)."
        },
        {
            "question": "What is the structure of Phase-II descriptive papers?",
            "answer": "Phase-II comprises three papers of 100 marks each: Paper-I Economic & Social Issues (50% objective + 50% descriptive typed on keyboard), Paper-II English Writing Skills (100% descriptive essay, precis, letter), and Paper-III Finance & Management (50% objective + 50% descriptive typed on keyboard)."
        },
        {
            "question": "What is the interview weightage and final selection formula in RBI Grade B?",
            "answer": "Final merit list is prepared on the aggregate marks of Phase-II (300 marks) and Personal Interview (75 marks), totaling 375 marks. Phase-I marks are purely qualifying in nature."
        },
        {
            "question": "What are the photograph and signature upload specifications for RBI application?",
            "answer": "Photograph must measure 200 × 230 pixels (20.0 KB to 50.0 KB in JPG format) against a white background. Signature must measure 140 × 60 pixels (10.0 KB to 20.0 KB) penned in black ballpoint ink on unruled white paper. Capital letters are rejected."
        },
        {
            "question": "How does RBI Assistant recruitment differ from RBI Grade B?",
            "answer": "RBI Assistant is a clerical cadre recruitment requiring simple graduation with 50% marks without restrictions on attempts. Selection comprises Prelims, Mains, and a Language Proficiency Test (LPT) without an interview."
        },
        {
            "question": "What is the starting monthly in-hand salary and perks for an RBI Grade B Officer?",
            "answer": "An RBI Grade B Officer starts at Basic Pay of ₹55,200. Including Dearness Allowance, Special Prerequisite Allowance, House Allowance (or leased accommodation up to ₹70,000 in Mumbai), gross monthly emoluments exceed ₹1,16,000, with net in-hand salary of ~₹95,000–₹1,05,000."
        },
        {
            "question": "Can final-year graduation students apply for RBI Grade B 2026?",
            "answer": "No, final year appearing candidates cannot apply. Candidates must possess the official graduation mark sheet and degree certificate with results declared on or before the application cut-off date."
        },
        {
            "question": "What is the career progression for an RBI Grade B Officer?",
            "answer": "Career hierarchy proceeds: Assistant Manager (Grade A) → Manager (Grade B) → Assistant General Manager (Grade C) → Deputy General Manager (Grade D) → General Manager (Grade E) → Chief General Manager (Grade F) → Executive Director (ED) → Deputy Governor (DG)."
        },
        {
            "question": "Can an average student clear RBI Grade B 2026 on the first attempt?",
            "answer": "Yes. While RBI Grade B is prestigious and selective, success comes from structured preparation rather than genius. Clearing Phase-I requires qualifying sectional cutoffs (General Awareness carries 80 marks). For Phase-II, master Economic & Social Issues (ESI) and Finance & Management (FM), and practice typing structured 400–600 word answers on a computer keyboard daily."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>RBI Grade 'B' Officers &amp; Assistants 2026: Premier Central Banking Cadre</h2>
        <p>Looking for the official <strong>RBI Grade B eligibility criteria</strong>, <strong>60% graduation percentage calculation</strong>, and exact <strong>Phase-II examination blueprint</strong>? Direct recruitment into India's central bank—the Reserve Bank of India—represents the pinnacle of banking prestige, policymaking influence, and executive compensation on <a href="https://rbi.org.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">rbi.org.in</a>.</p>
        
        <p>Grade B officers formulate monetary policy, oversee foreign exchange reserves, and regulate commercial banks. Check other premier banking recruitments in our <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a>.</p>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Phase-I &amp; Phase-II Examination Blueprint</h2>
        <p>Phase-I features 200 marks in 120 minutes (General Awareness carries 80 marks). Phase-II features 3 papers: Paper-I Economic &amp; Social Issues (100 M), Paper-II English Descriptive (100 M), and Paper-III Finance &amp; Management (100 M).</p>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>RBI Document Upload Guidelines</h2>
        <p>Document rules adhere to IBPS banking standards: <strong>Photo: 20–50 KB</strong>, <strong>Signature: 10–20 KB in black ink</strong>, <strong>Left Thumb: 20–50 KB</strong>, <strong>Declaration: 50–100 KB</strong>.</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Prepare RBI Documents in Seconds</h4>
          <p class="text-sm text-muted-foreground">Format your photo, signature, and declaration strictly within RBI boundaries using our <a href="/ibps-signature-resize/" class="text-primary font-bold underline">Banking Signature Resizer</a> or <a href="/compress-image-to-kb/" class="text-primary font-bold underline">Compress Image to 20 KB</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/ibps-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Open RBI Resizer Preset</span>
              <span>&rarr;</span>
            </a>
            <a href="/photo-resizer/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Passport Photo Resizer
            </a>
          </div>
        </div>
      </section>
    
<h2 id="strategy">RBI Grade B & Assistant 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your RBI Grade B & Assistant 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "bpsc-cce-teacher-2026-top-10-faq-guide",
    title: "BPSC 2026: Top 10 FAQs on 70th CCE, Teacher (TRE 4.0), Live Photo Rules & Negative Marking",
    metaTitle: "BPSC 2026: 70th CCE, TRE 4.0 Teacher & Live Photo FAQs",
    metaDescription: "Official BPSC 2026 guide: 70th CCE Prelims pattern, Teacher TRE 4.0 eligibility, live webcam capture rules & top FAQs. Resize BPSC documents online free!",
    excerpt: "Everything candidates ask about BPSC 70th CCE & Teacher TRE 4.0: live photo webcam rules, Hindi & English signatures, 1/3rd negative marking, and Prelims syllabus.",
    category: "Guidelines & Tips",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "Bihar Public Service Commission Advisory Desk",
    readTime: "9 min read",
    featured: false,
    tags: ["BPSC 70th CCE","BPSC TRE 4.0","Bihar Teacher Bharti","BPSC Live Photo","BPSC Negative Marking","Bihar Civil Services"],
    relatedExamPreset: "bpsc-services",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Bihar Public Service Commission (BPSC, Patna)"
        },
        {
            "label": "Key Exams",
            "value": "70th Integrated Combined Competitive Exam (CCE) & Teacher TRE 4.0"
        },
        {
            "label": "Educational Criteria",
            "value": "Graduate in any discipline (CCE); B.Ed/D.El.Ed + CTET/STET (TRE)"
        },
        {
            "label": "Live Photo Rule",
            "value": "Direct browser webcam live capture (No scanned photo upload)"
        },
        {
            "label": "Dual Signature",
            "value": "Both Hindi & English scanned signatures mandatory (15-20 KB each)"
        },
        {
            "label": "Negative Marking",
            "value": "1/3rd mark (0.33 marks) per incorrect answer"
        }
    ],
    faqs: [
        {
            "question": "How does the BPSC live webcam photograph capture system work?",
            "answer": "BPSC does NOT permit uploading a scanned passport photo. Candidates must capture a live photo using a computer webcam or mobile camera directly on the application portal. The background must be light and plain, both ears must be clearly visible, and wearing sunglasses, spectacles, or caps is strictly forbidden."
        },
        {
            "question": "Why does BPSC require two signatures (Hindi and English)?",
            "answer": "BPSC mandates the upload of two separate scanned signatures: one penned in English running script and one penned in Hindi (Devanagari script). Both files must measure strictly between 15.0 KB and 20.0 KB in JPG/JPEG format, written in black ink on clean white unruled paper."
        },
        {
            "question": "What is the educational qualification for BPSC 70th Integrated CCE?",
            "answer": "Candidates must hold a Bachelor's Degree in any discipline from a recognized University. For specialized posts like DSP, physical standards apply; for District Sub-Registrar or Labor Superintendent, specific coursework is prioritized."
        },
        {
            "question": "What is the negative marking deduction in BPSC Prelims?",
            "answer": "BPSC enforces a negative marking penalty of 1/3rd (0.33 marks) for each incorrect answer out of the 150 objective questions in the Preliminary Examination."
        },
        {
            "question": "What are the educational requirements for Bihar Teacher TRE 4.0 posts?",
            "answer": "For Primary Teachers (Classes 1–5): 12th pass with minimum 50% marks + 2-year D.El.Ed + CTET/BTET Paper-I qualified. For Middle Teachers (Classes 6–8): Graduation + B.Ed/D.El.Ed + CTET/BTET Paper-II. For Secondary & Higher Secondary (Classes 9–12): Graduation/Post-Graduation + B.Ed + Bihar STET Paper-I/II."
        },
        {
            "question": "Can candidates from other states apply for BPSC CCE and Teacher TRE?",
            "answer": "Yes, candidates from all Indian states are eligible to apply. However, all non-Bihar domiciled candidates are treated under the Unreserved (General) category and cannot claim caste reservation benefits."
        },
        {
            "question": "What are the age limits and relaxation rules for BPSC recruitment?",
            "answer": "General male candidates must be between 20, 21, or 22 and 37 years of age depending on the post. General female and BC/EBC candidates receive relaxation up to 40 years (+3 years), and SC/ST candidates receive relaxation up to 42 years (+5 years)."
        },
        {
            "question": "What is the examination pattern for BPSC 70th CCE Mains?",
            "answer": "Mains carries 900 marks across 4 descriptive papers: General Hindi (100 Marks, qualifying 30%), General Studies Paper-I (300 Marks), General Studies Paper-II (300 Marks), and Essay Paper (300 Marks). Optional Subject is qualifying in nature (100 Marks MCQ)."
        },
        {
            "question": "What certificates are mandatory for Bihar domicile reservation?",
            "answer": "Permanent Residence (Domicile) Certificate of Bihar, Caste Certificate, Non-Creamy Layer (NCL) Certificate for BC/EBC candidates, and EWS Income Certificate issued by the competent Revenue Officer."
        },
        {
            "question": "What is the monthly in-hand salary of an SDM or DSP appointed through BPSC?",
            "answer": "Sub-Divisional Officer (SDM) and DSP are placed under 7th CPC Pay Level 9 (Grade Pay ₹5,400, Basic Pay ₹53,100). Adding Dearness Allowance (~50%), HRA, and medical allowances, gross monthly pay is ~₹88,000–₹94,000, with net in-hand salary ~₹78,000–₹84,000."
        },
        {
            "question": "Can I clear BPSC 70th CCE and Teacher TRE 4.0 through self-study?",
            "answer": "Yes. For BPSC 70th CCE, 60% of Prelims marks come from 4 subjects: Bihar Special GK, Modern History of India, General Science, and Current Affairs. Mastering these four subjects through NCERTs, Imtiaz Ahmed, and standard current affairs ensures comfortably crossing the 90+ cutoff. For Teacher TRE 4.0, rigorous SCERT/NCERT textbook revision is sufficient."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>BPSC 70th CCE &amp; Teacher Recruitment Examination (TRE 4.0)</h2>
        <p>Looking for the official <strong>BPSC 70th CCE eligibility criteria</strong>, <strong>BPSC live photo guidelines</strong>, and exact <strong>dual Hindi/English signature specifications</strong>? The Bihar Public Service Commission conducts mega recruitments for Sub-Divisional Officer (SDM), Deputy Superintendent of Police (DSP), and Teacher positions on <a href="https://bpsc.bih.nic.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">bpsc.bih.nic.in</a>.</p>
        
        <p>Explore other state administrative and teaching vacancies in our <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a>.</p>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>BPSC Preliminary Examination Pattern &amp; 1/3rd Negative Marking</h2>
        <p>BPSC Prelims consists of 150 objective questions for 150 marks in 2 hours with <strong>1/3rd negative marking penalty</strong>.</p>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>BPSC Document Upload Rules: Live Photo &amp; Dual Signature</h2>
        <p>BPSC enforces live webcam capture for photographs and requires <strong>two distinct signatures: one in Hindi and one in English</strong> (15–20 KB each in black ink).</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Prepare BPSC Dual Signatures in Seconds</h4>
          <p class="text-sm text-muted-foreground">Format your Hindi and English signatures to exact BPSC boundaries with our <a href="/bpsc-signature-resize/" class="text-primary font-bold underline">BPSC Signature Resizer Tool</a> or <a href="/document-resizer/" class="text-primary font-bold underline">Document Resizer</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/bpsc-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Open BPSC Resizer Preset</span>
              <span>&rarr;</span>
            </a>
            <a href="/compress-image-to-kb/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Compress Image to 20 KB
            </a>
          </div>
        </div>
      </section>
    
<h2 id="strategy">BPSC 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your BPSC 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  }
];
