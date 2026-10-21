import fs from 'fs';
import path from 'path';

const dataFilePath = path.resolve('src/data/blogPostsData.ts');
let fileContent = fs.readFileSync(dataFilePath, 'utf8');

const slug = "ibps-rrb-po-prelims-mains-preparation-strategy-interview-guide";
const postStart = fileContent.indexOf(`slug: "${slug}"`);
if (postStart === -1) {
  console.error("Could not find post start");
  process.exit(1);
}

// 1. Updated expanded FAQs array covering all user queries and Hinglish common search terms
const updatedFaqs = [
  {
    question: "Is paid coaching necessary to clear IBPS RRB PO Prelims and Mains?",
    answer: "No. ==Thousands of candidates, including repeat Mains qualifiers from high-cutoff states like Uttar Pradesh, clear IBPS RRB PO entirely through free YouTube lectures and consistent sectional mock analysis==. Platforms like YouTube offer complete playlists for Speed Maths (Harshal Agrawal), Reasoning (Sanjay Sir or Puneet Sir), English (Rani Ma'am or Nimisha Bansal Ma'am), Computer Knowledge (Sachin Arora Sir), and Current Affairs (Sheetal Ma'am)."
  },
  {
    question: "Kya RRB PO Prelims me English aati hai? English weak hone par prelims qualify ho sakta hai?",
    answer: "Bilkul. ==RRB PO Prelims me English ka koi section nahi hota—sirf Reasoning (40 Qs) aur Quantitative Aptitude (40 Qs) aate hain (Total 80 Qs, 45 Mins)==. Iska matlab hai ki English weak hone par bhi aap prelims qualify kar sakte hain. Lekin dhyan rahe: English ka score cushion na hone ki wajah se Reasoning aur Quant dono me speed aur 100% accuracy hona mandatory hai. Mains me aap English ya Hindi me se koi ek bhasha chun sakte hain."
  },
  {
    question: "How can an aspirant score 40/40 in the RRB PO Reasoning Prelims section?",
    answer: "Achieving a perfect 40/40 in Reasoning requires ==isolating your weakest puzzle formats (such as floor-flat, uncertain linear rows, or blood relations) and practicing at least 4 sets of that exact puzzle type daily==. Additionally, always skip tricky 'meaningful word' questions until the very end and master question selection to avoid puzzle traps during the 45-minute sprint."
  },
  {
    question: "Speed Maths me consistency kaise laye? Ek question 30 sec me banta hai to agla 1 minute kyu leta hai?",
    answer: "Jab koi calculation question 40 second se zyada lene lage, ==to uspar time waste karne ke bajaye turant Mark for Review karke aage badhein==. Speed maths me daily 1-30 tables, 1-50 squares, 1-30 cubes aur percentage-to-fraction values ka 15-minute quick recall karein. Simplification me hamesha unit digit aur digital root concepts apply karein taaki lengthy calculation se bacha ja sake."
  },
  {
    question: "Current Affairs ke liye 100-page monthly PDF padhein ya video lectures dekhein? Sir dard hota hai PDF se.",
    answer: "Agar dense 100-page monthly PDFs se headache aur burnout hota hai, ==to Sheetal Ma'am ya kisi top educator ke weekly & fortnightly video lectures 1.5x ya 2x speed me dekhein aur unka 3-Time Revision Rule follow karein==. Sirf video dekh lene se retain nahi hota; exam se pehle har lecture ko 3 baar revise karna zaroori hai. Sath me monthly RBI circulars aur Banking Awareness zaroor cover karein."
  },
  {
    question: "Computer Knowledge me Sachin Arora sir ke YouTube videos enough hain kya 16+ marks ke liye?",
    answer: "Haan, ==Sachin Arora sir ke YouTube videos aur playlists Computer section me 15–18 marks laane ke liye more than enough hain, koi paid batch lene ki zaroorat nahi hai==. Computer me 40 questions ke 20 marks hote hain (0.5x weightage), lekin ye 40 questions sirf 10–12 minute me solve ho jate hain. MS Office shortcuts, OSI model, networking, DBMS basics aur cybersecurity terms ke self-notes banayein."
  },
  {
    question: "RRB PO Interview me B.Tech / Non-Commerce graduation background se kya puchte hain?",
    answer: "Interview panel aapke degree background par deep technical questions puchta hai to test your academic foundation. ==B.Tech CS/IT candidates se DBMS SQL queries, network topologies, cyber security in banking, aur digital payment API gateway par sawal puche jate hain==. Candidates ko ye clear justification prepare karna chahiye ki unki technical degree rural banking operations aur digital financial inclusion me kaise madad karegi."
  },
  {
    question: "Banking Awareness me exact kya puchte hain RRB PO interview me?",
    answer: "RRB PO interview panel primarily rural banking infrastructure par test karta hai: ==RRB shareholding structure (Central Govt 50%, Sponsor Bank 35%, State Govt 15%), NABARD ka working role, Priority Sector Lending (PSL) targets (RRB ke liye 75%), Kisan Credit Card (KCC) limits, Lead Bank Scheme, aur SHG-Bank linkage models==. Isko Mains exam ke sath hi prepare karna shuru karein."
  },
  {
    question: "IBPS form me Capital Letters me Signature kyu reject hota hai?",
    answer: "IBPS official notification me explicitly stated hota hai: ==\"Signatures in CAPITAL LETTERS will not be accepted\"==. Block capital letters me candidate ke individual forensic handwriting stroke characteristics verify nahi ho pate. Hamesha plain white paper par black ballpoint pen se running cursive handwriting me sign karein aur file size 10 KB se 20 KB ke beech rakhein."
  },
  {
    question: "What are the exact photo and signature upload requirements for IBPS RRB?",
    answer: "IBPS mandates a ==passport photograph of 20 KB to 50 KB (200x230 pixels, white background) and a signature of 10 KB to 20 KB (140x60 pixels, black ballpoint ink)==. You must also upload a Left Thumb Impression (20-50 KB) and a Handwritten Declaration in English (50-100 KB)."
  }
];

