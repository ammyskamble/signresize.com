import fs from 'fs';

const filePath = 'src/data/blogPostsData.ts';
let content = fs.readFileSync(filePath, 'utf8');

const slug = 'neet-ug-2026-master-guide-postcard-photo-signature-rules';
const startIdx = content.indexOf(`"slug": "${slug}"`);
if (startIdx === -1) {
  console.error('NEET post not found');
  process.exit(1);
}

// Find the end of this post object in BLOG_POSTS
// It is the last post in BLOG_POSTS array before `];`
const endArrayIdx = content.indexOf('];', startIdx);
console.log('Post start:', startIdx, 'Array end:', endArrayIdx);

const postBlock = content.substring(startIdx, endArrayIdx);
const lastClosing = postBlock.lastIndexOf('}');
const fullEndIdx = startIdx + lastClosing;

console.log('Snippet before end:', JSON.stringify(content.substring(fullEndIdx - 100, fullEndIdx + 2)));

const contentHtml_mr = `
<div class="space-y-6 text-foreground leading-relaxed">
  <div class="p-5 rounded-2xl bg-primary/10 border-2 border-primary/30 text-foreground space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-xl">🩺</span>
      <h3 class="text-base font-bold text-foreground">NEET UG 2026: अधिकृत मार्गदर्शक व कागदपत्रे नियम</h3>
    </div>
    <p class="text-sm text-foreground/90 leading-relaxed font-medium">
      <strong>नॅशनल टेस्टिंग एजन्सी (NTA)</strong> द्वारे घेतली जाणारी <strong>NEET UG 2026</strong> ही देशभरातील MBBS, BDS, BAMS, BHMS आणि इतर वैद्यकीय अभ्यासक्रमांच्या प्रवेशासाठी एकमेव राष्ट्रीय पात्रता परीक्षा आहे. महाराष्ट्रातील लाखो विद्यार्थी या परीक्षेला बसतात. NTA च्या नियमांनुसार <strong>पासपोर्ट फोटो (१०-२०० KB)</strong> सोबतच <strong>४×६ इंच पोस्टकार्ड आकाराचा फोटो (१०-२०० KB)</strong>, काळ्या शाईतील <strong>स्वाक्षरी (४-३० KB)</strong> आणि दोन्ही हातांच्या <strong>बोटांचे व अंगठ्याचे ठसे (१०-२०० KB)</strong> अपलोड करणे अनिवार्य आहे.
    </p>
  </div>

  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">१. NTA NEET UG 2026 कागदपत्रे व फोटो निकष</h2>
  <div class="my-6 rounded-2xl border border-border bg-card/60 overflow-hidden shadow-xs">
    <div class="overflow-x-auto scrollbar-thin">
      <table class="w-full min-w-[540px] text-xs sm:text-sm text-left border-collapse">
        <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold border-b border-border">
          <tr>
            <th class="p-3 border-r border-border/70">कागदपत्र प्रकार</th>
            <th class="p-3 border-r border-border/70">अधिकृत आकार</th>
            <th class="p-3">महत्त्वाचे नियम</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border/70 text-slate-800 dark:text-slate-200">
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
            <td class="p-3 font-bold border-r border-border/70">पासपोर्ट फोटो</td>
            <td class="p-3 font-mono border-r border-border/70">१० KB ते २०० KB</td>
            <td class="p-3">८०% चेहरा, पांढरी पार्श्वभूमी, कान स्पष्ट दिसावेत</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
            <td class="p-3 font-bold border-r border-border/70">पोस्टकार्ड फोटो (४×६ इंच)</td>
            <td class="p-3 font-mono border-r border-border/70">१० KB ते २०० KB</td>
            <td class="p-3">खाली उमेदवाराचे नाव व फोटो काढलेली तारीख असावी</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
            <td class="p-3 font-bold border-r border-border/70">स्वाक्षरी (Signature)</td>
            <td class="p-3 font-mono border-r border-border/70">४ KB ते ३० KB</td>
            <td class="p-3">काळी शाई, चालू हस्ताक्षर (कॅपिटल अक्षरे वर्ज्य)</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
            <td class="p-3 font-bold border-r border-border/70">१० बोटांचे ठसे</td>
            <td class="p-3 font-mono border-r border-border/70">१० KB ते २०० KB</td>
            <td class="p-3">डाव्या व उजव्या हाताची सर्व बोटे व अंगठे (निळी शाई)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <h2 class="text-xl font-bold text-foreground mt-8 mb-3">२. ऑनलाइन रिसाइझिंग टूल</h2>
  <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
    <h4 class="text-base font-bold text-foreground">NEET UG फोटो व स्वाक्षरी अचूक रिसाइझ करा</h4>
    <p class="text-sm text-muted-foreground mt-1">
      आमच्या समर्पित टूलचा वापर करून NTA च्या अधिकृत मानकांनुसार पासपोर्ट व पोस्टकार्ड फोटो एका सेकंदात तयार करा.
    </p>
    <div class="flex flex-wrap gap-2.5 mt-3">
      <a href="/neet-photo-resize/" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-90 transition">
        <span>📸 NEET फोटो रिसाइझर</span> &rarr;
      </a>
      <a href="/nta-neet-jee-signature-resize/" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-card hover:bg-muted text-foreground border border-border font-semibold text-xs transition">
        <span>✍️ NEET स्वाक्षरी रिसाइझर (४–३० KB)</span> &rarr;
      </a>
    </div>
  </div>
</div>`;

const isCrlf = content.includes('\r\n');
const insertText = `,\n    "title_mr": "NEET UG 2026 संपूर्ण मार्गदर्शक: नोंदणी, परीक्षा तारीख, 4x6 पोस्टकार्ड फोटो व स्वाक्षरी नियम",\n    "metaTitle_mr": "NEET UG 2026 मार्गदर्शक: फोटो आणि स्वाक्षरी नियम",\n    "metaDescription_mr": "NTA NEET UG 2026 संपूर्ण मराठी मार्गदर्शक: 4x6 पोस्टकार्ड फोटो, पासपोर्ट फोटो, स्वाक्षरी आणि बोटांचे ठसे नियम.",\n    "excerpt_mr": "NEET UG 2026 चे सविस्तर विश्लेषण: NTA नोंदणी प्रक्रिया, ७२० गुण परीक्षा स्वरूप, ८०% चेहरा पांढरी पार्श्वभूमी पोस्टकार्ड फोटो आणि आरक्षण नियम.",\n    "contentHtml_mr": ${JSON.stringify(contentHtml_mr.trim())}`;

content = content.substring(0, fullEndIdx) + (isCrlf ? insertText.replace(/\n/g, '\r\n') : insertText) + content.substring(fullEndIdx);

fs.writeFileSync(filePath, content, 'utf8');
console.log('✓ Successfully added Marathi version to NEET UG post!');
