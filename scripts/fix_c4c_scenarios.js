const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.log('Missing env vars');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Importing the constants from the tsx file (we will just paste the needed arrays instead for simplicity)
const c4cTechnicalTargetAudience = [
    {
        title: "Developers & Technical Professionals",
        icon: "Code",
        description: [
            "SAP ABAP developers converting to cloud development",
            "Full-stack developers wanting cloud skills",
            "Technical architects creating cloud solutions",
            "Enterprise systems developers"
        ]
    }, {
        title: "SAP & Cloud Consultants",
        icon: "Briefcase",
        description: [
            "SAP functional consultants needing technical skills",
            "Cloud consultants wanting SAP C4C",
            "Business analysts wanting to develop",
            "C4C technical consultants"
        ]
    }, {
        title: "IT & Systems Leaders",
        icon: "Settings",
        description: [
            "IT managers updating systems design",
            "Systems admins wanting to level up their skills",
            "Project managers handling cloud tech projects",
            "Infrastructure teams going cloud-first"
        ]
    }, {
        title: "Fresh Graduates & Career Changers",
        icon: "GraduationCap",
        description: [
            "Engineering grads wanting to go into cloud SAP jobs",
            "Computer science grads looking to work on enterprise software",
            "IT professionals transforming to SAP",
            "Career changers with solid coding skills"
        ]
    }, {
        title: "Existing SAP C4C Users & Project Teams",
        icon: "Users",
        description: [
            "People at companies working with SAP C4C systems",
            "Super users wanting to know more about systems development",
            "IT teams working on the C4C SAP cloud implementations",
            "Project teams doing custom C4C cloud changes"
        ]
    }
];

const c4cTechnicalPrerequisites = {
    minimum: [
        "Basic coding skills (Java, ABAP, or other languages)",
        "Knows about object-oriented programming",
        "Basic knowledge of CRM or other business software",
        "Worked on cloud technology",
        "Analytical, logical, and problem-solving skills"
    ],
    nicetohave: [
        "Worked with SAP (any module)",
        "Used cloud development tools",
        "Knowledge of data base design",
        "Web services integration",
        "Knowledge of SQL for data queries"
    ]
};

const c4cTechnicalLearningOutcomes = {
    tabs: [
        {
            name: "Development Mastery",
            items: [
                {
                    title: "Custom Business Object Development",
                    icon: "Box",
                    points: [
                        "Create and extend business objects using BODL",
                        "Implement complex business logic with ABSL",
                        "Design object relationships and hierarchies",
                        "Handle data validation and error scenarios"
                    ]
                }, {
                    title: "Cloud Application Development",
                    icon: "Cloud",
                    points: [
                        "Design and develop cloud applications with UI Designer",
                        "Implement responsive and interactive UIs",
                        "Create forms, tables, and dashboard visualizations",
                        "Implement complex user interactions and workflows"
                    ]
                }, {
                    title: "Service Integration & Web Services",
                    icon: "Link",
                    points: [
                        "Develop and consume web services",
                        "Integrate external systems and APIs",
                        "Implement asynchronous messaging patterns",
                        "Handle integration errors and retries"
                    ]
                }, {
                    title: "Extensibility & Customization",
                    icon: "Puzzle",
                    points: [
                        "Extend standard SAP C4C objects",
                        "Add custom fields and embedded components",
                        "Implement custom business logic",
                        "Follow best practices for extensions"
                    ]
                }
            ]
        },
        {
            name: "Technical Skills",
            items: [
                {
                    title: "Analytics & Reporting",
                    icon: "BarChart",
                    points: [
                        "Design analytical data sources and cubes",
                        "Develop reports and dashboards",
                        "Implement performance optimization",
                        "Configure advanced analytics"
                    ]
                }, {
                    title: "Business Configuration & Workflows",
                    icon: "Settings",
                    points: [
                        "Configure business settings and rules",
                        "Create business configurations for end-users",
                        "Implement approval workflows",
                        "Set up notifications and escalations"
                    ]
                }, {
                    title: "Testing, Debugging & Performance",
                    icon: "CheckCircle",
                    points: [
                        "Execute comprehensive testing strategies",
                        "Debug applications and troubleshoot issues",
                        "Optimize application performance",
                        "Monitor and analyze system metrics"
                    ]
                }, {
                    title: "Cloud Development Best Practices",
                    icon: "ShieldCheck",
                    points: [
                        "Follow SAP C4C development standards",
                        "Implement security and access controls",
                        "Manage application lifecycle and versioning",
                        "Document code and configurations"
                    ]
                }
            ]
        }
    ]
};

