export type FeedbackContext = {
  request: Request;
  env: Cloudflare.ProductionEnv;
  params: Record<string, string | string[]>;
  waitUntil(promise: Promise<unknown>): void;
};

export class RequestError extends Error {
  constructor(public status: number, message: string) { super(message); }
}

const encoder = new TextEncoder();
const COOKIE = 'signresize_feedback_admin';
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const STATUSES = ['new', 'investigating', 'fixed'];
export const KINDS = ['experience', 'problem', 'suggestion'];
export const RATINGS = ['', 'good', 'okay', 'difficult'];

export function json(data: unknown, status = 200, extra: HeadersInit = {}) {
  const headers = new Headers(extra);
  headers.set('Cache-Control', 'no-store, private');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Robots-Tag', 'noindex, nofollow');
  return Response.json(data, { status, headers });
}

export async function route(context: FeedbackContext, handler: () => Promise<Response>) {
  try {
    if (!context.env.FEEDBACK_DB || !context.env.FEEDBACK_SECRET) throw new RequestError(503, 'Feedback is temporarily unavailable. Please try again later.');
    return await handler();
  } catch (error) {
    if (error instanceof RequestError) return json({ error: error.message }, error.status, error.status === 429 ? { 'Retry-After': '900' } : {});
    // Feedback content, passwords, email addresses and request headers are never logged.
    console.error(JSON.stringify({ event: 'feedback_request_failed', path: new URL(context.request.url).pathname, errorType: error instanceof Error ? error.name : 'unknown' }));
    return json({ error: 'Could not save or load feedback. Please try again.' }, 500);
  }
}

export function sameOrigin(request: Request) {
  const origin = request.headers.get('Origin');
  if (origin !== new URL(request.url).origin) throw new RequestError(403, 'This request must come from this website.');
  const site = request.headers.get('Sec-Fetch-Site');
  if (site && !['same-origin', 'none'].includes(site)) throw new RequestError(403, 'Cross-site requests are not allowed.');
}

export async function readBody(request: Request): Promise<Record<string, unknown>> {
  sameOrigin(request);
  if (!request.headers.get('Content-Type')?.toLowerCase().startsWith('application/json')) throw new RequestError(415, 'JSON is required.');
  if (Number(request.headers.get('Content-Length')) > 8192) throw new RequestError(413, 'The message is too large.');
  const reader = request.body?.getReader();
  if (!reader) throw new RequestError(400, 'A message is required.');
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 8192) { await reader.cancel(); throw new RequestError(413, 'The message is too large.'); }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  let data: unknown;
  try { data = JSON.parse(new TextDecoder().decode(bytes)); } catch { throw new RequestError(400, 'Invalid message.'); }
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new RequestError(400, 'Invalid message.');
  return data as Record<string, unknown>;
}

function text(data: Record<string, unknown>, key: string, max: number, fallback = '') {
  const value = data[key] ?? fallback;
  if (typeof value !== 'string' || value.length > max || /\u0000/.test(value)) throw new RequestError(400, `Invalid ${key}.`);
  return value.trim();
}

export function validId(id: unknown): id is string { return typeof id === 'string' && UUID.test(id); }

export function validToken(value: unknown): value is string { return typeof value === 'string' && /^[A-Za-z0-9_-]{43}$/.test(value); }

export function validateFeedback(data: Record<string, unknown>) {
  const kind = text(data, 'kind', 20);
  const rating = text(data, 'rating', 12);
  if (!KINDS.includes(kind) || !RATINGS.includes(rating)) throw new RequestError(400, 'Choose a valid feedback type and rating.');
  const message = text(data, 'message', 2000);
  const email = text(data, 'email', 254);
  if ((!rating && !message) || (kind === 'suggestion' && !message)) throw new RequestError(400, 'Choose a rating or write a short message.');
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new RequestError(400, 'Please enter a valid email address.');
  const page = text(data, 'page', 300);
  if (!page.startsWith('/') || page.startsWith('//') || /[?#\r\n\\]/.test(page)) throw new RequestError(400, 'Invalid page.');
  const device = text(data, 'device', 10);
  if (!['mobile', 'desktop'].includes(device)) throw new RequestError(400, 'Invalid device.');
  return { kind, rating, message, email, page, device, category: text(data, 'category', 100), tool: text(data, 'tool', 120), version: text(data, 'version', 80), source: ['widget', 'download', 'contact'].includes(String(data.source)) ? String(data.source) : 'widget' };
}

export async function hash(value: string) {
  return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(value))), value => value.toString(16).padStart(2, '0')).join('');
}

