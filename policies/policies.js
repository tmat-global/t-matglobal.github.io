// T-Mat Global — Policies Page JS
// Smooth scroll + reveal animation

// 1. Smooth scroll for policy navigation (original functionality preserved)
document.querySelectorAll('.policy-nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      const offset = 80; // account for sticky header
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// 2. Scroll reveal animation
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('js-ready'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});

// 3. Active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.policy-nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.borderColor = '';
    link.style.color = '';
    link.style.background = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.borderColor = 'var(--border-gold)';
      link.style.color = 'var(--gold)';
      link.style.background = 'rgba(234,148,1,0.06)';
    }
  });
}, { passive: true });