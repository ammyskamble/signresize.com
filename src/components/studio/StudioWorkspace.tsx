import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import {
  Download,
  Copy,
  Check,
  RefreshCw,
  Sparkles,
  Zap,
  PenTool,
  Layers,
  ArrowRight,
  Eye,
  SlidersHorizontal,
  CheckCircle2,
} from 'lucide-react';
import type {
  ExamPreset,
  UnitType,
  OutputFormat,
  CropArea,
  FilterOptions,
  ProcessedImageResult,
  ToolTargetMode,
} from '../../types';
import { TRANSLATIONS, type SupportedLang } from '../../data/i18n/translations';
import {
  EXAM_PRESETS,
  SIGNATURE_PRESETS,
  PHOTO_PRESETS,
  DOCUMENT_PRESETS,
} from '../../data/examPresets';
import {
  renderProcessedCanvas,
  compressCanvasToTargetSize,
  applyNameAndDateStamp,
  formatFileSize,
} from '../../utils/imageProcessor';
import { createSampleDataForMode } from '../../utils/sampleGenerators';

import { ModeSelector } from './ModeSelector';
import { PresetPicker } from './PresetPicker';
import { CanvasStage } from './CanvasStage';
import { ToolControls } from './ToolControls';
import { ImageFilters } from './ImageFilters';
import { ComplianceInspector } from './ComplianceInspector';
import { BatchStudio } from './BatchStudio';
import { PrivacyBadge } from './PrivacyBadge';
import { SignaturePadModal } from '../SignaturePadModal';
import { ToastNotification, type ToastItem } from '../tool/ToastNotification';

export interface StudioWorkspaceProps {
  initialPresetId?: string;
  initialMode?: ToolTargetMode;
  initialLang?: SupportedLang;
}

