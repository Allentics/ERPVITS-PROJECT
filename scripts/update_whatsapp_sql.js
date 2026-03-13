const fs = require('fs');
const files = [
    'seed_blogs.sql',
    'scripts/restore_all_blogs.sql',
    'scripts/restore_mm_career_blog.sql'
];

for (const file of files) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        let oldContent = content;

        // Replace in SQL
        content = content.replace(/'href=\"#\"'/g, '\'href=\"https://www.whatsapp.com/channel/0029Vb5u9luHwXb481Y1Dx1X\" target=\"_blank\" rel=\"noopener noreferrer\"\'');
        content = content.replace(/buttonLink="#"/g, 'buttonLink="https://www.whatsapp.com/channel/0029Vb5u9luHwXb481Y1Dx1X"');
        content = content.replace(/buttonLink="https:\/\/whatsapp\.com\/channel\/example"/g, 'buttonLink="https://www.whatsapp.com/channel/0029Vb5u9luHwXb481Y1Dx1X"');

        if (content !== oldContent) {
            fs.writeFileSync(file, content);
            console.log(`Updated ${file}`);
        } else {
            console.log(`No changes needed in ${file}`);
        }
    }
}
