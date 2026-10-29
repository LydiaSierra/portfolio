/**
 * Lydia Sierra — Personal Developer Portfolio
 * Navigation & Interaction Module (ES Module)
 * Handles responsive mobile navigation drawer, smooth in-page scrolling
 * with prefers-reduced-motion respect, keyboard accessibility, active-section tracking,
 * and dynamic desktop/tablet progressive overflow dropdown navigation.
 */

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'experience', 'languages', 'contact'];

let activeObserver = null;
let isMenuOpen = false;
let isOverflowMenuOpen = false;

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
  const lang = (typeof document !== 'undefined' && document.documentElement.lang) || 'en';
  toggleBtn.setAttribute('aria-label', lang === 'es' ? 'Cerrar menú de navegación' : 'Close navigation menu');
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
    const lang = (typeof document !== 'undefined' && document.documentElement.lang) || 'en';
    toggleBtn.setAttribute('aria-label', lang === 'es' ? 'Abrir menú de navegación' : 'Open navigation menu');
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
 * Opens the progressive overflow dropdown menu.
 */
export function openOverflowMenu() {
  const navOverflowBtn = document.getElementById('nav-overflow-btn');
  const navOverflowMenu = document.getElementById('nav-overflow-menu');
  if (!navOverflowBtn || !navOverflowMenu) return;

  isOverflowMenuOpen = true;
  navOverflowBtn.setAttribute('aria-expanded', 'true');
  navOverflowMenu.removeAttribute('hidden');

  const firstLink = navOverflowMenu.querySelector('.nav-link');
  if (firstLink) {
    firstLink.focus();
  }
}

/**
 * Closes the progressive overflow dropdown menu.
 * @param {boolean} [returnFocus=true] - Whether to return focus to the overflow button.
 */
export function closeOverflowMenu(returnFocus = true) {
  const navOverflowBtn = document.getElementById('nav-overflow-btn');
  const navOverflowMenu = document.getElementById('nav-overflow-menu');
  if (!navOverflowBtn || !navOverflowMenu) return;

  if (isOverflowMenuOpen) {
    isOverflowMenuOpen = false;
    navOverflowBtn.setAttribute('aria-expanded', 'false');
    navOverflowMenu.setAttribute('hidden', '');

    if (returnFocus) {
      navOverflowBtn.focus();
    }
  }
}

/**
 * Toggles the progressive overflow dropdown menu state.
 */
export function toggleOverflowMenu() {
  if (isOverflowMenuOpen) {
    closeOverflowMenu(true);
  } else {
    openOverflowMenu();
  }
}

/**
 * Restores all navigation list items back into the main nav-list before nav-overflow-item,
 * preserving their original canonical order defined by SECTION_IDS.
 */
export function restoreAllNavItemsToMainList() {
  const navList = document.getElementById('nav-list');
  const navOverflowItem = document.getElementById('nav-overflow-item');
  const navOverflowMenu = document.getElementById('nav-overflow-menu');
  if (!navList || !navOverflowItem || !navOverflowMenu) return;

  const allItems = [
    ...Array.from(navList.children).filter((el) => el !== navOverflowItem),
    ...Array.from(navOverflowMenu.children)
  ];

  allItems.sort((a, b) => {
    const idA = a.getAttribute('data-nav-id') || '';
    const idB = b.getAttribute('data-nav-id') || '';
    return SECTION_IDS.indexOf(idA) - SECTION_IDS.indexOf(idB);
  });

  allItems.forEach((item) => {
    navList.insertBefore(item, navOverflowItem);
  });
}

/**
 * Updates the active indicator state on the overflow button if an active link
 * currently resides inside the overflow dropdown menu.
 */
export function updateActiveOverflowState() {
  const navOverflowBtn = document.getElementById('nav-overflow-btn');
  const navOverflowMenu = document.getElementById('nav-overflow-menu');
  if (!navOverflowBtn || !navOverflowMenu) return;

  const hasActiveChild = !!navOverflowMenu.querySelector('.nav-link.active');
  if (hasActiveChild) {
    navOverflowBtn.classList.add('has-active');
  } else {
    navOverflowBtn.classList.remove('has-active');
  }
}

/**
 * Recalculates visible vs overflowing navigation links based on available horizontal space.
 * Only applies on desktop & tablet viewports (>= 900px).
 */
export function updateNavOverflow() {
  if (typeof window === 'undefined') return;

  const navList = document.getElementById('nav-list');
  const navOverflowItem = document.getElementById('nav-overflow-item');
  const navOverflowMenu = document.getElementById('nav-overflow-menu');
  const navMenu = document.getElementById('primary-nav');
  const headerContainer = document.querySelector('.header-container');

  if (!navList || !navOverflowItem || !navOverflowMenu || !navMenu) return;

  // On mobile (< 900px), always preserve all items in canonical drawer order
  if (window.innerWidth < 900) {
    closeOverflowMenu(false);
    restoreAllNavItemsToMainList();
    navOverflowItem.hidden = true;
    return;
  }

  // Restore everything to measure natural layout widths
  restoreAllNavItemsToMainList();
  navOverflowItem.hidden = true;

  const checkOverflow = () => {
    return (
      navList.scrollWidth > navMenu.clientWidth + 2 ||
      (headerContainer && headerContainer.scrollWidth > headerContainer.clientWidth + 2)
    );
  };

  if (!checkOverflow()) {
    // Fits comfortably without overflow menu
    navOverflowItem.hidden = true;
    closeOverflowMenu(false);
    updateActiveOverflowState();
    return;
  }

  // Items overflow: reveal overflow menu item
  navOverflowItem.hidden = false;

  // Shift items from the end of visible links into the overflow dropdown until it fits
  let iterations = 0;
  while (checkOverflow() && iterations < SECTION_IDS.length) {
    iterations++;
    const visibleItems = Array.from(navList.children).filter((el) => el !== navOverflowItem);
    // Maintain at least the first 2 primary links visible
    if (visibleItems.length <= 2) {
      break;
    }
    const lastItem = visibleItems[visibleItems.length - 1];
    navOverflowMenu.insertBefore(lastItem, navOverflowMenu.firstChild);
  }

  if (navOverflowMenu.children.length === 0) {
    navOverflowItem.hidden = true;
    closeOverflowMenu(false);
  } else {
    navOverflowItem.hidden = false;
  }

  updateActiveOverflowState();
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

  updateActiveOverflowState();
}

