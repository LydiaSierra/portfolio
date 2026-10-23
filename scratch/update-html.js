const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const target = '<div class="hero-portrait-compact" aria-hidden="true">';
const replacement = '<div class="hero-portrait-compact">';
if (!html.includes(target)) {
  console.log('Target already replaced or not found');
} else {
  html = html.replace(target, replacement);
}

const targetLight = `<img
                src="assets/images/hero-portrait-light.png"
                class="portrait-compact-img portrait-light"
                alt=""`;
const replLight = `<img
                src="assets/images/hero-portrait-light.png"
                class="portrait-compact-img portrait-light"
                data-i18n-alt="hero.imageAlt"
                alt="Portrait of Lydia Sierra wearing a white shirt and black tie against an emerald green fluid art background"`;

const targetDark = `<img
                src="assets/images/hero-portrait-dark.png"
                class="portrait-compact-img portrait-dark"
                alt=""`;
const replDark = `<img
                src="assets/images/hero-portrait-dark.png"
                class="portrait-compact-img portrait-dark"
                data-i18n-alt="hero.imageAlt"
                alt="Portrait of Lydia Sierra wearing a white shirt and black tie against an emerald green fluid art background"`;

// normalize line breaks for replacement
const normalize = s => s.replace(/\r\n/g, '\n');
const isCRLF = html.includes('\r\n');

let normHtml = normalize(html);
normHtml = normHtml.replace(normalize(targetLight), normalize(replLight));
normHtml = normHtml.replace(normalize(targetDark), normalize(replDark));

if (isCRLF) {
  normHtml = normHtml.replace(/\n/g, '\r\n');
}

fs.writeFileSync('index.html', normHtml, 'utf8');
console.log('index.html updated successfully');
