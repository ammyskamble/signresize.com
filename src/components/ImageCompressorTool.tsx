import React, { useState, useRef, useEffect } from 'react';
import {
  Upload,
  Download,
  Check,
  RefreshCw,
  Zap,
  Lock,
  FileImage,
  AlertCircle,
  Copy,
  Sparkles
} from 'lucide-react';
import type { OutputFormat } from '../types';
import FeedbackPrompt from './FeedbackPrompt';
import { formatFileSize, compressCanvasToTargetSize } from '../utils/imageProcessor';

const KB_PRESETS = [15, 20, 30, 40, 50, 100, 200, 500];

export const ImageCompressorTool: React.FC = () => {
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [sizeMode, setSizeMode] = useState<'reduce' | 'increase'>('reduce');
  const [sourceImage, setSourceImage] = useState<HTMLImageElement | null>(null);
  const [sourceFileName, setSourceFileName] = useState<string>('image');
  const [sourceOriginalSize, setSourceOriginalSize] = useState<number>(0);
  const [sourceDimensions, setSourceDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  const [targetKb, setTargetKb] = useState<number>(50);
  const [debouncedTargetKb, setDebouncedTargetKb] = useState<number>(50);
  const [targetKbInput, setTargetKbInput] = useState<string>('50');
  const [format, setFormat] = useState<OutputFormat>('image/jpeg');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [compressedResult, setCompressedResult] = useState<{
    blob: Blob;
    url: string;
    sizeBytes: number;
    sizeKb: number;
  } | null>(null);

  const [copied, setCopied] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const baseCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const sourceObjectUrlRef = useRef<string | null>(null);

  // Debounce slider updates for 60fps instant UI with zero drag lag
  const handleSliderChange = (val: number) => {
    setTargetKb(val);
    setTargetKbInput(String(val));
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = setTimeout(() => {
      setDebouncedTargetKb(val);
    }, 80);
  };

  // Immediate preset selector (no delay)
  const handlePresetSelect = (val: number) => {
    setTargetKb(val);
    setTargetKbInput(String(val));
    setDebouncedTargetKb(val);
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
  };

  // Handle incoming file
  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (JPG, PNG, WebP, etc.)');
      return;
    }

    setSourceFileName(file.name.replace(/\.[^/.]+$/, ''));
    setSourceOriginalSize(file.size);

    const objectUrl = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      if (sourceObjectUrlRef.current) {
        URL.revokeObjectURL(sourceObjectUrlRef.current);
      }
      sourceObjectUrlRef.current = objectUrl;
      setSourceImage(img);
      setSourceDimensions({ width: img.naturalWidth, height: img.naturalHeight });

      // Cache base canvas once per upload to avoid repeated heavy context draws
      const baseCanvas = document.createElement('canvas');
      baseCanvas.width = img.naturalWidth;
      baseCanvas.height = img.naturalHeight;
      const ctx = baseCanvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, baseCanvas.width, baseCanvas.height);
        ctx.drawImage(img, 0, 0);
      }
      baseCanvasRef.current = baseCanvas;
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      alert('Could not decode the uploaded image.');
    };
    img.src = objectUrl;
  };

  // Process compression ultra-fast
  useEffect(() => {
    if (!sourceImage) return;

    let isCurrent = true;
    setIsProcessing(true);

    const processCompression = async () => {
      const canvas = baseCanvasRef.current || document.createElement('canvas');
      if (!baseCanvasRef.current) {
        canvas.width = sourceImage.naturalWidth;
        canvas.height = sourceImage.naturalHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(sourceImage, 0, 0);
        }
      }

      const activeFormat = sizeMode === 'increase' ? 'image/jpeg' : format;
      const minKb = sizeMode === 'increase' ? debouncedTargetKb : Math.max(1, debouncedTargetKb * 0.85);
      const maxKb = sizeMode === 'increase' ? Math.max(debouncedTargetKb + 15, Math.round(debouncedTargetKb * 1.15)) : debouncedTargetKb;

      const result = await compressCanvasToTargetSize(
        canvas,
        activeFormat,
        minKb,
        maxKb,
        debouncedTargetKb,
        sizeMode === 'increase'
      );

      if (isCurrent) {
        setCompressedResult((prev) => {
          if (prev?.url) {
            URL.revokeObjectURL(prev.url);
          }
          return {
            blob: result.blob,
            url: result.dataUrl,
            sizeBytes: result.sizeBytes,
            sizeKb: result.sizeKb,
          };
        });
        setIsProcessing(false);
      }
    };

    processCompression();

    return () => {
      isCurrent = false;
    };
  }, [sourceImage, debouncedTargetKb, format, sizeMode]);


  const handleDownload = () => {
    if (!compressedResult) return;
    const activeFormat = sizeMode === 'increase' ? 'image/jpeg' : format;
    const ext = activeFormat === 'image/png' ? 'png' : activeFormat === 'image/webp' ? 'webp' : 'jpg';
    const link = document.createElement('a');
    link.href = compressedResult.url;
    link.download = `${sourceFileName}-${sizeMode === 'increase' ? 'increased' : 'compressed'}-${compressedResult.sizeKb}kb.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setHasDownloaded(true);
  };

  const handleCopy = async () => {
    if (!compressedResult) return;
    try {
      if (format === 'image/png') {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': compressedResult.blob })
        ]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Convert to PNG for clipboard compatibility
        const img = new Image();
        img.onload = () => {
          const c = document.createElement('canvas');
          c.width = img.naturalWidth;
          c.height = img.naturalHeight;
          const ctx = c.getContext('2d');
          ctx?.drawImage(img, 0, 0);
          c.toBlob(async (b) => {
            if (b) {
              await navigator.clipboard.write([new ClipboardItem({ 'image/png': b })]);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }
          }, 'image/png');
        };
        img.src = compressedResult.url;
      }
    } catch {
      alert('Clipboard copy is not supported in this browser for this format.');
    }
  };

  const percentChange =
    sourceOriginalSize && compressedResult
      ? Math.round(((compressedResult.sizeBytes - sourceOriginalSize) / sourceOriginalSize) * 100)
      : 0;
  const percentReduction = Math.max(0, -percentChange);
  const percentIncrease = Math.max(0, percentChange);

  const handleSizeModeChange = (nextMode: 'reduce' | 'increase') => {
    setSizeMode(nextMode);
    if (nextMode === 'increase' && format !== 'image/jpeg') {
      setFormat('image/jpeg');
    }
  };

  return (
    <div class="space-y-6">
      {/* Mode Selector Bar (Available Both Before & After Upload) */}
      <div class="flex flex-wrap items-center justify-between gap-2 p-2 rounded-2xl border border-border bg-muted/30">
        <div class="flex items-center gap-1.5 flex-wrap">
          <button
            type="button"
            onClick={() => handleSizeModeChange('reduce')}
            aria-pressed={sizeMode === 'reduce'}
            class={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              sizeMode === 'reduce'
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'bg-card text-foreground border border-border hover:bg-muted'
            }`}
          >
            ↓ Reduce Size (Max KB)
          </button>
          <button
            type="button"
            onClick={() => handleSizeModeChange('increase')}
            aria-pressed={sizeMode === 'increase'}
            class={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              sizeMode === 'increase'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-card text-foreground border border-border hover:bg-muted'
            }`}
          >
            ↑ Increase Size (Min KB)
          </button>
        </div>
        <span class="text-[11px] text-muted-foreground px-2">
          {sizeMode === 'increase'
            ? 'Safely increases undersized JPGs above minimum KB without stretching pixels'
            : 'Reduces image size in KB below exam portal maximum limits'}
        </span>
      </div>

      {/* Upload Zone or Image Active View */}
      {!sourceImage ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
          }}
          class="border-2 border-dashed border-border hover:border-primary/50 bg-muted/20 hover:bg-muted/30 rounded-2xl p-8 sm:p-12 text-center cursor-pointer transition flex flex-col items-center justify-center space-y-4"
        >
          <div class="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-inner">
            <Upload class="w-8 h-8 animate-bounce" />
          </div>
          <div class="space-y-1">
            <h3 class="text-base sm:text-lg font-bold text-foreground">
              {sizeMode === 'increase'
                ? 'Drop Photo or Signature to Increase Size in KB'
                : 'Drop Photo, Signature, Certificate or Marksheet Here'}
            </h3>
            <p class="text-xs sm:text-sm text-muted-foreground">
              {sizeMode === 'increase'
                ? 'Supports JPG, PNG, WebP • Increases tiny files above 20 KB / 50 KB • 100% In-Browser'
                : 'Supports JPG, PNG, WebP • Reduce size to 20 KB, 50 KB, 100 KB • 100% In-Browser Private'}
            </p>
          </div>
          <button
            type="button"
            class="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs shadow hover:bg-primary/90 transition"
          >
            Select Image from Device
          </button>
          <input
            ref={fileInputRef}
            id="compressor-file-input"
            aria-label="Upload image to compress"
            type="file"
            accept="image/*"
            class="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) handleFile(e.target.files[0]);
            }}
          />
        </div>
      ) : (
        <div class="space-y-6">
          {/* Controls Panel */}
          <div class="p-5 rounded-2xl border border-border bg-card shadow-xs space-y-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
              <div>
                <h3 class="text-sm font-bold text-foreground flex items-center gap-2">
                  <Sparkles class="w-4 h-4 text-primary" />
                  {sizeMode === 'increase' ? 'Minimum Target File Size (KB)' : 'Maximum Target File Size (KB)'}
                </h3>
                <p class="text-xs text-muted-foreground">
                  {sizeMode === 'increase'
                    ? 'Select the minimum KB required by your form (e.g. "should be at least 20 KB" or 50 KB).'
                    : 'Select a common exam preset or type your custom KB limit to reduce file size.'}
                </p>
              </div>

              {/* Reset file button */}
              <button
                type="button"
                onClick={() => {
                  setSourceImage(null);
                  setCompressedResult(null);
                }}
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-muted/30 text-muted-foreground hover:text-foreground text-xs transition"
              >
                <RefreshCw class="w-3.5 h-3.5" />
                <span>Upload New</span>
              </button>
            </div>

            {/* Quick KB Buttons */}
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <label class="text-xs font-semibold text-foreground">Quick Presets:</label>
                <span class="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  ⚡ Zero Lag Engine
                </span>
              </div>
              <div class="flex flex-wrap gap-2">
                {KB_PRESETS.map((kb) => (
                  <button
                    key={kb}
                    type="button"
                    onClick={() => handlePresetSelect(kb)}
                    class={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition font-mono ${
                      targetKb === kb
                        ? 'bg-primary text-primary-foreground shadow'
                        : 'bg-muted/50 hover:bg-muted text-foreground border border-border'
                    }`}
                  >
                    {kb} KB
                  </button>
                ))}
              </div>
            </div>

            {/* Custom KB Input & Slider */}
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div class="sm:col-span-8 space-y-1">
                <div class="flex justify-between text-xs text-muted-foreground">
                  <span>Fine Adjust Slider (Instant Response):</span>
                  <span class="font-mono font-bold text-primary">{targetKb} KB</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="1000"
                  step="5"
                  value={targetKb}
                  onChange={(e) => handleSliderChange(Number(e.target.value))}
                  class="w-full accent-primary cursor-pointer"
                />
              </div>

              <div class="sm:col-span-4 space-y-1">
                <label class="text-xs text-muted-foreground">Custom Target (KB):</label>
                <div class="relative">
                  <input
                    type="number"
                    min="5"
                    max="5000"
                    value={targetKbInput}
                    onChange={(e) => {
                      setTargetKbInput(e.target.value);
                      const n = parseInt(e.target.value, 10);
                      if (n && n > 0) handleSliderChange(n);
                    }}
                    class="w-full px-3 py-1.5 rounded-xl border border-border bg-background text-foreground font-mono text-xs"
                  />
                  <span class="absolute right-3 top-2 text-[10px] font-mono text-muted-foreground">KB</span>
                </div>
              </div>
            </div>


            {/* Format Selector */}
            <div class="space-y-2 pt-2 border-t border-border">
              <div class="flex items-center justify-between gap-2 flex-wrap">
                <label class="text-xs font-semibold text-foreground">Output Format:</label>
                {sizeMode === 'increase' && (
                  <span class="text-[11px] text-emerald-700 dark:text-emerald-300 font-medium">
                    JPG padding adds clean bytes without stretching pixels
                  </span>
                )}
              </div>
              <div class="grid grid-cols-3 gap-2">
                {[
                  { id: 'image/jpeg' as OutputFormat, label: 'JPG / JPEG (Govt Default)' },
                  { id: 'image/webp' as OutputFormat, label: 'WebP (Ultra Small)' },
                  { id: 'image/png' as OutputFormat, label: 'PNG (Lossless)' }
                ].map((f) => {
                  const disabledInIncrease = sizeMode === 'increase' && f.id !== 'image/jpeg';
                  return (
                    <button
                      key={f.id}
                      type="button"
                      disabled={disabledInIncrease}
                      onClick={() => setFormat(f.id)}
                      title={disabledInIncrease ? 'Switch to Reduce Size mode for WebP/PNG export' : undefined}
                      class={`p-2 rounded-xl text-xs text-center border transition ${
                        format === f.id
                          ? 'border-primary bg-primary/10 text-primary font-bold'
                          : disabledInIncrease
                            ? 'border-border bg-muted/40 text-muted-foreground opacity-50 cursor-not-allowed'
                            : 'border-border bg-card text-muted-foreground hover:bg-muted'
                      }`}
                    >
                      {f.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="p-3 rounded-xl border border-border bg-card text-center">
              <div class="text-[10px] text-muted-foreground uppercase font-semibold">Original Size</div>
              <div class="font-mono text-xs sm:text-sm font-bold text-foreground">
                {formatFileSize(sourceOriginalSize)}
              </div>
            </div>

            <div class="p-3 rounded-xl border border-border bg-card text-center">
              <div class="text-[10px] text-muted-foreground uppercase font-semibold">
                {sizeMode === 'increase' ? 'Increased Size' : 'Reduced Size'}
              </div>
              <div class="font-mono text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
                {compressedResult ? `${compressedResult.sizeKb} KB` : '...'}
              </div>
            </div>

            <div class="p-3 rounded-xl border border-border bg-card text-center">
              <div class="text-[10px] text-muted-foreground uppercase font-semibold">
                {percentIncrease > 0 ? 'Size Increased' : 'Reduction'}
              </div>
              <div class="font-mono text-xs sm:text-sm font-bold text-primary">
                {percentIncrease > 0 ? `+${percentIncrease}%` : percentReduction > 0 ? `-${percentReduction}%` : 'Exact Match'}
              </div>
            </div>

            <div class="p-3 rounded-xl border border-border bg-card text-center">
              <div class="text-[10px] text-muted-foreground uppercase font-semibold">Resolution</div>
              <div class="font-mono text-xs sm:text-sm font-bold text-foreground">
                {sourceDimensions.width} × {sourceDimensions.height} px
              </div>
            </div>
          </div>

          {/* Image Preview & Actions */}
          <div class="p-4 sm:p-6 rounded-2xl border border-border bg-card shadow-xs space-y-4">
            <div class="flex items-center justify-between">
              <div class="text-xs font-semibold text-foreground flex items-center gap-1.5">
                <FileImage class="w-4 h-4 text-primary" />
                <span>{sizeMode === 'increase' ? 'Output Preview' : 'Reduced Preview'} ({sourceFileName})</span>
              </div>
              <div class="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-foreground text-xs transition"
                >
                  {copied ? <Check class="w-3.5 h-3.5 text-emerald-500" /> : <Copy class="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={!compressedResult || isProcessing}
                  class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs shadow hover:bg-primary/90 transition disabled:opacity-50"
                >
                  <Download class="w-4 h-4" />
                  <span>Download Image</span>
                </button>
              </div>
            </div>

            <FeedbackPrompt downloaded={hasDownloaded} tool="Image compressor" />
            <div class="relative bg-muted/30 border border-border/60 rounded-xl p-4 flex items-center justify-center min-h-[250px] overflow-hidden">
              {compressedResult ? (
                <img
                  src={compressedResult.url}
                  alt="Compressed output preview"
                  class="max-h-[350px] max-w-full object-contain rounded-lg shadow-sm"
                />
              ) : (
                <div class="text-xs text-muted-foreground flex items-center gap-2">
                  <RefreshCw class="w-4 h-4 animate-spin text-primary" />
                  <span>Compressing canvas...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
