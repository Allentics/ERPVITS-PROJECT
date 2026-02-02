const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// --- DATA DEFINITIONS ---

const realWorldScenarios = {
    type: 'real_world_scenarios',
    title: "Experience Real-World SAP TRM Scenarios & Business Case Studies",
    items: [
        {
            title: "Global Corporation's Cash Consolidation & Treasury Transformation",
            scenario: "A multinational manufacturer with 15 countries of business operation is to define and consolidate the treasury operation and implement a centralized key cash flow management. The corporation is to implement SAP TRM with a focus to achieve liquidity optimization, real-time compliance.",
            role: "Lead SAP TRM Consultant",
            outcome: "Deliverables: Configuration documents, treasury procedure manuals, go-live checklist."
        },
        {
            title: "Banking Institution's Risk Management & Derivatives Platform",
            scenario: "A banking institution needs to implement SAP TRM for derivatives trading, hedge accounting, and real-time market risk monitoring. They are replacing legacy systems with SAP to achieve operational efficiencies.",
            role: "You will develop derivatives workflow and instrument setup",
            outcome: "Deliverables: Derivatives configuration specs, risk framework documents."
        },
        {
            title: "Investment Fund's Securities Management & Portfolio Analytics",
            scenario: "An asset management firm using SAP TRM for multitier level securities trading, managing funds and performance analytics. They are looking to streamline operations and improve their reporting.",
            role: "You will set up securities trading and settlement workflow",
            outcome: "Deliverables: Securities configuration specs, documents for portfolio management procedures."
        }
    ]
};

const detailedCertification = {
    type: 'detailed_certification',
    title: "SAP TRM Certification – Your Global Career Credential",
    items: [
        {
            title: "SAP Certified Application Associate – SAP Treasury and Risk Management",
            code: "C_TRM_UPD_1909 (or current equivalent)",
            focus: "Treasury operations, risk management, financial instruments, system configuration",
            who: "Entry to mid-level consultant positions in treasury and financial systems",
            relevance: "Demonstrates expertise in end-to-end SAP TRM implementation"
        }
    ],
    benefits: [
        { title: "Global Certification Recognition", description: "Employers, banks, and recruitment agencies all over the world recognize SAP certifications.", icon: "Globe" },
        { title: "Career Growth", description: "Certified professionals earn 20–35% more than their non-certified counterparts.", icon: "TrendingUp" },
        { title: "Market Edge", description: "Your applications for jobs in the financial services and proposals for treasury consulting will have a better chance of success.", icon: "Award" },
        { title: "Active Participation", description: "Certification encourages you to learn all aspects of treasury operations.", icon: "Users" },
        { title: "Trustworthiness", description: "It indicates to clients and banks that you have accomplished tough treasury requirements.", icon: "CheckCircle2" }
    ],
    imageSrc: "/images/ERPVITS - All Modules Infographics/ERPVITS - SAP TRM Infographic.webp"
};

const detailedCareerOpportunities = {
    type: 'detailed_career_opportunities',
    title: "Career Opportunities After SAP TRM Training",
    items: [
        {
            title: "SAP TRM Consultant (Entry Level)",
            salary: "$120,000–$155,000 (USA) | ₹9,00,000–₹13,00,000 (India)",
            responsibilities: "Configure TRM modules, manage treasury implementations, support end-users",
            employers: "Accenture, Capgemini, Deloitte, EY, KPMG, Infosys, Wipro",
            path: "2–3 years → Senior TRM Consultant"
        },
        {
            title: "Treasury Operations Manager / Financial Systems Lead",
            salary: "$140,000–$190,000 (USA) | ₹12,00,000–₹18,00,000 (India)",
            responsibilities: "Lead TRM implementations, manage treasury systems teams, optimize financial processes",
            employers: "Banking, Financial Services, Large Corporations",
            path: "3–5 years → Treasury Director or VP Finance"
        },
        {
            title: "Risk Analytics Specialist / Credit Risk Manager",
            salary: "$135,000–$180,000 (USA) | ₹11,00,000–₹16,00,000 (India)",
            responsibilities: "Manage credit risk framework, implement risk analytics, oversee exposure monitoring",
            employers: "Banking, Financial Services, Asset Management",
            path: "3–5 years → Senior Risk Manager or Chief Risk Officer"
        },
        {
            title: "SAP TRM Integration Consultant",
            salary: "$150,000–$210,000 (USA) | ₹14,00,000–₹20,00,000 (India)",
            responsibilities: "Integrate SAP TRM with S/4HANA and banking systems, manage data flows",
            employers: "Consulting, Financial Technology, Banks",
            path: "4–6 years → Senior Integration Architect or Solutions Architect"
        },
        {
            title: "Solutions Architect – Treasury & Financial Risk Solutions",
            salary: "$190,000–$280,000+ (USA) | ₹18,00,000–₹28,00,000+ (India)",
            responsibilities: "Design enterprise treasury solutions, lead large-scale implementations, advise on financial strategy",
            employers: "Consulting, Banking, Financial Services",
            path: "7+ years → Principal Consultant, Treasury Practice Lead"
        }
    ]
};

