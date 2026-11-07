import fs from 'fs';

const postData = {
  slug: 'jee-main-2026-session-1-registration-syllabus-photo-signature-guidelines',
  title: 'JEE Main 2026 Session 1 & 2: Registration, Syllabus, 75% Board Rule & 10–200KB Photo / 4–30KB Signature Resizer Rules',
  title_hi: 'JEE Main 2026 सेशन 1 व 2: रजिस्ट्रेशन, सिलेबस, 75% बोर्ड नियम और 10-200KB फोटो व 4-30KB हस्ताक्षर नियम',
  title_mr: 'JEE Main 2026 सत्र १ व २: नोंदणी, अभ्यासक्रम, ७५% बोर्ड पात्रता आणि १०-२००KB फोटो व ४-३०KB स्वाक्षरी नियम',
  metaTitle: 'JEE Main 2026 Guide: Registration, Syllabus & Photo-Sign Rules',
  metaTitle_hi: 'JEE Main 2026 गाइड: रजिस्ट्रेशन, सिलेबस और फोटो-स्वाक्षरी नियम',
  metaTitle_mr: 'JEE Main 2026 मार्गदर्शक: नोंदणी, अभ्यासक्रम आणि फोटो-स्वाक्षरी नियम',
  metaDescription: 'Complete NTA JEE Main 2026 guide: Session 1 & 2 schedules, 75% eligibility criteria, Paper 1 B.Tech exam pattern with numerical negative marking, chapter weightage & 10–200 KB photo / 4–30 KB sign resizers.',
  metaDescription_hi: 'NTA JEE मेन 2026 संपूर्ण गाइड: सेशन 1 व 2 तिथियां, 75% बोर्ड पात्रता, पेपर 1 मार्किंग स्कीम, चैप्टर वेटेज और 10-200 KB फोटो व 4-30 KB हस्ताक्षर रीसाइजर टूल्स।',
  metaDescription_mr: 'NTA JEE मेन 2026 सविस्तर मार्गदर्शक: सत्र १ व २ वेळापत्रक, ७५% बोर्ड पात्रता, पेपर १ परीक्षा पॅटर्न, विषयवार वेटेज आणि १०-२०० KB फोटो व ४-३० KB स्वाक्षरी नियम.',
  excerpt: 'Authoritative handbook for National Testing Agency (NTA) JEE Main 2026 aspirants: Session 1 (January) & Session 2 (April) application schedule, 75% Class 12 board marks eligibility criteria, Paper 1 B.Tech 300-mark pattern (+4/-1 for Section A MCQs & Section B numericals), chapter weightages in Physics, Chemistry & Mathematics, live webcam matching rules, visual Do/Don\'t checklists, and instant 10–200 KB photo & 4–30 KB cursive signature resizer tools.',
  excerpt_hi: 'राष्ट्रीय परीक्षा एजेंसी (NTA) JEE मेन 2026 का आधिकारिक विश्लेषण: सेशन 1 (जनवरी) व सेशन 2 (अप्रैल) शेड्यूल, 75% 12वीं बोर्ड पात्रता नियम, पेपर 1 (300 अंक) मार्किंग स्कीम, फिजिक्स, केमिस्ट्री व मैथ्स के मुख्य चैप्टर्स, लाइव वेबकैम फोटो नियम और 10-200 KB फोटो व 4-30 KB हस्ताक्षर रीसाइजर टूल्स।',
  excerpt_mr: 'नॅशनल टेस्टिंग एजन्सी (NTA) JEE मेन 2026 चे संपूर्ण विश्लेषण: सत्र १ (जानेवारी) व सत्र २ (एप्रिल) नोंदणी वेळापत्रक, १२वी बोर्ड ७५% पात्रता नियम, पेपर १ (३०० गुण) परीक्षा स्वरूप, भौतिकशास्त्र, रसायनशास्त्र व गणितातील महत्त्वाचे प्रकरणे, आणि १०-२०० KB फोटो व ४-३० KB स्वाक्षरी रीसाइजर टूल्स.',
  category: 'Exam Alerts',
  country: 'IN',
  publishDate: 'Oct 27, 2026',
  publishTime: '09:00 AM IST',
  lastUpdated: 'Oct 27, 2026',
  deployedAt: 'Oct 27, 2026 • 09:00 AM IST',
  author: 'SignResize Engineering Technical Desk',
  authorRole: 'Senior NTA & Technical Document Standards Specialist',
  readTime: '15 min read',
  featured: true,
  relatedExamPreset: 'jee-main-photo',
  guideTool: {
    href: '/jee-main-photo-resize/',
    label: 'JEE Main Photo Resizer (10–200 KB)'
  },
  tags: [
    'JEE Main 2026',
    'NTA JEE Main Session 1',
    'JEE Main Registration 2026',
    'JEE Main Photo Size 10 to 200 KB',
    'JEE Main Signature Resize 4 to 30 KB',
    'JEE Main 75 Percent Rule',
    'JEE Main Syllabus 2026',
    'JEE Main Paper 1 Pattern',
    'JEE Main Negative Marking',
    'jeemain.nta.nic.in',
    'JoSAA Counselling 2026',
    'NTA Live Webcam Photo'
  ],
  quickFacts: [
    { label: 'Conducting Body', value: 'National Testing Agency (NTA - jeemain.nta.nic.in)' },
    { label: 'Examination Scope', value: 'Session 1 (January 2026) & Session 2 (April 2026)' },
    { label: 'Academic Streams', value: 'B.E./B.Tech (Paper 1), B.Arch (Paper 2A), B.Planning (Paper 2B)' },
    { label: 'NIT/IIIT Eligibility', value: '75% aggregate in 12th Board (65% for SC/ST) or Top 20 Percentile' },
    { label: 'Paper 1 Structure', value: '300 Marks (90 Questions: attempt 75 across Physics, Chem & Maths)' },
    { label: 'Marking Scheme', value: '+4 Correct, -1 Incorrect (Applies to both MCQs and Section B Numericals)' },
    { label: 'Upper Age Limit', value: 'No age limit for JEE Main (subject to Class 12 passing year criteria)' },
    { label: 'Photo Dimensions', value: '300 × 400 px (3.5×4.5 cm) | 10 KB to 200 KB JPG (White BG, 80% Face)' },
    { label: 'Signature Dimensions', value: '140 × 60 px (3.5×1.5 cm) | 4 KB to 30 KB JPG (Running Hand, Black/Blue Ink)' },
    { label: 'Live Capture Rule', value: 'Mandatory real-time webcam photograph matching uploaded studio passport photo' },
    { label: 'Counseling Authorities', value: 'Joint Seat Allocation Authority (JoSAA) & CSAB' },
    { label: 'Official Portals', value: 'jeemain.nta.nic.in & nta.ac.in' }
  ],
  quickFacts_hi: [
    { label: 'परीक्षा प्राधिकरण', value: 'राष्ट्रीय परीक्षा एजेंसी (NTA - jeemain.nta.nic.in)' },
    { label: 'परीक्षा सत्र', value: 'सेशन 1 (जनवरी 2026) और सेशन 2 (अप्रैल 2026)' },
    { label: 'पाठ्यक्रम', value: 'बी.ई./बी.टेक (पेपर 1), बी.आर्क (पेपर 2A), बी.प्लानिंग (पेपर 2B)' },
    { label: 'बोर्ड पात्रता', value: '12वीं में न्यूनतम 75% अंक (एससी/एसटी के लिए 65%) या टॉप 20 परसेंटाइल' },
    { label: 'पेपर 1 प्रारूप', value: '300 अंक (90 प्रश्न: 75 हल करने अनिवार्य, फिजिक्स/केमिस्ट्री/मैथ्स)' },
    { label: 'नेगेटिव मार्किंग', value: '+4 सही, -1 गलत (MCQ और न्यूमेरिकल दोनों सेक्शन में लागू)' },
    { label: 'आयु सीमा', value: 'कोई ऊपरी आयु सीमा नहीं (12वीं उत्तीर्ण वर्ष की शर्तों के अधीन)' },
    { label: 'फोटो विनिर्देश', value: '300 × 400 px (3.5×4.5 cm) | 10 KB से 200 KB JPG (सफेद बैकग्राउंड, 80% चेहरा)' },
    { label: 'हस्ताक्षर विनिर्देश', value: '140 × 60 px (3.5×1.5 cm) | 4 KB से 30 KB JPG (रनिंग हैंडराइटिंग, नो कैपिटल्स)' },
    { label: 'आधिकारिक पोर्टल', value: 'jeemain.nta.nic.in और nta.ac.in' }
  ],
  quickFacts_mr: [
    { label: 'परीक्षा मंडळ', value: 'नॅशनल टेस्टिंग एजन्सी (NTA - jeemain.nta.nic.in)' },
    { label: 'परीक्षा सत्र', value: 'सत्र १ (जानेवारी २०२६) आणि सत्र २ (एप्रिल २०२६)' },
    { label: 'अभ्यासक्रम', value: 'B.E./B.Tech (पेपर १), B.Arch (पेपर २A), B.Planning (पेपर २B)' },
    { label: 'बोर्ड पात्रता', value: '१२वीत किमान ७५% गुण (SC/ST साठी ६५%) किंवा टॉप २० परसेंटाइल' },
    { label: 'पेपर १ स्वरूप', value: '३०० गुण (९० प्रश्न: ७५ सोडवणे बंधनकारक)' },
    { label: 'नेगेटिव्ह मार्किंग', value: '+४ बरोबर, -१ चूक (MCQ व न्यूमेरिकल दोन्हीसाठी लागू)' },
    { label: 'वयोमर्यादा', value: 'कोणतीही कमाल वयोमर्यादा नाही' },
    { label: 'फोटो आकार', value: '300 × 400 px | 10 KB ते 200 KB JPG (पांढरी पार्श्वभूमी, ८०% चेहरा)' },
    { label: 'स्वाक्षरी आकार', value: '140 × 60 px | 4 KB ते 30 KB JPG (धावती स्वाक्षरी, काळी/निळी शाई)' },
    { label: 'अधिकृत संकेतस्थळ', value: 'jeemain.nta.nic.in आणि nta.ac.in' }
  ],
  faqs: [
    {
      question: 'Can candidates appear in both Session 1 and Session 2 of JEE Main 2026, and how is the percentile computed?',
      answer: 'Yes, candidates can choose to appear in either Session 1 (January 2026), Session 2 (April 2026), or **both sessions**. If a candidate appears in both sessions, NTA computes the final All India Rank (AIR) and merit cutoff using the **best of the two total NTA scores (percentiles)**. Candidates can register for Session 1 initially and register for Session 2 when its separate portal opens, or register for both sessions concurrently during the initial window.'
    },
    {
      question: 'What is the 75% eligibility criteria for admission into NITs, IIITs, and CFTIs through JoSAA?',
      answer: 'To secure admission into National Institutes of Technology (NITs), Indian Institutes of Information Technology (IIITs), and Centrally Funded Technical Institutions (CFTIs) through JoSAA counseling, general, OBC-NCL, and EWS candidates must obtain at least **75% aggregate marks in Class 12 board examinations**, or rank in the **top 20 percentile** of their respective qualifying board. For SC and ST candidates, the minimum qualifying cutoff is **65% aggregate marks**.'
    },
    {
      question: 'Is there negative marking for numerical value questions (Section B) in Paper 1 (B.Tech)?',
      answer: 'Yes. National Testing Agency enforces negative marking in **both Section A (MCQs) and Section B (Numerical Value Questions)**. For every question answered correctly in Section B, candidates receive **+4 marks**, while every incorrect numerical answer incurs a penalty of **-1 mark**. Unanswered questions carry 0 marks. In Section B, candidates are presented with 10 numerical questions per subject and must attempt exactly 5.'
    },
    {
      question: 'What are the exact dimensions and file size limits for NTA JEE Main photograph and signature?',
      answer: 'NTA strictly specifies: **Passport Photograph** must be in JPG/JPEG format, file size between **10 KB and 200 KB**, dimensions of **3.5 × 4.5 cm (300 × 400 pixels)** at 200 DPI, with 80% face coverage against a pure white background. **Signature** must be in JPG/JPEG format, file size between **4 KB and 30 KB**, dimensions of **3.5 × 1.5 cm (140 × 60 pixels)**, signed in continuous running handwriting with a black or dark blue ballpoint pen on plain white paper.'
    },
    {
      question: 'Why does NTA automatically reject signatures executed in CAPITAL LETTERS or BLOCK LETTERS?',
      answer: 'NTA Information Bulletin explicitly notes that signatures written in **ALL-CAPS, CAPITAL LETTERS, or disconnected BLOCK PRINT are legally invalid and will be disqualified**. Signatures must represent the candidate\'s natural, continuous cursive handwriting signature. Applications with block-letter signatures are rejected during pre-admit card algorithmic audits without refund.'
    },
    {
      question: 'What is the NTA live webcam photo capture rule during online registration?',
      answer: 'During online registration on `jeemain.nta.nic.in`, candidates must undergo real-time **live webcam photograph capture** directly through their browser, in addition to uploading their studio passport photograph. The live capture checks for facial biometric parity, ambient lighting, and anti-spoofing. The uploaded studio photo and the live webcam capture are matched at exam center biometric gates.'
    },
    {
      question: 'Can candidates wear spectacles or colored sunglasses in the uploaded JEE Main photograph?',
      answer: 'Spectacles with tinted lenses, sunglasses, or spectacles causing flash reflection/glare across the eyes are **strictly prohibited** and trigger immediate algorithmic upload rejection. If a candidate wears regular clear prescription spectacles daily, they may wear them provided there is zero reflection on the glass and both eyes and pupils remain 100% visible. Clear, unobstructed view of eyes and ears is mandatory.'
    },
    {
      question: 'What are the highest weightage chapters in Mathematics, Physics, and Chemistry for JEE Main 2026?',
      answer: 'Historically, high-weightage topics include: **Physics:** Modern Physics (Dual Nature, Atoms, Nuclei ~12-16 marks), Current Electricity & Magnetism (~16 marks), Thermodynamics & KTG (~12 marks), and Geometrical Optics (~8 marks). **Chemistry:** Coordination Compounds & Chemical Bonding (~16 marks), Organic Reaction Mechanisms & Named Reactions (~20 marks), Thermodynamics & Equilibrium (~12 marks). **Mathematics:** Vectors & 3D Geometry (~16-20 marks), Definite Integration & Calculus (~16 marks), Matrices & Determinants (~8 marks), and Coordinate Geometry (~16 marks).'
    },
    {
      question: 'What identity documents are accepted for JEE Main registration and entry into the exam hall?',
      answer: 'For online application: Aadhaar Number, Passport, PAN Card, Voter ID, or School/College ID with photograph. For exam center entry: Candidates must carry their printed **JEE Main Admit Card (with filled self-declaration on A4 paper)**, one original valid **Government Photo ID proof** (Aadhaar Card, Passport, Voter ID, PAN, or 12th Board Admit Card with photo), one passport photograph identical to the uploaded one (for the attendance sheet), and PwD certificate if applicable.'
    },
    {
      question: 'How do I resolve "File size must be between 10 KB and 200 KB" or "Invalid Dimensions" on the NTA portal?',
      answer: 'This error occurs when the uploaded JPG file size drops below 10 KB, exceeds 200 KB, or deviates from the mandatory 3:4 aspect ratio. Use the free **SignResize JEE Main Photo Resizer** to crop your photo to exact 300×400 px (3.5×4.5 cm) and compress it safely into the 50–100 KB sweet spot. For signatures, use the **SignResize JEE Main Signature Resizer** to lock 140×60 px and compress to 10–20 KB with optimal contrast.'
    }
  ],
  faqs_hi: [
    {
      question: 'क्या उम्मीदवार JEE Main 2026 के सेशन 1 और सेशन 2 दोनों में बैठ सकते हैं?',
      answer: 'हाँ, उम्मीदवार सेशन 1 (जनवरी), सेशन 2 (अप्रैल), या दोनों सत्रों में भाग ले सकते हैं। यदि कोई उम्मीदवार दोनों सत्रों में उपस्थित होता है, तो NTA दोनों सत्रों के सर्वश्रेष्ठ NTA स्कोर (परसेंटाइल) के आधार पर अंतिम ऑल इंडिया रैंक (AIR) तैयार करता है।'
    },
    {
      question: 'NITs और IIITs में प्रवेश के लिए 75% बोर्ड पात्रता नियम क्या है?',
      answer: 'JoSAA काउंसलिंग के माध्यम से NITs, IIITs और CFTIs में प्रवेश हेतु सामान्य, OBC और EWS उम्मीदवारों को 12वीं बोर्ड परीक्षा में न्यूनतम 75% कुल अंक प्राप्त करने होंगे या अपने संबंधित बोर्ड के टॉप 20 परसेंटाइल में होना होगा। SC/ST उम्मीदवारों के लिए न्यूनतम कटऑफ 65% अंक है।'
    },
    {
      question: 'क्या पेपर 1 (B.Tech) के न्यूमेरिकल सेक्शन B में नेगेटिव मार्किंग होती है?',
      answer: 'हाँ। NTA सेक्शन A (MCQs) और सेक्शन B (न्यूमेरिकल वैल्यू प्रश्न) दोनों में नेगेटिव मार्किंग लागू करता है। प्रत्येक सही उत्तर पर +4 अंक मिलते हैं और प्रत्येक गलत उत्तर पर -1 अंक काटा जाता है। सेक्शन B में 10 में से केवल 5 प्रश्न हल करने होते हैं।'
    },
    {
      question: 'JEE Main 2026 के लिए फोटो और हस्ताक्षर के सही आकार व KB नियम क्या हैं?',
      answer: 'फोटो: 10 KB से 200 KB, JPG प्रारूप, 3.5×4.5 cm (300×400 px), सफेद बैकग्राउंड और 80% चेहरा। हस्ताक्षर: 4 KB से 30 KB, JPG प्रारूप, 3.5×1.5 cm (140×60 px), सफेद कागज पर काली या नीली स्याही से रनिंग हैंडराइटिंग (कैपिटल लेटर्स वर्जित)।'
    },
    {
      question: 'कैपिटल या ब्लॉक लेटर्स में हस्ताक्षर करने पर फॉर्म क्यों रिजेक्ट हो जाता है?',
      answer: 'NTA के नियमानुसार ब्लॉक या कैपिटल लेटर्स में किए गए हस्ताक्षर अमान्य होते हैं। हस्ताक्षर उम्मीदवार की स्वाभाविक रनिंग लिखावट में होना आवश्यक है। ब्लॉक लेटर्स वाले हस्ताक्षर फॉर्म जांच के दौरान स्वतः निरस्त कर दिए जाते हैं।'
    }
  ],
  faqs_mr: [
    {
      question: 'JEE Main 2026 च्या दोन्ही सत्रांना बसता येते का आणि रँक कशी ठरवली जाते?',
      answer: 'होय, उमेदवार सत्र १ (जानेवारी) आणि सत्र २ (एप्रिल) दोन्हीमध्ये बसू शकतात. दोन्ही सत्रांना बसल्यास, दोन्हीपैकी ज्या सत्रात सर्वोत्तम NTA स्कोअर (परसेंटाइल) मिळाला असेल तो अंतिम ऑल इंडिया रँकसाठी (AIR) ग्राह्य धरला जातो.'
    },
    {
      question: 'NIT आणि IIIT प्रवेशासाठी १२वीत ७५% गुणांचा नियम काय आहे?',
      answer: 'JoSAA द्वारे NITs, IIITs मध्ये प्रवेश मिळवण्यासाठी ओपन, OBC आणि EWS उमेदवारांना १२वी बोर्ड परीक्षेत किमान ७५% गुण किंवा बोर्डाच्या टॉप २० परसेंटाइलमध्ये असणे आवश्यक आहे. SC आणि ST उमेदवारांसाठी किमान पात्रता ६५% गुण आहे.'
    },
    {
      question: 'JEE Main पेपर १ च्या न्यूमेरिकल सेक्शन B मध्ये नेगेटिव्ह मार्किंग असते का?',
      answer: 'होय. NTA नुसार सेक्शन A आणि सेक्शन B (न्यूमेरिकल) दोन्हीमध्ये बरोबर उत्तरासाठी +४ आणि चुकीच्या उत्तरासाठी -१ गुण वजा केला जातो. सेक्शन B मधील १० पैकी ५ प्रश्न सोडवणे अनिवार्य असते.'
    },
    {
      question: 'JEE Main साठी फोटो आणि स्वाक्षरीचे अचूक नियम काय आहेत?',
      answer: 'फोटो: १० ते २०० KB, JPG, ३.५×४.५ सेमी (३००×४०० px), पांढरी पार्श्वभूमी आणि ८०% चेहरा. स्वाक्षरी: ४ ते ३० KB, JPG, ३.५×१.५ सेमी (१४०×६० px), धावत्या अक्षरातील स्वाक्षरी (कॅपिटल अक्षरे चालत नाहीत).'
    },
    {
      question: 'स्वाक्षरी कॅपिटल अक्षरांमध्ये असल्यास अर्ज का नाकारला जातो?',
      answer: 'NTA च्या अधिकृत नियमानुसार कॅपिटल किंवा ब्लॉक अक्षरांमधील स्वाक्षरी कायदेशीररीत्या अवैध मानली जाते. स्वाक्षरी नेहमी धावत्या (Cursive) हस्तलिखितात असणे बंधनकारक आहे.'
    }
  ]
};

