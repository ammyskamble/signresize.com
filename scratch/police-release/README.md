<div align="center">

# ⚡ SignResize.in

### 100% Client-Side Privacy-First Photo & Signature Resizer for Government Exams & Applications

[![Live Demo](https://img.shields.io/badge/Live%20Demo-signresize.in-blue?style=for-the-badge&logo=googlechrome&logoColor=white)](https://signresize.in)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-5.0-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Privacy: 0 Server Uploads](https://img.shields.io/badge/Privacy-0%20Server%20Uploads-success?style=for-the-badge)](https://signresize.in)

<p align="center">
  A lightning-fast, zero-server-upload image and signature optimization tool built specifically for competitive examination portals (UPSC, SSC, IBPS, GATE, State PSCs, NTA, and Indian Army).
</p>

👉 **Try it Live:** [**https://signresize.in**](https://signresize.in)

</div>

---

## 📌 Why SignResize?

Most online image compressors require uploading sensitive personal photos and signatures to third-party cloud servers. **SignResize runs 100% in the user's browser**:

- 🔒 **Zero Data Leakage:** Photos and signatures are processed in-memory using HTML5 `<canvas>` APIs and Web Workers. No file ever touches a backend server.
- 🎯 **Target File Size Precision:** Binary search compression algorithm ensures files land strictly within strict portal boundaries (e.g., 20KB to 50KB or 10KB to 20KB).
- 📐 **Pre-configured Exam Dimensions:** Built-in presets for major Indian government recruitments ensure exact pixel and aspect-ratio compliance.
- ⚡ **Zero Installation:** Runs smoothly on all modern desktop and mobile browsers.

---

## 🚀 Key Features

* **Instant Exam Presets:** One-click configuration for:
  * **UPSC Civil Services / NDA / CDS** (350x350 - 1000x1000 px, 20KB-300KB)
  * **SSC CGL / CHSL / MTS / GD** (3.5cm x 4.5cm, 20KB-50KB photo, 10KB-20KB signature)
  * **IBPS PO / Clerk / RRB** (4.5cm x 3.5cm, 200x230 px photo, 140x60 px signature)
  * **GATE / IIT JAM** (240x320 px to 480x640 px)
  * **Custom Size & Dimension:** Specify exact target KB, DPI, and pixel width/height.
* **Canvas Crop & Rotate:** Intuitive drag-and-drop bounding box with rotation and aspect-ratio lock.
* **Signature Inking Enhancement:** High-contrast filter to clean scanned ballpoint/gel pen ink against uneven backgrounds.
* **Batch Processing & ZIP Export:** Resize multiple documents simultaneously and download bundled archives.

---

## 🛠️ Architecture & Technical Details

SignResize uses a modern static architecture optimized for Core Web Vitals and edge delivery:

```
├── Framework: Astro 5.x (Islands Architecture + Static HTML)
├── UI Components: React 19 + Tailwind CSS 4
├── Processing Pipeline: Pure Client-Side HTML5 Canvas + OffscreenCanvas
├── Bundling & Deployment: Cloudflare Pages / Static Edge CDN
```

### Client-Side Target KB Compression Algorithm

Instead of naive quality step-downs, SignResize implements a discrete binary search over the canvas `toBlob(callback, 'image/jpeg', quality)` spectrum:

```typescript
// Conceptual binary search for exact target byte size
async function compressToTargetKB(canvas: HTMLCanvasElement, targetKB: number): Promise<Blob> {
  let min = 0.05, max = 1.0, optimalBlob: Blob | null = null;
  for (let i = 0; i < 6; i++) {
    const quality = (min + max) / 2;
    const blob = await new Promise<Blob>((res) => canvas.toBlob((b) => res(b!), 'image/jpeg', quality));
    if (blob.size <= targetKB * 1024) {
      optimalBlob = blob;
      min = quality; // Try higher quality while staying under limit
    } else {
      max = quality; // File too large, decrease quality
    }
  }
  return optimalBlob || canvas.toBlob(...);
}
```

---

## 💻 Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) `>= 22.12.0`
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ammyskamble/signresize.com.git
   cd signresize.com
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
- Check out the open issues or submit a pull request.
- If you're an educator, exam coordinator, or candidate with updated guidelines for a new exam, feel free to submit a preset PR in `src/data/examPresets.ts`.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more details.

---

<div align="center">
  <sub>Developed with ❤️ for students and job aspirants across India. Visit <a href="https://signresize.in">SignResize.in</a>.</sub>
</div>
