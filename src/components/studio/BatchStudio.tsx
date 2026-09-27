import React, { useState, useRef } from 'react';
import {
  Upload,
  Zap,
  Archive,
  Trash2,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  FileImage,
  Download,
} from 'lucide-react';
import type {
  BatchSignatureItem,
  ToolTargetMode,
  OutputFormat,
  FilterOptions,
} from '../../types';
import {
  renderProcessedCanvas,
  compressCanvasToTargetSize,
  formatFileSize,
} from '../../utils/imageProcessor';

interface BatchStudioProps {
  mode: ToolTargetMode;
  targetWidth: number;
  targetHeight: number;
  minKb: number;
  maxKb: number;
  targetFormat: OutputFormat;
  filters: FilterOptions;
  onToast: (msg: string, title?: string, type?: 'success' | 'info' | 'warning') => void;
}

export const BatchStudio: React.FC<BatchStudioProps> = ({
  mode,
  targetWidth,
  targetHeight,
  minKb,
  maxKb,
  targetFormat,
  filters,
  onToast,
}) => {
  const [items, setItems] = useState<BatchSignatureItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isZipping, setIsZipping] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle incoming multiple files
  const handleAddFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const remainingSlots = 10 - items.length;
    if (remainingSlots <= 0) {
      onToast('Maximum 10 files allowed in batch queue', 'Limit Reached', 'warning');
      return;
    }

    const filesToLoad = Array.from(files).slice(0, remainingSlots);
    const newItems: BatchSignatureItem[] = [];

    let loadedCount = 0;
    filesToLoad.forEach((file) => {
      if (!file.type.startsWith('image/')) return;

      const objUrl = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        const item: BatchSignatureItem = {
          id: `batch_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
          file,
          fileName: file.name.replace(/\.[^/.]+$/, ''),
          originalSize: file.size,
          image: img,
          status: 'pending',
          rotation: 0,
          flipH: false,
          flipV: false,
          sourceUrl: objUrl,
          customCrop: {
            x: 0,
            y: 0,
            width: img.naturalWidth,
            height: img.naturalHeight,
          },
        };
        newItems.push(item);
        loadedCount++;
        if (loadedCount === filesToLoad.length) {
          setItems((prev) => [...prev, ...newItems]);
          onToast(`Added ${newItems.length} files to batch queue`, 'Files Added', 'info');
        }
      };
      img.src = objUrl;
    });
  };

  // Process all files in queue
  const handleProcessAll = async () => {
    if (items.length === 0) return;
    setIsProcessing(true);
    setProgress({ current: 0, total: items.length });

    const updated = [...items];

    for (let i = 0; i < updated.length; i++) {
      const item = updated[i];
      setProgress({ current: i + 1, total: updated.length });

      try {
        const crop = item.customCrop || {
          x: 0,
          y: 0,
          width: item.image.naturalWidth,
          height: item.image.naturalHeight,
        };

        const canvas = renderProcessedCanvas(
          item.image,
          item.image.naturalWidth,
          item.image.naturalHeight,
          crop,
          targetWidth,
          targetHeight,
          item.rotation,
          item.flipH,
          item.flipV,
          filters
        );

        const res = await compressCanvasToTargetSize(
          canvas,
          targetFormat,
          minKb,
          maxKb
        );

        updated[i] = {
          ...item,
          status: 'done',
          resultBlob: res.blob,
          resultDataUrl: res.dataUrl,
          resultSizeKb: res.sizeKb,
          resultWidth: res.width,
          resultHeight: res.height,
          withinBounds: res.withinTargetBounds,
        };
      } catch (err) {
        console.error('Batch item failed:', err);
        updated[i] = {
          ...item,
          status: 'error',
          errorMessage: 'Processing failed',
        };
      }
      setItems([...updated]);
    }

    setIsProcessing(false);
    onToast(`Processed ${items.length} files successfully`, 'Batch Complete', 'success');
  };

  // Dynamic JSZip import to eliminate upfront 95 KB bundle cost!
  const handleDownloadZip = async () => {
    const readyItems = items.filter((it) => it.status === 'done' && it.resultBlob);
    if (readyItems.length === 0) {
      onToast('Please process files before downloading ZIP', 'No Ready Files', 'warning');
      return;
    }

    setIsZipping(true);
    try {
      // Dynamic import
      const { default: JSZip } = await import('jszip');
      const zip = new JSZip();

      readyItems.forEach((it, idx) => {
        const ext = targetFormat === 'image/png' ? 'png' : targetFormat === 'image/webp' ? 'webp' : 'jpg';
        const name = `${it.fileName || `image_${idx + 1}`}_${targetWidth}x${targetHeight}.${ext}`;
        if (it.resultBlob) {
          zip.file(name, it.resultBlob);
        }
      });

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const zipUrl = URL.createObjectURL(zipBlob);
      const a = document.createElement('a');
      a.href = zipUrl;
      a.download = `SignResize_${mode}_batch_${Date.now()}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(zipUrl);

      onToast(`Downloaded ${readyItems.length} files in ZIP`, 'ZIP Downloaded', 'success');
    } catch (err) {
      console.error('ZIP generation failed:', err);
      onToast('Failed to create ZIP file', 'ZIP Error', 'warning');
    } finally {
      setIsZipping(false);
    }
  };

  const handleClearAll = () => {
    items.forEach((it) => {
      if (it.sourceUrl) URL.revokeObjectURL(it.sourceUrl);
      if (it.resultDataUrl) URL.revokeObjectURL(it.resultDataUrl);
    });
    setItems([]);
  };

  return (
    <div className="bg-card border border-border/80 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          handleAddFiles(e.target.files);
          e.target.value = '';
        }}
      />

      {/* Top Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-3">
        <div>
          <h3 className="font-bold text-sm text-foreground flex items-center gap-2">
            <span>Multi-File Batch Editor</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-primary/10 text-primary border border-primary/20">
              {items.length}/10 Files
            </span>
          </h3>
          <p className="text-[11px] text-muted-foreground">
            Resize and compress up to 10 {mode}s simultaneously to {targetWidth}×{targetHeight} px ({minKb}–{maxKb} KB).
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground font-semibold text-xs rounded-xl shadow-xs hover:opacity-90 transition cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>+ Add Files</span>
          </button>

          {items.length > 0 && (
            <>
              <button
                type="button"
                disabled={isProcessing}
                onClick={handleProcessAll}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-xs disabled:opacity-50 transition cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Processing ({progress.current}/{progress.total})...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-3.5 h-3.5" />
                    <span>Process All</span>
                  </>
                )}
              </button>

              <button
                type="button"
                disabled={isZipping || items.every((i) => i.status !== 'done')}
                onClick={handleDownloadZip}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-card border border-border text-foreground hover:bg-muted font-semibold text-xs rounded-xl shadow-xs disabled:opacity-50 transition cursor-pointer"
              >
                {isZipping ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Archive className="w-3.5 h-3.5 text-primary" />
                )}
                <span>Download ZIP</span>
              </button>

              <button
                type="button"
                onClick={handleClearAll}
                className="p-1.5 rounded-xl border border-red-200 dark:border-red-900/40 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition cursor-pointer"
                title="Clear all batch items"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Empty State */}
      {items.length === 0 ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="h-56 rounded-2xl border-2 border-dashed border-border/80 hover:border-primary/50 bg-muted/10 hover:bg-muted/20 flex flex-col items-center justify-center p-6 text-center cursor-pointer transition"
        >
          <FileImage className="w-10 h-10 text-muted-foreground mb-2" />
          <div className="font-bold text-xs text-foreground">No files in batch queue</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">
            Click here to select up to 10 images, or drag &amp; drop them anywhere.
          </div>
        </div>
      ) : (
        /* Items Grid */
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {items.map((it) => (
            <div
              key={it.id}
              className="p-2.5 rounded-xl border border-border bg-card flex flex-col justify-between space-y-2 relative group"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center">
                <img
                  src={it.resultDataUrl || it.sourceUrl}
                  alt={it.fileName}
                  className="max-h-full max-w-full object-contain"
                />

                {it.status === 'done' && (
                  <span className="absolute top-1 right-1 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                    <CheckCircle2 className="w-3 h-3 stroke-[3]" />
                  </span>
                )}
                {it.status === 'processing' && (
                  <span className="absolute top-1 right-1 w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center animate-spin shadow-xs">
                    <RefreshCw className="w-3 h-3" />
                  </span>
                )}
              </div>

              <div>
                <div className="font-mono text-xs font-bold text-foreground truncate" title={it.fileName}>
                  {it.fileName}
                </div>
                <div className="text-[10px] font-mono text-muted-foreground flex items-center justify-between mt-0.5">
                  <span>In: {formatFileSize(it.originalSize)}</span>
                  {it.resultSizeKb ? (
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">
                      Out: {it.resultSizeKb} KB
                    </span>
                  ) : (
                    <span>Pending</span>
                  )}
                </div>
              </div>

              {it.status === 'done' && it.resultDataUrl && (
                <a
                  href={it.resultDataUrl}
                  download={`${it.fileName}_${targetWidth}x${targetHeight}.jpg`}
                  className="inline-flex items-center justify-center gap-1 w-full py-1 text-[11px] font-semibold bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition"
                >
                  <Download className="w-3 h-3" />
                  <span>Download</span>
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
