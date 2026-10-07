// scratch/add_mp_police_blog_post.mjs
import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/blogPostsData.ts');
let fileContent = fs.readFileSync(filePath, 'utf-8');

const mpPolicePost = `  {
    slug: "mp-police-constable-2026-vacancy-syllabus-physical-chart-salary",
    title: "MP Police Constable 2026: Vacancy, Syllabus, Physical Chart & Salary Guide",
    metaTitle: "MP Police Constable 2026: Syllabus, Physical & Cut-Off",
    metaDescription: "Complete guide to MP Police Constable 2026 recruitment: CBT syllabus, 100-mark physical chart, salary matrix, admit card download, and document upload rules.",
    excerpt: "Complete candidate blueprint for MP Police Constable 2026: 100-mark CBT syllabus, 100-mark PET physical chart, height criteria, salary matrix, admit card steps, and document resize guidelines.",
    category: "Study Prep",
    country: "IN",
    publishDate: "Oct 07, 2026",
    lastUpdated: "Oct 07, 2026",
    author: "SignResize Academic Research Desk",
    authorRole: "Police Recruitment & Physical Standards Analyst",
    readTime: "9 min read",
    featured: true,
    tags: [
      "MP Police 2026",
      "MP Police Constable",
      "MP Police Syllabus",
      "Physical Chart 100 Marks",
      "MP Police Salary",
      "MPESB Vyapam",
      "Admit Card Download",
      "Document Guidelines"
    ],
    relatedExamPreset: "mp-police-constable",
    quickFacts: [
      { label: "Conducting Body", value: "Madhya Pradesh Employees Selection Board (MPESB / Vyapam)" },
      { label: "Total Selection Marks", value: "200 Marks (100 Marks Written CBT + 100 Marks PET Physical)" },
      { label: "Written Exam Pattern", value: "100 MCQs | 120 Minutes | No Negative Marking" },
      { label: "Physical Efficiency Test", value: "800m Run (40 Marks), Long Jump (30 Marks), Shot Put (30 Marks)" },
      { label: "Male Height Standard", value: "168 cm (General/OBC/SC), 160 cm (ST)" },
      { label: "Female Height Standard", value: "155 cm (All Categories)" },
      { label: "Basic Pay Scale", value: "₹19,500 – ₹62,000 (Level 4, 7th Pay Matrix)" },
      { label: "Official Web Portal", value: "esb.mp.gov.in / peb.mp.gov.in" }
    ],
    faqs: [
      {
        question: "MP police me hight kitni chahiye (What is the height requirement for MP Police)?",
        answer: "==For male candidates in General, OBC, and SC categories, the minimum required height is 168 cm with a chest of 81 cm unexpanded and 86 cm expanded. For ST male candidates, the height requirement is 160 cm with a chest of 76–81 cm. For all female candidates across every category, the minimum required height is 155 cm with no chest measurement criteria.=="
      },
      {
        question: "MP police me running kitni hoti hai (What is the 800m running duration and marks)?",
        answer: "==MP Police Constable PET requires an 800-meter run carrying a maximum of 40 marks. Male candidates scoring the full 40 marks must clock 124 seconds or less (2 minutes 04 seconds), while completing the run in 198 seconds grants the minimum baseline score. For female candidates, the maximum 40 marks are awarded for finishing in 176 seconds or less.=="
      },
      {
        question: "MP police ka syllabus kya hai (What is the MP Police written exam syllabus)?",
        answer: "==The MP Police Constable written CBT consists of 100 objective questions for 100 marks with zero negative marking. The subject weightage includes: General Knowledge and Reasoning (40 marks), Intellectual Ability and Mental Aptitude (30 marks), and Science and Simple Arithmetic (30 marks). The exam duration is 120 minutes.=="
      },
      {
        question: "MP police constable ki salary kitni hoti hai (What is the in-hand salary)?",
        answer: "==MP Police Constable falls under Pay Matrix Level 4 with a basic pay scale of ₹19,500 to ₹62,000. In addition to basic pay, constables receive Dearness Allowance (DA at 50%), House Rent Allowance (HRA at 9% to 27%), Uniform Allowance, Ration Allowance, and Kit Maintenance. The starting gross salary is approximately ₹31,500, resulting in a net monthly in-hand salary of approximately ₹26,500 to ₹28,500.=="
      },
      {
        question: "MP police ka admit card kaise nikale (How to download MP Police Admit Card)?",
        answer: "==Visit the official MPESB portal at esb.mp.gov.in, select your preferred language (English/Hindi), click on the 'Test Admit Card: Police Constable Recruitment' link, enter your 13-digit Application Number, Date of Birth (DD/MM/YYYY), first 2 letters of mother's name plus the last 4 digits of your Aadhaar Number, solve the security captcha, and download your hall ticket.=="
      },
      {
        question: "MP police constable me kitne number chahiye (What is the safe qualifying cut-off)?",
        answer: "==Because final selection is calculated on a 200-mark aggregate (100 marks CBT + 100 marks Physical PET), candidates should target a combined score of 145 to 155 marks for the General/UR category, 138 to 148 marks for OBC, 130 to 140 marks for SC, and 120 to 130 marks for ST. For the written CBT stage alone, targeting 75+ out of 100 marks ensures qualification for the physical test.=="
      },
      {
        question: "MP police verification process me kya hota hai (How is Police Verification conducted)?",
        answer: "==Police verification takes place after provisional merit selection. Candidates submit the official Character and Antecedent Verification Form (Anubraman Patra) detailing permanent residence, educational records, and references. The local police station in the candidate's jurisdiction verifies criminal records, court cases, FIR status, and character standing before dispatching the clean report to Police Headquarters.=="
      },
      {
        question: "MP police 2026 vacancy kab aayegi (When will the 2026 recruitment notification release)?",
        answer: "==The Madhya Pradesh Employees Selection Board (MPESB) publishes police recruitment notifications in accordance with Police Headquarters requisition cycles. Updates and rulebooks are hosted directly on esb.mp.gov.in. Candidates should monitor the official exam calendar released each January and keep their digital document templates ready.=="
      }
    ],
    contentHtml: \`
      <div class="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
        <h4 class="font-bold text-primary mb-2">⚡ Direct Answer: MP Police Constable 2026 Selection Blueprint</h4>
        <p class="text-sm text-foreground/90 leading-relaxed">
          The Madhya Pradesh Police Constable recruitment is administered by the <strong>Madhya Pradesh Employees Selection Board (MPESB / Vyapam)</strong> across a two-tier <strong>200-mark evaluation system</strong>. Candidates undergo a 100-mark Computer-Based Test (CBT) covering GK, Reasoning, Arithmetic, and Science, followed by a revolutionary 100-mark Physical Efficiency Test (PET) comprising an 800m run (40 marks), Long Jump (30 marks), and Shot Put (30 marks). Final appointment follows strict document verification, medical clearance, and local police character verification.
        </p>
      </div>

      <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
        <div class="flex items-center justify-between text-slate-400 text-[11px]">
          <span>⚡ MP Police Scoring &amp; Merit Formula</span>
          <span>Official MPESB Rulebook Standard</span>
        </div>
        <pre class="overflow-x-auto text-emerald-400"><code>Total Final Score = CBT Score (Max 100 Marks) + PET Physical Score (Max 100 Marks)
Selection Ratio for PET: 7 Times the Vacancy Count per Category
Written Negative Marking: 0.00 (Zero Negative Marks)</code></pre>
      </div>

      <h2>⚡ 1. MP Police Recruitment 2025–2026 Snapshot &amp; Cadres</h2>
      <p>
        The Madhya Pradesh Police force offers diverse operational assignments across Executive, Armed, and Technical branches. Recruitment drives conducted by MPESB cover multiple functional branches, each with distinct physical benchmarks and technical requirements:
      </p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground">
              <th class="p-3 border border-border">Recruitment Cadre</th>
              <th class="p-3 border border-border">Educational Qualification</th>
              <th class="p-3 border border-border">Age Bracket (General)</th>
              <th class="p-3 border border-border">Selection Stages</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Constable (GD) – DEF (District Executive Force)</td>
              <td class="p-3 border border-border">10th Class Passed (8th for ST candidates)</td>
              <td class="p-3 border border-border">18 to 33 Years (+ State relaxations)</td>
              <td class="p-3 border border-border">CBT (100) + PET (100) + Medical</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Constable (GD) – SAF (Special Armed Force)</td>
              <td class="p-3 border border-border">10th Class Passed from recognized Board</td>
              <td class="p-3 border border-border">18 to 33 Years (+ State relaxations)</td>
              <td class="p-3 border border-border">CBT (100) + PET (100) + Medical</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Constable (Radio Operator)</td>
              <td class="p-3 border border-border">12th Pass + 2-Yr ITI / Polytechnic Diploma in Electronics/IT</td>
              <td class="p-3 border border-border">18 to 33 Years (+ State relaxations)</td>
              <td class="p-3 border border-border">CBT Paper 1 + Technical Paper 2 + PET (Qualifying)</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Constable (Band / Bugler / Armorer)</td>
              <td class="p-3 border border-border">10th Pass + Trade Proficiency in Musical Band</td>
              <td class="p-3 border border-border">18 to 33 Years (+ State relaxations)</td>
              <td class="p-3 border border-border">CBT (100) + Trade Test + PET</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Candidates planning their application must ensure their digital documents conform precisely to official guidelines. You can generate certified uploads instantly using our free tools for 
        <a href="/mp-police-photo-resize/" class="text-primary font-semibold underline hover:text-primary/80">MP Police Photo Resize</a> 
        and 
        <a href="/mp-police-signature-resize/" class="text-primary font-semibold underline hover:text-primary/80">MP Police Signature Resize</a>, 
        or verify guidelines across other state exams via our comprehensive 
        <a href="/government-jobs/" class="text-primary font-semibold underline hover:text-primary/80">Government Job Portal</a>.
      </p>

      <h2>📚 2. Written CBT Exam Pattern, Subject Weightage &amp; Preparation Routine</h2>
      <p>
        The written examination is administered as a single Computer-Based Test lasting 120 minutes (2 hours). One mark is awarded for every correct answer, and notably, <strong>there is no negative marking</strong> for incorrect responses.
      </p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground">
              <th class="p-3 border border-border">Subject Section</th>
              <th class="p-3 border border-border">Question Count</th>
              <th class="p-3 border border-border">Maximum Marks</th>
              <th class="p-3 border border-border">High-Yield Focus Areas</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">General Knowledge &amp; Reasoning</td>
              <td class="p-3 border border-border">40 Questions</td>
              <td class="p-3 border border-border">40 Marks</td>
              <td class="p-3 border border-border">MP Static GK, Rivers, Forts, National Parks, Current Affairs, Analogies, Blood Relations</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Intellectual Ability &amp; Mental Aptitude</td>
              <td class="p-3 border border-border">30 Questions</td>
              <td class="p-3 border border-border">30 Marks</td>
              <td class="p-3 border border-border">Syllogisms, Coding-Decoding, Non-Verbal Series, Venn Diagrams, Direction Sense</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Science &amp; Simple Arithmetic</td>
              <td class="p-3 border border-border">30 Questions</td>
              <td class="p-3 border border-border">30 Marks</td>
              <td class="p-3 border border-border">Class 10th Physics, Chemistry, Biology, Percentages, Ratio, Profit &amp; Loss, Mensuration</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted font-bold text-foreground">
              <td class="p-3 border border-border">Total Examination</td>
              <td class="p-3 border border-border">100 Questions</td>
              <td class="p-3 border border-border">100 Marks</td>
              <td class="p-3 border border-border">Duration: 120 Minutes (No Negative Marking)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Strategic 90-Day Daily Study Routine</h3>
      <p>
        Candidates asking <em>"mp police ki taiyari kaise karen"</em> should implement a structured tripartite daily routine:
      </p>
      <ul>
        <li><strong>Morning Block (6:00 AM – 8:30 AM):</strong> Track training for the 800m running and long jump. Conditioning muscles early prevents burnout during evening study sessions.</li>
        <li><strong>Midday Block (11:00 AM – 2:00 PM):</strong> Quantitative Aptitude and Reasoning practice. Solve 40 daily arithmetic questions covering Number Systems, Speed-Time-Distance, and LCM-HCF.</li>
        <li><strong>Evening Block (5:00 PM – 8:00 PM):</strong> Madhya Pradesh State GK and General Science. Focus heavily on MP geography, district history, tribal culture, and Class 10 NCERT science formulas.</li>
        <li><strong>Night Review (9:30 PM – 10:30 PM):</strong> Timed sectional mock test or previous years' MPESB Constable question paper analysis.</li>
      </ul>

      <h2>🏃 3. Physical Standards (PST) &amp; 100-Mark PET Scoring Chart</h2>
      <p>
        The Physical Efficiency Test (PET) for MP Police Constable is unique among Indian state forces: <strong>it carries 100 marks that directly determine the final merit rank</strong>. Underperforming in the physical events cannot be compensated by written exam marks alone.
      </p>

      <h3>Physical Standard Test (PST) Minimum Benchmarks</h3>
      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground">
              <th class="p-3 border border-border">Candidate Category</th>
              <th class="p-3 border border-border">Minimum Height</th>
              <th class="p-3 border border-border">Chest (Unexpanded)</th>
              <th class="p-3 border border-border">Chest (Expanded)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Male (UR / OBC / SC)</td>
              <td class="p-3 border border-border">168 cm</td>
              <td class="p-3 border border-border">81 cm</td>
              <td class="p-3 border border-border">86 cm (Minimum 5 cm expansion)</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Male (ST - Scheduled Tribe)</td>
              <td class="p-3 border border-border">160 cm</td>
              <td class="p-3 border border-border">76 cm</td>
              <td class="p-3 border border-border">81 cm (Minimum 5 cm expansion)</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Female (All Categories - UR, OBC, SC, ST)</td>
              <td class="p-3 border border-border">155 cm</td>
              <td class="p-3 border border-border">Not Applicable</td>
              <td class="p-3 border border-border">Not Applicable</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Official 100-Mark PET Scoring Chart</h3>
      <p>
        The 100 marks of the Physical Efficiency Test are split into three competitive sporting events:
      </p>
      <ul>
        <li><strong>800-Meter Run:</strong> Maximum 40 Marks (Single attempt only)</li>
        <li><strong>Long Jump:</strong> Maximum 30 Marks (Three attempts permitted, best score counted)</li>
        <li><strong>Shot Put:</strong> Maximum 30 Marks (Weight: 7.260 kg for Men, 4.0 kg for Women; three attempts permitted)</li>
      </ul>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground">
              <th class="p-3 border border-border">Scored Marks</th>
              <th class="p-3 border border-border">800m Run: Men (Seconds)</th>
              <th class="p-3 border border-border">800m Run: Women (Seconds)</th>
              <th class="p-3 border border-border">Long Jump: Men</th>
              <th class="p-3 border border-border">Shot Put: Men (7.26 kg)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50 bg-emerald-500/10 font-bold">
              <td class="p-3 border border-border text-emerald-600 dark:text-emerald-400">40 Marks (Max Run) / 30 (Field)</td>
              <td class="p-3 border border-border">&le; 124.2 sec (2m 04s)</td>
              <td class="p-3 border border-border">&le; 176.0 sec (2m 56s)</td>
              <td class="p-3 border border-border">&ge; 5.57 meters</td>
              <td class="p-3 border border-border">&ge; 8.76 meters</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">35 Marks / 26 Marks</td>
              <td class="p-3 border border-border">127.1 – 130.0 sec</td>
              <td class="p-3 border border-border">181.1 – 186.0 sec</td>
              <td class="p-3 border border-border">5.15 – 5.25 meters</td>
              <td class="p-3 border border-border">8.00 – 8.18 meters</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">30 Marks / 22 Marks</td>
              <td class="p-3 border border-border">133.1 – 136.0 sec</td>
              <td class="p-3 border border-border">191.1 – 196.0 sec</td>
              <td class="p-3 border border-border">4.75 – 4.85 meters</td>
              <td class="p-3 border border-border">7.25 – 7.43 meters</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">25 Marks / 18 Marks</td>
              <td class="p-3 border border-border">142.1 – 145.0 sec</td>
              <td class="p-3 border border-border">206.1 – 211.0 sec</td>
              <td class="p-3 border border-border">4.35 – 4.45 meters</td>
              <td class="p-3 border border-border">6.50 – 6.68 meters</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">20 Marks / 14 Marks</td>
              <td class="p-3 border border-border">154.1 – 157.0 sec</td>
              <td class="p-3 border border-border">226.1 – 231.0 sec</td>
              <td class="p-3 border border-border">3.95 – 4.05 meters</td>
              <td class="p-3 border border-border">5.75 – 5.93 meters</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Baseline Qualifying Limit</td>
              <td class="p-3 border border-border">198.0 sec (3m 18s)</td>
              <td class="p-3 border border-border">261.0 sec (4m 21s)</td>
              <td class="p-3 border border-border">2.96 meters</td>
              <td class="p-3 border border-border">3.83 meters</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>💰 4. MP Police Constable Salary Structure &amp; Police Verification</h2>
      <p>
        Appointed constables in Madhya Pradesh receive benefits governed by the 7th Central Pay Commission (Pay Matrix Level 4). Below is the comprehensive monthly pay breakup:
      </p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground">
              <th class="p-3 border border-border">Salary Component</th>
              <th class="p-3 border border-border">Amount / Percentage</th>
              <th class="p-3 border border-border">Remarks &amp; Entitlements</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Basic Pay (Entry Level 4)</td>
              <td class="p-3 border border-border">₹19,500 per month</td>
              <td class="p-3 border border-border">Base pay scale ₹19,500 – ₹62,000</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Dearness Allowance (DA)</td>
              <td class="p-3 border border-border">₹9,750 (50% of Basic)</td>
              <td class="p-3 border border-border">Revised semiannually per state finance department orders</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">House Rent Allowance (HRA)</td>
              <td class="p-3 border border-border">₹1,755 – ₹3,510 (9% to 18%)</td>
              <td class="p-3 border border-border">Tier classification (Bhopal/Indore vs other district headquarters)</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Special allowances</td>
              <td class="p-3 border border-border">₹1,200 – ₹2,000</td>
              <td class="p-3 border border-border">Kit maintenance, uniform washing, and mobile conveyance</td>
            </tr>
            <tr class="border-b border-border/50 font-bold bg-muted">
              <td class="p-3 border border-border">Gross Monthly Pay</td>
              <td class="p-3 border border-border">₹32,205 – ₹34,760</td>
              <td class="p-3 border border-border">Before statutory pension and professional tax deductions</td>
            </tr>
            <tr class="border-b border-border/50 text-emerald-600 dark:text-emerald-400 font-bold">
              <td class="p-3 border border-border">Net In-Hand Salary</td>
              <td class="p-3 border border-border">₹27,000 – ₹29,200</td>
              <td class="p-3 border border-border">Credited monthly to candidate's bank account after NPS deduction</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Character &amp; Police Verification Protocol</h3>
      <p>
        Addressing candidate searches regarding <em>"mp police verification"</em>, the document validation workflow is formal and non-negotiable:
      </p>
      <ol class="list-decimal pl-5 space-y-2 text-sm text-foreground/90">
        <li><strong>Submission of Attestation Form:</strong> Selected candidates fill out three sets of the official Anubraman Patra detailing residence records for the past 5 years, educational institutions attended, and names of two responsible local references.</li>
        <li><strong>Local Police Station Verification:</strong> Forms are dispatched to the Superintendent of Police (SP) office and routed to the candidate's jurisdictional police thana. The local beat constable inspects records for active FIRs, chargesheets, or criminal court proceedings.</li>
        <li><strong>Character Certificate Issuance:</strong> Once verified by local authorities and countersigned by the SP Office, the clean report is transmitted to the Police Training School (PTS) or recruitment board for final dispatch of joining orders.</li>
      </ol>

      <h2>🪪 5. MP Police Admit Card, Answer Key &amp; Cut-Off Roadmap</h2>
      <p>
        Candidates frequently encounter issues retrieving hall tickets and results. Follow this direct procedural guide for MPESB portal navigation:
      </p>

      <h3>How to Download the MP Police Admit Card (Admit Card Kaise Nikale)</h3>
      <ol class="list-decimal pl-5 space-y-2 text-sm text-foreground/90">
        <li>Access the official website: <strong>esb.mp.gov.in</strong> or <strong>peb.mp.gov.in</strong>.</li>
        <li>Select the primary language interface (English or Hindi).</li>
        <li>Click on <strong>"Admit Card"</strong> in the top navigation bar and select <strong>"Police Constable Recruitment Test"</strong>.</li>
        <li>Read the advisory instructions regarding COVID and biometric verification, then click the search window.</li>
        <li>Enter your <strong>13-digit Application Number</strong> and your <strong>Date of Birth (DD/MM/YYYY)</strong>.</li>
        <li>Input the candidate identifier: the first two letters of your mother's name followed by the last four digits of your Aadhaar card.</li>
        <li>Enter the calculation captcha and click <strong>Search</strong> to download and print your hall ticket in duplicate.</li>
      </ol>

      <h3>Category-Wise Cut-Off Trends (Combined 200 Marks Benchmark)</h3>
      <p>
        With the 100-mark physical test directly influencing rankings, overall safe target marks across previous and expected cycles are summarized below:
      </p>
      <ul>
        <li><strong>General / Unreserved (UR):</strong> 145 – 155 Marks (Combined out of 200)</li>
        <li><strong>Other Backward Classes (OBC):</strong> 138 – 148 Marks</li>
        <li><strong>Economically Weaker Section (EWS):</strong> 134 – 142 Marks</li>
        <li><strong>Scheduled Caste (SC):</strong> 128 – 136 Marks</li>
        <li><strong>Scheduled Tribe (ST):</strong> 118 – 128 Marks</li>
      </ul>

      <h2>📐 6. MPESB Official Document &amp; Scanned Signature Specifications</h2>
      <p>
        More than 15% of online applications on the MPESB / Vyapam portal get rejected during automated scanning because candidates fail to comply with the combined self-declaration template rules.
      </p>

      <div class="my-8 p-6 rounded-2xl bg-card border border-border shadow-sm">
        <h3 class="text-base font-bold text-foreground mb-4 flex items-center gap-2">
          <span>📋</span> MP Police MPESB Portal Upload Guidelines
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-2">
            <h4 class="font-bold text-primary">Passport Photo Standards</h4>
            <ul class="space-y-1 text-muted-foreground">
              <li>Dimensions: <strong>3.5 &times; 4.5 cm</strong> (approx. 240 &times; 320 px)</li>
              <li>File Size: <strong>20 KB to 50 KB</strong> in JPG/JPEG format</li>
              <li>Background: Clear white or light off-white background</li>
              <li>Slate Rule: Photo must show candidate holding a slate with their clear name and photograph date</li>
              <li>Format tool: <a href="/mp-police-photo-resize/" class="text-primary font-semibold underline">Resize MP Police Photo</a></li>
            </ul>
          </div>
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-2">
            <h4 class="font-bold text-primary">Signature &amp; Declaration Standards</h4>
            <ul class="space-y-1 text-muted-foreground">
              <li>Dimensions: <strong>140 &times; 60 pixels</strong> (4.0 &times; 2.0 cm)</li>
              <li>File Size: <strong>10 KB to 20 KB</strong> in JPG/JPEG format</li>
              <li>Ink: Running handwriting using dark black ballpoint pen</li>
              <li>Important: Signatures in CAPITAL / BLOCK letters are rejected</li>
              <li>Format tool: <a href="/mp-police-signature-resize/" class="text-primary font-semibold underline">Resize MP Police Signature</a></li>
            </ul>
          </div>
        </div>
      </div>
    \`
  },
`;

// Insert after `export const BLOG_POSTS: BlogPost[] = [\n`
const target = 'export const BLOG_POSTS: BlogPost[] = [\n';
if (!fileContent.includes(target)) {
  console.error('Target string not found');
  process.exit(1);
}

fileContent = fileContent.replace(target, target + mpPolicePost);
fs.writeFileSync(filePath, fileContent, 'utf-8');
console.log('Successfully added MP Police blog post to blogPostsData.ts');
