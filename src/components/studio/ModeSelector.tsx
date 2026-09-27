import React from 'react';
import { PenTool, Camera, FileText, Check } from 'lucide-react';
import type { ToolTargetMode } from '../../types';

interface ModeSelectorProps {
  currentMode: ToolTargetMode;
  onSelectMode: (mode: ToolTargetMode) => void;
  signatureLabel?: string;
  signatureSub?: string;
  photoLabel?: string;
  photoSub?: string;
  documentLabel?: string;
  documentSub?: string;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({
  currentMode,
  onSelectMode,
  signatureLabel = 'Signature Resizer',
  signatureSub = '140×60 px • 10–20 KB (SSC, UPSC, RRB)',
  photoLabel = 'Passport Photo',
  photoSub = '3.5×4.5 cm • 20–50 KB (With Name/DOP)',
  documentLabel = 'Document / Certificate',
  documentSub = 'A4 Scan • 100–300 KB (Marksheet, Caste)',
}) => {
  const modes: Array<{
    id: ToolTargetMode;
    label: string;
    sub: string;
    icon: React.ReactNode;
    badge: string;
  }> = [
    {
      id: 'signature',
      label: signatureLabel,
      sub: signatureSub,
      icon: <PenTool className="w-4 h-4" />,
      badge: '10–20 KB',
    },
    {
      id: 'photo',
      label: photoLabel,
      sub: photoSub,
      icon: <Camera className="w-4 h-4" />,
      badge: '3.5×4.5 CM',
    },
    {
      id: 'document',
      label: documentLabel,
      sub: documentSub,
      icon: <FileText className="w-4 h-4" />,
      badge: '100–300 KB',
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {modes.map((m) => {
          const isActive = currentMode === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => onSelectMode(m.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between group cursor-pointer relative overflow-hidden ${
                isActive
                  ? 'bg-card border-primary ring-2 ring-primary/20 shadow-md shadow-primary/5'
                  : 'bg-card/70 border-border hover:bg-muted/50 hover:border-border/80 text-foreground'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary" />
              )}
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-xs'
                      : 'bg-muted text-muted-foreground group-hover:text-foreground'
                  }`}
                >
                  {m.icon}
                </div>
                <div className="min-w-0 pr-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-bold text-xs text-foreground tracking-tight truncate">
                      {m.label}
                    </span>
                    <span
                      className={`text-[9px] font-mono px-1.5 py-0.2 rounded font-semibold ${
                        isActive
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {m.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground truncate leading-tight mt-0.5">
                    {m.sub}
                  </p>
                </div>
              </div>

              {isActive ? (
                <div className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full border border-border group-hover:border-foreground/30 shrink-0" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
