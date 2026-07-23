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

const htmlMap = {
    '—': '&mdash;',
    '–': '&ndash;',
    '·': '&middot;',
    '▲': '&#9650;',
    '★': '&#9733;',
    '☆': '&#9734;',
    '✓': '&#10003;',
    '→': '&rarr;',
    '📞': '&#128222;'
};

const jsMap = {
    '—': '\\u2014',
    '–': '\\u2013',
    '·': '\\u00B7',
    '▲': '\\u25B2',
    '★': '\\u2605',
    '☆': '\\u2606',
    '✓': '\\u2713',
    '→': '\\u2192',
    '📞': '\\uD83D\\uDCDE'
};

files.forEach(f => {
    let content = fs.readFileSync(path.join(__dirname, f), 'utf8');
    let map = f.endsWith('.js') ? jsMap : htmlMap;
    
    // Replace characters using the map
    for (let char in map) {
        content = content.split(char).join(map[char]);
    }
    
    // Catch any remaining non-ascii characters and convert to html entities (for html files) or unicode escapes (for js files)
    if (f.endsWith('.html')) {
        content = content.replace(/[^\x00-\x7F]/g, char => `&#${char.charCodeAt(0)};`);
    } else {
        content = content.replace(/[^\x00-\x7F]/g, char => {
            let hex = char.charCodeAt(0).toString(16).toUpperCase();
            return '\\u' + ('0000' + hex).slice(-4);
        });
    }

    fs.writeFileSync(path.join(__dirname, f), content, 'utf8');
    console.log(`Fixed ${f}`);
});
