
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Mapping of ID to File name
const fileMapping: Record<string, string> = {
    'abap-cloud': 'abapContent.tsx',
    'abap-hana': 'abapHanaContent.tsx',
    'ariba': 'aribaContent.tsx',
    'c4c-technical': 'c4cContent.tsx',
    'sap-c4c-functional': 'c4cFunctionalContent.tsx',
    'cpi': 'cpiContent.tsx',
    'fico': 'ficoContent.tsx',
    'fieldglass': 'fieldglassContent.tsx',
    'ppds': 'ppdsContent.tsx',
    'mm': 'mmContent.tsx',
    'sd': 'sdContent.tsx',
    'trm': 'trmContent.tsx',
    'tm': 'tmContent.tsx',
    'ewm': 'ewmContent.tsx',
    'ibp': 'ibpContent.tsx',
    'mdg': 'mdgContent.tsx',
    'python-aiml': 'pythonAimlContent.tsx'
};

async function syncDbToFiles() {
    console.log('🔄 Starting full sync from Supabase to local code files...');

    const { data: dbCourses, error } = await supabase.from('courses').select('*');
    if (error) {
        console.error('❌ Error fetching from Supabase:', error.message);
        return;
    }

    for (const dbCourse of dbCourses) {
        const fileName = fileMapping[dbCourse.id];
        if (!fileName) {
            console.log(`⚠️ No local file mapping for ID: ${dbCourse.id}, skipped.`);
            continue;
        }

        const filePath = path.resolve(process.cwd(), 'lib', fileName);
        if (!fs.existsSync(filePath)) {
            console.log(`⚠️ File not found: ${filePath}, skipped.`);
            continue;
        }

        console.log(`📑 Processing ${dbCourse.id} -> ${fileName}...`);

        // Prepare the new object content
        const content = {
            title: dbCourse.title,
            category: dbCourse.category,
            price: dbCourse.price,
            duration: dbCourse.duration,
            heroHeading: dbCourse.hero_heading,
            heroSubheading: dbCourse.hero_subheading,
            heroImage: dbCourse.hero_image,
            description: dbCourse.description,
            metaTitle: dbCourse.meta_title,
            metaDescription: dbCourse.meta_description,
            features: dbCourse.features,
            sections: dbCourse.sections,
            curriculum: dbCourse.curriculum,
            faqs: dbCourse.faqs,
            schema: dbCourse.schema
        };

        const fileContent = fs.readFileSync(filePath, 'utf8');
        const variableName = fileName.replace('.tsx', '');

        // Regex to find the export const ... = { ... } block
        // This is a simplified approach, might need adjustment for complex files
        const regex = new RegExp(`export const ${variableName}[^=]*=\\s*\\{[\\s\\S]*?\\};`, 'm');

        let newObjectString = JSON.stringify(content, null, 4);

        // Convert HTML back to pseudo-JSX if needed, or just keep as strings
        // Note: Supabase stores them as strings. If the original had React components, 
        // they are now HTML strings. This is generally fine for the app.

        const replacement = `export const ${variableName} = ${newObjectString};`;

        if (regex.test(fileContent)) {
            const updatedFileContent = fileContent.replace(regex, replacement);
            fs.writeFileSync(filePath, updatedFileContent);
            console.log(`✅ Successfully updated ${filePath}`);
        } else {
            console.log(`❌ Could not find export variable ${variableName} in ${filePath}`);
        }
    }

    console.log('\n✨ All admin changes have been synced back to local code files.');
}

syncDbToFiles().catch(console.error);
