import { useState, type FormEvent } from 'react';

type EventType = '1600-male' | '800-female' | '100-male' | '100-female' | 'shotput-male' | 'shotput-female';

interface EventRule {
  id: EventType;
  name: string;
  category: 'Running' | 'Sprint' | 'Shot Put';
  gender: 'Male' | 'Female';
  maxMarks: number;
  inputUnit: 'time' | 'distance';
  placeholder: string;
  benchmark: string;
}

const EVENTS: Record<EventType, EventRule> = {
  '1600-male': {
    id: '1600-male',
    name: '1600m Running (Male)',
    category: 'Running',
    gender: 'Male',
    maxMarks: 20,
    inputUnit: 'time',
    placeholder: 'e.g. 5 min 10 sec',
    benchmark: '5:10 min or less = 20 Marks'
  },
  '800-female': {
    id: '800-female',
    name: '800m Running (Female)',
    category: 'Running',
    gender: 'Female',
    maxMarks: 20,
    inputUnit: 'time',
    placeholder: 'e.g. 2 min 50 sec',
    benchmark: '2:50 min or less = 20 Marks'
  },
  '100-male': {
    id: '100-male',
    name: '100m Sprint (Male)',
    category: 'Sprint',
    gender: 'Male',
    maxMarks: 15,
    inputUnit: 'time',
    placeholder: 'e.g. 11.50 sec',
    benchmark: '11.50 sec or less = 15 Marks'
  },
  '100-female': {
    id: '100-female',
    name: '100m Sprint (Female)',
    category: 'Sprint',
    gender: 'Female',
    maxMarks: 15,
    inputUnit: 'time',
    placeholder: 'e.g. 14.00 sec',
    benchmark: '14.00 sec or less = 15 Marks'
  },
  'shotput-male': {
    id: 'shotput-male',
    name: 'Shot Put 7.26 kg (Male)',
    category: 'Shot Put',
    gender: 'Male',
    maxMarks: 15,
    inputUnit: 'distance',
    placeholder: 'e.g. 8.50 meters',
    benchmark: '8.50m or more = 15 Marks'
  },
  'shotput-female': {
    id: 'shotput-female',
    name: 'Shot Put 4.00 kg (Female)',
    category: 'Shot Put',
    gender: 'Female',
    maxMarks: 15,
    inputUnit: 'distance',
    placeholder: 'e.g. 6.00 meters',
    benchmark: '6.00m or more = 15 Marks'
  }
};

function calculate1600mMale(totalSeconds: number): { marks: number; grade: string; tip: string } {
  if (totalSeconds <= 310) { // 5:10
    return { marks: 20, grade: 'Outstanding (Full Marks)', tip: 'You achieved maximum 20/20 marks! Maintain this stamina.' };
  } else if (totalSeconds <= 330) { // 5:30
    return { marks: 18, grade: 'Excellent', tip: `Shave off ${(totalSeconds - 310).toFixed(1)}s to reach the 20/20 full marks tier (5:10).` };
  } else if (totalSeconds <= 350) { // 5:50
    return { marks: 16, grade: 'Good', tip: `Shave off ${(totalSeconds - 330).toFixed(1)}s to reach 18 marks (5:30) or ${(totalSeconds - 310).toFixed(1)}s for 20 marks.` };
  } else if (totalSeconds <= 370) { // 6:10
    return { marks: 14, grade: 'Average', tip: `Shave off ${(totalSeconds - 350).toFixed(1)}s to reach 16 marks (5:50).` };
  } else if (totalSeconds <= 390) { // 6:30
    return { marks: 12, grade: 'Passing', tip: `Shave off ${(totalSeconds - 370).toFixed(1)}s to reach 14 marks (6:10).` };
  } else if (totalSeconds <= 410) { // 6:50
    return { marks: 10, grade: 'Below Average', tip: `Shave off ${(totalSeconds - 390).toFixed(1)}s to reach 12 marks (6:30).` };
  } else if (totalSeconds <= 430) { // 7:10
    return { marks: 8, grade: 'Borderline', tip: `Shave off ${(totalSeconds - 410).toFixed(1)}s to reach 10 marks (6:50).` };
  } else if (totalSeconds <= 450) { // 7:30
    return { marks: 5, grade: 'Low Marks', tip: `Shave off ${(totalSeconds - 430).toFixed(1)}s to reach 8 marks (7:10).` };
  } else {
    return { marks: 0, grade: 'Disqualified (0 Marks)', tip: 'Official cutoff is 7:30 min. Any time above 7:30 scores 0 marks.' };
  }
}

