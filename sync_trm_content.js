const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const whatsIncluded = {
    type: 'whats_included',
    title: "What's Included in the SAP TRM Training – Complete Learning Package",
    subtitle: "Integrate career-focused SAP TRM training with real banking and treasury modules. Our comprehensive program streamlines your TRM learning, covers certification guidance, and provides post-training support.",
    features: [
        { title: "Live Interactive Classes", description: "50 hours in 8–12 weeks over live video conferencing including Q&A sessions and treasuring discussions." },
        { title: "Real-World Projects", description: "Work on derivative hedging, money market transactions and foreign exchange, SAP S/4HANA positioning, and real portfolio construction." },
        { title: "Hands-On Lab Environment", description: "Access SAP TRM system for deal entry, FX transactions, securities trading, hedge management, credit risk analysis." },
        { title: "Certification Exam Prep", description: "Prepare for the SAP TRM certification (C_TRM) using study guides, practice exams and targeted bootcamp sessions." },
        { title: "Resume & Interview Coaching", description: "Get one-on-one resume enhancement to show TRM expertise, mock consulting interviews, and coaching." },
        { title: "Complete Study Materials", description: "Access study materials such as pdfs, presentations, treasury configuration checklists, interview question bank, and templates." },
        { title: "Lifetime Recording Access", description: "Live sessions are recorded and then transcribed and indexed for easy revision and access to complex treasury topics for a lifetime." },
        { title: "Expert Q&A Sessions", description: "Join live Q&A for 60 minutes each week to discuss treasury concepts, guidance on financial system projects, and mentorship." }
    ],
    stats: [
        { value: "50", label: "Hours of Live Training", color: "orange" },
        { value: "50+", label: "Hands-On Financial Labs", color: "orange" },
        { value: "24/7", label: "SAP TRM Lab Access", color: "orange" }
    ]
};

