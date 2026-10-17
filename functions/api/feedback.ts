import { createFeedback, json, route, type FeedbackContext } from '../../server/feedback';

export const onRequest = (context: FeedbackContext) => route(context, () => context.request.method === 'POST' ? createFeedback(context) : Promise.resolve(json({ error: 'Method not allowed.' }, 405, { Allow: 'POST' })));