function calculate800mFemale(totalSeconds: number): { marks: number; grade: string; tip: string } {
  if (totalSeconds <= 170) { // 2:50
    return { marks: 20, grade: 'Outstanding (Full Marks)', tip: 'You achieved maximum 20/20 marks! Excellent endurance.' };
  } else if (totalSeconds <= 180) { // 3:00
    return { marks: 18, grade: 'Excellent', tip: `Shave off ${(totalSeconds - 170).toFixed(1)}s to reach 20 full marks (2:50).` };
  } else if (totalSeconds <= 190) { // 3:10
    return { marks: 16, grade: 'Good', tip: `Shave off ${(totalSeconds - 180).toFixed(1)}s to reach 18 marks (3:00).` };
  } else if (totalSeconds <= 200) { // 3:20
    return { marks: 14, grade: 'Average', tip: `Shave off ${(totalSeconds - 190).toFixed(1)}s to reach 16 marks (3:10).` };
  } else if (totalSeconds <= 210) { // 3:30
    return { marks: 12, grade: 'Passing', tip: `Shave off ${(totalSeconds - 200).toFixed(1)}s to reach 14 marks (3:20).` };
  } else if (totalSeconds <= 220) { // 3:40
    return { marks: 10, grade: 'Below Average', tip: `Shave off ${(totalSeconds - 210).toFixed(1)}s to reach 12 marks (3:30).` };
  } else if (totalSeconds <= 230) { // 3:50
    return { marks: 8, grade: 'Borderline', tip: `Shave off ${(totalSeconds - 220).toFixed(1)}s to reach 10 marks (3:40).` };
  } else if (totalSeconds <= 240) { // 4:00
    return { marks: 5, grade: 'Low Marks', tip: `Shave off ${(totalSeconds - 230).toFixed(1)}s to reach 8 marks (3:50).` };
  } else {
    return { marks: 0, grade: 'Disqualified (0 Marks)', tip: 'Official cutoff is 4:00 min. Any time above 4:00 scores 0 marks.' };
  }
}

function calculate100mMale(sec: number): { marks: number; grade: string; tip: string } {
  if (sec <= 11.50) {
    return { marks: 15, grade: 'Outstanding (Full Marks)', tip: 'Full 15/15 marks! Phenomenal sprint acceleration.' };
  } else if (sec <= 12.50) {
    return { marks: 12, grade: 'Excellent', tip: `Improve by ${(sec - 11.50).toFixed(2)}s for full 15 marks (≤11.50s).` };
  } else if (sec <= 13.50) {
    return { marks: 10, grade: 'Good', tip: `Improve by ${(sec - 12.50).toFixed(2)}s to reach 12 marks (≤12.50s).` };
  } else if (sec <= 14.50) {
    return { marks: 8, grade: 'Average', tip: `Improve by ${(sec - 13.50).toFixed(2)}s to reach 10 marks (≤13.50s).` };
  } else if (sec <= 15.50) {
    return { marks: 6, grade: 'Passing', tip: `Improve by ${(sec - 14.50).toFixed(2)}s to reach 8 marks (≤14.50s).` };
  } else if (sec <= 16.50) {
    return { marks: 4, grade: 'Below Average', tip: `Improve by ${(sec - 15.50).toFixed(2)}s to reach 6 marks (≤15.50s).` };
  } else if (sec <= 17.50) {
    return { marks: 2, grade: 'Borderline Pass', tip: `Improve by ${(sec - 16.50).toFixed(2)}s to reach 4 marks (≤16.50s).` };
  } else {
    return { marks: 0, grade: 'Disqualified (0 Marks)', tip: 'Official cutoff is 17.50 sec. Any time above 17.50s scores 0 marks.' };
  }
}

