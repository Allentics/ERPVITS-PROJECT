import * as fs from 'fs';
import * as path from 'path';

// Manual mapping from slug to component filename (based on app/blog/[slug]/page.tsx)
const slugToComponent: Record<string, string> = {
    'sap-tcodes-list-pdf': 'SapTCodesContent.tsx',
    'sap-sd-process-flow': 'SapSdProcessFlowContent.tsx',
    'sap-fico-cash-journal-configuration': 'SapFicoCashJournalContent.tsx',
    'sap-s4hana-mm-career-opportunities': 'SapS4HanaMmCareerContent.tsx',
    'high-paying-sap-fico-jobs': 'HighPayingSapFicoJobsContent.tsx',
    'sap-ariba-supplier-login-tutorial': 'SapAribaSupplierLoginContent.tsx',
    'sap-fieldglass-vs-traditional-vms': 'SapFieldglassVmsContent.tsx',
    'sap-cpi-interview-questions': 'SapCpiInterviewQuestionsContent.tsx',
    'top-10-sap-c4c-technical-scenarios': 'SapC4cTechnicalScenariosContent.tsx',
    'top-7-sap-training-institutes': 'Top7SapTrainingInstitutesContent.tsx',
    'sap-ariba-sourcing-configuration': 'SapAribaSourcingConfigContent.tsx',
    'sap-mm-course-complete-guide': 'SapMmCourseCompleteContent.tsx',
    'how-sap-ariba-is-powering-intelligent-spend-management': 'HowSapAribaPoweringContent.tsx',
    'top-ten-tools-techniques-for-efficient-abap-on-cloud-programming': 'TopTenAbapCloudToolsContent.tsx',
    'how-sap-fieldglass-transforming-global-contingent-workforce-market': 'HowSapFieldglassTransformingContent.tsx',
    'mto-and-sto-process-in-sap': 'MtoAndStoProcessContent.tsx',
    'master-sap-ariba-with-industry-leading-online-training': 'MasterSapAribaIndustryContent.tsx',
    'sap-trm-master-data-essentials': 'SapTrmMasterDataContent.tsx',
    'sap-trm-complementary-technologies': 'SapTrmComplementaryContent.tsx',
    'ultimate-guide-to-sap-fieldglass-login-access-setup': 'SapFieldglassLoginGuideContent.tsx',
    'sap-consultant-salary-guide-2026': 'SapConsultantSalaryGuideContent.tsx',
    'sap-fiori-apps-library-explained': 'SapFioriAppsLibraryContent.tsx',
    'sap-btp-cockpit-guide': 'SapBtpCockpitContent.tsx'
};

// We also need the metadata from blogData.ts. 
// Since we can't easily import TS files in a loose script without config, 
// I will read blogData.ts and regex extract the blogPosts array.
// OR I can just read the file and parse existing JSON if it was JSON, but it's TS.
// I'll assume I can read the file and extract object literals.

const blogDataPath = path.join(process.cwd(), 'lib', 'blogData.ts');
const componentsDir = path.join(process.cwd(), 'components', 'blog');
const outputPath = path.join(process.cwd(), 'scripts', 'restore_all_blogs.sql');

function extractBlogPosts(content: string) {
    // This is a rough extraction, assuming standard formatting
    // We look for objects inside the blogPosts array
    // This might be fragile if the file format changes significantly
    const posts: any[] = [];

    // Regex to capture objects like { id: "...", ... }
    // We'll iterate through the file finding objects

    // Alternatively, since I just need the metadata to combine with content,
    // and I have the IDs in the mapping...
    // I can try to find the specific block for each ID.
    return posts;
}

// Improved approach: Read blogData.ts line by line to build objects
function parseBlogData(content: string) {
    const posts: any[] = [];
    const lines = content.split('\n');
    let currentPost: any = null;

    for (let line of lines) {
        line = line.trim();
        if (line === '{') {
            currentPost = {};
        } else if (line === '},' || (line === '}' && currentPost)) {
            if (currentPost && currentPost.id) {
                posts.push(currentPost);
            }
            currentPost = null;
        } else if (currentPost) {
            // Parse key-value pairs: key: "value",
            const match = line.match(/^(\w+):\s*["'](.+)["'](,?)$/);
            if (match) {
                currentPost[match[1]] = match[2];
            }
        }
    }
    return posts;
}

function extractContentFromComponent(filePath: string): string | null {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        // Look for return ( ... );
        // Capture everything inside the outer parenthesis of the return statement
        const match = fileContent.match(/return\s*\(\s*([\s\S]*?)\s*\);\s*}/);
        if (match && match[1]) {
            let content = match[1].trim();
            // Basic cleanup if needed
            return content;
        }
        return null;
    } catch (e) {
        console.error(`Error reading component ${filePath}:`, e);
        return null;
    }
}

function main() {
    console.log('Generating SQL restore script...');

    const blogDataContent = fs.readFileSync(blogDataPath, 'utf-8');
    const posts = parseBlogData(blogDataContent);

    let sqlOutput = '-- SQL Script to restore content for all blog posts\n\n';

    for (const post of posts) {
        const id = post.id;
        const componentFile = slugToComponent[id];

        if (!componentFile) {
            console.warn(`No component mapping found for ID: ${id}`);
            continue;
        }

        const fullPath = path.join(componentsDir, componentFile);
        if (!fs.existsSync(fullPath)) {
            console.warn(`Component file not found: ${fullPath}`);
            continue;
        }

        let content = extractContentFromComponent(fullPath);

        if (!content) {
            console.warn(`Could not extract content from ${componentFile}`);
            continue;
        }

        // Escape single quotes for SQL
        const safeContent = content.replace(/'/g, "''");

        sqlOutput += `-- ${post.title}\n`;
        sqlOutput += `INSERT INTO public.blog_posts (id, title, description, content, image, date, category, author) \n`;
        sqlOutput += `VALUES ('${id}', '${post.title.replace(/'/g, "''")}', '${post.description.replace(/'/g, "''")}', '${safeContent}', '${(post.image || "").replace(/'/g, "''")}', '${post.date}', '${post.category}', '${post.author}')\n`;
        sqlOutput += `ON CONFLICT (id) DO UPDATE SET \n`;
        sqlOutput += `title = EXCLUDED.title, description = EXCLUDED.description, content = EXCLUDED.content, image = EXCLUDED.image, date = EXCLUDED.date, category = EXCLUDED.category, author = EXCLUDED.author;\n\n`;
    }

    fs.writeFileSync(outputPath, sqlOutput);
    console.log(`Successfully generated ${outputPath}`);
}

main();
