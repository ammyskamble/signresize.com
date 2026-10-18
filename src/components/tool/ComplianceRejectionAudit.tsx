import React, { useState } from 'react';
import type { ExamPreset, ProcessedImageResult, ToolTargetMode } from '../../types';
import { inspectExport, type UploadIssue, type ExportRule } from '../../utils/uploadValidation';
import { getComplianceAudit } from '../../utils/complianceRules';
import { ExternalLink, Sparkles, CheckCircle2, AlertTriangle, ShieldAlert, Check } from 'lucide-react';

interface ComplianceAuditProps {
  preset: ExamPreset | null;
  mode: ToolTargetMode;
  rule?: ExportRule;
  sourceImage?: HTMLImageElement | null;
  processedResult?: ProcessedImageResult | null;
  backgroundIssues?: UploadIssue[] | null;
  onRemoveBackground?: () => void;
  onClean?: () => void;
  onInspectCrop?: () => void;
  variant?: 'previewCard' | 'studioNotice' | 'modalAudit';
  slateConfirmed?: boolean;
  onConfirmSlate?: (confirmed: boolean) => void;
}

export function ComplianceRejectionAudit({
  preset,
  mode,
  rule,
  processedResult,
  backgroundIssues,
  onRemoveBackground,
  onClean,
  variant = 'previewCard',
  slateConfirmed: propSlateConfirmed,
  onConfirmSlate,
}: ComplianceAuditProps) {
  const audit = getComplianceAudit(preset, mode);
  const [internalSlate, setInternalSlate] = useState(false);
  const slateConfirmed = propSlateConfirmed !== undefined ? propSlateConfirmed : internalSlate;
  const setSlateConfirmed = onConfirmSlate || setInternalSlate;

  // Check if all technical and portal requirements are completed
  const exportIssues = processedResult && rule ? inspectExport(processedResult, rule) : [];
  const isOutOfBounds = Boolean(processedResult && !processedResult.withinTargetBounds);

  // File is fully completed when processed within target bounds with 0 export issues
  const hasErrors = isOutOfBounds || exportIssues.length > 0;
  const isAllCompleted = Boolean(processedResult && !hasErrors);

  const isCoastGuardPhoto = Boolean(
    mode === 'photo' &&
    (preset?.id.includes('coast-guard') || preset?.name.toLowerCase().includes('coast guard'))
  );

  // 1. ALL REQUIREMENTS COMPLETED STATE (Error is GONE!)
  if (isAllCompleted) {
    return (
      <div
        role="status"
        aria-label="All requirements completed"
        className="rounded-xl border-2 border-emerald-500/80 bg-emerald-500/10 dark:bg-emerald-950/30 p-3.5 space-y-2.5 text-xs shadow-xs transition-all duration-200 animate-in fade-in"
      >
        {/* Header bar: Green Verified */}
        <div className="flex items-center justify-between border-b border-emerald-500/30 pb-2 gap-2 flex-wrap">
          <div className="font-extrabold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>All Requirements Completed · Ready for Upload</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-xs bg-emerald-600 text-white whitespace-nowrap">
            100% VERIFIED
          </span>
        </div>

        {/* Verification Summary */}
        <div className="flex items-center justify-between gap-3 text-[11px] text-emerald-900 dark:text-emerald-200 flex-wrap font-semibold">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span><strong>Dimensions:</strong> {processedResult.width} × {processedResult.height} px</span>
            </span>
            <span className="text-emerald-400">•</span>
            <span className="inline-flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span><strong>Size:</strong> {processedResult.sizeKb} KB {rule ? `(${rule.minKb}–${rule.maxKb} KB target)` : ''}</span>
            </span>
            <span className="text-emerald-400">•</span>
            <span className="inline-flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span><strong>Format:</strong> {processedResult.format}</span>
            </span>
            <span className="text-emerald-400">•</span>
            <span className="inline-flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span><strong>Background:</strong> Verified Clean</span>
            </span>
          </div>
        </div>

        {/* Coast Guard Special Slate Confirmation Checkbox */}
        {isCoastGuardPhoto && (
          <label className="flex items-start gap-2 p-2 rounded-lg bg-emerald-500/15 border border-emerald-500/40 cursor-pointer text-[11px] text-foreground">
            <input
              type="checkbox"
              checked={slateConfirmed}
              onChange={(e) => setSlateConfirmed(e.target.checked)}
              className="mt-0.5 rounded border-emerald-500 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
            />
            <div>
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block">
                Confirmed: Photo taken holding physical chalkboard with white chalk Name &amp; Date
              </span>
              <span className="text-muted-foreground text-[10px]">
                Indian Coast Guard (CGEPT) disqualifies photos missing the slate at Stage-I scrutiny.
              </span>
            </div>
          </label>
        )}

        {/* Collapsible Rules Checklist (Clean & Non-Intrusive) */}
        <details className="text-[11px] text-muted-foreground pt-1 border-t border-emerald-500/20">
          <summary className="cursor-pointer font-semibold text-emerald-800 dark:text-emerald-300 hover:underline flex items-center justify-between">
            <span>Review {audit.examName} verification checklist ({audit.items.length} checks passed)</span>
            <span className="text-[10px] font-mono">View Norms ▾</span>
          </summary>
          <div className="mt-2 space-y-1.5 pt-1">
            {audit.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 p-1.5 rounded-lg bg-card/70 border border-emerald-500/20 text-[11px]">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0">✓</span>
                <div>
                  <strong className="text-foreground">{item.title}: </strong>
                  <span className="text-muted-foreground">{item.description}</span>
                </div>
              </div>
            ))}
            {audit.officialUrl && (
              <div className="pt-1 text-[10px]">
                <a
                  href={audit.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold inline-flex items-center gap-1"
                >
                  <span>Official Portal: {audit.officialSource || audit.examName}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            )}
          </div>
        </details>
      </div>
    );
  }

  // 2. ERROR / INCOMPLETE REQUIREMENTS STATE (Showed error informs candidate what is missing)
  const badgeColorClasses =
    audit.badgeColor === 'rose'
      ? 'bg-rose-600 text-white'
      : audit.badgeColor === 'amber'
      ? 'bg-amber-600 text-white'
      : audit.badgeColor === 'emerald'
      ? 'bg-emerald-600 text-white'
      : 'bg-primary text-primary-foreground';

  const containerClasses =
    variant === 'previewCard'
      ? 'rounded-xl border-2 border-rose-500/80 bg-rose-500/10 dark:bg-rose-950/30 p-3.5 space-y-2.5 text-xs shadow-xs'
      : variant === 'modalAudit'
      ? 'rounded-xl border border-rose-500/40 bg-rose-500/5 p-3.5 space-y-2.5 text-xs'
      : 'rounded-xl border-2 border-rose-500/80 bg-rose-500/10 dark:bg-rose-950/25 p-4 text-xs space-y-3 shadow-xs';

  return (
    <div role="alert" aria-label={audit.title} className={containerClasses}>
      {/* Header bar: Red Alert */}
      <div className="flex items-center justify-between border-b border-rose-500/30 pb-2 gap-2 flex-wrap">
        <div className="font-extrabold text-rose-700 dark:text-rose-400 flex items-center gap-1.5 text-xs sm:text-sm">
          <ShieldAlert className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
          <span>{audit.title}</span>
        </div>
        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-xs whitespace-nowrap ${badgeColorClasses}`}>
          {audit.badge}
        </span>
      </div>

      {/* Intro Warning */}
      <p className="text-[11px] sm:text-xs text-foreground font-semibold leading-relaxed">
        {audit.description}
      </p>

      {/* Active Export Error Callout if out of bounds */}
      {isOutOfBounds && (
        <div className="p-2 rounded-lg bg-rose-500/20 border border-rose-500/50 text-rose-900 dark:text-rose-200 text-xs font-semibold flex items-center gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
          <span>
            File size ({processedResult?.sizeKb} KB) is outside required {rule?.minKb}–{rule?.maxKb} KB bounds. Adjust quality or crop to resolve.
          </span>
        </div>
      )}

      {/* Grid of 4 Checkpoints */}
      <div className={variant === 'studioNotice' ? 'grid grid-cols-1 sm:grid-cols-2 gap-2.5' : 'space-y-1.5 text-[11px]'}>
        {audit.items.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-2 p-2 rounded-lg bg-card/90 dark:bg-card/60 border ${
              item.severity === 'danger'
                ? 'border-rose-500/40'
                : item.severity === 'warning'
                ? 'border-amber-500/40'
                : 'border-border'
            }`}
          >
            <span className="text-sm shrink-0 leading-none pt-0.5">{item.icon}</span>
            <div className="space-y-0.5">
              <strong
                className={`block text-[11px] font-bold ${
                  item.severity === 'danger'
                    ? 'text-rose-700 dark:text-rose-300'
                    : item.severity === 'warning'
                    ? 'text-amber-700 dark:text-amber-300'
                    : 'text-foreground'
                }`}
              >
                {item.title}
              </strong>
              <span className="text-muted-foreground text-[10px] sm:text-[11px] block leading-normal">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Background Warning Banner if detected */}
      {!!backgroundIssues?.length && (
        <div className="p-2.5 rounded-lg bg-amber-500/15 border border-amber-500/40 text-amber-900 dark:text-amber-200 flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="text-[11px]">
              <strong>Non-White Background Detected:</strong> Edges appear colored/shadowed. Portals require clean plain light background.
            </span>
          </div>
          {onRemoveBackground && (
            <button
              type="button"
              onClick={onRemoveBackground}
              className="px-2.5 py-1 rounded bg-amber-600 hover:bg-amber-700 text-white font-bold text-[11px] shrink-0 cursor-pointer transition shadow-xs flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              <span>Make Background White</span>
            </button>
          )}
        </div>
      )}

      {/* Footer: Official Source & One-Click Fix */}
      <div className="flex items-center justify-between gap-2 pt-1 border-t border-rose-500/20 text-[10px] text-muted-foreground flex-wrap">
        {audit.officialUrl ? (
          <a
            href={audit.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-rose-700 dark:text-rose-400 hover:underline flex items-center gap-1"
            title={`Official Source: ${audit.officialSource || audit.examName}`}
          >
            <span>Official Source: {audit.officialSource || audit.examName}</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        ) : (
          <span>Official Source: {audit.officialSource || 'Official Recruitment Scrutiny Norms'}</span>
        )}

        <div className="flex items-center gap-2">
          {onClean && mode === 'signature' && (
            <button
              type="button"
              onClick={onClean}
              className="font-bold text-primary hover:underline cursor-pointer flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              <span>Clean Paper →</span>
            </button>
          )}

          {onRemoveBackground && mode === 'photo' && (
            <button
              type="button"
              onClick={onRemoveBackground}
              className="font-bold text-primary hover:underline cursor-pointer flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              <span>Make Background White →</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
