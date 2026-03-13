import React from 'react';
import { ShieldCheck, Database, FileText, Settings, Users, BarChart, Globe, Briefcase, GraduationCap, CheckCircle, Star, Clock, Laptop, Building2, UserCheck, Search, Filter, Server, Layout, Box, DollarSign, TrendingUp, Rocket, Award } from 'lucide-react';

export const mdgTargetAudience = [
    {
        icon: "ShieldCheck",
        title: "Data Governance and Quality Professionals",
        description: [
            "Data governance managers seeking SAP platform expertise",
            "Master data managers aiming for consultant-level skills",
            "Data quality specialists transitioning to SAP governance",
            "Data stewards wanting enterprise governance knowledge",
            "Information architects seeking MDG specialization"
        ]
    },
    {
        icon: "Database",
        title: "SAP and ERP Professionals",
        description: [
            "SAP consultants from MD, FI, MM, SD modules seeking specialization",
            "ERP system administrators expanding into governance domain",
            "SAP architects designing enterprise data governance solutions",
            "Technical consultants supporting SAP implementations",
            "Business analysts interested in master data management"
        ]
    },
    {
        icon: "BarChart",
        title: "Finance and Operations Professionals",
        description: [
            "Financial controllers wanting data governance expertise",
            "Operations managers seeking data quality improvement",
            "Compliance officers requiring governance knowledge",
            "Risk managers interested in data governance frameworks",
            "Business process owners focused on data excellence"
        ]
    },
    {
        icon: "GraduationCap",
        title: "Fresh Graduates and Career Changers",
        description: [
            "MBA graduates (especially Operations/Analytics focus)",
            "Business analysts aiming for data governance consulting",
            "IT professionals pivoting into data governance",
            "Information management professionals entering SAP",
            "Career changers with strong analytical and organizational skills"
        ]
    },
    {
        icon: "Building2",
        title: "Existing Employees of SAP MDG Customers",
        description: [
            "Employees at organizations implementing or using SAP MDG",
            "Super-users wanting to become certified consultants",
            "IT teams managing SAP MDG in their organizations",
            "Business analysts supporting master data processes"
        ]
    }
];

export const mdgPrerequisites = {
    minimum: [
        "Basic understanding of enterprise resource planning concepts",
        "Familiarity with master data concepts (customers, suppliers, products)",
        "Comfortable with business software and database concepts",
        "Ability to learn independently and ask clarifying questions",
        "Basic knowledge of organizational processes (procurement, sales, finance)"
    ],
    nicetohave: [
        "Prior SAP experience (any module: MM, SD, FI)",
        "Data governance or quality management experience",
        "Exposure to enterprise software or database systems",
        "Excel/Power BI skills for data analysis",
        "Understanding of compliance and regulatory requirements"
    ]
};

export const mdgLearningOutcomes = {
    tabs: [
        {
            name: "Functional Mastery",
            items: [
                {
                    title: "Master Data Governance Framework Design",
                    description: "Design comprehensive data governance frameworks for enterprises.",
                    icon: "Layout",
                    points: [
                        "Design comprehensive data governance frameworks for enterprises",
                        "Establish governance policies and procedures",
                        "Define stewardship roles and responsibilities",
                        "Create governance metrics and KPI frameworks",
                        "Align organizational structure for effective governance"
                    ]
                },
                {
                    title: "Customer Master Data Governance Excellence",
                    description: "Configure customer master data hierarchies and duplicates.",
                    icon: "UserCheck",
                    points: [
                        "Configure customer master data hierarchies",
                        "Implement customer duplicate detection and resolution",
                        "Create customer approval and enrichment workflows",
                        "Establish customer data quality standards",
                        "Manage customer consolidation across systems"
                    ]
                },
                {
                    title: "Supplier and Vendor Data Governance",
                    description: "Design supplier master data governance strategies.",
                    icon: "Briefcase",
                    points: [
                        "Design supplier master data governance strategies",
                        "Configure supplier hierarchies and relationships",
                        "Implement supplier onboarding governance processes",
                        "Manage supplier compliance and risk data",
                        "Execute supplier data consolidation"
                    ]
                },
                {
                    title: "Product Master Data Governance",
                    description: "Create product hierarchies and variant structures.",
                    icon: "Box", // Using Box as proxy for Product
                    points: [
                        "Create product hierarchies and variant structures",
                        "Implement product data classification standards",
                        "Configure product approval and release workflows",
                        "Establish product data quality rules",
                        "Manage product synchronization across systems"
                    ]
                },
                {
                    title: "Financial Master Data and GL Governance",
                    description: "Establish Chart of Accounts governance and financial workflows.",
                    icon: "DollarSign",
                    points: [
                        "Establish Chart of Accounts governance",
                        "Implement cost center and profit center management",
                        "Configure financial approval workflows",
                        "Establish financial data quality standards",
                        "Manage GL account consolidation"
                    ]
                }
            ]
        },
        {
            name: "Technical Skills",
            items: [
                {
                    title: "Data Quality Management and Validation",
                    description: "Design and implement data quality frameworks.",
                    icon: "CheckCircle",
                    points: [
                        "Design and implement data quality frameworks",
                        "Create data quality rules and validation",
                        "Execute data cleansing and enrichment",
                        "Manage duplicate detection workflows",
                        "Monitor and report on data quality metrics"
                    ]
                },
                {
                    title: "Master Data Object Configuration",
                    description: "Create and configure MDG data objects.",
                    icon: "Settings",
                    points: [
                        "Create and configure MDG data objects",
                        "Set up governance workflows and approvals",
                        "Configure data governance rules",
                        "Establish role-based access controls",
                        "Validate data governance configurations"
                    ]
                },
                {
                    title: "SAP S/4HANA Integration and Connectivity",
                    description: "Integrate MDG with S/4HANA core modules.",
                    icon: "Server",
                    points: [
                        "Integrate MDG with S/4HANA core modules",
                        "Configure master data replication",
                        "Manage change data capture (CDC)",
                        "Execute real-time and batch synchronization",
                        "Validate end-to-end governance processes"
                    ]
                },
                {
                    title: "Governance Portal and Workflow Design",
                    description: "Configure governance portals and interfaces.",
                    icon: "Layout",
                    points: [
                        "Configure governance portals and interfaces",
                        "Design and implement governance workflows",
                        "Set up task management and notifications",
                        "Create role-based portal access",
                        "Build governance dashboards and reports"
                    ]
                },
                {
                    title: "Advanced Analytics and Governance Intelligence",
                    description: "Create data governance dashboards and reports.",
                    icon: "BarChart",
                    points: [
                        "Create data governance dashboards and reports",
                        "Monitor governance metrics and KPIs",
                        "Analyze data quality trends",
                        "Generate governance insights",
                        "Implement governance intelligence tools"
                    ]
                }
            ]
        }
    ]
};

