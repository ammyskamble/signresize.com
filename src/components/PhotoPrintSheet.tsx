import { useEffect, useRef, useState } from 'react';
import { PHOTO_SHEET, photoSheetPositions, coverCrop } from '../utils/examDayTools';
import { createPdfFromJpegBlob } from '../utils/pdfGenerator';
import { createSamplePhotoData } from '../utils/sampleImages';

export function PhotoPrintSheet() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const loadId = useRef(0);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [zoom, setZoom] = useState(1);
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [check, setCheck] = useState(false);
  useEffect(() => () => { loadId.current++; }, []);
  async function load(source: string, revoke = false) {
    const request = ++loadId.current;
    setError('');
    try {
      const img = new Image(); img.src = source; await img.decode();
      if (request !== loadId.current) return;
      setImage(img); setZoom(1); setX(50); setY(50); setCheck(false);
    } catch { if (request === loadId.current) setError('This image could not be opened. Please use a JPG, PNG, or WebP photo.'); }
    finally { if (revoke) URL.revokeObjectURL(source); }
  }
  useEffect(() => {
    const el = canvas.current; const ctx = el?.getContext('2d');
    if (!el || !ctx) return;
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, el.width, el.height);
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    const crop = image ? coverCrop(image.naturalWidth, image.naturalHeight, 35 / 45, zoom, x, y) : null;
    for (const pos of photoSheetPositions()) {
      if (image && crop) ctx.drawImage(image, crop.x, crop.y, crop.width, crop.height, pos.x, pos.y, pos.width, pos.height);
      else { ctx.fillStyle = '#eef2ff'; ctx.fillRect(pos.x, pos.y, pos.width, pos.height); ctx.fillStyle = '#6366f1'; ctx.font = '24px sans-serif'; ctx.textAlign = 'center'; ctx.fillText('35 × 45 mm', pos.x + pos.width / 2, pos.y + pos.height / 2); }
      ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1; ctx.strokeRect(pos.x, pos.y, pos.width, pos.height);
    }
  }, [image, zoom, x, y]);
  async function download(pdf: boolean) {
    if (!canvas.current || !image || !check) return;
    setBusy(true); setError('');
    try {
      let blob = await new Promise<Blob>((resolve, reject) => canvas.current!.toBlob(b => b ? resolve(b) : reject(new Error('Image export failed')), 'image/jpeg', .96));
      if (pdf) blob = await createPdfFromJpegBlob(blob, PHOTO_SHEET.width, PHOTO_SHEET.height, { pageSize: '4x6' });
      const url = URL.createObjectURL(blob); const a = document.createElement('a');
      a.href = url; a.download = `signresize-8-photos-6x4.${pdf ? 'pdf' : 'jpg'}`; a.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 10_000);
    } catch { setError('Could not export the sheet. Try another photo or browser.'); }
    finally { setBusy(false); }
  }
  return <section className="grid lg:grid-cols-[360px_1fr] gap-5">
    <div className="rounded-2xl border border-border bg-card p-5 space-y-5">
      <div><h2 className="text-xl font-bold">Make your print sheet</h2><p className="text-xs text-muted-foreground mt-1">8 photos · 35 × 45 mm · 6 × 4 inch paper</p></div>
      <label className="block text-sm font-semibold">Choose your application photograph<input type="file" accept="image/jpeg,image/png,image/webp" className="block w-full mt-2 text-xs" onChange={e => {
        const f = e.target.files?.[0]; if (!f) return;
        if (f.size > 20 * 1024 * 1024) { setError('Please choose an image smaller than 20 MB.'); return; }
        void load(URL.createObjectURL(f), true); e.target.value = '';
      }} /></label>
      <button type="button" onClick={() => void load(createSamplePhotoData('SAMPLE PHOTO', '', 350, 450))} className="text-xs text-primary underline">Try a sample photo</button>
      {[{ name: 'Zoom', value: zoom, min: 1, max: 2.5, step: .01, set: setZoom }, { name: 'Horizontal position', value: x, min: 0, max: 100, step: 1, set: setX }, { name: 'Vertical position', value: y, min: 0, max: 100, step: 1, set: setY }].map(control => <label key={control.name} className="block text-xs font-semibold">{control.name}<input aria-label={control.name} type="range" min={control.min} max={control.max} step={control.step} value={control.value} onChange={e => control.set(Number(e.target.value))} disabled={!image} className="block w-full mt-2 accent-indigo-600" /></label>)}
      <label className="flex items-start gap-2 text-xs"><input type="checkbox" checked={check} onChange={e => setCheck(e.target.checked)} disabled={!image} className="mt-0.5" /><span>I checked the crop and confirmed the photograph size in my admit card instructions.</span></label>
      <div className="flex flex-wrap gap-2"><button disabled={!image || !check || busy} onClick={() => void download(true)} className="bg-primary text-primary-foreground px-4 py-2 rounded-xl font-bold text-sm disabled:opacity-40">{busy ? 'Preparing…' : 'Download print PDF'}</button><button disabled={!image || !check || busy} onClick={() => void download(false)} className="border border-border px-4 py-2 rounded-xl font-bold text-sm disabled:opacity-40">Download JPG</button></div>
      {error && <p role="alert" className="text-sm text-rose-600">{error}</p>}
      <p className="text-xs text-muted-foreground leading-relaxed">For exact physical sizes, print the PDF on 6 × 4 inch paper at <strong>Actual size / 100%</strong>. Turn off “Fit to page”. JPG print size depends on the print app settings.</p>
    </div>
    <div className="rounded-2xl border border-border bg-muted/50 p-5 flex flex-col items-center gap-4"><div className="w-full flex justify-between text-xs font-semibold text-muted-foreground"><span>SHEET PREVIEW</span><span>1800 × 1200 px</span></div><canvas ref={canvas} width={PHOTO_SHEET.width} height={PHOTO_SHEET.height} className="w-full h-auto shadow-xl bg-white" aria-label="Preview of eight passport photographs" /><p className="text-xs text-muted-foreground text-center">Use the same photograph as your application when instructed. This sheet is for printing, not a portal upload.</p></div>
  </section>;
}
