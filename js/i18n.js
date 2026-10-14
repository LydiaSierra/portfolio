/**
 * Lydia Sierra — Personal Developer Portfolio
 * Internationalization (i18n) Module
 * Supports English ('en') and Spanish ('es') with client-side detection,
 * persistence, accessible navbar control, and dynamic DOM translation.
 */

import { renderProjects } from './projects.js';
import { setContactLanguage } from './contact.js';

export const SUPPORTED_LANGUAGES = ['en', 'es'];
export const DEFAULT_LANGUAGE = 'en';
export const STORAGE_KEY = 'portfolio-language';

/**
 * Complete, natural, professional bilingual dictionary.
 */
export const translations = {
  en: {
    // Document metadata
    'meta.title': 'Lydia Sierra — Personal Developer Portfolio',
    'meta.description': 'Personal developer portfolio of Lydia Sierra — Junior Software Developer. Explore projects, technical skills, experience, and contact information.',

    // Accessibility
    'a11y.skipLink': 'Skip to main content',
    'a11y.langAnnounce': 'Language switched to English.',

    // Header & Navigation
    'brand.ariaLabel': 'Lydia Sierra — Home',
    'nav.ariaLabel': 'Primary navigation',
    'nav.toggleAria': 'Toggle navigation menu',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.languages': 'Languages',
    'nav.contact': 'Contact',
    'actions.downloadCv': 'Download CV',
    'actions.cvSoon': '(Soon)',
    'actions.cvTitle': 'CV document pending upload',
    'actions.themeToggleAria': 'Switch visual theme',
    'actions.themeToggleTitle': 'Toggle visual theme',
    'actions.langBtnAria': 'Change language. Current language: English',
    'actions.langMenuAria': 'Language selection',

    // Hero Section
    'hero.greeting': "Hi, I'm Lydia",
    'hero.titleLine1': 'Full Stack Developer',
    'hero.titleLine2': 'who loves building',
    'hero.titleHtml': 'Full Stack Developer who loves building <span class="accent-text"><em>meaningful</em></span> digital experiences.',
    'hero.subtitle': "I'm a Software Development student at SENA and currently doing my internship at Globant. I enjoy turning ideas into clean, efficient and user-focused applications.",
    'hero.ctaProjects': 'View my projects',
    'hero.ctaCv': 'Download CV',
    'hero.pillLocation': 'Pereira, Colombia',
    'hero.pillEnglish': 'English C2 (EF SET)',
    'hero.pillStatus': 'Open to opportunities',
    'hero.imageAlt': "Developer workspace desk setup with laptop displaying code, coffee cup, and open notebook",

    // About Section
    'about.title': 'About me',
    'about.p1': "I'm passionate about clean code, thoughtful design and continuous learning. I enjoy working across the stack, solving problems and creating products that make people's lives better.",
    'about.p2': "When I'm not coding, you'll find me learning Japanese, drawing or playing the guitar.",
    'about.signatureAria': 'Personal signature: Lydia Sierra',

    // Skills Section (Tech Stack)
    'skills.title': 'Tech stack',
    'skills.viewAll': 'View all',
    'skills.viewAllAria': 'View all projects using these skills',
    'skills.catFrontend': 'Frontend',
    'skills.catBackend': 'Backend',
    'skills.catDatabases': 'Databases',
    'skills.catTools': 'Tools',
    'skills.learningTag': '(learning)',

    // Projects Header
    'projects.title': 'Featured projects',
    'projects.badge': 'Selected Works',

    // Experience & Education Section
    'experience.title': 'Experience & Education',
    'experience.badge': 'Career & Academic Journey',
    'experience.workHeading': 'Work Experience',
    'experience.workTypeBadge': 'Professional',
    'experience.eduHeading': 'Education & Training',
    'experience.eduTypeBadge': 'Academic',

    // Experience Timeline items
    'exp.globant.date': '2024 — Present',
    'exp.globant.tag': 'Internship',
    'exp.globant.role': 'Software Development Intern',
    'exp.globant.desc': 'Collaborating within agile engineering teams to support enterprise web applications using modern low-code and web technologies. Contributing to component development, QA testing cycles, workflow automation, and cross-functional sprint planning while adhering to code standards and team best practices.',
    'exp.globant.tech1': 'Enterprise Web Apps',
    'exp.globant.tech2': 'Low-Code Platforms',
    'exp.globant.tech3': 'Agile / Scrum',
    'exp.globant.tech4': 'Quality Assurance',

    'exp.independent.date': '2023 — 2024',
    'exp.independent.tag': 'Independent',
    'exp.independent.role': 'Full-Stack Project Development',
    'exp.independent.company': 'Independent & Academic',
    'exp.independent.desc': 'Engineered multiple full-stack applications—including document management systems (GeDocs) and reactive client-side learning tools—focusing on clean MVC patterns, relational database schemas, and responsive user experiences.',

    'exp.freelance.date': '2022 — 2023',
    'exp.freelance.tag': 'Freelance',
    'exp.freelance.role': 'Web Developer',
    'exp.freelance.company': 'Freelance',
    'exp.freelance.desc': 'Developed and maintained accessible, responsive websites and digital presences for small local businesses, handling semantic markup, performance optimization, and cross-device compatibility.',
    'exp.freelance.tech3': 'Responsive UI',
    'exp.freelance.tech4': 'SEO & Performance',

    'edu.sena.date': '2023 — Present',
    'edu.sena.tag': 'Technologist',
    'edu.sena.role': 'Software Analysis and Development (ADSO)',
    'edu.sena.institution': 'SENA',
    'edu.sena.desc': 'Comprehensive national technologist program covering software lifecycle management, relational database architecture (MySQL, PostgreSQL), backend development (PHP/Laravel, Java, RESTful APIs), and clean coding methodologies.',
    'edu.sena.tech1': 'Software Architecture',
    'edu.sena.tech2': 'Relational Databases',
    'edu.sena.tech3': 'Object-Oriented Programming',
    'edu.sena.tech4': 'Requirements Engineering',

    'edu.continuous.date': '2023 — Present',
    'edu.continuous.tag': 'Self-Directed',
    'edu.continuous.role': 'Frontend Architecture & Modern Frameworks',
    'edu.continuous.institution': 'Continuous Learning',
    'edu.continuous.desc': 'Targeted self-directed study in modern reactive frontend development, mastering Angular Signals, TypeScript type safety, web accessibility standards (WCAG 2.1 AA), and clean interface design.',
    'edu.continuous.tech1': 'Angular & TypeScript',
    'edu.continuous.tech2': 'Web Accessibility (a11y)',
    'edu.continuous.tech3': 'Modern CSS & Design Systems',

    // Milestones / By the numbers
    'milestones.heading': 'By the numbers',
    'milestones.projects': 'Projects completed',
    'milestones.contributions': 'Contributions on GitHub',
    'milestones.coffeeVal': 'In love',
    'milestones.coffeeLabel': 'with clean code and coffee',
    'milestones.learningVal': 'Always',
    'milestones.learningLabel': 'learning something new',

    // Languages & Credentials Section
    'languages.title': 'Languages & Credentials',
    'languages.subtitle': 'Verified proficiencies, formal assessments, and active self-study for international engineering teams.',
    'languages.badge': 'Communication',

    'lang.en.name': 'English',
    'lang.en.status': 'Formally Certified',
    'lang.en.tier': 'C2 Proficient',
    'lang.en.standard': 'CEFR Level · EF SET Certificate',
    'lang.en.detail': 'Bilingual fluency for global distributed teams. Fully proficient in technical documentation, architectural reviews, and daily cross-timezone collaboration.',
    'lang.en.assessmentLabel': 'Assessment:',
    'lang.en.assessmentVal': 'EF Standard English Test (EF SET)',
    'lang.en.scoreLabel': 'Verified Score:',
    'lang.en.scoreVal': 'C2 Proficient (Score 71+/100)',

    'lang.es.name': 'Spanish',
    'lang.es.status': 'Native Language',
    'lang.es.tier': 'Native Fluency',
    'lang.es.standard': 'Mother Tongue',
    'lang.es.detail': 'Native competence across professional, technical, and colloquial contexts. Clear, structured communicator in both written and spoken Spanish.',
    'lang.es.originLabel': 'Origin:',
    'lang.es.originVal': 'Pereira, Colombia',
    'lang.es.contextLabel': 'Context:',
    'lang.es.contextVal': 'Native Academic & Technical',

    'lang.ja.name': 'Japanese',
    'lang.ja.status': 'Self-Assessed · In Study',
    'lang.ja.tier': 'N4 Target Level',
    'lang.ja.standard': 'Elementary · Self-Directed Study',
    'lang.ja.detail': 'Dedicated self-study focused on JLPT N4 grammar, vocabulary, and approximately 300 Kanji. Capable of basic daily conversations and reading simple passages.',
    'lang.ja.statusLabel': 'Certification Status:',
    'lang.ja.statusVal': 'In active study (No JLPT certificate held)',
    'lang.ja.focusLabel': 'Focus:',
    'lang.ja.focusVal': 'JLPT N4 grammar & Kanji',

    'languages.transparencyPrefix': 'Verification policy:',
    'languages.transparencyText': 'Language certifications conform to international standards (CEFR & EF SET). In-progress language studies are explicitly identified to ensure transparent, authentic qualifications.',
    'languages.transparencyHtml': '<strong>Verification policy:</strong> Language certifications conform to international standards (CEFR &amp; EF SET). In-progress language studies are explicitly identified to ensure transparent, authentic qualifications.',

    // Contact Section
    'contact.headingLine1': "Let's build something",
    'contact.headingAccent': 'amazing',
    'contact.headingLine2': 'together.',
    'contact.headingHtml': "Let's build something <span class=\"accent-text\"><em>amazing</em></span> together.",
    'contact.subtitle': "I'm currently open to new opportunities. Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out!",
    'contact.location': 'Pereira, Colombia · Remote',
    'contact.linkedinAria': 'Lydia Sierra on LinkedIn (opens in new tab)',
    'contact.githubAria': 'Lydia Sierra on GitHub (opens in new tab)',
    'contact.copyBtn': 'Copy',
    'contact.copiedBtn': 'Copied!',
    'contact.copyAria': 'Copy email address to clipboard',
    'contact.availability': 'Available for junior developer roles & remote teams',

    'contact.formTitle': 'Send a direct message',
    'contact.formDesc': 'Fill out the fields below to launch your default email client with your message pre-filled.',
    'contact.nameLabel': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.emailLabel': 'Email',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.msgLabel': 'Message',
    'contact.msgPlaceholder': 'How can I help you? Project inquiries, opportunities, or just saying hello...',
    'contact.msgHint': 'Minimum 10 characters',
    'contact.noticePrefix': 'Clicking',
    'contact.noticeText': 'will launch your email client with your message formatted. No data is sent to a third-party server.',
    'contact.noticeHtml': 'Clicking <strong>Open in Email App</strong> will launch your email client with your message formatted. No data is sent to a third-party server.',
    'contact.submitBtn': 'Open in Email App',

    // Footer
    'footer.brandAria': 'Lydia Sierra — Back to top',
    'footer.tagline': 'Junior Software Developer · Full Stack & Clean Code',
    'footer.navAria': 'Footer navigation',
    'footer.socialsAria': 'Professional and social links',
    'footer.githubAria': 'Lydia Sierra on GitHub (opens in new tab)',
    'footer.linkedinAria': 'Lydia Sierra on LinkedIn (opens in new tab)',
    'footer.emailAria': 'Send email to lydia.sierra.ibata@gmail.com',
    'footer.copy': '© 2024 Lydia Sierra. Crafted with semantic HTML, vanilla CSS & modern JavaScript.',
    'footer.backToTop': 'Back to top',
    'footer.backToTopAria': 'Back to top of page'
  },

  es: {
    // Document metadata
    'meta.title': 'Lydia Sierra — Portafolio Personal de Desarrollo',
    'meta.description': 'Portafolio de desarrollo de Lydia Sierra — Desarrolladora de Software Junior. Conoce mis proyectos, habilidades técnicas, experiencia y datos de contacto.',

    // Accessibility
    'a11y.skipLink': 'Saltar al contenido principal',
    'a11y.langAnnounce': 'Idioma cambiado a español.',

    // Header & Navigation
    'brand.ariaLabel': 'Lydia Sierra — Inicio',
    'nav.ariaLabel': 'Navegación principal',
    'nav.toggleAria': 'Abrir menú de navegación',
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.languages': 'Idiomas',
    'nav.contact': 'Contacto',
    'actions.downloadCv': 'Descargar CV',
    'actions.cvSoon': '(Pronto)',
    'actions.cvTitle': 'Documento de CV pendiente de subida',
    'actions.themeToggleAria': 'Cambiar tema visual',
    'actions.themeToggleTitle': 'Cambiar tema visual',
    'actions.langBtnAria': 'Cambiar idioma. Idioma actual: Español',
    'actions.langMenuAria': 'Selección de idioma',

    // Hero Section
    'hero.greeting': '¡Hola! Soy Lydia',
    'hero.titleLine1': 'Desarrolladora Full Stack',
    'hero.titleLine2': 'apasionada por crear experiencias digitales significativas.',
    'hero.titleHtml': 'Desarrolladora Full Stack apasionada por crear experiencias digitales <span class="accent-text"><em>significativas.</em></span>',
    'hero.subtitle': 'Soy estudiante de Desarrollo de Software en el SENA y actualmente realizo mis prácticas en Globant. Me gusta convertir ideas en aplicaciones limpias, eficientes y centradas en el usuario.',
    'hero.ctaProjects': 'Ver mis proyectos',
    'hero.ctaCv': 'Descargar CV',
    'hero.pillLocation': 'Pereira, Colombia',
    'hero.pillEnglish': 'Inglés C2 (EF SET)',
    'hero.pillStatus': 'Disponible para oportunidades',
    'hero.imageAlt': 'Espacio de trabajo de Lydia Sierra con portátil mostrando código, taza de café y libreta abierta',

    // About Section
    'about.title': 'Sobre mí',
    'about.p1': 'Me apasiona el código limpio, el diseño reflexivo y el aprendizaje continuo. Disfruto trabajar en todo el stack, resolver problemas y crear productos que mejoren la vida de las personas.',
    'about.p2': 'Cuando no estoy programando, me encontrarás aprendiendo japonés, dibujando o tocando la guitarra.',
    'about.signatureAria': 'Firma personal: Lydia Sierra',

    // Skills Section (Tech Stack)
    'skills.title': 'Stack tecnológico',
    'skills.viewAll': 'Ver todos',
    'skills.viewAllAria': 'Ver todos los proyectos que utilizan estas tecnologías',
    'skills.catFrontend': 'Frontend',
    'skills.catBackend': 'Backend',
    'skills.catDatabases': 'Bases de datos',
    'skills.catTools': 'Herramientas',
    'skills.learningTag': '(en aprendizaje)',

    // Projects Header
    'projects.title': 'Proyectos destacados',
    'projects.badge': 'Trabajos seleccionados',

    // Experience & Education Section
    'experience.title': 'Experiencia y educación',
    'experience.badge': 'Trayectoria y formación',
    'experience.workHeading': 'Experiencia laboral',
    'experience.workTypeBadge': 'Profesional',
    'experience.eduHeading': 'Educación y formación',
    'experience.eduTypeBadge': 'Académica',

    // Experience Timeline items
    'exp.globant.date': '2024 — Presente',
    'exp.globant.tag': 'Pasantía',
    'exp.globant.role': 'Practicante de Desarrollo de Software',
    'exp.globant.desc': 'Colaboración en equipos de ingeniería ágiles apoyando aplicaciones web empresariales con tecnologías low-code y web modernas. Contribución al desarrollo de componentes, ciclos de pruebas QA, automatización de flujos y planificación en sprints, siguiendo estándares de código y buenas prácticas del equipo.',
    'exp.globant.tech1': 'Apps Web Empresariales',
    'exp.globant.tech2': 'Plataformas Low-Code',
    'exp.globant.tech3': 'Agile / Scrum',
    'exp.globant.tech4': 'Control de Calidad (QA)',

    'exp.independent.date': '2023 — 2024',
    'exp.independent.tag': 'Independiente',
    'exp.independent.role': 'Desarrollo de Proyectos Full-Stack',
    'exp.independent.company': 'Independiente y Académico',
    'exp.independent.desc': 'Diseño e implementación de aplicaciones full-stack completas —incluyendo sistemas de gestión documental (GeDocs) y herramientas reactivas de estudio en cliente— con enfoque en patrones MVC limpios, esquemas relacionales y experiencias responsivas.',

    'exp.freelance.date': '2022 — 2023',
    'exp.freelance.tag': 'Freelance',
    'exp.freelance.role': 'Desarrolladora Web',
    'exp.freelance.company': 'Freelance',
    'exp.freelance.desc': 'Desarrollo y mantenimiento de sitios web accesibles y responsivos para pequeños negocios locales, abarcando maquetación semántica, optimización de rendimiento y compatibilidad multidispositivo.',
    'exp.freelance.tech3': 'UI Responsiva',
    'exp.freelance.tech4': 'SEO y Rendimiento',

    'edu.sena.date': '2023 — Presente',
    'edu.sena.tag': 'Tecnología',
    'edu.sena.role': 'Análisis y Desarrollo de Software (ADSO)',
    'edu.sena.institution': 'SENA',
    'edu.sena.desc': 'Programa tecnológico integral que cubre gestión del ciclo de vida del software, arquitectura de bases de datos relacionales (MySQL, PostgreSQL), desarrollo backend (PHP/Laravel, Java, APIs RESTful) y metodologías de código limpio.',
    'edu.sena.tech1': 'Arquitectura de Software',
    'edu.sena.tech2': 'Bases de Datos Relacionales',
    'edu.sena.tech3': 'Programación Orientada a Objetos',
    'edu.sena.tech4': 'Ingeniería de Requisitos',

    'edu.continuous.date': '2023 — Presente',
    'edu.continuous.tag': 'Autodidacta',
    'edu.continuous.role': 'Arquitectura Frontend y Frameworks Modernos',
    'edu.continuous.institution': 'Aprendizaje Continuo',
    'edu.continuous.desc': 'Estudio autodidacta enfocado en desarrollo frontend reactivo moderno, dominando Angular Signals, seguridad de tipos en TypeScript, estándares de accesibilidad web (WCAG 2.1 AA) y diseño limpio de interfaces.',
    'edu.continuous.tech1': 'Angular y TypeScript',
    'edu.continuous.tech2': 'Accesibilidad Web (a11y)',
    'edu.continuous.tech3': 'CSS Moderno y Sistemas de Diseño',

    // Milestones / By the numbers
    'milestones.heading': 'En cifras',
    'milestones.projects': 'Proyectos completados',
    'milestones.contributions': 'Contribuciones en GitHub',
    'milestones.coffeeVal': 'Apasionada',
    'milestones.coffeeLabel': 'por el código limpio y el café',
    'milestones.learningVal': 'Siempre',
    'milestones.learningLabel': 'aprendiendo algo nuevo',

    // Languages & Credentials Section
    'languages.title': 'Idiomas y certificaciones',
    'languages.subtitle': 'Competencias verificadas, evaluaciones formales y estudio activo para equipos internacionales de ingeniería.',
    'languages.badge': 'Comunicación',

    'lang.en.name': 'Inglés',
    'lang.en.status': 'Certificación formal',
    'lang.en.tier': 'C2 Competente',
    'lang.en.standard': 'Nivel MCER · Certificado EF SET',
    'lang.en.detail': 'Fluidez bilingüe para equipos globales distribuidos. Plena competencia en documentación técnica, revisiones de arquitectura y colaboración diaria en diferentes husos horarios.',
    'lang.en.assessmentLabel': 'Evaluación:',
    'lang.en.assessmentVal': 'EF Standard English Test (EF SET)',
    'lang.en.scoreLabel': 'Puntaje verificado:',
    'lang.en.scoreVal': 'C2 Competente (Puntaje 71+/100)',

    'lang.es.name': 'Español',
    'lang.es.status': 'Lengua materna',
    'lang.es.tier': 'Fluidez nativa',
    'lang.es.standard': 'Idioma materno',
    'lang.es.detail': 'Competencia nativa en contextos profesionales, técnicos y cotidianos. Comunicación estructurada y precisa tanto de forma oral como escrita.',
    'lang.es.originLabel': 'Origen:',
    'lang.es.originVal': 'Pereira, Colombia',
    'lang.es.contextLabel': 'Contexto:',
    'lang.es.contextVal': 'Académico y técnico nativo',

    'lang.ja.name': 'Japonés',
    'lang.ja.status': 'Autodidacta · En estudio',
    'lang.ja.tier': 'Nivel objetivo N4',
    'lang.ja.standard': 'Elemental · Estudio autodidacta',
    'lang.ja.detail': 'Estudio diario y constante enfocado en gramática del JLPT N4, vocabulario y aproximadamente 300 kanji. Capaz de sostener conversaciones básicas y comprender lecturas sencillas.',
    'lang.ja.statusLabel': 'Estado de certificación:',
    'lang.ja.statusVal': 'En estudio activo (sin certificado JLPT)',
    'lang.ja.focusLabel': 'Enfoque:',
    'lang.ja.focusVal': 'Gramática JLPT N4 y kanji',

    'languages.transparencyPrefix': 'Política de verificación:',
    'languages.transparencyText': 'Las certificaciones de idiomas se basan en estándares internacionales reconocidos (MCER y EF SET). Los estudios en progreso se indican explícitamente para garantizar credenciales honestas y transparentes.',
    'languages.transparencyHtml': '<strong>Política de verificación:</strong> Las certificaciones de idiomas se basan en estándares internacionales reconocidos (MCER y EF SET). Los estudios en progreso se indican explícitamente para garantizar credenciales honestas y transparentes.',

    // Contact Section
    'contact.headingLine1': 'Construyamos algo',
    'contact.headingAccent': 'increíble',
    'contact.headingLine2': 'juntos.',
    'contact.headingHtml': 'Construyamos algo <span class="accent-text"><em>increíble</em></span> juntos.',
    'contact.subtitle': 'Actualmente estoy disponible para nuevas oportunidades. Si tienes una consulta, quieres conversar sobre un proyecto o simplemente saludar, ¡no dudes en escribirme!',
    'contact.location': 'Pereira, Colombia · Remoto',
    'contact.linkedinAria': 'Lydia Sierra en LinkedIn (abre en pestaña nueva)',
    'contact.githubAria': 'Lydia Sierra en GitHub (abre en pestaña nueva)',
    'contact.copyBtn': 'Copiar',
    'contact.copiedBtn': '¡Copiado!',
    'contact.copyAria': 'Copiar correo electrónico al portapapeles',
    'contact.availability': 'Disponible para roles de desarrollo junior y equipos remotos',

    'contact.formTitle': 'Envía un mensaje directo',
    'contact.formDesc': 'Completa los campos a continuación para abrir tu cliente de correo con el mensaje listo.',
    'contact.nameLabel': 'Nombre',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.emailLabel': 'Correo electrónico',
    'contact.emailPlaceholder': 'tu.correo@ejemplo.com',
    'contact.msgLabel': 'Mensaje',
    'contact.msgPlaceholder': '¿En qué puedo ayudarte? Consultas de proyectos, oportunidades o simplemente un saludo...',
    'contact.msgHint': 'Mínimo 10 caracteres',
    'contact.noticePrefix': 'Al hacer clic en',
    'contact.noticeText': 'abrirá tu aplicación de correo con el mensaje formateado. No se envían datos a servidores externos.',
    'contact.noticeHtml': 'Al hacer clic en <strong>Abrir en app de correo</strong>, se abrirá tu aplicación de correo con el mensaje formateado. No se envían datos a servidores externos.',
    'contact.submitBtn': 'Abrir en app de correo',

    // Footer
    'footer.brandAria': 'Lydia Sierra — Volver al inicio',
    'footer.tagline': 'Desarrolladora de Software Junior · Full Stack y Código Limpio',
    'footer.navAria': 'Navegación de pie de página',
    'footer.socialsAria': 'Enlaces profesionales y redes',
    'footer.githubAria': 'Lydia Sierra en GitHub (abre en pestaña nueva)',
    'footer.linkedinAria': 'Lydia Sierra en LinkedIn (abre en pestaña nueva)',
    'footer.emailAria': 'Enviar correo a lydia.sierra.ibata@gmail.com',
    'footer.copy': '© 2024 Lydia Sierra. Creado con HTML semántico, CSS puro y JavaScript moderno.',
    'footer.backToTop': 'Volver arriba',
    'footer.backToTopAria': 'Volver al inicio de la página'
  }
};

