/**
 * Lydia Sierra — Personal Developer Portfolio
 * Featured Projects Data & Dynamic Presentation Module
 * Supports multilingual localized project content and accessible DOM rendering.
 */

export const projectsData = [
  {
    id: 'flashcards-app',
    title: 'Flashcards App',
    subtitle: {
      en: 'Interactive web application for active recall and spaced-repetition learning',
      es: 'Aplicación web interactiva para estudio mediante recuerdo activo y repetición espaciada'
    },
    image: 'assets/images/project-flashcards.svg',
    imageAlt: {
      en: 'Flashcards App interface preview showing a study card on Angular Signals with progress tracking and navigation buttons',
      es: 'Vista previa de la interfaz de Flashcards App mostrando una tarjeta de estudio sobre Angular Signals con seguimiento de progreso'
    },
    problem: {
      en: 'Self-directed learners need an intuitive, distraction-free study environment to organize card decks, test memory retention, and track learning progress without complicated backend overhead.',
      es: 'Los estudiantes autodidactas necesitan un entorno de estudio intuitivo y sin distracciones para organizar mazos de tarjetas, poner a prueba la retención de memoria y seguir su progreso sin complejidad de servidor.'
    },
    contribution: {
      en: 'Designed the complete frontend architecture from the ground up, utilizing modern Angular Signals for reactive state and offline-first Local Storage persistence.',
      es: 'Diseñé la arquitectura frontend completa desde cero, utilizando Angular Signals para la reactividad de estado y persistencia offline con Local Storage.'
    },
    highlights: {
      en: [
        'Fine-grained reactivity with Angular Signals for smooth card state transitions without Zone.js overhead',
        'Client-side Local Storage persistence preserving decks, cards, and study progress across sessions',
        'Accessible keyboard controls allowing rapid card flipping, self-assessment, and deck traversal',
        'Responsive, clean UI styled with utility-first Tailwind CSS, optimized for mobile and desktop screens'
      ],
      es: [
        'Reactividad precisa con Angular Signals para transiciones fluidas de tarjetas sin sobrecarga de Zone.js',
        'Persistencia del lado del cliente en Local Storage que conserva mazos, tarjetas y progreso entre sesiones',
        'Control accesible por teclado que permite voltear tarjetas, autoevaluarse y navegar rápidamente',
        'Interfaz limpia y responsiva estilizada con Tailwind CSS, optimizada para pantallas móviles y de escritorio'
      ]
    },
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
        label: {
          en: 'Live Demo',
          es: 'Ver demo'
        },
        status: 'forthcoming',
        statusMessage: {
          en: 'Live demo coming soon',
          es: 'Demo disponible próximamente'
        }
      },
      repo: {
        url: 'https://github.com/LydiaSierra',
        label: {
          en: 'GitHub',
          es: 'Repositorio'
        },
        status: 'available',
        isProfile: true,
        statusMessage: {
          en: 'View profile on GitHub',
          es: 'Ver perfil en GitHub'
        }
      }
    }
  },
  {
    id: 'gedocs',
    title: 'GeDocs — Document Management',
    subtitle: {
      en: 'Centralized administrative tracking and document archive platform',
      es: 'Plataforma centralizada de gestión administrativa y archivo digital de documentos'
    },
    image: 'assets/images/project-gedocs.svg',
    imageAlt: {
      en: 'GeDocs administrative interface preview displaying document records, categories, search filtering, and approval status',
      es: 'Vista previa de la interfaz administrativa de GeDocs mostrando registros de documentos, categorías, filtros y estado de aprobación'
    },
    problem: {
      en: 'Academic and administrative teams often experience lost documentation, misrouted approvals, and lack of searchable audit trails when handling files manually across departments.',
      es: 'Los equipos académicos y administrativos suelen experimentar extravío de documentos, retrasos en aprobaciones y falta de trazabilidad auditable al gestionar archivos manualmente entre departamentos.'
    },
    contribution: {
      en: 'Led the relational database schema design, RESTful controller architecture, and document lifecycle workflows as part of the SENA Software Analysis and Development capstone curriculum.',
      es: 'Lideré el diseño del esquema de base de datos relacional, la arquitectura de controladores RESTful y los flujos del ciclo de vida documental como proyecto de grado en el SENA.'
    },
    highlights: {
      en: [
        'Relational schema design in MySQL with normalized tables, foreign keys, and audit logging',
        'RESTful backend architecture facilitating document registration, review stages, and status queries',
        'Role-based access permissions separating administrative, reviewing, and standard contributor capabilities',
        'Search filtering by category, date range, and status chips, with structured data export'
      ],
      es: [
        'Diseño relacional en MySQL con tablas normalizadas, claves foráneas y registro de auditoría',
        'Arquitectura backend RESTful que facilita el registro, etapas de revisión y consultas de estado documental',
        'Control de acceso basado en roles que separa permisos de administradores, revisores y usuarios estándar',
        'Filtros de búsqueda avanzada por categoría, rango de fechas y estados, con exportación estructurada'
      ]
    },
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
        label: {
          en: 'Live Demo',
          es: 'Ver demo'
        },
        status: 'forthcoming',
        statusMessage: {
          en: 'Institutional capstone project',
          es: 'Proyecto de grado institucional'
        }
      },
      repo: {
        url: 'https://github.com/LydiaSierra',
        label: {
          en: 'GitHub',
          es: 'Repositorio'
        },
        status: 'available',
        isProfile: true,
        statusMessage: {
          en: 'View profile on GitHub',
          es: 'Ver perfil en GitHub'
        }
      }
    }
  }
];

