import React from 'react';
import { Sparkles, Sun, Contrast, RotateCcw, FileText } from 'lucide-react';
import type { FilterOptions, ToolTargetMode } from '../../types';

interface ImageFiltersProps {
  filters: FilterOptions;
  onChangeFilters: (filters: FilterOptions) => void;
  mode: ToolTargetMode;
}

export const ImageFilters: React.FC<ImageFiltersProps> = ({
  filters,
  onChangeFilters,
  mode,
}) => {
  const isDefault =
    !filters.cleanPaper &&
    !filters.blackAndWhite &&
    filters.brightness === 0 &&
    filters.contrast === 0;

  const handleReset = () => {
    onChangeFilters({
      cleanPaper: false,
      blackAndWhite: false,
      brightness: 0,
      contrast: 0,
      threshold: 128,
    });
  };

  const getCleanTitle = () => {
    if (mode === 'signature') return 'Whiten Paper Background';
    if (mode === 'photo') return 'Studio Lighting Balance';
    return 'Remove Page Shadows';
  };

  const getCleanSub = () => {
    if (mode === 'signature') return 'Eliminates phone camera shadows, yellow tint & creases';
    if (mode === 'photo') return 'Even lighting balance across candidate face & background';
    return 'Flattens scanned page lighting for crisp legibility';
  };

  const getBwTitle = () => {
    if (mode === 'signature') return 'Pure B&W Ink Mode';
    if (mode === 'photo') return 'Monochrome Grayscale';
    return 'High-Contrast Document Scan';
  };

  return (
    <div className="bg-card border border-border/80 rounded-2xl p-4 shadow-xs space-y-4">
      <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <h4 className="font-bold text-xs text-foreground uppercase tracking-wider">
            Image Quality &amp; Paper Clean Filters
          </h4>
        </div>

        {!isDefault && (
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground hover:text-foreground transition cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      {/* Two Main Quick Toggles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {/* Toggle 1: Clean Paper */}
        <button
          type="button"
          onClick={() => onChangeFilters({ ...filters, cleanPaper: !filters.cleanPaper })}
          className={`p-3 rounded-xl border text-left transition flex items-start gap-3 cursor-pointer ${
            filters.cleanPaper
              ? 'bg-primary/10 border-primary ring-1 ring-primary/30'
              : 'bg-muted/20 border-border/60 hover:bg-muted/40 text-foreground'
          }`}
        >
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
              filters.cleanPaper ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}
          >
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs text-foreground">{getCleanTitle()}</span>
              {filters.cleanPaper && (
                <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-primary text-primary-foreground">
                  ACTIVE
                </span>
              )}
            </div>
            <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{getCleanSub()}</p>
          </div>
        </button>

        {/* Toggle 2: B&W Monochrome */}
        <button
          type="button"
          onClick={() => onChangeFilters({ ...filters, blackAndWhite: !filters.blackAndWhite })}
          className={`p-3 rounded-xl border text-left transition flex items-start gap-3 cursor-pointer ${
            filters.blackAndWhite
              ? 'bg-primary/10 border-primary ring-1 ring-primary/30'
              : 'bg-muted/20 border-border/60 hover:bg-muted/40 text-foreground'
          }`}
        >
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
              filters.blackAndWhite ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}
          >
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs text-foreground">{getBwTitle()}</span>
              {filters.blackAndWhite && (
                <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-primary text-primary-foreground">
                  ACTIVE
                </span>
              )}
            </div>
            <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">
              High-contrast black strokes for instant portal OCR compliance
            </p>
          </div>
        </button>
      </div>

      {/* Sliders for Brightness & Contrast */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
        {/* Brightness */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground font-medium flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-muted-foreground" />
              Brightness
            </span>
            <span className="font-mono text-[11px] font-semibold text-foreground">
              {filters.brightness > 0 ? `+${filters.brightness}` : filters.brightness}
            </span>
          </div>
          <input
            type="range"
            min="-50"
            max="50"
            value={filters.brightness}
            onChange={(e) => onChangeFilters({ ...filters, brightness: Number(e.target.value) })}
            className="w-full accent-primary h-1.5 bg-muted rounded-lg cursor-pointer"
          />
        </div>

        {/* Contrast */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground font-medium flex items-center gap-1.5">
              <Contrast className="w-3.5 h-3.5 text-muted-foreground" />
              Contrast
            </span>
            <span className="font-mono text-[11px] font-semibold text-foreground">
              {filters.contrast > 0 ? `+${filters.contrast}` : filters.contrast}
            </span>
          </div>
          <input
            type="range"
            min="-50"
            max="50"
            value={filters.contrast}
            onChange={(e) => onChangeFilters({ ...filters, contrast: Number(e.target.value) })}
            className="w-full accent-primary h-1.5 bg-muted rounded-lg cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
