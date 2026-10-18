import { useMemo, useRef, useEffect, useState } from 'react';
import type { ExamPreset, ProcessedImageResult, ToolTargetMode } from '../../types';
import { inspectBackground, inspectSource, inspectExport, type FileFacts, type ExportRule } from '../../utils/uploadValidation';

export function ImageRuleChecks({ image, source, preset, mode, onClean, onRemoveBackground }: { image: HTMLImageElement; source: FileFacts; preset: ExamPreset | null; mode: ToolTargetMode; onClean: () => void; onRemoveBackground?: () => void }) {
  const backgroundIssues = useMemo(() => {
    if (!preset) return [];
    try {
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = 96;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return null;
      ctx.drawImage(image, 0, 0, 96, 96);
      return inspectBackground(ctx.getImageData(0, 0, 96, 96).data, 96, 96, preset.notes);
    } catch { return null; }
  }, [image, preset]);
  if (!preset) return <p className="text-xs text-muted-foreground">Choose an exam preset to see its image requirements.</p>;
  const sourceIssues = inspectSource(source, preset);
  const isCoastGuard = Boolean(
    preset?.id.includes('coast-guard') ||
    preset?.name.toLowerCase().includes('coast guard') ||
    preset?.authority.toLowerCase().includes('coast guard')
  );

  if (isCoastGuard && mode === 'photo') {
    return (
      <section aria-label="Indian Coast Guard Photo Compliance Audit" aria-live="polite" className="image-rule-notice space-y-3">
        <div role="alert" className="rounded-xl border-2 border-rose-500 bg-rose-500/10 dark:bg-rose-950/20 p-4 text-xs space-y-3 shadow-xs">
          <div className="flex items-center justify-between gap-2 border-b border-rose-500/30 pb-2.5">
            <div className="flex items-center gap-2 font-extrabold text-rose-700 dark:text-rose-400 text-sm">
              <span className="text-base">🚨</span>
              <span>Indian Coast Guard Photo Rejection Warning: What Is Missing?</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-rose-600 text-white font-mono font-bold text-[10px] whitespace-nowrap">
              NORMAL PHOTOS DISQUALIFIED
            </span>
          </div>

          <p className="text-foreground leading-relaxed font-semibold">
            The <strong>Join Indian Coast Guard (CGEPT)</strong> portal strictly rejects normal studio passport photos. Applications missing the mandatory black slate are cancelled at Stage-I scrutiny. <strong>Verify what is missing in your uploaded photo below:</strong>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="p-3 rounded-lg bg-card border-2 border-rose-500/50 space-y-1 shadow-2xs">
              <div className="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                <span>❌</span> 1. Missing Physical Black Slate
              </div>
              <p className="text-[11px] text-muted-foreground leading-normal">
                You must physically hold a <strong>black chalkboard/slate</strong> in front of your chest while being photographed. A normal studio photo or digital text strip is NOT accepted.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-card border-2 border-rose-500/50 space-y-1 shadow-2xs">
              <div className="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                <span>❌</span> 2. Missing White Chalk Name &amp; Date
              </div>
              <p className="text-[11px] text-muted-foreground leading-normal">
                Your full <strong>NAME</strong> (as per 10th certificate) and <strong>DATE OF PHOTO (DoP)</strong> must be legibly written in <strong>white chalk in capital letters</strong> on the slate.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-card border-2 border-amber-500/50 space-y-1 shadow-2xs">
              <div className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                <span>👓</span> 3. Spectacles / Glasses Prohibited
              </div>
              <p className="text-[11px] text-muted-foreground leading-normal">
                No spectacles, reading glasses, sunglasses, or tinted lenses. If your uploaded photo shows glasses, remove them and retake the photo. Both eyes and ears must be uncovered.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-card border-2 border-amber-500/50 space-y-1 shadow-2xs">
              <div className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                <span>🎨</span> 4. Plain Light Background &amp; File Name
              </div>
              <p className="text-[11px] text-muted-foreground leading-normal">
                Must have a <strong>plain light / white background</strong>. Dark or colored backgrounds are rejected. Save and upload strictly as <strong>Passport_Photograph.jpg</strong> (10 KB – 50 KB).
              </p>
            </div>
          </div>

          {!!backgroundIssues?.length && (
            <div className="p-3 rounded-lg bg-amber-500/15 border-2 border-amber-500/40 text-amber-900 dark:text-amber-200 flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-base">⚠️</span>
                <span className="text-xs">
                  <strong>Dark / Non-White Background Detected:</strong> Your uploaded photo has dark or colored edges. Indian Coast Guard mandates a plain light/white background.
                </span>
              </div>
              {onRemoveBackground && (
                <button
                  type="button"
                  onClick={onRemoveBackground}
                  className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shrink-0 cursor-pointer transition shadow-xs"
                >
                  Make Background White
                </button>
              )}
            </div>
          )}

          <div className="text-[11px] text-muted-foreground border-t border-rose-500/20 pt-2 flex items-center justify-between flex-wrap gap-2">
            <span>💡 <em>Retake photo holding a black slate with white chalk before uploading to joinindiancoastguard.cdac.in</em></span>
            <span className="font-mono font-bold text-primary text-[10px]">Official CGEPT Notification Clause (aa)</span>
          </div>
        </div>
      </section>
    );
  }

  return <section aria-label="Image issues and exam rules" aria-live="polite" className="image-rule-notice rounded-lg border border-border">
    <details key={`${source.name}-${preset.id}`} open={isCoastGuard || Boolean(backgroundIssues?.length)}>
      <summary className="cursor-pointer">
        <span>Image checks · {preset.shortCode}</span>
        <small className={isCoastGuard || backgroundIssues?.length ? 'text-rose-600 dark:text-rose-400 font-bold' : ''}>
          {backgroundIssues?.length 
            ? 'Background needs review' 
            : sourceIssues.length 
            ? `${sourceIssues.length} file checks` 
            : 'Review image rules'}
        </small>
      </summary>
      
      <div className="image-rule-notice-content space-y-3.5 pt-2">

        {/* DEDICATED INDIAN COAST GUARD SIGNATURE AUDIT */}
        {isCoastGuard && mode === 'signature' && (
          <div role="alert" className="rounded-xl border border-primary/40 bg-primary/10 p-3.5 text-xs space-y-2">
            <div className="flex items-center justify-between gap-2 font-bold text-primary text-xs">
              <span className="flex items-center gap-1.5"><span>🖋️</span> Indian Coast Guard Signature Rule Checklist</span>
              <span className="font-mono text-[10px] bg-primary/20 px-2 py-0.5 rounded">Signature.jpg</span>
            </div>
            <ul className="list-disc pl-4 space-y-1 text-muted-foreground text-[11px]">
              <li><strong>Running Handwriting Only:</strong> Must be signed in cursive running handwriting on plain white paper. <strong>Capital/block letter signatures are 100% disqualified.</strong></li>
              <li><strong>Ink Requirement:</strong> Black or dark blue ink pen.</li>
              <li><strong>File Limits:</strong> Strictly between 10 KB and 50 KB in JPG format (140×60 px, ~4×2 cm).</li>
              <li><strong>Mandatory File Name:</strong> Save file as <strong>Signature.jpg</strong> prior to upload on the CGEPT portal.</li>
            </ul>
          </div>
        )}

        {/* DEDICATED INDIAN COAST GUARD DOCUMENT / THUMB AUDIT */}
        {isCoastGuard && mode === 'document' && (
          <div role="alert" className="rounded-xl border border-primary/40 bg-primary/10 p-3.5 text-xs space-y-2">
            <div className="flex items-center justify-between gap-2 font-bold text-primary text-xs">
              <span className="flex items-center gap-1.5">
                <span>{preset?.id.includes('thumb') ? '👆' : '📄'}</span> 
                {preset?.id.includes('thumb') ? 'Indian Coast Guard Left Thumb Impression (LTI)' : 'Indian Coast Guard Original Document Scans'}
              </span>
              <span className="font-mono text-[10px] bg-primary/20 px-2 py-0.5 rounded">
                {preset?.id.includes('thumb') ? 'Thumb_Impression.jpg (10–50 KB)' : '50 KB – 150 KB JPG'}
              </span>
            </div>
            {preset?.id.includes('thumb') ? (
              <ul className="list-disc pl-4 space-y-1 text-muted-foreground text-[11px]">
                <li><strong>Left-Hand Thumb Only:</strong> Stamp candidate's left-hand thumb using blue or black stamp pad ink on plain white paper.</li>
                <li><strong>Clear Ridge Lines:</strong> Impression must be sharp and smudge-free for biometric verification at test centers.</li>
                <li><strong>File Limits:</strong> 10 KB to 50 KB in JPG (240×240 px, 1:1 square).</li>
                <li><strong>File Name:</strong> Save strictly as <strong>Thumb_Impression.jpg</strong>.</li>
              </ul>
            ) : (
              <ul className="list-disc pl-4 space-y-1 text-muted-foreground text-[11px]">
                <li><strong>Scanned From Originals:</strong> 10th marksheet, 12th marksheet, Diploma certificate, Caste/EWS certificate, and photo ID must be scanned from <strong>ORIGINALS ONLY</strong> (photocopies or self-attested copies are rejected).</li>
                <li><strong>Language:</strong> English or Hindi only. (If in regional language, merge certified English translation into the same file).</li>
                <li><strong>File Limits:</strong> Strictly between <strong>50 KB and 150 KB</strong> in JPG/JPEG format.</li>
              </ul>
            )}
          </div>
        )}

        {/* Standard Background Warning (for non-Coast Guard or additional info) */}
        {!isCoastGuard && !!backgroundIssues?.length && (
          <div role="alert" className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 text-xs space-y-2">
            <strong>{backgroundIssues[0].message}</strong>
            <p>{mode === 'photo' ? 'Retake the photo against the required plain background or upload a corrected image. Lighting adjustment does not remove a coloured background.' : backgroundIssues[0].fix}</p>
            {mode !== 'photo' && <button type="button" className="font-semibold underline" onClick={onClean}>Try Clean White Paper</button>}
            <p className="text-muted-foreground">Estimated from the current image edges; check the processed preview after making changes.</p>
          </div>
        )}
        {!isCoastGuard && !!backgroundIssues?.length && onRemoveBackground && (
          <button type="button" className="rounded-lg border border-primary/30 bg-primary/10 text-primary px-3 py-2 text-xs font-semibold" onClick={onRemoveBackground}>Fix background in this canvas</button>
        )}
        {backgroundIssues === null && <p className="text-xs">Background analysis unavailable. Inspect the required background yourself.</p>}
        {sourceIssues.some(i => i.code === 'resolution') && <p role="alert" className="text-xs text-amber-700 dark:text-amber-300">Low source resolution. Use a clearer original if the resized result is blurry; resizing cannot restore detail.</p>}
        {sourceIssues.some(i => i.code !== 'resolution') && <p className="text-xs text-muted-foreground">Original file needs resizing or conversion. Export checks will verify pixels, KB and format after processing.</p>}
        
        <details>
          <summary className="text-xs font-semibold cursor-pointer">Review the selected exam’s image rules</summary>
          <p className="text-xs mt-2">{preset.notes}</p>
          {mode === 'signature' && <p className="text-xs mt-1">Ink requirement: {preset.inkRequirement}.</p>}
          {preset.requiresNameDate && <p className="text-xs mt-1">Check the required name and photograph date. Follow any physical slate requirement in the notice.</p>}
          <p className="text-xs text-muted-foreground mt-2">Visually check {mode === 'photo' ? 'face position, clarity, lighting, clothing and any live capture or slate requirement' : mode === 'signature' ? 'ink colour, handwriting, complete strokes and clean paper' : 'wording, names, numbers, seals and complete page edges'}. These rules need your review; they are not automatically certified.</p>
        </details>
      </div>
    </details>
  </section>;
}

