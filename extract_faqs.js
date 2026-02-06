const fs = require('fs');
const path = require('path');

const libDir = 'c:/Users/Allenticspun2107/Desktop/ERPVITES-PROJECT-main/lib';

const contentFiles = [
    'abapContent.tsx',
    'abapHanaContent.tsx',
    'aribaContent.tsx',
    'c4cContent.tsx',
    'c4cFunctionalContent.tsx',
    'cpiContent.tsx',
    'ficoContent.tsx',
    'fieldglassContent.tsx',
    'ppdsContent.tsx',
    'mmContent.tsx',
    'sdContent.tsx',
    'trmContent.tsx',
    'tmContent.tsx',
    'ewmContent.tsx',
    'ibpContent.tsx',
    'mdgContent.tsx',
    'pythonAimlContent.tsx'
];

const fileToIdMap = {
    'abapContent.tsx': 'abap',
    'abapHanaContent.tsx': 'abap-hana',
    'aribaContent.tsx': 'ariba',
    'c4cContent.tsx': 'c4c-technical',
    'c4cFunctionalContent.tsx': 'sap-c4c-functional',
    'cpiContent.tsx': 'cpi',
    'ficoContent.tsx': 'fico',
    'fieldglassContent.tsx': 'fieldglass',
    'ppdsContent.tsx': 'ppds',
    'mmContent.tsx': 'mm',
    'sdContent.tsx': 'sd',
    'trmContent.tsx': 'trm',
    'tmContent.tsx': 'tm',
    'ewmContent.tsx': 'ewm',
    'ibpContent.tsx': 'ibp',
    'mdgContent.tsx': 'mdg',
    'pythonAimlContent.tsx': 'python-aiml'
};

function extractFaqs(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');

    // Look for type: 'detailed_faq'
    // and extract the items: [...] array
    const detailedFaqRegex = /type:\s*['"]detailed_faq['"][\s\S]*?items:\s*(\[[\s\S]*?\])/;
    const match = content.match(detailedFaqRegex);

    if (!match) return null;

    let itemsStr = match[1];

    // Attempt to parse the items array. 
    // This is tricky because it's JS/TS code, not pure JSON.
    // We'll support both { q: "...", a: "..." } and { question: "...", answer: "..." }
    const qaRegex = /\{\s*(q|question):\s*([\s\S]*?),\s*(a|answer):\s*([\s\S]*?)\s*\}/g;
    const items = [];
    let qaMatch;

    while ((qaMatch = qaRegex.exec(itemsStr)) !== null) {
        let q = qaMatch[2].trim();
        let a = qaMatch[4].trim();

        // Remove quotes and handle template literals or JSX
        q = q.replace(/^["']|["']$/g, '').trim();
        a = a.replace(/^["']|["']$/g, '').trim();

        // Escape single quotes for SQL
        q = q.replace(/'/g, "''");
        a = a.replace(/'/g, "''");

        items.push({ question: q, answer: a });
    }

    return items;
}

const sqlUpdates = [];

contentFiles.forEach(file => {
    const filePath = path.join(libDir, file);
    if (fs.existsSync(filePath)) {
        const faqs = extractFaqs(filePath);
        if (faqs && faqs.length > 0) {
            const id = fileToIdMap[file];
            const faqsJson = JSON.stringify(faqs).replace(/'/g, "''");
            sqlUpdates.push(`UPDATE public.courses SET faqs = '${faqsJson}'::jsonb WHERE id = '${id}';`);
        } else {
            console.log(`No FAQs found in ${file}`);
        }
    } else {
        console.log(`File not found: ${filePath}`);
    }
});

fs.writeFileSync('update_course_faqs.sql', sqlUpdates.join('\n'));
console.log('Generated update_course_faqs.sql');
