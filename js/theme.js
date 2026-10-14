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

/**
 * Safely reads the theme preference from localStorage.
 * @returns {string|null} - 'light', 'dark', or null if not set or storage is blocked.
 */
function getStoredTheme() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === THEME_LIGHT || stored === THEME_DARK) {
      return stored;
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
function setStoredTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (err) {
    console.warn('localStorage not accessible for saving theme:', err);
  }
}

/**
 * Determines whether the user's OS prefers dark mode.
 * @returns {boolean}
 */
function getSystemPrefersDark() {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
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
  document.documentElement.setAttribute('data-theme', targetTheme);

  // Update the toggle button icon, aria-label, and title
  updateThemeButtonUI();

  // Announce to screen reader if requested
  if (announce) {
    announceThemeChange(targetTheme);
  }
}

/**
 * Updates the theme toggle button's icon and accessible text based on current theme and language.
 */
export function updateThemeButtonUI() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const lang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';
  const dict = (translations && translations[lang]) || {};

  // If current is dark, action is to switch to light; if light, action is to switch to dark
  const isDark = currentTheme === THEME_DARK;
  const labelKey = isDark ? 'theme.toLight' : 'theme.toDark';
  const defaultLabel = isDark
    ? (lang === 'es' ? 'Cambiar a tema claro' : 'Switch to light theme')
    : (lang === 'es' ? 'Cambiar a tema oscuro' : 'Switch to dark theme');

  const labelText = dict[labelKey] || defaultLabel;

  btn.setAttribute('aria-label', labelText);
  btn.setAttribute('title', labelText);
  btn.innerHTML = isDark ? ICONS.sun : ICONS.moon;
}

/**
 * Announces the active theme change to screen readers via the live region.
 * @param {string} theme - 'light' or 'dark'
 */
function announceThemeChange(theme) {
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
 * - Detects initial theme from storage or system preferences.
 * - Applies theme and configures button event listeners.
 * - Listens for OS theme preference changes if user has not stored an explicit choice.
 */
export function initTheme() {
  const stored = getStoredTheme();

  if (stored) {
    hasExplicitUserPreference = true;
    setTheme(stored, false, false);
  } else {
    hasExplicitUserPreference = false;
    const initial = getSystemPrefersDark() ? THEME_DARK : THEME_LIGHT;
    setTheme(initial, false, false);
  }

  // Bind click listener on theme toggle button
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const nextTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
      setTheme(nextTheme, true, true);
    });
  }

  // Listen for system theme changes when user has not set an explicit override
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e) => {
      if (!hasExplicitUserPreference) {
        setTheme(e.matches ? THEME_DARK : THEME_LIGHT, false, false);
      }
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleSystemChange);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(handleSystemChange);
    }
  }
}
