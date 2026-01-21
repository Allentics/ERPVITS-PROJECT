const fs = require('fs');
const path = require('path');

const libDir = path.join(__dirname, '../lib');
// Only look for .tsx files now, as we converted .ts to .tsx
const files = fs.readdirSync(libDir).filter(f => f.endsWith('Content.tsx'));

const replacements = [
    { regex: /from-orange-500/g, replacement: 'from-[#ff4500]' },
    { regex: /text-orange-600/g, replacement: 'text-[#ff4500]' },
    { regex: /text-orange-500/g, replacement: 'text-[#ff4500]' },
    { regex: /bg-orange-500/g, replacement: 'bg-[#ff4500]' },
    { regex: /bg-orange-100/g, replacement: 'bg-[#ff4500]/10' },
    { regex: /bg-orange-50/g, replacement: 'bg-[#ff4500]/10' },
    { regex: /shadow-orange-500\/25/g, replacement: 'shadow-[#ff4500]/25' },
    { regex: /decoration-orange-300/g, replacement: 'decoration-[#ff4500]/30' },
    { regex: /hover:text-orange-700/g, replacement: 'hover:text-[#cc3700]' }, // Darker shade for hover
    { regex: /hover:bg-orange-600/g, replacement: 'hover:bg-[#cc3700]' }, // Darker shade for hover
    { regex: /border-orange-200/g, replacement: 'border-[#ff4500]/20' },
    { regex: /hover:from-orange-600/g, replacement: 'hover:from-[#cc3700]' },
];

files.forEach(file => {
    const filePath = path.join(libDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let originalContent = content;

    replacements.forEach(({ regex, replacement }) => {
        content = content.replace(regex, replacement);
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${file}`);
    } else {
        console.log(`No changes for ${file}`);
    }
});
