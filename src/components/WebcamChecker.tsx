import { useEffect, useRef, useState } from 'react';
import { lightingSummary } from '../utils/examDayTools';

export function WebcamChecker() {
  const video = useRef<HTMLVideoElement>(null);
  const stream = useRef<MediaStream | null>(null);
  const request = useRef(0);
  const [running, setRunning] = useState(false);
  const [starting, setStarting] = useState(false);
  const [error, setError] = useState('');
  const [light, setLight] = useState<ReturnType<typeof lightingSummary> | null>(null);
  const [checks, setChecks] = useState([false, false, false]);
  function stop() {
    request.current++;
    stream.current?.getTracks().forEach(track => track.stop()); stream.current = null;
    if (video.current) video.current.srcObject = null;
    setRunning(false); setStarting(false); setLight(null);
  }
  useEffect(() => {
    const hidden = () => { if (document.hidden) stop(); };
    document.addEventListener('visibilitychange', hidden);
    return () => { request.current++; stream.current?.getTracks().forEach(track => track.stop()); document.removeEventListener('visibilitychange', hidden); };
  }, []);
  useEffect(() => {
    if (!running) return;
    const canvas = document.createElement('canvas'); canvas.width = 64; canvas.height = 64;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const timer = window.setInterval(() => {
      const v = video.current; if (!v || v.readyState < 2 || !ctx) return;
      // Sample the central area, without detecting or identifying a face.
      const width = v.videoWidth * .6, height = v.videoHeight * .7;
      ctx.drawImage(v, (v.videoWidth - width) / 2, (v.videoHeight - height) / 2, width, height, 0, 0, 64, 64);
      setLight(lightingSummary(ctx.getImageData(0, 0, 64, 64).data, 64));
    }, 750);
    return () => window.clearInterval(timer);
  }, [running]);
  async function start() {
    setError(''); setStarting(true); const id = ++request.current;
    try {
      if (!navigator.mediaDevices?.getUserMedia) throw new Error('UNSUPPORTED');
      const media = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } }, audio: false });
      if (id !== request.current) { media.getTracks().forEach(track => track.stop()); return; }
      stream.current = media;
      if (!video.current) { media.getTracks().forEach(track => track.stop()); return; }
      video.current.srcObject = media; await video.current.play();
      if (id === request.current) setRunning(true);
    } catch (e) {
      if (id !== request.current) return;
      stream.current?.getTracks().forEach(track => track.stop()); stream.current = null;
      const name = e instanceof Error ? e.name : '';
      setError(name === 'NotAllowedError' ? 'Camera access was denied. Allow camera access in this site’s browser settings, then try again.' : name === 'NotFoundError' ? 'No camera was found. Connect a webcam or open this page on your phone.' : name === 'NotReadableError' ? 'The camera is busy. Close other camera apps and retry.' : 'Camera unavailable. Use a supported browser on HTTPS or localhost.');
    } finally { if (id === request.current) setStarting(false); }
  }
  return <section className="grid lg:grid-cols-[1.3fr_1fr] gap-5">
    <div className="rounded-2xl border border-border bg-card p-4 space-y-4"><div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-950"><video ref={video} autoPlay muted playsInline className="h-full w-full object-cover -scale-x-100" aria-label="Mirrored live camera preview" /><div className="absolute inset-0 pointer-events-none flex items-center justify-center"><div className="w-[42%] h-[68%] rounded-[50%] border-2 border-dashed border-white/80" /></div><span className="absolute bottom-3 left-3 text-white text-xs rounded-full bg-black/60 px-3 py-1">{running ? 'Camera on · Nothing is recorded' : 'Your camera is off'}</span></div><div className="flex gap-2"><button onClick={() => void start()} disabled={running || starting} className="rounded-xl bg-primary text-primary-foreground px-4 py-2 font-bold text-sm disabled:opacity-40">{starting ? 'Waiting for camera…' : 'Start camera check'}</button><button onClick={stop} disabled={!running && !starting} className="rounded-xl border border-border px-4 py-2 font-bold text-sm disabled:opacity-40">{starting ? 'Cancel' : 'Stop camera'}</button></div>{error && <p role="alert" className="text-sm text-rose-600">{error}</p>}</div>
    <div className="rounded-2xl border border-border bg-card p-5 space-y-4"><h2 className="text-xl font-bold">Get ready for the official capture</h2><div role="status" className="rounded-xl bg-primary/5 border border-primary/20 p-4"><p className="font-semibold text-sm">{light?.label || 'Start the camera to check lighting'}</p><p className="text-xs text-muted-foreground mt-1">{light ? `Brightness: ${light.average}/255. ${light.uneven ? 'Uneven light: move a lamp in front of you.' : 'Light is reasonably even across the frame.'}` : 'The guide is a visual aid. We do not detect your face or assess exam eligibility.'}</p></div>{['My face fits inside the guide and my eyes face the lens', 'My background is plain and my face has no harsh shadows', 'I checked my exam’s rules for glasses, headwear, and live capture'].map((label, i) => <label key={label} className="flex gap-3 p-3 border border-border rounded-xl text-sm"><input type="checkbox" checked={checks[i]} onChange={e => setChecks(current => current.map((v, j) => i === j ? e.target.checked : v))} /><span>{label}</span></label>)}<p className="text-xs text-muted-foreground">Camera access starts only after you click. Audio is never requested. Stop the camera here before opening the official portal; switching away also stops it.</p><a href="https://ssc.gov.in/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary">Open official SSC portal →</a></div>
  </section>;
}
