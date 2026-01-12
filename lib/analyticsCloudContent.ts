
import { Section } from './courseData';

export const analyticsCloudContent: { features: string[]; sections: Section[] } = {
    features: [
        "40 Hours of Live Training",
        "Hands-on BI, Planning & Predictive",
        "SAP Certified Application Associate Guidance",
        "Real-time Dashboard Design",
        "Data Integration (Live & Import)",
        "Lifetime Access to Recordings"
    ],
    sections: [
        {
            type: 'detailed_features',
            title: 'Why Professionals Choose ERPVITS for SAP Analytics Cloud Training',
            items: [
                {
                    title: "Expert-led Training",
                    description: "Learn from certified professionals with real-world industry experience in SAP Analytics Cloud.",
                    icon: "UserCheck"
                },
                {
                    title: "Real-time Projects",
                    description: "Work on live visualization projects and planning scenarios to build a strong portfolio.",
                    icon: "Briefcase"
                },
                {
                    title: "24/7 Server Access",
                    description: "Practice anytime with dedicated access to SAP Analytics Cloud systems and labs.",
                    icon: "Server"
                },
                {
                    title: "Placement Support",
                    description: "Dedicated assistance with resume building, mock interviews, and job referrals in BI/Analytics.",
                    icon: "Users"
                }
            ]
        },
        {
            type: 'detailed_curriculum',
            title: 'Comprehensive SAP Analytics Cloud Course Curriculum',
            modules: [
                {
                    title: "Module 1: Introduction to SAP Analytics Cloud",
                    duration: "4 Hours",
                    learning_points: [
                        "Overview of SAP Analytics Cloud and Business Intelligence",
                        "Key features: BI, Planning, Augmented Analytics",
                        "Architecture and data connectivity (Live vs Import)",
                        "Navigation and core concepts"
                    ]
                },
                {
                    title: "Module 2: Data Modeling & Connection",
                    duration: "6 Hours",
                    learning_points: [
                        "Creating data models from spreadsheets and SAP systems",
                        "Data wrangling and transformation",
                        "Establishing live connections to SAP HANA, BW, and S/4HANA",
                        "Scheduling data imports and refreshes"
                    ]
                },
                {
                    title: "Module 3: Story Building & Visualization",
                    duration: "8 Hours",
                    learning_points: [
                        "Designing interactive stories and dashboards",
                        "Using charts, tables, geo-maps, and filters",
                        "Implementing conditional formatting and styling",
                        "Collaborating and sharing stories"
                    ]
                },
                {
                    title: "Module 4: Analytics Designer & App Development",
                    duration: "6 Hours",
                    learning_points: [
                        "Introduction to Analytics Designer",
                        "Building custom applications with scripting",
                        "Designing professional analytics apps",
                        "Integration with other SAP solutions"
                    ]
                },
                {
                    title: "Module 5: SAP Analytics Cloud for Planning",
                    duration: "8 Hours",
                    learning_points: [
                        "Introduction to planning concepts and workflows",
                        "Designing planning models and versions",
                        "Using data actions, allocations, and value driver trees",
                        "Mastering predictive forecasting"
                    ]
                }
            ]
        },
        {
            type: 'detailed_certification',
            content: "We provide complete support for SAP Certified Application Associate – SAP Analytics Cloud (Exam Code: C_SAC_2402).",
            items: [
                {
                    title: "SAP Certified Application Associate – SAP Analytics Cloud",
                    code: "C_SAC_2402",
                    focus: "BI, Planning, Data Modeling, Integration",
                    who: "BI consultants, data analysts, planning professionals",
                    relevance: "Globally recognized certification for cloud analytics roles"
                }
            ]
        },
        {
            type: 'detailed_faq',
            items: [
                {
                    q: "What is SAP Analytics Cloud (SAC)?",
                    a: "SAC is a single cloud solution for business intelligence, planning, and predictive analytics, providing real-time insights across the enterprise."
                },
                {
                    q: "Do I need prior coding knowledge?",
                    a: "No, SAC is designed primarily for business users and analysts, though Analytics Designer supports custom scripting for advanced scenarios."
                },
                {
                    q: "Does ERPVITS provide server access?",
                    a: "Yes, we provide 24/7 access to SAP Analytics Cloud environments for hands-on practice."
                }
            ]
        }
    ]
};
