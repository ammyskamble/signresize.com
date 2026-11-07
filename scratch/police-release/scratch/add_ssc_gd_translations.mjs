import fs from 'fs';

const filePath = 'src/data/blogPostsData.ts';
let content = fs.readFileSync(filePath, 'utf8');

const sscGdSlug = 'ssc-gd-exam-date-2026-cbt-shift-timings-schedule-guide';
const startIdx = content.indexOf(`"slug": "${sscGdSlug}"`);
if (startIdx === -1) {
  console.error('Slug not found');
  process.exit(1);
}

const endIdx = content.indexOf('slug: "ibps-rrb-po-prelims', startIdx);
if (endIdx === -1) {
  console.error('End of block not found');
  process.exit(1);
}

let block = content.substring(startIdx, endIdx);

// Quick Facts Hindi and Marathi
const quickFacts_hi = [
  { label: "भर्ती संस्था", value: "कर्मचारी चयन आयोग (SSC)" },
  { label: "भर्ती पद", value: "कांस्टेबल (जनरल ड्यूटी) - CAPFs, SSF, असम राइफल्स" },
  { label: "CBT परीक्षा चक्र", value: "27 अप्रैल से 30 मई (चक्र 1) | जनवरी - मार्च 2027 (चक्र 2)" },
  { label: "शारीरिक परीक्षण (PET/PST)", value: "अक्टूबर - नवंबर 2026 (लाइव बैच)" },
  { label: "दैनिक शिफ्ट", value: "प्रतिदिन 4 शिफ्ट (प्रत्येक शिफ्ट 60 मिनट)" },
  { label: "गेट बंद होने का नियम", value: "परीक्षा से ठीक 30 मिनट पहले गेट बंद (सख्त नियम)" },
  { label: "दस्तावेज़ अपलोड नियम", value: "लाइव वेबकैम फोटो + स्कैन हस्ताक्षर (140×60 px, 10–20 KB)" }
];

const quickFacts_mr = [
  { label: "भरती संस्था", value: "कर्मचारी निवड आयोग (SSC)" },
  { label: "भरती पदे", value: "कॉन्स्टेबल (जनरल ड्युटी) - CAPFs, SSF, आसाम रायफल्स" },
  { label: "CBT परीक्षा कालावधी", value: "२७ एप्रिल ते ३० मे (टप्पा १) | जानेवारी - मार्च २०२७ (टप्पा २)" },
  { label: "शारीरिक चाचणी (PET/PST)", value: "ऑक्टोबर - नोव्हेंबर २०२६" },
  { label: "दैनंदिन शिफ्ट", value: "दररोज ४ शिफ्ट (प्रत्येक शिफ्ट ६० मिनिटे)" },
  { label: "गेट बंद होण्याची वेळ", value: "परीक्षेपूर्वी बरोबर ३० मिनिटे आधी गेट बंद (कडक नियम)" },
  { label: "कागदपत्र नियम", value: "थेट वेबकॅम फोटो + स्वाक्षरी (१४०×६० px, १०–२० KB)" }
];

