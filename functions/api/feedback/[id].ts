import { updateFeedback, json, route, type FeedbackContext } from '../../../server/feedback';

export const onRequest = (context: FeedbackContext) => route(context, () => context.request.method === 'PATCH' ? updateFeedback(context, String(context.params.id)) : Promise.resolve(json({ error: 'Method not allowed.' }, 405, { Allow: 'PATCH' })));
