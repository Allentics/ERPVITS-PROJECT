const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../lib/contentHelpers.ts');

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace text colors
    content = content.replace(/text-(blue|green|purple|cyan|teal|indigo|emerald|sky)-(\d+)/g, 'text-orange-$2');

    // Replace bg colors
    content = content.replace(/bg-(blue|green|purple|cyan|teal|indigo|emerald|sky)-(\d+)/g, 'bg-orange-$2');

    // Replace border colors
    content = content.replace(/border-(blue|green|purple|cyan|teal|indigo|emerald|sky)-(\d+)/g, 'border-orange-$2');

    // Replace fill colors
    content = content.replace(/fill-(blue|green|purple|cyan|teal|indigo|emerald|sky)-(\d+)/g, 'fill-orange-$2');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated colors in lib/contentHelpers.ts');
} catch (err) {
    console.error('Error updating file:', err);
}
