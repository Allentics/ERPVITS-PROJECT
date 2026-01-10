export interface BlogPost {
    id: string;
    title: string;
    description: string;
    content?: string;
    image?: string;
    date: string;
    category: string;
    author: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "sap-trm-master-data-essentials",
        title: "Laying the Foundation: Essential SAP TRM Master Data for Treasury Success",
        description: "Discover why accurate master data is the backbone of SAP Treasury and Risk Management (TRM). Learn key components, best practices, and configuration tips for treasury success.",
        image: "/images/SAP TRM Blog Image ERPVITS.webp",
        date: "Jan 10, 2026",
        category: "SAP TRM",
        author: "ERPVITS Expert"
    },
    {
        id: "sap-mm-course-complete-guide",
        title: "SAP MM Course: Complete Guide to Materials Management Professional Excellence",
        description: "Join the best SAP MM course at ERPVITS. Get certified with expert-led training in Materials Management, S/4HANA, and procurement. Enroll now!",
        image: "/images/blog/master-sap-mm-materials-management.webp",
        date: "Jan 07, 2026",
        category: "SAP MM",
        author: "ERPVITS Expert"
    },
    {
        id: "how-sap-ariba-is-powering-intelligent-spend-management",
        title: "Revolutionizing Procurement: How SAP Ariba is Powering Intelligent Spend Management in 2025",
        description: "Discover how SAP Ariba is transforming procurement with intelligent spend management in 2025. Boost your career with SAP Ariba training & certification.",
        image: "/images/blog/sap-ariba-spend-management.webp",
        date: "Jan 06, 2026",
        category: "SAP Ariba",
        author: "ERPVITS Expert"
    },

    {
        id: "how-sap-fieldglass-transforming-global-contingent-workforce-market",
        title: "How SAP Fieldglass is Transforming the Global Contingent Workforce Market",
        description: "Learn SAP Fieldglass online and master global contingent workforce management. Boost your SAP career with ERPVITS training and real-time projects.",
        image: "/images/blog/sap-fieldglass-transformation.webp",
        date: "Jan 04, 2026",
        category: "SAP Fieldglass",
        author: "ERPVITS Expert"
    },

    {
        id: "mto-and-sto-process-in-sap",
        title: "MTO & STO Process in SAP: Enhance Supply Chain Performance Through Integrated MM And SD Modules",
        description: "Discover the difference between the MTO and STO processes in SAP and how SAP MM & SD integration boosts supply chain efficiency with ERPVITS expert training.",
        image: "/images/blog/mto-sto-process.webp",
        date: "Jan 02, 2026",
        category: "SAP Functional",
        author: "ERPVITS Expert"
    },
    {
        id: "master-sap-ariba-with-industry-leading-online-training",
        title: "Master SAP Ariba with Industry-Leading Online Training",
        description: "Enhance your career with SAP Ariba training, focusing on procurement skills, hands-on projects, and job support for professionals.",
        image: "/images/blog/master-sap-ariba.webp",
        date: "Jan 01, 2026",
        category: "SAP Ariba",
        author: "ERPVITS Expert"
    },

    {
        id: "sap-ariba-sourcing-configuration",
        title: "SAP Ariba Sourcing Configuration Guide: Complete Setup & Best Practices",
        description: "Complete guide to configuring SAP Ariba Sourcing for optimal procurement. Learn setup steps, templates, workflows, integration, and best practices for strategic sourcing success.",


        image: "/images/sap-ariba-sourcing.webp",
        date: "Dec 27, 2025",
        category: "SAP Ariba",
        author: "ERPVITS Expert"
    },
    {
        id: "sap-fico-cash-journal-configuration",
        title: "Step-by-Step Cash Journal Configuration in SAP FICO",
        description: "Complete guide to Cash Journal Configuration in SAP FICO. Learn T-Codes, posting rules, and best practices for accurate cash management with hands-on configuration steps.",
        image: "/images/step-by-step-cash-journal-sap-fico.webp",
        date: "Dec 23, 2025",
        category: "SAP FICO",
        author: "ERPVITS Expert"
    },
    {
        id: "sap-tcodes-list-pdf",
        title: "SAP Transaction Codes (TCodes): Download Complete SAP TCodes List PDF",
        description: "Complete guide to SAP Transaction Codes with downloadable PDF. Learn 238+ essential TCodes across 14 modules including FI, MM, SD, PP, HR and all SAP modules with quick reference guide.",
        image: "/images/sap-tcodes-list-hero.webp",
        date: "Dec 22, 2025",
        category: "SAP Technical",
        author: "ERPVITS Expert"
    },
    {
        id: "sap-sd-process-flow",
        title: "SAP SD Process Flow: Complete Guide to Sales and Distribution Workflow",
        description: "Comprehensive guide to SAP SD process flow covering sales orders, delivery, billing, and payment. Master the complete order-to-cash cycle with transaction codes and best practices.",
        image: "/images/sap-sd-workflow.webp",
        date: "Dec 17, 2025",
        category: "SAP SD",
        author: "ERPVITS Expert"
    },
    {
        id: "sap-s4hana-mm-career-opportunities",
        title: "SAP S/4HANA MM Career Opportunities in India & Abroad",
        description: "Explore SAP S/4HANA MM career opportunities in India and abroad. Learn about roles, salaries, certification, and SAP online training benefits.",
        image: "/images/sap-s4hana-mm.webp",
        date: "Dec 13, 2025",
        category: "SAP Career",
        author: "ERPVITS Expert"
    },
    {
        id: "sap-ariba-supplier-login-tutorial",
        title: "SAP Ariba Supplier Login Tutorial: From Email Invitation to Portal Access",
        description: "Step-by-step guide for SAP Ariba supplier login, registration, and portal access. Learn how to navigate Ariba Network, manage buyer relationships, and optimize your supplier account.",
        image: "/images/sap-ariba-supplier-login.webp",
        date: "Dec 12, 2025",
        category: "SAP Ariba",
        author: "ERPVITS Expert"
    },
    {
        id: "sap-fieldglass-vs-traditional-vms",
        title: "SAP Fieldglass vs Traditional Vendor Management Systems (VMS): What Makes It Better?",
        description: "Discover why SAP Fieldglass is better than traditional VMS. Learn features, benefits & career scope. Enroll in SAP Fieldglass online training today.",
        image: "/images/sap-fieldglass-vs-vms.webp",
        date: "Dec 09, 2025",
        category: "SAP Fieldglass",
        author: "ERPVITS Expert"
    },
    {
        id: "sap-cpi-interview-questions",
        title: "SAP CPI Interview Questions & Answers: Complete Guide",
        description: "Comprehensive SAP CPI interview questions covering basic to advanced topics. Prepare for SAP Cloud Platform Integration interviews with real scenarios, best practices, and technical deep-dives.",
        image: "/images/sap-cpi-interview.webp",
        date: "Dec 05, 2025",
        category: "SAP CPI",
        author: "ERPVITS Expert"
    },
    {
        id: "top-10-sap-c4c-technical-scenarios",
        title: "Top 10 SAP C4C Technical Scenarios Every Consultant Should Know",
        description: "Explore key scenarios in SAP C4C Technical Training. Gain hands-on skills with ERPVITS SAP C4C online training & certification. Register now to advance your career.",
        image: "/images/Top 10 SAP C4C Technical Scenarios.webp",
        date: "Dec 03, 2025",
        category: "SAP C4C",
        author: "ERPVITS Expert"
    },
    {
        id: "high-paying-sap-fico-jobs",
        title: "High Paying SAP FICO Jobs: Skills, Salary, and Career Path",
        description: "Explore high-paying SAP FICO jobs, career paths, salary trends for 2026, and in-demand skills. Complete guide to SAP FICO consultant opportunities with certification details.",
        image: "/images/sap-fico-jobs.webp",
        date: "Nov 28, 2025",
        category: "SAP Career",
        author: "ERPVITS Expert"
    },
    {
        id: "top-7-sap-training-institutes",
        title: "Top 7 SAP Training Institutes in India: Comprehensive Review",
        description: "Looking for the best SAP training? Review of Top 7 SAP Training Institutes in India including Best Online Career, Henry Harvin, Udemy, ERPVITS, Visualpath, and more.",
        image: "/images/sap-training-institutes.webp",
        date: "Nov 25, 2025",
        category: "SAP Career",
        author: "ERPVITS Expert"
    },
    {
        id: "sap-trm-complementary-technologies",
        title: "SAP TRM Complementary Technologies for Modern Treasury and Risk Management",
        description: "Explore how SAP TRM integrates with analytics, automation, and compliance tools to enable real-time insights, risk control, and digital treasury transformation.",
        image: "/images/blog/sap-trm-complementary.webp",
        date: "Dec 18, 2025",
        category: "SAP TRM",
        author: "ERPVITS Expert"
    },








];

export function getBlogPost(id: string): BlogPost | undefined {
    return blogPosts.find(post => post.id === id);
}
