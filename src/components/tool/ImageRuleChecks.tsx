import { useMemo, useRef, useEffect, useState } from 'react';
import type { ExamPreset, ProcessedImageResult, ToolTargetMode } from '../../types';
import { inspectBackground, inspectRuledPaper, inspectSource, inspectExport, type FileFacts, type ExportRule } from '../../utils/uploadValidation';
import { ComplianceRejectionAudit } from './ComplianceRejectionAudit';

export function ImageRuleChecks({
  source,
  preset,
}: {
  image?: HTMLImageElement;
  source: FileFacts;
  preset: ExamPreset | null;
  mode?: ToolTargetMode;
  rule?: ExportRule;
  processedResult?: ProcessedImageResult | null;
  onClean?: () => void;
  onRemoveBackground?: () => void;
}) {
  const sourceIssues = preset ? inspectSource(source, preset) : [];
  const lowRes = sourceIssues.find((i) => i.code === 'resolution');

  if (!lowRes) return null;

  return (
    <div role="alert" className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-2.5 text-xs flex items-center gap-2 text-amber-900 dark:text-amber-200 shadow-2xs">
      <span className="text-base leading-none">⚠️</span>
      <span className="leading-snug text-[11px] font-medium">{lowRes.message} {lowRes.fix}</span>
    </div>
  );
}

