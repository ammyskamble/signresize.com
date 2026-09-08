import React from 'react';
import { PenTool, Layers, Plus, Sparkles, Trash2 } from 'lucide-react';

interface WorkspaceHeaderProps {
  toolMode: 'single' | 'batch';
  onModeChange: (mode: 'single' | 'batch') => void;
  batchCount: number;
  totalLoadedCount: number;
  onUploadClick: () => void;
  onSampleBatchClick: () => void;
  onDrawClick: () => void;
  onClearAllClick: () => void;
}

export const WorkspaceHeader: React.FC<WorkspaceHeaderProps> = ({
  toolMode,
  onModeChange,
  batchCount,
  totalLoadedCount,
  onUploadClick,
  onSampleBatchClick,
  onDrawClick,
  onClearAllClick,
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-card border border-border shadow-xs">
      {/* Mode Switcher Tabs */}
      <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-muted/60 border border-border shrink-0 self-start sm:self-auto">
        <button
          type="button"
          onClick={() => onModeChange('single')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
            toolMode === 'single'
              ? 'bg-card text-foreground shadow-xs border border-border'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <PenTool className="w-3.5 h-3.5 text-primary shrink-0" />
          <span>Single Studio</span>
        </button>

        <button
          type="button"
          onClick={() => onModeChange('batch')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
            toolMode === 'batch'
              ? 'bg-primary text-primary-foreground shadow-xs'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-foreground'
          }`}
        >
          <Layers className="w-3.5 h-3.5 shrink-0" />
          <span>Batch Editor</span>
          <span
            className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
              toolMode === 'batch'
                ? 'bg-primary-foreground/20 text-primary-foreground'
                : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200'
            }`}
          >
            {batchCount > 0 ? `${batchCount}/10` : 'Up to 10'}
          </span>
        </button>
      </div>

      {/* Global Action Buttons */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <button
          type="button"
          onClick={onUploadClick}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary text-primary-foreground hover:opacity-95 font-semibold whitespace-nowrap shadow-xs transition cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5 shrink-0" />
          <span>Upload Signs</span>
        </button>

        <button
          type="button"
          onClick={onSampleBatchClick}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-card border border-border text-foreground hover:bg-muted font-medium whitespace-nowrap transition shadow-xs cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
          <span>Sample Signs</span>
        </button>

        <button
          type="button"
          onClick={onDrawClick}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-card border border-border text-foreground hover:bg-muted font-medium whitespace-nowrap transition shadow-xs cursor-pointer"
        >
          <PenTool className="w-3.5 h-3.5 text-primary shrink-0" />
          <span>Draw Sign</span>
        </button>

        {/* Prominent Clear All Selected Files Button */}
        {totalLoadedCount > 0 && (
          <button
            type="button"
            onClick={onClearAllClick}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/30 hover:bg-red-500/20 font-semibold whitespace-nowrap transition shadow-xs cursor-pointer"
            title="Clear all uploaded signatures and reset workspace"
          >
            <Trash2 className="w-3.5 h-3.5 shrink-0" />
            <span>Clear All ({totalLoadedCount})</span>
          </button>
        )}
      </div>
    </div>
  );
};
