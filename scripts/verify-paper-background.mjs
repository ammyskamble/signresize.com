import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const context = { self: {}, Math, Map, Number, Error };
vm.runInNewContext(fs.readFileSync('public/workers/paper-background-v1.js', 'utf8'), context);
for (const paper of [[225, 225, 225], [230, 211, 172], [160, 200, 225]]) {
  const pixels = new Uint8ClampedArray(5 * 5 * 4);
  for (let i = 0; i < pixels.length; i += 4) pixels.set([...paper, 255], i);
  const inks = [[20, 20, 20, 255], [20, 40, 145, 255], [160, 20, 35, 255]];
  inks.forEach((ink, index) => pixels.set(ink, (11 + index) * 4));
  pixels.set([0, 0, 0, 0], 6 * 4);
  context.whitenPaper(pixels, 5, 5, 48);
  assert.deepEqual([...pixels.slice(0, 4)], [255, 255, 255, 255], 'Paper becomes pure white');
  assert.deepEqual([...pixels.slice(6 * 4, 7 * 4)], [255, 255, 255, 255], 'Transparency is flattened to white');
  inks.forEach((ink, index) => assert.deepEqual([...pixels.slice((11 + index) * 4, (12 + index) * 4)], ink, 'Dark text and coloured ink retained'));
}
const dark = new Uint8ClampedArray(36).fill(10);
for (let i = 3; i < dark.length; i += 4) dark[i] = 255;
assert.throws(() => context.whitenPaper(dark, 3, 3), /No clear paper/, 'Ambiguous dark scans are not altered');
// A photographed sheet with a substantial gradual lighting change and blue strokes.
const width = 600, height = 240;
const shaded = new Uint8ClampedArray(width * height * 4);
for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
  const light = 145 + 100 * x / (width - 1);
  shaded.set(y === 120 && x > 40 && x < 560 ? [20, 40, 105, 255] : [light, light - 8, light - 20, 255], (y * width + x) * 4);
}
const transparent = shaded.slice();
context.whitenPaper(shaded, width, height, 48);
for (const x of [0, 100, 300, 500, 599]) {
  assert.deepEqual([...shaded.slice((80 * width + x) * 4, (80 * width + x) * 4 + 4)], [255, 255, 255, 255], 'Local shadows become white across the sheet');
}
assert.deepEqual([...shaded.slice((120 * width + 200) * 4, (120 * width + 200) * 4 + 4)], [20, 40, 105, 255], 'Blue stroke survives lighting correction');
context.whitenPaper(transparent, width, height, 48, { background: 'transparent' });
assert.equal(transparent[3], 0, 'Paper is transparent in PNG mode');
assert.equal(transparent[(120 * width + 200) * 4 + 3], 255, 'Ink remains opaque');
const custom = new Uint8ClampedArray(100).fill(225);
for (let i = 3; i < custom.length; i += 4) custom[i] = 255;
context.whitenPaper(custom, 5, 5, 48, { background: '#ccddff' });
assert.deepEqual([...custom.slice(0, 4)], [204, 221, 255, 255]);
const cutout = new Uint8ClampedArray(100);
cutout.set([20, 40, 100, 255], 48);
context.whitenPaper(cutout, 5, 5);
assert.deepEqual([...cutout.slice(0, 4)], [255, 255, 255, 255], 'Existing transparent PNG can become white');
assert.deepEqual([...cutout.slice(48, 52)], [20, 40, 100, 255], 'Existing cutout ink is not extracted twice');
// Dark warm paper, grey ruling, a blue signature and unrelated marks near the top.
const ruledWidth = 400, ruledHeight = 240;
const ruled = new Uint8ClampedArray(ruledWidth * ruledHeight * 4);
for (let y = 0; y < ruledHeight; y++) for (let x = 0; x < ruledWidth; x++) {
  const paper = x < 200 ? [200, 190, 175] : [65, 60, 50];
  const greyLine = y === 60 || y === 120 || y === 200;
  const blueStroke = (x >= 120 && x <= 200 && y >= 130 && y <= 134) || (x >= 150 && x <= 154 && y >= 95 && y <= 134) || (x >= 20 && x <= 25 && y < 5);
  const colour = blueStroke ? [20, 25, 105] : greyLine ? paper.map(v => v * .35) : paper;
  ruled.set([...colour, 255], (y * ruledWidth + x) * 4);
}
const allInk = ruled.slice(), blueInk = ruled.slice();
context.whitenPaper(allInk, ruledWidth, ruledHeight, 48);
assert.deepEqual([...allInk.slice((170 * ruledWidth + 350) * 4, (170 * ruledWidth + 350) * 4 + 4)], [255, 255, 255, 255], 'Deep shadow below 70 must not become opaque foreground');
assert.ok(allInk[(120 * ruledWidth + 300) * 4] < 250, 'All ink retains grey lines for documents');
context.whitenPaper(blueInk, ruledWidth, ruledHeight, 48, { ink: 'blue', mainSignature: true });
assert.deepEqual([...blueInk.slice((120 * ruledWidth + 300) * 4, (120 * ruledWidth + 300) * 4 + 4)], [255, 255, 255, 255], 'Blue selection removes grey ruling');
assert.equal(blueInk[(2 * ruledWidth + 22) * 4], 255, 'Main signature option removes disconnected top marks');
assert.ok(blueInk[(132 * ruledWidth + 150) * 4] < 100, 'Main signature strokes remain');
assert.ok(blueInk[(100 * ruledWidth + 152) * 4] < 100, 'Ascending strokes remain');
const neutral = new Uint8ClampedArray(100).fill(200);
for (let i = 3; i < neutral.length; i += 4) neutral[i] = 255;
assert.throws(() => context.whitenPaper(neutral, 5, 5, 48, { ink: 'blue' }), /No blue/, 'Wrong ink setting reports an error instead of a blank export');
let closed = false, response;
context.self.postMessage = value => { response = value; };
await context.self.onmessage({ data: { image: { width: 6000, height: 6000, close() { closed = true; } } } });
assert.match(response.error, /too large/);
assert.ok(closed, 'Large-image refusal releases bitmap');
console.log('PASS: white/coloured paper removal, dark and coloured ink preservation, unclear-paper refusal, large-image bounds and cleanup.');
