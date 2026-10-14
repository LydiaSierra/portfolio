/**
 * Lydia Sierra — Personal Developer Portfolio
 * Contact & Verification Module
 * Conforming to DESIGN_SPEC.md & Strict Content Integrity
 */

/**
 * Centralized contact and professional profile configuration.
 * Editable in one place to maintain verified details.
 */
export const CONTACT_CONFIG = {
  email: 'lydia.sierra.ibata@gmail.com',
  github: 'https://github.com/lydiasierra',
  linkedin: 'https://linkedin.com/in/lydiasierra',
  location: 'Pereira, Colombia'
};

/**
 * Initializes the accessible mailto-based contact form.
 * Validates inputs client-side, constructs encoded mailto URL, and informs
 * the visitor truthfully about opening their device's email client.
 */
export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const statusBanner = document.getElementById('form-status-banner');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Real-time error clearing on input
  if (nameInput) {
    nameInput.addEventListener('input', () => {
      if (nameInput.value.trim().length >= 2) {
        nameInput.setAttribute('aria-invalid', 'false');
        if (nameError) nameError.textContent = '';
      }
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      if (emailRegex.test(emailInput.value.trim())) {
        emailInput.setAttribute('aria-invalid', 'false');
        if (emailError) emailError.textContent = '';
      }
    });
  }

  if (messageInput) {
    messageInput.addEventListener('input', () => {
      if (messageInput.value.trim().length >= 10) {
        messageInput.setAttribute('aria-invalid', 'false');
        if (messageError) messageError.textContent = '';
      }
    });
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;
    let firstInvalidInput = null;

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    // Validate Name
    if (!name || name.length < 2) {
      isValid = false;
      if (nameInput) nameInput.setAttribute('aria-invalid', 'true');
      if (nameError) nameError.textContent = 'Please enter your name (at least 2 characters).';
      if (!firstInvalidInput) firstInvalidInput = nameInput;
    } else {
      if (nameInput) nameInput.setAttribute('aria-invalid', 'false');
      if (nameError) nameError.textContent = '';
    }

    // Validate Email
    if (!email || !emailRegex.test(email)) {
      isValid = false;
      if (emailInput) emailInput.setAttribute('aria-invalid', 'true');
      if (emailError) emailError.textContent = 'Please enter a valid email address.';
      if (!firstInvalidInput) firstInvalidInput = emailInput;
    } else {
      if (emailInput) emailInput.setAttribute('aria-invalid', 'false');
      if (emailError) emailError.textContent = '';
    }

    // Validate Message
    if (!message || message.length < 10) {
      isValid = false;
      if (messageInput) messageInput.setAttribute('aria-invalid', 'true');
      if (messageError) messageError.textContent = 'Please enter a message (at least 10 characters).';
      if (!firstInvalidInput) firstInvalidInput = messageInput;
    } else {
      if (messageInput) messageInput.setAttribute('aria-invalid', 'false');
      if (messageError) messageError.textContent = '';
    }

    if (!isValid) {
      if (firstInvalidInput) firstInvalidInput.focus();
      return;
    }

    // Construct truthful mailto URI with pre-filled content
    const subject = `Portfolio Inquiry from ${name}`;
    const bodyContent =
      `Hi Lydia,\n\n` +
      `${message}\n\n` +
      `----------------------------------------\n` +
      `From: ${name}\n` +
      `Email: ${email}\n` +
      `Sent via Lydia Sierra's Developer Portfolio`;

    const mailtoUri = `mailto:${encodeURIComponent(CONTACT_CONFIG.email)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyContent)}`;

    // Show honest status feedback to the user (No fake success message!)
    if (statusBanner) {
      statusBanner.className = 'form-status-banner is-active status-info';
      statusBanner.innerHTML = `
        <div class="status-banner-header">
          <svg class="status-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          <span>Opening your default email application...</span>
        </div>
        <p class="status-banner-body">
          Your mail client is launching with your pre-filled message. Please review and click <strong>Send</strong> in your mail application to dispatch your message.
        </p>
        <div class="status-fallback-action">
          <span>Didn't open? Email directly to:</span>
          <a href="mailto:${CONTACT_CONFIG.email}" class="contact-channel-link"><strong>${CONTACT_CONFIG.email}</strong></a>
        </div>
      `;
    }

    // Launch system default email client
    window.location.href = mailtoUri;
  });
}

/**
 * Initializes clipboard copying for the verified email address.
 */
export function initEmailCopy() {
  const copyButtons = document.querySelectorAll('.btn-copy-email');

  copyButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const email = button.getAttribute('data-email') || CONTACT_CONFIG.email;

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback for older browsers
          const tempInput = document.createElement('textarea');
          tempInput.value = email;
          tempInput.style.position = 'fixed';
          tempInput.style.opacity = '0';
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        const originalText = button.innerHTML;
        button.classList.add('copied');
        button.innerHTML = `
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span>Copied!</span>
        `;

        setTimeout(() => {
          button.classList.remove('copied');
          button.innerHTML = originalText;
        }, 2500);
      } catch (err) {
        console.warn('Clipboard write failed:', err);
      }
    });
  });
}
