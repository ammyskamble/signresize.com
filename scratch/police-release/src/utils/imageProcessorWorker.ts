import type { CropArea, FilterOptions, OutputFormat, ProcessedImageResult, ToolTargetMode } from '../types';
import type { UploadIssue } from './uploadValidation';

export interface ImageWorkerOptions {
  crop: CropArea; targetWidth: number; targetHeight: number; rotation: number; flipH: boolean; flipV: boolean;
  filters: FilterOptions; format: OutputFormat; minKb: number; maxKb: number; targetKb: number; targetType: ToolTargetMode;
  candidateName: string; dateOfPhoto: string; addNameDateStamp: boolean; documentHighContrast: boolean; presetNotes?: string;
}

export function canProcessImagesOffThread() {
  return typeof Worker !== 'undefined' && typeof OffscreenCanvas !== 'undefined' && typeof createImageBitmap !== 'undefined';
}

export async function processImageOffThread(source: HTMLImageElement, options: ImageWorkerOptions): Promise<{ result: ProcessedImageResult; issues: UploadIssue[] }> {
  if (!canProcessImagesOffThread()) throw new Error('Off-thread image processing is not supported');
  const bitmap = await createImageBitmap(source);
  const worker = new Worker(new URL('../workers/imageProcessor.worker.ts', import.meta.url), { type: 'module' });
  return new Promise((resolve, reject) => {
    const finish = () => worker.terminate();
    worker.onmessage = (event: MessageEvent<{ result?: ProcessedImageResult; issues?: UploadIssue[]; error?: string }>) => {
      finish();
      if (event.data.error || !event.data.result) reject(new Error(event.data.error || 'Image processing failed'));
      else resolve({ result: { ...event.data.result, dataUrl: URL.createObjectURL(event.data.result.blob) }, issues: event.data.issues || [] });
    };
    worker.onerror = () => { finish(); reject(new Error('Image worker failed')); };
    worker.postMessage({ bitmap, sourceWidth: source.naturalWidth, sourceHeight: source.naturalHeight, ...options }, [bitmap]);
  });
}
