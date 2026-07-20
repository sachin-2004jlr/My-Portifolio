<div align="center">

# ◆ Sachin S — Cinematic Portfolio

**A dark, cinematic portfolio** for a Full Stack AI Engineer — a full-screen looping
video hero, liquid-glass UI, and an editorial dark-glass content system.

[Sections](#-sections) · [Tech stack](#-tech-stack) · [Run locally](#-run-locally) · [Deploy](#-deploy)

</div>

---

## ✦ Overview

A single-page portfolio with a **full-screen self-hosted background video** (custom
rAF-based fade-loop, no CSS transitions), **liquid-glass** navigation and controls, an
elegant **Instrument Serif** hero, and a monochrome dark theme with one warm accent. The
content sections (About, Skills, Experience, Work, Certifications, Contact) carry the same
dark-glass language, with 3D tilt, magnetic buttons, a skills marquee, a cursor grid
spotlight, film grain, count-up stats and scroll-reveal cinematics.

## ✶ Highlights

- **Video hero** — muted, autoplaying, self-hosted (compressed 19 MB → 1.5 MB) with a
  poster frame; seamless loop via a 500 ms `requestAnimationFrame` fade in/out that
  resumes from the current opacity and cancels competing frames. Holds a still frame under
  `prefers-reduced-motion`.
- **Liquid glass** — `backdrop-filter` blur, inset highlight, and a gradient border drawn
  with the mask-composite trick.
- **Cinematic motion** — cursor grid-spotlight, film grain, skills marquee, background
  parallax, 3D tilt cards, magnetic buttons, count-up stats, drawn-in section rules.
- **Accessible** — semantic landmarks, skip link, focus styles, WCAG-AA accent, and all
  motion off for `prefers-reduced-motion`.
- **13 verifiable certifications** (filterable) · **9 linked projects** · full SEO +
  structured data + a designed dark social card.

## ▤ Sections

Video Hero · Stats · Skills marquee · About · Skills · Experience · Work · Certifications · Contact

All content lives in [`src/data/content.js`](src/data/content.js).

## ⚙ Tech Stack

| Area      | Tools |
|-----------|-------|
| Framework | React 18, Vite 7, TypeScript |
| Styling   | Tailwind CSS 3 (utilities) + hand-written CSS design system |
| Icons     | lucide-react + inline brand SVGs |
| Motion    | framer-motion + custom rAF effects |
| Type      | Instrument Serif · Space Grotesk · Inter · JetBrains Mono |

## ▶ Run locally

```bash
npm install
npm run dev        # start Vite dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

> Requires Node 18+ (developed on Node 24).

## ▦ Customize

- **Content** — edit [`src/data/content.js`](src/data/content.js).
- **Hero video** — replace [`public/hero.mp4`](public/) + `public/hero-poster.jpg`.
- **Accent** — `--accent` / `--accent-deep` in [`src/index.css`](src/index.css).
- **Social card** — [`public/og.jpg`](public/) (1200×630).

## 🌐 Deploy

**GitHub Pages** via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
(Settings → Pages → Source: GitHub Actions). **Netlify / Vercel**: build `npm run build`,
publish `dist`.

## 🔒 Notes on assets

- The hero video is **self-hosted** (downloaded from the original and compressed) — nothing
  is hotlinked from a third-party CDN.
- Fonts (Instrument Serif via Google Fonts) and the video are the only runtime external
  requests; everything else is bundled.

## 📬 Contact

**Sachin S** — [sachin2004jlr@gmail.com](mailto:sachin2004jlr@gmail.com)
[GitHub](https://github.com/sachin-2004jlr) · [LinkedIn](https://www.linkedin.com/in/sachin-s-4a74b72a9/)

## 📝 License

[MIT](LICENSE) © Sachin S
