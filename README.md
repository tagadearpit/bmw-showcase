# Bavaria Concept — BMW-Inspired Apple-Style Website

A React + Vite + Tailwind + Framer Motion automotive portfolio website built around local rendered MP4 loops.

> BMW-inspired concept website for portfolio and educational purposes. Not affiliated with BMW AG.

## Local videos used

The website uses four local render videos from:

```text
public/media/render/hero-loop.mp4
public/media/render/showcase-loop.mp4
public/media/render/interior-loop.mp4
public/media/render/configurator-loop.mp4
```

These are integrated into:

- Hero cinematic background
- Product showcase film section
- Interior experience section
- Configurator preview section

## Run locally

```bash
npm install --registry=https://registry.npmjs.org/
npm run dev
```

## Build

```bash
npm run build
```

The production output is generated in:

```text
dist/
```

## Vercel settings

```text
Install Command: npm install --registry=https://registry.npmjs.org/
Build Command: npm run build
Output Directory: dist
Root Directory: leave empty if package.json is in the repo root
```

## Notes

- Videos below the fold are lazy-loaded through `RenderVideo.jsx`.
- Reduced motion is respected.
- Form submissions are local demo-only and do not send data anywhere.
- Do not use official BMW logos or copyrighted imagery unless you have permission.
