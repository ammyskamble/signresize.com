import { mkdir, cp, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { build } from 'esbuild';

const destination = 'public/vendor/mediapipe-0.10.32';
const model = await readFile('public/models/selfie-multiclass-256-v1.tflite');
if (createHash('sha256').update(model).digest('hex') !== 'c6748b1253a99067ef71f7e26ca71096cd449baefa8f101900ea23016507e0e0') {
  throw new Error('Portrait model is incomplete or has changed. Restore the pinned model before building.');
}
await mkdir(destination, { recursive: true });
await cp('node_modules/@mediapipe/tasks-vision/wasm', `${destination}/wasm`, { recursive: true });
await build({
  stdin: { contents: "export { FilesetResolver, ImageSegmenter } from '@mediapipe/tasks-vision';", resolveDir: process.cwd() },
  bundle: true, format: 'iife', globalName: 'vision', minify: true,
  outfile: `${destination}/vision_bundle.js`, legalComments: 'eof',
});
console.log('Prepared on-demand portrait segmentation runtime.');
