import React, { useEffect, useRef, useState } from 'react';
import { Search, ChevronDown, Check, SlidersHorizontal, X } from 'lucide-react';
import type { ExamPreset, ToolTargetMode } from '../../types';

interface Props {
  presets: ExamPreset[];
  selected: ExamPreset | null;
  mode: ToolTargetMode;
  width: number;
  height: number;
  minKb: number;
  maxKb: number;
  onSelect: (preset: ExamPreset) => void;
}

export function WorkspacePresetPicker({ presets, selected, mode, width, height, minKb, maxKb, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const trigger = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) input.current?.focus({ preventScroll: true });
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setQuery('');
  }, [mode, selected?.id]);

  // Check if current context is United States
  const isUS =
    selected?.country === 'US' ||
    selected?.id?.startsWith('us-') ||
    (typeof window !== 'undefined' && window.location.pathname.startsWith('/us'));

  // Scope available presets: when in US context, only surface US presets
  const scopedPresets = isUS
    ? presets.filter(p => p.country === 'US' || p.id.startsWith('us-'))
    : presets;

  // Robust search splitting on spaces and hyphens
  const terms = query.trim().toLowerCase().split(/[\s-]+/).filter(Boolean);
  const matches = scopedPresets.filter(p =>
    terms.every(term =>
      `${p.id} ${p.name} ${p.shortCode} ${p.authority} ${p.category} ${p.notes || ''}`
        .toLowerCase()
        .includes(term)
    )
  );

  const choose = (preset: ExamPreset) => {
    onSelect(preset);
    setOpen(false);
    setQuery('');
    trigger.current?.focus({ preventScroll: true });
  };

  const close = () => {
    setOpen(false);
    trigger.current?.focus({ preventScroll: true });
  };

  // Popular quick chips for the active tool mode
  const quickPresetIds = isUS
    ? (mode === 'photo'
        ? ['us-ds160', 'us-passport', 'us-opt-ead', 'us-sat-photo', 'us-usmle-ecfmg']
        : mode === 'document'
        ? ['us-usajobs']
        : ['us-digital-signature', 'us-passport-signature'])
    : mode === 'photo'
    ? [
        'ssc-cgl-photo',
        'ssc-photo',
        'upsc-photo',
        'ibps-photo',
        'wbpsc-photo',
        'pan-card-photo-nsdl',
        'uti-photo-crop',
        'sarathi-photo',
        'ib-acio-photo',
        'india-post-gds-photo',
        'cuet-ug-photo',
        'upsssc-pet-photo',
        'bssc-photo',
        'dsssb-photo',
        'kerala-psc-photo',
        'neet-photo',
        'gate-photo',
        'iit-jam-photo'
      ]
    : mode === 'document'
    ? [
        'marksheet-10th',
        'marksheet-12th',
        'wbpsc-document',
        'caste-certificate',
        'domicile-certificate',
        'id-proof-card',
        'degree-certificate',
        'handwritten-declaration',
        'thumb-impression-doc'
      ]
    : [
        'ssc-cgl',
        'ssc-mts',
        'ssc-general',
        'wbpsc-west-bengal',
        'pan-card-nsdl',
        'uti-signature-crop',
        'sarathi-dl',
        'ib-acio',
        'india-post-gds-signature',
        'cuet-ug',
        'upsssc-pet',
        'bssc-inter-level',
        'dsssb-preset',
        'kerala-psc-signature',
        'rrb-railway',
        'ibps-sbi',
        'upsc-civil-services',
        'gate-jam',
        'iit-jam'
      ];

  const quickPresets = quickPresetIds
    .map(id => scopedPresets.find(p => p.id === id) || presets.find(p => p.id === id))
    .filter((p): p is ExamPreset => Boolean(p));

  return (
    <div
      id="exam-preset-selector"
      className="workspace-exam-select preset-picker"
      onKeyDown={event => {
        if (event.key === 'Escape' && open) {
          event.stopPropagation();
          close();
        }
      }}
    >
      <div className="preset-selector-heading">
        <label htmlFor="workspace-exam-select">
          {isUS ? 'US Portal & Document Preset' : 'Exam or document preset'}
        </label>
        <a href={isUS ? '/us/' : '#exam-specs'}>
          {isUS ? 'All US tools ↗' : 'Browse all presets ↗'}
        </a>
      </div>

      <button
        ref={trigger}
        id="workspace-exam-select"
        className="preset-picker-trigger"
        type="button"
        aria-expanded={open}
        aria-controls="workspace-preset-panel"
        aria-describedby="workspace-preset-specs"
        onClick={() => {
          setQuery('');
          setOpen(!open);
        }}
      >
        <span className="preset-picker-icon">
          <SlidersHorizontal size={20} aria-hidden="true" />
        </span>
        <span className="preset-picker-title">
          <small>
            {isUS
              ? 'United States Preset'
              : mode === 'document'
              ? 'Document'
              : mode === 'photo'
              ? 'Photo'
              : 'Signature'}{' '}
            preset
          </small>
          <strong>{selected?.name || 'Custom settings'}</strong>
        </span>
        <span className="preset-picker-change">Change</span>
        <ChevronDown size={17} aria-hidden="true" />
      </button>

      <div id="workspace-preset-specs" className="preset-spec-chips">
        <span>
          {width} × {height} px
        </span>
        <span>
          {minKb}–{maxKb} KB
        </span>
        {mode === 'signature' && selected && <span>{selected.inkRequirement}</span>}
      </div>

      {/* Quick Pinned Preset Pills */}
      {quickPresets.length > 0 && (
        <div
          className="flex flex-wrap items-center gap-1.5 pt-1"
          aria-label={isUS ? 'US official presets' : 'Popular exam presets'}
        >
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider shrink-0 mr-1">
            {isUS ? 'US Portals:' : 'Popular:'}
          </span>
          {quickPresets.map(p => {
            const isSelected = selected?.id === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => onSelect(p)}
                aria-pressed={isSelected}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition border cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-primary text-primary-foreground border-primary font-bold shadow-2xs'
                    : 'bg-muted/60 hover:bg-muted text-foreground border-border hover:border-primary/40'
                }`}
              >
                <span>{p.shortCode || p.name}</span>
              </button>
            );
          })}
        </div>
      )}

      {open && (
        <section
          id="workspace-preset-panel"
          className="preset-picker-panel"
          aria-label={isUS ? 'Choose a US portal preset' : 'Choose an exam preset'}
        >
          <div className="preset-picker-search">
            <Search size={18} aria-hidden="true" />
            <input
              ref={input}
              type="search"
              aria-label={isUS ? 'Search US presets' : `Search ${mode} presets`}
              placeholder={
                isUS
                  ? 'Search DS-160, Passport, OPT EAD, Green Card…'
                  : 'Search SSC CGL, UPSC, IBPS, marksheet…'
              }
              value={query}
              onChange={event => setQuery(event.target.value)}
            />
            <button type="button" aria-label="Close preset search" onClick={close}>
              <X size={18} />
            </button>
          </div>
          <p role="status" className="preset-picker-count">
            {matches.length} {isUS ? 'US' : mode} presets · select to apply
          </p>
          <div className="preset-picker-results">
            {matches.map(p => (
              <button
                className="preset-picker-option"
                key={p.id}
                type="button"
                aria-pressed={selected?.id === p.id}
                onClick={() => choose(p)}
              >
                <span>
                  <strong>{p.name}</strong>
                  <small>
                    {p.widthPx} × {p.heightPx} px <i>·</i> {p.minKb}–{p.maxKb} KB <i>·</i>{' '}
                    {p.format}
                  </small>
                </span>
                <span aria-hidden="true">{selected?.id === p.id ? <Check size={18} /> : '→'}</span>
              </button>
            ))}
            {!matches.length && (
              <div className="preset-picker-empty">
                <strong>No matching {isUS ? 'US' : mode} presets</strong>
                <p>
                  {isUS
                    ? 'Try searching "DS-160", "Passport", "OPT", or "Green Card".'
                    : 'Try a shorter exam name. Use the Photo, Signature or Documents tabs to change the file type.'}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    input.current?.focus();
                  }}
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
          <p className="preset-picker-note">
            {isUS
              ? 'Meets official US Department of State & USCIS specifications.'
              : 'Check the current exam notice before submitting.'}
          </p>
        </section>
      )}
    </div>
  );
}
