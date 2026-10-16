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
  return <section aria-label="Image issues and exam rules" aria-live="polite" className="image-rule-notice rounded-lg border border-border">
    <details key={`${source.name}-${preset.id}`}><summary><span>Image checks · {preset.shortCode}</span><small>{backgroundIssues?.length ? 'Background needs review' : sourceIssues.length ? `${sourceIssues.length} file checks` : 'Review image rules'}</small></summary><div className="image-rule-notice-content space-y-3">
    {!!backgroundIssues?.length && <div role="alert" className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 text-xs space-y-2"><strong>{backgroundIssues[0].message}</strong><p>{mode === 'photo' ? 'Retake the photo against the required plain background or upload a corrected image. Lighting adjustment does not remove a coloured background.' : backgroundIssues[0].fix}</p>{mode !== 'photo' && <button type="button" className="font-semibold underline" onClick={onClean}>Try Clean White Paper</button>}<p className="text-muted-foreground">Estimated from the current image edges; check the processed preview after making changes.</p></div>}
    {!!backgroundIssues?.length && onRemoveBackground && <button type="button" className="rounded-lg border border-primary/30 bg-primary/10 text-primary px-3 py-2 text-xs font-semibold" onClick={onRemoveBackground}>Fix background in this canvas</button>}
    {backgroundIssues === null && <p className="text-xs">Background analysis unavailable. Inspect the required background yourself.</p>}
    {sourceIssues.some(i => i.code === 'resolution') && <p role="alert" className="text-xs text-amber-700 dark:text-amber-300">Low source resolution. Use a clearer original if the resized result is blurry; resizing cannot restore detail.</p>}
    {sourceIssues.some(i => i.code !== 'resolution') && <p className="text-xs text-muted-foreground">Original file needs resizing or conversion. Export checks will verify pixels, KB and format after processing.</p>}
    <details><summary className="text-xs font-semibold cursor-pointer">Review the selected exam’s image rules</summary><p className="text-xs mt-2">{preset.notes}</p>{mode === 'signature' && <p className="text-xs mt-1">Ink requirement: {preset.inkRequirement}.</p>}{preset.requiresNameDate && <p className="text-xs mt-1">Check the required name and photograph date. Follow any physical slate requirement in the notice.</p>}<p className="text-xs text-muted-foreground mt-2">Visually check {mode === 'photo' ? 'face position, clarity, lighting, clothing and any live capture or slate requirement' : mode === 'signature' ? 'ink colour, handwriting, complete strokes and clean paper' : 'wording, names, numbers, seals and complete page edges'}. These rules need your review; they are not automatically certified.</p></details>
    </div></details>
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
