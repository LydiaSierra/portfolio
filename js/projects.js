/**
 * Lydia Sierra — Personal Developer Portfolio
 * Featured Projects Module: Scannable Card Grid & Case Study Modal
 * Strict WCAG 2.1 AA keyboard accessibility and bilingual ES/EN support.
 */

export const projectsData = [
  {
    id: 'flashcards-app',
    title: {
      en: 'Flashcards App',
      es: 'Flashcards App'
    },
    badge: {
      en: 'Angular 17+ Signals · Active Recall',
      es: 'Angular 17+ Signals · Recuerdo Activo'
    },
    image: 'assets/images/project-flashcards.svg',
    imageAlt: {
      en: 'Flashcards App interface preview showing a study card on Angular Signals with progress tracking',
      es: 'Vista previa de la interfaz de Flashcards App mostrando una tarjeta de estudio sobre Angular Signals con seguimiento de progreso'
    },
    gallery: [
      {
        src: 'assets/images/project-flashcards.svg',
        alt: {
          en: 'Flashcards App study interface preview showing active recall card on Angular Signals with progress metrics',
          es: 'Vista previa de la interfaz de estudio de Flashcards App mostrando tarjeta de repaso activo sobre Angular Signals'
        }
      }
    ],
    subtitle: {
      en: 'Interactive web application for active recall and spaced-repetition learning with client-side persistence',
      es: 'Aplicación web interactiva para estudio mediante recuerdo activo y repetición espaciada con persistencia en cliente'
    },
    shortBio: {
      en: 'Interactive web application for active recall and spaced-repetition learning with fine-grained reactive state and offline persistence.',
      es: 'Aplicación web interactiva para estudio mediante recuerdo activo y repetición espaciada con reactividad precisa y persistencia offline.'
    },
    overview: {
      en: 'A distraction-free, self-directed learning tool built to optimize memory retention through spaced-repetition algorithms. Features rapid keyboard navigation, custom deck creation, self-assessment scoring, and offline-first Local Storage synchronization.',
      es: 'Herramienta de aprendizaje autodidacta sin distracciones diseñada para optimizar la retención de memoria mediante algoritmos de repetición espaciada. Cuenta con atajos de teclado rápidos, creación de mazos personalizados y persistencia offline en Local Storage.'
    },
    problem: {
      en: 'Self-directed learners need an intuitive, distraction-free study environment to organize card decks, test memory retention, and track learning progress without complicated backend overhead or subscription paywalls.',
      es: 'Los estudiantes autodidactas necesitan un entorno de estudio intuitivo y sin distracciones para organizar mazos de tarjetas, poner a prueba la retención de memoria y seguir su progreso sin complejidad de servidor ni suscripciones de pago.'
    },
    contribution: {
      en: 'Designed the complete frontend architecture from the ground up, utilizing modern Angular Signals for fine-grained reactive state and offline-first Local Storage persistence.',
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
      { name: 'Angular', type: 'accent-primary' },
      { name: 'TypeScript', type: 'neutral' },
      { name: 'Signals', type: 'accent-turquoise' },
      { name: 'Tailwind CSS', type: 'accent-pink' },
      { name: 'Local Storage', type: 'neutral' }
    ],
    links: {
      repo: {
        url: 'https://github.com/LydiaSierra',
        label: { en: 'GitHub Repository', es: 'Repositorio en GitHub' }
      },
      demo: {
        url: null,
        label: { en: 'Live Demo', es: 'Ver demo' },
        statusMessage: {
          en: 'Live demo coming soon',
          es: 'Demo disponible próximamente'
        }
      }
    }
  },
  {
    id: 'gedocs',
    title: {
      en: 'GeDocs — Document Management',
      es: 'GeDocs — Gestión Documental'
    },
    badge: {
      en: 'PHP Laravel & MySQL · SENA Capstone',
      es: 'PHP Laravel y MySQL · Proyecto SENA'
    },
    image: 'assets/images/gedocs-screenshot.png',
    imageAlt: {
      en: 'GeDocs administrative interface preview displaying document records, categories, search filtering, and approval status',
      es: 'Vista previa de la interfaz administrativa de GeDocs mostrando registros de documentos, categorías, filtros y estado de aprobación'
    },
    gallery: [
      {
        src: 'assets/images/gedocs-screenshot.png',
        alt: {
          en: 'GeDocs administrative interface preview displaying document records, categories, search filtering, and approval status',
          es: 'Vista previa de la interfaz administrativa de GeDocs mostrando registros de documentos, categorías, filtros y estado de aprobación'
        }
      },
      {
        src: 'assets/images/project-gedocs.svg',
        alt: {
          en: 'GeDocs database schema and RESTful API architecture diagram',
          es: 'Diagrama de arquitectura RESTful y esquema de base de datos relacional de GeDocs'
        }
      }
    ],
    subtitle: {
      en: 'Centralized administrative tracking and searchable document archive platform with relational database integrity and role-based access',
      es: 'Plataforma centralizada de gestión administrativa y archivo digital de documentos con integridad relacional y control de acceso'
    },
    shortBio: {
      en: 'Centralized administrative tracking and searchable document archive platform with relational database integrity and role-based access.',
      es: 'Plataforma centralizada de gestión administrativa y archivo digital de documentos con integridad relacional y control de acceso.'
    },
    overview: {
      en: 'Institutional document tracking system developed as a capstone project for the SENA Software Analysis and Development curriculum. Centralizes official document workflows, approval review stages, audit logging, and role-based access control.',
      es: 'Sistema institucional de seguimiento documental desarrollado como proyecto de grado para el programa de Análisis y Desarrollo de Software del SENA. Centraliza flujos oficiales, etapas de revisión, auditoría y control de acceso por roles.'
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
      { name: 'PHP (Laravel)', type: 'accent-primary' },
      { name: 'MySQL', type: 'neutral' },
      { name: 'REST APIs', type: 'accent-turquoise' },
      { name: 'MVC', type: 'neutral' },
      { name: 'Bootstrap', type: 'accent-pink' }
    ],
    links: {
      repo: {
        url: 'https://github.com/LydiaSierra/GeDocs',
        label: { en: 'GitHub Repository', es: 'Repositorio en GitHub' }
      },
      demo: {
        url: null,
        label: { en: 'Live Demo', es: 'Ver demo' },
        statusMessage: {
          en: 'Institutional capstone project',
          es: 'Proyecto de grado institucional'
        }
      }
    }
  },
  {
    id: 'portfolio',
    title: {
      en: 'Personal Developer Portfolio',
      es: 'Portafolio de Desarrollador'
    },
    badge: {
      en: 'Vanilla JS & Zero Build Tools',
      es: 'Vanilla JS y Cero Herramientas de Compilación'
    },
    image: 'assets/images/project-portfolio.svg',
    imageAlt: {
      en: 'Personal developer portfolio architecture diagram and design token system preview',
      es: 'Diagrama de arquitectura del portafolio personal y sistema de tokens de diseño'
    },
    gallery: [
      {
        src: 'assets/images/project-portfolio.svg',
        alt: {
          en: 'Personal developer portfolio architecture diagram and design token system preview',
          es: 'Diagrama de arquitectura del portafolio personal y sistema de tokens de diseño'
        }
      }
    ],
    subtitle: {
      en: 'High-performance static developer portfolio built with semantic HTML5, modern vanilla CSS3, and native ES modules',
      es: 'Portafolio estático de alto rendimiento desarrollado con HTML5 semántico, CSS3 moderno y módulos nativos de JavaScript'
    },
    shortBio: {
      en: 'High-performance static developer portfolio built with semantic HTML5, modern vanilla CSS3, and native ES modules.',
      es: 'Portafolio estático de alto rendimiento desarrollado con HTML5 semántico, CSS3 moderno y módulos nativos de JavaScript.'
    },
    overview: {
      en: 'A resilient, zero-build personal developer portfolio crafted to showcase genuine projects, enterprise experience, and contact channels without bloated framework runtimes or fragile pipeline dependencies.',
      es: 'Portafolio de desarrollo personal sin herramientas de compilación diseñado para presentar proyectos genuinos, experiencia profesional y canales de contacto sin la sobrecarga de frameworks ni dependencias frágiles.'
    },
    problem: {
      en: 'Developers often overload personal portfolios with heavy frameworks, fragile build pipelines, and unnecessary dependencies that increase load latency, degrade accessibility, and complicate deployment.',
      es: 'Con frecuencia los portafolios se sobrecargan con frameworks pesados y pipelines complejos que aumentan la latencia de carga, degradan la accesibilidad y dificultan el despliegue estático.'
    },
    contribution: {
      en: 'Engineered a resilient static portfolio using semantic HTML5 landmarks, modern vanilla CSS custom property tokens, and native ES modules without any framework dependencies.',
      es: 'Diseñé e implementé una arquitectura estática robusta utilizando landmarks HTML5, tokens en variables CSS y módulos ES nativos sin dependencias externas.'
    },
    highlights: {
      en: [
        'Zero build pipeline dependency: runs statically and instantly on GitHub Pages',
        'Complete English / Spanish internationalization with dynamic metadata updates',
        'System preference-aware light and dark theme engine with FOUC prevention',
        'Strict WCAG 2.1 AA keyboard navigation, contrast ratios, and accessible landmarks'
      ],
      es: [
        'Cero herramientas de compilación: despliegue estático e instantáneo en GitHub Pages',
        'Internacionalización completa inglés/español con sincronización dinámica de metadatos',
        'Motor de temas claro/oscuro sincronizado con preferencias del sistema y prevención de parpadeo',
        'Estricto cumplimiento de accesibilidad WCAG 2.1 AA por teclado y contraste de color'
      ]
    },
    tags: [
      { name: 'HTML5', type: 'accent-primary' },
      { name: 'Vanilla CSS3', type: 'neutral' },
      { name: 'ES Modules', type: 'accent-turquoise' },
      { name: 'i18n Engine', type: 'accent-pink' },
      { name: 'WCAG 2.1 AA', type: 'neutral' }
    ],
    links: {
      repo: {
        url: 'https://github.com/LydiaSierra',
        label: { en: 'GitHub Repository', es: 'Repositorio en GitHub' }
      },
      demo: {
        url: 'https://lydiasierra.dev',
        label: { en: 'Live Demo', es: 'Ver demo' },
        statusMessage: {
          en: 'Currently Live',
          es: 'Actualmente en vivo'
        }
      }
    }
  },
  {
    id: 'freelance-sites',
    title: {
      en: 'Commercial Web Solutions',
      es: 'Sitios Web Comerciales'
    },
    badge: {
      en: 'Responsive Web UI & SEO · Lighthouse 100',
      es: 'Diseño Web Responsivo y SEO · Lighthouse 100'
    },
    image: 'assets/images/project-freelance.svg',
    imageAlt: {
      en: 'Commercial responsive websites mockup on desktop and mobile smartphone with Lighthouse 100 performance scores',
      es: 'Maqueta de sitios web comerciales en escritorio y móvil con puntuación de 100 en Lighthouse'
    },
    gallery: [
      {
        src: 'assets/images/project-freelance.svg',
        alt: {
          en: 'Commercial responsive websites mockup on desktop and mobile smartphone with Lighthouse 100 performance scores',
          es: 'Maqueta de sitios web comerciales en escritorio y móvil con puntuación de 100 en Lighthouse'
        }
      }
    ],
    subtitle: {
      en: 'Accessible, responsive commercial websites for small independent businesses with fast load times',
      es: 'Sitios web comerciales accesibles y responsivos para pequeños negocios locales con alta velocidad de carga'
    },
    shortBio: {
      en: 'Lightweight, mobile-first commercial websites for small independent businesses optimized for search engines and swift customer contact.',
      es: 'Sitios web ligeros con enfoque mobile-first para negocios locales optimizados para motores de búsqueda y contacto ágil.'
    },
    overview: {
      en: 'Commercial web solutions tailored for independent local shops, florists, and cafes. Designed from mobile wireframes up to deliver instantaneous load speeds, flawless accessibility, and conversion-oriented contact channels.',
      es: 'Soluciones web comerciales adaptadas para tiendas independientes, floristerías y cafeterías locales. Diseñadas para ofrecer velocidad de carga instantánea, accesibilidad y canales de conversión directa.'
    },
    problem: {
      en: 'Local business owners frequently struggle with slow, inaccessible template sites that fail mobile usability standards and hinder local customer inquiries.',
      es: 'Los negocios locales suelen lidiar con plantillas lentas y poco accesibles que fallan en dispositivos móviles y dificultan el contacto con nuevos clientes.'
    },
    contribution: {
      en: 'Developed lightweight, mobile-first websites focusing on clean semantic markup, fast load times, and intuitive contact conversion funnels.',
      es: 'Desarrollé sitios web ligeros con enfoque mobile-first, priorizando semántica limpia, tiempos de carga mínimos y canales de contacto directo por WhatsApp y correo.'
    },
    highlights: {
      en: [
        'Mobile-first responsive layouts tested across real iOS and Android devices',
        'High Lighthouse performance scores through asset optimization and clean markup',
        'Accessible contact channels with verified mailto actions and clear phone triggers',
        'Local business search optimization and social sharing Open Graph metadata'
      ],
      es: [
        'Diseños responsivos mobile-first probados en dispositivos reales iOS y Android',
        'Altas puntuaciones de rendimiento en Google Lighthouse gracias a optimización de assets',
        'Canales de contacto accesibles con enlaces verificados a WhatsApp, teléfono y correo',
        'Optimización de metadatos Open Graph y posicionamiento SEO local'
      ]
    },
    tags: [
      { name: 'HTML5 / CSS3', type: 'accent-primary' },
      { name: 'Responsive UI', type: 'neutral' },
      { name: 'SEO Optimization', type: 'accent-turquoise' },
      { name: 'Performance', type: 'accent-pink' },
      { name: 'Lighthouse 100', type: 'neutral' }
    ],
    links: {
      repo: {
        url: 'https://github.com/LydiaSierra',
        label: { en: 'GitHub Repository', es: 'Repositorio en GitHub' }
      },
      demo: {
        url: null,
        label: { en: 'Live Demo', es: 'Ver demo' },
        statusMessage: {
          en: 'Client portfolio case studies',
          es: 'Casos de estudio de clientes'
        }
      }
    }
  }
];

