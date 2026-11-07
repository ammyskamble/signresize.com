import React, { useEffect, useState } from 'react';
import windows from '../data/applicationWindows.json';
import { activeApplications, upcomingApplications, daysUntilClose, type ApplicationWindow } from '../utils/applicationWindows';

const displayDate = (date: string) => new Date(`${date}T12:00:00+05:30`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' });

function CalendarCard({ item, now, upcoming }: { item: ApplicationWindow; now: Date; upcoming: boolean }) {
  const remaining = daysUntilClose(item, now);
  return <article id={item.id} className="scroll-mt-24 rounded-xl border border-border bg-card p-4 space-y-3">
    <div className="flex flex-wrap items-start justify-between gap-2">
      <h3 className="font-bold text-foreground">{item.title}</h3>
      <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">{upcoming ? 'Opening soon' : remaining === 0 ? 'Closes today' : `${remaining} days left`}</span>
    </div>
    <p className="text-sm text-muted-foreground">Applications: {displayDate(item.opensOn)} – <strong className="text-foreground">{displayDate(item.closesOn)}{item.closingTime ? `, ${item.closingTime.slice(0, 5)} IST` : ''}</strong>{!item.closingTime && ' · Check the official closing time'}</p>
    <p className="text-xs text-muted-foreground">Checked {displayDate(item.verifiedOn)} · {item.verification || 'Source linked below'}</p>
    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
      <a className="text-primary underline underline-offset-4" href={item.sourceUrl} target="_blank" rel="noopener noreferrer">Official source ↗</a>
      {item.evidenceUrl && <a className="text-primary underline underline-offset-4" href={item.evidenceUrl} target="_blank" rel="noopener noreferrer">Date report ↗</a>}
      <a className="text-primary underline underline-offset-4" href={item.toolUrl}>Preparation tool →</a>
    </div>
  </article>;
}

export function ApplicationCalendar() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => { setNow(new Date()); const timer = window.setInterval(() => setNow(new Date()), 60_000); return () => window.clearInterval(timer); }, []);
  if (!now) return <p className="text-sm text-muted-foreground">Checking application dates…</p>;
  const active = activeApplications(windows, now);
  const upcoming = upcomingApplications(windows, now);
  return <div className="space-y-8">
    <section aria-labelledby="open-applications" className="space-y-3"><h2 id="open-applications" className="text-xl font-bold">Open applications ({active.length})</h2>
      {active.length ? active.map(item => <CalendarCard key={item.id} item={item} now={now} upcoming={false} />) : <p className="text-sm text-muted-foreground">No open applications are currently listed.</p>}
    </section>
    <section aria-labelledby="upcoming-applications" className="space-y-3"><h2 id="upcoming-applications" className="text-xl font-bold">Opening later ({upcoming.length})</h2>
      {upcoming.length ? upcoming.map(item => <CalendarCard key={item.id} item={item} now={now} upcoming />) : <p className="text-sm text-muted-foreground">No future application windows are currently listed.</p>}
    </section>
  </div>;
}
