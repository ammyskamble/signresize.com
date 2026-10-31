// src/components/USPhotoPrintSheet.tsx
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPdfFromJpegBlob } from '../utils/pdfGenerator';
import FeedbackPrompt from './FeedbackPrompt';

interface GridConfig {
  id: '6-grid' | '4-grid' | '2-grid';
  label: string;
  sublabel: string;
  cols: number;
  rows: number;
  total: number;
  photoPx: number; // 600 px = 2 inches at 300 DPI
}

const GRID_OPTIONS: GridConfig[] = [
  {
    id: '6-grid',
    label: '6 Photos (3×2 Grid)',
    sublabel: 'Maximum prints · 2×2 in each',
    cols: 3,
    rows: 2,
    total: 6,
    photoPx: 600
  },
  {
    id: '4-grid',
    label: '4 Photos (2×2 Safe Margin)',
    sublabel: 'Recommended for Walgreens/CVS kiosks',
    cols: 2,
    rows: 2,
    total: 4,
    photoPx: 600
  },
  {
    id: '2-grid',
    label: '2 Photos (Spacious)',
    sublabel: 'Standard consular submission',
    cols: 2,
    rows: 1,
    total: 2,
    photoPx: 600
  }
];

// 4x6 inches at 300 DPI (Landscape: 6 in wide x 4 in high)
const SHEET_WIDTH = 1800;
const SHEET_HEIGHT = 1200;
const PHOTO_PX = 600; // 2 inches at 300 DPI

function coverSquareCrop(width: number, height: number, zoom = 1, x = 50, y = 50) {
  const minDim = Math.min(width, height);
  const cropSize = minDim / zoom;
  const left = ((width - cropSize) * x) / 100;
  const top = ((height - cropSize) * y) / 100;
  return { x: left, y: top, width: cropSize, height: cropSize };
}