// State Management for Case Study Modal
let currentProjectIdx = 0;
let currentGalleryIdx = 0;
let currentLang = 'en';
let lastActiveElement = null;

/**
 * Helper to get localized string from an object or primitive.
 */
function getLocalized(field, lang = 'en') {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[lang] || field.en || '';
}

// -----------------------------------------------------------------------------
// Case Study Detail Modal with Screenshot Gallery
// -----------------------------------------------------------------------------

/**
 * Opens the Case Study Detail Modal for a specific project.
 * @param {string} [projectId] - ID of project ('flashcards-app', 'gedocs', 'portfolio', 'freelance-sites').
 */
export function openCaseStudyModal(projectId) {
  if (projectId) {
    const foundIdx = projectsData.findIndex(p => p.id === projectId);
    if (foundIdx !== -1) currentProjectIdx = foundIdx;
  }

  currentGalleryIdx = 0;
  lastActiveElement = document.activeElement;

  renderModalContent();

  const modalOverlay = document.getElementById('project-detail-modal');
  if (modalOverlay) {
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) closeBtn.focus();
  }
}

/**
 * Closes the Case Study Detail Modal.
 */
export function closeCaseStudyModal() {
  const modalOverlay = document.getElementById('project-detail-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }
}

/**
 * Switches the active image in the modal gallery.
 * @param {number} slideIdx - Index of slide.
 */
export function setGallerySlide(slideIdx) {
  const p = projectsData[currentProjectIdx];
  const gallery = p.gallery || [{ src: p.image, alt: p.imageAlt }];

  if (slideIdx < 0) slideIdx = gallery.length - 1;
  if (slideIdx >= gallery.length) slideIdx = 0;

  currentGalleryIdx = slideIdx;

  const mainImg = document.getElementById('modal-gallery-main-img');
  const counterEl = document.getElementById('modal-gallery-counter');

  if (mainImg) {
    mainImg.style.opacity = '0.5';
    setTimeout(() => {
      mainImg.src = gallery[currentGalleryIdx].src;
      mainImg.alt = getLocalized(gallery[currentGalleryIdx].alt, currentLang);
      mainImg.style.opacity = '1';
    }, 100);
  }

  if (counterEl) {
    counterEl.textContent = `0${currentGalleryIdx + 1} / 0${gallery.length}`;
  }

  // Update thumbnail active states
  document.querySelectorAll('.modal-thumb-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === currentGalleryIdx);
    btn.setAttribute('aria-selected', idx === currentGalleryIdx ? 'true' : 'false');
  });
}

