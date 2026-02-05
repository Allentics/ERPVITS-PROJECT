const fs = require('fs');
const path = require('path');

// Manual mapping from slug to component filename (based on app/blog/[slug]/page.tsx)
const slugToComponent = {
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

const blogDataPath = path.join(process.cwd(), 'lib', 'blogData.ts');
const componentsDir = path.join(process.cwd(), 'components', 'blog');
const outputPath = path.join(process.cwd(), 'scripts', 'restore_all_blogs.sql');

// Improved approach: Read blogData.ts line by line to build objects
function parseBlogData(content) {
    const posts = [];
    const lines = content.split('\n');
    let currentPost = null;

    for (let line of lines) {
        line = line.trim();
        if (line === '{') {
            currentPost = {};
        } else if (line === '},' || (line === '}' && currentPost)) {
            if (currentPost && currentPost.id) {
                posts.push(currentPost);
            } else if (currentPost) {
                console.warn('Found object without ID, skipping');
            }
            currentPost = null;
        } else if (currentPost) {
            // Parse key-value pairs: key: "value",
            const match = line.match(/^(\w+):\s*["'](.+)["'](,?)$/);
            if (match) {
                currentPost[match[1]] = match[2];
            } else {
                // Debugging: Log lines that sort of look like props but failed regex
                if (line.includes(':')) console.log('Failed to match property line:', line);
            }
        }
    }
    console.log(`Parsed ${posts.length} posts.`);
    return posts;
}

function cleanJSX(content) {
    if (!content) return content;

    // 1. Replace className with class
    let cleaned = content.replace(/className=/g, 'class=');

    // 2. Remove fragments <> and </>
    cleaned = cleaned.replace(/^\s*<>\s*/, '').replace(/\s*<\/>\s*$/, '');

    // 3. Remove JSX comments {/* ... */}
    cleaned = cleaned.replace(/{\/\*[\s\S]*?\*\/}/g, '');

    // 4. Convert <Link href="..."> to <a href="...">
    // This supports basic usage. Complex props might be lost, but class/className should be preserved by step 1
    // We match <Link ... href="..." ... > ... </Link>
    // Simplified regex assuming href is present.
    cleaned = cleaned.replace(/<Link\s+([^>]*?)href=(["'])(.*?)\2([^>]*?)>(.*?)<\/Link>/gs, '<a $1href=$2$3$2$4>$5</a>');

    // Also handle simple <Link href="...">...</Link> without extra props if the above misses
    // cleaned = cleaned.replace(/<Link\s+href=(["'])(.*?)\1>(.*?)<\/Link>/gs, '<a href="$2">$3</a>');

    // 5. Cleanup self-closing <br /> <hr /> etc if desired (HTML5 allows them, but strictly <br> is better? No, <br /> is valid in HTML5)

    // 7. Handle BlogCallout
    cleaned = cleaned.replace(/<BlogCallout\s*(?:title=(["'])(.*?)\1)?\s*>([\s\S]*?)<\/BlogCallout>/g, (match, quote, title, content) => {
        let titleHtml = title ? `<div class="font-bold text-gray-900 not-italic mb-2">${title}</div>` : '';
        return `<div class="mt-6 mb-6 italic bg-gray-50 p-6 border-l-4 border-orange-500 rounded-r-xl shadow-sm">
            ${titleHtml}
            <div class="text-gray-700">${content}</div>
        </div>`;
    });

    // 8. Handle BlogCTA
    // Basic regex for props. Assumes props are on the same line or standard format.
    // <BlogCTA title="..." description="..." ... />
    cleaned = cleaned.replace(/<BlogCTA\s+([\s\S]*?)\/>/g, (match, propsString) => {
        const getProp = (name) => {
            const propMatch = new RegExp(`${name}=(["'])(.*?)\\1`).exec(propsString);
            return propMatch ? propMatch[2] : null;
        };
        const title = getProp('title') || "Ready to Transform Your Career?";
        const description = getProp('description') || "Join ERPVITS today and discover why our graduates consistently secure positions at leading organizations worldwide.";
        const buttonText = getProp('buttonText') || "Join Today";
        const buttonLink = getProp('buttonLink') || "#enroll";

        return `<div class="mt-12 p-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white text-center shadow-xl">
            <h3 class="text-2xl font-bold mb-4 text-white !mt-0">${title}</h3>
            <p class="mb-6 opacity-90 text-white">${description}</p>
            <a href="${buttonLink}" class="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors no-underline">
                ${buttonText}
            </a>
        </div>`;
    });

    // 9. Handle FAQ map pattern (specific to SAP CPI and similar structures)
    // Matches {[ ... ].map((faq, index) => ( ... ))}
    cleaned = cleaned.replace(/{\s*\[([\s\S]*?)\]\.map\(\(faq,\s*index\)\s*=>\s*\([\s\S]*?\)\)\s*}/g, (match, arrayBody) => {
        let output = '';
        const itemRegex = /{\s*q:\s*(["'])(.*?)\1,\s*a:\s*(["'])(.*?)\3\s*}/g;
        let itemMatch;
        while ((itemMatch = itemRegex.exec(arrayBody)) !== null) {
            const q = itemMatch[2];
            const a = itemMatch[4];
            output += `<div class="border-b border-slate-200 pb-4">
                <h4 class="font-bold text-slate-900">${q}</h4>
                <p class="text-slate-600 text-sm mt-1 mb-0">${a}</p>
            </div>\n`;
        }
        return output;
    });

    // 10. Handle Array-of-Arrays map pattern (specific to T-codes and similar grids)
    // Matches {[ [a, b], ... ].map(([var1, var2]) => ( ... ))}
    cleaned = cleaned.replace(/{\s*\[\s*(\[[\s\S]*?\])\s*\]\.map\(\(\[([\s\S]*?)\]\)\s*=>\s*\([\s\S]*?\)\)\s*}/g, (match, arrayBody, vars) => {
        let output = '';
        // Extract inner arrays [ 'val1', 'val2' ]
        const innerArrayRegex = /\[\s*(["'])(.*?)\1\s*,\s*(["'])(.*?)\3\s*\]/g;
        let innerMatch;
        while ((innerMatch = innerArrayRegex.exec(arrayBody)) !== null) {
            const val1 = innerMatch[2];
            const val2 = innerMatch[4];

            // This is specific to the T-code layout in FICO blog
            output += `
                <div class="bg-white p-3 rounded shadow-sm text-center">
                    <span class="block font-mono font-bold text-orange-600 text-lg">${val1}</span>
                    <span class="text-xs text-gray-500 uppercase">${val2}</span>
                </div>`;
        }
        return output;
    });

    return cleaned;
}

function extractContentFromComponent(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        // Look for return ( ... ) before the final brace
        // Greedy match for content between first ( after return and last ) before the final }
        const match = fileContent.match(/return\s*\(\s*([\s\S]*)\s*\)(?:;)?\s*}/);
        if (match && match[1]) {
            let content = match[1].trim();
            // Remove the final ) if it's trailing due to greedy match issues
            // (but the regex above with } should be enough)
            return cleanJSX(content);
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
        console.log(`Processing ${id}... Content extracted: ${!!content}`);

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
