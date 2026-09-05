import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Upload,
  RotateCw,
  RotateCcw,
  FlipHorizontal,
  FlipVertical,
  Maximize,
  Sliders,
  Sparkles,
  Download,
  Copy,
  Check,
  RefreshCw,
  ShieldCheck,
  Zap,
  Lock,
  Unlock,
  Eye,
  FileImage,
  AlertCircle,
  HelpCircle,
  PenTool,
  ArrowRight,
  ZoomIn
} from 'lucide-react';
import { EXAM_PRESETS, CATEGORIES } from '../data/examPresets';
import type {
  ExamPreset,
  UnitType,
  OutputFormat,
  CropArea,
  FilterOptions,
  ProcessedImageResult
} from '../types';
import {
  convertUnits,
  formatFileSize,
  renderProcessedCanvas,
  compressCanvasToTargetSize
} from '../utils/imageProcessor';
import { SignaturePadModal } from './SignaturePadModal';

export const SignatureTool: React.FC = () => {
  // Image state
  const [sourceImage, setSourceImage] = useState<HTMLImageElement | null>(null);
  const [sourceFileName, setSourceFileName] = useState<string>('signature');
  const [sourceOriginalSize, setSourceOriginalSize] = useState<number>(0);
  const [sourceDimensions, setSourceDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  // Preset state
  const [selectedCategory, setSelectedCategory] = useState<string>('Popular');
  const [selectedPreset, setSelectedPreset] = useState<ExamPreset | null>(EXAM_PRESETS[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Unit and dimension settings
  const [unit, setUnit] = useState<UnitType>('px');
  const [width, setWidth] = useState<number>(140);
  const [height, setHeight] = useState<number>(60);
  const [dpi, setDpi] = useState<number>(200);
  const [lockAspect, setLockAspect] = useState<boolean>(true);

  // File size & format settings
  const [minKb, setMinKb] = useState<number>(10);
  const [maxKb, setMaxKb] = useState<number>(20);
  const [targetFormat, setTargetFormat] = useState<OutputFormat>('image/jpeg');

  // Transformation settings
  const [rotation, setRotation] = useState<number>(0);
  const [flipH, setFlipH] = useState<boolean>(false);
  const [flipV, setFlipV] = useState<boolean>(false);
  const [zoom, setZoom] = useState<number>(1);

  // Filters
  const [filters, setFilters] = useState<FilterOptions>({
    cleanPaper: true,
    brightness: 0,
    contrast: 15,
    blackAndWhite: false,
    threshold: 160
  });

  // Interactive Cropper State
  const [crop, setCrop] = useState<CropArea>({ x: 0, y: 0, width: 140, height: 60 });
  const [isDraggingCrop, setIsDraggingCrop] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [cropStart, setCropStart] = useState<CropArea>({ x: 0, y: 0, width: 0, height: 0 });
  const [activeHandle, setActiveHandle] = useState<string | null>(null);

  // Canvas and results
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [processedResult, setProcessedResult] = useState<ProcessedImageResult | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isDrawingPadOpen, setIsDrawingPadOpen] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  // Apply an exam preset
  const applyPreset = (preset: ExamPreset) => {
    setSelectedPreset(preset);
    setWidth(preset.widthPx);
    setHeight(preset.heightPx);
    setUnit('px');
    setDpi(preset.dpi);
    setMinKb(preset.minKb);
    setMaxKb(preset.maxKb);
    setLockAspect(true);
    setTargetFormat('image/jpeg');

    if (sourceImage) {
      initCropBox(sourceImage, preset.aspectRatio);
    }
  };

  // Initialize crop box to centered aspect ratio
  const initCropBox = (img: HTMLImageElement, targetAspect: number) => {
    const is90or270 = rotation === 90 || rotation === 270;
    const imgW = is90or270 ? img.naturalHeight : img.naturalWidth;
    const imgH = is90or270 ? img.naturalWidth : img.naturalHeight;

    let cropW = imgW * 0.9;
    let cropH = cropW / targetAspect;

    if (cropH > imgH * 0.9) {
      cropH = imgH * 0.9;
      cropW = cropH * targetAspect;
    }

    const cropX = Math.max(0, (imgW - cropW) / 2);
    const cropY = Math.max(0, (imgH - cropH) / 2);

    setCrop({
      x: Math.round(cropX),
      y: Math.round(cropY),
      width: Math.round(cropW),
      height: Math.round(cropH)
    });
  };

  // Handle incoming image file
  const handleImageUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (JPG, PNG, WebP, etc.)');
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
        const targetAspect = selectedPreset ? selectedPreset.aspectRatio : width / height;
        initCropBox(img, targetAspect);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  // Load realistic sample signature for 1-click test
  const loadSampleSignature = () => {
    const sampleCanvas = document.createElement('canvas');
    sampleCanvas.width = 600;
    sampleCanvas.height = 250;
    const ctx = sampleCanvas.getContext('2d');
    if (!ctx) return;

    // Slightly warm off-white paper tone (common in smartphone photos)
    ctx.fillStyle = '#FAF7EE';
    ctx.fillRect(0, 0, 600, 250);

    // Subtle paper shadow gradient
    const grad = ctx.createLinearGradient(0, 0, 600, 250);
    grad.addColorStop(0, 'rgba(0,0,0,0.04)');
    grad.addColorStop(1, 'rgba(0,0,0,0.01)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 600, 250);

    // Draw stylized cursive sample signature
    ctx.strokeStyle = '#111827';
    ctx.lineWidth = 4.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(80, 140);
    ctx.bezierCurveTo(110, 60, 160, 60, 150, 160);
    ctx.bezierCurveTo(140, 210, 200, 190, 240, 130);
    ctx.bezierCurveTo(270, 90, 290, 160, 330, 130);
    ctx.bezierCurveTo(360, 110, 380, 150, 420, 120);
    ctx.bezierCurveTo(450, 100, 480, 140, 520, 110);
    ctx.stroke();

    // Fast underline loop
    ctx.beginPath();
    ctx.moveTo(110, 185);
    ctx.quadraticCurveTo(300, 215, 490, 175);
    ctx.stroke();

    // Two dots under signature
    ctx.beginPath();
    ctx.arc(320, 205, 3, 0, Math.PI * 2);
    ctx.arc(360, 205, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#111827';
    ctx.fill();

    const dataUrl = sampleCanvas.toDataURL('image/jpeg', 0.95);
    setSourceFileName('sample_candidate_signature');
    setSourceOriginalSize(45200);

    const img = new Image();
    img.onload = () => {
      setSourceImage(img);
      setSourceDimensions({ width: 600, height: 250 });
      const targetAspect = selectedPreset ? selectedPreset.aspectRatio : width / height;
      initCropBox(img, targetAspect);
    };
    img.src = dataUrl;
  };

  // Drag & drop handlers
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  // Clipboard paste listener
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (e.clipboardData && e.clipboardData.files.length > 0) {
        const file = e.clipboardData.files[0];
        if (file.type.startsWith('image/')) {
          handleImageUpload(file);
        }
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, []);

  // Update target dimensions when unit changes
  const handleUnitChange = (newUnit: UnitType) => {
    if (newUnit === unit) return;
    const newWidth = convertUnits(width, unit, newUnit, dpi);
    const newHeight = convertUnits(height, unit, newUnit, dpi);
    setWidth(newWidth);
    setHeight(newHeight);
    setUnit(newUnit);
  };

  // Target dimensions in PX
  const targetWidthPx = Math.max(10, convertUnits(width, unit, 'px', dpi));
  const targetHeightPx = Math.max(10, convertUnits(height, unit, 'px', dpi));

  // Process and compress image whenever inputs change
  const processImage = useCallback(async () => {
    if (!sourceImage) return;

    setIsProcessing(true);
    try {
      const renderedCanvas = renderProcessedCanvas(
        sourceImage,
        sourceImage.naturalWidth,
        sourceImage.naturalHeight,
        crop,
        targetWidthPx,
        targetHeightPx,
        rotation,
        flipH,
        flipV,
        filters
      );

      const result = await compressCanvasToTargetSize(
        renderedCanvas,
        targetFormat,
        minKb,
        maxKb,
        (minKb + maxKb) / 2
      );

      setProcessedResult(result);
    } catch (err) {
      console.error('Error processing signature:', err);
    } finally {
      setIsProcessing(false);
    }
  }, [
    sourceImage,
    crop,
    targetWidthPx,
    targetHeightPx,
    rotation,
    flipH,
    flipV,
    filters,
    targetFormat,
    minKb,
    maxKb
  ]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      processImage();
    }, 120);
    return () => clearTimeout(timeout);
  }, [processImage]);

  // Handle Rotation
  const handleRotate = (angleDelta: number) => {
    const newRotation = (rotation + angleDelta + 360) % 360;
    setRotation(newRotation);
    if (sourceImage) {
      const is90or270 = newRotation === 90 || newRotation === 270;
      const curW = is90or270 ? sourceImage.naturalHeight : sourceImage.naturalWidth;
      const curH = is90or270 ? sourceImage.naturalWidth : sourceImage.naturalHeight;
      const targetAspect = targetWidthPx / targetHeightPx;
      initCropBox(sourceImage, targetAspect);
    }
  };

  // Filter presets by search and category
  const filteredPresets = EXAM_PRESETS.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.authority.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Popular') return p.isPopular;
    return p.category === selectedCategory;
  });

  // Handle Download
  const handleDownload = () => {
    if (!processedResult) return;
    const ext = targetFormat === 'image/jpeg' ? 'jpg' : targetFormat === 'image/png' ? 'png' : 'webp';
    const cleanExamTag = selectedPreset ? `${selectedPreset.shortCode.toLowerCase()}_` : '';
    const filename = `${cleanExamTag}signature_${targetWidthPx}x${targetHeightPx}_${Math.round(processedResult.sizeKb)}kb.${ext}`;

    const link = document.createElement('a');
    link.href = processedResult.dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle Copy to Clipboard
  const handleCopy = async () => {
    if (!processedResult) return;
    try {
      // Modern Clipboard API support
      if (processedResult.blob.type === 'image/png') {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': processedResult.blob })
        ]);
      } else {
        // Fallback or copy data URL text
        await navigator.clipboard.writeText(processedResult.dataUrl);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.warn('Clipboard write failed', e);
    }
  };

  // Render crop box and handle mouse/touch interactions
  const is90or270 = rotation === 90 || rotation === 270;
  const naturalW = sourceImage ? (is90or270 ? sourceImage.naturalHeight : sourceImage.naturalWidth) : 600;
  const naturalH = sourceImage ? (is90or270 ? sourceImage.naturalWidth : sourceImage.naturalHeight) : 250;

  // Cropper interaction math
  const handleCropMouseDown = (e: React.MouseEvent | React.TouchEvent, handle: string) => {
    e.stopPropagation();
    setIsDraggingCrop(true);
    setActiveHandle(handle);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragStart({ x: clientX, y: clientY });
    setCropStart({ ...crop });
  };

  const handleContainerMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDraggingCrop || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scaleX = naturalW / rect.width;
    const scaleY = naturalH / rect.height;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const deltaX = (clientX - dragStart.x) * scaleX;
    const deltaY = (clientY - dragStart.y) * scaleY;

    if (activeHandle === 'move') {
      let newX = cropStart.x + deltaX;
      let newY = cropStart.y + deltaY;
      newX = Math.max(0, Math.min(naturalW - crop.width, newX));
      newY = Math.max(0, Math.min(naturalH - crop.height, newY));
      setCrop((prev) => ({ ...prev, x: Math.round(newX), y: Math.round(newY) }));
    } else if (activeHandle === 'se') {
      let newW = Math.max(40, cropStart.width + deltaX);
      let newH = lockAspect ? newW / (targetWidthPx / targetHeightPx) : Math.max(20, cropStart.height + deltaY);

      if (crop.x + newW > naturalW) {
        newW = naturalW - crop.x;
        if (lockAspect) newH = newW / (targetWidthPx / targetHeightPx);
      }
      if (crop.y + newH > naturalH) {
        newH = naturalH - crop.y;
        if (lockAspect) newW = newH * (targetWidthPx / targetHeightPx);
      }

      setCrop((prev) => ({ ...prev, width: Math.round(newW), height: Math.round(newH) }));
    } else if (activeHandle === 'nw') {
      let newW = Math.max(40, cropStart.width - deltaX);
      let newH = lockAspect ? newW / (targetWidthPx / targetHeightPx) : Math.max(20, cropStart.height - deltaY);
      let newX = cropStart.x + deltaX;
      let newY = cropStart.y + (lockAspect ? -(newH - cropStart.height) : deltaY);

      if (newX >= 0 && newY >= 0) {
        setCrop({
          x: Math.round(newX),
          y: Math.round(newY),
          width: Math.round(newW),
          height: Math.round(newH)
        });
      }
    }
  };

  const handleContainerMouseUp = () => {
    setIsDraggingCrop(false);
    setActiveHandle(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8" id="tool-workspace">
      {/* Upload & Quick Action Bar (if no image loaded) */}
      {!sourceImage && (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={handleDrop}
          className={`relative overflow-hidden rounded-2xl border-2 border-dashed transition-all p-8 md:p-14 text-center ${
            isDragOver
              ? 'border-primary bg-primary/5 scale-[1.005]'
              : 'border-border bg-card/60 hover:border-primary/40 hover:bg-muted/30 shadow-sm'
          }`}
        >
          <div className="max-w-xl mx-auto space-y-5">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-inner border border-primary/20">
              <Upload className="w-8 h-8 animate-pulse" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Drop your Signature Image here
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Instant client-side resizing and compression for SSC, IBPS, UPSC, GATE, and PAN Card forms.
                <br className="hidden sm:inline" />
                <span className="text-primary font-medium"> 100% Private</span>: Your document never leaves your device.
              </p>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,.heic,.heif"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    handleImageUpload(e.target.files[0]);
                  }
                }}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:opacity-90 active:scale-95 transition"
              >
                <FileImage className="w-5 h-5" />
                Select Image from Device
              </button>

              <button
                type="button"
                onClick={() => setIsDrawingPadOpen(true)}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border text-foreground font-medium hover:bg-muted active:scale-95 transition shadow-sm"
              >
                <PenTool className="w-4 h-4 text-primary" />
                Sign on Screen
              </button>

              <button
                type="button"
                onClick={loadSampleSignature}
                className="flex items-center gap-1.5 px-4 py-3 rounded-xl bg-accent/40 border border-border text-accent-foreground text-xs font-semibold hover:bg-accent active:scale-95 transition"
              >
                <Sparkles className="w-4 h-4 text-cyan-500" />
                Test Sample Signature
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 pt-4 text-xs text-muted-foreground border-t border-border/50">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Zero Server Uploads
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" /> Instant Real-Time KB Tuning
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-cyan-500" /> SSC & Banking Guaranteed
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Active Studio Interface */}
      {sourceImage && (
        <div className="space-y-6">
          {/* Top Bar: Active Preset & Quick Reset */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-card border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold font-mono text-sm border border-primary/20">
                {selectedPreset ? selectedPreset.shortCode : 'CUS'}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">
                    {selectedPreset ? selectedPreset.name : 'Custom Sizing'}
                  </h3>
                  {selectedPreset?.isPopular && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/15 text-primary border border-primary/30">
                      Popular Exam
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  Target:{' '}
                  <span className="font-mono font-medium text-foreground">
                    {targetWidthPx} × {targetHeightPx} px
                  </span>{' '}
                  • Allowed:{' '}
                  <span className="font-mono font-medium text-foreground">
                    {minKb} KB – {maxKb} KB
                  </span>{' '}
                  • DPI: {dpi}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-muted text-foreground hover:bg-muted/80 border border-border transition"
              >
                <Upload className="w-3.5 h-3.5" />
                Change Image
              </button>
              <button
                type="button"
                onClick={() => {
                  setSourceImage(null);
                  setProcessedResult(null);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 border border-transparent hover:border-red-200 transition"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Start Fresh
              </button>
            </div>
          </div>

          {/* Exam Presets Selector Pills */}
          <div className="bg-card border border-border rounded-xl p-4 shadow-sm space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Select Govt Exam / Portal Specification:
                </span>
              </div>
              <input
                type="text"
                placeholder="Search exam (e.g. SSC, UPSC, PAN)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-1 text-xs rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 w-56"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 border-b border-border/50 pb-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                    selectedCategory === cat
                      ? 'bg-primary text-primary-foreground font-semibold shadow-xs'
                      : 'bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Presets Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 max-h-48 overflow-y-auto pr-1">
              {filteredPresets.map((preset) => {
                const isSelected = selectedPreset?.id === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => applyPreset(preset)}
                    className={`text-left p-2.5 rounded-lg border transition text-xs flex flex-col justify-between ${
                      isSelected
                        ? 'border-primary bg-primary/10 shadow-xs'
                        : 'border-border/70 bg-card hover:border-primary/40 hover:bg-muted/40'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-foreground truncate">{preset.shortCode}</div>
                      <div className="text-[11px] text-muted-foreground truncate">{preset.name}</div>
                    </div>
                    <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                      <span>{preset.widthPx}×{preset.heightPx}px</span>
                      <span className="text-primary font-medium">{preset.minKb}-{preset.maxKb}KB</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Official Guidance Alert for Active Preset */}
            {selectedPreset && (
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-300">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
                <div className="space-y-0.5">
                  <span className="font-semibold">{selectedPreset.name} Portal Requirement:</span>
                  <p className="text-muted-foreground dark:text-amber-200/80">
                    {selectedPreset.notes} • Requirement:{' '}
                    <strong className="text-foreground font-semibold">{selectedPreset.inkRequirement}</strong>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Core Workspace: Two Columns (Cropper Canvas + Custom Controls & Results) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column (7 cols): Interactive Crop & Enhancer Visualizer */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-card border border-border rounded-xl p-4 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Interactive Crop & Alignment Box
                  </span>
                  <span className="text-xs font-mono text-primary font-medium">
                    Crop: {crop.width} × {crop.height} px ({crop.width > 0 ? (crop.width / crop.height).toFixed(2) : 0}:1)
                  </span>
                </div>

                {/* Canvas Cropper Container */}
                <div
                  ref={containerRef}
                  onMouseMove={handleContainerMouseMove}
                  onMouseUp={handleContainerMouseUp}
                  onTouchMove={handleContainerMouseMove}
                  onTouchEnd={handleContainerMouseUp}
                  className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden bg-slate-900 border border-border flex items-center justify-center select-none shadow-inner"
                >
                  {/* Background Full Image */}
                  <img
                    src={sourceImage.src}
                    alt="Signature Source"
                    className="max-w-full max-h-full object-contain pointer-events-none transition-transform"
                    style={{
                      transform: `rotate(${rotation}deg) scale(${flipH ? -1 : 1}, ${flipV ? -1 : 1})`,
                    }}
                  />

                  {/* Darkened Overlay around Crop Box */}
                  <div className="absolute inset-0 bg-black/45 pointer-events-none" />

                  {/* High Precision Crop Box */}
                  <div
                    style={{
                      left: `${(crop.x / naturalW) * 100}%`,
                      top: `${(crop.y / naturalH) * 100}%`,
                      width: `${(crop.width / naturalW) * 100}%`,
                      height: `${(crop.height / naturalH) * 100}%`,
                    }}
                    onMouseDown={(e) => handleCropMouseDown(e, 'move')}
                    onTouchStart={(e) => handleCropMouseDown(e, 'move')}
                    className="absolute border-2 border-primary bg-primary/10 shadow-[0_0_0_9999px_rgba(0,0,0,0.45)] cursor-move transition-shadow"
                  >
                    {/* Grid Lines for alignment */}
                    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none opacity-40">
                      <div className="border-r border-white/40" />
                      <div className="border-r border-white/40" />
                      <div className="" />
                      <div className="border-r border-t border-white/40" />
                      <div className="border-r border-t border-white/40" />
                      <div className="border-t border-white/40" />
                      <div className="border-r border-t border-white/40" />
                      <div className="border-r border-t border-white/40" />
                      <div className="border-t border-white/40" />
                    </div>

                    {/* SE Resize Handle */}
                    <div
                      onMouseDown={(e) => handleCropMouseDown(e, 'se')}
                      onTouchStart={(e) => handleCropMouseDown(e, 'se')}
                      className="absolute -bottom-2 -right-2 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-md cursor-se-resize"
                    />

                    {/* NW Resize Handle */}
                    <div
                      onMouseDown={(e) => handleCropMouseDown(e, 'nw')}
                      onTouchStart={(e) => handleCropMouseDown(e, 'nw')}
                      className="absolute -top-2 -left-2 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-md cursor-nw-resize"
                    />

                    {/* Dimension Tag */}
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-black/80 text-white font-mono text-[10px] whitespace-nowrap pointer-events-none">
                      {crop.width} × {crop.height}
                    </div>
                  </div>
                </div>

                {/* Cropper Toolbar: Rotate, Flip, Aspect Lock */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleRotate(-90)}
                      title="Rotate 90° Left"
                      className="p-2 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRotate(90)}
                      title="Rotate 90° Right"
                      className="p-2 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition"
                    >
                      <RotateCw className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setFlipH(!flipH)}
                      title="Flip Horizontally"
                      className={`p-2 rounded-lg transition ${
                        flipH ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground hover:bg-muted/80'
                      }`}
                    >
                      <FlipHorizontal className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setFlipV(!flipV)}
                      title="Flip Vertically"
                      className={`p-2 rounded-lg transition ${
                        flipV ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground hover:bg-muted/80'
                      }`}
                    >
                      <FlipVertical className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        const targetAspect = targetWidthPx / targetHeightPx;
                        initCropBox(sourceImage, targetAspect);
                      }}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-muted hover:bg-muted/80 text-foreground transition"
                    >
                      <Maximize className="w-3.5 h-3.5" />
                      Reset Crop
                    </button>
                  </div>
                </div>
              </div>

              {/* Signature Paper Cleaner & Enhancement Box */}
              <div className="bg-card border border-border rounded-xl p-4 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-500" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Signature Paper Cleaner & Filters
                    </span>
                  </div>
                  <span className="text-[11px] text-muted-foreground">Recommended for Phone Photos</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Clean Paper Toggle */}
                  <label className="flex items-center justify-between p-3 rounded-xl border border-border bg-background cursor-pointer hover:border-primary/40 transition">
                    <div className="space-y-0.5">
                      <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                        Clean White Paper
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                          Auto
                        </span>
                      </span>
                      <p className="text-[11px] text-muted-foreground">
                        Whitens yellow paper & removes camera shadows
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={filters.cleanPaper}
                      onChange={(e) => setFilters({ ...filters, cleanPaper: e.target.checked })}
                      className="w-4 h-4 text-primary rounded focus:ring-primary"
                    />
                  </label>

                  {/* Pure B&W Monochrome Toggle */}
                  <label className="flex items-center justify-between p-3 rounded-xl border border-border bg-background cursor-pointer hover:border-primary/40 transition">
                    <div className="space-y-0.5">
                      <span className="text-xs font-semibold text-foreground">
                        Pure Monochrome (B&W)
                      </span>
                      <p className="text-[11px] text-muted-foreground">
                        High contrast ink for strict scanners
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={filters.blackAndWhite}
                      onChange={(e) => setFilters({ ...filters, blackAndWhite: e.target.checked })}
                      className="w-4 h-4 text-primary rounded focus:ring-primary"
                    />
                  </label>
                </div>

                {/* Fine Sliders */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Contrast Boost</span>
                      <span className="font-mono text-foreground">{filters.contrast > 0 ? `+${filters.contrast}` : filters.contrast}</span>
                    </div>
                    <input
                      type="range"
                      min="-50"
                      max="50"
                      value={filters.contrast}
                      onChange={(e) => setFilters({ ...filters, contrast: Number(e.target.value) })}
                      className="w-full accent-primary h-1.5 bg-muted rounded-lg cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Brightness Offset</span>
                      <span className="font-mono text-foreground">{filters.brightness > 0 ? `+${filters.brightness}` : filters.brightness}</span>
                    </div>
                    <input
                      type="range"
                      min="-50"
                      max="50"
                      value={filters.brightness}
                      onChange={(e) => setFilters({ ...filters, brightness: Number(e.target.value) })}
                      className="w-full accent-primary h-1.5 bg-muted rounded-lg cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Custom Dimensions, Exact KB Tuner & Download Hub */}
            <div className="lg:col-span-5 space-y-4">
              {/* Output Preview Card */}
              <div className="bg-card border border-border rounded-xl p-4 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Live Result & Compliance Check
                  </span>
                  {processedResult?.withinTargetBounds ? (
                    <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <Check className="w-3.5 h-3.5" />
                      Exam Ready ({processedResult.sizeKb} KB)
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {processedResult?.sizeKb} KB
                    </span>
                  )}
                </div>

                {/* Rendered Live Image Preview */}
                <div className="w-full h-36 bg-white rounded-xl border border-border p-2 flex items-center justify-center overflow-hidden shadow-inner relative">
                  {processedResult ? (
                    <img
                      src={processedResult.dataUrl}
                      alt="Processed Signature"
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <div className="text-xs text-muted-foreground">Processing...</div>
                  )}

                  {/* Format & Dimensions Pill */}
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/75 text-white font-mono text-[10px]">
                    {targetWidthPx} × {targetHeightPx} px • {processedResult?.format || 'JPG'}
                  </div>
                </div>

                {/* Before vs After Metric Cards */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-muted/50 border border-border space-y-1">
                    <span className="text-[10px] uppercase font-bold text-muted-foreground">Original Image</span>
                    <div className="font-mono font-semibold text-foreground">
                      {formatFileSize(sourceOriginalSize)}
                    </div>
                    <div className="text-[10px] text-muted-foreground font-mono">
                      {sourceDimensions.width} × {sourceDimensions.height} px
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-primary/5 border border-primary/20 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-primary">Optimized Output</span>
                    <div className="font-mono font-bold text-foreground">
                      {processedResult ? `${processedResult.sizeKb} KB` : '...'}
                    </div>
                    <div className="text-[10px] text-muted-foreground font-mono">
                      {targetWidthPx} × {targetHeightPx} px ({dpi} DPI)
                    </div>
                  </div>
                </div>

                {/* Download CTA Button */}
                <div className="space-y-2 pt-1">
                  <button
                    type="button"
                    onClick={handleDownload}
                    disabled={!processedResult}
                    className="w-full py-3.5 px-4 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/25 hover:opacity-95 active:scale-[0.99] disabled:opacity-50 transition flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download Resized Signature ({processedResult?.sizeKb} KB)
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopy}
                      disabled={!processedResult}
                      className="flex-1 py-2 px-3 rounded-lg border border-border bg-card text-foreground text-xs font-semibold hover:bg-muted transition flex items-center justify-center gap-1.5"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-muted-foreground" />}
                      {copied ? 'Copied!' : 'Copy to Clipboard'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsDrawingPadOpen(true)}
                      className="py-2 px-3 rounded-lg border border-border bg-card text-foreground text-xs font-semibold hover:bg-muted transition flex items-center justify-center gap-1.5"
                    >
                      <PenTool className="w-3.5 h-3.5 text-primary" />
                      Sign Pad
                    </button>
                  </div>
                </div>
              </div>

              {/* Exact Custom Dimensions & KB Tuner */}
              <div className="bg-card border border-border rounded-xl p-4 shadow-sm space-y-4 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold uppercase tracking-wider text-muted-foreground">
                    Custom Dimension & File Size
                  </span>
                  {/* Unit Selector */}
                  <div className="flex rounded-lg border border-border p-0.5 bg-muted/40">
                    {(['px', 'cm', 'mm', 'in'] as UnitType[]).map((u) => (
                      <button
                        key={u}
                        type="button"
                        onClick={() => handleUnitChange(u)}
                        className={`px-2 py-0.5 rounded text-[11px] font-mono transition ${
                          unit === u
                            ? 'bg-primary text-primary-foreground font-bold shadow-xs'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {u}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Width & Height Fields */}
                <div className="grid grid-cols-2 gap-3 items-center">
                  <div className="space-y-1">
                    <label className="text-muted-foreground font-medium">Width ({unit}):</label>
                    <input
                      type="number"
                      min="1"
                      step={unit === 'px' ? '1' : '0.1'}
                      value={width}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setWidth(val);
                        if (lockAspect && height > 0) {
                          const ratio = targetWidthPx / targetHeightPx;
                          setHeight(Number((val / ratio).toFixed(unit === 'px' ? 0 : 2)));
                        }
                      }}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-muted-foreground font-medium">Height ({unit}):</label>
                    <input
                      type="number"
                      min="1"
                      step={unit === 'px' ? '1' : '0.1'}
                      value={height}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setHeight(val);
                        if (lockAspect && width > 0) {
                          const ratio = targetWidthPx / targetHeightPx;
                          setWidth(Number((val * ratio).toFixed(unit === 'px' ? 0 : 2)));
                        }
                      }}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
                    />
                  </div>
                </div>

                {/* Lock Aspect Ratio & DPI */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={() => setLockAspect(!lockAspect)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition ${
                      lockAspect
                        ? 'border-primary/40 bg-primary/10 text-primary font-semibold'
                        : 'border-border bg-card text-muted-foreground'
                    }`}
                  >
                    {lockAspect ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                    Lock Aspect Ratio
                  </button>

                  <div className="flex items-center gap-1.5">
                    <span className="text-muted-foreground">DPI:</span>
                    <select
                      value={dpi}
                      onChange={(e) => setDpi(Number(e.target.value))}
                      className="px-2 py-1 rounded-lg border border-border bg-background font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                      <option value="72">72 DPI (Web)</option>
                      <option value="150">150 DPI</option>
                      <option value="200">200 DPI (Govt Standard)</option>
                      <option value="300">300 DPI (High Print)</option>
                    </select>
                  </div>
                </div>

                {/* Target File Size Range (KB) */}
                <div className="pt-2 border-t border-border/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="font-semibold text-foreground flex items-center gap-1.5">
                      Target File Size Range (KB):
                    </label>
                    <span className="font-mono text-primary font-semibold">
                      {minKb} KB – {maxKb} KB
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <span className="text-[11px] text-muted-foreground">Min Size (KB):</span>
                      <input
                        type="number"
                        min="1"
                        max={maxKb - 1}
                        value={minKb}
                        onChange={(e) => setMinKb(Math.max(1, Number(e.target.value)))}
                        className="w-full px-3 py-1.5 rounded-lg border border-border bg-background text-foreground font-mono"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] text-muted-foreground">Max Size (KB):</span>
                      <input
                        type="number"
                        min={minKb + 1}
                        max="5000"
                        value={maxKb}
                        onChange={(e) => setMaxKb(Math.max(minKb + 1, Number(e.target.value)))}
                        className="w-full px-3 py-1.5 rounded-lg border border-border bg-background text-foreground font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Output Format Picker */}
                <div className="pt-2 border-t border-border/50 flex items-center justify-between">
                  <span className="text-muted-foreground font-medium">Output Format:</span>
                  <div className="flex rounded-lg border border-border p-0.5 bg-muted/40">
                    {(
                      [
                        { id: 'image/jpeg', label: 'JPG / JPEG (Govt)' },
                        { id: 'image/png', label: 'PNG' },
                        { id: 'image/webp', label: 'WebP' }
                      ] as const
                    ).map((fmt) => (
                      <button
                        key={fmt.id}
                        type="button"
                        onClick={() => setTargetFormat(fmt.id)}
                        className={`px-2.5 py-1 rounded text-[11px] font-medium transition ${
                          targetFormat === fmt.id
                            ? 'bg-primary text-primary-foreground font-bold shadow-xs'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {fmt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Signature Drawing Modal */}
      <SignaturePadModal
        isOpen={isDrawingPadOpen}
        onClose={() => setIsDrawingPadOpen(false)}
        onSave={(dataUrl) => {
          setSourceFileName('drawn_digital_signature');
          setSourceOriginalSize(32000);
          const img = new Image();
          img.onload = () => {
            setSourceImage(img);
            setSourceDimensions({ width: img.naturalWidth, height: img.naturalHeight });
            const targetAspect = selectedPreset ? selectedPreset.aspectRatio : width / height;
            initCropBox(img, targetAspect);
          };
          img.src = dataUrl;
        }}
      />
    </div>
  );
};
