const fs = require('fs');

// 1. Update css/variables.css
let varCss = fs.readFileSync('css/variables.css', 'utf8');
varCss = varCss.replace(
  /--container-max-width:\s*1140px;[\r\n\s]*--container-padding:\s*clamp\(1rem,\s*0\.75rem\s*\+\s*1vw,\s*1\.75rem\);/,
  `--container-max-width: 1320px;
  --container-wide-max-width: 1560px;
  --container-padding: clamp(1rem, 0.5rem + 1.25vw, 2rem);`
);
fs.writeFileSync('css/variables.css', varCss, 'utf8');
console.log('Updated css/variables.css');

// 2. Update css/style.css
let styleCss = fs.readFileSync('css/style.css', 'utf8');
if (!styleCss.includes('.container-wide')) {
  styleCss = styleCss.replace(
    /\.container\s*\{[\s\S]*?padding-inline:\s*var\(--container-padding\);\s*\}/,
    `.container {
  width: 100%;
  max-width: var(--container-max-width);
  margin-inline: auto;
  padding-inline: var(--container-padding);
}

.container-wide {
  width: 100%;
  max-width: var(--container-wide-max-width);
  margin-inline: auto;
  padding-inline: var(--container-padding);
}`
  );
  fs.writeFileSync('css/style.css', styleCss, 'utf8');
  console.log('Updated css/style.css');
}

// 3. Update css/header.css
let headerCss = fs.readFileSync('css/header.css', 'utf8');
if (!headerCss.includes('--container-wide-max-width')) {
  headerCss = headerCss.replace(
    /\.header-container\s*\{/,
    `.header-container {
  max-width: var(--container-wide-max-width, 1560px);`
  );
  fs.writeFileSync('css/header.css', headerCss, 'utf8');
  console.log('Updated css/header.css');
}

// 4. Update css/footer.css
let footerCss = fs.readFileSync('css/footer.css', 'utf8');
if (!footerCss.includes('--container-wide-max-width')) {
  footerCss = footerCss.replace(
    /\.footer-container\s*\{/,
    `.footer-container {
  max-width: var(--container-wide-max-width, 1560px);`
  );
  fs.writeFileSync('css/footer.css', footerCss, 'utf8');
  console.log('Updated css/footer.css');
}