// Locate faqs array and replace
const faqsStart = fileContent.indexOf("faqs: [", postStart);
const faqsEnd = fileContent.indexOf("contentHtml: `", faqsStart);
if (faqsStart === -1 || faqsEnd === -1) {
  console.error("Could not find faqs range");
  process.exit(1);
}

const faqsFormatted = "faqs: " + JSON.stringify(updatedFaqs, null, 6) + ",\n    ";
fileContent = fileContent.slice(0, faqsStart) + faqsFormatted + fileContent.slice(faqsEnd);

// Now locate contentHtml and add section 6: Aspirants Ke Common Doubts (Hinglish & English)
const contentHtmlStart = fileContent.indexOf("contentHtml: `", postStart);
const contentHtmlEnd = fileContent.indexOf("`\n  },", contentHtmlStart);

let html = fileContent.slice(contentHtmlStart + "contentHtml: `\n".length, contentHtmlEnd);

// Check if section 6 already exists
if (!html.includes("Aspirants Ke Common Doubts")) {
  const targetInsertion = "<h2>Summary: The Candidate's 4 Core Action Items</h2>";
  const targetIdx = html.indexOf(targetInsertion);
  if (targetIdx === -1) {
    console.error("Could not find target insertion point in html");
    process.exit(1);
  }

  const hinglishSection = `
      <!-- FUNCTIONAL GRAPHIC 3: ASPIRANTS KE REAL DOUBTS & HINGLISH QUERIES -->
      <div class="my-8 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border border-cyan-500/30 p-5 sm:p-7 shadow-2xl backdrop-blur-md text-slate-100">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-800">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-[11px] font-bold uppercase tracking-wider">
              <span>💬 Real Candidate Q&amp;A</span>
            </div>
            <h4 class="text-lg font-bold text-white mt-1">Aspirants Ke Common Doubts &amp; Authentic Answers (Hinglish &amp; English)</h4>
          </div>
          <span class="text-xs text-amber-400 font-mono font-semibold">Community Verified Answers</span>
        </div>

        <p class="text-xs text-slate-300 mt-3 mb-6">
          Banking exam forums (Reddit, Telegram, YouTube) par har saal lakhon aspirants yehi specific sawaal puchte hain. Candidate ke real experiences aur official IBPS guidelines ke aadhar par inke exact solutions:
        </p>

        <div class="space-y-4">
          <!-- Query 1 -->
          <div class="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">Doubt 1</span>
              <h5 class="font-bold text-white text-sm">Kya RRB PO Prelims me English aati hai? English weak hone par nikal sakta hai?</h5>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed pl-1 sm:pl-3 border-l-2 border-cyan-500/30">
              <strong class="text-cyan-300">Answer:</strong> <strong>Bilkul!</strong> RRB PO Prelims me English ka koi section nahi hota—sirf <strong>Reasoning (40 Qs)</strong> aur <strong>Quantitative Aptitude (40 Qs)</strong> aate hain (Total 80 Qs, 45 Minutes). Agar aapki English weak hai to prelims me koi dikkat nahi aayegi. Lekin yaad rakhein: English ka backup na hone ki wajah se Reasoning aur Quant dono me cut-throat speed aur 100% accuracy hona zaroori hai. Mains me aap English ya Hindi me se kisi ek language ko choose kar sakte hain.
            </p>
          </div>

          <!-- Query 2 -->
          <div class="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">Doubt 2</span>
              <h5 class="font-bold text-white text-sm">Speed Maths me consistency nahi aa rahi: Ek question 30 sec me banta hai to agla 1 minute le leta hai?</h5>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed pl-1 sm:pl-3 border-l-2 border-cyan-500/30">
              <strong class="text-cyan-300">Answer:</strong> Ye common friction calculation traps ki wajah se hota hai. <strong>Strict 40-Second Bailout Rule</strong> follow karein: Agar simplification ya number series me 40 second ke andar pattern ya answer nahi dikhta, to us question se ego satisfy karne ke bajaye turant skip karke aage badhein. Daily 15 minute Vedic maths tricks (squares up to 50, cubes up to 30, tables up to 30, aur percentage-to-fraction values 1/1 to 1/20) revise karein.
            </p>
          </div>

          <!-- Query 3 -->
          <div class="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">Doubt 3</span>
              <h5 class="font-bold text-white text-sm">GA ke liye 100-page monthly PDFs se sir me dard hota hai, video lectures enough hain kya?</h5>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed pl-1 sm:pl-3 border-l-2 border-cyan-500/30">
              <strong class="text-cyan-300">Answer:</strong> Agar heavy monthly PDF capsules se information overload aur fatigue hota hai, to <strong>Sheetal Ma'am</strong> (YouTube) ke weekly aur fortnightly videos ko 1.5x ya 2x speed me dekhein. Lekin <strong>3-Time Revision Rule</strong> mandatory hai: lecture sirf ek baar dekhne se facts yaad nahi rehte, exam se pehle har lecture ko 3 baar revise karein. Exam se theek pehle ke <strong>4 months</strong> thoroughly cover karein aur sath me monthly RBI circulars zaroor dekhein.
            </p>
          </div>

          <!-- Query 4 -->
          <div class="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">Doubt 4</span>
              <h5 class="font-bold text-white text-sm">Computer Knowledge me Sachin Arora sir ke YouTube videos enough hain kya? Paid batch lena zaroori hai?</h5>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed pl-1 sm:pl-3 border-l-2 border-cyan-500/30">
              <strong class="text-cyan-300">Answer:</strong> <strong>YouTube videos 100% enough hain, paid batch ki koi need nahi hai.</strong> Sachin Arora sir ke marathon aur topic-wise playlists se MS Office shortcuts, OSI layers, networking topologies, database (DBMS) concepts, aur cybersecurity terms ache se cover ho jate hain. Computer section me 40 Qs sirf 10–12 minutes me ho jate hain aur 15–18 marks asani se bank ho jate hain.
            </p>
          </div>

          <!-- Query 5 -->
          <div class="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">Doubt 5</span>
              <h5 class="font-bold text-white text-sm">Interview panel B.Tech ya non-commerce background walo se kyu deep graduation questions puchta hai?</h5>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed pl-1 sm:pl-3 border-l-2 border-cyan-500/30">
              <strong class="text-cyan-300">Answer:</strong> Board check karta hai ki aapne apni degree kitni honesty aur depth ke sath complete ki hai. B.Tech CS/IT graduates se networking, database queries, core banking software architecture, UPI gateways, aur cyber fraud prevention par technical viva hota hai. Candidate ko ye justify karna hota hai ki unka engineering mindset aur computer expertise rural banking digitization me kaise contribute karega.
            </p>
          </div>

          <!-- Query 6 -->
          <div class="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">Doubt 6</span>
              <h5 class="font-bold text-white text-sm">IBPS application form me CAPITAL letters me Signature kyu reject ho jata hai?</h5>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed pl-1 sm:pl-3 border-l-2 border-cyan-500/30">
              <strong class="text-cyan-300">Answer:</strong> IBPS ke official notice me clearly likha hota hai: <em>"Signatures in CAPITAL LETTERS will not be accepted."</em> Capital letters me kisi candidate ke authentic handwriting strokes identify nahi kiye ja sakte, jisse document verification ke dauran impersonation ka risk rehta hai. Hamesha plain white sheet par black ballpoint pen se running cursive hand me sign karein aur size strictly <strong>10 KB se 20 KB</strong> rakhein.
            </p>
          </div>
        </div>
      </div>
`;

  const updatedHtml = html.slice(0, targetIdx) + hinglishSection + "\n      " + html.slice(targetIdx);
  
  // Re-assemble in fileContent
  fileContent = fileContent.slice(0, contentHtmlStart + "contentHtml: `\n".length) + updatedHtml.trim() + "\n    " + fileContent.slice(contentHtmlEnd);
  
  fs.writeFileSync(dataFilePath, fileContent, 'utf8');
  console.log("Successfully inserted Hinglish aspirant queries into contentHtml and expanded faqs array!");
} else {
  console.log("Hinglish section already present in contentHtml, updating faqs array only.");
  fs.writeFileSync(dataFilePath, fileContent, 'utf8');
}
