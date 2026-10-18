import React, { useEffect, useState } from 'react';
import windows from '../data/applicationWindows.json';
import { activeApplications, daysUntilClose } from '../utils/applicationWindows';

export function ClosingSoon({ compact = false, planner = false }: { compact?: boolean; planner?: boolean }) {
  const [dismissed, setDismissed] = useState(false);
  const [datesExpanded, setDatesExpanded] = useState(false);
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    if (compact) { try { setDismissed(sessionStorage.getItem('signresize-deadlines-dismissed') === 'yes'); } catch {} }
    setNow(new Date());
    const timer = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(timer);
  }, []);
  const active = now ? activeApplications(windows, now) : [];
  const soon = now ? active.filter(item => daysUntilClose(item, now) < 7) : [];
  const shown = (soon.length ? soon : active).slice(0, 3);
  if (planner) return <section id="application-planner" className="application-planner" aria-label="Application deadlines" data-expanded={datesExpanded}>
    <button className="application-planner-toggle" type="button" aria-expanded={datesExpanded} aria-controls="application-date-cards" onClick={() => setDatesExpanded(value => !value)}><span>Application dates <small>{now ? `${active.length} open` : 'Calendar'}</small></span><span aria-hidden="true">{datesExpanded ? '−' : '+'}</span></button>
    <div className="application-planner-heading"><div><p>PLAN YOUR NEXT STEP</p><h2>Application dates</h2></div><span>Closing dates · IST</span></div>
    <div id="application-date-cards" className="application-date-grid">
      {!now && <p className="application-date-placeholder">Checking the application calendar…</p>}
      {now && active.length === 0 && <p className="application-date-placeholder">No open applications listed. <a href="/government-jobs/">Explore exam tools →</a></p>}
      {active.slice(0, 3).map(item => {
        const date = new Date(`${item.closesOn}T12:00:00+05:30`);
        const days = daysUntilClose(item, now!);
        return <article className="application-date-card" key={item.id} data-urgent={days < 7}>
          <time className="application-date-stamp" dateTime={item.closesOn}><span>{date.toLocaleDateString('en-IN', { month: 'short', timeZone: 'Asia/Kolkata' })}</span><strong>{item.closesOn.slice(-2)}</strong></time>
          <div className="application-date-info"><a className="application-date-title" href={item.toolUrl}>{item.label} <span aria-hidden="true">↗</span></a><p><b>{days === 0 ? 'Closes today' : `${days} days left`}</b>{item.closingTime ? ` · ${item.closingTime.slice(0, 5)} IST` : ' · Submit early'}</p><a className="application-date-source" href={item.sourceUrl} target="_blank" rel="noopener noreferrer">Official notice ↗</a></div>
        </article>;
      })}
    </div>
  </section>;
  if (compact) return <section hidden={dismissed} style={dismissed ? { display: 'none' } : undefined} aria-label="Application deadlines" className="flex items-center gap-3 text-xs min-w-0">
    <span className="shrink-0 font-bold text-primary">{soon.length ? 'Closing this week' : 'Application dates'}</span>
    <div className="flex gap-3 overflow-x-auto flex-1 min-w-0 pb-1">
      {!now && <span className="text-muted-foreground whitespace-nowrap">Checking calendar…</span>}
      {now && shown.length === 0 && <a href="/government-jobs/" className="text-muted-foreground whitespace-nowrap">No confirmed open windows · Browse tools →</a>}
      {shown.map(item => <a key={item.id} href={item.toolUrl} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 whitespace-nowrap font-semibold">{item.label} <span className="text-muted-foreground font-normal">· {daysUntilClose(item, now!) === 0 ? 'closes today' : `${daysUntilClose(item, now!)} days left`}</span> →</a>)}
    </div>
    <a href="/blog/" className="hidden sm:inline shrink-0 text-primary font-semibold">Guides ↗</a>
    <button type="button" aria-label="Dismiss application deadlines" onClick={() => { setDismissed(true); try { sessionStorage.setItem('signresize-deadlines-dismissed', 'yes'); } catch {} }} className="shrink-0 px-2 py-1 rounded hover:bg-muted">✕</button>
  </section>;
  return <section aria-label="Application deadlines" className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4 flex flex-col lg:flex-row lg:items-center gap-4">
    <div className="shrink-0"><p className="text-[10px] font-bold tracking-widest text-amber-700 dark:text-amber-300 uppercase">Application calendar · IST</p><h2 className="font-bold text-sm">{soon.length ? 'Closing in less than 7 days' : 'Next application deadlines'}</h2></div>
    <div className="flex flex-wrap gap-2 flex-1">
      {!now && <p className="text-xs text-muted-foreground">Checking the application calendar…</p>}
      {now && shown.length === 0 && <p className="text-xs text-muted-foreground">No confirmed open windows in our calendar. <a className="underline" href="/government-jobs/">Browse exam tools</a></p>}
      {shown.map(item => <div key={item.id} className="rounded-xl border border-border bg-card px-3 py-2 text-xs space-y-1">
        <a href={item.toolUrl} className="font-bold hover:text-primary">{item.label} <span className="text-primary">→</span></a>
        <p>{daysUntilClose(item, now!) === 0 ? 'Closes today' : `${daysUntilClose(item, now!)} days left`} · {new Date(`${item.closesOn}T12:00:00+05:30`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', timeZone: 'Asia/Kolkata' })}{item.closingTime ? `, ${item.closingTime.slice(0, 5)} IST` : ' · submit early'}</p>
        <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground underline">Check official notice</a>
      </div>)}
    </div>
    <a href="/government-jobs/" className="text-xs font-semibold text-primary">All exam tools →</a>
  </section>;
}
