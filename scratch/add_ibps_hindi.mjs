// scratch/add_ibps_hindi.mjs
import fs from 'fs';
import path from 'path';

const blogPostsPath = path.resolve('src/data/blogPostsData.ts');
let content = fs.readFileSync(blogPostsPath, 'utf8');

// Quick facts in Hindi
const quickFacts_hi = [
  {
    "label": "प्रीलिम्स परीक्षा संरचना",
    "value": "80 प्रश्न, 45 मिनट (केवल रीजनिंग + क्वांट)"
  },
  {
    "label": "प्रीलिम्स इंग्लिश सेक्शन",
    "value": "शून्य (प्रीलिम्स में इंग्लिश नहीं होती)"
  },
  {
    "label": "मेन्स कुल अंक",
    "value": "200 प्रश्न, 200 अंक, 120 मिनट कंपोजिट"
  },
  {
    "label": "स्कोरिंग गेम-चेंजर्स",
    "value": "कंप्यूटर नॉलेज (20 अंक) और इंग्लिश (40 अंक)"
  },
  {
    "label": "करंट अफेयर्स विंडो",
    "value": "पिछले 4 महीने (3-बार वीडियो रिवीजन पद्धति)"
  },
  {
    "label": "अंतिम चयन अनुपात",
    "value": "80:20 अनुपात (मेन्स स्कोर : इंटरव्यू स्कोर)"
  }
];

// FAQs in Hindi
const faqs_hi = [
  {
    "question": "क्या IBPS RRB PO प्रीलिम्स और मेन्स पास करने के लिए पेड कोचिंग जरूरी है?",
    "answer": "नहीं। ==उत्तर प्रदेश जैसे उच्च कट-ऑफ वाले राज्यों से दो बार मेन्स पास करने वाले अभ्यर्थियों सहित हजारों छात्र बिना किसी पेड कोचिंग के, केवल फ्री यूट्यूब लेक्चर्स और नियमित मॉक टेस्ट एनालिसिस के दम पर IBPS RRB PO क्लियर करते हैं==। यूट्यूब पर स्पीड मैथ्स (हर्षल अग्रवाल सर), रीजनिंग (संजय सर या पुनीत सर), इंग्लिश (रानी मैम या निमिषा बंसल मैम), कंप्यूटर नॉलेज (सचिन अरोड़ा सर), और करंट अफेयर्स (शीतल मैम) के उच्च गुणवत्ता वाले पूरे फ्री प्लेलिस्ट उपलब्ध हैं।"
  },
  {
    "question": "क्या RRB PO प्रीलिम्स में इंग्लिश आती है? अगर इंग्लिश कमजोर हो तो क्या प्रीलिम्स निकल सकता है?",
    "answer": "बिल्कुल। ==RRB PO प्रीलिम्स में इंग्लिश का कोई सेक्शन नहीं होता—केवल रीजनिंग (40 प्रश्न) और क्वांटिटेटिव एप्टीट्यूड (40 प्रश्न) पूछे जाते हैं (कुल 80 प्रश्न, 45 मिनट कंपोजिट समय)==। इसका अर्थ है कि यदि आपकी इंग्लिश कमजोर है, तब भी आप प्रीलिम्स आसानी से पास कर सकते हैं। हालांकि, इंग्लिश का कुशन न होने के कारण रीजनिंग और क्वांट दोनों में तीव्र गति और 100% सटीकता अनिवार्य है। मेन्स में आप इंग्लिश या हिंदी में से कोई एक भाषा चुन सकते हैं।"
  },
  {
    "question": "रीजनिंग प्रीलिम्स सेक्शन में 40/40 स्कोर कैसे हासिल करें?",
    "answer": "रीजनिंग में पूरे 40/40 अंक प्राप्त करने के लिए ==अपने सबसे कमजोर पजल प्रारूपों (जैसे फ्लोर-फ्लैट, अनिश्चित संख्या वाली लीनियर रो, या रक्त संबंध वाली पजल) की पहचान करें और रोजाना उस विशिष्ट पजल के कम से कम 4 सेट हल करें==। इसके अलावा, 45 मिनट के स्प्रिंट में समय बर्बाद करने वाले ट्रिकी 'meaningful word' प्रश्नों को हमेशा अंत के लिए छोड़ें और पहले मिसलेनियस प्रश्नों (सिलोगिज्म, इनइक्वालिटी, डायरेक्शन) को तेजी से निपटाएं।"
  },
  {
    "question": "स्पीड मैथ्स में निरंतरता (Consistency) कैसे लाएं? एक सवाल 30 सेकंड में बनता है तो अगला 1 मिनट क्यों लेता है?",
    "answer": "जब कोई कैलकुलेशन प्रश्न 40 सेकंड से अधिक समय लेने लगे, ==तो उस पर अड़े रहने के बजाय तुरंत 'Mark for Review' करके आगे बढ़ें==। स्पीड मैथ्स में रोजाना 1–30 तक के पहाड़े (Tables), 1–50 तक वर्ग (Squares), 1–30 तक घन (Cubes) और प्रतिशत-से-भिन्न (Percentage-to-Fraction) मानों का 15 मिनट त्वरित अभ्यास करें। सरलीकरण (Simplification) में इकाई अंक (Unit Digit) और डिजिटल रूट अवधारणाएं लागू करें ताकि लंबी गणनाओं से बचा जा सके।"
  },
  {
    "question": "करंट अफेयर्स के लिए 100 पेज की भारी मंथली PDF पढ़ें या वीडियो लेक्चर्स देखें?",
    "answer": "यदि 100 से अधिक पृष्ठों वाली भारी-भरकम PDFs से सिरदर्द और मानसिक थकान (Burnout) होती है, ==तो शीतल मैम या किसी शीर्ष शिक्षक के साप्ताहिक व पाक्षिक वीडियो लेक्चर्स 1.5x या 2x गति पर देखें और 3-बार रिवीजन का नियम (3-Time Revision Rule) अपनाएं==। केवल एक बार वीडियो देख लेने से तथ्य याद नहीं रहते; परीक्षा से पहले प्रत्येक लेक्चर को 3 बार दोहराना जरूरी है। साथ ही पिछले 4 महीनों के बैंकिंग अवेयरनेस और RBI के महत्वपूर्ण सर्कुलर जरूर पढ़ें।"
  },
  {
    "question": "कंप्यूटर नॉलेज में 16+ अंक लाने के लिए क्या सचिन अरोड़ा सर के यूट्यूब वीडियो पर्याप्त हैं?",
    "answer": "हाँ, ==सचिन अरोड़ा सर के यूट्यूब वीडियो और मैराथन प्लेलिस्ट कंप्यूटर सेक्शन में 15 से 18 अंक लाने के लिए पूरी तरह पर्याप्त हैं, किसी भी पेड बैच की जरूरत नहीं है==। कंप्यूटर में 40 प्रश्नों के कुल 20 अंक होते हैं (0.5x वेटेज), लेकिन ये 40 प्रश्न केवल 10 से 12 मिनट में हल हो जाते हैं। MS Office शॉर्टकट कीज, OSI मॉडल की 7 लेयर्स, नेटवर्किंग प्रोटोकॉल, DBMS बेसिक्स और साइबर सिक्योरिटी शब्दावली के अपने हस्तलिखित नोट्स तैयार करें।"
  },
  {
    "question": "RRB PO इंटरव्यू में B.Tech या नॉन-कॉमर्स बैकग्राउंड के छात्रों से क्या पूछा जाता है?",
    "answer": "इंटरव्यू पैनल आपके मूल शैक्षणिक बैकग्राउंड पर गहन तकनीकी प्रश्न पूछता है ताकि आपकी आधारभूत योग्यता जांची जा सके। ==B.Tech CS/IT के उम्मीदवारों से DBMS, SQL क्वेरीज, नेटवर्क टोपोलॉजी, बैंकिंग में साइबर सुरक्षा और डिजिटल पेमेंट गेटवे पर प्रश्न पूछे जाते हैं==। आपको यह स्पष्ट व तार्किक उत्तर तैयार रखना चाहिए कि आपकी तकनीकी डिग्री ग्रामीण बैंकिंग संचालन और वित्तीय समावेशन (Financial Inclusion) में किस प्रकार उपयोगी सिद्ध होगी।"
  },
  {
    "question": "RRB PO इंटरव्यू में बैंकिंग अवेयरनेस से सटीक क्या पूछा जाता है?",
    "answer": "RRB PO इंटरव्यू बोर्ड मुख्य रूप से ग्रामीण बैंकिंग अवसंरचना पर ध्यान केंद्रित करता है: ==क्षेत्रीय ग्रामीण बैंकों (RRB) की शेयरधारिता संरचना (केंद्र सरकार 50%, प्रायोजक बैंक 35%, राज्य सरकार 15%), नाबार्ड (NABARD) की कार्यप्रणाली, प्राथमिकता क्षेत्र ऋण (PSL) लक्ष्य (RRBs के लिए 75%), किसान क्रेडिट कार्ड (KCC) की सीमाएं, लीड बैंक योजना और स्वयं सहायता समूह (SHG-Bank Linkage) मॉडल==। मेन्स परीक्षा समाप्त होते ही इसकी तैयारी शुरू कर दें।"
  },
  {
    "question": "IBPS आवेदन फॉर्म में कैपिटल लेटर्स (CAPITAL LETTERS) में हस्ताक्षर करने पर फॉर्म क्यों रिजेक्ट हो जाता है?",
    "answer": "IBPS की आधिकारिक अधिसूचना में स्पष्ट चेतावनी दी गई होती है: ==\"Signatures in CAPITAL LETTERS will not be accepted\"==। ब्लॉक कैपिटल अक्षरों में उम्मीदवार के व्यक्तिगत हस्तलेखन (Forensic Handwriting Strokes) की पहचान नहीं हो पाती। हमेशा सादे सफेद कागज पर काली स्याही वाले बॉलपॉइंट पेन से रनिंग कर्सिव राइटिंग में सामान्य हस्ताक्षर करें और फाइल का आकार 10 KB से 20 KB के बीच रखें।"
  },
  {
    "question": "IBPS RRB के लिए फोटो, हस्ताक्षर और घोषणा पत्र अपलोड करने के सटीक नियम क्या हैं?",
    "answer": "IBPS के अनुसार ==पासपोर्ट साइज फोटो 20 KB से 50 KB (200×230 पिक्सल, सफेद बैकग्राउंड) और हस्ताक्षर 10 KB से 20 KB (140×60 पिक्सल, काली स्याही) होना अनिवार्य है==। इसके अलावा बाएं हाथ के अंगूठे का निशान (LTI) 20 KB से 50 KB तथा अंग्रेजी में हस्तलिखित घोषणा पत्र (Handwritten Declaration) 50 KB से 100 KB के बीच सफेद कागज पर काली स्याही से लिखकर अपलोड करना आवश्यक है।"
  }
];

