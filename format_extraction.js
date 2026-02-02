const fs = require('fs');
const content = fs.readFileSync('extracted_content_utf8.txt', 'utf8');
const lines = content.replace(/<p>/g, '\n<p>').replace(/<\/p>/g, '</p>\n');
fs.writeFileSync('formatted_content.txt', lines);
