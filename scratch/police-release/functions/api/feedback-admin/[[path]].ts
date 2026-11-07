import { adminLogin, adminLogout, adminUpdate, exportFeedback, json, listFeedback, RequestError, route, validAdmin, type FeedbackContext } from '../../../server/feedback';

export const onRequest = (context: FeedbackContext) => route(context, async () => {
  const parts = Array.isArray(context.params.path) ? context.params.path : [context.params.path || ''];
  const action = parts[0];
  const method = context.request.method;
  if (action === 'login' && method === 'POST') return adminLogin(context);
  if (action === 'logout' && method === 'POST') return adminLogout(context);
  if (!await validAdmin(context)) throw new RequestError(401, 'Please sign in to view feedback.');
  if (action === 'session' && method === 'GET') return json({ authenticated: true });
  if (action === 'records' && method === 'GET' && parts.length === 1) return listFeedback(context);
  if (action === 'records' && method === 'PATCH' && parts.length === 2) return adminUpdate(context, parts[1]);
  if (action === 'export' && method === 'GET') return exportFeedback(context);
  return json({ error: 'Not found.' }, 404);
});
