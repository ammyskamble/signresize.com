import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  Upload,
  RotateCw,
  RotateCcw,
  FlipHorizontal,
  FlipVertical,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Wand2,
  PenTool,
  Sparkles,
  Camera,
  FileText,
  User,
  Calendar,
  Eye,
  Check,
} from 'lucide-react';
import type { CropArea, ToolTargetMode, FilterOptions } from '../../types';
import { detectSignatureBoundingBox } from '../../utils/imageProcessor';

interface CanvasStageProps {
  sourceImage: HTMLImageElement | null;
  sourceDimensions: { width: number; height: number };
  mode: ToolTargetMode;
  targetWidth: number;
  targetHeight: number;
  crop: CropArea;
  onChangeCrop: (newCrop: CropArea) => void;
  rotation: number;
  onChangeRotation: (deg: number) => void;
  flipH: boolean;
  onToggleFlipH: () => void;
  flipV: boolean;
  onToggleFlipV: () => void;
  onFileUpload: (file: File) => void;
  onLoadSample: () => void;
  onOpenDrawPad: () => void;
  showFaceGuide: boolean;
  onToggleFaceGuide: () => void;
  candidateName: string;
  onChangeCandidateName: (name: string) => void;
  dateOfPhoto: string;
  onChangeDateOfPhoto: (dop: string) => void;
  addNameDateStamp: boolean;
  onToggleAddNameDateStamp: () => void;
}

