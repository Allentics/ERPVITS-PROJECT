import { Code, Cloud, Database, Layout, Settings, Smartphone, Zap, MonitorSmartphone, Layers, ShieldCheck, Terminal, Globe, UserCheck, Briefcase, GraduationCap, Users } from 'lucide-react';

export const c4cTechnicalTargetAudience = [
    {
        icon: "Terminal",
        title: "Developers & Technical Professionals",
        description: [
            "SAP ABAP developers converting to cloud development",
            "Full-stack developers wanting cloud skills",
            "Technical architects creating cloud solutions",
            "Enterprise systems developers"
        ]
    },
    {
        icon: "Cloud",
        title: "SAP & Cloud Consultants",
        description: [
            "SAP functional consultants needing technical skills",
            "Cloud consultants wanting SAP C4C",
            "Business analysts wanting to develop",
            "C4C technical consultants"
        ]
    },
    {
        icon: "MonitorSmartphone",
        title: "IT & Systems Leaders",
        description: [
            "IT managers updating systems design",
            "Systems admins wanting to level up their skills",
            "Project managers handling cloud tech projects",
            "Infrastructure teams going cloud-first"
        ]
    },
    {
        icon: "GraduationCap",
        title: "Fresh Graduates & Career Changers",
        description: [
            "Engineering grads targeting cloud SAP jobs",
            "Computer science grads looking for enterprise software",
            "IT professionals transforming to SAP",
            "Career changers with solid coding skills"
        ]
    },
    {
        icon: "Users",
        title: "Existing SAP C4C Users & Project Teams",
        description: [
            "People at companies working with SAP C4C systems",
            "Super users wanting more systems development knowledge",
            "IT teams on C4C SAP cloud implementations",
            "Project teams doing custom C4C cloud changes"
        ]
    }
];

