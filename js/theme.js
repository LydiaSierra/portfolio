/**
 * Lydia Sierra — Personal Developer Portfolio
 * Theme Management Module (ES Module)
 * Handles light/dark theme switching, OS preference detection,
 * localStorage persistence with graceful fallback, and accessible labels.
 */

import { getCurrentLanguage, translations } from './i18n.js';

export const THEME_STORAGE_KEY = 'portfolio-theme';
export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';

/**
 * SVGs for theme toggle icon.
 * Sun icon represents switching to light mode.
 * Moon icon represents switching to dark mode.
 */
const ICONS = {
  // Shown in dark mode (clicking will switch to light mode)
  sun: `<svg class="theme-icon" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>`,

  // Shown in light mode (clicking will switch to dark mode)
  moon: `<svg class="theme-icon" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>`
};

let currentTheme = THEME_LIGHT;
let hasExplicitUserPreference = false;
let isThemeInitialized = false;
let mediaQueryList = null;
let mediaQueryListener = null;

/**
 * Safely reads the theme preference from localStorage.
 * Only returns 'light' or 'dark'; returns null if not set or invalid.
 * @returns {string|null}
 */
export function getStoredTheme() {
  try {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === THEME_LIGHT || stored === THEME_DARK) {
        return stored;
      }
    }
  } catch (err) {
    console.warn('localStorage not accessible for reading theme:', err);
  }
  return null;
}

/**
 * Safely persists the theme preference to localStorage.
 * @param {string} theme - 'light' or 'dark'
 */
export function setStoredTheme(theme) {
  try {
    if (typeof localStorage !== 'undefined') {
      if (theme === THEME_LIGHT || theme === THEME_DARK) {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
      } else {
        localStorage.removeItem(THEME_STORAGE_KEY);
      }
    }
  } catch (err) {
    console.warn('localStorage not accessible for saving theme:', err);
  }
}

/**
 * Determines whether the user's OS prefers dark mode.
 * @returns {boolean}
 */
export function getSystemPrefersDark() {
  try {
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  } catch (err) {
    console.warn('Unable to query matchMedia for system theme preference:', err);
  }
  return false;
}

/**
 * Returns the currently active theme ('light' or 'dark').
 * @returns {string}
 */
export function getTheme() {
  return currentTheme;
}

/**
 * Applies the requested theme to document and updates UI controls.
 * @param {string} theme - 'light' or 'dark'
 * @param {boolean} [persist=true] - Whether to save to localStorage
 * @param {boolean} [announce=false] - Whether to announce theme change to screen readers
 */
export function setTheme(theme, persist = true, announce = false) {
  const targetTheme = theme === THEME_DARK ? THEME_DARK : THEME_LIGHT;
  currentTheme = targetTheme;

  if (persist) {
    hasExplicitUserPreference = true;
    setStoredTheme(targetTheme);
  }

  // Update HTML data-theme attribute
  if (typeof document !== 'undefined' && document.documentElement) {
    document.documentElement.setAttribute('data-theme', targetTheme);
  }

  // Update all theme toggle buttons' icons, aria-labels, and titles
  updateThemeButtonUI();

  // Announce to screen reader if requested
  if (announce) {
    announceThemeChange(targetTheme);
  }
}

/**
 * Updates all theme toggle controls' icons and accessible text based on current theme and language.
 */
