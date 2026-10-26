import fs from 'fs';

const filePath = 'src/data/blogPostsData.ts';
let content = fs.readFileSync(filePath, 'utf8');

const targetSlug = 'neet-ug-2026-master-guide-postcard-photo-signature-rules';

const quickFacts_mr = [
  { label: "परीक्षा नियामक मंडळ", value: "नॅशनल टेस्टिंग एजन्सी (NTA)" },
  { label: "अधिकृत संकेतस्थळे", value: "exams.nta.ac.in/NEET आणि neet.nta.nic.in" },
  { label: "नोंदणी पद्धती", value: "एकल-खिडकी ऑनलाइन अर्ज (Aadhaar / DigiLocker e-KYC)" },
  { label: "पासपोर्ट फोटो निकष", value: "३.५ × ४.५ सेमी (१० KB ते २०० KB), ८०% चेहरा, पांढरी पार्श्वभूमी" },
  { label: "पोस्टकार्ड फोटो निकष", value: "४ × ६ इंच (१० KB ते २०० KB), खाली उमेदवाराचे नाव व फोटो काढलेली तारीख" },
  { label: "स्वाक्षरी निकष", value: "४ KB ते ३० KB, काळी शाई चालू हस्ताक्षर (कॅपिटल अक्षरे सक्त वर्ज्य)" },
  { label: "बोटांचे ठसे / अंगठे", value: "१० KB ते २०० KB, दोन्ही हातांची १० बोटे/अंगठे निळ्या शाईत" },
  { label: "परीक्षा कालावधी व स्वरूप", value: "२०० मिनिटे (३ तास २० मिनिटे) — पेन आणि पेपर OMR मोड" }
];

