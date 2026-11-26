import React, { useState, useRef, useEffect } from 'react';
import {
  PenTool,
  Type,
  Upload,
  Download,
  Trash2,
  Undo,
  Sparkles,
  Image as ImageIcon,
  Loader2
} from 'lucide-react';
import FeedbackPrompt from './FeedbackPrompt';

interface FontOption {
  id: string;
  name: string;
  fontFamily: string;
}

const SIGNATURE_FONTS: FontOption[] = [
  { id: 'caveat', name: 'Natural Running', fontFamily: '"Caveat", cursive' },
  { id: 'dancing-script', name: 'Casual Script', fontFamily: '"Dancing Script", cursive' },
  { id: 'great-vibes', name: 'Elegant Calligraphy', fontFamily: '"Great Vibes", cursive' },
  { id: 'allura', name: 'Executive Flourish', fontFamily: '"Allura", cursive' },
  { id: 'homemade-apple', name: 'Organic Pen', fontFamily: '"Homemade Apple", cursive' },
  { id: 'sacramento', name: 'Classic Monoline', fontFamily: '"Sacramento", cursive' },
  { id: 'marck-script', name: 'Smooth Flow', fontFamily: '"Marck Script", cursive' },
  { id: 'pacifico', name: 'Bold Modern', fontFamily: '"Pacifico", cursive' },
  { id: 'alex-brush', name: 'Formal Swash', fontFamily: '"Alex Brush", cursive' },
  { id: 'cedarville', name: 'Authentic Quick Sign', fontFamily: '"Cedarville Cursive", cursive' }
];

const INK_COLORS = [
  { id: 'black', label: 'Classic Black', value: '#000000' },
  { id: 'navy', label: 'Executive Navy', value: '#0f2444' },
  { id: 'royal', label: 'Royal Blue', value: '#1d4ed8' },
  { id: 'charcoal', label: 'Charcoal Slate', value: '#334155' }
];

interface SignatureCreatorToolProps {
  initialTab?: 'type' | 'draw' | 'upload';
}

