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
  XCircle,
  ZoomIn,
  ZoomOut,
  Search,
  Wand2,
  Maximize2,
  X,
  Move,
  ChevronDown,
  ChevronUp
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
  compressCanvasToTargetSize,
  detectSignatureBoundingBox
} from '../utils/imageProcessor';
import { SignaturePadModal } from './SignaturePadModal';
import { ToastNotification, type ToastItem } from './tool/ToastNotification';
import { StepIndicator } from './tool/StepIndicator';
import { PresetBanner } from './tool/PresetBanner';

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

  // Toast notifications state
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const addToast = useCallback((message: string, title?: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev.slice(-3), { id, message, title, type }]);
  }, []);
  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

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

  // New: Advanced Preview & Cropper UX States
  const [cropperZoom, setCropperZoom] = useState<number>(1);
  const [previewBg, setPreviewBg] = useState<'white' | 'checker'>('white');
  const [previewScale, setPreviewScale] = useState<number>(1.2);
  const [isInspectModalOpen, setIsInspectModalOpen] = useState<boolean>(false);
  const [inspectZoom, setInspectZoom] = useState<number>(2);
  const [inspectTab, setInspectTab] = useState<'processed' | 'original' | 'split'>('processed');

  // Consolidated Combobox Popover state & Category Accordions
  const [isExamDropdownOpen, setIsExamDropdownOpen] = useState<boolean>(false);
  const [comboboxSearch, setComboboxSearch] = useState<string>('');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'Management': true,
    'Banking': true,
    'UPSC': true,
    'Engineering': true,
    'SSC': true
  });
  const comboboxRef = useRef<HTMLDivElement | null>(null);

  // Close combobox when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (comboboxRef.current && !comboboxRef.current.contains(e.target as Node)) {
        setIsExamDropdownOpen(false);
      }
    };
    if (isExamDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExamDropdownOpen]);

  // Non-blocking batch sync timer ref
  const batchSyncTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Target dimensions in PX
  const targetWidthPx = Math.max(10, convertUnits(width, unit, 'px', dpi));
  const targetHeightPx = Math.max(10, convertUnits(height, unit, 'px', dpi));

  // Apply an exam preset
  const applyPreset = useCallback((preset: ExamPreset) => {
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

    addToast(
      `Applied ${preset.name} (${preset.widthPx}×${preset.heightPx} px, ${preset.minKb}–${preset.maxKb} KB)`,
      'Preset Applied',
      'success'
    );
  }, [sourceImage, addToast]);

const PRESET_ALIASES: Record<string, string> = {
  ssc: 'ssc-general',
  ibps: 'ibps-sbi',
  upsc: 'upsc-civil-services',
  rrb: 'rrb-railway',
  neet: 'nta-neet-jee',
  pan: 'pan-card-nsdl',
  gate: 'gate-jam',
  thumb: 'thumb-impression-general',
  afcat: 'afcat-iaf',
  agniveer: 'agniveer-recruitment',
  coastguard: 'indian-coast-guard',
  cat: 'cat-iim',
  clat: 'clat-law',
  uppsc: 'uppsc',
  bpsc: 'bpsc',
  mpsc: 'mpsc',
  tnpsc: 'tnpsc',
  rbi: 'rbi-grade-b'
};

