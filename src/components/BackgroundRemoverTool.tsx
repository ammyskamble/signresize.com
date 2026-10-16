import { useEffect, useRef, useState } from 'react';
import '../styles/background-remover.css';

type Mode = 'signature' | 'photo' | 'document';
type Source = { url: string; image: HTMLImageElement; name: string };

export default function BackgroundRemoverTool() {
  const [mode, setMode] = useState<Mode>('signature');
  const [source, setSource] = useState<Source | null>(null);
  const [output, setOutput] = useState<string | null>(null);
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
  const [jpeg, setJpeg] = useState<{ source: string; url: string } | null>(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const worker = useRef<Worker | null>(null);
  const version = useRef(0);
  const uploadVersion = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const input = useRef<HTMLInputElement>(null);
  const stop = () => { version.current++; worker.current?.terminate(); worker.current = null; if (timer.current) clearTimeout(timer.current); };
  const clearResult = () => { stop(); setOutput(null); setBusy(false); setStatus(''); setError(''); setOriginal(false); };
  useEffect(() => {
    const requested = new URLSearchParams(location.search).get('mode');
    if (requested === 'photo' || requested === 'document') setMode(requested);
    return () => { stop(); uploadVersion.current++; };
  }, []);
  useEffect(() => () => { if (source) URL.revokeObjectURL(source.url); }, [source]);
  useEffect(() => () => { if (output) URL.revokeObjectURL(output); }, [output]);
  useEffect(() => {
    if (!output || background === 'transparent') return;
    let cancelled = false, url = '';
    const image = new Image(); image.src = output;
    void image.decode().then(() => {
      if (cancelled) return;
      const canvas = document.createElement('canvas'); canvas.width = image.naturalWidth; canvas.height = image.naturalHeight;
      const ctx = canvas.getContext('2d'); if (!ctx) return;
      ctx.drawImage(image, 0, 0);
      canvas.toBlob(blob => {
        if (cancelled || !blob) return;
        url = URL.createObjectURL(blob); setJpeg({ source: output, url });
      }, 'image/jpeg', .95);
    }).catch(() => { if (!cancelled) setError('JPG preparation failed. You can still download PNG.'); });
    return () => { cancelled = true; if (url) URL.revokeObjectURL(url); };
  }, [output, background]);

  const load = async (file: File) => {
    const request = ++uploadVersion.current;
    clearResult();
    let url = '';
    try {
      if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) throw new Error('Choose a JPG, PNG or WebP image. PDF pages must be saved as images first.');
      if (file.size > 25 * 1024 * 1024) throw new Error('Choose an image smaller than 25 MB.');
      url = URL.createObjectURL(file);
      const image = new Image(); image.src = url; await image.decode();
      if (request !== uploadVersion.current) { URL.revokeObjectURL(url); return; }
      if (image.naturalWidth * image.naturalHeight > 20_000_000) throw new Error('Choose an image below 20 megapixels.');
      setSource({ url, image, name: file.name }); setZoom(false);
    } catch (e) {
      if (url) URL.revokeObjectURL(url);
      if (request === uploadVersion.current) setError(e instanceof Error ? e.message : 'This image could not be opened.');
    }
  };
  const sample = () => {
    const canvas = document.createElement('canvas'); canvas.width = 900; canvas.height = 360;
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    const shade = ctx.createLinearGradient(0, 0, 900, 360);
    shade.addColorStop(0, '#a19a87'); shade.addColorStop(.5, '#dfd7c0'); shade.addColorStop(1, '#f5efde');
    ctx.fillStyle = shade; ctx.fillRect(0, 0, 900, 360);
    ctx.strokeStyle = '#173d79'; ctx.lineWidth = 4; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(140, 240); ctx.bezierCurveTo(300, 15, 280, 320, 190, 230); ctx.bezierCurveTo(150, 190, 470, 220, 390, 135); ctx.bezierCurveTo(330, 70, 380, 340, 480, 170); ctx.bezierCurveTo(510, 290, 550, 130, 590, 210); ctx.bezierCurveTo(650, 280, 700, 120, 760, 180); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(220, 275); ctx.quadraticCurveTo(520, 235, 770, 245); ctx.stroke();
    canvas.toBlob(blob => { if (blob) { setMode('signature'); void load(new File([blob], 'sample-signature.png', { type: 'image/png' })); } });
  };
  const process = async () => {
    if (!source) return;
    clearResult(); setBusy(true);
    const request = version.current;
    setStatus(mode === 'photo' ? 'Loading portrait model. First use may take a moment...' : 'Removing paper colour and uneven lighting...');
    const fail = (message: string) => { if (request !== version.current) return; stop(); setBusy(false); setStatus(''); setError(message); };
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
        setOutput(URL.createObjectURL(data.blob)); setBusy(false); stop();
        setStatus('Ready. Check fine strokes and edges before saving.');
      };
      task.postMessage({ image: bitmap, strength, shadows, edge, ink: mode === 'signature' ? ink : 'all', mainSignature: mode === 'signature' && mainSignature, background: background === 'transparent' ? 'transparent' : background === 'colour' ? colour : '#ffffff' }, [bitmap]);
    } catch (e) { fail(e instanceof Error ? e.message : 'Background removal failed.'); }
  };
  const filename = source?.name.replace(/\.[^.]+$/, '') || 'image';
  return <section className="bg-editor" aria-label="Background removal studio">
    <div className="bg-editor-toolbar">
      <div className="bg-editor-modes" role="group" aria-label="Image type">{(['signature', 'photo', 'document'] as Mode[]).map(item => <button type="button" key={item} aria-pressed={mode === item} onClick={() => { clearResult(); setMode(item); }}>{item === 'photo' ? 'Portrait photo' : item === 'document' ? 'Document' : 'Signature'}</button>)}</div>
      <input ref={input} type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={event => { const file = event.target.files?.[0]; if (file) void load(file); event.target.value = ''; }} />
      <button type="button" onClick={() => input.current?.click()}>{source ? 'Replace image' : 'Upload image'}</button>
    </div>
    <div className="bg-editor-layout">
      <div className="bg-editor-preview-column">
        <div className="bg-editor-preview" data-zoom={zoom} onDragOver={event => event.preventDefault()} onDrop={event => { event.preventDefault(); if (event.dataTransfer.files[0]) void load(event.dataTransfer.files[0]); }}>
          {source ? <img src={original || !output ? source.url : output} alt={original || !output ? 'Original uploaded image' : 'Image with background removed'} /> : <div className="bg-editor-empty"><span aria-hidden="true">↥</span><h2>Give your image a clean background</h2><p>Drop a JPG, PNG or WebP here. Up to 25 MB / 20 MP.</p><button type="button" className="bg-editor-primary" onClick={() => input.current?.click()}>Choose image</button><button type="button" onClick={sample}>Try a shadowed signature</button></div>}
        </div>
        {source && <div className="bg-editor-preview-tools"><span>{source.image.naturalWidth} × {source.image.naturalHeight} px</span><button type="button" aria-pressed={original} disabled={!output} onClick={() => setOriginal(!original)}>{original ? 'Show result' : 'View original'}</button><button type="button" aria-pressed={zoom} onClick={() => setZoom(!zoom)}>{zoom ? 'Fit image' : 'Actual size'}</button><button type="button" onClick={() => { uploadVersion.current++; clearResult(); setSource(null); }}>Clear</button></div>}
      </div>
      <div className="bg-editor-settings">
        <h2>{mode === 'photo' ? 'Portrait cutout' : 'Paper & ink cleanup'}</h2>
        <p>{mode === 'photo' ? 'For one person. The portrait model loads only when you apply removal.' : 'For ink on paper. Local lighting correction helps remove camera shadows while retaining dark and coloured strokes.'}</p>
        {mode !== 'photo' ? <>
          <label className="bg-editor-range">Cleanup strength <output>{strength}</output><input type="range" min="10" max="90" value={strength} onChange={event => { clearResult(); setStrength(Number(event.target.value)); }} /><small>Lower preserves faint ink. Higher clears more paper.</small></label>
          <label className="bg-editor-check"><input type="checkbox" checked={shadows} onChange={event => { clearResult(); setShadows(event.target.checked); }} />Correct uneven paper lighting</label>
          {mode === 'signature' && <>
            <fieldset><legend>Ink to keep</legend><div className="bg-editor-backgrounds">{[['all', 'All ink'], ['blue', 'Blue / purple ink']].map(([value, label]) => <button type="button" key={value} aria-pressed={ink === value} onClick={() => { clearResult(); setInk(value); }}>{label}</button>)}</div><small>For blue signatures on ruled paper, choose Blue / purple ink to remove grey lines. Black ink will also be removed.</small></fieldset>
            <label className="bg-editor-check"><input type="checkbox" checked={mainSignature} onChange={event => { clearResult(); setMainSignature(event.target.checked); }} />Keep only the main signature</label>
            <small>Removes separate marks elsewhere on the page. Check dots and detached strokes before saving.</small>
          </>}
        </> : <label className="bg-editor-range">Edge adjustment <output>{edge}</output><input type="range" min="-15" max="15" value={edge} onChange={event => { clearResult(); setEdge(Number(event.target.value)); }} /><small>Lower keeps more edge detail. Higher trims uncertain edges.</small></label>}
        <fieldset><legend>Output background</legend><div className="bg-editor-backgrounds">{['white', 'transparent', 'colour'].map(item => <button type="button" key={item} aria-pressed={background === item} onClick={() => { clearResult(); setBackground(item); }}>{item === 'colour' ? 'Custom colour' : item === 'white' ? 'White' : 'Transparent'}</button>)}</div>{background === 'colour' && <label className="bg-editor-colour">Choose colour <input type="color" value={colour} onChange={event => { clearResult(); setColour(event.target.value); }} /></label>}</fieldset>
        <div className="bg-editor-apply"><button type="button" className="bg-editor-primary" disabled={!source || busy} onClick={process}>{busy ? 'Removing background...' : output ? 'Apply again' : 'Remove background'}</button>{busy && <button type="button" onClick={() => { stop(); setBusy(false); setStatus('Cancelled. Original image retained.'); }}>Cancel</button>}</div>
        {status && <p role="status">{status}</p>}{error && <p className="bg-editor-error" role="alert">{error}</p>}
        {output && <div className="bg-editor-download"><a href={output} download={`${filename}-background-removed.png`}>Download PNG</a>{background !== 'transparent' && jpeg?.source === output && <a href={jpeg.url} download={`${filename}-background-removed.jpg`}>Download JPG</a>}<small>{background === 'transparent' ? 'PNG keeps transparency.' : 'Original dimensions are retained.'}</small></div>}
        <details><summary>Tips for a better result</summary><p>Crop close to the paper before uploading. Use Signature or Document for writing; Portrait photo is for people. Lower cleanup strength if thin strokes disappear. Heavy shadows, patterned paper and blurry images may need a clearer scan. Documents with photos or shaded artwork can lose detail.</p></details>
        <a href="/#tool-workspace">Need exam dimensions or a KB limit? Open resizer →</a>
      </div>
    </div>
  </section>;
}
