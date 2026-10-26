import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/blogPostsData.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const oldSection6Pattern = /<!-- Section 6: Step-by-Step Embedded Quick Launch Resizers & Inline Dropzone with Live Feedback -->[\s\S]*?<!-- Section 7: Regional RRB Zone Portals Directory -->/;

const newSection6Content = `<!-- Section 6: Step-by-Step Embedded Quick Launch Resizers & Inline Dropzone with Live Feedback -->
  <h2 class="text-xl font-bold text-foreground mt-8 mb-3" id="instant-resizers">🛠️ 6. Instant In-Page Resizer Launchers: Fast Document Prep</h2>
  <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">
    Do not let oversized scans or incorrect dimensions cause Paragraph 15.2 rejection. Use our dedicated RRB presets below. Drop your file right into the dropzone to inspect file size and auto-format directly in your browser:
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
    <!-- Signature Launcher & Interactive Dropzone Card -->
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

        <!-- Interactive Drag-and-Drop Dropzone Container -->
        <div id="rrb-sign-dropzone" class="group relative cursor-pointer block border-2 border-dashed border-blue-400 dark:border-blue-500/70 hover:border-blue-600 bg-blue-50/40 hover:bg-blue-100/50 dark:bg-blue-950/20 dark:hover:bg-blue-900/30 rounded-xl p-4 transition-all duration-200 text-center space-y-2 shadow-xs hover:shadow-md hover:scale-[1.01]">
          <input type="file" id="rrb-sign-input" class="hidden" accept="image/jpeg,image/png,image/webp" />
          
          <!-- Interactive Badge -->
          <div class="flex justify-center">
            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white shadow-2xs">
              <span>⚡</span> Interactive Live Dropzone
            </span>
          </div>

          <!-- Idle State -->
          <div id="rrb-sign-idle" class="space-y-1 py-1">
            <span class="text-2xl block group-hover:scale-125 transition-transform duration-300">📥</span>
            <span class="text-xs font-bold text-foreground block">Drop Signature image here</span>
            <span class="text-[10px] text-muted-foreground block">or click to browse from device (JPG, PNG, WebP)</span>
          </div>

          <!-- Analyzing Spinner State -->
          <div id="rrb-sign-analyzing" class="hidden py-4 text-center text-xs font-semibold text-blue-600 dark:text-blue-400 animate-pulse space-y-1">
            <span class="text-xl block animate-spin">⚙️</span>
            <span>Analyzing signature dimensions & compression...</span>
          </div>

          <!-- Active File Inspection State -->
          <div id="rrb-sign-feedback" class="hidden space-y-2 text-left">
            <div class="flex items-center gap-3">
              <img id="rrb-sign-preview" class="w-20 h-10 object-contain border border-border bg-white rounded shadow-2xs" alt="Signature preview" />
              <div class="min-w-0 flex-1 text-xs">
                <div id="rrb-sign-name" class="font-bold text-foreground truncate text-[11px]">filename.jpg</div>
                <div id="rrb-sign-meta" class="text-[10px] text-muted-foreground">Original: calculating...</div>
                <div class="text-[10px] font-bold text-amber-600 dark:text-amber-400">Target: 140×60 px • 10–20 KB</div>
              </div>
            </div>
            <div id="rrb-sign-status-badge" class="p-2 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[11px] font-semibold flex items-center gap-1.5">
              <span>⚡</span> Ready for 1-click optimization to RRB specifications
            </div>
          </div>
        </div>
      </div>
      
      <a id="rrb-sign-action-btn" href="/rrb-je-signature-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-95 transition shadow-xs w-full text-center">
        <span>Open Signature Canvas (10–20 KB)</span>
        <span>&rarr;</span>
      </a>
    </div>

    <!-- Photo Launcher & Interactive Dropzone Card -->
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

        <!-- Interactive Drag-and-Drop Dropzone Container -->
        <div id="rrb-photo-dropzone" class="group relative cursor-pointer block border-2 border-dashed border-blue-400 dark:border-blue-500/70 hover:border-blue-600 bg-blue-50/40 hover:bg-blue-100/50 dark:bg-blue-950/20 dark:hover:bg-blue-900/30 rounded-xl p-4 transition-all duration-200 text-center space-y-2 shadow-xs hover:shadow-md hover:scale-[1.01]">
          <input type="file" id="rrb-photo-input" class="hidden" accept="image/jpeg,image/png,image/webp" />
          
          <!-- Interactive Badge -->
          <div class="flex justify-center">
            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white shadow-2xs">
              <span>⚡</span> Interactive Live Dropzone
            </span>
          </div>

          <!-- Idle State -->
          <div id="rrb-photo-idle" class="space-y-1 py-1">
            <span class="text-2xl block group-hover:scale-125 transition-transform duration-300">📥</span>
            <span class="text-xs font-bold text-foreground block">Drop Passport Photo here</span>
            <span class="text-[10px] text-muted-foreground block">or click to browse from device (JPG, PNG, WebP)</span>
          </div>

          <!-- Analyzing Spinner State -->
          <div id="rrb-photo-analyzing" class="hidden py-4 text-center text-xs font-semibold text-blue-600 dark:text-blue-400 animate-pulse space-y-1">
            <span class="text-xl block animate-spin">⚙️</span>
            <span>Analyzing photo dimensions & compression...</span>
          </div>

          <!-- Active File Inspection State -->
          <div id="rrb-photo-feedback" class="hidden space-y-2 text-left">
            <div class="flex items-center gap-3">
              <img id="rrb-photo-preview" class="w-12 h-16 object-cover border border-border bg-white rounded shadow-2xs" alt="Photo preview" />
              <div class="min-w-0 flex-1 text-xs">
                <div id="rrb-photo-name" class="font-bold text-foreground truncate text-[11px]">filename.jpg</div>
                <div id="rrb-photo-meta" class="text-[10px] text-muted-foreground">Original: calculating...</div>
                <div class="text-[10px] font-bold text-amber-600 dark:text-amber-400">Target: 240×320 px • 30–70 KB</div>
              </div>
            </div>
            <div id="rrb-photo-status-badge" class="p-2 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[11px] font-semibold flex items-center gap-1.5">
              <span>⚡</span> Ready for 1-click optimization to RRB specifications
            </div>
          </div>
        </div>
      </div>

      <a id="rrb-photo-action-btn" href="/rrb-je-photo-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-card border border-border text-foreground font-bold text-xs sm:text-sm hover:bg-muted/40 transition shadow-xs w-full text-center">
        <span>Open Photo Canvas (30–70 KB)</span>
        <span>&rarr;</span>
      </a>
    </div>
  </div>

  <!-- Inline Script for Interactive Dropzones -->
  <script>
    function setupRrbDropzone(zoneId, inputId, idleId, analyzingId, feedbackId, previewId, nameId, metaId, statusBadgeId, actionBtnId, toolUrl, minKb, maxKb, targetDims) {
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
      setupRrbDropzone('rrb-sign-dropzone', 'rrb-sign-input', 'rrb-sign-idle', 'rrb-sign-analyzing', 'rrb-sign-feedback', 'rrb-sign-preview', 'rrb-sign-name', 'rrb-sign-meta', 'rrb-sign-status-badge', 'rrb-sign-action-btn', '/rrb-je-signature-resize/', 10, 20, '140×60 px');
      setupRrbDropzone('rrb-photo-dropzone', 'rrb-photo-input', 'rrb-photo-idle', 'rrb-photo-analyzing', 'rrb-photo-feedback', 'rrb-photo-preview', 'rrb-photo-name', 'rrb-photo-meta', 'rrb-photo-status-badge', 'rrb-photo-action-btn', '/rrb-je-photo-resize/', 30, 70, '240×320 px');
    });
  </script>

  <!-- Section 7: Regional RRB Zone Portals Directory -->`;

if (!oldSection6Pattern.test(content)) {
  console.error("Pattern did not match!");
  process.exit(1);
}

content = content.replace(oldSection6Pattern, newSection6Content);
fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully replaced Section 6 with enhanced dropzones and feedback!');
