/**
 * Lydia Sierra — Personal Developer Portfolio
 * Contact & Verification Module
 * Supports bilingual validation, feedback banners, and clipboard copying.
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

const contactMessages = {
  en: {
    errName: 'Please enter your name (at least 2 characters).',
    errEmail: 'Please enter a valid email address.',
    errMessage: 'Please enter a message (at least 10 characters).',
    statusHeader: 'Opening your default email application...',
    statusBody:
      'Your mail client is launching with your pre-filled message. Please review and click <strong>Send</strong> in your mail application to dispatch your message.',
    statusFallback: "Didn't open? Email directly to:",
    copiedText: 'Copied!',
    copyText: 'Copy',
    mailSubjectPrefix: 'Portfolio Inquiry from',
    mailFooterFrom: 'From:',
    mailFooterEmail: 'Email:',
    mailFooterSentVia: "Sent via Lydia Sierra's Developer Portfolio"
  },
  es: {
    errName: 'Por favor ingresa tu nombre (al menos 2 caracteres).',
    errEmail: 'Por favor ingresa un correo electrónico válido.',
    errMessage: 'Por favor ingresa un mensaje (al menos 10 caracteres).',
    statusHeader: 'Abriendo tu aplicación de correo...',
    statusBody:
      'Tu cliente de correo se está abriendo con el mensaje prellenado. Por favor revísalo y haz clic en <strong>Enviar</strong> en tu aplicación para despacharlo.',
    statusFallback: '¿No se abrió? Escribe directamente a:',
    copiedText: '¡Copiado!',
    copyText: 'Copiar',
    mailSubjectPrefix: 'Consulta de portafolio de',
    mailFooterFrom: 'De:',
    mailFooterEmail: 'Correo:',
    mailFooterSentVia: 'Enviado desde el portafolio de Lydia Sierra'
  }
};

let currentContactLang = 'en';

/**
 * Updates the active language for contact messages and validation.
 * @param {string} lang - 'en' or 'es'
 */
export function setContactLanguage(lang) {
  currentContactLang = lang === 'es' ? 'es' : 'en';

  // If status banner is active, refresh its content in the new language
  const statusBanner = document.getElementById('form-status-banner');
  if (statusBanner && statusBanner.classList.contains('is-active')) {
    renderStatusBanner(statusBanner);
  }

  // Update copy button labels if not currently in copied state
  document.querySelectorAll('.btn-copy-email').forEach((btn) => {
    if (!btn.classList.contains('copied')) {
      const span = btn.querySelector('span');
      if (span) {
        span.textContent = contactMessages[currentContactLang].copyText;
      }
    }
  });
}

/**
 * Renders the status banner markup in the active language.
 * @param {HTMLElement} statusBanner
 */
function renderStatusBanner(statusBanner) {
  const msgs = contactMessages[currentContactLang] || contactMessages.en;
  statusBanner.className = 'form-status-banner is-active status-info';
  statusBanner.innerHTML = `
    <div class="status-banner-header">
      <svg class="status-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
      <span>${msgs.statusHeader}</span>
    </div>
    <p class="status-banner-body">
      ${msgs.statusBody}
    </p>
    <div class="status-fallback-action">
      <span>${msgs.statusFallback}</span>
      <a href="mailto:${CONTACT_CONFIG.email}" class="contact-channel-link"><strong>${CONTACT_CONFIG.email}</strong></a>
    </div>
  `;
}

/**
 * Initializes the accessible mailto-based contact form.
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

    const msgs = contactMessages[currentContactLang] || contactMessages.en;
    let isValid = true;
    let firstInvalidInput = null;

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    // Validate Name
    if (!name || name.length < 2) {
      isValid = false;
      if (nameInput) nameInput.setAttribute('aria-invalid', 'true');
      if (nameError) nameError.textContent = msgs.errName;
      if (!firstInvalidInput) firstInvalidInput = nameInput;
    } else {
      if (nameInput) nameInput.setAttribute('aria-invalid', 'false');
      if (nameError) nameError.textContent = '';
    }

    // Validate Email
    if (!email || !emailRegex.test(email)) {
      isValid = false;
      if (emailInput) emailInput.setAttribute('aria-invalid', 'true');
      if (emailError) emailError.textContent = msgs.errEmail;
      if (!firstInvalidInput) firstInvalidInput = emailInput;
    } else {
      if (emailInput) emailInput.setAttribute('aria-invalid', 'false');
      if (emailError) emailError.textContent = '';
    }

    // Validate Message
    if (!message || message.length < 10) {
      isValid = false;
      if (messageInput) messageInput.setAttribute('aria-invalid', 'true');
      if (messageError) messageError.textContent = msgs.errMessage;
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
    const subject = `${msgs.mailSubjectPrefix} ${name}`;
    const bodyContent =
      `Hi Lydia,\n\n` +
      `${message}\n\n` +
      `----------------------------------------\n` +
      `${msgs.mailFooterFrom} ${name}\n` +
      `${msgs.mailFooterEmail} ${email}\n` +
      `${msgs.mailFooterSentVia}`;

    const mailtoUri = `mailto:${encodeURIComponent(CONTACT_CONFIG.email)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyContent)}`;

    // Show honest status feedback to the user (No fake success message!)
    if (statusBanner) {
      renderStatusBanner(statusBanner);
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
      const msgs = contactMessages[currentContactLang] || contactMessages.en;

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
          <span>${msgs.copiedText}</span>
        `;

        setTimeout(() => {
          button.classList.remove('copied');
          button.innerHTML = originalText;
          const span = button.querySelector('span');
          if (span) {
            span.textContent = contactMessages[currentContactLang].copyText;
          }
        }, 2500);
      } catch (err) {
        console.warn('Clipboard write failed:', err);
      }
    });
  });
}
