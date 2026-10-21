import React, { useState, useRef, useEffect, useCallback, useMemo, lazy, Suspense } from 'react';
import '../styles/resizer-layout.css';
import '../styles/control-polish.css';
import '../styles/mobile-conversion.css';
import { presetMode } from '../utils/presetMode';
import FeedbackPrompt from './FeedbackPrompt';
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
  ChevronUp,
  Camera,
  FileText,
  User,
  Calendar,
  ExternalLink,
  HelpCircle
} from 'lucide-react';
import { TRANSLATIONS, type SupportedLang } from '../data/i18n/translations';
import {
  SIGNATURE_PRESETS,
  PHOTO_PRESETS,
  DOCUMENT_PRESETS,
  ALL_COMBINED_PRESETS
} from '../data/examPresets';
import type {
  ExamPreset,
  UnitType,
  OutputFormat,
  CropArea,
  FilterOptions,
  ProcessedImageResult,
  BatchSignatureItem,
  ToolTargetMode
} from '../types';
import {
  convertUnits,
  formatFileSize,
  renderProcessedCanvas,
  compressCanvasToTargetSize,
  detectSignatureBoundingBox,
  applyNameAndDateStamp,
  applyDocumentFilters
} from '../utils/imageProcessor';
import { createPdfFromJpegBlob } from '../utils/pdfGenerator';
import { canProcessImagesOffThread, processImageOffThread } from '../utils/imageProcessorWorker';
import { createPdfOffThread } from '../utils/pdfGeneratorWorker';
import { ToastNotification, type ToastItem } from './tool/ToastNotification';
import { StepIndicator } from './tool/StepIndicator';
import { PresetBanner } from './tool/PresetBanner';
import { WorkspacePresetPicker } from './tool/WorkspacePresetPicker';
import { MobileConversionBar } from './tool/MobileConversionBar';
import { MobileOptions } from './tool/MobileOptions';
import { UploadChecks } from './tool/UploadChecks';
import { PortraitBackgroundFix } from './tool/PortraitBackgroundFix';
import { ImageRuleChecks, ExportChecksDialog } from './tool/ImageRuleChecks';
import { ComplianceRejectionAudit } from './tool/ComplianceRejectionAudit';
import { fileIntakeError, inspectExport, inspectBackground, inspectRuledPaper, type UploadIssue } from '../utils/uploadValidation';
import { takeBackgroundTransfer, TRANSFER_HASH, type BackgroundTransfer, type BackgroundMode } from '../utils/backgroundTransfer';
import { trackBackgroundEvent } from '../utils/backgroundEvents';

const SignaturePadModal = lazy(() => import('./SignaturePadModal').then((module) => ({ default: module.SignaturePadModal })));

export const MODE_CONFIG: Record<ToolTargetMode, {
  noun: string;
  shortNoun: string;
  plural: string;
  dropzoneTitle: string;
  dropzoneSub: string;
  uploadBtn: string;
  sampleBtn: string;
  batchSampleBtn: string;
  batchEmptyTitle: string;
  batchEmptyDesc: string;
  batchSelectBtn: string;
  autoFitBtn: string;
  autoFitTitle: string;
  previewAlt: string;
  previewSubtitle: string;
  previewSimulatedLabel: string;
  awaitingText: string;
  downloadReady: (size: number, ext: string) => string;
  downloadEmpty: string;
  filePrefix: string;
  downloadToast: string;
  copyToast: string;
  studioCanvasTitle: string;
  filtersSubtitle: string;
  cleanFilterTitle: string;
  cleanFilterSub: string;
  bwFilterTitle: string;
  bwFilterSub: string;
  inspectorTitle: string;
  inspectorDesc: string;
  ratios: Array<{ ratio: number | 'free'; label: string; title: string }>;
  pinnedTitle: string;
  searchPlaceholder: string;
  morePresetsLabel: string;
}> = {
  signature: {
    noun: 'Signature',
    shortNoun: 'Sign',
    plural: 'signatures',
    dropzoneTitle: 'Drop your signature image here',
    dropzoneSub: 'Auto-configured for official signature slot',
    uploadBtn: 'Upload Signature',
    sampleBtn: 'Test Sample',
    batchSampleBtn: 'Sample Signs',
    batchEmptyTitle: 'No signatures in batch queue',
    batchEmptyDesc: 'Upload up to 10 image files simultaneously, or test immediately with 3 sample signatures.',
    batchSelectBtn: 'Select up to 10 Signatures',
    autoFitBtn: 'Auto-Fit Signature',
    autoFitTitle: 'Automatically locate signature strokes and wrap crop tightly',
    previewAlt: 'Processed Signature Preview',
    previewSubtitle: 'Simulated paper output view with high-contrast ink sync.',
    previewSimulatedLabel: 'Sample Signature',
    awaitingText: 'Awaiting signature upload...',
    downloadReady: (size: number, ext: string) => `Download Resized Signature (${size} KB ${ext.toUpperCase()})`,
    downloadEmpty: 'Upload Signature to Download',
    filePrefix: 'signature_',
    downloadToast: 'Signature Downloaded',
    copyToast: 'Signature copied to clipboard',
    studioCanvasTitle: 'Interactive Studio Canvas (Signature):',
    filtersSubtitle: 'Real-time Paper Cleanup',
    cleanFilterTitle: 'Clean White Paper',
    cleanFilterSub: 'Blows out yellow/gray photo shadows',
    bwFilterTitle: 'Pure Black & White Mode',
    bwFilterSub: 'High-contrast dense ink lines',
    inspectorTitle: 'Signature Quality & Pixel Inspector',
    inspectorDesc: 'Inspect ink edge definition, stroke contrast, and portal compliance at magnified zoom.',
    ratios: [
      { ratio: 140 / 60, label: '7:3', title: '7:3 crop ratio (use your selected exam preset when required)' },
      { ratio: 1, label: '1:1', title: 'Square 1:1 (UPSC / Thumb Impression)' },
      { ratio: 'free', label: 'Freeform', title: 'Freeform Crop' }
    ],
    pinnedTitle: 'Top Signature Specs:',
    searchPlaceholder: 'Search 30+ signature exams (e.g. SSC, UPSC, GATE, PAN)...',
    morePresetsLabel: 'More Exams (30+)',
  },
  photo: {
    noun: 'Passport Photo',
    shortNoun: 'Photo',
    plural: 'photos',
    dropzoneTitle: 'Drop your passport photo here',
    dropzoneSub: 'Auto-configured for passport photo slot',
    uploadBtn: 'Upload Photo',
    sampleBtn: 'Test Sample Photo',
    batchSampleBtn: 'Sample Photos',
    batchEmptyTitle: 'No photos in batch queue',
    batchEmptyDesc: 'Upload up to 10 photo headshots simultaneously, or test immediately with 3 sample photos.',
    batchSelectBtn: 'Select up to 10 Photos',
    autoFitBtn: 'Center Face Crop',
    autoFitTitle: 'Center and align candidate portrait to passport aspect ratio',
    previewAlt: 'Processed Passport Photo Preview',
    previewSubtitle: 'Simulated passport print preview with facial centering.',
    previewSimulatedLabel: 'Passport Photo',
    awaitingText: 'Awaiting passport photo upload...',
    downloadReady: (size: number, ext: string) => `Download Resized Photo (${size} KB ${ext.toUpperCase()})`,
    downloadEmpty: 'Upload Photo to Download',
    filePrefix: 'photo_',
    downloadToast: 'Passport Photo Downloaded',
    copyToast: 'Photo copied to clipboard',
    studioCanvasTitle: 'Interactive Studio Canvas (Passport Photo):',
    filtersSubtitle: 'Studio Tone & Lighting Adjustment',
    cleanFilterTitle: 'Clean Background Lighting',
    cleanFilterSub: 'Even lighting across face & background',
    bwFilterTitle: 'Monochrome Grayscale',
    bwFilterSub: 'Black & white passport format (if required)',
    inspectorTitle: 'Photo Quality & Face Alignment Inspector',
    inspectorDesc: 'Inspect face clarity, eye level, lighting, and passport border margins at magnified zoom.',
    ratios: [
      { ratio: 3.5 / 4.5, label: '3.5:4.5', title: '3.5 × 4.5 cm Passport Standard (SSC / IBPS / RRB / NEET)' },
      { ratio: 1, label: '1:1', title: 'Square 1:1 (UPSC Photo / PAN Card Photo)' },
      { ratio: 'free', label: 'Freeform', title: 'Freeform Crop' }
    ],
    pinnedTitle: 'Top Photo Formats:',
    searchPlaceholder: 'Search photo formats (e.g. SSC, UPSC, NEET, IBPS)...',
    morePresetsLabel: 'More Photo Presets (20+)',
  },
  document: {
    noun: 'Document / Certificate',
    shortNoun: 'Document',
    plural: 'documents',
    dropzoneTitle: 'Drop your marksheet, certificate or document here',
    dropzoneSub: 'Auto-configured for certificate / document upload',
    uploadBtn: 'Upload Document',
    sampleBtn: 'Test Sample Document',
    batchSampleBtn: 'Sample Documents',
    batchEmptyTitle: 'No documents in batch queue',
    batchEmptyDesc: 'Upload up to 10 document scans or certificates simultaneously, or test immediately with 3 sample docs.',
    batchSelectBtn: 'Select up to 10 Documents',
    autoFitBtn: 'Auto-Fit Document',
    autoFitTitle: 'Fit document edges and remove border margins',
    previewAlt: 'Processed Document Preview',
    previewSubtitle: 'Simulated certificate scan view with crystal clear text & stamps.',
    previewSimulatedLabel: 'Marksheet / Certificate',
    awaitingText: 'Awaiting document upload...',
    downloadReady: (size: number, ext: string) => `Download Resized Document (${size} KB ${ext.toUpperCase()})`,
    downloadEmpty: 'Upload Document to Download',
    filePrefix: 'document_',
    downloadToast: 'Document Downloaded',
    copyToast: 'Document copied to clipboard',
    studioCanvasTitle: 'Interactive Studio Canvas (Document / Marksheet):',
    filtersSubtitle: 'Scanned Document & Ink Clarity',
    cleanFilterTitle: 'Remove Scanner Shadows',
    cleanFilterSub: 'Flattens scanned page lighting & creases',
    bwFilterTitle: 'Document High-Contrast B&W',
    bwFilterSub: 'Sharp black text for OCR portal verification',
    inspectorTitle: 'Document Legibility & Seal Inspector',
    inspectorDesc: 'Inspect text legibility, stamp seals, roll numbers, and official signatures at magnified zoom.',
    ratios: [
      { ratio: 700 / 990, label: 'A4', title: 'A4 Portrait Standard (Marksheet / Certificate / Degree)' },
      { ratio: 3 / 4, label: '3:4', title: '3:4 Standard Certificate Ratio' },
      { ratio: 1, label: '1:1', title: 'Square 1:1 (ID Proof / Card Scan)' },
      { ratio: 'free', label: 'Freeform', title: 'Freeform Crop' }
    ],
    pinnedTitle: 'Top Document Types:',
    searchPlaceholder: 'Search document types (e.g. Marksheet, Caste, Aadhaar)...',
    morePresetsLabel: 'More Document Formats (15+)',
  }
};

const PRESET_ALIASES: Record<string, string> = {
  ssc: 'ssc-cgl',
  'ssc-cgl': 'ssc-cgl',
  'ssc_cgl': 'ssc-cgl',
  cgl: 'ssc-cgl',
  'ssc-cgl-signature': 'ssc-cgl',
  'ssc-cgl-sign': 'ssc-cgl',
  'ssc-cgl-sig': 'ssc-cgl',
  'ssc-cgl-photo': 'ssc-cgl-photo',
  'ssc-photo': 'ssc-cgl-photo',
  'ssc-photo-resize': 'ssc-cgl-photo',
  'ssc-general': 'ssc-general',
  ibps: 'ibps-sbi',
  upsc: 'upsc-civil-services',
  rrb: 'rrb-railway',
  neet: 'nta-neet-jee',
  pan: 'pan-card-nsdl',
  'pan-card-photo': 'pan-card-photo-nsdl',
  'pan-card-photo-nsdl-preset': 'pan-card-photo-nsdl',
  'pan-photo': 'pan-card-photo-nsdl',
  sarathi: 'sarathi-dl',
  'sarathi-dl': 'sarathi-dl',
  'sarathi-photo': 'sarathi-photo',
  parivahan: 'sarathi-dl',
  'parivahan-photo': 'sarathi-photo',
  ib: 'ib-acio',
  'ib-acio': 'ib-acio',
  'ib-acio-photo': 'ib-acio-photo',
  gds: 'india-post-gds-signature',
  'india-post': 'india-post-gds-signature',
  'india-post-gds': 'india-post-gds-signature',
  'india-post-gds-photo': 'india-post-gds-photo',
  'dsssb': 'dsssb-preset',
  'dsssb-preset': 'dsssb-preset',
  'dsssb-photo': 'dsssb-photo',
  'kerala-psc': 'kerala-psc-signature',
  'kerala-psc-sign': 'kerala-psc-signature',
  'kerala-psc-signature': 'kerala-psc-signature',
  'kerala-psc-photo': 'kerala-psc-photo',
  gate: 'gate-jam',
  'gate-signature': 'gate-jam',
  'gate-photo': 'gate-photo',
  sbi: 'sbi-signature',
  jam: 'iit-jam',
  'iit-jam': 'iit-jam',
  'iit-jam-photo': 'iit-jam-photo',
  'cuet': 'cuet-ug',
  'cuet-ug': 'cuet-ug',
  'cuet-photo': 'cuet-ug-photo',
  'cuet-ug-photo': 'cuet-ug-photo',
  'upsssc': 'upsssc-pet',
  'upsssc-pet': 'upsssc-pet',
  'upsssc-photo': 'upsssc-pet-photo',
  'upsssc-pet-photo': 'upsssc-pet-photo',
  'bssc': 'bssc-inter-level',
  'bssc-inter-level': 'bssc-inter-level',
  'bssc-photo': 'bssc-photo',
  'ctet': 'ctet-exam',
  'ctet-exam': 'ctet-exam',
  'ctet-signature': 'ctet-exam',
  'ctet-photo': 'ctet-photo',
  'ssc-mts': 'ssc-mts',
  thumb: 'thumb-impression-general',
  afcat: 'afcat-iaf',
  agniveer: 'agniveer-recruitment',
  coastguard: 'indian-coast-guard',
  wbpsc: 'wbpsc-west-bengal',
  'wbpsc-west-bengal': 'wbpsc-west-bengal',
  'wbpsc-signature': 'wbpsc-west-bengal',
  'wbpsc-sign': 'wbpsc-west-bengal',
  wbcs: 'wbpsc-west-bengal',
  'wbcs-signature': 'wbpsc-west-bengal',
  'wbpsc-photo': 'wbpsc-photo',
  'wbcs-photo': 'wbpsc-photo',
  'wbpsc-doc': 'wbpsc-document',
  'wbpsc-document': 'wbpsc-document',
  'wbpsc-138x59': 'wbpsc-signature-138x59',
  'wbpsc-signature-138x59': 'wbpsc-signature-138x59',
  cat: 'cat-iim',
  clat: 'clat-law',
  uppsc: 'uppsc',
  bpsc: 'bpsc',
  mpsc: 'mpsc',
  tnpsc: 'tnpsc',
  rbi: 'rbi-grade-b',
  police: 'maharashtra-police',
  mahapolice: 'maharashtra-police',
  'maharashtra-police': 'maharashtra-police',
  'up-police': 'up-police',
  uppolice: 'up-police',
  teletalk: 'teletalk-bd',
  // Pakistan aliases
  ppsc: 'ppsc-pk',
  'ppsc-pk': 'ppsc-pk',
  'ppsc-photo': 'ppsc-pk',
  'ppsc-sign': 'ppsc-sign-pk',
  fpsc: 'fpsc-pk',
  'fpsc-pk': 'fpsc-pk',
  'fpsc-photo': 'fpsc-pk',
  'fpsc-sign': 'fpsc-sign-pk',
  css: 'css-pk',
  'css-pk': 'css-pk',
  'css-exam': 'css-pk',
  'css-sign': 'css-sign-pk',
  nts: 'nts-pk',
  'nts-pk': 'nts-pk',
  'nts-sign': 'nts-sign-pk',
  nadra: 'nadra-pk',
  'nadra-pk': 'nadra-pk',
  'nadra-passport': 'nadra-pk',
  'nadra-cnic': 'nadra-pk',
  cnic: 'nadra-pk',
  pakistan: 'nadra-pk',
  prc: 'prc-ph',
  loksewa: 'loksewa-np',
  // Indonesia aliases
  cpns: 'id-cpns',
  sscasn: 'id-cpns',
  bkn: 'id-cpns',
  swafoto: 'id-cpns',
  pasfoto: 'id-cpns',
  utbk: 'id-utbk',
  snbt: 'id-utbk',
  snpmb: 'id-utbk',
  paspor: 'id-passport',
  'id-cpns': 'id-cpns',
  'id-utbk': 'id-utbk',
  'id-passport': 'id-passport',
  // NICL AO & Insurance aliases
  nicl: 'nicl-ao',
  'nicl-ao': 'nicl-ao',
  'nicl-photo': 'nicl-ao-photo',
  'nicl-thumb': 'nicl-left-thumb',
  declaration: 'handwritten-declaration'
};

const GENERIC_DOC_PRESET_IDS = new Set<string>([
  'marksheet-10th',
  'marksheet-12th',
  'caste-certificate',
  'domicile-certificate',
  'id-proof-card',
  'thumb-impression-doc',
  'pwd-certificate',
  'degree-certificate'
]);

const findPresetByKey = (key: string): ExamPreset | undefined => {
  const norm = key.toLowerCase().trim();
  const aliasId = PRESET_ALIASES[norm] || norm;
  return (
    ALL_COMBINED_PRESETS.find((p) => p.id.toLowerCase() === aliasId) ||
    ALL_COMBINED_PRESETS.find((p) => p.shortCode.toLowerCase() === norm) ||
    ALL_COMBINED_PRESETS.find((p) => p.id.toLowerCase().includes(norm))
  );
};

export interface SignatureToolProps {
  initialPresetId?: string;
  defaultPresetId?: string;
  initialMode?: ToolTargetMode;
  initialLang?: SupportedLang;
  initialNameDateStamp?: boolean;
  compactStudio?: boolean;
  studioModeTabs?: boolean;
  focusedWorkspace?: boolean;
}

