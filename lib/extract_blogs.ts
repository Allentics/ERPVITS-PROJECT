import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'app/blog/[slug]/page.tsx');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

const blogMappings = [
    { id: 'sap-tcodes-list-pdf', start: 384, end: 518 },
    { id: 'sap-fico-cash-journal-configuration', start: 524, end: 776 },
    { id: 'sap-s4hana-mm-career-opportunities', start: 782, end: 1108 },
    { id: 'sap-sd-process-flow', start: 1114, end: 1296 },
    { id: 'sap-ariba-supplier-login-tutorial', start: 1302, end: 1481 },
    { id: 'sap-fieldglass-vs-traditional-vms', start: 1487, end: 1677 },
    { id: 'sap-cpi-interview-questions', start: 1683, end: 2244 },
    { id: 'top-7-sap-training-institutes', start: 2250, end: 2531 },
    { id: 'high-paying-sap-fico-jobs', start: 2536, end: 2818 },
    { id: 'top-10-sap-c4c-technical-scenarios', start: 2824, end: 2930 },
    { id: 'sap-ariba-sourcing-configuration', start: 2935, end: 3351 }
];

const extractedBlogs: Record<string, string> = {};

blogMappings.forEach(blog => {
    // lines are 1-indexed in my mapping, so subtract 1 for array access
    const blogLines = lines.slice(blog.start - 1, blog.end);
    extractedBlogs[blog.id] = blogLines.join('\n').trim();
});

fs.writeFileSync(path.join(process.cwd(), 'extracted_blog_content.json'), JSON.stringify(extractedBlogs, null, 2));
console.log('Extracted 11 blog contents to extracted_blog_content.json');
