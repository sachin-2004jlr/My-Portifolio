<div align="center">

# ▚ Sachin S — Editorial Portfolio

**A bold, editorial single-page portfolio** for an AI Engineer & Full-Stack Developer.
Big typographic headline, dotted-grid canvas, grayscale portrait, monospace micro-type.

[Sections](#-sections) · [Tech stack](#-tech-stack) · [Run locally](#-run-locally) · [Deploy](#-deploy)

</div>

---

## ✦ Overview

A fast, static, editorial portfolio: a giant display headline, a fine dotted-grid
background, a face-cropped grayscale portrait, and a strict monochrome palette with a
single warm signal accent. Everything — fonts included — is bundled at build time, so the
site makes **zero external network requests** at runtime.

## ✶ Highlights

- **Editorial type system** — Space Grotesk display, JetBrains Mono micro-labels, Inter body.
- **Dotted-grid canvas** — masked CSS grid that fades into the page.
- **Grayscale portrait** — tightly cropped to the face with a duotone-free B&W grade.
- **Motion** — framer-motion scroll reveals, animated headline, scroll-progress bar.
- **Accessible** — semantic landmarks, keyboard focus styles, `prefers-reduced-motion` respected, `noscript` fallback.
- **Lightweight** — no 3D/WebGL; ~93 kB gzipped JS. Portable relative asset base for any static host.

## ▤ Sections

Hero · About · Skills · Experience · Selected Work · Certifications · Contact

All content lives in a single file — [`src/data/content.js`](src/data/content.js). Edit it to update the site; no component changes required.

## ⚙ Tech Stack

| Area      | Tools |
|-----------|-------|
| Framework | React 18, Vite 7 |
| Motion    | framer-motion |
| Type      | Space Grotesk · Inter · JetBrains Mono (self-hosted via Fontsource) |
| Styling   | Hand-written modern CSS (custom properties, editorial layout) |

## ▶ Run locally

```bash
npm install
npm run dev        # start Vite dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
npm run lint       # lint the source
```

> Requires Node 18+ (developed on Node 24).

## ▦ Customize

- **Text/content** — edit [`src/data/content.js`](src/data/content.js).
- **Accent colour** — change `--accent` in [`src/index.css`](src/index.css) (one line).
- **Portrait** — replace [`public/sachin.jpg`](public/); tune the crop via `.hero__portrait-img` in `index.css`.
- **Resume download** — drop a `SACHIN_RESUME.pdf` into [`public/`](public/) (already referenced in `content.js`).

## 🌐 Deploy

This is a static site — build it and host the `dist/` folder anywhere.

```bash
npm run build      # outputs static files to dist/
```

**Netlify / Vercel** — build command `npm run build`, publish directory `dist`.
Any static host works (the asset base is relative).

## 🔒 Security

- No secrets, API keys or `.env` files are committed (`.gitignore` blocks them).
- No runtime external requests; no third-party analytics or trackers.
- All links use `rel="noopener noreferrer"` on `target="_blank"`.
- Dependencies audited with `npm audit` — **0 vulnerabilities**.

## 📬 Contact

**Sachin S** — [sachin2004jlr@gmail.com](mailto:sachin2004jlr@gmail.com)
[GitHub](https://github.com/sachin-2004jlr) · [LinkedIn](https://www.linkedin.com/in/sachin-s-4a74b72a9/)

## 📝 License

[MIT](LICENSE) © Sachin S
