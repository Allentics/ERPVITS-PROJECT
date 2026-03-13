const fs = require('fs');
const path = require('path');

const newCourses = [
    { dirName: 'sap-mdg-training', canonical: 'https://www.erpvits.com/sap-mdg-training/', slug: 'sap-mdg' },
    { dirName: 'sap-ppds-training', canonical: 'https://www.erpvits.com/sap-ppds-training/', slug: 'sap-ppds' },
    { dirName: 'sap-tm-training', canonical: 'https://www.erpvits.com/sap-tm-training/', slug: 'sap-tm' },
    { dirName: 'sap-ibp-training', canonical: 'https://www.erpvits.com/sap-ibp-training/', slug: 'sap-ibp' },
    { dirName: 'sap-ewm-training', canonical: 'https://www.erpvits.com/sap-ewm-training/', slug: 'sap-ewm' },
    { dirName: 'sap-c4c-functional-training', canonical: 'https://www.erpvits.com/sap-c4c-functional-training/', slug: 'sap-c4c-functional' }
];

// Create folders and files
for (const course of newCourses) {
    const dirPath = path.join(__dirname, '..', 'app', course.dirName);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
    const pageContent = `import CoursePage from '../courses/[slug]/page';
import { Metadata } from 'next';
import { courses } from '@/lib/courseData';
import { supabase } from '@/lib/supabase';

// Helper to get metadata directly since we know the slug
export async function generateMetadata(): Promise<Metadata> {
    const slug = '${course.slug}';
    let courseData = null;
    try {
        const { data } = await supabase.from('courses').select('title, meta_title, meta_description').eq('id', slug).single();
        courseData = data;
    } catch(e) {}
    
    const local = courses.find(c => c.id === '${course.slug}' || c.id === '${course.slug.replace('sap-', '')}');

    return {
        title: courseData?.meta_title || local?.metaTitle || \`\${courseData?.title || local?.title || '${course.slug}'} Online Training | ERPVITS\`,
        description: courseData?.meta_description || local?.metaDescription || \`Master \${courseData?.title || local?.title || '${course.slug}'} with ERPVITS - Live online training, real projects, and placement assistance.\`,
        alternates: {
            canonical: '${course.canonical}',
        },
    };
}

export default function Page() {
    return <CoursePage params={Promise.resolve({ slug: '${course.slug}' })} />;
}
`;
    fs.writeFileSync(path.join(dirPath, 'page.tsx'), pageContent, 'utf8');
    console.log(`Created ${dirPath}/page.tsx`);
}

// Rename existing folders
const renames = [
    { from: 'app/contact', to: 'app/contact-us' },
    { from: 'app/about', to: 'app/about-us' },
    { from: 'app/sap-abap-on-hana', to: 'app/sap-abap-on-hana-training' }
];

for (const rename of renames) {
    const fromPath = path.join(__dirname, '..', rename.from);
    const toPath = path.join(__dirname, '..', rename.to);

    if (fs.existsSync(fromPath)) {
        if (!fs.existsSync(toPath)) {
            fs.renameSync(fromPath, toPath);
            console.log(`Renamed ${rename.from} to ${rename.to}`);
        } else {
            console.log(`Warning: ${rename.to} already exists, merging not supported by renameSync.`);
        }
    } else {
        console.log(`Warning: ${rename.from} does not exist.`);
    }
}
