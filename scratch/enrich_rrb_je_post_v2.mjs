import fs from 'fs';
import path from 'path';

const blogFilePath = path.resolve('src/data/blogPostsData.ts');
let content = fs.readFileSync(blogFilePath, 'utf8');

const startMarker = "export const BLOG_POSTS: BlogPost[] = [\n";
const postStart = content.indexOf(startMarker);
if (postStart === -1) {
  console.error("Start marker not found!");
  process.exit(1);
}

const tnpscMarker = "slug: 'tnpsc-group-4-2-2026-master-guide-otr-photo-name-date-signature-rules'";
const tnpscIndex = content.indexOf(tnpscMarker);
if (tnpscIndex === -1) {
  console.error("TNPSC marker not found!");
  process.exit(1);
}

const tnpscObjectStart = content.lastIndexOf('  {', tnpscIndex);
if (tnpscObjectStart === -1) {
  console.error("TNPSC object start not found!");
  process.exit(1);
}

console.log('Replacing from postStart + startMarker.length to tnpscObjectStart');

const enrichedRRBJePost = `  {
    slug: 'rrb-je-recruitment-2026-cbt-syllabus-salary-photo-signature-rules',
    title: 'RRB JE 2026 Master Guide: CEN 03/2024 Exam Dates, CBT 1 & 2 Branch Syllabus, Level-6 Salary & Photo-Signature Rules',
    title_hi: 'RRB JE Recruitment 2026: 7,951 पद, CBT 1 व 2 ब्रांच-वार सिलेबस, लेवल-6 वेतन और फोटो-हस्ताक्षर अपलोड नियम',
    title_mr: 'RRB JE भरती 2026: 7,951 पदे, CBT 1 व 2 तांत्रिक अभ्यासक्रम, लेवल-6 पगार आणि फोटो-स्वाक्षरी नियम',
    metaTitle: 'RRB JE 2026 Master Guide: CBT Syllabus, Salary & Photo Rules',
    metaTitle_hi: 'RRB JE भर्ती 2026: सिलेबस, लेवल-6 सैलरी और फोटो-हस्ताक्षर गाइड',
    metaTitle_mr: 'RRB JE भरती 2026: अभ्यासक्रम, पगार आणि फोटो-स्वाक्षरी मार्गदर्शक',
    metaDescription: 'Complete RRB JE (Junior Engineer & DMS) CEN 03/2024 & 2026 guide: 7,951 vacancies, CBT 1 & 2 branch syllabus, ₹69,000 salary, visual Do/Don\\'t mockups & 140x60 sign resizer.',
    metaDescription_hi: 'RRB JE 2026 भर्ती संपूर्ण गाइड: 7,951 पद, CBT 1 और 2 ब्रांच-वार तकनीकी सिलेबस, लेवल-6 वेतन संरचना और 140x60 हस्ताक्षर व 240x320 फोटो अपलोड के आधिकारिक नियम।',
    metaDescription_mr: 'RRB JE 2026 भरती मार्गदर्शक: 7,951 पदे, CBT 1 व 2 शाखावार अभ्यासक्रम, लेवल-6 पगार आणि 140x60 स्वाक्षरी व 240x320 फोटो अपलोड नियम.',
    excerpt: 'Authoritative guide to Railway Recruitment Board Junior Engineer (CEN 03/2024 & 2026): 7,951 vacancies across Civil, Mechanical, Electrical, and S&T, revised Pay Level-6 salary slip, CBT-1 screening pattern, CBT-2 technical syllabus matrix, visual Do/Don\\'t mockups, interactive dropzones, and official 140×60 px signature & 240×320 px photo compliance.',
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
    readTime: '13 min read',
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
      'DMS CMA Vacancy',
      'RRB Regional Portals'
    ],
    relatedExamPreset: 'rrb-je',
    guideTool: {
      href: '/rrb-je-signature-resize/',
      label: 'RRB JE Signature & Photo Resizer'
    },
    quickFacts: [
      { label: 'Recruitment Authority', value: 'Railway Recruitment Boards (RRB CEN 03/2024 & Annual Calendar)' },
      { label: 'Target Posts', value: 'Junior Engineer (JE), Depot Material Superintendent (DMS), CMA' },
      { label: 'Total Vacancies', value: '7,951 Engineering Posts (Zone-wise Allocation Across 21 RRBs)' },
      { label: 'Pay Matrix Cadre', value: 'Level-6 (7th CPC Basic ₹35,400 + DA + HRA ~₹69,120 Gross)' },
      { label: 'Selection Scheme', value: 'CBT-1 (100 Marks) + CBT-2 (150 Marks) + DV & Medical' },
      { label: 'CBT-1 Cutoff Floor', value: 'UR/EWS: 40%, OBC/SC: 30%, ST: 25% (15x Vacancy Shortlisting)' },
      { label: 'Negative Marking', value: '1/3rd (0.33) marks deducted per incorrect response' },
      { label: 'Signature Upload Specs', value: '140 × 60 px | 10 KB to 20 KB JPG (Black Ink Running Hand, No CAPS)' },
      { label: 'Photograph Upload Specs', value: '240 × 320 px (3.5×4.5 cm) | 30 KB to 70 KB JPG (Plain White BG)' },
      { label: 'Official Portals', value: 'rrbapply.gov.in & 21 Regional RRB Notice Boards' }
    ],
    quickFacts_hi: [
      { label: 'भर्ती प्राधिकरण', value: 'रेलवे भर्ती बोर्ड (RRB CEN 03/2024 व वार्षिक कैलेंडर)' },
      { label: 'पद नाम', value: 'जूनियर इंजीनियर (JE), डिपो सामग्री अधीक्षक (DMS), CMA' },
      { label: 'कुल रिक्तियां', value: '7,951 पद (21 क्षेत्रीय RRB जोन-वार आवंटन)' },
      { label: 'वेतन स्तर', value: 'लेवल-6 (मूल वेतन ₹35,400 + भत्ते, सकल ~₹69,120 प्रति माह)' },
      { label: 'चयन प्रक्रिया', value: 'CBT-1 (100 अंक) + CBT-2 (150 अंक) + DV व मेडिकल' },
      { label: 'न्यूनतम कटऑफ फ्लोर', value: 'UR/EWS: 40%, OBC/SC: 30%, ST: 25% (15 गुना शॉर्टलिस्टिंग)' },
      { label: 'नेगेटिव मार्किंग', value: 'प्रत्येक गलत उत्तर पर 1/3 अंक की कटौती' },
      { label: 'हस्ताक्षर माप', value: '140 × 60 पिक्सल | 10 KB से 20 KB JPG (काली स्याही, केवल रनिंग हैंड)' },
      { label: 'फोटो माप', value: '240 × 320 पिक्सल | 30 KB से 70 KB JPG (सफेद पृष्ठभूमि)' },
      { label: 'आधिकारिक पोर्टल', value: 'rrbapply.gov.in व क्षेत्रीय RRB वेबसाइटें' }
    ],
    quickFacts_mr: [
      { label: 'भरती प्राधिकरण', value: 'रेल्वे भरती बोर्ड (RRB CEN 03/2024 व वार्षिक दिनदर्शिका)' },
      { label: 'पदाचे नाव', value: 'कनिष्ठ अभियंता (JE), डेपो मटेरियल अधीक्षक (DMS), CMA' },
      { label: 'एकूण पदे', value: '7,951 पदे (21 क्षेत्रीय RRB झोननिहाय वाटप)' },
      { label: 'वेतन श्रेणी', value: 'लेव्हल-6 (मूळ वेतन ₹35,400 + भत्ते, एकूण ~₹69,120 दरमहा)' },
      { label: 'निवड प्रक्रिया', value: 'CBT-1 (100 गुण) + CBT-2 (150 गुण) + कागदपत्र पडताळणी' },
      { label: 'किमान पात्रता गुण', value: 'UR/EWS: 40%, OBC/SC: 30%, ST: 25% (15 पट उमेदवार निवड)' },
      { label: 'नकारात्मक गुण', value: 'प्रत्येक चुकीच्या उत्तरासाठी 1/3 गुण वजा' },
      { label: 'स्वाक्षरी आकार', value: '140 × 60 पिक्सेल | 10 KB ते 20 KB JPG (काळी शाई, फक्त चालू हस्ताक्षर)' },
      { label: 'फोटो आकार', value: '240 × 320 पिक्सेल | 30 KB ते 70 KB JPG (पांढरी पार्श्वभूमी)' },
      { label: 'अधिकृत पोर्टल', value: 'rrbapply.gov.in व प्रादेशिक RRB पोर्टल्स' }
    ],
    faqs: [
      {
        question: 'What is the examination pattern and sectional weightage for RRB JE CBT-1?',
        answer: 'RRB JE CBT-1 is a 90-minute screening test consisting of 100 multiple-choice questions for 100 marks. The paper comprises Mathematics (30 Questions), General Intelligence & Reasoning (25 Questions), General Awareness (15 Questions), and General Science (30 Questions, covering Physics, Chemistry, and Life Sciences up to Class 10 CBSE level). Negative marking of 1/3rd (0.33 mark) applies for each wrong answer.'
      },
      {
        question: 'How does the 15x shortlisting ratio and normalized cutoff floor work for CBT-2?',
        answer: 'Candidates are shortlisted for CBT-2 strictly based on normalized marks scored in CBT-1 at a ratio of 15 times the community-wise vacancy of the posts notified for each Railway Recruitment Board. To be eligible for shortlisting, candidates must first score above the statutory minimum qualifying percentage: UR / EWS (40%), OBC-NCL (30%), SC (30%), and ST (25%). CBT-1 marks serve solely for screening and are not counted toward the final merit ranking.'
      },
      {
        question: 'What is the branch-wise technical syllabus breakdown for RRB JE CBT-2?',
        answer: 'RRB JE CBT-2 consists of 150 questions (150 marks) in 120 minutes: 50 non-technical marks (General Awareness - 15, Physics & Chemistry - 15, Computers - 10, Environment - 10) and 100 core technical branch marks. Civil covers Building Materials, Surveying, Soil Mechanics, Hydraulics, RCC & Steel. Mechanical covers SOM, Theory of Machines, Thermodynamics, IC Engines, and Fluid Machinery. Electrical covers Circuit Law, AC Fundamentals, Transformers, Induction Motors, and Power Systems. Electronics/S&T covers Semiconductor Devices, Digital Circuits, Microprocessors (8085), and Communication Networks.'
      },
      {
        question: 'What is the monthly in-hand salary of an RRB Junior Engineer in 2026?',
        answer: 'RRB Junior Engineers are appointed under 7th CPC Pay Matrix Level-6 with an initial basic pay of ₹35,400 per month. With Dearness Allowance (DA at 50% = ₹17,700), House Rent Allowance (HRA at 30% for X-Class cities = ₹10,620), and Transport Allowance (₹3,600 + DA on TA = ₹5,400), the gross monthly emoluments exceed ₹69,120. Net in-hand salary ranges between ₹58,000 and ₹62,000 after NPS (10% of Basic + DA = ₹5,310) and insurance deductions.'
      },
      {
        question: 'What are the official photo requirements for the RRB JE application portal?',
        answer: 'The photograph must be a recent clear color passport photograph of 3.5 cm × 4.5 cm (240 × 320 pixels) taken against a plain white or light grey background, with file size strictly between 30 KB and 70 KB in JPG/JPEG format. Full front view showing both ears and forehead is mandatory. Photos with caps, dark glasses, heavy shadows, or selfies are rejected.'
      },
      {
        question: 'What are the signature specifications, and why are CAPITAL letters rejected?',
        answer: 'The signature must be sized 140 × 60 pixels (4.0 cm × 2.0 cm) with file size strictly between 10 KB and 20 KB in JPG format. It must be signed in black ballpoint ink on clean white unruled paper in natural running cursive handwriting. Paragraph 15.2 of CEN 03/2024 states explicitly that signatures written in CAPITAL / BLOCK LETTERS will lead to immediate summary application disqualification.'
      },
      {
        question: 'Can Diploma and B.Tech degree holders both apply for RRB JE?',
        answer: 'Yes. Candidates holding a three-year Diploma in Engineering or a four-year B.Tech / B.E. / B.Sc (Engineering) degree in relevant streams (Civil, Mechanical, Electrical, Electronics, Production, Automobile, Instrumentation, IT, CS) from AICTE/UGC recognized institutions are eligible to apply.'
      },
      {
        question: 'What are the medical vision standards for RRB Junior Engineers?',
        answer: 'RRB JE posts demand stringent physical and optical fitness: Aye-Three (A-3) requires distance vision of 6/9, 6/9 with or without glasses and passing color vision tests; Bee-One (B-1) requires 6/9, 6/12 with or without glasses; Bee-Two (B-2) requires 6/9, 6/12 with glasses. Candidates who have undergone Lasik surgery are strictly ineligible for categories requiring A-3 medical standards.'
      },
      {
        question: 'Can a candidate change their chosen Regional RRB zone after application submission?',
        answer: 'No. The Railway Recruitment Board explicitly disallows any change of RRB zone once the final application is submitted and payment is completed. Modifications during correction windows are limited to personal details, gender, category, or photo/signature updates (with a ₹250 modification fee); the applied RRB zone and post priority remain locked.'
      },
      {
        question: 'What is the relationship between CEN 03/2024 and the 2026 Railway Recruitment Calendar?',
        answer: 'CEN 03/2024 represents the active recruitment notification for 7,951 Junior Engineer vacancies currently navigating CBT-1, CBT-2, and Document Verification schedules. The Ministry of Railways standardized annual calendar establishes that upcoming 2025-2026 JE recruitment cycles maintain identical CBT-1/CBT-2 syllabus structures, Level-6 pay rules, and 140x60 sign / 240x320 photo upload standards.'
      }
    ],
    faqs_hi: [
      {
        question: 'RRB JE CBT-1 परीक्षा का पैटर्न और विषय-वार अंक क्या हैं?',
        answer: 'RRB JE CBT-1 परीक्षा 90 मिनट की होती है जिसमें 100 वस्तुनिष्ठ प्रश्न (100 अंक) होते हैं: गणित (30 प्रश्न), रीजनिंग (25 प्रश्न), सामान्य जागरूकता (15 प्रश्न), और सामान्य विज्ञान (30 प्रश्न)। प्रत्येक गलत उत्तर पर 1/3 अंक की नेगेटिव मार्किंग होती है।'
      },
      {
        question: 'CBT-2 के लिए 15 गुना शॉर्टलिस्टिंग और न्यूनतम कटऑफ नियम क्या है?',
        answer: 'CBT-1 में प्राप्त नॉर्मलाइज्ड अंकों के आधार पर प्रत्येक RRB में रिक्तियों के 15 गुना उम्मीदवारों को CBT-2 के लिए चुना जाता है। उम्मीदवारों को न्यूनतम योग्यता अंक (UR/EWS: 40%, OBC/SC: 30%, ST: 25%) पार करना अनिवार्य होता है।'
      },
      {
        question: 'RRB JE CBT-2 का ब्रांच-वार तकनीकी सिलेबस क्या है?',
        answer: 'CBT-2 में 150 प्रश्न (150 अंक) होते हैं: 50 अंक गैर-तकनीकी (GA, Physics, Chemistry, Computer, Environment) और 100 अंक आपकी चुनी हुई इंजीनियरिंग शाखा (सिविल, मैकेनिकल, इलेक्ट्रिकल, इलेक्ट्रॉनिक्स) के कोर विषयों से पूछे जाते हैं।'
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
        question: 'RRB JE CBT-1 परीक्षेचे स्वरूप आणि गुण विभागणी काय आहे?',
        answer: 'RRB JE CBT-1 ही 90 मिनिटांची चाळणी परीक्षा असून यात 100 गुणांचे 100 प्रश्न असतात: गणित (30 प्रश्न), बुद्धिमत्ता (25 प्रश्न), सामान्य ज्ञान (15 प्रश्न) आणि सामान्य विज्ञान (30 प्रश्न). प्रत्येक चुकीच्या उत्तरासाठी 1/3 नकारात्मक गुण लागू असतात.'
      },
      {
        question: 'CBT-2 साठी 15 पट शॉर्टलिस्टिंग आणि किमान पात्रता नियम काय आहे?',
        answer: 'CBT-1 मधील नॉर्मलाइझ गुणांच्या आधारे प्रत्येक RRB झोनमधील रिक्त पदांच्या 15 पट उमेदवार CBT-2 साठी निवडले जातात. उमेदवारांना किमान पात्रता गुण (UR/EWS: 40%, OBC/SC: 30%, ST: 25%) मिळवणे बंधनकारक असते.'
      },
      {
        question: 'RRB JE CBT-2 चा तांत्रिक अभ्यासक्रम कसा आहे?',
        answer: 'CBT-2 मध्ये 150 प्रश्न (150 गुण, 120 मिनिटे) असतात. यातील 100 गुण संबंधित अभियांत्रिकी शाखेचे (सिव्हिल, मेकॅनिकल, इलेक्ट्रिकल, इलेक्ट्रॉनिक्स) असतात, तर 50 गुण सामान्य अभ्यास, संगणक व पर्यावरणाचे असतात.'
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

  <!-- Mobile Quick Jump Bar -->
  <div class="my-4 p-2 rounded-xl bg-card/90 border border-border shadow-2xs sticky top-16 sm:top-20 z-20 backdrop-blur-md">
    <div class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider px-2 mb-1.5 flex items-center gap-1.5">
      <span class="text-primary">⚡</span> Quick Jump Navigation:
    </div>
    <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs whitespace-nowrap">
      <a href="#document-specs" class="px-2.5 py-1 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-bold transition flex items-center gap-1 shrink-0">
        <span>📸</span> <span>Upload Specs</span>
      </a>
      <a href="#visual-checklist" class="px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold transition flex items-center gap-1 shrink-0">
        <span>🛡️</span> <span>Do vs Don't</span>
      </a>
      <a href="#instant-resizers" class="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition flex items-center gap-1 shrink-0 shadow-2xs">
        <span>🛠️</span> <span>Resize Now</span>
      </a>
      <a href="#salary-structure" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition flex items-center gap-1 shrink-0">
        <span>💰</span> <span>Salary (₹69K)</span>
      </a>
      <a href="#technical-syllabus" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition flex items-center gap-1 shrink-0">
        <span>🔬</span> <span>CBT-2 Syllabus</span>
      </a>
      <a href="#selection-timeline" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition flex items-center gap-1 shrink-0">
        <span>🗺️</span> <span>4-Stage Roadmap</span>
      </a>
      <a href="#regional-rrb-portals" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition flex items-center gap-1 shrink-0">
        <span>🏛️</span> <span>Regional Portals</span>
      </a>
      <a href="#faqs" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition flex items-center gap-1 shrink-0">
        <span>❓</span> <span>10 FAQs</span>
      </a>
    </div>
  </div>

  <!-- Notification Status & Timeline Clarification Banner -->
  <div class="my-6 p-5 rounded-2xl bg-blue-500/10 border-2 border-blue-500/30 text-foreground space-y-2.5 shadow-xs">
    <div class="flex items-center gap-2">
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-600 text-white shrink-0">
        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> NOTIFICATION STATUS & TIMELINE CLARITY
      </span>
      <span class="text-xs font-bold text-blue-700 dark:text-blue-300">CEN 03/2024 Ongoing Stages vs 2026 Annual Calendar</span>
    </div>
    <p class="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
      <strong>Active Cycle Notice:</strong> Centralised Employment Notice <strong>CEN 03/2024</strong> is the active recruitment cycle with 7,951 notified vacancies undergoing multi-phase evaluation: CBT-1 examination scheduling, City Intimation Slip releases (issued 10 days prior to exam), and Admit Card e-call letters (issued 4 days before exam dates). Candidates targeting the upcoming <strong>2026 Annual Railway Recruitment Calendar</strong> follow this identical CBT-1/CBT-2 syllabus structure, Pay Level-6 salary rules, and photo-signature compliance standards under the Ministry of Railways standardized hiring protocol.
    </p>
  </div>

  <!-- 4-Stage Selection Timeline Roadmap -->
  <div class="my-6 p-5 rounded-2xl bg-card border border-border shadow-xs space-y-4" id="selection-timeline">
    <div class="flex items-center justify-between border-b border-border pb-3">
      <div class="flex items-center gap-2 text-foreground font-bold text-sm sm:text-base">
        <span>🗺️</span> <span>RRB JE 4-Stage Recruitment Progress Tracker</span>
      </div>
      <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-bold">Standard Flow</span>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
      <!-- Stage 1 -->
      <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-border space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="font-mono font-bold text-primary">STAGE 1</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">Scrutiny</span>
        </div>
        <strong class="text-foreground text-xs block font-bold">Application & Scrutiny</strong>
        <p class="text-muted-foreground text-[11px] leading-relaxed">
          Online registration, fee payment, and automated checking of 140×60 sign and 240×320 photo uploads on rrbapply.gov.in.
        </p>
      </div>

      <!-- Stage 2 -->
      <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-border space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="font-mono font-bold text-amber-600 dark:text-amber-400">STAGE 2</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">Screening</span>
        </div>
        <strong class="text-foreground text-xs block font-bold">CBT-1 & City Intimation</strong>
        <p class="text-muted-foreground text-[11px] leading-relaxed">
          Exam city slip out 10 days prior; Admit card 4 days prior. 100 Questions / 90 mins to filter top 15× vacancy candidates.
        </p>
      </div>

      <!-- Stage 3 -->
      <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-border space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">STAGE 3</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">Final Merit</span>
        </div>
        <strong class="text-foreground text-xs block font-bold">CBT-2 Technical Exam</strong>
        <p class="text-muted-foreground text-[11px] leading-relaxed">
          150 Questions / 120 mins with 100 technical branch marks. 100% of final appointment ranking relies on normalized CBT-2 score.
        </p>
      </div>

      <!-- Stage 4 -->
      <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-border space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="font-mono font-bold text-purple-600 dark:text-purple-400">STAGE 4</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold">Empanelment</span>
        </div>
        <strong class="text-foreground text-xs block font-bold">DV & Medical Fitness</strong>
        <p class="text-muted-foreground text-[11px] leading-relaxed">
          Original engineering credentials audit and strict optical standards test (Aye-Three 6/9 vision, color test, no Lasik).
        </p>
      </div>
    </div>
  </div>

  <p class="text-base text-slate-800 dark:text-slate-200 font-medium">
    Securing a Junior Engineer cadre in Indian Railways represents one of the most prestigious technical careers for diploma and degree engineers in India. Beyond attractive compensation and housing benefits, RRB JEs lead critical railway modernization, track inspection, rolling stock maintenance, signal interlocking, and depot logistics. Below is the exhaustive blueprint covering post distribution, Level-6 salary structures, syllabus breakdown, Do/Don\\'t upload rules, and regional portal directories.
  </p>

  <!-- Section 1: Vacancy Breakdown & Post Categories -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="vacancy-distribution">📋 1. RRB JE 2026 Vacancy Distribution Across Engineering Streams</h2>
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
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="salary-structure">💰 2. RRB JE Salary Structure 2026: 7th CPC Level-6 Pay Slip Breakdown</h2>
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
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="exam-pattern">📝 3. RRB JE Examination Pattern: CBT-1 vs CBT-2 Compared</h2>
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

  <!-- Minimum Qualifying Cutoff Percentages Table -->
  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs">
    <div class="p-3 bg-slate-100 dark:bg-slate-800/80 border-b border-border flex items-center justify-between text-xs font-semibold">
      <span class="flex items-center gap-1.5 text-foreground font-bold"><span>⚖️</span> Statutory Minimum Qualifying Marks & Normalization Floor</span>
      <span class="text-[11px] text-muted-foreground font-mono">15x Vacancy Filter</span>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-xs sm:text-sm border-collapse">
        <thead>
          <tr class="bg-muted/40 text-muted-foreground text-left border-b border-border">
            <th class="p-3 font-semibold">Category</th>
            <th class="p-3 font-semibold">Minimum Qualifying Cutoff</th>
            <th class="p-3 font-semibold">Shortlisting Multiplier</th>
            <th class="p-3 font-semibold">PwBD Concession</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Unreserved (UR) / General</td>
            <td class="p-3 font-bold text-foreground">40% Marks</td>
            <td class="p-3 text-muted-foreground">15 Times Category Vacancy</td>
            <td class="p-3 text-muted-foreground">2% Relaxation (38%) if Shortfall</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Economically Weaker Section (EWS)</td>
            <td class="p-3 font-bold text-foreground">40% Marks</td>
            <td class="p-3 text-muted-foreground">15 Times Category Vacancy</td>
            <td class="p-3 text-muted-foreground">2% Relaxation (38%) if Shortfall</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Other Backward Classes (OBC-NCL)</td>
            <td class="p-3 font-bold text-foreground">30% Marks</td>
            <td class="p-3 text-muted-foreground">15 Times Category Vacancy</td>
            <td class="p-3 text-muted-foreground">2% Relaxation (28%) if Shortfall</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Scheduled Caste (SC)</td>
            <td class="p-3 font-bold text-foreground">30% Marks</td>
            <td class="p-3 text-muted-foreground">15 Times Category Vacancy</td>
            <td class="p-3 text-muted-foreground">2% Relaxation (28%) if Shortfall</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Scheduled Tribe (ST)</td>
            <td class="p-3 font-bold text-foreground">25% Marks</td>
            <td class="p-3 text-muted-foreground">15 Times Category Vacancy</td>
            <td class="p-3 text-muted-foreground">2% Relaxation (23%) if Shortfall</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Section 4: Branch-Wise Technical Syllabus Matrix -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="technical-syllabus">🔬 4. CBT-2 Technical Syllabus Matrix: Core Subject Breakdown (100 Marks)</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    The technical abilities section carries two-thirds (66.7%) of your total CBT-2 evaluation. Below are the highest-yield subjects notified for each engineering stream:
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <!-- Civil Card -->
    <div class="p-5 rounded-2xl bg-card border border-border shadow-xs space-y-2.5">
      <div class="flex items-center gap-2 border-b border-border pb-2.5">
        <span class="text-lg">🏗️</span>
        <h4 class="font-bold text-sm text-foreground">Civil & Allied Engineering</h4>
      </div>
      <ul class="text-xs space-y-1.5 text-muted-foreground">
        <li><strong>Building Materials:</strong> Physical & chemical properties of cement, coarse/fine aggregates, concrete mix design, bricks, and timber.</li>
        <li><strong>Surveying:</strong> Chain surveying, compass, theodolite traversal, levelling, contouring, tachometry, and curve setting.</li>
        <li><strong>Soil Mechanics & Foundations:</strong> Soil classification, permeability, shear strength, compaction, and shallow/deep foundation bearing capacity.</li>
        <li><strong>Hydraulics & Fluid Mechanics:</strong> Flow measurement, Bernoulli equation, pipe flow friction, open channel flow, and weir equations.</li>
        <li><strong>RCC Structures & Steel Design:</strong> Working stress vs limit state methods, shear reinforcement, IS 456 beams/columns, and IS 800 connections.</li>
      </ul>
    </div>

    <!-- Mechanical Card -->
    <div class="p-5 rounded-2xl bg-card border border-border shadow-xs space-y-2.5">
      <div class="flex items-center gap-2 border-b border-border pb-2.5">
        <span class="text-lg">⚙️</span>
        <h4 class="font-bold text-sm text-foreground">Mechanical & Allied Engineering</h4>
      </div>
      <ul class="text-xs space-y-1.5 text-muted-foreground">
        <li><strong>Mechanics & SOM:</strong> Stress-strain relationships, Mohr circle, shear force & bending moment diagrams, torsion of shafts, Euler columns.</li>
        <li><strong>Theory of Machines:</strong> Kinematic links, inversions, gear trains, dynamic balancing, governors, and flywheel turning moment diagrams.</li>
        <li><strong>Thermal Engineering:</strong> Laws of thermodynamics, air standard cycles (Otto, Diesel, Dual), Rankine cycle, IC engine performance, and cooling.</li>
        <li><strong>Fluid Machinery:</strong> Pelton wheels, Francis/Kaplan turbines, centrifugal & reciprocating pumps, cavitation, and hydraulic efficiency.</li>
        <li><strong>Production Technology:</strong> Casting gating systems, arc & resistance welding, lathe machining operations, CNC fundamentals, and heat treatment.</li>
      </ul>
    </div>

    <!-- Electrical Card -->
    <div class="p-5 rounded-2xl bg-card border border-border shadow-xs space-y-2.5">
      <div class="flex items-center gap-2 border-b border-border pb-2.5">
        <span class="text-lg">⚡</span>
        <h4 class="font-bold text-sm text-foreground">Electrical & Allied Engineering</h4>
      </div>
      <ul class="text-xs space-y-1.5 text-muted-foreground">
        <li><strong>Circuit Theory:</strong> Ohm's law, Kirchhoff's laws, Thevenin, Norton, Superposition, and Maximum Power Transfer theorems.</li>
        <li><strong>AC Fundamentals:</strong> RMS and average values, form factor, 3-phase star/delta connections, active/reactive power, and resonance.</li>
        <li><strong>Electrical Machines:</strong> Single & 3-phase transformers (losses, efficiency), DC motors (starting, speed control), and 3-phase induction motors.</li>
        <li><strong>Power Systems:</strong> Generation sources, transmission line parameters, distribution systems, fault current calculations, and substation layout.</li>
        <li><strong>Switchgear & Measurements:</strong> Circuit breakers, induction relays, earthing standards, PMMC & MI meters, and digital energy meters.</li>
      </ul>
    </div>

    <!-- S&T Card -->
    <div class="p-5 rounded-2xl bg-card border border-border shadow-xs space-y-2.5">
      <div class="flex items-center gap-2 border-b border-border pb-2.5">
        <span class="text-lg">📡</span>
        <h4 class="font-bold text-sm text-foreground">Electronics & Telecommunications (S&T / IT)</h4>
      </div>
      <ul class="text-xs space-y-1.5 text-muted-foreground">
        <li><strong>Semiconductor Devices:</strong> PN junction diode characteristics, BJT biasing configurations, JFET/MOSFET operations, and operational amplifiers.</li>
        <li><strong>Digital Electronics:</strong> Boolean algebra, Karnaugh maps, combinational logic (multiplexers, decoders), and sequential circuits (flip-flops, counters).</li>
        <li><strong>Microprocessors:</strong> 8085 architecture, pin diagram, instruction set, timing diagrams, addressing modes, and peripheral interfacing (8255).</li>
        <li><strong>Communication Systems:</strong> Modulation techniques (AM, FM, PM), digital modulations (ASK, FSK, PSK, QAM), and optical fiber communication.</li>
        <li><strong>Computer Networks:</strong> OSI 7-layer reference model, TCP/IP protocol suite, IP addressing, routing protocols, and Ethernet standards.</li>
      </ul>
    </div>
  </div>

  <!-- Section 5: Document Upload Standards & Photo/Sign Rules -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="document-specs">📸 5. Official RRB JE Document Upload Guidelines (CEN 03/2024 Standards)</h2>
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
        <li><strong>Facial View:</strong> Frontal face covering 75%–80% of frame with both ears clearly visible.</li>
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

  <!-- Visual Mockups & Do's / Don'ts Comparison Cards -->
  <div class="my-6 rounded-2xl border border-border bg-card overflow-hidden shadow-xs" id="visual-checklist">
    <div class="p-3.5 bg-slate-100 dark:bg-slate-800/80 border-b border-border flex items-center justify-between">
      <span class="font-bold text-xs sm:text-sm text-foreground flex items-center gap-2">
        <span>🛡️</span> Visual Checklist: Compliant Uploads vs Disqualification Traps
      </span>
      <span class="text-[11px] font-bold text-primary">CEN 03/2024 Audit</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
      <!-- Signature Comparison with Visual Mockups -->
      <div class="p-4 sm:p-5 space-y-3.5">
        <h5 class="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
          <span>✍️</span> Signature Compliance: Cursive vs Block Letters
        </h5>

        <!-- Visual Mockup Strip -->
        <div class="grid grid-cols-2 gap-2.5 pt-1">
          <!-- DO Signature Mockup -->
          <div class="rounded-xl border border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-950/20 p-2.5 flex flex-col items-center justify-between gap-1.5 text-center">
            <div class="w-full h-14 bg-white dark:bg-slate-900 rounded-lg border border-emerald-400/50 flex items-center justify-center px-2 shadow-2xs">
              <span class="font-serif italic font-bold text-lg sm:text-xl text-slate-900 dark:text-slate-100 tracking-wider select-none">
                Rahul Kumar
              </span>
            </div>
            <span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
              <span>✅</span> Running Script
            </span>
          </div>

          <!-- DON'T Signature Mockup -->
          <div class="rounded-xl border border-rose-500/40 bg-rose-50/20 dark:bg-rose-950/20 p-2.5 flex flex-col items-center justify-between gap-1.5 text-center">
            <div class="w-full h-14 bg-white dark:bg-slate-900 rounded-lg border border-rose-400/50 flex items-center justify-center px-2 relative overflow-hidden shadow-2xs">
              <span class="font-sans font-black text-xs sm:text-sm text-rose-600 dark:text-rose-400 tracking-widest line-through select-none uppercase">
                RAHUL KUMAR
              </span>
              <span class="absolute bottom-1 text-[9px] font-black text-white bg-rose-600 px-1.5 rounded uppercase">REJECTED</span>
            </div>
            <span class="inline-flex items-center gap-1 text-[10px] font-bold text-rose-700 dark:text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full">
              <span>❌</span> All-Caps / Block
            </span>
          </div>
        </div>

        <div class="space-y-2 text-xs">
          <div class="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200">
            <strong class="font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1 mb-1">
              <span>✅</span> DO (Strictly Accepted):
            </strong>
            <p class="leading-relaxed">Cursive running handwriting in black ballpoint ink on crisp white unruled paper. High contrast, clean margins, strictly 140 × 60 px and 10–20 KB.</p>
          </div>
          <div class="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-950 dark:text-rose-200">
            <strong class="font-bold text-rose-700 dark:text-rose-300 flex items-center gap-1 mb-1">
              <span>❌</span> DON'T (Summary Rejection):
            </strong>
            <p class="leading-relaxed">Signatures in CAPITAL / BLOCK LETTERS (e.g., "AMIT VERMA"), blue or gel pen ink, lined notebook paper with horizontal ruling, or shadows.</p>
          </div>
        </div>
      </div>

      <!-- Photograph Comparison with Visual Mockups -->
      <div class="p-4 sm:p-5 space-y-3.5">
        <h5 class="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
          <span>📷</span> Photograph Compliance: Studio vs Selfie
        </h5>

        <!-- Visual Mockup Strip -->
        <div class="grid grid-cols-2 gap-2.5 pt-1">
          <!-- DO Photo Mockup -->
          <div class="rounded-xl border border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-950/20 p-2.5 flex flex-col items-center justify-between gap-1.5 text-center">
            <div class="w-16 h-20 bg-white dark:bg-slate-900 rounded-lg border border-emerald-400/50 flex flex-col items-center justify-center p-1 relative shadow-2xs">
              <div class="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 mb-0.5"></div>
              <div class="w-12 h-6 rounded-t-full bg-slate-400 dark:bg-slate-600"></div>
              <span class="absolute top-1 right-1 text-[9px] text-emerald-600 dark:text-emerald-400 font-bold">3.5×4.5</span>
            </div>
            <span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
              <span>✅</span> Studio White BG
            </span>
          </div>

          <!-- DON'T Photo Mockup -->
          <div class="rounded-xl border border-rose-500/40 bg-rose-50/20 dark:bg-rose-950/20 p-2.5 flex flex-col items-center justify-between gap-1.5 text-center">
            <div class="w-16 h-20 bg-slate-800 rounded-lg border border-rose-400/50 flex flex-col items-center justify-center p-1 relative overflow-hidden shadow-2xs">
              <div class="w-8 h-8 rounded-full bg-slate-600 rotate-12 mb-0.5"></div>
              <div class="w-12 h-6 rounded-t-full bg-slate-700 rotate-6"></div>
              <div class="absolute inset-0 flex items-center justify-center bg-rose-950/40">
                <span class="text-rose-500 font-black text-2xl select-none">✕</span>
              </div>
              <span class="absolute bottom-1 text-[8px] font-black text-white bg-rose-600 px-1 rounded uppercase">REJECTED</span>
            </div>
            <span class="inline-flex items-center gap-1 text-[10px] font-bold text-rose-700 dark:text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full">
              <span>❌</span> Selfie / Sunglasses
            </span>
          </div>
        </div>

        <div class="space-y-2 text-xs">
          <div class="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200">
            <strong class="font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1 mb-1">
              <span>✅</span> DO (Strictly Accepted):
            </strong>
            <p class="leading-relaxed">Recent studio passport photo on clean white background, 75–80% face coverage showing both ears, neutral expression, strictly 240 × 320 px and 30–70 KB.</p>
          </div>
          <div class="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-950 dark:text-rose-200">
            <strong class="font-bold text-rose-700 dark:text-rose-300 flex items-center gap-1 mb-1">
              <span>❌</span> DON'T (Summary Rejection):
            </strong>
            <p class="leading-relaxed">Casual front-camera selfies, tilted head angles, dark or textured backgrounds, spectacles with tinted/reflective glass, caps, or heavy photo filters.</p>
          </div>
        </div>
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

  <!-- Section 6: Step-by-Step Embedded Quick Launch Resizers & Inline Dropzone -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="instant-resizers">🛠️ 6. Instant In-Page Resizer Launchers: Prepare Compliant RRB JE Uploads</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    Eliminate file size errors and dimension mismatches before submitting your railway application. SignResize processes your files client-side with 100% data privacy:
  </p>

  <div class="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
    <!-- Signature Launcher & Dropzone Card -->
    <div class="p-5 rounded-2xl bg-gradient-to-br from-card via-card to-primary/10 border-2 border-primary/30 shadow-xs flex flex-col justify-between space-y-4">
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-primary uppercase tracking-wider">✍️ Signature Resizer</span>
          <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-bold">140 × 60 px</span>
        </div>
        <h4 class="font-bold text-base text-foreground">RRB JE Running Signature Tool</h4>
        <p class="text-xs text-muted-foreground leading-relaxed">
          Standardizes running signature to strictly <strong>10 KB to 20 KB</strong> in JPG format with automated contrast cleanup.
        </p>

        <!-- Interactive Drag-and-Drop Mockzone -->
        <label for="rrb-sign-file-input" class="group cursor-pointer block border-2 border-dashed border-primary/30 hover:border-primary/60 rounded-xl p-3.5 bg-card/80 hover:bg-primary/5 transition text-center space-y-1">
          <input type="file" id="rrb-sign-file-input" class="hidden" accept="image/jpeg,image/png,image/webp" onchange="window.location.href='/rrb-je-signature-resize/'" />
          <span class="text-xl block group-hover:scale-110 transition-transform">📥</span>
          <span class="text-xs font-bold text-foreground block">Drop Signature image here</span>
          <span class="text-[10px] text-muted-foreground block">or click to browse from device</span>
        </label>
      </div>
      <a href="/rrb-je-signature-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-95 transition shadow-xs w-full text-center">
        <span>Open Signature Canvas (10–20 KB)</span>
        <span>&rarr;</span>
      </a>
    </div>

    <!-- Photo Launcher & Dropzone Card -->
    <div class="p-5 rounded-2xl bg-gradient-to-br from-card via-card to-primary/10 border-2 border-primary/30 shadow-xs flex flex-col justify-between space-y-4">
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-primary uppercase tracking-wider">📷 Photograph Resizer</span>
          <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-bold">240 × 320 px</span>
        </div>
        <h4 class="font-bold text-base text-foreground">RRB JE Color Photo Tool</h4>
        <p class="text-xs text-muted-foreground leading-relaxed">
          Formats 3.5×4.5 cm passport photograph to strictly <strong>30 KB to 70 KB</strong> JPG format with plain white background.
        </p>

        <!-- Interactive Drag-and-Drop Mockzone -->
        <label for="rrb-photo-file-input" class="group cursor-pointer block border-2 border-dashed border-primary/30 hover:border-primary/60 rounded-xl p-3.5 bg-card/80 hover:bg-primary/5 transition text-center space-y-1">
          <input type="file" id="rrb-photo-file-input" class="hidden" accept="image/jpeg,image/png,image/webp" onchange="window.location.href='/rrb-je-photo-resize/'" />
          <span class="text-xl block group-hover:scale-110 transition-transform">📥</span>
          <span class="text-xs font-bold text-foreground block">Drop Passport Photo here</span>
          <span class="text-[10px] text-muted-foreground block">or click to browse from device</span>
        </label>
      </div>
      <a href="/rrb-je-photo-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-card border border-border text-foreground font-bold text-xs sm:text-sm hover:bg-muted/40 transition shadow-xs w-full text-center">
        <span>Open Photo Canvas (30–70 KB)</span>
        <span>&rarr;</span>
      </a>
    </div>
  </div>

  <!-- Section 7: Regional RRB Zone Portals Directory -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="regional-rrb-portals">🌐 7. Regional RRB Portals Directory: Direct Links & Jurisdiction Matrix</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    Candidates must verify city intimation slips, regional vacancies, and scorecards on their respective regional RRB portal. Below are direct official links to active boards:
  </p>

  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs">
    <div class="p-3 bg-slate-100 dark:bg-slate-800/80 border-b border-border flex items-center justify-between text-xs font-semibold">
      <span class="flex items-center gap-1.5 text-foreground font-bold"><span>🏛️</span> Regional Railway Recruitment Boards (RRB) Notice Boards</span>
      <span class="text-[11px] text-slate-600 dark:text-slate-400 font-bold sm:hidden flex items-center gap-1"><span>👉</span> Scroll table</span>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-xs sm:text-sm border-collapse">
        <thead>
          <tr class="bg-muted/40 text-muted-foreground text-left border-b border-border">
            <th class="p-3 font-semibold">RRB Regional Board</th>
            <th class="p-3 font-semibold">Zonal Railways Served</th>
            <th class="p-3 font-semibold">Direct Official Portal Link</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">RRB Mumbai</td>
            <td class="p-3 text-muted-foreground">Central Railway (CR), Western Railway (WR)</td>
            <td class="p-3"><a href="https://www.rrbmumbai.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">rrbmumbai.gov.in &rarr;</a></td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">RRB Secunderabad</td>
            <td class="p-3 text-muted-foreground">South Central Railway (SCR), East Coast (ECoR)</td>
            <td class="p-3"><a href="https://rrbsecunderabad.cgg.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">rrbsecunderabad.cgg.gov.in &rarr;</a></td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">RRB Kolkata</td>
            <td class="p-3 text-muted-foreground">Eastern Railway (ER), South Eastern (SER), Metro</td>
            <td class="p-3"><a href="https://www.rrbkolkata.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">rrbkolkata.gov.in &rarr;</a></td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">RRB Chennai</td>
            <td class="p-3 text-muted-foreground">Southern Railway (SR), ICF</td>
            <td class="p-3"><a href="https://www.rrbchennai.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">rrbchennai.gov.in &rarr;</a></td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">RRB Allahabad (Prayagraj)</td>
            <td class="p-3 text-muted-foreground">North Central Railway (NCR), Northern (NR)</td>
            <td class="p-3"><a href="https://www.rrbald.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">rrbald.gov.in &rarr;</a></td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">RRB Chandigarh</td>
            <td class="p-3 text-muted-foreground">Northern Railway (NR)</td>
            <td class="p-3"><a href="https://www.rrbcdg.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">rrbcdg.gov.in &rarr;</a></td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">RRB Bangalore (Bengaluru)</td>
            <td class="p-3 text-muted-foreground">South Western Railway (SWR), RWF</td>
            <td class="p-3"><a href="https://www.rrbbnc.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">rrbbnc.gov.in &rarr;</a></td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">RRB Bhopal</td>
            <td class="p-3 text-muted-foreground">West Central Railway (WCR), Western (WR)</td>
            <td class="p-3"><a href="https://www.rrbbpl.nic.in" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">rrbbpl.nic.in &rarr;</a></td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="p-3 font-medium text-foreground">Central Application Portal</td>
            <td class="p-3 text-muted-foreground">All 21 RRBs Online Application & Login</td>
            <td class="p-3"><a href="https://www.rrbapply.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">rrbapply.gov.in &rarr;</a></td>
          </tr>
        </tbody>
      </table>
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

const newContent = content.slice(0, postStart + startMarker.length) + enrichedRRBJePost + content.slice(tnpscObjectStart);
fs.writeFileSync(blogFilePath, newContent, 'utf8');
console.log('Successfully enriched RRB JE 2026 post (v2) in blogPostsData.ts!');