const faqs_hi = [
  {
    question: "SSC GD 2026 कंप्यूटर आधारित परीक्षा (CBT) कब आयोजित की जा रही है?",
    answer: "SSC GD कांस्टेबल 2026 के पहले चक्र की ऑनलाइन CBT परीक्षा ==27 अप्रैल से 30 मई 2026== तक आयोजित की गई, जिसके बाद अक्टूबर और नवंबर में फिजिकल टेस्ट (PET/PST) आयोजित किए जा रहे हैं। अगले वार्षिक भर्ती चक्र की CBT परीक्षा ==जनवरी से मार्च 2027== के बीच संभावित है।"
  },
  {
    question: "SSC GD परीक्षा के चारों शिफ्टों का समय और रिपोर्टिंग टाइम क्या है?",
    answer: "SSC GD CBT प्रतिदिन 4 शिफ्टों में होती है: शिफ्ट 1 सुबह ==09:00 से 10:00 बजे== (रिपोर्टिंग 07:45, गेट क्लोज 08:30); शिफ्ट 2 दोपहर ==11:45 से 12:45 बजे== (रिपोर्टिंग 10:30, गेट क्लोज 11:15); शिफ्ट 3 दोपहर ==02:30 से 03:30 बजे== (रिपोर्टिंग 01:15, गेट क्लोज 02:00); शिफ्ट 4 शाम ==05:15 से 06:15 बजे== (रिपोर्टिंग 04:00, गेट क्लोज 04:45)।"
  },
  {
    question: "SSC GD एडमिट कार्ड कब जारी होता है?",
    answer: "SSC परीक्षा से लगभग ==10 से 12 दिन पहले== एप्लीकेशन स्टेटस और परीक्षा शहर (City Intimation) लिंक जारी करता है। परीक्षा केंद्र के पते के साथ फाइनल एडमिट कार्ड अभ्यर्थी की परीक्षा तिथि से ठीक ==4 दिन पहले== क्षेत्रीय वेबसाइट्स पर डाउनलोड के लिए उपलब्ध होता है।"
  },
  {
    question: "SSC GD परीक्षा केंद्र पर कौन से दस्तावेज ले जाना अनिवार्य है?",
    answer: "अभ्यर्थी के पास ==प्रिंटेड SSC GD एडमिट कार्ड==, ==मूल सरकारी फोटो पहचान पत्र (पूरी जन्मतिथि DD/MM/YYYY सहित)== जैसे आधार कार्ड, वोटर आईडी या पासपोर्ट, और ==दो पासपोर्ट साइज रंगीन फोटो== होना अनिवार्य है। यदि आधार कार्ड पर केवल जन्म का वर्ष लिखा है, तो 10वीं की अंकतालिका साथ ले जाना जरूरी है।"
  },
  {
    question: "क्या SSC GD 2026 में नेगेटिव मार्किंग लागू है?",
    answer: "हाँ। प्रत्येक सही उत्तर पर 2 अंक मिलते हैं और ==प्रत्येक गलत उत्तर पर 0.25 अंक की नेगेटिव मार्किंग== काटी जाती है। अनुत्तरित प्रश्नों पर कोई अंक नहीं कटता।"
  }
];

const faqs_mr = [
  {
    question: "SSC GD 2026 ऑनलाइन परीक्षा (CBT) कधी होणार आहे?",
    answer: "SSC GD कॉन्स्टेबल २०२६ च्या पहिल्या टप्प्याची ऑनलाइन CBT परीक्षा ==२७ एप्रिल ते ३० मे २०२६== दरम्यान पार पडली, त्यानंतर ऑक्टोबर व नोव्हेंबरमध्ये मैदानी शारीरिक चाचणी (PET/PST) सुरू आहे. पुढील वार्षिक भरती चक्राची परीक्षा ==जानेवारी ते मार्च २०२७== दरम्यान होणार आहे."
  },
  {
    question: "SSC GD परीक्षेच्या ४ शिफ्टच्या वेळा आणि हजेरी वेळ काय आहे?",
    answer: "SSC GD परीक्षा दररोज ४ शिफ्टमध्ये घेतली जाते: शिफ्ट १ सकाळी ==०९:०० ते १०:००== (हजेरी ०७:४५, गेट बंद ०८:३०); शिफ्ट २ दुपारी ==११:४५ ते १२:४५== (हजेरी १०:३०, गेट बंद ११:१५); शिफ्ट ३ दुपारी ==०२:३० ते ०३:३०== (हजेरी ०१:१५, गेट बंद ०२:००); शिफ्ट ४ संध्याकाळी ==०५:१५ ते ०६:१५== (हजेरी ०४:००, गेट बंद ०४:४५)."
  },
  {
    question: "SSC GD हॉल तिकीट (Admit Card) कधी प्रसिद्ध होते?",
    answer: "परीक्षेच्या ==१० ते १२ दिवस आधी== उमेदवारांना परीक्षा शहर (City Slip) समजते. परीक्षा केंद्राचा अचूक पत्ता असलेले मूळ हॉल तिकीट परीक्षेच्या बरोबर ==४ दिवस आधी== विभागीय SSC संकेतस्थळावर उपलब्ध होते."
  },
  {
    question: "परीक्षेच्या दिवशी परीक्षा केंद्रावर कोणती कागदपत्रे आवश्यक आहेत?",
    answer: "उमेदवारांकडे ==प्रिंट केलेले हॉल तिकीट==, ==मूळ फोटो ओळखपत्र (पूर्ण जन्मतारीख असलेले)== जसे आधार कार्ड, मतदार ओळखपत्र किंवा पॅन कार्ड, आणि ==दोन पासपोर्ट आकाराचे रंगीत फोटो== असणे अनिवार्य आहे. आधारवर केवळ जन्मवर्ष असल्यास १०वी चे गुणपत्रक सोबत ठेवावे."
  },
  {
    question: "SSC GD २०२६ मध्ये निगेटिव्ह मार्किंग आहे का?",
    answer: "होय. प्रत्येक बरोबर उत्तरासाठी २ गुण मिळतात आणि ==चुकीच्या उत्तरासाठी ०.२५ गुण वजा (Negative Marking)== केले जातात. सोडून दिलेल्या प्रश्नांवर गुण वजा होत नाहीत."
  }
];

