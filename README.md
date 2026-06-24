# Bavaria Concept — Apple-Style Automotive Showcase

A premium React + Vite + Tailwind CSS + Framer Motion automotive portfolio website inspired by luxury German car product pages.

This project is an educational/portfolio concept only. It is not affiliated with, endorsed by, sponsored by, or connected to BMW AG. Model names, prices, specifications, and visuals are fictional placeholders.

## Fixed in this version

- Restored the missing `src/` app structure that caused Vercel to fail on `/src/main.jsx`.
- Added complete React app files: `App.jsx`, `main.jsx`, `index.css`, components, hooks, and data files.
- Added Apple-style premium hero section, glassmorphism UI, animated car visuals, scroll reveal, and luxury dark theme.
- Added functional model filters, car detail modal, configurator, comparison section, performance stats, interior section, and demo form.
- Kept the project safe from official BMW logo/image usage.
- Kept Vercel-compatible Node 24 engine and stable Vite build setup.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Vercel settings

If Vercel previously used a broken internal registry, set this as the install command in Vercel:

```bash
npm install --registry=https://registry.npmjs.org/
```

Build command:

```bash
npm run build
```

Output directory:

```bash
dist
```
