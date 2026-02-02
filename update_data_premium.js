const fs = require("fs");
const courses = require("./courses.json");

// premium content from user request
const premiumCourses = {
    "ariba": {
        duration: "45-50 hours",
        price: "45,000/- INR",
        heroHeading: "Transform Your Career with the #1 SAP Ariba Online Training Program",
        description: "Learn all modules of Ariba including Upstream, Downstream, Integration, SSC, Commerce Automation, Guided Buying, Guided Sourcing, SLP, and CIG with industry experts to develop skills in procurement, sourcing, and supplier collaboration to advance your career and certification in SAP Ariba.\n\nMaster SAP Ariba Procurement, Sourcing, and Supply Chain Collaboration with 100% hands-on training, real-world projects, and global SAP certification support from certified experts.",
        features: [
            "12+ Years Expert Instructors",
            "100% Hands-On Training",
            "SAP Certification Support",
            "Real-World Projects",
            "Trusted by 500+ Successful Students"
        ]
    },
    "fico": {
        duration: "40-45 hours",
        price: "40,000/- INR",
        heroHeading: "Transform Your Career with the #1 SAP FICO Online Training Program",
        description: "Master SAP Financial Accounting (FI) and Controlling (CO) with real-time, hands-on training provided by experts. Elevate your career and prepare for SAP FICO certification by mastering real-time finance processes including GL, Accounts Payable, Accounts Receivable, Asset Accounting, and Cost Control.",
        features: [
            "12+ Years Expert Instructors",
            "Real-Time Finance Scenarios",
            "Certification Exam Support",
            "Placement Assistance",
            "Lifetime Recording Access"
        ]
    },
    "mm": {
        duration: "40-45 hours",
        price: "45,000/- INR",
        heroHeading: "Upskill Your Career with SAP S/4HANA MM Online Training",
        description: "With real-time, hands-on training by experts, master all functions of Materials Management (MM) and streamline your supply chain including procurement, inventory management, material valuation, vendor management, and invoice verification and prepare for SAP MM certification.",
        features: [
            "Supply Chain Expert Trainers",
            "Hands-On Inventory Projects",
            "S/4HANA Integration Scenarios",
            "Job-Oriented Curriculum",
            "Mock Interviews & Resume Prep"
        ]
    },
    "trm": {
        duration: "45-50 hours",
        price: "45,000/- INR",
        heroHeading: "Master the Future of Corporate Treasury with SAP TRM Online Training",
        description: "Master SAP Treasury and Risk Management and learn practical skills in cash management, liquidity forecasting, financial risk analysis, and hedge management to optimize corporate finance and prepare for SAP TRM certification.",
        features: [
            "Banking & Treasury Projects",
            "Risk Management Scenarios",
            "FX & Hedge Management",
            "Certified Treasury Experts",
            "End-to-End Configuration Labs"
        ]
    },
    "btp": {
        duration: "40-45 hours",
        price: "45,000/- INR",
        heroHeading: "Master Enterprise Integration with SAP BTP Training",
        description: "Learn enterprise integration and cloud architecture on SAP's unified platform and built for developers, architects, and integration specialists. Be mentored by cloud experts at leading cloud-native companies and learn to master the future of enterprise technology.",
        features: [
            "Cloud Integration Patterns",
            "Extension Suite Development",
            "Real-Time Cloud Projects",
            "Integration Architect Mentors",
            "Latest Service Updates"
        ]
    },
    "analytics-cloud": { // sac
        duration: "40-45 hours",
        price: "45,000/- INR",
        heroHeading: "Master Data Visualization with SAP Analytics Cloud",
        description: "Acquire SAP Analytics Cloud skills through guided, practical exercises, including building interactive dashboards, data models, visualizations, performing forecasts, and deriving actionable insights from real-time data. Attain proficiency in Business Intelligence, Planning, and Predictive Analytics to set the stage for SAP SAC certification.",
        features: [
            "Interactive Dashboard Labs",
            "Predictive Analytics Models",
            "Planning & Budgeting Scenarios",
            "Real-Time Data Connections",
            "Certification Focused Training"
        ]
    }
};

const technicalIds = ['abap-cloud', 'abap-hana', 'cpi', 'btp', 'c4c-technical', 'analytics-cloud'];

const finalCourses = courses.map(c => {
    let newC = { ...c };

    // Apply Premium Data if exists
    if (premiumCourses[c.id]) {
        const p = premiumCourses[c.id];
        newC.heroHeading = p.heroHeading || c.heroHeading;
        newC.description = p.description;
        newC.features = p.features;
        // Extend object with new fields if we add them to interface later
        newC.duration = p.duration;
        newC.price = p.price;
    } else {
        // Cleaning for others
        // Remove "H1:", "H2:", "Template:" from headings/desc
        if (newC.heroHeading) newC.heroHeading = newC.heroHeading.replace(/^H1[:\s]*/, "").replace(/Template\s*\d+[:\s]*/i, "");
        if (newC.description) {
            // Remove blog-like titles often found at start
            newC.description = newC.description
                .replace(/^Template\s*\d+.*?\n+/i, "")
                .replace(/^Master Why.*?Matters.*?\n+/i, "")
                .replace(/^H\d+:.*?\n+/gm, "") // Remove H2: lines in desc
                .replace(/\[Book Your Free Demo Class\].*?\[View Curriculum\]/i, "")
                .trim();
        }
    }

    newC.category = technicalIds.includes(c.id) ? 'Technical' : 'Functional';
    if (!newC.heroHeading) newC.heroHeading = `Complete ${newC.title} Training`;

    return newC;
});


const tsContent = `export interface FAQ {
  question: string;
  answer: string;
}

export interface CurriculumModule {
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  heroHeading: string;
  heroSubheading?: string;
  description?: string;
  features: string[];
  category: 'Functional' | 'Technical';
  duration?: string;
  price?: string;
  curriculum: CurriculumModule[];
  faqs: FAQ[];
  inFaqSection?: boolean;
}

export const courses: Course[] = ${JSON.stringify(finalCourses, null, 2)};

export function getCourse(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}
`;

if (!fs.existsSync("lib")) fs.mkdirSync("lib");
fs.writeFileSync("lib/courseData.ts", tsContent);
console.log("lib/courseData.ts updated with Premium Content");
