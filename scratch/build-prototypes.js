const fs = require('fs');
const path = require('path');

const htmlContent = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projects Section Redesign — Full-Width Immersive Showcase Lab</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    /* ==========================================================================
       1. Design Tokens & Root Theme (Exact Portfolio Tokens)
       ========================================================================== */
    :root, [data-theme="light"] {
      --color-bg: #F8F5F2;
      --color-surface: #FFFFFF;
      --color-surface-subtle: #FBF9F7;
      --color-text-main: #2E2A27;
      --color-text-muted: #6E6862;
      --color-primary: #4A5D4E;
      --color-primary-hover: #3C4B3F;
      --color-primary-contrast: #FFFFFF;
      --color-accent-turquoise: #7BCBC4;
      --color-turquoise-text: #25726B;
      --color-accent-pink: #F2D5D5;
      --color-border: #E6E1DC;
      --color-border-subtle: #F0ECE7;
      --font-display: 'Instrument Serif', Georgia, serif;
      --font-body: 'Inter', system-ui, -apple-system, sans-serif;
      --font-mono: 'JetBrains Mono', ui-monospace, monospace;
      --radius-xs: 4px;
      --radius-sm: 8px;
      --radius-md: 12px;
      --radius-lg: 16px;
      --radius-xl: 24px;
      --radius-full: 9999px;
      --shadow-sm: 0 1px 3px rgba(46, 42, 39, 0.04), 0 1px 2px rgba(46, 42, 39, 0.02);
      --shadow-md: 0 4px 16px rgba(46, 42, 39, 0.06), 0 2px 6px rgba(46, 42, 39, 0.03);
      --shadow-lg: 0 16px 44px rgba(46, 42, 39, 0.1), 0 4px 14px rgba(46, 42, 39, 0.04);
      --shadow-elevated: 0 24px 54px rgba(46, 42, 39, 0.16);
      --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
      --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
      --transition-smooth: 350ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    [data-theme="dark"] {
      --color-bg: #181614;
      --color-surface: #24201D;
      --color-surface-subtle: #2D2825;
      --color-text-main: #F5F2EE;
      --color-text-muted: #A8A199;
      --color-primary: #6E8E74;
      --color-primary-hover: #82A388;
      --color-primary-contrast: #181614;
      --color-accent-turquoise: #7BCBC4;
      --color-turquoise-text: #7BCBC4;
      --color-accent-pink: #F2D5D5;
      --color-border: #3A342F;
      --color-border-subtle: #2F2925;
      --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.25);
      --shadow-md: 0 4px 18px rgba(0, 0, 0, 0.35);
      --shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.55);
      --shadow-elevated: 0 24px 58px rgba(0, 0, 0, 0.7);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--color-bg);
      color: var(--color-text-main);
      font-family: var(--font-body);
      line-height: 1.6;
      transition: background-color var(--transition-base), color var(--transition-base);
      overflow-x: hidden;
      min-height: 100vh;
    }

    /* Top Sticky Control & Review Bar */
    .board-nav {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: var(--color-surface);
      border-bottom: 1px solid var(--color-border);
      padding: 0.75rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      box-shadow: var(--shadow-sm);
      flex-wrap: wrap;
    }
    .board-brand {
      display: flex;
      align-items: center;
      gap: 0.65rem;
    }
    .board-title {
      font-family: var(--font-display);
      font-size: 1.35rem;
      color: var(--color-text-main);
    }
    .board-badge {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      background: rgba(123, 203, 196, 0.18);
      color: var(--color-turquoise-text);
      padding: 0.2rem 0.55rem;
      border-radius: var(--radius-full);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 600;
    }
    .board-controls {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      flex-wrap: wrap;
    }
    .control-label {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: var(--color-text-muted);
      text-transform: uppercase;
      margin-right: 0.15rem;
    }
    .btn-toggle {
      padding: 0.4rem 0.75rem;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-full);
      background: var(--color-surface);
      font-size: 0.8rem;
      cursor: pointer;
      color: var(--color-text-main);
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      transition: all var(--transition-fast);
    }
    .btn-toggle:hover {
      border-color: var(--color-primary);
    }
    .btn-toggle.active {
      background: var(--color-primary);
      color: var(--color-primary-contrast);
      border-color: var(--color-primary);
      font-weight: 600;
      box-shadow: 0 2px 6px rgba(74, 93, 78, 0.25);
    }
    .nav-divider {
      border-left: 1px solid var(--color-border);
      height: 22px;
      margin: 0 0.25rem;
    }

    /* Main Container — Full-Width Fluid Expansion */
    .board-container {
      width: 100%;
      max-width: 1480px;
      margin: 0 auto;
      padding: 1.75rem clamp(1rem, 2.5vw, 2.5rem) 4rem clamp(1rem, 2.5vw, 2.5rem);
    }

    /* Concept Header Card */
    .concept-banner {
      background: var(--color-surface);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-xl);
      padding: 1.35rem 2rem;
      margin-bottom: 2rem;
      box-shadow: var(--shadow-sm);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.25rem;
    }
    .concept-banner-info h2 {
      font-family: var(--font-display);
      font-size: 2rem;
      color: var(--color-text-main);
      margin-bottom: 0.2rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .concept-banner-info p {
      color: var(--color-text-muted);
      font-size: 0.95rem;
      max-width: 80ch;
    }
    .concept-pill {
      font-family: var(--font-mono);
      font-size: 0.78rem;
      padding: 0.35rem 0.8rem;
      border-radius: var(--radius-full);
      background: rgba(74, 93, 78, 0.12);
      color: var(--color-primary);
      font-weight: 600;
      white-space: nowrap;
    }

    /* Simulation Viewport Wrapper */
    .viewport-frame {
      transition: max-width var(--transition-base);
      margin: 0 auto;
      width: 100%;
    }
    .viewport-frame.tablet {
      max-width: 768px;
      border: 2px dashed var(--color-border);
      padding: 1rem;
      border-radius: var(--radius-xl);
      background: var(--color-surface-subtle);
    }
    .viewport-frame.mobile {
      max-width: 375px;
      border: 2px dashed var(--color-border);
      padding: 0.75rem;
      border-radius: var(--radius-xl);
      background: var(--color-surface-subtle);
    }

    /* ==========================================================================
       THE FULL-WIDTH IMMERSIVE SHOWCASE (The Image IS the Showcase)
       ========================================================================== */
    .showcase-stage {
      position: relative;
      width: 100%;
      height: clamp(560px, 72vh, 760px);
      min-height: 540px;
      border-radius: var(--radius-xl);
      overflow: hidden;
      background-color: #141210;
      border: 1px solid var(--color-border);
      box-shadow: var(--shadow-lg);
      margin-bottom: 2.5rem;
      user-select: none;
    }

    /* 1. Full-Bleed Image Background Layer */
    .showcase-bg-layer {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      overflow: hidden;
    }
    .showcase-bg-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      display: block;
      transition: opacity 300ms ease, transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
      transform: scale(1);
    }
    .showcase-stage:hover .showcase-bg-img {
      transform: scale(1.02);
    }

    /* 2. Directional Gradient Scrim (Protects Contrast Without Murkiness) */
    .showcase-scrim {
      position: absolute;
      inset: 0;
      z-index: 2;
      pointer-events: none;
      background:
        /* Top bar vignette for upper indicators and badges */
        linear-gradient(180deg, rgba(16, 14, 12, 0.75) 0%, rgba(16, 14, 12, 0.25) 20%, transparent 40%),
        /* Bottom-to-top gradient for title, tags, and action buttons */
        linear-gradient(0deg, rgba(16, 14, 12, 0.96) 0%, rgba(16, 14, 12, 0.84) 34%, rgba(16, 14, 12, 0.3) 68%, transparent 100%),
        /* Directional left-to-right vignette to anchor typography */
        linear-gradient(90deg, rgba(16, 14, 12, 0.82) 0%, rgba(16, 14, 12, 0.42) 48%, transparent 88%);
    }

    /* 3. The Interactive Integrated Overlay (Floats Directly Over the Image) */
    .showcase-overlay {
      position: absolute;
      inset: 0;
      z-index: 3;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: clamp(1.5rem, 3.2vw, 3.25rem);
      pointer-events: none; /* Children restore pointer events */
    }

    /* Top Bar: Eyebrow Badge + Position Stepper */
    .showcase-top-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      pointer-events: auto;
      flex-wrap: wrap;
    }
    .showcase-eyebrow-pill {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 600;
      color: #7BCBC4;
      padding: 0.4rem 0.85rem;
      border-radius: var(--radius-full);
      background: rgba(20, 18, 16, 0.65);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(123, 203, 196, 0.35);
      box-shadow: 0 4px 12px rgba(0,0,0,0.25);
    }
    .showcase-stepper {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      background: rgba(20, 18, 16, 0.65);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.16);
      padding: 0.3rem 0.4rem 0.3rem 0.85rem;
      border-radius: var(--radius-full);
      box-shadow: 0 4px 12px rgba(0,0,0,0.25);
    }
    .showcase-counter {
      font-family: var(--font-mono);
      font-size: 0.82rem;
      font-weight: 600;
      color: #FFFFFF;
      margin-right: 0.4rem;
    }
    .showcase-step-btn {
      padding: 0.25rem 0.65rem;
      border-radius: var(--radius-full);
      border: 1px solid transparent;
      background: transparent;
      color: rgba(255, 255, 255, 0.7);
      font-family: var(--font-mono);
      font-size: 0.75rem;
      cursor: pointer;
      transition: all var(--transition-fast);
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
    }
    .showcase-step-btn:hover {
      color: #FFFFFF;
      background: rgba(255, 255, 255, 0.1);
    }
    .showcase-step-btn.active {
      background: var(--color-primary);
      color: #FFFFFF;
      border-color: rgba(255, 255, 255, 0.25);
      font-weight: 600;
    }

    /* Edge Floating Navigation Arrows */
    .showcase-edge-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 52px;
      height: 52px;
      border-radius: var(--radius-full);
      background: rgba(24, 22, 20, 0.6);
      backdrop-filter: blur(14px);
      border: 1px solid rgba(255, 255, 255, 0.22);
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1.3rem;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
      z-index: 10;
      pointer-events: auto;
      transition: all var(--transition-fast);
    }
    .showcase-edge-arrow:hover {
      background: var(--color-primary);
      border-color: var(--color-primary);
      transform: translateY(-50%) scale(1.08);
      box-shadow: 0 8px 24px rgba(74, 93, 78, 0.45);
    }
    .showcase-arrow-prev { left: clamp(1rem, 2.5vw, 2.5rem); }
    .showcase-arrow-next { right: clamp(1rem, 2.5vw, 2.5rem); }

    /* Bottom Information Cluster */
    .showcase-info-cluster {
      pointer-events: auto;
      max-width: 820px;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      transition: opacity 250ms ease, transform 300ms ease;
    }
    .showcase-title {
      font-family: var(--font-display);
      font-size: clamp(2.4rem, 2rem + 1.8vw, 4rem);
      line-height: 1.1;
      color: #FFFFFF;
      margin: 0;
      text-shadow: 0 2px 14px rgba(0, 0, 0, 0.5);
      font-weight: 400;
      letter-spacing: -0.01em;
    }
    .showcase-desc {
      font-size: clamp(0.95rem, 0.9rem + 0.3vw, 1.1rem);
      color: rgba(245, 242, 238, 0.92);
      line-height: 1.55;
      max-width: 64ch;
      text-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
    }
    .showcase-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin-top: 0.15rem;
    }
    .showcase-tag-pill {
      font-family: var(--font-body);
      font-size: 0.76rem;
      padding: 0.3rem 0.75rem;
      border-radius: var(--radius-full);
      background: rgba(24, 22, 20, 0.6);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.22);
      color: #FFFFFF;
      font-weight: 500;
      white-space: nowrap;
    }
    .showcase-tag-pill.accent-primary {
      background: rgba(74, 93, 78, 0.4);
      border-color: rgba(110, 142, 116, 0.5);
      color: #DDE8DF;
    }
    .showcase-tag-pill.accent-turquoise {
      background: rgba(123, 203, 196, 0.22);
      border-color: rgba(123, 203, 196, 0.45);
      color: #B2E8E3;
    }
    .showcase-tag-pill.accent-pink {
      background: rgba(242, 213, 213, 0.22);
      border-color: rgba(242, 213, 213, 0.45);
      color: #F8E2E2;
    }

    /* Actions Row */
    .showcase-actions {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      flex-wrap: wrap;
      margin-top: 0.5rem;
    }
    .btn-showcase-primary {
      background: var(--color-primary);
      color: #FFFFFF;
      border: 1px solid rgba(255, 255, 255, 0.25);
      padding: 0.75rem 1.65rem;
      border-radius: var(--radius-sm);
      font-size: 0.92rem;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.35);
      transition: all var(--transition-fast);
      text-decoration: none;
    }
    .btn-showcase-primary:hover {
      background: var(--color-primary-hover);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(74, 93, 78, 0.4);
    }
    .btn-showcase-secondary {
      background: rgba(24, 22, 20, 0.65);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.28);
      color: #FFFFFF;
      padding: 0.75rem 1.35rem;
      border-radius: var(--radius-sm);
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      transition: all var(--transition-fast);
    }
    .btn-showcase-secondary:hover {
      background: rgba(255, 255, 255, 0.22);
      border-color: #FFFFFF;
      transform: translateY(-2px);
    }

    /* Mobile Responsive Overrides */
    @media (max-width: 768px) {
      .showcase-stage {
        height: clamp(560px, 82vh, 680px);
      }
      .showcase-overlay {
        padding: 1.5rem;
      }
      .showcase-edge-arrow {
        display: none; /* Mobile uses bottom controls or touch swipe */
      }
      .showcase-title {
        font-size: clamp(2rem, 1.8rem + 1.2vw, 2.7rem);
      }
      .showcase-desc {
        font-size: 0.92rem;
        line-height: 1.5;
      }
      .showcase-stepper .showcase-step-btn span.step-title {
        display: none; /* Keep step numbers only on mobile */
      }
    }

    /* Mobile Quick Navigation Bar inside overlay bottom */
    .mobile-nav-cluster {
      display: none;
      align-items: center;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }
    @media (max-width: 768px) {
      .mobile-nav-cluster {
        display: flex;
      }
    }
    .mobile-arrow-btn {
      width: 44px;
      height: 44px;
      border-radius: var(--radius-full);
      background: rgba(24, 22, 20, 0.7);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1.1rem;
    }

    /* ==========================================================================
       CASE STUDY DETAIL MODAL (Accessible Dialog for Long-Form Spec)
       ========================================================================== */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(20, 18, 16, 0.65);
      backdrop-filter: blur(8px);
      z-index: 2000;
      opacity: 0;
      pointer-events: none;
      transition: opacity var(--transition-base);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: clamp(1rem, 2.5vw, 2rem);
    }
    .modal-overlay.active {
      opacity: 1;
      pointer-events: auto;
    }
    .modal-dialog {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      max-width: 780px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      padding: clamp(1.75rem, 3vw, 2.75rem);
      box-shadow: var(--shadow-elevated);
      position: relative;
      transform: scale(0.96) translateY(12px);
      transition: transform var(--transition-smooth);
    }
    .modal-overlay.active .modal-dialog {
      transform: scale(1) translateY(0);
    }
    .modal-close {
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;
      width: 38px;
      height: 38px;
      border-radius: var(--radius-full);
      border: 1px solid var(--color-border);
      background: var(--color-surface-subtle);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--color-text-main);
      font-size: 1.25rem;
      transition: all var(--transition-fast);
      z-index: 10;
    }
    .modal-close:hover {
      background: var(--color-primary);
      color: var(--color-primary-contrast);
      border-color: var(--color-primary);
    }

    /* Modal Content Typography */
    .modal-header-block {
      margin-bottom: 1.5rem;
      padding-bottom: 1.25rem;
      border-bottom: 1px solid var(--color-border-subtle);
    }
    .modal-badge {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--color-turquoise-text);
      font-weight: 600;
    }
    .modal-title {
      font-family: var(--font-display);
      font-size: clamp(2rem, 1.8rem + 1vw, 2.6rem);
      color: var(--color-text-main);
      margin: 0.35rem 0 0.5rem 0;
      line-height: 1.15;
    }
    .modal-subtitle {
      font-size: 0.96rem;
      color: var(--color-text-muted);
      line-height: 1.55;
    }
    .modal-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.25rem;
      margin-bottom: 1.5rem;
    }
    .modal-block {
      background: var(--color-surface-subtle);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-md);
      padding: 1.25rem 1.4rem;
    }
    .modal-block h4 {
      font-family: var(--font-mono);
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--color-primary);
      margin-bottom: 0.45rem;
    }
    .modal-block p {
      font-size: 0.88rem;
      color: var(--color-text-main);
      line-height: 1.6;
    }
    .modal-highlights {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.55rem;
    }
    .modal-highlights li {
      font-size: 0.86rem;
      color: var(--color-text-main);
      line-height: 1.5;
      padding-left: 1.35rem;
      position: relative;
    }
    .modal-highlights li::before {
      content: "✦";
      position: absolute;
      left: 0;
      top: 0;
      color: var(--color-accent-turquoise);
      font-size: 0.8rem;
    }
    .modal-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin-bottom: 1.5rem;
    }
    .modal-tag {
      font-family: var(--font-body);
      font-size: 0.75rem;
      padding: 0.25rem 0.65rem;
      border-radius: var(--radius-full);
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      color: var(--color-text-main);
      font-weight: 500;
    }
    .modal-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--color-border-subtle);
      flex-wrap: wrap;
    }
    .btn-modal-action {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--color-primary);
      color: var(--color-primary-contrast);
      padding: 0.65rem 1.35rem;
      border-radius: var(--radius-sm);
      font-size: 0.88rem;
      font-weight: 600;
      text-decoration: none;
      border: 1px solid transparent;
      transition: all var(--transition-fast);
    }
    .btn-modal-action:hover {
      background: var(--color-primary-hover);
      transform: translateY(-1px);
    }
    .modal-status-badge {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--color-text-muted);
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
    }

    /* ==========================================================================
       ARCHIVE SECTION (Preserved Multi-Project Explorations)
       ========================================================================== */
    .archive-container {
      margin-top: 3.5rem;
      padding-top: 2rem;
      border-top: 2px dashed var(--color-border);
      display: none;
    }
    .archive-container.visible {
      display: block;
    }
    .archive-header {
      margin-bottom: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .archive-stage {
      background: var(--color-surface);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-xl);
      padding: 2rem;
      box-shadow: var(--shadow-sm);
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>

  <!-- Top Sticky Control Navigation -->
  <header class="board-nav">
    <div class="board-brand">
      <span class="board-title">Lydia Sierra</span>
      <span class="board-badge">Projects Showcase Lab</span>
    </div>
    <div class="board-controls">
      <span class="control-label">View:</span>
      <button class="btn-toggle active" id="btn-view-immersive" title="Full-width immersive showcase">⭐ Full-Width Immersive</button>

      <span class="nav-divider"></span>

      <span class="control-label">Controls:</span>
      <button class="btn-toggle" onclick="toggleTheme()" title="Toggle Light / Dark Theme">🌓 Theme</button>
      <button class="btn-toggle" onclick="setViewport('desktop')" title="Desktop View">🖥️ Full (1480px)</button>
      <button class="btn-toggle" onclick="setViewport('tablet')" title="Tablet View (768px)">📱 Tablet</button>
      <button class="btn-toggle" onclick="setViewport('mobile')" title="Mobile View (375px)">📱 Mobile</button>

      <span class="nav-divider"></span>

      <button class="btn-toggle" id="btn-toggle-archive" onclick="toggleArchive()" title="View previous concept explorations">📁 Archive</button>
    </div>
  </header>

  <main class="board-container">

    <!-- Active Concept Description Banner -->
    <section class="concept-banner" id="concept-banner">
      <div class="concept-banner-info">
        <h2>Full-Width Immersive Project Showcase</h2>
        <p>
          The project image fills the entire carousel stage, while title, concise description, technology tags, and actions float directly on top in an art-directed overlay. Full architectural details open in an accessible modal.
        </p>
      </div>
      <div class="concept-banner-meta">
        <span class="concept-pill">⭐ Curated Digital Exhibition Mode</span>
      </div>
    </section>

    <!-- Simulation Viewport Enclosure -->
    <div class="viewport-frame" id="viewport-frame">

      <!-- ================================================================== -->
      <!-- THE FULL-WIDTH IMMERSIVE PROJECT SHOWCASE                          -->
      <!-- ================================================================== -->
      <section class="showcase-stage" id="showcase-stage" aria-label="Featured Projects Showcase">

        <!-- 1. Background Image Layer (The Image IS the showcase) -->
        <div class="showcase-bg-layer">
          <img id="showcase-bg" class="showcase-bg-img" src="./project-flashcards.svg" alt="Project visual showcase">
        </div>

        <!-- 2. Photographic / Editorial Directional Gradient Scrim -->
        <div class="showcase-scrim" aria-hidden="true"></div>

        <!-- 3. Floating Edge Navigation Arrows (Desktop / Tablet) -->
        <button class="showcase-edge-arrow showcase-arrow-prev" onclick="prevProject()" aria-label="Previous project" title="Previous Project (Left Arrow)">←</button>
        <button class="showcase-edge-arrow showcase-arrow-next" onclick="nextProject()" aria-label="Next project" title="Next Project (Right Arrow)">→</button>

        <!-- 4. Interactive Overlay Floating Directly Over the Image -->
        <div class="showcase-overlay">

          <!-- Top Row: Eyebrow Badge + Position Stepper -->
          <div class="showcase-top-bar">
            <span class="showcase-eyebrow-pill" id="showcase-badge">ANGULAR 17+ SIGNALS · ACTIVE RECALL</span>
            
            <div class="showcase-stepper">
              <span class="showcase-counter" id="showcase-counter">01 / 04</span>
              <button class="showcase-step-btn active" onclick="goToProject(0)" id="step-btn-0" title="01. Flashcards App">
                <span>01</span>
                <span class="step-title">Flashcards</span>
              </button>
              <button class="showcase-step-btn" onclick="goToProject(1)" id="step-btn-1" title="02. GeDocs">
                <span>02</span>
                <span class="step-title">GeDocs</span>
              </button>
              <button class="showcase-step-btn" onclick="goToProject(2)" id="step-btn-2" title="03. Portfolio">
                <span>03</span>
                <span class="step-title">Portfolio</span>
              </button>
              <button class="showcase-step-btn" onclick="goToProject(3)" id="step-btn-3" title="04. Commercial Web">
                <span>04</span>
                <span class="step-title">Freelance</span>
              </button>
            </div>
          </div>

          <!-- Bottom Row: Title, Concise Bio, Tags, and Action Buttons -->
          <div class="showcase-info-cluster" id="showcase-info">
            <h3 class="showcase-title" id="showcase-title">Flashcards App</h3>
            <p class="showcase-desc" id="showcase-desc">
              Interactive web application for active recall and spaced-repetition learning with fine-grained reactive state and offline persistence.
            </p>

            <div class="showcase-tags" id="showcase-tags">
              <!-- Rendered via JS -->
            </div>

            <div class="showcase-actions">
              <button class="btn-showcase-primary" onclick="openCaseStudyModal()" id="btn-explore-modal">
                <span>Explore Case Study</span>
                <span>→</span>
              </button>
              <a id="showcase-repo-link" href="https://github.com/LydiaSierra" target="_blank" rel="noopener noreferrer" class="btn-showcase-secondary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <span>GitHub Repository</span>
              </a>
              <a id="showcase-demo-link" href="#" target="_blank" rel="noopener noreferrer" class="btn-showcase-secondary" style="display:none;">
                <span>Live Demo ↗</span>
              </a>

              <!-- Mobile Dedicated Navigation Buttons -->
              <div class="mobile-nav-cluster">
                <button class="mobile-arrow-btn" onclick="prevProject()" aria-label="Previous Project">←</button>
                <button class="mobile-arrow-btn" onclick="nextProject()" aria-label="Next Project">→</button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div><!-- /viewport-frame -->

    <!-- ================================================================== -->
    <!-- ARCHIVE SECTION (Previous Concepts Preserved for Comparison)        -->
    <!-- ================================================================== -->
    <section class="archive-container" id="archive-section">
      <div class="archive-header">
        <div>
          <h3 style="font-family:var(--font-display); font-size:1.85rem;">Archive: Previous Exploration Prototypes</h3>
          <p style="color:var(--color-text-muted); font-size:0.9rem;">
            Preserved for design reference: Asymmetric Split, Bento, Rail, and Atelier prototypes.
          </p>
        </div>
      </div>

      <div class="archive-stage">
        <h4 style="font-family:var(--font-display); font-size:1.4rem; margin-bottom:1rem;">Comparison Notes</h4>
        <p style="font-size:0.9rem; color:var(--color-text-muted); margin-bottom:1rem;">
          The initial explorations (Split and Bento) placed narrative text and tags in panels beside or below the visual card. The refined <strong>Full-Width Immersive Showcase</strong> above integrates the visual and narrative into a single cohesive stage, utilizing the full horizontal viewport and reserving all long-form architectural breakdowns for the modal dialog.
        </p>
      </div>
    </section>

  </main>

  <!-- ================================================================== -->
  <!-- ACCESSIBLE CASE STUDY DETAIL MODAL                                 -->
  <!-- ================================================================== -->
  <div class="modal-overlay" id="case-study-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onclick="closeCaseStudyModal()">
    <div class="modal-dialog" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeCaseStudyModal()" aria-label="Close Case Study Modal">✕</button>
      <div id="modal-body">
        <!-- Rendered dynamically via JavaScript -->
      </div>
    </div>
  </div>

  <script>
    // Authentic, verified project database conforming to Lydia's real background
    const projects = [
      {
        id: 'flashcards-app',
        title: 'Flashcards App',
        subtitle: 'Interactive web application for active recall and spaced-repetition learning with client-side persistence',
        badge: 'Angular 17+ Signals · Active Recall',
        image: './project-flashcards.svg',
        shortBio: 'Interactive web application for active recall and spaced-repetition learning with fine-grained reactive state and offline persistence.',
        overview: 'A distraction-free, self-directed learning tool built to optimize memory retention through spaced repetition algorithms. Features rapid keyboard navigation, custom deck creation, self-assessment scoring, and offline-first Local Storage synchronization.',
        problem: 'Self-directed learners need an intuitive, distraction-free study environment to organize card decks, test memory retention, and track learning progress without complicated backend overhead or subscription paywalls.',
        contribution: 'Designed the complete frontend architecture from the ground up, utilizing modern Angular Signals for fine-grained reactive state and offline-first Local Storage persistence.',
        architecture: 'Decoupled signal-based stores managing study decks, session states, and spaced-repetition retention metrics without Zone.js change-detection overhead.',
        highlights: [
          'Fine-grained reactivity with Angular Signals for smooth card state transitions without Zone.js overhead',
          'Client-side Local Storage persistence preserving decks, cards, and study progress across sessions',
          'Accessible keyboard controls allowing rapid card flipping, self-assessment, and deck traversal',
          'Responsive, clean UI styled with utility-first Tailwind CSS, optimized for mobile and desktop screens'
        ],
        tags: [
          { name: 'Angular', type: 'accent-primary' },
          { name: 'TypeScript', type: 'neutral' },
          { name: 'Signals', type: 'accent-turquoise' },
          { name: 'Tailwind CSS', type: 'accent-pink' },
          { name: 'Local Storage', type: 'neutral' }
        ],
        repoUrl: 'https://github.com/LydiaSierra',
        demoUrl: null,
        demoStatus: 'Live demo coming soon'
      },
      {
        id: 'gedocs',
        title: 'GeDocs — Document Management',
        subtitle: 'Centralized administrative tracking and searchable document archive platform with role-based access',
        badge: 'PHP Laravel & MySQL · SENA Capstone',
        image: './gedocs-screenshot.png',
        shortBio: 'Centralized administrative tracking and searchable document archive platform with relational database integrity and role-based access.',
        overview: 'Institutional document tracking system developed as a capstone project for the SENA Software Analysis and Development curriculum. Centralizes official document workflows, approval review stages, audit logging, and role-based access control.',
        problem: 'Academic and administrative teams often experience lost documentation, misrouted approvals, and lack of searchable audit trails when handling files manually across departments.',
        contribution: 'Led the relational database schema design, RESTful controller architecture, and document lifecycle workflows as part of the SENA Software Analysis and Development capstone curriculum.',
        architecture: 'Normalized 3NF relational schema in MySQL with indexed foreign keys, Eloquent ORM relationships, and RESTful route controllers with RBAC role authorization.',
        highlights: [
          'Relational schema design in MySQL with normalized tables, foreign keys, and audit logging',
          'RESTful backend architecture facilitating document registration, review stages, and status queries',
          'Role-based access permissions separating administrative, reviewing, and standard contributor capabilities',
          'Search filtering by category, date range, and status chips, with structured data export'
        ],
        tags: [
          { name: 'PHP (Laravel)', type: 'accent-primary' },
          { name: 'MySQL', type: 'neutral' },
          { name: 'REST APIs', type: 'accent-turquoise' },
          { name: 'MVC Architecture', type: 'neutral' },
          { name: 'Bootstrap / CSS', type: 'accent-pink' }
        ],
        repoUrl: 'https://github.com/LydiaSierra',
        demoUrl: null,
        demoStatus: 'Institutional capstone project'
      },
      {
        id: 'portfolio',
        title: 'Personal Developer Portfolio',
        subtitle: 'Production static developer portfolio built with semantic HTML5, modern vanilla CSS3, and native ES modules',
        badge: 'Vanilla JS & Zero Build Tools',
        image: './project-portfolio.svg',
        shortBio: 'High-performance static developer portfolio built with semantic HTML5, modern vanilla CSS3, and native ES modules.',
        overview: 'A resilient, zero-build personal developer portfolio crafted to showcase projects, experience, and contact channels without bloated framework runtimes or fragile pipeline dependencies.',
        problem: 'Developers often overload personal portfolios with heavy frameworks, fragile build pipelines, and unnecessary dependencies that increase load latency, degrade accessibility, and complicate deployment.',
        contribution: 'Engineered a resilient static portfolio using semantic HTML5 landmarks, modern vanilla CSS custom property tokens, and native ES modules without any framework dependencies.',
        architecture: 'Lightweight ES module architecture featuring dynamic runtime internationalization (EN/ES), OS-aware persistent theme toggling, and WCAG 2.1 AA keyboard accessibility.',
        highlights: [
          'Zero build pipeline dependency: runs statically and instantly on GitHub Pages',
          'Complete English / Spanish internationalization with dynamic metadata updates',
          'System preference-aware light and dark theme engine with FOUC prevention',
          'Strict WCAG 2.1 AA keyboard navigation, contrast ratios, and accessible landmarks'
        ],
        tags: [
          { name: 'Semantic HTML5', type: 'accent-primary' },
          { name: 'Vanilla CSS3', type: 'neutral' },
          { name: 'ES Modules', type: 'accent-turquoise' },
          { name: 'i18n Engine', type: 'accent-pink' },
          { name: 'WCAG 2.1 AA', type: 'neutral' }
        ],
        repoUrl: 'https://github.com/LydiaSierra',
        demoUrl: 'https://lydiasierra.dev',
        demoStatus: 'Currently Live'
      },
      {
        id: 'freelance-sites',
        title: 'Local Business Digital Presences',
        subtitle: 'Accessible, responsive commercial websites for small independent businesses with fast load times',
        badge: 'Responsive Web UI & SEO · Lighthouse 100',
        image: './project-freelance.svg',
        shortBio: 'Lightweight, mobile-first commercial websites for small independent businesses optimized for search engines and swift customer contact.',
        overview: 'Commercial web solutions tailored for independent local shops, florists, and cafes. Designed from mobile wireframes up to deliver instantaneous load speeds, flawless accessibility, and conversion-oriented contact channels.',
        problem: 'Local business owners frequently struggle with slow, inaccessible template sites that fail mobile usability standards and hinder local customer inquiries.',
        contribution: 'Developed lightweight, mobile-first websites focusing on clean semantic markup, fast load times, and intuitive contact conversion funnels.',
        architecture: 'Modern CSS Grid and Flexbox layouts progressively enhanced across devices with optimized imagery and search engine metadata.',
        highlights: [
          'Mobile-first responsive layouts tested across real iOS and Android devices',
          'High Lighthouse performance scores through asset optimization and clean markup',
          'Accessible contact channels with verified mailto actions and clear phone triggers',
          'Local business search optimization and social sharing Open Graph metadata'
        ],
        tags: [
          { name: 'HTML5 / CSS3', type: 'accent-primary' },
          { name: 'Responsive UI', type: 'neutral' },
          { name: 'SEO Optimization', type: 'accent-turquoise' },
          { name: 'Performance', type: 'accent-pink' },
          { name: 'Lighthouse 100', type: 'neutral' }
        ],
        repoUrl: 'https://github.com/LydiaSierra',
        demoUrl: null,
        demoStatus: 'Client portfolio case studies'
      }
    ];

    let currentIdx = 0;
    let lastActiveElement = null;

    // -------------------------------------------------------------------------
    // Showcase Navigation & Rendering Engine
    // -------------------------------------------------------------------------
    function goToProject(idx) {
      if (idx < 0) idx = projects.length - 1;
      if (idx >= projects.length) idx = 0;
      currentIdx = idx;
      renderShowcase();
    }

    function nextProject() {
      goToProject(currentIdx + 1);
    }

    function prevProject() {
      goToProject(currentIdx - 1);
    }

    function renderShowcase() {
      const p = projects[currentIdx];
      const bgImg = document.getElementById('showcase-bg');
      const infoCluster = document.getElementById('showcase-info');

      // Subtle crossfade transition
      bgImg.style.opacity = '0.6';
      infoCluster.style.opacity = '0.6';
      infoCluster.style.transform = 'translateY(4px)';

      setTimeout(() => {
        bgImg.src = p.image;
        document.getElementById('showcase-badge').textContent = p.badge.toUpperCase();
        document.getElementById('showcase-counter').textContent = \`0\${currentIdx + 1} / 0\${projects.length}\`;
        document.getElementById('showcase-title').textContent = p.title;
        document.getElementById('showcase-desc').textContent = p.shortBio;

        // Tags
        document.getElementById('showcase-tags').innerHTML = p.tags
          .map(t => \`<span class="showcase-tag-pill \${t.type}">\${t.name}</span>\`)
          .join('');

        // Repo Link
        const repoBtn = document.getElementById('showcase-repo-link');
        if (p.repoUrl) {
          repoBtn.href = p.repoUrl;
          repoBtn.style.display = 'inline-flex';
        } else {
          repoBtn.style.display = 'none';
        }

        // Demo Link
        const demoBtn = document.getElementById('showcase-demo-link');
        if (p.demoUrl) {
          demoBtn.href = p.demoUrl;
          demoBtn.style.display = 'inline-flex';
        } else {
          demoBtn.style.display = 'none';
        }

        // Update Stepper buttons
        for (let i = 0; i < projects.length; i++) {
          const btn = document.getElementById(\`step-btn-\${i}\`);
          if (btn) btn.classList.toggle('active', i === currentIdx);
        }

        bgImg.style.opacity = '1';
        infoCluster.style.opacity = '1';
        infoCluster.style.transform = 'translateY(0)';
      }, 120);
    }

    // -------------------------------------------------------------------------
    // Case Study Detail Modal
    // -------------------------------------------------------------------------
    function openCaseStudyModal() {
      lastActiveElement = document.activeElement;
      const p = projects[currentIdx];
      const modalBody = document.getElementById('modal-body');

      modalBody.innerHTML = \`
        <div class="modal-header-block">
          <span class="modal-badge">\${p.badge}</span>
          <h3 class="modal-title" id="modal-title">\${p.title}</h3>
          <p class="modal-subtitle">\${p.subtitle}</p>
        </div>

        <div class="modal-grid">
          <div class="modal-block">
            <h4>01. Project Purpose &amp; Overview</h4>
            <p>\${p.overview}</p>
          </div>
          <div class="modal-block">
            <h4>02. The Problem Addressed</h4>
            <p>\${p.problem}</p>
          </div>
          <div class="modal-block">
            <h4>03. My Architectural Contribution</h4>
            <p>\${p.contribution}</p>
          </div>
        </div>

        <div class="modal-block" style="margin-bottom:1.5rem;">
          <h4>04. Key Technical Decisions &amp; Implementation</h4>
          <ul class="modal-highlights">
            \${p.highlights.map(h => \`<li>\${h}</li>\`).join('')}
          </ul>
        </div>

        <div class="modal-tags">
          \${p.tags.map(t => \`<span class="modal-tag">\${t.name}</span>\`).join('')}
        </div>

        <div class="modal-actions">
          \${p.repoUrl ? \`
            <a href="\${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-modal-action">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span>View GitHub Repository</span>
            </a>
          \` : ''}
          \${p.demoUrl ? \`
            <a href="\${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-modal-action" style="background:transparent; border-color:var(--color-primary); color:var(--color-primary);">
              <span>Visit Live Website ↗</span>
            </a>
          \` : ''}
          <span class="modal-status-badge">
            ● \${p.demoStatus}
          </span>
        </div>
      \`;

      const overlay = document.getElementById('case-study-modal');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';

      // Focus close button for accessibility
      const closeBtn = overlay.querySelector('.modal-close');
      if (closeBtn) closeBtn.focus();
    }

    function closeCaseStudyModal() {
      const overlay = document.getElementById('case-study-modal');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      if (lastActiveElement) lastActiveElement.focus();
    }

    // -------------------------------------------------------------------------
    // Keyboard Navigation & Touch Swipe
    // -------------------------------------------------------------------------
    window.addEventListener('keydown', (e) => {
      const modal = document.getElementById('case-study-modal');
      const isModalOpen = modal.classList.contains('active');

      if (e.key === 'Escape') {
        if (isModalOpen) closeCaseStudyModal();
      } else if (!isModalOpen) {
        if (e.key === 'ArrowRight') nextProject();
        if (e.key === 'ArrowLeft') prevProject();
      }
    });

    let touchStartX = 0;
    let touchEndX = 0;
    const stage = document.getElementById('showcase-stage');

    stage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    stage.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 45) {
        if (swipeDistance < 0) nextProject();
        else prevProject();
      }
    }, { passive: true });

    // -------------------------------------------------------------------------
    // Viewport Simulation & Theme Controls
    // -------------------------------------------------------------------------
    function setViewport(mode) {
      const frame = document.getElementById('viewport-frame');
      frame.className = 'viewport-frame ' + (mode === 'desktop' ? '' : mode);
    }

    function toggleTheme() {
      const html = document.documentElement;
      const cur = html.getAttribute('data-theme') || 'light';
      html.setAttribute('data-theme', cur === 'light' ? 'dark' : 'light');
    }

    function toggleArchive() {
      const sec = document.getElementById('archive-section');
      const btn = document.getElementById('btn-toggle-archive');
      const isVisible = sec.classList.toggle('visible');
      btn.classList.toggle('active', isVisible);
      if (isVisible) sec.scrollIntoView({ behavior: 'smooth' });
    }

    // Initialize Showcase
    renderShowcase();
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'projects-carousel-prototypes.html'), htmlContent, 'utf8');
console.log('Successfully updated scratch/projects-carousel-prototypes.html with Full-Width Immersive Showcase');
