import { saveBackgroundTransfer, takeBackgroundTransfer, TRANSFER_TTL } from '../src/utils/backgroundTransfer';
const output = document.querySelector('pre')!;
const log = (message: string) => { output.textContent += `${message}\n`; };
function assert(ok: unknown, message: string): asserts ok { if (!ok) throw new Error(message); }
async function rejects(action: () => Promise<unknown>, pattern: RegExp) {
  try { await action(); } catch (e) { assert(pattern.test(String(e)), String(e)); return; }
  throw new Error('Expected rejection');
}
const canvas = document.createElement('canvas'); canvas.width = 900; canvas.height = 360;
const ctx = canvas.getContext('2d')!;
ctx.fillStyle = '#163b81'; ctx.lineWidth = 5; ctx.strokeStyle = '#163b81';
ctx.beginPath(); ctx.moveTo(100, 240); ctx.bezierCurveTo(400, 20, 180, 340, 500, 170); ctx.bezierCurveTo(600, 260, 620, 100, 800, 180); ctx.stroke();
const blob = await new Promise<Blob>(resolve => canvas.toBlob(b => resolve(b!)));
const idFrom = (url: string) => url.split('=')[1];
async function changeDate(id: string, value: number) {
  await new Promise<void>((resolve, reject) => {
    const request = indexedDB.open('signresize-background-transfer', 1);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result, tx = db.transaction('images', 'readwrite'), store = tx.objectStore('images');
      const get = store.get(id); get.onsuccess = () => store.put({ ...get.result, createdAt: value });
      tx.oncomplete = () => { db.close(); resolve(); }; tx.onerror = () => { db.close(); reject(tx.error); };
    };
  });
}
try {
  for (const [mode, path] of [['signature', '/'], ['photo', '/photo-resizer/'], ['document', '/document-resizer/']] as const) {
    const url = await saveBackgroundTransfer(blob, mode);
    assert(url.startsWith(`${path}#background-edit=`), 'Incorrect destination');
    const received = await takeBackgroundTransfer(idFrom(url));
    assert(received.mode === mode && received.blob.size === blob.size, 'Transfer lost mode or bytes');
    assert(await received.blob.text() === await blob.text(), 'Transfer altered blob');
    await rejects(() => takeBackgroundTransfer(idFrom(url)), /expired|already opened/);
  }
  log('PASS: signature, photo and document routing; exact blob retention; one-use deletion.');
  for (const date of [Date.now() - TRANSFER_TTL - 1000, Date.now() + TRANSFER_TTL, NaN]) {
    const id = idFrom(await saveBackgroundTransfer(blob, 'signature'));
    await changeDate(id, date); await rejects(() => takeBackgroundTransfer(id), /expired/);
  }
  log('PASS: expired, future and malformed timestamps rejected.');
  await rejects(() => takeBackgroundTransfer('bad-token'), /invalid/);
  await rejects(() => saveBackgroundTransfer(new Blob([], { type: 'image/png' }), 'photo'), /15 MB/);
  await rejects(() => saveBackgroundTransfer(new Blob(['wrong'], { type: 'image/jpeg' }), 'photo'), /15 MB/);
  await rejects(() => saveBackgroundTransfer(new Blob([new Uint8Array(15 * 1024 * 1024 + 1)], { type: 'image/png' }), 'photo'), /15 MB/);
  log('PASS: malformed tokens, empty blobs, wrong formats and oversized transfers rejected.');
  const racing = idFrom(await saveBackgroundTransfer(blob, 'signature'));
  const race = await Promise.allSettled([takeBackgroundTransfer(racing), takeBackgroundTransfer(racing)]);
  assert(race.filter(r => r.status === 'fulfilled').length === 1, 'Concurrent reads must consume once');
  log('PASS: concurrent reads consume a transfer once.');
  log('ALL TRANSFER CHECKS PASSED');
  for (const mode of ['signature', 'photo', 'document'] as const) {
    const button = document.createElement('button'); button.textContent = `Test ${mode} handoff`;
    button.onclick = async () => { location.href = await saveBackgroundTransfer(blob, mode); };
    document.body.append(button);
  }
} catch (e) { log(`FAIL: ${String(e)}`); }
