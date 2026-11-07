import fs from 'fs';
import path from 'path';

const blogFilePath = path.resolve('src/data/blogPostsData.ts');
let content = fs.readFileSync(blogFilePath, 'utf8');

const targetInsert = "export const BLOG_POSTS: BlogPost[] = [\n";
if (!content.includes(targetInsert)) {
  console.error("Target insert point not found in blogPostsData.ts!");
  process.exit(1);
}

const wbPolicePost = `  {
    slug: 'wb-police-constable-si-2026-physical-test-syllabus-photo-signature-guide',
    title: 'West Bengal Police Constable & SI 2026: 11,749 Posts, PMT/PET Standards, Syllabus & 138x177 Photo (10-50KB) / 138x59 Signature Rules',
    title_hi: 'WB Police Constable & SI भर्ती 2026: 11,749 पद, PMT/PET दौड़ मानक, सिलेबस और 138x177 फोटो व 138x59 हस्ताक्षर नियम',
    title_mr: 'पश्चिम बंगाल पोलीस कॉन्स्टेबल व SI भरती 2026: 11,749 पदे, शारीरिक चाचणी (PMT/PET), अभ्यासक्रम आणि फोटो-स्वाक्षरी नियम',
    metaTitle: 'WB Police Constable & SI 2026 Guide: PMT/PET, Syllabus & Photo Rules',
    metaTitle_hi: 'WB Police भर्ती 2026: PMT/PET शारीरिक मानक, सिलेबस व फोटो-हस्ताक्षर गाइड',
    metaTitle_mr: 'WB Police भरती 2026: शारीरिक चाचणी, अभ्यासक्रम आणि फोटो-स्वाक्षरी मार्गदर्शक',
    metaDescription: 'Complete WB Police (WBPRB) Constable & SI 2026 master guide: 11,749 vacancies, PMT/PET standards (1600m in 6m 30s), Level-6 salary, Do/Don\\'t image rules & 138x177 photo / 138x59 sign resizer.',
    metaDescription_hi: 'WB पुलिस कांस्टेबल व सब-इंस्पेक्टर भर्ती 2026 संपूर्ण गाइड: 11,749 पद, शारीरिक दक्षता (PMT/PET 1600m दौड़), ROPA लेवल-6 वेतन और 138x177 फोटो व 138x59 हस्ताक्षर अपलोड नियम।',
    metaDescription_mr: 'पश्चिम बंगाल पोलीस कॉन्स्टेबल व SI भरती 2026 सविस्तर मार्गदर्शक: 11,749 पदे, शारीरिक पात्रता (PMT/PET 1600m धावणे), लेवल-6 पगार आणि 138x177 फोटो व 138x59 स्वाक्षरी नियम.',
    excerpt: 'Comprehensive blueprint for West Bengal Police (WBPRB) Constable, Lady Constable & Sub-Inspector recruitment 2026: 11,749 vacancies, exact PMT/PET standards (1600m in 6m 30s for male, 800m in 4m for female), ROPA Pay Level-6 salary slip breakdown, two-tier written exam syllabus, visual Do/Don\\'t upload guides, and official 138×177 px (10–50 KB) photo & 138×59 px (5–20 KB) signature compliance.',
    excerpt_hi: 'पश्चिम बंगाल पुलिस भर्ती बोर्ड (WBPRB) कांस्टेबल व सब-इंस्पेक्टर भर्ती 2026 का आधिकारिक विश्लेषण: 11,749 पद, PMT/PET शारीरिक परीक्षण नियम, ROPA लेवल-6 वेतन और 138x177 फोटो व 138x59 हस्ताक्षर अपलोड नियम।',
    excerpt_mr: 'पश्चिम बंगाल पोलीस भरती मंडळ (WBPRB) कॉन्स्टेबल व SI भरती 2026 चे संपूर्ण विश्लेषण: 11,749 पदे, शारीरिक चाचणी निकष, ROPA लेवल-6 पगार आणि फोटो-स्वाक्षरीचे अचूक नियम.',
    category: 'Exam Alerts',
    country: 'IN',
    publishDate: 'Oct 26, 2026',
    publishTime: '08:30 PM IST',
    lastUpdated: 'Oct 26, 2026',
    deployedAt: 'Oct 26, 2026 • 08:30 PM IST',
    author: 'SignResize Police Technical Examination Desk',
    authorRole: 'Senior Law Enforcement Recruitment & Document Standards Specialist',
    readTime: '13 min read',
    featured: true,
    tags: [
      'West Bengal Police 2026',
      'WB Police Constable Recruitment',
      'WBPRB Lady Constable',
      'WBP SI Recruitment 2026',
      'WB Police PMT PET Standards',
      'WB Police Salary Level 6 ROPA',
      'WB Police Photo Size 138x177',
      'WB Police Signature Resize 138x59',
      'WBP 1600m Running Time',
      'prb.wb.gov.in Notice'
    ],
    relatedExamPreset: 'wb-police-signature',
    guideTool: {
      href: '/wb-police-photo-resize/',
      label: 'WB Police Photo & Signature Resizer'
    },
    quickFacts: [
      { label: 'Recruitment Authority', value: 'West Bengal Police Recruitment Board (WBPRB - prb.wb.gov.in)' },
      { label: 'Notified Posts', value: 'Constable, Lady Constable, and Sub-Inspector (SI)' },
      { label: 'Total Vacancies', value: '11,749+ Constable/Lady Constable Posts + SI Cadres' },
      { label: 'Pay Matrix Scale', value: 'ROPA-2019 Level-6 (Basic ₹22,700 to ₹58,500; Gross ~₹32,500/month)' },
      { label: 'Selection Scheme', value: 'Prelims (100 Marks) + PMT/PET + Final Written (85 Marks) + Interview (15 Marks)' },
      { label: 'Male PET Benchmark', value: '1600 Meters Run in 6 Minutes 30 Seconds' },
      { label: 'Female PET Benchmark', value: '800 Meters Run in 4 Minutes 00 Seconds' },
      { label: 'Photograph Specs', value: '138 × 177 px (4.5×3.5 cm) | 10 KB to 50 KB JPG (White BG, 75-80% Face)' },
      { label: 'Signature Specs', value: '138 × 59 px (3.5×1.5 cm) | 5 KB to 20 KB JPG (Black Ink Running Hand, No CAPS)' },
      { label: 'Official Portals', value: 'prb.wb.gov.in & wbpolice.gov.in' }
    ],
    quickFacts_hi: [
      { label: 'भर्ती प्राधिकरण', value: 'पश्चिम बंगाल पुलिस भर्ती बोर्ड (WBPRB - prb.wb.gov.in)' },
      { label: 'पद नाम', value: 'कांस्टेबल, लेडी कांस्टेबल और सब-इंस्पेक्टर (SI)' },
      { label: 'कुल रिक्तियां', value: '11,749+ पद (कांस्टेबल/लेडी कांस्टेबल)' },
      { label: 'वेतनमान', value: 'ROPA-2019 लेवल-6 (मूल वेतन ₹22,700; सकल ~₹32,500 प्रति माह)' },
      { label: 'चयन प्रक्रिया', value: 'प्रारंभिक परीक्षा + PMT/PET + मुख्य लिखित परीक्षा + इंटरव्यू' },
      { label: 'पुरुष दौड़ मानक', value: '1600 मीटर दौड़ अधिकतम 6 मिनट 30 सेकंड में' },
      { label: 'महिला दौड़ मानक', value: '800 मीटर दौड़ अधिकतम 4 मिनट 00 सेकंड में' },
      { label: 'फोटो माप', value: '138 × 177 पिक्सल | 10 KB से 50 KB JPG (सफेद बैकग्राउंड)' },
      { label: 'हस्ताक्षर माप', value: '138 × 59 पिक्सल | 5 KB से 20 KB JPG (काली स्याही, रनिंग हैंड)' },
      { label: 'आधिकारिक पोर्टल', value: 'prb.wb.gov.in व wbpolice.gov.in' }
    ],
    quickFacts_mr: [
      { label: 'भरती प्राधिकरण', value: 'पश्चिम बंगाल पोलीस भरती मंडळ (WBPRB)' },
      { label: 'पदाचे नाव', value: 'कॉन्स्टेबल, महिला कॉन्स्टेबल आणि पोलीस उपनिरीक्षक (SI)' },
      { label: 'एकूण पदे', value: '11,749+ पदे' },
      { label: 'वेतन श्रेणी', value: 'ROPA-2019 लेव्हल-6 (मूळ वेतन ₹22,700; एकूण ~₹32,500 दरमहा)' },
      { label: 'निवड प्रक्रिया', value: 'पूर्व परीक्षा (100 गुण) + PMT/PET + मुख्य परीक्षा (85 गुण) + मुलाखत' },
      { label: 'पुरुष धावणे चाचणी', value: '1600 मीटर धावणे 6 मिनिटे 30 सेकंदात' },
      { label: 'महिला धावणे चाचणी', value: '800 मीटर धावणे 4 मिनिटे 00 सेकंदात' },
      { label: 'फोटो आकार', value: '138 × 177 पिक्सेल | 10 KB ते 50 KB JPG (पांढरी पार्श्वभूमी)' },
      { label: 'स्वाक्षरी आकार', value: '138 × 59 पिक्सेल | 5 KB ते 20 KB JPG (काळी शाई, चालू हस्ताक्षर)' },
      { label: 'अधिकृत पोर्टल', value: 'prb.wb.gov.in व wbpolice.gov.in' }
    ],
    faqs: [
      {
        question: 'What are the height and weight physical standards (PMT) for WB Police Constable?',
        answer: 'For Male candidates (General, OBC, SC), minimum height is 167 cm, weight 57 kg, and chest 78 cm with 5 cm expansion (83 cm). For Male Gorkhas, Garhwalis, Rajbanshis, and ST, minimum height is 160 cm, weight 53 kg, and chest 76 cm (with 5 cm expansion). For Female candidates (General, OBC, SC), minimum height is 160 cm, weight 49 kg (Gorkhas/ST: 152 cm, 45 kg). Third Gender candidates require 163 cm height and 53 kg weight.'
      },
      {
        question: 'What is the Physical Efficiency Test (PET) running time for male and female candidates?',
        answer: 'For Male Constable candidates, the PET is an outdoor 1600 meters run to be completed within 6 minutes 30 seconds. For Female Constable candidates, it is an 800 meters run to be completed within 4 minutes 00 seconds. For Third Gender candidates, the requirement is 800 meters in 3 minutes 30 seconds. Timing is measured precisely using RFID timing chips attached to bibs; exceeding even by 1 millisecond results in automatic disqualification.'
      },
      {
        question: 'What is the examination pattern and syllabus for the WB Police Preliminary Written Test?',
        answer: 'The Preliminary Written Test comprises 100 multiple-choice questions for 100 marks conducted over 1 hour. Subjects include General Awareness and General Knowledge (40 marks), Elementary Mathematics Madhyamik standard (30 marks), and Reasoning (30 marks). There is negative marking of 1/4th (0.25) marks per incorrect answer. It is qualifying in nature to shortlist candidates for PMT/PET.'
      },
      {
        question: 'What are the exact photo dimensions and file size limits for WB Police online application?',
        answer: 'WBPRB mandates passport photographs with exact dimensions of 138 × 177 pixels (approximately 4.5 cm height × 3.5 cm width) and file size strictly between 10 KB and 50 KB in JPG/JPEG format. The background must be clean white or very light, with the face occupying 75% to 80% of the picture without sunglasses, caps, or tinted lenses.'
      },
      {
        question: 'What are the exact signature dimensions and file size limits for WBPRB recruitment?',
        answer: 'The full running signature must measure exactly 138 × 59 pixels (approximately 1.5 cm height × 3.5 cm width) with a file size between 5 KB and 20 KB in JPG/JPEG format. It must be written with a black ink ballpoint pen on plain white paper in continuous cursive handwriting. Capital or block letter signatures are rejected automatically under official recruitment guidelines.'
      },
      {
        question: 'What is the monthly in-hand salary of a West Bengal Police Constable under ROPA-2019?',
        answer: 'Under WBS (ROPA) Pay Matrix Level-6, the initial basic pay is ₹22,700. Adding Dearness Allowance (14% = ₹3,178), House Rent Allowance (12% = ₹2,724), Medical Allowance (₹500), and Ration Allowance (₹1,500), the gross monthly emoluments reach approximately ₹30,602 to ₹32,500. After statutory deductions for General Provident Fund (GPF) and Professional Tax, the net in-hand salary is around ₹28,500 to ₹30,000 per month.'
      },
      {
        question: 'Is Bengali language proficiency mandatory for WB Police Constable posts?',
        answer: 'Yes. Candidates must be able to speak, read, and write the Bengali language fluently. However, this provision does not apply to permanent residents of the hill sub-divisions of Darjeeling and Kalimpong districts, for whom Nepali language rules apply.'
      },
      {
        question: 'What subjects are tested in the WB Police Final Combined Written Exam (Mains)?',
        answer: 'The Final Written Exam carries 85 marks (85 objective MCQs in 1 hour) with 1/4th negative marking. The syllabus includes General Awareness & General Knowledge (25 marks), English language (10 marks), Elementary Mathematics (25 marks), and Reasoning & Analytical Ability (25 marks). Marks scored here are combined with the 15-mark Interview to determine the final merit list.'
      },
      {
        question: 'Can I upload a smartphone selfie for the WB Police application?',
        answer: 'No. Selfies, webcam snapshots, angled portraits, or photos with domestic or colored backgrounds fail WBPRB portal automated verification. You must upload a formal studio-style passport photograph taken with direct frontal eye gaze, even illumination across both ears, and a pristine white backdrop.'
      },
      {
        question: 'How can I resize my image to 138×177 px and 10–50 KB for WB Police?',
        answer: 'Use the free SignResize WB Police Photo Resizer tool. Upload your photo, and the algorithm automatically enforces 138 × 177 pixel dimensions and compresses the file size to between 10 KB and 50 KB without blur or visual distortion.'
      }
    ],
    faqs_hi: [
      {
        question: 'WB पुलिस कांस्टेबल के लिए शारीरिक मानक (PMT) क्या हैं?',
        answer: 'सामान्य, ओबीसी और एससी पुरुष उम्मीदवारों के लिए न्यूनतम ऊंचाई 167 सेमी, वजन 57 किग्रा और सीना 78 सेमी (5 सेमी फुलाव के साथ 83 सेमी) अनिवार्य है। गोरखा, गढ़वाली, राजबंशी और एसटी पुरुषों के लिए न्यूनतम ऊंचाई 160 सेमी और वजन 53 किग्रा है। महिला उम्मीदवारों के लिए न्यूनतम ऊंचाई 160 सेमी और वजन 49 किग्रा (गोरखा/एसटी: 152 सेमी, 45 किग्रा) आवश्यक है।'
      },
      {
        question: 'WB पुलिस कांस्टेबल शारीरिक दक्षता परीक्षा (PET) दौड़ का समय क्या है?',
        answer: 'पुरुष उम्मीदवारों के लिए 1600 मीटर दौड़ अधिकतम 6 मिनट 30 सेकंड में पूरी करनी होती है। महिला उम्मीदवारों के लिए 800 मीटर दौड़ 4 मिनट 00 सेकंड में पूरी करनी होती है। समय का मापन RFID चिप के माध्यम से स्वचालित रूप से किया जाता है।'
      },
      {
        question: 'WB पुलिस ऑनलाइन आवेदन के लिए फोटो का आधिकारिक आकार क्या है?',
        answer: 'WBPRB के अनुसार फोटो का आकार 138 × 177 पिक्सल (लगभग 4.5 सेमी × 3.5 सेमी) और फाइल साइज 10 KB से 50 KB JPG प्रारूप में होना चाहिए। बैकग्राउंड सफेद होना आवश्यक है और चेहरे का 75-80% हिस्सा स्पष्ट दिखना चाहिए।'
      },
      {
        question: 'हस्ताक्षर अपलोड करने के क्या नियम हैं?',
        answer: 'हस्ताक्षर 138 × 59 पिक्सल और 5 KB से 20 KB JPG प्रारूप में होना चाहिए। इसे सफेद कागज पर काली स्याही वाले पेन से सामान्य रनिंग हैंडराइटिंग में करना चाहिए। कैपिटल अक्षरों में किए गए हस्ताक्षर तुरंत निरस्त कर दिए जाते हैं।'
      },
      {
        question: 'WB पुलिस कांस्टेबल का मासिक वेतन कितना मिलता है?',
        answer: 'ROPA-2019 पे लेवल-6 के तहत मूल वेतन ₹22,700 है। डीए, एचआरए, मेडिकल और राशन भत्ते मिलाकर सकल वेतन लगभग ₹30,600 से ₹32,500 बनता है, और इन-हैंड वेतन लगभग ₹28,500 से ₹30,000 प्रति माह प्राप्त होता है।'
      }
    ],
    faqs_mr: [
      {
        question: 'पश्चिम बंगाल पोलीस भरतीसाठी शारीरिक चाचणी (PMT) निकष काय आहेत?',
        answer: 'सर्वसाधारण/ओबीसी/एससी पुरुष उमेदवारांसाठी किमान उंची 167 सेमी, वजन 57 किलो आणि छाती 78 सेमी (5 सेमी फुगवून 83 सेमी) आवश्यक आहे. महिला उमेदवारांसाठी उंची 160 सेमी आणि वजन 49 किलो आवश्यक आहे.'
      },
      {
        question: 'शारीरिक क्षमता चाचणी (PET) धावण्याची वेळ किती असते?',
        answer: 'पुरुष उमेदवारांसाठी 1600 मीटर धावणे 6 मिनिटे 30 सेकंदात आणि महिला उमेदवारांसाठी 800 मीटर धावणे 4 मिनिटे 00 सेकंदात पूर्ण करणे बंधनकारक आहे. वेळ मोजण्यासाठी RFID चिप तंत्रज्ञान वापरले जाते.'
      },
      {
        question: 'WB Police अर्जासाठी फोटो आणि स्वाक्षरीचा आकार किती असावा?',
        answer: 'फोटो 138 × 177 पिक्सेल आणि 10 KB ते 50 KB असावा (पांढरी पार्श्वभूमी). स्वाक्षरी 138 × 59 पिक्सेल आणि 5 KB ते 20 KB चालू हस्ताक्षरात असावी. कॅपिटल अक्षरातील स्वाक्षरी बाद ठरवली जाते.'
      }
    ],
    contentHtml: \`
  <!-- Sticky Quick-Jump Pill Bar -->
  <div class="my-4 p-3 rounded-2xl bg-card border border-border shadow-xs backdrop-blur-md sticky top-20 z-20">
    <div class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider px-2 mb-1.5 flex items-center gap-1.5">
      <span class="text-primary">⚡</span> Quick Jump Navigation:
    </div>
    <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs whitespace-nowrap">
      <a href="#document-specs" class="px-2.5 py-1 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-bold transition flex items-center gap-1 shrink-0">
        <span>📸</span> <span>138×177 Specs</span>
      </a>
      <a href="#visual-checklist" class="px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold transition flex items-center gap-1 shrink-0">
        <span>🛡️</span> <span>Do vs Don't</span>
      </a>
      <a href="#instant-resizers" class="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition flex items-center gap-1 shrink-0 shadow-2xs">
        <span>🛠️</span> <span>Resize Now</span>
      </a>
      <a href="#pmt-pet-standards" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition flex items-center gap-1 shrink-0">
        <span>🏃</span> <span>PMT / PET Benchmarks</span>
      </a>
      <a href="#salary-structure" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition flex items-center gap-1 shrink-0">
        <span>💰</span> <span>Salary Slip (ROPA)</span>
      </a>
      <a href="#exam-syllabus" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition flex items-center gap-1 shrink-0">
        <span>📝</span> <span>Prelims & Mains</span>
      </a>
      <a href="#selection-timeline" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition flex items-center gap-1 shrink-0">
        <span>🗺️</span> <span>5-Stage Roadmap</span>
      </a>
      <a href="#official-portals" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition flex items-center gap-1 shrink-0">
        <span>🏛️</span> <span>PRB Portals</span>
      </a>
      <a href="#faqs" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition flex items-center gap-1 shrink-0">
        <span>❓</span> <span>10 FAQs</span>
      </a>
    </div>
  </div>

  <!-- Notification & Scrutiny Alert Banner -->
  <div class="my-6 p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 text-foreground space-y-2.5 shadow-xs">
    <div class="flex items-center gap-2">
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-600 text-white shrink-0">
        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> WBPRB NOTIFICATION UPDATE
      </span>
      <span class="text-xs font-bold text-amber-700 dark:text-amber-300">Constable (11,749 Posts) & Sub-Inspector Cadres</span>
    </div>
    <p class="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
      <strong>Scrutiny Warning:</strong> West Bengal Police Recruitment Board conducts algorithmic checks on uploaded photographs and signatures. Any signature rendered in CAPITAL / BLOCK LETTERS, or photographs with tinted spectacles, non-white backgrounds, or low contrast are automatically flagged for rejection without opportunity for revision. Format compliant credentials instantly using the <a href="/wb-police-photo-resize/" class="text-primary font-bold underline">WB Police Photo Tool</a> and <a href="/wb-police-signature-resize/" class="text-primary font-bold underline">WB Police Signature Tool</a>.
    </p>
  </div>

  <!-- 5-Stage Selection Timeline Roadmap -->
  <div class="my-6 p-5 rounded-2xl bg-card border border-border shadow-xs space-y-4" id="selection-timeline">
    <div class="flex items-center justify-between border-b border-border pb-3">
      <div class="flex items-center gap-2 text-foreground font-bold text-sm sm:text-base">
        <span>🗺️</span> <span>West Bengal Police Recruitment Progress Tracker</span>
      </div>
      <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-bold">5-Stage Pipeline</span>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
      <!-- Stage 1 -->
      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-border space-y-1">
        <div class="flex items-center justify-between">
          <span class="font-mono font-bold text-primary text-[10px]">STAGE 1</span>
          <span class="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">Online</span>
        </div>
        <strong class="text-foreground text-xs block font-bold">Application & Scrutiny</strong>
        <p class="text-muted-foreground text-[11px] leading-relaxed">
          Online application on prb.wb.gov.in with 138×177 px photo & 138×59 px cursive signature.
        </p>
      </div>

      <!-- Stage 2 -->
      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-border space-y-1">
        <div class="flex items-center justify-between">
          <span class="font-mono font-bold text-amber-600 dark:text-amber-400 text-[10px]">STAGE 2</span>
          <span class="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">Screening</span>
        </div>
        <strong class="text-foreground text-xs block font-bold">Prelims Written Test</strong>
        <p class="text-muted-foreground text-[11px] leading-relaxed">
          100 Marks (GK 40, Math 30, Reasoning 30). 1/4th negative marking. Qualifying for PMT/PET.
        </p>
      </div>

      <!-- Stage 3 -->
      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-border space-y-1">
        <div class="flex items-center justify-between">
          <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-[10px]">STAGE 3</span>
          <span class="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">Physical</span>
        </div>
        <strong class="text-foreground text-xs block font-bold">PMT & PET Tests</strong>
        <p class="text-muted-foreground text-[11px] leading-relaxed">
          Height/Weight/Chest scan, followed by RFID chip-timed 1600m run (6m 30s) / 800m run (4m).
        </p>
      </div>

      <!-- Stage 4 -->
      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-border space-y-1">
        <div class="flex items-center justify-between">
          <span class="font-mono font-bold text-purple-600 dark:text-purple-400 text-[10px]">STAGE 4</span>
          <span class="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold">Merit Exam</span>
        </div>
        <strong class="text-foreground text-xs block font-bold">Final Written Exam</strong>
        <p class="text-muted-foreground text-[11px] leading-relaxed">
          85 Marks in 60 mins (GK 25, English 10, Math 25, Reasoning 25). Forms baseline merit rank.
        </p>
      </div>

      <!-- Stage 5 -->
      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-border space-y-1">
        <div class="flex items-center justify-between">
          <span class="font-mono font-bold text-blue-600 dark:text-blue-400 text-[10px]">STAGE 5</span>
          <span class="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">Final</span>
        </div>
        <strong class="text-foreground text-xs block font-bold">Interview & Medical</strong>
        <p class="text-muted-foreground text-[11px] leading-relaxed">
          15 Marks Interview testing Bengali language proficiency, followed by Police Verification & Medical.
        </p>
      </div>
    </div>
  </div>

  <!-- Section 1: Vacancy Distribution -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="vacancy-distribution">📊 1. West Bengal Police Vacancy Breakdown: 11,749 Posts Matrix</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    The West Bengal Police Recruitment Board has notified 11,749 vacancies for Constable and Lady Constable cadres across the state. Below is the category-wise distribution:
  </p>

  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs relative table-scroll-hint-wrapper">
    <div class="p-3 bg-slate-100 dark:bg-slate-800/80 border-b border-border flex items-center justify-between text-xs font-semibold">
      <span class="flex items-center gap-1.5 text-foreground font-bold"><span>👮</span> WBP Constable & Lady Constable Vacancy Split</span>
      <span class="text-[11px] text-primary font-bold sm:hidden flex items-center gap-1 bg-primary/15 px-2.5 py-0.5 rounded-full border border-primary/25 shadow-2xs animate-pulse">
        <span>👉</span> Swipe table
      </span>
    </div>
    <div class="pointer-events-none absolute top-10 bottom-0 right-0 w-8 bg-gradient-to-l from-card via-card/90 to-transparent sm:hidden z-10"></div>
    <div class="overflow-x-auto relative">
      <table class="w-full text-xs sm:text-sm border-collapse min-w-[500px]">
        <thead>
          <tr class="bg-muted/40 text-muted-foreground text-left border-b border-border">
            <th class="p-3 font-semibold">Cadre Category</th>
            <th class="p-3 font-semibold">Male Vacancies</th>
            <th class="p-3 font-semibold">Female (Lady Constable)</th>
            <th class="p-3 font-semibold">Total Posts</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Unreserved (UR) / General</td>
            <td class="p-3 text-muted-foreground">3,056 Posts</td>
            <td class="p-3 text-muted-foreground">1,248 Posts</td>
            <td class="p-3 font-bold text-foreground">4,304 Posts</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Economically Weaker Section (EWS)</td>
            <td class="p-3 text-muted-foreground">820 Posts</td>
            <td class="p-3 text-muted-foreground">354 Posts</td>
            <td class="p-3 font-bold text-foreground">1,174 Posts</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Scheduled Caste (SC)</td>
            <td class="p-3 text-muted-foreground">1,790 Posts</td>
            <td class="p-3 text-muted-foreground">732 Posts</td>
            <td class="p-3 font-bold text-foreground">2,522 Posts</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Scheduled Tribe (ST)</td>
            <td class="p-3 text-muted-foreground">490 Posts</td>
            <td class="p-3 text-muted-foreground">200 Posts</td>
            <td class="p-3 font-bold text-foreground">690 Posts</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">OBC-A (Other Backward Classes A)</td>
            <td class="p-3 text-muted-foreground">820 Posts</td>
            <td class="p-3 text-muted-foreground">336 Posts</td>
            <td class="p-3 font-bold text-foreground">1,156 Posts</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">OBC-B (Other Backward Classes B)</td>
            <td class="p-3 text-muted-foreground">580 Posts</td>
            <td class="p-3 text-muted-foreground">238 Posts</td>
            <td class="p-3 font-bold text-foreground">818 Posts</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Ex-Servicemen & Home Guard Quotas</td>
            <td class="p-3 text-muted-foreground">760 Posts</td>
            <td class="p-3 text-muted-foreground">325 Posts</td>
            <td class="p-3 font-bold text-foreground">1,085 Posts</td>
          </tr>
          <tr class="bg-primary/5 font-bold">
            <td class="p-3 text-primary">Cumulative Vacancy Total</td>
            <td class="p-3 text-primary">8,316 Posts</td>
            <td class="p-3 text-primary">3,433 Posts</td>
            <td class="p-3 text-primary">11,749 Posts</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Section 2: Salary Structure -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="salary-structure">💰 2. WB Police Salary Structure 2026: ROPA Level-6 Pay Slip Breakdown</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    West Bengal Police Constables are compensated under Pay Matrix Level-6 of the WBS (ROPA) Rules 2019. Below is the monthly gross and in-hand calculation for a newly recruited constable:
  </p>

  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs relative table-scroll-hint-wrapper">
    <div class="p-3 bg-slate-100 dark:bg-slate-800/80 border-b border-border flex items-center justify-between text-xs font-semibold">
      <span class="flex items-center gap-1.5 text-foreground font-bold"><span>💵</span> WBP Constable Monthly Pay Slip (ROPA Level-6)</span>
      <span class="text-[11px] text-primary font-bold sm:hidden flex items-center gap-1 bg-primary/15 px-2.5 py-0.5 rounded-full border border-primary/25 shadow-2xs animate-pulse">
        <span>👉</span> Swipe table
      </span>
    </div>
    <div class="pointer-events-none absolute top-10 bottom-0 right-0 w-8 bg-gradient-to-l from-card via-card/90 to-transparent sm:hidden z-10"></div>
    <div class="overflow-x-auto relative">
      <table class="w-full text-xs sm:text-sm border-collapse min-w-[500px]">
        <thead>
          <tr class="bg-muted/40 text-muted-foreground text-left border-b border-border">
            <th class="p-3 font-semibold">Pay Component</th>
            <th class="p-3 font-semibold">Government Benchmark</th>
            <th class="p-3 font-semibold">Monthly Amount</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Basic Pay</td>
            <td class="p-3 text-muted-foreground">ROPA-2019 Level-6 Starting Index</td>
            <td class="p-3 font-bold text-foreground">₹22,700</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Dearness Allowance (DA)</td>
            <td class="p-3 text-muted-foreground">14% of Basic Pay (Revised)</td>
            <td class="p-3 font-bold text-foreground">₹3,178</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">House Rent Allowance (HRA)</td>
            <td class="p-3 text-muted-foreground">12% of Basic Pay</td>
            <td class="p-3 font-bold text-foreground">₹2,724</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Medical Allowance (MA)</td>
            <td class="p-3 text-muted-foreground">Fixed State Healthcare Allowance</td>
            <td class="p-3 font-bold text-foreground">₹500</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Ration Allowance</td>
            <td class="p-3 text-muted-foreground">Uniformed Police Personnel Subsidies</td>
            <td class="p-3 font-bold text-foreground">₹1,500</td>
          </tr>
          <tr class="bg-primary/5 font-bold">
            <td class="p-3 text-primary">Gross Monthly Emoluments</td>
            <td class="p-3 text-primary">Before Deductions</td>
            <td class="p-3 text-primary">₹30,602 – ₹32,500</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-muted-foreground">Statutory Deductions (GPF + P-Tax)</td>
            <td class="p-3 text-muted-foreground">General Provident Fund & Bengal State Tax</td>
            <td class="p-3 font-bold text-rose-600 dark:text-rose-400">-₹1,800 to -₹2,200</td>
          </tr>
          <tr class="bg-emerald-500/10 font-bold">
            <td class="p-3 text-emerald-700 dark:text-emerald-300">Estimated Net In-Hand Pay</td>
            <td class="p-3 text-emerald-700 dark:text-emerald-300">Credited to Salary Account Monthly</td>
            <td class="p-3 text-emerald-700 dark:text-emerald-300">₹28,500 – ₹30,300 / month</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Section 3: PMT & PET Standards -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="pmt-pet-standards">🏃 3. Physical Measurement (PMT) & Physical Efficiency (PET) Benchmarks</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    WBPRB enforces non-negotiable physical benchmarks. Timing for the race is measured electronically using RFID timing chips attached to ankle bibs. Exceeding the qualifying threshold by a split second causes immediate elimination:
  </p>

  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs relative table-scroll-hint-wrapper">
    <div class="p-3 bg-slate-100 dark:bg-slate-800/80 border-b border-border flex items-center justify-between text-xs font-semibold">
      <span class="flex items-center gap-1.5 text-foreground font-bold"><span>📏</span> Physical Measurement Test (PMT) Standards</span>
      <span class="text-[11px] text-primary font-bold sm:hidden flex items-center gap-1 bg-primary/15 px-2.5 py-0.5 rounded-full border border-primary/25 shadow-2xs animate-pulse">
        <span>👉</span> Swipe table
      </span>
    </div>
    <div class="pointer-events-none absolute top-10 bottom-0 right-0 w-8 bg-gradient-to-l from-card via-card/90 to-transparent sm:hidden z-10"></div>
    <div class="overflow-x-auto relative">
      <table class="w-full text-xs sm:text-sm border-collapse min-w-[500px]">
        <thead>
          <tr class="bg-muted/40 text-muted-foreground text-left border-b border-border">
            <th class="p-3 font-semibold">Candidate Category</th>
            <th class="p-3 font-semibold">Min Height</th>
            <th class="p-3 font-semibold">Min Weight</th>
            <th class="p-3 font-semibold">Chest (Unexpanded / Expanded)</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Male (General, OBC, SC)</td>
            <td class="p-3 font-bold text-foreground">167 cm</td>
            <td class="p-3 font-bold text-foreground">57 kg</td>
            <td class="p-3 text-muted-foreground">78 cm with 5 cm expansion (83 cm)</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Male (Gorkhas, Garhwalis, Rajbanshis, ST)</td>
            <td class="p-3 font-bold text-foreground">160 cm</td>
            <td class="p-3 font-bold text-foreground">53 kg</td>
            <td class="p-3 text-muted-foreground">76 cm with 5 cm expansion (81 cm)</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Female / Lady Constable (General, OBC, SC)</td>
            <td class="p-3 font-bold text-foreground">160 cm</td>
            <td class="p-3 font-bold text-foreground">49 kg</td>
            <td class="p-3 text-muted-foreground">Not Applicable</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Female (Gorkhas, Garhwalis, Rajbanshis, ST)</td>
            <td class="p-3 font-bold text-foreground">152 cm</td>
            <td class="p-3 font-bold text-foreground">45 kg</td>
            <td class="p-3 text-muted-foreground">Not Applicable</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Third Gender Candidates</td>
            <td class="p-3 font-bold text-foreground">163 cm</td>
            <td class="p-3 font-bold text-foreground">53 kg</td>
            <td class="p-3 text-muted-foreground">Not Applicable</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs relative table-scroll-hint-wrapper">
    <div class="p-3 bg-slate-100 dark:bg-slate-800/80 border-b border-border flex items-center justify-between text-xs font-semibold">
      <span class="flex items-center gap-1.5 text-foreground font-bold"><span>⏱️</span> Physical Efficiency Test (PET) Running Benchmarks</span>
      <span class="text-[11px] text-primary font-bold sm:hidden flex items-center gap-1 bg-primary/15 px-2.5 py-0.5 rounded-full border border-primary/25 shadow-2xs animate-pulse">
        <span>👉</span> Swipe table
      </span>
    </div>
    <div class="pointer-events-none absolute top-10 bottom-0 right-0 w-8 bg-gradient-to-l from-card via-card/90 to-transparent sm:hidden z-10"></div>
    <div class="overflow-x-auto relative">
      <table class="w-full text-xs sm:text-sm border-collapse min-w-[500px]">
        <thead>
          <tr class="bg-muted/40 text-muted-foreground text-left border-b border-border">
            <th class="p-3 font-semibold">Recruitment Cadre</th>
            <th class="p-3 font-semibold">Running Event Distance</th>
            <th class="p-3 font-semibold">Maximum Qualifying Time</th>
            <th class="p-3 font-semibold">Measurement Technology</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Constable (Male)</td>
            <td class="p-3 font-bold text-foreground">1600 Meters (1.6 km)</td>
            <td class="p-3 font-bold text-primary">6 Minutes 30 Seconds</td>
            <td class="p-3 text-muted-foreground">Automated RFID Sensor Mats</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Lady Constable (Female)</td>
            <td class="p-3 font-bold text-foreground">800 Meters (0.8 km)</td>
            <td class="p-3 font-bold text-primary">4 Minutes 00 Seconds</td>
            <td class="p-3 text-muted-foreground">Automated RFID Sensor Mats</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Third Gender Constables</td>
            <td class="p-3 font-bold text-foreground">800 Meters (0.8 km)</td>
            <td class="p-3 font-bold text-primary">3 Minutes 30 Seconds</td>
            <td class="p-3 text-muted-foreground">Automated RFID Sensor Mats</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Section 4: Examination Syllabus -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="exam-syllabus">📝 4. Examination Pattern: Prelims (100 Marks) vs Final Written Exam (85 Marks)</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    The West Bengal Police selection process features two written tests: a preliminary screening test and a final merit test. Both feature objective multiple-choice questions with 1/4th (0.25) negative marking per wrong answer:
  </p>

  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs relative table-scroll-hint-wrapper">
    <div class="p-3 bg-slate-100 dark:bg-slate-800/80 border-b border-border flex items-center justify-between text-xs font-semibold">
      <span class="flex items-center gap-1.5 text-foreground font-bold"><span>📚</span> WBP Written Examination Structure</span>
      <span class="text-[11px] text-primary font-bold sm:hidden flex items-center gap-1 bg-primary/15 px-2.5 py-0.5 rounded-full border border-primary/25 shadow-2xs animate-pulse">
        <span>👉</span> Swipe table
      </span>
    </div>
    <div class="pointer-events-none absolute top-10 bottom-0 right-0 w-8 bg-gradient-to-l from-card via-card/90 to-transparent sm:hidden z-10"></div>
    <div class="overflow-x-auto relative">
      <table class="w-full text-xs sm:text-sm border-collapse min-w-[500px]">
        <thead>
          <tr class="bg-muted/40 text-muted-foreground text-left border-b border-border">
            <th class="p-3 font-semibold">Subject Section</th>
            <th class="p-3 font-semibold">Preliminary Written (100 Marks)</th>
            <th class="p-3 font-semibold">Final Written Exam (85 Marks)</th>
            <th class="p-3 font-semibold">Standard & Focus Areas</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">General Awareness & General Knowledge</td>
            <td class="p-3 font-bold text-foreground">40 Questions (40 Marks)</td>
            <td class="p-3 font-bold text-foreground">25 Questions (25 Marks)</td>
            <td class="p-3 text-muted-foreground">Indian History, Bengal Geography, Constitution, Static GK</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">English Language</td>
            <td class="p-3 text-muted-foreground font-semibold">Not Tested in Prelims</td>
            <td class="p-3 font-bold text-foreground">10 Questions (10 Marks)</td>
            <td class="p-3 text-muted-foreground">Vocabulary, Grammar, Idioms, Sentence Completion</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Elementary Mathematics</td>
            <td class="p-3 font-bold text-foreground">30 Questions (30 Marks)</td>
            <td class="p-3 font-bold text-foreground">25 Questions (25 Marks)</td>
            <td class="p-3 text-muted-foreground">WBBSE Madhyamik Standard: Percentages, Profit/Loss, Time & Work</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Reasoning & Analytical Ability</td>
            <td class="p-3 font-bold text-foreground">30 Questions (30 Marks)</td>
            <td class="p-3 font-bold text-foreground">25 Questions (25 Marks)</td>
            <td class="p-3 text-muted-foreground">Coding-Decoding, Series, Syllogisms, Blood Relations, Puzzles</td>
          </tr>
          <tr class="bg-primary/5 font-bold">
            <td class="p-3 text-primary">Total Marks & Duration</td>
            <td class="p-3 text-primary">100 Marks in 60 Minutes</td>
            <td class="p-3 text-primary">85 Marks in 60 Minutes</td>
            <td class="p-3 text-primary">Mains (85) + Interview (15) = 100 Marks Final Merit</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Section 5: Official Upload Guidelines & Visual Do vs Don't Mockups -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="document-specs">📸 5. Official WBPRB Photo & Signature Guidelines: Exact Specifications</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    WBPRB enforces specific dimension standards (138×177 px for photographs and 138×59 px for signatures) that differ from standard central government exams. Review the official specification matrix below:
  </p>

  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs relative table-scroll-hint-wrapper">
    <div class="p-3 bg-slate-100 dark:bg-slate-800/80 border-b border-border flex items-center justify-between text-xs font-semibold">
      <span class="flex items-center gap-1.5 text-foreground font-bold"><span>📋</span> WBPRB Document Upload Specification Matrix</span>
      <span class="text-[11px] text-primary font-bold sm:hidden flex items-center gap-1 bg-primary/15 px-2.5 py-0.5 rounded-full border border-primary/25 shadow-2xs animate-pulse">
        <span>👉</span> Swipe table
      </span>
    </div>
    <div class="pointer-events-none absolute top-10 bottom-0 right-0 w-8 bg-gradient-to-l from-card via-card/90 to-transparent sm:hidden z-10"></div>
    <div class="overflow-x-auto relative">
      <table class="w-full text-xs sm:text-sm border-collapse min-w-[500px]">
        <thead>
          <tr class="bg-muted/40 text-muted-foreground text-left border-b border-border">
            <th class="p-3 font-semibold">Credential Type</th>
            <th class="p-3 font-semibold">Pixel Dimensions</th>
            <th class="p-3 font-semibold">File Size (KB)</th>
            <th class="p-3 font-semibold">Aspect Ratio</th>
            <th class="p-3 font-semibold">Mandatory Requirements</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Passport Photograph</td>
            <td class="p-3 font-bold text-primary">138 × 177 px</td>
            <td class="p-3 font-bold text-foreground">10 KB to 50 KB</td>
            <td class="p-3 text-muted-foreground">4.5 cm × 3.5 cm</td>
            <td class="p-3 text-muted-foreground">White/light background, 75–80% facial coverage, both ears visible, no sunglasses/caps</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Full Signature</td>
            <td class="p-3 font-bold text-primary">138 × 59 px</td>
            <td class="p-3 font-bold text-foreground">5 KB to 20 KB</td>
            <td class="p-3 text-muted-foreground">1.5 cm × 3.5 cm</td>
            <td class="p-3 text-muted-foreground">Black ink on unruled white paper, continuous running cursive, NO CAPITAL LETTERS</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Visual Checklist: DO vs DON'T Side-by-Side Mockups -->
  <h3 class="text-lg font-bold text-foreground mt-6 mb-3" id="visual-checklist">🛡️ Visual Do vs Don't: Eliminate the #1 Rejection Trap</h3>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    Compare compliant uploads with common disqualifying mistakes before uploading to the WBPRB portal:
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <!-- Signature DO vs DON'T Card -->
    <div class="p-5 rounded-2xl bg-card border border-border shadow-xs space-y-3">
      <div class="flex items-center justify-between border-b border-border pb-2">
        <span class="font-bold text-xs uppercase tracking-wider text-foreground">✍️ Signature Handwriting Audit</span>
        <span class="text-[11px] font-mono text-muted-foreground">138 × 59 px Standard</span>
      </div>
      
      <div class="grid grid-cols-2 gap-3 pt-1">
        <!-- DO Signature Box -->
        <div class="p-3 rounded-xl border-2 border-emerald-500/40 bg-emerald-500/5 space-y-2 text-center">
          <div class="h-16 flex items-center justify-center bg-white rounded-lg border border-border p-1 shadow-2xs">
            <span class="font-serif italic text-lg text-slate-900 tracking-wide select-none" style="font-family: 'Brush Script MT', cursive, sans-serif;">Anirban Das</span>
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
            <span class="font-mono font-black text-xs text-slate-800 tracking-widest line-through select-none">ANIRBAN DAS</span>
            <span class="absolute inset-0 flex items-center justify-center bg-rose-950/20 text-rose-600 font-black text-xs uppercase rotate-12">REJECTED</span>
          </div>
          <div class="text-[11px] font-bold text-rose-700 dark:text-rose-300 flex items-center justify-center gap-1">
            <span>❌</span> REJECTED (Capital Letters)
          </div>
          <p class="text-[10px] text-muted-foreground leading-tight">
            WBPRB Rule: All-caps or block letters disqualify application under scrutiny rules.
          </p>
        </div>
      </div>
    </div>

    <!-- Photograph DO vs DON'T Card -->
    <div class="p-5 rounded-2xl bg-card border border-border shadow-xs space-y-3">
      <div class="flex items-center justify-between border-b border-border pb-2">
        <span class="font-bold text-xs uppercase tracking-wider text-foreground">📷 Photograph Lighting & Framing Audit</span>
        <span class="text-[11px] font-mono text-muted-foreground">138 × 177 px Standard</span>
      </div>

      <div class="grid grid-cols-2 gap-3 pt-1">
        <!-- DO Photo Box -->
        <div class="p-3 rounded-xl border-2 border-emerald-500/40 bg-emerald-500/5 space-y-2 text-center">
          <div class="h-24 w-18 mx-auto flex items-center justify-center bg-white rounded-lg border border-border shadow-2xs overflow-hidden">
            <div class="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-600">
              <span class="text-3xl">👤</span>
              <span class="text-[8px] font-mono text-muted-foreground mt-1">75% Face Area</span>
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

  <!-- Rejection Warning Callout -->
  <div class="my-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-900 dark:text-rose-200 text-xs sm:text-sm font-medium flex items-start gap-3">
    <span class="text-lg shrink-0">⚠️</span>
    <div>
      <strong class="font-bold">Strict WBPRB Application Rejection Rule:</strong> The West Bengal Police Recruitment Board explicitly mandates: <em>"Signatures in capital letters will not be accepted. The photograph must clearly show the face and eyes without any head covering or dark spectacles."</em> Applications failing these visual audits are cancelled without refund.
    </div>
  </div>

  <!-- Section 6: Step-by-Step Embedded Quick Launch Resizers & Inline Dropzone -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="instant-resizers">🛠️ 6. Instant In-Page Resizer Launchers: Prepare Compliant WBP Uploads</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    Eliminate file size errors and dimension mismatches before submitting your West Bengal Police application. Drop your file below for instant verification and direct 1-click resizing:
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
    <!-- Signature Launcher & Interactive Dropzone Card -->
    <div class="p-5 rounded-2xl bg-gradient-to-br from-card via-card to-primary/10 border-2 border-primary/30 shadow-xs flex flex-col justify-between space-y-4">
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-primary uppercase tracking-wider">✍️ Signature Resizer</span>
          <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-bold">138 × 59 px</span>
        </div>
        <h4 class="font-bold text-base text-foreground">WB Police Running Signature Tool</h4>
        <p class="text-xs text-muted-foreground leading-relaxed">
          Standardizes running signature to strictly <strong>5 KB to 20 KB</strong> in JPG format with automated contrast cleanup.
        </p>

        <!-- Interactive Drag-and-Drop Dropzone Container -->
        <div id="wbp-sign-dropzone" class="group relative cursor-pointer block border-2 border-dashed border-blue-400 dark:border-blue-500/70 hover:border-blue-600 bg-blue-50/40 hover:bg-blue-100/50 dark:bg-blue-950/20 dark:hover:bg-blue-900/30 rounded-xl p-4 transition-all duration-200 text-center space-y-2 shadow-xs hover:shadow-md hover:scale-[1.01]">
          <input type="file" id="wbp-sign-input" class="hidden" accept="image/jpeg,image/png,image/webp" />
          
          <!-- Interactive Badge -->
          <div class="flex justify-center">
            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white shadow-2xs">
              <span>⚡</span> Interactive Live Dropzone
            </span>
          </div>

          <!-- Idle State -->
          <div id="wbp-sign-idle" class="space-y-1 py-1">
            <span class="text-2xl block group-hover:scale-125 transition-transform duration-300">📥</span>
            <span class="text-xs font-bold text-foreground block">Drop Signature image here</span>
            <span class="text-[10px] text-muted-foreground block">or click to browse from device (JPG, PNG, WebP)</span>
          </div>

          <!-- Analyzing Spinner State -->
          <div id="wbp-sign-analyzing" class="hidden py-4 text-center text-xs font-semibold text-blue-600 dark:text-blue-400 animate-pulse space-y-1">
            <span class="text-xl block animate-spin">⚙️</span>
            <span>Analyzing signature dimensions & compression...</span>
          </div>

          <!-- Active File Inspection State -->
          <div id="wbp-sign-feedback" class="hidden space-y-2 text-left">
            <div class="flex items-center gap-3">
              <img id="wbp-sign-preview" class="w-20 h-10 object-contain border border-border bg-white rounded shadow-2xs" alt="Signature preview" />
              <div class="min-w-0 flex-1 text-xs">
                <div id="wbp-sign-name" class="font-bold text-foreground truncate text-[11px]">filename.jpg</div>
                <div id="wbp-sign-meta" class="text-[10px] text-muted-foreground">Original: calculating...</div>
                <div class="text-[10px] font-bold text-amber-600 dark:text-amber-400">Target: 138×59 px • 5–20 KB</div>
              </div>
            </div>
            <div id="wbp-sign-status-badge" class="p-2 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[11px] font-semibold flex items-center gap-1.5">
              <span>⚡</span> Ready for 1-click optimization to WB Police specifications
            </div>
          </div>
        </div>
      </div>
      
      <a id="wbp-sign-action-btn" href="/wb-police-signature-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-95 transition shadow-xs w-full text-center">
        <span>Open Signature Canvas (5–20 KB)</span>
        <span>&rarr;</span>
      </a>
    </div>

    <!-- Photo Launcher & Interactive Dropzone Card -->
    <div class="p-5 rounded-2xl bg-gradient-to-br from-card via-card to-primary/10 border-2 border-primary/30 shadow-xs flex flex-col justify-between space-y-4">
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-primary uppercase tracking-wider">📷 Photograph Resizer</span>
          <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-bold">138 × 177 px</span>
        </div>
        <h4 class="font-bold text-base text-foreground">WB Police Color Photo Tool</h4>
        <p class="text-xs text-muted-foreground leading-relaxed">
          Formats passport photograph to strictly <strong>10 KB to 50 KB</strong> JPG format in 138×177 px with plain white background.
        </p>

        <!-- Interactive Drag-and-Drop Dropzone Container -->
        <div id="wbp-photo-dropzone" class="group relative cursor-pointer block border-2 border-dashed border-blue-400 dark:border-blue-500/70 hover:border-blue-600 bg-blue-50/40 hover:bg-blue-100/50 dark:bg-blue-950/20 dark:hover:bg-blue-900/30 rounded-xl p-4 transition-all duration-200 text-center space-y-2 shadow-xs hover:shadow-md hover:scale-[1.01]">
          <input type="file" id="wbp-photo-input" class="hidden" accept="image/jpeg,image/png,image/webp" />
          
          <!-- Interactive Badge -->
          <div class="flex justify-center">
            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white shadow-2xs">
              <span>⚡</span> Interactive Live Dropzone
            </span>
          </div>

          <!-- Idle State -->
          <div id="wbp-photo-idle" class="space-y-1 py-1">
            <span class="text-2xl block group-hover:scale-125 transition-transform duration-300">📥</span>
            <span class="text-xs font-bold text-foreground block">Drop Passport Photo here</span>
            <span class="text-[10px] text-muted-foreground block">or click to browse from device (JPG, PNG, WebP)</span>
          </div>

          <!-- Analyzing Spinner State -->
          <div id="wbp-photo-analyzing" class="hidden py-4 text-center text-xs font-semibold text-blue-600 dark:text-blue-400 animate-pulse space-y-1">
            <span class="text-xl block animate-spin">⚙️</span>
            <span>Analyzing photo dimensions & compression...</span>
          </div>

          <!-- Active File Inspection State -->
          <div id="wbp-photo-feedback" class="hidden space-y-2 text-left">
            <div class="flex items-center gap-3">
              <img id="wbp-photo-preview" class="w-12 h-16 object-cover border border-border bg-white rounded shadow-2xs" alt="Photo preview" />
              <div class="min-w-0 flex-1 text-xs">
                <div id="wbp-photo-name" class="font-bold text-foreground truncate text-[11px]">filename.jpg</div>
                <div id="wbp-photo-meta" class="text-[10px] text-muted-foreground">Original: calculating...</div>
                <div class="text-[10px] font-bold text-amber-600 dark:text-amber-400">Target: 138×177 px • 10–50 KB</div>
              </div>
            </div>
            <div id="wbp-photo-status-badge" class="p-2 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[11px] font-semibold flex items-center gap-1.5">
              <span>⚡</span> Ready for 1-click optimization to WB Police specifications
            </div>
          </div>
        </div>
      </div>

      <a id="wbp-photo-action-btn" href="/wb-police-photo-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-card border border-border text-foreground font-bold text-xs sm:text-sm hover:bg-muted/40 transition shadow-xs w-full text-center">
        <span>Open Photo Canvas (10–50 KB)</span>
        <span>&rarr;</span>
      </a>
    </div>
  </div>

  <!-- Inline Script for Interactive Dropzones -->
  <script>
    function setupWbpDropzone(zoneId, inputId, idleId, analyzingId, feedbackId, previewId, nameId, metaId, statusBadgeId, actionBtnId, toolUrl, minKb, maxKb, targetDims) {
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

      // Drag-over active states
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

        // Immediate inline analyzing feedback
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

            // Compliance status evaluation
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
      setupWbpDropzone('wbp-sign-dropzone', 'wbp-sign-input', 'wbp-sign-idle', 'wbp-sign-analyzing', 'wbp-sign-feedback', 'wbp-sign-preview', 'wbp-sign-name', 'wbp-sign-meta', 'wbp-sign-status-badge', 'wbp-sign-action-btn', '/wb-police-signature-resize/', 5, 20, '138×59 px');
      setupWbpDropzone('wbp-photo-dropzone', 'wbp-photo-input', 'wbp-photo-idle', 'wbp-photo-analyzing', 'wbp-photo-feedback', 'wbp-photo-preview', 'wbp-photo-name', 'wbp-photo-meta', 'wbp-photo-status-badge', 'wbp-photo-action-btn', '/wb-police-photo-resize/', 10, 50, '138×177 px');
    });
  </script>

  <!-- Section 7: Official Portals Directory -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="official-portals">🌐 7. Official West Bengal Police Portals & Recruitment Directory</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    Candidates must verify application statuses, admit cards, and PMT/PET outdoor schedules exclusively on official state police portals:
  </p>

  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs relative table-scroll-hint-wrapper">
    <div class="p-3 bg-slate-100 dark:bg-slate-800/80 border-b border-border flex items-center justify-between text-xs font-semibold">
      <span class="flex items-center gap-1.5 text-foreground font-bold"><span>🏛️</span> Official Commission & Department Portals</span>
      <span class="text-[11px] text-primary font-bold sm:hidden flex items-center gap-1 bg-primary/15 px-2.5 py-0.5 rounded-full border border-primary/25 shadow-2xs animate-pulse">
        <span>👉</span> Swipe table
      </span>
    </div>
    <div class="pointer-events-none absolute top-10 bottom-0 right-0 w-8 bg-gradient-to-l from-card via-card/90 to-transparent sm:hidden z-10"></div>
    <div class="overflow-x-auto relative">
      <table class="w-full text-xs sm:text-sm border-collapse min-w-[500px]">
        <thead>
          <tr class="bg-muted/40 text-muted-foreground text-left border-b border-border">
            <th class="p-3 font-semibold">Authority / Division</th>
            <th class="p-3 font-semibold">Primary Function</th>
            <th class="p-3 font-semibold">Direct Official Portal Link</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">West Bengal Police Recruitment Board (WBPRB)</td>
            <td class="p-3 text-muted-foreground">Main Application Portal, Admit Cards & Results</td>
            <td class="p-3"><a href="https://prb.wb.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">prb.wb.gov.in &rarr;</a></td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">West Bengal State Police Head Office</td>
            <td class="p-3 text-muted-foreground">Departmental Orders, Service Rules & Gazettes</td>
            <td class="p-3"><a href="https://wbpolice.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">wbpolice.gov.in &rarr;</a></td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Kolkata Police Recruitment Directorate</td>
            <td class="p-3 text-muted-foreground">Kolkata Police Constable & SI Notifications</td>
            <td class="p-3"><a href="https://kolkatapolice.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">kolkatapolice.gov.in &rarr;</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
\`
  },
`;

const updatedContent = content.replace(targetInsert, targetInsert + wbPolicePost);
fs.writeFileSync(blogFilePath, updatedContent, 'utf8');
console.log('Successfully inserted West Bengal Police Constable & SI 2026 Master Guide into blogPostsData.ts!');
