import fs from 'fs';
import path from 'path';

const dataFilePath = path.resolve('src/data/blogPostsData.ts');
let fileContent = fs.readFileSync(dataFilePath, 'utf8');

// The new enhanced contentHtml with functional structural graphics:
// 1. Quant 5-Stage Execution Flowchart (Dark indigo, cyan, gold accents, glassmorphic, responsive SVG arrows)
// 2. Mains Scoring Weightage Multiplier Visualization (1.25x vs 0.5x vs 1.0x efficiency matrix)
// 3. Official IBPS Document Compliance Checklist with elevated utility cards
const updatedContentHtml = `
      <h2>Direct Verdict: The Realistic Path to IBPS RRB PO</h2>
      <p>Cracking the <strong>IBPS RRB Officer Scale 1 (PO)</strong> examination without expensive paid coaching is completely feasible. This comprehensive guide synthesizes verified empirical insights from a candidate who cleared both Prelims and Mains from <strong>Uttar Pradesh in the General Category</strong> across two consecutive recruitment cycles (2024 and 2025). By adhering to strict question selection in Prelims, exploiting Computer and English score boosters in Mains, and avoiding late-stage interview pitfalls, aspirants can secure selection with disciplined execution.</p>

      <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
        <div class="flex items-center justify-between text-slate-400 text-[11px]">
          <span>⚡ Empirical Candidate Benchmark Summary</span>
          <span>UP General Category</span>
        </div>
        <pre class="overflow-x-auto text-emerald-400"><code>Reasoning Prelims:  40 / 40 Score Achieved (Both 2024 &amp; 2025)
Mains Score Cushion: Maximize Computer (20M) + English (40M)
Current Affairs:     Last 4 Months | 3x Mandatory Video Revision
Fatal Pitfall:       Ignoring Banking Awareness &amp; Degree Background in Interview</code></pre>
      </div>

      <h2>⚡ 1. Exam Pattern &amp; Selection Journey Architecture</h2>
      <p>IBPS RRB PO features a distinct structure compared to standard IBPS PO and SBI PO exams. Most notably, <strong>there is no English Language section in the Prelims</strong>. This means you cannot rely on language skills to compensate for gaps in mathematical speed or logical deduction.</p>

      <div class="my-8 p-6 rounded-2xl bg-card border border-border">
        <h4 class="text-base font-bold text-foreground mb-4">IBPS RRB Officer Scale 1 Selection Funnel</h4>
        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-muted/40 border border-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-primary">Stage 1: Speed Sprint</span>
              <h5 class="text-sm font-bold text-foreground">Prelims Examination (80 Questions | 80 Marks | 45 Mins Composite)</h5>
              <p class="text-xs text-muted-foreground mt-0.5">Reasoning (40 Qs) + Quantitative Aptitude (40 Qs). Strict sectional cutoffs plus overall state cutoffs.</p>
            </div>
            <span class="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs shrink-0">Qualifying</span>
          </div>

          <div class="p-4 rounded-xl bg-muted/40 border border-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-primary">Stage 2: Knowledge &amp; Strategy</span>
              <h5 class="text-sm font-bold text-foreground">Mains Examination (200 Questions | 200 Marks | 120 Mins Composite)</h5>
              <p class="text-xs text-muted-foreground mt-0.5">Reasoning (50M), Quant (50M), GA (40M), English/Hindi (40M), Computer Knowledge (20M).</p>
            </div>
            <span class="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs shrink-0">80% Final Merit</span>
          </div>

          <div class="p-4 rounded-xl bg-muted/40 border border-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-primary">Stage 3: Personality &amp; Banking Domain</span>
              <h5 class="text-sm font-bold text-foreground">Personal Interview (100 Marks | Coordinated by Nodal RRBs &amp; NABARD)</h5>
              <p class="text-xs text-muted-foreground mt-0.5">Banking Awareness, Rural Economics, Priority Sector Lending, and Graduation Discipline Viva.</p>
            </div>
            <span class="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-xs shrink-0">20% Final Merit</span>
          </div>
        </div>
      </div>

      <!-- FUNCTIONAL GRAPHIC 1: MAINS SCORING WEIGHTAGE & MULTIPLIER MATRIX -->
      <div class="my-8 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-slate-100 border border-cyan-500/30 p-5 sm:p-7 shadow-2xl backdrop-blur-md">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-800">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-[11px] font-bold uppercase tracking-wider">
              <span>📊 Data Visualization</span>
            </div>
            <h4 class="text-lg font-bold text-white mt-1">Mains Scoring Weightage &amp; Multiplier Architecture</h4>
          </div>
          <div class="text-xs text-slate-400 font-mono">
            Total: <span class="text-cyan-400 font-bold">200 Qs</span> = <span class="text-amber-400 font-bold">200 Marks</span> (120 Mins)
          </div>
        </div>

        <p class="text-xs text-slate-300 mt-3 mb-6">
          IBPS applies differential weighting across Mains subjects. Reasoning and Quantitative Aptitude award <strong class="text-cyan-300">1.25 marks per question</strong>, while Computer Knowledge applies a <strong class="text-amber-300">0.50 multiplier</strong>. Strategic candidates exploit this asymmetry:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- 1.25x High Yield Multiplier -->
          <div class="p-4 rounded-xl bg-slate-800/80 border-2 border-cyan-400/40 relative overflow-hidden flex flex-col justify-between">
            <div class="absolute -right-6 -top-6 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl pointer-events-none"></div>
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-slate-300 uppercase tracking-wide">High-Yield Locomotive</span>
                <span class="px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-mono font-bold text-xs">1.25&times; Multiplier</span>
              </div>
              <h5 class="text-base font-bold text-white">Reasoning &amp; Quant</h5>
              <div class="mt-3 space-y-1 text-xs text-slate-300">
                <div class="flex justify-between py-1 border-b border-slate-700/60">
                  <span>Questions Each:</span>
                  <span class="font-mono font-bold text-white">40 Qs</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-700/60">
                  <span>Marks Awarded:</span>
                  <span class="font-mono font-bold text-cyan-300">50 Marks Each</span>
                </div>
                <div class="flex justify-between py-1">
                  <span>Total Combined:</span>
                  <span class="font-mono font-bold text-white">80 Qs &rarr; 100 Marks (50%)</span>
                </div>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-cyan-200/90 font-medium">
              💡 Every 4 correct answers yield 5 marks. Highest numerical return on clean accuracy.
            </div>
          </div>

          <!-- 1.0x Flat Multiplier -->
          <div class="p-4 rounded-xl bg-slate-800/60 border border-slate-700 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-slate-300 uppercase tracking-wide">Core Differentiators</span>
                <span class="px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 font-mono font-bold text-xs">1.00&times; Flat</span>
              </div>
              <h5 class="text-base font-bold text-white">GA &amp; English / Hindi</h5>
              <div class="mt-3 space-y-1 text-xs text-slate-300">
                <div class="flex justify-between py-1 border-b border-slate-700/60">
                  <span>Questions Each:</span>
                  <span class="font-mono font-bold text-white">40 Qs</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-700/60">
                  <span>Marks Awarded:</span>
                  <span class="font-mono font-bold text-indigo-300">40 Marks Each</span>
                </div>
                <div class="flex justify-between py-1">
                  <span>Total Combined:</span>
                  <span class="font-mono font-bold text-white">80 Qs &rarr; 80 Marks (40%)</span>
                </div>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-indigo-200/90 font-medium">
              💡 GA and Language create the state-cutoff margin without consuming heavy calculation time.
            </div>
          </div>

          <!-- 0.50x Time ROI Champion -->
          <div class="p-4 rounded-xl bg-slate-800/80 border-2 border-amber-400/40 relative overflow-hidden flex flex-col justify-between">
            <div class="absolute -right-6 -top-6 w-20 h-20 bg-amber-500/10 rounded-full blur-xl pointer-events-none"></div>
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-slate-300 uppercase tracking-wide">Time ROI Champion</span>
                <span class="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-400/40 font-mono font-bold text-xs">0.50&times; Deflator</span>
              </div>
              <h5 class="text-base font-bold text-white">Computer Knowledge</h5>
              <div class="mt-3 space-y-1 text-xs text-slate-300">
                <div class="flex justify-between py-1 border-b border-slate-700/60">
                  <span>Total Questions:</span>
                  <span class="font-mono font-bold text-white">40 Qs</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-700/60">
                  <span>Marks Awarded:</span>
                  <span class="font-mono font-bold text-amber-300">20 Marks</span>
                </div>
                <div class="flex justify-between py-1">
                  <span>Time Required:</span>
                  <span class="font-mono font-bold text-emerald-400">10 &ndash; 12 Mins Only!</span>
                </div>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-amber-200/90 font-medium">
              ⚡ Deceptive advantage: Takes just 15 seconds per question to bank an easy 15–18 net marks!
            </div>
          </div>
        </div>
      </div>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-3 border-b">Section</th>
              <th class="p-3 border-b">Questions</th>
              <th class="p-3 border-b">Maximum Marks</th>
              <th class="p-3 border-b">Strategic Role</th>
              <th class="p-3 border-b">🏆 Target Score Range</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            <tr>
              <td class="p-3 font-semibold text-foreground">Reasoning (Prelims)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3">Primary scoring locomotive; zero margin for error</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">38 – 40 / 40</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-foreground">Quantitative Aptitude (Prelims)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3">Speed maths + fast DI selection; skip calculation traps</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">22 – 28 / 40</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-foreground">Reasoning (Mains)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">50 (1.25x weight)</td>
              <td class="p-3">Critical Reasoning + selective multi-variable puzzles</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">28 – 35 / 50</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-foreground">Quantitative Aptitude (Mains)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">50 (1.25x weight)</td>
              <td class="p-3">Concept-heavy Arithmetic, Caselets, and Data Sufficiency</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">18 – 24 / 50</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-foreground">English / Hindi Language (Mains)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">40 (1.0x weight)</td>
              <td class="p-3">Crucial cutoff enhancer; high accuracy in RC &amp; Error Spotting</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">28 – 34 / 40</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-foreground">Computer Knowledge (Mains)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">20 (0.5x weight)</td>
              <td class="p-3">High-yield conversion; 10 minutes investment for 16+ marks</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">14 – 18 / 20</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-foreground">General Awareness (Mains)</td>
              <td class="p-3 font-mono">40</td>
              <td class="p-3 font-mono">40 (1.0x weight)</td>
              <td class="p-3">Rank decider; 4-month Current Affairs + RBI/Banking updates</td>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">20 – 28 / 40</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>📐 2. Prelims Killer Strategy: Scoring 40/40 in Reasoning &amp; Speed Quant</h2>
      <p>With an overall composite time limit of 45 minutes for 80 questions, time allocation is your primary tactical decision. You should dedicate approximately <strong>22 to 24 minutes to Reasoning</strong> and <strong>21 to 23 minutes to Quantitative Aptitude</strong>.</p>

      <h3>A. Reasoning Blueprint: The 40/40 Mindset</h3>
      <p>Reasoning is the section where high-scoring candidates build their qualification buffer. Achieving 40/40 is not a fluke; it is the product of disciplined topic-specific training:</p>
      <ul>
        <li><strong>Isolate Weak Puzzle Formats:</strong> Do not solve random puzzle compilations just to hit a daily counter. Identify your specific weak categories, such as floor with flat arrangements, uncertain parallel rows, year with age calculations, or blood relation integrated puzzles. Practice at least <strong>4 puzzles of your weakest type daily</strong> on platforms like Testbook practice sections.</li>
        <li><strong>Post-Attempt Error Analysis:</strong> Never simply review your final score. Examine every case you eliminated, the conditions you misread, and the specific step that consumed excessive seconds.</li>
        <li><strong>The 'Meaningful Word' Danger Zone:</strong> Single questions asking you to form meaningful four-letter words from letter combinations carry a disproportionate risk of negative marking. Always skip these initially and attempt them at the end. Use systematic letter permutation techniques (such as those taught on Maths Mania YouTube) to confirm all valid dictionary words before marking.</li>
        <li><strong>Recommended Mentors:</strong> Free YouTube sessions by <strong>Sanjay Sir</strong> or <strong>Puneet Sir</strong> are exceptional. Sanjay Sir's guidance on question selection, specifically knowing which puzzle to skip on sight, is invaluable.</li>
      </ul>

      <h3>B. Quantitative Aptitude: The Strict 5-Stage Execution Order</h3>
      <p>In RRB PO Prelims, Quantitative Aptitude questions feature a slightly higher calculation load than clerical exams like SBI Clerk Prelims. Do not attempt questions in numerical order. Always execute in this strict five-phase flowchart:</p>

      <!-- FUNCTIONAL GRAPHIC 2: QUANT 5-STAGE PROCESS FLOWCHART -->
      <div class="my-8 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100 border border-cyan-500/40 p-5 sm:p-7 shadow-2xl backdrop-blur-md">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-800">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-[11px] font-bold uppercase tracking-wider">
              <span>⚡ Process Flowchart</span>
            </div>
            <h4 class="text-lg font-bold text-white mt-1">Quantitative Aptitude: 5-Stage Sprint Protocol</h4>
          </div>
          <div class="text-xs text-slate-400 font-mono">
            Time Budget: <span class="text-cyan-400 font-bold">21 &ndash; 23 Mins</span> | Target: <span class="text-amber-400 font-bold">25+ Accurate Marks</span>
          </div>
        </div>

        <!-- Desktop & Mobile Adaptive Flowchart Cards -->
        <div class="mt-6 space-y-4">
          <!-- Stage 1 -->
          <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 transition flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                01
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h5 class="font-bold text-white text-sm">Simplification &amp; Approximation</h5>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">Target: 4–5 Mins</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">5–6 Questions. Apply percentage-fraction conversion, Vedic digit roots, and approximate rounding.</p>
              </div>
            </div>
            <div class="shrink-0 flex items-center gap-2 text-xs font-mono">
              <span class="px-2.5 py-1 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-300 text-[11px] font-bold">
                ⛔ Bailout Rule: Skip if &gt;40s
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
          <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 transition flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                02
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h5 class="font-bold text-white text-sm">Quadratic Equations &amp; Number Series</h5>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">Target: 4–5 Mins</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">5 Qs Quadratics (Signs method in 15s) + 5 Qs Missing/Wrong Series (Difference &amp; Prime patterns).</p>
              </div>
            </div>
            <div class="shrink-0 flex items-center gap-2 text-xs font-mono">
              <span class="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-bold">
                ⚠️ Skip multi-tier cube traps
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
          <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 transition flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                03
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h5 class="font-bold text-white text-sm">Primary Straightforward DI Set</h5>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">Target: 5 Mins</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">Pick single cleanest Table or Bar Chart with direct single-variable percentages and ratios.</p>
              </div>
            </div>
            <div class="shrink-0 flex items-center gap-2 text-xs font-mono">
              <span class="px-2.5 py-1 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-300 text-[11px] font-bold">
                ⛔ Bail immediately on missing tables
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
          <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 transition flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                04
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h5 class="font-bold text-white text-sm">High-Confidence Core Arithmetic</h5>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">Target: 5–6 Mins</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">Target strongest topics: Profit &amp; Loss, Ages, Averages, Boats &amp; Streams, and 2D Mensuration.</p>
              </div>
            </div>
            <div class="shrink-0 flex items-center gap-2 text-xs font-mono">
              <span class="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold">
                ✅ Bank 4–6 High-Confidence Marks
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
          <div class="p-4 rounded-xl bg-slate-900/90 border border-amber-500/40 hover:border-amber-300 transition flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                05
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h5 class="font-bold text-white text-sm">Reserve Buffer &amp; Triage Review</h5>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">Target: 2 Mins</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">Review flagged questions where 1 calculation step remained. Zero guessing—preserve your 100% accuracy.</p>
              </div>
            </div>
            <div class="shrink-0 flex items-center gap-2 text-xs font-mono">
              <span class="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-bold">
                🛡️ Zero Negative Penalty Guard
              </span>
            </div>
          </div>
        </div>
      </div>

      <p>For Quant preparation, <strong>Harshal Agrawal</strong> on YouTube is universally recognized by successful candidates for clarity in concept application and shortcut efficiency.</p>

      <h2>⚖️ 3. Mains Subject-by-Subject Blueprint: Scoring High When Quant is Average</h2>
      <p>The biggest tactical error made by banking aspirants is preparing for Mains as if it were simply a larger Prelims. In Mains, the composite 2-hour window requires a clear subject-wise scoring priority:</p>
      <blockquote>
        <strong>The Mains Golden Rule:</strong> If your Quantitative Aptitude and advanced Reasoning abilities are average, maximize your scores in <strong>English Language and Computer Knowledge</strong>, maintain competitive baseline scores in Quant and Reasoning, and let <strong>General Awareness (GA)</strong> drive your merit ranking above the state cutoff.
      </blockquote>

      <h3>1. Reasoning in Mains (50 Marks Weighted)</h3>
      <p>With a 1.25 multiplier per question, Reasoning yields substantial score acceleration. However, labyrinthine puzzles can consume 12 minutes without producing a completed answer. To safeguard your score:</p>
      <ul>
        <li>Master <strong>Critical Reasoning (Statement &amp; Assumption, Course of Action, Cause &amp; Effect)</strong>. Free sessions by Harshal Agrawal on YouTube provide structured clarity. These questions are direct, text-based, and take under 45 seconds each.</li>
        <li>Solve 2 to 3 manageable Mains puzzles while firmly skipping trap questions with 3+ unknown parameters.</li>
      </ul>

      <h3>2. Quantitative Aptitude in Mains (50 Marks Weighted)</h3>
      <p>Do not waste preparation weeks attempting extreme CAT-level mathematics. Focus on standard Mains patterns: Arithmetic Data Interpretation, Caselets, and Data Sufficiency. A score of 20 to 24 marks in Mains Quant is completely competitive when balanced by high language and computer scores.</p>

      <h3>3. English Language (40 Marks): Follow Rani Ma'am</h3>
      <p>Mains English cannot be cleared on casual intuition. Questions feature convoluted sentence rearrangements, contextual vocabulary, and multi-paragraph reading comprehensions. Consistent practice with <strong>Rani Ma'am</strong> (or Nimisha Bansal Ma'am) helps develop the reading stamina required to digest complex editorial passages under clock pressure.</p>

      <h3>4. Computer Knowledge (20 Marks / 40 Questions): Follow Sachin Arora Sir</h3>
      <p>Computer Knowledge is the single highest return on investment in the RRB PO syllabus. Many candidates make the mistake of leaving it until the final 5 days before the exam. Following <strong>Sachin Arora Sir</strong> on YouTube allows you to methodically cover MS Office shortcuts, OSI model layers, networking topologies, database management basics (DBMS), and cybersecurity terms. A candidate scoring 16/20 in Computer gains a decisive edge over peers scoring 7 or 8.</p>

      <h3>5. General Awareness: The 3x Video Revision Rule</h3>
      <p>General Awareness in RRB PO is notoriously analytical and covers deep banking operations. Aspirants often struggle when trying to read 120-page monthly compilation PDFs, resulting in information overload, fatigue, and poor recall on exam day. The verified alternative method is structured video revision:</p>
      <ul>
        <li><strong>Follow Sheetal Ma'am (YouTube):</strong> Her weekly and fortnightly video wrap-ups provide balanced, syllabus-focused coverage without unnecessary clutter.</li>
        <li><strong>Playback at 1.5x / 2x Speed:</strong> Watch weekly and fortnightly sessions at accelerated playback to cover extensive material efficiently.</li>
        <li><strong>The 3-Time Revision Rule:</strong> Merely watching a lecture once does not equal preparation. Every lecture must be revised at least three times before the exam to lock names, figures, and scheme dates into memory.</li>
        <li><strong>The 4-Month Time Window:</strong> Focus thoroughly on the 4 months immediately preceding the exam date. For a December examination, master September, October, November, and the first 10 days of December.</li>
        <li><strong>Dedicated Banking &amp; Regulatory Focus:</strong> Supplement general news with monthly recaps of RBI notifications, Priority Sector Lending (PSL) rules, NABARD guidelines, and SEBI regulations.</li>
      </ul>

      <h2>💡 4. The Interview Trap: Banking Awareness &amp; Academic Background Defense</h2>
      <p>Reaching the interview stage twice in a row without final selection is an agonizing reality faced by many serious aspirants. Understanding why this happens provides a vital strategic lesson:</p>

      <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-red-500/10 to-card border-2 border-red-500/30">
        <h4 class="text-base font-bold text-foreground">⚠️ The Two Deadly Interview Vulnerabilities</h4>
        <p class="text-sm text-muted-foreground mt-2">1. <strong>Postponing Banking Awareness:</strong> Many candidates defer studying core banking principles until after the Mains results are declared. In RRB interviews, the panel expects deep familiarity with rural banking infrastructure: Regional Rural Bank shareholding ratios (Central Govt 50%, Sponsor Bank 35%, State Govt 15%), Kisan Credit Card (KCC) limits, Lead Bank Scheme, and SHG bank linkage models.</p>
        <p class="text-sm text-muted-foreground mt-2">2. <strong>Underestimating Academic Discipline Viva:</strong> Candidates with technical or professional degrees (such as B.Tech Computer Science, IT, or Commerce) frequently face rigorous probing on their graduation subjects. If you have a CS background, expect questions on DBMS queries, API architectures in core banking systems, cyber security in online banking, and encryption algorithms. Prepare concise, confident answers explaining how your graduation degree directly benefits rural banking digitization.</p>
      </div>

      <h2>📋 5. Official IBPS RRB Document Upload Compliance Checklist</h2>
      <p>Before entering the examination hall, your application form must pass automated intake servers without discrepancy. IBPS portals employ automated file filters that reject non-compliant documents:</p>

      <!-- ELEVATED DOCUMENT COMPLIANCE & CORE UTILITY MATRIX -->
      <div class="my-8 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border border-cyan-500/30 p-5 sm:p-7 shadow-2xl backdrop-blur-md">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-800">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-[11px] font-bold uppercase tracking-wider">
              <span>📋 Official Server Scrutiny Rules</span>
            </div>
            <h4 class="text-lg font-bold text-white mt-1">IBPS RRB Mandatory Document Compliance Checklist</h4>
          </div>
          <span class="text-xs text-amber-400 font-mono font-semibold">Strict Dual-Boundary Validation</span>
        </div>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-slate-800 rounded-xl overflow-hidden">
            <thead class="bg-slate-800/80 text-slate-200 font-semibold border-b border-slate-700">
              <tr>
                <th class="p-3">Document Type</th>
                <th class="p-3">File Size Bound</th>
                <th class="p-3">Pixel Dimensions</th>
                <th class="p-3">Mandatory Portal Compliance Rule</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/80 text-slate-300">
              <tr class="hover:bg-slate-800/30 transition">
                <td class="p-3 font-semibold text-white">Passport Photograph</td>
                <td class="p-3 font-mono text-cyan-300 font-bold">20.0 KB &ndash; 50.0 KB</td>
                <td class="p-3 font-mono text-slate-200">200 &times; 230 px (3.5 &times; 4.5 cm)</td>
                <td class="p-3">Pure white/light background; even illumination; no tinted spectacles, caps or flash glare.</td>
              </tr>
              <tr class="hover:bg-slate-800/30 transition">
                <td class="p-3 font-semibold text-white">Signature File</td>
                <td class="p-3 font-mono text-cyan-300 font-bold">10.0 KB &ndash; 20.0 KB</td>
                <td class="p-3 font-mono text-slate-200">140 &times; 60 px (4 &times; 2 cm)</td>
                <td class="p-3"><strong class="text-rose-400">STRICTLY NO ALL CAPS</strong>; black ballpoint pen on plain white paper; cursive running handwriting.</td>
              </tr>
              <tr class="hover:bg-slate-800/30 transition">
                <td class="p-3 font-semibold text-white">Left Thumb Impression (LTI)</td>
                <td class="p-3 font-mono text-cyan-300 font-bold">20.0 KB &ndash; 50.0 KB</td>
                <td class="p-3 font-mono text-slate-200">240 &times; 240 px (3 &times; 3 cm, 200 DPI)</td>
                <td class="p-3">Blue or black ink pad; clear papillary friction ridges; smudge-free print on white paper.</td>
              </tr>
              <tr class="hover:bg-slate-800/30 transition">
                <td class="p-3 font-semibold text-white">Handwritten Declaration</td>
                <td class="p-3 font-mono text-cyan-300 font-bold">50.0 KB &ndash; 100.0 KB</td>
                <td class="p-3 font-mono text-slate-200">800 &times; 400 px (10 &times; 5 cm)</td>
                <td class="p-3">Candidate's own handwriting in English; black ink only; text in capital letters will be summarily rejected.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 1-Click Interactive Tool Launcher Cards -->
        <div class="mt-6 pt-5 border-t border-slate-800">
          <div class="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-3">
            ⚡ Official 1-Click Compliance Tools (100% Client-Side Private):
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a href="/ibps-signature-resize/" class="group p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 hover:bg-slate-800 transition flex flex-col justify-between">
              <div>
                <div class="text-xs font-bold text-cyan-300 font-mono">10–20 KB</div>
                <div class="text-sm font-bold text-white group-hover:text-cyan-200 transition mt-0.5">IBPS Signature Resizer</div>
                <div class="text-[11px] text-slate-400 mt-1">Auto-crops to 140&times;60 px, bleaches yellow shadows to pure white.</div>
              </div>
              <div class="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 mt-3 group-hover:translate-x-0.5 transition">
                <span>Launch Tool</span>
                <span>&rarr;</span>
              </div>
            </a>

            <a href="/photo-resizer/" class="group p-3.5 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-cyan-400 hover:bg-slate-800 transition flex flex-col justify-between">
              <div>
                <div class="text-xs font-bold text-indigo-300 font-mono">20–50 KB</div>
                <div class="text-sm font-bold text-white group-hover:text-cyan-200 transition mt-0.5">Passport Photo Resizer</div>
                <div class="text-[11px] text-slate-400 mt-1">Converts to 3.5&times;4.5 cm with facial alignment guide and light background.</div>
              </div>
              <div class="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-300 mt-3 group-hover:translate-x-0.5 transition">
                <span>Launch Tool</span>
                <span>&rarr;</span>
              </div>
            </a>

            <a href="/handwritten-declaration-resizer/" class="group p-3.5 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-amber-400 hover:bg-slate-800 transition flex flex-col justify-between">
              <div>
                <div class="text-xs font-bold text-amber-300 font-mono">50–100 KB</div>
                <div class="text-sm font-bold text-white group-hover:text-amber-200 transition mt-0.5">Declaration Resizer</div>
                <div class="text-[11px] text-slate-400 mt-1">Locks 800&times;400 px resolution and sharpens black ink pen text.</div>
              </div>
              <div class="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 mt-3 group-hover:translate-x-0.5 transition">
                <span>Launch Tool</span>
                <span>&rarr;</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <h2>Summary: The Candidate's 4 Core Action Items</h2>
      <ol class="space-y-2 my-4">
        <li><strong>Prelims:</strong> Target 40/40 in Reasoning by isolating weak puzzle types daily. In Quant, follow the strict 5-stage triage and skip arithmetic traps taking over 45 seconds.</li>
        <li><strong>Mains Scoring Cushion:</strong> Exploit Computer Knowledge (Sachin Arora Sir) and English (Rani Ma'am) to build an insurmountable margin above sectional cutoffs.</li>
        <li><strong>GA Retention:</strong> Replace fatiguing 100-page monthly PDFs with Sheetal Ma'am's weekly videos at 1.5x/2x speed, enforcing the 3x revision rule across the 4 months preceding the exam.</li>
        <li><strong>Interview Shield:</strong> Never postpone Banking Awareness and degree viva prep until the Mains result. Build your banking concepts in parallel to secure final allotment.</li>
      </ol>
`;

// Locate post in fileContent and replace contentHtml
const slug = "ibps-rrb-po-prelims-mains-preparation-strategy-interview-guide";
const postStart = fileContent.indexOf(`slug: "${slug}"`);
if (postStart === -1) {
  console.error("Could not find post with slug:", slug);
  process.exit(1);
}

const contentHtmlStart = fileContent.indexOf("contentHtml: `", postStart);
if (contentHtmlStart === -1) {
  console.error("Could not find contentHtml start");
  process.exit(1);
}

const contentHtmlEnd = fileContent.indexOf("`\n  },", contentHtmlStart);
if (contentHtmlEnd === -1) {
  console.error("Could not find contentHtml end");
  process.exit(1);
}

const before = fileContent.slice(0, contentHtmlStart + "contentHtml: `\n".length);
const after = fileContent.slice(contentHtmlEnd);

const updatedFileContent = before + updatedContentHtml.trim() + "\n    " + after;
fs.writeFileSync(dataFilePath, updatedFileContent, 'utf8');
console.log("Successfully replaced contentHtml with functional structural graphics!");