const projectLabels = {
  en: {
    problem: 'Problem & Objective:',
    contribution: 'My Contribution:',
    decisions: 'Key Technical Decisions:',
    tagsAria: (title) => `Technologies used in ${title}`,
    demoAria: (title) => `Open live demo of ${title} (opens in new tab)`,
    repoAria: (title) => `View ${title} on GitHub (opens in new tab)`,
    demoDefault: 'Live Demo',
    repoDefault: 'GitHub'
  },
  es: {
    problem: 'Problema y objetivo:',
    contribution: 'Mi contribución:',
    decisions: 'Decisiones técnicas clave:',
    tagsAria: (title) => `Tecnologías utilizadas en ${title}`,
    demoAria: (title) => `Abrir demo en vivo de ${title} (abre en una nueva pestaña)`,
    repoAria: (title) => `Ver ${title} en GitHub (abre en una nueva pestaña)`,
    demoDefault: 'Ver demo',
    repoDefault: 'Repositorio'
  }
};

/**
 * Extracts a localized string from an object or string.
 * @param {string|Object} field - The field value (string or {en, es}).
 * @param {string} lang - 'en' or 'es'.
 * @returns {string} - The localized string.
 */
function getLocalized(field, lang = 'en') {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[lang] || field.en || '';
}

/**
 * Generates the accessible HTML markup for a single project card.
 * @param {Object} project - The project data object.
 * @param {string} [lang='en'] - The active language code.
 * @returns {string} - HTML string representing the project card.
 */
