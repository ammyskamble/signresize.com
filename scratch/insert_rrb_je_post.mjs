import fs from 'fs';
import path from 'path';

const blogFilePath = path.resolve('src/data/blogPostsData.ts');
let content = fs.readFileSync(blogFilePath, 'utf8');

const rrbJePost = `  {
    slug: 'rrb-je-recruitment-2026-cbt-syllabus-salary-photo-signature-rules',
    title: 'RRB JE 2026 Master Guide: CEN 03/2024 Vacancies, CBT 1 & 2 Syllabus, Level-6 Salary & Photo-Signature Rules',
    title_hi: 'RRB JE Recruitment 2026: 7,951 पद, CBT 1 व 2 सिलेबस, लेवल-6 वेतन और फोटो-हस्ताक्षर अपलोड नियम',
    title_mr: 'RRB JE भरती 2026: 7,951 पदे, CBT 1 व 2 अभ्यासक्रम, लेवल-6 पगार आणि फोटो-स्वाक्षरी नियम',
    metaTitle: 'RRB JE 2026 Master Guide: CBT Syllabus, Salary & Photo Rules',
    metaTitle_hi: 'RRB JE भर्ती 2026: सिलेबस, लेवल-6 सैलरी और फोटो-हस्ताक्षर गाइड',
    metaTitle_mr: 'RRB JE भरती 2026: अभ्यासक्रम, पगार आणि फोटो-स्वाक्षरी मार्गदर्शक',
    metaDescription: 'Complete RRB JE (Junior Engineer & DMS) CEN 03/2024 & 2026 guide: 7,951 vacancies, CBT-1 & CBT-2 branch syllabus, ₹69,000 gross salary & 140x60 sign / 240x320 photo rules.',
    metaDescription_hi: 'RRB JE 2026 भर्ती संपूर्ण गाइड: 7,951 पद, CBT 1 और 2 ब्रांच-वार सिलेबस, लेवल-6 वेतन संरचना और 140x60 हस्ताक्षर व 240x320 फोटो अपलोड के आधिकारिक नियम।',
    metaDescription_mr: 'RRB JE 2026 भरती मार्गदर्शक: 7,951 पदे, CBT 1 व 2 शाखावार अभ्यासक्रम, लेवल-6 पगार आणि 140x60 स्वाक्षरी व 240x320 फोटो अपलोड नियम.',
    excerpt: 'Authoritative guide to Railway Recruitment Board Junior Engineer (CEN 03/2024 & 2026): 7,951 vacancies across Civil, Mechanical, Electrical, and S&T, revised Pay Level-6 salary slip, CBT-1 screening pattern, CBT-2 technical syllabus, and official 140×60 px signature & 240×320 px photo compliance.',
    excerpt_hi: 'रेलवे भर्ती बोर्ड जूनियर इंजीनियर (RRB JE CEN 03/2024 व 2026) का संपूर्ण विश्लेषण: 7,951 पद, सिविल, मैकेनिकल, इलेक्ट्रिकल सिलेबस, लेवल-6 सैलरी और फोटो-हस्ताक्षर के नियम।',
    excerpt_mr: 'रेल्वे भरती बोर्ड कनिष्ठ अभियंता (RRB JE 2026) चे सविस्तर विश्लेषण: 7,951 पदे, तांत्रिक अभ्यासक्रम, लेवल-6 पगार आणि फोटो-स्वाक्षरीचे अचूक नियम.',
    category: 'Exam Alerts',
    country: 'IN',
    publishDate: 'Oct 26, 2026',
    publishTime: '07:45 PM IST',
    lastUpdated: 'Oct 26, 2026',
    deployedAt: 'Oct 26, 2026 • 07:45 PM IST',
    author: 'SignResize Railway Technical Desk',
    authorRole: 'Senior Technical Examination & Document Standards Specialist',
    readTime: '11 min read',
    featured: true,
    tags: [
      'RRB JE 2026',
      'RRB Junior Engineer Recruitment',
      'RRB JE CEN 03/2024',
      'RRB JE Syllabus Mechanical Civil Electrical',
      'RRB JE Salary 7th CPC',
      'RRB JE CBT 1 Cutoff',
      'RRB JE Photo Size 30 to 70 KB',
      'RRB JE Signature Resize 140x60',
      'Railway Recruitment Board',
      'DMS CMA Vacancy'
    ],
    relatedExamPreset: 'rrb-je',
    guideTool: {
      href: '/rrb-je-signature-resize/',
      label: 'RRB JE Signature & Photo Resizer'
    },
    quickFacts: [
      { label: 'Recruitment Authority', value: 'Railway Recruitment Boards (RRB CEN 03/2024)' },
      { label: 'Target Posts', value: 'Junior Engineer (JE), Depot Material Superintendent (DMS), CMA' },
      { label: 'Total Vacancies', value: '7,951 Engineering Posts (Zone-wise Allocation)' },
      { label: 'Pay Matrix Cadre', value: 'Level-6 (7th CPC Basic ₹35,400 + DA + HRA ~₹69,000 Gross)' },
      { label: 'Selection Scheme', value: 'CBT-1 (100 Marks) + CBT-2 (150 Marks) + DV & Medical' },
      { label: 'Negative Marking', value: '1/3rd (0.33) marks deducted per incorrect response' },
      { label: 'Signature Upload Specs', value: '140 × 60 px | 10 KB to 20 KB JPG (Black Ink Only)' },
      { label: 'Photograph Upload Specs', value: '240 × 320 px (3.5×4.5 cm) | 30 KB to 70 KB JPG (White BG)' },
      { label: 'Official Portal', value: 'rrbapply.gov.in & Regional RRB Notice Boards' }
    ],
    quickFacts_hi: [
      { label: 'भर्ती प्राधिकरण', value: 'रेलवे भर्ती बोर्ड (RRB CEN 03/2024)' },
      { label: 'पद नाम', value: 'जूनियर इंजीनियर (JE), डिपो सामग्री अधीक्षक (DMS), CMA' },
      { label: 'कुल रिक्तियां', value: '7,951 पद (जोन-वार आवंटन)' },
      { label: 'वेतन स्तर', value: 'लेवल-6 (मूल वेतन ₹35,400 + भत्ते, सकल ~₹69,000 प्रति माह)' },
      { label: 'चयन प्रक्रिया', value: 'CBT-1 (100 अंक) + CBT-2 (150 अंक) + DV व मेडिकल' },
      { label: 'नेगेटिव मार्किंग', value: 'प्रत्येक गलत उत्तर पर 1/3 अंक की कटौती' },
      { label: 'हस्ताक्षर माप', value: '140 × 60 पिक्सल | 10 KB से 20 KB JPG (काली स्याही)' },
      { label: 'फोटो माप', value: '240 × 320 पिक्सल | 30 KB से 70 KB JPG (सफेद पृष्ठभूमि)' },
      { label: 'आधिकारिक पोर्टल', value: 'rrbapply.gov.in' }
    ],
    quickFacts_mr: [
      { label: 'भरती प्राधिकरण', value: 'रेल्वे भरती बोर्ड (RRB CEN 03/2024)' },
      { label: 'पदाचे नाव', value: 'कनिष्ठ अभियंता (JE), डेपो मटेरियल अधीक्षक (DMS), CMA' },
      { label: 'एकूण पदे', value: '7,951 पदे (झोननिहाय वाटप)' },
      { label: 'वेतन श्रेणी', value: 'लेव्हल-6 (मूळ वेतन ₹35,400 + भत्ते, एकूण ~₹69,000 दरमहा)' },
      { label: 'निवड प्रक्रिया', value: 'CBT-1 (100 गुण) + CBT-2 (150 गुण) + कागदपत्र पडताळणी' },
      { label: 'नकारात्मक गुण', value: 'प्रत्येक चुकीच्या उत्तरासाठी 1/3 गुण वजा' },
      { label: 'स्वाक्षरी आकार', value: '140 × 60 पिक्सेल | 10 KB ते 20 KB JPG (काळी शाई)' },
      { label: 'फोटो आकार', value: '240 × 320 पिक्सेल | 30 KB ते 70 KB JPG (पांढरी पार्श्वभूमी)' },
      { label: 'अधिकृत पोर्टल', value: 'rrbapply.gov.in' }
    ],
    faqs: [
      {
        question: 'What is the examination pattern for RRB JE CBT-1?',
        answer: 'RRB JE CBT-1 is a 90-minute screening test consisting of 100 multiple-choice questions for 100 marks. The paper comprises Mathematics (30 Questions), General Intelligence & Reasoning (25 Questions), General Awareness (15 Questions), and General Science (30 Questions, covering Physics, Chemistry, and Life Sciences up to Class 10 CBSE level). Negative marking of 1/3rd (0.33 mark) applies for each wrong answer.'
      },
      {
        question: 'How are candidates shortlisted for RRB JE CBT-2?',
        answer: 'Candidates are shortlisted for CBT-2 based on normalized marks scored in CBT-1 at a ratio of 15 times the community-wise vacancy of the posts notified for each Railway Recruitment Board. CBT-1 marks serve solely for screening and are not counted toward the final merit panel.'
      },
      {
        question: 'What is the syllabus and weightage for RRB JE CBT-2?',
        answer: 'RRB JE CBT-2 consists of 150 questions (150 marks) to be completed in 120 minutes. It is divided into two sections: Non-Technical (50 marks covering General Awareness - 15, Physics & Chemistry - 15, Basics of Computers & Applications - 10, Basics of Environment & Pollution Control - 10) and Technical Abilities (100 marks specific to your engineering discipline: Civil, Mechanical, Electrical, Electronics, or Information Technology).'
      },
      {
        question: 'What is the monthly in-hand salary of an RRB Junior Engineer in 2026?',
        answer: 'RRB Junior Engineers are appointed under 7th CPC Pay Matrix Level-6 with an initial basic pay of ₹35,400 per month. With Dearness Allowance (DA at 50% = ₹17,700), House Rent Allowance (HRA at 30% for X-Class cities = ₹10,620), and Transport Allowance (₹3,600 + DA on TA = ₹5,400), the gross monthly emoluments exceed ₹69,120. Net in-hand salary ranges between ₹58,000 and ₹62,000 after NPS and insurance deductions.'
      },
      {
        question: 'What are the official photo requirements for the RRB JE application portal?',
        answer: 'The photograph must be a recent clear color passport photograph of 3.5 cm × 4.5 cm (240 × 320 pixels) taken against a plain white or light grey background, with file size strictly between 30 KB and 70 KB in JPG/JPEG format. Full front view showing both ears is mandatory. Photos with caps, dark glasses, or shadows are rejected.'
      },
      {
        question: 'What are the signature specifications for RRB JE CEN 03/2024?',
        answer: 'The signature must be sized 140 × 60 pixels (4.0 cm × 2.0 cm) with file size strictly between 10 KB and 20 KB in JPG format. It must be signed in black ballpoint ink on clean white unruled paper in natural running cursive handwriting. Signatures written in CAPITAL / BLOCK LETTERS are automatically disqualified and rejected.'
      },
      {
        question: 'Can Diploma and B.Tech degree holders both apply for RRB JE?',
        answer: 'Yes. Candidates holding a three-year Diploma in Engineering or a four-year B.Tech / B.E. / B.Sc (Engineering) degree in relevant streams (Civil, Mechanical, Electrical, Electronics, Production, Automobile, Instrumentation, IT, CS) from recognized institutions are eligible to apply.'
      },
      {
        question: 'What are the medical vision standards for RRB Junior Engineers?',
        answer: 'RRB JE posts demand stringent physical and optical fitness: Aye-Three (A-3) requires distance vision of 6/9, 6/9 with or without glasses and passing color vision tests; Bee-One (B-1) requires 6/9, 6/12 with or without glasses; Bee-Two (B-2) requires 6/9, 6/12 with glasses. Candidates who have undergone Lasik surgery are ineligible for categories requiring A-3 medical standards.'
      }
    ],
    faqs_hi: [
      {
        question: 'RRB JE CBT-1 परीक्षा का पैटर्न क्या है?',
        answer: 'RRB JE CBT-1 परीक्षा 90 मिनट की होती है जिसमें 100 वस्तुनिष्ठ प्रश्न (100 अंक) होते हैं: गणित (30 प्रश्न), रीजनिंग (25 प्रश्न), सामान्य जागरूकता (15 प्रश्न), और सामान्य विज्ञान (30 प्रश्न)। प्रत्येक गलत उत्तर पर 1/3 अंक की नेगेटिव मार्किंग होती है।'
      },
      {
        question: 'RRB JE CBT-2 के लिए कटऑफ कैसे तय होता है?',
        answer: 'CBT-1 में प्राप्त नॉर्मलाइज्ड अंकों के आधार पर प्रत्येक RRB में कुल रिक्तियों के 15 गुना उम्मीदवारों को CBT-2 के लिए शॉर्टलिस्ट किया जाता है। CBT-1 केवल स्क्रीनिंग परीक्षा है, इसके अंक अंतिम मेरिट में नहीं जुड़ते।'
      },
      {
        question: 'RRB जूनियर इंजीनियर का मासिक इन-हैंड वेतन कितना होता है?',
        answer: '7वें वेतन आयोग के अनुसार RRB JE को लेवल-6 (मूल वेतन ₹35,400) पर नियुक्त किया जाता है। DA (50%), HRA और परिवहन भत्तों को मिलाकर मेट्रो शहरों में सकल वेतन लगभग ₹69,120 प्रति माह होता है, जिससे इन-हैंड वेतन ₹58,000 से ₹62,000 बनता है।'
      },
      {
        question: 'RRB JE ऑनलाइन आवेदन के लिए फोटो और हस्ताक्षर का सही साइज क्या है?',
        answer: 'पासपोर्ट फोटो का साइज 240 × 320 पिक्सल (30 KB से 70 KB JPG) सफेद बैकग्राउंड में और हस्ताक्षर का साइज 140 × 60 पिक्सल (10 KB से 20 KB JPG) काली स्याही में होना अनिवार्य है। कैपिटल अक्षरों में हस्ताक्षर 100% रद्द कर दिए जाते हैं।'
      }
    ],
    faqs_mr: [
      {
        question: 'RRB JE CBT-1 परीक्षेचे स्वरूप काय आहे?',
        answer: 'RRB JE CBT-1 ही 90 मिनिटांची चाळणी परीक्षा असून यात 100 गुणांचे 100 प्रश्न असतात: गणित (30 प्रश्न), बुद्धिमत्ता (25 प्रश्न), सामान्य ज्ञान (15 प्रश्न) आणि सामान्य विज्ञान (30 प्रश्न). 1/3 नकारात्मक गुण लागू असतात.'
      },
      {
        question: 'RRB कनिष्ठ अभियंता पदाचा मासिक पगार किती असतो?',
        answer: 'लेव्हल-6 नुसार मूळ वेतन ₹35,400 असून महागाई भत्ता (50%), घरभाडे भत्ता आणि इतर भत्ते मिळून एकूण पगार सुमारे ₹69,120 दरमहा होतो. कपातीनंतर हातात ₹58,000 ते ₹62,000 मिळतात.'
      },
      {
        question: 'RRB JE अर्जासाठी फोटो आणि स्वाक्षरीचे अचूक नियम काय आहेत?',
        answer: 'फोटो 240 × 320 पिक्सेल (30 KB ते 70 KB) पांढऱ्या बॅकग्राउंडमध्ये आणि स्वाक्षरी 140 × 60 पिक्सेल (10 KB ते 20 KB) काळ्या शाईमध्ये आवश्यक आहे. कॅपिटल अक्षरातील स्वाक्षरी अपात्र ठरते.'
      }
    ],
    contentHtml: \`
  <!-- Direct Answer Card -->
  <div class="my-6 p-6 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border border-primary/20 shadow-xs space-y-4">
    <div class="flex items-center gap-2.5 text-primary">
      <span class="text-xl">🚆</span>
      <h3 class="text-base font-bold text-foreground">Direct Answer: RRB JE Recruitment 2026 Master Summary</h3>
    </div>
    <p class="text-sm text-foreground/90 leading-relaxed font-medium">
      The <strong>Railway Recruitment Boards (RRB CEN 03/2024 & 2026)</strong> announced <strong>7,951 vacancies</strong> for Junior Engineer (JE), Depot Material Superintendent (DMS), and Chemical & Metallurgical Assistant (CMA) across Indian Railways zones. Appointed in <strong>Pay Matrix Level-6 (Basic Pay ₹35,400; Gross ~₹69,120/month)</strong>, candidates must navigate a rigorous selection pipeline: <strong>CBT-1 (100 Questions / 90 Mins screening)</strong>, followed by <strong>CBT-2 (150 Questions / 120 Mins including 100 technical branch marks)</strong>, Document Verification, and Medical Examination. Uploading compliant credentials is mandatory: passport photograph (<strong>240 × 320 px, strictly 30 KB to 70 KB JPG</strong> with plain white background) and black ballpoint ink signature (<strong>140 × 60 px, strictly 10 KB to 20 KB JPG</strong> in running handwriting) on <a href="https://www.rrbapply.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary font-bold underline">rrbapply.gov.in</a>.
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
      <div class="p-2.5 rounded-xl bg-card border border-border shadow-2xs">
        <span class="block text-slate-600 dark:text-slate-400 font-bold text-[11px]">Total Vacancies</span>
        <strong class="text-foreground text-sm font-extrabold">7,951 Posts</strong>
      </div>
      <div class="p-2.5 rounded-xl bg-card border border-border shadow-2xs">
        <span class="block text-slate-600 dark:text-slate-400 font-bold text-[11px]">Pay Scale</span>
        <strong class="text-foreground text-sm font-extrabold">Level-6 (₹35,400 Basic)</strong>
      </div>
      <div class="p-2.5 rounded-xl bg-card border border-border shadow-2xs">
        <span class="block text-slate-600 dark:text-slate-400 font-bold text-[11px]">CBT-1 Scheme</span>
        <strong class="text-foreground text-sm font-extrabold">100 Qs / 90 Mins</strong>
      </div>
      <div class="p-2.5 rounded-xl bg-card border border-border shadow-2xs">
        <span class="block text-slate-600 dark:text-slate-400 font-bold text-[11px]">Technical Marks</span>
        <strong class="text-foreground text-sm font-extrabold">100 / 150 (CBT-2)</strong>
      </div>
    </div>
  </div>

  <!-- Live Status Banner -->
  <div class="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-foreground flex items-start sm:items-center gap-3 shadow-xs">
    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-600 text-white shrink-0">
      <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> EXAM PREP UPDATE
    </span>
    <p class="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
      <strong>RRB JE CEN 03/2024 Scrutiny & CBT Timetable:</strong> Ensure your application status is confirmed as provisionally accepted. Re-check that your uploaded passport photograph matches the mandatory 30–70 KB range and your running black ink signature falls within 10–20 KB. You can format compliant images instantly using the <a href="/rrb-je-signature-resize/" class="text-primary font-bold underline">RRB JE Signature Tool</a> and <a href="/rrb-je-photo-resize/" class="text-primary font-bold underline">RRB JE Photo Tool</a>.
    </p>
  </div>

  <p class="text-base text-slate-800 dark:text-slate-200 font-medium">
    Securing a Junior Engineer cadre in Indian Railways represents one of the most prestigious technical careers for diploma and degree engineers in India. Beyond attractive compensation and housing benefits, RRB JEs lead critical railway modernization, track inspection, rolling stock maintenance, signal interlocking, and depot logistics. Below is the exhaustive blueprint covering post distribution, Level-6 salary structures, syllabus breakdown, and document verification rules.
  </p>

  <!-- Section 1: Vacancy Breakdown & Post Categories -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">📋 1. RRB JE 2026 Vacancy Distribution Across Engineering Streams</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    Under Centralised Employment Notice (CEN 03/2024), the Ministry of Railways announced 7,951 posts distributed across four core designations:
  </p>

  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs">
    <div class="p-3 bg-slate-100 dark:bg-slate-800/80 border-b border-border flex items-center justify-between text-xs font-semibold">
      <span class="flex items-center gap-1.5 text-foreground font-bold"><span>⚙️</span> RRB JE Post Cadre & Stream Allocation</span>
      <span class="text-[11px] text-slate-600 dark:text-slate-400 font-bold sm:hidden flex items-center gap-1"><span>👉</span> Scroll table</span>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-xs sm:text-sm border-collapse">
        <thead>
          <tr class="bg-muted/40 text-muted-foreground text-left border-b border-border">
            <th class="p-3 font-semibold">Post Cadre</th>
            <th class="p-3 font-semibold">Qualifying Branch</th>
            <th class="p-3 font-semibold">Vacancies</th>
            <th class="p-3 font-semibold">Medical Standard</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Junior Engineer (Civil Engineering)</td>
            <td class="p-3 text-muted-foreground">Civil, Construction Technology, B.Tech/Diploma</td>
            <td class="p-3 font-bold text-foreground">4,298 Posts</td>
            <td class="p-3 text-muted-foreground">Aye-Three (A-3) / Bee-One (B-1)</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Junior Engineer (Mechanical & Workshop)</td>
            <td class="p-3 text-muted-foreground">Mechanical, Production, Automobile, Manufacturing</td>
            <td class="p-3 font-bold text-foreground">1,824 Posts</td>
            <td class="p-3 text-muted-foreground">Bee-One (B-1) / Bee-Two (B-2)</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Junior Engineer (Electrical & TRD)</td>
            <td class="p-3 text-muted-foreground">Electrical, Power Systems, Instrumentation</td>
            <td class="p-3 font-bold text-foreground">1,210 Posts</td>
            <td class="p-3 text-muted-foreground">Aye-Three (A-3) / Bee-One (B-1)</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Junior Engineer (Signal & Telecom - S&T)</td>
            <td class="p-3 text-muted-foreground">Electronics, Telecommunication, IT, Computer Science</td>
            <td class="p-3 font-bold text-foreground">412 Posts</td>
            <td class="p-3 text-muted-foreground">Aye-Three (A-3)</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Depot Material Superintendent (DMS)</td>
            <td class="p-3 text-muted-foreground">Engineering Diploma / Degree in any branch</td>
            <td class="p-3 font-bold text-foreground">168 Posts</td>
            <td class="p-3 text-muted-foreground">Cee-One (C-1)</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Chemical & Metallurgical Assistant (CMA)</td>
            <td class="p-3 text-muted-foreground">B.Sc with Chemistry & Physics (45% marks)</td>
            <td class="p-3 font-bold text-foreground">39 Posts</td>
            <td class="p-3 text-muted-foreground">Bee-One (B-1)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Section 2: Salary Structure -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">💰 2. RRB JE Salary Structure 2026: 7th CPC Level-6 Pay Slip Breakdown</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    Railway Junior Engineers receive compensation under Pay Matrix Level-6 of the 7th Central Pay Commission. Below is the realistic monthly gross and in-hand calculation for an officer posted in an X-Class metropolitan city (e.g., Mumbai, Delhi, Kolkata, Chennai, Bengaluru):
  </p>

  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs">
    <div class="p-3 bg-slate-100 dark:bg-slate-800/80 border-b border-border flex items-center justify-between text-xs font-semibold">
      <span class="flex items-center gap-1.5 text-foreground font-bold"><span>💵</span> RRB JE Monthly Pay Calculation (Level-6)</span>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-xs sm:text-sm border-collapse">
        <thead>
          <tr class="bg-muted/40 text-muted-foreground text-left border-b border-border">
            <th class="p-3 font-semibold">Component</th>
            <th class="p-3 font-semibold">Rate / Calculation</th>
            <th class="p-3 font-semibold">Monthly Amount</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Basic Pay</td>
            <td class="p-3 text-muted-foreground">7th CPC Level-6 Index 1</td>
            <td class="p-3 font-bold text-foreground">₹35,400</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Dearness Allowance (DA)</td>
            <td class="p-3 text-muted-foreground">50% of Basic Pay</td>
            <td class="p-3 font-bold text-foreground">₹17,700</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">House Rent Allowance (HRA)</td>
            <td class="p-3 text-muted-foreground">30% (X City) / 20% (Y) / 10% (Z)</td>
            <td class="p-3 font-bold text-foreground">₹10,620</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Transport Allowance (TA)</td>
            <td class="p-3 text-muted-foreground">Higher TPTA Cities</td>
            <td class="p-3 font-bold text-foreground">₹3,600</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">DA on Transport Allowance</td>
            <td class="p-3 text-muted-foreground">50% on ₹3,600</td>
            <td class="p-3 font-bold text-foreground">₹1,800</td>
          </tr>
          <tr class="bg-primary/5 font-bold">
            <td class="p-3 text-primary">Gross Monthly Emoluments</td>
            <td class="p-3 text-primary">Before Deductions</td>
            <td class="p-3 text-primary">₹69,120</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Statutory Deductions (NPS 10% + CGEGIS + Tax)</td>
            <td class="p-3 text-muted-foreground">NPS (Basic + DA) = ₹5,310 + CGIS</td>
            <td class="p-3 font-bold text-red-500">- ₹7,200 (approx)</td>
          </tr>
          <tr class="bg-emerald-500/10 font-bold">
            <td class="p-3 text-emerald-600 dark:text-emerald-400">Net Take-Home Salary</td>
            <td class="p-3 text-emerald-600 dark:text-emerald-400">Deposited in Bank Account</td>
            <td class="p-3 text-emerald-600 dark:text-emerald-400">₹61,920 / Month</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Section 3: Two-Tier CBT Examination Pattern -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">📝 3. RRB JE Examination Pattern: CBT-1 vs CBT-2 Compared</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    Selection strictly relies on computer-based merit. Understanding the exact sectional weightage ensures you balance speed in CBT-1 and engineering technical depth in CBT-2:
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <!-- CBT-1 Card -->
    <div class="p-5 rounded-2xl bg-card border border-border shadow-xs space-y-3">
      <div class="flex items-center justify-between border-b border-border pb-3">
        <h4 class="font-bold text-base text-foreground">Stage 1: CBT-1 (Screening Test)</h4>
        <span class="text-xs px-2.5 py-1 rounded-full font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400">100 Qs / 90 Mins</span>
      </div>
      <ul class="text-xs sm:text-sm space-y-2 text-muted-foreground">
        <li class="flex justify-between py-1 border-b border-border/50"><span>Mathematics (Arithmetic, Algebra, Geometry)</span><strong class="text-foreground">30 Questions (30 Marks)</strong></li>
        <li class="flex justify-between py-1 border-b border-border/50"><span>General Intelligence & Reasoning</span><strong class="text-foreground">25 Questions (25 Marks)</strong></li>
        <li class="flex justify-between py-1 border-b border-border/50"><span>General Science (Physics, Chemistry, Biology)</span><strong class="text-foreground">30 Questions (30 Marks)</strong></li>
        <li class="flex justify-between py-1"><span>General Awareness (Current Affairs, Railway History)</span><strong class="text-foreground">15 Questions (15 Marks)</strong></li>
      </ul>
      <div class="p-3 rounded-xl bg-muted/40 text-[11px] text-muted-foreground font-medium">
        🎯 <strong>Screening Purpose:</strong> Shortlists top 15× vacancy candidates for CBT-2 based on normalized scores.
      </div>
    </div>

    <!-- CBT-2 Card -->
    <div class="p-5 rounded-2xl bg-card border border-border shadow-xs space-y-3">
      <div class="flex items-center justify-between border-b border-border pb-3">
        <h4 class="font-bold text-base text-foreground">Stage 2: CBT-2 (Merit Test)</h4>
        <span class="text-xs px-2.5 py-1 rounded-full font-bold bg-primary/10 text-primary">150 Qs / 120 Mins</span>
      </div>
      <ul class="text-xs sm:text-sm space-y-2 text-muted-foreground">
        <li class="flex justify-between py-1 border-b border-border/50"><span>Technical Abilities (Branch Discipline)</span><strong class="text-primary font-bold">100 Questions (100 Marks)</strong></li>
        <li class="flex justify-between py-1 border-b border-border/50"><span>Physics & Chemistry (Class 10+2 Level)</span><strong class="text-foreground">15 Questions (15 Marks)</strong></li>
        <li class="flex justify-between py-1 border-b border-border/50"><span>General Awareness (National, Economy)</span><strong class="text-foreground">15 Questions (15 Marks)</strong></li>
        <li class="flex justify-between py-1 border-b border-border/50"><span>Basics of Computers & Applications</span><strong class="text-foreground">10 Questions (10 Marks)</strong></li>
        <li class="flex justify-between py-1"><span>Basics of Environment & Pollution Control</span><strong class="text-foreground">10 Questions (10 Marks)</strong></li>
      </ul>
      <div class="p-3 rounded-xl bg-muted/40 text-[11px] text-muted-foreground font-medium">
        🏆 <strong>Final Merit:</strong> 100% of final appointment ranking is prepared exclusively on normalized CBT-2 marks.
      </div>
    </div>
  </div>

  <!-- Section 4: Document Upload Standards & Photo/Sign Rules -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">📸 4. Official RRB JE Document Upload Guidelines (CEN 03/2024 Standards)</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    Over 12% of railway applications face scrutiny disqualification or rejection due to non-compliant photograph backgrounds or signatures signed in capital letters. Adhere to these exact parameters when submitting on <code class="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">rrbapply.gov.in</code>:
  </p>

  <div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- Photo Box -->
    <div class="p-5 rounded-2xl border-2 border-primary/20 bg-card space-y-3">
      <div class="flex items-center justify-between">
        <h4 class="font-bold text-foreground flex items-center gap-2"><span>📷</span> Passport Photograph</h4>
        <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">30 KB – 70 KB</span>
      </div>
      <ul class="text-xs sm:text-sm text-muted-foreground space-y-1.5">
        <li><strong>Pixel Dimensions:</strong> 240 pixels (width) × 320 pixels (height).</li>
        <li><strong>Physical Dimensions:</strong> 3.5 cm (width) × 4.5 cm (height).</li>
        <li><strong>Background:</strong> Clean, plain white or light grey background without shadows.</li>
        <li><strong>Facial View:</strong> Frontal face covering 75% of frame with both ears clearly visible.</li>
        <li><strong>Disqualification:</strong> Caps, hats, goggles, tinted sunglasses, or casual mobile selfies.</li>
      </ul>
      <div class="pt-2">
        <a href="/rrb-je-photo-resize/" class="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
          Resize Photo for RRB JE (240×320 px, 30–70 KB) &rarr;
        </a>
      </div>
    </div>

    <!-- Sign Box -->
    <div class="p-5 rounded-2xl border-2 border-primary/20 bg-card space-y-3">
      <div class="flex items-center justify-between">
        <h4 class="font-bold text-foreground flex items-center gap-2"><span>✍️</span> Running Signature</h4>
        <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">10 KB – 20 KB</span>
      </div>
      <ul class="text-xs sm:text-sm text-muted-foreground space-y-1.5">
        <li><strong>Pixel Dimensions:</strong> 140 pixels (width) × 60 pixels (height).</li>
        <li><strong>Physical Dimensions:</strong> 4.0 cm (width) × 2.0 cm (height).</li>
        <li><strong>Pen Ink:</strong> Black ballpoint ink ONLY on clean unruled white paper.</li>
        <li><strong>Handwriting Style:</strong> Natural cursive running handwriting.</li>
        <li><strong>Disqualification:</strong> Signatures in BLOCK / CAPITAL LETTERS lead to immediate rejection.</li>
      </ul>
      <div class="pt-2">
        <a href="/rrb-je-signature-resize/" class="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
          Resize Signature for RRB JE (140×60 px, 10–20 KB) &rarr;
        </a>
      </div>
    </div>
  </div>

  <!-- Rejection Alert Callout -->
  <div class="my-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-900 dark:text-rose-200 text-xs sm:text-sm font-medium flex items-start gap-3">
    <span class="text-lg shrink-0">⚠️</span>
    <div>
      <strong class="font-bold">Strict Railway Disqualification Rule:</strong> Railway Recruitment Boards state in Paragraph 15.2 of CEN 03/2024: <em>"Signatures in capital letters will not be accepted. Applications with signatures in capital letters will be rejected."</em> Always sign in natural flowing handwriting.
    </div>
  </div>

  <!-- Section 5: Step-by-Step Tool Callout Box -->
  <div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-card via-card to-primary/10 border-2 border-primary/30 space-y-3">
    <div class="flex items-center gap-2 text-primary">
      <span class="text-xl">🛠️</span>
      <h3 class="text-base font-bold text-foreground">Prepare Compliant RRB JE Uploads Instantly</h3>
    </div>
    <p class="text-sm text-muted-foreground">
      Eliminate file size errors and dimension mismatches before submitting your railway application. SignResize processes your files client-side with 100% data privacy:
    </p>
    <div class="flex flex-wrap gap-3 pt-2">
      <a href="/rrb-je-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition shadow-xs">
        Resize RRB JE Signature (10–20 KB) &rarr;
      </a>
      <a href="/rrb-je-photo-resize/" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-sm hover:bg-muted/30 transition shadow-xs">
        Resize RRB JE Photo (30–70 KB) &rarr;
      </a>
    </div>
  </div>
\`,
    contentHtml_hi: \`
  <div class="my-6 p-6 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border border-primary/20 shadow-xs space-y-4">
    <div class="flex items-center gap-2.5 text-primary">
      <span class="text-xl">🚆</span>
      <h3 class="text-base font-bold text-foreground">त्वरित सारांश: RRB JE भर्ती 2026</h3>
    </div>
    <p class="text-sm text-foreground/90 leading-relaxed font-medium">
      रेलवे भर्ती बोर्ड (RRB CEN 03/2024 व 2026) ने जूनियर इंजीनियर (JE), डिपो सामग्री अधीक्षक (DMS) और CMA के <strong>7,951 पदों</strong> पर भर्ती निकाली है। 7वें वेतन आयोग के <strong>लेवल-6 (मूल वेतन ₹35,400; सकल वेतन लगभग ₹69,120 प्रति माह)</strong> पर चयनित होने के लिए उम्मीदवारों को दो चरणों की ऑनलाइन परीक्षा से गुजरना होता है: <strong>CBT-1 (100 प्रश्न / 90 मिनट)</strong> और <strong>CBT-2 (150 प्रश्न / 120 मिनट जिसमें 100 अंक तकनीकी शाखा के हैं)</strong>। आवेदन करते समय पासपोर्ट फोटो (<strong>240 × 320 पिक्सल, 30 KB से 70 KB</strong> सफेद बैकग्राउंड) और हस्ताक्षर (<strong>140 × 60 पिक्सल, 10 KB से 20 KB</strong> काली स्याही) अपलोड करना अनिवार्य है।
    </p>
  </div>
\`,
    contentHtml_mr: \`
  <div class="my-6 p-6 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border border-primary/20 shadow-xs space-y-4">
    <div class="flex items-center gap-2.5 text-primary">
      <span class="text-xl">🚆</span>
      <h3 class="text-base font-bold text-foreground">थेट सारांश: RRB JE भरती 2026</h3>
    </div>
    <p class="text-sm text-foreground/90 leading-relaxed font-medium">
      रेल्वे भरती बोर्डाने (RRB CEN 03/2024) कनिष्ठ अभियंता (JE), DMS आणि CMA च्या <strong>7,951 पदांसाठी</strong> भरती जाहीर केली आहे. <strong>लेव्हल-6 (मूळ वेतन ₹35,400; एकूण पगार ~₹69,120)</strong> मध्ये निवड होण्यासाठी <strong>CBT-1 (100 प्रश्न)</strong> आणि <strong>CBT-2 (150 प्रश्न, 100 तांत्रिक गुण)</strong> उत्तीर्ण होणे आवश्यक आहे. अर्जासाठी पासपोर्ट फोटो (<strong>240 × 320 px, 30 ते 70 KB</strong>) आणि स्वाक्षरी (<strong>140 × 60 px, 10 ते 20 KB</strong>) आवश्यक आहे.
    </p>
  </div>
\`
  },
`;

const insertTarget = 'export const BLOG_POSTS: BlogPost[] = [\n';
if (!content.includes(insertTarget)) {
  console.error('Target insert string not found!');
  process.exit(1);
}

content = content.replace(insertTarget, insertTarget + rrbJePost);
fs.writeFileSync(blogFilePath, content, 'utf8');
console.log('Successfully inserted RRB JE 2026 post into blogPostsData.ts!');
