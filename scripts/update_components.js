const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../components/course');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const replacements = [
    { regex: /from-orange-500/g, replacement: 'from-[#ff4500]' },
    { regex: /text-orange-700/g, replacement: 'text-[#cc3700]' }, // Darker orange
    { regex: /text-orange-600/g, replacement: 'text-[#ff4500]' },
    { regex: /text-orange-500/g, replacement: 'text-[#ff4500]' },
    { regex: /text-orange-200/g, replacement: 'text-[#ff4500]/30' },
    { regex: /text-orange-100/g, replacement: 'text-[#ff4500]/20' },
    { regex: /bg-orange-700/g, replacement: 'bg-[#cc3700]' },
    { regex: /bg-orange-600/g, replacement: 'bg-[#ff4500]' }, // Adjusted to main color as 600 is usually the main interactive color
    { regex: /bg-orange-500/g, replacement: 'bg-[#ff4500]' },
    { regex: /bg-orange-200/g, replacement: 'bg-[#ff4500]/20' },
    { regex: /bg-orange-100/g, replacement: 'bg-[#ff4500]/10' },
    { regex: /bg-orange-50/g, replacement: 'bg-[#ff4500]/10' },
    { regex: /shadow-orange-500\/25/g, replacement: 'shadow-[#ff4500]/25' },
    { regex: /shadow-orange-100/g, replacement: 'shadow-[#ff4500]/10' },
    { regex: /decoration-orange-300/g, replacement: 'decoration-[#ff4500]/30' },
    { regex: /border-orange-100/g, replacement: 'border-[#ff4500]/10' },
    { regex: /border-orange-200/g, replacement: 'border-[#ff4500]/20' },
    { regex: /border-orange-500/g, replacement: 'border-[#ff4500]' },
    { regex: /ring-orange-500/g, replacement: 'ring-[#ff4500]' },
    { regex: /hover:bg-orange-600/g, replacement: 'hover:bg-[#cc3700]' }, // Darker on hover
    { regex: /hover:bg-orange-700/g, replacement: 'hover:bg-[#b03000]' }, // Even darker
    { regex: /hover:text-orange-600/g, replacement: 'hover:text-[#cc3700]' },
    { regex: /hover:text-orange-700/g, replacement: 'hover:text-[#b03000]' },
    { regex: /group-hover:text-orange-600/g, replacement: 'group-hover:text-[#ff4500]' }, // usually icon highlight
    { regex: /group-hover:bg-orange-500/g, replacement: 'group-hover:bg-[#ff4500]' },
    { regex: /selection:text-orange-500/g, replacement: 'selection:text-[#ff4500]' },
    { regex: /marker:text-orange-500/g, replacement: 'marker:text-[#ff4500]' },
];

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let originalContent = content;

    replacements.forEach(({ regex, replacement }) => {
        content = content.replace(regex, replacement);
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated component ${file}`);
    }
});
