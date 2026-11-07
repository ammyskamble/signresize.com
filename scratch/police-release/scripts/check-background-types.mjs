import { execFileSync, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

// Compile a temporary HEAD snapshot, leaving the user's sources untouched.
const root = process.cwd(), reports = path.join(root, 'reports');
const temporary = fs.mkdtempSync(path.join(reports, '.background-types-'));
const config = JSON.parse(fs.readFileSync('tsconfig.background.json', 'utf8'));
function diagnostics(project) {
  const result = spawnSync(process.execPath, ['node_modules/typescript/bin/tsc', '-p', project, '--pretty', 'false'], { cwd: root, encoding: 'utf8' });
  if (result.error) throw result.error;
  const output = result.stdout + result.stderr;
  assert.ok(result.status === 0 || /error TS\d+/.test(output), output);
  return output.split(/\r?\n/).filter(line => /error TS\d+/.test(line)).map(line => line.replaceAll('\\', '/').replace(/^.*?src\//, 'src/').replace(/\(\d+,\d+\)/, ''));
}
try {
  const archive = execFileSync('git', ['archive', '--format=tar', 'HEAD', 'src'], { maxBuffer: 40 * 1024 * 1024 });
  execFileSync('tar', ['-xf', '-', '-C', temporary], { input: archive });
  fs.writeFileSync(path.join(temporary, 'tsconfig.json'), JSON.stringify({ ...config, extends: path.join(root, 'tsconfig.json'), include: config.include.filter(file => fs.existsSync(path.join(temporary, file))) }));
  const before = diagnostics(path.join(temporary, 'tsconfig.json'));
  const after = diagnostics('tsconfig.background.json');
  const counts = new Map();
  for (const d of before) counts.set(d, (counts.get(d) || 0) + 1);
  const added = after.filter(d => { const remaining = counts.get(d) || 0; if (remaining) { counts.set(d, remaining - 1); return false; } return true; });
  added.forEach(d => console.error(d));
  assert.equal(added.length, 0, 'New TypeScript diagnostics in background workflow');
  console.log(`PASS: no new TypeScript diagnostics; ${after.length} existing diagnostics remain (${before.length} in HEAD).`);
} finally {
  assert.ok(path.resolve(temporary).startsWith(path.resolve(reports) + path.sep) && path.basename(temporary).startsWith('.background-types-'));
  fs.rmSync(temporary, { recursive: true, force: true });
}
