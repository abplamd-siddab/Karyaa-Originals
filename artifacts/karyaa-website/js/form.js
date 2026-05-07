/* ==========================================================================
   Karyaa — form.js
   Contact form validation, submission, success state, and FAQ accordion.
   ========================================================================== */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // Contact form
  // --------------------------------------------------------------------------
  const formWrap    = document.getElementById('contact-form-wrap');
  const form        = document.getElementById('contact-form');
  const successEl   = document.getElementById('contact-success');
  const resetBtn    = document.getElementById('contact-reset');

  if (!form) return;

  function showError(id, msg) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = msg;
      el.classList.toggle('is-visible', !!msg);
    }
  }

  function clearErrors() {
    form.querySelectorAll('.cf-error').forEach(function (el) {
      el.textContent = '';
      el.classList.remove('is-visible');
    });
    form.querySelectorAll('.cf-input, .cf-pills').forEach(function (el) {
      el.classList.remove('has-error');
    });
  }

  function validateEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    const data    = new FormData(form);
    const name    = String(data.get('name') || '').trim();
    const business= String(data.get('business') || '').trim();
    const country = String(data.get('country') || '').trim();
    const email   = String(data.get('email') || '').trim();
    const service = String(data.get('service') || '').trim();
    const message = String(data.get('message') || '').trim();

    let valid = true;

    if (!name) {
      showError('err-name', 'Please enter your full name.');
      document.getElementById('cf-name').classList.add('has-error');
      valid = false;
    }
    if (!business) {
      showError('err-business', 'Please enter your business name.');
      document.getElementById('cf-business').classList.add('has-error');
      valid = false;
    }
    if (!country) {
      showError('err-country', 'Please select your country.');
      document.getElementById('cf-country').classList.add('has-error');
      valid = false;
    }
    if (!email || !validateEmail(email)) {
      showError('err-email', 'Please enter a valid email address.');
      document.getElementById('cf-email').classList.add('has-error');
      valid = false;
    }
    if (!service) {
      showError('err-service', 'Please select the service you need.');
      valid = false;
    }
    if (!message) {
      showError('err-message', 'Please tell us about your business.');
      document.getElementById('cf-message').classList.add('has-error');
      valid = false;
    }

    if (!valid) return;

    formWrap.hidden = true;
    successEl.hidden = false;
    successEl.focus();
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      form.reset();
      clearErrors();
      successEl.hidden = true;
      formWrap.hidden = false;
      form.querySelector('.cf-input').focus();
    });
  }

  // Live error clearing on input and change (covers selects on all browsers)
  form.querySelectorAll('.cf-input').forEach(function (input) {
    ['input', 'change'].forEach(function (evtType) {
      input.addEventListener(evtType, function () {
        this.classList.remove('has-error');
        const errId = 'err-' + (this.name || '');
        const errEl = document.getElementById(errId);
        if (errEl) {
          errEl.textContent = '';
          errEl.classList.remove('is-visible');
        }
      });
    });
  });

  // Radio pill error clearing
  form.querySelectorAll('input[name="service"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
      showError('err-service', '');
    });
  });

  // --------------------------------------------------------------------------
  // FAQ accordion
  // --------------------------------------------------------------------------
  const faqList = document.getElementById('faq-list');
  if (!faqList) return;

  faqList.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item     = this.closest('.faq-item');
      const answer   = item.querySelector('.faq-answer');
      const icon     = this.querySelector('.faq-icon');
      const isOpen   = this.getAttribute('aria-expanded') === 'true';

      // Close all others
      faqList.querySelectorAll('.faq-item').forEach(function (other) {
        if (other === item) return;
        const otherBtn    = other.querySelector('.faq-question');
        const otherAnswer = other.querySelector('.faq-answer');
        const otherIcon   = other.querySelector('.faq-icon');
        otherBtn.setAttribute('aria-expanded', 'false');
        otherAnswer.style.maxHeight = '0';
        if (otherIcon) otherIcon.textContent = '+';
        other.classList.remove('is-open');
      });

      // Toggle current
      if (isOpen) {
        this.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = '0';
        if (icon) icon.textContent = '+';
        item.classList.remove('is-open');
      } else {
        this.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        if (icon) icon.textContent = '−';
        item.classList.add('is-open');
      }
    });
  });

})();
