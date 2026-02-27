const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.log('Missing env vars');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const c4cExactRealWorldScenarios = [
    {
        title: "Case Study 1: Global Enterprise's Customer Engagement Platform",
        scenario: "A multinational enterprise needs your assistance to build custom customer engagement applications in SAP C4C extending standard functionalities. There is complex business logic that needs to be addressed, along with custom UIs and integrations with external systems.",
        role: "As the lead SAP C4C developer, you will:",
        deliverables: "Source code repository, technical documentation, testing instructions, and a deployment guide.",
        responsibilities: [
            "Design custom business objects for customer needs",
            "Develop complex ABSL logic and validations",
            "Create engaging UI experiences",
            "Integrate external data sources and services",
            "Build analytics and reporting dashboards"
        ]
    }, {
        title: "Case Study 2: Technology Company's Cloud API Platform",
        scenario: "A technology company is implementing SAP C4C and needs extensive integrations with external systems, where you will need to do some solid API development and web service connections.",
        role: "You will:",
        deliverables: "Integration specs, API docs, testing results, and a performance report.",
        responsibilities: [
            "Develop extensive web service integrations",
            "Implement external system connectivity",
            "Create API adapters and middleware",
            "Set up error handling and retry circulation",
            "Build integration monitoring dashboards"
        ]
    }, {
        title: "Case Study 3: SaaS Provider's Multi-Tenant Application",
        scenario: "A SaaS provider developing multi-tenant cloud applications in SAP C4C and needs sub applications for client specific customizations.",
        role: "You will:",
        deliverables: "Application architecture documentation, customization guide, and performance tuning recommendations.",
        responsibilities: [
            "Create business objects that can be expanded.",
            "Create configurations for individual tenants.",
            "Build end-user customization user interfaces.",
            "Optimize applications for performance.",
            "Enforce security and maintain data isolation."
        ]
    }
];

const c4cExactCertificationItems = [
    {
        title: "SAP Certified Development Associate – SAP C4C (Customer Cloud)",
        code: "C_C4C_90 or equivalent C4C certification",
        focus: "Custom development, ABSL programming, UI design, integration",
        value: "Demonstrates expertise in end-to-end SAP C4C development",
        relevance: "Developer, technical consultant, solutions architect roles",
        who: "Demonstrates expertise in end-to-end SAP C4C development"
    }
];

const c4cExactSupportFeatures = [
    {
        title: "Focused Studying",
        subtitle: "Study guides aimed at the official exam outlines."
    },
    {
        title: "Practice Tests",
        subtitle: "Timed tests that replicate the actual exam."
    },
    {
        title: "Exam Strategies",
        subtitle: "Time management tips, coding questions, identifying pitfalls, etc."
    },
    {
        title: "Exam Registration Guidance",
        subtitle: "We help you to register and schedule the exam."
    },
    {
        title: "Retake Support",
        subtitle: "If you don’t pass the exam, we will help you with the additional support and next steps."
    }
];

async function updateC4C() {
    const courseId = 'c4c-technical';
    console.log(`Fetching ${courseId}...`);
    const { data: fetchResult, error: fetchErr } = await supabase.from('courses').select('sections').eq('id', courseId).single();

    if (fetchErr || !fetchResult) {
        console.error('Course not found or error fetching:', fetchErr?.message);
        return;
    }

    let sections = typeof fetchResult.sections === 'string' ? JSON.parse(fetchResult.sections) : fetchResult.sections;

    // Update real_world_scenarios
    let rwsIndex = sections.findIndex(s => s.type === 'real_world_scenarios');
    if (rwsIndex !== -1) {
        sections[rwsIndex].title = "Experience Real-World SAP C4C Scenarios & Business Case Studies";
        sections[rwsIndex].subtitle = "Our capstone projects immerse you in realistic cloud development scenarios. Here are representative examples:";
        sections[rwsIndex].items = c4cExactRealWorldScenarios;
        sections[rwsIndex].portfolioNote = "These projects ensure you graduate with portfolio pieces and real-world problem-solving experience invaluable for your first C4C development engagement.";
    }

    // Update detailed_certification
    let certIndex = sections.findIndex(s => s.type === 'detailed_certification');
    if (certIndex !== -1) {
        sections[certIndex].title = "SAP C4C Technical Certification – Your Global Career Credential";
        sections[certIndex].description = "We Provide Support for Below SAP Certification List";
        sections[certIndex].items = c4cExactCertificationItems;
        sections[certIndex].supportFeatures = c4cExactSupportFeatures;
    }

    console.log('Sending update...');
    const { error: updateError } = await supabase
        .from('courses')
        .update({ sections: sections })
        .eq('id', courseId);

    if (updateError) {
        console.error('Error updating:', updateError.message);
    } else {
        console.log('Successfully applied EXACT text request to DB!');
    }
}

updateC4C();
