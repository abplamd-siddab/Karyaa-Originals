/* ==========================================================================
   Karyaa — main.js
   Site-wide interactions: nav scroll/mobile, scroll reveal, year stamp.
   ========================================================================== */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // Navigation — scroll shadow
  // --------------------------------------------------------------------------
  const nav = document.getElementById('site-nav');
  if (nav) {
    const SCROLL_THRESHOLD = 80;
    const onScroll = function () {
      if (window.scrollY > SCROLL_THRESHOLD) {
        nav.classList.add('is-scrolled');
      } else {
        nav.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --------------------------------------------------------------------------
  // Navigation — mobile hamburger
  // --------------------------------------------------------------------------
  const hamburger = document.getElementById('nav-hamburger');
  const mobilePanel = document.getElementById('nav-mobile-panel');
  if (hamburger && mobilePanel) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobilePanel.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    mobilePanel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobilePanel.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --------------------------------------------------------------------------
  // Navigation — active link highlight
  // --------------------------------------------------------------------------
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link, .nav-mobile-panel a');
  navLinks.forEach(function (link) {
    const href = link.getAttribute('href') || '';
    const linkPath = href.replace(/^\.\//, '/').replace(/index\.html$/, '');
    const cleanCurrent = currentPath.replace(/index\.html$/, '');
    if (
      cleanCurrent === linkPath ||
      (cleanCurrent === '/' && (href === '/index.html' || href === '/')) ||
      (cleanCurrent.endsWith(href) && href !== '/')
    ) {
      link.classList.add('is-active');
    }
  });

  // --------------------------------------------------------------------------
  // Smooth scroll for all anchor links
  // --------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --------------------------------------------------------------------------
  // Reveal-on-scroll
  // --------------------------------------------------------------------------
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // --------------------------------------------------------------------------
  // Auto year stamp
  // --------------------------------------------------------------------------
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