// Rich Hindi Content HTML with all functional graphics
const contentHtml_hi = `
<h2>स्पष्ट निष्कर्ष: बिना महंगी कोचिंग के IBPS RRB PO बनने का व्यावहारिक मार्ग</h2>
      <p>महंगी पेड कोचिंग के बिना <strong>IBPS RRB ऑफिसर स्केल 1 (PO)</strong> परीक्षा पास करना पूरी तरह संभव है। यह संपूर्ण मार्गदर्शिका <strong>उत्तर प्रदेश (सामान्य वर्ग - General Category)</strong> से लगातार दो भर्ती चक्रों (2024 और 2025) में प्रीलिम्स और मेन्स दोनों परीक्षाएं सफलतापूर्वक उत्तीर्ण करने वाले अभ्यर्थी के वास्तविक व प्रामाणिक अनुभवों का सार प्रस्तुत करती है। प्रीलिम्स में सटीक प्रश्न चयन, मेन्स में कंप्यूटर और इंग्लिश जैसे स्कोर-बूस्टर विषयों का अधिकतम उपयोग, तथा इंटरव्यू में होने वाली सामान्य चूकों से बचकर कोई भी गंभीर अभ्यर्थी अनुशासित तैयारी के साथ अंतिम चयन सुनिश्चित कर सकता है।</p>

      <div class="not-prose my-6 p-4 sm:p-5 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs border-2 border-slate-700 shadow-xl space-y-2.5">
        <div class="flex items-center justify-between text-slate-300 text-[11px] pb-2 border-b border-slate-800">
          <span class="font-bold text-cyan-300">⚡ अभ्यर्थी वास्तविक स्कोर व अनुभव सारांश</span>
          <span class="text-amber-400 font-bold">UP सामान्य वर्ग (General)</span>
        </div>
        <pre class="overflow-x-auto text-emerald-400 leading-relaxed font-mono"><code>रीजनिंग प्रीलिम्स:      40 / 40 अंक (2024 एवं 2025 दोनों वर्षों में)
मेन्स स्कोर कुशन:       कंप्यूटर (20M) + इंग्लिश (40M) में अधिकतम स्कोर
करंट अफेयर्स (GA):     अंतिम 4 महीने | 3-बार अनिवार्य वीडियो रिवीजन
घातक चूक:              इंटरव्यू में बैंकिंग अवेयरनेस व डिग्री बैकग्राउंड की उपेक्षा</code></pre>
      </div>

      <h2>⚡ 1. परीक्षा पैटर्न एवं त्रि-स्तरीय चयन प्रक्रिया</h2>
      <p>IBPS RRB PO परीक्षा का पैटर्न सामान्य IBPS PO और SBI PO से काफी भिन्न है। सबसे बड़ा अंतर यह है कि <strong>प्रीलिम्स में इंग्लिश का कोई सेक्शन नहीं होता</strong>। इसका सीधा अर्थ है कि यदि गणितीय गति या रीजनिंग में कमी रह जाती है, तो उसे इंग्लिश के अंकों से पूरा नहीं किया जा सकता।</p>

      <!-- SELECTION FUNNEL CANVAS: HIGH CONTRAST & THEME SAFE -->
      <div class="not-prose my-8 p-5 sm:p-7 rounded-2xl bg-slate-900 text-slate-100 border-2 border-slate-700 shadow-2xl">
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <h4 class="text-base sm:text-lg font-bold text-white tracking-tight" style="color: #ffffff !important;">IBPS RRB ऑफिसर स्केल 1 चयन चरण (Selection Funnel)</h4>
          <span class="text-xs font-mono text-cyan-400 font-bold">3-चरणीय प्रक्रिया</span>
        </div>
        <div class="space-y-3.5 mt-4">
          <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-cyan-300">चरण 1: स्पीड स्प्रिंट (Speed Sprint)</span>
              <h5 class="text-sm font-bold text-white mt-0.5" style="color: #ffffff !important;">प्रारंभिक परीक्षा - प्रीलिम्स (80 प्रश्न | 80 अंक | 45 मिनट कंपोजिट समय)</h5>
              <p class="text-xs text-slate-300 mt-1">तर्कशक्ति (Reasoning - 40 प्रश्न) + गणितीय अभियोग्यता (Quant - 40 प्रश्न)। सख्त विषयवार और राज्यवार कट-ऑफ।</p>
            </div>
            <span class="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-bold text-xs shrink-0">स्क्रीनिंग गेट</span>
          </div>

          <div class="p-4 rounded-xl bg-slate-800/90 border border-emerald-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">चरण 2: ज्ञान एवं रणनीति (Knowledge &amp; Strategy)</span>
              <h5 class="text-sm font-bold text-white mt-0.5" style="color: #ffffff !important;">मुख्य परीक्षा - मेन्स (200 प्रश्न | 200 अंक | 120 मिनट कंपोजिट समय)</h5>
              <p class="text-xs text-slate-300 mt-1">रीजनिंग (50M), क्वांट (50M), GA (40M), इंग्लिश/हिंदी (40M), कंप्यूटर नॉलेज (20M)।</p>
            </div>
            <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 font-bold text-xs shrink-0">80% अंतिम मेरिट भार</span>
          </div>

          <div class="p-4 rounded-xl bg-slate-800/90 border border-blue-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-blue-400">चरण 3: व्यक्तित्व एवं बैंकिंग डोमेन (Personality &amp; Banking Domain)</span>
              <h5 class="text-sm font-bold text-white mt-0.5" style="color: #ffffff !important;">व्यक्तिगत साक्षात्कार - इंटरव्यू (100 अंक | नोडल RRBs एवं नाबार्ड द्वारा आयोजित)</h5>
              <p class="text-xs text-slate-300 mt-1">बैंकिंग अवेयरनेस, ग्रामीण अर्थव्यवस्था, प्राथमिकता क्षेत्र ऋण (PSL), और ग्रेजुएशन डिग्री आधारित वाइवा।</p>
            </div>
            <span class="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/40 font-bold text-xs shrink-0">20% अंतिम मेरिट भार</span>
          </div>
        </div>
      </div>

      <!-- FUNCTIONAL GRAPHIC 1: MAINS SCORING WEIGHTAGE & MULTIPLIER MATRIX CANVAS -->
      <div class="not-prose my-8 rounded-2xl bg-slate-900 text-slate-100 border-2 border-cyan-500/50 p-5 sm:p-7 shadow-2xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-800">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-[11px] font-bold uppercase tracking-wider">
              <span>📊 डेटा विज़ुअलाइज़ेशन</span>
            </div>
            <h4 class="text-lg font-bold text-white mt-1.5" style="color: #ffffff !important;">मेन्स स्कोरिंग वेटेज एवं मल्टीप्लायर आर्किटेक्चर</h4>
          </div>
          <div class="text-xs text-slate-300 font-mono">
            कुल: <span class="text-cyan-400 font-bold">200 प्रश्न</span> = <span class="text-amber-400 font-bold">200 अंक</span> (120 मिनट)
          </div>
        </div>

        <p class="text-xs text-slate-300 mt-3 mb-6 leading-relaxed">
          IBPS मेन्स परीक्षा में विभिन्न विषयों के लिए अलग-अलग वेटेज (Multiplier) लागू करता है। रीजनिंग और क्वांटिटेटिव एप्टीट्यूड में <strong class="text-cyan-300">प्रति प्रश्न 1.25 अंक</strong> मिलते हैं, जबकि कंप्यूटर नॉलेज में <strong class="text-amber-300">0.50 का गुणक</strong> लागू होता है। चतुर अभ्यर्थी इस विषमता का अधिकतम लाभ उठाते हैं:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- 1.25x High Yield Multiplier -->
          <div class="p-4 rounded-xl bg-slate-800/90 border-2 border-cyan-400/60 flex flex-col justify-between shadow-lg">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-slate-300 uppercase tracking-wide">उच्च-उपज गुणक (High-Yield)</span>
                <span class="px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 font-mono font-bold text-xs">1.25&times; मल्टीप्लायर</span>
              </div>
              <h5 class="text-base font-bold text-white" style="color: #ffffff !important;">रीजनिंग एवं क्वांट</h5>
              <div class="mt-3 space-y-1.5 text-xs text-slate-300">
                <div class="flex justify-between py-1 border-b border-slate-700">
                  <span>प्रत्येक विषय में प्रश्न:</span>
                  <span class="font-mono font-bold text-white">40 प्रश्न</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-700">
                  <span>प्राप्त होने वाले अंक:</span>
                  <span class="font-mono font-bold text-cyan-300">50 अंक प्रत्येक</span>
                </div>
                <div class="flex justify-between py-1">
                  <span>दोनों का कुल योग:</span>
                  <span class="font-mono font-bold text-white">80 प्रश्न &rarr; 100 अंक (50%)</span>
                </div>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-700 text-[11px] text-cyan-200 font-medium">
              💡 प्रत्येक 4 सही उत्तरों पर 5 अंक मिलते हैं। 100% सटीकता के साथ सबसे तेज अंक संचय।
            </div>
          </div>

          <!-- 1.0x Flat Multiplier -->
          <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700 flex flex-col justify-between shadow-lg">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-slate-300 uppercase tracking-wide">मुख्य स्कोरिंग विषय</span>
                <span class="px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-400/40 font-mono font-bold text-xs">1.00&times; प्रत्यक्ष</span>
              </div>
              <h5 class="text-base font-bold text-white" style="color: #ffffff !important;">GA एवं इंग्लिश / हिंदी</h5>
              <div class="mt-3 space-y-1.5 text-xs text-slate-300">
                <div class="flex justify-between py-1 border-b border-slate-700">
                  <span>प्रत्येक विषय में प्रश्न:</span>
                  <span class="font-mono font-bold text-white">40 प्रश्न</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-700">
                  <span>प्राप्त होने वाले अंक:</span>
                  <span class="font-mono font-bold text-indigo-300">40 अंक प्रत्येक</span>
                </div>
                <div class="flex justify-between py-1">
                  <span>दोनों का कुल योग:</span>
                  <span class="font-mono font-bold text-white">80 प्रश्न &rarr; 80 अंक (40%)</span>
                </div>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-700 text-[11px] text-indigo-200 font-medium">
              💡 GA और भाषा भारी गणनाओं में समय गंवाए बिना राज्य कट-ऑफ से 15-20 अंक का सुरक्षा कुशन बनाते हैं।
            </div>
          </div>

          <!-- 0.50x Time ROI Champion -->
          <div class="p-4 rounded-xl bg-slate-800/90 border-2 border-amber-400/60 flex flex-col justify-between shadow-lg">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-slate-300 uppercase tracking-wide">समय बचत चैंपियन</span>
                <span class="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-400/50 font-mono font-bold text-xs">0.50&times; गुणक</span>
              </div>
              <h5 class="text-base font-bold text-white" style="color: #ffffff !important;">कंप्यूटर नॉलेज</h5>
              <div class="mt-3 space-y-1.5 text-xs text-slate-300">
                <div class="flex justify-between py-1 border-b border-slate-700">
                  <span>कुल प्रश्न:</span>
                  <span class="font-mono font-bold text-white">40 प्रश्न</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-700">
                  <span>प्राप्त होने वाले अंक:</span>
                  <span class="font-mono font-bold text-amber-300">20 अंक</span>
                </div>
                <div class="flex justify-between py-1">
                  <span>आवश्यक समय:</span>
                  <span class="font-mono font-bold text-emerald-400">केवल 10 &ndash; 12 मिनट!</span>
                </div>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-700 text-[11px] text-amber-200 font-medium">
              ⚡ जादुई फायदा: मात्र 15 सेकंड प्रति प्रश्न में 15 से 18 शुद्ध अंक आसानी से हासिल किए जा सकते हैं!
            </div>
          </div>
        </div>
      </div>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-3 border-b">विषय (Section)</th>
              <th class="p-3 border-b">कुल प्रश्न</th>
              <th class="p-3 border-b">अधिकतम अंक</th>
              <th class="p-3 border-b">रणनीतिक भूमिका</th>
              <th class="p-3 border-b">🏆 लक्षित स्कोर रेंज</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            <tr>
              <td class="p-3 font-semibold text-foreground">रीजनिंग (प्रीलिम्स)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3">मुख्य स्कोरिंग इंजन; गलती की कोई गुंजाइश नहीं</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">38 – 40 / 40</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-foreground">क्वांटिटेटिव एप्टीट्यूड (प्रीलिम्स)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3">स्पीड मैथ्स + आसान DI चयन; गणना के जालों से बचें</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">22 – 28 / 40</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-foreground">रीजनिंग (मेन्स)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">50 (1.25x भार)</td>
              <td class="p-3">क्रिटिकल रीजनिंग + चुनिंदा 2-3 मध्यम पजल</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">28 – 35 / 50</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-foreground">क्वांटिटेटिव एप्टीट्यूड (मेन्स)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">50 (1.25x भार)</td>
              <td class="p-3">अर्थमैटिक DI, केसलेट्स, और डेटा सफिशिएंसी</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">18 – 24 / 50</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-foreground">इंग्लिश / हिंदी भाषा (मेन्स)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">40 (1.0x भार)</td>
              <td class="p-3">कट-ऑफ बढ़ाने वाला मुख्य विषय; RC में उच्च सटीकता</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">28 – 34 / 40</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-foreground">कंप्यूटर नॉलेज (मेन्स)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">20 (0.5x भार)</td>
              <td class="p-3">सबसे तेज रिटर्न; मात्र 10 मिनट में 16+ अंक</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">14 – 18 / 20</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-foreground">सामान्य जागरूकता - GA (मेन्स)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">40 (1.0x भार)</td>
              <td class="p-3">फाइनल रैंक निर्धारक; 4 महीने के करंट अफेयर्स + RBI अपडेट</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">20 – 28 / 40</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>📐 2. प्रीलिम्स में 40/40 रीजनिंग और अनुशासित क्वांटिटेटिव एप्टीट्यूड</h2>
      <p>80 प्रश्नों के लिए कुल 45 मिनट के कंपोजिट समय में समय का बंटवारा आपकी सबसे महत्वपूर्ण रणनीतिक चुनौती है। आपको लगभग <strong>22 से 24 मिनट रीजनिंग</strong> को और <strong>21 से 23 मिनट क्वांटिटेटिव एप्टीट्यूड</strong> को देने चाहिए।</p>

      <h3>A. रीजनिंग में 40/40 स्कोर करने का माइंडसेट</h3>
      <p>रीजनिंग वह विषय है जहां शीर्ष स्कोर करने वाले अभ्यर्थी अपनी कट-ऑफ सुरक्षा सुनिश्चित करते हैं। 40/40 अंक हासिल करना कोई संयोग नहीं है, बल्कि यह टॉपिक-विशिष्ट अभ्यास का परिणाम है:</p>
      <ul>
        <li><strong>कमजोर पजल प्रारूपों की पहचान करें:</strong> सिर्फ दैनिक कोटा पूरा करने के लिए यादृच्छिक पजल हल न करें। अपने सबसे कमजोर प्रकारों को पहचानें, जैसे फ्लोर-फ्लैट व्यवस्था, अनिश्चित समानांतर पंक्तियां, वर्ष-आयु गणना, या रक्त संबंध वाली पजल। Testbook या अभ्यास प्लेटफॉर्म पर प्रतिदिन अपने <strong>कमजोर प्रकार के कम से कम 4 पजल</strong> हल करें।</li>
        <li><strong>प्रयास के बाद गलतियों का गहन विश्लेषण:</strong> केवल अपना अंतिम स्कोर न देखें। उस स्थिति की जांच करें जिसे आपने खारिज किया था, गलत पढ़ी गई शर्तों को देखें और उस विशिष्ट चरण का विश्लेषण करें जिसमें अत्यधिक समय लगा।</li>
        <li><strong>'Meaningful Word' का खतरा:</strong> चार अक्षरों से अर्थपूर्ण शब्द बनाने वाले प्रश्नों में नेगेटिव मार्किंग का सबसे अधिक जोखिम होता है। शुरुआत में हमेशा इन्हें छोड़ें और अंत में ही प्रयास करें। उत्तर मार्क करने से पहले शब्द क्रम की पूर्ण पुष्टि करें।</li>
        <li><strong>अनुशंसित यूट्यूब शिक्षक:</strong> यूट्यूब पर <strong>संजय सर (Sanjay Sir)</strong> या <strong>पुनीत सर (Puneet Sir)</strong> के फ्री सेशंस अद्वितीय हैं। संजय सर का प्रश्न चयन—विशेष रूप से यह समझना कि किस पजल को देखते ही छोड़ना है—अत्यंत मूल्यवान है।</li>
      </ul>

      <h3>B. क्वांटिटेटिव एप्टीट्यूड: 5-चरणीय स्प्रिंट प्रोटोकॉल (5-Stage Sprint Protocol)</h3>
      <p>RRB PO प्रीलिम्स में क्वांटिटेटिव एप्टीट्यूड के प्रश्न क्लर्क स्तर की परीक्षाओं की तुलना में थोड़ी अधिक गणना की मांग करते हैं। प्रश्नों को कभी भी 1 से 40 के क्रम में हल न करें। हमेशा इस सख्त पांच-चरणीय फ्लोचार्ट का पालन करें:</p>

      <!-- FUNCTIONAL GRAPHIC 2: QUANT 5-STAGE PROCESS FLOWCHART CANVAS -->
      <div class="not-prose my-8 rounded-2xl bg-slate-900 text-slate-100 border-2 border-cyan-500/50 p-5 sm:p-7 shadow-2xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-800">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-[11px] font-bold uppercase tracking-wider">
              <span>⚡ प्रक्रिया फ्लोचार्ट (Process Flowchart)</span>
            </div>
            <h4 class="text-lg font-bold text-white mt-1.5" style="color: #ffffff !important;">क्वांटिटेटिव एप्टीट्यूड: 5-चरणीय स्प्रिंट प्रोटोकॉल</h4>
          </div>
          <div class="text-xs text-slate-300 font-mono">
            समय बजट: <span class="text-cyan-400 font-bold">21 &ndash; 23 मिनट</span> | लक्ष्य: <span class="text-amber-400 font-bold">25+ सटीक अंक</span>
          </div>
        </div>

        <!-- Adaptive Flowchart Cards -->
        <div class="mt-6 space-y-4">
          <!-- Stage 1 -->
          <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-cyan-400 transition flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-md">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                01
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h5 class="font-bold text-white text-sm" style="color: #ffffff !important;">सरलीकरण एवं सन्निकटन (Simplification &amp; Approximation)</h5>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">लक्ष्य: 4–5 मिनट</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">5–6 प्रश्न। प्रतिशत-भिन्न रूपांतरण, वैदिक डिजिटल रूट और सन्निकटन नियम लागू करें।</p>
              </div>
            </div>
            <div class="shrink-0 flex items-center gap-2 text-xs font-mono">
              <span class="px-2.5 py-1 rounded-md bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[11px] font-bold">
                ⛔ नियम: 40s से अधिक लगे तो छोड़ें
              </span>
            </div>
          </div>

          <!-- Flow Connector Arrow -->
          <div class="flex justify-center -my-2">
            <svg class="w-5 h-5 text-cyan-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>

          <!-- Stage 2 -->
          <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-cyan-400 transition flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-md">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                02
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h5 class="font-bold text-white text-sm" style="color: #ffffff !important;">द्विघात समीकरण एवं संख्या श्रृंखला (Quadratics &amp; Series)</h5>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">लक्ष्य: 4–5 मिनट</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">5 प्रश्न द्विघात (15s साइन विधि) + 5 प्रश्न लुप्त/गलत संख्या श्रृंखला (अंतर और अभाज्य पैटर्न)।</p>
              </div>
            </div>
            <div class="shrink-0 flex items-center gap-2 text-xs font-mono">
              <span class="px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[11px] font-bold">
                ⚠️ जटिल 3-स्तरीय क्यूब पैटर्न छोड़ें
              </span>
            </div>
          </div>

          <!-- Flow Connector Arrow -->
          <div class="flex justify-center -my-2">
            <svg class="w-5 h-5 text-cyan-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>

          <!-- Stage 3 -->
          <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-cyan-400 transition flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-md">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                03
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h5 class="font-bold text-white text-sm" style="color: #ffffff !important;">सबसे आसान डेटा इंटरप्रिटेशन सेट (Primary DI Set)</h5>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">लक्ष्य: 5 मिनट</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">सबसे सीधा टेबल या बार चार्ट चुनें जिसमें सीधे एकल-चर प्रतिशत और अनुपात हों।</p>
              </div>
            </div>
            <div class="shrink-0 flex items-center gap-2 text-xs font-mono">
              <span class="px-2.5 py-1 rounded-md bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[11px] font-bold">
                ⛔ मिसिंग डेटा वाली टेबल को तुरंत छोड़ें
              </span>
            </div>
          </div>

          <!-- Flow Connector Arrow -->
          <div class="flex justify-center -my-2">
            <svg class="w-5 h-5 text-cyan-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>

          <!-- Stage 4 -->
          <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-cyan-400 transition flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-md">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                04
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h5 class="font-bold text-white text-sm" style="color: #ffffff !important;">उच्च-विश्वास कोर अर्थमैटिक (Core Arithmetic)</h5>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">लक्ष्य: 5–6 मिनट</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">सबसे मजबूत विषय चुनें: लाभ-हानि, आयु, औसत, नाव-धारा, और 2D मेंसुरेशन।</p>
              </div>
            </div>
            <div class="shrink-0 flex items-center gap-2 text-xs font-mono">
              <span class="px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold">
                ✅ 4–6 ठोस और सटीक अंक सुरक्षित करें
              </span>
            </div>
          </div>

          <!-- Flow Connector Arrow -->
          <div class="flex justify-center -my-2">
            <svg class="w-5 h-5 text-cyan-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>

          <!-- Stage 5 -->
          <div class="p-4 rounded-xl bg-slate-800/90 border border-amber-500/40 hover:border-amber-300 transition flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-md">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                05
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h5 class="font-bold text-white text-sm" style="color: #ffffff !important;">आरक्षित बफर व त्वरित समीक्षा (Buffer &amp; Review)</h5>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">लक्ष्य: 2 मिनट</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">केवल उन प्रश्नों को दोबारा देखें जिनमें अंतिम एक गणना बाकी थी। शून्य तुक्का—100% एक्यूरेसी बनाए रखें।</p>
              </div>
            </div>
            <div class="shrink-0 flex items-center gap-2 text-xs font-mono">
              <span class="px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[11px] font-bold">
                🛡️ शून्य नेगेटिव मार्किंग सुरक्षा
              </span>
            </div>
          </div>
        </div>
      </div>

      <p>क्वांट तैयारी के लिए यूट्यूब पर <strong>हर्षल अग्रवाल (Harshal Agrawal)</strong> सर के लेक्चर्स अवधारणाओं की स्पष्टता और शॉर्टकट तकनीकों के लिए सफल अभ्यर्थियों द्वारा सर्वाधिक अनुशंसित हैं।</p>

      <h2>⚖️ 3. मेन्स विषयवार निष्पादन रणनीति (Subject-by-Subject Blueprint)</h2>
      <p>बैंकिंग अभ्यर्थियों द्वारा की जाने वाली सबसे बड़ी रणनीतिक भूल यह है कि वे मेन्स को केवल एक 'बड़ा प्रीलिम्स' समझकर तैयारी करते हैं। मेन्स में 2 घंटे की कंपोजिट विंडो में एक स्पष्ट विषयवार प्राथमिकता की आवश्यकता होती है:</p>
      <blockquote>
        <strong>मेन्स का स्वर्णिम नियम:</strong> यदि आपका क्वांटिटेटिव एप्टीट्यूड और उन्नत रीजनिंग औसत स्तर का है, तो <strong>इंग्लिश लैंग्वेज और कंप्यूटर नॉलेज</strong> में अधिकतम अंक प्राप्त करें, क्वांट और रीजनिंग में कट-ऑफ से 5-8 अंक ऊपर का बुनियादी स्कोर बनाए रखें, और <strong>सामान्य जागरूकता (GA)</strong> को राज्य कट-ऑफ से ऊपर अंतिम मेरिट में स्थान बनाने का मुख्य चालक बनाएं।
      </blockquote>

      <h3>1. मेन्स में रीजनिंग (50 अंक / 1.25x गुणक भार)</h3>
      <p>प्रति प्रश्न 1.25 के मल्टीप्लायर के साथ, रीजनिंग तेजी से अंक बढ़ाने में मदद करती है। हालांकि, जटिल और पेचीदा पजल 12 मिनट बर्बाद कर सकती हैं और अंत में कोई उत्तर नहीं निकलता। अपने स्कोर की सुरक्षा के लिए:</p>
      <ul>
        <li><strong>क्रिटिकल रीजनिंग (कथन व पूर्वधारणा, कार्यवाही, कारण व प्रभाव):</strong> इस पर पूर्ण नियंत्रण बनाएं। यूट्यूब पर हर्षल अग्रवाल सर के सेशंस इसके लिए अत्यंत उपयोगी हैं। ये प्रश्न सीधे, पाठ-आधारित होते हैं और प्रत्येक में 45 सेकंड से भी कम समय लगता है।</li>
        <li>मेन्स में 2 से 3 हल करने योग्य पजल बनाएं और 3 से अधिक अज्ञात चरों वाली पेचीदा पजल को देखते ही छोड़ दें।</li>
      </ul>

      <h3>2. मेन्स में क्वांटिटेटिव एप्टीट्यूड (50 अंक / 1.25x गुणक भार)</h3>
      <p>अत्यधिक कठिन CAT स्तर के गणित को हल करने में हफ्तों बर्बाद न करें। मानक मेन्स पैटर्न पर ध्यान केंद्रित करें: अंकगणितीय डेटा इंटरप्रिटेशन (Arithmetic DI), केसलेट्स और डेटा सफिशिएंसी। यदि लैंग्वेज और कंप्यूटर में उच्च स्कोर है, तो मेन्स क्वांट में 18 से 24 अंक पूरी तरह सुरक्षित और प्रतिस्पर्धी हैं।</p>

      <h3>3. इंग्लिश लैंग्वेज (40 अंक): रानी मैम (Rani Ma'am) को फॉलो करें</h3>
      <p>मेन्स इंग्लिश को केवल अनुमान या साधारण सहज ज्ञान से हल नहीं किया जा सकता। प्रश्नों में जटिल वाक्य पुनर्व्यवस्था (Sentence Rearrangement), संदर्भ-आधारित शब्दावली और बहु-पैराग्राफ आरसी (Reading Comprehensions) शामिल होते हैं। <strong>रानी मैम</strong> (या निमिषा बंसल मैम) के साथ नियमित अभ्यास से घड़ी के दबाव में लंबे संपादकीय गद्यांशों को समझने की क्षमता विकसित होती है।</p>

      <h3>4. कंप्यूटर नॉलेज (20 अंक / 40 प्रश्न): सचिन अरोड़ा सर (Sachin Arora Sir) को फॉलो करें</h3>
      <p>कंप्यूटर नॉलेज RRB PO सिलेबस में समय के अनुपात में सबसे अधिक अंक देने वाला विषय है। कई अभ्यर्थी इसे परीक्षा से ठीक 5 दिन पहले तक टालने की गंभीर गलती करते हैं। यूट्यूब पर <strong>सचिन अरोड़ा सर</strong> को फॉलो करके आप व्यवस्थित रूप से MS Office शॉर्टकट कीज, OSI मॉडल की लेयर्स, नेटवर्किंग टोपोलॉजी, डेटाबेस (DBMS) बेसिक्स और साइबर सिक्योरिटी शब्दावली को कवर कर सकते हैं। कंप्यूटर में 16/20 स्कोर करने वाला छात्र 7 या 8 अंक पाने वाले छात्रों पर निर्णायक बढ़त हासिल कर लेता है।</p>

      <h3>5. सामान्य जागरूकता: 3-बार वीडियो रिवीजन का नियम (3x Video Revision Rule)</h3>
      <p>RRB PO में सामान्य जागरूकता अत्यंत विश्लेषणात्मक होती है और इसमें गहन बैंकिंग संचालन शामिल होता है। अभ्यर्थी अक्सर 120 पृष्ठों वाली भारी-भरकम मासिक PDF संकलनों को पढ़ने का प्रयास करते हैं, जिसके परिणामस्वरूप सूचना का अत्यधिक बोझ (Information Overload), मानसिक थकान और परीक्षा के दिन तथ्यों को याद न रख पाना जैसी समस्याएं होती हैं। इसका प्रमाणित विकल्प है संरचित वीडियो रिवीजन:</p>
      <ul>
        <li><strong>शीतल मैम (यूट्यूब) को फॉलो करें:</strong> उनके साप्ताहिक और पाक्षिक वीडियो सारांश बिना किसी अनावश्यक विस्तार के संतुलित, परीक्षा-उन्मुख कवरेज प्रदान करते हैं।</li>
        <li><strong>1.5x / 2x स्पीड पर देखें:</strong> व्यापक सामग्री को कम समय में कवर करने के लिए त्वरित प्लेबैक गति पर सेशंस देखें।</li>
        <li><strong>3-बार रिवीजन का नियम (3-Time Revision Rule):</strong> किसी लेक्चर को केवल एक बार देख लेना तैयारी नहीं कहलाता। परीक्षा से पहले प्रत्येक लेक्चर को कम से कम तीन बार दोहराना अनिवार्य है ताकि नाम, आंकड़े और योजना की तारीखें मस्तिष्क में स्थायी हो सकें।</li>
        <li><strong>4 महीने की समय सीमा:</strong> परीक्षा तिथि से ठीक पहले के 4 महीनों पर पूरी तरह ध्यान केंद्रित करें। उदाहरण के लिए, दिसंबर में होने वाली परीक्षा के लिए सितंबर, अक्टूबर, नवंबर और दिसंबर के शुरुआती 10 दिनों में पूर्ण महारत हासिल करें।</li>
        <li><strong>बैंकिंग एवं विनियामक अपडेट:</strong> सामान्य समाचारों के साथ-साथ RBI अधिसूचनाओं, प्राथमिकता क्षेत्र ऋण (PSL) नियमों, नाबार्ड दिशानिर्देशों और वित्तीय योजनाओं के मासिक सारांश का अध्ययन करें।</li>
      </ul>

      <h2>💡 4. इंटरव्यू के खतरे: बैंकिंग अवेयरनेस और डिग्री डिफेंस (Interview Trap)</h2>
      <p>लगातार दो बार इंटरव्यू राउंड तक पहुंचना लेकिन अंतिम चयन सूची में न आ पाना कई गंभीर अभ्यर्थियों का एक दर्दनाक अनुभव होता है। ऐसा क्यों होता है, यह समझना एक अत्यंत महत्वपूर्ण रणनीतिक सीख देता है:</p>

      <div class="not-prose my-6 p-5 sm:p-6 rounded-2xl bg-slate-900 border-2 border-red-500/50 text-slate-100 shadow-xl space-y-3">
        <div class="flex items-center gap-2 text-rose-400 font-bold text-sm">
          <span>⚠️</span>
          <span style="color: #f87171 !important;">इंटरव्यू की दो सबसे घातक कमजोरियां</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
          1. <strong class="text-white">बैंकिंग अवेयरनेस को मेन्स रिजल्ट तक टालना:</strong> कई उम्मीदवार मेन्स परिणाम घोषित होने तक बुनियादी बैंकिंग सिद्धांतों का अध्ययन टाल देते हैं। RRB इंटरव्यू में पैनल ग्रामीण बैंकिंग अवसंरचना की गहन जानकारी की अपेक्षा करता है: क्षेत्रीय ग्रामीण बैंकों का शेयरधारिता अनुपात (केंद्र सरकार 50%, प्रायोजक बैंक 35%, राज्य सरकार 15%), किसान क्रेडिट कार्ड (KCC) सीमाएं, लीड बैंक योजना, और स्वयं सहायता समूह (SHG) बैंक लिंकेज मॉडल।
        </p>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
          2. <strong class="text-white">ग्रेजुएशन विषय के वाइवा को कम आंकना:</strong> तकनीकी या व्यावसायिक डिग्री वाले उम्मीदवार (जैसे B.Tech कंप्यूटर साइंस, IT, या कॉमर्स) अक्सर अपने ग्रेजुएशन विषयों पर गहन सवालों का सामना करते हैं। यदि आपका CS बैकग्राउंड है, तो DBMS SQL क्वेरीज, कोर बैंकिंग सिस्टम में API आर्किटेक्चर, ऑनलाइन बैंकिंग में साइबर सुरक्षा और एन्क्रिप्शन एल्गोरिदम पर प्रश्नों की अपेक्षा करें। स्पष्ट, आत्मविश्वास से भरा उत्तर तैयार करें कि आपकी इंजीनियरिंग डिग्री ग्रामीण बैंकिंग के डिजिटलीकरण में कैसे सीधे लाभ पहुंचाएगी।
        </p>
      </div>

      <h2>📋 5. IBPS आधिकारिक दस्तावेज जांच एवं अपलोड दिशानिर्देश</h2>
      <p>परीक्षा हॉल में प्रवेश करने से पहले, आपका आवेदन पत्र बिना किसी त्रुटि के ऑटोमेटेड सर्वर जांच को पास करना चाहिए। IBPS पोर्टल स्वचालित फाइल फिल्टर का उपयोग करता है जो गैर-अनुपालन वाले दस्तावेजों को तुरंत अस्वीकार कर देता है:</p>

      <!-- ELEVATED DOCUMENT COMPLIANCE & CORE UTILITY CANVAS -->
      <div class="not-prose my-8 rounded-2xl bg-slate-900 text-slate-100 border-2 border-cyan-500/50 p-5 sm:p-7 shadow-2xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-800">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-[11px] font-bold uppercase tracking-wider">
              <span>📋 आधिकारिक सर्वर स्क्रूटनी नियम</span>
            </div>
            <h4 class="text-lg font-bold text-white mt-1.5" style="color: #ffffff !important;">IBPS RRB अनिवार्य दस्तावेज अनुपालन चेकलिस्ट</h4>
          </div>
          <span class="text-xs text-amber-400 font-mono font-semibold">सख्त द्वि-सीमा सत्यापन (Dual-Boundary Validation)</span>
        </div>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-slate-700 rounded-xl overflow-hidden shadow-inner">
            <thead class="bg-slate-800 text-white font-semibold border-b border-slate-700">
              <tr>
                <th class="p-3.5 text-white" style="color: #ffffff !important; background: #1e293b !important;">दस्तावेज का प्रकार</th>
                <th class="p-3.5 text-white" style="color: #ffffff !important; background: #1e293b !important;">फाइल साइज सीमा</th>
                <th class="p-3.5 text-white" style="color: #ffffff !important; background: #1e293b !important;">पिक्सल आयाम</th>
                <th class="p-3.5 text-white" style="color: #ffffff !important; background: #1e293b !important;">अनिवार्य पोर्टल अनुपालन नियम</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800 text-slate-300">
              <tr class="bg-slate-900/90 hover:bg-slate-800/60 transition">
                <td class="p-3 font-semibold text-white" style="color: #ffffff !important;">पासपोर्ट साइज फोटो</td>
                <td class="p-3 font-mono text-cyan-300 font-bold">20.0 KB &ndash; 50.0 KB</td>
                <td class="p-3 font-mono text-slate-200">200 &times; 230 px (3.5 &times; 4.5 cm)</td>
                <td class="p-3">शुद्ध सफेद/हल्की पृष्ठभूमि; समान रोशनी; रंगीन चश्मा, टोपी या फ्लैश की चमक वर्जित है।</td>
              </tr>
              <tr class="bg-slate-900/90 hover:bg-slate-800/60 transition">
                <td class="p-3 font-semibold text-white" style="color: #ffffff !important;">हस्ताक्षर फाइल</td>
                <td class="p-3 font-mono text-cyan-300 font-bold">10.0 KB &ndash; 20.0 KB</td>
                <td class="p-3 font-mono text-slate-200">140 &times; 60 px (4 &times; 2 cm)</td>
                <td class="p-3"><strong class="text-rose-400">कैपिटल लेटर्स पूरी तरह अमान्य</strong>; सादे सफेद कागज पर काले बॉलपॉइंट पेन से कर्सिव रनिंग लिखावट।</td>
              </tr>
              <tr class="bg-slate-900/90 hover:bg-slate-800/60 transition">
                <td class="p-3 font-semibold text-white" style="color: #ffffff !important;">बाएं अंगूठे का निशान (LTI)</td>
                <td class="p-3 font-mono text-cyan-300 font-bold">20.0 KB &ndash; 50.0 KB</td>
                <td class="p-3 font-mono text-slate-200">240 &times; 240 px (3 &times; 3 cm, 200 DPI)</td>
                <td class="p-3">नीली या काली इंक पैड; स्पष्ट लकीरें; सफेद कागज पर बिना धुंधलाहट का साफ निशान।</td>
              </tr>
              <tr class="bg-slate-900/90 hover:bg-slate-800/60 transition">
                <td class="p-3 font-semibold text-white" style="color: #ffffff !important;">हस्तलिखित घोषणा पत्र (Declaration)</td>
                <td class="p-3 font-mono text-cyan-300 font-bold">50.0 KB &ndash; 100.0 KB</td>
                <td class="p-3 font-mono text-slate-200">800 &times; 400 px (10 &times; 5 cm)</td>
                <td class="p-3">उम्मीदवार की अपनी अंग्रेजी हस्तलेखन; केवल काली स्याही; कैपिटल अक्षरों में लिखा टेक्स्ट स्वतः निरस्त कर दिया जाएगा।</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 1-Click Interactive Tool Launcher Cards -->
        <div class="mt-6 pt-5 border-t border-slate-800">
          <div class="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-3">
            ⚡ आधिकारिक 1-क्लिक कम्प्लायंस टूल्स (100% क्लाइंट-साइड निजी व सुरक्षित):
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a href="/ibps-signature-resize/" class="group p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-cyan-400 hover:bg-slate-800 transition flex flex-col justify-between shadow-md">
              <div>
                <div class="text-xs font-bold text-cyan-300 font-mono">10–20 KB</div>
                <div class="text-sm font-bold text-white group-hover:text-cyan-200 transition mt-0.5" style="color: #ffffff !important;">IBPS सिग्नेचर रिसाइज़र</div>
                <div class="text-[11px] text-slate-400 mt-1">140&times;60 पिक्सल में ऑटो-क्रॉप करता है और पीली छाया को हटाकर सफेद करता है।</div>
              </div>
              <div class="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 mt-3 group-hover:translate-x-0.5 transition">
                <span>टूल खोलें</span>
                <span>&rarr;</span>
              </div>
            </a>

            <a href="/photo-resizer/" class="group p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-cyan-400 hover:bg-slate-800 transition flex flex-col justify-between shadow-md">
              <div>
                <div class="text-xs font-bold text-indigo-300 font-mono">20–50 KB</div>
                <div class="text-sm font-bold text-white group-hover:text-cyan-200 transition mt-0.5" style="color: #ffffff !important;">पासपोर्ट फोटो रिसाइज़र</div>
                <div class="text-[11px] text-slate-400 mt-1">चेहरे के संरेखण गाइड और सफेद बैकग्राउंड के साथ 3.5&times;4.5 सेमी में बदलता है।</div>
              </div>
              <div class="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-300 mt-3 group-hover:translate-x-0.5 transition">
                <span>टूल खोलें</span>
                <span>&rarr;</span>
              </div>
            </a>

            <a href="/handwritten-declaration-resizer/" class="group p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-amber-400 hover:bg-slate-800 transition flex flex-col justify-between shadow-md">
              <div>
                <div class="text-xs font-bold text-amber-300 font-mono">50–100 KB</div>
                <div class="text-sm font-bold text-white group-hover:text-amber-200 transition mt-0.5" style="color: #ffffff !important;">डिक्लेरेशन रिसाइज़र</div>
                <div class="text-[11px] text-slate-400 mt-1">800&times;400 पिक्सल रेजोल्यूशन सेट करता है और काली स्याही वाले टेक्स्ट को शार्प करता है।</div>
              </div>
              <div class="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 mt-3 group-hover:translate-x-0.5 transition">
                <span>टूल खोलें</span>
                <span>&rarr;</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- FUNCTIONAL GRAPHIC 3: ASPIRANTS KE REAL DOUBTS & HINGLISH QUERIES CANVAS -->
      <div class="not-prose my-8 rounded-2xl bg-slate-900 text-slate-100 border-2 border-cyan-500/50 p-5 sm:p-7 shadow-2xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-800">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-[11px] font-bold uppercase tracking-wider">
              <span>💬 वास्तविक अभ्यर्थी प्रश्नोत्तर</span>
            </div>
            <h4 class="text-lg font-bold text-white mt-1.5" style="color: #ffffff !important;">अभ्यर्थियों की सामान्य शंकाएं एवं प्रामाणिक समाधान (Real Aspirant Doubts)</h4>
          </div>
          <span class="text-xs text-amber-400 font-mono font-semibold">अनुभव व दिशानिर्देश आधारित</span>
        </div>

        <p class="text-xs text-slate-300 mt-3 mb-6 leading-relaxed">
          बैंकिंग परीक्षा चर्चा मंचों (Reddit, Telegram, YouTube) पर हर वर्ष अभ्यर्थी यही सवाल पूछते हैं। सफल अभ्यर्थी के वास्तविक अनुभवों और आधिकारिक IBPS दिशानिर्देशों के आधार पर इनके समाधान:
        </p>

        <div class="space-y-4">
          <!-- Query 1 -->
          <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-cyan-500/40 transition space-y-2 shadow-md">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">शंका 1</span>
              <h5 class="font-bold text-white text-sm" style="color: #ffffff !important;">क्या RRB PO प्रीलिम्स में इंग्लिश आती है? इंग्लिश कमजोर होने पर क्या प्रीलिम्स निकल सकता है?</h5>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed pl-1 sm:pl-3 border-l-2 border-cyan-500/40">
              <strong class="text-cyan-300">उत्तर:</strong> <strong>बिल्कुल!</strong> RRB PO प्रीलिम्स में इंग्लिश का कोई सेक्शन नहीं होता—केवल <strong>रीजनिंग (40 प्रश्न)</strong> और <strong>क्वांटिटेटिव एप्टीट्यूड (40 प्रश्न)</strong> आते हैं (कुल 80 प्रश्न, 45 मिनट कंपोजिट समय)। यदि आपकी इंग्लिश कमजोर है तो प्रीलिम्स पास करने में कोई बाधा नहीं आएगी। लेकिन ध्यान रखें: इंग्लिश का स्कोर बैकअप न होने की वजह से रीजनिंग और क्वांट दोनों में तीव्र गति और 100% एक्यूरेसी होना अनिवार्य है। मेन्स में आप इंग्लिश या हिंदी में से किसी एक भाषा का चयन कर सकते हैं।
            </p>
          </div>

          <!-- Query 2 -->
          <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-cyan-500/40 transition space-y-2 shadow-md">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">शंका 2</span>
              <h5 class="font-bold text-white text-sm" style="color: #ffffff !important;">स्पीड मैथ्स में निरंतरता कैसे लाएं? एक सवाल 30 सेकंड तो अगला 1 मिनट क्यों लेता है?</h5>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed pl-1 sm:pl-3 border-l-2 border-cyan-500/40">
              <strong class="text-cyan-300">उत्तर:</strong> यह समस्या गणना के जालों (Calculation Traps) में फंसने से होती है। <strong>सख्त 40-सेकंड बेलआउट नियम (40s Bailout Rule)</strong> अपनाएं: यदि सरलीकरण या नंबर सीरीज में 40 सेकंड के अंदर पैटर्न या उत्तर नहीं दिखता, तो उस प्रश्न पर अड़े रहने के बजाय तुरंत स्किप करके आगे बढ़ें। प्रतिदिन 15 मिनट वैदिक मैथ्स ट्रिक्स (1-50 वर्ग, 1-30 घन, 1-30 पहाड़े, और 1/1 से 1/20 प्रतिशत-भिन्न मान) का त्वरित अभ्यास करें।
            </p>
          </div>

          <!-- Query 3 -->
          <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-cyan-500/40 transition space-y-2 shadow-md">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">शंका 3</span>
              <h5 class="font-bold text-white text-sm" style="color: #ffffff !important;">GA के लिए 100 पेज की भारी मंथली PDFs से सिरदर्द होता है, क्या वीडियो लेक्चर्स काफी हैं?</h5>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed pl-1 sm:pl-3 border-l-2 border-cyan-500/40">
              <strong class="text-cyan-300">उत्तर:</strong> यदि भारी मासिक PDF कैप्सूल से सूचना का अत्यधिक बोझ और थकान होती है, तो <strong>शीतल मैम (यूट्यूब)</strong> के साप्ताहिक और पाक्षिक वीडियो 1.5x या 2x गति पर देखें। लेकिन <strong>3-बार रिवीजन का नियम (3-Time Revision Rule)</strong> अनिवार्य है: लेक्चर को केवल एक बार देखने से तथ्य याद नहीं रहते, परीक्षा से पहले प्रत्येक लेक्चर को 3 बार दोहराएं। परीक्षा से ठीक पहले के <strong>4 महीने</strong> पूरी तरह तैयार करें और साथ में मासिक RBI सर्कुलर जरूर देखें।
            </p>
          </div>

          <!-- Query 4 -->
          <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-cyan-500/40 transition space-y-2 shadow-md">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">शंका 4</span>
              <h5 class="font-bold text-white text-sm" style="color: #ffffff !important;">कंप्यूटर नॉलेज में क्या सचिन अरोड़ा सर के यूट्यूब वीडियो पर्याप्त हैं? क्या पेड बैच लेना जरूरी है?</h5>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed pl-1 sm:pl-3 border-l-2 border-cyan-500/40">
              <strong class="text-cyan-300">उत्तर:</strong> <strong>यूट्यूब वीडियो 100% पर्याप्त हैं, किसी भी पेड बैच की कोई आवश्यकता नहीं है।</strong> सचिन अरोड़ा सर के मैराथन और विषयवार प्लेलिस्ट से MS Office शॉर्टकट, OSI लेयर्स, नेटवर्किंग टोपोलॉजी, डेटाबेस (DBMS) अवधारणाएं और साइबर सिक्योरिटी शब्दावली बहुत अच्छी तरह कवर हो जाती हैं। कंप्यूटर सेक्शन में 40 प्रश्न केवल 10–12 मिनट में हल हो जाते हैं और 15–18 अंक आसानी से प्राप्त किए जा सकते हैं।
            </p>
          </div>

          <!-- Query 5 -->
          <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-cyan-500/40 transition space-y-2 shadow-md">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">शंका 5</span>
              <h5 class="font-bold text-white text-sm" style="color: #ffffff !important;">इंटरव्यू बोर्ड B.Tech या नॉन-कॉमर्स बैकग्राउंड वालों से ग्रेजुएशन के गहरे सवाल क्यों पूछता है?</h5>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed pl-1 sm:pl-3 border-l-2 border-cyan-500/40">
              <strong class="text-cyan-300">उत्तर:</strong> बोर्ड यह जांचता है कि अभ्यर्थी ने अपनी मूल डिग्री कितनी ईमानदारी और गंभीरता के साथ पूरी की है। B.Tech CS/IT स्नातकों से नेटवर्किंग, डेटाबेस क्वेरीज, कोर बैंकिंग सॉफ्टवेयर आर्किटेक्चर, UPI पेमेंट गेटवे और साइबर फ्रॉड की रोकथाम पर तकनीकी वाइवा होता है। उम्मीदवार को यह उचित तर्क देना होता है कि उनका इंजीनियरिंग माइंडसेट और कंप्यूटर ज्ञान ग्रामीण बैंकिंग के डिजिटलीकरण में कैसे सहायक सिद्ध होगा।
            </p>
          </div>

          <!-- Query 6 -->
          <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-cyan-500/40 transition space-y-2 shadow-md">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">शंका 6</span>
              <h5 class="font-bold text-white text-sm" style="color: #ffffff !important;">IBPS आवेदन फॉर्म में CAPITAL लेटर्स में सिग्नेचर क्यों रिजेक्ट हो जाता है?</h5>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed pl-1 sm:pl-3 border-l-2 border-cyan-500/40">
              <strong class="text-cyan-300">उत्तर:</strong> IBPS के आधिकारिक नोटिस में स्पष्ट लिखा होता है: <em>"Signatures in CAPITAL LETTERS will not be accepted."</em> कैपिटल अक्षरों में उम्मीदवार के प्रामाणिक हस्तलेखन स्ट्रोक्स (Handwriting Strokes) की पहचान नहीं हो पाती, जिससे दस्तावेज सत्यापन के समय प्रतिरूपण (Impersonation) का खतरा रहता है। हमेशा सादे सफेद कागज पर काले बॉलपॉइंट पेन से रनिंग कर्सिव राइटिंग में सामान्य हस्ताक्षर करें और फाइल साइज <strong>10 KB से 20 KB</strong> के बीच रखें।
            </p>
          </div>
        </div>
      </div>

      <h2>🚀 तुरंत लागू करने योग्य 4 मुख्य कदम</h2>
      <ol class="space-y-2 my-4">
        <li><strong>प्रीलिम्स:</strong> कमजोर पजल प्रारूपों की पहचान कर दैनिक अभ्यास से रीजनिंग में 40/40 का लक्ष्य रखें। क्वांट में 5-चरणीय स्प्रिंट का पालन करें और 40 सेकंड से अधिक लेने वाले किसी भी प्रश्न को तुरंत छोड़ें।</li>
        <li><strong>मेन्स स्कोर कुशन:</strong> कंप्यूटर नॉलेज (सचिन अरोड़ा सर) और इंग्लिश (रानी मैम) में अधिकतम अंक अर्जित करके सेक्शनल कट-ऑफ से भारी सुरक्षा बढ़त हासिल करें।</li>
        <li><strong>GA याद रखने का नियम:</strong> थका देने वाली 100 पेज की PDFs के स्थान पर शीतल मैम के साप्ताहिक यूट्यूब वीडियो 1.5x/2x पर देखें और परीक्षा से पूर्व के 4 महीनों के लिए 3-बार रिवीजन का नियम सख्ती से लागू करें।</li>
        <li><strong>इंटरव्यू सुरक्षा कवच:</strong> बैंकिंग अवेयरनेस और ग्रेजुएशन डिग्री वाइवा को कभी भी मेन्स रिजल्ट घोषित होने तक न टालें। ग्रामीण बैंकिंग की बुनियादी अवधारणाएं पहले दिन से तैयार रखें ताकि अंतिम चयन सुनिश्चित हो सके।</li>
      </ol>
`;

