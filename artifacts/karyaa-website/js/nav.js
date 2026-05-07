/* ==========================================================================
   Karyaa — nav.js
   Injects the shared site navigation into every page.
   Import this script in the <head> (or top of <body>) with defer.
   ========================================================================== */

(function () {
  'use strict';

  const BRIDGE_SVG = `
    <svg class="nav-logo-mark" viewBox="0 0 80 50" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <line x1="3" y1="44" x2="77" y2="44" stroke="#C8962A" stroke-width="2" stroke-linecap="round"/>
      <rect x="17.5" y="14" width="3" height="30" fill="#C8962A"/>
      <rect x="12.5" y="11" width="13" height="3" fill="#C8962A" rx="0.5"/>
      <rect x="14"   y="19" width="10" height="2" fill="#C8962A" rx="0.5"/>
      <rect x="15.5" y="29" width="7"  height="2" fill="#C8962A" rx="0.5"/>
      <rect x="59.5" y="14" width="3" height="30" fill="#C8962A"/>
      <rect x="54.5" y="11" width="13" height="3" fill="#C8962A" rx="0.5"/>
      <rect x="56"   y="19" width="10" height="2" fill="#C8962A" rx="0.5"/>
      <rect x="57.5" y="29" width="7"  height="2" fill="#C8962A" rx="0.5"/>
      <path d="M 3,44 L 19,13 Q 40,28 61,13 L 77,44" fill="none" stroke="#C8962A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="19" y1="13" x2="8"  y2="44" stroke="#C8962A" stroke-width="0.8" stroke-linecap="round"/>
      <line x1="19" y1="13" x2="13" y2="44" stroke="#C8962A" stroke-width="0.8" stroke-linecap="round"/>
      <line x1="61" y1="13" x2="72" y2="44" stroke="#C8962A" stroke-width="0.8" stroke-linecap="round"/>
      <line x1="61" y1="13" x2="67" y2="44" stroke="#C8962A" stroke-width="0.8" stroke-linecap="round"/>
      <line x1="29.5" y1="18" x2="29.5" y2="44" stroke="#C8962A" stroke-width="0.8" stroke-linecap="round"/>
      <line x1="40"   y1="20" x2="40"   y2="44" stroke="#C8962A" stroke-width="0.8" stroke-linecap="round"/>
      <line x1="50.5" y1="18" x2="50.5" y2="44" stroke="#C8962A" stroke-width="0.8" stroke-linecap="round"/>
      <circle cx="3"  cy="44" r="2.5" fill="#C8962A"/>
      <circle cx="77" cy="44" r="2.5" fill="#C8962A"/>
    </svg>`;

  const NAV_HTML = `
    <header class="site-nav" id="site-nav">
      <div class="nav-inner">
        <a href="/index.html" class="nav-logo" aria-label="Karyaa — Home">
          ${BRIDGE_SVG}
          <div class="nav-logo-text">
            <span class="nav-wordmark">karyaa</span>
            <span class="nav-tagline-small">YOUR TEAM IN INDIA</span>
          </div>
        </a>

        <nav class="nav-links" aria-label="Site navigation">
          <ul>
            <li><a href="/index.html"    class="nav-link">Home</a></li>
            <li><a href="/services.html" class="nav-link">Services</a></li>
            <li><a href="/about.html"    class="nav-link">About</a></li>
            <li><a href="/contact.html"  class="nav-link">Contact</a></li>
          </ul>
        </nav>

        <button class="nav-hamburger" id="nav-hamburger"
                aria-label="Open navigation" aria-expanded="false"
                aria-controls="nav-mobile-panel">
          <span></span><span></span><span></span>
        </button>
      </div>

      <div class="nav-mobile-panel" id="nav-mobile-panel"
           role="navigation" aria-label="Mobile navigation">
        <a href="/index.html"    class="nav-link">Home</a>
        <a href="/services.html" class="nav-link">Services</a>
        <a href="/about.html"    class="nav-link">About</a>
        <a href="/contact.html"  class="nav-link">Contact</a>
      </div>
    </header>`;

  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
})();