// Generate Rich HTML Content
const contentHtml = `
  <!-- Sticky Quick-Jump Pill Bar -->
  <div class="mt-3 mb-6 p-3 rounded-2xl bg-card border border-border shadow-xs backdrop-blur-md sticky top-28 sm:top-[116px] z-20 relative quick-jump-wrapper">
    <div class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider px-2 mb-1.5 flex items-center justify-between">
      <span class="flex items-center gap-1.5"><span class="text-primary">⚡</span> Quick Jump Navigation:</span>
      <span class="text-[10px] text-muted-foreground font-medium flex items-center gap-1 opacity-70">
        <span>Scroll</span> <span>&rarr;</span>
      </span>
    </div>
    <div class="relative">
      <div class="quick-jump-fade-mask"></div>
      <div class="flex items-center gap-1.5 overflow-x-auto scrollbar-thin pb-1 text-xs whitespace-nowrap pr-8">
        <a href="#document-specs" class="px-2.5 py-1 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-bold transition flex items-center gap-1 shrink-0">
          <span>📸</span> <span>Photo (10–200 KB)</span>
        </a>
        <a href="#signature-specs" class="px-2.5 py-1 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-bold transition flex items-center gap-1 shrink-0">
          <span>✍️</span> <span>Sign (4–30 KB)</span>
        </a>
        <a href="#visual-checklist" class="px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold transition flex items-center gap-1 shrink-0">
          <span>🛡️</span> <span>Do vs Don't</span>
        </a>
        <a href="#instant-resizers" class="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition flex items-center gap-1 shrink-0 shadow-2xs">
          <span>🛠️</span> <span>Live Dropzones</span>
        </a>
        <a href="#session-timeline" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition flex items-center gap-1 shrink-0">
          <span>📊</span> <span>Session 1 vs 2 Dates</span>
        </a>
        <a href="#eligibility-75-rule" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition flex items-center gap-1 shrink-0">
          <span>🎓</span> <span>75% Board Rule</span>
        </a>
        <a href="#exam-pattern" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition flex items-center gap-1 shrink-0">
          <span>📝</span> <span>Paper 1 Pattern & -1 Mark</span>
        </a>
        <a href="#syllabus-weightage" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition flex items-center gap-1 shrink-0">
          <span>📚</span> <span>High-Weight Chapters</span>
        </a>
        <a href="#official-portals" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition flex items-center gap-1 shrink-0">
          <span>🌐</span> <span>NTA & JoSAA Portals</span>
        </a>
        <a href="#faqs" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition flex items-center gap-1 shrink-0">
          <span>❓</span> <span>10 FAQs</span>
        </a>
      </div>
    </div>
  </div>

  <!-- Notification & Scrutiny Alert Banner with Direct Portal Link -->
  <div class="mt-8 mb-6 p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 text-foreground space-y-3 shadow-xs">
    <div class="flex items-center justify-between flex-wrap gap-2">
      <div class="flex items-center gap-2">
        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-600 text-white shrink-0">
          <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> NTA OFFICIAL BULLETIN UPDATE
        </span>
        <span class="text-xs font-bold text-amber-700 dark:text-amber-300">Joint Entrance Examination (Main) 2026 Session 1 & 2</span>
      </div>
      <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-900 dark:text-amber-200 font-bold">jeemain.nta.nic.in</span>
    </div>

    <p class="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
      <strong>Biometric Scrutiny Warning:</strong> The National Testing Agency (NTA) deploys algorithmic image validation during candidate registration. Uploaded photographs must have exactly <strong>80% face coverage against a pure white background</strong>. Additionally, candidates must complete a <strong>mandatory real-time live webcam photograph capture</strong>. If the live webcam capture mismatches the uploaded studio passport photo, or if signatures are submitted in <strong>CAPITAL / BLOCK LETTERS</strong>, the candidate\'s admit card is automatically withheld. Format credentials in seconds using the <a href="/jee-main-photo-resize/" class="text-primary font-bold underline">JEE Main Photo Tool</a> and <a href="/jee-main-signature-resize/" class="text-primary font-bold underline">JEE Main Signature Tool</a>.
    </p>

    <!-- Direct Official Portal Action Button -->
    <div class="pt-1 flex flex-wrap gap-2.5 items-center">
      <a href="https://jeemain.nta.nic.in" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-bold text-xs hover:opacity-90 transition shadow-xs">
        <span>📄</span> Open Official NTA JEE Main Portal (jeemain.nta.nic.in) &rarr;
      </a>
      <span class="text-[11px] text-muted-foreground">Direct access to official examination gateway & information bulletin</span>
    </div>
  </div>

  <!-- Section 1: Session 1 vs Session 2 Schedule -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="session-timeline">📊 1. JEE Main 2026 Schedule & Session 1 vs Session 2 Timeline</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    JEE Main is administered twice annually by the National Testing Agency to provide aspirants multiple opportunities to optimize their scores without dropping an academic year:
  </p>

  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs relative table-scroll-hint-wrapper">
    <div class="p-3 bg-slate-100 dark:bg-slate-800/80 border-b border-border flex items-center justify-between text-xs font-semibold">
      <span class="flex items-center gap-1.5 text-foreground font-bold"><span>📅</span> NTA JEE Main 2026 Calendar & Operational Phases</span>
      <span class="text-[11px] text-primary font-bold sm:hidden flex items-center gap-1 bg-primary/15 px-2.5 py-0.5 rounded-full border border-primary/25 shadow-2xs animate-pulse">
        <span>👉</span> Swipe table
      </span>
    </div>
    <div class="pointer-events-none absolute top-10 bottom-0 right-0 w-8 bg-gradient-to-l from-card via-card/90 to-transparent sm:hidden z-10"></div>
    <div class="overflow-x-auto relative">
      <table class="w-full text-xs sm:text-sm border-collapse min-w-[550px]">
        <thead>
          <tr class="bg-muted/40 text-muted-foreground text-left border-b border-border">
            <th class="p-3 font-semibold">Examination Event</th>
            <th class="p-3 font-semibold">Session 1 (January 2026)</th>
            <th class="p-3 font-semibold">Session 2 (April 2026)</th>
            <th class="p-3 font-semibold">Operational Importance</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Online Registration Window</td>
            <td class="p-3 text-muted-foreground">November – December 2025</td>
            <td class="p-3 text-muted-foreground">February – March 2026</td>
            <td class="p-3 text-xs text-muted-foreground">Live webcam photo + studio upload</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">City Intimation Slip</td>
            <td class="p-3 text-muted-foreground">Early January 2026</td>
            <td class="p-3 text-muted-foreground">Late March 2026</td>
            <td class="p-3 text-xs text-muted-foreground">Advance notification of test city</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Admit Card Download</td>
            <td class="p-3 text-muted-foreground">3 Days Prior to Exam Day</td>
            <td class="p-3 text-muted-foreground">3 Days Prior to Exam Day</td>
            <td class="p-3 text-xs text-muted-foreground">Must carry printed A4 copy + original ID</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">CBT Examination Dates</td>
            <td class="p-3 font-bold text-primary">Late January 2026</td>
            <td class="p-3 font-bold text-primary">Early April 2026</td>
            <td class="p-3 text-xs text-muted-foreground">Shift 1 (9 AM-12 PM) & Shift 2 (3-6 PM)</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">NTA Scorecards (Percentile)</td>
            <td class="p-3 text-muted-foreground">February 2026</td>
            <td class="p-3 text-muted-foreground">Late April 2026</td>
            <td class="p-3 text-xs text-muted-foreground">Normalized NTA multi-shift score</td>
          </tr>
          <tr class="bg-primary/5 font-bold">
            <td class="p-3 text-primary">All India Rank (AIR) & Cutoffs</td>
            <td class="p-3 text-muted-foreground" colspan="2">Declared after Session 2 Evaluation (April 2026)</td>
            <td class="p-3 text-xs text-primary">Determines JEE Advanced & JoSAA entry</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Section 2: Eligibility Criteria & 75% Board Rule -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="eligibility-75-rule">🎓 2. Eligibility Criteria & 75% Board Rule: Detailed Benchmark Matrix</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    While there is no upper age limit to sit for JEE Main, admission into premier technical institutes (NITs, IIITs, and CFTIs) via JoSAA counseling is strictly subject to the statutory 75% Class 12 board criteria:
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <!-- Academic Stream & Subject Criteria -->
    <div class="p-5 rounded-2xl bg-card border border-border shadow-xs space-y-2.5">
      <h3 class="flex items-center gap-2 text-foreground font-bold text-sm">
        <span class="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">📖</span>
        <span>Class 12 Mandatory Qualifying Subjects</span>
      </h3>
      <p class="text-xs text-muted-foreground leading-relaxed">
        Candidates must have passed Class 12 (or equivalent) in 2024, 2025, or appearing in 2026. For <strong>B.E./B.Tech (Paper 1)</strong>, subjects must include:
      </p>
      <ul class="text-xs text-muted-foreground space-y-1 list-disc list-inside">
        <li><strong>Physics</strong> (Mandatory)</li>
        <li><strong>Mathematics</strong> (Mandatory)</li>
        <li><strong>Any One of:</strong> Chemistry, Biology, Biotechnology, or Technical Vocational Subject</li>
        <li><strong>One Language Subject</strong> + One Elective fifth subject</li>
      </ul>
      <div class="p-2.5 rounded-xl bg-muted/50 text-[11px] text-foreground font-medium flex items-center gap-2">
        <span>💡</span> <span><strong>Paper 2A/2B:</strong> Mathematics is mandatory for B.Arch/B.Planning; Drawing is evaluated separately.</span>
      </div>
    </div>

    <!-- 75% Rule & Top 20 Percentile Box -->
    <div class="p-5 rounded-2xl bg-card border border-border shadow-xs space-y-2.5">
      <h3 class="flex items-center gap-2 text-foreground font-bold text-sm">
        <span class="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">🎯</span>
        <span>JoSAA NIT / IIIT / CFTI Admission Benchmarks</span>
      </h3>
      <p class="text-xs text-muted-foreground leading-relaxed">
        Securing a top JEE Main rank qualifies you for JoSAA seat allocation, but final admission requires fulfilling one of two criteria:
      </p>
      <div class="overflow-x-auto">
        <table class="w-full text-[11px] border-collapse">
          <thead>
            <tr class="text-muted-foreground border-b border-border text-left">
              <th class="py-1.5 font-semibold">Candidate Category</th>
              <th class="py-1.5 font-semibold">Minimum Board Aggregate</th>
              <th class="py-1.5 font-semibold">Alternative Route</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            <tr>
              <td class="py-2 font-medium text-foreground">General / OBC-NCL / EWS</td>
              <td class="py-2 font-bold text-primary">75.0% Aggregate</td>
              <td class="py-2 text-muted-foreground">Top 20 Percentile in Board</td>
            </tr>
            <tr>
              <td class="py-2 font-medium text-foreground">SC / ST Candidates</td>
              <td class="py-2 font-bold text-emerald-600 dark:text-emerald-400">65.0% Aggregate</td>
              <td class="py-2 text-muted-foreground">Top 20 Percentile in Board</td>
            </tr>
            <tr>
              <td class="py-2 font-medium text-foreground">PwD Candidates</td>
              <td class="py-2 font-bold text-emerald-600 dark:text-emerald-400">65.0% Aggregate</td>
              <td class="py-2 text-muted-foreground">Top 20 Percentile in Board</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Section 3: Exam Pattern & Marking Scheme -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="exam-pattern">📝 3. Exam Pattern: Paper 1 (B.Tech) vs Paper 2 & Marking Scheme</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    NTA administers JEE Main Paper 1 as a Computer-Based Test (CBT) consisting of 90 questions worth 300 marks. Crucially, negative marking applies equally across both multiple-choice and numerical questions:
  </p>

  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs relative table-scroll-hint-wrapper">
    <div class="p-3 bg-slate-100 dark:bg-slate-800/80 border-b border-border flex items-center justify-between text-xs font-semibold">
      <span class="flex items-center gap-1.5 text-foreground font-bold"><span>📐</span> Paper 1 (B.E. / B.Tech) Subject Structure & Question Choice</span>
      <span class="text-[11px] text-primary font-bold sm:hidden flex items-center gap-1 bg-primary/15 px-2.5 py-0.5 rounded-full border border-primary/25 shadow-2xs animate-pulse">
        <span>👉</span> Swipe table
      </span>
    </div>
    <div class="pointer-events-none absolute top-10 bottom-0 right-0 w-8 bg-gradient-to-l from-card via-card/90 to-transparent sm:hidden z-10"></div>
    <div class="overflow-x-auto relative">
      <table class="w-full text-xs sm:text-sm border-collapse min-w-[550px]">
        <thead>
          <tr class="bg-muted/40 text-muted-foreground text-left border-b border-border">
            <th class="p-3 font-semibold">Subject Domain</th>
            <th class="p-3 font-semibold">Section A (Compulsory MCQs)</th>
            <th class="p-3 font-semibold">Section B (Numericals: 5 of 10)</th>
            <th class="p-3 font-semibold">Total Questions Attempted</th>
            <th class="p-3 font-semibold">Total Marks</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Mathematics</td>
            <td class="p-3">20 Questions</td>
            <td class="p-3">Attempt 5 out of 10</td>
            <td class="p-3 font-bold text-foreground">25 Questions</td>
            <td class="p-3 font-bold text-foreground">100 Marks</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Physics</td>
            <td class="p-3">20 Questions</td>
            <td class="p-3">Attempt 5 out of 10</td>
            <td class="p-3 font-bold text-foreground">25 Questions</td>
            <td class="p-3 font-bold text-foreground">100 Marks</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Chemistry</td>
            <td class="p-3">20 Questions</td>
            <td class="p-3">Attempt 5 out of 10</td>
            <td class="p-3 font-bold text-foreground">25 Questions</td>
            <td class="p-3 font-bold text-foreground">100 Marks</td>
          </tr>
          <tr class="bg-primary/5 font-bold">
            <td class="p-3 text-primary">Cumulative Totals</td>
            <td class="p-3 text-primary">60 MCQs</td>
            <td class="p-3 text-primary">15 Numericals (out of 30)</td>
            <td class="p-3 text-primary">75 Questions</td>
            <td class="p-3 text-primary">300 Marks</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Negative Marking Callout Box -->
  <div class="my-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-950 dark:text-rose-100 flex items-start gap-3 shadow-xs">
    <span class="text-xl shrink-0 mt-0.5">⚠️</span>
    <div class="space-y-1 text-xs sm:text-sm">
      <h3 class="font-bold text-rose-900 dark:text-rose-300 text-sm">Critical Scoring Rule: -1 Negative Marking in Section B Numericals</h3>
      <p class="leading-relaxed">
        Unlike historical formats where Section B numerical value questions carried zero penalty, <strong>NTA enforces -1 mark penalty for incorrect numerical answers</strong> in both Session 1 and Session 2. Correct answers yield <strong>+4 marks</strong>; incorrect answers yield <strong>-1 mark</strong>; unattempted questions yield <strong>0 marks</strong>. Candidates should avoid blind guessing in numerical problems.
      </p>
    </div>
  </div>

  <!-- Section 4: High-Yield Syllabus & Chapter Weightage Breakdown -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="syllabus-weightage">📚 4. Subject-Wise High-Yield Syllabus & Chapter Weightage Breakdown</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    Based on multi-year NTA paper trend analyses, master these high-yield topics across the three domains to secure a 99+ percentile benchmark:
  </p>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    <!-- Physics Card -->
    <div class="p-4 rounded-xl bg-card border border-border shadow-xs space-y-2">
      <div class="flex items-center justify-between border-b border-border pb-1.5">
        <span class="font-bold text-xs uppercase tracking-wider text-primary">⚛️ Physics High-Yield</span>
        <span class="text-[10px] font-mono bg-primary/10 text-primary px-1.5 py-0.5 rounded font-bold">~100 Marks</span>
      </div>
      <ul class="text-xs text-muted-foreground space-y-1.5">
        <li><strong>Modern Physics:</strong> Photoelectric effect, Bohr atom, de Broglie wavelength, nuclear decay (~16 marks).</li>
        <li><strong>Current Electricity & Magnetism:</strong> Kirchhoff\'s laws, potentiometer, Biot-Savart, Ampere\'s circuital law (~16 marks).</li>
        <li><strong>Thermodynamics & KTG:</strong> Carnot engine, PV diagrams, first & second laws (~12 marks).</li>
        <li><strong>Optics:</strong> Lens formula, prism refraction, Young\'s double slit experiment (~12 marks).</li>
        <li><strong>Rotational Motion:</strong> Moment of inertia, rolling motion, angular momentum (~8 marks).</li>
      </ul>
    </div>

    <!-- Chemistry Card -->
    <div class="p-4 rounded-xl bg-card border border-border shadow-xs space-y-2">
      <div class="flex items-center justify-between border-b border-border pb-1.5">
        <span class="font-bold text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🧪 Chemistry High-Yield</span>
        <span class="text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded font-bold">~100 Marks</span>
      </div>
      <ul class="text-xs text-muted-foreground space-y-1.5">
        <li><strong>Coordination Compounds:</strong> CFT, Werner theory, IUPAC naming, isomerism (~12-16 marks).</li>
        <li><strong>Chemical Bonding:</strong> Molecular orbital theory (MOT), hybridization, VSEPR theory (~12 marks).</li>
        <li><strong>Organic Mechanisms:</strong> SN1/SN2, Aldol condensation, Cannizzaro, electrophilic aromatic substitution (~20 marks).</li>
        <li><strong>Chemical Kinetics & Equilibrium:</strong> Rate law, Le Chatelier\'s principle, solubility product (Ksp) (~12 marks).</li>
        <li><strong>Electrochemistry:</strong> Nernst equation, Faraday\'s laws, Kohlrausch law (~8 marks).</li>
      </ul>
    </div>

    <!-- Mathematics Card -->
    <div class="p-4 rounded-xl bg-card border border-border shadow-xs space-y-2">
      <div class="flex items-center justify-between border-b border-border pb-1.5">
        <span class="font-bold text-xs uppercase tracking-wider text-purple-600 dark:text-purple-400">📐 Mathematics High-Yield</span>
        <span class="text-[10px] font-mono bg-purple-500/10 text-purple-600 dark:text-purple-400 px-1.5 py-0.5 rounded font-bold">~100 Marks</span>
      </div>
      <ul class="text-xs text-muted-foreground space-y-1.5">
        <li><strong>Vectors & 3D Geometry:</strong> Lines & planes, shortest distance between skew lines, scalar/vector triple products (~16-20 marks).</li>
        <li><strong>Definite Integrals & Areas:</strong> Properties of definite integrals, Leibniz rule, area bounded by curves (~16 marks).</li>
        <li><strong>Matrices & Determinants:</strong> System of linear equations (Cramer\'s rule), inverse matrix properties (~12 marks).</li>
        <li><strong>Coordinate Geometry:</strong> Parabola, ellipse & hyperbola focal properties and tangents (~12 marks).</li>
        <li><strong>Sequences, Series & Binomial:</strong> AGP, telescoping sums, general terms (~8 marks).</li>
      </ul>
    </div>
  </div>

  <!-- Section 5: Official Photograph & Live Webcam Scrutiny Rules -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="document-specs">📸 5. Official NTA Photograph & Live Webcam Scrutiny Rules: 10–200 KB Specs</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    NTA enforces strict biometric imaging standards during online application intake. Non-compliant photos are automatically flagged by portal inspection scripts:
  </p>

  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs relative table-scroll-hint-wrapper">
    <div class="p-3 bg-slate-100 dark:bg-slate-800/80 border-b border-border flex items-center justify-between text-xs font-semibold">
      <span class="flex items-center gap-1.5 text-foreground font-bold"><span>📑</span> NTA JEE Main Upload Parameters Checklist</span>
      <span class="text-[11px] text-primary font-bold sm:hidden flex items-center gap-1 bg-primary/15 px-2.5 py-0.5 rounded-full border border-primary/25 shadow-2xs animate-pulse">
        <span>👉</span> Swipe table
      </span>
    </div>
    <div class="pointer-events-none absolute top-10 bottom-0 right-0 w-8 bg-gradient-to-l from-card via-card/90 to-transparent sm:hidden z-10"></div>
    <div class="overflow-x-auto relative">
      <table class="w-full text-xs sm:text-sm border-collapse min-w-[500px]">
        <thead>
          <tr class="bg-muted/40 text-muted-foreground text-left border-b border-border">
            <th class="p-3 font-semibold">Upload Parameter</th>
            <th class="p-3 font-semibold">Passport Photograph</th>
            <th class="p-3 font-semibold">Candidate Running Signature</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">File Format</td>
            <td class="p-3 font-mono font-bold text-foreground">JPG / JPEG Only</td>
            <td class="p-3 font-mono font-bold text-foreground">JPG / JPEG Only</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">File Size Bounds</td>
            <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">10 KB to 200 KB</td>
            <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">4 KB to 30 KB</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Pixel Dimensions</td>
            <td class="p-3 font-mono text-muted-foreground">300 × 400 px (3.5 × 4.5 cm)</td>
            <td class="p-3 font-mono text-muted-foreground">140 × 60 px (3.5 × 1.5 cm)</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Background Requirement</td>
            <td class="p-3 font-semibold text-foreground">Spotless White Background</td>
            <td class="p-3 font-semibold text-foreground">Plain White Paper Sheet</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Facial / Ink Framing</td>
            <td class="p-3 text-muted-foreground">80% face coverage, visible ears, no cap/tint</td>
            <td class="p-3 text-muted-foreground">Black or Blue Ballpoint Ink, Running Cursive</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Disqualification Trigger</td>
            <td class="p-3 font-semibold text-rose-600 dark:text-rose-400">Selfies, spectacles glare, colored backdrops</td>
            <td class="p-3 font-semibold text-rose-600 dark:text-rose-400">ALL-CAPS / Block letters or cropped phone shadows</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Live Webcam Photo Notice -->
  <div class="my-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-950 dark:text-blue-100 flex items-start gap-3 shadow-xs">
    <span class="text-xl shrink-0 mt-0.5">📹</span>
    <div class="space-y-1 text-xs sm:text-sm">
      <h3 class="font-bold text-blue-900 dark:text-blue-300 text-sm">Real-Time Live Webcam Photo Matching Requirement</h3>
      <p class="leading-relaxed">
        NTA mandates that candidates capture a <strong>live photograph using their laptop/webcam camera</strong> directly inside the registration portal. This live snap is algorithmically compared with the uploaded studio passport photo. Ensure you sit in a well-lit room facing natural light with a plain wall behind you. Do not wear caps, hats, or headphones during the webcam snap.
      </p>
    </div>
  </div>

  <!-- Section 6: Cursive Signature Standards -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="signature-specs">✍️ 6. Cursive Signature Standards: 4–30 KB Running Hand Rule</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    Candidate signatures are verified during attendance logging at examination centers and counseling biometric verification. Disconnected block printing triggers automatic cancellation:
  </p>

  <!-- Section 7: Visual Do vs Don't Inspection Mockups -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="visual-checklist">🛡️ 7. Visual Do vs Don't: Eliminate the Top Rejection Traps</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    Over 15% of initial NTA application discrepancies arise from incorrect document framing. Review these visual compliance models before submitting your credentials:
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
    <!-- Signature DO vs DON'T Card -->
    <div class="p-5 rounded-2xl bg-card border border-border shadow-xs space-y-3">
      <div class="flex items-center justify-between border-b border-border pb-2">
        <span class="font-bold text-xs uppercase tracking-wider text-foreground">✍️ Signature Running Script Audit</span>
        <span class="text-[11px] font-mono text-muted-foreground">140 × 60 px Standard</span>
      </div>
      
      <div class="grid grid-cols-2 gap-3 pt-1">
        <!-- DO Signature Box -->
        <div class="p-3 rounded-xl border-2 border-emerald-500/40 bg-emerald-500/5 space-y-2 text-center">
          <div class="h-16 flex items-center justify-center bg-white rounded-lg border border-border p-1 shadow-2xs">
            <span class="font-serif italic text-lg text-slate-900 tracking-wide select-none" style="font-family: 'Brush Script MT', cursive, sans-serif;">Aarav Sharma</span>
          </div>
          <div class="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 flex items-center justify-center gap-1">
            <span>✅</span> ACCEPTED (Cursive)
          </div>
          <p class="text-[10px] text-muted-foreground leading-tight">
            Fluid natural handwriting, black ink, clear white background without shadows.
          </p>
        </div>

        <!-- DON'T Signature Box -->
        <div class="p-3 rounded-xl border-2 border-rose-500/40 bg-rose-500/5 space-y-2 text-center">
          <div class="h-16 flex items-center justify-center bg-white rounded-lg border border-border p-1 shadow-2xs relative overflow-hidden">
            <span class="font-mono font-black text-xs text-slate-800 tracking-widest line-through select-none">AARAV SHARMA</span>
            <span class="absolute inset-0 flex items-center justify-center bg-rose-950/20 text-rose-600 font-black text-xs uppercase rotate-12">REJECTED</span>
          </div>
          <div class="text-[11px] font-bold text-rose-700 dark:text-rose-300 flex items-center justify-center gap-1">
            <span>❌</span> REJECTED (Capital Letters)
          </div>
          <p class="text-[10px] text-muted-foreground leading-tight">
            NTA Rule: Signatures in all-caps or block print are treated as invalid and rejected.
          </p>
        </div>
      </div>
    </div>

    <!-- Photograph DO vs DON'T Card -->
    <div class="p-5 rounded-2xl bg-card border border-border shadow-xs space-y-3">
      <div class="flex items-center justify-between border-b border-border pb-2">
        <span class="font-bold text-xs uppercase tracking-wider text-foreground">📷 Photograph Lighting & Framing Audit</span>
        <span class="text-[11px] font-mono text-muted-foreground">300 × 400 px Standard</span>
      </div>

      <div class="grid grid-cols-2 gap-3 pt-1">
        <!-- DO Photo Box -->
        <div class="p-3 rounded-xl border-2 border-emerald-500/40 bg-emerald-500/5 space-y-2 text-center">
          <div class="h-24 w-18 mx-auto flex items-center justify-center bg-white rounded-lg border border-border shadow-2xs overflow-hidden">
            <div class="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-600">
              <span class="text-3xl">👤</span>
              <span class="text-[8px] font-mono text-muted-foreground mt-1">80% Face Area</span>
            </div>
          </div>
          <div class="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 flex items-center justify-center gap-1">
            <span>✅</span> ACCEPTED (Studio)
          </div>
          <p class="text-[10px] text-muted-foreground leading-tight">
            Plain white backdrop, direct eye gaze, both ears visible, uniform lighting.
          </p>
        </div>

        <!-- DON'T Photo Box -->
        <div class="p-3 rounded-xl border-2 border-rose-500/40 bg-rose-500/5 space-y-2 text-center">
          <div class="h-24 w-18 mx-auto flex items-center justify-center bg-slate-800 rounded-lg border border-border shadow-2xs relative overflow-hidden">
            <div class="w-full h-full flex flex-col items-center justify-center bg-amber-900/30 text-slate-400">
              <span class="text-3xl opacity-50">🕶️</span>
              <span class="text-[8px] font-mono text-rose-400 mt-1">Glasses & Tint</span>
            </div>
            <span class="absolute inset-0 flex items-center justify-center bg-rose-950/30 text-rose-500 font-black text-xs uppercase rotate-12">REJECTED</span>
          </div>
          <div class="text-[11px] font-bold text-rose-700 dark:text-rose-300 flex items-center justify-center gap-1">
            <span>❌</span> REJECTED (Selfie/Glare)
          </div>
          <p class="text-[10px] text-muted-foreground leading-tight">
            Spectacle glare, dark glasses, cropped social media selfies, or colorful backgrounds.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Section 8: In-Page Interactive Resizer Launchers -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="instant-resizers">🛠️ 8. Instant In-Page Resizer Launchers: Prepare Compliant NTA Uploads</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    Eliminate file size errors and dimension mismatches before submitting your JEE Main application. Drop your file below for instant verification and direct 1-click resizing:
  </p>

  <!-- Common Upload Errors Quick-Fix Callout -->
  <div class="my-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3">
    <h3 class="flex items-center gap-2 text-foreground font-bold text-xs sm:text-sm">
      <span class="text-base">💡</span>
      <span>Common Upload Errors & Quick-Fix Tips (Before You Drop Your File)</span>
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
      <div class="p-3 rounded-xl bg-card/80 border border-border space-y-1">
        <span class="font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1"><span>📸</span> 80% Face Area Framing</span>
        <p class="text-muted-foreground leading-relaxed text-[11px]">
          Do not upload full-body or waist-up photos. Crop so that your head, forehead, and shoulders occupy at least 80% of the image frame with visible ears.
        </p>
      </div>
      <div class="p-3 rounded-xl bg-card/80 border border-border space-y-1">
        <span class="font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1"><span>✍️</span> Signature Aspect Ratio</span>
        <p class="text-muted-foreground leading-relaxed text-[11px]">
          NTA requires a rectangular 7:3 aspect ratio (140×60 px). Square crops compress or distort the handwriting into unreadable lines during portal ingestion.
        </p>
      </div>
      <div class="p-3 rounded-xl bg-card/80 border border-border space-y-1">
        <span class="font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1"><span>📦</span> File Size Floor & Ceiling</span>
        <p class="text-muted-foreground leading-relaxed text-[11px]">
          Photos below 10 KB or above 200 KB fail portal upload scripts. Signatures below 4 KB or above 30 KB are equally blocked. Target the safe median.
        </p>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
    <!-- Photo Launcher & Interactive Dropzone Card -->
    <div class="p-5 rounded-2xl bg-gradient-to-br from-card via-card to-primary/10 border-2 border-primary/30 shadow-xs flex flex-col justify-between space-y-4">
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-primary uppercase tracking-wider">📷 Photograph Resizer</span>
          <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-bold">300 × 400 px</span>
        </div>
        <h4 class="font-bold text-base text-foreground">NTA JEE Main Photo Tool</h4>
        <p class="text-xs text-muted-foreground leading-relaxed">
          Standardizes passport photograph to strictly <strong>10 KB to 200 KB</strong> in JPG format with pure white background and 80% face framing.
        </p>

        <!-- Interactive Drag-and-Drop Dropzone Container -->
        <div id="jee-photo-dropzone" class="group relative cursor-pointer block border-2 border-dashed border-blue-400 dark:border-blue-500/70 hover:border-blue-600 bg-blue-50/40 hover:bg-blue-100/50 dark:bg-blue-950/20 dark:hover:bg-blue-900/30 rounded-xl p-4 transition-all duration-200 text-center space-y-2 shadow-xs hover:shadow-md hover:scale-[1.01]">
          <input type="file" id="jee-photo-input" class="hidden" accept="image/jpeg,image/png,image/webp" />
          
          <!-- Interactive Badge -->
          <div class="flex justify-center">
            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white shadow-2xs">
              <span>⚡</span> Interactive Live Dropzone
            </span>
          </div>

          <!-- Idle State -->
          <div id="jee-photo-idle" class="space-y-1 py-1">
            <span class="text-2xl block group-hover:scale-125 transition-transform duration-300">📥</span>
            <span class="text-xs font-bold text-foreground block">Drop Passport Photo here</span>
            <span class="text-[10px] text-muted-foreground block">or click to browse from device (JPG, PNG, WebP)</span>
          </div>

          <!-- Analyzing Spinner State -->
          <div id="jee-photo-analyzing" class="hidden py-4 text-center text-xs font-semibold text-blue-600 dark:text-blue-400 animate-pulse space-y-1">
            <span class="text-xl block animate-spin">⚙️</span>
            <span>Analyzing photo dimensions & compression...</span>
          </div>

          <!-- Active File Inspection State -->
          <div id="jee-photo-feedback" class="hidden space-y-2 text-left">
            <div class="flex items-center gap-3">
              <img id="jee-photo-preview" class="w-12 h-16 object-cover border border-border bg-white rounded shadow-2xs" alt="Photo preview" />
              <div class="min-w-0 flex-1 text-xs">
                <div id="jee-photo-name" class="font-bold text-foreground truncate text-[11px]">filename.jpg</div>
                <div id="jee-photo-meta" class="text-[10px] text-muted-foreground">Original: calculating...</div>
                <div class="text-[10px] font-bold text-amber-600 dark:text-amber-400">Target: 300×400 px • 10–200 KB</div>
              </div>
            </div>
            <div id="jee-photo-status-badge" class="p-2 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[11px] font-semibold flex items-center gap-1.5">
              <span>⚡</span> Ready for 1-click optimization to NTA JEE Main specifications
            </div>
          </div>
        </div>
      </div>
      
      <a id="jee-photo-action-btn" href="/jee-main-photo-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-95 transition shadow-xs w-full text-center">
        <span>Open Photo Canvas (10–200 KB)</span>
        <span>&rarr;</span>
      </a>
    </div>

    <!-- Signature Launcher & Interactive Dropzone Card -->
    <div class="p-5 rounded-2xl bg-gradient-to-br from-card via-card to-primary/10 border-2 border-primary/30 shadow-xs flex flex-col justify-between space-y-4">
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-primary uppercase tracking-wider">✍️ Signature Resizer</span>
          <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-bold">140 × 60 px</span>
        </div>
        <h4 class="font-bold text-base text-foreground">NTA JEE Main Signature Tool</h4>
        <p class="text-xs text-muted-foreground leading-relaxed">
          Formats running signature to strictly <strong>4 KB to 30 KB</strong> JPG format in 140×60 px with contrast enhancement.
        </p>

        <!-- Interactive Drag-and-Drop Dropzone Container -->
        <div id="jee-sign-dropzone" class="group relative cursor-pointer block border-2 border-dashed border-blue-400 dark:border-blue-500/70 hover:border-blue-600 bg-blue-50/40 hover:bg-blue-100/50 dark:bg-blue-950/20 dark:hover:bg-blue-900/30 rounded-xl p-4 transition-all duration-200 text-center space-y-2 shadow-xs hover:shadow-md hover:scale-[1.01]">
          <input type="file" id="jee-sign-input" class="hidden" accept="image/jpeg,image/png,image/webp" />
          
          <!-- Interactive Badge -->
          <div class="flex justify-center">
            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white shadow-2xs">
              <span>⚡</span> Interactive Live Dropzone
            </span>
          </div>

          <!-- Idle State -->
          <div id="jee-sign-idle" class="space-y-1 py-1">
            <span class="text-2xl block group-hover:scale-125 transition-transform duration-300">📥</span>
            <span class="text-xs font-bold text-foreground block">Drop Signature image here</span>
            <span class="text-[10px] text-muted-foreground block">or click to browse from device (JPG, PNG, WebP)</span>
          </div>

          <!-- Analyzing Spinner State -->
          <div id="jee-sign-analyzing" class="hidden py-4 text-center text-xs font-semibold text-blue-600 dark:text-blue-400 animate-pulse space-y-1">
            <span class="text-xl block animate-spin">⚙️</span>
            <span>Analyzing signature dimensions & compression...</span>
          </div>

          <!-- Active File Inspection State -->
          <div id="jee-sign-feedback" class="hidden space-y-2 text-left">
            <div class="flex items-center gap-3">
              <img id="jee-sign-preview" class="w-20 h-10 object-contain border border-border bg-white rounded shadow-2xs" alt="Signature preview" />
              <div class="min-w-0 flex-1 text-xs">
                <div id="jee-sign-name" class="font-bold text-foreground truncate text-[11px]">filename.jpg</div>
                <div id="jee-sign-meta" class="text-[10px] text-muted-foreground">Original: calculating...</div>
                <div class="text-[10px] font-bold text-amber-600 dark:text-amber-400">Target: 140×60 px • 4–30 KB</div>
              </div>
            </div>
            <div id="jee-sign-status-badge" class="p-2 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[11px] font-semibold flex items-center gap-1.5">
              <span>⚡</span> Ready for 1-click optimization to NTA JEE Main specifications
            </div>
          </div>
        </div>
      </div>

      <a id="jee-sign-action-btn" href="/jee-main-signature-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-card border border-border text-foreground font-bold text-xs sm:text-sm hover:bg-muted/40 transition shadow-xs w-full text-center">
        <span>Open Signature Canvas (4–30 KB)</span>
        <span>&rarr;</span>
      </a>
    </div>
  </div>

  <!-- Inline Script for Interactive Dropzones -->
  <script>
    function setupJeeDropzone(zoneId, inputId, idleId, analyzingId, feedbackId, previewId, nameId, metaId, statusBadgeId, actionBtnId, toolUrl, minKb, maxKb, targetDims) {
      const dropzone = document.getElementById(zoneId);
      const input = document.getElementById(inputId);
      const idle = document.getElementById(idleId);
      const analyzing = document.getElementById(analyzingId);
      const feedback = document.getElementById(feedbackId);
      const preview = document.getElementById(previewId);
      const nameEl = document.getElementById(nameId);
      const metaEl = document.getElementById(metaId);
      const statusBadge = document.getElementById(statusBadgeId);
      const actionBtn = document.getElementById(actionBtnId);

      if (!dropzone || !input) return;

      dropzone.addEventListener('click', () => input.click());

      ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.add('border-blue-600', 'bg-blue-100/80', 'dark:bg-blue-900/60', 'ring-4', 'ring-blue-500/40', 'scale-[1.02]', 'shadow-lg');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.remove('border-blue-600', 'bg-blue-100/80', 'dark:bg-blue-900/60', 'ring-4', 'ring-blue-500/40', 'scale-[1.02]', 'shadow-lg');
        });
      });

      dropzone.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        if (files && files.length > 0) handleFile(files[0]);
      });

      input.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) handleFile(e.target.files[0]);
      });

      function handleFile(file) {
        if (!file.type.startsWith('image/')) return;

        idle.classList.add('hidden');
        if (analyzing) analyzing.classList.remove('hidden');
        if (feedback) feedback.classList.add('hidden');

        const objectUrl = URL.createObjectURL(file);
        preview.src = objectUrl;
        nameEl.textContent = file.name;
        const kbSize = (file.size / 1024).toFixed(1);
        const numericKb = parseFloat(kbSize);

        const img = new Image();
        img.onload = () => {
          setTimeout(() => {
            if (analyzing) analyzing.classList.add('hidden');
            if (feedback) feedback.classList.remove('hidden');

            metaEl.textContent = 'Original: ' + img.naturalWidth + '×' + img.naturalHeight + ' px • ' + kbSize + ' KB';

            if (statusBadge) {
              if (numericKb > maxKb) {
                statusBadge.className = 'p-2 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 text-[11px] font-semibold flex items-center gap-1.5';
                statusBadge.innerHTML = '<span>⚠️</span> Oversized (' + kbSize + ' KB) &rarr; Auto-compress to ' + minKb + '–' + maxKb + ' KB on canvas';
              } else if (numericKb < minKb) {
                statusBadge.className = 'p-2 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 text-[11px] font-semibold flex items-center gap-1.5';
                statusBadge.innerHTML = '<span>⚠️</span> Undersized (<' + minKb + ' KB) &rarr; Auto-pad to meet ' + minKb + ' KB floor';
              } else {
                statusBadge.className = 'p-2 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[11px] font-semibold flex items-center gap-1.5';
                statusBadge.innerHTML = '<span>✅</span> In-range size (' + kbSize + ' KB) &rarr; Format dimensions to ' + targetDims;
              }
            }

            if (actionBtn) {
              actionBtn.innerHTML = '<span>🚀 Resizing Ready: Format ' + file.name.slice(0, 15) + '... (' + kbSize + ' KB)</span> <span>&rarr;</span>';
              actionBtn.className = 'inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 transition shadow-md ring-2 ring-blue-500/50 w-full text-center animate-pulse';
            }
          }, 250);
        };
        img.src = objectUrl;
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      setupJeeDropzone('jee-photo-dropzone', 'jee-photo-input', 'jee-photo-idle', 'jee-photo-analyzing', 'jee-photo-feedback', 'jee-photo-preview', 'jee-photo-name', 'jee-photo-meta', 'jee-photo-status-badge', 'jee-photo-action-btn', '/jee-main-photo-resize/', 10, 200, '300×400 px');
      setupJeeDropzone('jee-sign-dropzone', 'jee-sign-input', 'jee-sign-idle', 'jee-sign-analyzing', 'jee-sign-feedback', 'jee-sign-preview', 'jee-sign-name', 'jee-sign-meta', 'jee-sign-status-badge', 'jee-sign-action-btn', '/jee-main-signature-resize/', 4, 30, '140×60 px');
    });
  </script>

  <!-- Section 9: Official NTA Portals Directory & JoSAA Roadmap -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="official-portals">🌐 9. Official NTA Portals Directory & JoSAA/CSAB Admissions Roadmap</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    Candidates must access online application submissions, answer key challenges, and seat allocation through verified government URLs:
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 my-6">
    <div class="p-3.5 rounded-xl bg-card border border-border shadow-xs space-y-1">
      <span class="text-xs font-bold text-foreground block">NTA JEE Portal</span>
      <a href="https://jeemain.nta.nic.in" target="_blank" rel="noopener noreferrer" class="text-xs text-primary font-mono hover:underline block truncate">jeemain.nta.nic.in</a>
      <p class="text-[10px] text-muted-foreground">Session 1 & 2 Application Gateway</p>
    </div>
    <div class="p-3.5 rounded-xl bg-card border border-border shadow-xs space-y-1">
      <span class="text-xs font-bold text-foreground block">NTA Official Agency</span>
      <a href="https://nta.ac.in" target="_blank" rel="noopener noreferrer" class="text-xs text-primary font-mono hover:underline block truncate">nta.ac.in</a>
      <p class="text-[10px] text-muted-foreground">Public Circulars & Results Desk</p>
    </div>
    <div class="p-3.5 rounded-xl bg-card border border-border shadow-xs space-y-1">
      <span class="text-xs font-bold text-foreground block">JoSAA Counseling</span>
      <a href="https://josaa.nic.in" target="_blank" rel="noopener noreferrer" class="text-xs text-primary font-mono hover:underline block truncate">josaa.nic.in</a>
      <p class="text-[10px] text-muted-foreground">NIT, IIIT & IIT Joint Allocation</p>
    </div>
    <div class="p-3.5 rounded-xl bg-card border border-border shadow-xs space-y-1">
      <span class="text-xs font-bold text-foreground block">CSAB Special Rounds</span>
      <a href="https://csab.nic.in" target="_blank" rel="noopener noreferrer" class="text-xs text-primary font-mono hover:underline block truncate">csab.nic.in</a>
      <p class="text-[10px] text-muted-foreground">Vacant Seat Special Spot Counseling</p>
    </div>
  </div>
`;

