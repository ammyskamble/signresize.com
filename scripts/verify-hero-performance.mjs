import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { transform } from 'esbuild';

const page = fs.readFileSync('src/pages/index.astro', 'utf8');
const script = page.match(/<script>\s*([\s\S]*?)<\/script>/)?.[1];
assert.ok(script, 'Hero control script exists');
const code = (await transform(script, { loader: 'ts', target: 'es2022' })).code;
const buttonEvents = {};
const documentEvents = {};
const preferenceEvents = {};
const attributes = {};
const art = { dataset: {} };
const button = { setAttribute: (name, value) => attributes[name] = value, addEventListener: (name, callback) => buttonEvents[name] = callback };
const preference = { matches: false, addEventListener: (name, callback) => preferenceEvents[name] = callback };
let intersection;
const document = {
  hidden: false,
  getElementById: () => button,
  querySelector: () => art,
  addEventListener: (name, callback) => documentEvents[name] = callback,
};
vm.runInNewContext(code, {
  document,
  window: { matchMedia: () => preference },
  IntersectionObserver: class { constructor(callback) { intersection = callback; } observe() {} },
});
assert.equal(art.dataset.motionRunning, 'false', 'Paused until visibility is known');
intersection([{ isIntersecting: true }]);
assert.equal(art.dataset.motionRunning, 'true', 'Runs when visible');
intersection([{ isIntersecting: false }]);
assert.equal(art.dataset.motionRunning, 'false', 'Off-screen animation stops');
intersection([{ isIntersecting: true }]);
document.hidden = true;
documentEvents.visibilitychange();
assert.equal(art.dataset.motionRunning, 'false', 'Hidden browser tab stops animation');
document.hidden = false;
documentEvents.visibilitychange();
assert.equal(art.dataset.motionRunning, 'true');
buttonEvents.click();
intersection([{ isIntersecting: false }]);
intersection([{ isIntersecting: true }]);
assert.equal(art.dataset.motionRunning, 'false', 'Manual pause survives scrolling');
assert.equal(attributes['aria-label'], 'Resume hero animation');
buttonEvents.click();
assert.equal(art.dataset.motionRunning, 'true');
preference.matches = true;
preferenceEvents.change();
assert.equal(art.dataset.motionRunning, 'false', 'Live reduced-motion preference stops animation');
preference.matches = false;
preferenceEvents.change();
assert.equal(art.dataset.motionRunning, 'true');
console.log('PASS: visible/off-screen, hidden-tab, manual pause persistence and reduced-motion transitions.');
