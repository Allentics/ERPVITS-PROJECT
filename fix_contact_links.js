const fs = require('fs');
const path = require('path');

const replaceInDir = (dir) => {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = content
                .replace(/(buttonLink|href)=["'](\/contact-us|\/contact|\/contact\/)["']/g, '$1="https://www.erpvits.com/contact/"')
                .replace(/(buttonLink|href)=['"]https?:\/\/(?:www\.)?erpvits\.com\/contact-us['"]/g, '$1="https://www.erpvits.com/contact/"');
            
            if (content !== modified) {
                fs.writeFileSync(fullPath, modified);
                console.log('Updated ' + fullPath);
            }
        }
    });
};

replaceInDir('./components/blogs');
replaceInDir('./scripts');
