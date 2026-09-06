import React, { useState, useRef, useEffect } from 'react';
import {
  PenTool,
  Type,
  Download,
  Trash2,
  Undo,
  ExternalLink,
  Check,
  Sparkles,
  Sliders,
  Palette
} from 'lucide-react';

interface FontOption {
  id: string;
  name: string;
  fontFamily: string;
}

const SIGNATURE_FONTS: FontOption[] = [
  { id: 'caveat', name: 'Natural Running', fontFamily: '"Caveat", cursive' },
  { id: 'dancing-script', name: 'Casual Script', fontFamily: '"Dancing Script", cursive' },
  { id: 'great-vibes', name: 'Elegant Calligraphy', fontFamily: '"Great Vibes", cursive' },
  { id: 'sacramento', name: 'Classic Monoline', fontFamily: '"Sacramento", cursive' },
  { id: 'pacifico', name: 'Bold Signature', fontFamily: '"Pacifico", cursive' },
  { id: 'alex-brush', name: 'Formal Swash', fontFamily: '"Alex Brush", cursive' }
];

const INK_COLORS = [
  { id: 'black', label: 'Black Ink (Govt)', value: '#000000' },
  { id: 'navy', label: 'Dark Navy Blue', value: '#0f2444' },
  { id: 'royal', label: 'Royal Blue', value: '#1d4ed8' }
];

export const SignatureCreatorTool: React.FC = () => {
  const [tab, setTab] = useState<'type' | 'draw'>('type');

  // Type Mode States
  const [text, setText] = useState<string>('Alex Morgan');
  const [selectedFont, setSelectedFont] = useState<FontOption>(SIGNATURE_FONTS[0]);
  const [inkColor, setInkColor] = useState<string>('#000000');
  const [fontSize, setFontSize] = useState<number>(48);
  const [isSlanted, setIsSlanted] = useState<boolean>(true);
  const [transparentBg, setTransparentBg] = useState<boolean>(false);

  // Draw Mode States
  const [strokeWidth, setStrokeWidth] = useState<number>(3);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [hasDrawn, setHasDrawn] = useState<boolean>(false);
  const [history, setHistory] = useState<ImageData[]>([]);

  // Canvas refs
  const drawCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const typeCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Load Google Fonts dynamically for the preview and canvas rendering
  useEffect(() => {
    const linkId = 'signature-google-fonts';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Alex+Brush&family=Caveat:wght@600;700&family=Dancing+Script:wght@600;700&family=Great+Vibes&family=Pacifico&family=Sacramento&display=swap';
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

  // Export handlers
  const getActiveCanvas = (): HTMLCanvasElement | null => {
    return tab === 'type' ? typeCanvasRef.current : drawCanvasRef.current;
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
  };

  return (
    <div class="space-y-6">
      {/* Tab Selector */}
      <div class="flex items-center gap-2 p-1.5 rounded-2xl bg-muted/40 border border-border max-w-md mx-auto">
        <button
          type="button"
          onClick={() => setTab('type')}
          class={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition ${
            tab === 'type'
              ? 'bg-primary text-primary-foreground shadow'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Type class="w-4 h-4" />
          <span>Type Signature (Fonts)</span>
        </button>
        <button
          type="button"
          onClick={() => setTab('draw')}
          class={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition ${
            tab === 'draw'
              ? 'bg-primary text-primary-foreground shadow'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <PenTool class="w-4 h-4" />
          <span>Draw Signature (Pad)</span>
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
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
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
        ) : (
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
        )}

        {/* Global Color & Background Bar */}
        <div class="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-border text-xs">
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
          ) : (
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
                class="w-full h-full cursor-crosshair touch-none"
              />
              {!hasDrawn && (
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none text-xs text-muted-foreground/60">
                  Draw your signature here with finger, mouse, or stylus
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div class="text-xs text-muted-foreground">
            {tab === 'type' ? 'Rendered at 600×240 px' : 'Captured in real-time vector canvas'}
          </div>

          <div class="flex items-center gap-2">
            <button
              type="button"
              onClick={() => downloadFile('png')}
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold text-xs transition"
            >
              <Download class="w-3.5 h-3.5" />
              <span>Download PNG</span>
            </button>

            <button
              type="button"
              onClick={() => downloadFile('jpeg')}
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs shadow hover:bg-primary/90 transition"
            >
              <Download class="w-4 h-4" />
              <span>Download JPG (White Paper)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
