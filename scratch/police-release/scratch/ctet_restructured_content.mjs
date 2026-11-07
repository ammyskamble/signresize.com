import fs from 'fs';
import path from 'path';

export const ctetArticleHtml = `
<!-- Sticky / Collapsible Quick Problem Finder (Anchor Jump Bar) -->
<div class="my-6 p-4 sm:p-5 rounded-2xl bg-card border-2 border-primary/30 shadow-md space-y-3 sticky top-4 z-20 backdrop-blur-md bg-card/95">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-2.5">
    <div class="flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
      <h3 class="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-foreground">🚨 Instant Diagnostic Failure Finder</h3>
    </div>
    <span class="text-[10px] font-mono text-muted-foreground">Jump directly to your specific failure state</span>
  </div>

  <!-- Jump Action Chips -->
  <div class="flex flex-wrap gap-2 text-xs">
    <a href="#failure-upload" class="px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📸</span>
      <span>Photo / Signature Upload Error</span>
    </a>
    <a href="#failure-payment" class="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-200 border border-amber-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>💳</span>
      <span>Double Debit &amp; Fee Pending</span>
    </a>
    <a href="#failure-correction" class="px-3 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-800 dark:text-indigo-200 border border-indigo-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>✏️</span>
      <span>Locked Fields &amp; Correction</span>
    </a>
    <a href="#failure-discrepancy" class="px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-800 dark:text-rose-200 border border-rose-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>🚩</span>
      <span>Remove Image Discrepancy (48-72h)</span>
    </a>
    <a href="#failure-digilocker" class="px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 border border-emerald-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📱</span>
      <span>DigiLocker Certificate Mismatch</span>
    </a>
  </div>
</div>

<section id="overview" class="space-y-4">
  <div class="p-4 sm:p-5 rounded-2xl bg-primary/10 border border-primary/20 text-foreground">
    <p class="text-sm sm:text-base font-semibold leading-relaxed">
      <strong>Complete CTET 2026 Examination Master Overview:</strong> The Central Teacher Eligibility Test (CTET), administered nationwide by the Central Board of Secondary Education (CBSE) via <a href="https://ctet.nic.in" target="_blank" rel="noopener noreferrer" class="text-primary underline">ctet.nic.in</a>, is the mandatory national benchmark qualification for teaching appointments across India. Whether you are appearing for <strong>Paper 1 (Classes 1 to 5)</strong> or <strong>Paper 2 (Classes 6 to 8)</strong>, achieving qualifying eligibility requires mastering NCERT pedagogy, understanding the Supreme Court B.Ed exclusion rulings, and preventing administrative form cancellation through exact compliance with official <strong>10–100 KB photo</strong> and <strong>4–30 KB running cursive signature</strong> upload bounds.
    </p>
  </div>

  <p>
    Annually, over 2.5 million candidates register for the CTET online examination. However, thousands of aspirants encounter withheld admit cards, examination center delays, or outright disqualification due to administrative pitfalls. Common triggers include selecting the wrong educational eligibility code, encountering unconfirmed gateway payments, and triggering automated scanning filters with an <em>"Image Discrepancy"</em> alert.
  </p>

  <p>
    This diagnostic handbook replaces repetitive directories with an <strong>actionable troubleshooting framework</strong>: resolving upload errors, clearing gateway debit drops, executing post-declaration DigiLocker fetches, and formatting files instantly using our free client-side utilities: the <a href="/ctet-signature-resize/" class="text-primary font-semibold underline">CTET Signature Resize Tool (4 to 30 KB)</a> and the <a href="/ctet-photo-resize/" class="text-primary font-semibold underline">CTET Photo Resize Tool (10 to 100 KB)</a>.
  </p>
</section>

<!-- Authoritative Master Specifications & Policy Bounds -->
<section id="master-specs" class="space-y-4 pt-6 border-t border-border">
  <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
    <span>📐 1.</span> Master CTET Regulatory &amp; Technical Benchmark Specifications
  </h2>
  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Authoritative structural parameters governing the CTET examination cycle. Reference this consolidated table for qualifying marks, test timing, and exact document limits without redundant repetition across multiple sections.
  </p>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">Regulatory Parameter</th>
          <th class="px-4 py-3">Official Board Standard</th>
          <th class="px-4 py-3">Statutory Rule / Authority</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">General (UR) Qualifying Marks</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">60% (90 Marks out of 150)</td>
          <td class="px-4 py-3 text-muted-foreground">CBSE Notification Para 9(1)</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Reserved (SC / ST / OBC / PwD) Marks</td>
          <td class="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">55% (82 Marks out of 150)</td>
          <td class="px-4 py-3 text-muted-foreground">5% relaxation per NCTE Gazette mandate</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Paper 1 Supreme Court Eligibility</td>
          <td class="px-4 py-3 font-bold text-rose-600 dark:text-rose-400">D.El.Ed / BTC / JBT / B.El.Ed Only</td>
          <td class="px-4 py-3 text-muted-foreground">Supreme Court verdict (Devesh Sharma vs UOI, Aug 11, 2023) excluding B.Ed</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Paper 2 Elementary Eligibility</td>
          <td class="px-4 py-3 font-mono">Graduation + B.Ed or 2-Yr D.El.Ed</td>
          <td class="px-4 py-3 text-muted-foreground">Valid for appointment to Classes 6 through 8</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Passport Photo File Bounds</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">3.5 × 4.5 cm (10 KB to 100 KB)</td>
          <td class="px-4 py-3 text-muted-foreground">280×360 px at 200 DPI, JPG/JPEG format, white background</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Signature File Bounds</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">3.5 × 1.5 cm (4 KB to 30 KB)</td>
          <td class="px-4 py-3 text-muted-foreground">140×60 px at 200 DPI, Black ink ballpoint on white paper, running cursive</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Exam Duration &amp; Marking</td>
          <td class="px-4 py-3 font-mono">150 Minutes • 150 MCQs • No Negative Marks</td>
          <td class="px-4 py-3 text-muted-foreground">OMR Pen-and-paper mode across 136 nationwide cities</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Certificate Validity Period</td>
          <td class="px-4 py-3 font-bold text-emerald-600 dark:text-emerald-400">Lifetime Validity</td>
          <td class="px-4 py-3 text-muted-foreground">NCTE 50th General Body Meeting order dated June 9, 2021</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Visual Dimension Blueprints & Side-by-Side Comparison -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
    <!-- Photo Blueprint -->
    <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border space-y-3">
      <div class="flex items-center justify-between border-b border-border pb-2">
        <h3 class="font-bold text-sm sm:text-base text-foreground flex items-center gap-2">
          <span>📐</span> Passport Photo Blueprint (3.5 × 4.5 cm)
        </h3>
        <span class="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-primary/10 text-primary">Sweetspot ~40 KB</span>
      </div>
      <div class="flex items-center gap-4 text-xs text-muted-foreground">
        <div class="w-24 h-32 rounded-xl border-2 border-dashed border-primary/50 bg-primary/5 flex flex-col items-center justify-center text-center p-2 shrink-0">
          <span class="font-bold text-primary text-[10px]">80% Face</span>
          <span class="text-[9px] text-muted-foreground">280×360 px</span>
          <span class="text-[8px] text-emerald-600 dark:text-emerald-400 font-mono mt-1">White BG</span>
        </div>
        <div class="space-y-1.5">
          <p><strong class="text-foreground">Aspect Ratio:</strong> 7:9 vertical portrait.</p>
          <p><strong class="text-foreground">Face Coverage:</strong> Full frontal view, neutral expression, ears visible, no headgear except religious.</p>
          <p><strong class="text-foreground">Recency Rule:</strong> Photograph must have been taken within the preceding 6 months.</p>
        </div>
      </div>
    </div>

    <!-- Signature Blueprint & Script Scrutiny -->
    <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border space-y-3">
      <div class="flex items-center justify-between border-b border-border pb-2">
        <h3 class="font-bold text-sm sm:text-base text-foreground flex items-center gap-2">
          <span>✍️</span> Signature Blueprint &amp; Script Scrutiny
        </h3>
        <span class="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-primary/10 text-primary">Sweetspot ~15 KB</span>
      </div>
      <div class="grid grid-cols-2 gap-2 text-center text-xs">
        <div class="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
          <span class="text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-center gap-1">
            <span>✅</span> Valid Signature
          </span>
          <div class="font-serif italic text-base text-foreground py-1">Priya Sharma</div>
          <p class="text-[10px] text-muted-foreground leading-tight">Running cursive handwriting on spotless white unruled paper.</p>
        </div>
        <div class="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-1">
          <span class="text-rose-700 dark:text-rose-300 font-bold flex items-center justify-center gap-1">
            <span>❌</span> Auto-Rejected
          </span>
          <div class="font-mono font-bold tracking-widest text-sm text-rose-600 dark:text-rose-400 py-1">PRIYA SHARMA</div>
          <p class="text-[10px] text-muted-foreground leading-tight">Disconnected block or capital letters face mandatory cancellation.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========================================================================= -->
<!-- 🛠️ INTERACTIVE DIAGNOSTIC FAILURE MATRIX (5W1H TROUBLESHOOTING)          -->
<!-- ========================================================================= -->

<!-- FAILURE STATE 1: Upload & File Errors -->
<section id="failure-upload" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="flex flex-wrap items-center justify-between gap-2">
    <div class="space-y-1">
      <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
        Stage 1 Failure State
      </span>
      <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
        📸 Failure State 1: Upload, Format &amp; Dimension Rejection Errors
      </h2>
    </div>
    <div class="flex items-center gap-2">
      <a href="/ctet-photo-resize/" class="px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition">
        Photo Tool (10-100KB)
      </a>
      <a href="/ctet-signature-resize/" class="px-3 py-1.5 rounded-xl bg-card border border-border text-foreground text-xs font-bold hover:bg-muted transition">
        Sign Tool (4-30KB)
      </a>
    </div>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    During Step 3 of the CTET registration portal, client-side JavaScript checks and server-side MIME decoders inspect binary stream headers. When a file fails byte, aspect, or color-space criteria, the form refuses to proceed.
  </p>

  <!-- 5W1H Diagnostic Card -->
  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-primary">● WHAT:</span> Exact Error String
        </strong>
        <p class="text-muted-foreground font-mono text-xs">
          "File format invalid. Only JPG/JPEG allowed" OR "Photograph size must be between 10 KB to 100 KB and dimensions 3.5cm x 4.5cm".
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-amber-600 dark:text-amber-400">● WHY:</span> Technical Root Cause
        </strong>
        <p class="text-muted-foreground">
          Modern smartphones save files as <strong>CMYK, progressive JPEGs, or iPhone HEIC/HEIF containers</strong> renamed to .jpg. The NIC portal decoders only parse baseline sequential sRGB JPEGs. Additionally, files under 10.0 KB (or 4.0 KB for sign) trigger automated truncation exceptions.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-rose-600 dark:text-rose-400">● WHEN:</span> Failure Window &amp; Deadlines
        </strong>
        <p class="text-muted-foreground">
          Immediate block during registration before fee gateway release. If bypassed with corrupted headers, CBSE scrutiny issues an SMS discrepancy notice within 7 days of form closure.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-indigo-600 dark:text-indigo-400">● WHERE:</span> Exact Portal Endpoint
        </strong>
        <p class="text-muted-foreground">
          Direct candidate registration URL: <code>ctet.nic.in -> Candidate Activity -> Apply for CTET -> Upload Scanned Images</code>.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-emerald-600 dark:text-emerald-400">● WHO:</span> Affected Candidates
        </strong>
        <p class="text-muted-foreground">
          Any applicant capturing raw mobile phone snapshots, using WhatsApp-compressed images with stripped EXIF headers, or uploading scans of notebook lined paper.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-cyan-600 dark:text-cyan-400">● HOW:</span> Step-by-Step Technical Fix
        </strong>
        <p class="text-muted-foreground">
          1. Use our client-side <a href="/make-signature-background-white/" class="text-primary underline">Make Signature Background White</a> to strip shadow/yellow paper tint.<br/>
          2. Drop your image into the <a href="/ctet-photo-resize/" class="text-primary underline">CTET Photo Resizer</a> or <a href="/ctet-signature-resize/" class="text-primary underline">Signature Resizer</a>.<br/>
          3. The tool forces baseline sRGB re-encoding, clamps to ~40 KB (photo) and ~15 KB (sign), and outputs strict compliant JPG.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- FAILURE STATE 2: Submission & Payment Gateway Debits -->
<section id="failure-payment" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
      Stage 2 Failure State
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      💳 Failure State 2: Gateway Drop, Double Debit &amp; Fee Pending Protocol
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    The most anxiety-inducing stage of CTET registration occurs when money is deducted from your bank account or UPI app, but the CTET portal status remains <em>"Payment Incomplete"</em> and no Confirmation Page is generated.
  </p>

  <!-- 5W1H Diagnostic Card -->
  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-primary">● WHAT:</span> Exact Error String
        </strong>
        <p class="text-muted-foreground font-mono text-xs">
          "Payment Pending" / "Transaction Failed but fee deducted" / "Confirmation Page not generated".
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-amber-600 dark:text-amber-400">● WHY:</span> Technical Root Cause
        </strong>
        <p class="text-muted-foreground">
          Server webhook drop between the intermediary payment aggregator (Canara Bank, HDFC, or Syndicate Bank PG) and the NIC database server. If the return redirect token is dropped due to browser auto-refresh or mobile network switch, the transaction remains in a un-reconciled settlement pool.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-rose-600 dark:text-rose-400">● WHEN:</span> The 24–48 Hour Settlement Cycle
        </strong>
        <p class="text-muted-foreground">
          Do <strong>NOT</strong> make an immediate second payment. The banking clearing house runs scheduled batch reconciliation every 24 to 48 hours. If the last date of registration is more than 48 hours away, wait for auto-settlement.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-indigo-600 dark:text-indigo-400">● WHERE:</span> Verification Link
        </strong>
        <p class="text-muted-foreground">
          Log in at <code>ctet.nic.in</code> -> click on <strong>"Verify Payment Status"</strong> or check the <strong>"E-Challan / Payment Receipt"</strong> tab inside the registered candidate portal.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-emerald-600 dark:text-emerald-400">● WHO:</span> Action Mandate
        </strong>
        <p class="text-muted-foreground">
          Candidates who made payment via UPI, net banking, or debit card where the amount was deducted from the bank balance without instant generation of the four-page CTET Confirmation PDF.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-cyan-600 dark:text-cyan-400">● HOW:</span> Resolution Protocol
        </strong>
        <p class="text-muted-foreground">
          1. Record the bank UTR / Transaction Reference Number from your SMS.<br/>
          2. Wait 24 to 48 hours and click "Verify Payment Status" on ctet.nic.in.<br/>
          3. If the payment fails to update on the final day, pay once more to secure your registration. The duplicate transaction will be refunded automatically to your source account within 7 to 10 working days.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- FAILURE STATE 3: Correction Window & Locked Fields -->
<section id="failure-correction" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
      Stage 3 Failure State
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      ✏️ Failure State 3: Non-Editable Fields vs Correction Window Parameters
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    A common trap for candidates is assuming that the official <strong>ctet correction window</strong> allows changing every submitted parameter. In reality, CBSE locks key identity identifiers to prevent impersonation and fraud.
  </p>

  <!-- Editable vs Non-Editable Parameters Table -->
  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">Parameter Category</th>
          <th class="px-4 py-3">Correction Status</th>
          <th class="px-4 py-3">Fallback Action / Administrative Remedy</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Candidate's Full Name &amp; DOB</td>
          <td class="px-4 py-3 font-bold text-rose-600 dark:text-rose-400">Strictly Non-Editable</td>
          <td class="px-4 py-3 text-muted-foreground">Locked to Aadhaar/10th certificate. Minor spelling differences require a sworn notary affidavit during final document verification (DV).</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Father’s / Mother’s Name</td>
          <td class="px-4 py-3 font-bold text-rose-600 dark:text-rose-400">Locked / Verification Required</td>
          <td class="px-4 py-3 text-muted-foreground">Cannot be altered online. Submit an official representation letter to the Director (CTET), CBSE Patparganj, Delhi.</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Examination Center City Choice</td>
          <td class="px-4 py-3 font-bold text-amber-600 dark:text-amber-400">Conditional Editability</td>
          <td class="px-4 py-3 text-muted-foreground">City change is permitted <em>only if vacant slots exist</em> in the requested center under the "First-Come-First-Served" rule.</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Paper Applied (Paper 1 / Paper 2 / Both)</td>
          <td class="px-4 py-3 font-bold text-emerald-600 dark:text-emerald-400">Fully Editable (With Fee)</td>
          <td class="px-4 py-3 text-muted-foreground">You can change paper or opt for both papers by paying the differential fee (₹200 for General/OBC; ₹100 for SC/ST).</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Language 1 &amp; Language 2 Options</td>
          <td class="px-4 py-3 font-bold text-emerald-600 dark:text-emerald-400">Fully Editable</td>
          <td class="px-4 py-3 text-muted-foreground">Permitted online without penalty during the correction window. Crucial for switching to high-scoring Language 1 mother tongue.</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Qualifying Degree / College Name</td>
          <td class="px-4 py-3 font-bold text-emerald-600 dark:text-emerald-400">Fully Editable</td>
          <td class="px-4 py-3 text-muted-foreground">Editable online. Update graduation marks percentage, passing year, or institute pin code freely.</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- FAILURE STATE 4: Admit Card Discrepancy & 48-72h Window -->
<section id="failure-discrepancy" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
      Stage 4 Failure State
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      🚩 Failure State 4: "Remove Image Discrepancy" Red Banner &amp; Admit Card Holds
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Approximately 2 to 3 weeks before the exam date, CBSE runs an optical scrutiny filter on all submitted applications. Candidates whose photographs or signatures fail visual clarity standards receive a red warning banner on the login dashboard.
  </p>

  <!-- 5W1H Diagnostic Card -->
  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-primary">● WHAT:</span> The Discrepancy Alert
        </strong>
        <p class="text-muted-foreground">
          A high-priority notification: <em>"Image Discrepancy found in your uploaded photograph/signature. Admit Card will NOT be issued until resolved."</em>
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-amber-600 dark:text-amber-400">● WHY:</span> Scrutiny Flags
        </strong>
        <p class="text-muted-foreground">
          1. Signature penned in capital/block letters.<br/>
          2. Blurry selfie photo instead of white background studio shot.<br/>
          3. Glare/reflection covering eyes on spectacles.<br/>
          4. Signature uploaded upside down or sideways.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-rose-600 dark:text-rose-400">● WHEN:</span> The Strict 48–72 Hour Window
        </strong>
        <p class="text-muted-foreground">
          CBSE allows strictly <strong>48 to 72 hours</strong> from the alert generation date to upload replacement images. Failure to re-upload locks admit card generation permanently.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-indigo-600 dark:text-indigo-400">● WHERE:</span> Resolution Gateway
        </strong>
        <p class="text-muted-foreground">
          Login at <code>ctet.nic.in -> Candidate Login -> Remove Image Discrepancy</code>.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-emerald-600 dark:text-emerald-400">● WHO:</span> Targeted Applicants
        </strong>
        <p class="text-muted-foreground">
          Only candidates whose registered portal displays the red banner or who received an official SMS from sender <code>CBSE-CTET</code>.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-cyan-600 dark:text-cyan-400">● HOW:</span> The Scrutiny Clearance Flow
        </strong>
        <p class="text-muted-foreground">
          1. Re-shoot your passport photo against a plain white wall.<br/>
          2. Re-sign in dark black ballpoint ink in running handwriting on plain white paper.<br/>
          3. Process through our <a href="/ctet-photo-resize/" class="text-primary underline">CTET Photo Tool</a> &amp; <a href="/ctet-signature-resize/" class="text-primary underline">Signature Tool</a>.<br/>
          4. Upload replacement files, authenticate via mobile OTP, and monitor approval status.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- FAILURE STATE 5: DigiLocker Certificate Fetch Errors -->
<section id="failure-digilocker" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
      Stage 5 Failure State
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      📱 Failure State 5: DigiLocker "Document Not Found" &amp; Name/Aadhaar Mismatch
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Since physical paper certificates have been discontinued, qualifying candidates must retrieve their digitally signed CTET Marksheet and Eligibility Certificate through DigiLocker. Thousands of candidates encounter the frustrating error: <em>"No document found for provided details"</em>.
  </p>

  <!-- 5W1H Diagnostic Card -->
  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-primary">● WHAT:</span> Exact Error String
        </strong>
        <p class="text-muted-foreground font-mono text-xs">
          "No record found in CBSE database" OR "Name in Aadhaar does not match document name".
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-amber-600 dark:text-amber-400">● WHY:</span> Cryptographic API Lock
        </strong>
        <p class="text-muted-foreground">
          DigiLocker requires an exact character-for-character match between the candidate's Aadhaar Name and the Name on the CBSE CTET Marksheet. Even an extra space, missing surname, or inverted initial causes API query rejection.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-rose-600 dark:text-rose-400">● WHEN:</span> Release Timeline
        </strong>
        <p class="text-muted-foreground">
          CBSE uploads encrypted certificate bundles to DigiLocker approximately <strong>20 to 30 days after the official result declaration</strong>. Attempting to fetch documents immediately on result day will always return "No record found".
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-indigo-600 dark:text-indigo-400">● WHERE:</span> Official Fetch Path
        </strong>
        <p class="text-muted-foreground">
          <code>digilocker.gov.in -> Search Documents -> Central Board of Secondary Education -> Teacher Eligibility Test Certificate / Marksheet</code>.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-emerald-600 dark:text-emerald-400">● WHO:</span> Affected Candidates
        </strong>
        <p class="text-muted-foreground">
          Candidates who qualified (scored ≥90 UR / ≥82 Reserved) whose DigiLocker account is registered under a family member's phone or whose Aadhaar name spelling differs from their CTET Admit Card.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-cyan-600 dark:text-cyan-400">● HOW:</span> The Aadhaar Alignment Fix
        </strong>
        <p class="text-muted-foreground">
          1. Verify that your DigiLocker account is created with YOUR OWN Aadhaar number.<br/>
          2. Ensure the mobile number entered during CTET application is linked to Aadhaar.<br/>
          3. If your Aadhaar name was updated recently, visit an Aadhaar Seva Kendra or update CTET profile via board representation with supporting matriculation certificate proof.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Direct Utility Action Hooks -->
<section class="space-y-4 pt-6 border-t border-border">
  <div class="p-4 sm:p-5 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
    <div class="space-y-1">
      <span class="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">Free Client-Side Preparation</span>
      <h3 class="text-base sm:text-lg font-bold text-foreground">Prepare CTET Photo &amp; Signature with Zero Upload Errors</h3>
      <p class="text-xs text-muted-foreground max-w-xl">
        Our browser-based algorithms run 100% locally on your device. Crop strictly to 3.5×4.5 cm (photo) and 3.5×1.5 cm (signature), remove paper background tint, and clamp byte sizes to exact official specifications.
      </p>
    </div>
    <div class="flex items-center gap-2 shrink-0">
      <a href="/ctet-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-95 transition shadow-xs">
        Signature Resizer &rarr;
      </a>
      <a href="/ctet-photo-resize/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground hover:bg-muted font-semibold text-xs transition">
        Photo Resizer &rarr;
      </a>
    </div>
  </div>
</section>
`;

console.log("ctetArticleHtml size:", ctetArticleHtml.length);
