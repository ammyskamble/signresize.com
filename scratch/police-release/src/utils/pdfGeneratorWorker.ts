import type { PdfGenerationOptions } from './pdfGenerator';

export async function createPdfOffThread(jpegBlob: Blob, width: number, height: number, options: PdfGenerationOptions): Promise<Blob> {
  if (typeof Worker === 'undefined') throw new Error('Off-thread PDF generation is not supported');
  const worker = new Worker(new URL('../workers/pdfGenerator.worker.ts', import.meta.url), { type: 'module' });
  return new Promise((resolve, reject) => {
    const finish = () => worker.terminate();
    worker.onmessage = (event: MessageEvent<{ pdf?: Blob; error?: string }>) => {
      finish();
      if (event.data.error || !event.data.pdf) reject(new Error(event.data.error || 'PDF generation failed'));
      else resolve(event.data.pdf);
    };
    worker.onerror = () => { finish(); reject(new Error('PDF worker failed')); };
    worker.postMessage({ jpegBlob, width, height, options });
  });
}
