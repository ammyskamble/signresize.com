import React, { useState } from 'react';
import { ShieldCheck, Lock, EyeOff, Cpu, Info, Check } from 'lucide-react';

export const PrivacyBadge: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex items-center gap-2 flex-wrap text-xs">
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/15 hover:border-emerald-500/30 transition cursor-pointer select-none"
          title="Click to view local privacy audit"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span className="font-semibold text-[11px] font-mono">0 Bytes Uploaded</span>
          <span className="text-emerald-500/70 hidden sm:inline">•</span>
          <span className="text-[11px] font-medium hidden sm:inline">100% In-Browser</span>
          <Info className="w-3 h-3 text-emerald-600/60 dark:text-emerald-400/60 ml-0.5 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setShowModal(false)}
        >
          <div
            className="w-full max-w-md bg-card border border-border rounded-2xl p-6 shadow-2xl space-y-4 relative text-foreground"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-border pb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-foreground">Zero-Upload Privacy Architecture</h3>
                <p className="text-xs text-muted-foreground">Certified In-Browser Client-Side Processing</p>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-muted-foreground">
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-muted/40 border border-border/50">
                <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">In-Memory HTML5 Canvas:</strong> Photos and signatures are loaded directly into browser memory (RAM) and rendered using hardware-accelerated canvas APIs.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-muted/40 border border-border/50">
                <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Zero Cloud Storage:</strong> No server, database, or API receives your image buffers. Your files never leave your computer or phone.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-muted/40 border border-border/50">
                <EyeOff className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">EXIF & Geotag Stripping:</strong> All sensitive camera metadata (GPS coordinates, camera model, date) are stripped on export.
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-primary text-primary-foreground font-semibold text-xs rounded-xl hover:opacity-90 transition cursor-pointer"
              >
                Understood &amp; Verified
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
