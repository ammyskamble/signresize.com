import fs from 'node:fs';
import crypto from 'node:crypto';

const varsPath = '.dev.vars';
let contents = fs.existsSync(varsPath) ? fs.readFileSync(varsPath, 'utf8') : '';
const existing = name => contents.match(new RegExp(`^${name}=(.+)$`, 'm'))?.[1]?.trim().replace(/^"|"$/g, '');
const password = existing('FEEDBACK_ADMIN_PASSWORD') || crypto.randomBytes(24).toString('base64url');
const secret = existing('FEEDBACK_SECRET') || crypto.randomBytes(48).toString('base64url');
for (const [name, value] of Object.entries({ FEEDBACK_ADMIN_PASSWORD: password, FEEDBACK_SECRET: secret })) {
  if (!existing(name)) contents += `\n${name}=${value}\n`;
}
fs.writeFileSync(varsPath, contents, { mode: 0o600 });
fs.mkdirSync('scratch', { recursive: true });
fs.writeFileSync('scratch/feedback-admin-access.txt', `SignResize feedback dashboard\n\nURL: https://signresize.in/feedback-admin/\nAdministrator password: ${password}\n\nKeep this file private. It is ignored by Git and is not part of the deployed website.\nThe password is stored as a Cloudflare secret. To rotate it, edit FEEDBACK_ADMIN_PASSWORD in .dev.vars, run wrangler pages secret bulk .dev.vars --project-name signresize, and regenerate this file. Rotate FEEDBACK_SECRET too to invalidate all sessions.\n`, { mode: 0o600 });
console.log('Feedback credentials prepared in ignored local files. Secret values were not printed.');