export const mdgRealWorldScenarios = [
    {
        title: "Global Financial Services Customer Data Governance",
        description: "A multinational financial services company with 50+ operating entities needs SAP MDG to consolidate customer data, ensure regulatory compliance (KYC, AML), implement single customer view, and reduce customer data quality issues that cause customer service delays.",
        role: "Lead SAP MDG Consultant",
        outcome: "Single customer view achieved across all entities, regulatory compliance 100%, customer data quality score improved from 65% to 95%, customer service resolution time reduced by 40%.",
        responsibilities: [
            "Design customer data governance framework across 50 entities",
            "Configure customer master data object and hierarchies",
            "Implement duplicate customer detection and consolidation",
            "Set up customer approval and enrichment workflows",
            "Configure regulatory compliance validation rules",
            "Design governance portal for customer stewards",
            "Create customer data quality dashboards"
        ]
    },
    {
        title: "Manufacturing Company's Supplier and Product Data Governance",
        description: "A global manufacturing company with 15,000+ suppliers and 100,000+ products needs SAP MDG to establish supplier governance, ensure product data consistency, consolidate duplicate suppliers/products, and enable efficient procurement and production planning.",
        role: "SAP MDG Consultant",
        outcome: "Supplier base consolidation achieved, 8,000 duplicate suppliers identified and resolved, product data accuracy improved to 98%, procurement process efficiency improved by 35%, planning accuracy increased by 25%.",
        responsibilities: [
            "Design supplier and product governance frameworks",
            "Configure supplier master data hierarchies",
            "Implement supplier onboarding governance process",
            "Configure product master data and variants",
            "Set up duplicate supplier and product resolution",
            "Create approval workflows for supplier and product changes",
            "Implement data quality rules and monitoring"
        ]
    },
    {
        title: "Retail Organization's Master Data and Compliance Governance",
        description: "A retail chain with 1,000+ stores across multiple countries needs SAP MDG to ensure product master data accuracy for e-commerce and stores, manage vendor and customer hierarchies, and maintain compliance with regional data regulations (GDPR, local regulations).",
        role: "Governance Consultant",
        outcome: "GDPR compliance 100%, product data completeness improved from 70% to 96%, data governance efficiency improved by 40%, regulatory audit readiness achieved.",
        responsibilities: [
            "Design multi-country governance framework",
            "Configure customer, supplier, and product master data objects",
            "Implement compliance validation rules for GDPR and regional requirements",
            "Set up product data enrichment workflows",
            "Design customer and vendor hierarchies",
            "Create governance portal for data stewards",
            "Implement data quality monitoring"
        ]
    },
    {
        title: "Healthcare Organization's Patient and Master Data Governance",
        description: "A healthcare organization managing patient records, medical supplies, and provider data needs SAP MDG to ensure patient data accuracy, manage HIPAA compliance, consolidate duplicate patient records, and improve data governance across multiple hospital facilities.",
        role: "Solution Architect",
        outcome: "HIPAA compliance 100% maintained, duplicate patient records reduced by 85%, patient data accuracy improved to 99%, healthcare delivery efficiency improved through accurate data.",
        responsibilities: [
            "Design patient and medical supply governance frameworks",
            "Implement HIPAA-compliant data governance",
            "Configure duplicate patient detection and resolution",
            "Set up patient and provider hierarchies",
            "Implement patient consent and privacy management",
            "Design governance workflows with audit trails",
            "Create compliance and security governance"
        ]
    }
];

