/**
 * Lydia Sierra — Personal Developer Portfolio
 * Featured Projects Module: Full-Width Immersive Carousel & Visual Case Study Modal
 * Conforming to Approved Immersive Showcase Design Specification
 */

export const projectsData = [
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
    ],
    links: {
      repo: {
        url: 'https://github.com/LydiaSierra',
        label: { en: 'GitHub Repository', es: 'Repositorio en GitHub' },
        status: 'available'
      },
      demo: {
        url: null,
        label: { en: 'Live Demo', es: 'Ver demo' },
        status: 'forthcoming',
        statusMessage: {
          en: 'Institutional capstone project',
          es: 'Proyecto de grado institucional'
        }
      }
    }
  },
  {
    id: 'freelance-sites',
    title: {
      en: 'Local Business Digital Presences',
      es: 'Sitios Web para Negocios Locales'
    },
    badge: {
      en: 'Responsive Web UI & SEO · Lighthouse 100',
      es: 'Diseño Web Responsivo y SEO · Lighthouse 100'
    },
    image: 'assets/images/project-freelance.svg',
    imageAlt: {
      en: 'Local Business Websites responsive layout mockup on desktop and mobile smartphone with Lighthouse 100/100 performance scores',
      es: 'Maqueta de sitios web para negocios locales en escritorio y móvil con puntuación de 100/100 en Lighthouse'
    },
    gallery: [
      {
        src: 'assets/images/project-freelance.svg',
        alt: {
          en: 'Local Business Websites responsive layout mockup on desktop and mobile smartphone with Lighthouse 100/100 performance scores',
          es: 'Maqueta de sitios web para negocios locales en escritorio y móvil con puntuación de 100/100 en Lighthouse'
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
      { name: 'WordPress', type: 'accent-primary' },
      { name: 'Responsive UI', type: 'neutral' },
      { name: 'SEO Optimization', type: 'accent-turquoise' },
      { name: 'Performance', type: 'accent-pink' },
      { name: 'Lighthouse 100', type: 'neutral' }
    ],
    links: {
      repo: {
        url: 'https://github.com/LydiaSierra',
        label: { en: 'GitHub Repository', es: 'Repositorio en GitHub' },
        status: 'available'
      },
      demo: {
        url: null,
        label: { en: 'Live Demo', es: 'Ver demo' },
        status: 'forthcoming',
        statusMessage: {
          en: 'Client portfolio case studies',
          es: 'Casos de estudio de clientes'
        }
      }
    }
  }
];

// State Management
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

/**
 * Navigates the main carousel to a specific project.
 * @param {number} idx - Index of project.
 */
export function goToProject(idx) {
  if (idx < 0) idx = projectsData.length - 1;
  if (idx >= projectsData.length) idx = 0;
  currentProjectIdx = idx;
  currentGalleryIdx = 0;
  updateShowcaseDOM();
}

export function nextProject() {
  goToProject(currentProjectIdx + 1);
}

export function prevProject() {
  goToProject(currentProjectIdx - 1);
}

/**
 * Updates the showcase DOM elements with smooth cross-fade.
 */
function updateShowcaseDOM() {
  const p = projectsData[currentProjectIdx];
  const bgImg = document.getElementById('showcase-bg');
  const infoCluster = document.getElementById('showcase-info');

  if (!p || !bgImg) return;

  // Gentle transition
  bgImg.style.opacity = '0.65';
  if (infoCluster) {
    infoCluster.style.opacity = '0.7';
    infoCluster.style.transform = 'translateY(4px)';
  }

  setTimeout(() => {
    bgImg.src = p.image;
    bgImg.alt = getLocalized(p.imageAlt, currentLang);

    const badgeEl = document.getElementById('showcase-badge');
    if (badgeEl) badgeEl.textContent = getLocalized(p.badge, currentLang);

    const counterEl = document.getElementById('showcase-counter');
    if (counterEl) counterEl.textContent = `0${currentProjectIdx + 1} / 0${projectsData.length}`;

    const titleEl = document.getElementById('showcase-title');
    if (titleEl) titleEl.textContent = getLocalized(p.title, currentLang);

    const descEl = document.getElementById('showcase-desc');
    if (descEl) descEl.textContent = getLocalized(p.shortBio, currentLang);

    // Tags
    const tagsContainer = document.getElementById('showcase-tags');
    if (tagsContainer) {
      tagsContainer.innerHTML = p.tags
        .map(t => `<li class="showcase-tag-pill ${t.type}">${t.name}</li>`)
        .join('');
    }

    // Repository Link
    const repoBtn = document.getElementById('showcase-repo-link');
    if (repoBtn) {
      if (p.links?.repo?.url) {
        repoBtn.href = p.links.repo.url;
        repoBtn.style.display = 'inline-flex';
      } else {
        repoBtn.style.display = 'none';
      }
    }

    // Live Demo Link
    const demoBtn = document.getElementById('showcase-demo-link');
    if (demoBtn) {
      if (p.links?.demo?.url) {
        demoBtn.href = p.links.demo.url;
        demoBtn.style.display = 'inline-flex';
      } else {
        demoBtn.style.display = 'none';
      }
    }

    // Update Stepper buttons
    renderStepperButtons();

    bgImg.style.opacity = '1';
    if (infoCluster) {
      infoCluster.style.opacity = '1';
      infoCluster.style.transform = 'translateY(0)';
    }
  }, 120);
}

/**
 * Renders the top position stepper buttons.
 */
function renderStepperButtons() {
  const stepperContainer = document.querySelector('.showcase-stepper');
  if (!stepperContainer) return;

  const counterHTML = `<span class="showcase-counter" id="showcase-counter">0${currentProjectIdx + 1} / 0${projectsData.length}</span>`;

  stepperContainer.innerHTML = counterHTML + buttonsHTML;
}

// -----------------------------------------------------------------------------
// Case Study Detail Modal with Screenshot Gallery
// -----------------------------------------------------------------------------

/**
 * Opens the Case Study Detail Modal for the current project.
 * @param {string} [projectId] - Optional ID of project.
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

  // Gallery HTML
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

  // Details Column HTML
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

// -----------------------------------------------------------------------------
// Carousel Touch Swipe & Keyboard Event Handlers
// -----------------------------------------------------------------------------
function setupCarouselSwipe() {
  const stage = document.getElementById('showcase-stage');
  if (!stage) return;

  let startX = 0;
  let endX = 0;

  stage.addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].screenX;
  }, { passive: true });

  stage.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].screenX;
    const diff = endX - startX;
    if (Math.abs(diff) > 45) {
      if (diff < 0) nextProject();
      else prevProject();
    }
  }, { passive: true });
}

function setupKeyboardEvents() {
  window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('project-detail-modal');
    const isModalOpen = modal && modal.classList.contains('active');

    if (e.key === 'Escape') {
      if (isModalOpen) closeCaseStudyModal();
    } else if (isModalOpen) {
      if (e.key === 'Tab') {
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
        if (p.gallery && p.gallery.length > 1) {
          if (e.key === 'ArrowRight') nextGallerySlide();
          if (e.key === 'ArrowLeft') prevGallerySlide();
        }
      }
    } else {
      // While carousel is active, arrow keys navigate projects
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    }
  });
}

// -----------------------------------------------------------------------------
// Public Initialization & Re-render Interface
// -----------------------------------------------------------------------------

/**
 * Initializes the Immersive Projects Showcase and Case Study Modal.
 */
export function initProjects() {
  // Bind global helper for inline onclick handlers
  window.__portfolioProjects = {
    goToProject,
    nextProject,
    prevProject,
    openCaseStudyModal,
    closeCaseStudyModal,
    setGallerySlide,
    nextGallerySlide,
    prevGallerySlide
  };

  // Bind desktop arrow controls
  const prevBtn = document.getElementById('showcase-prev-btn');
  const nextBtn = document.getElementById('showcase-next-btn');
  if (prevBtn) prevBtn.addEventListener('click', prevProject);
  if (nextBtn) nextBtn.addEventListener('click', nextProject);

  // Bind mobile arrow controls
  const mobilePrevBtn = document.getElementById('showcase-mobile-prev-btn');
  const mobileNextBtn = document.getElementById('showcase-mobile-next-btn');
  if (mobilePrevBtn) mobilePrevBtn.addEventListener('click', prevProject);
  if (mobileNextBtn) mobileNextBtn.addEventListener('click', nextProject);

  // Bind Explore Case Study button
  const exploreBtn = document.getElementById('btn-explore-case-study');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => openCaseStudyModal());
  }

  // Bind click on stage background image to open modal
  const bgImg = document.getElementById('showcase-bg');
  if (bgImg) {
    bgImg.style.cursor = 'pointer';
    bgImg.addEventListener('click', () => openCaseStudyModal());
  }

  // Bind modal close button
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeCaseStudyModal);
  }

  // Bind modal backdrop click
  const modalOverlay = document.getElementById('project-detail-modal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeCaseStudyModal();
    });
  }

  setupCarouselSwipe();
  setupKeyboardEvents();

  // Render initial project state
  updateShowcaseDOM();
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

  updateShowcaseDOM();

  // If modal is open, re-render it in new language
  const modalOverlay = document.getElementById('project-detail-modal');
  if (modalOverlay && modalOverlay.classList.contains('active')) {
    renderModalContent();
  }
}
