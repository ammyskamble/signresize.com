import { useEffect, useRef, useState } from 'react';
import type { ToolTargetMode } from '../../types';

/** Keeps the untouched source for undo; ignores work after replacement or unmount. */
export function PortraitBackgroundFix({ image, mode = 'photo', isSample = false, onApply }: { image: HTMLImageElement; mode?: ToolTargetMode; isSample?: boolean; onApply: (image: HTMLImageElement) => void }) {
  const paper = mode !== 'photo';
  const [strength, setStrength] = useState(48);
  const [blueInk, setBlueInk] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [edited, setEdited] = useState(false);
  const original = useRef(image);
  const result = useRef<HTMLImageElement | null>(null);
  const current = useRef(image);
  current.current = image;
  const worker = useRef<Worker | null>(null);
  const generation = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stop = () => {
    generation.current++;
    worker.current?.terminate();
    worker.current = null;
    if (timer.current) clearTimeout(timer.current);
  };
  useEffect(() => {
    if (image !== result.current) {
      stop();
      original.current = image;
      result.current = null;
      setEdited(false);
      setBusy(false);
      setStatus('');
      setError('');
    }
  }, [image]);
  useEffect(() => () => stop(), []);

  const remove = async () => {
    stop();
    const request = generation.current;
    const source = image;
    setBusy(true);
    setError('');
    setStatus(paper ? 'Cleaning the paper background...' : 'Loading the portrait remover. First use may take a moment...');
    const fail = (message: string) => {
      if (request !== generation.current) return;
      stop();
      setBusy(false);
      setStatus('');
      setError(message);
    };
    try {
      if (!window.Worker || !window.OffscreenCanvas) throw new Error('Use a current browser to enable background removal.');
      const bitmap = await createImageBitmap(source);
      if (request !== generation.current || current.current !== source) { bitmap.close(); return; }
      const task = new Worker(paper ? '/workers/paper-background-v1.js' : '/workers/portrait-background-v1.js');
      worker.current = task;
      timer.current = setTimeout(() => fail('The remover took too long. Check your connection and retry; your original is unchanged.'), 90000);
      task.onerror = () => fail('Could not load the background remover. Check your connection and retry.');
      task.onmessage = async ({ data }) => {
        if (request !== generation.current || current.current !== source) return;
        if (data.status) { setStatus(data.status); return; }
        if (data.error) { fail(data.error); return; }
        const url = URL.createObjectURL(data.blob);
        try {
          const next = new Image();
          next.src = url;
          await next.decode();
          if (request !== generation.current || current.current !== source) return;
          // A data URL owns its pixels after the worker's temporary URL is released.
          const canvas = document.createElement('canvas');
          canvas.width = next.naturalWidth;
          canvas.height = next.naturalHeight;
          const context = canvas.getContext('2d');
          if (!context) throw new Error('Image preview unavailable.');
          context.drawImage(next, 0, 0);
          const restored = new Image();
          restored.src = canvas.toDataURL('image/png');
          await restored.decode();
          if (request !== generation.current || current.current !== source) return;
          result.current = restored;
          stop();
          setBusy(false);
          setEdited(true);
          setStatus(paper ? 'White paper applied. Check faint strokes, text and seals. Undo if detail was lost.' : 'White background applied. Inspect hair, ears and clothing before downloading.');
          onApply(restored);
        } catch { fail('Could not create the corrected image. Your original is unchanged.'); }
        finally { URL.revokeObjectURL(url); }
      };
      task.postMessage({ image: bitmap, strength, ink: mode === 'signature' && blueInk ? 'blue' : 'all' }, [bitmap]);
    } catch (e) { fail(e instanceof Error ? e.message : 'Background removal is unavailable. Please retry.'); }
  };
  return <details id="canvas-background-fix" className="background-fix" aria-label="Background remover" aria-busy={busy}>
    <summary className="cursor-pointer font-bold">
      <strong>{paper ? 'Paper background' : 'Photo background'} · Quick fix</strong>
      <span className="background-fix-open-label">Show</span>
      <span className="background-fix-close-label">Hide</span>
    </summary>
    <div className="background-fix-body">
      <p className="text-xs text-muted-foreground">{paper ? 'Replace the detected paper colour with white (#FFFFFF). Check faint text and coloured seals after cleanup.' : 'Replace the background behind one person with white. Check hair and edges after cleanup.'}</p>
      
      {paper && (
        <div className="paper-cleanup-strength flex items-center gap-2 my-2.5 flex-wrap" role="group" aria-label="Background cleanup strength">
          <span className="text-xs font-semibold text-muted-foreground">Cleanup:</span>
          {[[28, 'Gentle'], [48, 'Standard'], [72, 'Strong']].map(([value, label]) => {
            const isSelected = strength === value;
            return (
              <button
                type="button"
                key={value}
                aria-pressed={isSelected}
                disabled={busy || edited}
                onClick={() => setStrength(Number(value))}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                  isSelected
                    ? 'bg-primary text-primary-foreground border-primary shadow-xs font-bold ring-2 ring-primary/30'
                    : 'bg-card text-foreground border-border hover:bg-muted'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}

      <div className="background-fix-actions flex flex-wrap items-center gap-2.5 mt-3">
        {mode === 'signature' && (
          <label className="background-ink-choice flex items-center gap-2 text-xs text-muted-foreground w-full cursor-pointer p-1.5 rounded-lg hover:bg-muted/40 transition">
            <input
              type="checkbox"
              checked={blueInk}
              disabled={busy || edited}
              onChange={event => setBlueInk(event.target.checked)}
              className="rounded border-border text-primary focus:ring-primary w-4 h-4 cursor-pointer"
            />
            <span>Keep blue/purple ink only (removes grey lines and black ink)</span>
          </label>
        )}
        <button
          id="remove-canvas-background"
          type="button"
          disabled={busy || edited || (!paper && isSample)}
          onClick={remove}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-98 border ${
            edited
              ? 'bg-emerald-600 text-white border-emerald-500 shadow-emerald-500/20 ring-2 ring-emerald-500/30'
              : busy
              ? 'bg-primary/80 text-primary-foreground border-primary animate-pulse cursor-wait'
              : 'bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20 ring-2 ring-primary/20'
          } disabled:opacity-60 disabled:cursor-not-allowed`}
        >
          {busy ? (
            <>
              <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span>Removing background…</span>
            </>
          ) : edited ? (
            <>
              <span>✓</span>
              <span>White background applied</span>
            </>
          ) : (
            <>
              <span>🪄</span>
              <span>{paper ? 'Remove Paper Background → White' : 'Remove Background → White'}</span>
            </>
          )}
        </button>
        {busy && (
          <button
            type="button"
            onClick={() => { stop(); setBusy(false); setStatus('Cancelled. Original image retained.'); }}
            className="px-3.5 py-2.5 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition cursor-pointer"
          >
            Cancel
          </button>
        )}
        {edited && (
          <button
            type="button"
            onClick={() => { stop(); onApply(original.current); }}
            className="px-3.5 py-2.5 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition cursor-pointer"
          >
            Undo background removal
          </button>
        )}
      </div>

      {!paper && isSample && <p className="text-xs text-muted-foreground mt-2">Upload a real portrait to use background removal.</p>}
      {status && <p role="status" className="text-xs font-medium text-emerald-700 dark:text-emerald-400 mt-2 bg-emerald-500/10 border border-emerald-500/20 p-2 rounded-lg">{status}</p>}
      {error && <p role="alert" className="text-xs font-medium text-rose-700 dark:text-rose-400 mt-2 bg-rose-500/10 border border-rose-500/20 p-2 rounded-lg">{error}</p>}
      <a className="background-fix-editor-link inline-block mt-2.5 text-xs text-primary font-semibold hover:underline" href={mode === 'photo' ? '/photo-background-remover/' : `/background-remover/?mode=${mode}`}>Open full background editor →</a>
    </div>
  </details>;
}
