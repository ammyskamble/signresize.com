/* Paper cleanup only: do not use a portrait segmentation mask on text or ink. */
function whitenPaper(data, width, height, strength = 48, options = {}) {
  const bins = new Map();
  let borderSamples = 0, transparentSamples = 0;
  const fill = /^#[0-9a-f]{6}$/i.test(options.background || '') ? options.background.match(/[0-9a-f]{2}/gi).map(v => parseInt(v, 16)) : [255, 255, 255];
  const stride = Math.max(1, Math.floor(Math.min(width, height) / 120));
  const sample = (x, y) => {
    const i = (y * width + x) * 4;
    borderSamples++;
    if (data[i + 3] < 128) { transparentSamples++; return; }
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if ((r + g + b) / 3 < 100) return;
    const key = `${r >> 5},${g >> 5},${b >> 5}`;
    const bin = bins.get(key) || { count: 0, r: 0, g: 0, b: 0 };
    bin.count++; bin.r += r; bin.g += g; bin.b += b;
    bins.set(key, bin);
  };
  for (let x = 0; x < width; x += stride) { sample(x, 0); sample(x, height - 1); }
  for (let y = 0; y < height; y += stride) { sample(0, y); sample(width - 1, y); }
  // An already-cut-out PNG needs compositing, not another ink extraction pass.
  if (transparentSamples / borderSamples > .8) {
    if (options.background === 'transparent') return data;
    for (let i = 0; i < data.length; i += 4) {
      const alpha = data[i + 3] / 255;
      for (let channel = 0; channel < 3; channel++) data[i + channel] = data[i + channel] * alpha + fill[channel] * (1 - alpha);
      data[i + 3] = 255;
    }
    return data;
  }
  const paper = [...bins.values()].sort((a, b) => b.count - a.count)[0];
  if (!paper) throw new Error('No clear paper background found. Crop closer to the page or use a brighter scan.');
  const background = [paper.r, paper.g, paper.b].map(value => value / paper.count);
  // Estimate illumination locally: a single edge colour cannot follow camera shadows.
  // Bright samples in overlapping cells favour paper over fine pen strokes.
  const cols = Math.max(1, Math.min(32, Math.ceil(width / 48)));
  const rows = Math.max(1, Math.min(32, Math.ceil(height / 48)));
  const cellWidth = width / cols, cellHeight = height / rows;
  const grid = [];
  for (let gy = 0; gy < rows; gy++) for (let gx = 0; gx < cols; gx++) {
    const samples = [];
    const step = Math.max(1, Math.floor(Math.min(cellWidth, cellHeight) / 16));
    for (let y = Math.max(0, Math.floor((gy - .25) * cellHeight)); y < Math.min(height, (gy + 1.25) * cellHeight); y += step) {
      for (let x = Math.max(0, Math.floor((gx - .25) * cellWidth)); x < Math.min(width, (gx + 1.25) * cellWidth); x += step) {
        const i = (y * width + x) * 4;
        if (data[i + 3] > 240) samples.push([data[i], data[i + 1], data[i + 2]]);
      }
    }
    samples.sort((a, b) => (a[0] + a[1] + a[2]) - (b[0] + b[1] + b[2]));
    const candidate = samples[Math.floor(samples.length * .85)];
    // Shadowed paper can be much darker than 70; falling back to the bright
    // border here turns the entire shadow into opaque foreground.
    grid.push(candidate && Math.min(...candidate) > 12 ? candidate : background);
  }
  const threshold = .025 + Math.max(0, Math.min(100, Number(strength) || 48)) * .0014;
  const localPaper = [0, 0, 0];
  const mask = options.mainSignature ? new Uint8Array(width * height) : null;
  let matchingInk = 0;
  for (let i = 0; i < data.length; i += 4) {
    const x = (i / 4) % width, y = Math.floor(i / 4 / width);
    const fx = Math.max(0, Math.min(cols - 1, x / cellWidth - .5));
    const fy = Math.max(0, Math.min(rows - 1, y / cellHeight - .5));
    const x0 = Math.floor(fx), y0 = Math.floor(fy), dx = fx - x0, dy = fy - y0;
    const a = grid[y0 * cols + x0], b = grid[y0 * cols + Math.min(cols - 1, x0 + 1)];
    const c = grid[Math.min(rows - 1, y0 + 1) * cols + x0], d = grid[Math.min(rows - 1, y0 + 1) * cols + Math.min(cols - 1, x0 + 1)];
    let contrast = 0;
    for (let channel = 0; channel < 3; channel++) {
      localPaper[channel] = options.shadows === false ? background[channel] : (a[channel] * (1 - dx) + b[channel] * dx) * (1 - dy) + (c[channel] * (1 - dx) + d[channel] * dx) * dy;
      contrast = Math.max(contrast, (localPaper[channel] - data[i + channel]) / Math.max(1, localPaper[channel]));
    }
    const t = Math.max(0, Math.min(1, (contrast - threshold) / .14));
    let ink = t * t * (3 - 2 * t) * data[i + 3] / 255;
    if (options.ink === 'blue') {
      // Compare colour relative to the local paper, not raw saturation: warm
      // shadows and grey notebook ruling must not become signature strokes.
      const blue = data[i + 2] / Math.max(1, localPaper[2]);
      const other = Math.max(data[i] / Math.max(1, localPaper[0]), data[i + 1] / Math.max(1, localPaper[1]));
      const colour = Math.max(0, Math.min(1, (blue - other - .025) / .16));
      ink *= colour * colour * (3 - 2 * colour);
    }
    if (mask) mask[i / 4] = Math.round(ink * 255);
    if (ink > .2) matchingInk++;
    for (let channel = 0; channel < 3; channel++) {
      // Remove paper contamination at partially transparent stroke edges.
      const foreground = ink > 0 ? Math.max(0, Math.min(255, (data[i + channel] - localPaper[channel] * (1 - ink)) / ink)) : 0;
      data[i + channel] = options.background === 'transparent' ? foreground : foreground * ink + fill[channel] * (1 - ink);
    }
    data[i + 3] = options.background === 'transparent' ? Math.round(255 * ink) : 255;
  }
  if (options.ink === 'blue' && !matchingInk) throw new Error('No blue or purple ink found. Choose All ink or lower cleanup strength.');
  if (mask) keepMainSignature(data, mask, width, height, options.background, fill);
  return data;
}

