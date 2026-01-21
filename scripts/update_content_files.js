const fs = require('fs');
const path = require('path');

const libDir = path.join(__dirname, '../lib');
const files = fs.readdirSync(libDir).filter(f => f.endsWith('Content.ts') && !f.endsWith('.d.ts'));

files.forEach(file => {
    const filePath = path.join(libDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // extract title
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    if (!titleMatch) {
        console.log(`Skipping ${file}: No title found`);
        return;
    }
    const courseName = titleMatch[1];

    // Check if heroHeading exists (commented or not)
    // We want to standardise it.
    // Pattern: Transform Your Career with the #1 [Course Name] Online Training Program

    const newHeading = `heroHeading: <>Transform Your Career with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 box-decoration-clone">#1 ${courseName} Online Training Program</span></>,`;

    // Replace existing heroHeading
    const headingRegex = /heroHeading:\s*(?:".*?"|<.*?>|.*?),/;

    // If it exists, replace it. If it's commented out? 
    // Regex for commented out: // heroHeading: ...

    let newContent = content;

    if (newContent.match(headingRegex)) {
        newContent = newContent.replace(headingRegex, newHeading);
    } else if (newContent.match(/\/\/\s*heroHeading:/)) {
        // Uncomment and replace
        newContent = newContent.replace(/\/\/\s*heroHeading:.*(\r\n|\n)/, newHeading + '\n');
    } else {
        // Find a place to insert it. e.g. after title: ...
        newContent = newContent.replace(/(title:\s*"[^"]+",)/, `$1\n    ${newHeading}`);
    }

    // Add usage of React
    if (!newContent.includes("import React")) {
        newContent = `import React from 'react';\n${newContent}`;
    }

    // Save as .tsx
    const newFilePath = path.join(libDir, file.replace('.ts', '.tsx'));
    fs.writeFileSync(newFilePath, newContent);

    // Delete old .ts file
    // fs.unlinkSync(filePath); 
    console.log(`Processed ${file} -> ${path.basename(newFilePath)}`);
});