export function createProjectCardHTML(project, lang = 'en') {
  const labels = projectLabels[lang] || projectLabels.en;

  const subtitle = getLocalized(project.subtitle, lang);
  const problem = getLocalized(project.problem, lang);
  const contribution = getLocalized(project.contribution, lang);
  const imageAlt = getLocalized(project.imageAlt, lang);

  const rawHighlights = project.highlights && project.highlights[lang]
    ? project.highlights[lang]
    : Array.isArray(project.highlights)
      ? project.highlights
      : project.highlights?.en || [];

  const highlightsHTML = rawHighlights
    .map((item) => `<li>${escapeHTML(item)}</li>`)
    .join('');

  // Render technology tags
  const tagsHTML = project.tags
    .map(
      (tag) =>
        `<li class="project-tag project-tag--${tag.type}">${escapeHTML(tag.name)}</li>`
    )
    .join('');

  // Render action controls
  const demoLabel = getLocalized(project.links.demo.label, lang) || labels.demoDefault;
  const demoStatusMessage = getLocalized(project.links.demo.statusMessage, lang);

  let demoActionHTML = '';
  if (project.links.demo.status === 'available' && project.links.demo.url) {
    demoActionHTML = `
      <a href="${escapeHTML(project.links.demo.url)}" class="btn btn-sm btn-primary project-action-btn" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(labels.demoAria(project.title))}">
        <span>${escapeHTML(demoLabel)}</span>
        <svg class="btn-icon" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="7" y1="17" x2="17" y2="7"/>
          <polyline points="7 7 17 7 17 17"/>
        </svg>
      </a>
    `;
  } else {
    demoActionHTML = `
      <span class="badge badge-subtle project-status-badge" title="${escapeHTML(demoStatusMessage)}">
        <span class="status-indicator-dot" aria-hidden="true" style="background-color: var(--color-primary); box-shadow: none;"></span>
        <span>${escapeHTML(demoStatusMessage)}</span>
      </span>
    `;
  }

  const repoLabel = getLocalized(project.links.repo.label, lang) || labels.repoDefault;
  let repoActionHTML = '';
  if (project.links.repo.url) {
    repoActionHTML = `
      <a href="${escapeHTML(project.links.repo.url)}" class="project-repo-link" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(labels.repoAria(project.title))}">
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
          <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
        <span>${escapeHTML(repoLabel)}</span>
      </a>
    `;
  }

  return `
    <article class="project-card" id="project-${escapeHTML(project.id)}">
      <div class="project-media-frame">
        <img
          src="${escapeHTML(project.image)}"
          alt="${escapeHTML(imageAlt)}"
          width="800"
          height="500"
          loading="lazy"
          decoding="async"
          class="project-image"
        >
      </div>

      <div class="project-content">
        <div class="project-header">
          <h3 class="project-title">${escapeHTML(project.title)}</h3>
          <p class="project-subtitle">${escapeHTML(subtitle)}</p>
        </div>

        <div class="project-narrative">
          <p class="project-narrative-item">
            <strong class="narrative-label">${escapeHTML(labels.problem)}</strong>
            <span>${escapeHTML(problem)}</span>
          </p>
          <p class="project-narrative-item">
            <strong class="narrative-label">${escapeHTML(labels.contribution)}</strong>
            <span>${escapeHTML(contribution)}</span>
          </p>
        </div>

        <div class="project-details">
          <h4 class="details-heading">${escapeHTML(labels.decisions)}</h4>
          <ul class="project-highlights">
            ${highlightsHTML}
          </ul>
        </div>

        <ul class="project-tags" aria-label="${escapeHTML(labels.tagsAria(project.title))}">
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
 * Renders the project cards into the specified DOM container in the requested language.
 * @param {HTMLElement|string} target - The target element or selector.
 * @param {string|Array} [langOrProjects='en'] - Language code ('en'|'es') or projects array.
 * @param {string} [optionalLang='en'] - Language code if projects array was passed as second argument.
 */
export function renderProjects(target, langOrProjects = 'en', optionalLang = 'en') {
  const container =
    typeof target === 'string' ? document.querySelector(target) : target;

  if (!container) {
    console.warn('Projects render target not found:', target);
    return;
  }

  let projects = projectsData;
  let lang = 'en';

  if (Array.isArray(langOrProjects)) {
    projects = langOrProjects;
    lang = optionalLang || 'en';
  } else if (typeof langOrProjects === 'string') {
    lang = langOrProjects;
  }

  const html = projects.map((p) => createProjectCardHTML(p, lang)).join('');
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