export function USPhotoPrintSheet() {
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const canvas = useRef<HTMLCanvasElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const tile = useRef<HTMLCanvasElement | null>(null);
  const loadId = useRef(0);

  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [filename, setFilename] = useState('');
  const originalImage = useRef<HTMLImageElement | null>(null);
  const [bgStatus, setBgStatus] = useState('');
  const [bgProcessing, setBgProcessing] = useState(false);
  const [bgApplied, setBgApplied] = useState(false);
  const [gridMode, setGridMode] = useState<'6-grid' | '4-grid' | '2-grid'>('6-grid');
  const [zoom, setZoom] = useState(1);
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [showFaceGuide, setShowFaceGuide] = useState(true);
  const [showCutLines, setShowCutLines] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [busy, setBusy] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [isDraggingPhoto, setIsDraggingPhoto] = useState(false);
  const dragStart = useRef<{ clientX: number; clientY: number; startX: number; startY: number } | null>(null);

  useEffect(() => () => { loadId.current++; }, []);

  async function load(source: string, name: string, revoke = false) {
    const request = ++loadId.current;
    setError('');
    setLoading(true);
    try {
      const img = new Image();
      img.src = source;
      await img.decode();
      if (request !== loadId.current) return;
      setImage(img);
      originalImage.current = img;
      setBgApplied(false);
      setBgStatus('');
      setFilename(name);
      setZoom(1);
      setX(50);
      setY(50);
      setConfirmed(false);
    } catch {
      if (request === loadId.current) {
        setError('This image could not be loaded. Please choose a valid JPG, PNG, or WebP photo.');
      }
    } finally {
      if (revoke) URL.revokeObjectURL(source);
      if (request === loadId.current) setLoading(false);
    }
  }

  function handleUpload(file?: File) {
    if (!file || busy || loading) return;
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setError('Please upload a JPG, PNG, or WebP image.');
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      setError('Image file is too large. Please choose an image under 25 MB.');
      return;
    }
    void load(URL.createObjectURL(file), file.name, true);
  }

  async function loadSample() {
    setError('');
    try {
      const { createSamplePhotoData } = await import('../utils/sampleImages');
      void load(createSamplePhotoData('US PASSPORT', '2x2 INCH', 600, 600), 'Sample US Passport Photo');
    } catch {
      setError('Could not load the sample photo. You can upload your own image directly.');
    }
  }

  // 1-Click AI White Background Remover
  async function handleRemoveBackground() {
    if (!image || busy || loading) return;
    setBusy(true);
    setBgProcessing(true);
    setError('');
    setBgStatus('Separating portrait and applying pure white background…');

    if (filename.toLowerCase().includes('sample')) {
      try {
        const { createSamplePhotoData } = await import('../utils/sampleImages');
        const whiteData = createSamplePhotoData('US PASSPORT', '2x2 INCH', 600, 600, '#ffffff');
        const newImg = new Image();
        newImg.src = whiteData;
        await newImg.decode();
        setImage(newImg);
        setBgApplied(true);
        setBgStatus('✅ Pure white background (#FFFFFF) applied!');
        setBusy(false);
        setBgProcessing(false);
        return;
      } catch {
        // fallback to worker
      }
    }

    try {
      if (!window.Worker || !window.OffscreenCanvas) {
        throw new Error('Please use a modern browser (Chrome, Edge, Safari, Firefox) for AI background removal.');
      }
      const bitmap = await createImageBitmap(image);
      const worker = new Worker('/workers/portrait-background-v1.js');

      worker.onmessage = async ({ data }: MessageEvent<{ blob?: Blob; status?: string; error?: string }>) => {
        if (data.status) {
          setBgStatus(data.status);
          return;
        }
        if (data.error) {
          setError(data.error);
          setBusy(false);
          setBgProcessing(false);
          worker.terminate();
          return;
        }
        if (data.blob) {
          try {
            const url = URL.createObjectURL(data.blob);
            const newImg = new Image();
            newImg.src = url;
            await newImg.decode();
            setImage(newImg);
            setBgApplied(true);
            setBgStatus('✅ Pure white background (#FFFFFF) applied!');
          } catch {
            setError('Failed to render cleaned portrait.');
          } finally {
            setBusy(false);
            setBgProcessing(false);
            worker.terminate();
          }
        }
      };

      worker.onerror = () => {
        setError('Background removal engine failed to load. Please check your network and retry.');
        setBusy(false);
        setBgProcessing(false);
        worker.terminate();
      };

      worker.postMessage({ image: bitmap, background: '#ffffff', edge: 0 }, [bitmap]);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Background removal is currently unavailable.');
      setBusy(false);
      setBgProcessing(false);
    }
  }

  function handleRestoreOriginal() {
    if (originalImage.current) {
      setImage(originalImage.current);
      setBgApplied(false);
      setBgStatus('');
    }
  }

  // Calculate layout positions based on selected grid mode
  const getPositions = useCallback(() => {
    const active = GRID_OPTIONS.find(g => g.id === gridMode) || GRID_OPTIONS[0];
    const { cols, rows, total } = active;
    
    // Total space taken by photos
    const totalPhotosW = cols * PHOTO_PX;
    const totalPhotosH = rows * PHOTO_PX;

    // Distribute remaining space evenly as margins / gutters
    const gapX = (SHEET_WIDTH - totalPhotosW) / (cols + 1);
    const gapY = (SHEET_HEIGHT - totalPhotosH) / (rows + 1);

    const positions: Array<{ x: number; y: number; width: number; height: number }> = [];

    for (let i = 0; i < total; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      positions.push({
        x: Math.round(gapX + col * (PHOTO_PX + gapX)),
        y: Math.round(gapY + row * (PHOTO_PX + gapY)),
        width: PHOTO_PX,
        height: PHOTO_PX
      });
    }

    return positions;
  }, [gridMode]);

  // Main canvas render function
  const renderSheet = useCallback((renderForExport = false) => {
    const el = canvas.current;
    const ctx = el?.getContext('2d');
    if (!el || !ctx) return;

    // 1. Fill 4x6 sheet with clean pure white background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, SHEET_WIDTH, SHEET_HEIGHT);

    // 2. Prepare single high-resolution tile (600x600 px)
    if (image) {
      const photo = tile.current ?? (tile.current = document.createElement('canvas'));
      photo.width = PHOTO_PX;
      photo.height = PHOTO_PX;
      const photoCtx = photo.getContext('2d');
      if (photoCtx) {
        photoCtx.fillStyle = '#ffffff';
        photoCtx.fillRect(0, 0, PHOTO_PX, PHOTO_PX);
        photoCtx.imageSmoothingEnabled = true;
        photoCtx.imageSmoothingQuality = 'high';

        const crop = coverSquareCrop(image.naturalWidth, image.naturalHeight, zoom, x, y);
        photoCtx.drawImage(
          image,
          crop.x,
          crop.y,
          crop.width,
          crop.height,
          0,
          0,
          PHOTO_PX,
          PHOTO_PX
        );
      }
    }

    const positions = getPositions();

    // 3. Tile photos onto the 4x6 sheet
    for (const pos of positions) {
      if (image && tile.current) {
        ctx.drawImage(tile.current, pos.x, pos.y, pos.width, pos.height);
      } else {
        // Placeholder preview box
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(pos.x, pos.y, pos.width, pos.height);
        ctx.fillStyle = '#6366f1';
        ctx.font = 'bold 28px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('2 × 2 INCH', pos.x + pos.width / 2, pos.y + pos.height / 2 - 14);
        ctx.fillStyle = '#64748b';
        ctx.font = '18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.fillText('600 × 600 px (300 DPI)', pos.x + pos.width / 2, pos.y + pos.height / 2 + 20);
      }

      // Draw subtle cutting guideline border
      if (showCutLines) {
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1;
        ctx.setLineDash([6, 6]);
        ctx.strokeRect(pos.x, pos.y, pos.width, pos.height);
        ctx.setLineDash([]); // Reset dash
      }
    }

    // 4. Draw Biometric Face Guide Overlay (Preview mode only, NEVER on downloaded export)
    if (!renderForExport && showFaceGuide && positions.length > 0) {
      const p = positions[0]; // Draw guide on first photo tile
      ctx.save();
      
      // Target Head Height: 50% to 69% of 600 px = 300 to 414 px
      const centerX = p.x + p.width / 2;
      const centerY = p.y + p.height * 0.48;
      const radiusX = p.width * 0.22;
      const radiusY = p.height * 0.30;

      // Draw dashed oval for biometric head outline
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 6]);
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
      ctx.stroke();

      // Top of Head line (Crown limit ~12% from top)
      const crownY = p.y + p.height * 0.12;
      ctx.strokeStyle = '#059669';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.moveTo(p.x + 30, crownY);
      ctx.lineTo(p.x + p.width - 30, crownY);
      ctx.stroke();

      // Eye Level Line (~44% from top, ~56% from bottom = 1.12 inches)
      const eyeY = p.y + p.height * 0.44;
      ctx.strokeStyle = '#0284c7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(p.x + 30, eyeY);
      ctx.lineTo(p.x + p.width - 30, eyeY);
      ctx.stroke();

      // Bottom of Chin line (~76% from top)
      const chinY = p.y + p.height * 0.76;
      ctx.strokeStyle = '#dc2626';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(p.x + 30, chinY);
      ctx.lineTo(p.x + p.width - 30, chinY);
      ctx.stroke();

      // Guide Text Labels directly on the canvas
      ctx.setLineDash([]);
      ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'left';

      // Crown label
      ctx.fillStyle = '#059669';
      ctx.fillText('Crown (Top of Head)', p.x + 36, crownY - 6);

      // Eye level label
      ctx.fillStyle = '#0284c7';
      ctx.fillText('Eye Level (1⅛"–1⅜")', p.x + 36, eyeY - 6);

      // Chin label
      ctx.fillStyle = '#dc2626';
      ctx.fillText('Chin Baseline', p.x + 36, chinY + 16);

      // Biometric Oval Title
      ctx.fillStyle = '#4f46e5';
      ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('US Biometric Head Oval (50%–69%)', centerX, p.y + 24);

      ctx.restore();
    }
  }, [image, zoom, x, y, getPositions, showCutLines, showFaceGuide]);

  // Interactive Canvas Drag-to-Pan and Wheel Zoom Handlers
  function handleCanvasPointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!image) return;
    dragStart.current = {
      clientX: e.clientX,
      clientY: e.clientY,
      startX: x,
      startY: y
    };
    setIsDraggingPhoto(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  }

  function handleCanvasPointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!isDraggingPhoto || !dragStart.current || !canvas.current) return;
    const rect = canvas.current.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const dx = e.clientX - dragStart.current.clientX;
    const dy = e.clientY - dragStart.current.clientY;

    // Movement sensitivity: factor of 150 maps screen delta to crop coordinates
    const deltaX = (dx / rect.width) * 150;
    const deltaY = (dy / rect.height) * 150;

    const newX = Math.round(Math.max(0, Math.min(100, dragStart.current.startX - deltaX)));
    const newY = Math.round(Math.max(0, Math.min(100, dragStart.current.startY - deltaY)));

    setX(newX);
    setY(newY);
    setConfirmed(false);
  }

  function handleCanvasPointerUp(e: React.PointerEvent<HTMLCanvasElement>) {
    if (isDraggingPhoto) {
      setIsDraggingPhoto(false);
      dragStart.current = null;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
  }

  function handleCanvasWheel(e: React.WheelEvent<HTMLCanvasElement>) {
    if (!image) return;
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.05 : -0.05;
    setZoom(prev => {
      const next = Math.round((prev + delta) * 100) / 100;
      return Math.max(1, Math.min(2.5, next));
    });
    setConfirmed(false);
  }

  useEffect(() => {
    const frame = requestAnimationFrame(() => renderSheet(false));
    return () => cancelAnimationFrame(frame);
  }, [renderSheet]);

  async function handleDownload(isPdf: boolean) {
    if (!canvas.current || !image || !confirmed || busy || loading) return;
    setBusy(true);
    setError('');

    try {
      // Re-render sheet cleanly for export (disables the face guide oval so it doesn't print)
      renderSheet(true);

      let blob = await new Promise<Blob>((resolve, reject) => {
        canvas.current!.toBlob(
          b => (b ? resolve(b) : reject(new Error('Export canvas failed'))),
          'image/jpeg',
          0.98
        );
      });

      if (isPdf) {
        blob = await createPdfFromJpegBlob(blob, SHEET_WIDTH, SHEET_HEIGHT, {
          pageSize: '4x6',
          title: 'US Passport 2x2 Photos 4x6 Sheet'
        });
      }

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `us-passport-2x2-print-sheet-4x6.${isPdf ? 'pdf' : 'jpg'}`;
      a.click();
      setHasDownloaded(true);

      window.setTimeout(() => URL.revokeObjectURL(url), 10_000);
    } catch {
      setError('Could not export the 4×6 print sheet. Please try again with another photo.');
    } finally {
      // Re-enable interactive preview overlay after export
      renderSheet(false);
      setBusy(false);
    }
  }

  return (
    <section className="grid lg:grid-cols-[380px_1fr] gap-6 items-start">
      {/* Left Column: Upload, Settings, Adjustments, Downloads */}
      <div className="space-y-5 min-w-0">
        {/* Upload Card */}
        <div className="rounded-2xl border border-border bg-card p-4 sm:p-5 space-y-4 shadow-xs">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span>🇺🇸 Save $18+ at CVS / Walgreens / Walmart</span>
            </div>
            <h2 className="text-xl font-extrabold tracking-tight text-foreground mt-2">
              Make Your 4×6 Print Sheet
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Tile multiple 2×2 inch photos on a standard 4×6 inch (1200×1800 px @ 300 DPI) sheet.
            </p>
          </div>

          <div
            className={`rounded-xl border-2 border-dashed p-4 text-center transition-colors cursor-pointer ${
              dragging
                ? 'border-primary bg-primary/10'
                : 'border-primary/30 bg-primary/5 hover:bg-primary/10'
            }`}
            onDragOver={e => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={e => {
              e.preventDefault();
              setDragging(false);
              handleUpload(e.dataTransfer.files[0]);
            }}
            onClick={() => input.current?.click()}
          >
            <input
              ref={input}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              aria-label="Upload passport photo"
              className="hidden"
              onChange={e => {
                handleUpload(e.target.files?.[0]);
                e.target.value = '';
              }}
            />
            <button
              type="button"
              disabled={loading || busy}
              className="inline-flex items-center justify-center gap-2 w-full min-h-12 px-4 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-bold shadow-sm transition hover:opacity-95 disabled:opacity-50 pointer-events-none"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 16V3m-5 5 5-5 5 5M4 15v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5" />
              </svg>
              {loading ? 'Processing…' : image ? 'Replace Photo' : 'Upload Your Photo'}
            </button>
            <p className="text-xs text-muted-foreground mt-2">Drag &amp; drop or click to select from your phone/PC</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">JPEG, PNG or WebP · High resolution recommended</p>
            {filename && (
              <p className="text-xs font-semibold text-primary mt-2 break-all bg-primary/10 p-1.5 rounded-lg">
                Selected: {filename}
              </p>
            )}
          </div>

          {error && <p role="alert" className="text-xs text-rose-600 font-semibold">{error}</p>}

          {!image && (
            <div className="text-xs text-muted-foreground flex items-center justify-between pt-1">
              <span>Need a test image?</span>
              <button
                type="button"
                disabled={loading}
                onClick={e => {
                  e.stopPropagation();
                  void loadSample();
                }}
                className="text-primary font-bold hover:underline cursor-pointer"
              >
                Try sample passport photo →
              </button>
            </div>
          )}
        </div>

        {/* Prominent White Background Remover Card for US Passport Compliance */}
        <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/5 p-4 sm:p-5 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">🪄</span>
              <h3 className="text-sm font-extrabold text-foreground">
                White Background Remover
              </h3>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-500/40">
              State Dept Requirement
            </span>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed">
            US passport photos strictly require a plain white background (#FFFFFF). Our in-browser AI cuts out your portrait and replaces room, shadow, or outdoor backgrounds with pure white instantly.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            {image ? (
              <button
                type="button"
                disabled={busy || loading || bgApplied}
                onClick={() => void handleRemoveBackground()}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  bgApplied
                    ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                    : bgProcessing
                    ? 'bg-primary/80 text-primary-foreground animate-pulse'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md'
                } disabled:opacity-50`}
              >
                {bgProcessing ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>Applying pure white background…</span>
                  </>
                ) : bgApplied ? (
                  <>
                    <span>✓</span>
                    <span>Pure White Background Applied</span>
                  </>
                ) : (
                  <>
                    <span>🪄</span>
                    <span>Make Background Pure White (#FFFFFF)</span>
                  </>
                )}
              </button>
            ) : (
              <button
                type="button"
                disabled={loading || busy}
                onClick={() => input.current?.click()}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-muted hover:bg-muted/80 text-foreground border border-border transition flex items-center gap-2 cursor-pointer"
              >
                <span>🪄</span>
                <span>Upload Photo to Remove Background → White</span>
              </button>
            )}

            {bgApplied && (
              <button
                type="button"
                onClick={handleRestoreOriginal}
                className="px-3.5 py-2.5 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition cursor-pointer"
              >
                Undo (Restore Original)
              </button>
            )}
          </div>

          {bgStatus && (
            <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
              {bgStatus}
            </p>
          )}

          <div className="pt-1 text-[11px] text-muted-foreground flex items-center justify-between">
            <span>100% In-Browser Privacy (Zero Cloud Upload)</span>
            <a href="/photo-background-remover/" className="text-primary font-semibold hover:underline">
              Standalone tool →
            </a>
          </div>
        </div>

                {/* Layout & Grid Selector */}
        <div className="rounded-2xl border border-border bg-card p-4 sm:p-5 space-y-4 shadow-xs">
          <label className="text-sm font-bold text-foreground block">
            Select 4×6 Layout Format
          </label>
          <div className="grid grid-cols-1 gap-2">
            {GRID_OPTIONS.map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setGridMode(opt.id)}
                className={`p-3 rounded-xl border text-left transition flex items-center justify-between cursor-pointer ${
                  gridMode === opt.id
                    ? 'border-primary bg-primary/10 shadow-2xs'
                    : 'border-border/80 hover:bg-muted/50'
                }`}
              >
                <div>
                  <div className="text-xs font-bold text-foreground">{opt.label}</div>
                  <div className="text-[11px] text-muted-foreground">{opt.sublabel}</div>
                </div>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  gridMode === opt.id ? 'border-primary bg-primary' : 'border-muted-foreground/40'
                }`}>
                  {gridMode === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-border/60 text-xs text-muted-foreground space-y-1">
            <p className="font-semibold text-foreground">💡 Kiosk Recommendation:</p>
            <p>Select <strong>4 Photos</strong> for CVS/Walgreens prints to guarantee safe outer margins that won't get clipped by pharmacy paper cutters.</p>
          </div>
        </div>

        {/* Pharmacy Order Instructions Card (Moved here so controls sit with canvas) */}
        <div className="rounded-2xl border-2 border-emerald-500/25 bg-emerald-500/5 p-4 sm:p-5 space-y-3 shadow-xs">
          <h3 className="font-extrabold text-sm text-foreground flex items-center gap-2">
            <span>💡</span>
            <span>How to Print at Walgreens, CVS or Walmart for $0.35</span>
          </h3>
          <ol className="text-xs text-foreground/90 space-y-2 list-decimal list-inside leading-relaxed">
            <li>
              <strong>Download the 4×6 Photo (JPG)</strong> after adjusting your head alignment in the preview.
            </li>
            <li>
              Visit <strong>Walgreens Photo</strong>, <strong>CVS Photo</strong>, or <strong>Walmart Photo</strong> online or open their mobile app.
            </li>
            <li>
              Choose a standard <strong>4×6 Photo Print</strong> (costs $0.35 to $0.45). <span className="text-rose-600 dark:text-rose-400 font-bold">Important: Do NOT select the "$19.99 Passport Photo" in-store service!</span>
            </li>
            <li>
              Upload your downloaded 4×6 image. Make sure <strong>"Auto-Correct"</strong> and <strong>"Fit to Frame"</strong> are turned <strong>OFF</strong> so the kiosk prints at 100% true scale.
            </li>
            <li>
              Select same-day pickup, pay at the counter or kiosk for under 50 cents, and cut along the lines!
            </li>
          </ol>
        </div>
      </div>

      {/* Right Column: Sheet Live Canvas Preview, Alignment Controls & Download Deck */}
      <div className="space-y-4 min-w-0 lg:sticky lg:top-4 self-start">
        <div className="rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-xs space-y-4">
          {/* Canvas Header with Quick Toggles */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-bold text-foreground">
              <span>🖼️</span>
              <span>4×6 INCH SHEET PREVIEW (1800 × 1200 PX @ 300 DPI)</span>
              <span className="text-primary font-mono text-[10px] bg-primary/10 px-1.5 py-0.5 rounded">100% Scale</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setShowFaceGuide(prev => !prev)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition flex items-center gap-1 cursor-pointer ${
                  showFaceGuide
                    ? 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/30'
                    : 'bg-muted text-muted-foreground border-border hover:text-foreground'
                }`}
                title="Toggle US Biometric Face Oval Guide"
              >
                <span>👤 Guide Oval:</span>
                <span className="font-bold">{showFaceGuide ? 'ON' : 'OFF'}</span>
              </button>
              <button
                type="button"
                onClick={() => setShowCutLines(prev => !prev)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition flex items-center gap-1 cursor-pointer ${
                  showCutLines
                    ? 'bg-slate-500/10 text-slate-800 dark:text-slate-200 border-slate-500/30'
                    : 'bg-muted text-muted-foreground border-border hover:text-foreground'
                }`}
                title="Toggle cutting line markings"
              >
                <span>✂️ Cut Lines:</span>
                <span className="font-bold">{showCutLines ? 'ON' : 'OFF'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Canvas Stage */}
          <div className="relative p-3 rounded-xl bg-slate-100 dark:bg-slate-950/60 border border-border flex flex-col items-center justify-center overflow-hidden">
            <canvas
              ref={canvas}
              width={SHEET_WIDTH}
              height={SHEET_HEIGHT}
              onPointerDown={handleCanvasPointerDown}
              onPointerMove={handleCanvasPointerMove}
              onPointerUp={handleCanvasPointerUp}
              onPointerCancel={handleCanvasPointerUp}
              onWheel={handleCanvasWheel}
              style={{ touchAction: 'none' }}
              className={`w-full h-auto shadow-xl bg-white rounded-lg transition-transform select-none ${
                image ? (isDraggingPhoto ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'
              }`}
              aria-label="Preview of US 2x2 passport photos on 4x6 inch print sheet"
            />

            {/* Live Interactive Canvas Hint */}
            {image && (
              <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-background/90 text-foreground border border-border/80 shadow-2xs backdrop-blur-xs">
                <span>👆</span>
                <span>Click &amp; drag photo on preview to reposition, scroll to zoom, or use sliders below</span>
              </div>
            )}
          </div>

          {/* Adjust Head Alignment & Biometric Controls (Directly Attached Under Canvas) */}
          {image ? (
            <div className="space-y-4 pt-3 border-t border-border">
              {/* Controls Header & Quick Actions */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-base">🎯</span>
                  <h3 className="text-sm font-extrabold text-foreground">
                    Adjust Head Alignment &amp; Biometric Framing
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setX(50);
                      setY(50);
                      setConfirmed(false);
                    }}
                    className="text-xs font-semibold px-2.5 py-1 rounded-lg border border-border bg-card hover:bg-muted text-foreground transition cursor-pointer"
                  >
                    Center Head
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setZoom(1);
                      setX(50);
                      setY(50);
                      setConfirmed(false);
                    }}
                    className="text-xs font-semibold px-2.5 py-1 rounded-lg text-primary hover:bg-primary/10 transition cursor-pointer"
                  >
                    Reset All
                  </button>
                </div>
              </div>

              {/* Sliders Grid: Zoom, Horizontal, Vertical */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 bg-muted/30 p-3.5 rounded-xl border border-border/70">
                {/* Zoom */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-foreground">
                    <span>🔍 Head Zoom / Size</span>
                    <span className="font-mono text-primary text-[11px] bg-primary/10 px-1.5 py-0.5 rounded font-bold">
                      {Math.round(zoom * 100)}%
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        setZoom(prev => Math.max(1, Math.round((prev - 0.05) * 100) / 100));
                        setConfirmed(false);
                      }}
                      aria-label="Zoom out"
                      className="w-7 h-7 rounded-lg border border-border bg-card flex items-center justify-center text-xs font-bold hover:bg-muted cursor-pointer shrink-0"
                    >
                      −
                    </button>
                    <input
                      type="range"
                      min="1"
                      max="2.5"
                      step="0.02"
                      value={zoom}
                      onChange={e => {
                        setZoom(Number(e.target.value));
                        setConfirmed(false);
                      }}
                      className="w-full h-2 bg-muted rounded-lg accent-primary cursor-pointer"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setZoom(prev => Math.min(2.5, Math.round((prev + 0.05) * 100) / 100));
                        setConfirmed(false);
                      }}
                      aria-label="Zoom in"
                      className="w-7 h-7 rounded-lg border border-border bg-card flex items-center justify-center text-xs font-bold hover:bg-muted cursor-pointer shrink-0"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-[10px] text-muted-foreground">Zoom until head fits within oval</p>
                </div>

                {/* Move Horizontal */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-foreground">
                    <span>↔️ Move Horizontal (X)</span>
                    <span className="font-mono text-muted-foreground text-[11px]">{x}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={x}
                    onChange={e => {
                      setX(Number(e.target.value));
                      setConfirmed(false);
                    }}
                    className="w-full h-2 mt-2 bg-muted rounded-lg accent-primary cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>⬅️ Left</span>
                    <span>Center</span>
                    <span>Right ➡️</span>
                  </div>
                </div>

                {/* Move Vertical */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-foreground">
                    <span>↕️ Move Vertical (Y)</span>
                    <span className="font-mono text-muted-foreground text-[11px]">{y}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={y}
                    onChange={e => {
                      setY(Number(e.target.value));
                      setConfirmed(false);
                    }}
                    className="w-full h-2 mt-2 bg-muted rounded-lg accent-primary cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>⬆️ Up</span>
                    <span>Center</span>
                    <span>Down ⬇️</span>
                  </div>
                </div>
              </div>

              {/* Quick Directional Nudge Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-border text-xs">
                <span className="text-muted-foreground font-semibold text-[11px]">Fine-Tuning Nudge:</span>
                <div className="inline-flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => {
                      setX(prev => Math.max(0, prev - 2));
                      setConfirmed(false);
                    }}
                    className="px-2.5 py-1 rounded-md border border-border bg-card hover:bg-muted font-bold text-xs cursor-pointer"
                    title="Nudge Left"
                  >
                    ⬅️ Left
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setY(prev => Math.max(0, prev - 2));
                      setConfirmed(false);
                    }}
                    className="px-2.5 py-1 rounded-md border border-border bg-card hover:bg-muted font-bold text-xs cursor-pointer"
                    title="Nudge Up"
                  >
                    ⬆️ Up
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setY(prev => Math.min(100, prev + 2));
                      setConfirmed(false);
                    }}
                    className="px-2.5 py-1 rounded-md border border-border bg-card hover:bg-muted font-bold text-xs cursor-pointer"
                    title="Nudge Down"
                  >
                    ⬇️ Down
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setX(prev => Math.min(100, prev + 2));
                      setConfirmed(false);
                    }}
                    className="px-2.5 py-1 rounded-md border border-border bg-card hover:bg-muted font-bold text-xs cursor-pointer"
                    title="Nudge Right"
                  >
                    ➡️ Right
                  </button>
                </div>
              </div>

              {/* Biometric Requirements Explainer ("What is required?") */}
              <div className="rounded-xl border border-indigo-500/25 bg-indigo-500/5 p-3.5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300">
                    <span>📋</span>
                    <span>What is Required? Official US Biometric Guidelines</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 font-bold">
                    State Dept Standard
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-background/80 border border-border/60">
                    <span className="text-emerald-600 font-bold">🟢</span>
                    <div>
                      <strong className="text-foreground">Crown (Top of Head):</strong>
                      <p className="text-muted-foreground text-[11px] leading-snug">
                        Hair crown aligns near the <strong>green dashed line</strong> (~10–12% from top).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-2 rounded-lg bg-background/80 border border-border/60">
                    <span className="text-sky-600 font-bold">🔵</span>
                    <div>
                      <strong className="text-foreground">Eye Level:</strong>
                      <p className="text-muted-foreground text-[11px] leading-snug">
                        Eyes must fall along the <strong>blue horizontal guideline</strong> (1⅛" to 1⅜" from bottom).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-2 rounded-lg bg-background/80 border border-border/60">
                    <span className="text-indigo-600 font-bold">🟣</span>
                    <div>
                      <strong className="text-foreground">Head Size (50%–69%):</strong>
                      <p className="text-muted-foreground text-[11px] leading-snug">
                        Total head height (chin to crown) must be 1" to 1⅜" (25–35 mm). Fit face inside the <strong>purple dashed oval</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-2 rounded-lg bg-background/80 border border-border/60">
                    <span className="text-rose-600 font-bold">🔴</span>
                    <div>
                      <strong className="text-foreground">Chin Baseline:</strong>
                      <p className="text-muted-foreground text-[11px] leading-snug">
                        Bottom of chin should touch or sit near the <strong>red bottom line</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirmation Checkbox */}
              <label className="flex items-start gap-2.5 pt-1 text-xs text-foreground cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={e => setConfirmed(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded accent-primary cursor-pointer shrink-0"
                />
                <span className="leading-relaxed">
                  I verified that my chin, eyes, and head align within the US State Department guide oval and background is pure white.
                </span>
              </label>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <button
                  type="button"
                  disabled={!confirmed || busy || loading}
                  onClick={() => void handleDownload(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-primary text-primary-foreground font-extrabold text-xs sm:text-sm rounded-xl shadow-md hover:opacity-95 transition disabled:opacity-40 cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5 5 5 5-5m-5 5V3" />
                  </svg>
                  {busy ? 'Generating Sheet…' : 'Download 4×6 Photo Sheet (JPG)'}
                </button>

                <button
                  type="button"
                  disabled={!confirmed || busy || loading}
                  onClick={() => void handleDownload(true)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 border border-border bg-card hover:bg-muted font-bold text-xs rounded-xl transition disabled:opacity-40 cursor-pointer"
                >
                  Download PDF
                </button>
              </div>

              <FeedbackPrompt downloaded={hasDownloaded} tool="US 4x6 Passport Photo Sheet" />
            </div>
          ) : (
            <div className="p-4 rounded-xl border border-dashed border-border bg-muted/20 text-center space-y-1">
              <p className="text-xs font-semibold text-foreground">Upload your photo on the left to activate alignment controls</p>
              <p className="text-[11px] text-muted-foreground">Once uploaded, you can fine-tune zoom, center, and verify against US State Department biometric standards directly beside this preview.</p>
            </div>
          )}

          {/* Specifications Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px] text-muted-foreground pt-1">
            <div className="p-2.5 rounded-xl bg-muted/40 border border-border/60">
              <div className="font-bold text-foreground">📐 Exact 2×2 Inch Size</div>
              <div>Each photo cuts out to exactly 51×51 mm (600×600 px).</div>
            </div>
            <div className="p-2.5 rounded-xl bg-muted/40 border border-border/60">
              <div className="font-bold text-foreground">🖨️ 300 DPI Resolution</div>
              <div>Lab-quality sharpness for official Department of State submission.</div>
            </div>
            <div className="p-2.5 rounded-xl bg-muted/40 border border-border/60">
              <div className="font-bold text-foreground">✂️ Safe Cutting Borders</div>
              <div>Dotted guide marks make cutting with scissors effortless.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