const faqs_mr = [
  {
    question: "NEET UG परीक्षेचे पूर्ण नाव काय आहे आणि ही परीक्षा कशासाठी घेतली जाते?",
    answer: "NEET चे पूर्ण नाव 'National Eligibility cum Entrance Test' (राष्ट्रीय पात्रता व प्रवेश परीक्षा) आहे. ही भारतातील एकमेव राष्ट्रीय वैद्यकीय प्रवेश परीक्षा असून, नॅशनल टेस्टिंग एजन्सी (NTA) द्वारे MBBS, BDS, BAMS, BHMS, BUMS आणि इतर पदवीपूर्व वैद्यकीय अभ्यासक्रमांच्या प्रवेशासाठी आयोजित केली जाते. महाराष्ट्रातील शासकीय व खाजगी महाविद्यालयांमध्ये 85% राज्य कोट्यासाठी हीच परीक्षा अनिवार्य आहे."
  },
  {
    question: "NEET 2026 परीक्षा तारीख आणि ऑनलाइन अर्ज नोंदणी कधी सुरू होईल?",
    answer: "NTA च्या शैक्षणिक कॅलेंडरनुसार NEET UG 2026 परीक्षा मे 2026 च्या पहिल्या रविवारी (दुपारी 2:00 ते 5:20) देशभरात एकाच शिफ्टमध्ये घेतली जाईल. परीक्षेसाठी ऑनलाइन नोंदणी प्रक्रिया फेब्रुवारी 2026 च्या पहिल्या आठवड्यात exams.nta.ac.in/NEET या अधिकृत पोर्टलवर सुरू होईल."
  },
  {
    question: "NEET 2026 साठी 4x6 पोस्टकार्ड फोटोचे नेमके नियम काय आहेत?",
    answer: "NTA च्या माहिती पत्रकानुसार, 4×6 इंच (पोस्टकार्ड साईज) रंगीत फोटो अनिवार्य आहे. फोटोचा फाइल आकार 10 KB ते 200 KB दरम्यान आणि JPG फॉरमॅटमध्ये असावा. पार्श्वभूमी (Background) स्वच्छ पांढरी असावी, चेहऱ्याचे कव्हरेज 80% असावे, दोन्ही कान स्पष्ट दिसावेत आणि फोटोच्या तळाशी उमेदवाराचे नाव व फोटो काढलेली तारीख (DoP) स्पष्ट छापलेली असावी."
  },
  {
    question: "स्वाक्षरीसाठी कोणती शाई वापरावी आणि कॅपिटल अक्षरे का चालत नाहीत?",
    answer: "NEET UG साठी स्वाक्षरी नेहमी पांढऱ्या कागदावर काळ्या शाईच्या बॉलपॉईंट पेनने (Black Ballpoint Pen) करावी. स्वाक्षरीचा आकार 4 KB ते 30 KB दरम्यान असावा. संपूर्ण नाव कॅपिटल / ब्लॉक लेटर्समध्ये (उदा. RAHUL SHINDE) लिहिलेली स्वाक्षरी NTA कडून थेट अपात्र ठरवली जाते. स्वाक्षरी नेहमी दैनंदिन स्वाक्षरीप्रमाणे चालू हस्ताक्षरात (Running Handwriting) असणे बंधनकारक आहे."
  },
  {
    question: "महाराष्ट्रातील 85% राज्य कोटा (State Quota) आणि 15% AIQ कोटा कसा काम करतो?",
    answer: "महाराष्ट्रातील सर्व शासकीय वैद्यकीय महाविद्यालयांमधील 15% जागा अखिल भारतीय कोट्यासाठी (AIQ - MCC द्वारे कौन्सिलिंग) राखीव असतात. उर्वरित 85% जागांवर प्रवेश राज्य सीईटी सेल (State CET Cell, Maharashtra) द्वारे दिला जातो. यासाठी उमेदवाराकडे महाराष्ट्राचे अधिवास प्रमाणपत्र (Domicile Certificate) आणि 10 वी व 12 वी महाराष्ट्रातून उत्तीर्ण असणे आवश्यक आहे."
  },
  {
    question: "NEET 2026 साठी किमान व कमाल वयोमर्यादा काय आहे?",
    answer: "NEET UG परीक्षेसाठी उमेदवाराचे वय प्रवेश वर्षाच्या 31 डिसेंबर रोजी किमान 17 वर्षे पूर्ण असावे (NEET 2026 साठी 31 डिसेंबर 2009 रोजी किंवा त्यापूर्वी जन्म असावा). राष्ट्रीय वैद्यकीय आयोगाने (NMC) कमाल वयोमर्यादा (Upper Age Limit) पूर्णपणे रद्द केली आहे, त्यामुळे वयाची कोणतीही उच्च मर्यादा नाही."
  },
  {
    question: "NEET अर्जात फोटो किंवा सही चुकीची अपलोड झाल्यास अर्ज बाद होतो का?",
    answer: "होय, अस्पष्ट फोटो, काळी पार्श्वभूमी, चष्मा घातलेला फोटो किंवा कॅपिटल अक्षरांतील स्वाक्षरीमुळे दरवर्षी हजारो अर्ज त्रुटींमध्ये (Discrepancy) येतात. NTA दुरुस्तीसाठी (Correction Window) मर्यादित वेळ देते. जर दिलेल्या वेळेत मानकांनुसार फोटो किंवा सही दुरुस्त केली नाही, तर प्रवेशपत्र (Admit Card) रोखले जाऊ शकते."
  },
  {
    question: "NEET UG फोटो आणि सही विनामूल्य कशी रिसाइझ करावी?",
    answer: "SignResize च्या समर्पित NEET Photo & Signature Resizer टूलचा वापर करून तुम्ही सेकंदात पासपोर्ट फोटो (10-200 KB), 4x6 पोस्टकार्ड फोटो आणि स्वाक्षरी (4-30 KB) अचूक NTA मानकांनुसार मोफत रिसाइझ करू शकता. हे टूल मोबाईल आणि संगणकावर खाजगीरित्या चालते."
  }
];

