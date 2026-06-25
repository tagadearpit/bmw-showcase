@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: #08080a;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  font-family: 'Manrope', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #08080a;
  overflow-x: hidden;
}

button,
a,
input,
select {
  -webkit-tap-highlight-color: transparent;
}

::selection {
  background: rgba(56, 189, 248, 0.35);
  color: #fff;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #050507;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(#1d4ed8, #94a3b8);
  border-radius: 999px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}

@media (max-width: 768px) {
  .backdrop-blur-2xl {
    backdrop-filter: blur(18px);
  }
}

video {
  display: block;
  background: #020304;
}

.video-frame-edge::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(255,255,255,0.22), transparent 30%, rgba(14,165,233,0.16) 62%, transparent);
}

@supports (height: 100dvh) {
  .min-h-dvh {
    min-height: 100dvh;
  }
}