function calculate100mFemale(sec: number): { marks: number; grade: string; tip: string } {
  if (sec <= 14.00) {
    return { marks: 15, grade: 'Outstanding (Full Marks)', tip: 'Full 15/15 marks! Top-tier sprint performance.' };
  } else if (sec <= 15.00) {
    return { marks: 12, grade: 'Excellent', tip: `Improve by ${(sec - 14.00).toFixed(2)}s for full 15 marks (≤14.00s).` };
  } else if (sec <= 16.00) {
    return { marks: 10, grade: 'Good', tip: `Improve by ${(sec - 15.00).toFixed(2)}s to reach 12 marks (≤15.00s).` };
  } else if (sec <= 17.00) {
    return { marks: 8, grade: 'Average', tip: `Improve by ${(sec - 16.00).toFixed(2)}s to reach 10 marks (≤16.00s).` };
  } else if (sec <= 18.00) {
    return { marks: 6, grade: 'Passing', tip: `Improve by ${(sec - 17.00).toFixed(2)}s to reach 8 marks (≤17.00s).` };
  } else if (sec <= 19.00) {
    return { marks: 4, grade: 'Below Average', tip: `Improve by ${(sec - 18.00).toFixed(2)}s to reach 6 marks (≤18.00s).` };
  } else if (sec <= 20.00) {
    return { marks: 2, grade: 'Borderline Pass', tip: `Improve by ${(sec - 19.00).toFixed(2)}s to reach 4 marks (≤19.00s).` };
  } else {
    return { marks: 0, grade: 'Disqualified (0 Marks)', tip: 'Official cutoff is 20.00 sec. Any time above 20.00s scores 0 marks.' };
  }
}

function calculateShotPutMale(dist: number): { marks: number; grade: string; tip: string } {
  if (dist >= 8.50) {
    return { marks: 15, grade: 'Outstanding (Full Marks)', tip: 'Full 15/15 marks! Superb upper body strength.' };
  } else if (dist >= 7.90) {
    return { marks: 12, grade: 'Excellent', tip: `Add ${(8.50 - dist).toFixed(2)}m to reach 15 full marks (≥8.50m).` };
  } else if (dist >= 7.30) {
    return { marks: 10, grade: 'Good', tip: `Add ${(7.90 - dist).toFixed(2)}m to reach 12 marks (≥7.90m).` };
  } else if (dist >= 6.70) {
    return { marks: 8, grade: 'Average', tip: `Add ${(7.30 - dist).toFixed(2)}m to reach 10 marks (≥7.30m).` };
  } else if (dist >= 6.10) {
    return { marks: 6, grade: 'Passing', tip: `Add ${(6.70 - dist).toFixed(2)}m to reach 8 marks (≥6.70m).` };
  } else if (dist >= 5.50) {
    return { marks: 4, grade: 'Below Average', tip: `Add ${(6.10 - dist).toFixed(2)}m to reach 6 marks (≥6.10m).` };
  } else if (dist >= 4.90) {
    return { marks: 2, grade: 'Borderline Pass', tip: `Add ${(5.50 - dist).toFixed(2)}m to reach 4 marks (≥5.50m).` };
  } else {
    return { marks: 0, grade: 'Disqualified (0 Marks)', tip: 'Minimum threshold is 4.90 meters. Below 4.90m scores 0 marks.' };
  }
}

function calculateShotPutFemale(dist: number): { marks: number; grade: string; tip: string } {
  if (dist >= 6.00) {
    return { marks: 15, grade: 'Outstanding (Full Marks)', tip: 'Full 15/15 marks! Exceptional throw technique.' };
  } else if (dist >= 5.50) {
    return { marks: 12, grade: 'Excellent', tip: `Add ${(6.00 - dist).toFixed(2)}m to reach 15 full marks (≥6.00m).` };
  } else if (dist >= 5.00) {
    return { marks: 10, grade: 'Good', tip: `Add ${(5.50 - dist).toFixed(2)}m to reach 12 marks (≥5.50m).` };
  } else if (dist >= 4.50) {
    return { marks: 8, grade: 'Average', tip: `Add ${(5.00 - dist).toFixed(2)}m to reach 10 marks (≥5.00m).` };
  } else if (dist >= 4.00) {
    return { marks: 6, grade: 'Passing', tip: `Add ${(4.50 - dist).toFixed(2)}m to reach 8 marks (≥4.50m).` };
  } else if (dist >= 3.50) {
    return { marks: 4, grade: 'Below Average', tip: `Add ${(4.00 - dist).toFixed(2)}m to reach 6 marks (≥4.00m).` };
  } else if (dist >= 3.10) {
    return { marks: 2, grade: 'Borderline Pass', tip: `Add ${(3.50 - dist).toFixed(2)}m to reach 4 marks (≥3.50m).` };
  } else {
    return { marks: 0, grade: 'Disqualified (0 Marks)', tip: 'Minimum threshold is 3.10 meters. Below 3.10m scores 0 marks.' };
  }
}