/**
 * State variable holding the currently active language.
 */
let currentLanguage = DEFAULT_LANGUAGE;

/**
 * Detects the initial language based on:
 * 1. Saved localStorage preference.
 * 2. Browser navigator.languages / navigator.language (checking if Spanish or English is first).
 * 3. Default fallback to English ('en').
 * @returns {string} - 'en' or 'es'
 */
export function detectLanguage() {
  // 1. Check valid saved preference
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGUAGES.includes(saved.toLowerCase())) {
      return saved.toLowerCase();
    }
  } catch (err) {
    console.warn('localStorage not accessible for reading language preference:', err);
  }

  // 2. Check browser's preferred languages
  try {
    const browserLangs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || ''];

    for (const tag of browserLangs) {
      if (!tag) continue;
      const normalized = tag.toLowerCase().split('-')[0];
      if (SUPPORTED_LANGUAGES.includes(normalized)) {
        return normalized;
      }
    }
  } catch (err) {
    console.warn('Error reading browser languages:', err);
  }

  // 3. Fallback
  return DEFAULT_LANGUAGE;
}

/**
 * Returns the currently active language code ('en' or 'es').
 */
export function getCurrentLanguage() {
  return currentLanguage;
}

/**
 * Applies the requested language across the DOM:
 * - Updates <html lang="...">
 * - Updates title and meta description
 * - Updates all text nodes marked with [data-i18n] safely with textContent
 * - Updates attributes (placeholder, aria-label, title, alt) via dedicated data attributes
 * - Updates dynamic components (projects, contact validation)
 * - Updates navbar selector UI and announces change to screen readers
 * - Persists choice to localStorage
 * @param {string} lang - 'en' or 'es'
 * @param {boolean} [persist=true] - Whether to write to localStorage
 */
