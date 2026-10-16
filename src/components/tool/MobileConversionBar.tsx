import { useEffect, useState } from 'react';
import type { ProcessedImageResult } from '../../types';

export function MobileConversionBar({ result, busy, error, onReview }: { result: ProcessedImageResult | null; busy: boolean; error: string | null; onReview: () => void }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const workspace = document.getElementById('tool-workspace');
    if (!workspace) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(workspace);
    return () => observer.disconnect();
  }, []);
  return <aside className="mobile-conversion-bar" hidden={!visible} aria-label="Conversion actions">
    <div><strong>{busy ? 'Resizing…' : result ? `${result.sizeKb} KB · ${result.format}` : error ? 'Check the upload error' : 'Preparing image…'}</strong><span>{busy ? 'Please wait' : result ? `${result.width} × ${result.height} px` : 'Your image stays on this device'}</span></div>
    <button type="button" disabled={busy || !result} onClick={onReview}>Preview &amp; download</button>
  </aside>;
}
