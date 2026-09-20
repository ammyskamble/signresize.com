// scratch/build_full_blog_data.mjs
import fs from 'node:fs';
import path from 'node:path';

const outPath = path.resolve('src/data/blogPostsData.ts');

const posts = [];

// =========================================================================
// POST 1: SSC CGL 2026 Master Application & Preparation Guide
// =========================================================================
posts.push({
  slug: "ssc-cgl-2026-master-application-preparation-guide",
  title: "SSC CGL 2026 Master Application & Preparation Guide: Tier-1 Strategy, Photo/Signature Rules & Step-by-Step Portal Navigation",
  excerpt: "Comprehensive 2026 candidate handbook for Staff Selection Commission CGL: Tier-1 sectional breakdown, live webcam photo setup, 10-20KB signature rules, step-by-step portal navigation, and 90-day study timetable.",
  category: "Exam Alerts",
  publishDate: "Sept 18, 2026",
  lastUpdated: "Sept 20, 2026",
  author: "SignResize Examination Standards Desk",
  authorRole: "Staff Selection Commission Analytics Team",
  readTime: "9 min read",
  featured: true,
  tags: ["SSC CGL 2026", "Tier 1 Preparation", "Live Photo Rules", "Signature 10-20KB", "Govt Exam Strategy", "Portal Guide"],
  relatedExamPreset: "ssc-general",
  quickFacts: [
    { label: "Conducting Body", value: "Staff Selection Commission (SSC)" },
    { label: "Total Vacancies", value: "17,727 Posts (Group B & C)" },
    { label: "Application Last Date", value: "Sept 24, 2026 (23:00 Hrs)" },
    { label: "Correction Window", value: "Sept 27 – Sept 29, 2026" },
    { label: "Tier-1 CBT Window", value: "October – November 2026" },
    { label: "Signature Specs", value: "140×60 px, 10–20 KB, Black Ink" }
  ],
  contentHtml: `
    <section id="overview" class="space-y-4">
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
    </section>

    <section id="exam-pattern" class="space-y-4 mt-8">
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
    </section>

    <section id="document-specs" class="space-y-4 mt-8">
      <h2>Document Upload Compliance: SSC Live Photo &amp; Signature Standards</h2>
      <p>Under SSC's updated digital recruitment system, application scrutiny has automated strict compliance algorithms:</p>
      
      <div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-5 rounded-xl border border-border bg-card space-y-2">
          <h4 class="font-bold text-foreground text-sm flex items-center gap-2">
            <span>📷</span> 1. Live Webcam Photo Capture
          </h4>
          <p class="text-xs text-muted-foreground leading-relaxed">
            The new SSC portal captures candidate photographs via live webcam or mobile app camera. Candidates do NOT upload an image file. Ensure 80% face coverage against a light-colored background, well-diffused frontal lighting, and zero flash glare. Spectacles, hats, and religious headgear covering the facial profile are strictly forbidden.
          </p>
        </div>
        <div class="p-5 rounded-xl border border-border bg-card space-y-2">
          <h4 class="font-bold text-foreground text-sm flex items-center gap-2">
            <span>✍️</span> 2. Scanned Signature Upload (10–20 KB)
          </h4>
          <p class="text-xs text-muted-foreground leading-relaxed">
            Candidates must upload a cropped scanned signature on plain white paper in black ballpoint ink. Dimensions must strictly measure <strong>140 × 60 pixels</strong> with a file weight strictly between <strong>10.0 KB and 20.0 KB</strong> in JPG/JPEG. Signatures in CAPITAL / BLOCK letters or with grey shadow backgrounds will cause immediate cancellation.
          </p>
        </div>
      </div>

      <div class="my-6 p-5 rounded-2xl bg-rose-500/10 border-2 border-rose-500/30 space-y-2">
        <h4 class="font-bold text-rose-700 dark:text-rose-300 text-sm flex items-center gap-2">
          <span>⚠️</span> Common Application Rejection Pitfalls in SSC CGL
        </h4>
        <ul class="text-xs text-rose-900 dark:text-rose-200 space-y-1 list-disc pl-4">
          <li>Uploading signatures in blue gel pen or fountain pen with excessive ink bleeding.</li>
          <li>Signature image size below 9.9 KB or above 20.1 KB resulting in portal submission rejection.</li>
          <li>Taking live photo with sunglasses, eye spectacles with blue-cut glare, or shadow behind the head.</li>
          <li>Signing with initials or in capital block letters instead of continuous running script.</li>
        </ul>
      </div>

      <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Prepare Your SSC Signature in 30 Seconds</h4>
        <p class="text-sm text-muted-foreground mt-1">Our dedicated SSC preset automatically crops to 140×60 px, cleans smartphone paper shadows, and compresses strictly within 10–20 KB in your browser.</p>
        <a href="/ssc-signature-resize/" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">Open SSC Resizer Tool &rarr;</a>
      </div>
    </section>

    <section id="strategy" class="space-y-4 mt-8">
      <h2>High-Yield Preparation Strategy &amp; Daily Schedule</h2>
      <p>With 60 minutes to attempt 100 questions, success in SSC CGL is a test of speed, pattern recognition, and elimination. Allocate 6–8 hours daily divided into four targeted study blocks:</p>
      <ul>
        <li><strong>Morning Block (2.5 hrs):</strong> Quantitative Aptitude — 50 calculation drills, formula revision, and geometry/algebra theorems.</li>
        <li><strong>Midday Block (2 hrs):</strong> General Awareness &amp; Current Affairs — NCERT Polity, Static GK, and last 6 months current affairs summaries.</li>
        <li><strong>Afternoon Block (1.5 hrs):</strong> Reasoning &amp; Non-verbal logic puzzles.</li>
        <li><strong>Evening Block (2 hrs):</strong> Full-length mock test with 45 minutes of detailed error log analysis.</li>
      </ul>
    </section>
  `,
  faqs: [
    {
      question: "What is the educational qualification required for SSC CGL 2026?",
      answer: "Candidates must hold a Bachelor's Degree in any discipline from a recognized University or Institute before the prescribed cut-off date. For specialized positions like Assistant Audit Officer (AAO) or Junior Statistical Officer (JSO), additional academic prerequisites (such as CA/CS/M.Com or 60% in Mathematics at 12th standard) apply. Final-year students whose final results will be declared prior to the crucial date are eligible to register."
    },
    {
      question: "What is the exact signature specification for SSC CGL online application?",
      answer: "The signature must be scanned on plain white unruled paper using a dark black ballpoint pen. Dimensions must be exactly 140 pixels wide by 60 pixels high (aspect ratio ~4.0 cm × 2.0 cm), and the file size must strictly fall between 10.0 KB and 20.0 KB in JPG/JPEG format. Capital letter or block letter signatures are strictly prohibited and result in permanent application cancellation."
    },
    {
      question: "How does the SSC live webcam photograph capture work?",
      answer: "SSC no longer accepts uploaded passport photo files for CGL. Instead, during online registration on ssc.gov.in or the official MySSC app, candidates capture a live picture using their computer webcam or smartphone. The candidate's face must fill at least 80% of the camera frame with both ears clearly visible. The background must be light and shadow-free, and wearing spectacles, caps, or headwear that obscures the face is prohibited."
    },
    {
      question: "Does Tier-1 score count towards the final SSC CGL merit list?",
      answer: "No. Under the updated SSC CGL examination scheme, Tier-1 is purely qualifying in nature. Its score is used solely to shortlist candidates for Tier-2 (at approximately a 1:10 to 1:12 vacancy ratio). The final all-India merit list and ministry allocations are determined exclusively by candidates' aggregate performance in Tier-2 (Paper-I: Sections 1 & 2), subject to qualifying the Computer Knowledge Test (CKT) and Data Entry Speed Test (DEST)."
    },
    {
      question: "What are the negative marking rules in SSC CGL Tier-1 and Tier-2?",
      answer: "In Tier-1, a deduction of 0.50 marks is applied for each incorrect answer across all 4 sections. In Tier-2 Paper-I, each question carries 3 marks, and the negative marking penalty is 1 mark (33.3%) per wrong response. Unattempted questions carry zero penalty in both tiers."
    }
  ]
});

console.log('Post 1 generated.');
fs.writeFileSync(path.resolve('scratch/temp_post1.json'), JSON.stringify(posts[0], null, 2));
