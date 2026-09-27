import React, { useState } from 'react';
import { Lock, Unlock, Sliders, Check, FileImage } from 'lucide-react';
import type { UnitType, OutputFormat } from '../../types';
import { convertUnits } from '../../utils/imageProcessor';

interface ToolControlsProps {
  unit: UnitType;
  onChangeUnit: (unit: UnitType) => void;
  width: number;
  height: number;
  widthInput: string;
  heightInput: string;
  onChangeWidth: (val: number, strVal: string) => void;
  onChangeHeight: (val: number, strVal: string) => void;
  dpi: number;
  onChangeDpi: (dpi: number) => void;
  lockAspect: boolean;
  onToggleLockAspect: () => void;
  minKb: number;
  maxKb: number;
  minKbInput: string;
  maxKbInput: string;
  onChangeMinKb: (val: number, strVal: string) => void;
  onChangeMaxKb: (val: number, strVal: string) => void;
  targetFormat: OutputFormat;
  onChangeTargetFormat: (fmt: OutputFormat) => void;
}

const COMMON_KB_PRESETS = [
  { label: '10–20 KB', min: 10, max: 20, desc: 'SSC / RRB / IBPS' },
  { label: '20–50 KB', min: 20, max: 50, desc: 'Passport Photo' },
  { label: '20–300 KB', min: 20, max: 300, desc: 'UPSC / Civil' },
  { label: '100–300 KB', min: 100, max: 300, desc: 'Documents' },
];

