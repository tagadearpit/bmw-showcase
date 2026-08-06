# Bavaria Concept — BMW-Inspired Showcase

A premium React + Vite + Tailwind + Framer Motion automotive concept website built around local rendered MP4 loops.

> BMW-inspired concept website for portfolio and educational purposes. **Not affiliated with BMW AG.**

## Features

- Cinematic hero with local video background
- Interactive car configurator
- Model comparison and detailed car cards
- Smooth Framer Motion animations
- Responsive design with reduced-motion support
- Test drive request form (demo only)

## Local Videos

```text
public/media/render/hero-loop.mp4
public/media/render/showcase-loop.mp4
public/media/render/interior-loop.mp4
public/media/render/configurator-loop.mp4
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
```

Output is generated in the `dist/` folder.

## Vercel Deployment

- **Install Command**: `npm install`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## Notes

- Videos below the fold are lazy-loaded via `RenderVideo.jsx`
- Reduced motion preferences are respected
- Form submissions are local demo-only
- Do not use official BMW logos or copyrighted assets without permission
