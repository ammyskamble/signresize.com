import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Upload,
  RotateCw,
  RotateCcw,
  FlipHorizontal,
  FlipVertical,
  Maximize,
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
  PenTool,
  Layers,
  Archive,
  Trash2,
  Plus,
  CheckCircle2,
  Clock,
  SlidersHorizontal,
  FolderArchive,
  Scaling,
  XCircle
} from 'lucide-react';
import { EXAM_PRESETS, CATEGORIES } from '../data/examPresets';
import type {
  ExamPreset,
  UnitType,
  OutputFormat,
  CropArea,
  FilterOptions,
  ProcessedImageResult,
  BatchSignatureItem
} from '../types';
import {
  convertUnits,
  formatFileSize,
  renderProcessedCanvas,
  compressCanvasToTargetSize
} from '../utils/imageProcessor';
import { SignaturePadModal } from './SignaturePadModal';

export interface SignatureToolProps {
  initialPresetId?: string;
}

export const SignatureTool: React.FC<SignatureToolProps> = ({ initialPresetId }) => {
  // Determine initial preset from prop if provided
  const initialPreset = (initialPresetId && EXAM_PRESETS.find(p => p.id === initialPresetId)) || EXAM_PRESETS[0];

  // Mode state: 'single' or 'batch'
  const [toolMode, setToolMode] = useState<'single' | 'batch'>('single');

  // Single Image state
  const [sourceImage, setSourceImage] = useState<HTMLImageElement | null>(null);
  const [sourceFileName, setSourceFileName] = useState<string>('signature');
  const [sourceOriginalSize, setSourceOriginalSize] = useState<number>(0);
  const [sourceDimensions, setSourceDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  // Batch Mode state (Up to 10 signatures)
  const [batchItems, setBatchItems] = useState<BatchSignatureItem[]>([]);
  const [isBatchProcessing, setIsBatchProcessing] = useState<boolean>(false);
  const [batchProgress, setBatchProgress] = useState<{ current: number; total: number }>({ current: 0, total: 0 });
  const [isZipCreating, setIsZipCreating] = useState<boolean>(false);

  // Preset state
  const [selectedCategory, setSelectedCategory] = useState<string>('Popular');
  const [selectedPreset, setSelectedPreset] = useState<ExamPreset | null>(initialPreset);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Unit and dimension settings
  const [unit, setUnit] = useState<UnitType>('px');
  const [width, setWidth] = useState<number>(initialPreset.widthPx);
  const [height, setHeight] = useState<number>(initialPreset.heightPx);
  const [widthInput, setWidthInput] = useState<string>(String(initialPreset.widthPx));
  const [heightInput, setHeightInput] = useState<string>(String(initialPreset.heightPx));
  const [dpi, setDpi] = useState<number>(initialPreset.dpi);
  const [lockAspect, setLockAspect] = useState<boolean>(true);

  // File size & format settings
  const [minKb, setMinKb] = useState<number>(initialPreset.minKb);
  const [maxKb, setMaxKb] = useState<number>(initialPreset.maxKb);
  const [minKbInput, setMinKbInput] = useState<string>(String(initialPreset.minKb));
  const [maxKbInput, setMaxKbInput] = useState<string>(String(initialPreset.maxKb));
  const [targetFormat, setTargetFormat] = useState<OutputFormat>('image/jpeg');

  // Global Transformation settings (Applies in Batch & Single mode)
  const [rotation, setRotation] = useState<number>(0);
  const [flipH, setFlipH] = useState<boolean>(false);
  const [flipV, setFlipV] = useState<boolean>(false);

  // Global Filters & Paper Cleaning
  const [filters, setFilters] = useState<FilterOptions>({
    cleanPaper: true,
    brightness: 0,
    contrast: 15,
    blackAndWhite: false,
    threshold: 160
  });

  // Interactive Cropper State (Single Mode)
  const [crop, setCrop] = useState<CropArea>({ x: 0, y: 0, width: 140, height: 60 });
  const [isDraggingCrop, setIsDraggingCrop] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [cropStart, setCropStart] = useState<CropArea>({ x: 0, y: 0, width: 0, height: 0 });
  const [activeHandle, setActiveHandle] = useState<string | null>(null);

  // Canvas and results
  const containerRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [processedResult, setProcessedResult] = useState<ProcessedImageResult | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isDrawingPadOpen, setIsDrawingPadOpen] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  // Non-blocking batch sync timer ref
  const batchSyncTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Target dimensions in PX
  const targetWidthPx = Math.max(10, convertUnits(width, unit, 'px', dpi));
  const targetHeightPx = Math.max(10, convertUnits(height, unit, 'px', dpi));

  // Apply an exam preset
  const applyPreset = (preset: ExamPreset) => {
    setSelectedPreset(preset);
    setWidth(preset.widthPx);
    setHeight(preset.heightPx);
    setWidthInput(String(preset.widthPx));
    setHeightInput(String(preset.heightPx));
    setUnit('px');
    setDpi(preset.dpi);
    setMinKb(preset.minKb);
    setMaxKb(preset.maxKb);
    setMinKbInput(String(preset.minKb));
    setMaxKbInput(String(preset.maxKb));
    setLockAspect(true);
    setTargetFormat('image/jpeg');

    if (sourceImage) {
      initCropBox(sourceImage, preset.aspectRatio);
    }
  };

  // Sync preset if prop or URL param ?preset= changes
  useEffect(() => {
    const urlPreset = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('preset') : null;
    const targetId = initialPresetId || urlPreset;
    if (targetId) {
      const matched = EXAM_PRESETS.find(
        (p) => p.id.toLowerCase() === targetId.toLowerCase() || p.shortCode.toLowerCase() === targetId.toLowerCase()
      );
      if (matched && matched.id !== selectedPreset?.id) {
        applyPreset(matched);
      }
    }
  }, [initialPresetId]);

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

  // Helper to load a single file
  const loadSingleImageFile = (file: File) => {
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
        const targetAspect = selectedPreset ? selectedPreset.aspectRatio : targetWidthPx / targetHeightPx;
        initCropBox(img, targetAspect);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  // Process incoming files (Handles 1 up to 10 signatures)
  const handleMultipleFiles = (files: FileList | File[]) => {
    const fileArray = Array.from(files).filter((f) => f.type.startsWith('image/'));

    if (fileArray.length === 0) {
      alert('Please select valid image files (JPG, PNG, WebP).');
      return;
    }

    // If single file uploaded in single mode with empty batch
    if (fileArray.length === 1 && toolMode === 'single' && batchItems.length === 0) {
      loadSingleImageFile(fileArray[0]);
      return;
    }

    // Batch mode: enforce maximum of 10 signatures
    const availableSlots = 10 - batchItems.length;
    if (availableSlots <= 0) {
      alert('Maximum batch capacity reached (10 signatures at a time). Please clear existing items.');
      return;
    }

    const filesToLoad = fileArray.slice(0, availableSlots);
    if (fileArray.length > availableSlots) {
      alert(`Only the first ${availableSlots} images were added. Maximum batch capacity is 10 signatures.`);
    }

    // Switch to batch mode
    setToolMode('batch');

    // Read and load all images into batch state
    filesToLoad.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const newItem: BatchSignatureItem = {
            id: `${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
            file,
            fileName: file.name,
            originalSize: file.size,
            image: img,
            status: 'pending',
            rotation: 0,
            flipH: false,
            flipV: false
          };

          setBatchItems((prev) => {
            if (prev.length >= 10) return prev;
            return [...prev, newItem];
          });

          // Also set as active single image if none currently selected
          if (!sourceImage) {
            setSourceImage(img);
            setSourceFileName(file.name.replace(/\.[^/.]+$/, ''));
            setSourceOriginalSize(file.size);
            setSourceDimensions({ width: img.naturalWidth, height: img.naturalHeight });
            initCropBox(img, selectedPreset ? selectedPreset.aspectRatio : targetWidthPx / targetHeightPx);
          }
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  };

  // Helper to create synthetic sample signatures for 1-click testing
  const createSampleSignatureData = (text: string, subText: string, width = 600, height = 250): string => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';

    ctx.fillStyle = '#FAF7EE';
    ctx.fillRect(0, 0, width, height);

    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, 'rgba(0,0,0,0.04)');
    grad.addColorStop(1, 'rgba(0,0,0,0.01)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

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

    ctx.beginPath();
    ctx.moveTo(110, 185);
    ctx.quadraticCurveTo(300, 215, 490, 175);
    ctx.stroke();

    ctx.font = 'bold 16px monospace';
    ctx.fillStyle = '#475569';
    ctx.fillText(text, 20, 30);
    ctx.font = '12px sans-serif';
    ctx.fillText(subText, 20, 50);

    return canvas.toDataURL('image/jpeg', 0.95);
  };

  // Load single sample signature
  const loadSingleSampleSignature = () => {
    const dataUrl = createSampleSignatureData('Sample Signature', 'Candidate Form Spec');
    setSourceFileName('sample_candidate_signature');
    setSourceOriginalSize(45200);

    const img = new Image();
    img.onload = () => {
      setSourceImage(img);
      setSourceDimensions({ width: 600, height: 250 });
      const targetAspect = selectedPreset ? selectedPreset.aspectRatio : targetWidthPx / targetHeightPx;
      initCropBox(img, targetAspect);
    };
    img.src = dataUrl;
  };

  // Load 3 sample signatures into Batch Mode for instant multi-edit test
  const loadSampleBatchSignatures = () => {
    setToolMode('batch');
    const samples = [
      { name: 'candidate_sign_main.jpg', label: 'Candidate Sign 1', sub: 'SSC Form' },
      { name: 'thumb_impression_left.jpg', label: 'Thumb Impression', sub: 'Left Hand' },
      { name: 'candidate_sign_alt.jpg', label: 'Candidate Sign 2', sub: 'RRB / PAN' }
    ];

    const loadedItems: BatchSignatureItem[] = [];

    samples.forEach((sample, idx) => {
      const dataUrl = createSampleSignatureData(sample.label, sample.sub, 600, 250);
      const img = new Image();
      img.onload = () => {
        const item: BatchSignatureItem = {
          id: `sample_${idx}_${Date.now()}`,
          fileName: sample.name,
          originalSize: 42000 + idx * 3000,
          image: img,
          status: 'pending',
          rotation: 0,
          flipH: false,
          flipV: false
        };
        loadedItems.push(item);

        if (loadedItems.length === samples.length) {
          setBatchItems(loadedItems);
          setSourceImage(loadedItems[0].image);
          setSourceFileName(loadedItems[0].fileName.replace(/\.[^/.]+$/, ''));
          setSourceOriginalSize(loadedItems[0].originalSize);
          setSourceDimensions({ width: 600, height: 250 });
        }
      };
      img.src = dataUrl;
    });
  };

  // Drag & drop handlers
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleMultipleFiles(e.dataTransfer.files);
    }
  };

  // Clipboard paste listener
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (e.clipboardData && e.clipboardData.files.length > 0) {
        handleMultipleFiles(e.clipboardData.files);
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [toolMode, batchItems.length]);

  // Update target dimensions when unit changes
  const handleUnitChange = (newUnit: UnitType) => {
    if (newUnit === unit) return;
    const newWidth = convertUnits(width, unit, newUnit, dpi);
    const newHeight = convertUnits(height, unit, newUnit, dpi);
    setWidth(newWidth);
    setHeight(newHeight);
    setWidthInput(String(newWidth));
    setHeightInput(String(newHeight));
    setUnit(newUnit);
  };

  // Keyboard typing handlers for Width and Height
  const handleWidthChange = (valStr: string) => {
    setWidthInput(valStr);
    const val = parseFloat(valStr);
    if (!isNaN(val) && val > 0) {
      setWidth(val);
      if (lockAspect && height > 0) {
        const ratio = targetWidthPx / targetHeightPx;
        const newH = Number((val / ratio).toFixed(unit === 'px' ? 0 : 2));
        setHeight(newH);
        setHeightInput(String(newH));
      }
    }
  };

  const handleHeightChange = (valStr: string) => {
    setHeightInput(valStr);
    const val = parseFloat(valStr);
    if (!isNaN(val) && val > 0) {
      setHeight(val);
      if (lockAspect && width > 0) {
        const ratio = targetWidthPx / targetHeightPx;
        const newW = Number((val * ratio).toFixed(unit === 'px' ? 0 : 2));
        setWidth(newW);
        setWidthInput(String(newW));
      }
    }
  };

  const adjustWidth = (delta: number) => {
    const step = unit === 'px' ? 1 : 0.1;
    const current = parseFloat(widthInput) || width || 10;
    const nextVal = Math.max(step, Number((current + delta * step).toFixed(unit === 'px' ? 0 : 2)));
    handleWidthChange(String(nextVal));
  };

  const adjustHeight = (delta: number) => {
    const step = unit === 'px' ? 1 : 0.1;
    const current = parseFloat(heightInput) || height || 10;
    const nextVal = Math.max(step, Number((current + delta * step).toFixed(unit === 'px' ? 0 : 2)));
    handleHeightChange(String(nextVal));
  };

  const handleMinKbChange = (valStr: string) => {
    setMinKbInput(valStr);
    const val = parseInt(valStr, 10);
    if (!isNaN(val) && val >= 1) {
      setMinKb(val);
    }
  };

  const handleMaxKbChange = (valStr: string) => {
    setMaxKbInput(valStr);
    const val = parseInt(valStr, 10);
    if (!isNaN(val) && val >= 1) {
      setMaxKb(val);
    }
  };

  const adjustMinKb = (delta: number) => {
    const current = parseInt(minKbInput, 10) || minKb || 10;
    const nextVal = Math.max(1, current + delta);
    handleMinKbChange(String(nextVal));
  };

  const adjustMaxKb = (delta: number) => {
    const current = parseInt(maxKbInput, 10) || maxKb || 20;
    const nextVal = Math.max(minKb + 1, current + delta);
    handleMaxKbChange(String(nextVal));
  };

  // Process single active signature
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

  // Trigger processing on settings change in single mode (debounced)
  useEffect(() => {
    if (sourceImage && toolMode === 'single') {
      const timer = setTimeout(() => {
        processImage();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [processImage, sourceImage, toolMode]);

  // =========================================================================
  // ⚡ FAST NON-BLOCKING BATCH RENDERING ENGINE (Prevents browser freeze)
  // =========================================================================
  const renderBatchItemFastPreview = (item: BatchSignatureItem): BatchSignatureItem => {
    try {
      const totalRot = (rotation + item.rotation) % 360;
      const effectiveFlipH = flipH !== item.flipH;
      const effectiveFlipV = flipV !== item.flipV;

      const is90or270 = totalRot === 90 || totalRot === 270;
      const imgW = is90or270 ? item.image.naturalHeight : item.image.naturalWidth;
      const imgH = is90or270 ? item.image.naturalWidth : item.image.naturalHeight;
      const targetAspect = targetWidthPx / targetHeightPx;

      let cropBox = item.customCrop;
      if (!cropBox) {
        let cropW = imgW * 0.95;
        let cropH = cropW / targetAspect;
        if (cropH > imgH * 0.95) {
          cropH = imgH * 0.95;
          cropW = cropH * targetAspect;
        }
        const cropX = Math.max(0, (imgW - cropW) / 2);
        const cropY = Math.max(0, (imgH - cropH) / 2);
        cropBox = {
          x: Math.round(cropX),
          y: Math.round(cropY),
          width: Math.round(cropW),
          height: Math.round(cropH)
        };
      }

      // Fast single-pass canvas render (Takes < 1ms)
      const canvas = renderProcessedCanvas(
        item.image,
        item.image.naturalWidth,
        item.image.naturalHeight,
        cropBox,
        targetWidthPx,
        targetHeightPx,
        totalRot,
        effectiveFlipH,
        effectiveFlipV,
        filters
      );

      // Fast preview data URL without heavy binary search
      const dataUrl = canvas.toDataURL(targetFormat, 0.85);
      
      // Calculate estimated size from base64 string
      const estimatedBytes = Math.round((dataUrl.length - dataUrl.indexOf(',') - 1) * 0.75);
      const estimatedKb = Number((estimatedBytes / 1024).toFixed(1));

      return {
        ...item,
        status: 'done',
        resultDataUrl: dataUrl,
        resultSizeKb: estimatedKb,
        resultWidth: targetWidthPx,
        resultHeight: targetHeightPx,
        withinBounds: estimatedKb >= minKb && estimatedKb <= maxKb
      };
    } catch (err: any) {
      return {
        ...item,
        status: 'error',
        errorMessage: err?.message || 'Preview error'
      };
    }
  };

  // Full High-Precision Compression Helper for Export/Processing (Sequential non-blocking)
  const compressBatchItemPrecise = async (item: BatchSignatureItem): Promise<BatchSignatureItem> => {
    try {
      const totalRot = (rotation + item.rotation) % 360;
      const effectiveFlipH = flipH !== item.flipH;
      const effectiveFlipV = flipV !== item.flipV;

      const is90or270 = totalRot === 90 || totalRot === 270;
      const imgW = is90or270 ? item.image.naturalHeight : item.image.naturalWidth;
      const imgH = is90or270 ? item.image.naturalWidth : item.image.naturalHeight;
      const targetAspect = targetWidthPx / targetHeightPx;

      let cropBox = item.customCrop;
      if (!cropBox) {
        let cropW = imgW * 0.95;
        let cropH = cropW / targetAspect;
        if (cropH > imgH * 0.95) {
          cropH = imgH * 0.95;
          cropW = cropH * targetAspect;
        }
        const cropX = Math.max(0, (imgW - cropW) / 2);
        const cropY = Math.max(0, (imgH - cropH) / 2);
        cropBox = {
          x: Math.round(cropX),
          y: Math.round(cropY),
          width: Math.round(cropW),
          height: Math.round(cropH)
        };
      }

      const canvas = renderProcessedCanvas(
        item.image,
        item.image.naturalWidth,
        item.image.naturalHeight,
        cropBox,
        targetWidthPx,
        targetHeightPx,
        totalRot,
        effectiveFlipH,
        effectiveFlipV,
        filters
      );

      const result = await compressCanvasToTargetSize(
        canvas,
        targetFormat,
        minKb,
        maxKb,
        (minKb + maxKb) / 2
      );

      return {
        ...item,
        status: 'done',
        resultBlob: result.blob,
        resultDataUrl: result.dataUrl,
        resultSizeKb: result.sizeKb,
        resultWidth: result.width,
        resultHeight: result.height,
        withinBounds: result.withinTargetBounds
      };
    } catch (err: any) {
      return {
        ...item,
        status: 'error',
        errorMessage: err?.message || 'Processing error'
      };
    }
  };

  // Process ALL queued batch items sequentially (Yielding to event loop to never freeze)
  const processAllBatchSignatures = async () => {
    if (batchItems.length === 0) return;

    setIsBatchProcessing(true);
    setBatchProgress({ current: 0, total: batchItems.length });

    for (let i = 0; i < batchItems.length; i++) {
      setBatchProgress({ current: i + 1, total: batchItems.length });
      
      // Non-blocking yield
      await new Promise((resolve) => setTimeout(resolve, 15));
      
      const processed = await compressBatchItemPrecise(batchItems[i]);
      setBatchItems((prev) => prev.map((item, idx) => (idx === i ? processed : item)));
    }

    setIsBatchProcessing(false);
  };

  // Instant lightweight auto-sync for batch preview with debouncing (Zero UI Freeze)
  useEffect(() => {
    if (toolMode === 'batch' && batchItems.length > 0 && !isBatchProcessing) {
      if (batchSyncTimeoutRef.current) {
        clearTimeout(batchSyncTimeoutRef.current);
      }

      batchSyncTimeoutRef.current = setTimeout(() => {
        const updated = batchItems.map((item) => renderBatchItemFastPreview(item));
        setBatchItems(updated);
      }, 120);

      return () => {
        if (batchSyncTimeoutRef.current) {
          clearTimeout(batchSyncTimeoutRef.current);
        }
      };
    }
  }, [
    toolMode,
    targetWidthPx,
    targetHeightPx,
    minKb,
    maxKb,
    rotation,
    flipH,
    flipV,
    filters.cleanPaper,
    filters.blackAndWhite,
    filters.brightness,
    filters.contrast,
    targetFormat
  ]);

  // Master Global Batch Edit Actions (Edit All 10 Simultaneously)
  const handleBatchRotateAll = (delta: number) => {
    setRotation((prev) => (prev + delta + 360) % 360);
  };

  const handleBatchFlipHAll = () => {
    setFlipH((prev) => !prev);
  };

  const handleBatchFlipVAll = () => {
    setFlipV((prev) => !prev);
  };

  const handleBatchResetAllEdits = () => {
    setRotation(0);
    setFlipH(false);
    setFlipV(false);
    setFilters({
      cleanPaper: true,
      brightness: 0,
      contrast: 15,
      blackAndWhite: false,
      threshold: 160
    });
    setBatchItems((prev) =>
      prev.map((item) => ({
        ...item,
        rotation: 0,
        flipH: false,
        flipV: false,
        customCrop: undefined
      }))
    );
  };

  // Individual override for a single item inside the batch
  const handleRotateSingleBatchItem = (id: string, delta: number) => {
    setBatchItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const newRot = (item.rotation + delta + 360) % 360;
        const updatedItem = { ...item, rotation: newRot };
        return renderBatchItemFastPreview(updatedItem);
      })
    );
  };

  const handleFlipSingleBatchItem = (id: string, type: 'h' | 'v') => {
    setBatchItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const updatedItem = {
          ...item,
          flipH: type === 'h' ? !item.flipH : item.flipH,
          flipV: type === 'v' ? !item.flipV : item.flipV
        };
        return renderBatchItemFastPreview(updatedItem);
      })
    );
  };

  // Download All as ZIP archive
  const downloadAllBatchZip = async () => {
    if (batchItems.length === 0) return;

    setIsZipCreating(true);
    try {
      const { default: JSZip } = await import('jszip');
      const zip = new JSZip();
      const ext = targetFormat === 'image/jpeg' ? 'jpg' : targetFormat === 'image/png' ? 'png' : 'webp';
      const cleanExamTag = selectedPreset ? `${selectedPreset.shortCode.toLowerCase()}_` : '';

      for (let index = 0; index < batchItems.length; index++) {
        const item = batchItems[index];
        let blob = item.resultBlob;

        if (!blob) {
          const precise = await compressBatchItemPrecise(item);
          blob = precise.resultBlob;
        }

        if (blob) {
          const cleanName = item.fileName.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9_-]/g, '_');
          const filename = `${index + 1}_${cleanExamTag}${cleanName}_${targetWidthPx}x${targetHeightPx}_${Math.round(item.resultSizeKb || 0)}kb.${ext}`;
          zip.file(filename, blob);
        }
      }

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = `signresize_batch_${batchItems.length}_signatures.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to create ZIP:', err);
      alert('Failed to generate ZIP file. You can still download signatures individually.');
    } finally {
      setIsZipCreating(false);
    }
  };

  // Download individual batch item
  const downloadSingleBatchItem = async (item: BatchSignatureItem) => {
    let downloadUrl = item.resultDataUrl;
    let sizeKb = item.resultSizeKb || 0;

    if (!item.resultBlob) {
      const precise = await compressBatchItemPrecise(item);
      downloadUrl = precise.resultDataUrl;
      sizeKb = precise.resultSizeKb || sizeKb;
    }

    if (!downloadUrl) return;

    const ext = targetFormat === 'image/jpeg' ? 'jpg' : targetFormat === 'image/png' ? 'png' : 'webp';
    const cleanExamTag = selectedPreset ? `${selectedPreset.shortCode.toLowerCase()}_` : '';
    const cleanName = item.fileName.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9_-]/g, '_');
    const filename = `${cleanExamTag}${cleanName}_${targetWidthPx}x${targetHeightPx}_${Math.round(sizeKb)}kb.${ext}`;

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Load a batch item into single mode for manual cropping
  const loadBatchItemToSingleEditor = (item: BatchSignatureItem) => {
    setSourceImage(item.image);
    setSourceFileName(item.fileName.replace(/\.[^/.]+$/, ''));
    setSourceOriginalSize(item.originalSize);
    setSourceDimensions({ width: item.image.naturalWidth, height: item.image.naturalHeight });
    initCropBox(item.image, selectedPreset ? selectedPreset.aspectRatio : targetWidthPx / targetHeightPx);
    setToolMode('single');
  };

  // Remove single item from batch queue
  const removeBatchItem = (id: string) => {
    setBatchItems((prev) => prev.filter((item) => item.id !== id));
  };  // Clear ALL selected files (Batch and Single)
  const clearAllSelectedFiles = () => {
    setBatchItems([]);
    setSourceImage(null);
    setProcessedResult(null);
    setSourceFileName('signature');
    setSourceOriginalSize(0);
    setSourceDimensions({ width: 0, height: 0 });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
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

  // Handle Single Download
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
      if (processedResult.blob.type === 'image/png') {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': processedResult.blob })
        ]);
      } else {
        await navigator.clipboard.writeText(processedResult.dataUrl);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.warn('Clipboard write failed', e);
    }
  };

  // Cropper calculation variables (Single Mode)
  const is90or270 = rotation === 90 || rotation === 270;
  const naturalW = sourceImage ? (is90or270 ? sourceImage.naturalHeight : sourceImage.naturalWidth) : 600;
  const naturalH = sourceImage ? (is90or270 ? sourceImage.naturalWidth : sourceImage.naturalHeight) : 250;

  // Cropper interaction handlers (Single Mode)
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

  const totalLoadedCount = batchItems.length > 0 ? batchItems.length : sourceImage ? 1 : 0;

  // Preset Selector Component (Reusable across Single and Batch mode)
  const renderPresetSelector = () => (
    <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-muted-foreground">
            <Zap className="w-4 h-4 text-primary" />
            <span>Govt Exam / Portal Presets:</span>
          </div>
          {selectedPreset && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-primary/10 text-primary border border-primary/20">
              Active: {selectedPreset.shortCode} ({targetWidthPx}×{targetHeightPx}px, {minKb}–{maxKb}KB)
            </span>
          )}
        </div>
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search exam (e.g. SSC, UPSC, PAN)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-1.5 text-xs rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
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
              className={`text-left p-2.5 rounded-xl border transition text-xs flex flex-col justify-between ${
                isSelected
                  ? 'border-primary bg-primary/10 shadow-xs ring-1 ring-primary'
                  : 'border-border/70 bg-card hover:border-primary/40 hover:bg-muted/40'
              }`}
            >
              <div>
                <div className="font-bold text-foreground truncate">{preset.shortCode}</div>
                <div className="text-[11px] text-muted-foreground truncate">{preset.name}</div>
              </div>
              <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                <span>{preset.widthPx}×{preset.heightPx}px</span>
                <span className="text-primary font-bold">{preset.minKb}-{preset.maxKb}KB</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Official Guidance Alert for Active Preset - High Contrast Theme-Safe */}
      {selectedPreset && (
        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900 border-2 border-amber-400 text-amber-50 dark:bg-slate-950 dark:border-amber-400 shadow-sm">
          <div className="p-1.5 rounded-lg bg-amber-400 text-slate-950 shrink-0 mt-0.5 font-bold">
            <AlertCircle className="w-4 h-4" />
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider">
                Official Rule
              </span>
              <span className="font-bold text-amber-300">
                {selectedPreset.name} Upload Guidelines
              </span>
            </div>
            <p className="leading-relaxed text-amber-100">
              {selectedPreset.notes} • <strong>Ink:</strong> {selectedPreset.inkRequirement}
            </p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6" id="tool-workspace">
      
      {/* Hidden Multi-File Input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*,.heic,.heif"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            handleMultipleFiles(e.target.files);
          }
        }}
      />

      {/* Top Mode Selector & Global Workspace Actions */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-card border border-border shadow-xs">
        
        {/* Mode Switcher Tabs */}
        <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-muted/60 border border-border shrink-0 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setToolMode('single')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
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
            onClick={() => setToolMode('batch')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              toolMode === 'batch'
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-foreground'
            }`}
          >
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span>Batch Editor</span>
            <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
              toolMode === 'batch'
                ? 'bg-primary-foreground/20 text-primary-foreground'
                : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200'
            }`}>
              {batchItems.length > 0 ? `${batchItems.length}/10` : 'Up to 10'}
            </span>
          </button>
        </div>

        {/* Global Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary text-primary-foreground hover:opacity-95 font-semibold whitespace-nowrap shadow-xs transition"
          >
            <Plus className="w-3.5 h-3.5 shrink-0" />
            <span>Upload Signs</span>
          </button>

          <button
            type="button"
            onClick={loadSampleBatchSignatures}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-card border border-border text-foreground hover:bg-muted font-medium whitespace-nowrap transition shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>Sample Signs</span>
          </button>

          <button
            type="button"
            onClick={() => setIsDrawingPadOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-card border border-border text-foreground hover:bg-muted font-medium whitespace-nowrap transition shadow-xs"
          >
            <PenTool className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>Draw Sign</span>
          </button>

          {/* Prominent Clear All Selected Files Button */}
          {totalLoadedCount > 0 && (
            <button
              type="button"
              onClick={clearAllSelectedFiles}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/30 hover:bg-red-500/20 font-semibold whitespace-nowrap transition shadow-xs"
              title="Clear all uploaded signatures and reset workspace"
            >
              <Trash2 className="w-3.5 h-3.5 shrink-0" />
              <span>Clear All ({totalLoadedCount})</span>
            </button>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ⚡ BATCH MODE: SIMULTANEOUS MASTER EDITING SUITE (All 10 Signs Together) */}
      {/* ========================================================================= */}
      {toolMode === 'batch' && (
        <div className="space-y-6">
          
          {/* 1. Exam Preset Selector right at top of Batch Editor */}
          {renderPresetSelector()}

          {/* 2. Universal Simultaneous Master Editing Toolbar */}
          <div className="p-5 rounded-2xl border-2 border-primary/30 bg-card shadow-sm space-y-5">
            
            {/* Header with status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/80 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-primary/15 text-primary flex items-center justify-center font-bold">
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground flex items-center gap-2">
                    <span>Batch Master Controls (Edit All Simultaneously)</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-primary/10 text-primary border border-primary/20">
                      Sync: Active ({batchItems.length}/10)
                    </span>
                  </h3>
                  <p className="text-[11px] text-muted-foreground">
                    Adjust dimensions, rotation, paper filters, and KB bounds to apply to all {batchItems.length || 0} signatures in real time.
                  </p>
                </div>
              </div>

              {/* Action Buttons for Batch */}
              <div className="flex flex-wrap items-center gap-2">
                {batchItems.length > 0 && (
                  <button
                    type="button"
                    onClick={clearAllSelectedFiles}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-red-600 dark:text-red-400 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 transition"
                    title="Clear all files from batch queue"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All Files ({batchItems.length})</span>
                  </button>
                )}

                <button
                  type="button"
                  disabled={batchItems.length === 0 || isBatchProcessing}
                  onClick={processAllBatchSignatures}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/25 disabled:opacity-50 transition"
                >
                  {isBatchProcessing ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Optimizing ({batchProgress.current}/{batchProgress.total})...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-3.5 h-3.5" />
                      <span>Process All ({batchItems.length})</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  disabled={batchItems.length === 0 || isZipCreating}
                  onClick={downloadAllBatchZip}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-md shadow-primary/25 disabled:opacity-50 transition"
                >
                  {isZipCreating ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Creating ZIP...</span>
                    </>
                  ) : (
                    <>
                      <Archive className="w-3.5 h-3.5" />
                      <span>Download All as ZIP ({batchItems.length})</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Master Toolbar: Grid of Dimensions, Transformations & Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              
              {/* Feature 1: Width & Height Direct Adjuster (in Master Toolbar) */}
              <div className="p-3.5 rounded-xl bg-muted/40 border border-border space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-foreground flex items-center gap-1.5">
                    <Scaling className="w-3.5 h-3.5 text-primary" />
                    <span>Dimensions for All</span>
                  </span>
                  {/* Unit Switcher */}
                  <div className="flex rounded-md border border-border p-0.5 bg-card">
                    {(['px', 'cm', 'mm', 'in'] as UnitType[]).map((u) => (
                      <button
                        key={u}
                        type="button"
                        onClick={() => handleUnitChange(u)}
                        className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition ${
                          unit === u
                            ? 'bg-primary text-primary-foreground font-bold'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {u}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Width & Height Steppers */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[11px] text-muted-foreground flex justify-between">
                      <span>Width ({unit})</span>
                      <span className="font-mono text-foreground font-bold">{targetWidthPx}px</span>
                    </label>
                    <div className="flex items-center border border-border rounded-lg overflow-hidden bg-background">
                      <button
                        type="button"
                        onClick={() => adjustWidth(-1)}
                        className="px-2 py-1 hover:bg-muted font-bold text-foreground"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        inputMode="decimal"
                        value={widthInput}
                        onChange={(e) => handleWidthChange(e.target.value)}
                        className="w-full text-center font-mono font-bold text-foreground bg-transparent focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => adjustWidth(1)}
                        className="px-2 py-1 hover:bg-muted font-bold text-foreground"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] text-muted-foreground flex justify-between">
                      <span>Height ({unit})</span>
                      <span className="font-mono text-foreground font-bold">{targetHeightPx}px</span>
                    </label>
                    <div className="flex items-center border border-border rounded-lg overflow-hidden bg-background">
                      <button
                        type="button"
                        onClick={() => adjustHeight(-1)}
                        className="px-2 py-1 hover:bg-muted font-bold text-foreground"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        inputMode="decimal"
                        value={heightInput}
                        onChange={(e) => handleHeightChange(e.target.value)}
                        className="w-full text-center font-mono font-bold text-foreground bg-transparent focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => adjustHeight(1)}
                        className="px-2 py-1 hover:bg-muted font-bold text-foreground"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Target File Bounds (Min-Max KB) */}
                <div className="flex items-center justify-between pt-1 border-t border-border/50 text-[11px]">
                  <span className="text-muted-foreground font-medium">Target Size Range:</span>
                  <div className="flex items-center gap-1.5 font-mono font-bold text-primary">
                    <span>{minKb} KB</span>
                    <span>–</span>
                    <span>{maxKb} KB</span>
                  </div>
                </div>
              </div>

              {/* Feature 2: Rotate & Flip All Together */}
              <div className="p-3.5 rounded-xl bg-muted/40 border border-border space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-foreground">Rotate &amp; Flip All</span>
                    <span className="text-[10px] font-mono text-primary font-bold">{rotation}°</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleBatchRotateAll(-90)}
                      className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-card border border-border hover:bg-muted font-medium transition"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>-90° All</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleBatchRotateAll(90)}
                      className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-card border border-border hover:bg-muted font-medium transition"
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                      <span>+90° All</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleBatchFlipHAll}
                      className={`px-2.5 py-1.5 rounded-lg border transition ${
                        flipH ? 'bg-primary text-primary-foreground border-primary font-bold' : 'bg-card border-border hover:bg-muted'
                      }`}
                      title="Flip All Horizontally"
                    >
                      <FlipHorizontal className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleBatchFlipVAll}
                      className={`px-2.5 py-1.5 rounded-lg border transition ${
                        flipV ? 'bg-primary text-primary-foreground border-primary font-bold' : 'bg-card border-border hover:bg-muted'
                      }`}
                      title="Flip All Vertically"
                    >
                      <FlipVertical className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-border/50 text-[11px]">
                  <button
                    type="button"
                    onClick={() => setLockAspect(!lockAspect)}
                    className="text-primary hover:underline font-medium flex items-center gap-1"
                  >
                    {lockAspect ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                    <span>{lockAspect ? 'Aspect Ratio Locked' : 'Free Ratio'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleBatchResetAllEdits}
                    className="text-muted-foreground hover:text-foreground font-medium"
                  >
                    Reset Rotations
                  </button>
                </div>
              </div>

              {/* Feature 3: Paper Cleaner & B&W Filters for All */}
              <div className="p-3.5 rounded-xl bg-muted/40 border border-border space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="font-bold text-foreground">Filters for All</span>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center justify-between p-2 rounded-lg bg-card border border-border cursor-pointer hover:bg-muted/50 transition">
                      <span className="font-medium text-[11px] text-foreground">Clean Shadows</span>
                      <input
                        type="checkbox"
                        checked={filters.cleanPaper}
                        onChange={(e) => setFilters({ ...filters, cleanPaper: e.target.checked })}
                        className="w-3.5 h-3.5 rounded text-primary focus:ring-primary"
                      />
                    </label>

                    <label className="flex items-center justify-between p-2 rounded-lg bg-card border border-border cursor-pointer hover:bg-muted/50 transition">
                      <span className="font-medium text-[11px] text-foreground">Pure B&amp; W</span>
                      <input
                        type="checkbox"
                        checked={filters.blackAndWhite}
                        onChange={(e) => setFilters({ ...filters, blackAndWhite: e.target.checked })}
                        className="w-3.5 h-3.5 rounded text-primary focus:ring-primary"
                      />
                    </label>
                  </div>
                </div>

                <div className="space-y-1 pt-1 border-t border-border/50">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-muted-foreground font-medium">Batch Contrast Booster:</span>
                    <span className="font-mono text-primary font-bold">{filters.contrast}%</span>
                  </div>
                  <input
                    type="range"
                    min="-30"
                    max="40"
                    value={filters.contrast}
                    onChange={(e) => setFilters({ ...filters, contrast: parseInt(e.target.value, 10) })}
                    className="w-full accent-primary h-1.5 bg-muted rounded-lg cursor-pointer"
                  />
                </div>
              </div>

            </div>

          </div>

          {/* 3. Empty State in Batch Mode */}
          {batchItems.length === 0 && (
            <div className="p-10 text-center rounded-2xl bg-muted/20 border-2 border-dashed border-border space-y-4">
              <FolderArchive className="w-12 h-12 text-muted-foreground/40 mx-auto" />
              <div className="space-y-1">
                <h4 className="font-bold text-base text-foreground">No signatures in batch queue</h4>
                <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Upload up to 10 image files simultaneously, or test immediately with 3 sample signatures.
                </p>
              </div>
              <div className="flex justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-md shadow-primary/25"
                >
                  Select up to 10 Images
                </button>
                <button
                  type="button"
                  onClick={loadSampleBatchSignatures}
                  className="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground hover:bg-muted text-xs font-semibold"
                >
                  Load 3 Sample Signs
                </button>
              </div>
            </div>
          )}

          {/* 4. Interactive Multi-Canvas Matrix (All 10 Signatures Edited Live Side-by-Side) */}
          {batchItems.length > 0 && (
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs px-1 text-muted-foreground">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <span>Live Canvases ({batchItems.length} of 10 max)</span>
                  <span className="text-[11px] font-normal text-muted-foreground">
                    • Target: <strong className="text-foreground">{targetWidthPx} × {targetHeightPx} px</strong> ({minKb}–{maxKb} KB)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={clearAllSelectedFiles}
                  className="text-red-500 hover:text-red-600 font-semibold flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear All</span>
                </button>
              </div>

              {/* Grid of All Signature Canvases */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {batchItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl border border-border bg-card shadow-xs flex flex-col justify-between space-y-3 hover:border-primary/50 transition group"
                  >
                    <div className="space-y-3">
                      
                      {/* Card Header: Index, Filename, Remove */}
                      <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-2">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-xs font-bold text-foreground truncate" title={item.fileName}>
                            {item.fileName}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeBatchItem(item.id)}
                          className="text-muted-foreground hover:text-red-500 p-1 rounded transition"
                          title="Remove signature from batch"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Live Processed Output Canvas Preview */}
                      <div className="p-3 rounded-xl bg-muted/40 border border-border flex items-center justify-center min-h-[110px] relative overflow-hidden">
                        {item.resultDataUrl ? (
                          <img
                            src={item.resultDataUrl}
                            alt={item.fileName}
                            className="max-h-20 max-w-full object-contain rounded shadow-xs border border-border/40 bg-white"
                          />
                        ) : (
                          <img
                            src={item.image.src}
                            alt={item.fileName}
                            className="max-h-20 max-w-full object-contain rounded opacity-60"
                          />
                        )}
                      </div>

                      {/* Size & Compliance Status Badge */}
                      <div className="flex items-center justify-between p-2 rounded-lg bg-muted/30 border border-border text-[11px]">
                        <div className="space-y-0.5">
                          <div className="text-[9px] uppercase font-bold text-muted-foreground">Output Size</div>
                          <div className="font-mono font-bold text-foreground">
                            {item.resultSizeKb ? `${item.resultSizeKb} KB` : 'Pending'}
                          </div>
                        </div>

                        <div>
                          {item.status === 'done' ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                              <CheckCircle2 className="w-3 h-3" />
                              {item.withinBounds ? 'Valid (In-Bounds)' : 'Processed'}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-muted text-muted-foreground border border-border">
                              <Clock className="w-3 h-3" />
                              Ready
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Individual Override Controls (For this specific signature) */}
                      <div className="flex items-center justify-between gap-1 text-xs pt-1 border-t border-border/50">
                        <span className="text-[10px] text-muted-foreground font-medium">Fine-tune:</span>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => handleRotateSingleBatchItem(item.id, 90)}
                            className="p-1 rounded bg-muted/50 hover:bg-muted text-foreground border border-border"
                            title="Rotate this image +90°"
                          >
                            <RotateCw className="w-3 h-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleFlipSingleBatchItem(item.id, 'h')}
                            className="p-1 rounded bg-muted/50 hover:bg-muted text-foreground border border-border"
                            title="Flip this image horizontally"
                          >
                            <FlipHorizontal className="w-3 h-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => loadBatchItemToSingleEditor(item)}
                            className="flex items-center gap-1 px-2 py-1 rounded bg-muted/50 hover:bg-muted text-foreground border border-border text-[10px] font-medium"
                            title="Open in Single Cropper Studio"
                          >
                            <Maximize className="w-3 h-3 text-primary" />
                            <span>Crop</span>
                          </button>
                        </div>
                      </div>

                    </div>

                    {/* Download Button for this item */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => downloadSingleBatchItem(item)}
                        className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-xs hover:opacity-95 transition"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download #{index + 1} ({item.resultSizeKb || 0} KB)</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* ========================================================================= */}
      {/* 🎨 SINGLE SIGNATURE STUDIO (Cropper & Fine Tuning) */}
      {/* ========================================================================= */}
      {toolMode === 'single' && !sourceImage && (
        <div className="space-y-6">
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
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  Drop your Signature Image here
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Instant client-side resizing and compression for SSC, IBPS, UPSC, GATE, and PAN Card forms.
                  <br className="hidden sm:inline" />
                  <span className="text-primary font-medium"> 100% Private</span>: Your document never leaves your device.
                </p>
              </div>

              {/* Main Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:opacity-90 active:scale-95 transition"
                >
                  <FileImage className="w-5 h-5" />
                  Select Image(s) from Device
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
                  onClick={loadSingleSampleSignature}
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
                  <Check className="w-4 h-4 text-cyan-500" /> SSC &amp; Banking Guaranteed
                </span>
              </div>
            </div>
          </div>

          {/* Preset Selector below single dropzone */}
          {renderPresetSelector()}
        </div>
      )}

      {/* Main Active Studio Interface (Single Mode when Image is loaded) */}
      {toolMode === 'single' && sourceImage && (
        <div className="space-y-6">
          
          {/* Top Bar: Active Preset & Quick Actions */}
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
                onClick={clearAllSelectedFiles}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 border border-red-200 dark:border-red-900/50 transition"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear File
              </button>
            </div>
          </div>

          {/* Exam Preset Selector right above the 2-column Studio */}
          {renderPresetSelector()}

          {/* Main Studio Dual Column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Interactive Crop Area (8 Cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-card border border-border rounded-xl p-4 shadow-sm space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Maximize className="w-4 h-4 text-primary" />
                    Interactive Crop &amp; Alignment:
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    Original: {sourceDimensions.width} × {sourceDimensions.height} px
                  </span>
                </div>

                {/* Cropper Container */}
                <div
                  ref={containerRef}
                  onMouseMove={handleContainerMouseMove}
                  onTouchMove={handleContainerMouseMove}
                  onMouseUp={handleContainerMouseUp}
                  onTouchEnd={handleContainerMouseUp}
                  className="relative overflow-hidden rounded-lg bg-muted/40 border border-border select-none cursor-crosshair min-h-[300px] flex items-center justify-center p-2"
                  style={{ touchAction: 'none' }}
                >
                  <div className="relative inline-block max-w-full max-h-[460px]">
                    <img
                      src={sourceImage.src}
                      alt="Source Signature"
                      draggable={false}
                      style={{
                        transform: `rotate(${rotation}deg) scaleX(${flipH ? -1 : 1}) scaleY(${flipV ? -1 : 1})`,
                        maxHeight: '420px',
                        width: 'auto',
                        display: 'block'
                      }}
                      className="rounded shadow-xs pointer-events-none"
                    />

                    {/* Crop Overlay Box */}
                    <div
                      onMouseDown={(e) => handleCropMouseDown(e, 'move')}
                      onTouchStart={(e) => handleCropMouseDown(e, 'move')}
                      style={{
                        left: `${(crop.x / naturalW) * 100}%`,
                        top: `${(crop.y / naturalH) * 100}%`,
                        width: `${(crop.width / naturalW) * 100}%`,
                        height: `${(crop.height / naturalH) * 100}%`,
                        cursor: isDraggingCrop ? 'grabbing' : 'grab'
                      }}
                      className="absolute border-2 border-primary bg-primary/10 shadow-2xl backdrop-contrast-125"
                    >
                      {/* Grid lines inside crop box */}
                      <div className="w-full h-full grid grid-cols-3 grid-rows-3 pointer-events-none opacity-40">
                        <div className="border-r border-b border-primary/50"></div>
                        <div className="border-r border-b border-primary/50"></div>
                        <div className="border-b border-primary/50"></div>
                        <div className="border-r border-b border-primary/50"></div>
                        <div className="border-r border-b border-primary/50"></div>
                        <div className="border-b border-primary/50"></div>
                        <div className="border-r border-b border-primary/50"></div>
                        <div className="border-r border-b border-primary/50"></div>
                        <div></div>
                      </div>

                      {/* Resize Handles */}
                      <div
                        onMouseDown={(e) => handleCropMouseDown(e, 'nw')}
                        onTouchStart={(e) => handleCropMouseDown(e, 'nw')}
                        className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 bg-primary rounded-full border-2 border-white cursor-nwse-resize shadow-md"
                      />
                      <div
                        onMouseDown={(e) => handleCropMouseDown(e, 'se')}
                        onTouchStart={(e) => handleCropMouseDown(e, 'se')}
                        className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 bg-primary rounded-full border-2 border-white cursor-nwse-resize shadow-md"
                      />
                    </div>
                  </div>
                </div>

                {/* Transformation Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setRotation((prev) => (prev - 90 + 360) % 360)}
                      className="p-2 rounded-lg border border-border bg-card hover:bg-muted text-foreground transition"
                      title="Rotate 90° Left"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setRotation((prev) => (prev + 90 + 360) % 360)}
                      className="p-2 rounded-lg border border-border bg-card hover:bg-muted text-foreground transition"
                      title="Rotate 90° Right"
                    >
                      <RotateCw className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setFlipH(!flipH)}
                      className={`p-2 rounded-lg border transition ${
                        flipH ? 'bg-primary text-primary-foreground border-primary' : 'bg-card border-border hover:bg-muted text-foreground'
                      }`}
                      title="Flip Horizontal"
                    >
                      <FlipHorizontal className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setFlipV(!flipV)}
                      className={`p-2 rounded-lg border transition ${
                        flipV ? 'bg-primary text-primary-foreground border-primary' : 'bg-card border-border hover:bg-muted text-foreground'
                      }`}
                      title="Flip Vertical"
                    >
                      <FlipVertical className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setLockAspect(!lockAspect)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition ${
                        lockAspect
                          ? 'bg-primary/10 border-primary/30 text-primary font-semibold'
                          : 'bg-card border-border text-muted-foreground'
                      }`}
                    >
                      {lockAspect ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                      <span>Aspect Ratio Locked</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (sourceImage) {
                          const targetAspect = selectedPreset ? selectedPreset.aspectRatio : targetWidthPx / targetHeightPx;
                          initCropBox(sourceImage, targetAspect);
                        }
                      }}
                      className="px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-foreground transition"
                    >
                      Reset Crop
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Settings, Enhancements & Live Download (4 Cols) */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* Live Processed Output Card */}
              <div className="bg-card border border-border rounded-xl p-4 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-primary" />
                    Real-Time Output Preview
                  </span>
                  {isProcessing && (
                    <span className="flex items-center gap-1 text-[11px] text-primary font-mono animate-pulse">
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      Compressing...
                    </span>
                  )}
                </div>

                {/* Canvas Preview Container */}
                <div className="p-3 rounded-lg bg-muted/40 border border-border flex items-center justify-center min-h-[120px]">
                  {processedResult ? (
                    <img
                      src={processedResult.dataUrl}
                      alt="Processed Preview"
                      className="max-h-24 max-w-full object-contain rounded shadow-xs border border-border/50 bg-white"
                    />
                  ) : (
                    <div className="text-xs text-muted-foreground">Rendering preview...</div>
                  )}
                </div>

                {/* Exact File Size & Target Metric Pill */}
                {processedResult && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-border">
                      <div>
                        <div className="text-[10px] text-muted-foreground uppercase font-bold">Result Size</div>
                        <div className="font-mono font-extrabold text-base text-foreground">
                          {processedResult.sizeKb} KB
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-muted-foreground uppercase font-bold">Portal Bounds</div>
                        <div className="font-mono text-xs font-bold text-primary">
                          {minKb} KB – {maxKb} KB
                        </div>
                      </div>
                    </div>

                    {/* Out of Bounds Warning Pill */}
                    {!processedResult.withinTargetBounds && (
                      <div className="p-2 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-xs">
                        <AlertCircle className="w-4 h-4 shrink-0 text-slate-950" />
                        <span>Adjust dimensions or KB slider to fit allowed range.</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Download & Copy Buttons */}
                <div className="space-y-2 pt-1">
                  <button
                    type="button"
                    onClick={handleDownload}
                    disabled={!processedResult}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-primary-foreground font-bold shadow-md shadow-primary/25 hover:opacity-95 active:scale-98 transition disabled:opacity-50"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resized Signature</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    disabled={!processedResult}
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-card border border-border text-foreground hover:bg-muted text-xs font-semibold transition"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy to Clipboard'}</span>
                  </button>
                </div>

              </div>

              {/* Dimension & Unit Controls */}
              <div className="bg-card border border-border rounded-xl p-4 shadow-sm space-y-4 text-xs">
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <span className="font-bold text-foreground">Custom Dimensions &amp; Units</span>
                  <div className="flex rounded-lg border border-border p-0.5 bg-muted/40">
                    {(['px', 'cm', 'mm', 'in'] as UnitType[]).map((u) => (
                      <button
                        key={u}
                        type="button"
                        onClick={() => handleUnitChange(u)}
                        className={`px-2 py-0.5 rounded text-[11px] font-mono transition ${
                          unit === u
                            ? 'bg-primary text-primary-foreground font-bold'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {u}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Width & Height Inputs */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-muted-foreground font-medium flex justify-between">
                      <span>Width ({unit})</span>
                      <span className="font-mono text-foreground font-bold">{targetWidthPx}px</span>
                    </label>
                    <div className="flex items-center border border-border rounded-lg overflow-hidden bg-background">
                      <button
                        type="button"
                        onClick={() => adjustWidth(-1)}
                        className="px-2.5 py-1.5 hover:bg-muted font-bold text-foreground"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        inputMode="decimal"
                        value={widthInput}
                        onChange={(e) => handleWidthChange(e.target.value)}
                        className="w-full text-center font-mono font-bold text-foreground bg-transparent focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => adjustWidth(1)}
                        className="px-2.5 py-1.5 hover:bg-muted font-bold text-foreground"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-muted-foreground font-medium flex justify-between">
                      <span>Height ({unit})</span>
                      <span className="font-mono text-foreground font-bold">{targetHeightPx}px</span>
                    </label>
                    <div className="flex items-center border border-border rounded-lg overflow-hidden bg-background">
                      <button
                        type="button"
                        onClick={() => adjustHeight(-1)}
                        className="px-2.5 py-1.5 hover:bg-muted font-bold text-foreground"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        inputMode="decimal"
                        value={heightInput}
                        onChange={(e) => handleHeightChange(e.target.value)}
                        className="w-full text-center font-mono font-bold text-foreground bg-transparent focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => adjustHeight(1)}
                        className="px-2.5 py-1.5 hover:bg-muted font-bold text-foreground"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Target File Size Controls (Min KB - Max KB) */}
                <div className="space-y-2 pt-1 border-t border-border/60">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-foreground">Target File Bounds</span>
                    <span className="font-mono text-primary font-bold">{minKb} KB – {maxKb} KB</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <span className="text-muted-foreground text-[11px]">Min KB</span>
                      <div className="flex items-center border border-border rounded-lg overflow-hidden bg-background">
                        <button
                          type="button"
                          onClick={() => adjustMinKb(-1)}
                          className="px-2 py-1 hover:bg-muted font-bold text-foreground"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={minKbInput}
                          onChange={(e) => handleMinKbChange(e.target.value)}
                          className="w-full text-center font-mono font-bold text-foreground bg-transparent focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => adjustMinKb(1)}
                          className="px-2 py-1 hover:bg-muted font-bold text-foreground"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-muted-foreground text-[11px]">Max KB</span>
                      <div className="flex items-center border border-border rounded-lg overflow-hidden bg-background">
                        <button
                          type="button"
                          onClick={() => adjustMaxKb(-1)}
                          className="px-2 py-1 hover:bg-muted font-bold text-foreground"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={maxKbInput}
                          onChange={(e) => handleMaxKbChange(e.target.value)}
                          className="w-full text-center font-mono font-bold text-foreground bg-transparent focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => adjustMaxKb(1)}
                          className="px-2 py-1 hover:bg-muted font-bold text-foreground"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filters & Paper Cleaner */}
                <div className="space-y-2 pt-2 border-t border-border/60">
                  <span className="font-bold text-foreground">Image Enhancement Filters</span>
                  
                  <label className="flex items-center justify-between p-2 rounded-lg bg-muted/30 border border-border cursor-pointer hover:bg-muted/50 transition">
                    <span className="font-medium text-foreground">Clean White Paper Shadow</span>
                    <input
                      type="checkbox"
                      checked={filters.cleanPaper}
                      onChange={(e) => setFilters({ ...filters, cleanPaper: e.target.checked })}
                      className="w-4 h-4 rounded text-primary focus:ring-primary"
                    />
                  </label>

                  <label className="flex items-center justify-between p-2 rounded-lg bg-muted/30 border border-border cursor-pointer hover:bg-muted/50 transition">
                    <span className="font-medium text-foreground">Pure Black &amp; White Mode</span>
                    <input
                      type="checkbox"
                      checked={filters.blackAndWhite}
                      onChange={(e) => setFilters({ ...filters, blackAndWhite: e.target.checked })}
                      className="w-4 h-4 rounded text-primary focus:ring-primary"
                    />
                  </label>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

      {/* On-Screen Signature Drawing Pad Modal */}
      {isDrawingPadOpen && (
        <SignaturePadModal
          isOpen={isDrawingPadOpen}
          onClose={() => setIsDrawingPadOpen(false)}
          onSave={(dataUrl) => {
            const img = new Image();
            img.onload = () => {
              setSourceImage(img);
              setSourceFileName('drawn_signature');
              setSourceOriginalSize(35000);
              setSourceDimensions({ width: img.naturalWidth, height: img.naturalHeight });
              initCropBox(img, selectedPreset ? selectedPreset.aspectRatio : targetWidthPx / targetHeightPx);
              setIsDrawingPadOpen(false);
            };
            img.src = dataUrl;
          }}
        />
      )}

    </div>
  );
};

