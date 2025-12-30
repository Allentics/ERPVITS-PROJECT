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
        id: "sap-ariba-sourcing-configuration",
        title: "SAP Ariba Sourcing Configuration Guide: Complete Setup & Best Practices",
        description: "Complete guide to configuring SAP Ariba Sourcing for optimal procurement. Learn setup steps, templates, workflows, integration, and best practices for strategic sourcing success.",
        image: "images\sap-abap-cloud-tips.png",
        date: "Dec 27, 2025",
        category: "SAP Ariba",
        author: "ERPVITS Expert"
    },
    {
        id: "sap-fico-cash-journal-configuration",
        title: "Step-by-Step Cash Journal Configuration in SAP FICO",
        description: "Complete guide to Cash Journal Configuration in SAP FICO. Learn T-Codes, posting rules, and best practices for accurate cash management with hands-on configuration steps.",
        image: "/images/sap-fico-cash-journal.png",
        date: "Dec 23, 2025",
        category: "SAP FICO",
        author: "ERPVITS Expert"
    },
    {
        id: "sap-tcodes-list-pdf",
        title: "SAP Transaction Codes (TCodes): Download Complete SAP TCodes List PDF",
        description: "Complete guide to SAP Transaction Codes with downloadable PDF. Learn 238+ essential TCodes across 14 modules including FI, MM, SD, PP, HR and all SAP modules with quick reference guide.",
        image: "/images/sap-tcodes-list.png",
        date: "Dec 22, 2025",
        category: "SAP Technical",
        author: "ERPVITS Expert"
    },
    {
        id: "sap-sd-process-flow",
        title: "SAP SD Process Flow: Complete Guide to Sales and Distribution Workflow",
        description: "Comprehensive guide to SAP SD process flow covering sales orders, delivery, billing, and payment. Master the complete order-to-cash cycle with transaction codes and best practices.",
        image: "/images/sap-sd-process-flow.png",
        date: "Dec 17, 2025",
        category: "SAP SD",
        author: "ERPVITS Expert"
    },
    {
        id: "sap-s4hana-mm-career-opportunities",
        title: "SAP S/4HANA MM Career Opportunities in India & Abroad",
        description: "Explore SAP S/4HANA MM career opportunities in India and abroad. Learn about roles, salaries, certification, and SAP online training benefits.",
        image: "/images/sap-s4hana-mm-career.png",
        date: "Dec 13, 2025",
        category: "SAP Career",
        author: "ERPVITS Expert"
    },
    {
        id: "sap-ariba-supplier-login-tutorial",
        title: "SAP Ariba Supplier Login Tutorial: From Email Invitation to Portal Access",
        description: "Step-by-step guide for SAP Ariba supplier login, registration, and portal access. Learn how to navigate Ariba Network, manage buyer relationships, and optimize your supplier account.",
        image: "/images/sap-ariba-supplier-login.png",
        date: "Dec 12, 2025",
        category: "SAP Ariba",
        author: "ERPVITS Expert"
    },
    {
        id: "sap-fieldglass-vs-traditional-vms",
        title: "SAP Fieldglass vs Traditional Vendor Management Systems (VMS): What Makes It Better?",
        description: "Discover why SAP Fieldglass is better than traditional VMS. Learn features, benefits & career scope. Enroll in SAP Fieldglass online training today.",
        image: "/images/sap-fieldglass-vms.png",
        date: "Dec 09, 2025",
        category: "SAP Fieldglass",
        author: "ERPVITS Expert"
    },
    {
        id: "sap-cpi-interview-questions",
        title: "SAP CPI Interview Questions & Answers: Complete Guide",
        description: "Comprehensive SAP CPI interview questions covering basic to advanced topics. Prepare for SAP Cloud Platform Integration interviews with real scenarios, best practices, and technical deep-dives.",
        image: "/images/sap-cpi-interview.png",
        date: "Dec 05, 2025",
        category: "SAP CPI",
        author: "ERPVITS Expert"
    },
    {
        id: "top-10-sap-c4c-technical-scenarios",
        title: "Top 10 SAP C4C Technical Scenarios Every Consultant Should Know",
        description: "Explore key scenarios in SAP C4C Technical Training. Gain hands-on skills with ERPVITS SAP C4C online training & certification. Register now to advance your career.",
        image: "/images/sap-c4c-scenarios.png",
        date: "Dec 03, 2025",
        category: "SAP C4C",
        author: "ERPVITS Expert"
    },
    {
        id: "high-paying-sap-fico-jobs",
        title: "High Paying SAP FICO Jobs: Skills, Salary, and Career Path",
        description: "Explore high-paying SAP FICO jobs, career paths, salary trends for 2026, and in-demand skills. Complete guide to SAP FICO consultant opportunities with certification details.",
        image: "/images/sap-fico-jobs.png",
        date: "Nov 28, 2025",
        category: "SAP Career",
        author: "ERPVITS Expert"
    },
    {
        id: "top-7-sap-training-institutes",
        title: "Top 7 SAP Training Institutes in India: Comprehensive Review",
        description: "Looking for the best SAP training? Review of Top 7 SAP Training Institutes in India including Best Online Career, Henry Harvin, Udemy, ERPVITS, Visualpath, and more.",
        image: "/images/sap-training-institutes.png",
        date: "Nov 25, 2025",
        category: "SAP Career",
        author: "ERPVITS Expert"
    }
    ,







];

export function getBlogPost(id: string): BlogPost | undefined {
    return blogPosts.find(post => post.id === id);
}
