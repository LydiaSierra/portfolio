# Lydia Sierra — Portfolio Design Specification (`DESIGN_SPEC.md`)

## Document Overview
This document specifies the visual identity, component architecture, layout patterns, responsive behavior, and accessibility standards for the personal developer portfolio of **Lydia Sierra**. 

The design is derived from the approved visual mockup ([assets/images/reference-mockup.jpg](file:///c:/Users/Lydia/Documents/GitHub/portfolio/assets/images/reference-mockup.jpg)) and incorporates the user-confirmed architectural decisions for **v1.0**. Implementation adheres strictly to a **vanilla HTML5, CSS3, and ES Module JavaScript** stack without external CSS frameworks, build pipelines, or backend dependencies.

---

## 1. Visual Identity & Design System

### 1.1 Brand Personality & Aesthetics
- **Warm & Editorial**: Evokes high-end print design and modern developer magazines through classical serif headlines paired with crisp geometric sans-serif UI typography.
- **Human-Centered & Personal**: Features authentic personal context (bio, interests, handwritten sign-off signature, status badge, warm organic botanical accents) rather than clinical corporate aesthetics.
- **Credible & Technical**: High density of authentic technical signals (clear skill categorization, concrete project tech tags, verified metric signals, direct source code links).
- **Restrained & Minimalist**: Generous negative space, subtle surface elevations, light borders, and disciplined use of accent colors.

---

### 1.2 Color Palette & Semantic Roles

The portfolio implements a dual-theme token architecture using CSS Custom Properties. The visual identity remains warm and editorial across both modes.

#### Light Theme (Default Canvas)
| Token Name | Hex Value | Semantic Role | Accessibility / Contrast Notes | Status |
| :--- | :--- | :--- | :--- | :--- |
| `--color-bg` | `#F8F5F2` | Page background (warm cream) | Base canvas. Contrast with `#2E2A27` is **12.6:1** (passes AAA). | **Confirmed** |
| `--color-surface` | `#FFFFFF` | Card panels, modal sheets, inputs | Elevated clean surface against cream canvas. | **Confirmed** |
| `--color-surface-subtle` | `#FBF9F7` | Inner nested cards (skills, stats) | Soft contrast against white surface. | **Proposed** |
| `--color-text-main` | `#2E2A27` | Headings, primary body text, icons | Dark warm charcoal brown. Primary reading contrast. | **Confirmed** |
| `--color-text-muted` | `#6E6862` | Secondary copy, metadata, timestamps | Contrast against `#FFFFFF` is **5.1:1** (passes AA). | **Proposed** |
| `--color-primary` | `#4A5D4E` | Primary buttons, active indicators, timeline | Rich earthy olive green. Contrast against `#FFFFFF` is **5.4:1** (passes AA). | **Confirmed** |
| `--color-primary-hover` | `#3C4B3F` | Hover/active state for primary buttons | Deepened olive green for tactile feedback. | **Proposed** |
| `--color-accent-turquoise`| `#7BCBC4` | Decorative highlights, icon backgrounds | Bright turquoise. Used as background fill or graphical accent. | **Confirmed** |
| `--color-turquoise-text` | `#2D7D76` | Text accent for italic words (e.g. *meaningful*) | Accessible darkened teal for text on white/cream (passes AA at **4.6:1**). | **Proposed** |
| `--color-accent-pink` | `#F2D5D5` | Greeting badge, "View all" pills, signature | Soft blush pink. Used as container fill with dark text. | **Confirmed** |
| `--color-border` | `#E6E1DC` | Card outlines, dividers, pill borders | Restrained neutral border. | **Confirmed** |
| `--color-border-subtle` | `#F0ECE7` | Inner card borders | Hairline divider. | **Proposed** |

#### Dark Theme (`[data-theme="dark"]`)
| Token Name | Hex Value | Semantic Role | Accessibility / Contrast Notes | Status |
| :--- | :--- | :--- | :--- | :--- |
| `--color-bg` | `#181614` | Deep obsidian cream (warm dark canvas) | Preserves warm undertones; avoids stark pure `#000000`. | **Confirmed** |
| `--color-surface` | `#24201D` | Elevated dark card surfaces | Warm charcoal card panels. | **Confirmed** |
| `--color-surface-subtle` | `#2D2825` | Inner nested cards (skills, stats) | Distinct surface layer on dark panels. | **Proposed** |
| `--color-text-main` | `#F5F2EE` | Primary headlines and reading copy | Warm off-white. Contrast against `#24201D` is **12.8:1** (AAA). | **Confirmed** |
| `--color-text-muted` | `#A8A199` | Secondary copy, metadata, timestamps | Warm stone gray. Contrast against `#24201D` is **5.6:1** (AA). | **Proposed** |
| `--color-primary` | `#6E8E74` | Primary buttons, active markers | Adapted luminous sage-olive; contrast against `#181614` is **5.2:1** (AA). | **Confirmed** |
| `--color-primary-hover` | `#82A388` | Hover state for primary buttons | Brightened sage-olive. | **Proposed** |
| `--color-accent-turquoise`| `#7BCBC4` | Highlights, badges, decorative text | High contrast against dark surfaces (**8.9:1**). | **Confirmed** |
| `--color-turquoise-text` | `#7BCBC4` | Highlighted serif italic text on dark | Matches accent turquoise with excellent dark contrast. | **Confirmed** |
| `--color-accent-pink` | `#F2D5D5` | Signature, greeting pill container | High visibility against dark surfaces. | **Confirmed** |
| `--color-border` | `#3A342F` | Panel outlines, dividers | Restrained dark warm border. | **Confirmed** |
| `--color-border-subtle` | `#2F2925` | Inner hairline borders | Subtle dark division. | **Proposed** |

> [!IMPORTANT]
> **Contrast Rule for Accent Colors**: In light mode, pure turquoise (`#7BCBC4`) and blush pink (`#F2D5D5`) have insufficient contrast for body text against white or cream backgrounds. Accent text on light surfaces must use `--color-turquoise-text` (`#2D7D76`). In dark mode, `#7BCBC4` inherently exceeds 8:1 contrast against dark surfaces and can be safely used for display accents.

---

### 1.3 Typography System & Hierarchy

The portfolio uses three distinct typefaces via Google Fonts:
1. **Instrument Serif** (Display Serif): Display titles, section headings, and brand wordmark.
2. **Inter** (Geometric Sans): Body copy, navigation links, buttons, form controls, and UI metadata.
3. **JetBrains Mono** (Monospace): Code tags, project technology badges, and metrics.

#### Typography Scale Table
| Role | Font Family | Size (Mobile) | Size (Desktop) | Weight | Line Height |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display Headline** | Instrument Serif | `32px` (`2.0rem`) | `48px–52px` (`3.0rem–3.25rem`) | 400 (Regular) | `1.15` |
| **Section Headings (H2)** | Instrument Serif | `24px` (`1.5rem`) | `32px` (`2.0rem`) | 400 (Regular) | `1.25` |
| **Card Headings (H3)** | Inter | `18px` (`1.125rem`)| `20px` (`1.25rem`) | 600 (SemiBold) | `1.3` |
| **Brand Wordmark** | Instrument Serif | `20px` (`1.25rem`) | `22px` (`1.375rem`) | 400 (Regular) | `1.0` |
| **Body Large (Hero Subtitle)** | Inter | `15px` (`0.9375rem`)| `16px` (`1.0rem`) | 400 (Regular) | `1.6` |
| **Body Regular** | Inter | `14px` (`0.875rem`) | `15px` (`0.9375rem`)| 400 (Regular) | `1.6` |
| **UI Labels & Navigation** | Inter | `14px` (`0.875rem`) | `14px` (`0.875rem`) | 500 (Medium) | `1.0` |
| **Badges & Pills** | Inter | `12px` (`0.75rem`)  | `13px` (`0.8125rem`)| 500 (Medium) | `1.0` |
| **Code / Tech Tags** | JetBrains Mono / Inter | `11px` (`0.6875rem`)| `12px` (`0.75rem`) | 500 (Medium) | `1.0` |
| **Personal Signature** | Script / SVG / Cursive | `24px` | `32px` | 400 | `1.0` |

---

### 1.4 Spacing Scale, Containers & Breakpoints

#### Spacing System (8pt Grid)
- `--space-1`: `4px` (`0.25rem`)
- `--space-2`: `8px` (`0.5rem`)
- `--space-3`: `12px` (`0.75rem`)
- `--space-4`: `16px` (`1.0rem`)
- `--space-5`: `20px` (`1.25rem`)
- `--space-6`: `24px` (`1.5rem`)
- `--space-8`: `32px` (`2.0rem`)
- `--space-10`: `40px` (`2.5rem`)
- `--space-12`: `48px` (`3.0rem`)
- `--space-16`: `64px` (`4.0rem`)
- `--space-20`: `80px` (`5.0rem`)

#### Layout Containers & Max Width
- **Global Container Max Width**: `1140px` (confirmed centered desktop boundary).
- **Horizontal Container Padding**: `16px` (mobile), `24px` (tablet), `32px` (desktop).
- **Vertical Section Gap**: `48px` (mobile), `64px` to `80px` (desktop).

#### Responsive Breakpoints
- **Mobile (`< 640px`)**: Single-column vertical flow, collapsed mobile navigation, full-width cards.
- **Tablet (`640px – 1023px`)**: 2-column grids for project cards and skill groups, stacked hero.
- **Desktop (`≥ 1024px`)**: Full multi-column layout (2-column hero, 4-column tech stack, 3-column projects, 4-column metrics).

---

### 1.5 Surface Treatment, Borders, Radii & Shadows

- **Corner Radii Hierarchy**:
  - Main Section Enclosures: `24px` (`--radius-xl`)
  - Project Cards & Hero Image: `16px` (`--radius-lg`)
  - Skill Cards & Stat Cards: `12px` (`--radius-md`)
  - Buttons & Form Inputs: `8px` (`--radius-sm`)
  - Badges, Pills & Avatars: `9999px` (`--radius-full`)
- **Borders**:
  - Section Panels: `1px solid var(--color-border-subtle)`
  - Outer Containers & Inputs: `1px solid var(--color-border)`
- **Shadows**:
  - Ambient elevation: `0 4px 20px rgba(46, 42, 39, 0.04)` in light mode (`rgba(0, 0, 0, 0.25)` in dark mode).
  - Hover elevation on project cards: `0 8px 24px rgba(46, 42, 39, 0.08)` in light mode (`rgba(0, 0, 0, 0.35)` in dark mode).

---

## 2. Component Design & Behavior

### 2.1 Header and Navigation
- **Structure**: Semantic `<header>` containing `<nav class="nav-container">`.
- **Wordmark**: Left-aligned brand group featuring a stylized botanical olive branch SVG mark alongside "Lydia Sierra" set in Instrument Serif.
- **Navigation Links**: Centered unordered list (`<ul>`) with items: `Home`, `About`, `Skills`, `Projects`, `Experience`, `Contact`.
  - Active item has a subtle horizontal indicator line (`2px solid var(--color-primary)` centered beneath text).
  - Hover state shifts text color to `--color-primary` with smooth transition.
- **Header Action Group** (Right):
  - **"Download CV" Action**:
    - **Confirmed Path**: Target document is `assets/documents/Lydia_Sierra_CV.pdf`.
    - **Pending State Behavior**: Until the actual document is placed in the repository by the user, the download button must explicitly communicate its pending status (e.g., `aria-disabled="true"`, visual label `Download CV (Coming Soon)` or a graceful non-submitting action with an accessible tooltip) to prevent broken downloads or fictional documents.
  - **Theme Toggle**:
    - **Confirmed Requirement**: Fully functional light/dark theme switch using CSS custom properties.
    - **State & Accessibility**: Circular icon button (`36px × 36px`) with `aria-label="Switch to dark theme"` (updates dynamically), `aria-live="polite"`, and an SVG icon transitioning between sun and moon.
    - **Persistence & Logic**: Automatically checks `window.matchMedia('(prefers-color-scheme: dark)')` on first visit. Any explicit user toggle is saved in `localStorage.setItem('portfolio-theme', '...')` and takes precedence.
    - **Execution Sequence**: Designed into the token architecture now; interactive JS handler implemented following the core layout and content tasks to avoid delaying foundational milestones.
- **Mobile State**: Collapses nav links into an accessible hamburger button (`aria-expanded="false"`, `aria-controls="nav-menu"`) opening an accessible slide-down drawer.

---

### 2.2 Hero Section & Primary Calls to Action
- **Structure**: Semantic `<section id="hero" class="hero">` with a 2-column desktop split (`55%` content / `45%` visual).
- **Greeting Pill**: Blush pink pill badge (`background: var(--color-accent-pink); color: var(--color-text-main);`) with emoji: `Hi, I'm Lydia ☕`.
- **Display Title**:
  - Multi-line editorial typography:
    ```
    Full Stack Developer
    who loves building
    meaningful digital
    experiences.
    ```
  - The word `meaningful` is styled in *italicized serif* using `--color-turquoise-text`.
- **Hero Bio Paragraph**: Muted, high-legibility introduction to Lydia's current studies at SENA and internship at Globant.
- **Action Group**:
  - **Primary CTA**: "View my projects ->" (`background: var(--color-primary)`, white text, arrow icon, `:hover` darkens to `--color-primary-hover`).
  - **Secondary CTA**: "Download CV [icon]" (white surface, border `1px solid var(--color-border)`, dark text; respects CV pending state until file is provided).
- **Metadata Pills Row**:
  - Horizontal list of pill badges below actions:
    1. Location icon + "Pereira, Colombia"
    2. Globe/Certificate icon + "English C2 (EF SET)"
    3. Status indicator (glowing green dot `#34A853`) + "Open to opportunities"
- **Hero Visual**:
  - Framed editorial photograph of developer workspace (laptop running code, coffee mug, notebook).
  - Rounded corners (`16px–20px`), subtle border, organic botanical watercolor branch illustration subtly accenting the margin.

---

### 2.3 Technology Badges & Skill Categories
- **Container**: Enclosed inside the "About me & Tech stack" white panel.
- **Header**: "Tech stack" heading with a "View all" blush pill button (`var(--color-accent-pink)` tint) on the top right.
- **Category Grid**: 4 horizontal cards on desktop, 2-column on tablet, 1-column on small mobile:
  1. **Frontend**: Icon (browser/display), skills: `HTML`, `CSS`, `JavaScript`, `Angular`, `React`.
  2. **Backend**: Icon (servers), skills: `PHP (Laravel)`, `Java`, `REST APIs`, `Node.js`.
  3. **Databases**: Icon (database cylinder), skills: `MySQL`, `PostgreSQL`, `MongoDB`.
  4. **Tools**: Icon (wrench/tools), skills: `Git & GitHub`, `VS Code`, `Linux`, `Docker (learning)`.
- **Card Styling**: Soft background (`var(--color-surface-subtle)`), rounded `12px`, padding `16px`. Icon sits in a rounded turquoise tinted square (`background: rgba(123, 203, 196, 0.15); color: var(--color-turquoise-text);`). Skill items listed cleanly as vertical text items with comfortable line spacing.

---

### 2.4 About Me Section
- **Location**: Left column of the first white surface card (`35%` width on desktop).
- **Content**:
  - Heading: "About me" (Instrument Serif).
  - Narrative bio highlighting clean code, thoughtful design, and personal interests (learning Japanese, drawing, playing guitar).
  - Signature: Stylized script signature "Lydia Sierra" rendered in soft blush pink (`#D48B8B` light / `#F2D5D5` dark) at the bottom.

---

### 2.5 Featured Project Presentations
- **Container**: Dedicated white surface card panel (`radius: 24px`, padding `32px–40px`).
- **Header**: "Featured projects" heading + "View all projects" blush pill button.
- **Grid**: 3 columns on desktop, 1 column on mobile/tablet.
- **Project Card Anatomy**:
  - **Preview Media**: Image container with `16:10` aspect ratio, rounded `12px`, subtle border, `object-fit: cover`.
  - **Project Title**: Heading 3 (`font-family: var(--font-body); font-weight: 600; font-size: 18px;`).
  - **Description**: 2-line concise summary of the app purpose.
  - **Technology Tags**: Row of rounded-full pill badges with distinct pastel tint fills:
    - Turquoise tint (`rgba(123, 203, 196, 0.2)`): Angular, React, Laravel.
    - Neutral tint (`rgba(230, 225, 220, 0.4)`): TypeScript, Node.js, MySQL.
    - Blush tint (`rgba(242, 213, 213, 0.3)`): Tailwind CSS, Chart.js, Stripe.
  - **Action Links**: Dual accessible links at card base:
    - `Live demo ->` (text link with arrow icon)
    - `GitHub [icon]` (icon + text link)

---

### 2.6 Experience Timeline & Career History
- **Location**: Left column of the third major layout row (`40%` width on desktop).
- **Header**: "Experience" (Instrument Serif).
- **Timeline Structure**: Semantic ordered list (`<ol class="timeline">`) with a connected vertical rule (`2px solid var(--color-border)`).
- **Timeline Item Anatomy**:
  - Bullet node: Solid olive circular dot (`10px × 10px`, background `var(--color-primary)`) positioned on the timeline line.
  - Time badge: `2024 — Present` (Inter `12px`, muted).
  - Role Title: `Software Development Intern` (Inter `15px`, bold).
  - Organization: `Globant` (Inter `13px`, medium).
  - Description: Concise paragraph detailing low-code enterprise tech and agile collaboration.

---

### 2.7 "By the Numbers" Metric Cards & GitHub Activity Protocol
- **Location**: Right column of the third major layout row (`60%` width on desktop).
- **Header**: "By the numbers" (Instrument Serif).
- **Metric Cards Row**: 4 horizontal stat cards:
  1. `</>` | `20+` | `Projects completed`
  2. GitHub icon | `1.2k+` | `Contributions on GitHub`
  3. Coffee icon ☕ | `In love` | `with clean code and coffee`
  4. Open book 📖 | `Always` | `learning something new`
  - Style: Soft surface (`var(--color-surface-subtle)`), rounded `12px`, centered alignment, icon on top, prominent metric text (`22px` font weight 600), 2-line small caption (`12px` muted).

#### GitHub Contribution Heatmap Protocol (Investigation & v1.0 Contingency)
- **Content Integrity Constraint**: Under no circumstances will fictional or hardcoded mockup data be presented as real user activity.
- **Technical Feasibility Investigation**:
  - GitHub's official GraphQL API requires an authenticated Personal Access Token (PAT), which cannot be safely exposed in client-side code on a static GitHub Pages site without secret exposure.
  - GitHub's public REST events endpoint (`/users/{username}/events`) only provides up to 90 days of public events, not full 365-day contribution calendars.
  - Third-party proxy services introduce external dependencies, uptime risks, and rate limiting.
- **Confirmed v1.0 Decision Rule**:
  - If a reliable, credential-free, zero-infrastructure data source cannot be verified during technical validation, the contribution heatmap visual grid is **omitted from v1.0**.
  - The "By the numbers" panel will feature the 4 authentic summary metric cards, maintaining an uncluttered, honest, and elegant editorial layout without deceptive mock activity.

---

### 2.8 Contact Section & Global Footer

#### Contact Section Architecture
- **Container**: Elevated surface panel (`radius: 24px`, padding `40px–48px`).
- **Left Column** (`45%`):
  - Heading: "Let's build something *amazing* together." (*amazing* in italic serif teal accent).
  - Bio pitch: Warm invitation to discuss opportunities or say hello.
  - Direct Contact Channels (Accessible list with clickable links):
    - Email: `mailto:hello@lydiasierra.dev`
    - Location: `Pereira, Colombia`
    - LinkedIn: `https://linkedin.com/in/lydiasierra`
    - GitHub: `https://github.com/lydiasierra`
- **Right Column** (`55%`): Accessible `mailto:` Action Form:
  - **Confirmed Architecture**: Uses a pure vanilla `mailto:` mechanism for v1.0. No external form service or server backend.
  - **Form Fields**:
    - Row 1: Name input + Email input (2-column CSS Grid).
    - Row 2: Message textarea.
    - Field Styling: Background `var(--color-bg)`, border `1px solid var(--color-border)`, `:focus` gets `1px solid var(--color-primary)` and focus ring.
  - **User Communication & Accessibility**:
    - Above or below the submit button, an explicit notice is displayed:
      *"Clicking 'Send message' will launch your email client with your message pre-filled. You can also email me directly at hello@lydiasierra.dev."*
    - On submit, JavaScript validates required fields, constructs the formatted `mailto:` URL (`mailto:hello@lydiasierra.dev?subject=Portfolio%20Inquiry%20from%20...&body=...`), and triggers `window.location.href = mailtoUrl`.
    - If email launch is cancelled or unavailable, an accessible message banner (`role="status"`, `aria-live="polite"`) clearly advises copying the email address directly.

#### Global Footer Landmark
- Full-width bar on cream canvas.
- Left: "Lydia Sierra" wordmark.
- Center: `© 2024 All rights reserved.`
- Right: Social icon links (GitHub, LinkedIn, Email) with accessible `aria-label`s.

---

### 2.9 Interactive States Matrix

| Component | Default State | Hover (`:hover`) | Focus (`:focus-visible`) | Active (`:active`) | Disabled (`:disabled` / `aria-disabled`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Button** | BG: `var(--color-primary)`, Text: `#FFF` | BG: `var(--color-primary-hover)`, Y: `-1px` | Outline: `2px solid var(--color-primary)`, offset `3px` | BG: deepened olive, Y: `0px` | Opacity: `0.5`, Cursor: `not-allowed` |
| **Secondary Button** | BG: `var(--color-surface)`, Border: `var(--color-border)` | BG: `var(--color-bg)`, Border: darkened | Outline: `2px solid var(--color-primary)`, offset `3px` | BG: `var(--color-surface-subtle)` | Opacity: `0.5`, Cursor: `not-allowed` |
| **Pill Badges** | BG: `var(--color-accent-pink)` tint or `#FFF` | Slightly darkened background | Standard focus ring | Native click | N/A |
| **Text Links** | Text: `var(--color-text-main)` or muted | Text: `var(--color-primary)`, underline | Outline: `2px solid var(--color-primary)` | Text: `var(--color-primary-hover)` | Opacity: `0.5` |
| **Form Inputs** | BG: `var(--color-bg)`, Border: `var(--color-border)` | Border: darkened border | BG: `var(--color-surface)`, Border: `var(--color-primary)`, Ring | N/A | BG: `var(--color-surface-subtle)`, Cursor: `not-allowed` |
| **Project Cards** | Shadow: `shadow-sm`, Y: `0` | Shadow: `shadow-md`, Y: `-3px` | Card outline on focusable child | N/A | N/A |

---

## 3. Layout, Content Flow & Responsiveness

### 3.1 Content Flow & Hierarchy
1. **Header**: Global sticky/fixed navigation landmark with brand, links, pending CV button, and theme toggle.
2. **Hero Section**: Personal greeting, core value proposition, primary CTAs, quick credibility signals, workspace imagery.
3. **About Me & Skills Panel**: White card grouping personality narrative and structured technical capabilities.
4. **Featured Projects Panel**: Curated high-impact portfolio works.
5. **Experience & Numbers Split**: Career journey timeline alongside tangible metrics (and heatmap if verified).
6. **Contact Panel**: Invitation to connect with direct channels, accessible `mailto:` form, and transparent messaging.
7. **Footer**: Copyright, quick links, and social anchors.

---

### 3.2 Responsive Adaptations

```
DESKTOP (≥ 1024px)
┌─────────────────────────────────────────────────────────────┐
│ Header (Brand ─── Links ─── Actions)                        │
├──────────────────────────────┬──────────────────────────────┤
│ Hero Left (55%)              │ Hero Right Image (45%)       │
├──────────────────────────────┴──────────────────────────────┤
│ White Panel 1: [About Me (35%) | Tech Stack 4 Cards (65%)]   │
├─────────────────────────────────────────────────────────────┤
│ White Panel 2: [Featured Projects - 3 Column Grid]          │
├──────────────────────────────┬──────────────────────────────┤
│ Experience Timeline (40%)    │ Numbers (4 Stats Cards)      │
├──────────────────────────────┴──────────────────────────────┤
│ White Panel 3: [Contact Info (45%) | Contact Form (55%)]    │
├─────────────────────────────────────────────────────────────┤
│ Footer (Brand ─── Copyright ─── Socials)                    │
└─────────────────────────────────────────────────────────────┘

TABLET (640px – 1023px)
- Hero: Stacked vertically (text top, image bottom).
- About & Tech: Stacked vertically; Tech stack forms a 2×2 card grid.
- Projects: 2-column grid or single column with generous spacing.
- Experience & Numbers: Stacked vertically (Experience first, Numbers second).
- Contact: Stacked vertically (Contact info first, form second).

MOBILE (< 640px)
- Navigation: Accessible hamburger toggle with slide-down drawer.
- All multi-column panels collapse to a clean single-column vertical flow.
- Padding inside white cards reduces from 40px to 20px–24px.
- All touch targets strictly maintain ≥ 44px height.
```

---

## 4. Accessibility & Interaction Principles

### 4.1 WCAG 2.1 AA Compliance Plan
- **Contrast Ratios**:
  - Dark brown text (`#2E2A27`) on cream (`#F8F5F2`): **12.6:1** (Passes AAA).
  - Dark brown text (`#2E2A27`) on white (`#FFFFFF`): **14.3:1** (Passes AAA).
  - Off-white text (`#F5F2EE`) on dark surface (`#24201D`): **12.8:1** (Passes AAA).
  - Muted text (`#6E6862`) on white (`#FFFFFF`): **5.1:1** (Passes AA).
  - Primary olive (`#4A5D4E`) on white: **5.4:1** (Passes AA).
  - Sage olive (`#6E8E74`) on dark background: **5.2:1** (Passes AA).
- **Keyboard Navigation**:
  - Dedicated `.skip-link` immediately after opening `<body>`, targeting `#main-content`.
  - Logical DOM tab order matching visual flow.
  - All interactive elements feature visible `:focus-visible` styling (`outline: 2px solid var(--color-primary); outline-offset: 3px;`).
- **Semantic HTML & Screen Readers**:
  - Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
  - Proper heading hierarchy: Single `<h1>` in hero, `<h2>` for major sections, `<h3>` for cards/projects.
  - Descriptive `aria-label` for icon-only buttons (theme toggle, GitHub links, social icons).
  - Form controls with programmatic `<label for="...">` associations and `required` / `aria-invalid` attributes.
- **Motion & Preferences**:
  - `@media (prefers-reduced-motion: reduce)` disables all transforms, smooth scrolling, and animated transitions.

---

## 5. Decision Classification & Interpretation Rules

### 5.1 Confirmed Requirements for v1.0
- [x] **Theme Toggle**: Complete light/dark theme using CSS custom properties. Respects `prefers-color-scheme`, allows visitor override, persists via `localStorage`, fully keyboard accessible. Scheduled following core layout/content tasks.
- [x] **CV Document Path & State**: Target path confirmed as `assets/documents/Lydia_Sierra_CV.pdf`. Must show an explicit pending state (e.g. `Coming Soon` / `aria-disabled`) until provided; no fictional CVs or broken download links.
- [x] **Contact Action**: Native `mailto:`-based action with pre-filled subject/body. Transparent user notice explaining email client launch, plus visible direct email address and social links. No external backend or form service for v1.0.
- [x] **GitHub Activity Integrity**: Strict no-fabrication rule. If a zero-token, privacy-preserving static data source is not verified, the heatmap grid is omitted from v1.0 and only the 4 metric cards are displayed.
- [x] **Brand Palette & Typography**: Cream (`#F8F5F2`), White (`#FFFFFF`), Charcoal Brown (`#2E2A27`), Olive (`#4A5D4E`), Turquoise (`#7BCBC4`), Blush Pink (`#F2D5D5`). Fonts: Instrument Serif, Inter, JetBrains Mono.

### 5.2 Implementation Details Needing Technical Verification
- [ ] **GitHub Heatmap Technical Feasibility**: Confirm whether any zero-auth, zero-infrastructure GitHub API endpoint can provide 1-year contribution data reliably without hitting aggressive rate limits. If not, trigger the confirmed omission fallback.
- [ ] **Theme Toggle Icon Transition**: Verify SVG icon transition (sun/moon) mechanics in pure vanilla JS and CSS without asset layout shift.
- [ ] **Botanical Accent Assets**: Decide whether botanical foliage accents are loaded as inline SVG illustrations or optimized background SVG assets.

### 5.3 Resolved Questions Summary
1. **GitHub Heatmap**: Resolved — No fake data; investigate authentic static feasibility, otherwise omit grid for v1.0.
2. **Contact Form**: Resolved — Vanilla `mailto:` action with clear user messaging; no external backend.
3. **Theme Toggle**: Resolved — Full light/dark mode via CSS custom properties; follows core layout/content tasks.
4. **CV Document**: Resolved — Confirmed path `assets/documents/Lydia_Sierra_CV.pdf`; explicit pending state until user adds file.