const detailedTargetAudience = {
    type: 'detailed_target_audience',
    title: "Who Can Learn SAP TRM? – Perfect for Diverse Career Paths",
    subtitle: "This SAP TRM training is for those in various fields who are interested in global consulting and consulting implementation in treasury and financial systems.",
    items: [
        {
            title: "Finance and Treasury",
            description: [
                "Digital transformation for treasury managers who seek to understand SAP TRM systems.",
                "Analysts of finance who want to master cash management.",
                "Risk managers who want to gain consulting-level skills in SAP risk management."
            ],
            icon: "BarChart",
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "SAP and ERP Professionals",
            description: [
                "SAP consultants moving from FICO, MM or other modules.",
                "ERP system admins who want to have an advanced treasury system.",
                "Technical architects creating enterprise treasury systems.",
                "DBA who supports SAP financial systems."
            ],
            icon: "Server",
            color: "text-[#ff4500]",
            bg: "bg-[#ff4500]/10"
        },
        {
            title: "Banking and Financial Services",
            description: [
                "Bank operations leaders who are modernizing treasury functions.",
                "Risk analysts who want to work in enterprise risk management.",
                "Investment professionals with a technology focus.",
                "Compliance officers for treasury governance."
            ],
            icon: "Building",
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            title: "Recent Graduates and Career Changers",
            description: [
                "MBA Finance graduates who want to work with SAP.",
                "Accounting and finance professionals shifting to enterprise finance.",
                "IT professionals who want to work in financial consulting.",
                "Those who have a strong financial background and analytical skills in finance."
            ],
            icon: "GraduationCap",
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        {
            title: "Employees of Existing Clients of SAP TRM",
            description: [
                "Those who work with organizations that are implementing SAP TRM.",
                "Super-users wanting to be power users and internal trainers",
                "IT teams of organizations managing SAP TRM"
            ],
            icon: "Users",
            color: "text-indigo-600",
            bg: "bg-indigo-50"
        }
    ]
};

const detailedCurriculum = {
    type: 'detailed_curriculum',
    title: "Comprehensive SAP TRM Course Curriculum",
    subtitle: "50 hours of expert-led SAP TRM online training covering every aspect from basics to advanced treasury and risk management implementation",
    modules: [
        {
            title: "Module 1: Money Market Operations",
            duration: "8 Hours",
            learning_points: [
                "Overview of money market instruments and their role in corporate treasury",
                "Key features and benefits: liquidity optimization, cost management, and compliance",
                "SAP TRM interface navigation and money market system architecture",
                "Deal types: deposits, loans, commercial paper, and facility management",
                "Accrual, settlement, and month-end closing procedures"
            ],
            hands_on: [
                "Navigate SAP TRM Money Market module",
                "Create your first money market deal",
                "Set up interest accrual and settlement workflows",
                "Configure collective processing for multiple transactions"
            ]
        },
        {
            title: "Module 2: Foreign Exchange Operations",
            duration: "6 Hours",
            learning_points: [
                "Overview of FX management and its role in enterprise treasury",
                "Spot transactions, forwards, and exotic derivatives",
                "Netting procedures and currency exposure management",
                "ERP integration for FX operations",
                "Real-time FX reporting and exposure analytics"
            ],
            hands_on: [
                "Execute FX spot transactions",
                "Create forward contracts for physical and cash settlement",
                "Perform netting calculations and procedures",
                "Generate FX exposure reports"
            ]
        },
        {
            title: "Module 3: Securities Management",
            duration: "7 Hours",
            learning_points: [
                "Securities trading, custody, and portfolio management fundamentals",
                "Understanding the Steps Involved in Trading Securities and Managing Portfolios",
                "Trading and Managing Equity Securities and Corporate Actions",
                "Valuation of Portfolios and Marking to Market",
                "Performing Reconciliation with the SEC and Regulatory Compliance"
            ],
            hands_on: [
                "Trading in Securities",
                "Corporate Actions Processing and Dividends",
                "Valuation of Portfolios and Performance Reporting",
                "Preparation of Performance Reports for Securities"
            ]
        },
        {
            title: "Module 4: Derivatives Management",
            duration: "5 Hours",
            learning_points: [
                "Derivatives instruments and hedge accounting",
                "Understanding Derivative Instruments and Hedge Accounting",
                "Interest Rate Swaps, Currency Swaps, and Options",
                "Valuation of Derivative Instruments and Setting Market Data",
                "Testing Compliance and Effectiveness of Hedge",
                "Accounting the Economic Impact"
            ],
            hands_on: [
                "Set Up Derivative Instruments",
                "Calculate Hedge Effectiveness",
                "Perform Procedures for Settlement of Derivative Instruments",
                "Prepare Reports On Portfolios of Derivative Instruments"
            ]
        },
        {
            title: "Module 5: Credit Risk & Exposure Management",
            duration: "5 Hours",
            learning_points: [
                "Credit risk analytics and counterparty exposure management",
                "Understanding Credit Risks and Analysing Counterparty Exposure",
                "Limits and Exposure Calculation",
                "Preparation of Compliance Reporting and Monitoring of Risks",
                "Analysis of Scenarios and Stress Tests",
                "Counterparty Risk Assessment"
            ],
            hands_on: [
                "Set up Credit Limits by Counterparty",
                "Calculate Current and Potential Exposures",
                "Perform Procedures RKLNACHT",
                "Prepare and Document Reports On Credit Risk"
            ]
        },
        {
            title: "Module 6: Trade Finance & Bank Communication",
            duration: "4 Hours",
            learning_points: [
                "Trade finance instruments and bank integration",
                "Understanding Instruments of Trade Finance and Bank Integration",
                "Letters of Credit, and Guarantees",
                "Bank Communication Management (BCM)",
                "SWIFT Messaging",
                "Perform Automated Payment Procedures"
            ],
            hands_on: [
                "Set Up Workflows For Letter of Credit",
                "Establish bank communication protocols",
                "Create SWIFT messages",
                "Evaluate correspondence integration"
            ]
        },
        {
            title: "Module 7: Cash Management & In-House Cash",
            duration: "5 Hours",
            learning_points: [
                "Cash consolidation and liquidity optimization",
                "Optimizing consolidation and liquidity",
                "Understanding In-House Cash (IHC) structures",
                "Documentation of payment and receipt processes",
                "Inter-company netting and settlements",
                "Cash flow forecasting and optimization"
            ],
            hands_on: [
                "Design In-House Cash hierarchies",
                "Perform inter-company settlements",
                "Implement payment automation",
                "Generate cash positioning reports"
            ]
        },
        {
            title: "Module 8: Hedge Management & Accounting",
            duration: "6 Hours",
            learning_points: [
                "Hedge relationship management and accounting treatment",
                "Hedge designation and effectiveness assessment",
                "Exposure snapshots and quota management",
                "Financial reporting implications",
                "Compliance and audit requirements"
            ],
            hands_on: [
                "Create hedging areas and policies",
                "Designate hedge relationships",
                "Perform effectiveness testing",
                "Generate hedge accounting reports"
            ]
        },
        {
            title: "Module 9: Risk Analysis & Advanced Analytics",
            duration: "5 Hours",
            learning_points: [
                "Market risk, credit risk, and liquidity risk analytics",
                "Value-at-Risk (VaR) calculations",
                "Stress testing and scenario analysis",
                "Advanced reporting and dashboards",
                "Executive risk metrics and KPIs"
            ],
            hands_on: [
                "Run market risk analyzer scenarios",
                "Calculate VaR metrics",
                "Perform stress testing",
                "Create risk dashboards"
            ]
        },
        {
            title: "Module 10: Month-End Settlement & System Cutover",
            duration: "9 Hours",
            learning_points: [
                "Complete month-end treasury procedures and system implementation",
                "Accrual and deferral posting",
                "Non-current to current debt transfers",
                "Collective processing workflows",
                "Legacy system cutover and data migration",
                "Go-live procedures and reconciliation"
            ],
            hands_on: [
                "Execute complete month-end settlement",
                "Perform collective processing",
                "Execute data migration procedures",
                "Validate post-implementation reporting"
            ]
        }
    ]
};

async function updateTrm() {
    console.log("Fetching current TRM course...");
    const { data: course, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', 'trm')
        .single();

    if (error) {
        console.error("Error fetching course:", error);
        return;
    }

    let sections = course.sections || [];
    if (typeof sections === 'string') {
        sections = JSON.parse(sections);
    }

    const updateOrAddSection = (newSection) => {
        const idx = sections.findIndex(s => s.type === newSection.type);
        if (idx !== -1) {
            console.log(`Updating existing ${newSection.type}...`);
            sections[idx] = { ...sections[idx], ...newSection }; // Merge to keep existing props if any
        } else {
            console.log(`Adding new ${newSection.type}...`);
            sections.push(newSection);
        }
    };

    updateOrAddSection(whatsIncluded);
    updateOrAddSection(detailedTargetAudience);
    updateOrAddSection(detailedCurriculum);

    const { error: updateError } = await supabase
        .from('courses')
        .update({ sections: sections })
        .eq('id', 'trm');

    if (updateError) {
        console.error("Error updating course:", updateError);
    } else {
        console.log("Successfully updated TRM course content!");
    }
}

updateTrm();