const contentHtml_hi = `
<div class="space-y-6 text-foreground leading-relaxed">
  <div class="p-5 rounded-2xl bg-primary/10 border-2 border-primary/30 text-foreground space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-xl">📅</span>
      <h3 class="text-base font-bold text-foreground">त्वरित सारांश: SSC GD 2026 परीक्षा कार्यक्रम व शिफ्ट टाइमिंग</h3>
    </div>
    <p class="text-sm text-foreground/90 leading-relaxed font-medium">
      कर्मचारी चयन आयोग (SSC) द्वारा आयोजित <strong>SSC GD कांस्टेबल भर्ती परीक्षा</strong> दो मुख्य चरणों में होती है। कंप्यूटर आधारित लिखित परीक्षा (CBT) के बाद चयनित अभ्यर्थियों के लिए <strong>शारीरिक दक्षता व मापतौल परीक्षण (PET/PST) अक्टूबर और नवंबर 2026</strong> में आयोजित किया जा रहा है। अगले वार्षिक भर्ती चक्र की कंप्यूटर आधारित परीक्षा <strong>जनवरी से मार्च 2027</strong> के बीच <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary font-bold underline">ssc.gov.in</a> पर आयोजित होगी।
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
      <div class="p-2.5 rounded-xl bg-card border border-border shadow-2xs">
        <span class="block text-slate-600 dark:text-slate-400 font-bold text-[11px]">लिखित परीक्षा (CBT)</span>
        <strong class="text-foreground text-sm font-extrabold">27 अप्रैल – 30 मई</strong>
      </div>
      <div class="p-2.5 rounded-xl bg-card border border-border shadow-2xs">
        <span class="block text-slate-600 dark:text-slate-400 font-bold text-[11px]">शारीरिक दौड़ (PET/PST)</span>
        <strong class="text-foreground text-sm font-extrabold">अक्टूबर – नवंबर 2026</strong>
      </div>
      <div class="p-2.5 rounded-xl bg-card border border-border shadow-2xs">
        <span class="block text-slate-600 dark:text-slate-400 font-bold text-[11px]">अगला वार्षिक चक्र</span>
        <strong class="text-foreground text-sm font-extrabold">जनवरी – मार्च 2027</strong>
      </div>
      <div class="p-2.5 rounded-xl bg-card border border-border shadow-2xs">
        <span class="block text-slate-600 dark:text-slate-400 font-bold text-[11px]">परीक्षा प्रारूप</span>
        <strong class="text-foreground text-sm font-extrabold">ऑनलाइन (80 प्रश्न, 160 अंक)</strong>
      </div>
    </div>
  </div>

  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">1. आधिकारिक 4 दैनिक शिफ्ट समय एवं गेट क्लोजिंग नियम</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    SSC GD परीक्षा प्रतिदिन 4 शिफ्टों में आयोजित की जाती है। सबसे महत्वपूर्ण नियम यह है कि <strong>परीक्षा शुरू होने से ठीक 30 मिनट पहले मुख्य प्रवेश द्वार बंद कर दिया जाता है</strong>। गेट बंद होने के बाद किसी भी अभ्यर्थी को प्रवेश नहीं दिया जाता:
  </p>

  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs">
    <div class="overflow-x-auto scrollbar-thin">
      <table class="w-full min-w-[580px] text-xs sm:text-sm text-left border-collapse">
        <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold border-b border-border">
          <tr>
            <th class="p-3 border-r border-border/70">शिफ्ट विवरण</th>
            <th class="p-3 border-r border-border/70">रिपोर्टिंग समय</th>
            <th class="p-3 border-r border-border/70">गेट बंद (कड़ा नियम)</th>
            <th class="p-3">परीक्षा अवधि (60 मिनट)</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border/70 text-slate-800 dark:text-slate-200">
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
            <td class="p-3 font-bold text-blue-700 dark:text-cyan-300 border-r border-border/70">शिफ्ट 1 (सुबह)</td>
            <td class="p-3 font-mono font-semibold border-r border-border/70">07:45 AM</td>
            <td class="p-3 font-mono text-rose-600 dark:text-rose-400 font-extrabold border-r border-border/70">08:30 AM</td>
            <td class="p-3 font-mono">09:00 AM – 10:00 AM</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
            <td class="p-3 font-bold text-blue-700 dark:text-cyan-300 border-r border-border/70">शिफ्ट 2 (दोपहर पूर्व)</td>
            <td class="p-3 font-mono font-semibold border-r border-border/70">10:30 AM</td>
            <td class="p-3 font-mono text-rose-600 dark:text-rose-400 font-extrabold border-r border-border/70">11:15 AM</td>
            <td class="p-3 font-mono">11:45 AM – 12:45 PM</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
            <td class="p-3 font-bold text-blue-700 dark:text-cyan-300 border-r border-border/70">शिफ्ट 3 (दोपहर)</td>
            <td class="p-3 font-mono font-semibold border-r border-border/70">01:15 PM</td>
            <td class="p-3 font-mono text-rose-600 dark:text-rose-400 font-extrabold border-r border-border/70">02:00 PM</td>
            <td class="p-3 font-mono">02:30 PM – 03:30 PM</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
            <td class="p-3 font-bold text-blue-700 dark:text-cyan-300 border-r border-border/70">शिफ्ट 4 (शाम)</td>
            <td class="p-3 font-mono font-semibold border-r border-border/70">04:00 PM</td>
            <td class="p-3 font-mono text-rose-600 dark:text-rose-400 font-extrabold border-r border-border/70">04:45 PM</td>
            <td class="p-3 font-mono">05:15 PM – 06:15 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">2. परीक्षा केंद्र पर अनिवार्य दस्तावेज</h2>
  <ul class="my-4 space-y-2 text-sm text-slate-800 dark:text-slate-200 list-disc pl-5 font-medium">
    <li><strong>प्रिंटेड SSC GD एडमिट कार्ड:</strong> स्पष्ट बारकोड और फोटो वाला प्रिंटआउट।</li>
    <li><strong>मूल सरकारी फोटो आईडी:</strong> आधार कार्ड, वोटर आईडी, पैन कार्ड या ड्राइविंग लाइसेंस (पूरी जन्मतिथि DD/MM/YYYY सहित)।</li>
    <li><strong>दो पासपोर्ट साइज फोटो:</strong> ऑनलाइन आवेदन में अपलोड की गई फोटो से मेल खाती हुई।</li>
  </ul>

  <div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-card via-card to-primary/10 border-2 border-primary/30 space-y-3 shadow-xs">
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h4 class="font-bold text-base sm:text-lg text-foreground">SSC GD फोटो व हस्ताक्षर 10–20 KB में रिसाइज़ करें</h4>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-medium">
          एसएससी के आधिकारिक मानकों के अनुसार 140×60 पिक्सल और 10 से 20 KB में हस्ताक्षर तुरंत तैयार करें।
        </p>
      </div>
      <div class="flex flex-wrap gap-2 w-full sm:w-auto">
        <a href="/ssc-gd-signature-resize/" class="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-90 shadow-sm transition">
          <span>✍️ SSC GD हस्ताक्षर रिसाइज़र</span> &rarr;
        </a>
      </div>
    </div>
  </div>

  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">3. शारीरिक दक्षता व दौड़ मानक (PET/PST)</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
    <div class="p-4 rounded-xl bg-card border border-border shadow-2xs">
      <h4 class="font-bold text-sm text-blue-700 dark:text-cyan-400 mb-2">🏃 पुरुष अभ्यर्थी मानक</h4>
      <ul class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 space-y-1.5">
        <li><strong>दौड़:</strong> 5.0 किलोमीटर 24 मिनट में (लद्दाख क्षेत्र: 1.6 किमी 7 मिनट में)।</li>
        <li><strong>ऊंचाई (Height):</strong> 170 सेमी (एसटी वर्ग के लिए 162.5 सेमी)।</li>
        <li><strong>सीना (Chest):</strong> 80 सेमी (न्यूनतम 5 सेमी फुलाव अनिवार्य, 85 सेमी)।</li>
      </ul>
    </div>
    <div class="p-4 rounded-xl bg-card border border-border shadow-2xs">
      <h4 class="font-bold text-sm text-blue-700 dark:text-cyan-400 mb-2">🏃‍♀️ महिला अभ्यर्थी मानक</h4>
      <ul class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 space-y-1.5">
        <li><strong>दौड़:</strong> 1.6 किलोमीटर 8 मिनट 30 सेकंड में (लद्दाख: 800 मी 5 मिनट में)।</li>
        <li><strong>ऊंचाई (Height):</strong> 157 सेमी (एसटी वर्ग के लिए 150 सेमी)।</li>
      </ul>
    </div>
  </div>
</div>
`;