async function signingKey(secret: string) {
  return crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}

export async function rateLimit(context: FeedbackContext, action: string, limit: number, seconds = 900) {
  const now = Math.floor(Date.now() / 1000);
  // A keyed digest prevents storing raw IP addresses or reusable cross-day identifiers.
  const ip = context.request.headers.get('CF-Connecting-IP') || 'local';
  const day = Math.floor(now / 86400);
  const key = await hash(`${context.env.FEEDBACK_SECRET}:${action}:${day}:${ip}`);
  const bucket = Math.floor(now / seconds) * seconds;
  const row = await context.env.FEEDBACK_DB.prepare('INSERT INTO feedback_rate_limits (key, bucket, hits) VALUES (?, ?, 1) ON CONFLICT(key, bucket) DO UPDATE SET hits = hits + 1 RETURNING hits').bind(key, bucket).first<{ hits: number }>();
  if (!row || row.hits > limit) throw new RequestError(429, 'Too many requests. Please try again in 15 minutes.');
  if (row.hits === 1) context.waitUntil(context.env.FEEDBACK_DB.prepare('DELETE FROM feedback_rate_limits WHERE bucket < ?').bind(now - 86400).run().catch(() => {}));
}

function browserFamily(request: Request) {
  const ua = request.headers.get('User-Agent') || '';
  if (/Edg\//.test(ua)) return 'Edge';
  if (/Firefox\/|FxiOS\//.test(ua)) return 'Firefox';
  if (/Chrome\/|CriOS\//.test(ua)) return 'Chrome';
  if (/Safari\//.test(ua)) return 'Safari';
  return 'Other';
}

export async function createFeedback(context: FeedbackContext) {
  const data = await readBody(context.request);
  if (data.website) throw new RequestError(400, 'Invalid submission.');
  if (!validId(data.id) || !validToken(data.token)) throw new RequestError(400, 'Invalid feedback identifier.');
  const input = validateFeedback(data);
  await rateLimit(context, 'create', 25);
  const editHash = await hash(data.token);
  const now = new Date().toISOString();
  const expires = new Date(Date.now() + 24 * 3600 * 1000).toISOString();
  const result = await context.env.FEEDBACK_DB.prepare(`INSERT INTO feedback (id, edit_hash, created_at, updated_at, edit_expires_at, kind, rating, category, message, email, page, tool, device, browser, version, source)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(id) DO NOTHING`).bind(data.id, editHash, now, now, expires, input.kind, input.rating, input.category, input.message, input.email, input.page, input.tool, input.device, browserFamily(context.request), input.version, input.source).run();
  if (!result.meta.changes) {
    const existing = await context.env.FEEDBACK_DB.prepare('SELECT id FROM feedback WHERE id = ? AND edit_hash = ?').bind(data.id, editHash).first();
    if (!existing) throw new RequestError(409, 'Could not save this feedback. Please reopen the form.');
  }
  return json({ id: data.id, saved: true }, result.meta.changes ? 201 : 200);
}

export async function updateFeedback(context: FeedbackContext, id: string) {
  const data = await readBody(context.request);
  if (!validId(id) || !validToken(data.token)) throw new RequestError(400, 'Invalid feedback identifier.');
  const input = validateFeedback(data);
  await rateLimit(context, 'update', 100);
  const result = await context.env.FEEDBACK_DB.prepare(`UPDATE feedback SET kind = ?, rating = ?, category = ?, message = ?, email = ?, updated_at = ?
    WHERE id = ? AND edit_hash = ? AND edit_expires_at > ?`).bind(input.kind, input.rating, input.category, input.message, input.email, new Date().toISOString(), id, await hash(data.token), new Date().toISOString()).run();
  if (!result.meta.changes) throw new RequestError(403, 'This feedback can no longer be edited. Please reopen the form.');
  return json({ id, saved: true });
}

export async function validAdmin(context: FeedbackContext) {
  const raw = context.request.headers.get('Cookie')?.split(';').map(value => value.trim()).find(value => value.startsWith(`${COOKIE}=`))?.slice(COOKIE.length + 1);
  if (!raw || raw.length > 200) return false;
  const parts = raw.split('.');
  if (parts.length !== 3 || !/^\d+$/.test(parts[0]) || !/^[0-9a-f]{32}$/.test(parts[1]) || !/^[0-9a-f]{64}$/.test(parts[2])) return false;
  const expiry = Number(parts[0]);
  if (expiry < Date.now() || expiry > Date.now() + 13 * 3600 * 1000) return false;
  const signature = Uint8Array.from(parts[2].match(/../g)!, value => parseInt(value, 16));
  return crypto.subtle.verify('HMAC', await signingKey(context.env.FEEDBACK_SECRET), signature, encoder.encode(`admin:${parts[0]}.${parts[1]}`));
}

export async function adminLogin(context: FeedbackContext) {
  const data = await readBody(context.request);
  await rateLimit(context, 'login', 10);
  const password = text(data, 'password', 200);
  const expected = context.env.FEEDBACK_ADMIN_PASSWORD;
  if (!expected) throw new RequestError(503, 'Administrator login is not configured.');
  const [a, b] = await Promise.all([crypto.subtle.digest('SHA-256', encoder.encode(password)), crypto.subtle.digest('SHA-256', encoder.encode(expected))]);
  if (!crypto.subtle.timingSafeEqual(a, b)) throw new RequestError(401, 'The password is incorrect.');
  const body = `${Date.now() + 12 * 3600 * 1000}.${crypto.randomUUID().replace(/-/g, '')}`;
  const signature = Array.from(new Uint8Array(await crypto.subtle.sign('HMAC', await signingKey(context.env.FEEDBACK_SECRET), encoder.encode(`admin:${body}`))), value => value.toString(16).padStart(2, '0')).join('');
  const secure = new URL(context.request.url).protocol === 'https:' ? '; Secure' : '';
  return json({ authenticated: true }, 200, { 'Set-Cookie': `${COOKIE}=${body}.${signature}; HttpOnly; SameSite=Strict; Path=/api/feedback-admin; Max-Age=43200${secure}` });
}

export function adminLogout(context: FeedbackContext) {
  sameOrigin(context.request);
  const secure = new URL(context.request.url).protocol === 'https:' ? '; Secure' : '';
  return json({ authenticated: false }, 200, { 'Set-Cookie': `${COOKIE}=; HttpOnly; SameSite=Strict; Path=/api/feedback-admin; Max-Age=0${secure}` });
}

export function filters(url: URL) {
  const clauses: string[] = [];
  const bindings: (string | number)[] = [];
  const days = url.searchParams.get('days') || '30';
  if (!['7', '30', '90', '365', 'all'].includes(days)) throw new RequestError(400, 'Invalid date range.');
  if (days !== 'all') { clauses.push('created_at >= ?'); bindings.push(new Date(Date.now() - Number(days) * 86400000).toISOString()); }
  for (const [field, values] of [['kind', KINDS], ['rating', RATINGS.filter(Boolean)], ['status', STATUSES], ['device', ['mobile', 'desktop']]] as const) {
    const value = url.searchParams.get(field);
    if (value) {
      if (!(values as readonly string[]).includes(value)) throw new RequestError(400, `Invalid ${field}.`);
      clauses.push(`${field} = ?`); bindings.push(value);
    }
  }
  for (const field of ['tool', 'version'] as const) {
    const value = url.searchParams.get(field);
    if (value) { if (value.length > 120) throw new RequestError(400, 'Filter too long.'); clauses.push(`${field} = ?`); bindings.push(value); }
  }
  const q = url.searchParams.get('q');
  if (q) {
    if (q.length > 120) throw new RequestError(400, 'Search too long.');
    clauses.push('(id = ? OR instr(lower(message), lower(?)) > 0 OR instr(lower(category), lower(?)) > 0 OR instr(lower(page), lower(?)) > 0)');
    bindings.push(q, q, q, q);
  }
  return { where: clauses.length ? `WHERE ${clauses.join(' AND ')}` : '', bindings };
}

const PUBLIC_COLUMNS = 'id, created_at, updated_at, kind, rating, category, message, email, page, tool, device, browser, version, source, status, notes';

export async function listFeedback(context: FeedbackContext) {
  const url = new URL(context.request.url);
  const { where, bindings } = filters(url);
  const page = Math.min(10000, Math.max(0, Number.parseInt(url.searchParams.get('page') || '0', 10) || 0));
  const results = await context.env.FEEDBACK_DB.batch([
    context.env.FEEDBACK_DB.prepare(`SELECT ${PUBLIC_COLUMNS} FROM feedback ${where} ORDER BY created_at DESC, id DESC LIMIT 50 OFFSET ?`).bind(...bindings, page * 50),
    context.env.FEEDBACK_DB.prepare(`SELECT COUNT(*) AS total, COALESCE(SUM(rating = 'good'), 0) AS good, COALESCE(SUM(rating = 'okay'), 0) AS okay, COALESCE(SUM(rating = 'difficult'), 0) AS difficult, COALESCE(SUM(kind = 'problem'), 0) AS problems FROM feedback ${where}`).bind(...bindings),
    context.env.FEEDBACK_DB.prepare(`SELECT tool, COUNT(*) AS count FROM feedback GROUP BY tool ORDER BY count DESC LIMIT 100`),
    context.env.FEEDBACK_DB.prepare(`SELECT version, COUNT(*) AS count FROM feedback GROUP BY version ORDER BY MAX(created_at) DESC LIMIT 100`),
    context.env.FEEDBACK_DB.prepare(`SELECT substr(created_at, 1, 10) AS date, COUNT(*) AS total, COALESCE(SUM(rating = 'good'), 0) AS good, COALESCE(SUM(rating != ''), 0) AS rated FROM feedback ${where} GROUP BY date ORDER BY date DESC LIMIT 31`).bind(...bindings),
  ]);
  return json({ records: results[0].results, summary: results[1].results[0], tools: results[2].results, versions: results[3].results, trend: results[4].results.reverse(), page, pageSize: 50 });
}

export async function adminUpdate(context: FeedbackContext, id: string) {
  const data = await readBody(context.request);
  if (!validId(id) || !STATUSES.includes(String(data.status))) throw new RequestError(400, 'Invalid record or status.');
  const notes = text(data, 'notes', 2000);
  const result = await context.env.FEEDBACK_DB.prepare('UPDATE feedback SET status = ?, notes = ?, updated_at = ? WHERE id = ?').bind(data.status, notes, new Date().toISOString(), id).run();
  if (!result.meta.changes) throw new RequestError(404, 'Feedback was not found.');
  return json({ saved: true });
}

function csvCell(value: unknown) {
  let text = String(value ?? '');
  if (/^[\s]*[=+@-]/.test(text) || /^[\t\r\n]/.test(text)) text = `'${text}`;
  return `"${text.replace(/"/g, '""')}"`;
}

export async function exportFeedback(context: FeedbackContext) {
  const { where, bindings } = filters(new URL(context.request.url));
  const result = await context.env.FEEDBACK_DB.prepare(`SELECT ${PUBLIC_COLUMNS} FROM feedback ${where} ORDER BY created_at DESC, id DESC LIMIT 5000`).bind(...bindings).all<Record<string, unknown>>();
  const columns = PUBLIC_COLUMNS.split(', ');
  const body = '\uFEFF' + [columns.map(csvCell).join(','), ...result.results.map(row => columns.map(key => csvCell(row[key])).join(','))].join('\r\n');
  return new Response(body, { headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': `attachment; filename="signresize-feedback-${new Date().toISOString().slice(0, 10)}.csv"`, 'Cache-Control': 'no-store, private', 'X-Content-Type-Options': 'nosniff', 'X-Robots-Tag': 'noindex' } });
}