const c4cTechnicalRealWorldScenarios = [
    {
        title: "Case Study 1: Global Enterprise's Customer Engagement Platform",
        description: "A multinational enterprise needs custom customer engagement applications in SAP C4C extending standard functionalities. There is complex business logic that needs to be addressed, along with custom UIs and integrations with external systems.",
        role: "Lead SAP C4C Developer",
        outcome: "Delivered a comprehensive engagement platform with custom objects and real-time integrations.",
        responsibilities: [
            "Design custom business objects for customer needs",
            "Develop complex ABSL logic and validations",
            "Create engaging UI experiences",
            "Integrate external data sources and services",
            "Build analytics and reporting dashboards"
        ]
    }, {
        title: "Case Study 2: Technology Company's Cloud API Platform",
        description: "A technology company is implementing SAP C4C and needs extensive integrations with external systems, where you will need to do some solid API development and web service connections.",
        role: "Integration Engineer",
        outcome: "Seamless connectivity with external legacy systems and real-time data sync.",
        responsibilities: [
            "Develop extensive web service integrations",
            "Implement external system connectivity",
            "Create API adapters and middleware",
            "Set up error handling and retry circulation",
            "Build integration monitoring dashboards"
        ]
    }, {
        title: "Case Study 3: SaaS Provider's Multi-Tenant Application",
        description: "A SaaS provider developing multi-tenant cloud applications in SAP C4C and needs sub applications for client specific customizations.",
        role: "Cloud Solution Architect",
        outcome: "Scalable multi-tenant architecture with isolated client configurations.",
        responsibilities: [
            "Create business objects that can be expanded",
            "Create configurations for individual tenants",
            "Build end-user customization user interfaces",
            "Optimize applications for performance",
            "Enforce security and maintain data isolation"
        ]
    }
];

async function updateC4C() {
    // Try c4c-technical as id instead of sap-c4c-technical
    const possibleIds = ['c4c-technical', 'sap-c4c-technical'];
    let selectedId = null;
    let data = null;

    for (let id of possibleIds) {
        const result = await supabase.from('courses').select('id, sections').eq('id', id).single();
        if (result.data) {
            selectedId = id;
            data = result.data;
            break;
        }
    }

    if (!data) {
        console.error('Course not found');
        return;
    }

    console.log('Found course:', selectedId);
    let sections = typeof data.sections === 'string' ? JSON.parse(data.sections) : data.sections;

    // Filter out existing target audience, prereq, learning outomes and real world scenarios
    sections = sections.filter(s => !['detailed_target_audience', 'detailed_prerequisites', 'detailed_learning_outcomes', 'real_world_scenarios'].includes(s.type));

    // Find detailed_curriculum index
    const index = sections.findIndex(s => s.type === 'detailed_curriculum');

    // Create new sections
    const newSections = [
        {
            type: "detailed_target_audience",
            items: c4cTechnicalTargetAudience,
            title: "Who Should Enroll in SAP C4C Technical Training?",
            subtitle: "Aimed at developers and IT professionals looking to build complex cloud solutions"
        },
        {
            type: "detailed_prerequisites",
            items: c4cTechnicalPrerequisites
        },
        {
            type: "detailed_learning_outcomes",
            items: c4cTechnicalLearningOutcomes,
            title: "What You'll Master in This SAP C4C Technical Online Course",
            subtitle: "Comprehensive technical competencies you'll acquire to excel as an SAP C4C Developer"
        },
        {
            type: "real_world_scenarios",
            items: c4cTechnicalRealWorldScenarios
        }
    ];

    if (index !== -1) {
        // Insert them after curriculum
        sections.splice(index + 1, 0, ...newSections);
    } else {
        sections.push(...newSections);
    }

    const { error: updateError } = await supabase
        .from('courses')
        .update({ sections: sections })
        .eq('id', selectedId);

    if (updateError) {
        console.error('Error updating:', updateError.message);
    } else {
        console.log('Successfully updated C4C with missing scenarios!');
    }
}

updateC4C();
