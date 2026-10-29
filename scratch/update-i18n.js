const fs = require('fs');

let content = fs.readFileSync('js/i18n.js', 'utf8');

const enRegex = /(\s*\/\/ Projects Header\r?\n\s*'projects\.title': 'Featured projects',\r?\n\s*'projects\.badge': 'Selected Works',)/;

const enAdditions = `$1
    'projects.exploreCaseStudy': 'Explore Case Study',
    'projects.githubRepo': 'GitHub Repository',
    'projects.liveDemo': 'Live Demo',
    'projects.prevProject': 'Previous project',
    'projects.nextProject': 'Next project',
    'projects.closeModal': 'Close project details',
    'projects.purposeHeading': '01. Project Purpose & Overview',
    'projects.problemHeading': '02. The Problem Addressed',
    'projects.contribHeading': '03. My Architectural Contribution',
    'projects.highlightsHeading': '04. Key Technical Decisions & Highlights',
    'projects.techStackHeading': 'Technology Stack',
    'projects.galleryPrev': 'Previous screenshot',
    'projects.galleryNext': 'Next screenshot',
    'projects.viewGalleryImg': 'View screenshot',`;

const esRegex = /(\s*\/\/ Projects Header\r?\n\s*'projects\.title': 'Proyectos destacados',\r?\n\s*'projects\.badge': 'Trabajos seleccionados',)/;

const esAdditions = `$1
    'projects.exploreCaseStudy': 'Explorar caso de estudio',
    'projects.githubRepo': 'Repositorio en GitHub',
    'projects.liveDemo': 'Ver demo en vivo',
    'projects.prevProject': 'Proyecto anterior',
    'projects.nextProject': 'Proyecto siguiente',
    'projects.closeModal': 'Cerrar detalles del proyecto',
    'projects.purposeHeading': '01. Propósito y visión general',
    'projects.problemHeading': '02. El problema abordado',
    'projects.contribHeading': '03. Mi contribución arquitectónica',
    'projects.highlightsHeading': '04. Decisiones técnicas clave y aspectos destacados',
    'projects.techStackHeading': 'Stack tecnológico',
    'projects.galleryPrev': 'Captura anterior',
    'projects.galleryNext': 'Siguiente captura',
    'projects.viewGalleryImg': 'Ver captura',`;

content = content.replace(enRegex, enAdditions);
content = content.replace(esRegex, esAdditions);

fs.writeFileSync('js/i18n.js', content, 'utf8');
console.log('Successfully updated js/i18n.js with regex');
