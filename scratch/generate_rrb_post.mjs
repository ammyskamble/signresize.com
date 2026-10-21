import fs from 'fs';
import path from 'path';

const post = {
  slug: "ibps-rrb-po-prelims-mains-preparation-strategy-interview-guide",
  title: "IBPS RRB PO Preparation Strategy: Prelims, Mains and Interview Roadmap",
  title_hi: "IBPS RRB PO तैयारी रणनीति: प्रीलिम्स, मेन्स और इंटरव्यू का संपूर्ण रोडमैप",
  title_mr: "IBPS RRB PO तयारी रणनीती: पूर्व, मुख्य आणि मुलाखत संपूर्ण रोडमॅप",
  metaTitle: "IBPS RRB PO Preparation Strategy: Prelims, Mains & Interview Guide",
  metaTitle_hi: "IBPS RRB PO तैयारी रणनीति: प्रीलिम्स, मेन्स और इंटरव्यू गाइड",
  metaTitle_mr: "IBPS RRB PO तयारी रणनीती: पूर्व, मुख्य आणि मुलाखत संपूर्ण मार्गदर्शक",
  metaDescription: "Proven IBPS RRB PO strategy by a candidate who cleared Pre & Mains in 2024 & 2025. Reasoning 40/40, Quant order, Computer scoring, GA rules and interview traps.",
  metaDescription_hi: "2024 और 2025 में प्री और मेन्स पास करने वाले अभ्यर्थी की वास्तविक IBPS RRB PO रणनीति: रीजनिंग 40/40, क्वांट क्रम, कंप्यूटर और जीए नियम।",
  metaDescription_mr: "2024 आणि 2025 मध्ये पूर्व व मुख्य परीक्षा उत्तीर्ण उमेदवाराची खरी IBPS RRB PO रणनीती: रिझनिंग 40/40, क्वांट, संगणक आणि मुलाखत नियम.",
  excerpt: "A practical, verified IBPS RRB PO preparation blueprint by a candidate who cleared Prelims and Mains in both 2024 and 2025. Subject-wise attempt order, 40/40 Reasoning blueprint, GA video revision method, and key interview pitfalls to avoid.",
  excerpt_hi: "2024 और 2025 में लगातार प्रीलिम्स और मेन्स पास करने वाले अभ्यर्थी की प्रामाणिक IBPS RRB PO रणनीति। रीजनिंग 40/40, क्वांट क्रम, कंप्यूटर और इंटरव्यू गलतियों से बचाव।",
  excerpt_mr: "2024 आणि 2025 मध्ये सलग पूर्व व मुख्य परीक्षा उत्तीर्ण झालेल्या उमेदवाराची खरी IBPS RRB PO रणनीती. 40/40 रिझनिंग, क्वांट, संगणक आणि मुलाखत मार्गदर्शक.",
  category: "Study Prep",
  publishDate: "Oct 21, 2026",
  lastUpdated: "Oct 21, 2026",
  author: "SignResize Academic Research Desk",
  authorRole: "Competitive Banking Methodology Team",
  readTime: "9 min read",
  featured: true,
  tags: ["IBPS RRB PO", "Banking Exam Strategy", "Reasoning 40/40", "RRB PO Mains", "Banking Awareness", "Document Guidelines"],
  relatedExamPreset: "ibps-sbi",
  guideTool: { href: "/ibps-signature-resize/", label: "IBPS Signature & Photo Resizer" },
  quickFacts: [
    { label: "Prelims Structure", value: "80 Questions, 45 Minutes (Reasoning + Quant Only)" },
    { label: "Prelims English Section", value: "None (Zero English buffer in Prelims)" },
    { label: "Mains Total Marks", value: "200 Questions, 200 Marks, 120 Minutes Composite" },
    { label: "Scoring Game-Changers", value: "Computer Knowledge (20 Marks) & English (40 Marks)" },
    { label: "Current Affairs Window", value: "Last 4 Months (3x Video Revision Method)" },
    { label: "Final Selection Weightage", value: "80:20 Ratio (Mains Score : Interview Score)" }
  ],
  faqs: [
    {
      question: "Is paid coaching necessary to clear IBPS RRB PO Prelims and Mains?",
      answer: "No. ==Thousands of candidates, including repeat Mains qualifiers from high-cutoff states like Uttar Pradesh, clear IBPS RRB PO entirely through free YouTube lectures and consistent sectional mock analysis==. Platforms like YouTube offer complete playlists for Speed Maths (Harshal Agrawal), Reasoning (Sanjay Sir or Puneet Sir), English (Rani Ma'am or Nimisha Bansal Ma'am), Computer Knowledge (Sachin Arora Sir), and Current Affairs (Sheetal Ma'am)."
    },
    {
      question: "How can an aspirant score 40/40 in the RRB PO Reasoning Prelims section?",
      answer: "Achieving a perfect 40/40 in Reasoning requires ==isolating your weakest puzzle formats (such as floor-flat, uncertain linear rows, or blood relations) and practicing at least 4 sets of that exact puzzle type daily==. Additionally, always skip tricky 'meaningful word' questions until the very end and master question selection to avoid puzzle traps during the 45-minute sprint."
    },
    {
      question: "What is the recommended attempting order for Quantitative Aptitude in Prelims?",
      answer: "The highest-yield sequence is: ==1. Simplification and Approximation, 2. Wrong or Missing Number Series, 3. Quadratic Equations, 4. One straightforward Data Interpretation set, and 5. Selective high-accuracy Arithmetic questions== (Profit and Loss, Averages, Ages, Boats and Streams). If an arithmetic question or DI set takes over 45 seconds to compute, skip it immediately."
    },
    {
      question: "How should candidates prepare Current Affairs without getting overwhelmed by dense PDFs?",
      answer: "Rather than reading 100-page monthly PDFs that lead to fatigue and low retention, ==watch weekly and fortnightly Current Affairs video recaps at 1.5x or 2x speed, maintaining a log and revising every video at least 3 times==. Supplement this with focused monthly Banking Awareness and RBI/SEBI regulatory updates covering the 4 months preceding your exam."
    },
    {
      question: "Why do candidates fail the RRB PO Interview despite clearing the Mains cutoff?",
      answer: "The two primary causes are ==underestimating core Banking Awareness (such as Priority Sector Lending, RRB shareholding structures, NABARD, and KCC) and failing to review their undergraduate academic background==. Interview panels frequently ask in-depth technical questions related to your graduation discipline (e.g. Computer Science, Engineering, or Commerce) alongside rural banking scenarios."
    },
    {
      question: "What are the exact photo and signature upload requirements for IBPS RRB?",
      answer: "IBPS mandates a ==passport photograph of 20 KB to 50 KB (200x230 pixels, white background) and a signature of 10 KB to 20 KB (140x60 pixels, black ballpoint ink)==. IBPS strictly prohibits signatures in CAPITAL LETTERS. You must also upload a Left Thumb Impression (20-50 KB) and a Handwritten Declaration in English (50-100 KB)."
    }
  ],
  contentHtml: `
      <h2>Direct Verdict: The Realistic Path to IBPS RRB PO</h2>
      <p>Cracking the <strong>IBPS RRB Officer Scale 1 (PO)</strong> examination without expensive paid coaching is completely feasible. This comprehensive guide synthesizes verified empirical insights from a candidate who cleared both Prelims and Mains from <strong>Uttar Pradesh in the General Category</strong> across two consecutive recruitment cycles (2024 and 2025). By adhering to strict question selection in Prelims, exploiting Computer and English score boosters in Mains, and avoiding late-stage interview pitfalls, aspirants can secure selection with disciplined execution.</p>

      <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
        <div class="flex items-center justify-between text-slate-400 text-[11px]">
          <span>⚡ Empirical Candidate Benchmark Summary</span>
          <span>UP General Category</span>
        </div>
        <pre class="overflow-x-auto text-emerald-400"><code>Reasoning Prelims:  40 / 40 Score Achieved (Both 2024 &amp; 2025)
Mains Score Cushion: Maximize Computer (20M) + English (40M)
Current Affairs:     Last 4 Months | 3x Mandatory Video Revision
Fatal Pitfall:       Ignoring Banking Awareness &amp; Degree Background in Interview</code></pre>
      </div>

      <h2>⚡ 1. Exam Pattern &amp; Selection Journey Architecture</h2>
      <p>IBPS RRB PO features a distinct structure compared to standard IBPS PO and SBI PO exams. Most notably, <strong>there is no English Language section in the Prelims</strong>. This means you cannot rely on language skills to compensate for gaps in mathematical speed or logical deduction.</p>

      <div class="my-8 p-6 rounded-2xl bg-card border border-border">
        <h4 class="text-base font-bold text-foreground mb-4">IBPS RRB Officer Scale 1 Selection Funnel</h4>
        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-muted/40 border border-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-primary">Stage 1: Speed Sprint</span>
              <h5 class="text-sm font-bold text-foreground">Prelims Examination (80 Questions | 80 Marks | 45 Mins Composite)</h5>
              <p class="text-xs text-muted-foreground mt-0.5">Reasoning (40 Qs) + Quantitative Aptitude (40 Qs). Strict sectional cutoffs plus overall state cutoffs.</p>
            </div>
            <span class="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs shrink-0">Qualifying</span>
          </div>

          <div class="p-4 rounded-xl bg-muted/40 border border-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-primary">Stage 2: Knowledge &amp; Strategy</span>
              <h5 class="text-sm font-bold text-foreground">Mains Examination (200 Questions | 200 Marks | 120 Mins Composite)</h5>
              <p class="text-xs text-muted-foreground mt-0.5">Reasoning (50M), Quant (50M), GA (40M), English/Hindi (40M), Computer Knowledge (20M).</p>
            </div>
            <span class="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs shrink-0">80% Final Merit</span>
          </div>

          <div class="p-4 rounded-xl bg-muted/40 border border-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-primary">Stage 3: Personality &amp; Banking Domain</span>
              <h5 class="text-sm font-bold text-foreground">Personal Interview (100 Marks | Coordinated by Nodal RRBs &amp; NABARD)</h5>
              <p class="text-xs text-muted-foreground mt-0.5">Banking Awareness, Rural Economics, Priority Sector Lending, and Graduation Discipline Viva.</p>
            </div>
            <span class="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-xs shrink-0">20% Final Merit</span>
          </div>
        </div>
      </div>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-3 border-b">Section</th>
              <th class="p-3 border-b">Questions</th>
              <th class="p-3 border-b">Maximum Marks</th>
              <th class="p-3 border-b">Strategic Role</th>
              <th class="p-3 border-b">🏆 Target Score Range</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            <tr>
              <td class="p-3 font-semibold text-foreground">Reasoning (Prelims)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3">Primary scoring locomotive; zero margin for error</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">38 – 40 / 40</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-foreground">Quantitative Aptitude (Prelims)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3">Speed maths + fast DI selection; skip calculation traps</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">22 – 28 / 40</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-foreground">Reasoning (Mains)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">50 (1.25x weight)</td>
              <td class="p-3">Critical Reasoning + selective multi-variable puzzles</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">28 – 35 / 50</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-foreground">Quantitative Aptitude (Mains)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">50 (1.25x weight)</td>
              <td class="p-3">Concept-heavy Arithmetic, Caselets, and Data Sufficiency</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">18 – 24 / 50</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-foreground">English / Hindi Language (Mains)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">40 (1.0x weight)</td>
              <td class="p-3">Crucial cutoff enhancer; high accuracy in RC &amp; Error Spotting</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">28 – 34 / 40</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-foreground">Computer Knowledge (Mains)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">20 (0.5x weight)</td>
              <td class="p-3">High-yield conversion; 10 minutes investment for 16+ marks</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">14 – 18 / 20</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-foreground">General Awareness (Mains)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">40 (1.0x weight)</td>
              <td class="p-3">Rank decider; 4-month Current Affairs + RBI/Banking updates</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">20 – 28 / 40</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>📐 2. Prelims Killer Strategy: Scoring 40/40 in Reasoning &amp; Speed Quant</h2>
      <p>With an overall composite time limit of 45 minutes for 80 questions, time allocation is your primary tactical decision. You should dedicate approximately <strong>22 to 24 minutes to Reasoning</strong> and <strong>21 to 23 minutes to Quantitative Aptitude</strong>.</p>

      <h3>A. Reasoning Blueprint: The 40/40 Mindset</h3>
      <p>Reasoning is the section where high-scoring candidates build their qualification buffer. Achieving 40/40 is not a fluke; it is the product of disciplined topic-specific training:</p>
      <ul>
        <li><strong>Isolate Weak Puzzle Formats:</strong> Do not solve random puzzle compilations just to hit a daily counter. Identify your specific weak categories, such as floor with flat arrangements, uncertain parallel rows, year with age calculations, or blood relation integrated puzzles. Practice at least <strong>4 puzzles of your weakest type daily</strong> on platforms like Testbook practice sections.</li>
        <li><strong>Post-Attempt Error Analysis:</strong> Never simply review your final score. Examine every case you eliminated, the conditions you misread, and the specific step that consumed excessive seconds.</li>
        <li><strong>The 'Meaningful Word' Danger Zone:</strong> Single questions asking you to form meaningful four-letter words from letter combinations carry a disproportionate risk of negative marking. Always skip these initially and attempt them at the end. Use systematic letter permutation techniques (such as those taught on Maths Mania YouTube) to confirm all valid dictionary words before marking.</li>
        <li><strong>Recommended Mentors:</strong> Free YouTube sessions by <strong>Sanjay Sir</strong> or <strong>Puneet Sir</strong> are exceptional. Sanjay Sir's guidance on question selection, specifically knowing which puzzle to skip on sight, is invaluable.</li>
      </ul>

      <h3>B. Quantitative Aptitude: Execution Order &amp; Question Selection</h3>
      <p>In RRB PO Prelims, Quantitative Aptitude questions feature a slightly higher calculation load than clerical exams like SBI Clerk Prelims. Do not attempt questions in numerical order. Always execute in this strict five-phase hierarchy:</p>

      <div class="my-8 space-y-4">
        <div class="relative border-l-2 border-primary/30 ml-4 pl-6 space-y-6">
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">1</div>
            <h4 class="font-bold text-foreground text-sm">Simplification &amp; Approximation (Target: 4-5 Mins)</h4>
            <p class="text-xs text-muted-foreground mt-1">Solve all 5-6 questions immediately using Vedic maths, percentage-to-fraction conversions, and digital roots. If a single question exceeds 40 seconds, mark review and move forward.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">2</div>
            <h4 class="font-bold text-foreground text-sm">Quadratic Equations &amp; Number Series (Target: 4-5 Mins)</h4>
            <p class="text-xs text-muted-foreground mt-1">Solve signs-based quadratic equations in seconds. For Wrong Number Series, check difference of differences and multiplication patterns. Skip multi-tier prime cube patterns if not evident within 20 seconds.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">3</div>
            <h4 class="font-bold text-foreground text-sm">Primary Straightforward DI Set (Target: 5 Mins)</h4>
            <p class="text-xs text-muted-foreground mt-1">Pick the single cleanest Data Interpretation set (Table or Bar Chart with single-variable data). Avoid heavy multi-layered pie charts or missing tables during Prelims.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">4</div>
            <h4 class="font-bold text-foreground text-sm">High-Confidence Arithmetic Selection (Target: 6-7 Mins)</h4>
            <p class="text-xs text-muted-foreground mt-1">Target core standard topics: Profit &amp; Loss, Simple/Compound Interest, Problems on Ages, Averages, Boats &amp; Streams, and standard 2D Mensuration. Never enter an exam ignoring Arithmetic, because the exact same concepts govern Mains DI.</p>
          </div>
        </div>
      </div>

      <p>For Quant preparation, <strong>Harshal Agrawal</strong> on YouTube is universally recognized by successful candidates for clarity in concept application and shortcut efficiency.</p>

      <h2>⚖️ 3. Mains Subject-by-Subject Blueprint: Scoring High When Quant is Average</h2>
      <p>The biggest tactical error made by banking aspirants is preparing for Mains as if it were simply a larger Prelims. In Mains, the composite 2-hour window requires a clear subject-wise scoring priority:</p>
      <blockquote>
        <strong>The Mains Golden Rule:</strong> If your Quantitative Aptitude and advanced Reasoning abilities are average, maximize your scores in <strong>English Language and Computer Knowledge</strong>, maintain competitive baseline scores in Quant and Reasoning, and let <strong>General Awareness (GA)</strong> drive your merit ranking above the state cutoff.
      </blockquote>

      <h3>1. Reasoning in Mains (50 Marks Weighted)</h3>
      <p>With a 1.25 multiplier per question, Reasoning yields substantial score acceleration. However, labyrinthine puzzles can consume 12 minutes without producing a completed answer. To safeguard your score:</p>
      <ul>
        <li>Master <strong>Critical Reasoning (Statement &amp; Assumption, Course of Action, Cause &amp; Effect)</strong>. Free sessions by Harshal Agrawal on YouTube provide structured clarity. These questions are direct, text-based, and take under 45 seconds each.</li>
        <li>Solve 2 to 3 manageable Mains puzzles while firmly skipping trap questions with 3+ unknown parameters.</li>
      </ul>

      <h3>2. Quantitative Aptitude in Mains (50 Marks Weighted)</h3>
      <p>Do not waste preparation weeks attempting extreme CAT-level mathematics. Focus on standard Mains patterns: Arithmetic Data Interpretation, Caselets, and Data Sufficiency. A score of 20 to 24 marks in Mains Quant is completely competitive when balanced by high language and computer scores.</p>

      <h3>3. English Language (40 Marks): Follow Rani Ma'am</h3>
      <p>Mains English cannot be cleared on casual intuition. Questions feature convoluted sentence rearrangements, contextual vocabulary, and multi-paragraph reading comprehensions. Consistent practice with <strong>Rani Ma'am</strong> (or Nimisha Bansal Ma'am) helps develop the reading stamina required to digest complex editorial passages under clock pressure.</p>

      <h3>4. Computer Knowledge (20 Marks / 40 Questions): Follow Sachin Arora Sir</h3>
      <p>Computer Knowledge is the single highest return on investment in the RRB PO syllabus. Many candidates make the mistake of leaving it until the final 5 days before the exam. Following <strong>Sachin Arora Sir</strong> on YouTube allows you to methodically cover MS Office shortcuts, OSI model layers, networking topologies, database management basics (DBMS), and cybersecurity terms. A candidate scoring 16/20 in Computer gains a decisive edge over peers scoring 7 or 8.</p>

      <h3>5. General Awareness: The 3x Video Revision Rule</h3>
      <p>General Awareness in RRB PO is notoriously analytical and covers deep banking operations. Aspirants often struggle when trying to read 120-page monthly compilation PDFs, resulting in information overload, fatigue, and poor recall on exam day. The verified alternative method is structured video revision:</p>
      <ul>
        <li><strong>Follow Sheetal Ma'am (YouTube):</strong> Her weekly and fortnightly video wrap-ups provide balanced, syllabus-focused coverage without unnecessary clutter.</li>
        <li><strong>Playback at 1.5x / 2x Speed:</strong> Watch weekly and fortnightly sessions at accelerated playback to cover extensive material efficiently.</li>
        <li><strong>The 3-Time Revision Rule:</strong> Merely watching a lecture once does not equal preparation. Every lecture must be revised at least three times before the exam to lock names, figures, and scheme dates into memory.</li>
        <li><strong>The 4-Month Time Window:</strong> Focus thoroughly on the 4 months immediately preceding the exam date. For a December examination, master September, October, November, and the first 10 days of December.</li>
        <li><strong>Dedicated Banking &amp; Regulatory Focus:</strong> Supplement general news with monthly recaps of RBI notifications, Priority Sector Lending (PSL) rules, NABARD guidelines, and SEBI regulations.</li>
      </ul>

      <h2>💡 4. The Interview Trap: Banking Awareness &amp; Academic Background Defense</h2>
      <p>Reaching the interview stage twice in a row without final selection is an agonizing reality faced by many serious aspirants. Understanding why this happens provides a vital strategic lesson:</p>

      <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-red-500/10 to-card border-2 border-red-500/30">
        <h4 class="text-base font-bold text-foreground">⚠️ The Two Deadly Interview Vulnerabilities</h4>
        <p class="text-sm text-muted-foreground mt-2">1. <strong>Postponing Banking Awareness:</strong> Many candidates defer studying core banking principles until after the Mains results are declared. In RRB interviews, the panel expects deep familiarity with rural banking infrastructure: Regional Rural Bank shareholding ratios (Central Govt 50%, Sponsor Bank 35%, State Govt 15%), Kisan Credit Card (KCC) limits, Lead Bank Scheme, and SHG bank linkage models.</p>
        <p class="text-sm text-muted-foreground mt-2">2. <strong>Underestimating Academic Discipline Viva:</strong> Candidates with technical or professional degrees (such as B.Tech Computer Science, IT, or Commerce) frequently face rigorous probing on their graduation subjects. If you have a CS background, expect questions on DBMS queries, API architectures in core banking systems, cyber security in online banking, and encryption algorithms. Prepare concise, confident answers explaining how your graduation degree directly benefits rural banking digitization.</p>
      </div>

      <h2>📋 5. Official IBPS RRB Document Upload Compliance Checklist</h2>
      <p>Before entering the examination hall, your application form must pass automated intake servers without discrepancy. IBPS portals employ automated file filters that reject non-compliant documents:</p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-3 border-b">Document</th>
              <th class="p-3 border-b">File Size Bounds</th>
              <th class="p-3 border-b">Pixel Dimensions</th>
              <th class="p-3 border-b">Official Mandatory Rules</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            <tr>
              <td class="p-3 font-semibold text-primary">Passport Photograph</td>
              <td class="p-3 font-mono">20 KB – 50 KB</td>
              <td class="p-3 font-mono">200 &times; 230 px (3.5 &times; 4.5 cm)</td>
              <td class="p-3">Light or white background; clear face; no tinted glasses or caps</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">Signature File</td>
              <td class="p-3 font-mono">10 KB – 20 KB</td>
              <td class="p-3 font-mono">140 &times; 60 px (4 &times; 2 cm)</td>
              <td class="p-3">Black ballpoint pen on white paper; <strong>CAPITAL LETTERS STRICTLY REJECTED</strong></td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">Left Thumb Impression (LTI)</td>
              <td class="p-3 font-mono">20 KB – 50 KB</td>
              <td class="p-3 font-mono">240 &times; 240 px (3 &times; 3 cm, 200 DPI)</td>
              <td class="p-3">Blue or black ink on white paper; smudge-free ridge lines</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">Handwritten Declaration</td>
              <td class="p-3 font-mono">50 KB – 100 KB</td>
              <td class="p-3 font-mono">800 &times; 400 px (10 &times; 5 cm)</td>
              <td class="p-3">Strictly candidate's own English handwriting; black ink only; NO BLOCK CAPITALS</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Prepare Your IBPS RRB Documents in 1 Click</h4>
        <p class="text-sm text-muted-foreground mt-1">Resize and compress your photograph, signature, left thumb impression, and handwritten declaration to exact official IBPS specifications in seconds with 100% client-side privacy.</p>
        <div class="flex flex-wrap gap-3 mt-4">
          <a href="/ibps-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
            IBPS Signature Resizer (10–20 KB) &rarr;
          </a>
          <a href="/photo-resizer/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition">
            Passport Photo Resizer (20–50 KB) &rarr;
          </a>
          <a href="/handwritten-declaration-resizer/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition">
            Declaration Resizer (50–100 KB) &rarr;
          </a>
        </div>
      </div>

      <h2>Summary: The Candidate's 4 Core Action Items</h2>
      <ol class="space-y-2 my-4">
        <li><strong>Prelims:</strong> Target 40/40 in Reasoning by isolating weak puzzle types daily. In Quant, follow the strict 5-stage triage and skip arithmetic traps taking over 45 seconds.</li>
        <li><strong>Mains Scoring Cushion:</strong> Exploit Computer Knowledge (Sachin Arora Sir) and English (Rani Ma'am) to build an insurmountable margin above sectional cutoffs.</li>
        <li><strong>GA Retention:</strong> Replace fatiguing 100-page monthly PDFs with Sheetal Ma'am's weekly videos at 1.5x/2x speed, enforcing the 3x revision rule across the 4 months preceding the exam.</li>
        <li><strong>Interview Shield:</strong> Never postpone Banking Awareness and degree viva prep until the Mains result. Build your banking concepts in parallel to secure final allotment.</li>
      </ol>
  `
};