export function setLanguage(lang, persist = true) {
  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    console.warn(`Unsupported language "${lang}", falling back to ${DEFAULT_LANGUAGE}`);
    lang = DEFAULT_LANGUAGE;
  }

  currentLanguage = lang;
  const dict = translations[lang] || translations[DEFAULT_LANGUAGE];

  // 1. Persist preference if requested
  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {
      console.warn('Unable to persist language preference in localStorage:', err);
    }
  }

  // 2. Update HTML language attribute & document metadata
  document.documentElement.lang = lang;

  if (dict['meta.title']) {
    document.title = dict['meta.title'];
  }

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict['meta.description']) {
    metaDesc.setAttribute('content', dict['meta.description']);
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && dict['meta.title']) {
    ogTitle.setAttribute('content', dict['meta.title']);
  }

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && dict['meta.description']) {
    ogDesc.setAttribute('content', dict['meta.description']);
  }

  // 3. Update textContent of all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (key && dict[key] !== undefined) {
      element.textContent = dict[key];
    }
  });

  // 3b. Update trusted static innerHTML of [data-i18n-html] elements
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.getAttribute('data-i18n-html');
    if (key && dict[key] !== undefined) {
      element.innerHTML = dict[key];
    }
  });

  // 4. Update specific element attributes via dedicated data-i18n-* hooks
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label');
    if (key && dict[key] !== undefined) {
      el.setAttribute('aria-label', dict[key]);
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (key && dict[key] !== undefined) {
      el.setAttribute('title', dict[key]);
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (key && dict[key] !== undefined) {
      el.setAttribute('alt', dict[key]);
    }
  });

  // 5. Update dynamic project presentations
  renderProjects('.projects-grid', lang);

  // 6. Update contact validation & banner messages
  setContactLanguage(lang);

  // 7. Update navbar language selector UI
  updateLanguageSelectorUI(lang);

  // 8. Polite screen reader announcement
  const announcer = document.getElementById('i18n-announcer');
  if (announcer && dict['a11y.langAnnounce']) {
    announcer.textContent = dict['a11y.langAnnounce'];
  }
}