postData.contentHtml = contentHtml;

// Helper to escape backticks and interpolation inside template literal
function stringifyPost(post) {
  let s = '  {\n';
  s += '    slug: ' + JSON.stringify(post.slug) + ',\n';
  s += '    title: ' + JSON.stringify(post.title) + ',\n';
  s += '    title_hi: ' + JSON.stringify(post.title_hi) + ',\n';
  s += '    title_mr: ' + JSON.stringify(post.title_mr) + ',\n';
  s += '    metaTitle: ' + JSON.stringify(post.metaTitle) + ',\n';
  s += '    metaTitle_hi: ' + JSON.stringify(post.metaTitle_hi) + ',\n';
  s += '    metaTitle_mr: ' + JSON.stringify(post.metaTitle_mr) + ',\n';
  s += '    metaDescription: ' + JSON.stringify(post.metaDescription) + ',\n';
  s += '    metaDescription_hi: ' + JSON.stringify(post.metaDescription_hi) + ',\n';
  s += '    metaDescription_mr: ' + JSON.stringify(post.metaDescription_mr) + ',\n';
  s += '    excerpt: ' + JSON.stringify(post.excerpt) + ',\n';
  s += '    excerpt_hi: ' + JSON.stringify(post.excerpt_hi) + ',\n';
  s += '    excerpt_mr: ' + JSON.stringify(post.excerpt_mr) + ',\n';
  s += '    category: ' + JSON.stringify(post.category) + ',\n';
  s += '    country: ' + JSON.stringify(post.country) + ',\n';
  s += '    publishDate: ' + JSON.stringify(post.publishDate) + ',\n';
  s += '    publishTime: ' + JSON.stringify(post.publishTime) + ',\n';
  s += '    lastUpdated: ' + JSON.stringify(post.lastUpdated) + ',\n';
  s += '    deployedAt: ' + JSON.stringify(post.deployedAt) + ',\n';
  s += '    author: ' + JSON.stringify(post.author) + ',\n';
  s += '    authorRole: ' + JSON.stringify(post.authorRole) + ',\n';
  s += '    readTime: ' + JSON.stringify(post.readTime) + ',\n';
  s += '    featured: ' + post.featured + ',\n';
  s += '    tags: ' + JSON.stringify(post.tags, null, 6) + ',\n';
  s += '    relatedExamPreset: ' + JSON.stringify(post.relatedExamPreset) + ',\n';
  s += '    guideTool: ' + JSON.stringify(post.guideTool, null, 6) + ',\n';
  s += '    quickFacts: ' + JSON.stringify(post.quickFacts, null, 6) + ',\n';
  s += '    quickFacts_hi: ' + JSON.stringify(post.quickFacts_hi, null, 6) + ',\n';
  s += '    quickFacts_mr: ' + JSON.stringify(post.quickFacts_mr, null, 6) + ',\n';
  s += '    faqs: ' + JSON.stringify(post.faqs, null, 6) + ',\n';
  s += '    faqs_hi: ' + JSON.stringify(post.faqs_hi, null, 6) + ',\n';
  s += '    faqs_mr: ' + JSON.stringify(post.faqs_mr, null, 6) + ',\n';
  // contentHtml written as backtick template literal
  const escapedHtml = post.contentHtml.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  s += '    contentHtml: `' + escapedHtml + '`\n';
  s += '  },\n';
  return s;
}

const postString = stringifyPost(postData);

const filePath = 'src/data/blogPostsData.ts';
let fileContent = fs.readFileSync(filePath, 'utf8');

const targetMarker = 'export const BLOG_POSTS: BlogPost[] = [\n';
const idx = fileContent.indexOf(targetMarker);
if (idx === -1) {
  console.error('Target marker not found in ' + filePath);
  process.exit(1);
}

const insertIndex = idx + targetMarker.length;
const updatedContent = fileContent.slice(0, insertIndex) + postString + fileContent.slice(insertIndex);

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log('Successfully inserted JEE Main 2026 Master Guide into ' + filePath);
