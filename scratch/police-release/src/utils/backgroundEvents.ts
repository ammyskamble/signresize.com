import type { BackgroundMode } from './backgroundTransfer';

type Stage = 'image_selected' | 'processing_complete' | 'processing_failed' | 'download' | 'handoff' | 'resizer_open' | 'resizer_export';

// Only fixed event labels are sent. Never include images, filenames or transfer IDs.
export function trackBackgroundEvent(stage: Stage, mode: BackgroundMode, format?: 'png' | 'jpg' | 'webp') {
  if (typeof window === 'undefined') return;
  const analytics = window as Window & { gtag?: (...args: unknown[]) => void };
  try { analytics.gtag?.('event', 'background_workflow', { stage, image_mode: mode, ...(format ? { output_format: format } : {}) }); }
  catch { /* Measurement must never interrupt an export. */ }
}