const findPresetByKey = (key: string): ExamPreset | undefined => {
  const norm = key.toLowerCase().trim();
  const aliasId = PRESET_ALIASES[norm] || norm;
  return (
    EXAM_PRESETS.find((p) => p.id.toLowerCase() === aliasId) ||
    EXAM_PRESETS.find((p) => p.shortCode.toLowerCase() === norm) ||
    EXAM_PRESETS.find((p) => p.id.toLowerCase().includes(norm))
  );
};

  // Sync preset if prop or URL param ?preset= changes, or when select-exam-preset custom event fires
  useEffect(() => {
    const urlPreset = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('preset') : null;
    const targetId = initialPresetId || urlPreset;
    if (targetId) {
      const matched = findPresetByKey(targetId);
      if (matched && matched.id !== selectedPreset?.id) {
        applyPreset(matched);
      }
    }

    const handleCustomPresetSelect = (e: any) => {
      const presetId = e?.detail;
      if (presetId) {
        const matched = findPresetByKey(presetId);
        if (matched) {
          applyPreset(matched);
        }
      }
    };

    window.addEventListener('select-exam-preset', handleCustomPresetSelect);
    return () => window.removeEventListener('select-exam-preset', handleCustomPresetSelect);
  }, [initialPresetId, applyPreset, selectedPreset?.id]);

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

  // Diagnostic Auto-Fix for Error: File size below minimum limit (<10KB or <20KB)
  const autoFixMinKb = () => {
    const isUpsc = selectedPreset?.id === 'upsc-civil-services' || selectedPreset?.category === 'UPSC';
    const targetMin = isUpsc ? 25 : 15;
    setMinKb(targetMin);
    setMinKbInput(String(targetMin));
    if (maxKb < targetMin + 5) {
      const targetMax = targetMin + 15;
      setMaxKb(targetMax);
      setMaxKbInput(String(targetMax));
    }
  };

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

    addToast(`Downloaded ${filename} (${Math.round(processedResult.sizeKb)} KB)`, 'Signature Downloaded', 'success');
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
      addToast('Signature copied to clipboard', 'Copied to Clipboard', 'success');
    } catch (err) {
      console.error('Failed to copy image to clipboard', err);
      addToast('Failed to copy to clipboard', 'Copy Error', 'warning');
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
    const targetAspect = targetWidthPx / targetHeightPx;

    if (activeHandle === 'move') {
      let newX = cropStart.x + deltaX;
      let newY = cropStart.y + deltaY;
      newX = Math.max(0, Math.min(naturalW - crop.width, newX));
      newY = Math.max(0, Math.min(naturalH - crop.height, newY));
      setCrop((prev) => ({ ...prev, x: Math.round(newX), y: Math.round(newY) }));
    } else if (activeHandle === 'se') {
      let newW = Math.max(30, cropStart.width + deltaX);
      let newH = lockAspect ? newW / targetAspect : Math.max(20, cropStart.height + deltaY);

      if (cropStart.x + newW > naturalW) {
        newW = naturalW - cropStart.x;
        if (lockAspect) newH = newW / targetAspect;
      }
      if (cropStart.y + newH > naturalH) {
        newH = naturalH - cropStart.y;
        if (lockAspect) newW = newH * targetAspect;
      }

      setCrop((prev) => ({ ...prev, width: Math.round(newW), height: Math.round(newH) }));
    } else if (activeHandle === 'sw') {
      let newW = Math.max(30, cropStart.width - deltaX);
      let newH = lockAspect ? newW / targetAspect : Math.max(20, cropStart.height + deltaY);
      let newX = cropStart.x + (cropStart.width - newW);

      if (newX < 0) {
        newW = cropStart.x + cropStart.width;
        newX = 0;
        if (lockAspect) newH = newW / targetAspect;
      }
      if (cropStart.y + newH > naturalH) {
        newH = naturalH - cropStart.y;
        if (lockAspect) {
          newW = newH * targetAspect;
          newX = cropStart.x + (cropStart.width - newW);
        }
      }

      setCrop({
        x: Math.round(newX),
        y: Math.round(cropStart.y),
        width: Math.round(newW),
        height: Math.round(newH)
      });
    } else if (activeHandle === 'ne') {
      let newW = Math.max(30, cropStart.width + deltaX);
      let newH = lockAspect ? newW / targetAspect : Math.max(20, cropStart.height - deltaY);
      let newY = cropStart.y + (cropStart.height - newH);

      if (cropStart.x + newW > naturalW) {
        newW = naturalW - cropStart.x;
        if (lockAspect) {
          newH = newW / targetAspect;
          newY = cropStart.y + (cropStart.height - newH);
        }
      }
      if (newY < 0) {
        newH = cropStart.y + cropStart.height;
        newY = 0;
        if (lockAspect) newW = newH * targetAspect;
      }

      setCrop({
        x: Math.round(cropStart.x),
        y: Math.round(newY),
        width: Math.round(newW),
        height: Math.round(newH)
      });
    } else if (activeHandle === 'nw') {
      let newW = Math.max(30, cropStart.width - deltaX);
      let newH = lockAspect ? newW / targetAspect : Math.max(20, cropStart.height - deltaY);
      let newX = cropStart.x + (cropStart.width - newW);
      let newY = cropStart.y + (cropStart.height - newH);

      if (newX < 0) {
        newW = cropStart.x + cropStart.width;
        newX = 0;
        if (lockAspect) newH = newW / targetAspect;
      }
      if (newY < 0) {
        newH = cropStart.y + cropStart.height;
        newY = 0;
        if (lockAspect) newW = newH * targetAspect;
      }

      setCrop({
        x: Math.round(newX),
        y: Math.round(newY),
        width: Math.round(newW),
        height: Math.round(newH)
      });
    } else if (activeHandle === 'e') {
      let newW = Math.max(30, Math.min(naturalW - cropStart.x, cropStart.width + deltaX));
      let newH = lockAspect ? newW / targetAspect : cropStart.height;
      let newY = lockAspect ? cropStart.y - (newH - cropStart.height) / 2 : cropStart.y;
      newY = Math.max(0, Math.min(naturalH - newH, newY));
      setCrop((prev) => ({ ...prev, width: Math.round(newW), height: Math.round(newH), y: Math.round(newY) }));
    } else if (activeHandle === 'w') {
      let newW = Math.max(30, cropStart.width - deltaX);
      let newX = cropStart.x + (cropStart.width - newW);
      if (newX < 0) {
        newW = cropStart.x + cropStart.width;
        newX = 0;
      }
      let newH = lockAspect ? newW / targetAspect : cropStart.height;
      let newY = lockAspect ? cropStart.y - (newH - cropStart.height) / 2 : cropStart.y;
      newY = Math.max(0, Math.min(naturalH - newH, newY));
      setCrop({ x: Math.round(newX), y: Math.round(newY), width: Math.round(newW), height: Math.round(newH) });
    } else if (activeHandle === 's') {
      let newH = Math.max(20, Math.min(naturalH - cropStart.y, cropStart.height + deltaY));
      let newW = lockAspect ? newH * targetAspect : cropStart.width;
      let newX = lockAspect ? cropStart.x - (newW - cropStart.width) / 2 : cropStart.x;
      newX = Math.max(0, Math.min(naturalW - newW, newX));
      setCrop((prev) => ({ ...prev, height: Math.round(newH), width: Math.round(newW), x: Math.round(newX) }));
    } else if (activeHandle === 'n') {
      let newH = Math.max(20, cropStart.height - deltaY);
      let newY = cropStart.y + (cropStart.height - newH);
      if (newY < 0) {
        newH = cropStart.y + cropStart.height;
        newY = 0;
      }
      let newW = lockAspect ? newH * targetAspect : cropStart.width;
      let newX = lockAspect ? cropStart.x - (newW - cropStart.width) / 2 : cropStart.x;
      newX = Math.max(0, Math.min(naturalW - newW, newX));
      setCrop({ x: Math.round(newX), y: Math.round(newY), width: Math.round(newW), height: Math.round(newH) });
    }
  };

  const handleContainerMouseUp = () => {
    setIsDraggingCrop(false);
    setActiveHandle(null);
  };

  // Smart Auto-Fit Signature Detection (One-click ink shrinkwrap)
  const handleAutoFitSignature = (padding: number = 0.12) => {
    if (!sourceImage) return;
    const detected = detectSignatureBoundingBox(
      sourceImage,
      sourceDimensions.width,
      sourceDimensions.height,
      rotation,
      flipH,
      flipV,
      padding
    );

    if (lockAspect) {
      const targetAspect = selectedPreset ? selectedPreset.aspectRatio : targetWidthPx / targetHeightPx;
      let w = detected.width;
      let h = w / targetAspect;

      if (h < detected.height) {
        h = detected.height;
        w = h * targetAspect;
      }

      const centerX = detected.x + detected.width / 2;
      const centerY = detected.y + detected.height / 2;

      let x = Math.max(0, centerX - w / 2);
      let y = Math.max(0, centerY - h / 2);

      if (x + w > naturalW) {
        x = Math.max(0, naturalW - w);
      }
      if (y + h > naturalH) {
        y = Math.max(0, naturalH - h);
      }

      setCrop({
        x: Math.round(x),
        y: Math.round(y),
        width: Math.round(Math.min(naturalW, w)),
        height: Math.round(Math.min(naturalH, h))
      });
    } else {
      setCrop(detected);
    }
  };

  // Adjust margin padding around current selection
  const applyMarginPreset = (factor: number) => {
    const centerX = crop.x + crop.width / 2;
    const centerY = crop.y + crop.height / 2;
    const targetAspect = selectedPreset ? selectedPreset.aspectRatio : targetWidthPx / targetHeightPx;

    let newW = crop.width * factor;
    let newH = lockAspect ? newW / targetAspect : crop.height * factor;

    newW = Math.min(naturalW, Math.max(30, newW));
    newH = Math.min(naturalH, Math.max(20, newH));

    let newX = Math.max(0, Math.min(naturalW - newW, centerX - newW / 2));
    let newY = Math.max(0, Math.min(naturalH - newH, centerY - newH / 2));

    setCrop({
      x: Math.round(newX),
      y: Math.round(newY),
      width: Math.round(newW),
      height: Math.round(newH)
    });
  };

  // Quick Aspect Ratio Presets
  const applyAspectPreset = (ratio: number | 'free') => {
    if (ratio === 'free') {
      setLockAspect(false);
      return;
    }

    setLockAspect(true);
    let newH = crop.width / ratio;
    let newW = crop.width;

    if (newH > naturalH) {
      newH = naturalH * 0.9;
      newW = newH * ratio;
    }

    const centerX = crop.x + crop.width / 2;
    const centerY = crop.y + crop.height / 2;

    let newX = Math.max(0, Math.min(naturalW - newW, centerX - newW / 2));
    let newY = Math.max(0, Math.min(naturalH - newH, centerY - newH / 2));

    setCrop({
      x: Math.round(newX),
      y: Math.round(newY),
      width: Math.round(newW),
      height: Math.round(newH)
    });
  };

  // Keyboard Nudge Support (Arrow keys for 2px, Shift+Arrow for 10px)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!sourceImage || toolMode !== 'single') return;
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      const step = e.shiftKey ? 10 : 2;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCrop((prev) => ({ ...prev, x: Math.max(0, prev.x - step) }));
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCrop((prev) => ({ ...prev, x: Math.min(naturalW - prev.width, prev.x + step) }));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setCrop((prev) => ({ ...prev, y: Math.max(0, prev.y - step) }));
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setCrop((prev) => ({ ...prev, y: Math.min(naturalH - prev.height, prev.y + step) }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sourceImage, toolMode, naturalW, naturalH]);

  const totalLoadedCount = batchItems.length > 0 ? batchItems.length : sourceImage ? 1 : 0;

  // Group presets into intuitive Category Accordions for the Consolidated Combobox
  const CATEGORY_GROUPS = [
    { name: 'Management & MBA', categories: ['Management'], description: 'CAT (IIM), XAT, SNAP, NMAT & CMAT' },
    { name: 'Civil Services / UPSC', categories: ['UPSC'], description: 'UPSC IAS, NDA, CDS, CMS & CAPF (AC)' },
    { name: 'Banking & Financial', categories: ['Banking', 'PSU & Regulators'], description: 'IBPS, SBI, RBI Grade B, SEBI & LIC' },
    { name: 'Engineering & Medical', categories: ['Engineering'], description: 'GATE & IIT JAM, NEET / JEE (NTA)' },
    { name: 'Staff Selection (SSC) & Railways', categories: ['SSC', 'Railways'], description: 'SSC CGL, CHSL, MTS, GD & Railway RRB' },
    { name: 'State PSCs', categories: ['State PSC'], description: 'UPPSC, BPSC, MPSC, TNPSC, KPSC, RPSC, WBPSC & GPSC' },
    { name: 'Defense & Paramilitary', categories: ['Defense'], description: 'AFCAT, Agniveer (Army/Navy/AirForce) & Coast Guard' },
    { name: 'Law & Legal Entrances', categories: ['Law'], description: 'CLAT UG/PG, AILET & LSAT India' },
    { name: 'Teaching & Eligibility', categories: ['Teaching'], description: 'CTET, State TETs & CSIR UGC-NET' },
    { name: 'Identity & Portals', categories: ['Identity', 'General'], description: 'PAN Card (NSDL), Left Thumb, Sarathi DL & Passport' }
  ];

  // Top 4 Pinned Entrance Exams based on ongoing registration seasons
  const PINNED_TOP_EXAMS = [
    { id: 'ssc-general', short: 'SSC', label: 'SSC (CGL, CHSL)', specs: '140×60 • 10–20 KB' },
    { id: 'upsc-civil-services', short: 'UPSC', label: 'UPSC (IAS, NDA)', specs: '350×350 • 20–300 KB' },
    { id: 'ibps-sbi', short: 'IBPS', label: 'IBPS & SBI (PO/Clerk)', specs: '140×60 • 10–20 KB' },
    { id: 'cat-iim', short: 'CAT', label: 'CAT (IIMs)', specs: '300×132 • 10–80 KB' }
  ];

  // Filter presets for search inside combobox
  const comboboxFilteredPresets = EXAM_PRESETS.filter((p) => {
    if (!comboboxSearch.trim()) return true;
    const q = comboboxSearch.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.shortCode.toLowerCase().includes(q) ||
      p.authority.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.notes.toLowerCase().includes(q)
    );
  });

  // Toggle Category Accordion in Combobox
  const toggleCategoryAccordion = (catName: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catName]: !prev[catName]
    }));
  };

  // Consolidated Exam Selector Dropdown & Search System
  const renderPresetSelector = () => {
    const isPinnedActive = PINNED_TOP_EXAMS.some((item) => item.id === selectedPreset?.id);

    return (
      <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-xs space-y-3 relative" ref={comboboxRef}>
        
        {/* Top Header: Title & Active Preset Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-muted-foreground">
              <Zap className="w-4 h-4 text-primary" />
              <span>Govt Exam Presets:</span>
            </div>
            {selectedPreset && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-primary/10 text-primary border border-primary/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span>Active: {selectedPreset.shortCode}</span>
                <span className="text-muted-foreground font-normal">({targetWidthPx}×{targetHeightPx}px, {minKb}–{maxKb}KB)</span>
              </span>
            )}
          </div>

          <a
            href="/#exam-specs"
            className="text-[11px] font-medium text-primary hover:underline flex items-center gap-1"
          >
            <span>Full Specs Matrix Table</span>
            <span>→</span>
          </a>
        </div>

        {/* Pinned Top 4 Exams Bar + "More Exams (30+) ▾" Combobox Trigger */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground shrink-0 flex items-center gap-1 mr-1">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Top Registration Seasons:
          </span>

          {/* 4 Pinned Chips */}
          {PINNED_TOP_EXAMS.map((item) => {
            const isSelected = selectedPreset?.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  const p = EXAM_PRESETS.find((x) => x.id === item.id);
                  if (p) applyPreset(p);
                  setIsExamDropdownOpen(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 shadow-2xs ${
                  isSelected
                    ? 'bg-primary text-primary-foreground font-bold shadow-sm'
                    : 'bg-muted/70 hover:bg-muted text-foreground border border-border/70 hover:border-primary/40'
                }`}
              >
                <span>{item.short}</span>
                <span className={`text-[10px] font-mono font-normal opacity-80 ${isSelected ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                  {item.specs.split('•')[0]}
                </span>
              </button>
            );
          })}

          {/* Consolidated Dropdown Trigger Button */}
          <button
            type="button"
            onClick={() => setIsExamDropdownOpen(!isExamDropdownOpen)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center gap-1.5 border shadow-2xs ${
              isExamDropdownOpen || (!isPinnedActive && selectedPreset)
                ? 'bg-primary/15 text-primary border-primary/40 shadow-xs'
                : 'bg-card hover:bg-muted text-foreground border-border hover:border-primary/40'
            }`}
            aria-expanded={isExamDropdownOpen}
            aria-haspopup="dialog"
          >
            <Search className="w-3.5 h-3.5 text-primary" />
            <span>
              {!isPinnedActive && selectedPreset ? `Exam: ${selectedPreset.shortCode}` : 'More Exams (30+)'}
            </span>
            {isExamDropdownOpen ? (
              <ChevronUp className="w-3.5 h-3.5 text-primary" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-primary" />
            )}
          </button>
        </div>

        {/* Consolidated Exam Selector Dropdown Combobox Popover */}
        {isExamDropdownOpen && (
          <div className="mt-2 p-4 rounded-2xl bg-card border-2 border-primary/30 shadow-2xl space-y-4 z-30 animate-in fade-in slide-in-from-top-2 duration-150">
            
            {/* Combobox Search Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/80 pb-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search 30+ exams (e.g. GATE, NEET, PAN, BPSC, AFCAT)..."
                  value={comboboxSearch}
                  onChange={(e) => setComboboxSearch(e.target.value)}
                  autoFocus
                  className="w-full pl-9 pr-8 py-2 text-xs rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                {comboboxSearch && (
                  <button
                    type="button"
                    onClick={() => setComboboxSearch('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
                    title="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
                <span className="text-muted-foreground font-mono text-[11px]">
                  {comboboxFilteredPresets.length} exams found
                </span>
                <button
                  type="button"
                  onClick={() => setIsExamDropdownOpen(false)}
                  className="px-2.5 py-1 rounded-lg border border-border hover:bg-muted text-xs font-semibold text-muted-foreground hover:text-foreground transition"
                >
                  Close ✕
                </button>
              </div>
            </div>

            {/* When Searching: Flat Search Results Grid */}
            {comboboxSearch.trim() ? (
              <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                {comboboxFilteredPresets.length === 0 ? (
                  <div className="p-8 text-center text-xs text-muted-foreground">
                    No matching exams found for &ldquo;{comboboxSearch}&rdquo;. Try typing SSC, UPSC, GATE, or PAN.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {comboboxFilteredPresets.map((preset) => {
                      const isSelected = selectedPreset?.id === preset.id;
                      return (
                        <button
                          key={preset.id}
                          type="button"
                          onClick={() => {
                            applyPreset(preset);
                            setIsExamDropdownOpen(false);
                          }}
                          className={`text-left p-3 rounded-xl border transition text-xs flex flex-col justify-between ${
                            isSelected
                              ? 'border-primary bg-primary/10 shadow-xs ring-1 ring-primary'
                              : 'border-border/70 bg-card hover:border-primary/40 hover:bg-muted/40'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between gap-1">
                              <span className="font-bold text-foreground truncate">{preset.shortCode}</span>
                              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-muted text-muted-foreground">
                                {preset.category}
                              </span>
                            </div>
                            <div className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">{preset.name}</div>
                          </div>
                          <div className="pt-2 flex items-center justify-between text-[10px] font-mono border-t border-border/40 mt-2">
                            <span>{preset.widthPx}×{preset.heightPx}px ({preset.widthCm}×{preset.heightCm}cm)</span>
                            <span className="text-primary font-bold">{preset.minKb}–{preset.maxKb}KB</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              /* When Not Searching: Category Accordions */
              <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
                {CATEGORY_GROUPS.map((group) => {
                  const groupPresets = EXAM_PRESETS.filter((p) => group.categories.includes(p.category));
                  if (groupPresets.length === 0) return null;

                  const isExpanded = expandedCategories[group.name] ?? false;

                  return (
                    <div key={group.name} className="border border-border/80 rounded-xl overflow-hidden bg-muted/20">
                      <button
                        type="button"
                        onClick={() => toggleCategoryAccordion(group.name)}
                        className="w-full p-3 flex items-center justify-between text-left hover:bg-muted/40 transition select-none"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-foreground">{group.name}</span>
                          <span className="text-[10px] text-muted-foreground hidden sm:inline">• {group.description}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-muted text-muted-foreground border border-border">
                            {groupPresets.length} presets
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                          )}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-3 pt-1 border-t border-border/60 bg-card">
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                            {groupPresets.map((preset) => {
                              const isSelected = selectedPreset?.id === preset.id;
                              return (
                                <button
                                  key={preset.id}
                                  type="button"
                                  onClick={() => {
                                    applyPreset(preset);
                                    setIsExamDropdownOpen(false);
                                  }}
                                  className={`text-left p-2.5 rounded-xl border transition text-xs flex flex-col justify-between ${
                                    isSelected
                                      ? 'border-primary bg-primary/10 shadow-xs ring-1 ring-primary'
                                      : 'border-border/70 bg-card hover:border-primary/40 hover:bg-muted/40'
                                  }`}
                                >
                                  <div>
                                    <div className="flex items-center justify-between gap-1">
                                      <span className="font-bold text-foreground truncate">{preset.shortCode}</span>
                                      <span className="text-[10px] font-mono font-bold text-primary">{preset.minKb}–{preset.maxKb}KB</span>
                                    </div>
                                    <div className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">{preset.name}</div>
                                  </div>
                                  <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-muted-foreground border-t border-border/40 mt-1.5">
                                    <span>{preset.widthPx}×{preset.heightPx}px ({preset.widthCm}×{preset.heightCm}cm)</span>
                                    <span className="text-[9px] text-muted-foreground">{preset.inkRequirement}</span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Bottom Reference Link */}
            <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs">
              <span className="text-muted-foreground text-[11px]">Looking for official print size rules?</span>
              <a
                href="/#exam-specs"
                onClick={() => setIsExamDropdownOpen(false)}
                className="font-bold text-primary hover:underline flex items-center gap-1"
              >
                <span>Browse Full Exam Dimensions Matrix (30+ Guidelines)</span>
                <span>↓</span>
              </a>
            </div>

          </div>
        )}

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
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 scroll-mt-24" id="tool-workspace">
      
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

      {/* ========================================================================= */}
      {/* ⚡ BATCH MODE: SIMULTANEOUS MASTER EDITING SUITE (All 10 Signs Together) */}
      {/* ========================================================================= */}
      {toolMode === 'batch' && (
        <div className="space-y-4">
          
          {/* Mode Switcher Bar in Batch Mode */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-2xl bg-card border border-border shadow-xs">
            <div className="inline-flex items-center gap-1 p-0.5 rounded-lg bg-muted/60 border border-border shrink-0">
              <button
                type="button"
                onClick={() => setToolMode('single')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-muted-foreground hover:text-foreground transition cursor-pointer"
              >
                <PenTool className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Single Studio</span>
              </button>
              <button
                type="button"
                onClick={() => setToolMode('batch')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold bg-primary text-primary-foreground shadow-xs cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span>Batch Editor</span>
                <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold bg-primary-foreground/20 text-primary-foreground">
                  {batchItems.length > 0 ? `${batchItems.length}/10` : 'Up to 10'}
                </span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-xl hover:opacity-95 shadow-xs transition cursor-pointer"
              >
                + Add Images
              </button>
              <button
                type="button"
                onClick={loadSampleBatchSignatures}
                className="px-3 py-1.5 bg-muted text-foreground text-xs font-medium rounded-xl hover:bg-muted/80 border border-border transition cursor-pointer"
              >
                Sample Signs
              </button>
              {batchItems.length > 0 && (
                <button
                  type="button"
                  onClick={clearAllSelectedFiles}
                  className="px-3 py-1.5 text-xs font-semibold text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-xl border border-red-200 dark:border-red-900/50 transition cursor-pointer"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>

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
      {/* ========================================================================= */}
      {/* 🎨 UNIFIED SINGLE SIGNATURE STUDIO (Canvas Studio + Enlarged Live Preview) */}
      {/* ========================================================================= */}
      {toolMode === 'single' && (
        <div className="space-y-3.5 scroll-mt-24" id="studio-container">
          
          {/* 3-Step Guided Workflow Bar */}
          <StepIndicator
            hasImage={!!sourceImage}
            isProcessed={!!processedResult}
          />

          {/* Top Bar: Active Preset One-Line Banner with Change Preset */}
          <PresetBanner
            selectedPreset={selectedPreset}
            targetWidthPx={targetWidthPx}
            targetHeightPx={targetHeightPx}
            minKb={minKb}
            maxKb={maxKb}
            dpi={dpi}
            hasSourceImage={!!sourceImage}
            onChangePresetClick={() => window.dispatchEvent(new CustomEvent('open-header-preset-search'))}
            onClearClick={clearAllSelectedFiles}
            onToast={addToast}
          />

          {/* Main Studio 2-Column Grid: Left Column (Cropper & Filters) + Right Column (Live Preview & Custom Inputs) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Interactive Crop Area & Enhancements (7 Cols) */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Card 1: Interactive Cropper Canvas */}
              <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
                <div className="studio-meta-bar flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    {/* Mode Selector & Canvas Title Merged Inline */}
                    <div className="inline-flex items-center gap-1 p-0.5 rounded-lg bg-muted/60 border border-border shrink-0">
                      <button
                        type="button"
                        onClick={() => setToolMode('single')}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                          toolMode === 'single'
                            ? 'bg-card text-foreground shadow-xs border border-border font-bold'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <PenTool className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>Single Studio</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setToolMode('batch')}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                          toolMode === 'batch'
                            ? 'bg-primary text-primary-foreground shadow-xs font-bold'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <Layers className="w-3.5 h-3.5 shrink-0" />
                        <span>Batch Editor</span>
                        <span
                          className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold ${
                            toolMode === 'batch'
                              ? 'bg-primary-foreground/20 text-primary-foreground'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {batchItems.length > 0 ? `${batchItems.length}/10` : 'Up to 10'}
                        </span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2 pl-1 border-l border-border/60">
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                        <Maximize className="w-4 h-4 text-primary" />
                        Interactive Studio Canvas:
                      </span>
                      {sourceImage && (
                        <span className="text-xs text-muted-foreground font-mono">
                          ({sourceDimensions.width} × {sourceDimensions.height} px)
                        </span>
                      )}
                    </div>
                  </div>

                  {sourceImage && (
                    <div className="flex items-center gap-1 text-xs">
                      <button
                        type="button"
                        onClick={() => setCropperZoom((prev) => Math.max(0.6, Number((prev - 0.2).toFixed(1))))}
                        className="p-1.5 rounded-lg border border-border bg-card hover:bg-muted text-foreground transition cursor-pointer"
                        title="Zoom Out Canvas"
                      >
                        <ZoomOut className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-mono text-[11px] font-bold px-1.5 text-muted-foreground">
                        {Math.round(cropperZoom * 100)}%
                      </span>
                      <button
                        type="button"
                        onClick={() => setCropperZoom((prev) => Math.min(2.5, Number((prev + 0.2).toFixed(1))))}
                        className="p-1.5 rounded-lg border border-border bg-card hover:bg-muted text-foreground transition cursor-pointer"
                        title="Zoom In Canvas"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setCropperZoom(1)}
                        className="px-2 py-1 rounded-lg border border-border bg-card hover:bg-muted text-[10px] font-bold text-muted-foreground transition ml-0.5 cursor-pointer"
                      >
                        Fit View
                      </button>
                      <button
                        type="button"
                        onClick={clearAllSelectedFiles}
                        className="px-2 py-1 rounded-lg border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 text-[10px] font-bold transition ml-1 cursor-pointer"
                        title="Clear current signature"
                      >
                        Clear
                      </button>
                    </div>
                  )}
                </div>

                {/* Selection Criteria Quick Bar (Auto-Fit, Aspect Ratios & Margins) */}
                <div className="p-2.5 rounded-xl bg-muted/30 border border-border/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {/* Smart Auto-Fit Signature Button */}
                    <button
                      type="button"
                      onClick={() => handleAutoFitSignature(0.12)}
                      disabled={!sourceImage}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-bold shadow-xs hover:opacity-95 active:scale-95 transition disabled:opacity-40 cursor-pointer"
                      title="Automatically locate signature strokes and wrap crop tightly"
                    >
                      <Wand2 className="w-3.5 h-3.5 text-primary-foreground" />
                      <span>Auto-Fit Signature</span>
                    </button>

                    {/* Quick Aspect Ratio Chips */}
                    <div className="hidden sm:flex items-center gap-1 pl-1 border-l border-border/60">
                      <span className="text-[10px] uppercase font-bold text-muted-foreground">Ratio:</span>
                      <button
                        type="button"
                        onClick={() => applyAspectPreset(selectedPreset ? selectedPreset.aspectRatio : targetWidthPx / targetHeightPx)}
                        className={`ratio-btn px-2 py-1 rounded-md text-[11px] font-medium transition cursor-pointer ${
                          lockAspect
                            ? 'bg-primary/15 text-primary font-bold border border-primary/30'
                            : 'bg-card text-muted-foreground border border-border hover:bg-muted'
                        }`}
                        data-ratio="default"
                      >
                        {selectedPreset?.shortCode || 'Preset'}
                      </button>
                      <button
                        type="button"
                        onClick={() => applyAspectPreset(1)}
                        className="ratio-btn px-2 py-1 rounded-md text-[11px] font-medium bg-card text-muted-foreground border border-border hover:bg-muted cursor-pointer"
                        data-ratio="1/1"
                        title="Square 1:1 (UPSC / Thumb Impression)"
                      >
                        1:1
                      </button>
                      <button
                        type="button"
                        onClick={() => applyAspectPreset(140 / 60)}
                        className="ratio-btn px-2 py-1 rounded-md text-[11px] font-medium bg-card text-muted-foreground border border-border hover:bg-muted cursor-pointer"
                        data-ratio="7/3"
                        title="7:3 Standard (SSC / Banking / Railway)"
                      >
                        7:3
                      </button>
                      <button
                        type="button"
                        onClick={() => applyAspectPreset('free')}
                        className={`ratio-btn px-2 py-1 rounded-md text-[11px] font-medium transition cursor-pointer ${
                          !lockAspect
                            ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/30'
                            : 'bg-card text-muted-foreground border border-border hover:bg-muted'
                        }`}
                        data-ratio="free"
                      >
                        Freeform
                      </button>
                    </div>
                  </div>

                  {/* Margin Padding Chips */}
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] uppercase font-bold text-muted-foreground">Margin:</span>
                    <button
                      type="button"
                      onClick={() => applyMarginPreset(0.9)}
                      disabled={!sourceImage}
                      className="px-2 py-1 rounded-md text-[11px] font-medium bg-card hover:bg-muted text-foreground border border-border transition disabled:opacity-40"
                      title="Contract crop tighter"
                    >
                      Tight
                    </button>
                    <button
                      type="button"
                      onClick={() => applyMarginPreset(1.15)}
                      disabled={!sourceImage}
                      className="px-2 py-1 rounded-md text-[11px] font-medium bg-card hover:bg-muted text-foreground border border-border transition disabled:opacity-40"
                      title="Add balanced breathing room (Prevents edge collision)"
                    >
                      Balanced
                    </button>
                    <button
                      type="button"
                      onClick={() => applyMarginPreset(1.3)}
                      disabled={!sourceImage}
                      className="px-2 py-1 rounded-md text-[11px] font-medium bg-card hover:bg-muted text-foreground border border-border transition disabled:opacity-40"
                      title="Expand margin wide"
                    >
                      Wide
                    </button>
                  </div>
                </div>

                {/* Cropper Container Stage or Embedded Dropzone */}
                <div
                  id="crop-workspace"
                  className="relative overflow-hidden rounded-xl bg-muted/40 border border-border select-none min-h-[350px] sm:min-h-[400px] flex items-center justify-center p-3"
                >
                  {sourceImage ? (
                    <div
                      ref={containerRef}
                      onMouseMove={handleContainerMouseMove}
                      onTouchMove={handleContainerMouseMove}
                      onMouseUp={handleContainerMouseUp}
                      onTouchEnd={handleContainerMouseUp}
                      className="w-full h-full flex items-center justify-center cursor-crosshair"
                      style={{ touchAction: 'none' }}
                    >
                      <div
                        className="relative inline-block max-w-full max-h-[460px]"
                        style={{
                          transform: `scale(${cropperZoom})`,
                          transformOrigin: 'center',
                          transition: 'transform 0.15s ease-out'
                        }}
                      >
                        <img
                          id="source-image"
                          src={sourceImage.src}
                          alt="Source Signature"
                          draggable={false}
                          style={{
                            transform: `rotate(${rotation}deg) scaleX(${flipH ? -1 : 1}) scaleY(${flipV ? -1 : 1})`,
                            maxHeight: '400px',
                            width: 'auto',
                            display: 'block'
                          }}
                          className="rounded shadow-xs pointer-events-none"
                        />

                        {/* Crop Overlay Box with 8-Point Resize Handles */}
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
                          className="absolute border-2 border-primary bg-primary/10 shadow-2xl backdrop-contrast-125 group"
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

                          {/* Dimensions Tooltip badge inside crop box */}
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-900/90 text-white pointer-events-none shadow whitespace-nowrap">
                            {crop.width} × {crop.height} px
                          </div>

                          {/* 8-Point Precision Resize Handles */}
                          <div
                            onMouseDown={(e) => handleCropMouseDown(e, 'nw')}
                            onTouchStart={(e) => handleCropMouseDown(e, 'nw')}
                            className="absolute -top-2 -left-2 w-4 h-4 bg-primary rounded-full border-2 border-white cursor-nwse-resize shadow-md hover:scale-125 transition-transform"
                            title="Resize Top-Left"
                          />
                          <div
                            onMouseDown={(e) => handleCropMouseDown(e, 'ne')}
                            onTouchStart={(e) => handleCropMouseDown(e, 'ne')}
                            className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full border-2 border-white cursor-nesw-resize shadow-md hover:scale-125 transition-transform"
                            title="Resize Top-Right"
                          />
                          <div
                            onMouseDown={(e) => handleCropMouseDown(e, 'sw')}
                            onTouchStart={(e) => handleCropMouseDown(e, 'sw')}
                            className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary rounded-full border-2 border-white cursor-nesw-resize shadow-md hover:scale-125 transition-transform"
                            title="Resize Bottom-Left"
                          />
                          <div
                            onMouseDown={(e) => handleCropMouseDown(e, 'se')}
                            onTouchStart={(e) => handleCropMouseDown(e, 'se')}
                            className="absolute -bottom-2 -right-2 w-4 h-4 bg-primary rounded-full border-2 border-white cursor-nwse-resize shadow-md hover:scale-125 transition-transform"
                            title="Resize Bottom-Right"
                          />
                          <div
                            onMouseDown={(e) => handleCropMouseDown(e, 'n')}
                            onTouchStart={(e) => handleCropMouseDown(e, 'n')}
                            className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-2 bg-primary rounded-full border border-white cursor-ns-resize shadow hover:scale-125 transition-transform"
                            title="Resize Top Edge"
                          />
                          <div
                            onMouseDown={(e) => handleCropMouseDown(e, 's')}
                            onTouchStart={(e) => handleCropMouseDown(e, 's')}
                            className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-2 bg-primary rounded-full border border-white cursor-ns-resize shadow hover:scale-125 transition-transform"
                            title="Resize Bottom Edge"
                          />
                          <div
                            onMouseDown={(e) => handleCropMouseDown(e, 'w')}
                            onTouchStart={(e) => handleCropMouseDown(e, 'w')}
                            className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-2 h-6 bg-primary rounded-full border border-white cursor-ew-resize shadow hover:scale-125 transition-transform"
                            title="Resize Left Edge"
                          />
                          <div
                            onMouseDown={(e) => handleCropMouseDown(e, 'e')}
                            onTouchStart={(e) => handleCropMouseDown(e, 'e')}
                            className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2 h-6 bg-primary rounded-full border border-white cursor-ew-resize shadow hover:scale-125 transition-transform"
                            title="Resize Right Edge"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Dropzone Embedded inside Crop Studio Frame when no image */
                    <div
                      id="upload-dropzone"
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragOver(true);
                      }}
                      onDragLeave={() => setIsDragOver(false)}
                      onDrop={handleDrop}
                      className={`w-full h-full min-h-[340px] p-6 text-center flex flex-col items-center justify-center rounded-xl border-2 border-dashed transition-all ${
                        isDragOver ? 'border-primary bg-primary/10' : 'border-border/80 bg-card/60 hover:border-primary/40'
                      }`}
                    >
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-inner border border-primary/20 mb-3">
                        <Upload className="w-7 h-7 animate-pulse" />
                      </div>
                      <h4 className="font-bold text-base text-foreground mb-1">
                        Drop your signature image here
                      </h4>
                      <p className="text-xs text-muted-foreground mb-4 max-w-sm leading-relaxed">
                        JPG, PNG, WebP up to 10MB • Auto-configured for <span className="font-semibold text-foreground">{targetWidthPx} × {targetHeightPx} px</span> ({minKb}–{maxKb} KB)
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-xl text-xs hover:opacity-95 shadow-xs transition cursor-pointer"
                        >
                          Upload Signature
                        </button>
                        <button
                          type="button"
                          onClick={loadSingleSampleSignature}
                          className="px-3.5 py-2 bg-card border border-border text-foreground font-medium rounded-xl text-xs hover:bg-muted transition shadow-2xs cursor-pointer"
                        >
                          Test Sample
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsDrawingPadOpen(true)}
                          className="px-3.5 py-2 bg-card border border-border text-foreground font-medium rounded-xl text-xs hover:bg-muted transition shadow-2xs cursor-pointer"
                        >
                          Draw Sign
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Transformation Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setRotation((prev) => (prev - 90 + 360) % 360)}
                      disabled={!sourceImage}
                      className="p-2 rounded-lg border border-border bg-card hover:bg-muted text-foreground transition disabled:opacity-40 cursor-pointer"
                      title="Rotate 90° Left"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setRotation((prev) => (prev + 90 + 360) % 360)}
                      disabled={!sourceImage}
                      className="p-2 rounded-lg border border-border bg-card hover:bg-muted text-foreground transition disabled:opacity-40 cursor-pointer"
                      title="Rotate 90° Right"
                    >
                      <RotateCw className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setFlipH(!flipH)}
                      disabled={!sourceImage}
                      className={`p-2 rounded-lg border transition disabled:opacity-40 cursor-pointer ${
                        flipH ? 'bg-primary text-primary-foreground border-primary' : 'bg-card border-border hover:bg-muted text-foreground'
                      }`}
                      title="Flip Horizontal"
                    >
                      <FlipHorizontal className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setFlipV(!flipV)}
                      disabled={!sourceImage}
                      className={`p-2 rounded-lg border transition disabled:opacity-40 cursor-pointer ${
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
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition cursor-pointer ${
                        lockAspect
                          ? 'bg-primary/10 border-primary/30 text-primary font-semibold'
                          : 'bg-card border-border text-muted-foreground'
                      }`}
                    >
                      {lockAspect ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                      <span>Aspect Ratio Locked</span>
                    </button>

                    <button
                      id="reset-crop-btn"
                      type="button"
                      onClick={() => {
                        if (sourceImage) {
                          const targetAspect = selectedPreset ? selectedPreset.aspectRatio : targetWidthPx / targetHeightPx;
                          initCropBox(sourceImage, targetAspect);
                        }
                        setRotation(0);
                        setFlipH(false);
                        setFlipV(false);
                      }}
                      className="px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-foreground transition cursor-pointer"
                    >
                      Reset Crop
                    </button>
                  </div>
                </div>
              </div>

              {/* IMAGE ENHANCEMENT FILTERS */}
              <div className="rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    <span>Image Enhancement Filters</span>
                  </h4>
                  <span className="text-[11px] text-muted-foreground font-mono">Real-time Paper Cleanup</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <label className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-border cursor-pointer hover:bg-muted/50 transition">
                    <div>
                      <span className="text-foreground font-semibold block">Clean White Paper</span>
                      <span className="text-[10px] text-muted-foreground">Blows out yellow/gray photo shadows</span>
                    </div>
                    <input
                      type="checkbox"
                      id="clean-paper-filter"
                      checked={filters.cleanPaper}
                      onChange={(e) => setFilters({ ...filters, cleanPaper: e.target.checked })}
                      className="w-4 h-4 rounded text-primary focus:ring-primary"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-border cursor-pointer hover:bg-muted/50 transition">
                    <div>
                      <span className="text-foreground font-semibold block">Pure Black &amp; White Mode</span>
                      <span className="text-[10px] text-muted-foreground">High-contrast dense ink lines</span>
                    </div>
                    <input
                      type="checkbox"
                      id="bw-mode-filter"
                      checked={filters.blackAndWhite}
                      onChange={(e) => setFilters({ ...filters, blackAndWhite: e.target.checked })}
                      className="w-4 h-4 rounded text-primary focus:ring-primary"
                    />
                  </label>
                </div>
              </div>

            </div>

            {/* Right Column: Big Size Real-Time Live Preview Canvas & Custom Bounds (5 Cols, Sticky) */}
            <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-20">
              
              {/* Big Live Output Preview Card */}
              <div className="bg-card border-2 border-primary/20 rounded-2xl p-5 shadow-md space-y-4">
                
                {/* Header: Title, Live indicator & Inspect Button */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                      <Eye className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-foreground flex items-center gap-2">
                        <span>Real-Time Output Preview</span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          Live Sync
                        </span>
                      </h3>
                      <p className="text-[11px] text-muted-foreground">
                        Scaled simulated output view.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span id="preview-dim-tag" className="text-xs font-mono font-bold bg-primary/10 text-primary px-2.5 py-0.5 rounded-full border border-primary/20">
                      {targetWidthPx} × {targetHeightPx} px
                    </span>
                    {processedResult && (
                      <button
                        type="button"
                        onClick={() => setIsInspectModalOpen(true)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold text-primary bg-primary/10 hover:bg-primary/20 border border-primary/25 transition shadow-2xs cursor-pointer"
                        title="Open Full Detail Inspection Zoom Modal"
                      >
                        <Maximize2 className="w-3 h-3" />
                        <span>Inspect</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Preview Display Controls (Scale & Background Paper Switcher) */}
                <div className="flex items-center justify-between p-2 rounded-xl bg-muted/40 border border-border/80 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] uppercase font-bold text-muted-foreground px-1">Scale:</span>
                    {[
                      { val: 1, label: '1x' },
                      { val: 1.5, label: '1.5x' },
                      { val: 2, label: '2x' }
                    ].map((s) => (
                      <button
                        key={s.val}
                        type="button"
                        onClick={() => setPreviewScale(s.val)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono transition cursor-pointer ${
                          previewScale === s.val
                            ? 'bg-primary text-primary-foreground font-bold shadow-xs'
                            : 'text-muted-foreground hover:text-foreground bg-card border border-border/60'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setPreviewBg('white')}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                        previewBg === 'white'
                          ? 'bg-primary text-primary-foreground font-bold shadow-xs'
                          : 'text-muted-foreground hover:text-foreground bg-card border border-border/60'
                      }`}
                      title="Show on Pure White Paper background"
                    >
                      White
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreviewBg('checker')}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                        previewBg === 'checker'
                          ? 'bg-primary text-primary-foreground font-bold shadow-xs'
                          : 'text-muted-foreground hover:text-foreground bg-card border border-border/60'
                      }`}
                      title="Show on Transparency Grid background"
                    >
                      Grid
                    </button>
                  </div>
                </div>

                {/* Big Size Canvas Preview Container (Visual Scaling for 140x60 etc) */}
                <div
                  className={`p-6 rounded-2xl border border-border flex flex-col items-center justify-center min-h-[220px] sm:min-h-[260px] overflow-hidden relative transition-colors shadow-inner ${
                    previewBg === 'checker'
                      ? 'bg-[repeating-conic-gradient(#cbd5e1_0%_25%,#ffffff_0%_50%)] dark:bg-[repeating-conic-gradient(#334155_0%_25%,#0f172a_0%_50%)] [background-size:20px_20px]'
                      : 'bg-white dark:bg-zinc-950'
                  }`}
                >
                  {processedResult ? (
                    <img
                      src={processedResult.dataUrl}
                      alt="Processed Signature Preview"
                      style={{
                        transform: `scale(${previewScale})`,
                        transformOrigin: 'center',
                        transition: 'transform 0.15s ease'
                      }}
                      className="max-h-[160px] sm:max-h-[200px] max-w-full object-contain rounded-lg shadow-sm border border-border/40"
                    />
                  ) : (
                    /* Simulated Signature preview before upload */
                    <div className="flex flex-col items-center justify-center text-center space-y-3 py-2">
                      <div className="w-[240px] h-[90px] bg-white dark:bg-slate-900 border-2 border-dashed border-border/80 shadow-xs rounded-xl flex items-center justify-center p-3">
                        <span className="font-serif italic text-xl text-slate-400 dark:text-slate-500 select-none tracking-wider">
                          Sample Signature
                        </span>
                      </div>
                      <span id="preview-status-text" className="text-[11px] text-muted-foreground font-mono">
                        Awaiting signature upload... ({targetWidthPx} × {targetHeightPx} px)
                      </span>
                    </div>
                  )}

                  {/* Corner Dimension Overlay Badge */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-lg text-[11px] font-mono font-bold bg-slate-950/85 text-white shadow-md border border-white/10 pointer-events-none backdrop-blur-xs">
                    {targetWidthPx} × {targetHeightPx} px
                  </div>
                </div>

                {/* Exact File Size & Target Metric Pill */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-3 rounded-xl bg-muted/30 border border-border text-xs">
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Output File Size</div>
                    <div className="font-mono font-extrabold text-base text-foreground">
                      {processedResult ? `${processedResult.sizeKb} KB` : `${selectedPreset?.recommendedKb || 15} KB (Est)`}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Target Bounds</div>
                    <div className="font-mono text-xs font-bold text-primary">
                      {minKb} KB – {maxKb} KB
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Status</div>
                    <div className="pt-0.5">
                      {processedResult ? (
                        processedResult.withinTargetBounds ? (
                          <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400 text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Ready</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 font-bold text-amber-600 dark:text-amber-400 text-[11px]">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>Check Bounds</span>
                          </span>
                        )
                      ) : (
                        <span className="text-[11px] text-muted-foreground font-mono">Ready to process</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Warning Alert if out of bounds */}
                {processedResult && !processedResult.withinTargetBounds && (
                  <div className="p-3 rounded-xl bg-amber-500/15 border-2 border-amber-500/40 text-amber-900 dark:text-amber-200 text-xs space-y-1.5">
                    <div className="flex items-start gap-2 font-semibold">
                      <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        {processedResult.sizeKb < minKb ? (
                          <span>File size below {minKb} KB floor. Portals may reject files under {minKb} KB.</span>
                        ) : (
                          <span>File size exceeds {maxKb} KB limit. Portals reject files over {maxKb} KB.</span>
                        )}
                      </div>
                    </div>
                    {processedResult.sizeKb < minKb && (
                      <button
                        type="button"
                        onClick={autoFixMinKb}
                        className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition cursor-pointer"
                      >
                        Auto-Fix Min KB Floor →
                      </button>
                    )}
                  </div>
                )}

                {/* Primary Download & Copy Action Buttons */}
                <div className="space-y-2 pt-1">
                  <button
                    id="download-btn"
                    type="button"
                    onClick={() => {
                      if (processedResult) {
                        handleDownload();
                      } else {
                        fileInputRef.current?.click();
                      }
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-primary-foreground font-bold shadow-md shadow-primary/20 hover:opacity-95 active:scale-98 transition text-xs sm:text-sm cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>
                      {processedResult
                        ? `Download Resized Signature (${processedResult.sizeKb} KB JPG)`
                        : 'Upload Signature to Download'}
                    </span>
                  </button>

                  {processedResult && (
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-card border border-border text-foreground hover:bg-muted text-xs font-semibold transition cursor-pointer"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsInspectModalOpen(true)}
                        className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-card border border-border text-foreground hover:bg-muted text-xs font-semibold transition cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-primary" />
                        <span>Inspect Detail</span>
                      </button>
                    </div>
                  )}
                </div>

              </div>

              {/* Card 2: Custom Dimensions & Units Controls */}
              <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 text-xs">
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <span className="font-bold text-foreground flex items-center gap-1.5">
                    <Scaling className="w-4 h-4 text-primary" />
                    <span>Custom Dimensions &amp; Bounds</span>
                  </span>
                  <div className="flex rounded-lg border border-border p-0.5 bg-muted/40">
                    {(['px', 'cm', 'mm', 'in'] as UnitType[]).map((u) => (
                      <button
                        key={u}
                        type="button"
                        onClick={() => handleUnitChange(u)}
                        className={`px-2 py-0.5 rounded text-[11px] font-mono transition cursor-pointer ${
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
                        className="px-2.5 py-1.5 hover:bg-muted font-bold text-foreground cursor-pointer"
                      >
                        -
                      </button>
                      <input
                        id="width-input"
                        type="text"
                        inputMode="decimal"
                        value={widthInput}
                        onChange={(e) => handleWidthChange(e.target.value)}
                        className="w-full text-center font-mono font-bold text-foreground bg-transparent focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => adjustWidth(1)}
                        className="px-2.5 py-1.5 hover:bg-muted font-bold text-foreground cursor-pointer"
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
                        className="px-2.5 py-1.5 hover:bg-muted font-bold text-foreground cursor-pointer"
                      >
                        -
                      </button>
                      <input
                        id="height-input"
                        type="text"
                        inputMode="decimal"
                        value={heightInput}
                        onChange={(e) => handleHeightChange(e.target.value)}
                        className="w-full text-center font-mono font-bold text-foreground bg-transparent focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => adjustHeight(1)}
                        className="px-2.5 py-1.5 hover:bg-muted font-bold text-foreground cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Target File Size Bounds Panel (Min KB - Max KB) */}
                <div className="space-y-2 pt-2 border-t border-border/60">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-foreground">Target File Bounds</span>
                    <span className="font-mono text-primary font-bold">{minKb} KB – {maxKb} KB</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <span className="text-muted-foreground text-[11px]">Min KB (Floor)</span>
                      <div className="flex items-center border border-border rounded-lg overflow-hidden bg-background">
                        <button
                          type="button"
                          onClick={() => adjustMinKb(-1)}
                          className="px-2 py-1 hover:bg-muted font-bold text-foreground cursor-pointer"
                        >
                          -
                        </button>
                        <input
                          id="min-kb-input"
                          type="text"
                          inputMode="numeric"
                          value={minKbInput}
                          onChange={(e) => handleMinKbChange(e.target.value)}
                          className="w-full text-center font-mono font-bold text-foreground bg-transparent focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => adjustMinKb(1)}
                          className="px-2 py-1 hover:bg-muted font-bold text-foreground cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-muted-foreground text-[11px]">Max KB (Ceiling)</span>
                      <div className="flex items-center border border-border rounded-lg overflow-hidden bg-background">
                        <button
                          type="button"
                          onClick={() => adjustMaxKb(-1)}
                          className="px-2 py-1 hover:bg-muted font-bold text-foreground cursor-pointer"
                        >
                          -
                        </button>
                        <input
                          id="max-kb-input"
                          type="text"
                          inputMode="numeric"
                          value={maxKbInput}
                          onChange={(e) => handleMaxKbChange(e.target.value)}
                          className="w-full text-center font-mono font-bold text-foreground bg-transparent focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => adjustMaxKb(1)}
                          className="px-2 py-1 hover:bg-muted font-bold text-foreground cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
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

      {/* 🔍 Full-Detail Signature Pixel Inspector & Quality Verification Modal */}
      {isInspectModalOpen && processedResult && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setIsInspectModalOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-foreground"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
              <div className="space-y-0.5">
                <h3 className="text-base font-bold flex items-center gap-2 text-foreground">
                  <Maximize2 className="w-4 h-4 text-primary" />
                  <span>Signature Quality &amp; Pixel Inspector</span>
                </h3>
                <p className="text-xs text-muted-foreground">
                  Inspect ink edge definition, stroke contrast, and portal compliance at magnified zoom.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsInspectModalOpen(false)}
                className="p-1.5 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition"
                title="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Inspection Toolbar: Mode & Zoom Level */}
            <div className="p-3 border-b border-border bg-card flex flex-wrap items-center justify-between gap-3 text-xs">
              {/* Tab Selector */}
              <div className="flex rounded-lg border border-border p-0.5 bg-muted/40">
                <button
                  type="button"
                  onClick={() => setInspectTab('processed')}
                  className={`px-3 py-1 rounded-md font-medium transition ${
                    inspectTab === 'processed'
                      ? 'bg-primary text-primary-foreground font-bold shadow-xs'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Processed ({processedResult.sizeKb} KB)
                </button>
                <button
                  type="button"
                  onClick={() => setInspectTab('original')}
                  className={`px-3 py-1 rounded-md font-medium transition ${
                    inspectTab === 'original'
                      ? 'bg-primary text-primary-foreground font-bold shadow-xs'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Raw Source Photo
                </button>
              </div>

              {/* Zoom Buttons */}
              <div className="flex items-center gap-1">
                <span className="text-[11px] font-semibold text-muted-foreground mr-1">Magnification:</span>
                {[
                  { z: 1, label: '100% (1x)' },
                  { z: 2, label: '200% (2x)' },
                  { z: 3, label: '300% (3x)' }
                ].map((item) => (
                  <button
                    key={item.z}
                    type="button"
                    onClick={() => setInspectZoom(item.z)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition ${
                      inspectZoom === item.z
                        ? 'bg-primary text-primary-foreground font-bold'
                        : 'bg-muted/60 text-muted-foreground hover:text-foreground border border-border'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Inspection Stage / Canvas View */}
            <div className="p-6 bg-slate-900/10 dark:bg-slate-950 flex items-center justify-center min-h-[260px] overflow-auto relative">
              <div className="relative inline-block border border-border/60 rounded-lg shadow-md bg-white overflow-hidden p-2">
                {inspectTab === 'processed' ? (
                  <img
                    src={processedResult.dataUrl}
                    alt="Processed Signature"
                    style={{
                      transform: `scale(${inspectZoom})`,
                      transformOrigin: 'center',
                      transition: 'transform 0.15s ease-out'
                    }}
                    className="max-h-48 object-contain select-none"
                  />
                ) : (
                  sourceImage && (
                    <img
                      src={sourceImage.src}
                      alt="Original Source"
                      style={{
                        transform: `scale(${inspectZoom * 0.6}) rotate(${rotation}deg) scaleX(${flipH ? -1 : 1}) scaleY(${flipV ? -1 : 1})`,
                        transformOrigin: 'center',
                        transition: 'transform 0.15s ease-out'
                      }}
                      className="max-h-48 object-contain select-none"
                    />
                  )
                )}
              </div>
            </div>

            {/* Technical Verification Status Bar */}
            <div className="p-3 border-t border-border bg-muted/20 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-center">
              <div className="p-2 rounded-lg bg-card border border-border/60">
                <div className="text-[10px] text-muted-foreground uppercase font-semibold">Dimensions</div>
                <div className="font-mono font-bold text-foreground">{targetWidthPx} × {targetHeightPx} px</div>
              </div>
              <div className="p-2 rounded-lg bg-card border border-border/60">
                <div className="text-[10px] text-muted-foreground uppercase font-semibold">Exact Size</div>
                <div className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{processedResult.sizeKb} KB</div>
              </div>
              <div className="p-2 rounded-lg bg-card border border-border/60">
                <div className="text-[10px] text-muted-foreground uppercase font-semibold">Format</div>
                <div className="font-mono font-bold text-foreground">{processedResult.format} (200 DPI)</div>
              </div>
              <div className="p-2 rounded-lg bg-card border border-border/60">
                <div className="text-[10px] text-muted-foreground uppercase font-semibold">Portal Status</div>
                <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified OK</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 border-t border-border bg-card flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setIsInspectModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold transition"
              >
                Close Inspector
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-4 py-2 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold transition flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="px-5 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-md shadow-primary/25 hover:opacity-95 transition flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download File</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toast Notification Stack */}
      <ToastNotification toasts={toasts} onDismiss={removeToast} />

    </div>
  );
};

