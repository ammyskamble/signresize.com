import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, Sparkles, Check, Bookmark } from 'lucide-react';
import type { ExamPreset, ToolTargetMode } from '../../types';
import {
  SIGNATURE_PRESETS,
  PHOTO_PRESETS,
  DOCUMENT_PRESETS,
  CATEGORIES,
} from '../../data/examPresets';

interface PresetPickerProps {
  mode: ToolTargetMode;
  selectedPreset: ExamPreset | null;
  onSelectPreset: (preset: ExamPreset) => void;
  searchPlaceholder?: string;
}

export const PresetPicker: React.FC<PresetPickerProps> = ({
  mode,
  selectedPreset,
  onSelectPreset,
  searchPlaceholder = 'Search exam (e.g. SSC, UPSC, RRB, GATE, NEET)...',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Popular');
  const [isExpanded, setIsExpanded] = useState(false);

  // Pool of presets based on active mode
  const currentPresets = useMemo(() => {
    switch (mode) {
      case 'photo':
        return PHOTO_PRESETS;
      case 'document':
        return DOCUMENT_PRESETS;
      case 'signature':
      default:
        return SIGNATURE_PRESETS;
    }
  }, [mode]);

  // Categories available for this mode
  const availableCategories = useMemo(() => {
    const cats = new Set<string>(['Popular']);
    currentPresets.forEach((p) => {
      if (p.category) cats.add(p.category);
    });
    return Array.from(cats);
  }, [currentPresets]);

  // Filtered presets based on query or category
  const filteredPresets = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      return currentPresets.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortCode.toLowerCase().includes(q) ||
          p.authority.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    if (selectedCategory === 'Popular') {
      return currentPresets.filter((p) => p.isPopular);
    }
    return currentPresets.filter((p) => p.category === selectedCategory);
  }, [currentPresets, searchQuery, selectedCategory]);

  return (
    <div className="bg-card border border-border/80 rounded-2xl p-3 sm:p-4 shadow-xs space-y-3">
      {/* Search Bar & Quick Categories */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full pl-9 pr-4 py-2 bg-muted/40 hover:bg-muted/60 focus:bg-background border border-border rounded-xl text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {availableCategories.slice(0, 6).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setSearchQuery('');
              }}
              className={`px-2.5 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap transition cursor-pointer ${
                !searchQuery && selectedCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {cat === 'Popular' && <Sparkles className="w-3 h-3 inline mr-1 text-amber-400" />}
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Preset Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {(isExpanded ? filteredPresets : filteredPresets.slice(0, 8)).map((preset) => {
          const isSelected = selectedPreset?.id === preset.id;
          return (
            <button
              key={preset.id}
              type="button"
              onClick={() => onSelectPreset(preset)}
              className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between group cursor-pointer relative ${
                isSelected
                  ? 'bg-primary/5 border-primary shadow-xs ring-1 ring-primary/30'
                  : 'bg-muted/20 border-border/60 hover:bg-muted/40 hover:border-border text-foreground'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="font-bold text-xs text-foreground group-hover:text-primary transition-colors truncate">
                    {preset.shortCode || preset.name}
                  </span>
                  {isSelected ? (
                    <span className="w-4 h-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                  ) : (
                    <span className="text-[9px] font-mono font-semibold px-1 py-0.2 rounded bg-muted text-muted-foreground">
                      {preset.category}
                    </span>
                  )}
                </div>

                <div className="text-[10px] text-muted-foreground truncate" title={preset.name}>
                  {preset.name}
                </div>
              </div>

              <div className="pt-2 mt-2 border-t border-border/40 flex items-center justify-between text-[10px] font-mono">
                <span className="font-semibold text-foreground/80">
                  {preset.widthPx}×{preset.heightPx} px
                </span>
                <span className="px-1.5 py-0.2 rounded bg-primary/10 text-primary font-bold">
                  {preset.minKb}–{preset.maxKb} KB
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {filteredPresets.length === 0 && (
        <div className="text-center py-6 text-muted-foreground text-xs">
          No exam presets found matching &ldquo;{searchQuery}&rdquo;. Try another search or use Custom Mode below.
        </div>
      )}

      {filteredPresets.length > 8 && (
        <div className="flex justify-center pt-1">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold text-primary hover:bg-primary/10 transition cursor-pointer"
          >
            <span>{isExpanded ? 'Show Fewer Presets' : `View All ${filteredPresets.length} Presets`}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      )}
    </div>
  );
};
