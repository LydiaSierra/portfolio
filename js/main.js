/**
 * Lydia Sierra - Personal Portfolio
 * Main JavaScript entry point (ES Module)
 */

import { renderProjects } from './projects.js';
import { initContactForm, initEmailCopy } from './contact.js';
import { detectLanguage, setLanguage, initLanguageSelector } from './i18n.js';
import { initTheme } from './theme.js';
import { initNavigation } from './navigation.js';

document.addEventListener('DOMContentLoaded', () => {
  // Prevent navigation on pending actions (e.g. CV upload pending)
  document.querySelectorAll('a[aria-disabled="true"]').forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
    });
  });

  // Initialize light/dark theme system
  initTheme();

  // Initialize responsive navigation, drawer, smooth scroll & active section tracking
  initNavigation();

  // Initialize accessible contact form and email copying
  initContactForm();
  initEmailCopy();

  // Initialize language selector controls and apply detected language
  initLanguageSelector();
  const initialLang = detectLanguage();
  setLanguage(initialLang, false);

  console.info('Lydia Sierra Portfolio: Application loaded successfully.');
});
