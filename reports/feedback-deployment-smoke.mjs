import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
const base = process.argv[2] || 'https://signresize.in';
assert.ok(['https://signresize.in', 'https://signresize.pages.dev'].includes(base));
const password = fs.readFileSync('.dev.vars', 'utf8').match(/^FEEDBACK_ADMIN_PASSWORD=(.+)$/m)[1].trim();
const id = crypto.randomUUID();
const token = crypto.randomBytes(32).toString('base64url');
const payload = { id, token, kind: 'experience', rating: 'good', message: '', email: '', category: '', page: '/', tool: 'Deployment verification', device: 'desktop', version: 'deployment-verification', source: 'widget' };
const request = (path, method = 'GET', body, cookie = '') => fetch(base + path, { method, signal: AbortSignal.timeout(20000), headers: { Origin: base, 'Content-Type': 'application/json', ...(cookie ? { Cookie: cookie } : {}) }, ...(body === undefined ? {} : { body: JSON.stringify(body) }) });
let created = false;
try {
  assert.equal((await request('/api/feedback-admin/records/')).status, 401);
  let response = await request('/api/feedback/', 'POST', payload);
  assert.equal(response.status, 201, await response.text()); created = true;
  response = await request(`/api/feedback/${id}/`, 'PATCH', { ...payload, message: 'Deployment verification: persistent rating and follow-up.' });
  assert.equal(response.status, 200, await response.text());
  response = await request('/api/feedback-admin/login/', 'POST', { password });
  assert.equal(response.status, 200, await response.text());
  assert.match(response.headers.get('set-cookie'), /Secure/);
  const cookie = response.headers.get('set-cookie').split(';')[0];
  response = await request(`/api/feedback-admin/records/?days=all&q=${id}`, 'GET', undefined, cookie);
  const inbox = await response.json();
  assert.equal(inbox.summary.total, 1); assert.equal(inbox.records[0].message, 'Deployment verification: persistent rating and follow-up.');
  assert.equal((await request(`/api/feedback-admin/records/${id}/`, 'PATCH', { status: 'fixed', notes: 'Deployment verification complete.' }, cookie)).status, 200);
  const csv = await (await request(`/api/feedback-admin/export/?days=all&q=${id}`, 'GET', undefined, cookie)).text();
  assert.ok(csv.includes('Deployment verification complete.'));
  assert.equal((await request('/api/feedback-admin/logout/', 'POST', undefined, cookie)).status, 200);
  console.log('PASS: live database create/update, protected inbox, secure login, review status, CSV export and logout.');
} finally {
  if (created) {
    const result = spawnSync(process.execPath, ['node_modules/wrangler/bin/wrangler.js', 'd1', 'execute', 'signresize-feedback', '--remote', '--command', `DELETE FROM feedback WHERE id = '${id}' AND version = 'deployment-verification'`], { encoding: 'utf8', windowsHide: true });
    if (result.status !== 0) { console.error(`Could not remove verification record ${id}.`); throw new Error(result.stdout + result.stderr); }
    console.log('Removed only the synthetic deployment verification record.');
  }
}
