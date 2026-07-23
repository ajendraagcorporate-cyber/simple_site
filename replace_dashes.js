const fs = require('fs');
const path = require('path');

const files = [
    'contact-us.html',
    'index.html',
    'reviews.html',
    'videos.html',
    'js/main.js',
    'js/main.min.js'
];

files.forEach(f => {
    let filePath = path.join(__dirname, f);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace html entities
    content = content.replace(/&mdash;/g, '-');
    content = content.replace(/&ndash;/g, '-');
    
    // Replace unicode escapes in js
    content = content.replace(/\\u2014/g, '-');
    content = content.replace(/\\u2013/g, '-');
    
    // Replace literal characters just in case
    content = content.replace(/—/g, '-');
    content = content.replace(/–/g, '-');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Replaced dashes in ${f}`);
});