const contentHtml_mr = `
<div class="space-y-6 text-foreground leading-relaxed">
  <div class="p-5 rounded-2xl bg-primary/10 border-2 border-primary/30 text-foreground space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-xl">📅</span>
      <h3 class="text-base font-bold text-foreground">महत्त्वाचा सारांश: SSC GD 2026 परीक्षा वेळापत्रक व शिफ्ट नियम</h3>
    </div>
    <p class="text-sm text-foreground/90 leading-relaxed font-medium">
      कर्मचारी निवड आयोग (SSC) मार्फत घेण्यात येणारी <strong>SSC GD कॉन्स्टेबल परीक्षा</strong> दोन मुख्य टप्प्यांमध्ये आयोजित केली जाते. संगणकावर आधारित लेखी परीक्षा (CBT) झाल्यानंतर पात्र उमेदवारांची <strong>शारीरिक मैदानी चाचणी (PET/PST) ऑक्टोबर आणि नोव्हेंबर २०२६</strong> मध्ये घेतली जात आहे. पुढील वार्षिक भरती चक्राची परीक्षा <strong>जानेवारी ते मार्च २०२७</strong> दरम्यान <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary font-bold underline">ssc.gov.in</a> वर घेतली जाईल.
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
      <div class="p-2.5 rounded-xl bg-card border border-border shadow-2xs">
        <span class="block text-slate-600 dark:text-slate-400 font-bold text-[11px]">लेखी परीक्षा (CBT)</span>
        <strong class="text-foreground text-sm font-extrabold">२७ एप्रिल – ३० मे</strong>
      </div>
      <div class="p-2.5 rounded-xl bg-card border border-border shadow-2xs">
        <span class="block text-slate-600 dark:text-slate-400 font-bold text-[11px]">मैदानी चाचणी (PET)</span>
        <strong class="text-foreground text-sm font-extrabold">ऑक्टोबर – नोव्हेंबर २०२६</strong>
      </div>
      <div class="p-2.5 rounded-xl bg-card border border-border shadow-2xs">
        <span class="block text-slate-600 dark:text-slate-400 font-bold text-[11px]">पुढील वार्षिक टप्पा</span>
        <strong class="text-foreground text-sm font-extrabold">जानेवारी – मार्च २०२७</strong>
      </div>
      <div class="p-2.5 rounded-xl bg-card border border-border shadow-2xs">
        <span class="block text-slate-600 dark:text-slate-400 font-bold text-[11px]">परीक्षा पद्धती</span>
        <strong class="text-foreground text-sm font-extrabold">ऑनलाइन (८० प्रश्न, १६० गुण)</strong>
      </div>
    </div>
  </div>

  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">१. दररोजच्या ४ शिफ्टच्या वेळा आणि गेट बंद होण्याचे कडक नियम</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    SSC GD परीक्षा दररोज ४ शिफ्टमध्ये घेतली जाते. सर्वात महत्त्वाचा नियम म्हणजे <strong>परीक्षा सुरू होण्याच्या बरोबर ३० मिनिटे आधी मुख्य प्रवेशद्वार बंद केले जाते</strong>. गेट बंद झाल्यानंतर बायोमेट्रिक गेट लॉक होतात आणि कोणालाही प्रवेश दिला जात नाही:
  </p>

  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs">
    <div class="overflow-x-auto scrollbar-thin">
      <table class="w-full min-w-[580px] text-xs sm:text-sm text-left border-collapse">
        <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold border-b border-border">
          <tr>
            <th class="p-3 border-r border-border/70">शिफ्ट</th>
            <th class="p-3 border-r border-border/70">हजेरी वेळ</th>
            <th class="p-3 border-r border-border/70">गेट बंद (कडक नियम)</th>
            <th class="p-3">परीक्षेची वेळ (६० मिनिटे)</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border/70 text-slate-800 dark:text-slate-200">
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
            <td class="p-3 font-bold text-blue-700 dark:text-cyan-300 border-r border-border/70">शिफ्ट १ (सकाळ)</td>
            <td class="p-3 font-mono font-semibold border-r border-border/70">०७:४५ AM</td>
            <td class="p-3 font-mono text-rose-600 dark:text-rose-400 font-extrabold border-r border-border/70">०८:३० AM</td>
            <td class="p-3 font-mono">०९:०० AM – १०:०० AM</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
            <td class="p-3 font-bold text-blue-700 dark:text-cyan-300 border-r border-border/70">शिफ्ट २ (दुपारपूर्व)</td>
            <td class="p-3 font-mono font-semibold border-r border-border/70">१०:३० AM</td>
            <td class="p-3 font-mono text-rose-600 dark:text-rose-400 font-extrabold border-r border-border/70">११:१५ AM</td>
            <td class="p-3 font-mono">११:४५ AM – १२:४५ PM</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
            <td class="p-3 font-bold text-blue-700 dark:text-cyan-300 border-r border-border/70">शिफ्ट ३ (दुपार)</td>
            <td class="p-3 font-mono font-semibold border-r border-border/70">०१:१५ PM</td>
            <td class="p-3 font-mono text-rose-600 dark:text-rose-400 font-extrabold border-r border-border/70">०२:०० PM</td>
            <td class="p-3 font-mono">०२:३० PM – ०३:३० PM</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
            <td class="p-3 font-bold text-blue-700 dark:text-cyan-300 border-r border-border/70">शिफ्ट ४ (संध्याकाळ)</td>
            <td class="p-3 font-mono font-semibold border-r border-border/70">०४:०० PM</td>
            <td class="p-3 font-mono text-rose-600 dark:text-rose-400 font-extrabold border-r border-border/70">०४:४५ PM</td>
            <td class="p-3 font-mono">०५:१५ PM – ०६:१५ PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">२. परीक्षा केंद्रावर लागणारी आवश्यक कागदपत्रे</h2>
  <ul class="my-4 space-y-2 text-sm text-slate-800 dark:text-slate-200 list-disc pl-5 font-medium">
    <li><strong>प्रिंट केलेले हॉल तिकीट (Admit Card):</strong> स्पष्ट बारकोड आणि छायाचित्र असलेली प्रत.</li>
    <li><strong>मूळ ओळखपत्र:</strong> आधार कार्ड, मतदार ओळखपत्र किंवा पॅन कार्ड (पूर्ण जन्मतारीख DD/MM/YYYY असावी).</li>
    <li><strong>दोन रंगीत पासपोर्ट फोटो:</strong> ऑनलाइन अर्जातील फोटोशी जुळणारे.</li>
  </ul>

  <div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-card via-card to-primary/10 border-2 border-primary/30 space-y-3 shadow-xs">
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h4 class="font-bold text-base sm:text-lg text-foreground">SSC GD स्वाक्षरी व फोटो रिसाइझ करा</h4>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-medium">
          अधिकृत १४०×६० पिक्सल आणि १० ते २० KB मध्ये स्वाक्षरी विनामूल्य रिसाइझ करा.
        </p>
      </div>
      <div class="flex flex-wrap gap-2 w-full sm:w-auto">
        <a href="/ssc-gd-signature-resize/" class="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-90 shadow-sm transition">
          <span>✍️ SSC GD स्वाक्षरी रिसाइझ करा</span> &rarr;
        </a>
      </div>
    </div>
  </div>

  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">३. शारीरिक चाचणी व धावण्याचे निकष (PET/PST)</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
    <div class="p-4 rounded-xl bg-card border border-border shadow-2xs">
      <h4 class="font-bold text-sm text-blue-700 dark:text-cyan-400 mb-2">🏃 पुरुष उमेदवार निकष</h4>
      <ul class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 space-y-1.5">
        <li><strong>धावणे:</strong> ५.० किलोमीटर २४ मिनिटांत.</li>
        <li><strong>उंची (Height):</strong> १७० सेंमी (ST प्रवर्गासाठी १६२.५ सेंमी).</li>
        <li><strong>छाती (Chest):</strong> ८० सेंमी (किमान ५ सेंमी फुगवून ८५ सेंमी).</li>
      </ul>
    </div>
    <div class="p-4 rounded-xl bg-card border border-border shadow-2xs">
      <h4 class="font-bold text-sm text-blue-700 dark:text-cyan-400 mb-2">🏃‍♀️ महिला उमेदवार निकष</h4>
      <ul class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 space-y-1.5">
        <li><strong>धावणे:</strong> १.६ किलोमीटर ८ मिनिटे ३० सेकंदांत.</li>
        <li><strong>उंची (Height):</strong> १५७ सेंमी (ST प्रवर्गासाठी १५० सेंमी).</li>
      </ul>
    </div>
  </div>
</div>
`;

// Insert quickFacts_hi, quickFacts_mr, faqs_hi, faqs_mr, contentHtml_hi, contentHtml_mr
const targetPlacement = `"relatedExamPreset": "ssc-gd-signature-resize",`;
const additionProps = `"quickFacts_hi": ${JSON.stringify(quickFacts_hi, null, 6)},\n    "quickFacts_mr": ${JSON.stringify(quickFacts_mr, null, 6)},\n    "faqs_hi": ${JSON.stringify(faqs_hi, null, 6)},\n    "faqs_mr": ${JSON.stringify(faqs_mr, null, 6)},\n    "contentHtml_hi": ${JSON.stringify(contentHtml_hi.trim())},\n    "contentHtml_mr": ${JSON.stringify(contentHtml_mr.trim())},`;

block = block.replace(targetPlacement, `${targetPlacement}\n    ${additionProps}`);

content = content.substring(0, startIdx) + block + content.substring(endIdx);
fs.writeFileSync(filePath, content, 'utf8');
console.log('✓ Successfully added Hindi & Marathi content to SSC GD post!');
