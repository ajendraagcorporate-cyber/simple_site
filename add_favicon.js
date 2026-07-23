const fs = require('fs');
const path = require('path');

const files = ['index.html', 'videos.html', 'reviews.html', 'contact-us.html'];

files.forEach(f => {
  let p = path.join(__dirname, f);
  let content = fs.readFileSync(p, 'utf8');

  if (!content.includes('rel="icon"')) {
    content = content.replace('</head>', '<link rel="icon" type="image/jpeg" href="/img/mukul-sir-2026.jpg">\n</head>');
    fs.writeFileSync(p, content, 'utf8');
  }
});
console.log('Favicon added');
