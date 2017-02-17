const fs = require('fs');
const marked = require('marked');
const contentFile = fs.readFileSync('./content/first.md', "utf8");

// fs.mkdirSync('./public');
fs.writeFileSync('./public/first.html',  marked(contentFile));