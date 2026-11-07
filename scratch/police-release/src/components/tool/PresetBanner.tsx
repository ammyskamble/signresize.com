import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import type { ExamPreset } from '../../types';

interface PresetBannerProps {
  selectedPreset: ExamPreset | null;
  targetWidthPx: number;
  targetHeightPx: number;
  minKb: number;
  maxKb: number;
  dpi: number;
  hasSourceImage?: boolean;
  targetType?: 'signature' | 'photo' | 'document';
  onChangePresetClick?: () => void;
  onClearClick?: () => void;
  onToast?: (message: string, title?: string, type?: 'success' | 'info' | 'warning') => void;
}

export const PresetBanner: React.FC<PresetBannerProps> = ({
  selectedPreset,
  targetWidthPx,
  targetHeightPx,
  minKb,
  maxKb,
  dpi,
  hasSourceImage,
  targetType = 'signature',
  onChangePresetClick,
  onClearClick,
  onToast,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleSharePreset = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPreset) return;
    const shareUrl = `${window.location.origin}/?preset=${encodeURIComponent(selectedPreset.id)}#tool-workspace`;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const input = document.createElement('input');
        input.value = shareUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
      onToast?.(`Copied link for ${selectedPreset.name}`, 'Preset Link Copied', 'success');
    } catch (err) {
      console.error('Failed to copy preset link', err);
    }
  };

  const handleChangePreset = () => {
    if (onChangePresetClick) {
      onChangePresetClick();
    } else {
      window.dispatchEvent(new CustomEvent('open-header-preset-search'));
    }
  };

  return (
    <div className="flex items-center justify-between py-1.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-border text-xs gap-3 shadow-2xs">
      <div className="flex items-center gap-2 min-w-0 truncate">
        <span className="inline-flex items-center gap-1.5 font-bold text-foreground shrink-0">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
          <strong>{selectedPreset ? selectedPreset.shortCode : 'Custom'}:</strong>
        </span>
        <span className="text-muted-foreground truncate">
          <strong className="text-foreground font-mono">{targetWidthPx}×{targetHeightPx} px</strong> ({minKb}–{maxKb} KB)
          {selectedPreset?.inkRequirement && targetType === 'signature' && (
            <span> • <span className="text-amber-700 dark:text-amber-300 font-medium">{selectedPreset.inkRequirement}</span></span>
          )}
          {targetType === 'photo' && (
            <span> • <span className="text-blue-600 dark:text-blue-400 font-medium">Light / White BG</span></span>
          )}
          {targetType === 'document' && (
            <span> • <span className="text-emerald-600 dark:text-emerald-400 font-medium">Clear Board Stamp</span></span>
          )}
          {selectedPreset?.notes && (
            <span className="hidden sm:inline"> • {selectedPreset.notes.split('.')[0]}</span>
          )}
        </span>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {selectedPreset && (
          <button
            type="button"
            onClick={handleSharePreset}
            title="Share Preset Link"
            className="text-muted-foreground hover:text-foreground transition p-1 rounded hover:bg-muted cursor-pointer"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
          </button>
        )}
        <button
          type="button"
          onClick={handleChangePreset}
          className="text-primary hover:underline font-semibold text-xs cursor-pointer whitespace-nowrap"
        >
          Change Preset
        </button>
      </div>
    </div>
  );
};
