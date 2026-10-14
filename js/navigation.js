/**
 * Lydia Sierra — Personal Developer Portfolio
 * Navigation & Interaction Module (ES Module)
 * Handles responsive mobile navigation drawer, smooth in-page scrolling
 * with prefers-reduced-motion respect, keyboard accessibility, and active-section tracking.
 */

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'experience', 'languages', 'contact'];

let activeObserver = null;
let isMenuOpen = false;

/**
 * Checks if the user prefers reduced motion.
 * @returns {boolean}
 */
export function prefersReducedMotion() {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
}

/**
 * Opens the mobile navigation menu.
 */
export function openMobileMenu() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('primary-nav');
  if (!toggleBtn || !navMenu) return;

  isMenuOpen = true;
  toggleBtn.setAttribute('aria-expanded', 'true');
  navMenu.classList.add('is-open');

  // Focus the first navigation link for keyboard users
  const firstLink = navMenu.querySelector('.nav-link');
  if (firstLink) {
    firstLink.focus();
  }
}

/**
 * Closes the mobile navigation menu.
 * @param {boolean} [returnFocus=true] - Whether to return focus to the toggle button.
 */
export function closeMobileMenu(returnFocus = true) {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('primary-nav');
  if (!toggleBtn || !navMenu) return;

  if (isMenuOpen) {
    isMenuOpen = false;
    toggleBtn.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('is-open');

    if (returnFocus) {
      toggleBtn.focus();
    }
  }
}

/**
 * Toggles the mobile navigation menu open/close state.
 */
export function toggleMobileMenu() {
  if (isMenuOpen) {
    closeMobileMenu(true);
  } else {
    openMobileMenu();
  }
}

/**
 * Updates the active link indicator in the primary navigation.
 * @param {string} sectionId - The ID of the currently active section.
 */
export function setActiveSection(sectionId) {
  const navLinks = document.querySelectorAll('#primary-nav .nav-link');
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === `#${sectionId}`) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

/**
 * Initializes the IntersectionObserver to detect the active section during scroll.
 */
function initActiveSectionObserver() {
  const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
  if (!sections.length) return;

  if ('IntersectionObserver' in window) {
    // Disconnect any existing observer
    if (activeObserver) {
      activeObserver.disconnect();
    }

    // Observer configured with rootMargin that detects sections in the upper-middle reading band
    activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0
      }
    );

    sections.forEach((section) => activeObserver.observe(section));
  } else {
    // Fallback: Throttled scroll listener for older browsers
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + 120;
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section.offsetTop <= scrollPos) {
              setActiveSection(section.id);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
}

/**
 * Initializes smooth in-page navigation for internal hash links.
 * Respects prefers-reduced-motion user preference.
 */
function initSmoothScroll() {
  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href || href === '#' || href === '#!') return;

    // Handle skip-to-content link specially if needed, but smooth scroll is also fine
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    // Close mobile menu if open
    if (isMenuOpen) {
      closeMobileMenu(false);
    }

    event.preventDefault();

    const reducedMotion = prefersReducedMotion();

    targetElement.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'start'
    });

    // Update URL hash cleanly without instant jump
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', href);
    } else {
      window.location.hash = href;
    }

    // Move focus to target element for keyboard and screen reader accessibility
    if (!targetElement.hasAttribute('tabindex')) {
      targetElement.setAttribute('tabindex', '-1');
      targetElement.addEventListener(
        'blur',
        () => targetElement.removeAttribute('tabindex'),
        { once: true }
      );
    }
    targetElement.focus({ preventScroll: true });
  });
}

/**
 * Initializes mobile navigation menu interactions and keyboard accessibility.
 */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('primary-nav');
  if (!toggleBtn || !navMenu) return;

  // Toggle button click
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMobileMenu();
  });

  // Close when pressing Escape anywhere
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      closeMobileMenu(true);
    }
  });

  // Close when clicking outside the header/menu
  document.addEventListener('click', (e) => {
    if (isMenuOpen && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      closeMobileMenu(false);
    }
  });

  // Close menu when resizing beyond mobile breakpoint (899px)
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (window.innerWidth >= 900 && isMenuOpen) {
        closeMobileMenu(false);
      }
    }, 100);
  }, { passive: true });
}

/**
 * Main initialization entry point for navigation and interaction features.
 */
export function initNavigation() {
  initMobileNavigation();
  initSmoothScroll();
  initActiveSectionObserver();
}