export const SignatureTool: React.FC<SignatureToolProps> = ({ initialPresetId, defaultPresetId, initialMode = 'signature', initialLang, initialNameDateStamp = false, compactStudio = false, studioModeTabs = !compactStudio, focusedWorkspace = false }) => {
  const effectivePresetPropId = initialPresetId || defaultPresetId;
  // Multilingual Support ('en' | 'hi' | 'mr')
  const [lang, setLang] = useState<SupportedLang>(() => {
    if (initialLang) return initialLang;
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/hi/') || path === '/hi') return 'hi';
      if (path.startsWith('/mr/') || path === '/mr') return 'mr';
      const saved = localStorage.getItem('signresize_lang');
      if (saved === 'hi' || saved === 'mr' || saved === 'en') return saved as SupportedLang;
    }
    return 'en';
  });

  useEffect(() => {
    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ lang: SupportedLang }>;
      if (customEvent.detail && customEvent.detail.lang) {
        setLang(customEvent.detail.lang);
      }
    };
    window.addEventListener('signresize-lang-change', handleLangChange);
    return () => window.removeEventListener('signresize-lang-change', handleLangChange);
  }, []);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  // Determine initial preset from prop or URL query parameter (?preset=id) if provided
  const getPresetFromUrl = () => {
    if (typeof window === 'undefined') return null;
    const urlParams = new URLSearchParams(window.location.search);
    const pId = urlParams.get('preset');
    if (!pId) return null;
    return findPresetByKey(pId) || ALL_COMBINED_PRESETS.find(p => p.id === pId || p.shortCode.toLowerCase() === pId.toLowerCase()) || null;
  };
  const resolvedPreset = useMemo(() => (effectivePresetPropId && findPresetByKey(effectivePresetPropId)) || getPresetFromUrl(), [effectivePresetPropId]);
  const effectiveInitialMode = resolvedPreset?.targetType || (resolvedPreset ? presetMode(resolvedPreset) : initialMode);

  // Determine target tool mode: 'signature' | 'photo' | 'document'
  const [targetType, setTargetType] = useState<ToolTargetMode>(effectiveInitialMode);
  const modeConfig = MODE_CONFIG[targetType];

  const defaultList = effectiveInitialMode === 'photo' ? PHOTO_PRESETS : effectiveInitialMode === 'document' ? DOCUMENT_PRESETS : SIGNATURE_PRESETS;
  const initialPreset = resolvedPreset || defaultList[0];

  // Photo-specific configuration
  const [showFaceGuide, setShowFaceGuide] = useState<boolean>(true);
  const [addNameDateStamp, setAddNameDateStamp] = useState<boolean>(() => initialNameDateStamp || Boolean(initialPreset?.requiresNameDate));
  const [candidateName, setCandidateName] = useState<string>('');
  const [dateOfPhoto, setDateOfPhoto] = useState<string>(() => {
    const d = new Date();
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  });

  // Collapsible tool card visibility state
  const [showComplianceTools, setShowComplianceTools] = useState<boolean>(true);
  const [showEnhancementFilters, setShowEnhancementFilters] = useState<boolean>(true);
  const [showDocScannerTools, setShowDocScannerTools] = useState<boolean>(true);

  // Document-specific configuration
  const [documentHighContrast, setDocumentHighContrast] = useState<boolean>(true);

  // Mode state: 'single' or 'batch'
  const [toolMode, setToolMode] = useState<'single' | 'batch'>('single');
  const [studioAdvanced, setStudioAdvanced] = useState(false);
  const [slateConfirmed, setSlateConfirmed] = useState(false);
  const [upssscConfirmed, setUpssscConfirmed] = useState(false);
  const [backgroundIssues, setBackgroundIssues] = useState<UploadIssue[] | null>(null);


  // Helper to reliably detect image files (including HEIC, JFIF, and cases where OS mime type is empty)
  const isSupportedImageFile = useCallback((file: File): boolean => {
    if (file.type && file.type.startsWith('image/')) return true;
    const ext = file.name.toLowerCase().split('.').pop() || '';
    return ['jpg', 'jpeg', 'png', 'webp', 'jfif', 'bmp', 'gif', 'svg', 'heic', 'heif', 'tiff', 'tif'].includes(ext);
  }, []);

  // Single Image state
  const [sourceImage, setSourceImage] = useState<HTMLImageElement | null>(null);
  const [sourceFileName, setSourceFileName] = useState<string>('signature');
  const [sourceOriginalSize, setSourceOriginalSize] = useState<number>(0);
  const [sourceFileType, setSourceFileType] = useState('');
  const [uploadError, setUploadError] = useState('');
  const [backgroundTransferNotice, setBackgroundTransferNotice] = useState('');
  const backgroundTransferMode = useRef<BackgroundMode | null>(null);
  const backgroundTransferRequest = useRef<Promise<BackgroundTransfer> | null>(null);
  const [showExportChecks, setShowExportChecks] = useState(false);
  const [sourceDimensions, setSourceDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const [isSampleImage, setIsSampleImage] = useState<boolean>(false);

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

  const loadSampleGenerators = useCallback(async () => {
    try {
      return await import('../utils/sampleImages');
    } catch {
      addToast('Could not load sample images. Please try again.', 'Sample images', 'warning');
      return null;
    }
  }, [addToast]);

  // Preset state
  const [selectedPreset, setSelectedPreset] = useState<ExamPreset | null>(initialPreset);
  const activeExamFamilyRef = useRef<string>(
    (effectivePresetPropId || resolvedPreset?.id || initialPresetId || initialPreset?.id || 'ssc-cgl').toLowerCase()
  );

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
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);

  // Global Transformation settings (Applies in Batch & Single mode)
  const [rotation, setRotation] = useState<number>(0);
  const [flipH, setFlipH] = useState<boolean>(false);
  const [flipV, setFlipV] = useState<boolean>(false);

  // Global Filters & Paper Cleaning
  const [filters, setFilters] = useState<FilterOptions>({
    cleanPaper: effectiveInitialMode === 'signature',
    brightness: 0,
    contrast: effectiveInitialMode === 'document' ? 20 : effectiveInitialMode === 'photo' ? 10 : 15,
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
  const dragRafRef = useRef<number | null>(null);
  const dragBoundsRef = useRef<DOMRect | null>(null);
  const sourceObjectUrlRef = useRef<string | null>(null);
  const uploadSequenceRef = useRef(0);
  const processingSequenceRef = useRef(0);

  const [processedResult, setProcessedResult] = useState<ProcessedImageResult | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isDrawingPadOpen, setIsDrawingPadOpen] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  // New: Advanced Preview & Cropper UX States
  const [cropperZoom, setCropperZoom] = useState<number>(1);
  const [previewBg, setPreviewBg] = useState<'white' | 'checker'>('white');
  const [previewScale, setPreviewScale] = useState<number>(1);
  const [isInspectModalOpen, setIsInspectModalOpen] = useState<boolean>(false);
  const [inspectZoom, setInspectZoom] = useState<number>(2);
  const [inspectTab, setInspectTab] = useState<'processed' | 'original' | 'split'>('processed');

  // Inline preset browser stays open until explicitly closed.
  const [isExamDropdownOpen, setIsExamDropdownOpen] = useState<boolean>(false);
  const [comboboxSearch, setComboboxSearch] = useState<string>('');
  const [hasDownloaded, setHasDownloaded] = useState<boolean>(false);
  const [downloadedFileName, setDownloadedFileName] = useState('');
  const [showCtetStrategyTip, setShowCtetStrategyTip] = useState<boolean>(true);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'International & Passports': true,
    'Management & MBA': true,
    'Banking & Financial': true,
    'Civil Services / UPSC': true,
    'Engineering & Medical': true,
    'Staff Selection (SSC) & Railways': true
  });
  const comboboxRef = useRef<HTMLDivElement | null>(null);
  const initializedPresetSourceRef = useRef<string | null>(null);

  // Non-blocking batch sync timer ref
  const batchSyncTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Target dimensions in PX
  const targetWidthPx = Math.max(10, convertUnits(width, unit, 'px', dpi));
  const targetHeightPx = Math.max(10, convertUnits(height, unit, 'px', dpi));
  const exportRule = { widthPx: targetWidthPx, heightPx: targetHeightPx, minKb, maxKb, format: targetFormat.split('/')[1].toUpperCase() };

  useEffect(() => {
    if (compactStudio || (!sourceImage && !uploadError)) return;
    const frame = requestAnimationFrame(() => document.getElementById('upload-feedback')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    return () => cancelAnimationFrame(frame);
  }, [sourceImage, uploadError, compactStudio]);

  // Apply an exam preset
  const applyPreset = useCallback((preset: ExamPreset) => {
    setSelectedPreset(preset);
    if (!GENERIC_DOC_PRESET_IDS.has(preset.id)) {
      activeExamFamilyRef.current = preset.id.toLowerCase();
    }
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
    setSlateConfirmed(false);
    setUpssscConfirmed(false);
    setBackgroundIssues(null);

    const effectiveMode = preset.targetType || presetMode(preset);
    setTargetType(effectiveMode);
    if (backgroundTransferMode.current) {
      setFilters({ cleanPaper: false, brightness: 0, contrast: 0, blackAndWhite: false, threshold: 160 });
    } else if (effectiveMode === 'photo') {
      setFilters(prev => ({ ...prev, cleanPaper: false, contrast: 10 }));
    } else if (effectiveMode === 'document') {
      setFilters(prev => ({ ...prev, cleanPaper: false, contrast: 20 }));
    } else {
      setFilters(prev => ({ ...prev, cleanPaper: true, contrast: 15 }));
    }

    if (preset.requiresNameDate) {
      setAddNameDateStamp(true);
    }

    if (sourceImage) {
      initCropBox(sourceImage, preset.aspectRatio);
    }

    // Automatically close the preset selection pop-up upon picking any preset
    setIsExamDropdownOpen(false);

    if (!focusedWorkspace) addToast(
      `Applied ${preset.name} (${preset.widthPx}×${preset.heightPx} px, ${preset.minKb}–${preset.maxKb} KB)`,
      'Preset Applied',
      'success'
    );
  }, [sourceImage, addToast, focusedWorkspace]);

  // Switch Tool Target Mode (Signature / Photo / Document)
  const switchTargetType = useCallback(async (newType: ToolTargetMode) => {
    setTargetType(newType);
    const presets = newType === 'photo' ? PHOTO_PRESETS : newType === 'document' ? DOCUMENT_PRESETS : SIGNATURE_PRESETS;
    
    // Auto-map to current exam family (e.g. IIT JAM, GATE, NICL AO, Coast Guard, SSC, UPSC, RRB, Banking)
    const rawCurId = (selectedPreset?.id || '').toLowerCase();
    const isGenericDoc = GENERIC_DOC_PRESET_IDS.has(rawCurId);

    // Persistent anchor ensures switching to Document mode and returning does not lose the active exam context
    const examAnchor = (!isGenericDoc && rawCurId)
      ? rawCurId
      : (activeExamFamilyRef.current || (effectivePresetPropId || resolvedPreset?.id || initialPresetId || '').toLowerCase());

    const curName = (selectedPreset?.name || resolvedPreset?.name || '').toLowerCase();
    const curAuth = (selectedPreset?.authority || resolvedPreset?.authority || '').toLowerCase();

    const matchesExam = (...tokens: string[]) => {
      return tokens.some(token => {
        const t = token.toLowerCase();
        return examAnchor.includes(t) || rawCurId.includes(t) || curName.includes(t) || curAuth.includes(t);
      });
    };

    let targetPreset: ExamPreset | undefined;

    const isGate = examAnchor.includes('gate') || rawCurId.includes('gate') || curName.includes('gate') || curAuth.includes('gate');
    const isJam = !isGate && (
      examAnchor.includes('iit-jam') ||
      examAnchor.startsWith('jam') ||
      rawCurId.includes('iit-jam') ||
      curName.includes('jam') ||
      curAuth.includes('jam') ||
      curAuth.includes('kharagpur')
    );

    // 1. IIT JAM (JOAPS)
    if (isJam) {
      if (newType === 'signature') {
        targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'iit-jam') || SIGNATURE_PRESETS.find(p => p.id === 'iit-jam-2026');
      } else if (newType === 'photo') {
        targetPreset = PHOTO_PRESETS.find(p => p.id === 'iit-jam-photo');
      } else if (newType === 'document') {
        targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'caste-certificate') || DOCUMENT_PRESETS.find(p => p.id === 'degree-certificate');
      }
    }
    // 2. GATE (GOAPS)
    else if (isGate) {
      if (newType === 'signature') {
        targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'gate-jam');
      } else if (newType === 'photo') {
        targetPreset = PHOTO_PRESETS.find(p => p.id === 'gate-photo');
      } else if (newType === 'document') {
        targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'degree-certificate') || DOCUMENT_PRESETS.find(p => p.id === 'caste-certificate');
      }
    }
    // 3. Indian Coast Guard
    else if (matchesExam('coast-guard', 'coast guard')) {
      if (newType === 'signature') {
        targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'indian-coast-guard');
      } else if (newType === 'photo') {
        targetPreset = PHOTO_PRESETS.find(p => p.id === 'indian-coast-guard-photo');
      } else if (newType === 'document') {
        targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'indian-coast-guard-thumb-doc' || p.id === 'indian-coast-guard-document');
      }
    }
    // 4. NICL AO & Insurance
    else if (matchesExam('nicl') || examAnchor === 'handwritten-declaration' || examAnchor === 'nicl-left-thumb') {
      if (newType === 'signature') {
        targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'nicl-ao') || SIGNATURE_PRESETS.find(p => p.id === 'ibps-sbi');
      } else if (newType === 'photo') {
        targetPreset = PHOTO_PRESETS.find(p => p.id === 'nicl-ao-photo') || PHOTO_PRESETS.find(p => p.id === 'ibps-photo');
      } else if (newType === 'document') {
        targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'handwritten-declaration') || DOCUMENT_PRESETS.find(p => p.id === 'nicl-left-thumb');
      }
    }
    // 5. Banking: IBPS & SBI
    else if (matchesExam('ibps', 'sbi', 'banking personnel')) {
      if (newType === 'signature') {
        if (examAnchor.includes('po')) targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'sbi-po') || SIGNATURE_PRESETS.find(p => p.id === 'ibps-sbi');
        else if (examAnchor.includes('clerk')) targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'sbi-clerk') || SIGNATURE_PRESETS.find(p => p.id === 'ibps-clerk');
        else targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'sbi-signature') || SIGNATURE_PRESETS.find(p => p.id === 'ibps-sbi');
      } else if (newType === 'photo') {
        targetPreset = PHOTO_PRESETS.find(p => p.id === 'ibps-photo') || PHOTO_PRESETS.find(p => p.id === 'ibps-sbi-photo');
      } else if (newType === 'document') {
        targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'handwritten-declaration') || DOCUMENT_PRESETS.find(p => p.id === 'thumb-impression-doc');
      }
    }
    // 6. UPSC (Civil Services, CDS, NDA)
    else if (matchesExam('upsc', 'union public service')) {
      if (newType === 'signature') {
        targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'upsc-civil-services');
      } else if (newType === 'photo') {
        targetPreset = PHOTO_PRESETS.find(p => p.id === 'upsc-photo');
      } else if (newType === 'document') {
        targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'id-proof-card' || p.id === 'degree-certificate');
      }
    }
    // 7. BSSC (Bihar Staff Selection Commission)
    else if (matchesExam('bssc')) {
      if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'bssc-inter-level' || p.id.includes('bssc'));
      else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'bssc-photo');
      else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th');
    }
    // 8. UPSSSC (PET / Lekhpal / VDO)
    else if (matchesExam('upsssc')) {
      if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'upsssc-pet');
      else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'upsssc-pet-photo');
      else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th');
    }
    // 9. DSSSB (Delhi Subordinate Services)
    else if (matchesExam('dsssb')) {
      if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'dsssb-preset' || p.id.includes('dsssb'));
      else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'dsssb-photo');
      else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'degree-certificate' || p.id === 'marksheet-10th');
    }
    // 10. Kerala PSC (Thulasi OTR)
    else if (matchesExam('kerala-psc', 'kerala psc', 'thulasi')) {
      if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'kerala-psc-signature');
      else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'kerala-psc-photo');
      else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th' || p.id === 'caste-certificate');
    }
    // 11. CUET (Common University Entrance Test - NTA)
    else if (matchesExam('cuet')) {
      if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'cuet-ug' || p.id.includes('cuet'));
      else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'cuet-ug-photo' || p.id.includes('cuet'));
      else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th' || p.id === 'caste-certificate');
    }
    // 12. CTET / Teacher Eligibility Test
    else if (matchesExam('ctet', 'tet')) {
      if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'ctet-exam' || p.id === 'ctet-signature' || p.id === 'ctet');
      else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'ctet-photo');
      else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th' || p.id === 'degree-certificate');
    }
    // 13. Sarathi Parivahan (Driving Licence & Learner Licence)
    else if (matchesExam('sarathi', 'parivahan', 'driving licence', 'learner licence', 'driving license')) {
      if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'sarathi-dl');
      else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'sarathi-photo');
      else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'id-proof-card' || p.id === 'domicile-certificate');
    }
    // 14. Intelligence Bureau (IB ACIO / Security Assistant)
    else if (matchesExam('ib-acio', 'intelligence bureau', 'mha ib', 'acio')) {
      if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'ib-acio');
      else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'ib-acio-photo');
      else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'caste-certificate' || p.id === 'degree-certificate');
    }
    // 15. India Post GDS (Gramin Dak Sevak)
    else if (matchesExam('india-post', 'indiapost', 'gds', 'gramin dak')) {
      if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'india-post-gds-signature' || p.id.includes('gds'));
      else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'india-post-gds-photo' || p.id.includes('gds'));
      else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th');
    }
    // 16. PAN Card
    else if (matchesExam('pan-card', 'pan card', 'utiitsl', 'nsdl')) {
      if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'pan-card-nsdl');
      else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'pan-card-photo-nsdl' || p.id === 'pan-card-photo-nsdl-preset');
      else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'id-proof-card');
    }
    // 17. Staff Selection Commission (Central SSC)
    else if (!matchesExam('bssc', 'upsssc', 'osssc', 'hssc', 'jssc') && (matchesExam('staff selection commission') || examAnchor.startsWith('ssc') || rawCurId.startsWith('ssc') || curName.toLowerCase().startsWith('ssc'))) {
      if (newType === 'signature') {
        targetPreset = (examAnchor.startsWith('ssc') ? SIGNATURE_PRESETS.find(p => p.id === examAnchor) : undefined) || SIGNATURE_PRESETS.find(p => p.id === 'ssc-cgl') || SIGNATURE_PRESETS.find(p => p.id === 'ssc-general');
      } else if (newType === 'photo') {
        targetPreset = (examAnchor.includes('photo') && examAnchor.startsWith('ssc') ? PHOTO_PRESETS.find(p => p.id === examAnchor) : undefined) || PHOTO_PRESETS.find(p => p.id === 'ssc-cgl-photo') || PHOTO_PRESETS.find(p => p.id === 'ssc-photo');
      } else if (newType === 'document') {
        targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th' || p.id === 'thumb-impression-doc');
      }
    }
    // 18. Railway Recruitment Boards (RRB)
    else if (matchesExam('rrb', 'railway recruitment', 'railway')) {
      if (newType === 'signature') {
        targetPreset = (examAnchor.includes('alp') ? SIGNATURE_PRESETS.find(p => p.id === 'rrb-alp-technician') : undefined) || SIGNATURE_PRESETS.find(p => p.id === 'rrb-railway');
      } else if (newType === 'photo') {
        targetPreset = (examAnchor.includes('group-d') ? PHOTO_PRESETS.find(p => p.id === 'rrb-group-d-photo') : undefined) || PHOTO_PRESETS.find(p => p.id === 'rrb-photo');
      } else if (newType === 'document') {
        targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'caste-certificate' || p.id === 'thumb-impression-doc');
      }
    }
    // 19. AFCAT & Defence (IAF, Agniveer, CAPF)
    else if (matchesExam('afcat', 'agniveer', 'capf', 'air force')) {
      if (newType === 'signature') {
        targetPreset = SIGNATURE_PRESETS.find(p => p.id === examAnchor) || SIGNATURE_PRESETS.find(p => p.id === 'afcat-iaf' || p.id === 'agniveer-recruitment');
      } else if (newType === 'photo') {
        targetPreset = PHOTO_PRESETS.find(p => p.id === 'defence-photo');
      } else if (newType === 'document') {
        targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'thumb-impression-doc' || p.id === 'marksheet-10th');
      }
    }
    // 20. State Police Bharti (Maharashtra, UP, Rajasthan, Bihar, MP)
    else if (matchesExam('police')) {
      if (examAnchor.includes('maharashtra') || examAnchor.includes('mahapolice')) {
        if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'maharashtra-police');
        else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'maharashtra-police-photo');
        else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'domicile-certificate');
      } else if (examAnchor.includes('up-police') || examAnchor.includes('uppolice')) {
        if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'up-police');
        else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'up-police-photo');
        else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th');
      } else if (examAnchor.includes('rajasthan')) {
        if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'rajasthan-police-sig');
        else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'rajasthan-police-photo');
        else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'domicile-certificate');
      } else if (examAnchor.includes('bihar')) {
        if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'bihar-police-sig');
        else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'bihar-police-photo');
        else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th');
      } else if (examAnchor.includes('mp-police')) {
        if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'mp-police-sig');
        else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'mp-police-photo');
        else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th');
      }
    }
    // 21. NTA (NEET & JEE Main)
    else if (matchesExam('neet', 'jee', 'nta')) {
      if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'nta-neet-jee');
      else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'neet-photo' || p.id === 'neet-ug-photo');
      else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'thumb-impression-doc' || p.id === 'caste-certificate');
    }
    // 22. WBPSC (West Bengal Public Service Commission - WBCS, Clerkship, Miscellaneous)
    else if (matchesExam('wbpsc', 'wbcs', 'west bengal public service') || examAnchor.includes('wbpsc') || examAnchor.includes('wbcs')) {
      if (newType === 'signature') {
        targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'wbpsc-west-bengal') || SIGNATURE_PRESETS.find(p => p.id === 'wbpsc-signature-138x59');
      } else if (newType === 'photo') {
        targetPreset = PHOTO_PRESETS.find(p => p.id === 'wbpsc-photo');
      } else if (newType === 'document') {
        targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'wbpsc-document') || DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th');
      }
    }
    // 23. State Public Service Commissions (UPPSC, BPSC, MPSC, TNPSC, RPSC, KPSC, OPSC, GPSC, etc.)
    else if (matchesExam('state-psc', 'uppsc', 'bpsc', 'mpsc', 'tnpsc', 'kpsc', 'rpsc', 'gpsc', 'opsc', 'hpsc', 'appsc', 'tspsc', 'apsc', 'mppsc')) {
      if (newType === 'signature') {
        targetPreset = SIGNATURE_PRESETS.find(p => p.id === examAnchor || p.id.includes(examAnchor.replace(/-photo|-sign/g, ''))) ||
          SIGNATURE_PRESETS.find(p => p.id === 'uppsc' || p.id === 'bpsc' || p.id === 'mpsc' || p.id === 'tnpsc');
      } else if (newType === 'photo') {
        targetPreset = PHOTO_PRESETS.find(p => p.id === 'state-psc-photo') || PHOTO_PRESETS.find(p => p.id === 'bssc-photo');
      } else if (newType === 'document') {
        targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'degree-certificate' || p.id === 'domicile-certificate');
      }
    }
    // Fallback: general baseKey and authority matching across active exam context
    else if (examAnchor) {
      const baseKey = examAnchor.replace(/-photo|-sign|-signature|-thumb|-doc|-general|-recruitment|-preset|-dl/g, '');
      targetPreset = presets.find(p => p.id.includes(baseKey) || baseKey.includes(p.id.replace(/-photo|-sign|-signature|-thumb|-doc|-general|-recruitment|-preset|-dl/g, ''))) ||
        (curAuth ? presets.find(p => p.authority && p.authority.toLowerCase() === curAuth) : undefined);
    }

    // Default fallback: Never fall back to UK Visa photo for Indian/general users!
    const defaultPreset = 
      targetPreset || 
      presets.find(p => p.id === examAnchor) ||
      presets.find(p => (!p.country || p.country === 'IN') && p.isPopular) ||
      presets.find(p => !p.country || p.country === 'IN') || 
      presets[0];

    applyPreset(defaultPreset);
    if (newType === 'photo') {
      setLockAspect(true);
      setFilters(prev => ({ ...prev, cleanPaper: false, contrast: 10 }));
    } else if (newType === 'document') {
      setLockAspect(true);
      setFilters(prev => ({ ...prev, cleanPaper: false, contrast: 20 }));
    } else {
      setLockAspect(true);
      setFilters(prev => ({ ...prev, cleanPaper: true, contrast: 15 }));
    }

    // Automatically update active image if it was an artificial sample
    if (sourceImage && isSampleImage) {
      const generators = await loadSampleGenerators();
      if (!generators) return;
      const { createSampleDataForMode } = generators;
      const sample = createSampleDataForMode(newType);
      const img = new Image();
      img.onload = () => {
        if (sourceObjectUrlRef.current) {
          URL.revokeObjectURL(sourceObjectUrlRef.current);
          sourceObjectUrlRef.current = null;
        }
        setIsSampleImage(true);
        setSourceImage(img);
        setSourceFileName(sample.filename);
        setSourceOriginalSize(sample.size);
        setSourceDimensions({ width: sample.width, height: sample.height });
        initCropBox(img, defaultPreset.aspectRatio);
      };
      img.src = sample.dataUrl;
    } else if (sourceImage && !isSampleImage) {
      // Retain real user uploaded photo/signature, just adjust crop to the new mode preset ratio
      initCropBox(sourceImage, defaultPreset.aspectRatio);
    }
  }, [applyPreset, isSampleImage, sourceImage, loadSampleGenerators, focusedWorkspace, selectedPreset, resolvedPreset, initialPresetId, effectivePresetPropId]);

  const isCoastGuardActive = Boolean(
    selectedPreset?.id.includes('coast-guard') ||
    selectedPreset?.name.toLowerCase().includes('coast guard') ||
    selectedPreset?.authority.toLowerCase().includes('coast guard') ||
    (!selectedPreset && (resolvedPreset?.id.includes('coast-guard') || initialPresetId?.includes('coast-guard')))
  );

  const isWbpscActive = Boolean(
    selectedPreset?.id.includes('wbpsc') ||
    selectedPreset?.name.toLowerCase().includes('wbpsc') ||
    selectedPreset?.authority.toLowerCase().includes('wbpsc') ||
    selectedPreset?.name.toLowerCase().includes('wbcs') ||
    resolvedPreset?.id.includes('wbpsc') ||
    initialPresetId?.includes('wbpsc') ||
    initialPresetId?.includes('wbcs')
  );

  const isUpssscActive = Boolean(
    selectedPreset?.id.includes('upsssc') ||
    selectedPreset?.name.toLowerCase().includes('upsssc') ||
    selectedPreset?.authority.toLowerCase().includes('upsssc') ||
    resolvedPreset?.id.includes('upsssc') ||
    initialPresetId?.includes('upsssc') ||
    selectedPreset?.id.includes('pet')
  );

  const selectCoastGuardSection = useCallback((section: 'signature' | 'photo' | 'thumb' | 'document') => {
    if (section === 'signature') {
      const p = SIGNATURE_PRESETS.find(x => x.id === 'indian-coast-guard');
      setTargetType('signature');
      if (p) applyPreset(p);
    } else if (section === 'photo') {
      const p = PHOTO_PRESETS.find(x => x.id === 'indian-coast-guard-photo');
      setTargetType('photo');
      if (p) applyPreset(p);
    } else if (section === 'thumb') {
      const p = DOCUMENT_PRESETS.find(x => x.id === 'indian-coast-guard-thumb-doc') || SIGNATURE_PRESETS.find(x => x.id === 'indian-coast-guard-thumb');
      setTargetType('document');
      if (p) applyPreset(p);
    } else if (section === 'document') {
      const p = DOCUMENT_PRESETS.find(x => x.id === 'indian-coast-guard-document');
      setTargetType('document');
      if (p) applyPreset(p);
    }
  }, [applyPreset]);

  const selectWbpscSection = useCallback((section: 'signature' | 'photo' | 'document' | 'variant') => {
    if (section === 'signature') {
      const p = SIGNATURE_PRESETS.find(x => x.id === 'wbpsc-west-bengal');
      setTargetType('signature');
      if (p) applyPreset(p);
    } else if (section === 'photo') {
      const p = PHOTO_PRESETS.find(x => x.id === 'wbpsc-photo');
      setTargetType('photo');
      if (p) applyPreset(p);
    } else if (section === 'document') {
      const p = DOCUMENT_PRESETS.find(x => x.id === 'wbpsc-document') || DOCUMENT_PRESETS.find(x => x.id === 'marksheet-10th');
      setTargetType('document');
      if (p) applyPreset(p);
    } else if (section === 'variant') {
      const p = SIGNATURE_PRESETS.find(x => x.id === 'wbpsc-signature-138x59');
      setTargetType('signature');
      if (p) applyPreset(p);
    }
  }, [applyPreset]);

  // Apply page/URL defaults once per source, so later selections are retained.
  useEffect(() => {
    const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
    const urlPreset = urlParams?.get('preset');
    const targetId = effectivePresetPropId || urlPreset;
    const sourceKey = targetId || '';
    if (initializedPresetSourceRef.current === sourceKey) return;
    initializedPresetSourceRef.current = sourceKey;

    if (targetId) {
      const matched = findPresetByKey(targetId);
      if (matched && matched.id !== selectedPreset?.id) {
        applyPreset(matched);
      }
    }

    if (urlParams) {
      const filterParam = urlParams.get('filter');
      if (filterParam === 'clean' || filterParam === 'white') {
        setFilters((prev) => ({ ...prev, cleanPaper: true }));
      }
      const formatParam = urlParams.get('format');
      if (formatParam === 'jpg' || formatParam === 'jpeg') {
        setTargetFormat('image/jpeg');
      }
    }

  }, [effectivePresetPropId, applyPreset, selectedPreset?.id]);

  useEffect(() => {
    const handleCustomPresetSelect = (e: Event) => {
      const event = e as CustomEvent<string>;
      const presetId = event.detail;
      if (presetId) {
        const matched = findPresetByKey(presetId);
        if (matched) {
          applyPreset({ ...matched, targetType: presetMode(matched) });
        }
      }
    };

    window.addEventListener('select-exam-preset', handleCustomPresetSelect);

    const handleCoastGuardSection = (e: Event) => {
      const event = e as CustomEvent<'signature' | 'photo' | 'thumb' | 'document'>;
      if (event.detail) {
        selectCoastGuardSection(event.detail);
      }
    };
    window.addEventListener('select-coast-guard-section', handleCoastGuardSection);

    const handleWbpscSection = (e: Event) => {
      const event = e as CustomEvent<'signature' | 'photo' | 'document' | 'variant'>;
      if (event.detail) {
        selectWbpscSection(event.detail);
      }
    };
    window.addEventListener('select-wbpsc-section', handleWbpscSection);

    return () => {
      window.removeEventListener('select-exam-preset', handleCustomPresetSelect);
      window.removeEventListener('select-coast-guard-section', handleCoastGuardSection);
      window.removeEventListener('select-wbpsc-section', handleWbpscSection);
    };
  }, [applyPreset, selectCoastGuardSection, selectWbpscSection]);

  // Initialize crop box to centered aspect ratio
  const initCropBox = (img: HTMLImageElement, targetAspect: number) => {
    const is90or270 = rotation === 90 || rotation === 270;
    const imgW = is90or270 ? img.naturalHeight : img.naturalWidth;
    const imgH = is90or270 ? img.naturalWidth : img.naturalHeight;

    if (targetType === 'signature') {
      const detected = detectSignatureBoundingBox(
        img,
        img.naturalWidth,
        img.naturalHeight,
        rotation,
        flipH,
        flipV,
        0.2
      );
      let cropW = detected.width;
      let cropH = lockAspect ? cropW / targetAspect : detected.height;

      if (lockAspect && cropH < detected.height) {
        cropH = detected.height;
        cropW = cropH * targetAspect;
      }

      if (cropW > imgW) {
        cropW = imgW;
        if (lockAspect) cropH = cropW / targetAspect;
      }
      if (cropH > imgH) {
        cropH = imgH;
        if (lockAspect) cropW = cropH * targetAspect;
      }

      const centerX = detected.x + detected.width / 2;
      const centerY = detected.y + detected.height / 2;

      setCrop({
        x: Math.round(Math.max(0, Math.min(imgW - cropW, centerX - cropW / 2))),
        y: Math.round(Math.max(0, Math.min(imgH - cropH, centerY - cropH / 2))),
        width: Math.round(Math.max(30, cropW)),
        height: Math.round(Math.max(20, cropH))
      });
      return;
    }

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

  // Helper to load a single file instantly using zero-copy Object URL
  const loadSingleImageFile = (file: File, transferredMode?: BackgroundMode) => {
    const sequence = ++uploadSequenceRef.current;
    const error = fileIntakeError(file);
    setUploadError(error || '');
    if (error) {
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      if (sequence !== uploadSequenceRef.current) { URL.revokeObjectURL(objectUrl); return; }
      setIsSampleImage(false);
      setSourceFileName(file.name);
      setSourceOriginalSize(file.size);
      setSourceFileType(file.type);
      setProcessedResult(prev => { if (prev?.dataUrl) URL.revokeObjectURL(prev.dataUrl); return null; });
      if (sourceObjectUrlRef.current) {
        URL.revokeObjectURL(sourceObjectUrlRef.current);
      }
      sourceObjectUrlRef.current = objectUrl;
      setSourceImage(img);
      setSlateConfirmed(false);
      setUpssscConfirmed(false);
      setBackgroundIssues(null);
      setSourceDimensions({ width: img.naturalWidth, height: img.naturalHeight });
      backgroundTransferMode.current = transferredMode || null;
      setBackgroundTransferNotice('');
      if (transferredMode) {
        // A transfer starts at source dimensions. Let the visitor choose the form.
        setTargetType(transferredMode); setSelectedPreset(null); setToolMode('single');
        setWidth(img.naturalWidth); setHeight(img.naturalHeight);
        setWidthInput(String(img.naturalWidth)); setHeightInput(String(img.naturalHeight));
        setUnit('px'); setTargetFormat('image/jpeg'); setRotation(0); setFlipH(false); setFlipV(false);
        setLockAspect(true); setAddNameDateStamp(false); setDocumentHighContrast(false);
        setFilters({ cleanPaper: false, brightness: 0, contrast: 0, blackAndWhite: false, threshold: 160 });
        setCrop({ x: 0, y: 0, width: img.naturalWidth, height: img.naturalHeight });
        const limit = Math.max(100, Math.ceil(file.size / 1024) + 16);
        setMinKb(0); setMaxKb(limit); setMinKbInput('0'); setMaxKbInput(String(limit));
        setBackgroundTransferNotice('Your cleaned image is ready on a white background. Choose an exam preset or set dimensions and KB limits below. Check the crop before downloading.');
        trackBackgroundEvent('resizer_open', transferredMode);
        requestAnimationFrame(() => document.getElementById('tool-workspace')?.scrollIntoView({ block: 'start' }));
      } else {
        const targetAspect = selectedPreset ? selectedPreset.aspectRatio : targetWidthPx / targetHeightPx;
        initCropBox(img, targetAspect);
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      if (sequence === uploadSequenceRef.current) setUploadError('This image could not be decoded. It may be damaged or use an unsupported camera format. Open the original and export it as JPG or PNG, then try again.');
    };
    img.src = objectUrl;
  };

  useEffect(() => {
    if (!location.hash.startsWith(TRANSFER_HASH)) return;
    const id = location.hash.slice(TRANSFER_HASH.length);
    const sequence = uploadSequenceRef.current;
    let active = true;
    backgroundTransferRequest.current ||= takeBackgroundTransfer(id);
    void backgroundTransferRequest.current.then(transfer => {
      if (!active) return;
      history.replaceState(history.state, '', `${location.pathname}${location.search}#tool-workspace`);
      if (sequence !== uploadSequenceRef.current) return; // A newer upload takes priority.
      loadSingleImageFile(new File([transfer.blob], `cleaned-${transfer.mode}.png`, { type: 'image/png' }), transfer.mode);
    }).catch(error => {
      if (!active || sequence !== uploadSequenceRef.current) return;
      history.replaceState(history.state, '', `${location.pathname}${location.search}#tool-workspace`);
      setUploadError(error instanceof Error ? error.message : 'Could not open the transferred image. Return to the background remover and try again.');
    });
    return () => { active = false; };
  }, []);

  // Process incoming files (Handles 1 up to 10 signatures)
  const handleMultipleFiles = (files: FileList | File[]) => {
    backgroundTransferMode.current = null;
    setBackgroundTransferNotice('');
    const incoming = Array.from(files);
    const invalid = incoming.map(file => ({ file, error: fileIntakeError(file) })).filter(item => item.error);
    setUploadError(invalid.map(item => `${item.file.name}: ${item.error}`).join(' '));
    const fileArray = incoming.filter(file => !fileIntakeError(file));

    if (fileArray.length === 0) {
      return;
    }

    // If single file uploaded in single mode, always load directly into single editor
    if (incoming.length === 1 && fileArray.length === 1 && toolMode === 'single') {
      loadSingleImageFile(fileArray[0]);
      return;
    }

    // Batch mode: enforce maximum of 10 signatures
    const availableSlots = 10 - batchItems.length;
    if (availableSlots <= 0) {
      setUploadError('The batch already contains 10 images. Remove an image or clear the batch before adding more.');
      return;
    }

    const filesToLoad = fileArray.slice(0, availableSlots);
    if (fileArray.length > availableSlots) {
      setUploadError(`Only the first ${availableSlots} images were added. The batch limit is 10 images; remove an image before adding more.`);
    }

    // Switch to batch mode
    setToolMode('batch');
    setIsSampleImage(false);

    // Read and load all images into batch state via zero-copy Object URLs
    filesToLoad.forEach((file) => {
      const objectUrl = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        const newItem: BatchSignatureItem = {
          id: `${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
          file,
          fileName: file.name,
          originalSize: file.size,
          image: img,
          sourceUrl: objectUrl,
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
          if (sourceObjectUrlRef.current) {
            URL.revokeObjectURL(sourceObjectUrlRef.current);
          }
          sourceObjectUrlRef.current = objectUrl;
          setIsSampleImage(false);
          setSourceImage(img);
          setSourceFileName(file.name.replace(/\.[^/.]+$/, ''));
          setSourceOriginalSize(file.size);
          setSourceFileType(file.type);
          setSourceDimensions({ width: img.naturalWidth, height: img.naturalHeight });
          initCropBox(img, selectedPreset ? selectedPreset.aspectRatio : targetWidthPx / targetHeightPx);
        }
      };
      img.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        setUploadError(prev => `${prev} ${file.name} could not be decoded. Export it as JPG or PNG and try again.`.trim());
      };
      img.src = objectUrl;
    });
  };

  // Load single sample image (Signature, Passport Photo, or Document)
  const loadSingleSampleSignature = async () => {
    backgroundTransferMode.current = null;
    setBackgroundTransferNotice('');
    uploadSequenceRef.current++;
    setUploadError('');
    setSourceFileType('image/png');
    const generators = await loadSampleGenerators();
    if (!generators) return;
    const { createSampleDataForMode } = generators;
    setIsSampleImage(true);
    const sample = createSampleDataForMode(targetType);
    setSourceFileName(sample.filename);
    setSourceOriginalSize(sample.size);

    const img = new Image();
    img.onload = () => {
      if (sourceObjectUrlRef.current) {
        URL.revokeObjectURL(sourceObjectUrlRef.current);
        sourceObjectUrlRef.current = null;
      }
      setSourceImage(img);
      setSlateConfirmed(false);
      setUpssscConfirmed(false);
      setBackgroundIssues(null);
      setSourceDimensions({ width: sample.width, height: sample.height });
      const targetAspect = selectedPreset ? selectedPreset.aspectRatio : targetWidthPx / targetHeightPx;
      initCropBox(img, targetAspect);
    };
    img.src = sample.dataUrl;
  };

  // Load 3 sample images into Batch Mode for instant multi-edit test
  const loadSampleBatchSignatures = async () => {
    const generators = await loadSampleGenerators();
    if (!generators) return;
    const { createSamplePhotoData, createSampleDocumentData, createSampleSignatureData } = generators;
    setIsSampleImage(true);
    setToolMode('batch');
    const samples = targetType === 'photo'
      ? [
          { name: 'candidate_photo_ssc.jpg', label: 'Candidate 1', sub: 'SSC Passport', dataUrl: createSamplePhotoData('RAHUL SHARMA', '10/08/2026', 350, 450), w: 350, h: 450, size: 52000 },
          { name: 'candidate_photo_upsc.jpg', label: 'Candidate 2', sub: 'UPSC Headshot', dataUrl: createSamplePhotoData('PRIYA PATEL', '12/08/2026', 350, 450), w: 350, h: 450, size: 55000 },
          { name: 'candidate_photo_neet.jpg', label: 'Candidate 3', sub: 'NEET Photo', dataUrl: createSamplePhotoData('AMIT KUMAR', '15/08/2026', 350, 450), w: 350, h: 450, size: 58000 }
        ]
      : targetType === 'document'
      ? [
          { name: 'class_10th_marksheet.jpg', label: '10th Marksheet', sub: 'Secondary Board', dataUrl: createSampleDocumentData('CENTRAL BOARD OF SECONDARY EDUCATION', '10th Marksheet Certificate', 500, 700), w: 500, h: 700, size: 145000 },
          { name: 'caste_validity_proof.jpg', label: 'Caste Certificate', sub: 'Official Govt', dataUrl: createSampleDocumentData('GOVERNMENT OF MAHARASHTRA', 'Caste Validity Certificate', 500, 700), w: 500, h: 700, size: 138000 },
          { name: 'identity_aadhaar_card.jpg', label: 'Identity Proof', sub: 'Govt Photo ID', dataUrl: createSampleDocumentData('GOVERNMENT OF INDIA', 'National Identity Proof Card', 500, 700), w: 500, h: 700, size: 142000 }
        ]
      : [
          { name: 'candidate_sign_main.jpg', label: 'Candidate Sign 1', sub: 'SSC Form', dataUrl: createSampleSignatureData('Candidate Sign 1', 'SSC Form', 600, 250), w: 600, h: 250, size: 42000 },
          { name: 'thumb_impression_left.jpg', label: 'Thumb Impression', sub: 'Left Hand', dataUrl: createSampleSignatureData('Thumb Impression', 'Left Hand', 600, 250), w: 600, h: 250, size: 45000 },
          { name: 'candidate_sign_alt.jpg', label: 'Candidate Sign 2', sub: 'RRB / PAN', dataUrl: createSampleSignatureData('Candidate Sign 2', 'RRB / PAN', 600, 250), w: 600, h: 250, size: 48000 }
        ];

    const loadedItems: BatchSignatureItem[] = [];

    samples.forEach((sample, idx) => {
      const img = new Image();
      img.onload = () => {
        const item: BatchSignatureItem = {
          id: `sample_${idx}_${Date.now()}`,
          fileName: sample.name,
          originalSize: sample.size,
          image: img,
          status: 'pending',
          rotation: 0,
          flipH: false,
          flipV: false
        };
        loadedItems.push(item);

        if (loadedItems.length === samples.length) {
          if (sourceObjectUrlRef.current) {
            URL.revokeObjectURL(sourceObjectUrlRef.current);
            sourceObjectUrlRef.current = null;
          }
          setBatchItems(loadedItems);
          setSourceImage(loadedItems[0].image);
          setSourceFileName(loadedItems[0].fileName.replace(/\.[^/.]+$/, ''));
          setSourceOriginalSize(loadedItems[0].originalSize);
          setSourceDimensions({ width: sample.w, height: sample.h });
          initCropBox(loadedItems[0].image, selectedPreset ? selectedPreset.aspectRatio : targetWidthPx / targetHeightPx);
        }
      };
      img.src = sample.dataUrl;
    });
  };

  // Drag & drop handlers
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleMultipleFiles(e.dataTransfer.files);
    }
  };

  useEffect(() => {
    if (!focusedWorkspace) return;
    const dragOver = (event: DragEvent) => {
      if (Array.from(event.dataTransfer?.types || []).includes('Files')) event.preventDefault();
    };
    const drop = (event: DragEvent) => {
      if (event.defaultPrevented || !event.dataTransfer?.files.length) return;
      event.preventDefault();
      setIsDragOver(false);
      handleMultipleFiles(event.dataTransfer.files);
    };
    window.addEventListener('dragover', dragOver);
    window.addEventListener('drop', drop);
    return () => { window.removeEventListener('dragover', dragOver); window.removeEventListener('drop', drop); };
  }, [focusedWorkspace, handleMultipleFiles]);

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
    if (!isNaN(val) && val >= 0) {
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
    const parsed = parseInt(minKbInput, 10);
    const current = Number.isNaN(parsed) ? minKb : parsed;
    const nextVal = Math.max(0, current + delta);
    handleMinKbChange(String(nextVal));
  };

  const adjustMaxKb = (delta: number) => {
    const current = parseInt(maxKbInput, 10) || maxKb || 20;
    const nextVal = Math.max(minKb + 1, current + delta);
    handleMaxKbChange(String(nextVal));
  };

  // Process single active signature / photo / document
  const processImage = useCallback(async () => {
    if (!sourceImage) return;
    const sequence = ++processingSequenceRef.current;
    setIsProcessing(true);
    try {
      // Let React commit the pending state before starting a transform. Prefer
      // the browser scheduler when available, then fall back for older clients.
      const scheduler = (window as Window & { scheduler?: { yield?: () => Promise<void> } }).scheduler;
      if (scheduler?.yield) await scheduler.yield();
      else await new Promise<void>((resolve) => setTimeout(resolve, 0));
      // On modern browsers, the full canvas pipeline then runs in a dedicated worker.
      if (canProcessImagesOffThread()) {
        try {
          const offThread = await processImageOffThread(sourceImage, {
            crop, targetWidth: targetWidthPx, targetHeight: targetHeightPx, rotation, flipH, flipV, filters,
            format: targetFormat, minKb, maxKb, targetKb: selectedPreset?.recommendedKb || (minKb + maxKb) / 2,
            targetType, candidateName, dateOfPhoto, addNameDateStamp, documentHighContrast, presetNotes: selectedPreset?.notes,
          });
          if (sequence !== processingSequenceRef.current) { URL.revokeObjectURL(offThread.result.dataUrl); return; }
          setBackgroundIssues(offThread.issues);
          setProcessedResult((prev) => {
            if (prev?.dataUrl) URL.revokeObjectURL(prev.dataUrl);
            return offThread.result;
          });
          return;
        } catch (workerError) {
          // Safari and older Android WebViews can expose part of the worker API
          // without supporting all canvas operations. Keep the compatible path.
          console.warn('Off-thread image processing unavailable; using compatible canvas path.', workerError);
        }
      }
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

      // Apply Photo Name & Date (DoP) stamp if enabled
      if (targetType === 'photo' && addNameDateStamp && (candidateName.trim() || dateOfPhoto.trim())) {
        applyNameAndDateStamp(renderedCanvas, candidateName, dateOfPhoto);
      }

      // Apply Document text clarity enhancement if enabled
      if (targetType === 'document' && documentHighContrast) {
        const dCtx = renderedCanvas.getContext('2d');
        if (dCtx) {
          applyDocumentFilters(dCtx, targetWidthPx, targetHeightPx, 20);
        }
      }

      // Inspect background and notebook ruled lines directly on the processed canvas
      let detectedBgIssues: UploadIssue[] = [];
      try {
        const rCtx = renderedCanvas.getContext('2d', { willReadFrequently: true });
        if (rCtx && selectedPreset) {
          const imgData = rCtx.getImageData(0, 0, targetWidthPx, targetHeightPx);
          const bgCheck = inspectBackground(imgData.data, targetWidthPx, targetHeightPx, selectedPreset.notes);
          detectedBgIssues.push(...bgCheck);
          if (targetType === 'signature') {
            const ruledCheck = inspectRuledPaper(imgData.data, targetWidthPx, targetHeightPx);
            detectedBgIssues.push(...ruledCheck);
          }
        }
      } catch (e) {
        console.warn('Canvas pixel inspection error:', e);
      }

      const sweetspotKb = selectedPreset?.recommendedKb || (minKb + maxKb) / 2;
      const result = await compressCanvasToTargetSize(
        renderedCanvas,
        targetFormat,
        minKb,
        maxKb,
        sweetspotKb,
        true
      );

      if (sequence !== processingSequenceRef.current) { URL.revokeObjectURL(result.dataUrl); return; }
      setBackgroundIssues(detectedBgIssues);
      setProcessedResult((prev) => {
        if (prev?.dataUrl) {
          URL.revokeObjectURL(prev.dataUrl);
        }
        return result;
      });
    } catch (err) {
      console.error('Error processing image:', err);
      if (sequence === processingSequenceRef.current) setUploadError('The image could not be processed. Choose a smaller JPG or PNG and upload again.');
    } finally {
      if (sequence === processingSequenceRef.current) setIsProcessing(false);
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
    maxKb,
    targetType,
    addNameDateStamp,
    candidateName,
    dateOfPhoto,
    documentHighContrast,
    selectedPreset
  ]);

  // Trigger processing on settings change in single mode (debounced, skips while actively dragging)
  useEffect(() => {
    if (sourceImage && toolMode === 'single' && !isDraggingCrop) {
      setHasDownloaded(false);
      setDownloadedFileName('');
      setProcessedResult(prev => { if (prev?.dataUrl) URL.revokeObjectURL(prev.dataUrl); return null; });
      setIsProcessing(true);
      const timer = setTimeout(() => {
        processImage();
      }, 80);
      return () => { clearTimeout(timer); processingSequenceRef.current++; };
    }
  }, [processImage, sourceImage, toolMode, isDraggingCrop]);


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

      const sweetspotKb = selectedPreset?.recommendedKb || (minKb + maxKb) / 2;
      const result = await compressCanvasToTargetSize(
        canvas,
        targetFormat,
        minKb,
        maxKb,
        sweetspotKb,
        true
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
      link.download = `signresize_batch_${batchItems.length}_${modeConfig.plural}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setHasDownloaded(true);
    } catch (err) {
      console.error('Failed to create ZIP:', err);
      alert(`Failed to generate ZIP file. You can still download ${modeConfig.plural} individually.`);
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
    const filename = `${cleanExamTag}${modeConfig.filePrefix}${cleanName}_${targetWidthPx}x${targetHeightPx}_${Math.round(sizeKb)}kb.${ext}`;

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setHasDownloaded(true);

    if (backgroundTransferMode.current) trackBackgroundEvent('resizer_export', backgroundTransferMode.current, ext);
  };

  // Load a batch item into single mode for manual cropping
  const loadBatchItemToSingleEditor = (item: BatchSignatureItem) => {
    setIsSampleImage(false);
    if (sourceObjectUrlRef.current && sourceObjectUrlRef.current !== item.sourceUrl) {
      URL.revokeObjectURL(sourceObjectUrlRef.current);
    }
    sourceObjectUrlRef.current = item.sourceUrl || null;
    setSourceImage(item.image);
    setSourceFileName(item.fileName.replace(/\.[^/.]+$/, ''));
    setSourceOriginalSize(item.originalSize);
    setSourceDimensions({ width: item.image.naturalWidth, height: item.image.naturalHeight });
    initCropBox(item.image, selectedPreset ? selectedPreset.aspectRatio : targetWidthPx / targetHeightPx);
    setToolMode('single');
  };

  // Remove single item from batch queue
  const removeBatchItem = (id: string) => {
    setBatchItems((prev) => {
      const removed = prev.find((item) => item.id === id);
      if (removed?.sourceUrl) {
        URL.revokeObjectURL(removed.sourceUrl);
      }
      return prev.filter((item) => item.id !== id);
    });
  };
  // Clear ALL selected files (Batch and Single)
  const clearAllSelectedFiles = () => {
    uploadSequenceRef.current++;
    setUploadError('');
    setSourceFileType('');
    setIsSampleImage(false);
    batchItems.forEach((item) => {
      if (item.sourceUrl) {
        URL.revokeObjectURL(item.sourceUrl);
      }
    });
    setBatchItems([]);
    if (sourceObjectUrlRef.current) {
      URL.revokeObjectURL(sourceObjectUrlRef.current);
      sourceObjectUrlRef.current = null;
    }
    setSourceImage(null);
    setProcessedResult(null);
    setSourceFileName(modeConfig.filePrefix.replace('_', ''));
    setSourceOriginalSize(0);
    setSourceDimensions({ width: 0, height: 0 });
    setHasDownloaded(false);
    setDownloadedFileName('');
    setSlateConfirmed(false);
    setUpssscConfirmed(false);
    setBackgroundIssues(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Diagnostic Auto-Fix for Error: File size below minimum limit (<10KB or <20KB)
  const autoFixMinKb = async () => {
    if (!processedResult || targetFormat !== 'image/jpeg') {
      addToast('Choose JPG to meet a minimum file size.', 'File size', 'warning');
      return;
    }
    try {
      const image = new Image();
      image.src = processedResult.dataUrl;
      await image.decode();
      const canvas = document.createElement('canvas');
      canvas.width = processedResult.width;
      canvas.height = processedResult.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(image, 0, 0);
      const result = await compressCanvasToTargetSize(canvas, 'image/jpeg', minKb, maxKb, (minKb + maxKb) / 2, true);
      setProcessedResult(result);
      URL.revokeObjectURL(processedResult.dataUrl);
    } catch {
      addToast('Could not update the file. Upload the image again and retry.', 'File size', 'warning');
    }
  };

  // Handle Single Download
  const handleDownload = () => {
    if (!processedResult) return;
    if (isProcessing || !processedResult.withinTargetBounds || inspectExport(processedResult, exportRule).length || (selectedPreset && inspectExport(processedResult, selectedPreset).length)) {
      addToast('Fix the export checks before downloading. Restore the preset settings and inspect the crop.', 'Export needs attention', 'warning');
      return;
    }
    if (isCoastGuardActive && targetType === 'photo' && !slateConfirmed) {
      setShowExportChecks(true);
      addToast('Indian Coast Guard requires physical slate with Name & Date. Confirm slate requirement before downloading.', 'Slate Confirmation Required', 'warning');
      return;
    }
    if (isUpssscActive && targetType === 'signature' && !upssscConfirmed) {
      setShowExportChecks(true);
      addToast('UPSSSC PET Clause 9.3 requires candidate Hindi name below signature. Confirm requirement before downloading.', 'Clause 9.3 Check Required', 'warning');
      return;
    }
    const ext = targetFormat === 'image/jpeg' ? 'jpg' : targetFormat === 'image/png' ? 'png' : 'webp';
    const cleanExamTag = selectedPreset ? `${selectedPreset.shortCode.toLowerCase()}_` : '';
    let filename = `${cleanExamTag}${modeConfig.filePrefix}${processedResult.width}x${processedResult.height}_${Math.round(processedResult.sizeKb)}kb.${ext}`;

    // Join Indian Coast Guard (CGEPT) portal strict file naming enforcement
    if (selectedPreset?.id === 'indian-coast-guard-photo') {
      filename = `Passport_Photograph.${ext}`;
    } else if (selectedPreset?.id === 'indian-coast-guard') {
      filename = `Signature.${ext}`;
    } else if (selectedPreset?.id === 'indian-coast-guard-thumb' || selectedPreset?.id === 'indian-coast-guard-thumb-doc') {
      filename = `Thumb_Impression.${ext}`;
    } else if (selectedPreset?.id === 'indian-coast-guard-document') {
      filename = `Certificate.${ext}`;
    } else if (selectedPreset?.id === 'wbpsc-photo') {
      filename = `wbpsc_photo.${ext}`;
    } else if (selectedPreset?.id === 'wbpsc-west-bengal' || selectedPreset?.id === 'wbpsc-signature-138x59') {
      filename = `wbpsc_signature.${ext}`;
    } else if (selectedPreset?.id === 'wbpsc-document') {
      filename = `wbpsc_admit_doc.${ext}`;
    }

    const link = document.createElement('a');
    link.href = processedResult.dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setHasDownloaded(true);
    setDownloadedFileName(filename);

    addToast(`Downloaded ${filename} (${Math.round(processedResult.sizeKb)} KB)`, modeConfig.downloadToast, 'success');
  };

  // Handle Single PDF Export (< 300 KB for UPSC OTR, GATE, State PSCs)
  const handleDownloadPdf = async () => {
    if (!processedResult) return;
    setIsGeneratingPdf(true);
    try {
      let jpegBlob = processedResult.blob;
      if (processedResult.blob.type !== 'image/jpeg') {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = targetWidthPx;
        tempCanvas.height = targetHeightPx;
        const tempCtx = tempCanvas.getContext('2d');
        const img = new Image();
        await new Promise((resolve) => {
          img.onload = resolve;
          img.src = processedResult.dataUrl;
        });
        tempCtx?.drawImage(img, 0, 0);
        jpegBlob = await new Promise<Blob>((resolve) => {
          tempCanvas.toBlob((b) => resolve(b || processedResult.blob), 'image/jpeg', 0.90);
        });
      }

      const pdfOptions = { pageSize: targetType === 'document' ? 'A4' as const : 'fit' as const };
      const pdfBlob = await createPdfOffThread(jpegBlob, targetWidthPx, targetHeightPx, pdfOptions)
        .catch(() => createPdfFromJpegBlob(jpegBlob, targetWidthPx, targetHeightPx, pdfOptions));

      const cleanExamTag = selectedPreset ? `${selectedPreset.shortCode.toLowerCase()}_` : '';
      const filename = `${cleanExamTag}${modeConfig.filePrefix}${targetWidthPx}x${targetHeightPx}_${Math.round(pdfBlob.size / 1024)}kb.pdf`;

      const pdfUrl = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(pdfUrl), 10000);

      addToast(`Downloaded ${filename} (${Math.round(pdfBlob.size / 1024)} KB PDF)`, 'PDF Downloaded', 'success');
      setHasDownloaded(true);
    } catch (err) {
      console.error('Failed to generate PDF', err);
      addToast('Failed to generate PDF document', 'PDF Error', 'warning');
    } finally {
      setIsGeneratingPdf(false);
    }
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
      addToast(modeConfig.copyToast, 'Copied to Clipboard', 'success');
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
    // Read layout once before React writes crop styles. Subsequent move events
    // use this snapshot, avoiding a forced reflow for every pointer update.
    dragBoundsRef.current = containerRef.current?.getBoundingClientRect() ?? null;
    setIsDraggingCrop(true);
    setActiveHandle(handle);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragStart({ x: clientX, y: clientY });
    setCropStart({ ...crop });
  };

  const handleContainerMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDraggingCrop || !containerRef.current) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    if (dragRafRef.current) {
      cancelAnimationFrame(dragRafRef.current);
    }

    dragRafRef.current = requestAnimationFrame(() => {
      const rect = dragBoundsRef.current;
      if (!rect || !rect.width || !rect.height) return;
      const scaleX = naturalW / rect.width;
      const scaleY = naturalH / rect.height;

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
    });
  };

  const handleContainerMouseUp = () => {
    if (dragRafRef.current) {
      cancelAnimationFrame(dragRafRef.current);
      dragRafRef.current = null;
    }
    dragBoundsRef.current = null;
    setIsDraggingCrop(false);
    setActiveHandle(null);
  };

  useEffect(() => {
    if (!isDraggingCrop) return;

    window.addEventListener('mouseup', handleContainerMouseUp);
    window.addEventListener('touchend', handleContainerMouseUp);
    window.addEventListener('touchcancel', handleContainerMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleContainerMouseUp);
      window.removeEventListener('touchend', handleContainerMouseUp);
      window.removeEventListener('touchcancel', handleContainerMouseUp);
    };
  }, [isDraggingCrop]);

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

  // Universal Smart Auto-Fit (Signature, Center Face, Document)
  const handleAutoFit = () => {
    if (!sourceImage) return;
    if (targetType === 'photo') {
      const targetAspect = selectedPreset ? selectedPreset.aspectRatio : targetWidthPx / targetHeightPx;
      let cropH = naturalH * 0.85;
      let cropW = cropH * targetAspect;
      if (cropW > naturalW * 0.92) {
        cropW = naturalW * 0.92;
        cropH = cropW / targetAspect;
      }
      const cropX = Math.max(0, (naturalW - cropW) / 2);
      const cropY = Math.max(0, (naturalH - cropH) * 0.2);
      setCrop({
        x: Math.round(cropX),
        y: Math.round(cropY),
        width: Math.round(cropW),
        height: Math.round(cropH)
      });
      return;
    }
    if (targetType === 'document') {
      const targetAspect = selectedPreset ? selectedPreset.aspectRatio : targetWidthPx / targetHeightPx;
      let cropW = naturalW * 0.95;
      let cropH = cropW / targetAspect;
      if (cropH > naturalH * 0.95) {
        cropH = naturalH * 0.95;
        cropW = cropH * targetAspect;
      }
      const cropX = Math.max(0, (naturalW - cropW) / 2);
      const cropY = Math.max(0, (naturalH - cropH) / 2);
      setCrop({
        x: Math.round(cropX),
        y: Math.round(cropY),
        width: Math.round(cropW),
        height: Math.round(cropH)
      });
      return;
    }
    handleAutoFitSignature(0.12);
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
    { name: 'International & Passports', categories: ['International'], description: 'Indonesia (CPNS, UTBK, Paspor), US Visa DS-160, UK & Global' },
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

  const isPakistan = (typeof window !== 'undefined' && window.location.pathname.includes('/pk')) || initialPreset?.country === 'PK' || selectedPreset?.country === 'PK';
  const isIndonesian = (typeof window !== 'undefined' && window.location.pathname.includes('/id')) || initialPreset?.country === 'ID' || selectedPreset?.country === 'ID';

  // Pinned Entrance Exams based on active mode
  const PINNED_TOP_EXAMS = isPakistan
    ? (targetType === 'photo'
        ? [
            { id: 'nadra-pk', short: 'NADRA PK', label: 'NADRA CNIC & Passport', specs: '350×450 • 10–1000 KB' },
            { id: 'ppsc-pk', short: 'PPSC PK', label: 'PPSC Punjab PSC Photo', specs: '200×230 • 5–25 KB' },
            { id: 'fpsc-pk', short: 'FPSC PK', label: 'FPSC Federal PSC Photo', specs: '200×230 • 5–30 KB' },
            { id: 'css-pk', short: 'CSS Exam', label: 'CSS Competitive Exam Photo', specs: '200×230 • 5–30 KB' }
          ]
        : [
            { id: 'ppsc-sign-pk', short: 'PPSC Sign', label: 'PPSC Punjab PSC Sign', specs: '140×60 • 5–25 KB' },
            { id: 'fpsc-sign-pk', short: 'FPSC Sign', label: 'FPSC Federal Sign', specs: '140×60 • 5–30 KB' },
            { id: 'css-sign-pk', short: 'CSS Sign', label: 'CSS Competitive Sign', specs: '140×60 • 5–30 KB' },
            { id: 'nadra-pk', short: 'NADRA PK', label: 'NADRA CNIC & Passport Photo', specs: '350×450 • 10–1000 KB' }
          ])
    : isIndonesian
    ? [
        { id: 'id-cpns', short: 'CPNS SSCASN', label: 'CPNS Formal & Swafoto', specs: '400×600 • 100–500 KB' },
        { id: 'id-utbk', short: 'UTBK-SNBT', label: 'UTBK-SNBT 4×6', specs: '400×600 • 80–300 KB' },
        { id: 'id-passport', short: 'Paspor RI', label: 'Paspor / eVisa Imigrasi', specs: '350×450 • 100–1000 KB' },
        { id: 'us-ds160', short: 'US DS-160', label: 'US Visa DS-160', specs: '600×600 • 20–240 KB' }
      ]
    : isWbpscActive
    ? [
        { id: 'wbpsc-west-bengal', short: 'WBPSC Sign', label: 'WBPSC Sign (140×60)', specs: '140×60 • 10–20 KB' },
        { id: 'wbpsc-photo', short: 'WBPSC Photo', label: 'WBPSC Photo (138×177)', specs: '138×177 • 20–100 KB' },
        { id: 'wbpsc-document', short: 'WBPSC Admit / Doc', label: 'WBPSC Madhyamik Admit / Doc', specs: '700×990 • 100–300 KB' },
        { id: 'wbpsc-signature-138x59', short: '138×59 Sign', label: 'WBPSC Sign (138×59)', specs: '138×59 • 10–20 KB' }
      ]
    : targetType === 'photo'
    ? [
        { id: 'ssc-cgl-photo', short: 'SSC CGL Photo', label: 'SSC CGL Photo', specs: '240×320 • 20–50 KB' },
        { id: 'ssc-photo', short: 'SSC Photo', label: 'SSC Photo', specs: '240×320 • 20–50 KB' },
        { id: 'upsc-photo', short: 'UPSC Photo', label: 'UPSC Photo', specs: '350×350 • 20–300 KB' },
        { id: 'ibps-photo', short: 'IBPS Photo', label: 'IBPS Photo', specs: '200×230 • 20–50 KB' },
        { id: 'neet-photo', short: 'NEET Photo', label: 'NEET Photo', specs: '3.5×4.5 • 10–200 KB' }
      ]
    : targetType === 'document'
    ? [
        { id: 'marksheet-10th', short: '10th Marksheet', label: '10th Marksheet', specs: 'A4 • 100–300 KB' },
        { id: 'marksheet-12th', short: '12th Certificate', label: '12th Marksheet', specs: 'A4 • 100–300 KB' },
        { id: 'caste-certificate', short: 'Caste Certificate', label: 'Caste Cert', specs: 'A4 • 100–300 KB' },
        { id: 'id-proof-card', short: 'ID Card (Aadhaar)', label: 'ID Proof', specs: 'Card • 50–200 KB' }
      ]
    : [
        { id: 'ssc-cgl', short: 'SSC CGL', label: 'SSC CGL 2026', specs: '140×60 • 10–20 KB' },
        { id: 'ssc-general', short: 'SSC Guide', label: 'SSC preparation preset', specs: '600×200 • 10–20 KB' },
        { id: 'upsc-civil-services', short: 'UPSC', label: 'UPSC (IAS, NDA)', specs: '350×350 • 20–300 KB' },
        { id: 'ibps-sbi', short: 'IBPS', label: 'IBPS (PO/Clerk)', specs: '140×60 • 10–20 KB' },
        { id: 'rrb-railway', short: 'RRB', label: 'RRB Railways', specs: '140×60 • 10–20 KB' }
      ];

  const currentPresetList = targetType === 'photo'
    ? PHOTO_PRESETS
    : targetType === 'document'
    ? DOCUMENT_PRESETS
    : SIGNATURE_PRESETS;

  // Filter presets for search inside combobox (searches current mode list first, falls back to all presets)
  const comboboxFilteredPresets = useMemo(() => {
    if (!comboboxSearch.trim()) return currentPresetList;
    const q = comboboxSearch.trim().toLowerCase();
    const matchesCurrent = currentPresetList.filter((p) => (
      p.name.toLowerCase().includes(q) ||
      p.shortCode.toLowerCase().includes(q) ||
      p.authority.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.country && p.country.toLowerCase().includes(q)) ||
      p.notes.toLowerCase().includes(q)
    ));
    if (matchesCurrent.length > 0) return matchesCurrent;
    return ALL_COMBINED_PRESETS.filter((p) => (
      p.name.toLowerCase().includes(q) ||
      p.shortCode.toLowerCase().includes(q) ||
      p.authority.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.country && p.country.toLowerCase().includes(q)) ||
      p.notes.toLowerCase().includes(q)
    ));
  }, [comboboxSearch, currentPresetList]);


  // Toggle Category Accordion in Combobox
  const toggleCategoryAccordion = (catName: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catName]: !prev[catName]
    }));
  };

  // Reusable Exam Selector Dropdown Combobox Popover (used in primary preset selector & dedicated suites like Coast Guard)
  const renderExamDropdownPopover = () => (
    <div id="exam-preset-options" role="region" aria-label="Exam preset search" className="mt-2 p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-[0_16px_40px_rgba(0,0,0,0.22)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-2 sm:space-y-2.5 z-30 animate-in fade-in slide-in-from-top-2 duration-150 ring-1 ring-black/5 dark:ring-white/10">

      {/* Combobox Search Toolbar - Compact */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/80 pb-2">
        <div className="relative flex-1">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder={lang === 'hi' ? '40+ परीक्षा प्रारूप खोजें (UPSC, SSC, UPPSC, BPSC, PAN)...' : lang === 'mr' ? '40+ परीक्षा फॉरमॅट शोधा (MPSC, पोलीस भरती, तलाठी, SSC)...' : modeConfig.searchPlaceholder}
            aria-label="Search presets by exam or authority"
            value={comboboxSearch}
            onChange={(e) => setComboboxSearch(e.target.value)}
            className="w-full pl-8 pr-8 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
          />
          {comboboxSearch && (
            <button
              type="button"
              onClick={() => setComboboxSearch('')}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground w-6 h-6 flex items-center justify-center rounded hover:bg-muted/60 cursor-pointer"
              title="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-2 text-xs">
          <span className="text-muted-foreground font-mono text-[10px]">
            {comboboxFilteredPresets.length} {t.tool.presetsFound}
          </span>
          <button
            type="button"
            onClick={() => setIsExamDropdownOpen(false)}
            className="px-2.5 py-1 min-h-[30px] rounded-lg border border-border hover:bg-muted text-xs font-semibold text-muted-foreground hover:text-foreground transition cursor-pointer flex items-center gap-1"
          >
            {t.tool.close}
          </button>
        </div>
      </div>

      {/* When Searching: Flat Search Results Grid */}
      {comboboxSearch.trim() ? (
        <div className="space-y-1.5 max-h-[280px] sm:max-h-[320px] overflow-y-auto pr-1">
          {comboboxFilteredPresets.length === 0 ? (
            <div className="p-6 text-center text-xs text-muted-foreground">
              No matching presets found for &ldquo;{comboboxSearch}&rdquo;. Try another search term.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5">
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
                    aria-pressed={isSelected}
                    className={`text-left p-2 rounded-lg border transition text-xs flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? 'border-primary bg-primary/10 shadow-xs ring-1 ring-primary'
                        : 'border-border/70 bg-card hover:border-primary/40 hover:bg-muted/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-bold text-xs text-foreground truncate">{preset.shortCode}</span>
                        <span className="text-[10px] font-mono font-bold text-primary shrink-0">
                          {preset.minKb}–{preset.maxKb}KB
                        </span>
                      </div>
                      <div className="text-[11px] text-muted-foreground truncate mt-0.5">{preset.name}</div>
                    </div>
                    <div className="pt-1 flex items-center justify-between gap-1 text-[9px] font-mono border-t border-border/40 mt-1 text-muted-foreground">
                      <span>{preset.widthPx}×{preset.heightPx}px</span>
                      <span className="text-primary font-medium truncate">{preset.category}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        /* When Not Searching: Category Accordions */
        <div className="space-y-1.5 max-h-[280px] sm:max-h-[320px] overflow-y-auto pr-1">
          {(targetType === 'document'
            ? [
                { name: 'Education & Marksheets', match: (p: ExamPreset) => p.docCategory === 'Education' || p.category === 'General', description: '10th, 12th & Certificates' },
                { name: 'Identity & Address Proofs', match: (p: ExamPreset) => p.docCategory === 'Identity' || p.category === 'Identity', description: 'Aadhaar, PAN & Voter ID' },
                { name: 'Category & Reservation', match: (p: ExamPreset) => p.docCategory === 'Reservation', description: 'Caste, EWS, NCL' },
                { name: 'Biometric & Thumb Scans', match: (p: ExamPreset) => p.docCategory === 'Biometric', description: 'Left Thumb, Medical & PwD' }
              ]
            : CATEGORY_GROUPS.map(g => ({
                name: g.name,
                match: (p: ExamPreset) => g.categories.includes(p.category),
                description: g.description
              }))
          ).map((group) => {
            const groupPresets = currentPresetList.filter(group.match);
            if (groupPresets.length === 0) return null;

            const isExpanded = expandedCategories[group.name] ?? false;

            return (
              <div key={group.name} className="border border-border/70 rounded-lg overflow-hidden bg-muted/15">
                <button
                  type="button"
                  onClick={() => toggleCategoryAccordion(group.name)}
                  aria-expanded={isExpanded}
                  className="w-full py-1.5 px-2.5 flex items-center justify-between text-left hover:bg-muted/40 transition select-none cursor-pointer"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-xs text-foreground">{group.name}</span>
                    <span className="text-[10px] text-muted-foreground hidden sm:inline">• {group.description}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono font-bold bg-muted text-muted-foreground border border-border">
                      {groupPresets.length}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-3 h-3 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-3 h-3 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-2 pt-1 border-t border-border/50 bg-card">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5">
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
                            aria-pressed={isSelected}
                            className={`text-left p-2 rounded-lg border transition text-xs flex flex-col justify-between cursor-pointer ${
                              isSelected
                                ? 'border-primary bg-primary/10 shadow-xs ring-1 ring-primary'
                                : 'border-border/70 bg-card hover:border-primary/40 hover:bg-muted/40'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between gap-1">
                                <span className="font-bold text-xs text-foreground truncate">{preset.shortCode}</span>
                                <span className="text-[10px] font-mono font-bold text-primary shrink-0">{preset.minKb}–{preset.maxKb}KB</span>
                              </div>
                              <div className="text-[11px] text-muted-foreground truncate mt-0.5">{preset.name}</div>
                            </div>
                            <div className="pt-1 flex items-center justify-between gap-1 text-[9px] font-mono text-muted-foreground border-t border-border/40 mt-1">
                              <span>{preset.widthPx}×{preset.heightPx}px</span>
                              <span className="text-primary font-medium truncate">
                                {targetType === 'photo' ? 'White BG' : targetType === 'document' ? 'Seal' : preset.inkRequirement}
                              </span>
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

      {/* Bottom Reference Link - Compact */}
      <div className="pt-1.5 border-t border-border/60 flex items-center justify-between text-[11px]">
        <span className="text-muted-foreground text-[10px]">Looking for official print size rules?</span>
        <a
          href="/#exam-specs"
          onClick={() => setIsExamDropdownOpen(false)}
          className="font-bold text-primary hover:underline flex items-center gap-1 text-[11px]"
        >
          <span>Browse Full Exam Dimensions Matrix (30+ Guidelines)</span>
          <span>↓</span>
        </a>
      </div>
    </div>
  );

  // Consolidated Exam Selector Dropdown & Search System
  const renderPresetSelector = () => {
    const isPinnedActive = PINNED_TOP_EXAMS.some((item) => item.id === selectedPreset?.id);

    return (
      <div id="exam-preset-selector" className="bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-xs space-y-3 relative scroll-mt-24" ref={comboboxRef}>

        {/* Top Header: Title & Active Preset Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-muted-foreground">
              <Zap className="w-4 h-4 text-primary" />
              <span>{targetType === 'photo' ? 'Govt Exam Photo Presets:' : targetType === 'document' ? 'Document & Certificate Presets:' : 'Govt Exam Presets:'}</span>
            </div>
            {selectedPreset && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-primary/10 text-primary border border-primary/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span>Active: {selectedPreset.shortCode}</span>
                <span className="text-muted-foreground font-normal">({targetWidthPx}×{targetHeightPx}px, {minKb}–{maxKb}KB)</span>
              </span>
            )}
            {selectedPreset?.sourceUrl && (
              <a
                href={selectedPreset.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 hover:underline transition"
                title={selectedPreset.sourceLabel || 'Official Government / Examination Source'}
              >
                <span>Source: {selectedPreset.sourceLabel || new URL(selectedPreset.sourceUrl).hostname}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
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

        {/* Pinned Top 4 Exams Bar + Combobox Trigger */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground shrink-0 flex items-center gap-1 mr-1">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> {modeConfig.pinnedTitle}
          </span>

          {/* 4 Pinned Chips */}
          <div className="flex flex-wrap items-center gap-2 max-w-full">
            {PINNED_TOP_EXAMS.map((item) => {
              const isSelected = selectedPreset?.id === item.id;
              const pinnedPreset = ALL_COMBINED_PRESETS.find(preset => preset.id === item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    const p = ALL_COMBINED_PRESETS.find((x) => x.id === item.id) || currentPresetList.find((x) => x.id === item.id);
                    if (p) applyPreset(p);
                  }}
                  aria-pressed={isSelected}
                  className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 shadow-2xs shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-primary text-primary-foreground font-bold shadow-sm'
                      : 'bg-muted/70 hover:bg-muted text-foreground border border-border/70 hover:border-primary/40'
                  }`}
                >
                  <span>{item.short}</span>
                  <span className={`text-[10px] font-mono font-normal opacity-80 ${isSelected ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                    {pinnedPreset ? `${pinnedPreset.widthPx}×${pinnedPreset.heightPx}` : item.specs.split('•')[0]}
                  </span>
                </button>
              );
            })}

            {/* Consolidated Dropdown Trigger Button */}
            <button
              type="button"
              onClick={() => setIsExamDropdownOpen((open) => !open)}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center gap-1.5 border shadow-2xs shrink-0 cursor-pointer ${
                isExamDropdownOpen || (!isPinnedActive && selectedPreset)
                  ? 'bg-primary/15 text-primary border-primary/40 shadow-xs'
                  : 'bg-card hover:bg-muted text-foreground border-border hover:border-primary/40'
              }`}
              aria-expanded={isExamDropdownOpen}
              aria-controls="exam-preset-options"
            >
              <Search className="w-3.5 h-3.5 text-primary" />
              <span>
                {!isPinnedActive && selectedPreset
                  ? `Format: ${selectedPreset.shortCode}`
                  : (lang === 'hi'
                      ? 'सभी 40+ परीक्षा प्रारूप'
                      : lang === 'mr'
                      ? 'सर्व 40+ परीक्षा फॉरमॅट'
                      : modeConfig.morePresetsLabel)}
              </span>
              {isExamDropdownOpen ? (
                <ChevronUp className="w-3.5 h-3.5 text-primary" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Consolidated Exam Selector Dropdown Combobox Popover (Compressed & Compact) */}
        {isExamDropdownOpen && renderExamDropdownPopover()}

        {/* Official Guidance Alert for Active Preset - High Contrast Theme-Safe */}
        {selectedPreset && (
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-500/15 dark:bg-amber-950/50 border-2 border-amber-500/40 dark:border-amber-500/60 text-amber-950 dark:text-amber-100 shadow-xs">
            <div className="p-1.5 rounded-lg bg-amber-500 dark:bg-amber-400 text-slate-950 shrink-0 mt-0.5 font-bold shadow-2xs">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 rounded bg-amber-500 dark:bg-amber-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider shadow-2xs">
                  {selectedPreset.portalExactSpecsVerified === false ? 'Preset guidance' : 'Official Rule'}
                </span>
                <span className="font-bold text-amber-950 dark:text-amber-200">
                  {selectedPreset.name} Upload Guidelines
                </span>
              </div>
              <p className="leading-relaxed text-amber-900/90 dark:text-amber-100/90">
                {selectedPreset.notes}
                {selectedPreset.portalExactSpecsVerified !== false && <> • <strong className="text-amber-950 dark:text-amber-50 font-semibold">Ink:</strong> {selectedPreset.inkRequirement}</>}
              </p>
            </div>
          </div>
        )}

      </div>
    );
  };

  // Reuse the preset tree while crop, filters, processing status, and toasts update.
  const presetSelector = useMemo(renderPresetSelector, [
    targetType, selectedPreset, targetWidthPx, targetHeightPx, minKb, maxKb,
    isExamDropdownOpen, comboboxSearch, expandedCategories, lang, applyPreset,
    isPakistan, isIndonesian,
  ]);
  const SettingsPanel = focusedWorkspace ? 'details' : 'div';
  const workspacePresets = focusedWorkspace ? ALL_COMBINED_PRESETS.filter(p => (!p.country || p.country === 'IN') && presetMode(p) === targetType) : currentPresetList;

  return (
    <div className={`w-full max-w-7xl mx-auto space-y-6 scroll-mt-24 min-h-[900px] sm:min-h-[800px] lg:min-h-[660px] ${compactStudio ? 'compact-studio' : ''}`} data-has-image={!!sourceImage} data-drag-over={isDragOver} id="tool-workspace" onDragOver={focusedWorkspace ? event => { if (Array.from(event.dataTransfer.types).includes('Files')) { event.preventDefault(); setIsDragOver(true); } } : undefined} onDragLeave={focusedWorkspace ? event => { if (!event.relatedTarget || !event.currentTarget.contains(event.relatedTarget as Node)) setIsDragOver(false); } : undefined} onDrop={focusedWorkspace ? handleDrop : undefined}>
      {compactStudio && <>
        <nav className="compact-rail" aria-label="Resizer mode">
          <span className="compact-label">TOOLS</span>
          {(['signature', 'photo', 'document'] as ToolTargetMode[]).map(mode => <button type="button" key={mode} aria-pressed={targetType === mode} onClick={() => switchTargetType(mode)}>{mode === 'signature' ? <PenTool size={16} /> : mode === 'photo' ? <Camera size={16} /> : <FileText size={16} />}<span>{mode === 'signature' ? 'Signature' : mode === 'photo' ? 'Photo' : 'Document'}</span></button>)}
          <a href="/#exam-day-toolkit">More tools</a>
        </nav>
        <div className="compact-preset" id="exam-preset-selector" ref={comboboxRef}>
          <label htmlFor="studio-preset">Preset</label>
          <select id="studio-preset" value={selectedPreset?.id || ''} onChange={e => { const preset = currentPresetList.find(p => p.id === e.target.value); if (preset) applyPreset(preset); }}>
            {!selectedPreset && <option value="">Custom dimensions</option>}
            {currentPresetList.map(preset => <option key={preset.id} value={preset.id}>{preset.name}</option>)}
          </select>
          <span>{targetWidthPx} × {targetHeightPx} px · {minKb}–{maxKb} KB</span>
          <button type="button" onClick={() => fileInputRef.current?.click()}><Upload size={15} />{sourceImage ? 'Replace image' : 'Upload image'}</button>
        </div>
      </>}
      <div className="quick-upload flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-primary/25 bg-primary/5 p-3">
        <div><p className="text-sm font-bold">Start with your image</p><p className="text-xs text-muted-foreground">JPG, PNG, WebP and browser-supported images · up to 15 MB</p></div>
        <button type="button" onClick={() => fileInputRef.current?.click()} className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-bold"><Upload className="w-4 h-4" />Upload image</button>
      </div>
      {backgroundTransferNotice && <p role="status" className="rounded-xl border border-primary/25 bg-primary/5 p-3 text-sm">{backgroundTransferNotice}</p>}
      {!compactStudio && uploadError && <div id="upload-feedback" className="scroll-mt-32">
        <UploadChecks
          source={sourceImage ? { name: sourceFileName, type: sourceFileType, size: sourceOriginalSize, ...sourceDimensions } : null}
          error={uploadError} result={processedResult} preset={selectedPreset} mode={targetType} busy={isProcessing}
          onRestore={() => { if (selectedPreset) applyPreset(selectedPreset); }}
          onCrop={() => document.getElementById('studio-container')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        />
      </div>}

      {/* Hidden Multi-File Input */}
      <input
        ref={fileInputRef}
        id="signature-file-input"
        aria-label="Upload signature or photo files"
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onClick={(e) => {
          (e.target as HTMLInputElement).value = '';
        }}
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            handleMultipleFiles(e.target.files);
          }
          e.target.value = '';
        }}
      />

      {/* ========================================================================= */}
      {/* 🚀 PRIMARY DEDICATED EXAM RESIZER SELECTOR (Signature / Photo / Documents) */}
      {/* ========================================================================= */}
      {!studioModeTabs && !isCoastGuardActive && <div className="mode-selector p-3 sm:p-4 rounded-2xl border-2 border-primary/30 bg-card shadow-sm space-y-3 min-h-[185px] sm:min-h-[110px]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold text-foreground flex items-center gap-2">
                <span>Select Dedicated Exam Resizer Mode</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-200 border border-emerald-500/40">
                  ⚡ Exam Presets
                </span>
              </h2>
              <p className="text-[11px] text-muted-foreground">
                Official specifications for SSC, UPSC, IBPS, RRB, NEET, State PSCs and PAN Card.
              </p>
            </div>
          </div>

          <span className="text-[11px] font-mono text-muted-foreground">
            Active Mode: <strong className="text-primary capitalize">{targetType} Resizer</strong>
          </span>
        </div>

        {/* 🏛️ WBPSC 4-IN-1 SECTION SELECTOR */}
        {isWbpscActive && (
          <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-primary/10 to-emerald-500/10 border-2 border-primary/30 shadow-xs space-y-2.5 my-1">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <span className="text-xs font-bold text-foreground uppercase tracking-wider">
                  WBPSC (WBCS, Clerkship, Miscellaneous) All Application Sections
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold bg-primary/20 text-primary px-2.5 py-0.5 rounded-full border border-primary/30">
                  Active: {selectedPreset?.shortCode || 'WBPSC'}
                </span>
                <a
                  href="https://psc.wb.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-primary bg-primary/10 hover:bg-primary/20 px-2.5 py-0.5 rounded-full border border-primary/30 transition"
                  title="Official WBPSC Portal (psc.wb.gov.in)"
                >
                  <span>Official Portal: psc.wb.gov.in</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <p className="text-[11px] text-muted-foreground">
              Click any section to automatically set official WBPSC dimensions, 10–20 KB signature, 138×177 px photo, or 100–300 KB admit card:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => selectWbpscSection('signature')}
                className={`px-3 py-2.5 rounded-xl border text-left transition flex flex-col gap-0.5 cursor-pointer ${
                  targetType === 'signature' && selectedPreset?.id === 'wbpsc-west-bengal'
                    ? 'bg-primary text-primary-foreground border-primary shadow-sm ring-2 ring-primary/25'
                    : 'bg-card border-border hover:bg-muted text-foreground'
                }`}
              >
                <span className="text-xs font-bold flex items-center justify-between">
                  <span>🖋️ Signature</span>
                  {targetType === 'signature' && selectedPreset?.id === 'wbpsc-west-bengal' && <Check className="w-3.5 h-3.5" />}
                </span>
                <span className="text-[10px] font-mono opacity-80">140×60 • 10–20 KB</span>
              </button>

              <button
                type="button"
                onClick={() => selectWbpscSection('photo')}
                className={`px-3 py-2.5 rounded-xl border text-left transition flex flex-col gap-0.5 cursor-pointer ${
                  targetType === 'photo' && selectedPreset?.id === 'wbpsc-photo'
                    ? 'bg-primary text-primary-foreground border-primary shadow-sm ring-2 ring-primary/25'
                    : 'bg-card border-border hover:bg-muted text-foreground'
                }`}
              >
                <span className="text-xs font-bold flex items-center justify-between">
                  <span>📸 Passport Photo</span>
                  {targetType === 'photo' && selectedPreset?.id === 'wbpsc-photo' && <Check className="w-3.5 h-3.5" />}
                </span>
                <span className="text-[10px] font-mono opacity-80">138×177 • 20–100 KB</span>
              </button>

              <button
                type="button"
                onClick={() => selectWbpscSection('document')}
                className={`px-3 py-2.5 rounded-xl border text-left transition flex flex-col gap-0.5 cursor-pointer ${
                  targetType === 'document' && selectedPreset?.id === 'wbpsc-document'
                    ? 'bg-primary text-primary-foreground border-primary shadow-sm ring-2 ring-primary/25'
                    : 'bg-card border-border hover:bg-muted text-foreground'
                }`}
              >
                <span className="text-xs font-bold flex items-center justify-between">
                  <span>📄 Madhyamik Admit</span>
                  {targetType === 'document' && selectedPreset?.id === 'wbpsc-document' && <Check className="w-3.5 h-3.5" />}
                </span>
                <span className="text-[10px] font-mono opacity-80">Age Proof • 100–300 KB</span>
              </button>

              <button
                type="button"
                onClick={() => selectWbpscSection('variant')}
                className={`px-3 py-2.5 rounded-xl border text-left transition flex flex-col gap-0.5 cursor-pointer ${
                  targetType === 'signature' && selectedPreset?.id === 'wbpsc-signature-138x59'
                    ? 'bg-primary text-primary-foreground border-primary shadow-sm ring-2 ring-primary/25'
                    : 'bg-card border-border hover:bg-muted text-foreground'
                }`}
              >
                <span className="text-xs font-bold flex items-center justify-between">
                  <span>🖋️ 138×59 Sign</span>
                  {targetType === 'signature' && selectedPreset?.id === 'wbpsc-signature-138x59' && <Check className="w-3.5 h-3.5" />}
                </span>
                <span className="text-[10px] font-mono opacity-80">138×59 • 10–20 KB</span>
              </button>
            </div>
          </div>
        )}

        {/* 3 Large Mode Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
          <button
            id="mode-tab-signature"
            type="button"
            aria-label="Switch to Signature Resizer Mode"
            onClick={() => switchTargetType('signature')}
            className={`p-3 rounded-xl border text-left transition flex items-center justify-between group cursor-pointer ${
              targetType === 'signature'
                ? 'bg-primary text-primary-foreground border-primary shadow-sm ring-2 ring-primary/20'
                : 'bg-card border-border hover:bg-muted/60 text-foreground'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${targetType === 'signature' ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>
                <PenTool className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs">{isCoastGuardActive ? 'Coast Guard Signature' : isWbpscActive ? 'WBPSC Signature' : t.tool.signatureMode}</div>
                <div className={`text-[10px] ${targetType === 'signature' ? 'text-primary-foreground font-semibold' : 'text-slate-600 dark:text-slate-300 font-medium'}`}>
                  {isCoastGuardActive ? '140×60 px • 10–50 KB • Signature.jpg' : isWbpscActive ? '140×60 px • 10–20 KB • Cursive Black Ink' : t.tool.signatureSub}
                </div>
              </div>
            </div>
            {targetType === 'signature' && <Check className="w-4 h-4 text-white" />}
          </button>

          <button
            id="mode-tab-photo"
            type="button"
            aria-label="Switch to Passport Photo Resizer Mode"
            onClick={() => switchTargetType('photo')}
            className={`p-3 rounded-xl border text-left transition flex items-center justify-between group cursor-pointer ${
              targetType === 'photo'
                ? 'bg-primary text-primary-foreground border-primary shadow-sm ring-2 ring-primary/20'
                : 'bg-card border-border hover:bg-muted/60 text-foreground'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${targetType === 'photo' ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>
                <Camera className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs">{isCoastGuardActive ? 'Coast Guard Slate Photo' : isWbpscActive ? 'WBPSC Passport Photo' : t.tool.photoMode}</div>
                <div className={`text-[10px] ${targetType === 'photo' ? 'text-primary-foreground font-semibold' : 'text-slate-600 dark:text-slate-300 font-medium'}`}>
                  {isCoastGuardActive ? '350×450 px • 10–50 KB • Slate + DoP' : isWbpscActive ? '138×177 px • 20–100 KB • White Background' : t.tool.photoSub}
                </div>
              </div>
            </div>
            {targetType === 'photo' && <Check className="w-4 h-4 text-white" />}
          </button>

          <button
            id="mode-tab-document"
            type="button"
            aria-label="Switch to Document Resizer Mode"
            onClick={() => switchTargetType('document')}
            className={`p-3 rounded-xl border text-left transition flex items-center justify-between group cursor-pointer ${
              targetType === 'document'
                ? 'bg-primary text-primary-foreground border-primary shadow-sm ring-2 ring-primary/20'
                : 'bg-card border-border hover:bg-muted/60 text-foreground'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${targetType === 'document' ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs">{isCoastGuardActive ? 'Coast Guard Documents & Thumb' : isWbpscActive ? 'WBPSC Admit Card & Docs' : t.tool.documentMode}</div>
                <div className={`text-[10px] ${targetType === 'document' ? 'text-primary-foreground font-semibold' : 'text-slate-600 dark:text-slate-300 font-medium'}`}>
                  {isCoastGuardActive ? 'Marksheets (50–150 KB) & LTI (10–50 KB)' : isWbpscActive ? 'Madhyamik Age Proof / Caste (100–300 KB)' : t.tool.documentSub}
                </div>
              </div>
            </div>
            {targetType === 'document' && <Check className="w-4 h-4 text-white" />}
          </button>
        </div>
      </div>

      }
      {/* Primary Exam Preset Selector & Guidance Alert (Hidden for dedicated single-suite workflows like Indian Coast Guard) */}
      {!compactStudio && !focusedWorkspace && !isCoastGuardActive && presetSelector}


      {/* ========================================================================= */}
      {/* ⚡ BATCH MODE: SIMULTANEOUS MASTER EDITING SUITE (All 10 Signs Together) */}
      {/* ========================================================================= */}
      {toolMode === 'batch' && (
        <div className="batch-studio space-y-4">


          {/* Mode Switcher Bar in Batch Mode */}
          <div className="batch-toolbar flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-card border border-border shadow-xs">
            {isCoastGuardActive ? (
              <div className="studio-mode-tabs coast-guard-mode-tabs" role="group" aria-label="Coast Guard Document Type">
                <button
                  type="button"
                  data-mode="signature"
                  data-step="01"
                  aria-pressed={targetType === 'signature' && (selectedPreset?.id === 'indian-coast-guard' || (!selectedPreset?.id.includes('-photo') && !selectedPreset?.id.includes('-thumb') && !selectedPreset?.id.includes('-document')))}
                  onClick={() => selectCoastGuardSection('signature')}
                  title="Signature.jpg • 140×60 px • 10–50 KB"
                >
                  <PenTool className="w-3.5 h-3.5 shrink-0" />
                  <span>1. Signature</span>
                </button>
                <button
                  type="button"
                  data-mode="photo"
                  data-step="02"
                  aria-pressed={targetType === 'photo' || selectedPreset?.id === 'indian-coast-guard-photo'}
                  onClick={() => selectCoastGuardSection('photo')}
                  title="Passport_Photograph.jpg • 350×450 px • 10–50 KB (Chalk Slate)"
                >
                  <Camera className="w-3.5 h-3.5 shrink-0" />
                  <span>2. Slate Photo</span>
                </button>
                <button
                  type="button"
                  data-mode="document"
                  data-step="03"
                  aria-pressed={targetType === 'document' && (selectedPreset?.id === 'indian-coast-guard-thumb-doc' || selectedPreset?.id === 'indian-coast-guard-thumb')}
                  onClick={() => selectCoastGuardSection('thumb')}
                  title="Thumb_Impression.jpg • 240×240 px • 10–50 KB (Left Thumb)"
                >
                  <span className="text-sm shrink-0 leading-none">👆</span>
                  <span>3. Left Thumb</span>
                </button>
                <button
                  type="button"
                  data-mode="document"
                  data-step="04"
                  aria-pressed={targetType === 'document' && selectedPreset?.id === 'indian-coast-guard-document'}
                  onClick={() => selectCoastGuardSection('document')}
                  title="Certificate.jpg • 700×990 px • 50–150 KB (Marksheets)"
                >
                  <FileText className="w-3.5 h-3.5 shrink-0" />
                  <span>4. Certificate</span>
                </button>
              </div>
            ) : studioModeTabs && (
              <div className="studio-mode-tabs" role="group" aria-label="Studio image type">
                {(['signature', 'photo', 'document'] as const).map((type, index) => <button key={type} type="button" data-mode={type} data-step={`0${index + 1}`} aria-pressed={targetType === type} onClick={() => switchTargetType(type)}>
                  {type === 'signature' ? <PenTool className="w-4 h-4" /> : type === 'photo' ? <Camera className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                  <span>{lang === 'hi' ? (type === 'signature' ? 'हस्ताक्षर' : type === 'photo' ? 'फोटो' : 'दस्तावेज़') : lang === 'mr' ? (type === 'signature' ? 'स्वाक्षरी' : type === 'photo' ? 'फोटो' : 'कागदपत्रे') : (type === 'signature' ? 'Signature' : type === 'photo' ? 'Photo' : 'Documents')}</span>
                  {lang === 'en' && <small className="studio-mode-description">{type === 'signature' ? 'Crop & clean' : type === 'photo' ? 'Portrait sizing' : 'Scan & compress'}</small>}
                </button>)}
              </div>
            )}
            <div className="editor-mode-toggle inline-flex items-center gap-1 p-0.5 rounded-lg bg-muted/60 border border-border shrink-0">
              <button
                type="button"
                onClick={() => setToolMode('single')}
                aria-pressed={false}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-muted-foreground hover:text-foreground transition cursor-pointer"
              >
                <PenTool className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Single Studio</span>
              </button>
              <button
                type="button"
                onClick={() => setToolMode('batch')}
                aria-pressed={true}
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
                + Add {modeConfig.shortNoun}s
              </button>
              <button
                type="button"
                onClick={loadSampleBatchSignatures}
                className="px-3 py-1.5 bg-muted text-foreground text-xs font-medium rounded-xl hover:bg-muted/80 border border-border transition cursor-pointer"
              >
                {modeConfig.batchSampleBtn}
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

          {/* 1. Universal Simultaneous Master Editing Toolbar */}
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
                    Adjust dimensions, rotation, filters, and KB bounds to apply to all {batchItems.length || 0} {modeConfig.plural} in real time.
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

            <FeedbackPrompt downloaded={hasDownloaded} tool={`${targetType} batch`} />
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
                        aria-label={`Select unit ${u}`}
                        className={`min-h-[36px] min-w-[36px] flex items-center justify-center rounded text-[11px] font-mono transition cursor-pointer ${
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
                    <label htmlFor="batch-width-input" className="text-[11px] text-muted-foreground flex justify-between">
                      <span>Width ({unit})</span>
                      <span className="font-mono text-foreground font-bold">{targetWidthPx}px</span>
                    </label>
                    <div className="flex items-center border border-border rounded-lg overflow-hidden bg-background min-h-[44px]">
                      <button
                        type="button"
                        onClick={() => adjustWidth(-1)}
                        aria-label="Decrease batch width"
                        className="min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-muted font-bold text-foreground cursor-pointer"
                      >
                        -
                      </button>
                      <input
                        id="batch-width-input"
                        type="text"
                        inputMode="decimal"
                        aria-label={`Target width for all images in ${unit}`}
                        value={widthInput}
                        onChange={(e) => handleWidthChange(e.target.value)}
                        className="w-full text-center font-mono font-bold text-foreground bg-transparent focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => adjustWidth(1)}
                        aria-label="Increase batch width"
                        className="min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-muted font-bold text-foreground cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="batch-height-input" className="text-[11px] text-muted-foreground flex justify-between">
                      <span>Height ({unit})</span>
                      <span className="font-mono text-foreground font-bold">{targetHeightPx}px</span>
                    </label>
                    <div className="flex items-center border border-border rounded-lg overflow-hidden bg-background min-h-[44px]">
                      <button
                        type="button"
                        onClick={() => adjustHeight(-1)}
                        aria-label="Decrease batch height"
                        className="min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-muted font-bold text-foreground cursor-pointer"
                      >
                        -
                      </button>
                      <input
                        id="batch-height-input"
                        type="text"
                        inputMode="decimal"
                        aria-label={`Target height for all images in ${unit}`}
                        value={heightInput}
                        onChange={(e) => handleHeightChange(e.target.value)}
                        className="w-full text-center font-mono font-bold text-foreground bg-transparent focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => adjustHeight(1)}
                        aria-label="Increase batch height"
                        className="min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-muted font-bold text-foreground cursor-pointer"
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
                <p className="font-bold text-base text-foreground">{modeConfig.batchEmptyTitle}</p>
                <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
                  {modeConfig.batchEmptyDesc}
                </p>
              </div>
              <div className="flex justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-md shadow-primary/25"
                >
                  {modeConfig.batchSelectBtn}
                </button>
                <button
                  type="button"
                  onClick={loadSampleBatchSignatures}
                  className="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground hover:bg-muted text-xs font-semibold"
                >
                  {modeConfig.batchSampleBtn}
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
                          title={`Remove ${modeConfig.shortNoun.toLowerCase()} from batch`}
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
          {!compactStudio && <StepIndicator
            hasImage={!!sourceImage}
            isProcessed={!!processedResult}
            targetType={targetType}
          />}

          {/* Top Bar: Active Preset One-Line Banner with Change Preset */}
          {!compactStudio && <PresetBanner
            selectedPreset={selectedPreset}
            targetWidthPx={targetWidthPx}
            targetHeightPx={targetHeightPx}
            minKb={minKb}
            maxKb={maxKb}
            dpi={dpi}
            hasSourceImage={!!sourceImage}
            targetType={targetType}
            onChangePresetClick={() => {
              setIsExamDropdownOpen((open) => !open);
              comboboxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            onClearClick={clearAllSelectedFiles}
            onToast={addToast}
          />}

          {/* Main Studio 2-Column Grid: Left Column (Cropper & Filters) + Right Column (Live Preview & Custom Inputs) */}
          <div className="studio-grid grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

            {/* Left Column: Interactive Crop Area & Enhancements (7 Cols) */}
            <div className="studio-editor lg:col-span-7 space-y-5">

              {/* Card 1: Interactive Cropper Canvas */}
              <div className="studio-source-card bg-card border border-border rounded-2xl p-2.5 sm:p-5 shadow-xs space-y-4">

                {/* ⚓ INDIAN COAST GUARD (CGEPT) CANVAS HEADER & SPEC STATUS */}
                {isCoastGuardActive && (
                  <div className="space-y-2 relative">
                    {/* Compact Header: Portal badge, Authority link, Other Exams */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-border/50 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-primary/15 text-primary flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                          ⚓
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold text-foreground tracking-tight">
                          Indian Coast Guard (CGEPT) Tool Suite
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 hidden sm:inline">
                          01/2026 Batch
                        </span>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap">
                        <a
                          href="https://joinindiancoastguard.cdac.in/cgept/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/30 transition shadow-2xs"
                          title="Official CGEPT Recruitment & Upload Guidelines Portal"
                        >
                          <span>joinindiancoastguard.cdac.in</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <button
                          type="button"
                          onClick={() => setIsExamDropdownOpen((open) => !open)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground bg-card hover:bg-muted px-2.5 py-1 rounded-full border border-border transition cursor-pointer"
                          title="Switch to another exam or job preset"
                        >
                          <Search className="w-3 h-3 text-primary" />
                          <span>Other Exams</span>
                          {isExamDropdownOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>
                      </div>
                    </div>

                    {/* Floating Dropdown Popover for Other Exams */}
                    {isExamDropdownOpen && (
                      <div className="relative z-40">
                        <div className="absolute top-1 left-0 right-0 z-50 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-150">
                          {renderExamDropdownPopover()}
                        </div>
                      </div>
                    )}

                    {/* Compact Requirement & Target Filename Indicator */}
                    <div className="p-2.5 rounded-xl bg-amber-500/10 dark:bg-amber-950/30 border border-amber-500/30 text-xs text-amber-950 dark:text-amber-200 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-sm shrink-0">⚠️</span>
                        <span className="text-[11px] leading-tight">
                          {targetType === 'photo' || selectedPreset?.id === 'indian-coast-guard-photo' ? (
                            <span>Hold black chalkboard with <strong>Name &amp; Date in white chalk</strong>. Auto-saved as <strong>Passport_Photograph.jpg</strong>.</span>
                          ) : targetType === 'signature' ? (
                            <span>Running cursive handwriting on plain white paper (no capital letters). Auto-saved as <strong>Signature.jpg</strong>.</span>
                          ) : selectedPreset?.id === 'indian-coast-guard-document' ? (
                            <span>Scanned from <strong>ORIGINAL</strong> certificate/marksheet (no photocopies). Auto-saved as <strong>Certificate.jpg</strong>.</span>
                          ) : (
                            <span>Clear left thumb impression ridge lines on plain white paper. Auto-saved as <strong>Thumb_Impression.jpg</strong>.</span>
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0 text-[10px] font-mono font-bold">
                        <span className="bg-amber-500/20 px-2 py-0.5 rounded">
                          {targetType === 'photo' || selectedPreset?.id === 'indian-coast-guard-photo'
                            ? '350×450 px • 10–50 KB'
                            : targetType === 'signature'
                            ? '140×60 px • 10–50 KB'
                            : selectedPreset?.id === 'indian-coast-guard-document'
                            ? '700×990 px • 50–150 KB'
                            : '240×240 px • 10–50 KB'}
                        </span>
                        <span className="bg-black/10 dark:bg-white/10 px-2 py-0.5 rounded">
                          {targetType === 'photo' || selectedPreset?.id === 'indian-coast-guard-photo'
                            ? 'Passport_Photograph.jpg'
                            : targetType === 'signature'
                            ? 'Signature.jpg'
                            : selectedPreset?.id === 'indian-coast-guard-document'
                            ? 'Certificate.jpg'
                            : 'Thumb_Impression.jpg'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 🏛️ WBPSC 4-IN-1 STUDIO SECTION SELECTOR */}
                {isWbpscActive && (
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/10 via-primary/10 to-emerald-500/10 border border-primary/30 space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>WBPSC Application Sections (Auto-Synced)</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold bg-primary/20 text-primary px-2 py-0.5 rounded">
                        Active: {selectedPreset?.shortCode || 'WBPSC'}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-xs">
                      <button
                        type="button"
                        onClick={() => selectWbpscSection('signature')}
                        className={`px-2.5 py-1.5 rounded-lg border text-left transition flex items-center justify-between cursor-pointer ${
                          targetType === 'signature' && selectedPreset?.id === 'wbpsc-west-bengal'
                            ? 'bg-primary text-primary-foreground border-primary shadow-xs font-bold'
                            : 'bg-card border-border hover:bg-muted text-foreground'
                        }`}
                      >
                        <span className="truncate">🖋️ Sign (140×60)</span>
                        {targetType === 'signature' && selectedPreset?.id === 'wbpsc-west-bengal' && <Check className="w-3 h-3 shrink-0" />}
                      </button>

                      <button
                        type="button"
                        onClick={() => selectWbpscSection('photo')}
                        className={`px-2.5 py-1.5 rounded-lg border text-left transition flex items-center justify-between cursor-pointer ${
                          targetType === 'photo' && selectedPreset?.id === 'wbpsc-photo'
                            ? 'bg-primary text-primary-foreground border-primary shadow-xs font-bold'
                            : 'bg-card border-border hover:bg-muted text-foreground'
                        }`}
                      >
                        <span className="truncate">📸 Photo (138×177)</span>
                        {targetType === 'photo' && selectedPreset?.id === 'wbpsc-photo' && <Check className="w-3 h-3 shrink-0" />}
                      </button>

                      <button
                        type="button"
                        onClick={() => selectWbpscSection('document')}
                        className={`px-2.5 py-1.5 rounded-lg border text-left transition flex items-center justify-between cursor-pointer ${
                          targetType === 'document' && selectedPreset?.id === 'wbpsc-document'
                            ? 'bg-primary text-primary-foreground border-primary shadow-xs font-bold'
                            : 'bg-card border-border hover:bg-muted text-foreground'
                        }`}
                      >
                        <span className="truncate">📄 Madhyamik Admit</span>
                        {targetType === 'document' && selectedPreset?.id === 'wbpsc-document' && <Check className="w-3 h-3 shrink-0" />}
                      </button>

                      <button
                        type="button"
                        onClick={() => selectWbpscSection('variant')}
                        className={`px-2.5 py-1.5 rounded-lg border text-left transition flex items-center justify-between cursor-pointer ${
                          targetType === 'signature' && selectedPreset?.id === 'wbpsc-signature-138x59'
                            ? 'bg-primary text-primary-foreground border-primary shadow-xs font-bold'
                            : 'bg-card border-border hover:bg-muted text-foreground'
                        }`}
                      >
                        <span className="truncate">🖋️ 138×59 Sign</span>
                        {targetType === 'signature' && selectedPreset?.id === 'wbpsc-signature-138x59' && <Check className="w-3 h-3 shrink-0" />}
                      </button>
                    </div>
                  </div>
                )}

                <div className="studio-meta-bar studio-inline-controls flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    {/* Image type and editing mode share one compact toolbar (exact same size as main page canvas tool) */}
                    {isCoastGuardActive ? (
                      <div className="studio-mode-tabs coast-guard-mode-tabs" role="group" aria-label="Coast Guard Document Type">
                        <button
                          type="button"
                          data-mode="signature"
                          data-step="01"
                          aria-pressed={targetType === 'signature' && (selectedPreset?.id === 'indian-coast-guard' || (!selectedPreset?.id.includes('-photo') && !selectedPreset?.id.includes('-thumb') && !selectedPreset?.id.includes('-document')))}
                          onClick={() => selectCoastGuardSection('signature')}
                          title="Signature.jpg • 140×60 px • 10–50 KB"
                        >
                          <PenTool className="w-3.5 h-3.5 shrink-0" />
                          <span>1. Signature</span>
                        </button>
                        <button
                          type="button"
                          data-mode="photo"
                          data-step="02"
                          aria-pressed={targetType === 'photo' || selectedPreset?.id === 'indian-coast-guard-photo'}
                          onClick={() => selectCoastGuardSection('photo')}
                          title="Passport_Photograph.jpg • 350×450 px • 10–50 KB (Chalk Slate)"
                        >
                          <Camera className="w-3.5 h-3.5 shrink-0" />
                          <span>2. Slate Photo</span>
                        </button>
                        <button
                          type="button"
                          data-mode="document"
                          data-step="03"
                          aria-pressed={targetType === 'document' && (selectedPreset?.id === 'indian-coast-guard-thumb-doc' || selectedPreset?.id === 'indian-coast-guard-thumb')}
                          onClick={() => selectCoastGuardSection('thumb')}
                          title="Thumb_Impression.jpg • 240×240 px • 10–50 KB (Left Thumb)"
                        >
                          <span className="text-sm shrink-0 leading-none">👆</span>
                          <span>3. Left Thumb</span>
                        </button>
                        <button
                          type="button"
                          data-mode="document"
                          data-step="04"
                          aria-pressed={targetType === 'document' && selectedPreset?.id === 'indian-coast-guard-document'}
                          onClick={() => selectCoastGuardSection('document')}
                          title="Certificate.jpg • 700×990 px • 50–150 KB (Marksheets)"
                        >
                          <FileText className="w-3.5 h-3.5 shrink-0" />
                          <span>4. Certificate</span>
                        </button>
                      </div>
                    ) : studioModeTabs && (
                      <div className="studio-mode-tabs" role="group" aria-label="Studio image type">
                        {(['signature', 'photo', 'document'] as const).map((type, index) => <button key={type} type="button" data-mode={type} data-step={`0${index + 1}`} aria-pressed={targetType === type} onClick={() => switchTargetType(type)}>
                          {type === 'signature' ? <PenTool className="w-4 h-4" /> : type === 'photo' ? <Camera className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                          <span>{lang === 'hi' ? (type === 'signature' ? 'हस्ताक्षर' : type === 'photo' ? 'फोटो' : 'दस्तावेज़') : lang === 'mr' ? (type === 'signature' ? 'स्वाक्षरी' : type === 'photo' ? 'फोटो' : 'कागदपत्रे') : (type === 'signature' ? 'Signature' : type === 'photo' ? 'Photo' : 'Documents')}</span>
                          {lang === 'en' && <small className="studio-mode-description">{type === 'signature' ? 'Crop & clean' : type === 'photo' ? 'Portrait sizing' : 'Scan & compress'}</small>}
                        </button>)}
                      </div>
                    )}
                    <div className="editor-mode-toggle inline-flex items-center gap-1 p-0.5 rounded-lg bg-muted/60 border border-border shrink-0">
                      <button
                        type="button"
                        onClick={() => setToolMode('single')}
                        aria-pressed={toolMode === 'single'}
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
                        aria-pressed={toolMode === 'batch'}
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

                    <div className="canvas-title flex items-center gap-2 pl-1 border-l border-border/60">
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                        <Maximize className="w-4 h-4 text-primary" />
                        Interactive Studio Canvas ({modeConfig.shortNoun}):
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
                    </div>
                  )}
                </div>

                {focusedWorkspace && <WorkspacePresetPicker presets={workspacePresets} selected={selectedPreset} mode={targetType} width={targetWidthPx} height={targetHeightPx} minKb={minKb} maxKb={maxKb} onSelect={preset => applyPreset({ ...preset, targetType: presetMode(preset) })} />}
                {focusedWorkspace && <p className="mobile-studio-hint">{sourceImage ? "Resized automatically. Adjust the crop if needed, then preview and download." : "Choose your file type and preset, then upload. Resizing is automatic."}</p>}

                {/* Selection Criteria Quick Bar (Auto-Fit, Aspect Ratios & Margins) */}
                <div className="crop-options p-2.5 rounded-xl bg-muted/30 border border-border/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {/* Smart Auto-Fit Button */}
                    <button
                      type="button"
                      onClick={handleAutoFit}
                      disabled={!sourceImage}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-bold shadow-xs hover:opacity-95 active:scale-95 transition disabled:opacity-40 cursor-pointer"
                      title={modeConfig.autoFitTitle}
                    >
                      {targetType === 'photo' ? (
                        <User className="w-3.5 h-3.5 text-primary-foreground" />
                      ) : targetType === 'document' ? (
                        <Maximize2 className="w-3.5 h-3.5 text-primary-foreground" />
                      ) : (
                        <Wand2 className="w-3.5 h-3.5 text-primary-foreground" />
                      )}
                      <span>{modeConfig.autoFitBtn}</span>
                    </button>

                    {/* Quick Aspect Ratio Chips */}
                    <div className="hidden sm:flex items-center gap-1 pl-1 border-l border-border/60">
                      <span className="text-[10px] uppercase font-bold text-muted-foreground">Ratio:</span>
                      <button
                        type="button"
                        onClick={() => applyAspectPreset(selectedPreset ? selectedPreset.aspectRatio : targetWidthPx / targetHeightPx)}
                        className={`ratio-btn px-2 py-1 rounded-md text-[11px] font-medium transition cursor-pointer ${
                          lockAspect && !modeConfig.ratios.some(item => item.ratio !== 'free' && Math.abs(crop.width / crop.height - Number(item.ratio)) < 0.01)
                            ? 'bg-primary text-primary-foreground font-bold border border-primary shadow-xs'
                            : 'bg-card text-slate-800 dark:text-slate-200 border border-border hover:bg-muted font-medium'
                        }`}
                        data-ratio="default"
                      >
                        {selectedPreset?.shortCode || 'Preset'}
                      </button>
                      {modeConfig.ratios.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => applyAspectPreset(item.ratio)}
                          className={`ratio-btn px-2 py-1 rounded-md text-[11px] font-medium transition cursor-pointer ${
                            (item.ratio === 'free' && !lockAspect) || (item.ratio !== 'free' && lockAspect && Math.abs(crop.width / crop.height - Number(item.ratio)) < 0.01)
                              ? 'bg-primary text-primary-foreground font-bold border border-primary shadow-xs'
                              : 'bg-card text-slate-800 dark:text-slate-200 border border-border hover:bg-muted font-medium'
                          }`}
                          data-ratio={item.label}
                          title={item.title}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Margin Padding Chips — hidden on mobile to prevent overflow */}
                  <div className="hidden sm:flex items-center gap-1">
                    <span className="text-[10px] uppercase font-bold text-muted-foreground">Margin:</span>
                    <button
                      type="button"
                      onClick={() => applyMarginPreset(0.9)}
                      disabled={!sourceImage}
                      className="px-2 py-1 rounded-md text-[11px] font-medium bg-card hover:bg-muted text-foreground border border-border transition disabled:opacity-40 cursor-pointer"
                      title={targetType === 'photo' ? "Tight crop on face" : targetType === 'document' ? "Tight crop on text" : "Contract crop tighter"}
                    >
                      Tight
                    </button>
                    <button
                      type="button"
                      onClick={() => applyMarginPreset(1.15)}
                      disabled={!sourceImage}
                      className="px-2 py-1 rounded-md text-[11px] font-medium bg-card hover:bg-muted text-foreground border border-border transition disabled:opacity-40 cursor-pointer"
                      title={targetType === 'photo' ? "Standard passport head-and-shoulder margin" : targetType === 'document' ? "Standard document margin" : "Add balanced breathing room (Prevents edge collision)"}
                    >
                      Balanced
                    </button>
                    <button
                      type="button"
                      onClick={() => applyMarginPreset(1.3)}
                      disabled={!sourceImage}
                      className="px-2 py-1 rounded-md text-[11px] font-medium bg-card hover:bg-muted text-foreground border border-border transition disabled:opacity-40 cursor-pointer"
                      title={targetType === 'photo' ? "Include extra background width" : targetType === 'document' ? "Include full certificate outer borders" : "Expand margin wide"}
                    >
                      Wide
                    </button>
                  </div>
                </div>

                {/* Dynamic Block-Capital Scrutiny Failure Check Banner */}
                {/* CTET Dual-Language Strategic Scoring Insight */}
                {(selectedPreset?.id === 'ctet-exam' || selectedPreset?.id === 'ctet-photo') && showCtetStrategyTip && (
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 text-amber-950 dark:text-amber-200 text-xs flex items-start justify-between gap-3 shadow-2xs">
                    <div className="flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <div className="font-bold text-[11px] text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                          <span>CTET Strategic Scoring Tip: Language 1 vs Language 2</span>
                          <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono bg-amber-500/20 text-amber-800 dark:text-amber-200 uppercase font-bold">+10–15 Marks</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          Selecting your strongest native tongue (e.g. Hindi or Regional Language) as <strong>Language 1</strong> unlocks 2 straightforward prose comprehension passages instead of complex poetry analysis required under Language 2, boosting marks significantly.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowCtetStrategyTip(false)}
                      className="text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-muted/50 cursor-pointer shrink-0"
                      title="Dismiss tip"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* Cropper Container Stage or Embedded Dropzone */}
                <div
                  id="crop-workspace"
                  className="relative overflow-hidden rounded-xl bg-muted/40 border border-border select-none min-h-[320px] sm:min-h-[400px] flex items-center justify-center p-1.5 sm:p-3"
                >
                  {sourceImage ? (
                    <div
                      ref={containerRef}
                      onMouseMove={handleContainerMouseMove}
                      onTouchMove={handleContainerMouseMove}
                      onMouseUp={handleContainerMouseUp}
                      onTouchEnd={handleContainerMouseUp}
                      className="w-full h-full flex items-center justify-center cursor-crosshair"
                      style={{
                        touchAction: 'none',
                        cursor: isDraggingCrop
                          ? activeHandle === 'move'
                            ? 'grabbing'
                            : activeHandle === 'nw' || activeHandle === 'se'
                            ? 'nwse-resize'
                            : activeHandle === 'ne' || activeHandle === 'sw'
                            ? 'nesw-resize'
                            : activeHandle === 'n' || activeHandle === 's'
                            ? 'ns-resize'
                            : activeHandle === 'e' || activeHandle === 'w'
                            ? 'ew-resize'
                            : 'crosshair'
                          : 'crosshair'
                      }}
                    >
                      <div
                        className="relative inline-block max-w-full max-h-[500px]"
                        style={{
                          transform: `scale(${cropperZoom})`,
                          transformOrigin: 'center',
                          transition: 'transform 0.15s ease-out'
                        }}
                      >
                        <img
                          id="source-image"
                          src={sourceImage.src}
                          alt={`Source ${modeConfig.noun}`}
                          draggable={false}
                          style={{
                            transform: `rotate(${rotation}deg) scaleX(${flipH ? -1 : 1}) scaleY(${flipV ? -1 : 1})`,
                            maxHeight: '480px',
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

                          {/* Face Guideline Overlay for Photo Mode */}
                          {targetType === 'photo' && showFaceGuide && (
                            <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center p-2 opacity-60">
                              <svg className="w-full h-full" viewBox="0 0 100 130" fill="none">
                                <ellipse cx="50" cy="42" rx="26" ry="32" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="text-primary" />
                                <line x1="30" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-primary/70" />
                                <path d="M15 125 C 25 85, 75 85, 85 125" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="text-primary" />
                              </svg>
                            </div>
                          )}

                          {/* Candidate Name & Date Bottom Strip Preview */}
                          {targetType === 'photo' && addNameDateStamp && (
                            <div className="absolute bottom-0 left-0 right-0 bg-white/95 border-t border-slate-800/40 text-slate-950 text-[9px] font-bold text-center py-0.5 pointer-events-none truncate shadow-xs">
                              {candidateName.trim() ? candidateName.trim().toUpperCase() : 'CANDIDATE NAME'}
                              {dateOfPhoto.trim() ? ` • DOP: ${dateOfPhoto.trim()}` : ''}
                            </div>
                          )}


                          {/* Dimensions Tooltip badge inside crop box */}
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-900/90 text-white pointer-events-none shadow whitespace-nowrap">
                            {crop.width} × {crop.height} px
                          </div>

                          {/* 8-Point Touch-Optimized Precision Resize Handles */}
                          <div
                            onMouseDown={(e) => handleCropMouseDown(e, 'nw')}
                            onTouchStart={(e) => handleCropMouseDown(e, 'nw')}
                            className="absolute -top-4 -left-4 w-9 h-9 sm:w-7 sm:h-7 flex items-center justify-center cursor-nwse-resize touch-none select-none z-10"
                            title="Resize Top-Left"
                          >
                            <div className="w-4 h-4 sm:w-3.5 sm:h-3.5 bg-primary rounded-full border-2 border-white shadow-md hover:scale-125 transition-transform pointer-events-none" />
                          </div>
                          <div
                            onMouseDown={(e) => handleCropMouseDown(e, 'ne')}
                            onTouchStart={(e) => handleCropMouseDown(e, 'ne')}
                            className="absolute -top-4 -right-4 w-9 h-9 sm:w-7 sm:h-7 flex items-center justify-center cursor-nesw-resize touch-none select-none z-10"
                            title="Resize Top-Right"
                          >
                            <div className="w-4 h-4 sm:w-3.5 sm:h-3.5 bg-primary rounded-full border-2 border-white shadow-md hover:scale-125 transition-transform pointer-events-none" />
                          </div>
                          <div
                            onMouseDown={(e) => handleCropMouseDown(e, 'sw')}
                            onTouchStart={(e) => handleCropMouseDown(e, 'sw')}
                            className="absolute -bottom-4 -left-4 w-9 h-9 sm:w-7 sm:h-7 flex items-center justify-center cursor-nesw-resize touch-none select-none z-10"
                            title="Resize Bottom-Left"
                          >
                            <div className="w-4 h-4 sm:w-3.5 sm:h-3.5 bg-primary rounded-full border-2 border-white shadow-md hover:scale-125 transition-transform pointer-events-none" />
                          </div>
                          <div
                            onMouseDown={(e) => handleCropMouseDown(e, 'se')}
                            onTouchStart={(e) => handleCropMouseDown(e, 'se')}
                            className="absolute -bottom-4 -right-4 w-9 h-9 sm:w-7 sm:h-7 flex items-center justify-center cursor-nwse-resize touch-none select-none z-10"
                            title="Resize Bottom-Right"
                          >
                            <div className="w-4 h-4 sm:w-3.5 sm:h-3.5 bg-primary rounded-full border-2 border-white shadow-md hover:scale-125 transition-transform pointer-events-none" />
                          </div>
                          <div
                            onMouseDown={(e) => handleCropMouseDown(e, 'n')}
                            onTouchStart={(e) => handleCropMouseDown(e, 'n')}
                            className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-10 h-7 flex items-center justify-center cursor-ns-resize touch-none select-none z-10"
                            title="Resize Top Edge"
                          >
                            <div className="w-6 h-2 bg-primary rounded-full border border-white shadow hover:scale-125 transition-transform pointer-events-none" />
                          </div>
                          <div
                            onMouseDown={(e) => handleCropMouseDown(e, 's')}
                            onTouchStart={(e) => handleCropMouseDown(e, 's')}
                            className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-10 h-7 flex items-center justify-center cursor-ns-resize touch-none select-none z-10"
                            title="Resize Bottom Edge"
                          >
                            <div className="w-6 h-2 bg-primary rounded-full border border-white shadow hover:scale-125 transition-transform pointer-events-none" />
                          </div>
                          <div
                            onMouseDown={(e) => handleCropMouseDown(e, 'w')}
                            onTouchStart={(e) => handleCropMouseDown(e, 'w')}
                            className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-7 h-10 flex items-center justify-center cursor-ew-resize touch-none select-none z-10"
                            title="Resize Left Edge"
                          >
                            <div className="w-2 h-6 bg-primary rounded-full border border-white shadow hover:scale-125 transition-transform pointer-events-none" />
                          </div>
                          <div
                            onMouseDown={(e) => handleCropMouseDown(e, 'e')}
                            onTouchStart={(e) => handleCropMouseDown(e, 'e')}
                            className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-10 flex items-center justify-center cursor-ew-resize touch-none select-none z-10"
                            title="Resize Right Edge"
                          >
                            <div className="w-2 h-6 bg-primary rounded-full border border-white shadow hover:scale-125 transition-transform pointer-events-none" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      id="upload-dropzone"
                      role="button"
                      tabIndex={0}
                      onClick={() => fileInputRef.current?.click()}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          fileInputRef.current?.click();
                        }
                      }}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragOver(true);
                      }}
                      onDragLeave={() => setIsDragOver(false)}
                      onDrop={handleDrop}
                      className={`w-full h-full min-h-[340px] p-3.5 sm:p-6 text-center flex flex-col items-center justify-center rounded-xl border-2 border-dashed transition-all cursor-pointer ${
                        isDragOver ? 'border-primary bg-primary/10' : 'border-border/80 bg-card/60 hover:border-primary/40'
                      }`}
                    >
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-inner border border-primary/20 mb-3">
                        <Upload className="w-7 h-7 animate-pulse" />
                      </div>
                      <p className="font-bold text-base text-foreground mb-1">
                        {focusedWorkspace && lang === 'en' ? (targetType === 'document' ? 'Upload a document image' : modeConfig.uploadBtn) : t.tool.uploadTitle}
                      </p>
                      <p className="text-xs text-muted-foreground mb-4 max-w-sm leading-relaxed">
                        {t.tool.supportedFormats} • <span className="font-semibold text-foreground">{targetWidthPx} × {targetHeightPx} px</span> ({minKb}–{maxKb} KB)
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            fileInputRef.current?.click();
                          }}
                          className="px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-xl text-xs hover:opacity-95 shadow-xs transition cursor-pointer"
                        >
                          {t.tool.uploadButton}
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            loadSingleSampleSignature();
                          }}
                          className="px-3.5 py-2 bg-card border border-border text-foreground font-medium rounded-xl text-xs hover:bg-muted transition shadow-2xs cursor-pointer"
                        >
                          {t.tool.sampleButton}
                        </button>
                        {targetType === 'signature' && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsDrawingPadOpen(true);
                            }}
                            className="px-3.5 py-2 bg-card border border-border text-foreground font-medium rounded-xl text-xs hover:bg-muted transition shadow-2xs cursor-pointer"
                          >
                            {t.tool.drawButton}
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Transformation Toolbar */}
                <div className="transform-options flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
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

                  <div className="canvas-file-actions flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <button
                      type="button"
                      onClick={() => setLockAspect(!lockAspect)}
                      aria-pressed={lockAspect}
                      title="Lock or unlock the crop aspect ratio"
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition cursor-pointer ${
                        lockAspect
                          ? 'bg-primary/10 border-primary/30 text-primary font-semibold'
                          : 'bg-card border-border text-muted-foreground'
                      }`}
                    >
                      {lockAspect ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                      <span>{lockAspect ? 'Ratio locked' : 'Free ratio'}</span>
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
                      <RefreshCw className="w-3.5 h-3.5" /> Reset Crop
                    </button>
                    <button
                      id="clear-canvas-files"
                      type="button"
                      onClick={clearAllSelectedFiles}
                      disabled={!sourceImage && batchItems.length === 0}
                      className="canvas-clear-button px-3 py-1.5 rounded-lg border border-border bg-card text-foreground transition cursor-pointer"
                      title="Remove selected files and reset the output preview"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Clear files
                    </button>
                  </div>
                </div>
              </div>

              {sourceImage && (
                <ImageRuleChecks
                  image={sourceImage}
                  source={{ name: sourceFileName, type: sourceFileType, size: sourceOriginalSize, ...sourceDimensions }}
                  preset={selectedPreset}
                  mode={targetType}
                  rule={exportRule}
                  processedResult={processedResult}
                  onClean={() => setFilters((prev) => ({ ...prev, cleanPaper: true }))}
                  onRemoveBackground={() => {
                    const fix = document.getElementById('canvas-background-fix') as HTMLDetailsElement | null;
                    if (fix) fix.open = true;
                    document.getElementById('canvas-background-fix')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    document.getElementById('remove-canvas-background')?.focus({ preventScroll: true });
                  }}
                />
              )}
              {sourceImage && <PortraitBackgroundFix key={targetType} mode={targetType} image={sourceImage} isSample={isSampleImage} onApply={image => { setProcessedResult(null); setSourceImage(image); }} />}

              {/* PHOTO-SPECIFIC CONTROLS (FACE GUIDE & NAME/DATE ON PHOTO DOP) */}
              {targetType === 'photo' && (
                <div className="rounded-2xl border-2 border-primary/25 bg-card p-3 sm:p-5 shadow-xs space-y-3 transition-all">
                  <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5 text-primary" />
                        <span>Passport Photo Compliance Tools</span>
                      </h3>
                      <span className="text-[10px] font-mono font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-md border border-primary/20">
                        Govt Norms
                      </span>
                      {!showComplianceTools && (showFaceGuide || addNameDateStamp) && (
                        <span className="text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-md border border-emerald-500/30">
                          Active
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowComplianceTools(prev => !prev)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-muted/60 hover:bg-muted text-foreground border border-border/70 hover:border-border transition cursor-pointer"
                      aria-expanded={showComplianceTools}
                      title={showComplianceTools ? "Hide photo compliance tools" : "Show photo compliance tools"}
                    >
                      <span>{showComplianceTools ? 'Hide' : 'Show'}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${showComplianceTools ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {showComplianceTools && (
                    <div className="space-y-4 pt-1">
                      {/* Face Guide Toggle */}
                      <label className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-border cursor-pointer hover:bg-muted/50 transition">
                        <div>
                          <span className="text-xs font-semibold text-foreground block">Face &amp; Shoulder Alignment Guide</span>
                          <span className="text-[10px] text-muted-foreground">Displays passport alignment oval &amp; eye level line</span>
                        </div>
                        <input
                          type="checkbox"
                          checked={showFaceGuide}
                          onChange={(e) => setShowFaceGuide(e.target.checked)}
                          className="w-4 h-4 rounded text-primary focus:ring-primary"
                        />
                      </label>

                      {/* Name & Date on Photo (DoP) Stamp */}
                      <div className="p-3.5 rounded-xl border border-primary/20 bg-primary/5 space-y-3">
                        <label className="flex items-center justify-between cursor-pointer">
                          <div>
                            <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                              <User className="w-3.5 h-3.5 text-primary" />
                              <span>Add Name &amp; Date of Photo (DoP)</span>
                            </span>
                            <span className="text-[10px] text-muted-foreground">
                              Strictly required for SSC, UPPSC, NEET &amp; BPSC uploads
                            </span>
                          </div>
                          <input
                            type="checkbox"
                            checked={addNameDateStamp}
                            onChange={(e) => setAddNameDateStamp(e.target.checked)}
                            className="w-4 h-4 rounded text-primary focus:ring-primary"
                          />
                        </label>

                        {addNameDateStamp && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-primary/10">
                            <div className="space-y-1">
                              <label htmlFor="candidate-name-input" className="text-[10px] uppercase font-bold text-muted-foreground">Candidate Full Name:</label>
                              <input
                                id="candidate-name-input"
                                type="text"
                                placeholder="e.g. RAHUL SHARMA"
                                aria-label="Candidate Full Name"
                                value={candidateName}
                                onChange={(e) => setCandidateName(e.target.value)}
                                className="w-full px-3 py-1.5 text-xs rounded-lg border border-border bg-background text-foreground font-semibold"
                              />
                            </div>
                            <div className="space-y-1">
                              <label htmlFor="date-of-photo-input" className="text-[10px] uppercase font-bold text-muted-foreground">Date of Photo (DoP):</label>
                              <input
                                id="date-of-photo-input"
                                type="text"
                                placeholder="DD/MM/YYYY"
                                aria-label="Date of Photo"
                                value={dateOfPhoto}
                                onChange={(e) => setDateOfPhoto(e.target.value)}
                                className="w-full px-3 py-1.5 text-xs rounded-lg border border-border bg-background text-foreground font-mono font-semibold"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* DOCUMENT-SPECIFIC CONTROLS (TEXT CLARITY & SCAN ENHANCER) */}
              {targetType === 'document' && (
                <div className="rounded-2xl border-2 border-primary/25 bg-card p-3 sm:p-5 shadow-xs space-y-3 transition-all">
                  <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-primary" />
                        <span>Document &amp; Certificate Scanner Tools</span>
                      </h3>
                      <span className="text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-md border border-emerald-500/30">
                        OCR Legibility
                      </span>
                      {!showDocScannerTools && documentHighContrast && (
                        <span className="text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-md border border-emerald-500/30">
                          Active
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowDocScannerTools(prev => !prev)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-muted/60 hover:bg-muted text-foreground border border-border/70 hover:border-border transition cursor-pointer"
                      aria-expanded={showDocScannerTools}
                      title={showDocScannerTools ? "Hide document scanner tools" : "Show document scanner tools"}
                    >
                      <span>{showDocScannerTools ? 'Hide' : 'Show'}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${showDocScannerTools ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {showDocScannerTools && (
                    <div className="pt-1">
                      <label className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-border cursor-pointer hover:bg-muted/50 transition">
                        <div>
                          <span className="text-xs font-semibold text-foreground block">High-Clarity Document Text Booster</span>
                          <span className="text-[10px] text-muted-foreground">Prevents blur on marksheet roll numbers, seal stamps &amp; signatures</span>
                        </div>
                        <input
                          type="checkbox"
                          checked={documentHighContrast}
                          onChange={(e) => setDocumentHighContrast(e.target.checked)}
                          className="w-4 h-4 rounded text-primary focus:ring-primary"
                        />
                      </label>
                    </div>
                  )}
                </div>
              )}

              {/* IMAGE ENHANCEMENT FILTERS */}
              <div className="enhancement-options rounded-2xl border border-border bg-card p-3 sm:p-5 shadow-xs space-y-3 transition-all">
                <div className={`flex items-center justify-between ${showEnhancementFilters ? 'border-b border-border/60 pb-2.5' : ''}`}>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      <span>Image Enhancement Filters</span>
                    </h3>
                    <span className="text-[11px] text-muted-foreground font-mono hidden sm:inline">{modeConfig.filtersSubtitle}</span>
                    {!showEnhancementFilters && (filters.cleanPaper || filters.blackAndWhite) && (
                      <span className="text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-md border border-emerald-500/30">
                        {filters.cleanPaper && filters.blackAndWhite ? 'Clean + B&W' : filters.cleanPaper ? 'Clean Paper' : 'B&W Mode'}
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowEnhancementFilters(prev => !prev)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-muted/60 hover:bg-muted text-foreground border border-border/70 hover:border-border transition cursor-pointer"
                    aria-expanded={showEnhancementFilters}
                    title={showEnhancementFilters ? "Hide image enhancement filters" : "Show image enhancement filters"}
                  >
                    <span>{showEnhancementFilters ? 'Hide' : 'Show'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${showEnhancementFilters ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {showEnhancementFilters && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs pt-1">
                    <label className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-border cursor-pointer hover:bg-muted/50 transition">
                      <div>
                        <span className="text-foreground font-semibold block">{modeConfig.cleanFilterTitle}</span>
                        <span className="text-[10px] text-muted-foreground">{modeConfig.cleanFilterSub}</span>
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
                        <span className="text-foreground font-semibold block">{modeConfig.bwFilterTitle}</span>
                        <span className="text-[10px] text-muted-foreground">{modeConfig.bwFilterSub}</span>
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
                )}
              </div>

            </div>

            {/* Right Column: Big Size Real-Time Live Preview Canvas & Custom Bounds (5 Cols, Sticky) */}
            <div className="studio-export lg:col-span-5 space-y-5 lg:sticky lg:top-20">
              {compactStudio && uploadError && <div id="upload-feedback" className="scroll-mt-24">
                <UploadChecks compact source={sourceImage ? { name: sourceFileName, type: sourceFileType, size: sourceOriginalSize, ...sourceDimensions } : null} error={uploadError} result={processedResult} preset={selectedPreset} mode={targetType} busy={isProcessing} onRestore={() => { if (selectedPreset) applyPreset(selectedPreset); }} onCrop={() => document.getElementById('studio-container')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} />
              </div>}

              {/* Big Live Output Preview Card */}
              <div className="output-card bg-card border-2 border-primary/20 rounded-2xl p-5 shadow-md space-y-4">

                {/* Header: Title, Live indicator & Inspect Button */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                      <Eye className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-foreground flex items-center gap-2">
                        <span>{compactStudio ? 'Export' : `Real-Time Output Preview (${modeConfig.shortNoun})`}</span>
                        <span className="live-badge inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          Live Sync
                        </span>
                      </h3>
                      <p className="text-[11px] text-muted-foreground">
                        {modeConfig.previewSubtitle}
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
                <div className="preview-options flex items-center justify-between p-2 rounded-xl bg-muted/40 border border-border/80 text-xs">
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
                        aria-pressed={previewScale === s.val}
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
                      aria-pressed={previewBg === 'white'}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                        previewBg === 'white'
                          ? 'bg-primary text-primary-foreground font-bold shadow-xs'
                          : 'text-muted-foreground hover:text-foreground bg-card border border-border/60'
                      }`}
                      title={targetType === 'photo' ? 'Show on Pure White Studio background' : targetType === 'document' ? 'Show on Pure White Scan background' : 'Show on Pure White Paper background'}
                    >
                      White
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreviewBg('checker')}
                      aria-pressed={previewBg === 'checker'}
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
                  className={`output-canvas p-6 rounded-2xl border border-border flex flex-col items-center justify-center min-h-[220px] sm:min-h-[260px] overflow-hidden relative transition-colors shadow-inner ${
                    previewBg === 'checker'
                      ? 'bg-[repeating-conic-gradient(#cbd5e1_0%_25%,#ffffff_0%_50%)] dark:bg-[repeating-conic-gradient(#334155_0%_25%,#0f172a_0%_50%)] [background-size:20px_20px]'
                      : 'bg-muted/30 dark:bg-slate-900/60'
                  }`}
                >
                  {processedResult ? (
                    <img
                      src={processedResult.dataUrl}
                      alt={modeConfig.previewAlt}
                      style={{
                        transform: `scale(${previewScale})`,
                        transformOrigin: 'center',
                        transition: 'transform 0.15s ease'
                      }}
                      className="max-h-[160px] sm:max-h-[200px] max-w-full object-contain rounded-lg shadow-sm border border-border/40"
                    />
                  ) : (
                    /* Simulated preview before upload */
                    <div className="flex flex-col items-center justify-center text-center space-y-3 py-2">
                      <div className={`border-2 border-dashed border-border/80 shadow-xs rounded-xl flex items-center justify-center p-3 ${targetType === 'photo' ? 'w-[140px] h-[175px]' : targetType === 'document' ? 'w-[150px] h-[190px]' : 'w-[240px] h-[90px]'} bg-card dark:bg-slate-900`}>
                        {targetType === 'photo' ? (
                          <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 space-y-1">
                            <User className="w-10 h-10 stroke-1 text-primary/60" />
                            <span className="font-bold text-xs tracking-wider text-muted-foreground">Passport Photo</span>
                          </div>
                        ) : targetType === 'document' ? (
                          <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 space-y-1">
                            <FileText className="w-10 h-10 stroke-1 text-primary/60" />
                            <span className="font-bold text-xs tracking-wider text-muted-foreground">Marksheet / Doc</span>
                          </div>
                        ) : (
                          <span className="font-serif italic text-xl text-slate-400 dark:text-slate-500 select-none tracking-wider">
                            Sample Signature
                          </span>
                        )}
                      </div>
                      <span id="preview-status-text" className="text-[11px] text-muted-foreground font-mono">
                        {modeConfig.awaitingText} ({targetWidthPx} × {targetHeightPx} px)
                      </span>
                    </div>
                  )}

                  {/* Corner Dimension Overlay Badge */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-lg text-[11px] font-mono font-bold bg-foreground/80 text-background shadow-md border border-border/20 pointer-events-none backdrop-blur-xs">
                    {targetWidthPx} × {targetHeightPx} px
                  </div>
                </div>

                {/* Exact File Size & Target Metric Pill */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-3 rounded-xl bg-muted/30 border border-border text-xs">
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Output File Size</div>
                    <div className="font-mono font-extrabold text-base text-foreground">
                      {processedResult ? `${processedResult.sizeKb} KB` : compactStudio ? 'Awaiting image' : `${selectedPreset?.recommendedKb || 15} KB (Est)`}
                    </div>
                    {processedResult && <div className="text-[10px] text-muted-foreground break-words">{processedResult.width}×{processedResult.height} px · {processedResult.format} · {processedResult.sizeBytes.toLocaleString()} bytes</div>}
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
                        !processedResult.withinTargetBounds || inspectExport(processedResult, exportRule).length > 0 || (selectedPreset && inspectExport(processedResult, selectedPreset).length > 0) ? (
                          <button
                            type="button"
                            onClick={() => setShowExportChecks(true)}
                            className="inline-flex items-center gap-1 font-bold text-amber-900 dark:text-amber-300 bg-amber-500/15 border border-amber-500/40 px-2 py-0.5 rounded text-[10px] cursor-pointer hover:bg-amber-500/25 transition"
                            title="Click to view file checks"
                          >
                            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                            <span>Fix Export</span>
                          </button>
                        ) : backgroundIssues?.some((i) => i.code === 'ruled_paper') ? (
                          <button
                            type="button"
                            onClick={() => setShowExportChecks(true)}
                            className="inline-flex items-center gap-1 font-bold text-rose-700 dark:text-rose-400 bg-rose-500/15 border border-rose-500/40 px-2 py-0.5 rounded text-[10px] cursor-pointer hover:bg-rose-500/25 transition"
                            title="Ruled notebook lines detected. UPSSSC and exams require plain unruled white paper."
                          >
                            <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                            <span>Notebook Lines</span>
                          </button>
                        ) : backgroundIssues?.some((i) => i.code === 'background') ? (
                          <button
                            type="button"
                            onClick={() => setShowExportChecks(true)}
                            className="inline-flex items-center gap-1 font-bold text-amber-700 dark:text-amber-400 bg-amber-500/15 border border-amber-500/40 px-2 py-0.5 rounded text-[10px] cursor-pointer hover:bg-amber-500/25 transition"
                            title="Non-white or shadowed background detected"
                          >
                            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                            <span>Check Background</span>
                          </button>
                        ) : isCoastGuardActive && targetType === 'photo' && !slateConfirmed ? (
                          <button
                            type="button"
                            onClick={() => setShowExportChecks(true)}
                            className="inline-flex items-center gap-1 font-bold text-amber-700 dark:text-amber-400 bg-amber-500/15 border border-amber-500/40 px-2 py-0.5 rounded text-[10px] cursor-pointer hover:bg-amber-500/25 transition"
                            title="Indian Coast Guard requires physical slate with Name & Date"
                          >
                            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                            <span>Confirm Slate</span>
                          </button>
                        ) : isUpssscActive && targetType === 'signature' && !upssscConfirmed ? (
                          <button
                            type="button"
                            onClick={() => setShowExportChecks(true)}
                            className="inline-flex items-center gap-1 font-bold text-amber-700 dark:text-amber-400 bg-amber-500/15 border border-amber-500/40 px-2 py-0.5 rounded text-[10px] cursor-pointer hover:bg-amber-500/25 transition"
                            title="UPSSSC PET Clause 9.3: English Sign + Hindi Name on Unruled White Paper"
                          >
                            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                            <span>Clause 9.3 Check</span>
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setShowExportChecks(true)}
                            className="inline-flex items-center gap-1 font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded text-[11px] cursor-pointer hover:bg-emerald-500/25 transition"
                            title="Click to inspect compliance checklist"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Ready</span>
                          </button>
                        )
                      ) : (
                        <span className="text-[11px] text-muted-foreground font-mono">{compactStudio ? 'Awaiting image' : 'Ready to process'}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Warning Alert if out of bounds */}
                {processedResult && !processedResult.withinTargetBounds && (
                  <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-950/70 border-2 border-amber-500/40 text-amber-900 dark:text-amber-200 text-xs space-y-1.5">
                    <div className="flex items-start gap-2 font-semibold">
                      <AlertCircle className="w-4 h-4 text-amber-800 dark:text-amber-300 shrink-0 mt-0.5" />
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

                {/* 🚨 COMPLIANCE & REJECTION WARNING AUDIT (BELOW PREVIEW IMAGE FOR ALL TOOLS ACROSS THE WEBSITE) */}
                {processedResult && (
                  <ComplianceRejectionAudit
                    preset={selectedPreset}
                    mode={targetType}
                    rule={exportRule}
                    sourceImage={sourceImage}
                    processedResult={processedResult}
                    backgroundIssues={backgroundIssues}
                    slateConfirmed={slateConfirmed}
                    onConfirmSlate={setSlateConfirmed}
                    upssscConfirmed={upssscConfirmed}
                    onConfirmUpsssc={setUpssscConfirmed}
                    onRemoveBackground={() => {
                      const fix = document.getElementById('canvas-background-fix') as HTMLDetailsElement | null;
                      if (fix) {
                        fix.open = true;
                        fix.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        document.getElementById('remove-canvas-background')?.focus({ preventScroll: true });
                      }
                    }}
                    onClean={() => {
                      setFilters((prev) => ({
                        ...prev,
                        cleanPaper: true,
                        blackAndWhite: true,
                        contrast: Math.max(prev.contrast, 20),
                      }));
                      addToast('Clean White Paper & Pure Ink Filter applied. Ruled lines bleached.', 'Filter Applied', 'success');
                    }}
                    variant="previewCard"
                  />
                )}

                {/* Primary Download & Copy Action Buttons */}
                <div className="space-y-2 pt-1">
                  <button
                    id="download-btn"
                    type="button"
                    disabled={(compactStudio && !processedResult) || isProcessing}
                    onClick={() => {
                      if (processedResult) {
                        setShowExportChecks(true);
                      } else {
                        fileInputRef.current?.click();
                      }
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-primary-foreground font-bold shadow-md shadow-primary/20 hover:opacity-95 active:scale-98 transition text-xs sm:text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Download className="w-4 h-4" />
                    <span>
                      {processedResult
                        ? (lang === 'hi'
                            ? `रिसाइज ${targetType === 'photo' ? 'फोटो' : targetType === 'document' ? 'दस्तावेज़' : 'हस्ताक्षर'} डाउनलोड करें (${processedResult.sizeKb} KB • ${targetFormat === 'image/jpeg' ? 'JPG' : targetFormat === 'image/png' ? 'PNG' : 'WEBP'})`
                            : lang === 'mr'
                            ? `रिसाइझ ${targetType === 'photo' ? 'फोटो' : targetType === 'document' ? 'दस्तऐवज' : 'स्वाक्षरी'} डाउनलोड करा (${processedResult.sizeKb} KB • ${targetFormat === 'image/jpeg' ? 'JPG' : targetFormat === 'image/png' ? 'PNG' : 'WEBP'})`
                            : modeConfig.downloadReady(processedResult.sizeKb, targetFormat === 'image/jpeg' ? 'jpg' : targetFormat === 'image/png' ? 'png' : 'webp'))
                        : (lang === 'hi'
                            ? `डाउनलोड करने के लिए पहले फ़ाइल चुनें`
                            : lang === 'mr'
                            ? `डाउनलोड करण्यासाठी आधी फाईल निवडा`
                            : modeConfig.downloadEmpty)}
                    </span>
                  </button>

                  {hasDownloaded && processedResult && downloadedFileName && (
                    <div role="status" className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3 text-xs space-y-2">
                      <div className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-200">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Download started: {downloadedFileName}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        In Chrome, open <strong>⋮ → Downloads</strong> to find the file, then upload it to the application form. This {processedResult.format} is {processedResult.width} × {processedResult.height} px and {processedResult.sizeKb} KB.
                      </p>
                      <button
                        type="button"
                        onClick={handleDownload}
                        className="min-h-[40px] rounded-lg border border-emerald-600/40 bg-card px-3 py-2 font-semibold text-emerald-800 dark:text-emerald-200 transition hover:bg-emerald-500/10"
                      >
                        Download again
                      </button>
                    </div>
                  )}

                  <FeedbackPrompt downloaded={hasDownloaded} tool={targetType} />

                  {processedResult && (
                    <>
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

                      <button
                        id="download-pdf-btn"
                        type="button"
                        onClick={handleDownloadPdf}
                        disabled={isGeneratingPdf}
                        className={`w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-bold transition cursor-pointer ${
                          targetType === 'document'
                            ? 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-800 dark:text-amber-200 border-amber-500/30 shadow-xs'
                            : 'bg-card hover:bg-muted/70 text-foreground border-border'
                        }`}
                        title="Download compliant single-page PDF (< 300 KB) for UPSC OTR, GATE & State PSC portals"
                      >
                        <FileText className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        <span>
                          {isGeneratingPdf
                            ? 'Generating PDF Document...'
                            : `Download as PDF (${targetType === 'document' ? 'UPSC / GATE / PSC < 300 KB' : 'PDF Format'})`}
                        </span>
                      </button>

                      {/* Send applicants only to the selected preset's official destination. */}
                      {(selectedPreset?.id === 'ctet-exam' || selectedPreset?.id === 'ctet-photo' || (hasDownloaded && Boolean(selectedPreset?.sourceUrl))) && (
                        <div className="pt-3 border-t border-border/80 space-y-2">
                          <div className="p-3 rounded-xl bg-primary/10 border border-primary/25 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-bold text-foreground flex items-center gap-1.5">
                                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                                <span>Official Portal Submission</span>
                              </span>
                              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-primary/20 text-primary font-bold">
                                48–72h Window
                              </span>
                            </div>
                            <p className="text-[11px] text-muted-foreground leading-relaxed">
                              {selectedPreset?.id === 'ctet-exam' || selectedPreset?.id === 'ctet-photo'
                                ? 'CBSE discrepancy notifications require re-uploading corrected images within 48 to 72 hours. Jump straight to the login portal below.'
                                : 'After checking the file in Downloads, upload it only on the official portal for this selected exam.'}
                            </p>
                            <a
                              href={selectedPreset?.sourceUrl || 'https://ctet.nic.in'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs transition shadow-2xs"
                            >
                              <span>
                                {selectedPreset?.id === 'ctet-exam' || selectedPreset?.id === 'ctet-photo'
                                  ? 'Open ctet.nic.in Candidate Login'
                                  : `Open ${selectedPreset?.sourceLabel || 'official application portal'}`}
                              </span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>

              </div>

              {/* Card 2: Custom Dimensions & Units Controls */}
              {compactStudio && selectedPreset && <details className="compact-requirements"><summary>Preset requirements</summary><p>{selectedPreset.notes}</p><p>Ink: {selectedPreset.inkRequirement}. Verify the current application notice.</p></details>}
              {compactStudio && <button type="button" className="compact-advanced" aria-expanded={studioAdvanced} aria-controls="studio-custom-bounds" onClick={() => setStudioAdvanced(!studioAdvanced)}><SlidersHorizontal size={15} />Advanced settings<ChevronDown size={14} /></button>}
              <SettingsPanel id={compactStudio ? 'studio-custom-bounds' : undefined} hidden={compactStudio && !studioAdvanced} className="custom-export-settings bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 text-xs">
                {focusedWorkspace && <summary className="cursor-pointer font-semibold text-sm">Advanced settings <span className="text-xs font-normal text-muted-foreground">· pixels, cm and KB limits</span></summary>}
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
                        aria-label={`Select unit ${u}`}
                        className={`min-h-[36px] min-w-[36px] flex items-center justify-center rounded text-[11px] font-mono transition cursor-pointer ${
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
                    <label htmlFor="width-input" className="text-muted-foreground font-medium flex justify-between">
                      <span>Width ({unit})</span>
                      <span className="font-mono text-foreground font-bold">{targetWidthPx}px</span>
                    </label>
                    <div className="flex items-center border border-border rounded-lg overflow-hidden bg-background min-h-[44px]">
                      <button
                        type="button"
                        onClick={() => adjustWidth(-1)}
                        aria-label="Decrease width"
                        className="w-7 sm:w-8 min-w-[28px] sm:min-w-[32px] shrink-0 min-h-[44px] flex items-center justify-center hover:bg-muted font-bold text-foreground cursor-pointer text-sm select-none"
                      >
                        -
                      </button>
                      <input
                        id="width-input"
                        type="text"
                        inputMode="decimal"
                        aria-label={`Target width in ${unit}`}
                        value={widthInput}
                        onChange={(e) => handleWidthChange(e.target.value)}
                        className="w-full min-w-0 px-0.5 text-center font-mono font-bold text-sm text-foreground bg-transparent focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => adjustWidth(1)}
                        aria-label="Increase width"
                        className="w-7 sm:w-8 min-w-[28px] sm:min-w-[32px] shrink-0 min-h-[44px] flex items-center justify-center hover:bg-muted font-bold text-foreground cursor-pointer text-sm select-none"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="height-input" className="text-muted-foreground font-medium flex justify-between">
                      <span>Height ({unit})</span>
                      <span className="font-mono text-foreground font-bold">{targetHeightPx}px</span>
                    </label>
                    <div className="flex items-center border border-border rounded-lg overflow-hidden bg-background min-h-[44px]">
                      <button
                        type="button"
                        onClick={() => adjustHeight(-1)}
                        aria-label="Decrease height"
                        className="w-7 sm:w-8 min-w-[28px] sm:min-w-[32px] shrink-0 min-h-[44px] flex items-center justify-center hover:bg-muted font-bold text-foreground cursor-pointer text-sm select-none"
                      >
                        -
                      </button>
                      <input
                        id="height-input"
                        type="text"
                        inputMode="decimal"
                        aria-label={`Target height in ${unit}`}
                        value={heightInput}
                        onChange={(e) => handleHeightChange(e.target.value)}
                        className="w-full min-w-0 px-0.5 text-center font-mono font-bold text-sm text-foreground bg-transparent focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => adjustHeight(1)}
                        aria-label="Increase height"
                        className="w-7 sm:w-8 min-w-[28px] sm:min-w-[32px] shrink-0 min-h-[44px] flex items-center justify-center hover:bg-muted font-bold text-foreground cursor-pointer text-sm select-none"
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
                      <label htmlFor="min-kb-input" className="text-muted-foreground text-[11px] block">Min KB (Floor)</label>
                      <div className="flex items-center border border-border rounded-lg overflow-hidden bg-background min-h-[44px]">
                        <button
                          type="button"
                          onClick={() => adjustMinKb(-1)}
                          aria-label="Decrease minimum KB limit"
                          className="w-7 sm:w-8 min-w-[28px] sm:min-w-[32px] shrink-0 min-h-[44px] flex items-center justify-center hover:bg-muted font-bold text-foreground cursor-pointer text-sm select-none"
                        >
                          -
                        </button>
                        <input
                          id="min-kb-input"
                          type="text"
                          inputMode="numeric"
                          aria-label="Minimum file size in KB"
                          value={minKbInput}
                          onChange={(e) => handleMinKbChange(e.target.value)}
                          className="w-full min-w-0 px-0.5 text-center font-mono font-bold text-sm text-foreground bg-transparent focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => adjustMinKb(1)}
                          aria-label="Increase minimum KB limit"
                          className="w-7 sm:w-8 min-w-[28px] sm:min-w-[32px] shrink-0 min-h-[44px] flex items-center justify-center hover:bg-muted font-bold text-foreground cursor-pointer text-sm select-none"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="max-kb-input" className="text-muted-foreground text-[11px] block">Max KB (Ceiling)</label>
                      <div className="flex items-center border border-border rounded-lg overflow-hidden bg-background min-h-[44px]">
                        <button
                          type="button"
                          onClick={() => adjustMaxKb(-1)}
                          aria-label="Decrease maximum KB limit"
                          className="w-7 sm:w-8 min-w-[28px] sm:min-w-[32px] shrink-0 min-h-[44px] flex items-center justify-center hover:bg-muted font-bold text-foreground cursor-pointer text-sm select-none"
                        >
                          -
                        </button>
                        <input
                          id="max-kb-input"
                          type="text"
                          inputMode="numeric"
                          aria-label="Maximum file size in KB"
                          value={maxKbInput}
                          onChange={(e) => handleMaxKbChange(e.target.value)}
                          className="w-full min-w-0 px-0.5 text-center font-mono font-bold text-sm text-foreground bg-transparent focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => adjustMaxKb(1)}
                          aria-label="Increase maximum KB limit"
                          className="w-7 sm:w-8 min-w-[28px] sm:min-w-[32px] shrink-0 min-h-[44px] flex items-center justify-center hover:bg-muted font-bold text-foreground cursor-pointer text-sm select-none"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </SettingsPanel>

            </div>

          </div>
        </div>
      )}

      {/* On-Screen Signature Drawing Pad Modal */}
      {isDrawingPadOpen && (
        <Suspense fallback={<div role="status" className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 text-white">Loading signature pad…</div>}>
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
        </Suspense>
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
                  <span>{modeConfig.inspectorTitle}</span>
                </h3>
                <p className="text-xs text-muted-foreground">
                  {modeConfig.inspectorDesc}
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
                  Raw Source Image
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
            <div className="p-6 bg-muted/40 dark:bg-slate-900/50 flex items-center justify-center min-h-[260px] overflow-auto relative">
              <div className="relative inline-block border border-border/60 rounded-lg shadow-md bg-white overflow-hidden p-2">
                {inspectTab === 'processed' ? (
                  <img
                    src={processedResult.dataUrl}
                    alt={modeConfig.previewAlt}
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
                      alt={`Original Source ${modeConfig.noun}`}
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
                <div className={`font-bold flex items-center justify-center gap-1 ${selectedPreset?.portalExactSpecsVerified === false || (selectedPreset && inspectExport(processedResult, selectedPreset).length > 0) ? 'text-amber-700 dark:text-amber-300' : 'text-emerald-600 dark:text-emerald-400'}`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{selectedPreset?.portalExactSpecsVerified === false ? 'Check advertisement' : selectedPreset && inspectExport(processedResult, selectedPreset).length > 0 ? 'Preset mismatch' : 'Verified OK'}</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-3 sm:p-4 border-t border-border bg-card flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-2.5">
              <button
                type="button"
                onClick={() => setIsInspectModalOpen(false)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold transition text-center cursor-pointer"
              >
                Close Inspector
              </button>
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  disabled={isGeneratingPdf}
                  className="flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                  title="Download as single-page PDF document"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>{isGeneratingPdf ? 'PDF...' : 'Download PDF'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowExportChecks(true)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-md shadow-primary/25 hover:opacity-95 transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download File</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toast Notification Stack */}
      {focusedWorkspace && toolMode === 'single' && sourceImage && <MobileConversionBar result={processedResult} busy={isProcessing || isDraggingCrop} error={uploadError} onReview={() => setShowExportChecks(true)} />}
      <ExportChecksDialog
        open={showExportChecks}
        result={processedResult}
        preset={selectedPreset}
        rule={exportRule}
        busy={isProcessing}
        mode={targetType}
        slateConfirmed={slateConfirmed}
        onConfirmSlate={setSlateConfirmed}
        upssscConfirmed={upssscConfirmed}
        onConfirmUpsssc={setUpssscConfirmed}
        onClose={() => setShowExportChecks(false)}
        onDownload={() => {
          handleDownload();
          setShowExportChecks(false);
        }}
        onRestore={() => {
          if (selectedPreset) applyPreset(selectedPreset);
          setShowExportChecks(false);
        }}
        onRemoveBackground={() => {
          setShowExportChecks(false);
          setTimeout(() => {
            const fix = document.getElementById('canvas-background-fix') as HTMLDetailsElement | null;
            if (fix) {
              fix.open = true;
              fix.scrollIntoView({ behavior: 'smooth', block: 'center' });
              document.getElementById('remove-canvas-background')?.focus({ preventScroll: true });
            }
          }, 120);
        }}
        onClean={() => {
          setShowExportChecks(false);
          setFilters((prev) => ({
            ...prev,
            cleanPaper: true,
            blackAndWhite: true,
            contrast: Math.max(prev.contrast, 20),
          }));
          addToast('Clean White Paper & Pure Ink Filter applied. Ruled lines bleached.', 'Filter Applied', 'success');
        }}
      />
      <ToastNotification toasts={toasts} onDismiss={removeToast} />

    </div>
  );
};