const detailedLearningOutcomes = {
    type: 'detailed_learning_outcomes',
    title: "What You'll Master in This SAP TRM Online Course – Core Competencies",
    items: {
        tabs: [
            {
                name: "Functional Mastery",
                items: [
                    {
                        title: "End-to-End Treasury Lifecycle Management",
                        points: [
                            "Set up and manage complete work processes of money market deal flows",
                            "Perform treasury transactions of all asset classes",
                            "Set up and control treasury governance",
                            "Maintain audit readiness and document compliance."
                        ]
                    },
                    {
                        title: "Foreign Exchange & Multi-Currency Management",
                        points: [
                            "Administer and complete the life cycle of an FX deal: spot, forwards, and exotic derivatives",
                            "Set up and manage netting and control systems for managing currency exposure.",
                            "Administer and control FX risk and compliance.",
                            "Conduct updating analytics of FX and exposure reporting."
                        ]
                    },
                    {
                        title: "Securities Trading & Portfolio Management",
                        points: [
                            "Create and execute workflows for trading and settlement of securities.",
                            "Initialize actions at a company's securities and evaluate portfolio valuation.",
                            "Setup and ordinance of the dematerialized account and custody.",
                            "Create reports within and analytics for Performance and Compliance of the portfolio."
                        ]
                    },
                    {
                        title: "Derivatives & Hedge Accounting Management",
                        points: [
                            "Configure and manage accounting for derivatives and related hedge.",
                            "Create and manage derivative accounting and funds reporting.",
                            "Manage and audit hedge accounting and regulatory compliance.",
                            "Create and manage audit trails for hedge accounting."
                        ]
                    }
                ]
            },
            {
                name: "Technical Skills",
                items: [
                    {
                        title: "Credit Risk & Limit Management",
                        points: [
                            "Establish counterparty credit limits and exposure frameworks",
                            "Calculate current and potential exposures",
                            "Implement credit risk monitoring and reporting",
                            "Execute stress testing and scenario analysis"
                        ]
                    },
                    {
                        title: "SAP TRM Integration & System Architecture",
                        points: [
                            "Integrate SAP TRM with SAP S/4HANA FICO and other modules",
                            "Configure market data feeds and external connectivity",
                            "Manage data flows and system reconciliation",
                            "Troubleshoot integration issues and optimize performance"
                        ]
                    },
                    {
                        title: "Cash Management & Liquidity Optimization",
                        points: [
                            "Design In-House Cash consolidation structures",
                            "Implement payment automation and bank communication",
                            "Manage inter-company netting and settlements",
                            "Execute cash flow forecasting and optimization"
                        ]
                    },
                    {
                        title: "Advanced Analytics & Executive Reporting",
                        points: [
                            "Create market risk, credit risk, and liquidity dashboards",
                            "Generate Value-at-Risk (VaR) and stress testing reports",
                            "Build executive KPI reporting and compliance dashboards",
                            "Leverage analytics for strategic treasury decision-making"
                        ]
                    }
                ]
            }
        ]
    }
};

const detailedPostTrainingJourney = {
    type: 'detailed_post_training_journey',
    title: "What to Expect After Completing SAP TRM Training",
    items: [
        {
            timeline: "Immediate Post-Training (Week 1-6)",
            title: "Certification & Job Readiness",
            points: [
                "Receive certificate",
                "Access lifetime materials",
                "Apply for certification",
                "Begin interview prep"
            ]
        },
        {
            timeline: "Month 2-3",
            title: "Placement & First Role",
            points: [
                "Mock interviews",
                "Resume feedback",
                "Client interviews",
                "Receive offer"
            ]
        },
        {
            timeline: "First Year in Role",
            title: "On-the-Job Growth",
            points: [
                "Shadowing seniors",
                "Handling small tickets",
                "First implementation project",
                "Building confidence"
            ]
        },
        {
            timeline: "Long-Term Growth",
            title: "Career Advancement",
            points: [
                "Lead Consultant",
                "Solution Architect",
                "Project Manager",
                "Treasury Director"
            ]
        }
    ]
};

