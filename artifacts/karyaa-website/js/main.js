/* ==========================================================================
   Karyaa — main.js
   Site-wide interactions: scroll reveal, year stamp, nav helpers.
   ========================================================================== */

(function () {
  'use strict';

  // Reveal-on-scroll: any element with `.reveal` fades up when it enters view.
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // Auto-stamp the current year in any `[data-year]` element.
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
