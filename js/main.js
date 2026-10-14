/**
 * Lydia Sierra - Personal Portfolio
 * Main JavaScript entry point (ES Module)
 */

import { renderProjects } from './projects.js';
import { initContactForm, initEmailCopy } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  // Prevent navigation on pending actions (e.g. CV upload pending)
  document.querySelectorAll('a[aria-disabled="true"]').forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
    });
  });

  // Render verified featured projects from dedicated data module
  renderProjects('.projects-grid');

  // Initialize accessible contact form and email copying
  initContactForm();
  initEmailCopy();

  console.info('Lydia Sierra Portfolio: Application loaded successfully.');
});
