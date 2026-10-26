declare const __SIGNRESIZE_RELEASE__: string;

export interface FeedbackFields {
  kind: string;
  rating: string;
  category?: string;
  message?: string;
  email?: string;
  tool: string;
  source?: string;
}

export interface FeedbackDraft {
  id: string;
  token: string;
  saved: boolean;
  pending?: Promise<void>;
}

export function newFeedbackDraft(): FeedbackDraft {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  const token = btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  return { id: crypto.randomUUID(), token, saved: false };
}

export function saveFeedback(draft: FeedbackDraft, fields: FeedbackFields) {
  const payload = {
    ...fields, id: draft.id, token: draft.token,
    page: location.pathname,
    device: matchMedia('(max-width: 640px)').matches ? 'mobile' : 'desktop',
    version: __SIGNRESIZE_RELEASE__,
  };
  const send = async (method: string) => {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(method === 'POST' ? '/api/feedback/' : `/api/feedback/${draft.id}/`, {
        method, credentials: 'same-origin', cache: 'no-store', signal: controller.signal,
        headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) throw new Error(data.error || 'Could not send feedback. Please try again.');
      return response;
    } finally { window.clearTimeout(timer); }
  };
  const pending = (draft.pending || Promise.resolve()).catch(() => {}).then(async () => {
    const creating = !draft.saved;
    const response = await send(creating ? 'POST' : 'PATCH');
    draft.saved = true;
    // A retried create can find a record already saved before a connection dropped.
    if (creating && response.status === 200) await send('PATCH');
  });
  draft.pending = pending;
  return pending;
}