export function nextGallerySlide() {
  setGallerySlide(currentGalleryIdx + 1);
}

export function prevGallerySlide() {
  setGallerySlide(currentGalleryIdx - 1);
}

/**
 * Renders the two-column case study modal content.
 */
function renderModalContent() {
  const p = projectsData[currentProjectIdx];
  const modalBody = document.getElementById('modal-project-body');
  if (!p || !modalBody) return;

  const gallery = p.gallery && p.gallery.length > 0
    ? p.gallery
    : [{ src: p.image, alt: p.imageAlt }];

  const hasMultipleImages = gallery.length > 1;

  // Gallery HTML (Left Column on desktop)
  const galleryHTML = `
    <div class="modal-gallery" aria-label="${currentLang === 'es' ? 'Galería de capturas del proyecto' : 'Project screenshot gallery'}">
      <div class="modal-gallery-stage" id="modal-gallery-stage" tabindex="0" role="region" aria-roledescription="carousel" aria-label="${getLocalized(p.title, currentLang)} screenshots">
        <img
          id="modal-gallery-main-img"
          class="modal-gallery-main-img"
          src="${gallery[currentGalleryIdx].src}"
          alt="${getLocalized(gallery[currentGalleryIdx].alt, currentLang)}"
          loading="eager"
          decoding="async"
        >

        ${hasMultipleImages ? `
          <span class="modal-gallery-counter" id="modal-gallery-counter" aria-live="polite">0${currentGalleryIdx + 1} / 0${gallery.length}</span>
          <button class="gallery-nav-arrow gallery-prev" onclick="window.__portfolioProjects.prevGallerySlide()" aria-label="${currentLang === 'es' ? 'Captura anterior' : 'Previous screenshot'}">←</button>
          <button class="gallery-nav-arrow gallery-next" onclick="window.__portfolioProjects.nextGallerySlide()" aria-label="${currentLang === 'es' ? 'Siguiente captura' : 'Next screenshot'}">→</button>
        ` : ''}
      </div>

      ${hasMultipleImages ? `
        <div class="modal-gallery-thumbs" id="modal-gallery-thumbs" role="tablist" aria-label="${currentLang === 'es' ? 'Miniaturas de capturas' : 'Screenshot thumbnails'}">
          ${gallery.map((img, i) => `
            <button
              class="modal-thumb-btn ${i === currentGalleryIdx ? 'active' : ''}"
              onclick="window.__portfolioProjects.setGallerySlide(${i})"
              aria-label="${currentLang === 'es' ? `Ver captura ${i + 1}` : `View screenshot ${i + 1}`}"
              role="tab"
              aria-selected="${i === currentGalleryIdx ? 'true' : 'false'}"
            >
              <img src="${img.src}" alt="" class="modal-thumb-img" loading="lazy">
            </button>
          `).join('')}
        </div>
      ` : ''}

      <!-- Highlights Box (Left Column, directly below gallery on desktop) -->
      <div class="modal-panel-block" style="margin-top: 0.5rem;">
        <h4 class="modal-block-heading">${currentLang === 'es' ? 'Decisiones Técnicas Clave' : 'Key Technical Decisions & Highlights'}</h4>
        <ul class="modal-highlights-list">
          ${(p.highlights[currentLang] || p.highlights.en || []).map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  // Details Column HTML (Right Column on desktop)
  const detailsHTML = `
    <div class="modal-details-col">
      <div class="modal-header-block">
        <span class="modal-badge">${getLocalized(p.badge, currentLang)}</span>
        <h3 class="modal-title" id="modal-project-title">${getLocalized(p.title, currentLang)}</h3>
        <p class="modal-subtitle">${getLocalized(p.subtitle, currentLang)}</p>
      </div>

      <div class="modal-panel-block">
        <h4 class="modal-block-heading">${currentLang === 'es' ? '01. Propósito y Visión General' : '01. Project Purpose & Overview'}</h4>
        <p class="modal-block-text">${getLocalized(p.overview, currentLang)}</p>
      </div>

      <div class="modal-panel-block">
        <h4 class="modal-block-heading">${currentLang === 'es' ? '02. El Problema Abordado' : '02. The Problem Addressed'}</h4>
        <p class="modal-block-text">${getLocalized(p.problem, currentLang)}</p>
      </div>

      <div class="modal-panel-block">
        <h4 class="modal-block-heading">${currentLang === 'es' ? '03. Mi Contribución Arquitectónica' : '03. My Architectural Contribution'}</h4>
        <p class="modal-block-text">${getLocalized(p.contribution, currentLang)}</p>
      </div>

      <div class="modal-panel-block">
        <h4 class="modal-block-heading">${currentLang === 'es' ? '04. Stack Tecnológico' : '04. Technology Stack'}</h4>
        <ul class="modal-tags-list">
          ${p.tags.map(t => `<li class="modal-tag-chip">${t.name}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-actions-bar">
        ${p.links?.repo?.url ? `
          <a href="${p.links.repo.url}" target="_blank" rel="noopener noreferrer" class="btn-modal-primary" aria-label="${getLocalized(p.title, currentLang)} on GitHub (opens in new tab)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            <span>${getLocalized(p.links.repo.label, currentLang)}</span>
          </a>
        ` : ''}

        ${p.links?.demo?.url ? `
          <a href="${p.links.demo.url}" target="_blank" rel="noopener noreferrer" class="btn-modal-secondary" aria-label="Visit live demo (opens in new tab)">
            <span>${getLocalized(p.links.demo.label, currentLang)}</span>
            <span aria-hidden="true">&nearr;</span>
          </a>
        ` : `
          <span class="modal-status-chip">
            ● ${getLocalized(p.links.demo.statusMessage, currentLang)}
          </span>
        `}
      </div>
    </div>
  `;

  modalBody.innerHTML = `
    <div class="modal-case-study-grid">
      ${galleryHTML}
      ${detailsHTML}
    </div>
  `;

  // Attach touch swipe on modal gallery stage
  setupModalGallerySwipe();
}

/**
 * Touch swipe navigation inside modal gallery.
 */
function setupModalGallerySwipe() {
  const stage = document.getElementById('modal-gallery-stage');
  if (!stage) return;

  let startX = 0;
  let endX = 0;

  stage.addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].screenX;
  }, { passive: true });

  stage.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].screenX;
    const diff = endX - startX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) nextGallerySlide();
      else prevGallerySlide();
    }
  }, { passive: true });
}