export const mdgContent = {
    "title": "SAP MDG",
    "category": "Functional",
    "price": "45,000",
    "duration": "40+ Hrs",
    "heroHeading": "Upskill Your Career with <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] to-red-600 box-decoration-clone\">SAP MDG Training</span>",
    "heroSubheading": "Our SAP MDG Training program is a transformative learning pathway for professionals who eager to excel in data quality management, organizational data governance & enterprise information management. In today's data-driven business landscape, organizations urgently need certified SAP MDG experts who can establish master data governance frameworks, ensure data quality across the enterprise, maintain data governance compliance and drive organizational alignment through standardized master data processes. This comprehensive SAP MDG course combines interactive, instructor-led sessions, hands-on lab exercises, real-time industry projects, data governance simulations and end-to-end certification support—designed specifically for data governance professionals, master data managers, SAP consultants, ERP implementers & quality assurance specialists targeting global data governance and compliance roles.",
    "heroImage": "/images/ERPVITS - All Modules Infographics/ERPVITS - SAP MDG Infographic.webp",
    "description": "The SAP Master Data Governance Online Training Program from ERPVITS represents a transformative learning pathway for professionals eager to excel in data quality management, organizational data governance, and enterprise information management.",
    "metaTitle": "SAP MDG Training Online – Master Data Governance Course",
    "metaDescription": "Master enterprise data governance with SAP MDG training. Learn data quality, governance frameworks, hands-on labs, and certification support. Enroll Now",
    "features": [],
    "sections": [
        {
            "type": "detailed_features",
            "badge": "Why Choose Us",
            "items": [
                {
                    "title": "Certified Instructor Expertise",
                    "description": "Each trainer holds official SAP certifications and has successfully led multiple enterprise-scale SAP MDG implementations. They share real-world scenarios, common data governance pitfalls, and industry best practices from actual client deployments."
                },
                {
                    "title": "100% Hands-On Learning Methodology",
                    "description": "Every session includes live demonstrations directly on SAP MDG systems, followed by guided lab exercises. By the end of the course, you've configured data governance frameworks, created master data objects, and executed data quality checks on real systems."
                },
                {
                    "title": "Job-Oriented Curriculum Design",
                    "description": "The course curriculum is designed around the exact skills, responsibilities, and problem-solving scenarios you'll face as an SAP MDG consultant, from implementing policies to troubleshooting data quality issues."
                },
                {
                    "title": "Interactive Q&A Sessions",
                    "description": "Dedicated Q&A forums and live office hours where instructors address your doubts, clarify complex topics like change data capture, and provide personalized guidance tailored to your learning pace and career goals."
                },
                {
                    "title": "Flexible Batch Timings",
                    "description": "We offer both weekday evening batches (6 PM – 9 PM IST) and weekend batches (Saturday & Sunday). Sessions are recorded, so if you miss a live class, you can catch up asynchronously."
                },
                {
                    "title": "Small Batch Sizes for Personalized Attention",
                    "description": "Batches are capped at 8-10 participants. This ensures instructors can provide individualized attention, get to know your strengths, and offer targeted feedback on your governance configurations."
                },
                {
                    "title": "Placement & Career support",
                    "description": "Our dedicated career support team helps you build an impactful SAP MDG-focused resume, prepare through mock interviews, and practice with real-world interview questions from recent trends."
                },
                {
                    "title": "Active Alumni Network & Community Forum",
                    "description": "Join a thriving community of SAP MDG professionals. Exchange tips, share data governance best practices, discuss master data challenges, and build professional relationships."
                },
                {
                    "title": "Ongoing support Post-Training",
                    "description": "For six months after training, you'll continue to receive instructor guidance—whether you need help clarifying concepts or troubleshooting real-world governance challenges."
                }
            ],
            "title": "Learn SAP MDG from Certified Experts – 100% Hands-On, Job-Oriented Training",
            "subtitle": "Our **SAP MDG Online Training** curriculum is delivered exclusively by certified SAP professionals with 12+ years of direct hands-on experience in <a href=\"https://www.erpvits.com/blog/sap-mdg-data-model/\" target=\"_blank\" rel=\"noopener noreferrer\">SAP MDG data model</a>, data governance frameworks and enterprise information management. Instead of passive video courses or self-paced modules, you get **live, real-time training** with interactive sessions where instructors share industry-proven methodologies, address your questions, and guide you through complex data governance scenarios in a step-by-step manner.",
            "textAlign": "left"
        },
        {
            "type": "content_with_image",
            "items": [
                "Trusted by 800+ successful SAP professionals",
                "Alumni at Accenture, Capgemini, Deloitte, Infosys, Wipro, and leading organizations",
                "Personalized pre-evaluation and learning path customization",
                "Active alumni network and community forum for data governance professionals",
                "70+ guided lab exercises from basic to advanced data governance scenarios",
                "Quarterly updated materials aligned with latest SAP MDG releases",
                "Mock interviews simulating real consultant scenarios in master data governance",
                "Live governance framework development workshops"
            ],
            "title": "Why Professionals Choose ERPVITS for SAP MDG Training",
            "imageSrc": "https://xwcpxwjxqllfwferproi.supabase.co/storage/v1/object/public/media-library/general/sap-mdg-training-1771936636057.png",
            "subtitle": "Success Guarantee & Credibility",
            "description": "ERPVITS has established itself as a trusted training partner for <a href=\"https://www.erpvits.com/blog/sap-modules-list/\" target=\"_blank\" rel=\"noopener noreferrer\">SAP Modules</a>, with hundreds of successful learners working at top consulting firms like Accenture, Capgemini, Deloitte, Infosys, and Wipro, as well as leading financial services and technology companies like JPMorgan Chase, Goldman Sachs, Microsoft, and IBM. Our alumni network testimonials speak to the quality of instruction and the career acceleration our program delivers.",
            "supportText": "From pre-evaluation to post-training support, we guide you through every step of your SAP MDG learning journey and career transition.",
            "supportTitle": "Complete support Ecosystem"
        },
        {
            "type": "whats_included",
            "stats": [
                {
                    "label": "Hours of Live Training",
                    "value": "40+"
                },
                {
                    "label": "Hands-On Lab Exercises",
                    "value": "70+"
                },
                {
                    "label": "Placement support",
                    "value": "100%"
                }
            ],
            "content": "A complete, career-focused SAP Master Data Governance training program combining live expert sessions, real-world projects, hands-on labs, certification preparation, and ongoing career support to help you become a job-ready SAP MDG consultant."
        },
        {
            "type": "detailed_curriculum",
            "title": "Comprehensive SAP MDG Course Curriculum",
            "modules": [
                {
                    "title": "Module 1: Introduction to SAP MDG and Master Data Governance",
                    "duration": "5 Hours",
                    "hands_on": [
                        "Navigate SAP MDG user interface",
                        "Explore governance workflows and processes",
                        "Understand master data object types",
                        "Create basic governance configurations"
                    ],
                    "learning_points": [
                        "Overview of SAP Master Data Governance (MDG) and its role in enterprise information management",
                        "Key features and benefits: data quality, governance, consolidation, stewardship",
                        "Master data concepts and terminology",
                        "Governance framework principles and governance models",
                        "Data governance lifecycle and processes",
                        "System architecture and components",
                        "Organizational alignment for master data governance"
                    ]
                },
                {
                    "title": "Module 2: Master Data Governance Framework and Strategy",
                    "duration": "6 Hours",
                    "hands_on": [
                        "Design governance frameworks",
                        "Define governance policies and procedures",
                        "Create stewardship organizational structures",
                        "Develop governance KPIs",
                        "Design change management plans"
                    ],
                    "learning_points": [
                        "Governance framework design and implementation",
                        "Data governance policies and procedures",
                        "Master data stewardship organization and roles",
                        "Governance metrics and KPI definition",
                        "Compliance and regulatory requirements in governance",
                        "Change management for governance implementations",
                        "Organizational alignment and stakeholder management"
                    ]
                },
                {
                    "title": "Module 3: Customer Master Data Governance",
                    "duration": "8 Hours",
                    "hands_on": [
                        "Create customer master data objects",
                        "Set up customer hierarchy management",
                        "Configure customer approval workflows",
                        "Execute duplicate customer resolution",
                        "Create customer governance reports",
                        "Perform customer data enrichment"
                    ],
                    "learning_points": [
                        "Customer master data governance processes",
                        "Customer data governance policies and standards",
                        "Customer hierarchy management and consolidation",
                        "Duplicate customer detection and resolution",
                        "Customer data enrichment workflows",
                        "Customer approval processes and workflows",
                        "Customer analytics and reporting"
                    ]
                },
                {
                    "title": "Module 4: Supplier Master Data Governance",
                    "duration": "8 Hours",
                    "hands_on": [
                        "Create supplier master data objects",
                        "Set up supplier hierarchy management",
                        "Configure supplier approval workflows",
                        "Execute supplier onboarding processes",
                        "Perform supplier data consolidation",
                        "Manage supplier compliance and risk data"
                    ],
                    "learning_points": [
                        "Supplier master data governance strategy",
                        "Supplier hierarchy and relationship management",
                        "Supplier data quality standards",
                        "Supplier onboarding governance processes",
                        "Supplier approval workflows and compliance",
                        "Supplier data consolidation",
                        "Supplier risk management integration"
                    ]
                },
                {
                    "title": "Module 5: Product Master Data Governance",
                    "duration": "7 Hours",
                    "hands_on": [
                        "Create product master data objects",
                        "Set up product hierarchies and variants",
                        "Configure product approval workflows",
                        "Execute product data synchronization",
                        "Create product taxonomy structures",
                        "Manage product data quality rules"
                    ],
                    "learning_points": [
                        "Product master data governance frameworks",
                        "Product data standards and classifications",
                        "Product hierarchy and variant management",
                        "Product data workflow processes",
                        "Product approval and release processes",
                        "Product data synchronization across systems",
                        "Product taxonomy and governance"
                    ]
                },
                {
                    "title": "Module 6: Financial Master Data Governance",
                    "duration": "6 Hours",
                    "hands_on": [
                        "Create GL account governance objects",
                        "Set up cost center hierarchies",
                        "Configure financial approval workflows",
                        "Execute GL account consolidation",
                        "Manage financial data quality rules",
                        "Create financial governance reports"
                    ],
                    "learning_points": [
                        "General Ledger account governance",
                        "Cost center and profit center governance",
                        "Internal order and project governance",
                        "Financial data standards and compliance",
                        "Chart of accounts management",
                        "Financial governance workflows",
                        "Accounting approval processes"
                    ]
                },
                {
                    "title": "Module 7: Data Quality Management and Validation",
                    "duration": "6 Hours",
                    "hands_on": [
                        "Create data quality rules",
                        "Execute duplicate detection",
                        "Perform data cleansing workflows",
                        "Develop data quality dashboards",
                        "Monitor data quality metrics",
                        "Implement data enrichment processes"
                    ],
                    "learning_points": [
                        "Data quality frameworks and dimensions",
                        "Data quality rules and validation",
                        "Master data cleansing and enrichment",
                        "Duplicate detection and resolution",
                        "Data quality monitoring and reporting",
                        "Data quality metrics and KPIs",
                        "Root cause analysis for data quality issues"
                    ]
                },
                {
                    "title": "Module 8: MDG Integration with SAP S/4HANA and Other Systems",
                    "duration": "7 Hours",
                    "hands_on": [
                        "Configure MDG-S/4HANA integration",
                        "Set up data replication workflows",
                        "Execute master data synchronization",
                        "Configure change data capture",
                        "Test integrated data governance scenarios",
                        "Manage multi-system governance"
                    ],
                    "learning_points": [
                        "MDG integration architecture",
                        "Integration with SAP S/4HANA modules",
                        "Master data replication and synchronization",
                        "Change data capture (CDC) mechanisms",
                        "Real-time and batch data loading",
                        "System integration scenarios",
                        "Data governance in cloud environments"
                    ]
                },
                {
                    "title": "Module 9: Governance Portals, Workflows and Collaboration",
                    "duration": "5 Hours",
                    "hands_on": [
                        "Configure governance portals",
                        "Design governance workflows",
                        "Set up task assignments and notifications",
                        "Create role-based access controls",
                        "Build governance dashboards",
                        "Manage stakeholder collaboration"
                    ],
                    "learning_points": [
                        "Governance portal configuration and customization",
                        "Workflow design and automation",
                        "Task management and notifications",
                        "Stakeholder collaboration features",
                        "Master data portal user experience",
                        "Role-based access and security",
                        "Governance reporting and dashboards"
                    ]
                },
                {
                    "title": "Module 10: Advanced Topics, Best Practices and Transformation",
                    "duration": "4 Hours",
                    "hands_on": [
                        "Develop governance transformation roadmap",
                        "Create enterprise governance program plans",
                        "Build governance dashboards and metrics",
                        "Design organizational change approaches",
                        "Analyze governance best practices",
                        "Implement advanced governance scenarios"
                    ],
                    "learning_points": [
                        "Governance transformation programs",
                        "Enterprise-wide data governance initiatives",
                        "Governance metrics and KPI frameworks",
                        "Change management and organizational adoption",
                        "Industry best practices in master data governance",
                        "Cloud-based governance and modern approaches",
                        "Future trends in data governance and data lineage"
                    ]
                }
            ],
            "subtitle": "40+ hours of expert-led training covering every aspect from basics to advanced implementation",
            "syllabusUrl": "/syllabus/ERPVITS Syllabus - Course Contents Pdf/SAP Functional/sap-mdg.pdf"
        },
        {
            "type": "detailed_target_audience",
            "items": [
                {
                    "icon": "ShieldCheck",
                    "title": "Data Governance and Quality Professionals",
                    "description": [
                        "Data governance managers seeking SAP platform expertise",
                        "Master data managers aiming for consultant-level skills",
                        "Data quality specialists transitioning to SAP governance",
                        "Data stewards wanting enterprise governance knowledge",
                        "Information architects seeking MDG specialization"
                    ]
                },
                {
                    "icon": "Database",
                    "title": "SAP and ERP Professionals",
                    "description": [
                        "SAP consultants from MD, FI, MM, SD modules seeking specialization",
                        "ERP system administrators expanding into governance domain",
                        "SAP architects designing enterprise data governance solutions",
                        "Technical consultants supporting SAP implementations",
                        "Business analysts interested in master data management"
                    ]
                },
                {
                    "icon": "BarChart",
                    "title": "Finance and Operations Professionals",
                    "description": [
                        "Financial controllers wanting data governance expertise",
                        "Operations managers seeking data quality improvement",
                        "Compliance officers requiring governance knowledge",
                        "Risk managers interested in data governance frameworks",
                        "Business process owners focused on data excellence"
                    ]
                },
                {
                    "icon": "GraduationCap",
                    "title": "Fresh Graduates and Career Changers",
                    "description": [
                        "MBA graduates (especially Operations/Analytics focus)",
                        "Business analysts aiming for data governance consulting",
                        "IT professionals pivoting into data governance",
                        "Information management professionals entering SAP",
                        "Career changers with strong analytical and organizational skills"
                    ]
                },
                {
                    "icon": "Building2",
                    "title": "Existing Employees of SAP MDG Customers",
                    "description": [
                        "Employees at organizations implementing or using SAP MDG",
                        "Super-users wanting to become certified consultants",
                        "IT teams managing SAP MDG in their organizations",
                        "Business analysts supporting master data processes"
                    ]
                }
            ]
        },
        {
            "type": "detailed_prerequisites",
            "items": {
                "minimum": [
                    "Basic understanding of enterprise resource planning concepts",
                    "Familiarity with master data concepts (customers, suppliers, products)",
                    "Comfortable with business software and database concepts",
                    "Ability to learn independently and ask clarifying questions",
                    "Basic knowledge of organizational processes (procurement, sales, finance)"
                ],
                "nicetohave": [
                    "Prior SAP experience (any module: MM, SD, FI)",
                    "Data governance or quality management experience",
                    "Exposure to enterprise software or database systems",
                    "Excel/Power BI skills for data analysis",
                    "Understanding of compliance and regulatory requirements"
                ]
            }
        },
        {
            "type": "detailed_learning_outcomes",
            "items": {
                "tabs": [
                    {
                        "name": "Functional Mastery",
                        "items": [
                            {
                                "icon": "Layout",
                                "title": "Master Data Governance Framework Design",
                                "points": [
                                    "Design comprehensive data governance frameworks for enterprises",
                                    "Establish governance policies and procedures",
                                    "Define stewardship roles and responsibilities",
                                    "Create governance metrics and KPI frameworks",
                                    "Align organizational structure for effective governance"
                                ],
                                "description": "Design comprehensive data governance frameworks for enterprises."
                            },
                            {
                                "icon": "UserCheck",
                                "title": "Customer Master Data Governance Excellence",
                                "points": [
                                    "Configure customer master data hierarchies",
                                    "Implement customer duplicate detection and resolution",
                                    "Create customer approval and enrichment workflows",
                                    "Establish customer data quality standards",
                                    "Manage customer consolidation across systems"
                                ],
                                "description": "Configure customer master data hierarchies and duplicates."
                            },
                            {
                                "icon": "Briefcase",
                                "title": "Supplier and Vendor Data Governance",
                                "points": [
                                    "Design supplier master data governance strategies",
                                    "Configure supplier hierarchies and relationships",
                                    "Implement supplier onboarding governance processes",
                                    "Manage supplier compliance and risk data",
                                    "Execute supplier data consolidation"
                                ],
                                "description": "Design supplier master data governance strategies."
                            },
                            {
                                "icon": "Box",
                                "title": "Product Master Data Governance",
                                "points": [
                                    "Create product hierarchies and variant structures",
                                    "Implement product data classification standards",
                                    "Configure product approval and release workflows",
                                    "Establish product data quality rules",
                                    "Manage product synchronization across systems"
                                ],
                                "description": "Create product hierarchies and variant structures."
                            },
                            {
                                "icon": "DollarSign",
                                "title": "Financial Master Data and GL Governance",
                                "points": [
                                    "Establish Chart of Accounts governance",
                                    "Implement cost center and profit center management",
                                    "Configure financial approval workflows",
                                    "Establish financial data quality standards",
                                    "Manage GL account consolidation"
                                ],
                                "description": "Establish Chart of Accounts governance and financial workflows."
                            }
                        ]
                    },
                    {
                        "name": "Technical Skills",
                        "items": [
                            {
                                "icon": "CheckCircle",
                                "title": "Data Quality Management and Validation",
                                "points": [
                                    "Design and implement data quality frameworks",
                                    "Create data quality rules and validation",
                                    "Execute data cleansing and enrichment",
                                    "Manage duplicate detection workflows",
                                    "Monitor and report on data quality metrics"
                                ],
                                "description": "Design and implement data quality frameworks."
                            },
                            {
                                "icon": "Settings",
                                "title": "Master Data Object Configuration",
                                "points": [
                                    "Create and configure MDG data objects",
                                    "Set up governance workflows and approvals",
                                    "Configure data governance rules",
                                    "Establish role-based access controls",
                                    "Validate data governance configurations"
                                ],
                                "description": "Create and configure MDG data objects."
                            },
                            {
                                "icon": "Server",
                                "title": "SAP S/4HANA Integration and Connectivity",
                                "points": [
                                    "Integrate MDG with S/4HANA core modules",
                                    "Configure master data replication",
                                    "Manage change data capture (CDC)",
                                    "Execute real-time and batch synchronization",
                                    "Validate end-to-end governance processes"
                                ],
                                "description": "Integrate MDG with S/4HANA core modules."
                            },
                            {
                                "icon": "Layout",
                                "title": "Governance Portal and Workflow Design",
                                "points": [
                                    "Configure governance portals and interfaces",
                                    "Design and implement governance workflows",
                                    "Set up task management and notifications",
                                    "Create role-based portal access",
                                    "Build governance dashboards and reports"
                                ],
                                "description": "Configure governance portals and interfaces."
                            },
                            {
                                "icon": "BarChart",
                                "title": "Advanced Analytics and Governance Intelligence",
                                "points": [
                                    "Create data governance dashboards and reports",
                                    "Monitor governance metrics and KPIs",
                                    "Analyze data quality trends",
                                    "Generate governance insights",
                                    "Implement governance intelligence tools"
                                ],
                                "description": "Create data governance dashboards and reports."
                            }
                        ]
                    }
                ]
            },
            "title": "What You'll Master in This SAP MDG Course",
            "subtitle": "Core Competencies you will possess upon successful completion"
        },
        {
            "type": "real_world_scenarios",
            "items": [
                {
                    "role": "Lead SAP MDG Consultant",
                    "title": "Global Financial Services Customer Data Governance",
                    "outcome": "Single customer view achieved across all entities, regulatory compliance 100%, customer data quality score improved from 65% to 95%, customer service resolution time reduced by 40%.",
                    "description": "A multinational financial services company with 50+ operating entities needs SAP MDG to consolidate customer data, ensure regulatory compliance (KYC, AML), implement single customer view, and reduce customer data quality issues that cause customer service delays.",
                    "responsibilities": [
                        "Design customer data governance framework across 50 entities",
                        "Configure customer master data object and hierarchies",
                        "Implement duplicate customer detection and consolidation",
                        "Set up customer approval and enrichment workflows",
                        "Configure regulatory compliance validation rules",
                        "Design governance portal for customer stewards",
                        "Create customer data quality dashboards"
                    ]
                },
                {
                    "role": "SAP MDG Consultant",
                    "title": "Manufacturing Company's Supplier and Product Data Governance",
                    "outcome": "Supplier base consolidation achieved, 8,000 duplicate suppliers identified and resolved, product data accuracy improved to 98%, procurement process efficiency improved by 35%, planning accuracy increased by 25%.",
                    "description": "A global manufacturing company with 15,000+ suppliers and 100,000+ products needs SAP MDG to establish supplier governance, ensure product data consistency, consolidate duplicate suppliers/products, and enable efficient procurement and production planning.",
                    "responsibilities": [
                        "Design supplier and product governance frameworks",
                        "Configure supplier master data hierarchies",
                        "Implement supplier onboarding governance process",
                        "Configure product master data and variants",
                        "Set up duplicate supplier and product resolution",
                        "Create approval workflows for supplier and product changes",
                        "Implement data quality rules and monitoring"
                    ]
                },
                {
                    "role": "Governance Consultant",
                    "title": "Retail Organization's Master Data and Compliance Governance",
                    "outcome": "GDPR compliance 100%, product data completeness improved from 70% to 96%, data governance efficiency improved by 40%, regulatory audit readiness achieved.",
                    "description": "A retail chain with 1,000+ stores across multiple countries needs SAP MDG to ensure product master data accuracy for e-commerce and stores, manage vendor and customer hierarchies, and maintain compliance with regional data regulations (GDPR, local regulations).",
                    "responsibilities": [
                        "Design multi-country governance framework",
                        "Configure customer, supplier, and product master data objects",
                        "Implement compliance validation rules for GDPR and regional requirements",
                        "Set up product data enrichment workflows",
                        "Design customer and vendor hierarchies",
                        "Create governance portal for data stewards",
                        "Implement data quality monitoring"
                    ]
                },
                {
                    "role": "Solution Architect",
                    "title": "Healthcare Organization's Patient and Master Data Governance",
                    "outcome": "HIPAA compliance 100% maintained, duplicate patient records reduced by 85%, patient data accuracy improved to 99%, healthcare delivery efficiency improved through accurate data.",
                    "description": "A healthcare organization managing patient records, medical supplies, and provider data needs SAP MDG to ensure patient data accuracy, manage HIPAA compliance, consolidate duplicate patient records, and improve data governance across multiple hospital facilities.",
                    "responsibilities": [
                        "Design patient and medical supply governance frameworks",
                        "Implement HIPAA-compliant data governance",
                        "Configure duplicate patient detection and resolution",
                        "Set up patient and provider hierarchies",
                        "Implement patient consent and privacy management",
                        "Design governance workflows with audit trails",
                        "Create compliance and security governance"
                    ]
                }
            ]
        },
        {
            "type": "detailed_certification",
            "items": [
                {
                    "who": "Professionals implementing and managing master data governance solutions",
                    "code": "(C_MDG_1909)",
                    "focus": "Master data consolidation, central governance, data quality management, workflow configuration",
                    "title": "SAP Certified Application Associate - SAP Master Data Governance",
                    "relevance": "MDG consultant and master data management roles"
                },
                {
                    "who": "Specialists managing business partner and vendor/customer master data",
                    "code": "(C_MDG_BP_1909)",
                    "focus": "Business partner master data, data modeling, governance frameworks, duplicate management",
                    "title": "SAP Certified Application Associate - SAP Master Data Governance, Business Partner",
                    "relevance": "Data steward and business partner data governance roles"
                },
                {
                    "who": "Finance-focused MDG professionals managing financial master data",
                    "code": "(C_MDG_FIN_1909)",
                    "focus": "Financial master data objects (cost centers, GL accounts, profit centers), data harmonization, consolidation workflows",
                    "title": "SAP Certified Application Associate - SAP Master Data Governance, Financials",
                    "relevance": "Finance data governance consultant and SAP FI/CO master data roles"
                }
            ],
            "stats": [
                {
                    "label": "Exam Code",
                    "value": "C_SGMDG_1911"
                },
                {
                    "label": "Duration",
                    "value": "180 Minutes"
                },
                {
                    "label": "Passing Score",
                    "value": "61%"
                }
            ],
            "title": "SAP MDG Certification – Your Global Career Credential",
            "content": "We Provide support for SAP Certified Application Associate – Master Data Governance (Exam Code: C_SGMDG_1911).",
            "imageSrc": "/images/ERPVITS - All Modules Infographics/ERPVITS - SAP MDG Infographic.webp",
            "subtitle": "We Provide support for Below SAP Certification",
            "description": "\n**SAP Certified Application Associate – Master Data Governance**\n**Exam Code:** C_SGMDG_1911\n**Exam Duration:** 180 minutes\n**Number of Questions:** 80 multiple-choice and scenario-based questions\n**Passing Score:** 61%\n**Focus Areas:**\nMaster Data Governance Fundamentals (20-30%)\nCustomer Master Data Governance (15-25%)\nSupplier Master Data Governance (15-25%)\nProduct Master Data Governance (10-20%)\nData Quality and Validation (10-20%)\nMDG Integration and Workflows (10-20%)\nGovernance Portals and Reporting (≤10%)\n**Value:** Demonstrates expertise in SAP MDG configuration, data governance frameworks, master data management, and organizational governance implementation.\n**Job Relevance:** Data governance consultant positions, master data management roles, information management opportunities, governance compliance roles.\n\n**Our Certification support**\n**Targeted Exam Preparation:** Study guides aligned to official exam blueprints with focus on real-world governance scenarios.\n**Practice Exams:** Timed practice tests mirroring real exam conditions with detailed explanations for each question.\n**Exam Strategies:** Tips for time management, question-reading techniques, and common pitfalls to avoid.\n**Exam Registration Guidance:** We assist with exam registration, scheduling, and technical setup.\n**Retake support:** If you don't pass on your first attempt, we provide additional support, targeted study recommendations, and retake guidance.\n\n**Why SAP MDG Certification Matters**\n**Global Credential Recognition:** SAP certifications are recognized worldwide by employers, clients, consulting firms, and regulatory bodies.\n**Career Acceleration:** Certified professionals command higher salaries (15-30% premium over non-certified peers) and faster promotion.\n**Competitive Advantage:** Stand out in job applications, governance consulting proposals, and compliance discussions.\n**Continuous Learning:** Certification pushes you to master data governance thoroughly, ensuring job-ready expertise.\n**Professional Credibility:** Signals to clients and employers that you've met rigorous standards in master data governance.\n"
        },
        {
            "type": "detailed_career_opportunities",
            "items": [
                {
                    "icon": "Briefcase",
                    "path": "2-3 years → Mid-level Consultant",
                    "color": "blue",
                    "title": "SAP MDG Consultant (Entry Level)",
                    "salary": "$105,000 - $125,000",
                    "employers": "Accenture, Capgemini, Deloitte, Infosys, Wipro, IBM Consulting",
                    "responsibilities": "Configure master data governance processes, manage governance workflows, support data quality initiatives, guide stewardship teams, provide governance technical support"
                },
                {
                    "icon": "ShieldCheck",
                    "path": "3-4 years → Senior Data Governance Manager",
                    "color": "green",
                    "title": "Master Data Manager / Data Steward",
                    "salary": "$90,000 - $120,000",
                    "employers": "Financial Services, Healthcare, Manufacturing, Technology, Retail",
                    "responsibilities": "Oversee master data quality, manage governance approvals, lead stewardship teams, ensure regulatory compliance, implement data standards"
                },
                {
                    "icon": "TrendingUp",
                    "path": "4-6 years → Senior Consultant or Governance Architect",
                    "color": "orange",
                    "title": "Data Governance Consultant",
                    "salary": "$100,000 - $135,000",
                    "employers": "Global Consulting Firms, Enterprise Companies, Financial Institutions",
                    "responsibilities": "Design data governance frameworks, implement MDG solutions, manage governance programs, drive organizational alignment, mentor junior consultants"
                },
                {
                    "icon": "Search",
                    "path": "3-5 years → Senior Quality Manager",
                    "color": "purple",
                    "title": "Information Quality Specialist / Analytics",
                    "salary": "$95,000 - $130,000",
                    "employers": "Consulting, Technology, Financial Services",
                    "responsibilities": "Monitor data quality metrics, perform root cause analysis, create quality dashboards, lead improvement initiatives, analyze governance data"
                },
                {
                    "icon": "Building2",
                    "path": "6-10 years → Principal Consultant or Chief Data Officer",
                    "color": "cyan",
                    "title": "SAP MDG Solution Architect",
                    "salary": "$120,000 - $170,000",
                    "employers": "Consulting, Technology, Enterprise",
                    "responsibilities": "Design enterprise governance solutions, lead governance programs, manage strategic governance initiatives, drive innovation, executive stakeholder engagement"
                }
            ]
        },
        {
            "type": "detailed_career_roadmap",
            "items": [
                {
                    "stage": "Start (1-3)",
                    "title": "Jr. MDG Consultant",
                    "description": "Support master data projects, data quality checks, basic governance workflows."
                },
                {
                    "stage": "Mid-Level (4-6)",
                    "title": "Sr. MDG Consultant / Architect",
                    "description": "Lead governance workshops, solution design, SAP MDG data model enhancements."
                },
                {
                    "stage": "Senior (7-10+)",
                    "title": "Principal Consultant / Manager",
                    "description": "Enterprise data strategy, cross-platform governance, program management."
                }
            ],
            "stats": [
                {
                    "label": "Increase in Job Earnings",
                    "value": "200%+"
                },
                {
                    "label": "Companies Hiring",
                    "value": "500+"
                },
                {
                    "label": "Average Starting Salary",
                    "value": "$110K"
                }
            ],
            "alumniCount": "800+"
        },
        {
            "type": "detailed_companies",
            "items": [
                "Accenture",
                "Capgemini",
                "Deloitte Consulting",
                "EY (Ernst & Young)",
                "KPMG",
                "PwC",
                "IBM Consulting",
                "Infosys",
                "Wipro",
                "Cognizant",
                "TCS (Tata Consulting Services)",
                "HCL Technologies",
                "Tech Mahindra",
                "JPMorgan Chase",
                "Goldman Sachs",
                "Bank of America",
                "Citigroup",
                "HSBC",
                "Barclays",
                "Microsoft",
                "Apple",
                "Google",
                "Amazon",
                "Salesforce",
                "Oracle",
                "Siemens",
                "ABB",
                "GE Healthcare",
                "Philips Healthcare",
                "Medtronic",
                "Johnson & Johnson"
            ]
        },
        {
            "type": "detailed_post_training_journey",
            "items": [
                {
                    "icon": "CheckCircle",
                    "color": "orange",
                    "title": "Immediate Post-Training",
                    "points": [
                        "Receive course completion certificate",
                        "Access lifetime course materials and recordings",
                        "Join alumni network and community forum",
                        "Begin resume updates highlighting SAP MDG expertise",
                        "Start building your governance project portfolio"
                    ],
                    "timeline": "Week 1-2"
                },
                {
                    "icon": "Rocket",
                    "color": "slate",
                    "title": "Certification & Job Search",
                    "points": [
                        "Apply for SAP MDG Certification exam (C_SGMDG_1911)",
                        "Start job search with career services support",
                        "Participate in alumni networking events and webinars",
                        "Receive interview coaching and mock interview feedback",
                        "Update LinkedIn profile with new certifications"
                    ],
                    "timeline": "Week 3-6"
                },
                {
                    "icon": "Briefcase",
                    "color": "orange",
                    "title": "First Role & Experience",
                    "points": [
                        "Secure first SAP MDG consulting opportunity (typical timeline)",
                        "Begin real-world governance implementation experience",
                        "Continue post-training support from instructors",
                        "Network with data governance and compliance professionals"
                    ],
                    "timeline": "Month 2-3"
                },
                {
                    "icon": "TrendingUp",
                    "color": "slate",
                    "title": "First Year in Role",
                    "points": [
                        "**Months 1-3:** Learn client's business, understand data quality issues, map out governance improvement opportunities.",
                        "**Months 4-6:** Lead governance workflow configuration, support master data stewardship setup, mentor junior consultants.",
                        "**Months 7-12:** Lead governance modules for complex implementations, drive data quality initiatives, demonstrate business acumen."
                    ],
                    "timeline": "Month 1-12"
                },
                {
                    "icon": "Award",
                    "color": "orange",
                    "title": "Long-Term Growth",
                    "points": [
                        "Earn SAP MDG certifications and maintain credentials",
                        "Build domain expertise in specific industries (Finance, Healthcare, Manufacturing)",
                        "Develop governance strategy and leadership capabilities",
                        "Transition to senior consulting roles or Chief Data Officer positions"
                    ],
                    "timeline": "1-5 Years"
                }
            ],
            "title": "What to Expect After Completing SAP MDG Training – Your Growth Roadmap"
        },
        {
            "type": "detailed_upcoming_batches",
            "items": [
                {
                    "date": "November 15, 2025",
                    "name": "Batch 1: November 2025 (Weekdays)",
                    "status": "filling_fast",
                    "duration": "40+ Hrs",
                    "schedule": "Mon-Fri | 7:00 AM & 8:00 PM IST",
                    "seatsFilled": 4
                },
                {
                    "date": "November 16, 2025",
                    "name": "Batch 2: November 2025 (Weekends)",
                    "status": "open",
                    "duration": "40+ Hrs",
                    "schedule": "Sat & Sun | 7:30 AM & 7:00 PM IST",
                    "seatsFilled": 5
                },
                {
                    "date": "December 1, 2025",
                    "name": "Batch 3: December 2025 (Flexible)",
                    "status": "new",
                    "duration": "48-56 Hours (Accelerated)",
                    "schedule": "Customized per batch",
                    "seatsFilled": 6
                }
            ],
            "batches": [
                {
                    "date": "November 15, 2025",
                    "name": "Batch 1: November 2025 (Weekdays)",
                    "status": "filling_fast",
                    "duration": "40+ Hrs",
                    "schedule": "Mon-Fri | 7:00 AM & 8:00 PM IST",
                    "seatsFilled": 4
                },
                {
                    "date": "November 16, 2025",
                    "name": "Batch 2: November 2025 (Weekends)",
                    "status": "open",
                    "duration": "40+ Hrs",
                    "schedule": "Sat & Sun | 7:30 AM & 7:00 PM IST",
                    "seatsFilled": 5
                },
                {
                    "date": "December 1, 2025",
                    "name": "Batch 3: December 2025 (Flexible)",
                    "status": "new",
                    "duration": "48-56 Hours (Accelerated)",
                    "schedule": "Customized per batch",
                    "seatsFilled": 6
                }
            ]
        },
        {
            "type": "detailed_testimonials",
            "items": [
                {
                    "name": "Shaurya Sen",
                    "role": "SAP MDG Consultant at Capgemini",
                    "text": "Outstanding training on master data governance. I landed a consulting role at Capgemini within 12 weeks of completing the course. The hands-on customer and supplier governance labs made all the difference in understanding real governance implementation. The instructors' expertise with global data governance frameworks was invaluable.",
                    "quote": "Outstanding training on master data governance. I landed a consulting role at Capgemini within 12 weeks of completing the course. The hands-on customer and supplier governance labs made all the difference in understanding real governance implementation. The instructors' expertise with global data governance frameworks was invaluable.",
                    "author": "Shaurya Sen"
                },
                {
                    "name": "Rakesh Kumar",
                    "role": "Master Data Manager",
                    "text": "The weekend flexibility allowed me to learn while working in data management. My employer was so impressed with my MDG expertise that they promoted me to Master Data Manager. This course accelerated my career by 4 years through governance expertise.",
                    "quote": "The weekend flexibility allowed me to learn while working in data management. My employer was so impressed with my MDG expertise that they promoted me to Master Data Manager. This course accelerated my career by 4 years through governance expertise.",
                    "author": "Rakesh Kumar"
                },
                {
                    "name": "Sunita Verma",
                    "role": "Senior MDG Consultant",
                    "text": "Best investment in my career. The capstone projects were exactly like real governance work—building governance frameworks, configuring approval workflows, managing data quality issues. I walked into my first consulting role feeling confident about data governance. The certification support was exceptional.",
                    "quote": "Best investment in my career. The capstone projects were exactly like real governance work—building governance frameworks, configuring approval workflows, managing data quality issues. I walked into my first consulting role feeling confident about data governance. The certification support was exceptional.",
                    "author": "Sunita Verma"
                },
                {
                    "name": "Anil Sharma",
                    "role": "Certified SAP MDG Professional",
                    "text": "Superb certification preparation. I passed the C_SGMDG_1911 exam on my first attempt with 81%. The mock exams and governance scenario practice were thorough. The instructors provided excellent governance strategy guidance.",
                    "quote": "Superb certification preparation. I passed the C_SGMDG_1911 exam on my first attempt with 81%. The mock exams and governance scenario practice were thorough. The instructors provided excellent governance strategy guidance.",
                    "author": "Anil Sharma"
                },
                {
                    "name": "Kavita Joshi",
                    "role": "Governance Consultant at JPMorgan Chase",
                    "text": "The instructor's real-world insights from financial services governance implementations were invaluable. I didn't just learn MDG; I learned how to establish enterprise-wide data governance and compliance frameworks. The alumni network has already brought governance consulting opportunities my way.",
                    "quote": "The instructor's real-world insights from financial services governance implementations were invaluable. I didn't just learn MDG; I learned how to establish enterprise-wide data governance and compliance frameworks. The alumni network has already brought governance consulting opportunities my way.",
                    "author": "Kavita Joshi"
                },
                {
                    "name": "Manoj Gupta",
                    "role": "Governance Analyst at Microsoft",
                    "text": "From zero SAP MDG knowledge to landing my dream role in data governance consulting in 4 months! The instructors are patient, knowledgeable, and truly care about student success. The lifetime recording access is invaluable for reviewing complex governance concepts during projects.",
                    "quote": "From zero SAP MDG knowledge to landing my dream role in data governance consulting in 4 months! The instructors are patient, knowledgeable, and truly care about student success. The lifetime recording access is invaluable for reviewing complex governance concepts during projects.",
                    "author": "Manoj Gupta"
                }
            ]
        },
        {
            "type": "detailed_demo_booking",
            "title": "Ready to Become an SAP MDG Consultant?",
            "benefits": [
                {
                    "desc": "Observe real SAP MDG training and instructor methodology",
                    "title": "Live Session Insight"
                },
                {
                    "desc": "Personalized guidance based on your data governance background",
                    "title": "Career Consultation"
                },
                {
                    "desc": "Ask questions about SAP MDG course, certification, and data careers",
                    "title": "Instructor Q&A"
                },
                {
                    "desc": "Exclusive discount for demo attendees",
                    "title": "Special Offer"
                }
            ],
            "subtitle": "Book your free demo today and take the first step towards a lucrative SAP MDG data governance career"
        },
        {
            "type": "detailed_faq",
            "items": [
                {
                    "a": "SAP Master Data Governance (SAP MDG) is a comprehensive solution for managing, governing, and improving master data quality across enterprises. At ERPVITS, we provide comprehensive SAP MDG Training covering governance frameworks, master data objects, data quality management, and best practices to help you master enterprise data governance.",
                    "q": "What is SAP MDG and how does ERPVITS help me learn it?",
                    "answer": "SAP Master Data Governance (SAP MDG) is a comprehensive solution for managing, governing, and improving master data quality across enterprises. At ERPVITS, we provide comprehensive SAP MDG Training covering governance frameworks, master data objects, data quality management, and best practices to help you master enterprise data governance.",
                    "question": "What is SAP MDG and how does ERPVITS help me learn it?"
                },
                {
                    "a": "Our SAP MDG training teaches you how to establish data governance frameworks, create and manage customer/supplier/product master data objects, implement approval workflows, manage data quality, execute duplicate resolution, and configure governance portals using the SAP MDG platform.",
                    "q": "What will I learn in the SAP MDG course?",
                    "answer": "Our SAP MDG training teaches you how to establish data governance frameworks, create and manage customer/supplier/product master data objects, implement approval workflows, manage data quality, execute duplicate resolution, and configure governance portals using the SAP MDG platform.",
                    "question": "What will I learn in the SAP MDG course?"
                },
                {
                    "a": "Master Data Governance in SAP involves establishing policies, processes, and controls to ensure master data quality, consistency, and compliance across the enterprise. ERPVITS training covers practical governance implementation in real-world scenarios.",
                    "q": "What is Master Data Governance in SAP?",
                    "answer": "Master Data Governance in SAP involves establishing policies, processes, and controls to ensure master data quality, consistency, and compliance across the enterprise. ERPVITS training covers practical governance implementation in real-world scenarios.",
                    "question": "What is Master Data Governance in SAP?"
                },
                {
                    "a": "SAP MDG (Master Data Governance) is a comprehensive governance platform focusing on governance frameworks and data quality management. SAP Master Data Management was an earlier solution. MDG is the modern, recommended approach for enterprise data governance.",
                    "q": "What is the difference between SAP MDG and SAP Master Data Management?",
                    "answer": "SAP MDG (Master Data Governance) is a comprehensive governance platform focusing on governance frameworks and data quality management. SAP Master Data Management was an earlier solution. MDG is the modern, recommended approach for enterprise data governance.",
                    "question": "What is the difference between SAP MDG and SAP Master Data Management?"
                },
                {
                    "a": "SAP MDG enables enterprises to establish data governance frameworks, implement data quality rules, perform duplicate detection and resolution, manage stewardship workflows, monitor data quality metrics, and ensure compliance—all critical for high-quality master data.",
                    "q": "How does SAP MDG support enterprise data quality?",
                    "answer": "SAP MDG enables enterprises to establish data governance frameworks, implement data quality rules, perform duplicate detection and resolution, manage stewardship workflows, monitor data quality metrics, and ensure compliance—all critical for high-quality master data.",
                    "question": "How does SAP MDG support enterprise data quality?"
                },
                {
                    "a": "ERPVITS offers SAP MDG Online Training with live sessions from certified experts, industry-aligned projects, hands-on governance labs, certification support, and comprehensive placement assistance. You'll also receive guidance on MDG certification, resume preparation, and governance interview strategies.",
                    "q": "Why should I join SAP MDG Training at ERPVITS?",
                    "answer": "ERPVITS offers SAP MDG Online Training with live sessions from certified experts, industry-aligned projects, hands-on governance labs, certification support, and comprehensive placement assistance. You'll also receive guidance on MDG certification, resume preparation, and governance interview strategies.",
                    "question": "Why should I join SAP MDG Training at ERPVITS?"
                },
                {
                    "a": "Anyone interested in data governance, master data management, data quality, or SAP technologies can join. Whether you're a fresher, working professional, data manager, or consultant—ERPVITS SAP MDG Course is designed to help you build job-ready governance skills.",
                    "q": "Who can enroll in the SAP MDG Course?",
                    "answer": "Anyone interested in data governance, master data management, data quality, or SAP technologies can join. Whether you're a fresher, working professional, data manager, or consultant—ERPVITS SAP MDG Course is designed to help you build job-ready governance skills.",
                    "question": "Who can enroll in the SAP MDG Course?"
                },
                {
                    "a": "SAP Certified Application Associate - Master Data Governance (C_SGMDG_1911) validates your expertise in data governance frameworks, master data management, and governance implementation. ERPVITS prepares you for the official certification exam and helps you become a recognized SAP MDG professional.",
                    "q": "What is the SAP MDG Certification and why is it valuable?",
                    "answer": "SAP Certified Application Associate - Master Data Governance (C_SGMDG_1911) validates your expertise in data governance frameworks, master data management, and governance implementation. ERPVITS prepares you for the official certification exam and helps you become a recognized SAP MDG professional.",
                    "question": "What is the SAP MDG Certification and why is it valuable?"
                },
                {
                    "a": "The SAP MDG Certification exam (C_SGMDG_1911) cost is determined by SAP Education (~$560 USD or ₹46,000 in India). ERPVITS provides complete exam guidance, practice tests, and mentoring to help you pass the certification successfully on your first attempt.",
                    "q": "What is the SAP MDG certification cost?",
                    "answer": "The SAP MDG Certification exam (C_SGMDG_1911) cost is determined by SAP Education (~$560 USD or ₹46,000 in India). ERPVITS provides complete exam guidance, practice tests, and mentoring to help you pass the certification successfully on your first attempt.",
                    "question": "What is the SAP MDG certification cost?"
                },
                {
                    "a": "SAP MDG course fees at ERPVITS are competitive and depend on the module, training mode, and batch timing. Our pricing ensures maximum value with hands-on learning, live instruction, lab access, placement assistance, and certification support.",
                    "q": "What are the SAP MDG course fees at ERPVITS?",
                    "answer": "SAP MDG course fees at ERPVITS are competitive and depend on the module, training mode, and batch timing. Our pricing ensures maximum value with hands-on learning, live instruction, lab access, placement assistance, and certification support.",
                    "question": "What are the SAP MDG course fees at ERPVITS?"
                },
                {
                    "a": "Join our structured SAP MDG Training Program, complete the live governance projects, prepare for MDG certification, and gain hands-on experience. ERPVITS also offers career counseling and job assistance to help you become a successful SAP MDG Consultant.",
                    "q": "How can I become an SAP MDG Consultant through ERPVITS?",
                    "answer": "Join our structured SAP MDG Training Program, complete the live governance projects, prepare for MDG certification, and gain hands-on experience. ERPVITS also offers career counseling and job assistance to help you become a successful SAP MDG Consultant.",
                    "question": "How can I become an SAP MDG Consultant through ERPVITS?"
                },
                {
                    "a": "After completing SAP MDG Training at ERPVITS, you can apply for roles like MDG Consultant, Master Data Manager, Data Governance Analyst, Data Quality Specialist, or Information Quality Manager. We also share MDG consultant jobs with our learners.",
                    "q": "What career options are available after completing the SAP MDG course?",
                    "answer": "After completing SAP MDG Training at ERPVITS, you can apply for roles like MDG Consultant, Master Data Manager, Data Governance Analyst, Data Quality Specialist, or Information Quality Manager. We also share MDG consultant jobs with our learners.",
                    "question": "What career options are available after completing the SAP MDG course?"
                },
                {
                    "a": "ERPVITS provides detailed sessions on SAP MDG Integration with S/4HANA, explaining governance workflows, master data synchronization, data replication, and end-to-end governance processes within SAP S/4HANA environments.",
                    "q": "How does SAP MDG integrate with SAP S/4HANA?",
                    "answer": "ERPVITS provides detailed sessions on SAP MDG Integration with S/4HANA, explaining governance workflows, master data synchronization, data replication, and end-to-end governance processes within SAP S/4HANA environments.",
                    "question": "How does SAP MDG integrate with SAP S/4HANA?"
                },
                {
                    "a": "Our course covers all major SAP MDG Solutions—Customer Master Data Governance, Supplier Governance, Product Data Governance, Financial Data Governance, Data Quality Management, and Governance Workflows with hands-on practice and real-world scenarios.",
                    "q": "What are the main SAP MDG Solutions covered in the course?",
                    "answer": "Our course covers all major SAP MDG Solutions—Customer Master Data Governance, Supplier Governance, Product Data Governance, Financial Data Governance, Data Quality Management, and Governance Workflows with hands-on practice and real-world scenarios.",
                    "question": "What are the main SAP MDG Solutions covered in the course?"
                },
                {
                    "a": "A master data governance tutorial guides professionals through governance concepts, best practices, and tool functionality. ERPVITS provides comprehensive tutorials, videos, and hands-on guidance to help you master MDG governance implementation.",
                    "q": "What is Master Data Governance Tutorial and how can it help?",
                    "answer": "A master data governance tutorial guides professionals through governance concepts, best practices, and tool functionality. ERPVITS provides comprehensive tutorials, videos, and hands-on guidance to help you master MDG governance implementation.",
                    "question": "What is Master Data Governance Tutorial and how can it help?"
                },
                {
                    "a": "Yes! ERPVITS offers comprehensive SAP MDG Training with Placement assistance. We help you build an impressive profile, prepare for interviews, connect with recruiters, and support your transition into SAP MDG governance and management roles.",
                    "q": "Does ERPVITS provide SAP MDG Training with Placement support?",
                    "answer": "Yes! ERPVITS offers comprehensive SAP MDG Training with Placement assistance. We help you build an impressive profile, prepare for interviews, connect with recruiters, and support your transition into SAP MDG governance and management roles.",
                    "question": "Does ERPVITS provide SAP MDG Training with Placement support?"
                },
                {
                    "a": "Absolutely. ERPVITS provides SAP MDG Online Training accessible from any location worldwide. Learn with live instructors, access recorded sessions, and practice on MDG systems remotely with 24/7 lab access.",
                    "q": "Can I take SAP MDG Online Training from anywhere?",
                    "answer": "Absolutely. ERPVITS provides SAP MDG Online Training accessible from any location worldwide. Learn with live instructors, access recorded sessions, and practice on MDG systems remotely with 24/7 lab access.",
                    "question": "Can I take SAP MDG Online Training from anywhere?"
                },
                {
                    "a": "Yes, ERPVITS offers both online and classroom options. We conduct SAP MDG Training in Hyderabad, Pune, Bangalore, and other cities, along with flexible weekend and weekday batches for working professionals.",
                    "q": "Is SAP MDG Training available in Pune, Hyderabad, and Bangalore?",
                    "answer": "Yes, ERPVITS offers both online and classroom options. We conduct SAP MDG Training in Hyderabad, Pune, Bangalore, and other cities, along with flexible weekend and weekday batches for working professionals.",
                    "question": "Is SAP MDG Training available in Pune, Hyderabad, and Bangalore?"
                },
                {
                    "a": "At ERPVITS, we not only train you technically but also guide you in your SAP MDG Career journey with resume building, interview preparation, mock consultations, and job referrals across leading SAP consulting companies and data governance organizations.",
                    "q": "How does ERPVITS help in SAP MDG Careers?",
                    "answer": "At ERPVITS, we not only train you technically but also guide you in your SAP MDG Career journey with resume building, interview preparation, mock consultations, and job referrals across leading SAP consulting companies and data governance organizations.",
                    "question": "How does ERPVITS help in SAP MDG Careers?"
                },
                {
                    "a": "SAP MDG is a high-demand skill with growing organizational focus on data governance—320%+ increase in job openings, fewer qualified professionals, premium salaries (15-30% higher), and expanding opportunities across finance, healthcare, retail, and technology industries.",
                    "q": "What makes SAP MDG a lucrative career choice?",
                    "answer": "SAP MDG is a high-demand skill with growing organizational focus on data governance—320%+ increase in job openings, fewer qualified professionals, premium salaries (15-30% higher), and expanding opportunities across finance, healthcare, retail, and technology industries.",
                    "question": "What makes SAP MDG a lucrative career choice?"
                },
                {
                    "a": "The average timeline from course completion to first SAP MDG role is 2-3 months with active job search and career support from ERPVITS. Many learners secure opportunities within 4-8 weeks of certification completion.",
                    "q": "How long does it take to get a job after SAP MDG training?",
                    "answer": "The average timeline from course completion to first SAP MDG role is 2-3 months with active job search and career support from ERPVITS. Many learners secure opportunities within 4-8 weeks of certification completion.",
                    "question": "How long does it take to get a job after SAP MDG training?"
                },
                {
                    "a": "The most sought-after MDG content includes customer governance, supplier governance, product governance, data quality management, governance workflows, and compliance frameworks—all covered comprehensively in our ERPVITS training program.",
                    "q": "What is the most sought-after SAP MDG functional training content?",
                    "answer": "The most sought-after MDG content includes customer governance, supplier governance, product governance, data quality management, governance workflows, and compliance frameworks—all covered comprehensively in our ERPVITS training program.",
                    "question": "What is the most sought-after SAP MDG functional training content?"
                }
            ]
        }
    ],
    "curriculum": [],
    "faqs": [],
    "schema": ""
};
