/**
 * Verification script for Hero Portrait Concept 02 Implementation
 */
import fs from 'fs';
import path from 'path';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passed++;
  } else {
    console.error(`[FAIL] ${message}`);
    failed++;
  }
}

console.log('=== Verifying Hero Implementation ===\n');

// 1. Check index.html for removal of subtitle
const html = fs.readFileSync('index.html', 'utf8');
assert(!html.includes('hero.subtitle'), 'data-i18n="hero.subtitle" is completely removed from index.html');
assert(!html.includes('hero-subtitle'), 'class="hero-subtitle" is completely removed from index.html');

// 2. Check presence of compact portrait inside hero-title-row
assert(html.includes('hero-title-row'), '.hero-title-row container exists');
assert(html.includes('hero-portrait-compact'), '.hero-portrait-compact container exists inside hero title row');
assert(html.includes('assets/images/hero-portrait-light.png'), 'hero-portrait-light.png referenced');
assert(html.includes('assets/images/hero-portrait-dark.png'), 'hero-portrait-dark.png referenced');

// 3. Check Botanical Arch markup in wide visual wrapper
assert(html.includes('hero-arch-wrapper'), '.hero-arch-wrapper exists');
assert(html.includes('hero-arch-aura'), '.hero-arch-aura exists');
assert(html.includes('hero-foliage-back'), '.hero-foliage-back exists');
assert(html.includes('hero-arch-frame'), '.hero-arch-frame exists');
assert(html.includes('hero-foliage-front'), '.hero-foliage-front exists');

// 4. Verify assets on disk
const lightPath = path.resolve('assets/images/hero-portrait-light.png');
const darkPath = path.resolve('assets/images/hero-portrait-dark.png');
assert(fs.existsSync(lightPath), 'hero-portrait-light.png exists on disk');
assert(fs.existsSync(darkPath), 'hero-portrait-dark.png exists on disk');

if (fs.existsSync(lightPath) && fs.existsSync(darkPath)) {
  const lightSize = fs.statSync(lightPath).size;
  const darkSize = fs.statSync(darkPath).size;
  assert(lightSize > 100000, `Light asset is valid size (${lightSize} bytes)`);
  assert(darkSize > 100000, `Dark asset is valid size (${darkSize} bytes)`);
}

// 5. Inspect css/hero.css rules
const css = fs.readFileSync('css/hero.css', 'utf8');
assert(!css.includes('.hero-subtitle'), 'No .hero-subtitle rule remains in css/hero.css');

// Check that wide visual wrapper is hidden at <= 820px
assert(/@media\s*\(\s*max-width\s*:\s*820px\s*\)[\s\S]*?\.hero-visual-wrapper\s*\{[\s\S]*?display:\s*none/i.test(css),
  'Wide botanical arch (.hero-visual-wrapper) is hidden (display: none) at <= 820px');

// Check that compact circular portrait is shown at <= 820px
assert(/@media\s*\(\s*max-width\s*:\s*820px\s*\)[\s\S]*?\.hero-portrait-compact\s*\{[\s\S]*?display:\s*block/i.test(css),
  'Compact portrait (.hero-portrait-compact) is displayed at <= 820px');

// Check that compact portrait is hidden on wide viewports by default
assert(/\.hero-portrait-compact\s*\{[\s\S]*?display:\s*none/i.test(css),
  'Compact portrait is hidden by default on wide viewports');

// Check that arch has signature 180px border-radius
assert(css.includes('180px 180px'), 'Architectural arch features signature 180px top border-radius');

// Check z-indexing layering: back foliage (1), arch (2), front foliage (3)
assert(css.includes('.hero-foliage-back') && css.includes('z-index: 1'), 'Back foliage has z-index: 1');
assert(css.includes('.hero-arch-frame') && css.includes('z-index: 2'), 'Arch frame has z-index: 2');
assert(css.includes('.hero-foliage-front') && css.includes('z-index: 3'), 'Front overlapping foliage has z-index: 3');

// Check dark mode image switching
assert(css.includes('[data-theme="dark"] .portrait-light') && css.includes('display: none'),
  'Dark theme hides light portrait');
assert(css.includes('[data-theme="dark"] .portrait-dark') && css.includes('display: block'),
  'Dark theme reveals dark portrait');
assert(css.includes('prefers-color-scheme: dark'),
  'prefers-color-scheme: dark fallback is supported');

// 6. Check that About and Skills are still side-by-side
const aboutSkillsCss = fs.readFileSync('css/about-skills.css', 'utf8');
assert(aboutSkillsCss.includes('grid-template-columns: 3.5fr 6.5fr'),
  'About and Skills remain side-by-side (grid-template-columns: 3.5fr 6.5fr)');

console.log(`\n=== Verification Summary ===`);
console.log(`Total Passed: ${passed}`);
console.log(`Total Failed: ${failed}`);

if (failed > 0) {
  process.exit(1);
}
