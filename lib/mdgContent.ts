import { ShieldCheck, Database, FileText, Settings, Users, BarChart, Globe, Briefcase, GraduationCap, CheckCircle, Star, Clock, Laptop, Building2, UserCheck, Search, Filter, Server, Layout } from 'lucide-react';

export const mdgTargetAudience = [
    {
        icon: "ShieldCheck",
        title: "Data Governance & Quality Professionals",
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
        title: "SAP & ERP Professionals",
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
        title: "Finance & Operations Professionals",
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
        title: "Fresh Graduates & Career Changers",
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

export const mdgLearningOutcomes = [
    {
        title: "Master Data Governance Framework Design",
        description: "Design comprehensive data governance frameworks for enterprises.",
        icon: "Layout",
        points: [
            "Establish governance policies and procedures",
            "Define stewardship roles and responsibilities",
            "Create governance metrics and KPI frameworks",
            "Align organizational structure for effective governance"
        ]
    },
    {
        title: "Customer Master Data Governance Excellence",
        description: "Configure customer master data hierarchies and duplicate detection.",
        icon: "UserCheck",
        points: [
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
            "Configure supplier hierarchies and relationships",
            "Implement supplier onboarding governance processes",
            "Manage supplier compliance and risk data",
            "Execute supplier data consolidation"
        ]
    },
    {
        title: "Product Master Data Governance",
        description: "Create product hierarchies and variant structures.",
        icon: "Box", // Using Box as a proxy for Product
        points: [
            "Implement product data classification standards",
            "Configure product approval and release workflows",
            "Establish product data quality rules",
            "Manage product synchronization across systems"
        ]
    },
    {
        title: "Financial Master Data and GL Governance",
        description: "Establish Chart of Accounts governance.",
        icon: "DollarSign", // Using DollarSign proxy
        points: [
            "Implement cost center and profit center management",
            "Configure financial approval workflows",
            "Establish financial data quality standards",
            "Manage GL account consolidation"
        ]
    },
    {
        title: "Data Quality Management and Validation",
        description: "Design data quality frameworks and validation rules.",
        icon: "CheckCircle",
        points: [
            "Create data quality rules and validation",
            "Execute data cleansing and enrichment",
            "Manage duplicate detection workflows",
            "Monitor and report on data quality metrics"
        ]
    }
];

export const mdgRealWorldScenarios = [
    {
        title: "Global Financial Services Customer Data Governance",
        description: "A multinational financial services company needs SAP MDG to consolidate customer data, ensure regulatory compliance (KYC, AML), and reduce data quality issues.",
        role: "Lead SAP MDG Consultant",
        outcome: "Single customer view achieved, 100% regulatory compliance, data quality score improved from 65% to 95%.",
        responsibilities: [
            "Design customer data governance framework across 50 entities",
            "Configure customer master data object and hierarchies",
            "Implement duplicate customer detection and consolidation",
            "Set up customer approval and enrichment workflows",
            "Configure regulatory compliance validation rules",
            "Create customer data quality dashboards"
        ]
    },
    {
        title: "Manufacturing Company's Supplier and Product Governance",
        description: "A global manufacturing company needs SAP MDG to establish supplier governance, ensure product data consistency, and consolidate duplicates.",
        role: "SAP MDG Consultant",
        outcome: "8,000 duplicate suppliers resolved, product data accuracy 98%, procurement efficiency improved by 35%.",
        responsibilities: [
            "Design supplier and product governance frameworks",
            "Configure supplier/product master data hierarchies",
            "Implement supplier onboarding governance process",
            "Set up duplicate supplier and product resolution",
            "Create approval workflows for changes",
            "Implement data quality rules and monitoring"
        ]
    },
    {
        title: "Retail Organization's Master Data Governance",
        description: "A retail chain with 1,000+ stores needs SAP MDG for e-commerce and store data accuracy, and GDPR compliance.",
        role: "Governance Consultant",
        outcome: "GDPR compliance 100%, product data completeness improved to 96%, audit readiness achieved.",
        responsibilities: [
            "Design multi-country governance framework",
            "Configure customer, supplier, and product master data",
            "Implement compliance validation rules (GDPR)",
            "Set up product data enrichment workflows",
            "Design customer and vendor hierarchies",
            "Implement data quality monitoring"
        ]
    },
    {
        title: "Healthcare Organization's Patient Data Governance",
        description: "A healthcare organization needs SAP MDG to ensure patient data accuracy, HIPAA compliance, and duplicate record consolidation.",
        role: "Solution Architect",
        outcome: "HIPAA compliance 100%, duplicate patient records reduced by 85%, patient data accuracy 99%.",
        responsibilities: [
            "Design patient and medical supply governance frameworks",
            "Implement HIPAA-compliant data governance",
            "Configure duplicate patient detection and resolution",
            "Set up patient and provider hierarchies",
            "Implement patient consent and privacy management",
            "Create compliance and security governance"
        ]
    }
];

export const mdgContent = {
    heroHeading: "Master Data Excellence with the #1 SAP MDG Online Training Program",
    heroSubheading: "Excel in data quality management, organizational data governance, and enterprise information management with expert-led training.",

    title: "SAP MDG",
    description: "The SAP Master Data Governance Online Training Program from ERPVITS offers a transformative learning pathway for professionals to excel in data quality management and governance.",
    badges: ["Rated #1 SAP MDG Training Program 2025"],
    heroStats: [
        { icon: "award", label: "SAP Certified Trainers" },
        { icon: "star", label: "4.8 Learner Rating" },
        { icon: "clock", label: "24/7 Team Support" },
        { icon: "briefcase", label: "12+ Years Experience" }
    ],
    buttonLabels: {
        primary: "Book Your Free Demo Class →",
        secondary: "View Curriculum"
    },
    metaTitle: "SAP MDG Training Online – Master Data Governance Course",
    metaDescription: "Master enterprise data governance with SAP MDG training. Learn data quality, governance frameworks, hands-on labs, and certification support. Enroll Now",

    features: [],
    sections: [
        {
            type: 'detailed_features',
            title: "Learn SAP MDG from Certified Experts – 100% Hands-On, Job-Oriented Training",
            subtitle: "Delivered exclusively by certified SAP professionals with 12+ years of direct implementation experience in master data management.",
            badge: "Why Choose Us",
            items: [
                {
                    title: "Certified Instructor Expertise",
                    description: "Trainers hold official SAP certifications and have led multiple enterprise-scale SAP MDG implementations."
                },
                {
                    title: "100% Hands-On Learning Methodology",
                    description: "Every session includes live demonstrations and guided lab exercises to configure data governance frameworks on real systems."
                },
                {
                    title: "Job-Oriented Curriculum Design",
                    description: "Designed around the exact skills, responsibilities, and problem-solving scenarios faced by SAP MDG consultants."
                },
                {
                    title: "Interactive Q&A Sessions",
                    description: "Dedicated forums and live office hours for addressing doubts and clarifying complex topics like change data capture."
                },
                {
                    title: "Flexible Batch Timings",
                    description: "Weekday evening batches (6 PM – 9 PM IST) and weekend batches (Saturday & Sunday). Sessions are recorded."
                },
                {
                    title: "Small Batch Sizes",
                    description: "Capped at 8-10 participants to ensure personalized attention and targeted feedback."
                },
                {
                    title: "Placement & Career Support",
                    description: "Resume building, mock interviews, and practice with real-world interview questions for data governance roles."
                },
                {
                    title: "Active Alumni Network",
                    description: "Join a thriving community of SAP MDG professionals to exchange tips and build relationships."
                },
                {
                    title: "Ongoing Support Post-Training",
                    description: "Six months of instructor guidance after training for clarification and project challenges."
                }
            ]
        },
        {
            type: 'content_with_image',
            title: "Why Professionals Choose ERPVITS for SAP MDG Online Training",
            subtitle: "Success Guarantee & Credibility",
            description: "ERPVITS has established itself as a trusted training partner, with hundreds of successful learners working at top consulting firms like Accenture, Capgemini, and Deloitte. Our alumni network testimonials speak to the quality of instruction.",
            items: [
                "Trusted by 500+ successful SAP professionals",
                "Alumni at Accenture, Capgemini, Deloitte, and leading financial firms",
                "Personalized pre-evaluation and learning path customization",
                "Active alumni network for data governance professionals",
                "70+ guided lab exercises from basic to advanced scenarios",
                "Quarterly updated materials aligned with latest SAP MDG releases",
                "Mock interviews simulating real consultant scenarios",
                "Dedicated certification prep week before exams"
            ]
        },
        {
            type: 'whats_included',
            content: "A complete, career-focused SAP Master Data Governance training program combining live expert sessions, real-world projects, hands-on labs, certification preparation, and ongoing career support.",
            stats: [
                { value: "48-56", label: "Hours of Live Training" },
                { value: "70+", label: "Hands-On Lab Exercises" },
                { value: "100%", label: "Placement Support" }
            ]
        },
        {
            type: 'detailed_curriculum',
            title: "Comprehensive SAP MDG Course Curriculum",
            modules: [
                {
                    title: "Module 1: Introduction to SAP MDG and Master Data Governance",
                    duration: "5 Hours",
                    learning_points: [
                        "Overview of SAP MDG and role in enterprise information management",
                        "Key features: data quality, governance, consolidation, stewardship",
                        "Master data concepts and terminology",
                        "Governance framework principles and models",
                        "Data governance lifecycle and processes",
                        "System architecture and components"
                    ],
                    hands_on: [
                        "Navigate SAP MDG user interface",
                        "Explore governance workflows and processes",
                        "Understand master data object types",
                        "Create basic governance configurations"
                    ]
                },
                {
                    title: "Module 2: Master Data Governance Framework and Strategy",
                    duration: "6 Hours",
                    learning_points: [
                        "Governance framework design and implementation",
                        "Data governance policies and procedures",
                        "Master data stewardship organization and roles",
                        "Governance metrics and KPI definition",
                        "Compliance and regulatory requirements",
                        "Change management for governance implementations"
                    ],
                    hands_on: [
                        "Design governance frameworks",
                        "Define governance policies and procedures",
                        "Create stewardship organizational structures",
                        "Develop governance KPIs"
                    ]
                },
                {
                    title: "Module 3: Customer Master Data Governance",
                    duration: "8 Hours",
                    learning_points: [
                        "Customer master data governance processes",
                        "Customer data governance policies and standards",
                        "Customer hierarchy management and consolidation",
                        "Duplicate customer detection and resolution",
                        "Customer data enrichment workflows",
                        "Customer approval processes and workflows"
                    ],
                    hands_on: [
                        "Create customer master data objects",
                        "Set up customer hierarchy management",
                        "Configure customer approval workflows",
                        "Execute duplicate customer resolution"
                    ]
                },
                {
                    title: "Module 4: Supplier Master Data Governance",
                    duration: "8 Hours",
                    learning_points: [
                        "Supplier master data governance strategy",
                        "Supplier hierarchy and relationship management",
                        "Supplier data quality standards",
                        "Supplier onboarding governance processes",
                        "Supplier approval workflows and compliance",
                        "Supplier data consolidation"
                    ],
                    hands_on: [
                        "Create supplier master data objects",
                        "Set up supplier hierarchy management",
                        "Configure supplier approval workflows",
                        "Execute supplier onboarding processes"
                    ]
                },
                {
                    title: "Module 5: Product Master Data Governance",
                    duration: "7 Hours",
                    learning_points: [
                        "Product master data governance frameworks",
                        "Product data standards and classifications",
                        "Product hierarchy and variant management",
                        "Product data workflow processes",
                        "Product approval and release processes",
                        "Product data synchronization across systems"
                    ],
                    hands_on: [
                        "Create product master data objects",
                        "Set up product hierarchies and variants",
                        "Configure product approval workflows",
                        "Execute product data synchronization"
                    ]
                },
                {
                    title: "Module 6: Financial Master Data Governance",
                    duration: "6 Hours",
                    learning_points: [
                        "General Ledger account governance",
                        "Cost center and profit center governance",
                        "Internal order and project governance",
                        "Financial data standards and compliance",
                        "Chart of accounts management",
                        "Financial governance workflows"
                    ],
                    hands_on: [
                        "Create GL account governance objects",
                        "Set up cost center hierarchies",
                        "Configure financial approval workflows",
                        "Execute GL account consolidation"
                    ]
                },
                {
                    title: "Module 7: Data Quality Management and Validation",
                    duration: "6 Hours",
                    learning_points: [
                        "Data quality frameworks and dimensions",
                        "Data quality rules and validation",
                        "Master data cleansing and enrichment",
                        "Duplicate detection and resolution",
                        "Data quality monitoring and reporting",
                        "Root cause analysis for data quality issues"
                    ],
                    hands_on: [
                        "Create data quality rules",
                        "Execute duplicate detection",
                        "Perform data cleansing workflows",
                        "Develop data quality dashboards"
                    ]
                },
                {
                    title: "Module 8: MDG Integration with SAP S/4HANA and Other Systems",
                    duration: "7 Hours",
                    learning_points: [
                        "MDG integration architecture",
                        "Integration with SAP S/4HANA modules",
                        "Master data replication and synchronization",
                        "Change data capture (CDC) mechanisms",
                        "Real-time and batch data loading",
                        "Data governance in cloud environments"
                    ],
                    hands_on: [
                        "Configure MDG-S/4HANA integration",
                        "Set up data replication workflows",
                        "Execute master data synchronization",
                        "Configure change data capture"
                    ]
                },
                {
                    title: "Module 9: Governance Portals, Workflows and Collaboration",
                    duration: "5 Hours",
                    learning_points: [
                        "Governance portal configuration and customization",
                        "Workflow design and automation",
                        "Task management and notifications",
                        "Stakeholder collaboration features",
                        "Role-based access and security",
                        "Governance reporting and dashboards"
                    ],
                    hands_on: [
                        "Configure governance portals",
                        "Design governance workflows",
                        "Set up task assignments and notifications",
                        "Create role-based access controls"
                    ]
                },
                {
                    title: "Module 10: Advanced Topics, Best Practices and Transformation",
                    duration: "4 Hours",
                    learning_points: [
                        "Governance transformation programs",
                        "Enterprise-wide data governance initiatives",
                        "Governance metrics and KPI frameworks",
                        "Change management and organizational adoption",
                        "Industry best practices in master data governance",
                        "Future trends in data governance"
                    ],
                    hands_on: [
                        "Develop governance transformation roadmap",
                        "Create enterprise governance program plans",
                        "Build governance dashboards and metrics",
                        "Design organizational change approaches"
                    ]
                }
            ]
        },
        {
            type: 'detailed_target_audience',
            items: mdgTargetAudience
        },
        {
            type: 'detailed_prerequisites',
            items: mdgPrerequisites
        },
        {
            type: 'detailed_learning_outcomes',
            items: mdgLearningOutcomes
        },
        {
            type: 'real_world_scenarios',
            items: mdgRealWorldScenarios
        },
        {
            type: 'detailed_certification',
            content: "We Provide Support for SAP Certified Application Associate – Master Data Governance (Exam Code: C_SGMDG_1911).",
            items: [
                {
                    title: "SAP Certified Application Associate – Master Data Governance",
                    code: "(C_SGMDG_1911)",
                    focus: "Master Data Governance Fundamentals, Customer/Supplier/Product Governance, Data Quality, Workflows.",
                    who: "Data governance consultants, master data managers, data stewards.",
                    relevance: "Essential for data governance leadership and consulting roles."
                }
            ]
        },
        {
            type: 'detailed_career_opportunities',
            items: [
                {
                    title: "SAP MDG Consultant (Entry Level)",
                    salary: "$105,000 - $125,000",
                    responsibilities: "Configure governance processes, manage workflows, support data quality.",
                    employers: "Accenture, Capgemini, JPMorgan Chase, Microsoft",
                    path: "2-3 years -> Mid-level Consultant",
                    icon: "Briefcase",
                    color: "blue"
                },
                {
                    title: "Master Data Manager",
                    salary: "$90,000 - $120,000",
                    responsibilities: "Oversee master data quality, manage approvals, lead stewardship teams.",
                    employers: "Financial Services, Healthcare, Technology",
                    path: "3-4 years -> Senior Data Governance Manager",
                    icon: "ShieldCheck",
                    color: "green"
                },
                {
                    title: "Data Governance Consultant",
                    salary: "$100,000 - $135,000",
                    responsibilities: "Design data governance frameworks, implement MDG solutions, drive alignment.",
                    employers: "Global Consulting Firms, Enterprise Companies",
                    path: "4-6 years -> Senior Consultant",
                    icon: "TrendingUp",
                    color: "orange"
                },
                {
                    title: "Information Quality Specialist",
                    salary: "$95,000 - $130,000",
                    responsibilities: "Monitor metrics, perform root cause analysis, lead improvement initiatives.",
                    employers: "Consulting, Technology, Financial Services",
                    path: "3-5 years -> Senior Quality Manager",
                    icon: "Search",
                    color: "purple"
                },
                {
                    title: "SAP MDG Solution Architect",
                    salary: "$120,000 - $170,000",
                    responsibilities: "Design enterprise solutions, lead governance programs, drive innovation.",
                    employers: "Consulting, Technology, Enterprise",
                    path: "6-10 years -> Principal Consultant",
                    icon: "Building2",
                    color: "cyan"
                }
            ]
        },
        {
            type: 'detailed_companies',
            items: [
                "Accenture", "Capgemini", "Deloitte", "EY", "KPMG", "IBM",
                "Infosys", "Wipro", "Cognizant", "TCS",
                "JPMorgan Chase", "Goldman Sachs", "Microsoft", "Amazon", "Apple",
                "Siemens", "GE Healthcare", "Johnson & Johnson", "Salesforce", "Oracle"
            ]
        },
        {
            type: 'detailed_post_training_journey'
        },
        {
            type: 'detailed_upcoming_batches',
            batches: [
                {
                    name: "Batch 1: November 2025 (Weekdays)",
                    status: "filling_fast",
                    date: "November 15, 2025",
                    schedule: "Mon-Fri | 7:00 AM & 8:00 PM IST",
                    duration: "48-56 Hours",
                    seatsFilled: 4
                },
                {
                    name: "Batch 2: November 2025 (Weekends)",
                    status: "open",
                    date: "November 16, 2025",
                    schedule: "Sat & Sun | 7:30 AM & 7:00 PM IST",
                    duration: "48-56 Hours",
                    seatsFilled: 5
                },
                {
                    name: "Batch 3: December 2025 (Flexible)",
                    status: "new",
                    date: "December 1, 2025",
                    schedule: "Customized per batch",
                    duration: "48-56 Hours (Accelerated)",
                    seatsFilled: 6
                }
            ]
        },
        {
            type: 'detailed_testimonials',
            items: [
                {
                    name: "Priya Sharma",
                    role: "SAP MDG Consultant at Capgemini",
                    quote: "Outstanding training. I landed a consulting role within 12 weeks. The hands-on governance labs made all the difference in understanding real implementation."
                },
                {
                    name: "Rajesh Kumar",
                    role: "Master Data Manager",
                    quote: "My employer was so impressed with my MDG expertise that they promoted me to Master Data Manager. Accelerated my career by 4 years."
                },
                {
                    name: "Amit Patel",
                    role: "Senior MDG Consultant",
                    quote: "Best investment. The capstone projects were exactly like real governance work. Walking into my first consulting role, I felt confident."
                },
                {
                    name: "Sneha Reddy",
                    role: "Certified SAP MDG Professional",
                    quote: "Superb certification preparation. Passed C_SGMDG_1911 on first attempt with 81%. Excellent governance strategy guidance."
                }
            ]
        },
        {
            type: 'detailed_demo_booking'
        },
        {
            type: 'detailed_faq',
            items: [
                {
                    q: "What is SAP MDG and how does ERPVITS help me learn it?",
                    a: "SAP Master Data Governance (MDG) manages master data quality across enterprises. ERPVITS provides comprehensive training covering frameworks, data quality, and hands-on governance workflows."
                },
                {
                    q: "What will I learn in the SAP MDG course?",
                    a: "You'll learn to establish governance frameworks, manage master data objects (customer/supplier/product), implement workflows, and execute data quality checks."
                },
                {
                    q: "What is Master Data Governance in SAP?",
                    a: "It involves policies, processes, and controls for master data quality and compliance. We cover practical implementation in real-world scenarios."
                },
                {
                    q: "Difference between SAP MDG and MDM?",
                    a: "MDG is the modern governance platform focusing on frameworks and quality integration, whereas MDM is the legacy term/solution."
                },
                {
                    q: "Does ERPVITS provide placement support?",
                    a: "Yes, 100% placement assistance including resume building, mock interviews, and job referrals."
                }
            ]
        }
    ]
};
