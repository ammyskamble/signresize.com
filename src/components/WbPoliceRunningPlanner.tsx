import { useState, type FormEvent } from 'react';

interface EventConfig {
  id: string;
  cadre: string;
  name: string;
  nameBn: string;
  distance: number; // in meters
  cutoffSeconds: number; // in seconds
  cutoffDisplay: string;
  lapDistance: number; // track lap in meters (usually 400m)
  split100m: string;
  split200m: string;
  split400m: string;
  pacePerKm: string;
}

const WBP_RUNNING_EVENTS: Record<string, EventConfig> = {
  'si-male': {
    id: 'si-male',
    cadre: 'Sub-Inspector (SI)',
    name: 'Male SI (UB & AB) — 800 Meters',
    nameBn: 'পুরুষ এসআই (UB ও AB) — ৮০০ মিটার',
    distance: 800,
    cutoffSeconds: 180, // 3:00 min
    cutoffDisplay: '3 min 00 sec',
    lapDistance: 400,
    split100m: '22.5 sec',
    split200m: '45.0 sec',
    split400m: '1 min 30 sec',
    pacePerKm: '3:45 min/km'
  },
  'si-female': {
    id: 'si-female',
    cadre: 'Sub-Inspector (SI)',
    name: 'Lady SI (UB) — 400 Meters',
    nameBn: 'লেডি এসআই (UB) — ৪০০ মিটার',
    distance: 400,
    cutoffSeconds: 120, // 2:00 min
    cutoffDisplay: '2 min 00 sec',
    lapDistance: 400,
    split100m: '30.0 sec',
    split200m: '60.0 sec',
    split400m: '2 min 00 sec',
    pacePerKm: '5:00 min/km'
  },
  'si-tg': {
    id: 'si-tg',
    cadre: 'Sub-Inspector (SI)',
    name: 'Transgender SI — 400 Meters',
    nameBn: 'রূপান্তরকামী এসআই — ৪০০ মিটার',
    distance: 400,
    cutoffSeconds: 100, // 1:40 min
    cutoffDisplay: '1 min 40 sec',
    lapDistance: 400,
    split100m: '25.0 sec',
    split200m: '50.0 sec',
    split400m: '1 min 40 sec',
    pacePerKm: '4:10 min/km'
  },
  'constable-male': {
    id: 'constable-male',
    cadre: 'Constable',
    name: 'Male Constable (WBP & KP) — 1600 Meters',
    nameBn: 'পুরুষ কনস্টেবল (WBP ও KP) — ১৬০০ মিটার',
    distance: 1600,
    cutoffSeconds: 390, // 6:30 min
    cutoffDisplay: '6 min 30 sec',
    lapDistance: 400,
    split100m: '24.4 sec',
    split200m: '48.8 sec',
    split400m: '1 min 37.5 sec',
    pacePerKm: '4:04 min/km'
  },
  'constable-female': {
    id: 'constable-female',
    cadre: 'Constable',
    name: 'Lady Constable — 800 Meters',
    nameBn: 'লেডি কনস্টেবল — ৮০০ মিটার',
    distance: 800,
    cutoffSeconds: 240, // 4:00 min
    cutoffDisplay: '4 min 00 sec',
    lapDistance: 400,
    split100m: '30.0 sec',
    split200m: '60.0 sec',
    split400m: '2 min 00 sec',
    pacePerKm: '5:00 min/km'
  },
  'constable-tg': {
    id: 'constable-tg',
    cadre: 'Constable',
    name: 'Transgender Constable — 800 Meters',
    nameBn: 'রূপান্তরকামী কনস্টেবল — ৮০০ মিটার',
    distance: 800,
    cutoffSeconds: 210, // 3:30 min
    cutoffDisplay: '3 min 30 sec',
    lapDistance: 400,
    split100m: '26.2 sec',
    split200m: '52.5 sec',
    split400m: '1 min 45 sec',
    pacePerKm: '4:22 min/km'
  }
};

