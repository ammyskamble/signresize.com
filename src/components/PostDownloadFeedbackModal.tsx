import React, { useState, useEffect } from 'react';
import { Smile, Meh, Frown, X, Check, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { newFeedbackDraft, saveFeedback, type FeedbackDraft } from '../utils/visitorFeedback';

interface Props {
  downloaded: boolean;
  tool: string;
  forceOpen?: boolean;
  onClose?: () => void;
}

export default function PostDownloadFeedbackModal({ downloaded, tool, forceOpen, onClose }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState<'good' | 'okay' | 'difficult' | null>(null);
  const [comment, setComment] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [draft, setDraft] = useState<FeedbackDraft | null>(null);

  // Suggested tags based on sentiment
  const positiveTags = ['Accurate KB size', 'Fast & Easy', 'Saved my application', 'Need another exam preset'];
  const negativeTags = ['Wrong KB size', 'Cropping was hard', 'Portal rejected file', 'Mobile layout issue'];

  useEffect(() => {
    // Check if user forced open (for preview/testing)
    if (forceOpen) {
      setDraft(newFeedbackDraft());
      setIsOpen(true);
      return;
    }

    // Check dev preview query param
    const urlParams = new URLSearchParams(window.location.search);
    const previewOptionA = urlParams.get('feedback') === 'a' || urlParams.get('preview') === 'option-a';
    if (previewOptionA) {
      setDraft(newFeedbackDraft());
      setIsOpen(true);
      return;
    }

    // Trigger on actual download
    if (downloaded) {
      // Check session capping
      const isDismissed = sessionStorage.getItem('signresize-download-feedback-dismissed') === '1';
      if (!isDismissed) {
        setDraft(newFeedbackDraft());
        // 900ms delay so native browser file download triggers smoothly first
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 900);
        return () => clearTimeout(timer);
      }
    }
  }, [downloaded, forceOpen]);

  const handleRatingSelect = async (selected: 'good' | 'okay' | 'difficult') => {
    setRating(selected);
    // Instant background save of rating
    if (draft) {
      try {
        await saveFeedback(draft, {
          kind: selected === 'difficult' ? 'problem' : 'experience',
          rating: selected,
          tool: tool || 'Online Tool',
          source: 'download-popup-option-a'
        });
      } catch (e) {
        // Silent fail for background rating
      }
    }
  };

  const handleTagToggle = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
      if (!comment) {
        setComment(tag);
      }
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!draft || !rating) return;

    setIsSubmitting(true);
    const finalMessage = [selectedTag, comment].filter(Boolean).join(' - ');

    try {
      await saveFeedback(draft, {
        kind: rating === 'difficult' ? 'problem' : 'suggestion',
        rating,
        message: finalMessage,
        tool: tool || 'Online Tool',
        source: 'download-popup-option-a'
      });
      setIsSubmitted(true);
      sessionStorage.setItem('signresize-download-feedback-dismissed', '1');
      setTimeout(() => {
        handleDismiss();
      }, 2200);
    } catch (err) {
      setIsSubmitted(true);
      setTimeout(() => {
        handleDismiss();
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem('signresize-download-feedback-dismissed', '1');
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleDismiss();
      }}
    >
      <div className="relative w-full max-w-md rounded-2xl bg-card border border-border/80 shadow-2xl p-5 sm:p-6 text-foreground overflow-hidden space-y-4">
        {/* Subtle decorative glow */}
        <div className="absolute -top-12 -right-12 w-28 h-28 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close button */}
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute top-3.5 right-3.5 p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/80 transition cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header with celebration badge */}
            <div className="space-y-1.5 pr-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold border border-emerald-500/20">
                <Check className="w-3 h-3" />
                <span>Downloaded Successfully</span>
              </div>
              <h3 id="feedback-modal-title" className="text-lg font-bold text-foreground tracking-tight">
                How did SignResize work for you?
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Your quick review helps us improve specifications and keep portal presets accurate.
              </p>
            </div>

            {/* 3 Emoji Rating Selection */}
            <div className="grid grid-cols-3 gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => handleRatingSelect('good')}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition text-center cursor-pointer ${
                  rating === 'good'
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold shadow-xs'
                    : 'border-border bg-card/60 hover:bg-muted/50 text-foreground'
                }`}
              >
                <Smile className="w-7 h-7 text-emerald-500" />
                <span className="text-xs font-semibold">Perfect</span>
                <span className="text-[10px] text-muted-foreground">Ready to upload</span>
              </button>

              <button
                type="button"
                onClick={() => handleRatingSelect('okay')}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition text-center cursor-pointer ${
                  rating === 'okay'
                    ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold shadow-xs'
                    : 'border-border bg-card/60 hover:bg-muted/50 text-foreground'
                }`}
              >
                <Meh className="w-7 h-7 text-amber-500" />
                <span className="text-xs font-semibold">Just Okay</span>
                <span className="text-[10px] text-muted-foreground">Needed tweaks</span>
              </button>

              <button
                type="button"
                onClick={() => handleRatingSelect('difficult')}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition text-center cursor-pointer ${
                  rating === 'difficult'
                    ? 'border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold shadow-xs'
                    : 'border-border bg-card/60 hover:bg-muted/50 text-foreground'
                }`}
              >
                <Frown className="w-7 h-7 text-rose-500" />
                <span className="text-xs font-semibold">Had Issues</span>
                <span className="text-[10px] text-muted-foreground">Got stuck</span>
              </button>
            </div>

            {/* Dynamic Step 2: Once rating is picked */}
            {rating && (
              <form onSubmit={handleSubmit} className="space-y-3 pt-2 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="space-y-1.5">
                  <label htmlFor="modal-comment" className="text-xs font-semibold text-foreground flex items-center justify-between">
                    <span>
                      {rating === 'difficult'
                        ? 'Where did you get stuck?'
                        : 'Any suggestions or exam presets we should add?'}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-normal">Optional</span>
                  </label>

                  {/* Quick Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {(rating === 'difficult' ? negativeTags : positiveTags).map((tag) => (
                      <button
                        type="button"
                        key={tag}
                        onClick={() => handleTagToggle(tag)}
                        className={`text-[11px] px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                          selectedTag === tag
                            ? 'bg-primary text-primary-foreground border-primary font-semibold'
                            : 'bg-muted/50 hover:bg-muted border-border text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <textarea
                    id="modal-comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={2}
                    maxLength={500}
                    placeholder={
                      rating === 'difficult'
                        ? 'e.g., File size was too large, signature was blurry...'
                        : 'e.g., Please add WBPSC Clerkship photo preset, loved the crop tool...'
                    }
                    className="w-full text-xs p-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/40 resize-none mt-1"
                  />
                </div>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <button
                    type="button"
                    onClick={handleDismiss}
                    className="text-xs text-muted-foreground hover:text-foreground transition cursor-pointer"
                  >
                    Skip &amp; Close
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-95 shadow-sm transition disabled:opacity-50 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Sending…' : 'Submit Feedback'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            {!rating && (
              <div className="flex items-center justify-between pt-1 text-[11px] text-muted-foreground">
                <span>Select a rating above</span>
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="hover:text-foreground transition cursor-pointer"
                >
                  Maybe later
                </button>
              </div>
            )}
          </>
        ) : (
          /* Thank You Celebration Screen */
          <div className="py-6 text-center space-y-3 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 shadow-xs">
              <Check className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-foreground">Thank you for sharing!</h3>
              <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                Your suggestion has been recorded directly to the developer queue to improve SignResize.
              </p>
            </div>
            <button
              type="button"
              onClick={handleDismiss}
              className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-muted text-foreground text-xs font-semibold hover:bg-muted/80 transition cursor-pointer"
            >
              Back to Tool
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
