/* Runs on demand in a classic worker so inference never blocks the studio. */
self.onmessage = async ({ data: { image, background: fill = '#ffffff', edge = 0 } }) => {
  let segmenter;
  try {
    if (image.width * image.height > 20_000_000) throw new Error('Use an image below 20 megapixels.');
    importScripts('/vendor/mediapipe-0.10.32/vision_bundle.js');
    const files = await vision.FilesetResolver.forVisionTasks('/vendor/mediapipe-0.10.32/wasm');
    segmenter = await vision.ImageSegmenter.createFromOptions(files, {
      baseOptions: { modelAssetPath: '/models/selfie-multiclass-256-v1.tflite', delegate: 'CPU' },
      runningMode: 'IMAGE', outputCategoryMask: false, outputConfidenceMasks: true,
    });
    self.postMessage({ status: 'Separating the portrait and refining its edges…' });
    // Bound inference/compositing memory. The final canvas retains source dimensions.
    const scale = Math.min(1, 1600 / Math.max(image.width, image.height));
    const input = new OffscreenCanvas(Math.round(image.width * scale), Math.round(image.height * scale));
    input.getContext('2d').drawImage(image, 0, 0, input.width, input.height);
    const result = segmenter.segment(input);
    try {
      const background = result.confidenceMasks?.[0];
      if (!background) throw new Error('No portrait mask returned. Please try a clearer photo.');
      const confidence = background.getAsFloat32Array();
      const mask = new OffscreenCanvas(background.width, background.height);
      const maskContext = mask.getContext('2d');
      const pixels = maskContext.createImageData(mask.width, mask.height);
      let foreground = 0;
      for (let i = 0; i < confidence.length; i++) {
        const probability = 1 - confidence[i];
        if (probability > .5) foreground++;
        // Keep uncertain boundary pixels soft instead of cutting hard edges.
        const shift = Math.max(-.15, Math.min(.15, Number(edge) / 100));
        const t = Math.max(0, Math.min(1, (probability - .1 - shift) / .8));
        pixels.data[i * 4 + 3] = Math.round(255 * t * t * (3 - 2 * t));
      }
      if (foreground / confidence.length < .015 || foreground / confidence.length > .98) {
        throw new Error('Could not confidently separate a person. Try a clearer head-and-shoulders photo.');
      }
      maskContext.putImageData(pixels, 0, 0);
      const canvas = new OffscreenCanvas(image.width, image.height);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);
      ctx.globalCompositeOperation = 'destination-in';
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(mask, 0, 0, canvas.width, canvas.height);
      if (fill !== 'transparent') {
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = /^#[0-9a-f]{6}$/i.test(fill) ? fill : '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      self.postMessage({ blob: await canvas.convertToBlob({ type: 'image/png' }) });
    } finally { result.close(); }
  } catch (error) {
    self.postMessage({ error: error instanceof Error ? error.message : 'Background removal failed. Please retry.' });
  } finally { image.close(); segmenter?.close(); }
};
