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
  upssscConfirmed?: boolean;
  onConfirmUpsssc?: (confirmed: boolean) => void;
  tnpscPhotoConfirmed?: boolean;
  onConfirmTnpscPhoto?: (confirmed: boolean) => void;
  tnpscSignConfirmed?: boolean;
  onConfirmTnpscSign?: (confirmed: boolean) => void;
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
  upssscConfirmed: propUpssscConfirmed,
  onConfirmUpsssc,
  tnpscPhotoConfirmed: propTnpscPhotoConfirmed,
  onConfirmTnpscPhoto,
  tnpscSignConfirmed: propTnpscSignConfirmed,
  onConfirmTnpscSign,
}: ComplianceAuditProps) {
  const audit = getComplianceAudit(preset, mode);
  const [internalSlate, setInternalSlate] = useState(false);
  const slateConfirmed = propSlateConfirmed !== undefined ? propSlateConfirmed : internalSlate;
  const setSlateConfirmed = onConfirmSlate || setInternalSlate;

  const [internalUpsssc, setInternalUpsssc] = useState(false);
  const upssscConfirmed = propUpssscConfirmed !== undefined ? propUpssscConfirmed : internalUpsssc;
  const setUpssscConfirmed = onConfirmUpsssc || setInternalUpsssc;

  const [internalTnpscPhoto, setInternalTnpscPhoto] = useState(false);
  const tnpscPhotoConfirmed = propTnpscPhotoConfirmed !== undefined ? propTnpscPhotoConfirmed : internalTnpscPhoto;
  const setTnpscPhotoConfirmed = onConfirmTnpscPhoto || setInternalTnpscPhoto;

  const [internalTnpscSign, setInternalTnpscSign] = useState(false);
  const tnpscSignConfirmed = propTnpscSignConfirmed !== undefined ? propTnpscSignConfirmed : internalTnpscSign;
  const setTnpscSignConfirmed = onConfirmTnpscSign || setInternalTnpscSign;

  // A selected preset is the compliance baseline. Editable controls must not
  // make a divergent export look compliant with that recruitment preset.
  const verificationRule = preset ?? rule;
  const exportIssues = processedResult && verificationRule ? inspectExport(processedResult, verificationRule) : [];
  const isOutOfBounds = Boolean(processedResult && !processedResult.withinTargetBounds);
  const hasBgIssues = Boolean(backgroundIssues && backgroundIssues.length > 0);
  const ruledPaperIssue = backgroundIssues?.find((i) => i.code === 'ruled_paper');
  const genericBgIssue = backgroundIssues?.find((i) => i.code === 'background' || i.code === 'bg');

  const isCoastGuardPhoto = Boolean(
    mode === 'photo' &&
    (preset?.id.includes('coast-guard') ||
     preset?.name.toLowerCase().includes('coast guard') ||
     preset?.authority.toLowerCase().includes('coast guard') ||
     audit.examName === 'Indian Coast Guard')
  );

  const isUpssscSignature = Boolean(
    mode === 'signature' &&
    (preset?.id.includes('upsssc') ||
     preset?.name.toLowerCase().includes('upsssc') ||
     preset?.authority.toLowerCase().includes('upsssc') ||
     preset?.id.includes('pet') ||
     audit.examName === 'UPSSSC')
  );

  const isTnpscPhoto = Boolean(
    mode === 'photo' &&
    (preset?.id.includes('tnpsc') ||
     preset?.name.toLowerCase().includes('tnpsc') ||
     preset?.authority.toLowerCase().includes('tnpsc') ||
     audit.examName.includes('TNPSC') ||
     audit.examName.includes('Tamil Nadu PSC'))
  );

  const isTnpscSignature = Boolean(
    mode === 'signature' &&
    (preset?.id.includes('tnpsc') ||
     preset?.name.toLowerCase().includes('tnpsc') ||
     preset?.authority.toLowerCase().includes('tnpsc') ||
     audit.examName.includes('TNPSC') ||
     audit.examName.includes('Tamil Nadu PSC'))
  );

  const isSlatePending = Boolean(isCoastGuardPhoto && !slateConfirmed);
  const isUpssscPending = Boolean(isUpssscSignature && !upssscConfirmed);
  const isTnpscPhotoPending = Boolean(isTnpscPhoto && !tnpscPhotoConfirmed);
  const isTnpscSignPending = Boolean(isTnpscSignature && !tnpscSignConfirmed);

  // File is fully completed when:
  // 1. Processed within target bounds
  // 2. 0 export issues
  // 3. 0 background/ruled line issues
  // 4. Coast Guard slate confirmed (if Coast Guard photo)
  // 5. UPSSSC Clause 9.3 confirmed (if UPSSSC signature)
  // 6. TNPSC Name & Date confirmed (if TNPSC photo)
  // 7. TNPSC Cursive signature confirmed (if TNPSC signature)
  const hasErrors = isOutOfBounds || exportIssues.length > 0 || hasBgIssues || isSlatePending || isUpssscPending || isTnpscPhotoPending || isTnpscSignPending;
  const isAllCompleted = Boolean(processedResult && !hasErrors);
  const requiresAdvertisementVerification = preset?.portalExactSpecsVerified === false;

  // 1. ALL REQUIREMENTS COMPLETED STATE (Clean Green Success)
  if (isAllCompleted) {
    return (
      <div
        role="status"
        aria-label="Technical requirements and compliance checks completed"
        className="rounded-xl border-2 border-emerald-500/70 bg-emerald-500/10 dark:bg-emerald-950/30 p-3.5 space-y-2.5 text-xs shadow-xs transition-all duration-200 animate-in fade-in"
      >
        <div className="flex items-center justify-between border-b border-emerald-500/30 pb-2 gap-2 flex-wrap">
          <div className="font-extrabold flex items-center gap-1.5 text-xs sm:text-sm text-emerald-800 dark:text-emerald-300">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span>Technical Specifications Met — Ready for Download</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-xs text-white whitespace-nowrap bg-emerald-600">
            SPECS VERIFIED
          </span>
        </div>

        {requiresAdvertisementVerification && (
          <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2 text-[11px] font-semibold text-emerald-950 dark:text-emerald-100 flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>File matches official {audit.examName} guidelines. Prepared and ready to upload.</span>
          </p>
        )}

        {/* Verification Summary */}
        {processedResult && (
          <div className="text-[11px] text-emerald-900 dark:text-emerald-200 font-semibold">
            <div className="flex items-center gap-x-3 gap-y-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span><strong>Dimensions:</strong> {processedResult.width} × {processedResult.height} px</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span><strong>Size:</strong> {processedResult.sizeKb} KB {rule ? `(${rule.minKb}–${rule.maxKb} KB target)` : ''}</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span><strong>Format:</strong> {processedResult.format}</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span><strong>Background:</strong> Clean Paper</span>
              </span>
            </div>
          </div>
        )}

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
                ✓ Confirmed: Photo taken holding physical chalkboard with white chalk Name &amp; Date
              </span>
              <span className="text-muted-foreground text-[10px]">
                Indian Coast Guard (CGEPT) Stage-I scrutiny verified by candidate. Click to unconfirm.
              </span>
            </div>
          </label>
        )}

        {/* UPSSSC PET Special Confirmation Checkbox */}
        {isUpssscSignature && (
          <label className="flex items-start gap-2 p-2 rounded-lg bg-emerald-500/15 border border-emerald-500/40 cursor-pointer text-[11px] text-foreground">
            <input
              type="checkbox"
              checked={upssscConfirmed}
              onChange={(e) => setUpssscConfirmed(e.target.checked)}
              className="mt-0.5 rounded border-emerald-500 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
            />
            <div>
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block">
                ✓ Confirmed: Signature in English with full Name in Hindi directly below on plain unruled paper
              </span>
              <span className="text-muted-foreground text-[10px]">
                UPSSSC PET Clause 9.3 verified by candidate. Click to unconfirm.
              </span>
            </div>
          </label>
        )}

        {/* TNPSC Mandatory Photo Name & Date Confirmation Checkbox */}
        {isTnpscPhoto && (
          <label className="flex items-start gap-2 p-2 rounded-lg bg-emerald-500/15 border border-emerald-500/40 cursor-pointer text-[11px] text-foreground">
            <input
              type="checkbox"
              checked={tnpscPhotoConfirmed}
              onChange={(e) => setTnpscPhotoConfirmed(e.target.checked)}
              className="mt-0.5 rounded border-emerald-500 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
            />
            <div>
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block">
                ✓ Confirmed: Candidate Name &amp; Date of Photo (DOP) printed at bottom of photo
              </span>
              <span className="text-muted-foreground text-[10px]">
                TNPSC Commission Instructions (Clause 3) verified by candidate. Click to unconfirm.
              </span>
            </div>
          </label>
        )}

        {/* TNPSC Mandatory Running Cursive Signature Confirmation Checkbox */}
        {isTnpscSignature && (
          <label className="flex items-start gap-2 p-2 rounded-lg bg-emerald-500/15 border border-emerald-500/40 cursor-pointer text-[11px] text-foreground">
            <input
              type="checkbox"
              checked={tnpscSignConfirmed}
              onChange={(e) => setTnpscSignConfirmed(e.target.checked)}
              className="mt-0.5 rounded border-emerald-500 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
            />
            <div>
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block">
                ✓ Confirmed: Signature in natural running cursive handwriting (No Capital/Block letters)
              </span>
              <span className="text-muted-foreground text-[10px]">
                TNPSC Instructions to Applicants disqualification rule verified. Click to unconfirm.
              </span>
            </div>
          </label>
        )}

        {/* Collapsible Rules Checklist (Clean & Non-Intrusive) */}
        <details className="group text-[11px] text-muted-foreground pt-1 border-t border-emerald-500/20 compliance-rules-details">
          <summary className="cursor-pointer font-semibold text-emerald-800 dark:text-emerald-300 hover:text-emerald-900 dark:hover:text-emerald-200 flex items-center justify-between gap-2 py-1 list-none [&::-webkit-details-marker]:hidden">
            <span className="truncate">Review {audit.examName} verification checklist ({audit.items.length} checks)</span>
            <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-300 shrink-0 inline-flex items-center gap-1 group-open:hidden">
              View Norms ▾
            </span>
            <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-300 shrink-0 hidden group-open:inline-flex items-center gap-1">
              Hide Norms ▴
            </span>
          </summary>
          <div className="mt-2 space-y-1.5 pt-1">
            {audit.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 p-1.5 rounded-lg bg-card/70 border border-emerald-500/20 text-[11px]">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0">{requiresAdvertisementVerification ? '•' : '✓'}</span>
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
  const badgeText = isSlatePending
    ? 'SLATE CONFIRMATION REQUIRED'
    : isUpssscPending
    ? 'CLAUSE 9.3 CHECK REQUIRED'
    : audit.badge;

  const badgeColorClasses =
    isSlatePending || isUpssscPending
      ? 'bg-amber-600 text-white'
      : audit.badgeColor === 'rose'
      ? 'bg-rose-600 text-white'
      : audit.badgeColor === 'amber'
      ? 'bg-amber-600 text-white'
      : audit.badgeColor === 'emerald'
      ? 'bg-emerald-600 text-white'
      : 'bg-primary text-primary-foreground';

  const containerClasses =
    variant === 'previewCard'
      ? `rounded-xl border-2 ${isSlatePending || isUpssscPending ? 'border-amber-500/80 bg-amber-500/10 dark:bg-amber-950/30' : 'border-rose-500/80 bg-rose-500/10 dark:bg-rose-950/30'} p-3.5 space-y-2.5 text-xs shadow-xs transition-all`
      : variant === 'modalAudit'
      ? `rounded-xl border ${isSlatePending || isUpssscPending ? 'border-amber-500/50 bg-amber-500/5' : 'border-rose-500/40 bg-rose-500/5'} p-3.5 space-y-2.5 text-xs`
      : `rounded-xl border-2 ${isSlatePending || isUpssscPending ? 'border-amber-500/80 bg-amber-500/10 dark:bg-amber-950/25' : 'border-rose-500/80 bg-rose-500/10 dark:bg-rose-950/25'} p-4 text-xs space-y-3 shadow-xs`;

  return (
    <div role="alert" aria-label={audit.title} className={containerClasses}>
      {/* Header bar: Alert */}
      <div className="flex items-center justify-between border-b border-rose-500/30 pb-2 gap-2 flex-wrap">
        <div className={`font-extrabold flex items-center gap-1.5 text-xs sm:text-sm ${
          isSlatePending || isUpssscPending ? 'text-amber-800 dark:text-amber-300' : 'text-rose-700 dark:text-rose-400'
        }`}>
          {isSlatePending || isUpssscPending ? (
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          ) : (
            <ShieldAlert className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
          )}
          <span>
            {isSlatePending
              ? 'Indian Coast Guard Stage-I Scrutiny: Slate Required'
              : isUpssscPending
              ? 'UPSSSC PET Clause 9.3 Scrutiny: Hindi Name Required'
              : audit.title}
          </span>
        </div>
        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-xs whitespace-nowrap ${badgeColorClasses}`}>
          {badgeText}
        </span>
      </div>

      {/* Intro Warning */}
      <p className="text-[11px] sm:text-xs text-foreground font-semibold leading-relaxed">
        {audit.description}
      </p>

      {/* Coast Guard Mandatory Slate Confirmation Banner with Interactive Checkbox */}
      {isCoastGuardPhoto && (
        <label className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer text-xs transition ${
          slateConfirmed
            ? 'bg-emerald-500/15 border-emerald-500/40 text-foreground'
            : 'bg-amber-500/20 border-2 border-amber-500/70 text-amber-950 dark:text-amber-100 shadow-sm'
        }`}>
          <input
            type="checkbox"
            checked={slateConfirmed}
            onChange={(e) => setSlateConfirmed(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-amber-500 text-amber-600 focus:ring-amber-500 cursor-pointer shrink-0"
          />
          <div className="space-y-1">
            <span className="font-extrabold block text-amber-900 dark:text-amber-200">
              {slateConfirmed ? '✓ Confirmed: ' : '⚠️ Candidate Confirmation Required: '}Photo taken holding physical chalkboard with white chalk Name &amp; Date
            </span>
            <span className="text-[11px] text-muted-foreground block leading-relaxed">
              Join Indian Coast Guard (CGEPT) strictly disqualifies photos missing the physical chalkboard at Stage-I document scrutiny. Digital text overlays or normal photos are rejected. Click to confirm your photo complies.
            </span>
          </div>
        </label>
      )}

      {/* UPSSSC PET Special Confirmation Banner with Interactive Checkbox */}
      {isUpssscSignature && (
        <label className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer text-xs transition ${
          upssscConfirmed
            ? 'bg-emerald-500/15 border-emerald-500/40 text-foreground'
            : 'bg-amber-500/20 border-2 border-amber-500/70 text-amber-950 dark:text-amber-100 shadow-sm'
        }`}>
          <input
            type="checkbox"
            checked={upssscConfirmed}
            onChange={(e) => setUpssscConfirmed(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-amber-500 text-amber-600 focus:ring-amber-500 cursor-pointer shrink-0"
          />
          <div className="space-y-1">
            <span className="font-extrabold block text-amber-900 dark:text-amber-200">
              {upssscConfirmed ? '✓ Confirmed: ' : '⚠️ Candidate Confirmation Required: '}Signature in English with full Name in Hindi directly below on plain unruled paper
            </span>
            <span className="text-[11px] text-muted-foreground block leading-relaxed">
              UPSSSC PET Clause 9.3 automatically cancels applications if Hindi name is missing below English signature or if signed on ruled notebook lines. Click to confirm your signature complies.
            </span>
          </div>
        </label>
      )}

      {/* TNPSC Mandatory Photo Name & Date Interactive Confirmation Checkbox */}
      {isTnpscPhoto && (
        <label className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer text-xs transition ${
          tnpscPhotoConfirmed
            ? 'bg-emerald-500/15 border-emerald-500/40 text-foreground'
            : 'bg-amber-500/20 border-2 border-amber-500/70 text-amber-950 dark:text-amber-100 shadow-sm'
        }`}>
          <input
            type="checkbox"
            checked={tnpscPhotoConfirmed}
            onChange={(e) => setTnpscPhotoConfirmed(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-amber-500 text-amber-600 focus:ring-amber-500 cursor-pointer shrink-0"
          />
          <div className="space-y-1">
            <span className="font-extrabold block text-amber-900 dark:text-amber-200">
              {tnpscPhotoConfirmed ? '✓ Confirmed: ' : '⚠️ Candidate Confirmation Required: '}Photo contains Candidate Name &amp; Date of Photo (DOP) printed at bottom
            </span>
            <span className="text-[11px] text-muted-foreground block leading-relaxed">
              TNPSC Commission Instructions (Clause 3 / Annexure II) mandate candidate full name and date of photograph (within 3 months) in a white box at the bottom. Plain photos without name/date are rejected at scrutiny. Click to confirm your photo complies.
            </span>
          </div>
        </label>
      )}

      {/* TNPSC Mandatory Running Cursive Signature Interactive Confirmation Checkbox */}
      {isTnpscSignature && (
        <label className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer text-xs transition ${
          tnpscSignConfirmed
            ? 'bg-emerald-500/15 border-emerald-500/40 text-foreground'
            : 'bg-amber-500/20 border-2 border-amber-500/70 text-amber-950 dark:text-amber-100 shadow-sm'
        }`}>
          <input
            type="checkbox"
            checked={tnpscSignConfirmed}
            onChange={(e) => setTnpscSignConfirmed(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-amber-500 text-amber-600 focus:ring-amber-500 cursor-pointer shrink-0"
          />
          <div className="space-y-1">
            <span className="font-extrabold block text-amber-900 dark:text-amber-200">
              {tnpscSignConfirmed ? '✓ Confirmed: ' : '⚠️ Candidate Confirmation Required: '}Signature signed in running cursive handwriting (NOT capital/block letters)
            </span>
            <span className="text-[11px] text-muted-foreground block leading-relaxed">
              TNPSC Instructions to Applicants strictly prohibit capital/block letters for signature and will reject the application. Must be signed in running handwriting with dark blue or black ballpoint pen on plain white paper. Click to confirm.
            </span>
          </div>
        </label>
      )}

      {/* Active Export Error Callout if out of bounds */}
      {isOutOfBounds && (
        <div className="p-2 rounded-lg bg-rose-500/20 border border-rose-500/50 text-rose-900 dark:text-rose-200 text-xs font-semibold flex items-center gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
          <span>
            File size ({processedResult?.sizeKb} KB) is outside required {rule?.minKb}–{rule?.maxKb} KB bounds. Adjust quality or crop to resolve.
          </span>
        </div>
      )}

      {exportIssues.length > 0 && (
        <div className="p-2 rounded-lg bg-rose-500/20 border border-rose-500/50 text-rose-900 dark:text-rose-200 text-xs font-semibold space-y-1.5">
          <div>Selected preset requirements are not met:</div>
          <ul className="list-disc pl-4 space-y-1 font-normal">
            {exportIssues.map((issue) => <li key={issue.code}>{issue.message}</li>)}
          </ul>
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

      {/* Ruled Notebook Paper Warning Banner if detected */}
      {ruledPaperIssue && (
        <div className="p-2.5 rounded-lg bg-rose-500/15 border-2 border-rose-500/60 text-rose-900 dark:text-rose-200 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700 dark:text-rose-300">
            <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
            <span>Notebook Ruled Lines Detected (High Disqualification Risk)</span>
          </div>
          <p className="text-[11px] leading-relaxed">
            {ruledPaperIssue.message}
          </p>
          <div className="flex items-center gap-2 pt-1 flex-wrap">
            {onClean && (
              <button
                type="button"
                onClick={onClean}
                className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-[11px] shrink-0 cursor-pointer transition shadow-xs flex items-center gap-1.5 active:scale-98"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Apply Clean White Paper Filter</span>
              </button>
            )}
            {onRemoveBackground && (
              <button
                type="button"
                onClick={onRemoveBackground}
                className="px-3 py-1.5 rounded-lg bg-card hover:bg-muted text-foreground border border-border/80 font-semibold text-[11px] shrink-0 cursor-pointer transition flex items-center gap-1 shadow-2xs"
              >
                <span>⚡ Paper Quick Fix →</span>
              </button>
            )}
            <span className="text-[10px] text-muted-foreground">Or retake on plain unruled white paper.</span>
          </div>
        </div>
      )}

      {/* Dynamic Background Warning Banner if regular non-white background detected */}
      {!ruledPaperIssue && genericBgIssue && (
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
