import { createPdfFromJpegBlob, type PdfGenerationOptions } from '../utils/pdfGenerator';

self.onmessage = async (event: MessageEvent<{ jpegBlob: Blob; width: number; height: number; options: PdfGenerationOptions }>) => {
  try {
    const { jpegBlob, width, height, options } = event.data;
    const pdf = await createPdfFromJpegBlob(jpegBlob, width, height, options);
    self.postMessage({ pdf });
  } catch (error) {
    self.postMessage({ error: error instanceof Error ? error.message : 'PDF generation failed' });
  }
};