export function PoliceRunningPlanner() {
  const [selectedEvent, setSelectedEvent] = useState<EventType>('1600-male');
  const [minutes, setMinutes] = useState('5');
  const [seconds, setSeconds] = useState('20');
  const [distance, setDistance] = useState('8.10');
  const [calculation, setCalculation] = useState<{
    marks: number;
    maxMarks: number;
    grade: string;
    tip: string;
    rawInput: string;
  } | null>(null);

  const eventConfig = EVENTS[selectedEvent];

  function handleCalculate(e?: FormEvent) {
    if (e) e.preventDefault();

    if (eventConfig.inputUnit === 'time') {
      const m = parseInt(minutes || '0', 10);
      const s = parseFloat(seconds || '0');
      if (isNaN(m) || isNaN(s) || m < 0 || s < 0 || s >= 60) {
        return;
      }
      const totalSec = m * 60 + s;
      let res;
      if (selectedEvent === '1600-male') {
        res = calculate1600mMale(totalSec);
      } else if (selectedEvent === '800-female') {
        res = calculate800mFemale(totalSec);
      } else if (selectedEvent === '100-male') {
        res = calculate100mMale(totalSec);
      } else {
        res = calculate100mFemale(totalSec);
      }
      const timeStr = m > 0 ? `${m}m ${s < 10 ? '0' : ''}${s.toFixed(s % 1 === 0 ? 0 : 2)}s` : `${s.toFixed(2)}s`;
      setCalculation({
        marks: res.marks,
        maxMarks: eventConfig.maxMarks,
        grade: res.grade,
        tip: res.tip,
        rawInput: timeStr
      });
    } else {
      const d = parseFloat(distance || '0');
      if (isNaN(d) || d < 0) return;
      let res;
      if (selectedEvent === 'shotput-male') {
        res = calculateShotPutMale(d);
      } else {
        res = calculateShotPutFemale(d);
      }
      setCalculation({
        marks: res.marks,
        maxMarks: eventConfig.maxMarks,
        grade: res.grade,
        tip: res.tip,
        rawInput: `${d.toFixed(2)} meters`
      });
    }
  }

  const inputClass = 'w-full rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm text-foreground focus:outline-2 focus:outline-primary shadow-2xs';

  return (
    <section id="running-practice-planner" className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-4 sm:p-6 shadow-sm my-6" aria-labelledby="running-planner-title">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/70 pb-3">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-primary">
          <span className="text-base" aria-hidden="true">⏱️</span>
          <span>Maharashtra Police Bharti PET Ground Marks Checker</span>
          <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-bold text-primary">Official GR Rules</span>
        </div>
        <span className="text-[11px] font-mono text-muted-foreground">50 Ground Marks Benchmark</span>
      </div>

      <div className="mt-3">
        <h2 id="running-planner-title" className="text-lg sm:text-2xl font-black text-foreground tracking-tight">
          Enter Your Practice Time / Distance &amp; See Your Expected Marks Instantly
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Interactive PET ground test evaluator verified against Maharashtra Police Department recruitment gazette rules. Check your marks out of 20 (for 1600m &amp; 800m) or 15 (for 100m sprint &amp; shot put).
        </p>
      </div>

      <form onSubmit={handleCalculate} className="mt-5 space-y-4">
        <div>
          <label htmlFor="running-event" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Select Physical Event
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {(Object.keys(EVENTS) as EventType[]).map((key) => {
              const ev = EVENTS[key];
              const isSelected = selectedEvent === key;
              return (
                <button
                  type="button"
                  key={key}
                  onClick={() => {
                    setSelectedEvent(key);
                    setCalculation(null);
                    if (key === '1600-male') { setMinutes('5'); setSeconds('20'); }
                    else if (key === '800-female') { setMinutes('2'); setSeconds('55'); }
                    else if (key === '100-male') { setMinutes('0'); setSeconds('12.20'); }
                    else if (key === '100-female') { setMinutes('0'); setSeconds('14.80'); }
                    else if (key === 'shotput-male') { setDistance('8.10'); }
                    else if (key === 'shotput-female') { setDistance('5.60'); }
                  }}
                  className={`text-left p-2.5 rounded-xl border text-xs font-semibold transition ${
                    isSelected
                      ? 'border-primary bg-primary/15 text-primary shadow-xs ring-1 ring-primary'
                      : 'border-border bg-card hover:bg-muted/40 text-foreground'
                  }`}
                >
                  <div className="font-bold truncate">{ev.name}</div>
                  <div className="text-[10px] text-muted-foreground font-mono mt-0.5">Max {ev.maxMarks} Marks</div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-border/80 bg-muted/20 p-3 sm:p-4">
          <div className="text-xs font-bold text-foreground mb-2 flex items-center justify-between">
            <span>Enter Your Current Ground Practice Score for: <strong className="text-primary">{eventConfig.name}</strong></span>
            <span className="text-[11px] font-mono text-muted-foreground">Benchmark: {eventConfig.benchmark}</span>
          </div>

          {eventConfig.inputUnit === 'time' ? (
            <div className="grid grid-cols-2 gap-3 max-w-md">
              <div>
                <label htmlFor="planner-minutes" className="mb-1 block text-xs font-semibold text-muted-foreground">
                  Minutes
                </label>
                <input
                  id="planner-minutes"
                  type="number"
                  min="0"
                  max="30"
                  step="1"
                  value={minutes}
                  onChange={(e) => { setMinutes(e.target.value); setCalculation(null); }}
                  placeholder="0"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="planner-seconds" className="mb-1 block text-xs font-semibold text-muted-foreground">
                  Seconds
                </label>
                <input
                  id="planner-seconds"
                  type="number"
                  min="0"
                  max="59.99"
                  step="0.01"
                  value={seconds}
                  onChange={(e) => { setSeconds(e.target.value); setCalculation(null); }}
                  placeholder="0.00"
                  className={inputClass}
                />
              </div>
            </div>
          ) : (
            <div className="max-w-xs">
              <label htmlFor="planner-distance" className="mb-1 block text-xs font-semibold text-muted-foreground">
                Throw Distance (in Metres)
              </label>
              <input
                id="planner-distance"
                type="number"
                min="0"
                max="25"
                step="0.01"
                value={distance}
                onChange={(e) => { setDistance(e.target.value); setCalculation(null); }}
                placeholder="e.g. 8.50"
                className={inputClass}
              />
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            className="rounded-xl bg-primary px-6 py-3 text-xs sm:text-sm font-bold text-primary-foreground hover:opacity-95 transition shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>⚡ Check Expected Marks</span>
            <span>&rarr;</span>
          </button>
          <a
            href="#physical-test-marks-tables"
            className="text-xs font-semibold text-muted-foreground hover:text-primary transition underline"
          >
            Jump to complete official marks-band tables ↓
          </a>
        </div>

        {calculation && (
          <div role="status" aria-live="polite" className="mt-4 rounded-2xl border-2 border-primary/40 bg-card p-4 sm:p-5 shadow-sm space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2.5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Your Practice Result ({calculation.rawInput})</span>
                <div className="text-xl sm:text-2xl font-black text-foreground">
                  Expected Score: <span className="text-primary font-mono">{calculation.marks}</span> / {calculation.maxMarks} Marks
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                calculation.marks === calculation.maxMarks
                  ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                  : calculation.marks > 0
                    ? 'bg-primary/15 text-primary border border-primary/30'
                    : 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30'
              }`}>
                {calculation.grade}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed pt-1">
              💡 {calculation.tip}
            </p>
          </div>
        )}
      </form>

      <div className="mt-4 pt-3 border-t border-border/70 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>Verified against Maharashtra Police Bharti Gazette &amp; Government Resolution (GR). Minimum qualifying score across all 3 events is 25 out of 50 marks.</span>
        <div className="flex items-center gap-3 font-semibold text-primary">
          <a href="/downloads/maharashtra-police-bharti-2026-physical-chart-and-syllabus-en.pdf" download="Maharashtra-Police-Bharti-2026-Handbook-English.pdf" className="underline">
            Download PDF Chart (EN) 📥
          </a>
          <span>•</span>
          <a href="/maharashtra-police-signature-resize/" className="underline">
            Resize Photo &amp; Signature (5–20 KB) →
          </a>
        </div>
      </div>
    </section>
  );
}