export const c4cTechnicalPrerequisites = {
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

export const c4cTechnicalLearningOutcomes = {
    tabs: [
        {
            name: "Functional Configuration",
            items: [
                {
                    title: "Sales & Service Cloud Processes",
                    icon: "Cloud",
                    points: [
                        "Configure Lead-to-Opportunity workflows",
                        "Manage Service Tickets and SLAs",
                        "Set up Territory Management and Routing Rules",
                        "Configure Activity Management and Visits"
                    ]
                },
                {
                    title: "Org Structure & Master Data",
                    icon: "Database",
                    points: [
                        "Define Organizational Hierarchy",
                        "Manage Business Partners (Accounts, Contacts)",
                        "Configure Product Lists and Price Lists",
                        "Manage Employee and User setup"
                    ]
                }
            ]
        },
        {
            name: "Technical Development",
            items: [
                {
                    title: "Cloud Application Studio (SDK)",
                    icon: "Laptop",
                    points: [
                        "Develop custom Business Objects (BOs)",
                        "Write ABSL and BODL scripts",
                        "Manage Lifecycle Management and patches",
                        "Debug and traceability of custom logic"
                    ]
                },
                {
                    title: "UI & Integration",
                    icon: "Layout",
                    points: [
                        "Design Screens using UI Designer",
                        "Create Embedded Components and Mashups",
                        "Configure OData Services and Web Services",
                        "Manage CPI Integration scenarios"
                    ]
                }
            ]
        }
    ]
};

export const c4cTechnicalRealWorldScenarios = [
    {
        title: "Global Enterprise's Customer Engagement Platform",
        description: "A multinational enterprise needs custom customer engagement applications in SAP C4C extending standard functionalities with complex business logic and external integrations.",
        role: "Lead SAP C4C Developer",
        outcome: "Delivered a comprehensive engagement platform with custom objects and real-time integrations.",
        responsibilities: [
            "Design custom business objects for customer needs",
            "Develop complex ABSL logic and validations",
            "Create engaging UI experiences and dashboards",
            "Integrate external data sources and services"
        ]
    },
    {
        title: "Technology Company's Cloud API Platform",
        description: "Implementation of extensive integrations with external systems requiring solid API development and web service connections.",
        role: "Integration Engineer",
        outcome: "Seamless connectivity with external legacy systems and real-time data sync.",
        responsibilities: [
            "Develop extensive web service integrations (SOAP/REST)",
            "Implement external system connectivity adapters",
            "Set up error handling and retry mechanisms",
            "Build integration monitoring dashboards"
        ]
    },
    {
        title: "SaaS Provider's Multi-Tenant Application",
        description: "Developing multi-tenant cloud applications in SAP C4C with sub-applications for client-specific customizations.",
        role: "Cloud Solution Architect",
        outcome: "Scalable multi-tenant architecture with isolated client configurations.",
        responsibilities: [
            "Create business objects that can be expanded dynamically",
            "Create configurations for individual tenants",
            "Build end-user customization interfaces",
            "Optimize applications for performance and multi-tenancy"
        ]
    }
];

export const c4cContent = {
    price: "Competitive",
    duration: "30-35 Hours",
    syllabusUrl: "/syllabus/ERPVITS Syllabus - Course Contents Pdf/SAP Technical/sap-c4c-technical.pdf",
    heroHeading: "End-to-End SAP C4C Technical Training with Real-Time Implementation",
    heroSubheading: "Master Cloud Application Studio, ABSL scripting, UI Designer, and cloud integration through real-world projects.",

    title: "SAP C4C Technical",
    description: "The ERPVITS SAP C4C Technical Training Program is a transformative learning experience for developers and consultants. Master building custom cloud applications, integrating business objects, and leading digital transformation with hands-on lab work and complete certification support.",
    badges: ["Rated #1 SAP C4C Technical Training 2025"],
    heroStats: [
        { icon: "award", label: "SAP Certified Trainers" },
        { icon: "star", label: "4.7 Learner Rating" },
        { icon: "clock", label: "24/7 Team Support" }
    ],
    buttonLabels: {
        primary: "Book Your Free Demo Class",
        secondary: "View Curriculum"
    },
    metaTitle: "SAP C4C Technical Training with Live Projects | Join Now",
    metaDescription: "Advance your career with ERPVITS SAP C4C Technical Training. Get real-world project experience, certification prep & placement support for global SAP roles.",
    schema: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Course",
        "name": "SAP C4C Technical Online Training",
        "description": "Master SAP C4C Technical with ERPVITS — a complete online training program designed for developers, consultants, and cloud professionals. Learn ABSL scripting, UI Designer, and cloud integration through real-world projects and certification guidance.",
        "provider": {
            "@type": "Organization",
            "name": "ERPVITS",
            "url": "https://www.erpvits.com",
            "logo": "https://www.erpvits.com/images/erpvits-logo.webp"
        },
        "url": "https://www.erpvits.com/sap-c4c-technical-online-training/",
        "image": "https://www.erpvits.com/images/erpvits-logo.webp",
        "inLanguage": "en",
        "audience": {
            "@type": "Audience",
            "audienceType": [
                "Developers",
                "Technical Consultants",
                "Cloud Architects",
                "ERP Professionals",
                "Aspiring Graduates"
            ]
        },
        "courseMode": "Online",
        "timeRequired": "PT35H",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "bestRating": "5",
            "ratingCount": "274"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online Instructor-Led",
            "location": {
                "@type": "Online",
                "url": "https://www.erpvits.com/sap-c4c-technical-online-training/"
            },
            "offers": {
                "@type": "Offer",
                "url": "https://www.erpvits.com/sap-c4c-technical-online-training/",
                "price": "Contact for details",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock"
            }
        }
    }),

    features: [],
    sections: [
        {
            type: 'detailed_features',
            title: "Learn SAP C4C Technical Development from Certified Experts – 100% Hands-On, Job-Oriented Training",
            subtitle: "Your SAP C4C Technical Online Training training courses and materials are designed specifically for you by certified SAP trainers and cloud application development professionals.",
            badge: "Why Choose Us",
            items: [
                {
                    title: "Certified Expert Trainers",
                    description: "Each certified SAP C4C trainer has executed and managed multiple enterprise-scale SAP C4C implementations and cloud development projects. They share real-world industry cloud deployment best and worst practices."
                },
                {
                    title: "100% Hands-On Learning Methodology",
                    description: "Every session incorporates live presentations on the SAP C4C systems and subsequent guided lab exercises. You will build custom applications, develop UI components, and integrate web services on real live cloud systems."
                },
                {
                    title: "Job-Oriented Curriculum Design",
                    description: "Designed with the appropriate skills, responsibilities, and real-life situational problem solving that you will encounter in the field as an SAP C4C developer."
                },
                {
                    title: "Interactive Q&A Sessions",
                    description: "Specific times for questions and answers, as well as live office hours, where the instructors will resolve your questions and explain complicated development issues."
                },
                {
                    title: "Flexible Batch Timings",
                    description: "We offer weekday evening batches (6 PM – 9 PM IST) and weekend batches (Saturday & Sunday). Sessions are recorded for asynchronous catch-up."
                },
                {
                    title: "Personalized Attention",
                    description: "We cap our classes at 8 to 10 people so that your instructor can focus on your strengths, difficulties, and personal learning plan."
                },
                {
                    title: "Career & Placement Aim",
                    description: "Supportive career staff help you prepare an SAP-geared resume, handle mock interviews, and practice the latest interview questions."
                },
                {
                    title: "Ongoing Support After Training",
                    description: "For six months after the course, the instructor will still be your mentor to clarify concepts and help during challenging real-world projects."
                }
            ]
        },
        {
            type: 'content_with_image',
            title: "Why Professionals Choose ERPVITS for SAP C4C Technical Online Training",
            subtitle: "Trusted by 450+ successful SAP C4C developers.",
            videoSrc: "https://www.youtube.com/embed/EtlUBjNMsbM",
            description: "ERPVITS is known as a training partner for SAP Cloud technologies because thousands of learners started working with leading consulting firms like Accenture, Capgemini, Deloitte, Infosys, and Wipro.",
            items: [
                "Alumni at Accenture, Capgemini, Deloitte, Infosys and Wipro",
                "Tailored pre-evaluation and cloud development learning path",
                "Active alumni network and cloud developer community forum",
                "Over 40 guided lab exercises from intro to advanced scenarios",
                "Materials revised every quarter to align with the latest C4C releases",
                "Mock interviews simulating C4C developer real world scenarios"
            ]
        },
        {
            type: 'whats_included',
            title: "What's Included in the SAP C4C Technical Training – Complete Learning Package",
            content: "To help you get ready for the job, we designed a focused career-oriented program that contains live sessions with experts, real cloud development projects, and ongoing career support.",
            stats: [
                { value: "30-35", label: "Hours of Live Training" },
                { value: "40+", label: "Hands-On Lab Exercises" },
                { value: "24/7", label: "SAP C4C Lab Access" }
            ],
            items: [
                "Live Interactive Classes (30-35 hours)",
                "Real-World Projects modeled on Fortune 500 companies",
                "Hands-On Lab Environment access",
                "Certification Exam Prep (C_C4C_90)",
                "Resume & Interview Coaching",
                "Lifetime Recording Access"
            ]
        },
        {
            type: 'detailed_curriculum',
            title: "Comprehensive SAP C4C Technical Course Curriculum",
            subtitle: "30-35 hours of expert-led training covering every aspect from basics to advanced development",
            modules: [
                {
                    title: "Module 1: SAP C4C Foundation & Architecture",
                    duration: "4 Hours",
                    learning_points: [
                        "SAP C4C platform overview and benefits",
                        "Cloud architecture and deployment models",
                        "System environment and IDE setup",
                        "Development tools and configuration environment",
                        "Integration landscape and cloud connectivity",
                        "Security and authentication frameworks"
                    ],
                    hands_on: [
                        "Set up development environment",
                        "Navigate SAP C4C interface",
                        "Configure system connections",
                        "Explore cloud architecture components"
                    ]
                },
                {
                    title: "Module 2: BODL & ABSL Development",
                    duration: "8 Hours",
                    learning_points: [
                        "Business Object Definition Language (BODL) fundamentals",
                        "Object hierarchy and relationships",
                        "ABSL (ABAP Simple Logic) introduction and syntax",
                        "Actions, events, and event handlers",
                        "Custom logic and business rule implementation",
                        "Data validation and error handling"
                    ],
                    hands_on: [
                        "Create custom business objects",
                        "Write ABSL code for business logic",
                        "Implement actions and events",
                        "Debug and test business logic"
                    ]
                },
                {
                    title: "Module 3: UI Designer & Application Development",
                    duration: "6 Hours",
                    learning_points: [
                        "UI Designer navigation and components",
                        "Form, table, and chart development",
                        "Layout design and responsive UI",
                        "Data binding and field configuration",
                        "Event handling and user interactions",
                        "Embedded components and component reuse"
                    ],
                    hands_on: [
                        "Design custom UI forms",
                        "Configure tables and dashboards",
                        "Implement data binding",
                        "Test UI applications"
                    ]
                },
                {
                    title: "Module 4: Business Configuration",
                    duration: "5 Hours",
                    learning_points: [
                        "Business Configuration basics and architecture",
                        "Configuration views (BC Views) setup",
                        "Customization vs. Configuration",
                        "Configuration data management",
                        "Business rules and validation",
                        "Change logs and audit trails"
                    ],
                    hands_on: [
                        "Create business configurations",
                        "Set up BC Views for business users",
                        "Configure business rules",
                        "Manage configuration data"
                    ]
                },
                {
                    title: "Module 5: Service Integration & Web Services",
                    duration: "5 Hours",
                    learning_points: [
                        "Web service fundamentals and protocols",
                        "XML and SOAP/REST integration",
                        "External system connectivity",
                        "Service provider and service consumer creation",
                        "Asynchronous messaging patterns",
                        "Error handling and retries"
                    ],
                    hands_on: [
                        "Create web services",
                        "Integrate external systems",
                        "Configure service endpoints",
                        "Test service integration"
                    ]
                },
                {
                    title: "Module 6: Business Object Extension",
                    duration: "4 Hours",
                    learning_points: [
                        "Extensibility framework overview",
                        "Extending standard business objects",
                        "Adding custom fields and logic",
                        "Embedded components and extensions",
                        "Compatibility and versioning",
                        "Best practices for extensions"
                    ],
                    hands_on: [
                        "Extend existing business objects",
                        "Add custom fields",
                        "Implement embedded components",
                        "Test extensions"
                    ]
                },
                {
                    title: "Module 7: Analytics & Reporting",
                    duration: "4 Hours",
                    learning_points: [
                        "Data source creation for analytics",
                        "Report design and configuration",
                        "OLAP and analytical queries",
                        "Cube design and hierarchies",
                        "Performance optimization",
                        "Visualization and dashboards"
                    ],
                    hands_on: [
                        "Making data sources",
                        "Designing analytical reports",
                        "Building dashboard visualizations",
                        "Configuring report parameters"
                    ]
                },
                {
                    title: "Module 8: Notifications & Approvals",
                    duration: "3 Hours",
                    learning_points: [
                        "Notifications approval workflows and conditions",
                        "Escalation and routing rules",
                        "Notifications to be customized",
                        "Multilingual support",
                        "Monitoring and logging"
                    ],
                    hands_on: [
                        "Configuring notifications",
                        "Approval process setups",
                        "Routing rule implementations",
                        "Workflow notifications testing"
                    ]
                },
                {
                    title: "Module 9: Advanced Topics & Lifecycle Management",
                    duration: "5 Hours",
                    learning_points: [
                        "Mashups integration and development",
                        "Extending mobile applications",
                        "Versioning & lifecycle management",
                        "Testing strategies and tools",
                        "Performance tuning",
                        "Troubleshooting and debugging"
                    ],
                    hands_on: [
                        "Mashup development",
                        "Performance optimization",
                        "Issue troubleshooting"
                    ]
                }
            ]
        },
        {
            type: 'detailed_target_audience',
            items: c4cTechnicalTargetAudience
        },
        {
            type: 'detailed_prerequisites',
            items: c4cTechnicalPrerequisites
        },
        {
            type: 'detailed_learning_outcomes',
            items: c4cTechnicalLearningOutcomes
        },
        {
            type: 'real_world_scenarios',
            items: c4cTechnicalRealWorldScenarios
        },
        {
            type: 'detailed_certification',
            title: "SAP C4C Technical Certification – Your Global Career Credential",
            content: "We Provide Support for the SAP Certified Development Associate – SAP C4C (Customer Cloud) exam.",
            imageSrc: "/images/ERPVITS - All Modules Infographics/ERPVITS - SAP C4C Tech Infographic.webp",
            imageAlt: "SAP C4C Technical Certification Path Infographic",
            items: [
                {
                    title: "SAP Certified Development Associate – SAP C4C",
                    code: "(C_C4C_90)",
                    focus: "Custom development, ABSL programming, UI design, integration",
                    who: "Exam duration: 180 mins | 80 Questions | Passing Score: 60%",
                    relevance: "Demonstrates expertise in end-to-end SAP C4C development for technical consultant roles."
                }
            ],
            supportFeatures: [
                "Targeted Study Guides following official exam outlines",
                "Practice Exams replicating the actual testing environment",
                "Exam Strategies: Time management & coding pitfalls",
                "Registration Guidance & Scheduling Support",
                "Retake Mentorship & Additional Review Sessions"
            ],
            benefits: [
                "Universal Credential Acknowledgment",
                "Career Boost: Certified developers earn 20-35% more",
                "Competitive Edge in job applications",
                "Advanced knowledge of cloud development patterns",
                "Proven meeting of high professional standards"
            ]
        },
        {
            type: 'detailed_career_opportunities',
            title: "Career Opportunities After SAP C4C Technical Training",
            subtitle: "Step Into Global Cloud Development and Consulting Roles",
            stats: [
                { value: "190%+", label: "Increase in Job Openings" },
                { value: "620+", label: "Companies Hiring" },
                { value: "$120K", label: "Avg Starting Salary" }
            ],
            items: [
                {
                    title: "SAP C4C Developer",
                    salary: "$120,000 - $150,000",
                    responsibilities: "Develop cloud applications, customize objects, integrate systems.",
                    employers: "Accenture, Capgemini, Deloitte, Infosys, Wipro",
                    path: "2–3 years → Senior C4C Developer",
                    icon: "Terminal",
                    color: "blue"
                },
                {
                    title: "Cloud Application Developer",
                    salary: "$110,000 - $145,000",
                    responsibilities: "Design and develop cloud applications, manage deployments.",
                    employers: "Technology Companies, SaaS Providers",
                    path: "3–5 years → Lead Developer",
                    icon: "Cloud",
                    color: "green"
                },
                {
                    title: "Technical Consultant",
                    salary: "$130,000 - $170,000",
                    responsibilities: "Guide customer implementations, design solutions, mentor teams.",
                    employers: "Consulting Firms, Systems Integrators",
                    path: "3–5 years → Senior Technical Consultant",
                    icon: "Briefcase",
                    color: "purple"
                },
                {
                    title: "Solutions Architect",
                    salary: "$160,000 - $210,000",
                    responsibilities: "Design enterprise cloud solutions, lead large implementations.",
                    employers: "Enterprise Software Leaders, Consulting Giants",
                    path: "5–7 years → Principal Architect",
                    icon: "Layers",
                    color: "orange"
                }
            ]
        },
        {
            type: 'detailed_companies',
            title: "Top Companies Hiring SAP C4C Developers",
            subtitle: "Our alumni work at the world's leading consulting firms and technology giants",
            items: [
                "Accenture", "Capgemini", "Deloitte", "EY", "KPMG", "PwC", "IBM",
                "Infosys", "Wipro", "Cognizant", "TCS", "HCL", "Tech Mahindra",
                "Salesforce", "AWS", "Google Cloud", "Adobe", "Oracle", "SAP"
            ]
        },
        {
            type: 'detailed_post_training_journey',
            title: "Your Growth Roadmap",
            subtitle: "What to Expect After Completing SAP C4C Technical Training",
            stats: [
                { value: "2-3 Months", label: "Avg Time to First Role" },
                { value: "100%", label: "Career Support" },
                { value: "6 Months", label: "Post-Training Support" }
            ]
        },
        {
            type: 'detailed_upcoming_batches',
            batches: [
                {
                    name: "Batch 1: November 2025 (Weekdays)",
                    status: "filling_fast",
                    date: "November 15, 2025",
                    schedule: "7:00 AM - 8:00 PM IST",
                    duration: "30-35 Hours",
                    seatsFilled: 7
                },
                {
                    name: "Batch 2: November 2025 (Weekends)",
                    status: "open",
                    date: "November 16, 2025",
                    schedule: "Sat & Sun | 8:30 AM - 7:00 PM IST",
                    duration: "30-35 Hours",
                    seatsFilled: 3
                },
                {
                    name: "Batch 3: December 2025 (Flexible)",
                    status: "open",
                    date: "December 1, 2025",
                    schedule: "Customized per batch",
                    duration: "30-35 Hours",
                    seatsFilled: 2
                }
            ]
        },
        {
            type: 'detailed_testimonials',
            title: "Hear from Our Successful SAP C4C Developer Learners",
            subtitle: "4.7/5 Based on 290+ learner reviews",
            items: [
                {
                    name: "Raj Patel",
                    role: "SAP C4C Developer at Capgemini",
                    quote: "Outstanding cloud development training with real project exposure. I landed a developer role at Capgemini within 8 weeks. The hands-on coding approach was key."
                },
                {
                    name: "Priya Misra",
                    role: "Senior Developer",
                    quote: "The weekend flexibility allowed me to upskill while working. My employer promoted me to Senior Developer. This course accelerated my career by 3 years."
                },
                {
                    name: "Vikram Singh",
                    role: "Technical Consultant",
                    quote: "Best decision for my tech career. The capstone projects were exactly like real enterprise development. The certification support was excellent."
                }
            ]
        },
        {
            type: 'detailed_features',
            title: "Download the Most Asked SAP C4C Developer Interview Questions",
            subtitle: "Complete the form below to download a comprehensive guide covering technical questions, coding exercises, and architecture patterns.",
            badge: "Free Resource",
            items: [
                {
                    title: "50+ Technical Questions",
                    description: "In-depth development questions with expert answers covering all core modules."
                },
                {
                    title: "ABSL Coding Scenarios",
                    description: "Real-world coding exercises and debugging patterns you'll face in interviews."
                },
                {
                    title: "Architecture & Design",
                    description: "Critical questions on C4C architecture and cloud design patterns."
                },
                {
                    title: "Behavioral Questions",
                    description: "Specific behavioral questions tailored for SAP C4C developer roles."
                },
                {
                    title: "Salary Negotiation Tips",
                    description: "Expert guidance for cloud developers to negotiate premium salary packages."
                },
                {
                    title: "Level-Based Prep",
                    description: "Interview preparation tips for different experience levels from junior to lead."
                }
            ]
        },
        {
            type: 'detailed_demo_booking',
            title: "Ready to Become an SAP C4C Developer?",
            subtitle: "Book your free demo today and take the first step towards a lucrative cloud development career",
            items: [
                {
                    title: "Sample Live Class Session",
                    description: "Observe real C4C development training and coding methodology",
                    icon: "Video"
                },
                {
                    title: "30-Min Career Consultation",
                    description: "Personalized guidance based on your development background",
                    icon: "UserCheck"
                },
                {
                    title: "Q&A with Instructor",
                    description: "Ask questions about C4C course, certification, and developer career",
                    icon: "Users"
                },
                {
                    title: "Special Discount Offer",
                    description: "Exclusive discount for demo attendees",
                    icon: "Award"
                }
            ]
        },
        {
            type: 'detailed_faq',
            title: "Frequently Asked Questions (FAQs) – SAP C4C Technical Training",
            items: [
                {
                    q: "What is SAP C4C and how does ERPVITS help me learn it?",
                    a: "SAP C4C (Customer Cloud) is a cloud-based CRM solution. ERPVITS provides in-depth technical training covering custom development, API integration, and cloud application design."
                },
                {
                    q: "What is ABSL, and why is it important in C4C?",
                    a: "ABSL (ABAP Simple Logic) is the scripting language for SAP C4C business logic. We teach syntax, event handling, and intricate logic for building robust cloud applications."
                },
                {
                    q: "What is the UI Designer, and how do I use it?",
                    a: "The UI Designer is the tool used to visually develop interfaces. You'll learn form design, data binding, event handling, and configuration."
                },
                {
                    q: "How do I integrate external systems with SAP C4C?",
                    a: "We teach web service development, API design, and integration patterns for secure connections between C4C and external systems."
                },
                {
                    q: "Do I need to know ABAP for this training?",
                    a: "While ABAP knowledge helps, it is not mandatory. We teach the necessary ABSL and architectural concepts from the ground up."
                },
                {
                    q: "Will I get access to a live C4C system?",
                    a: "Yes, you will have 24/7 access to an SAP C4C development environment to practice lab exercises and build projects."
                },
                {
                    q: "Does ERPVITS offer placement support?",
                    a: "Yes, we provide resume building, mock interviews, and connect you with top companies like Accenture, Infosys, and Deloitte."
                },
                {
                    q: "Is this training suitable for fresh graduates?",
                    a: "Absolutely. If you have basic coding skills and a logical mind, this program is designed to transform you into a job-ready SAP C4C Developer."
                }
            ]
        }
    ]
};
