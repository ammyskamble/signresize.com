import { useId, useState, type ReactNode } from 'react';

export function MobileOptions({ title, enabled, children }: { title: string; enabled: boolean; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  if (!enabled) return <>{children}</>;
  return <div className="mobile-options" data-open={open}>
    <button className="mobile-options-toggle" type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(value => !value)}>{title}<span aria-hidden="true">{open ? '−' : '+'}</span></button>
    <div id={id} className="mobile-options-content">{children}</div>
  </div>;
}
