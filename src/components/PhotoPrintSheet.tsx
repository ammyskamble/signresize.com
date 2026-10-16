import { useCallback, useEffect, useRef, useState } from 'react';
import { PHOTO_SHEET, photoSheetPositions, coverCrop } from '../utils/examDayTools';
import { createPdfFromJpegBlob } from '../utils/pdfGenerator';

export function PhotoPrintSheet() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const tile = useRef<HTMLCanvasElement | null>(null);
  const loadId = useRef(0);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [filename, setFilename] = useState('');
  const [zoom, setZoom] = useState(1);
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [busy, setBusy] = useState(false);
  const [check, setCheck] = useState(false);
  useEffect(() => () => { loadId.current++; }, []);
  async function load(source: string, name: string, revoke = false) {
    const request = ++loadId.current;
    setError(''); setLoading(true);
    try {
      const img = new Image(); img.src = source; await img.decode();
      if (request !== loadId.current) return;
      setImage(img); setFilename(name); setZoom(1); setX(50); setY(50); setCheck(false);
    } catch { if (request === loadId.current) setError('This image could not be opened. Please use a JPG, PNG, or WebP photo.'); }
    finally { if (revoke) URL.revokeObjectURL(source); if (request === loadId.current) setLoading(false); }
  }
  function upload(file?: File) {
    if (!file || busy || loading) return;
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) { setError('Please choose a JPG, PNG, or WebP photo.'); return; }
    if (file.size > 20 * 1024 * 1024) { setError('Please choose an image smaller than 20 MB.'); return; }
    void load(URL.createObjectURL(file), file.name, true);
  }
  async function sample() {
    setError('');
    try {
      const { createSamplePhotoData } = await import('../utils/sampleImages');
      void load(createSamplePhotoData('SAMPLE PHOTO', '', 350, 450), 'Sample photo');
    } catch { setError('The sample could not load. You can still upload your own photo.'); }
  }
  const renderSheet = useCallback(() => {
    const el = canvas.current; const ctx = el?.getContext('2d');
    if (!el || !ctx) return;
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, el.width, el.height);
    // Resize the source once; reuse the same full-quality tile for all eight copies.
    if (image) {
      const photo = tile.current ?? (tile.current = document.createElement('canvas'));
      photo.width = PHOTO_SHEET.photoWidth; photo.height = PHOTO_SHEET.photoHeight;
      const photoCtx = photo.getContext('2d');
      if (!photoCtx) return;
      photoCtx.fillStyle = '#fff'; photoCtx.fillRect(0, 0, photo.width, photo.height);
      photoCtx.imageSmoothingEnabled = true; photoCtx.imageSmoothingQuality = 'high';
      const crop = coverCrop(image.naturalWidth, image.naturalHeight, 35 / 45, zoom, x, y);
      photoCtx.drawImage(image, crop.x, crop.y, crop.width, crop.height, 0, 0, photo.width, photo.height);
    }
    for (const pos of photoSheetPositions()) {
      if (image && tile.current) ctx.drawImage(tile.current, pos.x, pos.y);
      else { ctx.fillStyle = '#eef2ff'; ctx.fillRect(pos.x, pos.y, pos.width, pos.height); ctx.fillStyle = '#6366f1'; ctx.font = '24px sans-serif'; ctx.textAlign = 'center'; ctx.fillText('35 × 45 mm', pos.x + pos.width / 2, pos.y + pos.height / 2); }
      ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1; ctx.strokeRect(pos.x, pos.y, pos.width, pos.height);
    }
  }, [image, zoom, x, y]);
  useEffect(() => {
    const frame = requestAnimationFrame(renderSheet);
    return () => cancelAnimationFrame(frame);
  }, [renderSheet]);
  async function download(pdf: boolean) {
    if (!canvas.current || !image || !check || busy || loading) return;
    setBusy(true); setError('');
    try {
      renderSheet();
      let blob = await new Promise<Blob>((resolve, reject) => canvas.current!.toBlob(b => b ? resolve(b) : reject(new Error('Image export failed')), 'image/jpeg', .96));
      if (pdf) blob = await createPdfFromJpegBlob(blob, PHOTO_SHEET.width, PHOTO_SHEET.height, { pageSize: '4x6' });
      const url = URL.createObjectURL(blob); const a = document.createElement('a');
      a.href = url; a.download = `signresize-8-photos-6x4.${pdf ? 'pdf' : 'jpg'}`; a.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 10_000);
    } catch { setError('Could not export the sheet. Try another photo or browser.'); }
    finally { setBusy(false); }
  }
  return <section className="grid lg:grid-cols-[360px_1fr] lg:grid-rows-[auto_1fr] gap-4 items-start">
    <div className="order-1 lg:col-start-1 rounded-2xl border border-border bg-card p-4 sm:p-5 space-y-4 min-w-0">
      <div><h2 className="text-xl font-bold">Make your print sheet</h2><p className="text-xs text-muted-foreground mt-1">8 photos · 35 × 45 mm · 6 × 4 inch paper</p></div>
      <div className={`rounded-xl border-2 border-dashed p-4 text-center transition-colors ${dragging ? 'border-primary bg-primary/10' : 'border-primary/30 bg-primary/5'}`} onDragOver={e => { e.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)} onDrop={e => { e.preventDefault(); setDragging(false); upload(e.dataTransfer.files[0]); }}>
        <input ref={input} type="file" accept="image/jpeg,image/png,image/webp" aria-label="Choose application photo" className="hidden" onChange={e => { upload(e.target.files?.[0]); e.target.value = ''; }} />
        <button type="button" disabled={loading || busy} onClick={() => input.current?.click()} className="inline-flex items-center justify-center gap-2 w-full min-h-12 px-4 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-bold shadow-sm disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 16V3m-5 5 5-5 5 5M4 15v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5" /></svg>
          {loading ? 'Opening photo…' : image ? 'Replace photo' : 'Upload photo'}
        </button>
        <p className="text-xs text-muted-foreground mt-2">Choose from your device or drop a photo here</p>
        <p className="text-xs text-muted-foreground mt-1">JPG, PNG or WebP · Up to 20 MB</p>
        {filename && <p className="text-xs font-medium mt-2 break-all" role="status">{filename}</p>}
      </div>
      {error && <p role="alert" className="text-sm text-rose-600">{error}</p>}
      {!image && <div className="text-xs text-muted-foreground space-y-2"><p>Upload once. We arrange all 8 copies for you.</p><button type="button" disabled={loading} onClick={() => void sample()} className="text-primary underline underline-offset-4 min-h-10">Try a sample photo</button></div>}
    </div>
      {image && <div className="order-3 lg:col-start-1 rounded-2xl border border-border bg-card p-4 sm:p-5 space-y-4 min-w-0">
        <p className="text-sm font-semibold">Adjust your photo</p>
        {[{ name: 'Zoom', value: zoom, min: 1, max: 2.5, step: .01, set: setZoom }, { name: 'Horizontal position', value: x, min: 0, max: 100, step: 1, set: setX }, { name: 'Vertical position', value: y, min: 0, max: 100, step: 1, set: setY }].map(control => <label key={control.name} className="block text-xs font-semibold">{control.name}<input aria-label={control.name} type="range" min={control.min} max={control.max} step={control.step} value={control.value} onChange={e => { control.set(Number(e.target.value)); setCheck(false); }} disabled={loading || busy} className="block w-full h-8 accent-indigo-600" /></label>)}
        <label className="flex items-start gap-2 text-xs leading-relaxed"><input type="checkbox" checked={check} onChange={e => setCheck(e.target.checked)} disabled={loading || busy} className="mt-0.5 w-4 h-4 shrink-0" /><span>I checked the crop and confirmed the photograph size in my admit card instructions.</span></label>
        <div className="flex flex-wrap gap-2"><button disabled={!check || busy || loading} onClick={() => void download(true)} className="bg-primary text-primary-foreground px-4 min-h-11 rounded-xl font-bold text-sm disabled:opacity-40">{busy ? 'Preparing…' : 'Download print PDF'}</button><button disabled={!check || busy || loading} onClick={() => void download(false)} className="border border-border px-4 min-h-11 rounded-xl font-bold text-sm disabled:opacity-40">Download JPG</button></div>
      </div>}
    <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 rounded-2xl border border-border bg-muted/50 p-3 sm:p-5 flex flex-col items-center gap-3 min-w-0"><div className="w-full flex justify-between text-xs font-semibold text-muted-foreground"><span>SHEET PREVIEW</span><span>1800 × 1200 px</span></div><canvas ref={canvas} width={PHOTO_SHEET.width} height={PHOTO_SHEET.height} className="w-full h-auto shadow-lg bg-white" aria-label="Preview of eight passport photographs" /><p className="text-xs text-muted-foreground text-center">Use the photograph from your application when instructed. This sheet is for printing.</p><p className="text-xs text-muted-foreground leading-relaxed">Print the PDF on 6 × 4 inch paper at <strong>Actual size / 100%</strong>. Turn off “Fit to page”. JPG print size depends on the print app settings.</p></div>
  </section>;
}
