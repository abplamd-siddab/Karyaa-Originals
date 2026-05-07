/* ==========================================================================
   Karyaa — form.js
   Contact form validation and submission handling.
   ========================================================================== */

(function () {
  'use strict';

  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();

    const errors = [];
    if (!name) errors.push('Please enter your name.');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('Please enter a valid email address.');
    }
    if (!message) errors.push('Please enter a message.');

    if (errors.length) {
      alert(errors.join('\n'));
      return;
    }

    // Submission endpoint to be wired up later.
    console.log('Contact form submission:', { name, email, message });
    form.reset();
    alert('Thank you — we will be in touch shortly.');
  });
})();