/**
 * Keyboard trap and controls for open modal.
 */
function setupKeyboardEvents() {
  window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('project-detail-modal');
    const isModalOpen = modal && modal.classList.contains('active');

    if (!isModalOpen) return;

    if (e.key === 'Escape') {
      closeCaseStudyModal();
    } else if (e.key === 'Tab') {
      const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
      const focusables = Array.from(modal.querySelectorAll(focusableSelector)).filter(
        (el) => el.offsetParent !== null || window.getComputedStyle(el).display !== 'none'
      );
      if (focusables.length > 0) {
        const firstEl = focusables[0];
        const lastEl = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    } else {
      // While modal is open, arrow keys navigate screenshot gallery (if multiple)
      const p = projectsData[currentProjectIdx];
      if (p && p.gallery && p.gallery.length > 1) {
        if (e.key === 'ArrowRight') nextGallerySlide();
        if (e.key === 'ArrowLeft') prevGallerySlide();
      }
    }
  });
}

// -----------------------------------------------------------------------------
// Public Initialization & Re-render Interface
// -----------------------------------------------------------------------------

/**
 * Initializes the Horizontal Scrolling Project Track:
 * - Desktop arrow buttons programmatically scroll by the width of one card (or client width) with smooth behavior.
 * - Scroll event listener calculates scroll percentage (scrollLeft / (scrollWidth - clientWidth))
 *   and updates width/transform of .projects-scroll-indicator for touch/mobile feedback.
 * - Arrow buttons get disabled/enabled dynamically based on scroll boundary positions.
 */
