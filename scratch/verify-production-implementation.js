const fs = require('fs');

console.log('--- Verifying Production Implementation ---');

// 1. Verify JS files syntax
const jsFiles = ['js/main.js', 'js/projects.js', 'js/i18n.js', 'js/theme.js', 'js/navigation.js', 'js/contact.js'];
jsFiles.forEach(f => {
  try {
    let content = fs.readFileSync(f, 'utf8');
    // Remove import/export statements to validate syntax as non-module Function body
    content = content.replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?/g, '');
    content = content.replace(/export\s+default\s+/g, 'var _default = ');
    content = content.replace(/export\s+(const|let|var|function|class)\s+/g, '$1 ');
    content = content.replace(/export\s*\{[\s\S]*?\};?/g, '');
    new Function(content);
    console.log(`[PASS] ${f} syntax valid`);
  } catch (err) {
    console.error(`[FAIL] ${f} syntax error:`, err);
  }
});

// 2. Verify index.html element IDs required by js/projects.js
const indexHtml = fs.readFileSync('index.html', 'utf8');
const requiredIds = [
  'projects',
  'showcase-stage',
  'showcase-bg',
  'showcase-prev-btn',
  'showcase-next-btn',
  'showcase-mobile-prev-btn',
  'showcase-mobile-next-btn',
  'showcase-badge',
  'showcase-counter',
  'showcase-title',
  'showcase-desc',
  'showcase-tags',
  'btn-explore-case-study',
  'showcase-repo-link',
  'showcase-demo-link',
  'project-detail-modal',
  'modal-project-dialog',
  'modal-close-btn',
  'modal-project-body'
];

requiredIds.forEach(id => {
  if (indexHtml.includes(`id="${id}"`)) {
    console.log(`[PASS] ID #${id} present in index.html`);
  } else {
    console.error(`[FAIL] Missing ID #${id} in index.html`);
  }
});

// 3. Verify i18n keys
const i18nContent = fs.readFileSync('js/i18n.js', 'utf8');
const verifiedKeys = [
  'projects.title',
  'projects.badge',
  'projects.exploreCaseStudy',
  'projects.githubRepo',
  'projects.liveDemo',
  'projects.prevProject',
  'projects.nextProject',
  'projects.closeModal',
  'projects.purposeHeading',
  'projects.problemHeading',
  'projects.contribHeading',
  'projects.highlightsHeading',
  'projects.techStackHeading',
  'projects.galleryPrev',
  'projects.galleryNext',
  'actions.downloadCv',
  'actions.cvTitle',
  'actions.cvAriaLabel',
  'hero.ctaCv'
];

verifiedKeys.forEach(k => {
  const enCount = (i18nContent.match(new RegExp(`'${k}':`, 'g')) || []).length;
  if (enCount >= 2) {
    console.log(`[PASS] i18n key '${k}' present in both EN and ES (${enCount})`);
  } else {
    console.error(`[FAIL] i18n key '${k}' found ${enCount} times (expected >= 2)`);
  }
});

// 4. Verify CSS files existence and balanced braces
const cssFiles = ['css/variables.css', 'css/style.css', 'css/projects.css', 'css/header.css', 'css/footer.css'];
cssFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const openBraces = (content.match(/\{/g) || []).length;
  const closeBraces = (content.match(/\}/g) || []).length;
  if (openBraces === closeBraces) {
    console.log(`[PASS] ${f} balanced braces (${openBraces} rules)`);
  } else {
    console.error(`[FAIL] ${f} unbalanced braces: ${openBraces} open, ${closeBraces} close`);
  }
});

// 5. Verify CV download implementation
const cvLinks = (indexHtml.match(/class="[^"]*cv-download-link[^"]*"/g) || []);
if (cvLinks.length === 3) {
  console.log(`[PASS] 3 CV download links present in index.html (drawer, header, hero)`);
} else {
  console.error(`[FAIL] Expected 3 CV download links in index.html, found ${cvLinks.length}`);
}

const disabledCvLinks = (indexHtml.match(/cv-download-link[^>]*aria-disabled="true"/g) || []);
if (disabledCvLinks.length === 0) {
  console.log(`[PASS] No CV download links are disabled`);
} else {
  console.error(`[FAIL] ${disabledCvLinks.length} CV download links still have aria-disabled="true"`);
}

const cvFiles = [
  'assets/documents/Lydia_Sierra_CV_EN.pdf',
  'assets/documents/Lydia_Sierra_CV_ES.pdf',
  'assets/documents/Lydia_Sierra_CV.pdf'
];
cvFiles.forEach(f => {
  if (fs.existsSync(f)) {
    const sz = fs.statSync(f).size;
    console.log(`[PASS] CV file ${f} exists (${sz} bytes)`);
  } else {
    console.error(`[FAIL] CV file ${f} missing!`);
  }
});

if (i18nContent.includes('export function updateCvDownloadLinks')) {
  console.log(`[PASS] updateCvDownloadLinks exported in js/i18n.js`);
} else {
  console.error(`[FAIL] updateCvDownloadLinks not exported in js/i18n.js`);
}

console.log('--- Verification Complete ---');
