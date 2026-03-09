const fs = require('fs');
const files = [
    'scripts/restore_all_blogs.sql',
    'seed_blogs.sql',
    'seed_data.sql',
    'scripts/upsert-new-blogs.ts',
    'scripts/insert_new_blogs.sql'
];

for (const file of files) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        if (content.includes('ERPVITS offers comprehensive SAP Fieldglass Online Training')) {
            content = content.replace(
                /ERPVITS offers comprehensive SAP Fieldglass Online Training/g,
                '<a href="https://www.erpvits.com" target="_blank" rel="noopener noreferrer" class="text-cyan-500 hover:text-cyan-600 font-semibold no-underline">ERPVITS</a> offers comprehensive SAP Fieldglass Online Training'
            );
            fs.writeFileSync(file, content);
            console.log('Updated ' + file);
        }
    }
}