function initProjectsTrack() {
  const track = document.getElementById('projects-track') || document.querySelector('.projects-track');
  const prevBtn = document.getElementById('track-nav-prev') || document.querySelector('.track-nav-prev');
  const nextBtn = document.getElementById('track-nav-next') || document.querySelector('.track-nav-next');
  const indicator = document.getElementById('projects-scroll-indicator') || document.querySelector('.projects-scroll-indicator');
  const progress = document.getElementById('projects-scroll-progress') || document.querySelector('.projects-scroll-progress');

  if (!track) return;

  function updateScrollState() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    const scrollLeft = track.scrollLeft;
    const scrollPercentage = maxScroll > 0 ? (scrollLeft / maxScroll) : 0;

    // Mobile / touch visual scroll indicator update
    if (progress) {
      const minThumbPercent = 25;
      const progressWidth = minThumbPercent + (scrollPercentage * (100 - minThumbPercent));
      progress.style.width = `${Math.min(100, Math.max(minThumbPercent, progressWidth))}%`;
      progress.style.transform = `scaleX(${Math.max(0.2, scrollPercentage)})`;
    }
    if (indicator) {
      indicator.style.setProperty('--scroll-percentage', `${scrollPercentage}`);
      indicator.style.setProperty('--scroll-percent', `${Math.round(scrollPercentage * 100)}%`);
    }

    // Desktop arrow buttons disabled state
    if (prevBtn) {
      if (scrollLeft <= 5) {
        prevBtn.disabled = true;
        prevBtn.setAttribute('aria-disabled', 'true');
      } else {
        prevBtn.disabled = false;
        prevBtn.removeAttribute('aria-disabled');
      }
    }

    if (nextBtn) {
      if (maxScroll <= 0 || scrollLeft >= maxScroll - 5) {
        nextBtn.disabled = true;
        nextBtn.setAttribute('aria-disabled', 'true');
      } else {
        nextBtn.disabled = false;
        nextBtn.removeAttribute('aria-disabled');
      }
    }
  }

  // Get scroll step: width of one card + track gap
  function getScrollStep() {
    const card = track.querySelector('.project-card');
    if (card) {
      const cardRect = card.getBoundingClientRect();
      const style = window.getComputedStyle(track);
      const gap = parseFloat(style.gap || style.columnGap) || 16;
      return cardRect.width + gap;
    }
    return track.clientWidth * 0.75;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
    });
  }

  track.addEventListener('scroll', updateScrollState, { passive: true });
  window.addEventListener('resize', updateScrollState, { passive: true });

  // Initial update
  updateScrollState();
}

