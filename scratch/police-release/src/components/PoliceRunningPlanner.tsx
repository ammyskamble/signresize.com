import { useState, type FormEvent } from 'react';

export function PoliceRunningPlanner() {
  const [event, setEvent] = useState('1600');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [targetMinutes, setTargetMinutes] = useState('');
  const [targetSeconds, setTargetSeconds] = useState('');
  const [result, setResult] = useState('');

  function compare(eventSubmit: FormEvent<HTMLFormElement>) {
    eventSubmit.preventDefault();
    const values = [minutes, seconds, targetMinutes, targetSeconds].map(Number);
    if ([minutes, seconds, targetMinutes, targetSeconds].some(value => value.trim() === '') || values.some(value => !Number.isFinite(value) || value < 0) || !Number.isInteger(values[0]) || !Number.isInteger(values[2]) || values[1] >= 60 || values[3] >= 60) {
      setResult('Enter whole minutes and seconds under 60 for both times.');
      return;
    }
    const current = values[0] * 60 + values[1];
    const target = values[2] * 60 + values[3];
    if (!current || !target) {
      setResult('Enter a time greater than zero for both runs.');
      return;
    }
    const difference = Math.round((current - target) * 100) / 100;
    setResult(difference > 0
      ? `For ${event}m, you need to run ${difference} second${difference === 1 ? '' : 's'} faster to reach your practice target.`
      : difference < 0
        ? `For ${event}m, your current time is ${Math.abs(difference)} second${difference === -1 ? '' : 's'} faster than your practice target.`
        : `For ${event}m, your current time matches your practice target.`);
  }

  const inputClass = 'w-full rounded-lg border border-border bg-card px-3 py-2.5 text-foreground focus:outline-2 focus:outline-primary';
  return (
    <section id="running-practice-planner" className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-4 sm:p-6 shadow-sm" aria-labelledby="running-planner-title">
      <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary"><span aria-hidden="true">⏱</span> Free practice tool <span className="rounded-full bg-primary/10 px-2 py-1 normal-case tracking-normal">No sign-up</span></div>
      <h2 id="running-planner-title" className="mt-2 text-xl font-extrabold text-foreground sm:text-2xl">Police Bharti Running Time Planner</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Compare your practice time with your own target for 1600m, 800m or 100m. See how much faster you need to run.</p>
      <form onSubmit={compare} onChange={() => setResult('')} className="mt-4 space-y-4">
        <div><label htmlFor="running-event" className="mb-1 block text-sm font-semibold text-foreground">Running event</label><select id="running-event" value={event} onChange={e => { setEvent(e.target.value); setResult(''); }} className={inputClass}><option value="1600">1600 metres</option><option value="800">800 metres</option><option value="100">100 metres</option></select></div>
        <div className="grid gap-3 sm:grid-cols-2">
          <fieldset className="rounded-xl border border-border bg-card/70 p-3"><legend className="px-1 text-sm font-bold text-foreground">Your practice time</legend><div className="grid grid-cols-2 gap-2"><div><label htmlFor="running-minutes" className="mb-1 block text-xs text-muted-foreground">Minutes</label><input id="running-minutes" type="number" min="0" step="1" inputMode="numeric" value={minutes} onChange={e => setMinutes(e.target.value)} placeholder="0" className={inputClass} /></div><div><label htmlFor="running-seconds" className="mb-1 block text-xs text-muted-foreground">Seconds</label><input id="running-seconds" type="number" min="0" max="59.99" step="0.01" inputMode="decimal" value={seconds} onChange={e => setSeconds(e.target.value)} placeholder="0–59.99" className={inputClass} /></div></div></fieldset>
          <fieldset className="rounded-xl border border-border bg-card/70 p-3"><legend className="px-1 text-sm font-bold text-foreground">Your target time</legend><div className="grid grid-cols-2 gap-2"><div><label htmlFor="target-minutes" className="mb-1 block text-xs text-muted-foreground">Minutes</label><input id="target-minutes" type="number" min="0" step="1" inputMode="numeric" value={targetMinutes} onChange={e => setTargetMinutes(e.target.value)} placeholder="0" className={inputClass} /></div><div><label htmlFor="target-seconds" className="mb-1 block text-xs text-muted-foreground">Seconds</label><input id="target-seconds" type="number" min="0" max="59.99" step="0.01" inputMode="decimal" value={targetSeconds} onChange={e => setTargetSeconds(e.target.value)} placeholder="0–59.99" className={inputClass} /></div></div></fieldset>
        </div>
        <button type="submit" className="rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:opacity-90">Compare my times</button>
        {result && <p role="status" aria-live="polite" className="rounded-xl border border-primary/25 bg-primary/10 p-3 text-sm font-semibold text-foreground">{result}</p>}
      </form>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">This compares practice times; it does not calculate marks or determine eligibility. Scoring and events depend on the post and notification. Check the <a className="font-semibold text-primary underline" href="https://www.mahapolice.gov.in/police-recruINDEXGR.php" target="_blank" rel="noopener noreferrer">Maharashtra Police recruitment rules</a> and your recruitment notice.</p>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold"><a href="#running-practice-planner" onClick={e => { e.preventDefault(); window.print(); }} className="text-primary underline">Print this guide</a><a href="/maharashtra-police-signature-resize/" className="text-primary underline">Prepare your photo and signature →</a></div>
    </section>
  );
}