export const ToolControls: React.FC<ToolControlsProps> = ({
  unit,
  onChangeUnit,
  width,
  height,
  widthInput,
  heightInput,
  onChangeWidth,
  onChangeHeight,
  dpi,
  onChangeDpi,
  lockAspect,
  onToggleLockAspect,
  minKb,
  maxKb,
  minKbInput,
  maxKbInput,
  onChangeMinKb,
  onChangeMaxKb,
  targetFormat,
  onChangeTargetFormat,
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Unit change handler
  const handleUnitSwitch = (newUnit: UnitType) => {
    if (newUnit === unit) return;
    const newW = convertUnits(width, unit, newUnit, dpi);
    const newH = convertUnits(height, unit, newUnit, dpi);
    onChangeUnit(newUnit);
    onChangeWidth(newW, String(newW));
    onChangeHeight(newH, String(newH));
  };

  const applyKbPreset = (min: number, max: number) => {
    onChangeMinKb(min, String(min));
    onChangeMaxKb(max, String(max));
  };

  return (
    <div className="bg-card border border-border/80 rounded-2xl p-4 shadow-xs space-y-4">
      {/* Top Bar: Target KB Quick Presets */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-foreground uppercase tracking-wider text-[11px]">
            Target File Size (KB)
          </span>
          <span className="font-mono text-[11px] font-semibold text-primary">
            Strict Boundary: {minKb} KB – {maxKb} KB
          </span>
        </div>

        {/* Quick KB Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
          {COMMON_KB_PRESETS.map((p) => {
            const isMatch = minKb === p.min && maxKb === p.max;
            return (
              <button
                key={p.label}
                type="button"
                onClick={() => applyKbPreset(p.min, p.max)}
                className={`px-2.5 py-1.5 rounded-xl border text-center transition cursor-pointer ${
                  isMatch
                    ? 'bg-primary text-primary-foreground border-primary shadow-xs'
                    : 'bg-muted/30 border-border/60 hover:bg-muted text-foreground'
                }`}
              >
                <div className="text-xs font-bold font-mono">{p.label}</div>
                <div className={`text-[9px] ${isMatch ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {p.desc}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Manual Dimensions Section */}
      <div className="space-y-3 pt-2 border-t border-border/60">
        <div className="flex items-center justify-between">
          <span className="font-bold text-foreground text-xs uppercase tracking-wider text-[11px]">
            Target Dimensions &amp; Scale
          </span>

          {/* Unit Switcher */}
          <div className="inline-flex rounded-lg bg-muted/60 p-0.5 border border-border/60 text-xs">
            {(['px', 'cm', 'mm', 'in'] as UnitType[]).map((u) => (
              <button
                key={u}
                type="button"
                onClick={() => handleUnitSwitch(u)}
                className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition cursor-pointer uppercase ${
                  unit === u
                    ? 'bg-primary text-primary-foreground shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {u}
              </button>
            ))}
          </div>
        </div>

        {/* Width & Height Inputs with Lock */}
        <div className="grid grid-cols-12 gap-2 items-center">
          {/* Width */}
          <div className="col-span-5 space-y-1">
            <label className="text-[10px] font-semibold text-muted-foreground uppercase">
              Width ({unit})
            </label>
            <input
              type="number"
              step={unit === 'px' ? '1' : '0.1'}
              min="1"
              value={widthInput}
              onChange={(e) => {
                const valStr = e.target.value;
                const num = parseFloat(valStr) || 0;
                onChangeWidth(num, valStr);
                if (lockAspect && width > 0 && num > 0) {
                  const ratio = height / width;
                  const newH = unit === 'px' ? Math.round(num * ratio) : Number((num * ratio).toFixed(2));
                  onChangeHeight(newH, String(newH));
                }
              }}
              className="w-full px-3 py-1.5 bg-muted/30 focus:bg-background border border-border rounded-xl font-mono text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            />
          </div>

          {/* Aspect Lock Button */}
          <div className="col-span-2 flex justify-center pt-4">
            <button
              type="button"
              onClick={onToggleLockAspect}
              className={`p-2 rounded-xl border transition cursor-pointer ${
                lockAspect
                  ? 'bg-primary/10 border-primary text-primary'
                  : 'bg-muted/40 border-border text-muted-foreground hover:text-foreground'
              }`}
              title={lockAspect ? 'Aspect ratio locked' : 'Aspect ratio unlocked'}
            >
              {lockAspect ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Height */}
          <div className="col-span-5 space-y-1">
            <label className="text-[10px] font-semibold text-muted-foreground uppercase">
              Height ({unit})
            </label>
            <input
              type="number"
              step={unit === 'px' ? '1' : '0.1'}
              min="1"
              value={heightInput}
              onChange={(e) => {
                const valStr = e.target.value;
                const num = parseFloat(valStr) || 0;
                onChangeHeight(num, valStr);
                if (lockAspect && height > 0 && num > 0) {
                  const ratio = width / height;
                  const newW = unit === 'px' ? Math.round(num * ratio) : Number((num * ratio).toFixed(2));
                  onChangeWidth(newW, String(newW));
                }
              }}
              className="w-full px-3 py-1.5 bg-muted/30 focus:bg-background border border-border rounded-xl font-mono text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            />
          </div>
        </div>
      </div>

      {/* Pro Controls Toggle */}
      <div className="pt-2 border-t border-border/60">
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 cursor-pointer"
        >
          <Sliders className="w-3 h-3" />
          <span>{showAdvanced ? 'Hide Advanced DPI & Custom KB' : 'Show Advanced DPI & Custom KB'}</span>
        </button>

        {showAdvanced && (
          <div className="mt-3 pt-3 border-t border-border/40 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-in fade-in duration-150">
            {/* DPI Select */}
            <div className="space-y-1">
              <label className="text-[10px] font-semibold text-muted-foreground uppercase">Resolution (DPI)</label>
              <select
                value={dpi}
                onChange={(e) => onChangeDpi(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 bg-muted/30 border border-border rounded-xl font-mono text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
              >
                <option value="150">150 DPI (Fast web)</option>
                <option value="200">200 DPI (Standard Exam)</option>
                <option value="300">300 DPI (High Print Quality)</option>
              </select>
            </div>

            {/* Custom Min KB */}
            <div className="space-y-1">
              <label className="text-[10px] font-semibold text-muted-foreground uppercase">Min KB Target</label>
              <input
                type="number"
                min="1"
                max="5000"
                value={minKbInput}
                onChange={(e) => onChangeMinKb(Number(e.target.value) || 1, e.target.value)}
                className="w-full px-3 py-1.5 bg-muted/30 border border-border rounded-xl font-mono text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
              />
            </div>

            {/* Custom Max KB */}
            <div className="space-y-1">
              <label className="text-[10px] font-semibold text-muted-foreground uppercase">Max KB Target</label>
              <input
                type="number"
                min="5"
                max="10000"
                value={maxKbInput}
                onChange={(e) => onChangeMaxKb(Number(e.target.value) || 5, e.target.value)}
                className="w-full px-3 py-1.5 bg-muted/30 border border-border rounded-xl font-mono text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
              />
            </div>
          </div>
        )}
      </div>

      {/* Output Format Picker */}
      <div className="flex items-center justify-between pt-2 border-t border-border/60 text-xs">
        <span className="text-muted-foreground font-medium flex items-center gap-1.5">
          <FileImage className="w-3.5 h-3.5" />
          Output Format
        </span>

        <div className="inline-flex rounded-lg bg-muted/60 p-0.5 border border-border/60">
          {(
            [
              { id: 'image/jpeg', label: 'JPG (Official)' },
              { id: 'image/png', label: 'PNG' },
              { id: 'image/webp', label: 'WebP' },
            ] as const
          ).map((fmt) => (
            <button
              key={fmt.id}
              type="button"
              onClick={() => onChangeTargetFormat(fmt.id)}
              className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition cursor-pointer ${
                targetFormat === fmt.id
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {fmt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