/**
 * Initializes Project Cards interaction, Horizontal Track, and Case Study Modal.
 */
export function initProjects() {
  // Bind global helper for inline onclick handlers inside modal
  window.__portfolioProjects = {
    openCaseStudyModal,
    closeCaseStudyModal,
    setGallerySlide,
    nextGallerySlide,
    prevGallerySlide
  };

  // Wire up horizontal scrolling track & desktop arrow controls
  initProjectsTrack();

  // Wire up project cards and explore buttons
  document.querySelectorAll('.project-card').forEach((card) => {
    const projectId = card.getAttribute('data-project-id');
    let isDragging = false;
    let startX = 0;

    card.addEventListener('mousedown', (e) => {
      startX = e.clientX;
      isDragging = false;
    });

    card.addEventListener('mousemove', (e) => {
      if (Math.abs(e.clientX - startX) > 8) {
        isDragging = true;
      }
    });

    // Clicking anywhere on the card opens the modal (unless clicking an inner link or button or if dragging)
    card.addEventListener('click', (e) => {
      if (isDragging) {
        isDragging = false;
        return;
      }
      if (e.target.closest('a') || e.target.closest('button')) {
        return;
      }
      openCaseStudyModal(projectId);
    });

    // Keyboard activation when card itself is focused (Enter or Space)
    card.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && e.target === card) {
        e.preventDefault();
        openCaseStudyModal(projectId);
      }
    });

    // Direct Explore Case Study button
    const exploreBtn = card.querySelector('.btn-card-explore');
    if (exploreBtn) {
      exploreBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openCaseStudyModal(projectId);
      });
    }
  });

  // Modal close button
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeCaseStudyModal);
  }

  // Modal backdrop click
  const modalOverlay = document.getElementById('project-detail-modal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeCaseStudyModal();
    });
  }

  setupKeyboardEvents();
}

/**
 * Dynamic language re-render hook called by i18n system.
 * @param {string} [targetOrLang='en'] - Target selector or language code.
 * @param {string} [lang='en'] - Language code.
 */
export function renderProjects(targetOrLang = 'en', lang = 'en') {
  currentLang = (typeof targetOrLang === 'string' && (targetOrLang === 'en' || targetOrLang === 'es'))
    ? targetOrLang
    : (typeof lang === 'string' ? lang : 'en');

  // If modal is open, re-render it in new language
  const modalOverlay = document.getElementById('project-detail-modal');
  if (modalOverlay && modalOverlay.classList.contains('active')) {
    renderModalContent();
  }
}