export const CanvasStage: React.FC<CanvasStageProps> = ({
  sourceImage,
  sourceDimensions,
  mode,
  targetWidth,
  targetHeight,
  crop,
  onChangeCrop,
  rotation,
  onChangeRotation,
  flipH,
  onToggleFlipH,
  flipV,
  onToggleFlipV,
  onFileUpload,
  onLoadSample,
  onOpenDrawPad,
  showFaceGuide,
  onToggleFaceGuide,
  candidateName,
  onChangeCandidateName,
  dateOfPhoto,
  onChangeDateOfPhoto,
  addNameDateStamp,
  onToggleAddNameDateStamp,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDraggingCrop, setIsDraggingCrop] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [cropStart, setCropStart] = useState<CropArea>({ x: 0, y: 0, width: 0, height: 0 });
  const [activeHandle, setActiveHandle] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const isRotated = rotation === 90 || rotation === 270;
  const currentW = isRotated ? sourceDimensions.height : sourceDimensions.width;
  const currentH = isRotated ? sourceDimensions.width : sourceDimensions.height;

  // Auto-fit signature bounding box
  const handleAutoFit = () => {
    if (!sourceImage || currentW === 0 || currentH === 0) return;
    const detected = detectSignatureBoundingBox(
      sourceImage,
      sourceDimensions.width,
      sourceDimensions.height,
      rotation,
      flipH,
      flipV,
      0.1
    );
    onChangeCrop(detected);
  };

  // Drag over handlers for dropzone
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFileUpload(e.dataTransfer.files[0]);
    }
  };

  // Mouse / Touch Dragging for Crop Box
  const handlePointerDown = (
    e: React.PointerEvent,
    handle: string | null = null
  ) => {
    e.stopPropagation();
    setIsDraggingCrop(true);
    setActiveHandle(handle);
    setDragStart({ x: e.clientX, y: e.clientY });
    setCropStart({ ...crop });
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingCrop || !containerRef.current || currentW === 0 || currentH === 0) return;

    const rect = containerRef.current.getBoundingClientRect();
    const scaleX = currentW / rect.width;
    const scaleY = currentH / rect.height;

    const dx = (e.clientX - dragStart.x) * scaleX;
    const dy = (e.clientY - dragStart.y) * scaleY;

    let newX = cropStart.x;
    let newY = cropStart.y;
    let newW = cropStart.width;
    let newH = cropStart.height;

    const targetRatio = targetWidth / targetHeight;

    if (!activeHandle) {
      // Move crop box
      newX = Math.max(0, Math.min(currentW - cropStart.width, cropStart.x + dx));
      newY = Math.max(0, Math.min(currentH - cropStart.height, cropStart.y + dy));
    } else {
      // Resize with handles
      if (activeHandle.includes('e')) {
        newW = Math.max(30, Math.min(currentW - cropStart.x, cropStart.x + dx));
      }
      if (activeHandle.includes('s')) {
        newH = Math.max(30, Math.min(currentH - cropStart.y, cropStart.y + dy));
      }
      if (activeHandle.includes('w')) {
        const potentialW = cropStart.width - dx;
        if (potentialW >= 30 && cropStart.x + dx >= 0) {
          newX = cropStart.x + dx;
          newW = potentialW;
        }
      }
      if (activeHandle.includes('n')) {
        const potentialH = cropStart.height - dy;
        if (potentialH >= 30 && cropStart.y + dy >= 0) {
          newY = cropStart.y + dy;
          newH = potentialH;
        }
      }

      // Aspect ratio lock
      if (targetRatio > 0) {
        if (activeHandle === 'e' || activeHandle === 'w') {
          newH = Math.round(newW / targetRatio);
        } else {
          newW = Math.round(newH * targetRatio);
        }
      }
    }

    // Safety clamping
    newX = Math.max(0, Math.min(currentW - 10, newX));
    newY = Math.max(0, Math.min(currentH - 10, newY));
    newW = Math.max(10, Math.min(currentW - newX, newW));
    newH = Math.max(10, Math.min(currentH - newY, newH));

    onChangeCrop({
      x: Math.round(newX),
      y: Math.round(newY),
      width: Math.round(newW),
      height: Math.round(newH),
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDraggingCrop) {
      setIsDraggingCrop(false);
      setActiveHandle(null);
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
  };

  // Convert crop coords to percentage for container
  const cropLeftPct = currentW > 0 ? (crop.x / currentW) * 100 : 0;
  const cropTopPct = currentH > 0 ? (crop.y / currentH) * 100 : 0;
  const cropWidthPct = currentW > 0 ? (crop.width / currentW) * 100 : 100;
  const cropHeightPct = currentH > 0 ? (crop.height / currentH) * 100 : 100;

  return (
    <div className="bg-card border border-border/80 rounded-2xl p-4 shadow-xs space-y-4">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,.heic,.heif,.jfif,.webp,.png,.jpg,.jpeg"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            onFileUpload(e.target.files[0]);
          }
          e.target.value = '';
        }}
      />

      {/* Top Stage Bar: Rotation, Flip, Auto-Fit, Tools */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground font-semibold text-xs rounded-xl shadow-xs hover:opacity-90 transition cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload New</span>
          </button>

          {!sourceImage && (
            <>
              <button
                type="button"
                onClick={onLoadSample}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted text-foreground text-xs font-semibold rounded-xl hover:bg-muted/80 border border-border transition cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Test Sample</span>
              </button>

              {mode === 'signature' && (
                <button
                  type="button"
                  onClick={onOpenDrawPad}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted text-foreground text-xs font-semibold rounded-xl hover:bg-muted/80 border border-border transition cursor-pointer"
                >
                  <PenTool className="w-3.5 h-3.5 text-primary" />
                  <span>Draw Sign</span>
                </button>
              )}
            </>
          )}

          {sourceImage && (
            <>
              <button
                type="button"
                onClick={() => onChangeRotation((rotation + 90) % 360)}
                className="p-1.5 rounded-xl border border-border bg-muted/30 hover:bg-muted text-foreground transition cursor-pointer"
                title="Rotate 90° Clockwise"
              >
                <RotateCw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => onChangeRotation((rotation + 270) % 360)}
                className="p-1.5 rounded-xl border border-border bg-muted/30 hover:bg-muted text-foreground transition cursor-pointer"
                title="Rotate 90° Counter-Clockwise"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={onToggleFlipH}
                className={`p-1.5 rounded-xl border transition cursor-pointer ${
                  flipH ? 'bg-primary/10 border-primary text-primary' : 'bg-muted/30 border-border text-foreground hover:bg-muted'
                }`}
                title="Flip Horizontally"
              >
                <FlipHorizontal className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={onToggleFlipV}
                className={`p-1.5 rounded-xl border transition cursor-pointer ${
                  flipV ? 'bg-primary/10 border-primary text-primary' : 'bg-muted/30 border-border text-foreground hover:bg-muted'
                }`}
                title="Flip Vertically"
              >
                <FlipVertical className="w-3.5 h-3.5" />
              </button>

              {mode === 'signature' && (
                <button
                  type="button"
                  onClick={handleAutoFit}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold text-xs rounded-xl border border-emerald-500/20 hover:bg-emerald-500/20 transition cursor-pointer"
                  title="Auto-detect signature ink boundaries"
                >
                  <Wand2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Auto-Fit Ink</span>
                </button>
              )}

              {mode === 'photo' && (
                <button
                  type="button"
                  onClick={onToggleFaceGuide}
                  className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition cursor-pointer ${
                    showFaceGuide
                      ? 'bg-primary/10 border-primary text-primary'
                      : 'bg-muted/30 border-border text-foreground hover:bg-muted'
                  }`}
                  title="Toggle passport facial oval guide"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Face Oval Guide</span>
                </button>
              )}
            </>
          )}
        </div>

        {/* Live crop readout */}
        {sourceImage && (
          <div className="text-[11px] font-mono text-muted-foreground">
            Crop: <strong className="text-foreground">{crop.width}×{crop.height} px</strong>
          </div>
        )}
      </div>

      {/* Main Interactive Stage Area */}
      {!sourceImage ? (
        /* Empty Dropzone State */
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`h-72 sm:h-80 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-6 text-center transition cursor-pointer relative overflow-hidden ${
            isDragOver
              ? 'border-primary bg-primary/5'
              : 'border-border/80 hover:border-primary/50 bg-muted/10 hover:bg-muted/20'
          }`}
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-3 shadow-xs">
            {mode === 'signature' && <PenTool className="w-7 h-7" />}
            {mode === 'photo' && <Camera className="w-7 h-7" />}
            {mode === 'document' && <FileText className="w-7 h-7" />}
          </div>

          <h3 className="font-bold text-sm sm:text-base text-foreground mb-1">
            Drop your {mode} image here, or <span className="text-primary underline">browse</span>
          </h3>
          <p className="text-xs text-muted-foreground max-w-sm">
            Auto-configured for official exam upload requirements (JPG, PNG, WebP, HEIC).
          </p>

          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onLoadSample();
              }}
              className="px-3 py-1.5 bg-card border border-border text-foreground text-xs font-semibold rounded-xl hover:bg-muted transition shadow-xs"
            >
              Test with Sample {mode === 'signature' ? 'Sign' : mode === 'photo' ? 'Photo' : 'Doc'}
            </button>
          </div>
        </div>
      ) : (
        /* Active Crop Canvas */
        <div className="space-y-3">
          <div
            ref={containerRef}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="relative w-full h-[320px] sm:h-[420px] bg-slate-900 rounded-2xl overflow-hidden flex items-center justify-center select-none touch-none shadow-inner"
          >
            {/* The Image under transform */}
            <img
              src={sourceImage.src}
              alt="Source Canvas Target"
              className="max-h-full max-w-full object-contain pointer-events-none transition-transform duration-100"
              style={{
                transform: `rotate(${rotation}deg) scaleX(${flipH ? -1 : 1}) scaleY(${flipV ? -1 : 1})`,
              }}
            />

            {/* Dark Mask Overlay around crop area */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute inset-0 bg-black/60"
                style={{
                  clipPath: `polygon(
                    0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%,
                    ${cropLeftPct}% ${cropTopPct}%,
                    ${cropLeftPct}% ${cropTopPct + cropHeightPct}%,
                    ${cropLeftPct + cropWidthPct}% ${cropTopPct + cropHeightPct}%,
                    ${cropLeftPct + cropWidthPct}% ${cropTopPct}%,
                    ${cropLeftPct}% ${cropTopPct}%
                  )`,
                }}
              />
            </div>

            {/* The Draggable Bounding Crop Box */}
            <div
              onPointerDown={(e) => handlePointerDown(e, null)}
              className="absolute border-2 border-primary shadow-lg cursor-move touch-none"
              style={{
                left: `${cropLeftPct}%`,
                top: `${cropTopPct}%`,
                width: `${cropWidthPct}%`,
                height: `${cropHeightPct}%`,
              }}
            >
              {/* Rule of Thirds Grid Guidelines */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none border border-white/20">
                <div className="border-r border-b border-white/10" />
                <div className="border-r border-b border-white/10" />
                <div className="border-b border-white/10" />
                <div className="border-r border-b border-white/10" />
                <div className="border-r border-b border-white/10" />
                <div className="border-b border-white/10" />
                <div className="border-r border-white/10" />
                <div className="border-r border-white/10" />
                <div />
              </div>

              {/* Passport Face Oval Guide */}
              {mode === 'photo' && showFaceGuide && (
                <div className="absolute inset-x-8 inset-y-4 border-2 border-dashed border-emerald-400/80 rounded-full pointer-events-none flex items-center justify-center">
                  <span className="text-[10px] font-mono font-bold bg-black/60 text-emerald-300 px-1.5 py-0.5 rounded">
                    Align Face
                  </span>
                </div>
              )}

              {/* 8 Draggable Corner & Edge Handles */}
              {['nw', 'ne', 'sw', 'se', 'n', 's', 'e', 'w'].map((h) => (
                <div
                  key={h}
                  onPointerDown={(e) => handlePointerDown(e, h)}
                  className={`absolute w-3.5 h-3.5 bg-primary border-2 border-white rounded-full shadow-md z-10 ${
                    h === 'nw' ? '-top-1.5 -left-1.5 cursor-nwse-resize' : ''
                  } ${h === 'ne' ? '-top-1.5 -right-1.5 cursor-nesw-resize' : ''} ${
                    h === 'sw' ? '-bottom-1.5 -left-1.5 cursor-nesw-resize' : ''
                  } ${h === 'se' ? '-bottom-1.5 -right-1.5 cursor-nwse-resize' : ''} ${
                    h === 'n' ? '-top-1.5 left-1/2 -translate-x-1/2 cursor-ns-resize' : ''
                  } ${h === 's' ? '-bottom-1.5 left-1/2 -translate-x-1/2 cursor-ns-resize' : ''} ${
                    h === 'w' ? 'top-1/2 -left-1.5 -translate-y-1/2 cursor-ew-resize' : ''
                  } ${h === 'e' ? 'top-1/2 -right-1.5 -translate-y-1/2 cursor-ew-resize' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Name & DOP Stamp Inputs for Passport Photos */}
          {mode === 'photo' && (
            <div className="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-foreground flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addNameDateStamp}
                    onChange={onToggleAddNameDateStamp}
                    className="accent-primary rounded"
                  />
                  <span>Add Name &amp; Date of Photo (DOP) Stamp</span>
                </label>
                <span className="text-[10px] font-mono text-muted-foreground">Required for SSC &amp; Police Exams</span>
              </div>

              {addNameDateStamp && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 animate-in fade-in duration-150">
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="CANDIDATE FULL NAME"
                      value={candidateName}
                      onChange={(e) => onChangeCandidateName(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 bg-card border border-border rounded-xl font-mono text-xs uppercase text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    />
                  </div>
                  <div className="relative">
                    <Calendar className="w-3.5 h-3.5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="DD/MM/YYYY"
                      value={dateOfPhoto}
                      onChange={(e) => onChangeDateOfPhoto(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 bg-card border border-border rounded-xl font-mono text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
