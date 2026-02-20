const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

// Load env
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Manual mapping from slug to component filename (based on app/blog/[slug]/page.tsx)
// Copied from generate_restore_sql.js
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
    'sap-btp-cockpit-guide': 'SapBtpCockpitContent.tsx',
    'sap-sd-shipping-point-determination': 'SapSdShippingPointContent.tsx',
    'sap-training-malaysia-2026': 'SapTrainingMalaysiaContent.tsx',
    'sap-hana-course-masterclass': 'SapHanaMasterclassContent.tsx',
    'ariba-guided-buying-guide': 'AribaGuidedBuyingContent.tsx'
};

const blogDataPath = path.join(process.cwd(), 'lib', 'blogData.ts');
const componentsDir = path.join(process.cwd(), 'components', 'blog');

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
            }
            currentPost = null;
        } else if (currentPost) {
            const match = line.match(/^(\w+):\s*["'](.+)["'](,?)$/);
            if (match) {
                currentPost[match[1]] = match[2];
            }
        }
    }
    return posts;
}

function cleanJSX(content) {
    if (!content) return content;
    let cleaned = content.replace(/className=/g, 'class=');
    cleaned = cleaned.replace(/^\s*<>\s*/, '').replace(/\s*<\/>\s*$/, '');
    cleaned = cleaned.replace(/{\/\*[\s\S]*?\*\/}/g, '');
    cleaned = cleaned.replace(/<Link\s+([^>]*?)href=(["'])(.*?)\2([^>]*?)>(.*?)<\/Link>/gs, '<a $1href=$2$3$2$4>$5</a>');

    cleaned = cleaned.replace(/<BlogCallout\s*(?:title=(["'])(.*?)\1)?\s*>([\s\S]*?)<\/BlogCallout>/g, (match, quote, title, content) => {
        let titleHtml = title ? `<div class="font-bold text-gray-900 not-italic mb-2">${title}</div>` : '';
        return `<div class="mt-6 mb-6 italic bg-gray-50 p-6 border-l-4 border-orange-500 rounded-r-xl shadow-sm">
            ${titleHtml}
            <div class="text-gray-700">${content}</div>
        </div>`;
    });

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

    cleaned = cleaned.replace(/{\s*\[\s*(\[[\s\S]*?\])\s*\]\.map\(\(\[([\s\S]*?)\]\)\s*=>\s*\([\s\S]*?\)\)\s*}/g, (match, arrayBody, vars) => {
        let output = '';
        const innerArrayRegex = /\[\s*(["'])(.*?)\1\s*,\s*(["'])(.*?)\3\s*\]/g;
        let innerMatch;
        while ((innerMatch = innerArrayRegex.exec(arrayBody)) !== null) {
            const val1 = innerMatch[2];
            const val2 = innerMatch[4];
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
        const match = fileContent.match(/return\s*\(\s*([\s\S]*)\s*\)(?:;)?\s*}/);
        if (match && match[1]) {
            let content = match[1].trim();
            return cleanJSX(content);
        }
        return null;
    } catch (e) {
        console.error(`Error reading component ${filePath}:`, e);
        return null;
    }
}

async function main() {
    console.log('Reseeding blogs to Supabase...');
    const blogDataContent = fs.readFileSync(blogDataPath, 'utf-8');
    const posts = parseBlogData(blogDataContent);

    for (const post of posts) {
        const id = post.id;
        const componentFile = slugToComponent[id];

        if (!componentFile) {
            console.warn(`Skipping ${id}: No component mapping found.`);
            continue;
        }

        const fullPath = path.join(componentsDir, componentFile);
        if (!fs.existsSync(fullPath)) {
            console.warn(`Skipping ${id}: Component file not found: ${fullPath}`);
            continue;
        }

        let content = extractContentFromComponent(fullPath);
        if (!content) {
            console.warn(`Skipping ${id}: Coould not extract content.`);
            continue;
        }

        // Prepare payload
        const payload = {
            id: post.id,
            title: post.title,
            description: post.description,
            image: post.image || null,
            date: post.date,
            category: post.category,
            author: post.author,
            content: content
        };

        console.log(`Upserting ${id}...`);
        const { error } = await supabase.from('blog_posts').upsert(payload, { onConflict: 'id', ignoreDuplicates: true });

        if (error) {
            console.error(`❌ Failed to upsert ${id}: ${error.message}`);
        } else {
            console.log(`✅ Successfully upserted ${id}`);
        }
    }
    console.log('Reseed complete.');
}

main();