const contentHtml_mr = `
<div class="space-y-6 text-foreground leading-relaxed">
  <!-- Top Highlights Alert -->
  <div class="p-5 rounded-2xl bg-primary/10 border-2 border-primary/30 text-foreground space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-2xl">🩺</span>
      <h3 class="text-base sm:text-lg font-bold text-foreground">NEET UG 2026: अधिकृत मराठी मार्गदर्शक व दस्तऐवज नियम</h3>
    </div>
    <p class="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
      <strong>नॅशनल टेस्टिंग एजन्सी (NTA)</strong> द्वारे घेतली जाणारी <strong>NEET UG 2026</strong> ही देशभरातील MBBS, BDS, BAMS, BHMS आणि इतर वैद्यकीय अभ्यासक्रमांच्या प्रवेशासाठी एकमेव राष्ट्रीय प्रवेश परीक्षा आहे. महाराष्ट्रातील लाखो विद्यार्थी या परीक्षेला बसतात. NTA च्या कठोर नियमांनुसार <strong>पासपोर्ट फोटो (१०-२०० KB)</strong>, <strong>४×६ इंच पोस्टकार्ड आकाराचा फोटो (१०-२०० KB)</strong>, काळ्या शाईतील <strong>स्वाक्षरी (४-३० KB)</strong> आणि दोन्ही हातांच्या <strong>१० बोटांचे ठसे (१०-२०० KB)</strong> अपलोड करणे अनिवार्य आहे.
    </p>
  </div>

  <!-- Quick Specification Matrix Table -->
  <h2 id="specs-matrix" class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">
    📊 NTA NEET UG 2026 अधिकृत कागदपत्रे व फोटो निकष तक्ता
  </h2>
  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs">
    <div class="overflow-x-auto scrollbar-thin">
      <table class="w-full min-w-[580px] text-xs sm:text-sm text-left border-collapse">
        <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold border-b border-border">
          <tr>
            <th class="p-3 border-r border-border/70">कागदपत्राचा प्रकार</th>
            <th class="p-3 border-r border-border/70">अधिकृत फाइल आकार</th>
            <th class="p-3 border-r border-border/70">डायमेन्शन / फॉरमॅट</th>
            <th class="p-3">महत्त्वाचे नियम व अटी</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border/70 text-slate-800 dark:text-slate-200">
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
            <td class="p-3 font-bold border-r border-border/70">पासपोर्ट आकाराचा फोटो</td>
            <td class="p-3 font-mono text-primary font-bold border-r border-border/70">१० KB ते २०० KB</td>
            <td class="p-3 font-mono border-r border-border/70">३.५ × ४.५ सेमी (JPG)</td>
            <td class="p-3">८०% चेहरा कव्हरेज, पांढरी पार्श्वभूमी, दोन्ही कान स्पष्ट दिसावेत, चष्मा बंदी.</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
            <td class="p-3 font-bold border-r border-border/70">पोस्टकार्ड फोटो (४×६ इंच)</td>
            <td class="p-3 font-mono text-primary font-bold border-r border-border/70">१० KB ते २०० KB</td>
            <td class="p-3 font-mono border-r border-border/70">४ × ६ इंच (JPG)</td>
            <td class="p-3">तळाशी विद्यार्थ्याचे नाव आणि फोटो काढलेली तारीख (DoP) छापलेली असावी.</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
            <td class="p-3 font-bold border-r border-border/70">उमेदवाराची स्वाक्षरी</td>
            <td class="p-3 font-mono text-emerald-600 dark:text-emerald-400 font-bold border-r border-border/70">४ KB ते ३० KB</td>
            <td class="p-3 font-mono border-r border-border/70">३.५ × १.५ सेमी (JPG)</td>
            <td class="p-3">पांढऱ्या कागदावर काळी शाई. कॅपिटल अक्षरे सक्त वर्ज्य (चालू हस्ताक्षर हवे).</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
            <td class="p-3 font-bold border-r border-border/70">१० बोटांचे व अंगठ्याचे ठसे</td>
            <td class="p-3 font-mono text-indigo-600 dark:text-indigo-400 font-bold border-r border-border/70">१० KB ते २०० KB</td>
            <td class="p-3 font-mono border-r border-border/70">क्षैतिज स्कॅन (JPG)</td>
            <td class="p-3">डाव्या व उजव्या हाताची सर्व बोटे व अंगठे कोऱ्या कागदावर निळ्या शाईत.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Fast Resizing Tools CTA -->
  <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 flex flex-col sm:flex-row items-center justify-between gap-4">
    <div class="space-y-1">
      <h4 class="text-base font-bold text-foreground">NEET UG फोटो व स्वाक्षरी अचूक रिसाइझ करा</h4>
      <p class="text-xs sm:text-sm text-muted-foreground">
        NTA च्या मानकांनुसार १०–२०० KB पासपोर्ट/पोस्टकार्ड फोटो आणि ४–३० KB स्वाक्षरी सेकंदात तयार करा.
      </p>
    </div>
    <div class="flex flex-wrap gap-2.5 shrink-0">
      <a href="/neet-photo-resize/" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-90 transition shadow-2xs">
        <span>📸 NEET फोटो रिसाइझर</span> &rarr;
      </a>
      <a href="/nta-neet-jee-signature-resize/" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-card hover:bg-muted text-foreground border border-border font-semibold text-xs transition shadow-2xs">
        <span>✍️ NEET स्वाक्षरी (४–३० KB)</span> &rarr;
      </a>
    </div>
  </div>

  <!-- Section 1: Registration & Aadhaar e-KYC -->
  <h2 id="nta-registration" class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">
    १. NTA ऑनलाइन अर्ज नोंदणी व आधार e-KYC पडताळणी
  </h2>
  <p class="text-sm leading-relaxed text-foreground/90 mb-4">
    NTA ने NEET UG नोंदणी प्रक्रियेमध्ये सुरक्षितता वाढवण्यासाठी <strong>Aadhaar प्रमाणीकरण</strong> आणि <strong>DigiLocker पडताळणी</strong> अनिवार्य केली आहे. अधिकृत संकेतस्थळ <code>exams.nta.ac.in/NEET</code> वर अर्ज करताना पुढील पायऱ्या लक्षात ठेवा:
  </p>
  <ul class="list-disc pl-5 space-y-2 text-xs sm:text-sm text-foreground/90">
    <li><strong>नाव व जन्म तारीख जुळणी:</strong> १० वीचे गुणपत्रक, १२ वीचे प्रवेशपत्र आणि आधार कार्ड या सर्वांवरील उमेदवाराचे नाव, वडिलांचे नाव आणि जन्म तारीख अचूक जुळली पाहिजे. स्पेलिंगमध्ये फरक असल्यास तत्काळ आधार अपडेट करून घ्यावे.</li>
    <li><strong>सक्रिय मोबाईल व ईमेल:</strong> अर्जात दिलेला मोबाईल क्रमांक आणि ईमेल आयडी समुपदेशन (Counseling) प्रक्रिया पूर्ण होईपर्यंत चालू असणे आवश्यक आहे, कारण NTA चे सर्व ओटीपी (OTP) आणि प्रवेशपत्र याच ईमेलवर पाठवले जातात.</li>
    <li><strong>परीक्षा केंद्र निवड:</strong> उमेदवार आपल्या कायमस्वरूपी किंवा सध्याच्या पत्त्यानुसार परीक्षा शहरांचे चार पर्याय प्राधान्यक्रमाने निवडू शकतात. महाराष्ट्रात मुंबई, पुणे, नागपूर, नाशिक, छत्रपती संभाजीनगर, कोल्हापूर, सोलापूर यांसह ३०+ जिल्ह्यांमध्ये परीक्षा केंद्रे असतात.</li>
  </ul>

  <!-- Section 2: Quota & Eligibility -->
  <h2 id="quota-eligibility" class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">
    २. पात्रता निकष, वयोमर्यादा व महाराष्ट्र ८५% राज्य कोटा
  </h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="p-5 rounded-2xl bg-card border border-border space-y-3">
      <h3 class="font-bold text-sm text-primary flex items-center gap-2">
        <span>🎓</span> शैक्षणिक पात्रता व किमान गुण
      </h3>
      <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
        उमेदवार १२ वी (HSC) किंवा समकक्ष परीक्षा <strong>Physics, Chemistry, Biology/Biotechnology आणि English</strong> या विषयांसह उत्तीर्ण असावा. खुल्या प्रवर्गासाठी (Open/General) PCB मध्ये किमान ५०% गुण, OBC/SC/ST प्रवर्गासाठी ४०% गुण आणि PwD साठी ४५% गुण आवश्यक आहेत.
      </p>
    </div>
    <div class="p-5 rounded-2xl bg-card border border-border space-y-3">
      <h3 class="font-bold text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
        <span>🏛️</span> महाराष्ट्र ८५% राज्य कोटा आरक्षण
      </h3>
      <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
        महाराष्ट्रातील शासकीय महाविद्यालयांमधील ८५% जागांवर प्रवेश राज्य सीईटी सेल (State CET Cell) द्वारे दिला जातो. यासाठी <strong>महाराष्ट्र डोमिसाइल (Domicile Certificate)</strong>, जात प्रमाणपत्र (Caste Certificate) आणि जात वैधता प्रमाणपत्र (Caste Validity Certificate) आवश्यक आहे.
      </p>
    </div>
  </div>

  <!-- Section 3: Exam Pattern & Marking Scheme -->
  <h2 id="exam-pattern" class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">
    ३. परीक्षा स्वरूप व ७२० गुणांची गुणदान पद्धती
  </h2>
  <p class="text-sm leading-relaxed text-foreground/90 mb-4">
    NEET UG परीक्षा पेन-आणि-पेपर मोडमध्ये OMR शीटवर घेतली जाते. परीक्षेचा एकूण वेळ <strong>२०० मिनिटे (३ तास २० मिनिटे)</strong> असतो. यामध्ये एकूण २०० प्रश्न विचारले जातात, त्यापैकी १८० प्रश्न सोडवणे बंधनकारक असते:
  </p>
  <div class="my-6 rounded-2xl border border-border bg-card overflow-hidden shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted text-foreground font-semibold">
        <tr>
          <th class="p-3 border-r border-border">विषय</th>
          <th class="p-3 border-r border-border">विभाग A (३५ प्रश्न)</th>
          <th class="p-3 border-r border-border">विभाग B (१५ पैकी १०)</th>
          <th class="p-3">एकूण गुण</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr>
          <td class="p-3 font-bold border-r border-border">Physics (भौतिकशास्त्र)</td>
          <td class="p-3 border-r border-border font-mono">३५ प्रश्न (१४० गुण)</td>
          <td class="p-3 border-r border-border font-mono">१० प्रश्न (४० गुण)</td>
          <td class="p-3 font-mono font-bold text-primary">१८० गुण</td>
        </tr>
        <tr>
          <td class="p-3 font-bold border-r border-border">Chemistry (रसायनशास्त्र)</td>
          <td class="p-3 border-r border-border font-mono">३५ प्रश्न (१४० गुण)</td>
          <td class="p-3 border-r border-border font-mono">१० प्रश्न (४० गुण)</td>
          <td class="p-3 font-mono font-bold text-primary">१८० गुण</td>
        </tr>
        <tr>
          <td class="p-3 font-bold border-r border-border">Botany (वनस्पतीशास्त्र)</td>
          <td class="p-3 border-r border-border font-mono">३५ प्रश्न (१४० गुण)</td>
          <td class="p-3 border-r border-border font-mono">१० प्रश्न (४० गुण)</td>
          <td class="p-3 font-mono font-bold text-primary">१८० गुण</td>
        </tr>
        <tr>
          <td class="p-3 font-bold border-r border-border">Zoology (प्राणीशास्त्र)</td>
          <td class="p-3 border-r border-border font-mono">३५ प्रश्न (१४० गुण)</td>
          <td class="p-3 border-r border-border font-mono">१० प्रश्न (४० गुण)</td>
          <td class="p-3 font-mono font-bold text-primary">१८० गुण</td>
        </tr>
        <tr class="bg-muted/40 font-bold">
          <td class="p-3 border-r border-border">एकूण बेरीज</td>
          <td class="p-3 border-r border-border">१४० प्रश्न</td>
          <td class="p-3 border-r border-border">४० प्रश्न</td>
          <td class="p-3 font-extrabold text-primary">७२० गुण (१८० प्रश्न)</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="text-xs text-muted-foreground italic">
    * गुणदान पद्धत: प्रत्येक बरोबर उत्तरासाठी <strong>+४ गुण</strong> आणि प्रत्येक चुकीच्या उत्तरासाठी <strong>-१ निगेटिव्ह गुण</strong>. अनुत्तरित प्रश्नांसाठी शून्य गुण.
  </p>

  <!-- Section 4: High Yield Units -->
  <h2 id="high-yield-units" class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">
    ४. सर्वाधिक वेटेज असणारे महत्त्वाचे अभ्यासक्रम घटक
  </h2>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
    <div class="p-4 rounded-xl bg-card border border-border space-y-2">
      <h4 class="font-bold text-sm text-foreground flex items-center gap-1.5">
        <span>🧬</span> Biology (३६० गुण)
      </h4>
      <ul class="text-xs space-y-1 text-muted-foreground">
        <li>• Genetics &amp; Evolution (१२-१५ प्रश्न)</li>
        <li>• Human Physiology (१०-१२ प्रश्न)</li>
        <li>• Ecology &amp; Environment (८-१० प्रश्न)</li>
        <li>• Cell: Structure &amp; Function (६-८ प्रश्न)</li>
        <li>• Plant Physiology (६-८ प्रश्न)</li>
      </ul>
    </div>
    <div class="p-4 rounded-xl bg-card border border-border space-y-2">
      <h4 class="font-bold text-sm text-foreground flex items-center gap-1.5">
        <span>🧪</span> Chemistry (१८० गुण)
      </h4>
      <ul class="text-xs space-y-1 text-muted-foreground">
        <li>• Organic Chemistry Reagents (१२-१४ प्रश्न)</li>
        <li>• Chemical Bonding &amp; Structure (४-५ प्रश्न)</li>
        <li>• Coordination Compounds (३-४ प्रश्न)</li>
        <li>• Thermodynamics &amp; Equilibrium (४-६ प्रश्न)</li>
        <li>• Solutions &amp; Electrochemistry (४ प्रश्न)</li>
      </ul>
    </div>
    <div class="p-4 rounded-xl bg-card border border-border space-y-2">
      <h4 class="font-bold text-sm text-foreground flex items-center gap-1.5">
        <span>⚡</span> Physics (१८० गुण)
      </h4>
      <ul class="text-xs space-y-1 text-muted-foreground">
        <li>• Modern Physics &amp; Semiconductor (८ प्रश्न)</li>
        <li>• Current Electricity &amp; Magnetism (६-८ प्रश्न)</li>
        <li>• Optics (Ray &amp; Wave) (४-५ प्रश्न)</li>
        <li>• Mechanics &amp; Work Power (६-८ प्रश्न)</li>
        <li>• Thermodynamics &amp; Kinetic Theory (३-४ प्रश्न)</li>
      </ul>
    </div>
  </div>

  <!-- Section 5: Common Rejection Reasons -->
  <h2 id="rejection-triggers" class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">
    ५. फोटो व सही अपलोड करताना होणाऱ्या ५ मोठ्या चुका व उपाय
  </h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-1.5">
      <h4 class="font-bold text-xs sm:text-sm text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
        <span>❌</span> चूक १: पोस्टकार्ड फोटोवर नाव व तारीख नसणे
      </h4>
      <p class="text-xs text-muted-foreground leading-relaxed">
        <strong>तपशील:</strong> NTA नियमानुसार ४×६ पोस्टकार्ड फोटोवर उमेदवाराचे नाव आणि फोटो काढल्याची तारीख खाली छापलेली असावी. ही माहिती नसल्यास NTA कडून दुरुस्ती नोटीस येते.
      </p>
    </div>
    <div class="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-1.5">
      <h4 class="font-bold text-xs sm:text-sm text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
        <span>❌</span> चूक २: स्वाक्षरी कॅपिटल लेटर्समध्ये करणे
      </h4>
      <p class="text-xs text-muted-foreground leading-relaxed">
        <strong>तपशील:</strong> संपूर्ण नाव कॅपिटल अक्षरांमध्ये लिहिलेली स्वाक्षरी अवैध मानली जाते. नेहमी चालू हस्ताक्षरात (running script) काळ्या बॉलपेनने स्वाक्षरी करा.
      </p>
    </div>
    <div class="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-1.5">
      <h4 class="font-bold text-xs sm:text-sm text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
        <span>❌</span> चूक ३: रंगीत किंवा गडद पार्श्वभूमी असलेला फोटो
      </h4>
      <p class="text-xs text-muted-foreground leading-relaxed">
        <strong>तपशील:</strong> निळी, लाल किंवा इतर गडद रंगांची पार्श्वभूमी असलेला फोटो थेट बाद होतो. केवळ १००% शुद्ध पांढरी (White) पार्श्वभूमी असणे आवश्यक आहे.
      </p>
    </div>
    <div class="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-1.5">
      <h4 class="font-bold text-xs sm:text-sm text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
        <span>❌</span> चूक ४: चष्मा किंवा टोपी घातलेला फोटो
      </h4>
      <p class="text-xs text-muted-foreground leading-relaxed">
        <strong>तपशील:</strong> चष्म्याच्या लेन्सवर येणाऱ्या रिफ्लेक्शनमुळे डोळे झाकले जातात. चष्मा, गॉगल किंवा टोपी न घालता दोन्ही कान स्पष्ट दिसणारा फोटो काढावा.
      </p>
    </div>
  </div>

  <!-- Step-by-Step Tool Guide -->
  <h2 id="how-to-resize-guide" class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">
    ६. SignResize वर NEET फोटो व स्वाक्षरी कशी रिसाइझ करावी?
  </h2>
  <div class="space-y-3 my-6">
    <div class="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
      <span class="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-xs">१</span>
      <div>
        <h4 class="font-bold text-xs sm:text-sm text-foreground">SignResize NEET टूल उघडा</h4>
        <p class="text-xs text-muted-foreground mt-0.5">आमच्या समर्पित <a href="/neet-photo-resize/" class="text-primary underline font-semibold">NEET Photo Resizer</a> पृष्ठावर जा.</p>
      </div>
    </div>
    <div class="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
      <span class="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-xs">२</span>
      <div>
        <h4 class="font-bold text-xs sm:text-sm text-foreground">पासपोर्ट किंवा पोस्टकार्ड मोड निवडा</h4>
        <p class="text-xs text-muted-foreground mt-0.5">पासपोर्ट फोटोसाठी 3.5×4.5 cm (10–200 KB) किंवा पोस्टकार्डसाठी 4×6 इंच प्रीसेट निवडा.</p>
      </div>
    </div>
    <div class="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
      <span class="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-xs">३</span>
      <div>
        <h4 class="font-bold text-xs sm:text-sm text-foreground">नाव आणि तारीख (DoP) जोडा</h4>
        <p class="text-xs text-muted-foreground mt-0.5">टूलमधील 'Add Name & Date' पर्याय सुरू करा आणि तुमचे पूर्ण नाव व फोटोची तारीख टाईप करा.</p>
      </div>
    </div>
    <div class="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
      <span class="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-xs">४</span>
      <div>
        <h4 class="font-bold text-xs sm:text-sm text-foreground">पोर्टल-रेडी JPG डाउनलोड करा</h4>
        <p class="text-xs text-muted-foreground mt-0.5">फाइल आकार आपोआप ५०–१०० KB मध्ये लॉक होतो. 'Download JPG' वर क्लिक करून NTA पोर्टलवर थेट अपलोड करा.</p>
      </div>
    </div>
  </div>

  <!-- Bottom Fast Links CTA -->
  <div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-card border-2 border-primary/30 flex flex-col sm:flex-row items-center justify-between gap-4">
    <div class="space-y-1">
      <h4 class="text-base sm:text-lg font-bold text-foreground">NEET UG 2026 अर्ज सादर करण्यास तयार आहात?</h4>
      <p class="text-xs sm:text-sm text-muted-foreground">
        कोणत्याही सायबर कॅफेवर न जाता घरबसल्या मोबाईलवरून फोटो व स्वाक्षरी अचूक मानकांनुसार रिसाइझ करा.
      </p>
    </div>
    <div class="flex flex-wrap gap-2.5 shrink-0">
      <a href="/neet-photo-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-90 transition shadow-2xs">
        NEET फोटो रिसाइझर &rarr;
      </a>
      <a href="/nta-neet-jee-signature-resize/" class="px-4 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-bold text-xs hover:opacity-90 transition shadow-2xs">
        NEET स्वाक्षरी रिसाइझर &rarr;
      </a>
    </div>
  </div>
</div>
`;

