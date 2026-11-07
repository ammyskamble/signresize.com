import { useEffect, useState } from 'react';
import { MessageSquare, Smile, Meh, Frown, X } from 'lucide-react';
import '../styles/visitor-feedback.css';

interface Props { downloaded: boolean; tool: string; }

export default function FeedbackPrompt({ downloaded, tool }: Props) {
  const [dismissed, setDismissed] = useState(false);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    const ratingPreview = import.meta.env.DEV && new URLSearchParams(window.location.search).get('feedback') === 'rating';
    setPreview(ratingPreview);
    if (!ratingPreview) {
      try { setDismissed(sessionStorage.getItem('signresize-feedback-dismissed') === '1'); } catch {}
    }
    const onSaved = () => setDismissed(true);
    window.addEventListener('visitor-feedback-saved', onSaved);
    return () => window.removeEventListener('visitor-feedback-saved', onSaved);
  }, []);

  function open(kind: string, rating?: string) {
    window.dispatchEvent(new CustomEvent('open-visitor-feedback', { detail: { kind, rating, tool, source: rating ? 'download' : 'widget' } }));
  }

  function dismiss() {
    setDismissed(true);
    try { sessionStorage.setItem('signresize-feedback-dismissed', '1'); } catch {}
  }

  return <div className="visitor-feedback-inline">
    {(downloaded || preview) && !dismissed && <section className="vf-rating-card" aria-label="Rate your experience">
      <button type="button" className="vf-rating-dismiss" aria-label="Dismiss feedback question" onClick={dismiss}><X size={14} /></button>
      <span className="vf-rating-eyebrow">ONE QUICK QUESTION</span>
      <p>How was your experience?</p>
      <div className="vf-inline-ratings">
        {([{ value: 'good', label: 'Good', Icon: Smile }, { value: 'okay', label: 'Okay', Icon: Meh }, { value: 'difficult', label: 'Difficult', Icon: Frown }]).map(({ value, label, Icon }) =>
          <button type="button" key={value} onClick={() => open(value === 'difficult' ? 'problem' : 'experience', value)}><Icon size={23} /><span>{label}</span></button>)}
      </div>
    </section>}
    <div className="vf-inline-links">
      <button type="button" onClick={() => open('problem')}><MessageSquare size={13} />Report a problem</button>
      <span aria-hidden="true">·</span>
      <button type="button" onClick={() => open('suggestion')}>Suggest an improvement</button>
    </div>
  </div>;
}