export const StudioWorkspace: React.FC<StudioWorkspaceProps> = ({
  initialPresetId,
  initialMode = 'signature',
  initialLang = 'en',
}) => {
  // 1. Language & Translations
  const [lang, setLang] = useState<SupportedLang>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('signresize-lang') as SupportedLang;
      if (stored && ['en', 'hi', 'mr'].includes(stored)) return stored;
    }
    return initialLang;
  });

  const t = useMemo(() => TRANSLATIONS[lang] || TRANSLATIONS.en, [lang]);

  // 2. Active Mode & Tool View
  const [targetType, setTargetType] = useState<ToolTargetMode>(initialMode);
  const [toolView, setToolView] = useState<'single' | 'batch'>('single');

  // 3. Preset Selection
  const defaultPreset = useMemo(() => {
    if (initialPresetId) {
      const found = EXAM_PRESETS.find((p) => p.id === initialPresetId);
      if (found) return found;
    }
    if (initialMode === 'photo') return PHOTO_PRESETS[0];
    if (initialMode === 'document') return DOCUMENT_PRESETS[0];
    return SIGNATURE_PRESETS[0];
  }, [initialPresetId, initialMode]);

  const [selectedPreset, setSelectedPreset] = useState<ExamPreset | null>(defaultPreset);

  // 4. Dimensions & Targets
  const [unit, setUnit] = useState<UnitType>('px');
  const [width, setWidth] = useState<number>(defaultPreset.widthPx);
  const [height, setHeight] = useState<number>(defaultPreset.heightPx);
  const [widthInput, setWidthInput] = useState<string>(String(defaultPreset.widthPx));
  const [heightInput, setHeightInput] = useState<string>(String(defaultPreset.heightPx));
  const [dpi, setDpi] = useState<number>(defaultPreset.dpi);
  const [lockAspect, setLockAspect] = useState<boolean>(true);

  const [minKb, setMinKb] = useState<number>(defaultPreset.minKb);
  const [maxKb, setMaxKb] = useState<number>(defaultPreset.maxKb);
  const [minKbInput, setMinKbInput] = useState<string>(String(defaultPreset.minKb));
  const [maxKbInput, setMaxKbInput] = useState<string>(String(defaultPreset.maxKb));
  const [targetFormat, setTargetFormat] = useState<OutputFormat>('image/jpeg');

  // 5. Image & Canvas Transformations
  const [sourceImage, setSourceImage] = useState<HTMLImageElement | null>(null);
  const [sourceFileName, setSourceFileName] = useState<string>('signature');
  const [sourceDimensions, setSourceDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const [sourceObjectUrl, setSourceObjectUrl] = useState<string | null>(null);

  const [crop, setCrop] = useState<CropArea>({ x: 0, y: 0, width: 140, height: 60 });
  const [rotation, setRotation] = useState<number>(0);
  const [flipH, setFlipH] = useState<boolean>(false);
  const [flipV, setFlipV] = useState<boolean>(false);

  // 6. Passport Photo Specific Controls
  const [showFaceGuide, setShowFaceGuide] = useState<boolean>(true);
  const [addNameDateStamp, setAddNameDateStamp] = useState<boolean>(false);
  const [candidateName, setCandidateName] = useState<string>('');
  const [dateOfPhoto, setDateOfPhoto] = useState<string>(() => {
    const today = new Date();
    const d = String(today.getDate()).padStart(2, '0');
    const m = String(today.getMonth() + 1).padStart(2, '0');
    return `${d}/${m}/${today.getFullYear()}`;
  });

  // 7. Filters
  const [filters, setFilters] = useState<FilterOptions>({
    cleanPaper: targetType === 'signature',
    brightness: 0,
    contrast: 0,
    blackAndWhite: false,
    threshold: 128,
  });

  // 8. Processing Result & UI States
  const [processedResult, setProcessedResult] = useState<ProcessedImageResult | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isDrawPadOpen, setIsDrawPadOpen] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const previousResultUrlRef = useRef<string | null>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Helper: Toast trigger
  const addToast = (msg: string, title?: string, type: 'success' | 'info' | 'warning' = 'info') => {
    const toast: ToastItem = {
      id: `toast_${Date.now()}_${Math.random()}`,
      title: title || 'Notice',
      message: msg,
      type,
    };
    setToasts((prev) => [...prev.slice(-3), toast]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Sync mode changes
  const handleSelectMode = (newMode: ToolTargetMode) => {
    setTargetType(newMode);
    let preset: ExamPreset;
    if (newMode === 'photo') {
      preset = PHOTO_PRESETS[0];
      setFilters((f) => ({ ...f, cleanPaper: false }));
    } else if (newMode === 'document') {
      preset = DOCUMENT_PRESETS[0];
      setFilters((f) => ({ ...f, cleanPaper: true, blackAndWhite: true }));
    } else {
      preset = SIGNATURE_PRESETS[0];
      setFilters((f) => ({ ...f, cleanPaper: true }));
    }
    handleSelectPreset(preset);
  };

  // Preset Selection Handler
  const handleSelectPreset = (preset: ExamPreset) => {
    setSelectedPreset(preset);
    setWidth(preset.widthPx);
    setHeight(preset.heightPx);
    setWidthInput(String(preset.widthPx));
    setHeightInput(String(preset.heightPx));
    setMinKb(preset.minKb);
    setMaxKb(preset.maxKb);
    setMinKbInput(String(preset.minKb));
    setMaxKbInput(String(preset.maxKb));
    setDpi(preset.dpi);
    setUnit('px');

    // Auto-adjust crop area to new aspect ratio if source is loaded
    if (sourceImage && sourceDimensions.width > 0) {
      const isRot = rotation === 90 || rotation === 270;
      const curW = isRot ? sourceDimensions.height : sourceDimensions.width;
      const curH = isRot ? sourceDimensions.width : sourceDimensions.height;
      const ratio = preset.widthPx / preset.heightPx;

      let newW = curW;
      let newH = Math.round(newW / ratio);
      if (newH > curH) {
        newH = curH;
        newW = Math.round(newH * ratio);
      }
      setCrop({
        x: Math.round((curW - newW) / 2),
        y: Math.round((curH - newH) / 2),
        width: Math.max(10, newW),
        height: Math.max(10, newH),
      });
    }

    addToast(`Applied ${preset.name} specs (${preset.widthPx}×${preset.heightPx} px, ${preset.minKb}–${preset.maxKb} KB)`, 'Preset Selected', 'info');
  };

  // File Upload Handler
  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      addToast('Please upload a valid image file (JPG, PNG, WebP)', 'Invalid File', 'warning');
      return;
    }

    if (sourceObjectUrl) {
      URL.revokeObjectURL(sourceObjectUrl);
    }

    const objUrl = URL.createObjectURL(file);
    setSourceObjectUrl(objUrl);
    setSourceFileName(file.name.replace(/\.[^/.]+$/, ''));

    const img = new Image();
    img.onload = () => {
      setSourceImage(img);
      setSourceDimensions({ width: img.naturalWidth, height: img.naturalHeight });

      // Calculate initial crop centered
      const ratio = width / height;
      let cW = img.naturalWidth;
      let cH = Math.round(cW / ratio);
      if (cH > img.naturalHeight) {
        cH = img.naturalHeight;
        cW = Math.round(cH * ratio);
      }
      setCrop({
        x: Math.round((img.naturalWidth - cW) / 2),
        y: Math.round((img.naturalHeight - cH) / 2),
        width: Math.max(10, cW),
        height: Math.max(10, cH),
      });
      setRotation(0);
      setFlipH(false);
      setFlipV(false);

      addToast(`Loaded ${file.name} (${img.naturalWidth}×${img.naturalHeight} px)`, 'Image Uploaded', 'success');
    };
    img.src = objUrl;
  };

  // Load Synthetic Sample
  const handleLoadSample = () => {
    const sample = createSampleDataForMode(targetType);
    const img = new Image();
    img.onload = () => {
      setSourceImage(img);
      setSourceFileName(sample.filename);
      setSourceDimensions({ width: sample.width, height: sample.height });

      const ratio = width / height;
      let cW = sample.width;
      let cH = Math.round(cW / ratio);
      if (cH > sample.height) {
        cH = sample.height;
        cW = Math.round(cH * ratio);
      }
      setCrop({
        x: Math.round((sample.width - cW) / 2),
        y: Math.round((sample.height - cH) / 2),
        width: Math.max(10, cW),
        height: Math.max(10, cH),
      });
      addToast(`Loaded official test sample for ${targetType}`, 'Sample Loaded', 'info');
    };
    img.src = sample.dataUrl;
  };

  // Draw Pad Signature Apply
  const handleDrawPadApply = (dataUrl: string) => {
    const img = new Image();
    img.onload = () => {
      setSourceImage(img);
      setSourceFileName('drawn_signature');
      setSourceDimensions({ width: img.naturalWidth, height: img.naturalHeight });
      setCrop({
        x: 0,
        y: 0,
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
      addToast('Signature pad drawing imported successfully', 'Signature Drawn', 'success');
    };
    img.src = dataUrl;
  };

  // ⚡ Debounced Core Image Processing Pipeline with Zero-Leak Memory Management
  const triggerProcessing = useCallback(async () => {
    if (!sourceImage || width <= 0 || height <= 0) return;

    setIsProcessing(true);
    try {
      // 1. Render cropped & filtered canvas
      const canvas = renderProcessedCanvas(
        sourceImage,
        sourceDimensions.width,
        sourceDimensions.height,
        crop,
        width,
        height,
        rotation,
        flipH,
        flipV,
        filters
      );

      // 2. Apply candidate name & DOP stamp if photo mode
      if (targetType === 'photo' && addNameDateStamp) {
        applyNameAndDateStamp(canvas, candidateName, dateOfPhoto);
      }

      // 3. Compress to exact target bounds (KB)
      const res = await compressCanvasToTargetSize(
        canvas,
        targetFormat,
        minKb,
        maxKb
      );

      // 4. Revoke previous blob URL to prevent memory leaks!
      if (previousResultUrlRef.current) {
        URL.revokeObjectURL(previousResultUrlRef.current);
      }
      previousResultUrlRef.current = res.dataUrl;

      setProcessedResult(res);
    } catch (err) {
      console.error('Processing error:', err);
    } finally {
      setIsProcessing(false);
    }
  }, [
    sourceImage,
    sourceDimensions,
    crop,
    width,
    height,
    rotation,
    flipH,
    flipV,
    filters,
    targetType,
    addNameDateStamp,
    candidateName,
    dateOfPhoto,
    targetFormat,
    minKb,
    maxKb,
  ]);

  // Debounced listener
  useEffect(() => {
    if (!sourceImage) return;
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = setTimeout(() => {
      triggerProcessing();
    }, 60);

    return () => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    };
  }, [triggerProcessing, sourceImage]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (sourceObjectUrl) URL.revokeObjectURL(sourceObjectUrl);
      if (previousResultUrlRef.current) URL.revokeObjectURL(previousResultUrlRef.current);
    };
  }, []);

  // Download Handler
  const handleDownload = () => {
    if (!processedResult) return;
    const ext = targetFormat === 'image/png' ? 'png' : targetFormat === 'image/webp' ? 'webp' : 'jpg';
    const filename = `${sourceFileName || targetType}_${width}x${height}_${processedResult.sizeKb}kb.${ext}`;

    const link = document.createElement('a');
    link.href = processedResult.dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    addToast(`Downloaded ${filename} (${processedResult.sizeKb} KB)`, 'File Downloaded', 'success');
  };

  // Copy Image to Clipboard
  const handleCopy = async () => {
    if (!processedResult) return;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        // Modern async clipboard with PNG blob
        const canvas = document.createElement('canvas');
        canvas.width = processedResult.width;
        canvas.height = processedResult.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const img = new Image();
          img.onload = async () => {
            ctx.drawImage(img, 0, 0);
            canvas.toBlob(async (blob) => {
              if (blob) {
                await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
                addToast('Image copied to clipboard', 'Copied', 'success');
              }
            }, 'image/png');
          };
          img.src = processedResult.dataUrl;
        }
      } else {
        addToast('Clipboard copy requires secure HTTPS connection', 'Notice', 'warning');
      }
    } catch (e) {
      console.warn('Copy to clipboard failed:', e);
      addToast('Could not copy to clipboard directly', 'Notice', 'warning');
    }
  };

  return (
    <div className="w-full space-y-5" id="tool-workspace">
      {/* Toast Notifications Overlay */}
      <ToastNotification toasts={toasts} onDismiss={removeToast} />

      {/* Signature Pad Drawing Modal */}
      <SignaturePadModal
        isOpen={isDrawPadOpen}
        onClose={() => setIsDrawPadOpen(false)}
        onSave={handleDrawPadApply}
      />

      {/* Workspace Header: Mode Selector & View Toggles */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/80 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-extrabold text-sm sm:text-base text-foreground tracking-tight flex items-center gap-2">
                <span>SignResize Studio</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-primary/10 text-primary border border-primary/20">
                  v2026.3
                </span>
              </h2>
              <p className="text-xs text-muted-foreground">
                Official specifications for SSC, UPSC, RRB, IBPS, NEET &amp; State PSCs.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-between sm:justify-end">
            <PrivacyBadge />

            {/* Single vs Batch Switcher */}
            <div className="inline-flex rounded-xl bg-muted/60 p-0.5 border border-border/60 text-xs">
              <button
                type="button"
                onClick={() => setToolView('single')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  toolView === 'single'
                    ? 'bg-card text-foreground shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <PenTool className="w-3.5 h-3.5 text-primary" />
                <span>Single Studio</span>
              </button>
              <button
                type="button"
                onClick={() => setToolView('batch')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  toolView === 'batch'
                    ? 'bg-card text-foreground shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-primary" />
                <span>Batch Editor</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Main Mode Selectors */}
        <ModeSelector
          currentMode={targetType}
          onSelectMode={handleSelectMode}
          signatureLabel={t.tool.signatureMode}
          signatureSub={t.tool.signatureSub}
          photoLabel={t.tool.photoMode}
          photoSub={t.tool.photoSub}
          documentLabel={t.tool.documentMode}
          documentSub={t.tool.documentSub}
        />
      </div>

      {/* Preset Picker Bar */}
      <PresetPicker
        mode={targetType}
        selectedPreset={selectedPreset}
        onSelectPreset={handleSelectPreset}
      />

      {/* Single Mode vs Batch View */}
      {toolView === 'batch' ? (
        <BatchStudio
          mode={targetType}
          targetWidth={width}
          targetHeight={height}
          minKb={minKb}
          maxKb={maxKb}
          targetFormat={targetFormat}
          filters={filters}
          onToast={addToast}
        />
      ) : (
        /* Single Studio Two-Column Grid */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left Column: Interactive Canvas Stage & Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <CanvasStage
              sourceImage={sourceImage}
              sourceDimensions={sourceDimensions}
              mode={targetType}
              targetWidth={width}
              targetHeight={height}
              crop={crop}
              onChangeCrop={setCrop}
              rotation={rotation}
              onChangeRotation={setRotation}
              flipH={flipH}
              onToggleFlipH={() => setFlipH(!flipH)}
              flipV={flipV}
              onToggleFlipV={() => setFlipV(!flipV)}
              onFileUpload={handleFileUpload}
              onLoadSample={handleLoadSample}
              onOpenDrawPad={() => setIsDrawPadOpen(true)}
              showFaceGuide={showFaceGuide}
              onToggleFaceGuide={() => setShowFaceGuide(!showFaceGuide)}
              candidateName={candidateName}
              onChangeCandidateName={setCandidateName}
              dateOfPhoto={dateOfPhoto}
              onChangeDateOfPhoto={setDateOfPhoto}
              addNameDateStamp={addNameDateStamp}
              onToggleAddNameDateStamp={() => setAddNameDateStamp(!addNameDateStamp)}
            />

            {/* Paper Cleaner & Filters */}
            <ImageFilters
              filters={filters}
              onChangeFilters={setFilters}
              mode={targetType}
            />

            {/* Target Dimensions & KB Bounds */}
            <ToolControls
              unit={unit}
              onChangeUnit={setUnit}
              width={width}
              height={height}
              widthInput={widthInput}
              heightInput={heightInput}
              onChangeWidth={(num, str) => {
                setWidth(num);
                setWidthInput(str);
              }}
              onChangeHeight={(num, str) => {
                setHeight(num);
                setHeightInput(str);
              }}
              dpi={dpi}
              onChangeDpi={setDpi}
              lockAspect={lockAspect}
              onToggleLockAspect={() => setLockAspect(!lockAspect)}
              minKb={minKb}
              maxKb={maxKb}
              minKbInput={minKbInput}
              maxKbInput={maxKbInput}
              onChangeMinKb={(num, str) => {
                setMinKb(num);
                setMinKbInput(str);
              }}
              onChangeMaxKb={(num, str) => {
                setMaxKb(num);
                setMaxKbInput(str);
              }}
              targetFormat={targetFormat}
              onChangeTargetFormat={setTargetFormat}
            />
          </div>

          {/* Right Column: Live Output Preview & Official Compliance Check (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-20">
            {/* Output Preview Card */}
            <div className="bg-card border border-border/80 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-primary" />
                  <h3 className="font-bold text-xs text-foreground uppercase tracking-wider">
                    Ready-to-Upload Output
                  </h3>
                </div>

                {isProcessing && (
                  <span className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-primary">
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    <span>Compressing...</span>
                  </span>
                )}
              </div>

              {/* Preview Canvas Box */}
              <div className="relative min-h-[220px] sm:min-h-[240px] rounded-xl bg-muted/40 border border-border/60 flex items-center justify-center p-4 overflow-hidden">
                {processedResult ? (
                  <img
                    src={processedResult.dataUrl}
                    alt="Processed Output Preview"
                    className="max-h-56 max-w-full object-contain shadow-md rounded border border-border/40 transition-all duration-150"
                  />
                ) : (
                  <div className="text-center space-y-1.5 text-muted-foreground p-6">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mx-auto mb-2 text-muted-foreground">
                      <Eye className="w-5 h-5" />
                    </div>
                    <div className="font-semibold text-xs text-foreground">
                      Awaiting {targetType} upload
                    </div>
                    <div className="text-[11px] max-w-xs">
                      Upload an image or click &ldquo;Test Sample&rdquo; to see the instant live preview.
                    </div>
                  </div>
                )}
              </div>

              {/* Output Metrics Bar */}
              {processedResult && (
                <div className="p-3 rounded-xl bg-muted/30 border border-border/60 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-muted-foreground text-[10px] block uppercase">Final Dimensions</span>
                    <strong className="text-foreground">{processedResult.width}×{processedResult.height} px</strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-[10px] block uppercase">File Size</span>
                    <strong className={processedResult.withinTargetBounds ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-500'}>
                      {processedResult.sizeKb} KB
                    </strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-[10px] block uppercase">Format</span>
                    <strong className="text-foreground">{processedResult.format}</strong>
                  </div>
                </div>
              )}

              {/* Action Buttons: Instant Download & Copy */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  disabled={!processedResult || isProcessing}
                  onClick={handleDownload}
                  className="w-full py-3 px-4 rounded-xl bg-primary hover:opacity-95 text-primary-foreground font-bold text-xs sm:text-sm shadow-md shadow-primary/25 disabled:opacity-50 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>
                    {processedResult
                      ? `Download Resized ${targetType.toUpperCase()} (${processedResult.sizeKb} KB ${processedResult.format})`
                      : `Upload ${targetType} to Download`}
                  </span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={!processedResult}
                    onClick={handleCopy}
                    className="flex-1 py-2 px-3 rounded-xl bg-card border border-border hover:bg-muted text-foreground font-semibold text-xs transition flex items-center justify-center gap-1.5 disabled:opacity-50 cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                        <span>Copy Image</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleLoadSample}
                    className="py-2 px-3 rounded-xl bg-muted/40 hover:bg-muted border border-border text-foreground font-semibold text-xs transition cursor-pointer"
                    title="Load quick test sample"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 inline mr-1" />
                    <span>Sample</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Official Compliance Verification Inspector */}
            <ComplianceInspector
              result={processedResult}
              targetWidth={width}
              targetHeight={height}
              minKb={minKb}
              maxKb={maxKb}
              dpi={dpi}
              selectedPreset={selectedPreset}
              cleanPaperActive={filters.cleanPaper}
            />
          </div>
        </div>
      )}
    </div>
  );
};
