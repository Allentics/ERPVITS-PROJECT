import {
    trmTargetAudience,
    trmPrerequisites,
    trmLearningOutcomes,
    trmRealWorldScenarios
} from './contentHelpers';
import { Section } from './courseData';

export const trmContent = {
    heroHeading: "Master SAP TRM (Treasury and Risk Management) Training",
    badges: ["New Batch Starting Soon", "100% Job Oriented"],
    description: "The SAP Treasury and Risk Management (TRM) training course by ERPVITS is designed to help you master the end-to-end treasury processes in SAP S/4HANA. As businesses increasingly focus on liquidity management, financial risk mitigation, and regulatory compliance, the demand for skilled SAP TRM consultants is growing rapidly. This comprehensive course covers Transaction Manager, Risk Management, Exposure Management, and Hedge Management. Whether you are a FICO consultant looking to specialize or a finance professional moving into SAP, our TRM training provides the deep functional and configuration knowledge needed for success.",
    metaTitle: "SAP TRM Training Online | Treasury & Risk Management",
    metaDescription: "Become an SAP TRM expert with ERPVITS. Learn Transaction Manager, Risk Analyzers, and Hedge Management with real-world projects and certification support.",
    sections: [
        {
            type: 'detailed_features',
            title: "Why Professionals Choose ERPVITS for SAP TRM Online Training",
            items: [
                "Trusted by 350+ successful SAP Treasury Consultants",
                "Alumni at Big 4 firms and major financial institutions",
                "Tailored learning path for FICO consultants and domain experts",
                "Active treasury community and alumni network",
                "35+ guided lab exercises on real-time treasury scenarios",
                "Materials updated for SAP S/4HANA Treasury innovations",
                "Mock interviews simulating real-world client requirements",
                "Dedicated certification preparation sessions"
            ]
        },
        {
            type: 'detailed_curriculum',
            title: "Comprehensive SAP TRM Course Curriculum",
            modules: [
                {
                    title: "Module 1: Introduction to SAP Treasury (3 Hours)",
                    topics: [
                        "Overview of Corporate Treasury functions",
                        "SAP TRM Architecture and Integration with FI",
                        "Business Partners and Role Management in Treasury",
                        "House Banks and Bank Account Management (BAM)",
                        "Treasury User roles and Fiori Apps"
                    ]
                },
                {
                    title: "Module 2: Transaction Manager - General Settings (5 Hours)",
                    topics: [
                        "Product Types and Transaction Types",
                        "Flow Types and Condition Types",
                        "Portfolios and Traders",
                        "Limit Management Basics",
                        "Audit Trail and Authorization Concepts"
                    ]
                },
                {
                    title: "Module 3: Money Market & Foreign Exchange (8 Hours)",
                    topics: [
                        "Fixed Term Deposits and Deposit at Notice",
                        "Commercial Papers and Cash Flow viewing",
                        "Forex Spot and Forward transactions",
                        "Forex Swaps and NDFs",
                        "Back office processing (Settlement, Correspondence)",
                        "Accounting integration and TBB1 posting"
                    ]
                },
                {
                    title: "Module 4: Derivatives & Securities (6 Hours)",
                    topics: [
                        "Interest Rate Swaps and Cross Currency Swaps",
                        "Caps, Floors, and Collars",
                        "Security classes and Master Data",
                        "Purchase and Sale of Bonds/Stocks",
                        "Corporate actions handling",
                        "Valuation classes and Position Management"
                    ]
                },
                {
                    title: "Module 5: Risk Management & Exposure (6 Hours)",
                    topics: [
                        "Market Risk Analyzer principles",
                        "Credit Risk Analyzer (Limit Management)",
                        "Exposure Management 2.0 configuration",
                        "Raw and Operating Exposures",
                        "Netting and Aggregation of exposures",
                        "Value at Risk (VaR) calculation basics"
                    ]
                },
                {
                    title: "Module 6: Hedge Management & Accounting (5 Hours)",
                    topics: [
                        "Hedge Management cockpit",
                        "Hedge Accounting for Exposures (E-Hedge)",
                        "Effectiveness Testing (Prospective/Retrospective)",
                        "Hedge Documentation and Classification",
                        "IFRS 9 / US GAAP compliance settings"
                    ]
                },
                {
                    title: "Module 7: Reporting & Month End Process (4 Hours)",
                    topics: [
                        "Treasury Dashboard and Fiori Reports",
                        "Key Performance Indicators (KPIs)",
                        "Month-end valuation (TPM1)",
                        "Accrual/Deferral (TPM44)",
                        "Reclassification and realized gains/losses",
                        "Period closing activities"
                    ]
                },
                {
                    title: "Module 8: Advanced Topics & Real-world Scenarios (3 Hours)",
                    topics: [
                        "Cash Management integration (Basic)",
                        "In-House Cash (IHC) overview",
                        "Trade Finance (Letters of Credit, Guarantees)",
                        "Data Migration strategies for Treasury",
                        "Troubleshooting common errors"
                    ]
                }
            ]
        },
        {
            type: 'detailed_prerequisites',
            title: "SAP TRM Training Prerequisites",
            items: trmPrerequisites
        },
        {
            type: 'detailed_target_audience',
            title: "Who Should Learn SAP TRM?",
            items: trmTargetAudience
        },
        {
            type: 'detailed_learning_outcomes',
            title: "What You Will Master",
            items: trmLearningOutcomes
        },
        {
            type: 'real_world_scenarios',
            title: "Real-World SAP TRM Scenarios",
            items: trmRealWorldScenarios
        },
        {
            type: 'detailed_certification',
            title: "SAP TRM Certification – Validate Your Treasury Expertise",
            subtitle: "We provide complete support for C_S4FTR_2021 / 2020 (SAP Certified Application Associate - Treasury with S/4HANA) exam.",
            badge: "Gold Standard",
            content: "Certification proves your ability to configure and manage financial risk and treasury operations in SAP S/4HANA. It is a key differentiator for functional consultants.",
            items: [
                {
                    title: "Exam Guide",
                    description: "Comprehensive breakdown of exam domains, questions, and timing."
                },
                {
                    title: "Practice Questions",
                    description: "Access to a bank of questions covering Transaction Manager, Risk Analyzers, and Accounting."
                },
                {
                    title: "Configuration Review",
                    description: "Deep dive sessions into critical configuration nodes often tested in the exam."
                },
                {
                    title: "Placement Assistance",
                    description: "Priority access to SAP Treasury job openings through our network."
                }
            ]
        },
        {
            type: 'detailed_career_opportunities',
            title: "Career Paths After SAP TRM Training",
            items: [
                {
                    role: "SAP TRM Consultant",
                    salary: "₹12L - ₹22L",
                    description: "Implement and support SAP Treasury solutions for clients."
                },
                {
                    role: "Treasury System Analyst",
                    salary: "₹10L - ₹18L",
                    description: "Manage internal treasury systems and data interfaces."
                },
                {
                    role: "Financial Risk Manager",
                    salary: "₹15L - ₹25L",
                    description: "Use SAP to analyze and mitigate financial risks."
                },
                {
                    role: "SAP S/4HANA Finance Lead",
                    salary: "₹25L - ₹40L",
                    description: "Lead large-scale finance transformation projects including Treasury."
                }
            ]
        },
        {
            type: 'detailed_testimonials',
            title: "Learner Success Stories",
            items: [
                {
                    name: "Rahul Sharma",
                    role: "Senior Consultant at Deloitte",
                    quote: "The Hedge Management module was explained beautifully. I finally understood the IFRS 9 implications in SAP.",
                    image: "/images/testimonials/rahul-trm.webp"
                },
                {
                    name: "Priya Patel",
                    role: "Finance Manager",
                    quote: "I came from a banking background with no SAP knowledge. The trainer bridged the gap between domain and system perfectly.",
                    image: "/images/testimonials/priya-trm.webp"
                },
                {
                    name: "David Ross",
                    role: "SAP FICO Consultant",
                    quote: "Adding TRM to my skill set has opened so many doors. The integration with FI was covered in great detail.",
                    image: "/images/testimonials/david-trm.webp"
                }
            ]
        },
        {
            type: 'detailed_demo_booking',
            title: "Experience the Training Before You Commit",
            subtitle: "Join a free live demo session to interact with our expert trainers, see the system, and understand how we can help you achieve your career goals.",
            link: "/book-demo"
        },
        {
            type: 'detailed_faq',
            title: "Frequently Asked Questions",
            items: [
                { q: "What is SAP TRM?", a: "SAP Treasury and Risk Management (TRM) is a module within SAP S/4HANA Finance used to manage financial transactions, risks, and liquidity. It handles investments, debt, forex, and derivatives." },
                { q: "Who can learn SAP TRM?", a: "This course is ideal for SAP FICO consultants, Finance managers, Chartered Accountants, and MBA Finance graduates who want to specialize in Treasury systems." },
                { q: "Do I need FICO knowledge?", a: "Basic knowledge of SAP FICO (General Ledger, AP/AR) is highly recommended as TRM is tightly integrated with Financial Accounting. However, we cover the necessary basics." },
                { q: "What products are covered in the course?", a: "We cover Money Market (Deposits, CPs), Foreign Exchange (Spot, Forward, Swap), Derivatives (Swaps, Caps/Floors), and Securities (Bonds, Stocks)." },
                { q: "Does the course cover Risk Management?", a: "Yes, we cover both Market Risk Analyzer (for valuation and VaR) and Credit Risk Analyzer (for counterparty limit management)." },
                { q: "Is Hedge Accounting included?", a: "Yes, we cover the Hedge Management cockpit and the configuration required for Hedge Accounting under IFRS 9 / US GAAP." },
                { q: "How do I practice?", a: "We provide server access to an SAP S/4HANA system where you can configure the system and post transactions during the lab sessions." },
                { q: "What is the job market for TRM?", a: "SAP TRM is a niche and high-value skill. Consultants with TRM expertise often command higher rates than general FICO consultants due to the specialized nature of the work." },
                { q: "Do you provide certification support?", a: "Yes, we guide you through the syllabus for the SAP Certified Application Associate - Treasury with SAP S/4HANA exam." }
            ]
        }
    ],
    schema: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Course",
        "name": "SAP TRM Online Training",
        "description": "Master SAP Treasury and Risk Management (TRM) with ERPVITS. Learn Transaction Manager, Risk Analyzers, and Hedge Management through real-world projects and expert training.",
        "provider": {
            "@type": "Organization",
            "name": "ERPVITS",
            "url": "https://www.erpvits.com",
            "logo": "https://www.erpvits.com/images/erpvits-logo.webp"
        },
        "url": "https://www.erpvits.com/sap-trm-online-training/",
        "image": "https://www.erpvits.com/images/erpvits-logo.webp",
        "audience": {
            "@type": "Audience",
            "audienceType": ["SAP FICO Consultants", "Finance Professionals", "Treasury Analysts", "CA/MBA Finance"]
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "courseWorkload": "PT40H"
        }
    })
};
