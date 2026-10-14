/**
 * Lydia Sierra — Personal Developer Portfolio
 * Featured Projects Data & Dynamic Presentation Module
 * Separates verified project content from DOM rendering logic.
 */

export const projectsData = [
  {
    id: 'flashcards-app',
    title: 'Flashcards App',
    subtitle: 'Interactive web application for active recall and spaced-repetition learning',
    image: 'assets/images/project-flashcards.svg',
    imageAlt: 'Flashcards App interface preview showing a study card on Angular Signals with progress tracking and navigation buttons',
    problem: 'Self-directed learners need an intuitive, distraction-free study environment to organize card decks, test memory retention, and track learning progress without complicated backend overhead.',
    contribution: 'Designed the complete frontend architecture from the ground up, utilizing modern Angular Signals for reactive state and offline-first Local Storage persistence.',
    highlights: [
      'Fine-grained reactivity with Angular Signals for smooth card state transitions without Zone.js overhead',
      'Client-side Local Storage persistence preserving decks, cards, and study progress across sessions',
      'Accessible keyboard controls allowing rapid card flipping, self-assessment, and deck traversal',
      'Responsive, clean UI styled with utility-first Tailwind CSS, optimized for mobile and desktop screens'
    ],
    tags: [
      { name: 'Angular', type: 'primary' },
      { name: 'TypeScript', type: 'neutral' },
      { name: 'Signals', type: 'turquoise' },
      { name: 'Tailwind CSS', type: 'pink' },
      { name: 'Local Storage', type: 'neutral' }
    ],
    links: {
      demo: {
        url: null,
        label: 'Live Demo',
        status: 'forthcoming',
        statusMessage: 'Live demo coming soon'
      },
      repo: {
        url: 'https://github.com/LydiaSierra',
        label: 'GitHub',
        status: 'available',
        isProfile: true,
        statusMessage: 'View profile on GitHub'
      }
    }
  },
  {
    id: 'gedocs',
    title: 'GeDocs — Document Management',
    subtitle: 'Centralized administrative tracking and document archive platform',
    image: 'assets/images/project-gedocs.svg',
    imageAlt: 'GeDocs administrative interface preview displaying document records, categories, search filtering, and approval status',
    problem: 'Academic and administrative teams often experience lost documentation, misrouted approvals, and lack of searchable audit trails when handling files manually across departments.',
    contribution: 'Led the relational database schema design, RESTful controller architecture, and document lifecycle workflows as part of the SENA Software Analysis and Development capstone curriculum.',
    highlights: [
      'Relational schema design in MySQL with normalized tables, foreign keys, and audit logging',
      'RESTful backend architecture facilitating document registration, review stages, and status queries',
      'Role-based access permissions separating administrative, reviewing, and standard contributor capabilities',
      'Search filtering by category, date range, and status chips, with structured data export'
    ],
    tags: [
      { name: 'PHP (Laravel)', type: 'primary' },
      { name: 'MySQL', type: 'neutral' },
      { name: 'REST APIs', type: 'turquoise' },
      { name: 'MVC Architecture', type: 'neutral' },
      { name: 'Bootstrap / CSS', type: 'pink' }
    ],
    links: {
      demo: {
        url: null,
        label: 'Live Demo',
        status: 'forthcoming',
        statusMessage: 'Institutional capstone project'
      },
      repo: {
        url: 'https://github.com/LydiaSierra',
        label: 'GitHub',
        status: 'available',
        isProfile: true,
        statusMessage: 'View profile on GitHub'
      }
    }
  }
];

/**
 * Generates the accessible HTML markup for a single project card.
 * @param {Object} project - The project data object.
 * @returns {string} - HTML string representing the project card.
 */
export function createProjectCardHTML(project) {
  // Render technology tags
  const tagsHTML = project.tags
    .map(
      (tag) =>
        `<li class="project-tag project-tag--${tag.type}">${escapeHTML(tag.name)}</li>`
    )
    .join('');

  // Render highlights
  const highlightsHTML = project.highlights
    .map((item) => `<li>${escapeHTML(item)}</li>`)
    .join('');

  // Render action controls
  let demoActionHTML = '';
  if (project.links.demo.status === 'available' && project.links.demo.url) {
    demoActionHTML = `
      <a href="${escapeHTML(project.links.demo.url)}" class="btn btn-sm btn-primary project-action-btn" target="_blank" rel="noopener noreferrer" aria-label="Open live demo of ${escapeHTML(project.title)}">
        <span>${escapeHTML(project.links.demo.label)}</span>
        <svg class="btn-icon" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="7" y1="17" x2="17" y2="7"/>
          <polyline points="7 7 17 7 17 17"/>
        </svg>
      </a>
    `;
  } else {
    demoActionHTML = `
      <span class="badge badge-subtle project-status-badge" title="${escapeHTML(project.links.demo.statusMessage)}">
        <span class="status-indicator-dot" aria-hidden="true" style="background-color: var(--color-primary); box-shadow: none;"></span>
        <span>${escapeHTML(project.links.demo.statusMessage)}</span>
      </span>
    `;
  }

  let repoActionHTML = '';
  if (project.links.repo.url) {
    repoActionHTML = `
      <a href="${escapeHTML(project.links.repo.url)}" class="project-repo-link" target="_blank" rel="noopener noreferrer" aria-label="View ${escapeHTML(project.title)} on GitHub">
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
          <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
        <span>${escapeHTML(project.links.repo.label)}</span>
      </a>
    `;
  }

  return `
    <article class="project-card" id="project-${escapeHTML(project.id)}">
      <div class="project-media-frame">
        <img
          src="${escapeHTML(project.image)}"
          alt="${escapeHTML(project.imageAlt)}"
          width="800"
          height="500"
          loading="lazy"
          class="project-image"
        >
      </div>

      <div class="project-content">
        <div class="project-header">
          <h3 class="project-title">${escapeHTML(project.title)}</h3>
          <p class="project-subtitle">${escapeHTML(project.subtitle)}</p>
        </div>

        <div class="project-narrative">
          <p class="project-narrative-item">
            <strong class="narrative-label">Problem &amp; Objective:</strong>
            <span>${escapeHTML(project.problem)}</span>
          </p>
          <p class="project-narrative-item">
            <strong class="narrative-label">My Contribution:</strong>
            <span>${escapeHTML(project.contribution)}</span>
          </p>
        </div>

        <div class="project-details">
          <h4 class="details-heading">Key Technical Decisions:</h4>
          <ul class="project-highlights">
            ${highlightsHTML}
          </ul>
        </div>

        <ul class="project-tags" aria-label="Technologies used in ${escapeHTML(project.title)}">
          ${tagsHTML}
        </ul>

        <div class="project-actions">
          <div class="project-actions-left">
            ${demoActionHTML}
          </div>
          <div class="project-actions-right">
            ${repoActionHTML}
          </div>
        </div>
      </div>
    </article>
  `;
}

/**
 * Renders the project cards into the specified DOM container.
 * @param {HTMLElement|string} target - The target element or selector.
 * @param {Array} projects - Optional array of projects (defaults to projectsData).
 */
export function renderProjects(target, projects = projectsData) {
  const container =
    typeof target === 'string' ? document.querySelector(target) : target;

  if (!container) {
    console.warn('Projects render target not found:', target);
    return;
  }

  const html = projects.map(createProjectCardHTML).join('');
  container.innerHTML = html;
}

/**
 * Utility to escape HTML entities for safety.
 * @param {string} str - Raw string.
 * @returns {string} - Escaped string.
 */
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
