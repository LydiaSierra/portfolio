/**
 * Lydia Sierra - Personal Portfolio
 * Main JavaScript entry point (ES Module)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Prevent navigation on pending actions (e.g. CV upload pending)
  document.querySelectorAll('a[aria-disabled="true"]').forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
    });
  });

  console.info('Lydia Sierra Portfolio: Semantic foundation loaded successfully.');
});