function keepMainSignature(data, mask, width, height, background, fill) {
  // Cluster nearby strokes on a bounded grid. This is opt-in: separate names,
  // initials, stamps and document text must not be silently discarded.
  const step = Math.max(1, Math.ceil(Math.max(width, height) / 400));
  const cols = Math.ceil(width / step), rows = Math.ceil(height / step);
  const weights = new Uint32Array(cols * rows), expanded = new Uint8Array(cols * rows);
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    if (mask[y * width + x] > 48) weights[Math.floor(y / step) * cols + Math.floor(x / step)]++;
  }
  const radius = Math.max(2, Math.ceil(Math.max(width, height) * .012 / step));
  for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
    if (!weights[y * cols + x]) continue;
    for (let dy = -radius; dy <= radius; dy++) for (let dx = -radius; dx <= radius; dx++) {
      if (y + dy >= 0 && y + dy < rows && x + dx >= 0 && x + dx < cols) expanded[(y + dy) * cols + x + dx] = 1;
    }
  }
  const queue = new Int32Array(cols * rows);
  let best = null;
  for (let start = 0; start < expanded.length; start++) {
    if (expanded[start] !== 1) continue;
    let head = 0, tail = 1, weight = 0, left = cols, top = rows, right = 0, bottom = 0;
    queue[0] = start; expanded[start] = 2;
    while (head < tail) {
      const index = queue[head++], x = index % cols, y = Math.floor(index / cols);
      if (weights[index]) { weight += weights[index]; left = Math.min(left, x); right = Math.max(right, x); top = Math.min(top, y); bottom = Math.max(bottom, y); }
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
        const nx = x + dx, ny = y + dy, next = ny * cols + nx;
        if (nx >= 0 && nx < cols && ny >= 0 && ny < rows && expanded[next] === 1) { expanded[next] = 2; queue[tail++] = next; }
      }
    }
    if (!best || weight > best.weight) best = { weight, left, right, top, bottom };
  }
  if (!best?.weight) throw new Error('No matching ink found. Try All ink or a lower cleanup strength.');
  const margin = Math.max(4, step * 2);
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    if (x >= best.left * step - margin && x <= (best.right + 1) * step + margin && y >= best.top * step - margin && y <= (best.bottom + 1) * step + margin) continue;
    const i = (y * width + x) * 4;
    for (let c = 0; c < 3; c++) data[i + c] = background === 'transparent' ? 0 : fill[c];
    data[i + 3] = background === 'transparent' ? 0 : 255;
  }
}
self.onmessage = async ({ data }) => {
  const image = data.image;
  try {
    if (image.width * image.height > 20_000_000) throw new Error('This scan is too large for cleanup. Use an image below 20 megapixels.');
    const canvas = new OffscreenCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) throw new Error('Image processing is unavailable in this browser.');
    ctx.drawImage(image, 0, 0);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    whitenPaper(pixels.data, canvas.width, canvas.height, data.strength, data);
    ctx.putImageData(pixels, 0, 0);
    self.postMessage({ blob: await canvas.convertToBlob({ type: 'image/png' }) });
  } catch (error) { self.postMessage({ error: error instanceof Error ? error.message : 'Paper cleanup failed. Try another scan.' }); }
  finally { image?.close(); }
};
