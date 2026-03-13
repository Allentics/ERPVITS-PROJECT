const fs = require('fs');

const filesToUpdate = [
    'seed_data.sql',
    'seed_all.sql',
    'seed_blogs.sql',
    'erpvits_database_complete.sql'
];

for (const file of filesToUpdate) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;

        content = content.replace(/https:\/\/www\.erpvits\.com\/sap-fico-course/g, 'https://www.erpvits.com/courses/fieldglass');
        content = content.replace(/href="\/sap-fieldglass-training\/"/g, 'href="/courses/fieldglass/"');

        if (content !== originalContent) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated ${file}`);
        } else {
            console.log(`No changes needed in ${file}`);
        }
    } else {
        console.log(`${file} does not exist`);
    }
}
