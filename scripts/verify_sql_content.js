const fs = require('fs');
const path = require('path');

const sqlPath = path.join(__dirname, 'restore_all_blogs.sql');
const content = fs.readFileSync(sqlPath, 'utf-8');

// Check FAQ
const id1 = 'sap-cpi-interview-questions';
if (content.includes(`'${id1}'`)) {
    console.log(`Found ID: ${id1}`);
} else {
    console.error(`ID ${id1} NOT FOUND in SQL`);
}

const faqSnippet = 'What is SAP Cloud Platform Integration (CPI)?';
if (content.includes(faqSnippet)) {
    console.log('Found FAQ Question text.');
} else {
    console.error('FAQ Question text NOT FOUND.');
}

const htmlSnippet = '<h4 class="font-bold text-slate-900">What is SAP Cloud Platform Integration (CPI)?</h4>';
if (content.includes(htmlSnippet)) {
    console.log('Found Correct HTML for FAQ.');
} else {
    console.error('Correct FAQ HTML formatting NOT FOUND.');
}

// Check T-Codes
const id2 = 'sap-fico-cash-journal-configuration';
if (content.includes(`'${id2}'`)) {
    console.log(`Found ID: ${id2}`);
} else {
    console.error(`ID ${id2} NOT FOUND in SQL`);
}

const tcodeSnippet = 'FBN1';
if (content.includes(tcodeSnippet)) {
    console.log('Found T-Code FBN1 text.');
} else {
    console.error('T-Code FBN1 NOT FOUND.');
}

const tcodeHtmlSnippet = '<span class="block font-mono font-bold text-orange-600 text-lg">FBN1</span>';
if (content.includes(tcodeHtmlSnippet)) {
    console.log('Found Correct HTML for T-Codes.');
} else {
    console.error('Correct T-Code HTML formatting NOT FOUND.');
    // Sample what is found
    const idx = content.indexOf(tcodeSnippet);
    if (idx !== -1) {
        console.log('Snippet found:', content.substring(idx - 50, idx + 100).replace(/\n/g, ' '));
    }
}