// Now let's inject quickFacts_hi, faqs_hi, and contentHtml_hi into the first blog post object in blogPostsData.ts
// We'll find where `relatedExamPreset: "ibps-sbi",` or `quickFacts: [` is located in the first post.

// Let's replace the first post's quickFacts and faqs to also have quickFacts_hi and faqs_hi, plus contentHtml_hi
const firstPostRegex = /(slug:\s*"ibps-rrb-po-prelims-mains-preparation-strategy-interview-guide",[\s\S]*?)(contentHtml:\s*`[\s\S]*?`\s*\n\s*},)/;

const match = content.match(firstPostRegex);
if (!match) {
  console.error("Could not find the first post in blogPostsData.ts!");
  process.exit(1);
}

// Build the updated first post
let firstPostBlock = match[1];

// Add quickFacts_hi after quickFacts
const quickFactsSerialized = JSON.stringify(quickFacts_hi, null, 6).replace(/^/gm, '    ').trim();
firstPostBlock = firstPostBlock.replace(
  /quickFacts:\s*\[[\s\S]*?\],/,
  (qfMatch) => `${qfMatch}\n    quickFacts_hi: ${quickFactsSerialized},`
);

// Add faqs_hi after faqs
const faqsSerialized = JSON.stringify(faqs_hi, null, 6).replace(/^/gm, '    ').trim();
firstPostBlock = firstPostBlock.replace(
  /faqs:\s*\[[\s\S]*?\],/,
  (faqMatch) => `${faqMatch}\n    faqs_hi: ${faqsSerialized},`
);

// Now construct the final block with contentHtml and contentHtml_hi
const updatedBlock = `${firstPostBlock}contentHtml_hi: \`${contentHtml_hi}\`,\n    ${match[2]}`;

content = content.replace(firstPostRegex, updatedBlock);

fs.writeFileSync(blogPostsPath, content, 'utf8');
console.log("Successfully added quickFacts_hi, faqs_hi, and contentHtml_hi to ibps-rrb-po post!");
