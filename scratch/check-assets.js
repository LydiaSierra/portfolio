const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const regex = /(?:src|href)="([^"]+)"/g;
let match;
const missing = [];
const found = [];

while ((match = regex.exec(html)) !== null) {
  const url = match[1];
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('#') || url.startsWith('mailto:')) continue;
  const filePath = url.split('#')[0].split('?')[0];
  if (!filePath) continue;
  if (!fs.existsSync(filePath)) {
    missing.push(url);
  } else {
    found.push(filePath);
  }
}

console.log('Checked', found.length, 'local file references.');
if (missing.length > 0) {
  console.error('Missing assets:', missing);
  process.exit(1);
} else {
  console.log('All referenced local assets exist!');
}
