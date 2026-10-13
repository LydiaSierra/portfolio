# Project Guidelines & Agent Instructions

## Purpose & Scope
This project is the personal developer portfolio for **Lydia Sierra**, presenting her as a junior software developer, showcasing genuine projects and experience, and helping recruiters access her CV and contact information.

## Technology Constraints
- **Stack**: Semantic HTML5, modern vanilla CSS3, and vanilla JavaScript (ES modules).
- **No Frameworks**: No React, Angular, Vue, Tailwind, Bootstrap, or other frontend frameworks.
- **Zero Build Tools**: Avoid unnecessary dependencies, build pipelines, and runtime complexity.
- **Native Web Platform**: Leverage native browser capabilities wherever practical.
- **Static Deployment**: The site must run statically on GitHub Pages or equivalent static hosts.
- **Relative Paths**: Always use relative asset paths suitable for static hosting.
- **No Backend / No TypeScript**: Do not introduce TypeScript, Node servers, or backend services unless explicitly requested.

## Visual Direction
Create a warm, editorial, human-centered design with a refined developer aesthetic.

### Color Tokens
- Cream background: `#F8F5F2`
- White surfaces: `#FFFFFF`
- Dark brown text: `#2E2A27`
- Primary olive: `#4A5D4E`
- Turquoise accent: `#7BCBC4`
- Blush pink accent: `#F2D5D5`

### Typography
- **Instrument Serif**: Wordmark and selected display headings.
- **Inter**: Body text, navigation, buttons, and UI controls.
- **JetBrains Mono**: Occasional technical details, code tags, and metrics.

### Aesthetics & Layout
- Generous whitespace and restrained borders/shadows.
- Carefully controlled rounded corners.
- Turquoise and blush pink used sparingly as subtle accents.
- Prioritize high readability and WCAG AA contrast over purely decorative elements.
- Avoid generic corporate layouts, excessive card clusters, arbitrary gradients, or purposeless animations.

## Content Integrity
- Never invent work experience, client projects, employers, education, certifications, statistics, or links.
- Treat placeholder content as temporary and clearly identifiable.
- Do not publish private information.
- Do not fabricate project metrics or GitHub activity.
- Keep all user-editable content easy to locate and replace.

## Engineering & Accessibility Standards
- Keep modules small with clear single responsibilities.
- Avoid duplicated CSS and JavaScript.
- Mobile-first responsive implementation, progressively enhanced for tablet and desktop.
- Full keyboard accessibility: visible `:focus-visible` states, logical tab order, skip-to-content link.
- Semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<aside>`).
- Respect `prefers-reduced-motion` user preferences.
- All interactive controls (`<button>`, `<a>`) must have functional behavior or explicit accessible states.

## Git Workflow & Task Execution Protocol
- `main` contains stable, deployable releases.
- `develop` is the integration branch.
- Each task must be implemented on a dedicated feature branch created from the latest `develop`.
- **CRITICAL**: Do NOT commit, merge, push, or switch branches automatically.
- Before editing, inspect the current repository state and check for uncommitted work.
- Never overwrite existing user work without approval.
- At the end of each task, report:
  1. Changed files
  2. Implementation details
  3. Validation results
  4. Limitations
  5. Suggested Conventional Commit message
- Wait for user review before proceeding to the next task.
