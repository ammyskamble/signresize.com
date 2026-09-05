export type UnitType = 'px' | 'cm' | 'mm' | 'in';

export type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp';

export interface ExamPreset {
  id: string;
  name: string;
  shortCode: string;
  authority: string;
  category: 'SSC' | 'Banking' | 'UPSC' | 'Engineering' | 'Railways' | 'Identity' | 'State PSC' | 'General';
  widthPx: number;
  heightPx: number;
  widthCm?: number;
  heightCm?: number;
  minKb: number;
  maxKb: number;
  recommendedKb: number;
  dpi: number;
  format: 'JPG' | 'JPEG' | 'PNG';
  aspectRatio: number; // width / height
  notes: string;
  inkRequirement: 'Black Ink Only' | 'Black or Blue Ink' | 'Any Ink';
  isPopular?: boolean;
}

export interface CropArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface FilterOptions {
  cleanPaper: boolean; // Auto-whitens paper and enhances ink contrast
  brightness: number;  // -50 to +50 (default 0)
  contrast: number;    // -50 to +50 (default 0)
  blackAndWhite: boolean;
  threshold: number;   // 0-255 (for signature sharpening)
}

export interface ResizeConfig {
  unit: UnitType;
  width: number;
  height: number;
  dpi: number;
  lockAspectRatio: boolean;
  minKb: number;
  maxKb: number;
  format: OutputFormat;
  rotation: number;    // 0, 90, 180, 270
  flipHorizontal: boolean;
  flipVertical: boolean;
}

export interface ProcessedImageResult {
  blob: Blob;
  dataUrl: string;
  width: number;
  height: number;
  sizeBytes: number;
  sizeKb: number;
  format: string;
  withinTargetBounds: boolean;
}
