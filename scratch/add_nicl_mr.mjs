import fs from 'fs';

const filePath = 'src/data/blogPostsData.ts';
let content = fs.readFileSync(filePath, 'utf8');

const anchor = 'NICL फोटो एवं हस्ताक्षर रीसाइजर टूल</a> का उपयोग करें।';
const idx = content.indexOf(anchor);
if (idx === -1) {
  console.error('Anchor not found');
  process.exit(1);
}

const closingTag = content.indexOf('`,\r\n  },', idx) !== -1 ? '`,\r\n  },' : '`,\n  },';
const closeIdx = content.indexOf(closingTag, idx);

const contentHtml_mr = `
<div class="space-y-6 text-foreground leading-relaxed">
  <div class="p-5 rounded-2xl bg-primary/10 border-2 border-primary/30 text-foreground space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-xl">🏛️</span>
      <h3 class="text-base font-bold text-foreground">महत्त्वाचा सारांश: NICL असिस्टंट भरती 2026</h3>
    </div>
    <p class="text-sm text-foreground/90 leading-relaxed font-medium">
      <strong>नॅशनल इन्शुरन्स कंपनी लिमिटेड (NICL)</strong> ने देशभरातील विभागीय कार्यालयांमध्ये <strong>५०० असिस्टंट (Class-III Cadre)</strong> पदांसाठी अधिकृत भरती जाहीर केली आहे. ऑगस्ट २०२६ मध्ये झालेल्या पूर्व परीक्षेनंतर <strong>फेज-II (मुख्य) ऑनलाइन परीक्षा ३० ऑक्टोबर २०२६</strong> रोजी घेतली जात आहे. सुधारित वेतन करारानुसार निवड झालेल्या उमेदवारांना <strong>₹३६,२९० मूळ वेतन</strong> व महानगरांमध्ये सुमारे <strong>₹६३,००० एकूण मासिक वेतन</strong> मिळते. अंतिम निवडीसाठी <strong>प्रादेशिक भाषा चाचणी (RLT)</strong> उत्तीर्ण होणे आणि पोर्टलच्या नियमांनुसार फोटो (२०० × २३० px, २०–५० KB), स्वाक्षरी (१४० × ६० px, १०–२० KB काळी शाई), डाव्या हाताचा अंगठा (२४० × २४० px, २०–५० KB) आणि हस्तलिखित घोषणा (८०० × ४०० px, ५०–१०० KB) अपलोड करणे बंधनकारक आहे.
    </p>
  </div>

  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">१. भरती वेळापत्रक आणि महत्त्वाच्या तारखा</h2>
  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs">
    <div class="overflow-x-auto scrollbar-thin">
      <table class="w-full min-w-[540px] text-xs sm:text-sm text-left border-collapse">
        <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold border-b border-border">
          <tr>
            <th class="p-3 border-r border-border/70">टप्पा</th>
            <th class="p-3 border-r border-border/70">अधिकृत तारीख</th>
            <th class="p-3">तपशील</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border/70 text-slate-800 dark:text-slate-200">
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
            <td class="p-3 font-bold border-r border-border/70">एकूण पदे</td>
            <td class="p-3 font-mono font-semibold border-r border-border/70">५०० पदे</td>
            <td class="p-3">सर्व राज्ये आणि केंद्रशासित प्रदेश</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
            <td class="p-3 font-bold border-r border-border/70">फेज-२ मुख्य परीक्षा</td>
            <td class="p-3 font-mono font-bold text-primary border-r border-border/70">३० ऑक्टोबर २०२६</td>
            <td class="p-3">ऑनलाइन संगणक परीक्षा (CBT)</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
            <td class="p-3 font-bold border-r border-border/70">वेतनश्रेणी</td>
            <td class="p-3 font-mono font-semibold border-r border-border/70">₹३६,२९० मूळ वेतन</td>
            <td class="p-3">एकूण दरमहा अंदाजे ₹६३,०००</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">२. मुख्य परीक्षेचे स्वरूप (Mains Pattern)</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    NICL असिस्टंट मुख्य परीक्षेत २०० प्रश्न २०० गुणांसाठी विचारले जातात आणि एकूण वेळ १२० मिनिटे असते. प्रत्येक चुकीच्या उत्तरासाठी १/४ (०.२५) गुण वजा केले जातात.
  </p>

  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">३. कागदपत्रे व स्वाक्षरी निकष</h2>
  <div class="my-6 p-4 rounded-xl bg-card border border-border shadow-xs">
    <p class="text-sm font-semibold text-foreground">
      कागदपत्रे अचूक आकारात तयार करण्यासाठी आमच्या <a href="/nicl-ao-signature-resize/" class="text-primary underline font-bold">NICL फोटो व स्वाक्षरी रिसाइझर टूल</a> चा वापर करा.
    </p>
  </div>
</div>`;

const isCrlf = content.includes('\r\n');
const nl = isCrlf ? '\r\n' : '\n';

const insertText = `\`,\n    contentHtml_mr: \`${contentHtml_mr.trim()}\`,\n  },`;

content = content.substring(0, closeIdx) + (isCrlf ? insertText.replace(/\n/g, '\r\n') : insertText) + content.substring(closeIdx + closingTag.length);

fs.writeFileSync(filePath, content, 'utf8');
console.log('✓ Successfully injected contentHtml_mr to NICL Assistant post!');