export const SignatureCreatorTool: React.FC<SignatureCreatorToolProps> = ({ initialTab = 'type' }) => {
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [tab, setTab] = useState<'type' | 'draw' | 'upload'>(() => {
    if (typeof window !== 'undefined') {
      const modeParam = new URLSearchParams(window.location.search).get('mode');
      if (modeParam === 'draw' || modeParam === 'type' || modeParam === 'upload') return modeParam;
    }
    return initialTab;
  });

  // Type Mode States
  const [text, setText] = useState<string>('Alex Morgan');
  const [selectedFont, setSelectedFont] = useState<FontOption>(SIGNATURE_FONTS[0]);
  const [inkColor, setInkColor] = useState<string>('#000000');
  const [fontSize, setFontSize] = useState<number>(48);
  const [isSlanted, setIsSlanted] = useState<boolean>(true);
  const [transparentBg, setTransparentBg] = useState<boolean>(true);

  // Draw Mode States
  const [strokeWidth, setStrokeWidth] = useState<number>(3);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [hasDrawn, setHasDrawn] = useState<boolean>(false);
  const [history, setHistory] = useState<ImageData[]>([]);

  // Upload Mode States
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [removeBg, setRemoveBg] = useState<boolean>(true);
  const [cleanupStrength, setCleanupStrength] = useState<number>(48);
  const [uploadProcessing, setUploadProcessing] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [hasUploadedImage, setHasUploadedImage] = useState<boolean>(false);

  // Canvas & Input refs
  const drawCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const typeCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const uploadCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Listen for Famous Signatures gallery selection
  useEffect(() => {
    const handleFamousSelect = (e: Event) => {
      const custom = e as CustomEvent<{ name?: string; fontId?: string }>;
      if (custom.detail?.name) setText(custom.detail.name);
      if (custom.detail?.fontId) {
        const found = SIGNATURE_FONTS.find((f) => f.id === custom.detail.fontId);
        if (found) setSelectedFont(found);
      }
      setTab('type');
    };
    window.addEventListener('signresize:load-famous-signature', handleFamousSelect);
    return () => window.removeEventListener('signresize:load-famous-signature', handleFamousSelect);
  }, []);

  // Load Google Fonts dynamically for the preview and canvas rendering
  useEffect(() => {
    const linkId = 'signature-google-fonts';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Alex+Brush&family=Allura&family=Caveat:wght@600;700&family=Cedarville+Cursive&family=Dancing+Script:wght@600;700&family=Great+Vibes&family=Homemade+Apple&family=Marck+Script&family=Pacifico&family=Sacramento&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  // Render Type Signature to Canvas
  useEffect(() => {
    if (tab !== 'type') return;
    const canvas = typeCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Render width & height
    canvas.width = 600;
    canvas.height = 240;

    // Background
    if (transparentBg) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Text configuration
    ctx.fillStyle = inkColor;
    const fontStyle = isSlanted ? 'italic ' : 'normal ';
    ctx.font = `${fontStyle}${fontSize}px ${selectedFont.fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText(text || 'Your Signature', canvas.width / 2, canvas.height / 2);
  }, [tab, text, selectedFont, inkColor, fontSize, isSlanted, transparentBg]);

  // Init Draw Canvas
  useEffect(() => {
    if (tab !== 'draw') return;
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (!hasDrawn) {
      canvas.width = 600;
      canvas.height = 240;
      ctx.fillStyle = transparentBg ? 'rgba(0,0,0,0)' : '#FFFFFF';
      if (!transparentBg) ctx.fillRect(0, 0, canvas.width, canvas.height);
      saveHistory();
    }
  }, [tab, transparentBg]);

  const saveHistory = () => {
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory((prev) => [...prev.slice(-10), data]);
  };

  const handleUndo = () => {
    const canvas = drawCanvasRef.current;
    if (!canvas || history.length <= 1) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const newHistory = [...history];
    newHistory.pop(); // remove current
    const prevImage = newHistory[newHistory.length - 1];
    ctx.putImageData(prevImage, 0, 0);
    setHistory(newHistory);
  };

  const handleClearDraw = () => {
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = transparentBg ? 'rgba(0,0,0,0)' : '#FFFFFF';
    if (!transparentBg) ctx.fillRect(0, 0, canvas.width, canvas.height);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
    setHistory([]);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    setHasDrawn(true);

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.beginPath();
    ctx.moveTo((clientX - rect.left) * scaleX, (clientY - rect.top) * scaleY);
    ctx.strokeStyle = inkColor;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.lineTo((clientX - rect.left) * scaleX, (clientY - rect.top) * scaleY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      saveHistory();
    }
  };

  // Process Upload Signature to Canvas
  useEffect(() => {
    if (tab !== 'upload' || !uploadedFile) return;
    let cancelled = false;

    const processUpload = async () => {
      setUploadProcessing(true);
      setUploadError(null);
      try {
        let sourceBlob: Blob = uploadedFile;

        if (removeBg && typeof Worker !== 'undefined') {
          const bitmap = await createImageBitmap(uploadedFile);
          sourceBlob = await new Promise<Blob>((resolve, reject) => {
            const worker = new Worker('/workers/paper-background-v1.js');
            worker.onmessage = ({ data }) => {
              worker.terminate();
              if (data.error) reject(new Error(data.error));
              else resolve(data.blob);
            };
            worker.onerror = () => {
              worker.terminate();
              reject(new Error('Background cleanup failed.'));
            };
            worker.postMessage(
              {
                image: bitmap,
                strength: cleanupStrength,
                background: transparentBg ? 'transparent' : '#ffffff',
              },
              [bitmap]
            );
          });
        }

        if (cancelled) return;

        const imgUrl = URL.createObjectURL(sourceBlob);
        const img = new Image();
        img.onload = () => {
          URL.revokeObjectURL(imgUrl);
          if (cancelled) return;
          const canvas = uploadCanvasRef.current;
          if (!canvas) return;
          const ctx = canvas.getContext('2d');
          if (!ctx) return;

          canvas.width = 600;
          canvas.height = 240;

          if (transparentBg) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          } else {
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }

          const pad = 16;
          const maxW = canvas.width - pad * 2;
          const maxH = canvas.height - pad * 2;
          const scale = Math.min(maxW / img.width, maxH / img.height, 1);
          const drawW = Math.round(img.width * scale);
          const drawH = Math.round(img.height * scale);
          const dx = Math.round((canvas.width - drawW) / 2);
          const dy = Math.round((canvas.height - drawH) / 2);

          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, dx, dy, drawW, drawH);
          setHasUploadedImage(true);
          setUploadProcessing(false);
        };
        img.onerror = () => {
          URL.revokeObjectURL(imgUrl);
          if (!cancelled) {
            setUploadError('Could not render image. Please try a JPG or PNG.');
            setUploadProcessing(false);
          }
        };
        img.src = imgUrl;
      } catch (err) {
        if (!cancelled) {
          setUploadError(err instanceof Error ? err.message : 'Failed to process uploaded image.');
          setUploadProcessing(false);
        }
      }
    };

    processUpload();
    return () => {
      cancelled = true;
    };
  }, [tab, uploadedFile, removeBg, cleanupStrength, transparentBg]);

  const handleUploadFile = (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setUploadError('Please upload a valid PNG, JPG, or WebP image.');
      return;
    }
    setUploadError(null);
    setHasUploadedImage(false);
    setUploadedFile(file);
  };

  // Export handlers
  const getActiveCanvas = (): HTMLCanvasElement | null => {
    if (tab === 'type') return typeCanvasRef.current;
    if (tab === 'draw') return drawCanvasRef.current;
    return uploadCanvasRef.current;
  };

  const downloadFile = (format: 'png' | 'jpeg') => {
    const canvas = getActiveCanvas();
    if (!canvas) return;

    let exportCanvas = canvas;

    // If JPEG, ensure white background
    if (format === 'jpeg') {
      exportCanvas = document.createElement('canvas');
      exportCanvas.width = canvas.width;
      exportCanvas.height = canvas.height;
      const ctx = exportCanvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);
        ctx.drawImage(canvas, 0, 0);
      }
    }

    const mime = format === 'png' ? 'image/png' : 'image/jpeg';
    const link = document.createElement('a');
    link.download = `signature-${tab}.${format === 'png' ? 'png' : 'jpg'}`;
    link.href = exportCanvas.toDataURL(mime, 0.95);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setHasDownloaded(true);
  };

  return (
    <div class="space-y-6">
      {/* Tab Selector: Type, Draw, Upload */}
      <div className="grid grid-cols-3 gap-1.5 p-1.5 rounded-2xl bg-muted/40 border border-border max-w-xl mx-auto">
        <button
          type="button"
          onClick={() => setTab('type')}
          className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition cursor-pointer ${
            tab === 'type'
              ? 'bg-primary text-primary-foreground shadow'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Type className="w-4 h-4 shrink-0" />
          <span>Type</span>
        </button>
        <button
          type="button"
          onClick={() => setTab('draw')}
          className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition cursor-pointer ${
            tab === 'draw'
              ? 'bg-primary text-primary-foreground shadow'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <PenTool className="w-4 h-4 shrink-0" />
          <span>Draw</span>
        </button>
        <button
          type="button"
          onClick={() => setTab('upload')}
          className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition cursor-pointer ${
            tab === 'upload'
              ? 'bg-primary text-primary-foreground shadow'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Upload className="w-4 h-4 shrink-0" />
          <span>Upload</span>
        </button>
      </div>

      {/* Main Workspace Card */}
      <div class="p-5 rounded-2xl border border-border bg-card shadow-xs space-y-6">
        {/* Controls according to Tab */}
        {tab === 'type' ? (
          <div class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div class="sm:col-span-8 space-y-1">
                <label class="text-xs font-semibold text-foreground">Type Your Full Name / Signature:</label>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter your name"
                  class="w-full px-4 py-2 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:ring-2 focus:ring-primary/40 outline-hidden"
                />
              </div>

              <div class="sm:col-span-4 space-y-1">
                <label class="text-xs font-semibold text-foreground">Font Size ({fontSize}px):</label>
                <input
                  type="range"
                  min="24"
                  max="72"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  class="w-full accent-primary cursor-pointer"
                />
              </div>
            </div>

            {/* Font Selector Cards */}
            <div class="space-y-1.5">
              <label class="text-xs font-semibold text-foreground">Select Handwriting Calligraphy Style:</label>
              <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {SIGNATURE_FONTS.map((font) => (
                  <button
                    key={font.id}
                    type="button"
                    onClick={() => setSelectedFont(font)}
                    class={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                      selectedFont.id === font.id
                        ? 'border-primary bg-primary/10 shadow-xs'
                        : 'border-border bg-card hover:bg-muted/40'
                    }`}
                  >
                    <span class="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                      {font.name}
                    </span>
                    <span
                      class="text-lg text-foreground truncate mt-1"
                      style={{ fontFamily: font.fontFamily }}
                    >
                      {text || 'Signature'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : tab === 'draw' ? (
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
            <div class="flex items-center gap-3">
              <span class="text-xs font-semibold text-foreground">Pen Thickness:</span>
              <div class="flex items-center gap-1.5">
                {[2, 3, 5].map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => setStrokeWidth(w)}
                    class={`px-2.5 py-1 rounded-lg text-xs font-bold transition border ${
                      strokeWidth === w
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-muted/50 border-border text-foreground'
                    }`}
                  >
                    {w === 2 ? 'Fine' : w === 3 ? 'Medium' : 'Thick'}
                  </button>
                ))}
              </div>
            </div>

            <div class="flex items-center gap-2">
              <button
                type="button"
                onClick={handleUndo}
                disabled={history.length <= 1}
                class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border text-xs text-foreground hover:bg-muted disabled:opacity-40 transition"
              >
                <Undo class="w-3.5 h-3.5" />
                <span>Undo</span>
              </button>
              <button
                type="button"
                onClick={handleClearDraw}
                class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border text-xs text-red-600 dark:text-red-400 hover:bg-red-500/10 transition"
              >
                <Trash2 class="w-3.5 h-3.5" />
                <span>Clear Canvas</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
            <div className="flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-2 text-xs font-semibold text-foreground cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={removeBg}
                  onChange={(e) => setRemoveBg(e.target.checked)}
                  className="rounded border-border accent-primary cursor-pointer"
                />
                <span>Clean Paper Background</span>
              </label>

              {removeBg && (
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-muted-foreground">Cleanup:</span>
                  <input
                    type="range"
                    min="20"
                    max="80"
                    value={cleanupStrength}
                    onChange={(e) => setCleanupStrength(Number(e.target.value))}
                    className="w-24 accent-primary cursor-pointer"
                  />
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{uploadedFile ? 'Replace Image' : 'Choose Image'}</span>
              </button>
              {uploadedFile && (
                <button
                  type="button"
                  onClick={() => {
                    setUploadedFile(null);
                    setHasUploadedImage(false);
                    setUploadError(null);
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border text-xs text-red-600 dark:text-red-400 hover:bg-red-500/10 transition cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Global Color & Background Bar */}
        <div class="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-border text-xs">
          {tab !== 'upload' ? (
            <div class="flex items-center gap-2">
              <span class="font-semibold text-foreground">Ink Color:</span>
              <div class="flex items-center gap-1.5">
                {INK_COLORS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setInkColor(c.value)}
                    class={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-medium transition ${
                      inkColor === c.value
                        ? 'border-primary bg-primary/10 text-primary font-bold'
                        : 'border-border bg-card text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    <span
                      class="w-3 h-3 rounded-full border border-black/20"
                      style={{ backgroundColor: c.value }}
                    ></span>
                    <span>{c.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-[11px] text-muted-foreground">
              Upload a photo of your handwritten signature on white paper to extract crisp ink.
            </div>
          )}

          <div class="flex items-center gap-2">
            <label class="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={transparentBg}
                onChange={(e) => setTransparentBg(e.target.checked)}
                class="rounded border-border accent-primary cursor-pointer"
              />
              <span class="text-muted-foreground">Transparent Background (PNG)</span>
            </label>
          </div>
        </div>

        {/* Canvas Display Frame */}
        <div class="relative rounded-2xl border border-border p-4 bg-muted/20 flex flex-col items-center justify-center min-h-[260px] overflow-hidden">
          {tab === 'type' ? (
            <canvas
              ref={typeCanvasRef}
              class="max-w-full h-auto rounded-xl shadow-xs border border-border/60 bg-card"
            />
          ) : tab === 'draw' ? (
            <div class="relative w-full max-w-[600px] h-[240px] rounded-xl border border-dashed border-border/80 bg-card shadow-xs overflow-hidden">
              <canvas
                ref={drawCanvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                className="w-full h-full cursor-crosshair touch-none"
              />
              {!hasDrawn && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-xs text-muted-foreground/60">
                  Draw your signature here with finger, mouse, or stylus
                </div>
              )}
            </div>
          ) : (
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                handleUploadFile(e.dataTransfer.files?.[0]);
              }}
              className="relative w-full max-w-[600px] h-[240px] rounded-xl border border-dashed border-border/80 bg-card shadow-xs overflow-hidden flex items-center justify-center"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={(e) => handleUploadFile(e.target.files?.[0])}
                className="hidden"
              />
              <canvas
                ref={uploadCanvasRef}
                className={`max-w-full max-h-full object-contain ${hasUploadedImage ? 'block' : 'hidden'}`}
              />
              {!hasUploadedImage && !uploadProcessing && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex flex-col items-center justify-center gap-2 p-6 text-center cursor-pointer hover:bg-muted/20 transition w-full h-full"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-foreground">
                    Click to upload or drop your handwritten signature photo
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    Supports JPG, PNG, WebP • Automatically removes paper background in browser
                  </div>
                </button>
              )}
              {uploadProcessing && (
                <div className="absolute inset-0 bg-background/70 backdrop-blur-xs flex flex-col items-center justify-center gap-2 text-xs font-semibold text-foreground">
                  <Loader2 className="w-5 h-5 animate-spin text-primary" />
                  <span>Cleaning paper background...</span>
                </div>
              )}
              {uploadError && (
                <div className="absolute bottom-2 left-2 right-2 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/30 text-[11px] text-red-600 dark:text-red-400 text-center">
                  {uploadError}
                </div>
              )}
            </div>
          )}
        </div>

        <FeedbackPrompt downloaded={hasDownloaded} tool="Signature creator" />
        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="text-xs text-muted-foreground">
            {tab === 'type'
              ? 'Rendered at 600×240 px'
              : tab === 'draw'
              ? 'Captured in real-time vector canvas'
              : 'Processed 100% locally at 600×240 px'}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => downloadFile('png')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold text-xs transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PNG</span>
            </button>

            <button
              type="button"
              onClick={() => downloadFile('jpeg')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs shadow hover:bg-primary/90 transition"
            >
              <Download className="w-4 h-4" />
              <span>Download JPG (White Paper)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
