# Lydia Sierra — Personal Developer Portfolio

Personal developer portfolio for **Lydia Sierra**, junior software developer. Built to showcase genuine projects and experience, and help recruiters quickly access her CV and contact details.

## Tech Stack & Architecture

- **Markup**: Semantic HTML5 with accessibility-first landmarks and structure.
- **Styling**: Modern vanilla CSS3 utilizing custom properties (tokens), Flexbox, and CSS Grid.
- **Scripting**: Vanilla JavaScript (ES modules) with progressive enhancement.
- **Dependencies**: Zero runtime or build tool dependencies.
- **Deployment**: Static site ready for deployment on GitHub Pages or any static web host.

## Directory Structure

```text
portfolio/
├── .gitignore             # Git ignore patterns
├── AGENTS.md              # Project guidelines, visual direction & constraints
├── README.md              # Project overview and local development instructions
├── index.html             # Main entry document
├── assets/
│   ├── documents/         # CV / resume PDF documents
│   ├── icons/             # Custom SVG icons and UI assets
│   └── images/            # Project previews, photography, and references
├── css/
│   ├── variables.css      # Design tokens (colors, typography scales, spacing)
│   └── style.css          # Base reset, layout rules, and accessibility styles
└── js/
    └── main.js            # Main JavaScript module
```

## Running Locally

Because this is a pure static site without build tools, you can serve it with any local static development server.

### Option 1: Using Node.js (npx)

If you have Node.js installed, run either of the following from the project root:

```bash
# Using 'serve'
npx serve .

# Or using 'http-server'
npx http-server . -c-1 -o
```

### Option 2: VS Code Live Server Extension

1. Open the project folder in VS Code.
2. Click **Go Live** in the status bar or right-click `index.html` and select **Open with Live Server**.

### Option 3: Python (if available)

```bash
python -m http.server 8000
```

## Visual Direction & Design Tokens

- **Background**: Warm Cream (`#F8F5F2`)
- **Surfaces**: Pure White (`#FFFFFF`)
- **Typography**: Dark Brown (`#2E2A27`)
- **Primary Brand**: Olive Green (`#4A5D4E`)
- **Accents**: Turquoise (`#7BCBC4`), Blush Pink (`#F2D5D5`)
- **Fonts**:
  - *Instrument Serif* for wordmark and select display headings
  - *Inter* for interface and body copy
  - *JetBrains Mono* for technical details