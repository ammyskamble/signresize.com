import { useEffect, useRef, useState } from 'react';
import type { ToolTargetMode } from '../../types';

/** Keeps the untouched source for undo; ignores work after replacement or unmount. */
export function PortraitBackgroundFix({
  image,
  mode = 'photo',
  isSample = false,
  onApply
}: {
  image: HTMLImageElement;
  mode?: ToolTargetMode;
  isSample?: boolean;
  onApply: (image: HTMLImageElement) => void;
}) {
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
    setStatus(
      paper
        ? 'Cleaning the paper background...'
        : 'Running in-browser AI portrait segmenter to create pure white background…'
    );

    const fail = (message: string) => {
      if (request !== generation.current) return;
      stop();
      setBusy(false);
      setStatus('');
      setError(message);
    };

    if (!paper && isSample) {
      try {
        const { createSamplePhotoData } = await import('../../utils/sampleImages');
        const whiteData = createSamplePhotoData('US PASSPORT', '', image.width || 600, image.height || 600, '#ffffff');
        const restored = new Image();
        restored.src = whiteData;
        await restored.decode();
        result.current = restored;
        setBusy(false);
        setEdited(true);
        setStatus('✅ Pure white background (#FFFFFF) applied! Meets US State Dept & USCIS standards.');
        onApply(restored);
        return;
      } catch {
        // Fall back to worker
      }
    }

    try {
      if (!window.Worker || !window.OffscreenCanvas) {
        throw new Error('Please use a modern browser (Chrome, Edge, Safari, Firefox) for AI background removal.');
      }
      const bitmap = await createImageBitmap(source);
      if (request !== generation.current || current.current !== source) {
        bitmap.close();
        return;
      }
      const task = new Worker(paper ? '/workers/paper-background-v1.js' : '/workers/portrait-background-v1.js');
      worker.current = task;
      timer.current = setTimeout(
        () => fail('The background remover took too long. Please retry; your original photo is unchanged.'),
        90000
      );

      task.onerror = () => fail('Could not load the background remover engine. Please check your network and retry.');

      task.onmessage = async ({ data: { blob, status: update, error: workerError } }: MessageEvent<{ blob?: Blob; status?: string; error?: string }>) => {
        if (request !== generation.current || current.current !== source) return;
        if (workerError) {
          fail(workerError);
          return;
        }
        if (update) {
          setStatus(update);
          return;
        }
        if (!blob) {
          fail('The background removal process produced no output.');
          return;
        }
        try {
          const url = URL.createObjectURL(blob);
          const restored = new Image();
          restored.src = url;
          await restored.decode();
          if (request !== generation.current || current.current !== source) return;
          result.current = restored;
          stop();
          setBusy(false);
          setEdited(true);
          setStatus(
            paper
              ? 'White paper applied. Check faint strokes, text and seals.'
              : '✅ Pure white background applied! Inspect face and hair edges before downloading.'
          );
          onApply(restored);
        } catch {
          fail('Could not render the corrected image. Your original photo is unchanged.');
        } finally {
          URL.revokeObjectURL(url);
        }
      };

      task.postMessage({ image: bitmap, strength, ink: mode === 'signature' && blueInk ? 'blue' : 'all' }, [bitmap]);
    } catch (e) {
      fail(e instanceof Error ? e.message : 'Background removal is currently unavailable. Please retry.');
    }
  };

  return (
    <details
      id="canvas-background-fix"
      className="background-fix rounded-2xl border-2 border-primary/30 bg-card p-3 sm:p-4 shadow-xs"
      aria-label="Background remover"
      aria-busy={busy}
      open={true}
    >
      <summary className="cursor-pointer font-bold flex items-center justify-between text-xs sm:text-sm select-none">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-base">🪄</span>
          <strong className="text-foreground">
            {paper ? 'Paper Background · Quick Fix' : 'Make Background Pure White (#FFFFFF)'}
          </strong>
          {!paper && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/30">
              US Visa &amp; Passport Norm
            </span>
          )}
        </div>
        <span className="text-xs text-primary font-semibold hover:underline">
          <span className="background-fix-open-label">Expand</span>
          <span className="background-fix-close-label">Collapse</span>
        </span>
      </summary>

      <div className="background-fix-body pt-2 space-y-2.5">
        <p className="text-xs text-muted-foreground leading-relaxed">
          {paper
            ? 'Replace the detected paper color with white (#FFFFFF). Check faint text and colored seals after cleanup.'
            : 'US Department of State & USCIS rule: Background MUST be plain white or off-white with zero shadows or room objects. Click below to automatically cut out your portrait onto pure white.'}
        </p>

        {paper && (
          <div
            className="paper-cleanup-strength flex items-center gap-2 my-2.5 flex-wrap"
            role="group"
            aria-label="Background cleanup strength"
          >
            <span className="text-xs font-semibold text-muted-foreground">Cleanup:</span>
            {[
              [28, 'Gentle'],
              [48, 'Standard'],
              [72, 'Strong']
            ].map(([value, label]) => {
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

        <div className="background-fix-actions flex flex-wrap items-center gap-2.5 pt-1">
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
            disabled={busy || edited}
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
                <span>Applying pure white background…</span>
              </>
            ) : edited ? (
              <>
                <span>✓</span>
                <span>White Background Applied</span>
              </>
            ) : (
              <>
                <span>🪄</span>
                <span>{paper ? 'Remove Paper Background → White' : 'Make Background Pure White (#FFFFFF)'}</span>
              </>
            )}
          </button>

          {busy && (
            <button
              type="button"
              onClick={() => {
                stop();
                setBusy(false);
                setStatus('Cancelled. Original image retained.');
              }}
              className="px-3.5 py-2.5 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition cursor-pointer"
            >
              Cancel
            </button>
          )}

          {edited && (
            <button
              type="button"
              onClick={() => {
                stop();
                onApply(original.current);
                setEdited(false);
              }}
              className="px-3.5 py-2.5 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition cursor-pointer"
            >
              Undo (Restore Original)
            </button>
          )}
        </div>


        {status && (
          <p
            role="status"
            className="text-xs font-medium text-emerald-700 dark:text-emerald-400 mt-2 bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-xl"
          >
            {status}
          </p>
        )}
        {error && (
          <p
            role="alert"
            className="text-xs font-medium text-rose-700 dark:text-rose-400 mt-2 bg-rose-500/10 border border-rose-500/20 p-2.5 rounded-xl"
          >
            {error}
          </p>
        )}

        <div className="pt-1 flex items-center justify-between text-xs">
          <a
            className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
            href="/photo-background-remover/"
          >
            <span>Open standalone Photo Background Remover</span>
            <span>→</span>
          </a>
          <span className="text-[11px] text-muted-foreground">100% In-Browser Privacy</span>
        </div>
      </div>
    </details>
  );
}
