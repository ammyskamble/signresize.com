import { useState } from 'react';

const checklist = ['Written by me in the language required by the notification', 'Exact wording and name checked against the official notice', 'Correct ink and plain paper; no block capitals where prohibited', 'No cut-off words, shadows, blur, or fingers in the scan'];
export function DeclarationGuide() {
  const [text, setText] = useState('');
  const [checks, setChecks] = useState<boolean[]>(checklist.map(() => false));
  const [message, setMessage] = useState('');
  const checked = checks.filter(Boolean).length;
  async function copy() {
    try { await navigator.clipboard.writeText(text); setMessage('Wording copied. Write it on paper in your own handwriting.'); }
    catch { setMessage('Select the wording and copy it manually.'); }
  }
  return <section className="grid lg:grid-cols-2 gap-5">
    <div className="rounded-2xl bg-card border border-border p-5 space-y-4">
      <div><p className="text-xs font-bold text-primary uppercase tracking-wider">Before you scan</p><h2 className="text-xl font-bold mt-1">Keep the official wording beside you</h2></div>
      <p className="text-sm text-muted-foreground">NICL, IBPS, SBI, Canara, and UCO recruitments can use different declaration text. Open your exact notification and paste its complete wording here. Never substitute a generic declaration.</p>
      <a href="https://ibpsreg.ibps.in/niiclsep26/" target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-semibold text-primary underline">NICL AO official wording: “How to Apply” →</a>
      <label className="block text-sm font-semibold" htmlFor="declaration-wording">Required declaration text</label>
      <textarea id="declaration-wording" value={text} onChange={e => { setText(e.target.value); setMessage(''); }} rows={6} placeholder="Paste the complete declaration from your recruitment notification…" className="w-full p-3 rounded-xl border border-border bg-background text-sm leading-relaxed" />
      <button type="button" onClick={copy} disabled={!text.trim()} className="rounded-lg px-4 py-2 bg-primary text-primary-foreground text-sm font-bold disabled:opacity-40">Copy wording</button>
      <p role="status" className="text-xs text-muted-foreground">{message || 'This text is a writing reference. The uploaded document must follow the notification’s handwriting rules.'}</p>
    </div>
    <div className="rounded-2xl bg-card border border-border p-5 space-y-4">
      <h2 className="text-xl font-bold">Visual scan checklist</h2>
      <p className="text-sm text-muted-foreground">Review the image yourself before resizing. This checklist does not read or authenticate handwriting.</p>
      {checklist.map((label, index) => <label key={label} className="flex gap-3 items-start text-sm p-3 rounded-xl bg-background border border-border"><input type="checkbox" checked={checks[index]} onChange={e => setChecks(current => current.map((v, i) => i === index ? e.target.checked : v))} className="mt-1 accent-indigo-600" /><span>{label}</span></label>)}
      <p role="status" className="text-sm font-semibold text-primary">{checked} of {checklist.length} checks completed</p>
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-sm"><strong>NICL AO reference preset</strong><p className="text-muted-foreground mt-1">Declaration: 800 × 400 px · 50–100 KB JPG<br />Left thumb: 240 × 240 px · 20–50 KB JPG</p></div>
      <a href="/document-resizer/?preset=nicl-left-thumb" className="inline-block text-sm font-semibold text-primary">Prepare left thumb impression →</a>
    </div>
  </section>;
}