export function ExportChecksDialog({
  open,
  result,
  preset,
  rule,
  busy,
  mode = 'signature',
  onClose,
  onDownload,
  onRestore,
  onRemoveBackground,
  onClean,
  slateConfirmed,
  onConfirmSlate,
  upssscConfirmed,
  onConfirmUpsssc,
}: {
  open: boolean;
  result: ProcessedImageResult | null;
  preset: ExamPreset | null;
  rule: ExportRule;
  busy: boolean;
  mode?: ToolTargetMode;
  onClose: () => void;
  onDownload: () => void;
  onRestore: () => void;
  onRemoveBackground?: () => void;
  onClean?: () => void;
  slateConfirmed?: boolean;
  onConfirmSlate?: (confirmed: boolean) => void;
  upssscConfirmed?: boolean;
  onConfirmUpsssc?: (confirmed: boolean) => void;
}) {
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
        const imgData = ctx.getImageData(0, 0, 96, 96).data;
        const bgIssues = inspectBackground(imgData, 96, 96, preset.notes);
        const ruledIssues = mode === 'signature' ? inspectRuledPaper(imgData, 96, 96) : [];
        const allIssues = [...bgIssues, ...ruledIssues];
        setBackgroundMessage(allIssues[0]?.message || '');
      } catch {
        setBackgroundMessage('Background analysis unavailable. Inspect the processed preview yourself.');
      }
    };
    image.onerror = () => {
      if (!cancelled) setBackgroundMessage('Background analysis unavailable. Inspect the processed preview yourself.');
    };
    image.src = result.dataUrl;
    return () => {
      cancelled = true;
    };
  }, [open, result, preset]);

  useEffect(() => {
    const dialog = ref.current;
    if (open && dialog && !dialog.open) dialog.showModal();
    if (!open && dialog?.open) dialog.close();
    return () => {
      if (dialog?.open) dialog.close();
    };
  }, [open]);

  const issues = result ? inspectExport(result, rule) : [];
  const presetIssues = result && preset ? inspectExport(result, preset) : [];
  const blocked = busy || !result || !result.withinTargetBounds || issues.length > 0;

  return (
    <dialog
      ref={ref}
      onCancel={onClose}
      onClose={onClose}
      aria-labelledby="export-checks-title"
      className="m-auto w-[min(94vw,560px)] max-h-[88vh] overflow-y-auto rounded-2xl border-2 border-border bg-card text-foreground p-5 sm:p-6 backdrop:bg-black/65 shadow-2xl space-y-4"
    >
      {/* Dialog Header */}
      <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
        <div>
          <h2 id="export-checks-title" className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
            <span>🛡️ Export Compliance Checks</span>
            {preset && <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-mono">{preset.shortCode}</span>}
          </h2>
          <p className="text-[11px] text-muted-foreground mt-0.5">Pre-download verification against official portal criteria</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close export checks"
          className="p-1.5 rounded-lg border border-border hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition"
        >
          ✕
        </button>
      </div>

      {/* Resized Image Thumbnail Review */}
      {result && (
        <div className="flex flex-col sm:flex-row items-center gap-4 p-3 rounded-xl bg-muted/30 border border-border">
          <img
            className="max-h-[110px] max-w-[140px] object-contain rounded-lg border border-border/80 shadow-xs bg-card"
            src={result.dataUrl}
            alt="Your resized image preview"
          />
          <div className="space-y-1 text-xs text-center sm:text-left flex-1">
            <div className="font-mono font-bold text-sm text-foreground">
              {result.width} × {result.height} px · {(result.sizeBytes / 1024).toFixed(2)} KB · {result.format}
            </div>
            <p className="text-muted-foreground text-[11px]">
              Target Bounds: {rule.minKb} KB – {rule.maxKb} KB ({rule.widthPx} × {rule.heightPx} px)
            </p>
            <div className="pt-1">
              {blocked ? (
                <span className="inline-flex items-center gap-1 font-bold text-rose-600 dark:text-rose-400 text-xs bg-rose-500/10 px-2 py-0.5 rounded">
                  ⚠️ File needs attention before download
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400 text-xs bg-emerald-500/10 px-2 py-0.5 rounded">
                  ✅ Pixels, size &amp; format checks passed
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Specific Issue List */}
      {issues.length > 0 && (
        <div role="alert" className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/40 text-rose-700 dark:text-rose-300 text-xs space-y-1.5">
          <div className="font-bold">Required File Adjustments:</div>
          <ul className="space-y-1 pl-4 list-disc text-[11px]">
            {issues.map((issue) => (
              <li key={issue.code}>
                <strong>{issue.message}</strong> {issue.fix}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Custom Divergence Notice */}
      {!!presetIssues.length && (
        <div role="alert" className="text-xs rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 space-y-1">
          <strong className="text-amber-800 dark:text-amber-300">Custom export differs from {preset?.shortCode} requirements</strong>
          <p className="text-[11px] text-muted-foreground">The file matches your manual settings, but does not match official preset dimensions.</p>
          <button type="button" onClick={onRestore} className="text-xs font-bold text-primary underline cursor-pointer mt-1 block">
            Restore preset settings →
          </button>
        </div>
      )}

      {/* Background Warning */}
      {backgroundMessage && (
        <p role="alert" className="text-xs rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-amber-800 dark:text-amber-200">
          ⚠️ {backgroundMessage}
        </p>
      )}

      {/* 🚨 Full Compliance Rejection Audit Inside Dialog Modal for ALL presets */}
      <div className="border-t border-border pt-3">
        <ComplianceRejectionAudit
          preset={preset}
          mode={mode}
          rule={rule}
          processedResult={result}
          backgroundIssues={
            backgroundMessage
              ? [
                  {
                    code: backgroundMessage.includes('Ruled notebook lines') ? 'ruled_paper' : 'bg',
                    message: backgroundMessage,
                    fix: 'Check background or paper'
                  }
                ]
              : null
          }
          onRemoveBackground={onRemoveBackground}
          onClean={onClean}
          slateConfirmed={slateConfirmed}
          onConfirmSlate={onConfirmSlate}
          upssscConfirmed={upssscConfirmed}
          onConfirmUpsssc={onConfirmUpsssc}
          variant="modalAudit"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-2.5 pt-3 border-t border-border">
        <button
          type="button"
          onClick={onClose}
          className="w-full sm:w-auto border border-border hover:bg-muted text-foreground rounded-xl px-4 py-2.5 text-xs font-semibold cursor-pointer transition text-center"
        >
          Back to Edit Image
        </button>
        {!!issues.length && preset && (
          <button
            type="button"
            onClick={onRestore}
            className="w-full sm:w-auto border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 rounded-xl px-4 py-2.5 text-xs font-bold cursor-pointer transition text-center"
          >
            Restore Preset Settings
          </button>
        )}
        <button
          type="button"
          disabled={blocked}
          onClick={onDownload}
          className="w-full sm:w-auto bg-primary text-primary-foreground font-bold rounded-xl px-5 py-2.5 text-xs shadow-md shadow-primary/25 hover:opacity-95 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-center"
        >
          Download Verified File
        </button>
      </div>
    </dialog>
  );
}
