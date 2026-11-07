import React from 'react';
import { Upload, Sliders, Download, Check } from 'lucide-react';
import type { ToolTargetMode } from '../../types';

interface StepIndicatorProps {
  hasImage: boolean;
  isProcessed: boolean;
  targetType?: ToolTargetMode;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ hasImage, isProcessed, targetType = 'signature' }) => {
  const step1Label = targetType === 'photo' ? 'Upload Photo' : targetType === 'document' ? 'Upload Document' : 'Upload Sign';
  const step1Detail = targetType === 'photo' ? 'Passport / headshot' : targetType === 'document' ? 'Marksheet, cert or ID' : 'Photo or scan';

  const step2Label = targetType === 'photo' ? 'Align & Crop' : targetType === 'document' ? 'Align & Enhance' : 'Align & Whiten';
  const step2Detail = targetType === 'photo' ? 'Face guide & crop' : targetType === 'document' ? 'Legibility & crop' : 'Crop & enhance';

  const steps = [
    {
      num: 1,
      label: step1Label,
      detail: step1Detail,
      icon: Upload,
      active: !hasImage,
      completed: hasImage,
    },
    {
      num: 2,
      label: step2Label,
      detail: step2Detail,
      icon: Sliders,
      active: hasImage && !isProcessed,
      completed: hasImage && isProcessed,
    },
    {
      num: 3,
      label: 'Download JPG',
      detail: 'Portal-ready',
      icon: Download,
      active: isProcessed,
      completed: false,
    },
  ];

  return (
    <div className="resizer-step-guide w-full bg-card/60 backdrop-blur-xs border border-border rounded-2xl p-3 sm:p-4 shadow-2xs hidden">
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 rounded-xl border transition-all ${
                step.active
                  ? 'bg-primary/10 border-primary/40 text-primary shadow-xs'
                  : step.completed
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                  : 'bg-muted/30 border-transparent text-muted-foreground'
              }`}
            >
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                  step.completed
                    ? 'bg-emerald-500 text-white'
                    : step.active
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {step.completed ? <Check className="w-4 h-4" /> : <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono font-bold opacity-75 hidden sm:inline">
                    0{step.num}.
                  </span>
                  <span className="font-semibold text-xs truncate">
                    {step.label}
                  </span>
                </div>
                <div className="text-[10px] text-muted-foreground hidden sm:block truncate">
                  {step.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
