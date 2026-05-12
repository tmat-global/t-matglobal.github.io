// ================================================================
// T-Mat Global — script.js v7.0  PREMIUM DARK EDITION
// Three.js removed — CSS animated gradient hero replaces WebGL
// ================================================================

// ── Section title reveal ──────────────────────────────────────
const titleObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.section-title').forEach(t => titleObserver.observe(t));
