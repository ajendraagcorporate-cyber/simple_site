const fs = require('fs');
const path = require('path');

const files = ['index.html', 'videos.html', 'reviews.html', 'contact-us.html', 'js/main.js', 'js/main.min.js'];

files.forEach(f => {
  let p = path.join(__dirname, f);
  let content = fs.readFileSync(p, 'utf8');

  // Replace links
  content = content.replace(/href="index\.html"/g, 'href="/"');
  content = content.replace(/href="videos\.html"/g, 'href="/videos"');
  content = content.replace(/href="reviews\.html"/g, 'href="/reviews"');
  content = content.replace(/href="contact-us\.html"/g, 'href="/contact-us"');
  
  // Replace canonical/og urls
  content = content.replace(/\.com\/videos\.html/g, '.com/videos');
  content = content.replace(/\.com\/reviews\.html/g, '.com/reviews');
  content = content.replace(/\.com\/contact-us\.html/g, '.com/contact-us');

  // Fix JS path logic
  if (f.endsWith('.js')) {
    content = content.replace(/var currentPath = window\.location\.pathname\.split\('\/'\)\.pop\(\) \|\| 'index\.html';/,
      "var currentPath = window.location.pathname;");
  }

  fs.writeFileSync(p, content, 'utf8');
});
console.log('Fixed HTML links');
