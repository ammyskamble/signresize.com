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
import { formatFileSize, compressCanvasToTargetSize } from '../utils/imageProcessor';

const KB_PRESETS = [10, 20, 50, 100, 200, 500];

export const ImageCompressorTool: React.FC = () => {
  const [sourceImage, setSourceImage] = useState<HTMLImageElement | null>(null);
  const [sourceFileName, setSourceFileName] = useState<string>('image');
  const [sourceOriginalSize, setSourceOriginalSize] = useState<number>(0);
  const [sourceDimensions, setSourceDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  const [targetKb, setTargetKb] = useState<number>(50);
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

  // Handle incoming file
  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (JPG, PNG, WebP, etc.)');
      return;
    }

    setSourceFileName(file.name.replace(/\.[^/.]+$/, ''));
    setSourceOriginalSize(file.size);

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setSourceImage(img);
        setSourceDimensions({ width: img.naturalWidth, height: img.naturalHeight });
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  // Process compression
  useEffect(() => {
    if (!sourceImage) return;

    let isCurrent = true;
    setIsProcessing(true);

    const processCompression = async () => {
      const canvas = document.createElement('canvas');
      canvas.width = sourceImage.naturalWidth;
      canvas.height = sourceImage.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Draw original image on canvas with white background (to avoid black JPG artifacts)
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(sourceImage, 0, 0);

      const minKb = Math.max(1, targetKb * 0.85);
      const maxKb = targetKb;

      const result = await compressCanvasToTargetSize(
        canvas,
        format,
        minKb,
        maxKb,
        targetKb
      );

      if (isCurrent) {
        setCompressedResult({
          blob: result.blob,
          url: result.dataUrl,
          sizeBytes: result.sizeBytes,
          sizeKb: result.sizeKb,
        });
        setIsProcessing(false);
      }
    };

    processCompression();

    return () => {
      isCurrent = false;
    };
  }, [sourceImage, targetKb, format]);

  const handleDownload = () => {
    if (!compressedResult) return;
    const ext = format === 'image/png' ? 'png' : format === 'image/webp' ? 'webp' : 'jpg';
    const link = document.createElement('a');
    link.href = compressedResult.url;
    link.download = `${sourceFileName}-compressed-${compressedResult.sizeKb}kb.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  const percentReduction =
    sourceOriginalSize && compressedResult
      ? Math.max(0, Math.round(((sourceOriginalSize - compressedResult.sizeBytes) / sourceOriginalSize) * 100))
      : 0;

  return (
    <div class="space-y-6">
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
              Drop Document, Certificate or Photo Here
            </h3>
            <p class="text-xs sm:text-sm text-muted-foreground">
              Supports JPG, PNG, WebP • 100% In-Browser Private • Instant Compression
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
                  Target File Size (KB)
                </h3>
                <p class="text-xs text-muted-foreground">
                  Select a common exam preset or type your custom KB limit.
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
              <label class="text-xs font-semibold text-foreground">Quick Presets:</label>
              <div class="flex flex-wrap gap-2">
                {KB_PRESETS.map((kb) => (
                  <button
                    key={kb}
                    type="button"
                    onClick={() => {
                      setTargetKb(kb);
                      setTargetKbInput(String(kb));
                    }}
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
                  <span>Fine Adjust Slider:</span>
                  <span class="font-mono font-bold text-foreground">{targetKb} KB</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="1000"
                  step="5"
                  value={targetKb}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setTargetKb(val);
                    setTargetKbInput(String(val));
                  }}
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
                      if (n && n > 0) setTargetKb(n);
                    }}
                    class="w-full px-3 py-1.5 rounded-xl border border-border bg-background text-foreground font-mono text-xs"
                  />
                  <span class="absolute right-3 top-2 text-[10px] font-mono text-muted-foreground">KB</span>
                </div>
              </div>
            </div>

            {/* Format Selector */}
            <div class="space-y-2 pt-2 border-t border-border">
              <label class="text-xs font-semibold text-foreground">Output Format:</label>
              <div class="grid grid-cols-3 gap-2">
                {[
                  { id: 'image/jpeg' as OutputFormat, label: 'JPG / JPEG (Govt Default)' },
                  { id: 'image/webp' as OutputFormat, label: 'WebP (Ultra Small)' },
                  { id: 'image/png' as OutputFormat, label: 'PNG (Lossless)' }
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFormat(f.id)}
                    class={`p-2 rounded-xl text-xs text-center border transition ${
                      format === f.id
                        ? 'border-primary bg-primary/10 text-primary font-bold'
                        : 'border-border bg-card text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
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
              <div class="text-[10px] text-muted-foreground uppercase font-semibold">Compressed Size</div>
              <div class="font-mono text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
                {compressedResult ? `${compressedResult.sizeKb} KB` : '...'}
              </div>
            </div>

            <div class="p-3 rounded-xl border border-border bg-card text-center">
              <div class="text-[10px] text-muted-foreground uppercase font-semibold">Reduction</div>
              <div class="font-mono text-xs sm:text-sm font-bold text-primary">
                {percentReduction > 0 ? `-${percentReduction}%` : 'Optimal'}
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
                <span>Compressed Preview ({sourceFileName})</span>
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
