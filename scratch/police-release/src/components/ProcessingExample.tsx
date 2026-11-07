import { useEffect, useState } from 'react';

export function ProcessingExample() {
  const [example, setExample] = useState<{ before: string; after: string; bytes: number } | null>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    let cancelled = false;
    let outputUrl = '';
    (async () => {
      try {
        const [{ createSampleSignatureData }, { renderProcessedCanvas, compressCanvasToTargetSize }] = await Promise.all([import('../utils/sampleImages'), import('../utils/imageProcessor')]);
        const before = createSampleSignatureData('Sample Signature', 'Generated demonstration', 600, 250);
        const image = new Image();
        await new Promise<void>((resolve, reject) => { image.onload = () => resolve(); image.onerror = reject; image.src = before; });
        if (cancelled) return;
        const canvas = renderProcessedCanvas(image, 600, 250, { x: 8.33, y: 0, width: 583.33, height: 250 }, 140, 60, 0, false, false, { cleanPaper: true, blackAndWhite: false, brightness: 0, contrast: 15, threshold: 160 });
        const result = await compressCanvasToTargetSize(canvas, 'image/jpeg', 10, 20, 15, true);
        outputUrl = result.dataUrl;
        if (cancelled) { URL.revokeObjectURL(outputUrl); return; }
        setExample({ before, after: result.dataUrl, bytes: result.sizeBytes });
      } catch { if (!cancelled) setError(true); }
    })();
    return () => { cancelled = true; if (outputUrl) URL.revokeObjectURL(outputUrl); };
  }, []);
  return <section id="processing-example" className="rounded-xl border border-border bg-card p-4 space-y-3">
    <h2 className="text-lg font-bold">Before and after processing</h2>
    <p className="text-xs text-muted-foreground">A generated demonstration using the same cleanup, resizing and JPG compression engine as the studio.</p>
    {example ? <div className="grid sm:grid-cols-2 gap-3">
      <figure className="rounded-lg border border-border p-3"><img src={example.before} alt="Generated signature on tinted paper before cleanup" width="600" height="250" className="w-full h-28 object-contain" /><figcaption className="text-xs mt-2">Before · 600 × 250 px · tinted paper</figcaption></figure>
      <figure className="rounded-lg border border-border p-3"><img src={example.after} alt="The processed JPG signature after cleanup and resizing" width="140" height="60" className="w-full h-28 object-contain" /><figcaption className="text-xs mt-2">After · 140 × 60 px · {(example.bytes / 1024).toFixed(2)} KB JPG</figcaption></figure>
    </div> : <p role="status" className="text-sm">{error ? 'Demo could not load. Try Sample in the studio to inspect the result.' : 'Preparing a processing example…'}</p>}
    <p className="text-[11px] text-muted-foreground">This is a demonstration, not a customer result or a guarantee of portal acceptance. Submit your own handwritten signature following your exam notice.</p>
  </section>;
}
