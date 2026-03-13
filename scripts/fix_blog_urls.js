const fs = require('fs');
const path = require('path');

function scanDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            if (!filePath.includes('node_modules') && !filePath.includes('.next') && !filePath.includes('.git')) {
                results = results.concat(scanDir(filePath));
            }
        } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
            results.push(filePath);
        }
    });
    return results;
}

const files = [...scanDir('./app'), ...scanDir('./components'), ...scanDir('./lib')];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Replace URL paths like /blogs/some-slug to /blog/some-slug
    // This regex looks for /blogs/ followed by word characters/hyphens
    // But skips if it's just /blogs/ or /blogs/?
    content = content.replace(/\/blogs\/([a-zA-Z0-9\-_]+)/g, '/blog/$1');
    
    // Replace dynamic paths like `/blogs/${post.id}`
    content = content.replace(/\/blogs\/\$\{/g, '/blog/${');
    
    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated ' + file);
    }
});

console.log('Done scanning files.');