export function updateThemeButtonUI() {
  if (typeof document === 'undefined') return;

  const lang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';
  const dict = (translations && translations[lang]) || {};

  // If current is dark, action is to switch to light; if light, action is to switch to dark
  const isDark = currentTheme === THEME_DARK;
  const labelKey = isDark ? 'theme.toLight' : 'theme.toDark';
  const defaultLabel = isDark
    ? (lang === 'es' ? 'Cambiar a tema claro' : 'Switch to light theme')
    : (lang === 'es' ? 'Cambiar a tema oscuro' : 'Switch to dark theme');

  const labelText = dict[labelKey] || defaultLabel;

  // 1. Desktop icon-only button
  const desktopBtn = document.getElementById('theme-toggle');
  if (desktopBtn) {
    desktopBtn.setAttribute('aria-label', labelText);
    desktopBtn.setAttribute('title', labelText);
    desktopBtn.innerHTML = isDark ? ICONS.sun : ICONS.moon;
  }

  // 2. Mobile drawer button (with icon slot and text label)
  const drawerBtns = document.querySelectorAll('.btn-theme-drawer');
  drawerBtns.forEach((drawerBtn) => {
    drawerBtn.setAttribute('aria-label', labelText);
    drawerBtn.setAttribute('title', labelText);
    const iconSlot = drawerBtn.querySelector('.theme-icon-slot');
    if (iconSlot) {
      iconSlot.innerHTML = isDark ? ICONS.sun : ICONS.moon;
    }
    const textSlot = drawerBtn.querySelector('.theme-drawer-text');
    if (textSlot) {
      textSlot.textContent = labelText;
    }
  });
}

/**
 * Announces the active theme change to screen readers via the live region.
 * @param {string} theme - 'light' or 'dark'
 */
function announceThemeChange(theme) {
  if (typeof document === 'undefined') return;
  const announcer = document.getElementById('i18n-announcer');
  if (!announcer) return;

  const lang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';
  const dict = (translations && translations[lang]) || {};

  const announceKey = theme === THEME_DARK ? 'theme.darkAnnounce' : 'theme.lightAnnounce';
  const defaultAnnounce = theme === THEME_DARK
    ? (lang === 'es' ? 'Tema oscuro activado.' : 'Dark theme activated.')
    : (lang === 'es' ? 'Tema claro activado.' : 'Light theme activated.');

  announcer.textContent = dict[announceKey] || defaultAnnounce;
}

/**
 * Initializes the theme module:
 * 1. Checks explicit stored preference in localStorage.
 * 2. If no saved choice, detects and applies operating system preference.
 * 3. Binds click listeners via event delegation on all theme buttons.
 * 4. Listens for OS theme preference changes (only active when no manual choice exists).
 */
export function initTheme() {
  if (isThemeInitialized) return;
  isThemeInitialized = true;

  const stored = getStoredTheme();

  if (stored) {
    hasExplicitUserPreference = true;
    setTheme(stored, false, false);
  } else {
    hasExplicitUserPreference = false;
    const initial = getSystemPrefersDark() ? THEME_DARK : THEME_LIGHT;
    setTheme(initial, false, false);
  }

  // Delegated click listener for theme toggle buttons (handles desktop, drawer, and SVGs)
  if (typeof document !== 'undefined') {
    document.addEventListener('click', (event) => {
      const toggleBtn = event.target.closest('[data-action="theme-toggle"], #theme-toggle');
      if (!toggleBtn) return;

      event.preventDefault();
      const nextTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
      setTheme(nextTheme, true, true);
    });
  }

  // Listen for operating system theme changes when user has not set an explicit override
  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
    mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQueryListener = (e) => {
      if (!hasExplicitUserPreference) {
        const nextTheme = e.matches ? THEME_DARK : THEME_LIGHT;
        setTheme(nextTheme, false, false);
      }
    };

    if (typeof mediaQueryList.addEventListener === 'function') {
      mediaQueryList.addEventListener('change', mediaQueryListener);
    } else if (typeof mediaQueryList.addListener === 'function') {
      mediaQueryList.addListener(mediaQueryListener);
    }
  }
}

/**
 * Cleans up media query listeners and resets initialization state (useful for testing).
 */
export function cleanupTheme() {
  if (mediaQueryList && mediaQueryListener) {
    if (typeof mediaQueryList.removeEventListener === 'function') {
      mediaQueryList.removeEventListener('change', mediaQueryListener);
    } else if (typeof mediaQueryList.removeListener === 'function') {
      mediaQueryList.removeListener(mediaQueryListener);
    }
    mediaQueryList = null;
    mediaQueryListener = null;
  }
  isThemeInitialized = false;
  hasExplicitUserPreference = false;
}