/**
 * Updates the visual state of the navbar language selector.
 * @param {string} lang - 'en' or 'es'
 */
function updateLanguageSelectorUI(lang) {
  const codeDisplay = document.getElementById('lang-current-code');
  if (codeDisplay) {
    codeDisplay.textContent = lang.toUpperCase();
  }

  const selectorBtn = document.getElementById('lang-selector-btn');
  if (selectorBtn) {
    const btnLabel =
      lang === 'es'
        ? 'Cambiar idioma. Idioma actual: Español'
        : 'Change language. Current language: English';
    selectorBtn.setAttribute('aria-label', btnLabel);
  }

  // Update option highlights and aria-selected in menu
  const options = document.querySelectorAll('.lang-option');
  options.forEach((option) => {
    const optionLang = option.getAttribute('data-lang');
    const isSelected = optionLang === lang;
    option.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    if (isSelected) {
      option.classList.add('selected');
    } else {
      option.classList.remove('selected');
    }
  });
}

/**
 * Initializes the navbar language dropdown control and keyboard interactions.
 */
export function initLanguageSelector() {
  const wrapper = document.getElementById('lang-selector-wrapper');
  const btn = document.getElementById('lang-selector-btn');
  const menu = document.getElementById('lang-menu');
  if (!wrapper || !btn || !menu) return;

  const options = Array.from(menu.querySelectorAll('.lang-option'));

  function openMenu() {
    menu.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    // Focus the currently selected option
    const selected = options.find((opt) => opt.classList.contains('selected')) || options[0];
    if (selected) {
      selected.focus();
    }
  }

  function closeMenu(focusBtn = true) {
    menu.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    if (focusBtn) {
      btn.focus();
    }
  }

  // Toggle button click
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Option selection via click
  options.forEach((option) => {
    option.addEventListener('click', () => {
      const selectedLang = option.getAttribute('data-lang');
      if (selectedLang) {
        setLanguage(selectedLang, true);
      }
      closeMenu();
    });
  });

  // Keyboard navigation inside dropdown menu
  menu.addEventListener('keydown', (e) => {
    const currentIndex = options.indexOf(document.activeElement);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % options.length;
      options[nextIndex].focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + options.length) % options.length;
      options[prevIndex].focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (document.activeElement && document.activeElement.classList.contains('lang-option')) {
        const selectedLang = document.activeElement.getAttribute('data-lang');
        if (selectedLang) {
          setLanguage(selectedLang, true);
        }
        closeMenu();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeMenu();
    } else if (e.key === 'Tab') {
      closeMenu(false);
    }
  });

  // Keyboard navigation on button
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openMenu();
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target) && !menu.hidden) {
      closeMenu(false);
    }
  });
}