const faqs = [
    {
        q: "How is ERPVITS helping you to understand what SAP TRM is?",
        a: "SAP TRM is an enterprise solution handling treasury, risk management, and financial instruments. ERPVITS offers integrated training with practical treasury lessons, financial workflows, hands-on practice, and guided projects to help learners master TRM systems."
    },
    {
        q: "What will I learn in the SAP TRM Money Market module?",
        a: "The Money Market module covers SAP TRM systems for processing money market deals, interest accruals, settlements, month-end activities, and management of deposits, loans, and commercial papers."
    },
    {
        q: "What is the SAP TRM Foreign Exchange module?",
        a: "The Forex module includes SAP TRM systems for managing spot transactions, forwards, netting, and overall currency exposure. ERPVITS guides you through FIN FX configuration, settlements, and real-time currency risk handling."
    },
    {
        q: "What are SAP TRM Credit Risk and Derivatives capabilities?",
        a: "ERPVITS covers Credit Risk, exposure and limit monitoring, counterparty management, derivative instruments, hedge accounting, and risk analysis for enterprise financial risk management."
    },
    {
        q: "What are the features of SAP TRM in the context of modern treasury operations?",
        a: "SAP TRM offers deal processing, cash management, risk monitoring, and compliance. ERPVITS provides hands-on financial implementation exposure with real TRM workflows."
    },
    {
        q: "What are the training features of ERPVITS for SAP TRM?",
        a: "ERPVITS offers live online sessions, industry-aligned financial projects, and placement support. Learners also receive certification support, resume workshops, and interview coaching."
    },
    {
        q: "Who is the intended audience for the SAP TRM Course?",
        a: "The SAP TRM Course at ERPVITS is ideal for finance professionals, ERP consultants, and newcomers aiming to build expertise in treasury, risk management, and SAP financial systems."
    },
    {
        q: "What is SAP TRM Certification and why is it important?",
        a: "SAP TRM Certification validates your skills in treasury operations and risk management. ERPVITS prepares learners to successfully achieve SAP TRM certification through guided training and mock exams."
    },
    {
        q: "What are the fees for the SAP TRM courses at ERPVITS?",
        a: "ERPVITS offers competitively priced SAP TRM courses at ₹45,000. Pricing may vary by program mode, including online and live instructor-led sessions, with added benefits like placement and certification support."
    },
    {
        q: "What is the cost for the SAP TRM Certification?",
        a: "The SAP TRM Certification cost is set by SAP Education. ERPVITS assists learners with exam preparation, mock tests, and mentorship to help them clear the certification exam on the first attempt."
    },
    {
        q: "How can I become an ERPVITS SAP TRM Consultant?",
        a: "To become an SAP TRM Consultant, enroll in ERPVITS’s SAP TRM Training Program, complete real-time projects, and prepare for certification. ERPVITS provides job assistance and career guidance to secure TRM Consultant roles."
    },
    {
        q: "What can you do after completing the TRM course?",
        a: "After completing SAP TRM training, you can pursue roles like TRM Consultant, Treasury Operations Manager, Risk Analyst, or Finance Systems Specialist. ERPVITS supports learners with placement and job referrals."
    },
    {
        q: "How does SAP TRM integrate with SAP S/4HANA?",
        a: "ERPVITS provides in-depth training on integrating SAP TRM with SAP S/4HANA FICO and other modules using modern cloud-based techniques and real financial data flow demonstrations."
    },
    {
        q: "What are the main SAP TRM functional areas covered in the course?",
        a: "The course covers all key SAP TRM areas — Money Market, Foreign Exchange, Securities, Derivatives, Credit Risk, Cash Management, and Hedge Accounting — with real financial use cases."
    },
    {
        q: "What is SAP TRM pricing and how does it work for organizations?",
        a: "SAP TRM pricing depends on implementation scope and transaction volume. ERPVITS provides training on TRM licensing, pricing structure, and ROI estimation for organizations."
    },
    {
        q: "Does ERPVITS provide SAP TRM Training with Placement Support?",
        a: "Yes, ERPVITS provides SAP TRM Training with full placement support, helping you prepare resumes, develop consulting profiles, and connect with top finance recruiters."
    },
    {
        q: "Can I take SAP TRM Online Training from anywhere?",
        a: "Yes, ERPVITS offers SAP TRM Online Training that you can attend from anywhere. Sessions are live, recorded, and supported by remote system access for hands-on practice."
    },
    {
        q: "Can I find SAP TRM Training close to my location?",
        a: "Yes, ERPVITS offers both online and offline SAP TRM training. You can attend virtual classes or in-person sessions conducted for working professionals on weekdays and weekends."
    },
    {
        q: "How does ERPVITS assist in advancing a career in Treasury & TRM?",
        a: "ERPVITS supports career advancement by offering resume-building, interview preparation, and job referrals to top financial consulting firms and banks for SAP TRM roles."
    },
    {
        q: "What is the SAP TRM Full Form?",
        a: "The full form of SAP TRM is SAP Treasury and Risk Management. It is a module within SAP that helps organizations manage financial transactions, liquidity, investments, and risks efficiently."
    }
];

// --- MAIN FUNCTION ---

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
            sections[idx] = { ...sections[idx], ...newSection };
        } else {
            console.log(`Adding new ${newSection.type}...`);
            sections.push(newSection);
        }
    };

    updateOrAddSection(realWorldScenarios);
    updateOrAddSection(detailedCertification);
    updateOrAddSection(detailedCareerOpportunities);
    updateOrAddSection(detailedLearningOutcomes);
    updateOrAddSection(detailedPostTrainingJourney);

    const { error: updateError } = await supabase
        .from('courses')
        .update({
            sections: sections,
            faqs: faqs
        })
        .eq('id', 'trm');

    if (updateError) {
        console.error("Error updating course:", updateError);
    } else {
        console.log("Successfully updated TRM course content for Tabs 9-14!");
    }
}

updateTrm();