export function ExportChecksDialog({ open, result, preset, rule, busy, onClose, onDownload, onRestore }: { open: boolean; result: ProcessedImageResult | null; preset: ExamPreset | null; rule: ExportRule; busy: boolean; onClose: () => void; onDownload: () => void; onRestore: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [backgroundMessage, setBackgroundMessage] = useState('');
  useEffect(() => {
    setBackgroundMessage('');
    if (!open || !result || !preset) return;
    let cancelled = false;
    const image = new Image();
    image.onload = () => {
      if (cancelled) return;
      try {
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = 96;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;
        ctx.drawImage(image, 0, 0, 96, 96);
        setBackgroundMessage(inspectBackground(ctx.getImageData(0, 0, 96, 96).data, 96, 96, preset.notes)[0]?.message || '');
      } catch { setBackgroundMessage('Background analysis unavailable. Inspect the processed preview yourself.'); }
    };
    image.onerror = () => { if (!cancelled) setBackgroundMessage('Background analysis unavailable. Inspect the processed preview yourself.'); };
    image.src = result.dataUrl;
    return () => { cancelled = true; };
  }, [open, result, preset]);
  useEffect(() => {
    const dialog = ref.current;
    if (open && dialog && !dialog.open) dialog.showModal();
    if (!open && dialog?.open) dialog.close();
    return () => { if (dialog?.open) dialog.close(); };
  }, [open]);
  const issues = result ? inspectExport(result, rule) : [];
  const presetIssues = result && preset ? inspectExport(result, preset) : [];
  const blocked = busy || !result || !result.withinTargetBounds || issues.length > 0;
  return <dialog ref={ref} onCancel={onClose} onClose={onClose} aria-labelledby="export-checks-title" className="m-auto w-[min(92vw,540px)] max-h-[85vh] overflow-auto rounded-xl border border-border bg-card text-foreground p-5 backdrop:bg-black/60">
    <div className="flex items-center justify-between gap-3"><h2 id="export-checks-title" className="text-lg font-bold">Export file checks{preset ? ` · ${preset.shortCode}` : ''}</h2><button type="button" onClick={onClose} aria-label="Close export checks" className="p-2">✕</button></div>
    {result && <img className="export-review-image" src={result.dataUrl} alt="Your resized image — check the crop and clarity before downloading" />}
    {result && <p className="text-sm mt-3">{result.width} × {result.height} px · {(result.sizeBytes / 1024).toFixed(2)} KB · {result.format}</p>}
    <p role="status" className="text-sm font-semibold mt-3">{busy ? 'Processing — wait before downloading.' : blocked ? 'File needs attention before download.' : 'Pixels, file size and format checks passed.'}</p>
    <ul className="text-xs space-y-3 mt-3">{issues.map(issue => <li key={issue.code}><strong>{issue.message}</strong><p>{issue.fix}</p></li>)}</ul>
    {!!presetIssues.length && <div role="alert" className="text-xs rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 mt-3"><strong>Custom export — differs from {preset?.shortCode} requirements</strong><p className="mt-1">You can download a file matching your current settings, but it does not meet the selected exam preset.</p><ul className="mt-2 space-y-1">{presetIssues.map(issue => <li key={issue.code}>{issue.message}</li>)}</ul><button type="button" onClick={onRestore} className="underline mt-2">Restore preset settings</button></div>}
    {backgroundMessage && <p role="alert" className="text-xs rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 mt-3">{backgroundMessage} Review the exported image before submitting it.</p>}
    {result && !result.withinTargetBounds && !issues.some(i => i.code === 'bytes') && <p className="text-xs mt-2">The file is outside your current KB bounds. Adjust the settings and process again.</p>}
    {preset && <div className="text-xs mt-4 rounded-lg bg-muted p-3 space-y-2"><strong>Review the image before using it</strong><p>{preset.notes}</p><p>Check the processed preview for background, clarity and cropped edges. File checks do not verify identity, ink colour, handwriting or portal acceptance.</p></div>}
    <div className="flex flex-wrap gap-3 mt-5"><button type="button" onClick={onClose} className="border border-border rounded-lg px-4 py-2 text-sm">Back to fix image</button>{!!issues.length && preset && <button type="button" onClick={onRestore} className="border border-border rounded-lg px-4 py-2 text-sm">Restore preset settings</button>}<button type="button" disabled={blocked} onClick={onDownload} className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm disabled:opacity-50">Download file</button></div>
  </dialog>;
}