// Insert neet-ug-2026-master-guide-postcard-photo-signature-rules into verifiedPoliceArticleUpdates
const updateBlock = `  '${targetSlug}': {
    title_mr: ${JSON.stringify("NEET UG 2026 संपूर्ण मार्गदर्शक: नोंदणी, परीक्षा तारीख, 4x6 पोस्टकार्ड फोटो व स्वाक्षरी नियम")},
    metaTitle_mr: ${JSON.stringify("NEET UG 2026 मराठी मार्गदर्शक: 4x6 पोस्टकार्ड फोटो व स्वाक्षरी नियम | SignResize")},
    metaDescription_mr: ${JSON.stringify("NTA NEET UG 2026 संपूर्ण मराठी मार्गदर्शक: 4×6 पोस्टकार्ड फोटो, पासपोर्ट फोटो, स्वाक्षरी व बोटांचे ठसे नियम, 85% राज्य कोटा आणि 720 गुणांचे परीक्षा स्वरूप.")},
    excerpt_mr: ${JSON.stringify("NTA NEET UG 2026 चे सविस्तर विश्लेषण: ऑनलाइन नोंदणी प्रक्रिया, ७२० गुणांचे परीक्षा स्वरूप, ८०% चेहरा पांढरी पार्श्वभूमी पोस्टकार्ड फोटो मानके, स्वाक्षरी नियम आणि महाराष्ट्र 85% राज्य कोटा.")},
    category_mr: "करिअर संधी",
    authorRole_mr: "वरिष्ठ NTA व वैद्यकीय प्रवेश समुपदेशक",
    readTime_mr: "9 मिनिटे वाचन",
    quickFacts_mr: ${JSON.stringify(quickFacts_mr, null, 4)},
    faqs_mr: ${JSON.stringify(faqs_mr, null, 4)},
    contentHtml_mr: ${JSON.stringify(contentHtml_mr.trim())}
  },
`;

const closingTag = '\n};\n\nfor (const post of BLOG_POSTS)';
const closingIdx = content.indexOf(closingTag);
const closingIdxCRLF = content.indexOf('\r\n};\r\n\r\nfor (const post of BLOG_POSTS)');

const actualIdx = closingIdxCRLF !== -1 ? closingIdxCRLF : closingIdx;

if (actualIdx === -1) {
  console.error('Could not find verifiedPoliceArticleUpdates closing');
  process.exit(1);
}

const isCrlf = content.includes('\r\n');
const formattedBlock = isCrlf ? updateBlock.replace(/\r?\n/g, '\r\n') : updateBlock;

content = content.substring(0, actualIdx) + (isCrlf ? ',\r\n' : ',\n') + formattedBlock + content.substring(actualIdx + (isCrlf ? 2 : 1));

fs.writeFileSync(filePath, content, 'utf8');
console.log('✓ Successfully inserted NEET UG Marathi translation into blogPostsData.ts!');
