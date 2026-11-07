// scratch/apply_week1_blogs.mjs
// Inserts the 5 Week 1 high-yield blog posts into src/data/blogPostsData.ts

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const dataFilePath = path.join(projectRoot, 'src', 'data', 'blogPostsData.ts');

const todayDate = "Oct 19, 2026";

const WEEK1_POSTS = [
  {
    slug: "sarathi-parivahan-photo-signature-upload-guide-2026",
    title: "Sarathi Parivahan Photo & Signature Upload Error: Fix 10-20 KB Dimension Mismatch",
    title_hi: "सारथी परिवहन फोटो और हस्ताक्षर अपलोड त्रुटि: 10-20 KB साइज और डायमेंशन कैसे ठीक करें",
    title_mr: "सारथी परिवहन फोटो आणि स्वाक्षरी अपलोड त्रुटी: 10-20 KB आकार आणि नियम",
    excerpt: "Fix the Sarathi Parivahan 'Photo and Signature size should be between 10KB to 20KB' upload error for Learner and Driving Licences. Official specs, aspect ratio and compression steps.",
    excerpt_hi: "ड्राइविंग और लर्नर लाइसेंस के लिए सारथी परिवहन '10KB to 20KB' अपलोड एरर ठीक करें। ऑफिशियल फोटो और सिग्नेचर साइज़ व कम्प्रेशन गाइड।",
    excerpt_mr: "ड्रायव्हिंग आणि लर्नर लायसन्ससाठी सारथी परिवहन '10KB to 20KB' अपलोड त्रुटी दुरुस्त करा. अधिकृत फोटो आणि स्वाक्षरी नियम.",
    category: "Guidelines & Tips",
    publishDate: todayDate,
    lastUpdated: todayDate,
    author: "SignResize Technical Verification Team",
    authorRole: "Transport Portal Compliance Desk",
    readTime: "7 min read",
    featured: true,
    tags: ["Sarathi Parivahan", "Driving Licence", "Learner Licence", "Signature 10-20KB", "Photo 10-20KB", "Parivahan Sewa"],
    relatedExamPreset: "sarathi-dl",
    quickFacts: [
      { label: "Signature Size Limit", value: "Strictly 10 KB to 20 KB (JPG/JPEG)" },
      { label: "Photo Size Limit", value: "Strictly 10 KB to 20 KB (35 × 45 mm)" },
      { label: "Official Portal", value: "sarathi.parivahan.gov.in (MoRTH)" },
      { label: "Ink Requirement", value: "Black or Dark Blue Ink on White Paper" }
    ],
    faqs: [
      {
        question: "Why does Sarathi Parivahan show 'Photo and Signature size should be between 10KB to 20KB'?",
        answer: "The Parivahan Sewa portal enforces a strict binary check rejecting any file smaller than 10.0 KB (10,240 bytes) or larger than 20.0 KB (20,480 bytes). Even a file of 9.8 KB or 20.2 KB triggers this exact error popup."
      },
      {
        question: "What are the exact dimensions for Sarathi Driving Licence signature upload?",
        answer: "The recommended resolution is 200 × 100 pixels (approx. 4.0 cm width × 2.0 cm height, 2:1 aspect ratio) in JPEG/JPG format with file size strictly between 10 KB and 20 KB."
      },
      {
        question: "What is the photo size for a Sarathi Learner Licence application?",
        answer: "The photo must be a clear color passport photograph with dimensions of 35 mm × 45 mm (approx. 420 × 540 pixels) and a file weight between 10 KB and 20 KB on a white or light background."
      },
      {
        question: "Can I upload a PNG signature on Sarathi Parivahan?",
        answer: "No. The Parivahan portal only supports JPG or JPEG files. PNG, PDF, and WebP files will be rejected immediately upon upload."
      },
      {
        question: "How do I remove paper shadow from my driving licence signature scan?",
        answer: "Use our integrated Clean White Paper filter on SignResize. It detects uneven ambient phone shadows and converts the background to spotless 255 pure white while preserving ink line darkness."
      }
    ],
    contentHtml: `
      <h2>Solving the Sarathi Parivahan Document Upload Error</h2>
      <p>Applying for a <strong>Learner's Licence (LL), Permanent Driving Licence (DL), DL Renewal, or International Driving Permit</strong> on the official Ministry of Road Transport and Highways (MoRTH) Parivahan portal (<code>sarathi.parivahan.gov.in</code>) frequently halts applicants with a frustrating error modal:</p>

      <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
        <div class="flex items-center justify-between text-slate-400 text-[11px]">
          <span>⚡ Parivahan Sewa Portal Error Log</span>
          <span>MoRTH Standard</span>
        </div>
        <pre class="overflow-x-auto text-rose-400"><code>Upload Error: "Photo and Signature size should be between 10KB to 20KB."
Validation Status: FAILED (Current File: 9.64 KB or 21.30 KB - Rejected)</code></pre>
      </div>

      <p>This failure occurs because the server checks both lower and upper boundary limits. While most commercial government websites allow up to 50 KB or 100 KB, <strong>Parivahan restricts both applicant photo and signature to an exact 10 KB – 20 KB window</strong>.</p>

      <h2>Official Sarathi Parivahan Document Matrix</h2>
      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-3 border border-border">Parameter</th>
              <th class="p-3 border border-border">Applicant Passport Photo</th>
              <th class="p-3 border border-border">Applicant Signature</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border text-foreground">
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">File Weight Corridor</td>
              <td class="p-3 border border-border font-semibold text-primary">10.0 KB to 20.0 KB</td>
              <td class="p-3 border border-border font-semibold text-primary">10.0 KB to 20.0 KB</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Recommended Dimensions</td>
              <td class="p-3 border border-border">35 mm &times; 45 mm (420 &times; 540 px)</td>
              <td class="p-3 border border-border">40 mm &times; 20 mm (200 &times; 100 px)</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Aspect Ratio</td>
              <td class="p-3 border border-border">7:9 (Vertical Portrait)</td>
              <td class="p-3 border border-border">2:1 (Horizontal Landscape)</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">File Format</td>
              <td class="p-3 border border-border">JPEG / JPG only</td>
              <td class="p-3 border border-border">JPEG / JPG only</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Background Standard</td>
              <td class="p-3 border border-border">Clean plain white or light off-white</td>
              <td class="p-3 border border-border">Spotless unruled white paper</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Permitted Ink</td>
              <td class="p-3 border border-border">N/A (Color photo, face forward)</td>
              <td class="p-3 border border-border">Dark Black or Navy Blue Ballpoint</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Why Phone Photos Fail on Parivahan Smart Cards</h2>
      <p>Modern smartphone cameras produce JPEG files between 2 MB and 12 MB with high resolutions like 4000 &times; 3000 pixels. Simply lowering the resolution in typical phone apps either squishes the signature or drops the file size to 7 KB, causing the portal script to reject it.</p>
      <p>Furthermore, state RTO smart card printers (SARATHI 4.0 software) read the uploaded signature and laser-engrave it directly onto the PVC card. Any ambient shadow or yellow paper tint prints as dark smudge on your official driving licence.</p>

      <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Prepare Your Sarathi Documents Instantly</h4>
        <p class="text-xs sm:text-sm text-muted-foreground mt-1">Resize both photo and signature into the official 10–20 KB corridor with automated shadow cleaning.</p>
        <div class="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 mt-3">
          <a href="/sarathi-dl-signature-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:opacity-95 transition w-full sm:w-auto">
            Sarathi Signature Resizer (10-20 KB) &rarr;
          </a>
          <a href="/sarathi-dl-photo-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-semibold text-xs sm:text-sm hover:opacity-95 transition w-full sm:w-auto">
            Sarathi Photo Resizer (10-20 KB) &rarr;
          </a>
          <a href="/make-signature-background-white/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted text-foreground font-semibold text-xs sm:text-sm hover:bg-muted/80 transition w-full sm:w-auto">
            Clean Paper Background &rarr;
          </a>
        </div>
      </div>

      <h2>4-Step Parivahan Verification Checklist</h2>
      <div class="my-8 space-y-4">
        <div class="relative border-l-2 border-primary/30 ml-4 pl-6 space-y-6">
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">1</div>
            <h4 class="font-bold text-foreground text-sm">Sign on Unruled White Paper</h4>
            <p class="text-xs text-muted-foreground mt-1">Sign inside a 4.0 cm &times; 2.0 cm box using a black or dark blue ballpoint pen. Do not use lined school notebook paper.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">2</div>
            <h4 class="font-bold text-foreground text-sm">Maintain Natural Handwriting</h4>
            <p class="text-xs text-muted-foreground mt-1">Write your signature in running cursive script. Capital letter signatures are rejected by RTO scrutiny officers.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">3</div>
            <h4 class="font-bold text-foreground text-sm">Lock File Corridor to 12 KB – 18 KB</h4>
            <p class="text-xs text-muted-foreground mt-1">Target 15 KB on SignResize to ensure your file stays comfortably between the 10 KB and 20 KB boundaries after compression.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">4</div>
            <h4 class="font-bold text-foreground text-sm">Review Upload Preview on Sarathi</h4>
            <p class="text-xs text-muted-foreground mt-1">Check the on-screen preview box before clicking 'Confirm'. Ensure the photo and signature are oriented right side up.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    slug: "pan-card-signature-photo-resize-200-dpi-nsdl-utiitsl-guide",
    title: "PAN Card Signature & Photo Resize 2026: NSDL & UTIITSL 200 DPI Specifications",
    title_hi: "पैन कार्ड सिग्नेचर और फोटो रिसाइज 2026: NSDL और UTIITSL 200 DPI नियम",
    title_mr: "पॅन कार्ड स्वाक्षरी आणि फोटो रिसाइज 2026: NSDL आणि UTIITSL 200 DPI नियम",
    excerpt: "Complete 200 DPI guideline for NSDL/Protean and UTIITSL PAN Card applications: 213x213 px photo (under 50 KB), 400x200 px signature (under 20 KB), and black ink rules.",
    excerpt_hi: "NSDL और UTIITSL पैन कार्ड के लिए 200 DPI फोटो और सिग्नेचर साइज गाइड: 213x213 px फोटो (50 KB तक) और 400x200 px हस्ताक्षर (20 KB तक)।",
    excerpt_mr: "NSDL आणि UTIITSL पॅन कार्डसाठी 200 DPI फोटो आणि स्वाक्षरी नियम: 213x213 px फोटो आणि 400x200 px स्वाक्षरी रिसाइझ करा.",
    category: "Guidelines & Tips",
    publishDate: todayDate,
    lastUpdated: todayDate,
    author: "SignResize Examination Standards Desk",
    authorRole: "Identity Documents Verification Desk",
    readTime: "8 min read",
    featured: false,
    tags: ["PAN Card", "NSDL", "Protean", "UTIITSL", "200 DPI", "Signature 20KB", "Photo 50KB"],
    relatedExamPreset: "pan-card-nsdl",
    quickFacts: [
      { label: "Photo Resolution", value: "200 DPI (213 × 213 px, 3.5 × 2.5 cm)" },
      { label: "Photo Size Limit", value: "Strictly under 50 KB (JPG)" },
      { label: "Signature Resolution", value: "200 DPI (400 × 200 px, 2.0 × 4.5 cm)" },
      { label: "Signature Size Limit", value: "Strictly under 20 KB (JPG)" },
      { label: "Ink Requirement", value: "Dark Black Ballpoint Ink Only" }
    ],
    faqs: [
      {
        question: "Why does NSDL require 200 DPI for PAN card photos and signatures?",
        answer: "Income Tax Department specifications require 200 DPI (Dots Per Inch) scanning resolution so the digital image contains sufficient pixel density for high-definition laser printing on the physical PVC PAN card."
      },
      {
        question: "What is the exact signature size for PAN card application Form 49A?",
        answer: "The signature dimensions must be 2.0 cm height × 4.5 cm width (or 400 × 200 pixels at 200 DPI) and the file weight must be under 20 KB in JPEG/JPG format."
      },
      {
        question: "Can I use blue ink for my PAN card signature?",
        answer: "No. Income Tax Department rules strictly prescribe black ballpoint ink. Blue ink signatures often scan as pale grey on monochrome identity verification systems and lead to Form 49A rejection."
      },
      {
        question: "What are the photo dimensions for UTIITSL PAN portal?",
        answer: "UTIITSL mandates 213 × 213 pixels (3.5 cm × 2.5 cm) at 200 DPI with file size strictly under 50 KB in JPG format with white background."
      }
    ],
    contentHtml: `
      <h2>NSDL Protean &amp; UTIITSL 200 DPI Standard Explained</h2>
      <p>Whether applying for a new PAN card via <strong>Form 49A</strong> or updating details through <strong>CSF Correction Request</strong> on the NSDL (now Protean eGov) or UTIITSL portal, applicants must comply with strict 200 DPI scanning standards:</p>

      <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
        <div class="flex items-center justify-between text-slate-400 text-[11px]">
          <span>⚡ Income Tax Department Official Specification</span>
          <span>Protean / UTIITSL PAN Portal</span>
        </div>
        <pre class="overflow-x-auto text-emerald-400"><code>Photo Standard: 200 DPI | 3.5 cm x 2.5 cm (213 x 213 px) | File Size &le; 50 KB
Signature Standard: 200 DPI | 2.0 cm x 4.5 cm (400 x 200 px) | File Size &le; 20 KB | Black Ink Only</code></pre>
      </div>

      <p>Failure to meet the exact 200 DPI metadata or exceeding the 20 KB signature cap triggers the dreaded message: <em>"Incorrect image specification. Please re-upload according to guidelines."</em></p>

      <h2>PAN Card Document Specification Matrix</h2>
      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-3 border border-border">Attribute</th>
              <th class="p-3 border border-border">Applicant Photograph</th>
              <th class="p-3 border border-border">Applicant Signature</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border text-foreground">
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Maximum File Size</td>
              <td class="p-3 border border-border font-semibold text-primary">Under 50 KB</td>
              <td class="p-3 border border-border font-semibold text-primary">Under 20 KB (10–20 KB ideal)</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Resolution (DPI)</td>
              <td class="p-3 border border-border font-semibold">200 DPI</td>
              <td class="p-3 border border-border font-semibold">200 DPI</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Dimensions in Pixels</td>
              <td class="p-3 border border-border">213 &times; 213 px (Square)</td>
              <td class="p-3 border border-border">400 &times; 200 px (2:1 Ratio)</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Physical Dimensions</td>
              <td class="p-3 border border-border">3.5 cm &times; 2.5 cm</td>
              <td class="p-3 border border-border">2.0 cm &times; 4.5 cm</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Color Standard</td>
              <td class="p-3 border border-border">Color photo, white background</td>
              <td class="p-3 border border-border">Black ballpoint ink only</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Format PAN Card Signature &amp; Photo in Seconds</h4>
        <p class="text-xs sm:text-sm text-muted-foreground mt-1">Calibrated to official 200 DPI and exact pixel dimensions required by NSDL/Protean and UTIITSL portals.</p>
        <div class="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 mt-3">
          <a href="/pan-card-signature-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:opacity-95 transition w-full sm:w-auto">
            PAN Signature Resizer (Under 20 KB) &rarr;
          </a>
          <a href="/pan-card-photo-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-semibold text-xs sm:text-sm hover:opacity-95 transition w-full sm:w-auto">
            PAN Photo Resizer (213x213 px) &rarr;
          </a>
        </div>
      </div>

      <h2>Why Black Ink is Strictly Mandatory</h2>
      <p>Many applicants mistakenly sign using blue or gel ink pens. The physical PAN card manufacturing facility utilizes high-speed thermal transfer dye-sublimation printers. Blue ink exhibits significantly lower contrast under infrared scanning, resulting in incomplete signature outlines on the printed PVC card.</p>
      <p>Always draw a 4.5 cm &times; 2.0 cm box on clean white unruled paper and sign firmly with a black ballpoint pen.</p>
    `
  },
  {
    slug: "ssc-mts-havaldar-2026-photo-signature-live-webcam-guide",
    title: "SSC MTS & Havaldar 2026: Live Webcam Photo Rules, 10-20 KB Signature & CBT Strategy",
    title_hi: "SSC MTS और हवलदार 2026: लाइव वेबकैम फोटो नियम, 10-20 KB हस्ताक्षर और परीक्षा रणनीति",
    title_mr: "SSC MTS आणि हवालदार 2026: थेट वेबकॅम फोटो नियम, 10-20 KB स्वाक्षरी आणि तयारी",
    excerpt: "Official Staff Selection Commission guidelines for SSC MTS 2026: live camera face detection setup, MySSC app rules, 140x60 px signature resizing, and Tier-1 preparation roadmap.",
    excerpt_hi: "SSC MTS 2026 के लिए लाइव वेबकैम फोटो नियम, MySSC ऐप सेटअप, 140x60 px सिग्नेचर रिसाइज़ (10-20 KB) और सेशन-1 व सेशन-2 परीक्षा रणनीति।",
    excerpt_mr: "SSC MTS 2026 साठी लाइव्ह वेबकॅम फोटो नियम, 10-20 KB स्वाक्षरी आणि परीक्षा अभ्यासक्रम संपूर्ण माहिती.",
    category: "Exam Alerts",
    publishDate: todayDate,
    lastUpdated: todayDate,
    author: "SignResize Technical Verification Team",
    authorRole: "Staff Selection Commission Desk",
    readTime: "9 min read",
    featured: true,
    tags: ["SSC MTS", "SSC Havaldar", "Live Webcam Photo", "Signature 10-20KB", "MySSC App", "SSC CGL CHSL"],
    relatedExamPreset: "ssc-mts",
    quickFacts: [
      { label: "Photo Capture Mode", value: "Live Webcam / MySSC App (No File Upload)" },
      { label: "Signature Dimensions", value: "140 × 60 pixels (4.0 × 2.0 cm)" },
      { label: "Signature Size Limit", value: "Strictly 10 KB to 20 KB (JPG)" },
      { label: "Handwriting Rule", value: "Running Cursive Black Ink (No Block Capitals)" },
      { label: "Session-1 Marking", value: "No Negative Marking (Qualifying Only)" }
    ],
    faqs: [
      {
        question: "Can I upload a saved passport photo for SSC MTS on ssc.gov.in?",
        answer: "No. Under the updated SSC portal (ssc.gov.in), candidates cannot upload saved photo files. A live photograph must be captured in real-time using a laptop webcam or the official MySSC mobile application."
      },
      {
        question: "What is the required signature size for SSC MTS 2026?",
        answer: "The signature must be strictly between 10 KB and 20 KB in JPG/JPEG format with dimensions of 140 × 60 pixels (4.0 cm × 2.0 cm) in running cursive handwriting using a black ballpoint pen."
      },
      {
        question: "Why does the SSC live webcam capture show a red frame?",
        answer: "The red frame indicates face detection failure caused by backlight glare, wearing spectacles or caps, off-center positioning, or having other faces/mirrors visible in the camera frame."
      },
      {
        question: "Are capital letters permitted for SSC MTS signatures?",
        answer: "No. The Staff Selection Commission notice explicitly states that signatures written in capital or block letters will be rejected summarily."
      }
    ],
    contentHtml: `
      <h2>SSC MTS &amp; Havaldar 2026: Dual Compliance Standard</h2>
      <p>The Staff Selection Commission (SSC) enforces a dual-tier document validation protocol across <strong>SSC MTS (Multi-Tasking Non-Technical Staff)</strong> and <strong>Havaldar (CBIC &amp; CBN)</strong> recruitments on <code>ssc.gov.in</code>:</p>
      <ul>
        <li><strong>Photograph:</strong> Real-time live camera capture via desktop webcam or the MySSC Android app (stored passport photos are completely discontinued).</li>
        <li><strong>Scanned Signature:</strong> Standard scanned upload strictly constrained between <strong>10.0 KB and 20.0 KB</strong> in 140 &times; 60 pixel dimensions.</li>
      </ul>

      <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
        <div class="flex items-center justify-between text-slate-400 text-[11px]">
          <span>⚡ Staff Selection Commission Official Rejection Notice</span>
          <span>SSC MTS &amp; Havaldar Standard</span>
        </div>
        <pre class="overflow-x-auto text-rose-400"><code>Notice Clause 8.2: "Applications with blurred photographs, cap, spectacles, or
signatures in capital letters will be rejected summarily without any correspondence."</code></pre>
      </div>

      <h2>Troubleshooting SSC Live Webcam Face Detection</h2>
      <p>Candidates commonly get stuck with a persistent red bounding box while capturing their photo on <code>ssc.gov.in</code>. Follow these rules to turn the detection box green:</p>
      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-3 border border-border">Common Live Photo Trap</th>
              <th class="p-3 border border-border">Result on ssc.gov.in</th>
              <th class="p-3 border border-border">Official Corrective Fix</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border text-foreground">
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Wearing prescription spectacles</td>
              <td class="p-3 border border-border text-rose-500 font-semibold">Rejection / Face Occlusion</td>
              <td class="p-3 border border-border">Remove all spectacles, reading glasses, and contact lenses before capture.</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Backlight from window behind user</td>
              <td class="p-3 border border-border text-rose-500 font-semibold">Dark Silhouette</td>
              <td class="p-3 border border-border">Sit facing a light source so even light illuminates both sides of your face.</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Dark or pattern wallpaper background</td>
              <td class="p-3 border border-border text-rose-500 font-semibold">Background Complexity Error</td>
              <td class="p-3 border border-border">Sit against a plain white or light-coloured unadorned wall.</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Smiling with teeth visible</td>
              <td class="p-3 border border-border text-rose-500 font-semibold">Non-neutral Expression</td>
              <td class="p-3 border border-border">Maintain a completely neutral facial expression looking straight at the camera.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Prepare Your SSC MTS Signature Instantly</h4>
        <p class="text-xs sm:text-sm text-muted-foreground mt-1">Resize your signature to the exact 140&times;60 px format and 10–20 KB corridor required by SSC.</p>
        <div class="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 mt-3">
          <a href="/ssc-mts-signature-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:opacity-95 transition w-full sm:w-auto">
            SSC MTS Signature Resizer (10-20 KB) &rarr;
          </a>
          <a href="/live-webcam-photo-checker/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-semibold text-xs sm:text-sm hover:opacity-95 transition w-full sm:w-auto">
            Test Live Webcam Photo Preview &rarr;
          </a>
        </div>
      </div>

      <h2>SSC MTS CBT Exam Pattern: Session-1 vs Session-2 Strategy</h2>
      <p>The SSC MTS Computer Based Examination is split into two sessions conducted consecutively:</p>
      <ul>
        <li><strong>Session-1 (Qualifying Only):</strong> Numerical &amp; Mathematical Ability (20 Qs, 60 Marks) and Reasoning Ability (20 Qs, 60 Marks). Total 45 minutes with <em>zero negative marking</em>. Candidates only need to secure the qualifying threshold.</li>
        <li><strong>Session-2 (Merit Deciding):</strong> General Awareness (25 Qs, 75 Marks) and English Language &amp; Comprehension (25 Qs, 75 Marks). Total 45 minutes with <em>1 mark negative marking per incorrect answer</em>. Final merit for both MTS and Havaldar is formulated exclusively on Session-2 raw and normalized scores.</li>
      </ul>
    `
  },
  {
    slug: "ssc-reasoning-preparation-strategy-shortcuts-scoring-guide",
    title: "SSC Reasoning Master Formula: Syllogism, Coding-Decoding & 50/50 Scoring Tactics",
    title_hi: "SSC रीजनिंग मास्टर फॉर्मूला: सिलोजिज्म, कोडिंग-डिकोडिंग और 50/50 स्कोरिंग रणनीति",
    title_mr: "SSC रिझनिंग मास्टर स्ट्रॅटेजी: 50/50 गुण मिळवण्याचे सोपे फॉर्म्युले आणि ट्रिक्स",
    excerpt: "Comprehensive General Intelligence and Reasoning scoring blueprint for SSC CGL, CHSL and MTS. Question weightage, Venn diagram hacks, and speed test drills.",
    excerpt_hi: "SSC CGL, CHSL और MTS के लिए रीजनिंग में 50 में से 50 स्कोर करने की पूरी गाइड: सिलोजिज्म, कोडिंग-डिकोडिंग और स्पीड टेस्ट रणनीति।",
    excerpt_mr: "SSC परीक्षांसाठी रिझनिंग विषयाची सविस्तर तयारी, महत्त्वाचे चॅप्टर्स आणि शॉर्टकट ट्रिक्स.",
    category: "Study Prep",
    publishDate: todayDate,
    lastUpdated: todayDate,
    author: "SignResize Academic Research Desk",
    authorRole: "Competitive Examination Methodology Team",
    readTime: "8 min read",
    featured: false,
    tags: ["SSC Reasoning", "General Intelligence", "SSC CGL", "SSC CHSL", "Syllogism Hacks", "Study Prep"],
    relatedExamPreset: "ssc-general",
    quickFacts: [
      { label: "Target Tier-1 Score", value: "48 to 50 / 50 Marks" },
      { label: "Ideal Section Time", value: "14 to 17 Minutes (25 Questions)" },
      { label: "Negative Marking", value: "0.50 Marks per Wrong Answer (Tier-1)" },
      { label: "High-Yield Topics", value: "Coding-Decoding, Series, Syllogisms, Analogy" }
    ],
    faqs: [
      {
        question: "How much time should I spend on Reasoning in SSC CGL Tier-1?",
        answer: "Aim to complete all 25 reasoning questions in 15 to 17 minutes. This leaves adequate time for Quantitative Aptitude (25-28 mins), English (10-12 mins), and General Awareness (5-7 mins)."
      },
      {
        question: "What are the highest scoring chapters in SSC Reasoning?",
        answer: "Analogy, Classification, Coding-Decoding, Number/Alphabet Series, Syllogism, and Non-Verbal reasoning account for over 70% of the section marks."
      },
      {
        question: "How do I avoid negative marks in tricky Syllogisms?",
        answer: "Always draw strict minimal Venn diagrams. Never make unwarranted assumptions beyond the direct statement. A conclusion is true only if it holds across every conceivable Venn configuration."
      }
    ],
    contentHtml: `
      <h2>Why Reasoning is the Key to SSC Cut-Off Domination</h2>
      <p>Across <strong>SSC CGL, SSC CHSL, SSC CPO, and SSC MTS</strong>, General Intelligence &amp; Reasoning represents the highest return on time invested. Scoring <strong>45 to 50 out of 50</strong> is not only achievable but essential to survive intense cutoff competition.</p>

      <h2>SSC Tier-1 Reasoning Weightage Breakdown</h2>
      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-3 border border-border">Topic / Chapter</th>
              <th class="p-3 border border-border">Question Frequency</th>
              <th class="p-3 border border-border">Marks Weightage</th>
              <th class="p-3 border border-border">Difficulty Level</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border text-foreground">
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Coding-Decoding &amp; Letter Shifts</td>
              <td class="p-3 border border-border font-semibold">3 – 4 Questions</td>
              <td class="p-3 border border-border">6 – 8 Marks</td>
              <td class="p-3 border border-border text-emerald-600 font-semibold">Easy to Moderate</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Analogy &amp; Odd-One-Out (Verbal &amp; Number)</td>
              <td class="p-3 border border-border font-semibold">4 – 5 Questions</td>
              <td class="p-3 border border-border">8 – 10 Marks</td>
              <td class="p-3 border border-border text-emerald-600 font-semibold">Easy</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Syllogism (Statement &amp; Conclusions)</td>
              <td class="p-3 border border-border font-semibold">2 – 3 Questions</td>
              <td class="p-3 border border-border">4 – 6 Marks</td>
              <td class="p-3 border border-border text-amber-600 font-semibold">Moderate</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Mathematical Operations &amp; Signs</td>
              <td class="p-3 border border-border font-semibold">2 – 3 Questions</td>
              <td class="p-3 border border-border">4 – 6 Marks</td>
              <td class="p-3 border border-border text-emerald-600 font-semibold">Easy (BODMAS based)</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Non-Verbal (Paper Folding, Mirror, Hidden Figures)</td>
              <td class="p-3 border border-border font-semibold">3 – 4 Questions</td>
              <td class="p-3 border border-border">6 – 8 Marks</td>
              <td class="p-3 border border-border text-emerald-600 font-semibold">High Accuracy</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Venn Diagram Minimal Overlap Rules for Syllogisms</h2>
      <p>Syllogism questions test deductive validity. Apply these three cardinal rules to solve questions under 30 seconds:</p>
      <ul>
        <li><strong>Definite vs Possibility:</strong> If a conclusion uses words like <em>'is'</em> or <em>'are'</em>, it must be true in 100% of all possible diagrams. If even one valid counter-diagram shows no intersection, the conclusion is invalid.</li>
        <li><strong>Complementary Pair (Either-Or):</strong> If two conclusions share the same subject and predicate, one is affirmative ('Some A are B') and the other is negative ('No A are B'), and both are independently doubtful, select <strong>Either I or II follows</strong>.</li>
        <li><strong>Negative Statement Boundary:</strong> When a statement asserts 'No A is B', draw a solid line between circle A and circle B with a cross mark (&times;) to prevent visual overlap errors during rapid inspection.</li>
      </ul>

      <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Prepare Your SSC Exam Application Documents</h4>
        <p class="text-xs sm:text-sm text-muted-foreground mt-1">Get your 10–20 KB signature and photo ready for SSC CGL, CHSL, and MTS portals without rejection risk.</p>
        <div class="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 mt-3">
          <a href="/ssc-signature-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:opacity-95 transition w-full sm:w-auto">
            SSC Signature Resizer &rarr;
          </a>
          <a href="/ssc-mts-signature-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-semibold text-xs sm:text-sm hover:opacity-95 transition w-full sm:w-auto">
            SSC MTS Specific Tool &rarr;
          </a>
        </div>
      </div>
    `
  },
  {
    slug: "ib-acio-recruitment-2026-syllabus-salary-photo-signature-rules",
    title: "Intelligence Bureau (IB) ACIO Grade-II: Salary Slip, Tier-1 Syllabus, Tier-2 Essay & Photo Rules",
    title_hi: "इंटेलिजेंस ब्यूरो (IB) ACIO ग्रेड-II: सैलरी स्लिप, परीक्षा पैटर्न और फोटो-सिग्नेचर नियम",
    title_mr: "इंटेलिजन्स ब्युरो (IB) ACIO ग्रेड-II: पगार, परीक्षा स्वरूप आणि संपूर्ण माहिती",
    excerpt: "Exhaustive guide to MHA IB ACIO-II/Executive recruitment: Level 7 pay slip breakdown, 20% SSA allowance, Tier-1 & Tier-2 blueprint, and 10-50 KB photo-signature guidelines.",
    excerpt_hi: "गृह मंत्रालय इंटेलिजेंस ब्यूरो ACIO-II/Exe भर्ती 2026: पे लेवल-7 (₹85,000+ इन-हैंड), टीयर-1 व 2 सिलेबस और 10-50 KB डॉक्यूमेंट अपलोड नियम।",
    excerpt_mr: "IB ACIO ग्रेड-2 भरती 2026: वेतनश्रेणी, टीयर-1 आणि टीयर-2 अभ्यासक्रम व अर्ज कसा करावा संपूर्ण मार्गदर्शन.",
    category: "Career Opportunity",
    publishDate: todayDate,
    lastUpdated: todayDate,
    author: "SignResize Academic Research Desk",
    authorRole: "Intelligence & Security Recruitment Desk",
    readTime: "10 min read",
    featured: true,
    tags: ["IB ACIO", "Intelligence Bureau", "MHA Recruitment", "ACIO Salary", "Tier 1 Syllabus", "Photo 20-50KB", "Signature 10-50KB"],
    relatedExamPreset: "ib-acio",
    quickFacts: [
      { label: "Pay Matrix Level", value: "Level 7 (₹44,900 to ₹1,42,400) + 20% SSA" },
      { label: "Gross Monthly Salary", value: "Approx. ₹88,000 to ₹94,000 (X-City)" },
      { label: "Selection Stages", value: "Tier-1 (100 M) + Tier-2 (50 M) + Interview (100 M)" },
      { label: "Signature Size Limit", value: "10 KB to 50 KB (140 × 60 px, Black Ink)" },
      { label: "Photo Size Limit", value: "20 KB to 50 KB (35 × 45 mm, White Background)" }
    ],
    faqs: [
      {
        question: "What is the monthly in-hand salary of an IB ACIO Grade-II officer?",
        answer: "Under the 7th Central Pay Commission, IB ACIO-II is placed in Pay Level 7 with a basic pay of ₹44,900. With 50% Dearness Allowance (DA), 27% HRA (in X-category cities), and a mandatory 20% Special Security Allowance (SSA = ₹8,980), gross monthly pay reaches approximately ₹88,000 to ₹94,000, yielding a net in-hand salary of approximately ₹78,000 to ₹82,000."
      },
      {
        question: "What are the photo and signature specifications for the MHA IB ACIO portal?",
        answer: "The candidate photo must be a recent color passport image (35 mm × 45 mm, 20 KB to 50 KB in JPG) against a plain light/white background. The signature must be in black ballpoint ink on white paper, sized strictly between 10 KB and 50 KB with 140 × 60 pixel resolution."
      },
      {
        question: "What is the Tier-2 examination pattern for IB ACIO?",
        answer: "Tier-2 is a 1-hour descriptive paper carrying 50 marks. It includes an Essay on security/geo-political topics (30 marks) and English Comprehension & Precis Writing (20 marks). Candidates must score at least 33% (17 out of 50) to qualify."
      }
    ],
    contentHtml: `
      <h2>The Elite Intelligence Bureau ACIO Grade-II Profile</h2>
      <p>The <strong>Assistant Central Intelligence Officer (ACIO Grade-II / Executive)</strong> is a premier Group 'C' (Non-Gazetted, Non-Ministerial) post under the <strong>Intelligence Bureau, Ministry of Home Affairs (MHA)</strong>. Entrusted with domestic counter-intelligence, border surveillance, and strategic security intelligence, it is among the most sought-after careers for competitive exam aspirants.</p>

      <h2>7th CPC Salary Structure &amp; Special Security Allowance (SSA)</h2>
      <p>Unlike standard central government clerical or executive posts, IB ACIO officers receive specialized fiscal perks:</p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-3 border border-border">Salary Component</th>
              <th class="p-3 border border-border">7th Pay Commission Calculation</th>
              <th class="p-3 border border-border">Estimated Monthly Amount (X City)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border text-foreground">
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Basic Pay</td>
              <td class="p-3 border border-border">Level 7 Entry Scale</td>
              <td class="p-3 border border-border font-semibold">₹44,900</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Special Security Allowance (SSA)</td>
              <td class="p-3 border border-border">20% of Basic Pay (Mandatory IB Allowance)</td>
              <td class="p-3 border border-border font-semibold text-emerald-600">₹8,980</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Dearness Allowance (DA)</td>
              <td class="p-3 border border-border">50% of Basic Pay</td>
              <td class="p-3 border border-border font-semibold">₹22,450</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">House Rent Allowance (HRA)</td>
              <td class="p-3 border border-border">27% for X Category Metro Cities</td>
              <td class="p-3 border border-border font-semibold">₹12,123</td>
            </tr>
            <tr class="hover:bg-muted/50">
              <td class="p-3 font-medium border border-border">Transport Allowance (TPTA)</td>
              <td class="p-3 border border-border">Higher TPTA Cities (₹3,600 + DA)</td>
              <td class="p-3 border border-border font-semibold">₹5,400</td>
            </tr>
            <tr class="hover:bg-muted/50 font-bold bg-muted/30">
              <td class="p-3 border border-border">Total Estimated Gross Pay</td>
              <td class="p-3 border border-border">Subject to City Classification</td>
              <td class="p-3 border border-border text-primary font-bold">₹93,853</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="text-xs text-muted-foreground mt-2"><em>*Note: ACIO officers also receive cash compensation in lieu of duty performed on holidays, capped up to 30 days of salary annually (effectively creating a 13th month salary).</em></p>

      <h2>Document Upload Compliance on MHA Online Portal</h2>
      <p>The Ministry of Home Affairs registration portal enforces strict image constraints:</p>
      <ul>
        <li><strong>Photograph:</strong> Color passport photo taken within 12 weeks against a white background. Must be sized strictly between <strong>20 KB and 50 KB</strong> in JPG format. Glasses with reflections or caps lead to cancellation.</li>
        <li><strong>Candidate Signature:</strong> Must be signed in running handwriting on clean white paper using <strong>black ballpoint ink</strong>. File weight must be between <strong>10 KB and 50 KB</strong> with 140 &times; 60 pixel resolution.</li>
      </ul>

      <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Prepare Your IB ACIO Documents Instantly</h4>
        <p class="text-xs sm:text-sm text-muted-foreground mt-1">Resize your photo and signature to exact Ministry of Home Affairs specifications.</p>
        <div class="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 mt-3">
          <a href="/ib-acio-signature-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:opacity-95 transition w-full sm:w-auto">
            IB ACIO Signature Resizer (10-50 KB) &rarr;
          </a>
          <a href="/ib-acio-photo-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-semibold text-xs sm:text-sm hover:opacity-95 transition w-full sm:w-auto">
            IB ACIO Photo Resizer (20-50 KB) &rarr;
          </a>
        </div>
      </div>

      <h2>Three-Stage Selection Process Blueprint</h2>
      <div class="my-8 space-y-4">
        <div class="relative border-l-2 border-primary/30 ml-4 pl-6 space-y-6">
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">1</div>
            <h4 class="font-bold text-foreground text-sm">Tier-1 Written Exam (100 Marks / 60 Mins)</h4>
            <p class="text-xs text-muted-foreground mt-1">100 Multiple Choice Questions across 5 sections: Current Affairs (20), General Studies (20), Numerical Aptitude (20), Reasoning (20), and English (20). Negative marking is 1/4th mark per wrong attempt.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">2</div>
            <h4 class="font-bold text-foreground text-sm">Tier-2 Descriptive Paper (50 Marks / 60 Mins)</h4>
            <p class="text-xs text-muted-foreground mt-1">English Essay on Contemporary Geopolitical / Internal Security themes (30 Marks) and English Comprehension &amp; Precis Writing (20 Marks). Minimum qualifying score is 17 out of 50.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">3</div>
            <h4 class="font-bold text-foreground text-sm">Tier-3 Personal Interview &amp; Psychometric Test (100 Marks)</h4>
            <p class="text-xs text-muted-foreground mt-1">In-depth personality assessment, situational intelligence puzzles, and background security verification conducted by the MHA Special Board.</p>
          </div>
        </div>
      </div>
    `
  }
];

function formatBlogPost(post) {
  return `  {
    slug: ${JSON.stringify(post.slug)},
    title: ${JSON.stringify(post.title)},
    title_hi: ${JSON.stringify(post.title_hi)},
    title_mr: ${JSON.stringify(post.title_mr)},
    excerpt: ${JSON.stringify(post.excerpt)},
    excerpt_hi: ${JSON.stringify(post.excerpt_hi)},
    excerpt_mr: ${JSON.stringify(post.excerpt_mr)},
    category: ${JSON.stringify(post.category)},
    publishDate: ${JSON.stringify(post.publishDate)},
    lastUpdated: ${JSON.stringify(post.lastUpdated)},
    author: ${JSON.stringify(post.author)},
    authorRole: ${JSON.stringify(post.authorRole)},
    readTime: ${JSON.stringify(post.readTime)},
    featured: ${post.featured ? 'true' : 'false'},
    tags: ${JSON.stringify(post.tags)},
    relatedExamPreset: ${JSON.stringify(post.relatedExamPreset)},
    quickFacts: ${JSON.stringify(post.quickFacts)},
    faqs: ${JSON.stringify(post.faqs)},
    contentHtml: \`
${post.contentHtml.trim()}
    \`
  },`;
}

async function run() {
  const content = fs.readFileSync(dataFilePath, 'utf8');
  const marker = 'export const BLOG_POSTS: BlogPost[] = [';
  const markerIndex = content.indexOf(marker);

  if (markerIndex === -1) {
    throw new Error(`Marker "${marker}" not found in blogPostsData.ts`);
  }

  // Filter out any posts that already exist
  const newPostsToInsert = [];
  for (const p of WEEK1_POSTS) {
    if (content.includes(`slug: "${p.slug}"`) || content.includes(`slug: '${p.slug}'`)) {
      console.log(`Skipping already existing post: ${p.slug}`);
    } else {
      newPostsToInsert.push(p);
    }
  }

  if (newPostsToInsert.length === 0) {
    console.log('All Week 1 posts already exist!');
    return;
  }

  console.log(`Inserting ${newPostsToInsert.length} new Week 1 posts...`);
  const formattedPosts = newPostsToInsert.map(formatBlogPost).join('\n');
  const insertionPoint = markerIndex + marker.length;
  const updatedContent =
    content.slice(0, insertionPoint) +
    '\n' +
    formattedPosts +
    content.slice(insertionPoint);

  fs.writeFileSync(dataFilePath, updatedContent, 'utf8');
  console.log(`Successfully inserted ${newPostsToInsert.length} posts into blogPostsData.ts!`);
}

run().catch(console.error);
