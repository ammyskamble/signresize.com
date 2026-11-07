import fs from 'fs';
import path from 'path';

const blogPostFilePath = path.resolve('src/data/blogPostsData.ts');
let content = fs.readFileSync(blogPostFilePath, 'utf8');

const newPost = {
  slug: "ssc-gd-exam-date-2026-cbt-shift-timings-schedule-guide",
  title: "SSC GD Exam Date 2026: Shift Timings, CBT Schedule and Exam Center Guidelines",
  title_hi: "SSC GD Exam Date 2026: परीक्षा तिथि, 4 शिफ्ट टाइमिंग और सेंटर के जरूरी नियम",
  title_mr: "SSC GD Exam Date 2026: परीक्षा तारीख, 4 शिफ्ट वेळा आणि परीक्षा केंद्र मार्गदर्शक",
  metaTitle: "SSC GD Exam Date 2026: Shift Timings, CBT Schedule & Notice PDF",
  metaTitle_hi: "SSC GD Exam Date 2026: शिफ्ट टाइमिंग, परीक्षा तिथि और गाइड",
  metaTitle_mr: "SSC GD Exam Date 2026: परीक्षा वेळापत्रक आणि शिफ्ट नियम",
  metaDescription: "Official SSC GD 2026 exam date, daily shift timings (1, 2, 3, 4), reporting hours, gate closure rules, and PET/PST schedule. Download exam hall checklist free.",
  metaDescription_hi: "SSC GD 2026 परीक्षा तिथि, चारों शिफ्टों का समय, गेट बंद होने का सख्त नियम और एडमिट कार्ड फोटो-हस्ताक्षर दिशा-निर्देश देखें।",
  metaDescription_mr: "SSC GD 2026 परीक्षा तारीख, 4 शिफ्टच्या वेळा, हजेरी नियम आणि आवश्यक कागदपत्रांचे अधिकृत मार्गदर्शक.",
  excerpt: "Official schedule for SSC GD Constable 2026: Computer-Based Test (CBT) dates, four daily shift timings with strict gate closure windows, PET/PST running standards, and mandatory exam center document rules.",
  excerpt_hi: "SSC GD कांस्टेबल 2026 का आधिकारिक कार्यक्रम: कंप्यूटर आधारित परीक्षा (CBT) तिथियां, 4 दैनिक शिफ्ट का समय, गेट क्लोजिंग नियम और परीक्षा केंद्र पर जरूरी दस्तावेज।",
  excerpt_mr: "SSC GD कॉन्स्टेबल 2026 अधिकृत वेळापत्रक: ऑनलाइन परीक्षा तारीख, चार शिफ्टच्या अचूक वेळा, गेट बंद होण्याची वेळ आणि परीक्षा केंद्रासाठी आवश्यक कागदपत्रे.",
  category: "Exam Alerts",
  publishDate: "Oct 22, 2026",
  publishTime: "09:00 AM IST",
  lastUpdated: "Oct 22, 2026",
  deployedAt: "Oct 22, 2026 • 09:00 AM IST",
  author: "SignResize Examination Standards Desk",
  authorRole: "Staff Selection Commission Recruitment Research Desk",
  readTime: "8 min read",
  featured: true,
  tags: [
    "SSC GD 2026",
    "SSC GD Exam Date",
    "Shift Timings",
    "Admit Card",
    "Exam Center Rules",
    "PET PST Schedule",
    "Paramilitary Forces"
  ],
  relatedExamPreset: "ssc-gd-signature-resize",
  guideTool: {
    href: "/ssc-gd-signature-resize/",
    label: "SSC GD Signature Resizer (10–20 KB)"
  },
  quickFacts: [
    {
      label: "Conducting Body",
      value: "Staff Selection Commission (SSC)"
    },
    {
      label: "Recruitment Posts",
      value: "Constable (General Duty) in CAPFs, SSF, Assam Rifles"
    },
    {
      label: "CBT Exam Window",
      value: "April 27 to May 30 (Cycle 1) | Jan – March 2027 (Cycle 2)"
    },
    {
      label: "Physical Test (PET/PST)",
      value: "October – November 2026"
    },
    {
      label: "Daily Shifts",
      value: "4 Shifts Daily (60 Minutes per Shift)"
    },
    {
      label: "Gate Closure Rule",
      value: "Strictly 30 Minutes Before Shift Start (No Exceptions)"
    },
    {
      label: "Document Upload Specs",
      value: "Live Webcam Photo + Scanned Signature (140×60 px, 10–20 KB)"
    }
  ],
  faqs: [
    {
      question: "When is the SSC GD 2026 Computer Based Examination scheduled?",
      answer: "The Computer Based Examination for the first 2026 cycle was conducted from ==April 27 to May 30, 2026==, followed by ground physical tests in October and November. For the subsequent annual cycle, the Staff Selection Commission tentative calendar schedules the CBT between ==January and March 2027==."
    },
    {
      question: "What are the 4 daily shift timings and reporting hours for SSC GD?",
      answer: "The SSC GD CBT runs in 4 daily shifts: Shift 1 from ==09:00 AM to 10:00 AM== (Reporting 07:45 AM, Gate closes 08:30 AM); Shift 2 from ==11:45 AM to 12:45 PM== (Reporting 10:30 AM, Gate closes 11:15 AM); Shift 3 from ==02:30 PM to 03:30 PM== (Reporting 01:15 PM, Gate closes 02:00 PM); Shift 4 from ==05:15 PM to 06:15 PM== (Reporting 04:00 PM, Gate closes 04:45 PM)."
    },
    {
      question: "When will the SSC GD Admit Card be released on ssc.gov.in?",
      answer: "SSC publishes regional application status and exam city intimation links approximately ==10 to 12 days before the start of examinations==. The final downloadable hall ticket with exact center venue and address is released ==strictly 4 days prior to the candidate's exam date==."
    },
    {
      question: "What documents are compulsory to carry to the SSC GD examination center?",
      answer: "Candidates must carry a ==printed SSC GD Admit Card==, an ==original government photo ID with complete Date of Birth== (Aadhaar Card, Voter ID, or Passport), and ==two passport size color photographs==. If your Aadhaar card only mentions your birth year, you must carry your Class 10 marksheet as secondary proof."
    },
    {
      question: "What happens if my signature on the exam hall attendance sheet differs from my online application?",
      answer: "A signature discrepancy triggers biometric suspicion and causes provisional withholding of your dossier. Candidates must ==sign in their natural running handwriting==. Never sign in block capital letters either during the exam or on your original upload."
    },
    {
      question: "Is there negative marking in the SSC GD online examination?",
      answer: "Yes. The examination awards 2 marks for every correct answer and ==deducts 0.25 marks for every incorrect answer==. Unattempted questions carry zero penalty."
    }
  ],
  contentHtml: `
<div class="space-y-6 text-foreground leading-relaxed">

  <div class="p-5 rounded-2xl bg-primary/10 border-2 border-primary/30 text-foreground space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-xl">📅</span>
      <h3 class="text-base font-bold text-foreground">Direct Answer: SSC GD 2026 Exam Schedule at a Glance</h3>
    </div>
    <p class="text-sm text-foreground/90 leading-relaxed">
      The Staff Selection Commission conducts the <strong>SSC GD Constable examination across two primary phases</strong>. The written Computer-Based Examination (CBT) was conducted from <strong>April 27 to May 30</strong>, with shortlisted candidates appearing for the <strong>Physical Efficiency & Measurement Test (PET/PST) in October and November 2026</strong>. For candidates tracking the next annual notification cycle, the Computer-Based Test is scheduled between <strong>January and March 2027</strong> on <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary font-bold underline">ssc.gov.in</a>.
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
      <div class="p-2.5 rounded-xl bg-card border border-border">
        <span class="block text-muted-foreground">Written CBT</span>
        <strong class="text-foreground">April 27 – May 30</strong>
      </div>
      <div class="p-2.5 rounded-xl bg-card border border-border">
        <span class="block text-muted-foreground">PET / PST Ground</span>
        <strong class="text-foreground">Oct – Nov 2026</strong>
      </div>
      <div class="p-2.5 rounded-xl bg-card border border-border">
        <span class="block text-muted-foreground">Next Cycle CBT</span>
        <strong class="text-foreground">Jan – March 2027</strong>
      </div>
      <div class="p-2.5 rounded-xl bg-card border border-border">
        <span class="block text-muted-foreground">Exam Mode</span>
        <strong class="text-foreground">Online (80 MCQs)</strong>
      </div>
    </div>
  </div>

  <p class="text-base text-foreground/90">
    Every recruitment season, thousands of CAPF aspirants lose weeks of preparation by tracking outdated WhatsApp forwards and clickbait headlines. The Staff Selection Commission runs its recruitment calendars on strict administrative schedules. Understanding which cycle applies to you prevents last-minute scramble at the test center gate.
  </p>

  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">1. Official Daily Shift Timings & Gate Closing Windows</h2>
  <p class="text-sm text-foreground/80">
    The Computer-Based Examination runs in four fixed shifts daily. The most critical operational rule is the <strong>hard gate closure exactly 30 minutes before the test begins</strong>. Test lab biometric turnstiles lock automatically. If your shift starts at 9:00 AM and you reach the security counter at 8:31 AM, biometric access will be refused regardless of your explanation.
  </p>

  <div class="my-6 overflow-x-auto">
    <table class="w-full text-xs sm:text-sm text-left border border-border">
      <thead class="bg-muted text-foreground font-semibold">
        <tr>
          <th class="p-3 border-b">Shift Details</th>
          <th class="p-3 border-b">Reporting Time</th>
          <th class="p-3 border-b">Gate Closing (Strict)</th>
          <th class="p-3 border-b">Exam Duration</th>
          <th class="p-3 border-b">Biometric & Seating Window</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border text-foreground/85">
        <tr class="hover:bg-muted/40">
          <td class="p-3 font-semibold text-primary">Shift 1 (Morning)</td>
          <td class="p-3 font-mono">07:45 AM</td>
          <td class="p-3 font-mono text-rose-600 dark:text-rose-400 font-bold">08:30 AM</td>
          <td class="p-3 font-mono">09:00 AM – 10:00 AM</td>
          <td class="p-3">08:30 AM to 08:50 AM</td>
        </tr>
        <tr class="hover:bg-muted/40">
          <td class="p-3 font-semibold text-primary">Shift 2 (Noon)</td>
          <td class="p-3 font-mono">10:30 AM</td>
          <td class="p-3 font-mono text-rose-600 dark:text-rose-400 font-bold">11:15 AM</td>
          <td class="p-3 font-mono">11:45 AM – 12:45 PM</td>
          <td class="p-3">11:15 AM to 11:35 AM</td>
        </tr>
        <tr class="hover:bg-muted/40">
          <td class="p-3 font-semibold text-primary">Shift 3 (Afternoon)</td>
          <td class="p-3 font-mono">01:15 PM</td>
          <td class="p-3 font-mono text-rose-600 dark:text-rose-400 font-bold">02:00 PM</td>
          <td class="p-3 font-mono">02:30 PM – 03:30 PM</td>
          <td class="p-3">02:00 PM to 02:20 PM</td>
        </tr>
        <tr class="hover:bg-muted/40">
          <td class="p-3 font-semibold text-primary">Shift 4 (Evening)</td>
          <td class="p-3 font-mono">04:00 PM</td>
          <td class="p-3 font-mono text-rose-600 dark:text-rose-400 font-bold">04:45 PM</td>
          <td class="p-3 font-mono">05:15 PM – 06:15 PM</td>
          <td class="p-3">04:45 PM to 05:05 PM</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
    <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
      <span>⚠️</span> Common Gate Disqualification: Fingerprint & Photo Mismatches
    </h4>
    <p class="text-sm text-foreground/80 leading-relaxed">
      Staff Selection Commission uses automated iris and thumbprint biometric scanners at lab entrances. During cold morning shifts, low finger temperature causes scanner read failures. Rub your hands to warm your fingertips before stepping up to the biometric scanner. In addition, if the printed photo on your admit card is dark or pixelated, invigilators require two passport-sized physical photographs matching your live application capture.
    </p>
  </div>

  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">2. Essential Documents to Carry on Exam Day</h2>
  <p class="text-sm text-foreground/80">
    Do not risk disqualification after months of intense study. Ensure these four items are inside your transparent exam folder before you travel:
  </p>

  <ul class="my-4 space-y-2 text-sm text-foreground/85 list-disc pl-5">
    <li>
      <strong>Printed SSC GD Admit Card:</strong> Clean printout with clearly visible barcode, roll number, and photograph.
    </li>
    <li>
      <strong>Original Government Photo ID:</strong> Aadhaar Card (with complete Date of Birth printed as DD/MM/YYYY), Voter ID, Passport, or Driving License. School or coaching IDs are strictly forbidden.
    </li>
    <li>
      <strong>Two Passport-Sized Photographs:</strong> Identical to the photograph captured during your online registration or live webcam session.
    </li>
    <li>
      <strong>Original Matriculation Certificate (If DOB differs on ID):</strong> If your Aadhaar card only shows your birth year (such as 2003 instead of 14/05/2003), you must carry your Class 10 marksheet as proof of date of birth.
    </li>
  </ul>

  <div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h4 class="font-bold text-base sm:text-lg text-foreground">Need to Format Your SSC GD Documents?</h4>
        <p class="text-xs sm:text-sm text-muted-foreground mt-1">
          Resize your scanned signature to exact 140×60 px (10–20 KB) and format passport photos to official specifications in seconds.
        </p>
      </div>
      <div class="flex flex-wrap gap-2 w-full sm:w-auto">
        <a href="/ssc-gd-signature-resize/" class="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-90 shadow-sm transition">
          <span>✍️ Resize SSC GD Signature</span>
          <span>&rarr;</span>
        </a>
        <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-xs border border-border transition">
          <span>📸 Passport Photo Resizer</span>
        </a>
      </div>
    </div>
  </div>

  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">3. Physical Standards Test (PST) & Running Standards (PET)</h2>
  <p class="text-sm text-foreground/80">
    Candidates who clear the Computer-Based Examination cutoff are summoned for ground testing across CAPF centers (BSF, CISF, CRPF, and SSB locations). The Physical Efficiency Test is qualifying in nature, but running 5 km on asphalt requires calculated pacing.
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
    <div class="p-4 rounded-xl bg-card border border-border">
      <h4 class="font-bold text-sm text-primary mb-2">🏃 Male Candidates Standards</h4>
      <ul class="text-xs text-foreground/80 space-y-1.5">
        <li><strong>Running Distance:</strong> 5.0 Kilometers in 24 Minutes (Ladakh region: 1.6 km in 7 minutes).</li>
        <li><strong>Height Requirement:</strong> 170 cm (Relaxable to 162.5 cm for ST candidates).</li>
        <li><strong>Chest Requirement:</strong> 80 cm unexpanded with a mandatory 5 cm expansion (85 cm).</li>
      </ul>
    </div>
    <div class="p-4 rounded-xl bg-card border border-border">
      <h4 class="font-bold text-sm text-primary mb-2">🏃‍♀️ Female Candidates Standards</h4>
      <ul class="text-xs text-foreground/80 space-y-1.5">
        <li><strong>Running Distance:</strong> 1.6 Kilometers in 8 Minutes 30 Seconds (Ladakh: 800m in 5 min).</li>
        <li><strong>Height Requirement:</strong> 157 cm (Relaxable to 150 cm for ST candidates).</li>
        <li><strong>Chest Measurement:</strong> Not applicable for female applicants.</li>
      </ul>
    </div>
  </div>

  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">4. CBE Examination Pattern & Time Management Strategy</h2>
  <p class="text-sm text-foreground/80">
    The exam consists of 80 questions carrying 160 total marks to be answered in 60 minutes. Negative marking is 0.25 marks per wrong answer. Here is how top rankers allocate their 60 minutes:
  </p>

  <div class="my-4 overflow-x-auto">
    <table class="w-full text-xs sm:text-sm text-left border border-border">
      <thead class="bg-muted text-foreground font-semibold">
        <tr>
          <th class="p-3 border-b">Subject</th>
          <th class="p-3 border-b">Questions</th>
          <th class="p-3 border-b">Max Marks</th>
          <th class="p-3 border-b">Target Time</th>
          <th class="p-3 border-b">Strategy</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border text-foreground/85">
        <tr>
          <td class="p-3 font-semibold text-primary">General Intelligence & Reasoning</td>
          <td class="p-3 font-mono">20</td>
          <td class="p-3 font-mono">40</td>
          <td class="p-3 font-mono">15 min</td>
          <td class="p-3">Attempt high-accuracy series, analogies, and coding first.</td>
        </tr>
        <tr>
          <td class="p-3 font-semibold text-primary">General Knowledge & Awareness</td>
          <td class="p-3 font-mono">20</td>
          <td class="p-3 font-mono">40</td>
          <td class="p-3 font-mono">7 min</td>
          <td class="p-3">Do not linger on doubtful current affairs questions.</td>
        </tr>
        <tr>
          <td class="p-3 font-semibold text-primary">Elementary Mathematics</td>
          <td class="p-3 font-mono">20</td>
          <td class="p-3 font-mono">40</td>
          <td class="p-3 font-mono">26 min</td>
          <td class="p-3">Calculate ratios, percentages, and profit & loss steadily.</td>
        </tr>
        <tr>
          <td class="p-3 font-semibold text-primary">English or Hindi (Language)</td>
          <td class="p-3 font-mono">20</td>
          <td class="p-3 font-mono">40</td>
          <td class="p-3 font-mono">12 min</td>
          <td class="p-3">Grammar, cloze test, and synonyms offer fast points.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">5. Frequently Asked Questions (SSC GD 2026 Schedule)</h2>
  <div class="space-y-4 my-4">
    <div class="p-4 rounded-xl bg-card border border-border">
      <h4 class="font-bold text-sm text-foreground mb-1">When will the SSC GD 2026 Admit Card be released?</h4>
      <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
        SSC releases the application status city intimation slip approximately ==10 to 12 days prior to the examination==. The final downloadable Admit Card containing your exact center name and address is released ==strictly 4 days before your specific exam date== on regional SSC websites.
      </p>
    </div>

    <div class="p-4 rounded-xl bg-card border border-border">
      <h4 class="font-bold text-sm text-foreground mb-1">How can I check my SSC GD shift timing and center city?</h4>
      <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
        Log in to your regional portal (such as SSC NR, CR, ER, or WR) or the central portal at ==ssc.gov.in==. Enter your Registration Number and Date of Birth to view your designated exam city, shift time, and reporting hour.
      </p>
    </div>

    <div class="p-4 rounded-xl bg-card border border-border">
      <h4 class="font-bold text-sm text-foreground mb-1">What if my signature on the exam attendance sheet does not match my application?</h4>
      <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
        A signature discrepancy triggers manual biometric review and can lead to provisional withholding of your result. ==Sign in your natural running handwriting==. Never sign in block capital letters during the exam or on your original upload. You can check standard dimensions using our <a href="/ssc-gd-signature-resize/" class="text-primary underline font-medium">SSC GD Signature Guide</a>.
      </p>
    </div>

    <div class="p-4 rounded-xl bg-card border border-border">
      <h4 class="font-bold text-sm text-foreground mb-1">Will negative marking apply in SSC GD 2026?</h4>
      <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
        Yes. For every incorrect response in the Computer Based Examination, ==0.25 marks are deducted==. Unattempted questions carry zero penalty.
      </p>
    </div>
  </div>

</div>
`
};

const match = content.match(/export const BLOG_POSTS:\s*BlogPost\[\]\s*=\s*\[\r?\n/);
if (!match) {
  console.error('Could not find BLOG_POSTS array declaration');
  process.exit(1);
}

const insertIndex = match.index + match[0].length;
const serializedPost = '  ' + JSON.stringify(newPost, null, 2).replace(/\n/g, '\n  ') + ',\n';
const updatedContent = content.slice(0, insertIndex) + serializedPost + content.slice(insertIndex);

fs.writeFileSync(blogPostFilePath, updatedContent, 'utf8');
console.log('Successfully inserted SSC GD Exam Date blog post at the top of BLOG_POSTS!');
