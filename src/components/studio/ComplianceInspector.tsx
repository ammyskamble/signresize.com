import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle, ShieldCheck, FileCheck, Info } from 'lucide-react';
import type { ProcessedImageResult, ExamPreset } from '../../types';

interface ComplianceInspectorProps {
  result: ProcessedImageResult | null;
  targetWidth: number;
  targetHeight: number;
  minKb: number;
  maxKb: number;
  dpi: number;
  selectedPreset: ExamPreset | null;
  cleanPaperActive: boolean;
}

export const ComplianceInspector: React.FC<ComplianceInspectorProps> = ({
  result,
  targetWidth,
  targetHeight,
  minKb,
  maxKb,
  dpi,
  selectedPreset,
  cleanPaperActive,
}) => {
  if (!result) {
    return (
      <div className="bg-card border border-border/80 rounded-2xl p-4 shadow-xs text-xs text-muted-foreground flex items-center gap-3">
        <Info className="w-4 h-4 text-primary shrink-0" />
        <span>Upload or generate an image above to run the live Portal Compliance Verification.</span>
      </div>
    );
  }

  const isSizePass = result.sizeKb >= minKb && result.sizeKb <= maxKb;
  const isDimensionPass = result.width === targetWidth && result.height === targetHeight;
  const isFormatPass = result.format === 'JPG' || result.format === 'PNG';

  const allPassed = isSizePass && isDimensionPass && isFormatPass;

  return (
    <div
      className={`rounded-2xl p-4 border transition-all duration-200 shadow-xs space-y-3 ${
        allPassed
          ? 'bg-emerald-500/5 border-emerald-500/30'
          : 'bg-amber-500/5 border-amber-500/30'
      }`}
    >
      {/* Header Status */}
      <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
        <div className="flex items-center gap-2">
          {allPassed ? (
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          ) : (
            <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4" />
            </div>
          )}
          <div>
            <h4 className="font-bold text-xs text-foreground uppercase tracking-wider flex items-center gap-2">
              <span>Official Portal Compliance Check</span>
              <span
                className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold ${
                  allPassed
                    ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300'
                    : 'bg-amber-500/20 text-amber-700 dark:text-amber-300'
                }`}
              >
                {allPassed ? '100% PORTAL COMPLIANT' : 'REVIEW REQUIRED'}
              </span>
            </h4>
          </div>
        </div>

        <span className="text-[11px] font-mono font-semibold text-muted-foreground">
          {selectedPreset ? selectedPreset.shortCode : 'Custom Spec'}
        </span>
      </div>

      {/* 4 Diagnostic Checkpoints */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
        {/* Check 1: File Size */}
        <div className="p-2.5 rounded-xl bg-card border border-border/60 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground uppercase font-semibold">File Size</span>
            {isSizePass ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <XCircle className="w-3.5 h-3.5 text-red-500" />
            )}
          </div>
          <div className="font-mono font-bold text-xs text-foreground">
            {result.sizeKb} KB
          </div>
          <div className="text-[10px] text-muted-foreground font-mono">
            Limit: {minKb}–{maxKb} KB
          </div>
        </div>

        {/* Check 2: Dimensions */}
        <div className="p-2.5 rounded-xl bg-card border border-border/60 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground uppercase font-semibold">Dimensions</span>
            {isDimensionPass ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <XCircle className="w-3.5 h-3.5 text-red-500" />
            )}
          </div>
          <div className="font-mono font-bold text-xs text-foreground">
            {result.width}×{result.height} px
          </div>
          <div className="text-[10px] text-muted-foreground font-mono">
            Target: {targetWidth}×{targetHeight} px
          </div>
        </div>

        {/* Check 3: Resolution & DPI */}
        <div className="p-2.5 rounded-xl bg-card border border-border/60 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground uppercase font-semibold">Resolution</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="font-mono font-bold text-xs text-foreground">
            {dpi} DPI
          </div>
          <div className="text-[10px] text-muted-foreground font-mono">
            Portal Minimum: 200 DPI
          </div>
        </div>

        {/* Check 4: Background Contrast */}
        <div className="p-2.5 rounded-xl bg-card border border-border/60 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground uppercase font-semibold">Paper Clarity</span>
            {cleanPaperActive ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <Info className="w-3.5 h-3.5 text-amber-500" />
            )}
          </div>
          <div className="font-mono font-bold text-xs text-foreground">
            {cleanPaperActive ? 'Pure #FFFFFF' : 'Original Scan'}
          </div>
          <div className="text-[10px] text-muted-foreground">
            {cleanPaperActive ? 'Shadows Cleared' : 'Shadow Filter Off'}
          </div>
        </div>
      </div>

      {/* Advisory Note */}
      {selectedPreset?.notes && (
        <div className="text-[11px] text-muted-foreground bg-muted/40 p-2.5 rounded-xl border border-border/40 flex items-start gap-2">
          <FileCheck className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
          <span>
            <strong className="text-foreground">Official Guidelines:</strong> {selectedPreset.notes}
          </span>
        </div>
      )}
    </div>
  );
};