/**
 * Initializes the IntersectionObserver to detect the active section during scroll.
 */
function initActiveSectionObserver() {
  const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
  if (!sections.length) return;

  if ('IntersectionObserver' in window) {
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
    window.addEventListener(
      'scroll',
      () => {
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
      },
      { passive: true }
    );
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

    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    // Close mobile menu if open
    if (isMenuOpen) {
      closeMobileMenu(false);
    }

    // Close overflow dropdown if open
    if (isOverflowMenuOpen) {
      closeOverflowMenu(false);
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

  // Close drawer when mobile CV download link is clicked
  const drawerCv = navMenu.querySelector('.btn-drawer-cv');
  if (drawerCv) {
    drawerCv.addEventListener('click', () => {
      if (isMenuOpen) {
        closeMobileMenu(false);
      }
    });
  }

  // Close when pressing Escape anywhere
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      closeMobileMenu(true);
    }
  });

  // Trap keyboard focus inside mobile navigation drawer when open
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && isMenuOpen) {
      const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
      const drawerElements = Array.from(navMenu.querySelectorAll(focusableSelector)).filter(
        (el) => el.offsetParent !== null || window.getComputedStyle(el).display !== 'none'
      );
      const allFocusables = [toggleBtn, ...drawerElements];
      if (allFocusables.length === 0) return;

      const firstEl = allFocusables[0];
      const lastEl = allFocusables[allFocusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
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
  window.addEventListener(
    'resize',
    () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (window.innerWidth >= 900 && isMenuOpen) {
          closeMobileMenu(false);
        }
      }, 100);
    },
    { passive: true }
  );
}

/**
 * Initializes progressive overflow menu interactions and keyboard accessibility.
 */
function initOverflowMenu() {
  const navOverflowBtn = document.getElementById('nav-overflow-btn');
  const navOverflowMenu = document.getElementById('nav-overflow-menu');
  const navOverflowItem = document.getElementById('nav-overflow-item');
  if (!navOverflowBtn || !navOverflowMenu || !navOverflowItem) return;

  // Toggle button click
  navOverflowBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleOverflowMenu();
  });

  // Keyboard navigation on overflow button
  navOverflowBtn.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openOverflowMenu();
    }
  });

  // Keyboard traversal inside overflow menu
  navOverflowMenu.addEventListener('keydown', (e) => {
    const links = Array.from(navOverflowMenu.querySelectorAll('.nav-link'));
    if (!links.length) return;
    const currentIndex = links.indexOf(document.activeElement);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % links.length;
      links[nextIndex].focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + links.length) % links.length;
      links[prevIndex].focus();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeOverflowMenu(true);
    } else if (e.key === 'Tab') {
      closeOverflowMenu(false);
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (isOverflowMenuOpen && !navOverflowItem.contains(e.target)) {
      closeOverflowMenu(false);
    }
  });

  // Global escape to close dropdown
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOverflowMenuOpen) {
      closeOverflowMenu(true);
    }
  });
}

const SCROLL_THRESHOLD = 15;
let isNavbarScrolled = false;
let scrollTicking = false;

/**
 * Updates the navbar's scroll appearance class (.is-scrolled) based on window.scrollY.
 */
export function updateNavbarScroll() {
  const header = document.getElementById('header') || document.querySelector('.site-header');
  if (!header) return;

  const shouldBeScrolled = typeof window !== 'undefined' ? window.scrollY > SCROLL_THRESHOLD : false;
  if (shouldBeScrolled !== isNavbarScrolled) {
    isNavbarScrolled = shouldBeScrolled;
    if (isNavbarScrolled) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
}

/**
 * Throttled scroll listener handler using requestAnimationFrame.
 */
function onNavbarScroll() {
  if (!scrollTicking) {
    window.requestAnimationFrame(() => {
      updateNavbarScroll();
      scrollTicking = false;
    });
    scrollTicking = true;
  }
}

/**
 * Initializes the scroll-aware navbar appearance listener.
 */
export function initNavbarScroll() {
  // Evaluate initial scroll position immediately (handles page refresh & browser scroll restoration)
  updateNavbarScroll();

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', onNavbarScroll, { passive: true });
  }
}

/**
 * Main initialization entry point for navigation and interaction features.
 */
export function initNavigation() {
  initNavbarScroll();
  initMobileNavigation();
  initOverflowMenu();
  initSmoothScroll();
  initActiveSectionObserver();

  // Resize and language change listeners for dynamic overflow calculations
  let resizeTimer;
  const onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      updateNavOverflow();
    }, 60);
  };

  window.addEventListener('resize', onResize, { passive: true });
  window.addEventListener('languagechange', () => {
    setTimeout(updateNavOverflow, 50);
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      updateNavOverflow();
    });
  }

  if (typeof ResizeObserver !== 'undefined') {
    const headerContainer = document.querySelector('.header-container');
    if (headerContainer) {
      const ro = new ResizeObserver(() => {
        updateNavOverflow();
      });
      ro.observe(headerContainer);
    }
  }

  // Initial calculation after current event loop turn
  setTimeout(updateNavOverflow, 0);
}
