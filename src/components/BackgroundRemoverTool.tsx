import { useEffect, useRef, useState } from 'react';
import '../styles/background-remover.css';
import FeedbackPrompt from './FeedbackPrompt';
import { saveBackgroundTransfer, type BackgroundMode as Mode } from '../utils/backgroundTransfer';
import { trackBackgroundEvent } from '../utils/backgroundEvents';

type Source = { url: string; image: HTMLImageElement; name: string };
type Cutout = { url: string; blob: Blob };
type Exports = { key: string; preview: string; jpg: string; jpgBytes: number };

function canvasBlob(canvas: HTMLCanvasElement, type = 'image/png'): Promise<Blob> {
  return new Promise((resolve, reject) => canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('Could not prepare the image. Try a smaller file.')), type, .95));
}

export default function BackgroundRemoverTool({ initialMode = 'signature' }: { initialMode?: Mode }) {
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [mode, setMode] = useState<Mode>(initialMode);
  const [source, setSource] = useState<Source | null>(null);
  const [cutout, setCutout] = useState<Cutout | null>(null);
  const [exports, setExports] = useState<Exports | null>(null);
  const [strength, setStrength] = useState(48);
  const [shadows, setShadows] = useState(true);
  const [ink, setInk] = useState('all');
  const [mainSignature, setMainSignature] = useState(false);
  const [edge, setEdge] = useState(0);
  const [background, setBackground] = useState('white');
  const [colour, setColour] = useState('#ffffff');
  const [original, setOriginal] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [transferring, setTransferring] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const worker = useRef<Worker | null>(null);
  const version = useRef(0);
  const uploadVersion = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const input = useRef<HTMLInputElement>(null);
  const exportKey = `${cutout?.url}:${background}:${colour}`;
  const ready = exports?.key === exportKey ? exports : null;
  const preview = cutout && ready ? (background === 'transparent' ? cutout.url : ready.preview) : null;
  const stop = () => { version.current++; worker.current?.terminate(); worker.current = null; if (timer.current) clearTimeout(timer.current); };
  const clearResult = () => { stop(); setCutout(null); setBusy(false); setStatus(''); setError(''); setOriginal(false); };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const requested = params.get('mode');
    if (requested === 'signature' || requested === 'photo' || requested === 'document') setMode(requested);
    if (params.get('background') === 'transparent') setBackground('transparent');
    return () => { stop(); uploadVersion.current++; };
  }, []);
  useEffect(() => () => { if (source) URL.revokeObjectURL(source.url); }, [source]);
  useEffect(() => () => { if (cutout) URL.revokeObjectURL(cutout.url); }, [cutout]);

  // Keep one transparent cutout. Changing its background never reruns extraction.
  useEffect(() => {
    if (!cutout) return;
    let cancelled = false;
    const urls: string[] = [];
    void (async () => {
      const image = new Image(); image.src = cutout.url; await image.decode();
      if (cancelled) return;
      const canvas = document.createElement('canvas'); canvas.width = image.naturalWidth; canvas.height = image.naturalHeight;
      const ctx = canvas.getContext('2d'); if (!ctx) throw new Error('Image export is unavailable.');
      ctx.fillStyle = background === 'colour' ? colour : '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height); ctx.drawImage(image, 0, 0);
      const [png, jpg] = await Promise.all([canvasBlob(canvas), canvasBlob(canvas, 'image/jpeg')]);
      if (cancelled) return;
      const preview = URL.createObjectURL(png), jpeg = URL.createObjectURL(jpg); urls.push(preview, jpeg);
      setExports({ key: exportKey, preview, jpg: jpeg, jpgBytes: jpg.size });
    })().catch(e => { if (!cancelled) setError(e instanceof Error ? e.message : 'Could not prepare downloads. Please retry.'); });
    return () => { cancelled = true; urls.forEach(url => URL.revokeObjectURL(url)); };
  }, [cutout, background, colour, exportKey]);

  const load = async (file: File) => {
    const request = ++uploadVersion.current;
    clearResult(); setHasDownloaded(false); setLoading(true);
    let url = '';
    try {
      if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) throw new Error('Choose a JPG, PNG or WebP image. Save PDF pages as images first.');
      if (!file.size || file.size > 25 * 1024 * 1024) throw new Error('Choose a non-empty image up to 25 MB.');
      url = URL.createObjectURL(file);
      const image = new Image(); image.src = url; await image.decode();
      if (request !== uploadVersion.current) { URL.revokeObjectURL(url); return; }
      if (image.naturalWidth * image.naturalHeight > 20_000_000) throw new Error('Choose an image up to 20 megapixels.');
      setSource({ url, image, name: file.name }); setZoom(false);
      trackBackgroundEvent('image_selected', mode);
    } catch (e) {
      if (url) URL.revokeObjectURL(url);
      if (request === uploadVersion.current) setError(e instanceof Error ? e.message : 'This image could not be opened.');
    } finally {
      if (request === uploadVersion.current) setLoading(false);
    }
  };

  const sample = (kind: 'blue' | 'faint' | 'shadow' = 'shadow') => {
    const canvas = document.createElement('canvas'); canvas.width = 900; canvas.height = 360;
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    const shade = ctx.createLinearGradient(0, 0, 900, 360);
    shade.addColorStop(0, kind === 'shadow' ? '#a19a87' : '#eee9df'); shade.addColorStop(.5, '#dfd7c0'); shade.addColorStop(1, '#f5efde');
    ctx.fillStyle = shade; ctx.fillRect(0, 0, 900, 360);
    ctx.strokeStyle = kind === 'faint' ? '#77716a' : '#173d79'; ctx.lineWidth = kind === 'faint' ? 2 : 4; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(140, 240); ctx.bezierCurveTo(300, 15, 280, 320, 190, 230); ctx.bezierCurveTo(150, 190, 470, 220, 390, 135); ctx.bezierCurveTo(330, 70, 380, 340, 480, 170); ctx.bezierCurveTo(510, 290, 550, 130, 590, 210); ctx.bezierCurveTo(650, 280, 700, 120, 760, 180); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(220, 275); ctx.quadraticCurveTo(520, 235, 770, 245); ctx.stroke();
    const request = ++uploadVersion.current;
    canvas.toBlob(blob => {
      if (!blob || request !== uploadVersion.current) return;
      setMode('signature'); setInk('all'); setMainSignature(false); setShadows(true); setStrength(kind === 'faint' ? 28 : 48);
      void load(new File([blob], `sample-${kind}-signature.png`, { type: 'image/png' }));
    });
  };

  const process = async () => {
    if (!source || loading) return;
    clearResult(); setBusy(true);
    const request = version.current;
    setStatus(mode === 'photo' ? 'Loading portrait model. First use may take a moment...' : 'Removing paper colour and uneven lighting...');
    const fail = (message: string) => {
      if (request !== version.current) return;
      stop(); setBusy(false); setStatus(''); setError(message); trackBackgroundEvent('processing_failed', mode);
    };
    try {
      if (!window.Worker || !window.OffscreenCanvas) throw new Error('Please use a current browser for background removal.');
      const bitmap = await createImageBitmap(source.image);
      if (request !== version.current) { bitmap.close(); return; }
      const task = new Worker(mode === 'photo' ? '/workers/portrait-background-v1.js' : '/workers/paper-background-v1.js');
      worker.current = task;
      timer.current = setTimeout(() => fail('Processing timed out. Try a smaller image or retry.'), 90000);
      task.onerror = () => fail('Could not start the remover. Please retry.');
      task.onmessage = ({ data }) => {
        if (request !== version.current) return;
        if (data.error) { fail(data.error); return; }
        if (data.status) { setStatus(data.status); return; }
        setCutout({ url: URL.createObjectURL(data.blob), blob: data.blob }); setBusy(false); stop();
        setStatus('Ready. Check fine strokes and edges before saving.'); trackBackgroundEvent('processing_complete', mode);
      };
      task.postMessage({ image: bitmap, strength, shadows, edge, ink: mode === 'signature' ? ink : 'all', mainSignature: mode === 'signature' && mainSignature, background: 'transparent' }, [bitmap]);
    } catch (e) { fail(e instanceof Error ? e.message : 'Background removal failed.'); }
  };

  const resize = async () => {
    if (!cutout || transferring) return;
    const request = version.current;
    setTransferring(true); setError('');
    try {
      const destination = await saveBackgroundTransfer(cutout.blob, mode);
      if (request !== version.current) return;
      trackBackgroundEvent('handoff', mode); location.assign(destination);
    } catch (e) { if (request === version.current) setError(e instanceof Error ? e.message : 'Could not transfer this image. Download it and open it in the resizer.'); }
    finally { setTransferring(false); }
  };
  const downloaded = (format: 'png' | 'jpg') => { setHasDownloaded(true); trackBackgroundEvent('download', mode, format); };
  const filename = source?.name.replace(/\.[^.]+$/, '') || mode;
  const chooseLabel = mode === 'photo' ? 'Choose Photo' : mode === 'document' ? 'Choose Scan Image' : 'Choose Signature Image';

  return <section className="bg-editor" id="background-editor" aria-label="Background removal studio">
    <div className="bg-editor-toolbar">
      <div className="bg-editor-modes" role="group" aria-label="Image type">{(['signature', 'photo', 'document'] as Mode[]).map(item => <button type="button" key={item} aria-pressed={mode === item} onClick={() => { uploadVersion.current++; setLoading(false); clearResult(); setMode(item); }}>{item === 'photo' ? 'Portrait photo' : item === 'document' ? 'Document' : 'Signature'}</button>)}</div>
      <input ref={input} type="file" accept="image/jpeg,image/png,image/webp" aria-label={chooseLabel} hidden onChange={event => { const file = event.target.files?.[0]; if (file) void load(file); event.target.value = ''; }} />
      <button type="button" onClick={() => input.current?.click()}>{source ? 'Replace image' : chooseLabel}</button>
    </div>
    <div className="bg-editor-layout">
      <div className="bg-editor-preview-column">
        <div className="bg-editor-preview" data-zoom={zoom} onDragOver={event => event.preventDefault()} onDrop={event => { event.preventDefault(); if (event.dataTransfer.files[0]) void load(event.dataTransfer.files[0]); }}>
          {source ? <img src={original || !preview ? source.url : preview} alt={original || !preview ? 'Original selected image' : 'Image with background removed'} /> : <div className="bg-editor-empty"><span aria-hidden="true">↥</span><h2>{mode === 'photo' ? 'Give your portrait a clean background' : 'Give your handwriting a clean background'}</h2><p>Drop a JPG, PNG or WebP here. Up to 25 MB / 20 MP.</p><button type="button" className="bg-editor-primary" onClick={() => input.current?.click()}>{chooseLabel}</button>{mode !== 'photo' && <button type="button" onClick={() => sample()}>Try a shadowed signature</button>}{mode === 'photo' && <p>Start with one person in a clear head-and-shoulders photo.</p>}</div>}
        </div>
        {source && <div className="bg-editor-preview-tools"><span>{source.image.naturalWidth} × {source.image.naturalHeight} px</span><button type="button" aria-pressed={original} disabled={!preview} onClick={() => setOriginal(!original)}>{original ? 'Show result' : 'View original'}</button><button type="button" aria-pressed={zoom} onClick={() => setZoom(!zoom)}>{zoom ? 'Fit image' : 'Actual size'}</button><button type="button" onClick={() => { uploadVersion.current++; setLoading(false); clearResult(); setSource(null); }}>Clear</button></div>}
        {mode === 'signature' && <div className="bg-editor-samples"><p>Try a generated sample. These are illustrations, not customer signatures.</p><div><button type="button" onClick={() => sample('blue')}>Blue ink</button><button type="button" onClick={() => sample('faint')}>Faint ink</button><button type="button" onClick={() => sample('shadow')}>Paper shadow</button></div></div>}
      </div>
      <div className="bg-editor-settings">
        <h2>{mode === 'photo' ? 'Portrait cutout' : 'Paper & ink cleanup'}</h2>
        <p>{mode === 'photo' ? 'For one person. Inspect hair, glasses, ears and clothing after removal.' : 'For ink on paper. Local lighting correction helps reduce camera shadows. Inspect faint and detached strokes.'}</p>
        {mode !== 'photo' ? <>
          <label className="bg-editor-range">Cleanup strength <output>{strength}</output><input type="range" min="10" max="90" value={strength} onChange={event => { clearResult(); setStrength(Number(event.target.value)); }} /><small>Lower preserves faint ink. Higher clears more paper.</small></label>
          <label className="bg-editor-check"><input type="checkbox" checked={shadows} onChange={event => { clearResult(); setShadows(event.target.checked); }} />Correct uneven paper lighting</label>
          {mode === 'signature' && <>
            <fieldset><legend>Ink to keep</legend><div className="bg-editor-backgrounds">{[['all', 'All ink'], ['blue', 'Blue / purple ink']].map(([value, label]) => <button type="button" key={value} aria-pressed={ink === value} onClick={() => { clearResult(); setInk(value); }}>{label}</button>)}</div><small>Blue / purple ink removes grey ruling and black ink. Use All ink for a black signature.</small></fieldset>
            <label className="bg-editor-check"><input type="checkbox" checked={mainSignature} onChange={event => { clearResult(); setMainSignature(event.target.checked); }} />Keep only the main signature</label><small>Check dots and detached strokes: separate marks may be removed.</small>
          </>}
        </> : <label className="bg-editor-range">Edge adjustment <output>{edge}</output><input type="range" min="-15" max="15" value={edge} onChange={event => { clearResult(); setEdge(Number(event.target.value)); }} /><small>Lower keeps more edge detail. Higher trims uncertain edges.</small></label>}
        <fieldset><legend>Preview background</legend><div className="bg-editor-backgrounds">{['white', 'transparent', 'colour'].map(item => <button type="button" key={item} aria-pressed={background === item} onClick={() => { setBackground(item); setOriginal(false); }}>{item === 'colour' ? 'Custom colour' : item === 'white' ? 'White' : 'Transparent'}</button>)}</div>{background === 'colour' && <label className="bg-editor-colour">Choose colour <input type="color" value={colour} onChange={event => setColour(event.target.value)} /></label>}</fieldset>
        <div className="bg-editor-apply"><button type="button" className="bg-editor-primary" disabled={!source || loading || busy || transferring} onClick={process}>{loading ? 'Opening image...' : busy ? 'Removing background...' : cutout ? 'Apply again' : 'Remove background'}</button>{busy && <button type="button" onClick={() => { stop(); setBusy(false); setStatus('Cancelled. Original image retained.'); }}>Cancel</button>}</div>
        {status && <p role="status">{status}</p>}{error && <p className="bg-editor-error" role="alert">{error}</p>}
        {cutout && ready && <div className="bg-editor-download">
          <a href={cutout.url} download={`${filename}-transparent.png`} onClick={() => downloaded('png')}>Download Transparent PNG <small>{(cutout.blob.size / 1024).toFixed(1)} KB · no background</small></a>
          <a href={ready.jpg} download={`${filename}-${background === 'colour' ? 'colour' : 'white'}.jpg`} onClick={() => downloaded('jpg')}>Download {background === 'colour' ? 'Colour' : 'White'} JPG <small>{(ready.jpgBytes / 1024).toFixed(1)} KB · solid background</small></a>
          <button type="button" className="bg-editor-primary" disabled={transferring} onClick={resize}>{transferring ? 'Opening resizer...' : mode === 'photo' ? 'Resize Photo' : mode === 'document' ? 'Resize Scan' : 'Resize for an Exam'}</button>
          <small>Downloads retain the original dimensions. The resizer opens a white-background copy; choose your dimensions or exam preset there. Transfers up to 15 MB stay on this device.</small>
        </div>}
        <FeedbackPrompt downloaded={hasDownloaded} tool={`Background remover (${mode})`} />
        <details><summary>Tips for a better result</summary><p>{mode === 'photo' ? 'Use even lighting and a clear view of one person. Complex hair and low contrast can leave edge defects. Retake the photo when important detail is missing. Check application rules before changing an official photo background.' : 'Crop close to the paper before choosing the image. Lower cleanup strength if thin strokes disappear. Heavy shadows, patterned paper and blur may need a clearer scan. Document photos and shaded artwork can lose detail.'}</p></details>
        <a href={mode === 'photo' ? '/photo-resizer/' : mode === 'document' ? '/document-resizer/' : '/#tool-workspace'}>Open resizer without this image →</a>
      </div>
    </div>
  </section>;
}