export function WbPoliceRunningPlanner() {
  const [selectedEventId, setSelectedEventId] = useState<string>('si-male');
  const [minutes, setMinutes] = useState<string>('');
  const [seconds, setSeconds] = useState<string>('');
  const [status, setStatus] = useState<{
    evaluated: boolean;
    qualifies: boolean;
    difference: number;
    userSeconds: number;
    event: EventConfig;
  } | null>(null);

  const currentEvent = WBP_RUNNING_EVENTS[selectedEventId] || WBP_RUNNING_EVENTS['si-male'];

  function evaluate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const m = parseInt(minutes, 10);
    const s = parseFloat(seconds);

    if (isNaN(m) || isNaN(s) || m < 0 || s < 0 || s >= 60) {
      alert('Please enter valid positive whole minutes and seconds (0 to 59.99).');
      return;
    }

    const totalPracticeSeconds = m * 60 + s;
    if (totalPracticeSeconds <= 0) {
      alert('Total practice time must be greater than zero.');
      return;
    }

    const diff = Math.round((totalPracticeSeconds - currentEvent.cutoffSeconds) * 100) / 100;
    setStatus({
      evaluated: true,
      qualifies: diff <= 0,
      difference: Math.abs(diff),
      userSeconds: totalPracticeSeconds,
      event: currentEvent
    });
  }

  const inputClass = 'w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground focus:outline-2 focus:outline-primary text-sm';

  return (
    <section id="running-practice-planner" className="my-6 rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-4 sm:p-6 shadow-md" aria-labelledby="wbp-running-planner-title">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">⏱️</span>
          <div>
            <h2 id="wbp-running-planner-title" className="text-lg sm:text-xl font-extrabold text-foreground">
              WBP Running Time Checker &amp; Target Pace Splits
            </h2>
            <p className="text-xs text-muted-foreground font-medium">
              West Bengal Police &amp; Kolkata Police PET (Qualifying Only — No Marks)
            </p>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold border border-primary/25">
          WBPRB RFID Standards
        </span>
      </div>

      <p className="mt-3 text-xs sm:text-sm text-foreground/90 leading-relaxed">
        Select your recruitment cadre (Sub-Inspector or Constable), enter your recent ground stopwatch timing, and instantly verify whether you clear the non-negotiable qualifying threshold with target lap pace splits.
      </p>

      <form onSubmit={evaluate} onChange={() => setStatus(null)} className="mt-4 space-y-4">
        <div>
          <label htmlFor="wbp-running-event" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Select Your Cadre &amp; PET Running Distance:
          </label>
          <select
            id="wbp-running-event"
            value={selectedEventId}
            onChange={(e) => {
              setSelectedEventId(e.target.value);
              setStatus(null);
            }}
            className={`${inputClass} font-semibold`}
          >
            <optgroup label="Sub-Inspector (SI) — 800m & 400m">
              <option value="si-male">WBP SI Male (UB &amp; AB) — 800m in 3:00 min</option>
              <option value="si-female">WBP Lady SI (UB) — 400m in 2:00 min</option>
              <option value="si-tg">WBP SI (Third Gender) — 400m in 1:40 min</option>
            </optgroup>
            <optgroup label="Constable & Lady Constable — 1600m & 800m">
              <option value="constable-male">Constable Male (WBP &amp; KP) — 1600m in 6:30 min</option>
              <option value="constable-female">Lady Constable — 800m in 4:00 min</option>
              <option value="constable-tg">Constable (Third Gender) — 800m in 3:30 min</option>
            </optgroup>
          </select>
        </div>

        {/* Target Cutoff Callout */}
        <div className="p-3 rounded-xl bg-muted/40 border border-border flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="text-muted-foreground">
            Official Qualifying Threshold: <strong className="text-foreground">{currentEvent.name}</strong>
          </span>
          <span className="font-mono font-bold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
            Cutoff: &le; {currentEvent.cutoffDisplay}
          </span>
        </div>

        {/* Practice Time Input Grid */}
        <fieldset className="rounded-xl border border-border bg-card/80 p-3 sm:p-4">
          <legend className="px-2 text-xs font-bold text-foreground uppercase tracking-wide">
            Your Ground Practice Stopwatch Time
          </legend>
          <div className="grid grid-cols-2 gap-3 mt-1">
            <div>
              <label htmlFor="wbp-minutes" className="mb-1 block text-xs font-medium text-muted-foreground">
                Minutes
              </label>
              <input
                id="wbp-minutes"
                type="number"
                min="0"
                max="30"
                step="1"
                inputMode="numeric"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                placeholder="e.g. 2 or 6"
                className={inputClass}
                required
              />
            </div>
            <div>
              <label htmlFor="wbp-seconds" className="mb-1 block text-xs font-medium text-muted-foreground">
                Seconds
              </label>
              <input
                id="wbp-seconds"
                type="number"
                min="0"
                max="59.99"
                step="0.01"
                inputMode="decimal"
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
                placeholder="e.g. 45 or 15.5"
                className={inputClass}
                required
              />
            </div>
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-xs hover:opacity-95 transition cursor-pointer"
        >
          Check Qualification &amp; Lap Splits →
        </button>

        {/* Evaluation Results Display */}
        {status && (
          <div className="mt-4 space-y-3 animate-in fade-in duration-200">
            {status.qualifies ? (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-950 dark:text-emerald-100 space-y-1">
                <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-emerald-700 dark:text-emerald-400">
                  <span>🎉</span>
                  <span>QUALIFIED (উত্তীর্ণ) — Within WBPRB Cutoff!</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">
                  Your time of <strong>{minutes}m {seconds}s</strong> is{' '}
                  <strong className="text-emerald-600 dark:text-emerald-400">{status.difference} seconds faster</strong> than the official cutoff ({status.event.cutoffDisplay}). Maintain this stamina for ground day RFID mats.
                </p>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 text-amber-950 dark:text-amber-100 space-y-1">
                <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-amber-700 dark:text-amber-400">
                  <span>⚠️</span>
                  <span>NOT YET QUALIFIED (এখনও উত্তীর্ণ নয়)</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">
                  Your time of <strong>{minutes}m {seconds}s</strong> is{' '}
                  <strong className="text-rose-600 dark:text-rose-400">{status.difference} seconds above</strong> the official qualifying cutoff ({status.event.cutoffDisplay}). Follow the lap pacing splits below to shave off {status.difference}s.
                </p>
              </div>
            )}

            {/* Target Pace Splits Table */}
            <div className="rounded-xl border border-border bg-card p-3 space-y-2">
              <div className="text-xs font-bold text-foreground flex items-center justify-between">
                <span>⏱️ Required Pacing Matrix for {status.event.name}:</span>
                <span className="text-[11px] font-mono text-muted-foreground">Pace: {status.event.pacePerKm}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-muted/50 border border-border">
                  <div className="text-[10px] text-muted-foreground uppercase font-bold">100m Split</div>
                  <div className="font-mono font-bold text-foreground mt-0.5">{status.event.split100m}</div>
                </div>
                <div className="p-2 rounded-lg bg-muted/50 border border-border">
                  <div className="text-[10px] text-muted-foreground uppercase font-bold">200m Split</div>
                  <div className="font-mono font-bold text-foreground mt-0.5">{status.event.split200m}</div>
                </div>
                <div className="p-2 rounded-lg bg-muted/50 border border-border">
                  <div className="text-[10px] text-muted-foreground uppercase font-bold">400m Lap Pace</div>
                  <div className="font-mono font-bold text-primary mt-0.5">{status.event.split400m}</div>
                </div>
                <div className="p-2 rounded-lg bg-muted/50 border border-border">
                  <div className="text-[10px] text-muted-foreground uppercase font-bold">Total Pace</div>
                  <div className="font-mono font-bold text-foreground mt-0.5">{status.event.pacePerKm}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>

      <div className="mt-4 pt-3 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>
          <strong>Honesty Disclaimer:</strong> This compares practice stopwatch times against official WBPRB qualifying cutoffs; it does not determine ground eligibility. Official timing is tracked via automated RFID chips on ground day as per <a href="https://prb.wb.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold">prb.wb.gov.in</a>.
        </span>
        <div className="flex items-center gap-2 font-semibold">
          <a href="/downloads/wb-police-constable-si-2026-physical-chart-and-syllabus-bn.pdf" download className="text-primary hover:underline">
            📥 বাংলা PDF
          </a>
          <span>•</span>
          <a href="/downloads/wb-police-constable-si-2026-physical-chart-and-syllabus-en.pdf" download className="text-primary hover:underline">
            📥 English PDF
          </a>
        </div>
      </div>
    </section>
  );
}
