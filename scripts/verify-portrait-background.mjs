import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const code = fs.readFileSync('public/workers/portrait-background-v1.js', 'utf8');
async function run(confidence, loadFailure = false, options = {}) {
  const events = [], operations = [], alphas = [];
  let bitmapClosed = false, resultClosed = false, modelClosed = false;
  const context = {
    drawImage() { operations.push('draw'); },
    createImageData(w, h) { return { data: new Uint8ClampedArray(w * h * 4) }; },
    putImageData(pixels) { alphas.push(...pixels.data.filter((_, i) => i % 4 === 3)); },
    fillRect() { operations.push(`fill:${this.fillStyle}`); },
    set globalCompositeOperation(value) { operations.push(value); },
  };
  const sandbox = {
    self: { postMessage: data => events.push(data) },
    importScripts() { if (loadFailure) throw Error('Runtime unavailable'); },
    vision: {
      FilesetResolver: { forVisionTasks: async () => ({}) },
      ImageSegmenter: { createFromOptions: async () => ({
        segment: () => ({ confidenceMasks: [{ width: 2, height: 2, getAsFloat32Array: () => confidence }], close: () => { resultClosed = true; } }),
        close: () => { modelClosed = true; },
      }) },
    },
    OffscreenCanvas: class { constructor(w, h) { this.width = w; this.height = h; } getContext() { return context; } async convertToBlob() { return { type: 'image/png' }; } },
    Error,
  };
  vm.runInNewContext(code, sandbox);
  await sandbox.self.onmessage({ data: { ...options, image: { width: 200, height: 300, close() { bitmapClosed = true; } } } });
  return { events, operations, alphas, bitmapClosed, resultClosed, modelClosed };
}
const valid = await run(new Float32Array([1, 0, .5, .2]));
assert.ok(valid.events.some(e => e.blob), 'Valid portrait must produce an image');
assert.deepEqual(valid.alphas.slice(0, 3), [0, 255, 128], 'Background removed, subject preserved, uncertain edges feathered');
assert.ok(valid.operations.indexOf('destination-in') < valid.operations.indexOf('destination-over'));
assert.ok(valid.operations.includes('fill:#ffffff'), 'Transparent region flattened to white');
assert.ok(valid.bitmapClosed && valid.resultClosed && valid.modelClosed, 'Resources released on success');
const transparent = await run(new Float32Array([1, 0, .5, .2]), false, { background: 'transparent' });
assert.ok(!transparent.operations.some(op => op.startsWith('fill:')), 'Transparent output is not flattened');
const coloured = await run(new Float32Array([1, 0, .5, .2]), false, { background: '#aaccee', edge: 10 });
assert.ok(coloured.operations.includes('fill:#aaccee'));
assert.ok(coloured.alphas[2] < valid.alphas[2], 'Positive edge adjustment trims uncertain edges');
const empty = await run(new Float32Array([1, 1, 1, 1]));
assert.ok(empty.events.some(e => e.error), 'Missing portrait must report an error');
assert.ok(!empty.events.some(e => e.blob), 'Bad masks must not replace the original');
assert.ok(empty.bitmapClosed && empty.resultClosed && empty.modelClosed);
const unavailable = await run([], true);
assert.ok(unavailable.events.some(e => e.error) && unavailable.bitmapClosed, 'Runtime failure preserves the source and releases input');
console.log('PASS: white compositing, soft mask edges, no-subject refusal, load failure and worker resource cleanup.');