// Now let's write this post into src/data/blogPostsData.ts
const dataFilePath = path.resolve('src/data/blogPostsData.ts');
let fileContent = fs.readFileSync(dataFilePath, 'utf8');

// Check if slug already exists
if (fileContent.includes(post.slug)) {
  console.log(`Slug ${post.slug} already exists!`);
  process.exit(0);
}

// Convert post object to formatted code
const postTs = `  {
    slug: ${JSON.stringify(post.slug)},
    title: ${JSON.stringify(post.title)},
    title_hi: ${JSON.stringify(post.title_hi)},
    title_mr: ${JSON.stringify(post.title_mr)},
    metaTitle: ${JSON.stringify(post.metaTitle)},
    metaTitle_hi: ${JSON.stringify(post.metaTitle_hi)},
    metaTitle_mr: ${JSON.stringify(post.metaTitle_mr)},
    metaDescription: ${JSON.stringify(post.metaDescription)},
    metaDescription_hi: ${JSON.stringify(post.metaDescription_hi)},
    metaDescription_mr: ${JSON.stringify(post.metaDescription_mr)},
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
    guideTool: ${JSON.stringify(post.guideTool)},
    quickFacts: ${JSON.stringify(post.quickFacts, null, 6)},
    faqs: ${JSON.stringify(post.faqs, null, 6)},
    contentHtml: \`
${post.contentHtml.trim()}
    \`
  },
`;

const marker = 'export const BLOG_POSTS: BlogPost[] = [';
const markerIndex = fileContent.indexOf(marker);
if (markerIndex === -1) {
  throw new Error('Marker not found!');
}

const insertionPoint = markerIndex + marker.length;
const updatedContent = fileContent.slice(0, insertionPoint) + '\n' + postTs + fileContent.slice(insertionPoint);

fs.writeFileSync(dataFilePath, updatedContent, 'utf8');
console.log('Successfully inserted new blog post:', post.slug);
