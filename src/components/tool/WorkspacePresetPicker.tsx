import { useEffect, useRef, useState } from 'react';
import { Search, ChevronDown, Check, SlidersHorizontal, X } from 'lucide-react';
import type { ExamPreset, ToolTargetMode } from '../../types';

interface Props {
  presets: ExamPreset[];
  selected: ExamPreset | null;
  mode: ToolTargetMode;
  width: number; height: number; minKb: number; maxKb: number;
  onSelect: (preset: ExamPreset) => void;
}

export function WorkspacePresetPicker({ presets, selected, mode, width, height, minKb, maxKb, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const trigger = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => { if (open) input.current?.focus({ preventScroll: true }); }, [open]);
  useEffect(() => { setOpen(false); setQuery(''); }, [mode, selected?.id]);
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const matches = presets.filter(p => terms.every(term => `${p.name} ${p.shortCode} ${p.authority} ${p.category}`.toLowerCase().includes(term)));
  const choose = (preset: ExamPreset) => { onSelect(preset); setOpen(false); setQuery(''); trigger.current?.focus({ preventScroll: true }); };
  const close = () => { setOpen(false); trigger.current?.focus({ preventScroll: true }); };
  return <div id="exam-preset-selector" className="workspace-exam-select preset-picker" onKeyDown={event => { if (event.key === 'Escape' && open) { event.stopPropagation(); close(); } }}>
    <div className="preset-selector-heading"><label htmlFor="workspace-exam-select">Exam or document preset</label><a href="#exam-specs">Browse all presets ↗</a></div>
    <button ref={trigger} id="workspace-exam-select" className="preset-picker-trigger" type="button" aria-expanded={open} aria-controls="workspace-preset-panel" aria-describedby="workspace-preset-specs" onClick={() => { setQuery(''); setOpen(!open); }}>
      <span className="preset-picker-icon"><SlidersHorizontal size={20} aria-hidden="true" /></span>
      <span className="preset-picker-title"><small>{mode === 'document' ? 'Document' : mode === 'photo' ? 'Photo' : 'Signature'} preset</small><strong>{selected?.name || 'Custom settings'}</strong></span>
      <span className="preset-picker-change">Change</span><ChevronDown size={17} aria-hidden="true" />
    </button>
    <div id="workspace-preset-specs" className="preset-spec-chips"><span>{width} × {height} px</span><span>{minKb}–{maxKb} KB</span>{mode === 'signature' && selected && <span>{selected.inkRequirement}</span>}</div>
    {open && <section id="workspace-preset-panel" className="preset-picker-panel" aria-label="Choose an exam preset">
      <div className="preset-picker-search"><Search size={18} aria-hidden="true"/><input ref={input} type="search" aria-label={`Search ${mode} presets`} placeholder="Search exam, authority or document…" value={query} onChange={event => setQuery(event.target.value)} /><button type="button" aria-label="Close preset search" onClick={close}><X size={18}/></button></div>
      <p role="status" className="preset-picker-count">{matches.length} {mode} presets · select to apply</p>
      <div className="preset-picker-results">
        {matches.map(p => <button className="preset-picker-option" key={p.id} type="button" aria-pressed={selected?.id === p.id} onClick={() => choose(p)}>
          <span><strong>{p.name}</strong><small>{p.widthPx} × {p.heightPx} px <i>·</i> {p.minKb}–{p.maxKb} KB <i>·</i> {p.format}</small></span><span aria-hidden="true">{selected?.id === p.id ? <Check size={18}/> : '→'}</span>
        </button>)}
        {!matches.length && <div className="preset-picker-empty"><strong>No matching {mode} presets</strong><p>Try a shorter exam name. Use the Photo, Signature or Documents tabs to change the file type.</p><button type="button" onClick={() => { setQuery(''); input.current?.focus(); }}>Clear search</button></div>}
      </div>
      <p className="preset-picker-note">Check the current exam notice before submitting.</p>
    </section>}
  </div>;
}
