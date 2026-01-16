import { Code, Cloud, Database, Layout, Settings, Smartphone, Zap, MonitorSmartphone, Layers, ShieldCheck, Terminal, Globe, UserCheck, Briefcase, GraduationCap, Users } from 'lucide-react';

export const c4cTechnicalTargetAudience = [
    {
        icon: "Terminal",
        title: "SAP ABAP & Java Developers",
        description: [
            "ABAP developers transiting to Cloud Application Studio (SDK)",
            "Java consultants seeking SAP cloud platform expertise",
            "Developers wanting to master ABSL and BODL scripting",
            "Technical consultants aiming for C4C customization roles",
            "Programmers interested in Cloud SaaS extensions"
        ]
    },
    {
        icon: "Cloud",
        title: "SAP Technical Consultants",
        description: [
            "CRM technical consultants moving to C4C",
            "SAP PI/PO consultants learning Cloud Integration",
            "Web developers (UI5/Fiori) expanding to C4C UI Designer",
            "System architects designing hybrid cloud solutions",
            "Integration specialists for SAP Service/Sales Cloud"
        ]
    },
    {
        icon: "GraduationCap",
        title: "Fresh Graduates & Career Changers",
        description: [
            "Computer Science graduates targeting SAP cloud careers",
            "Software engineers pivoting to enterprise cloud solutions",
            "IT professionals seeking high-demand niche skills",
            "Developers with logical programming background"
        ]
    }
];

export const c4cTechnicalPrerequisites = {
    minimum: [
        "Basic understanding of Object-Oriented Programming (OOP)",
        "Familiarity with any programming language (C++, Java, C#)",
        "Basic knowledge of XML and Web Services (SOAP/REST)",
        "Logical thinking and problem-solving skills",
        "Understanding of database concepts"
    ],
    nicetohave: [
        "Prior SAP ABAP or Java development experience",
        "Knowledge of SAP Cloud Applications Studio (SDK)",
        "Experience with SAP CRM or ERP technical concepts",
        "Familiarity with UI Designer or frontend development",
        "Understanding of Inbound/Outbound integration"
    ]
};

export const c4cTechnicalLearningOutcomes = [
    {
        title: "SAP Cloud Applications Studio (SDK) Mastery",
        description: "Master the PDI (Partner Development Infrastructure) for custom solutions.",
        icon: "Settings",
        points: [
            "Navigate and utilize Cloud Applications Studio efficiently",
            "Create custom Business Objects (BOs) and extensions",
            "Implement business logic using ABSL and BODL scripting",
            "Debug and troubleshoot custom solutions"
        ]
    },
    {
        title: "UI Designer and Extensibility",
        description: "Customize and extend the standard C4C user interface.",
        icon: "Layout",
        points: [
            "Design and modify UI screens using UI Designer",
            "Create new floorplans, OVS, and embedded components",
            "Implement UI logic and event handlers",
            "Configure mashups and web services integration"
        ]
    },
    {
        title: "Integration and Web Services",
        description: "Connect C4C with external systems and SAP landscapes.",
        icon: "Globe",
        points: [
            "Create and consume SOAP and REST web services",
            "Configure communication arrangements and scenarios",
            "Implement OData services for external access",
            "Understand Cloud Platform Integration (CPI) basics for C4C"
        ]
    },
    {
        title: "Lifecycle Management",
        description: "Manage solution deployment and patches.",
        icon: "Layers",
        points: [
            "Manage solution lifecycle: Assemble and Download",
            "Deploy solutions to Quality and Production tenants",
            "Handle patch solutions and upgrade management",
            "Backup and restore development objects"
        ]
    }
];

export const c4cTechnicalRealWorldScenarios = [
    {
        title: "Custom Business Process Implementation",
        description: "A client needs a custom 'Warranty Management' module within C4C that is not available in standard.",
        role: "C4C Technical Consultant",
        outcome: "Delivered a fully custom Warranty BO with UI, Logic, and Approval Workflow.",
        responsibilities: [
            "Design Warranty Business Object in SDK",
            "Create UI screens for Warranty creation and search",
            "Write ABSL script for warranty validity calculation",
            "Implement approval process and notifications"
        ]
    },
    {
        title: "Third-Party System Integration",
        description: "Integrating C4C with a legacy Order Management System to fetch real-time order status.",
        role: "Integration Developer",
        outcome: "Real-time order status visibility in C4C Customer Account via Mashup.",
        responsibilities: [
            "Create External Web Service Integration in SDK",
            "Configure Communication Scenario and Arrangement",
            "Design a URL Mashup to display order details",
            "Implement error handling for service calls"
        ]
    },
    {
        title: "Standard UI Extension",
        description: "Extending the standard Opportunity screen to include custom industry-specific fields and logic.",
        role: "SDK Developer",
        outcome: "Enhanced Opportunity screen capturing critical industry data.",
        responsibilities: [
            "Create Business Object Extension (XBO) for Opportunity",
            "Add extension fields to standard UI via UI Designer",
            "Implement 'AfterModify' logic for field validation",
            "Ensure data flow to follow-up documents"
        ]
    }
];

export const c4cContent = {
    price: "Competitive",
    duration: "45-50 Hours",
    syllabusUrl: "/syllabus/ERPVITS Syllabus - Course Contents Pdf/SAP Technical/sap-c4c-technical.pdf",
    heroHeading: "Master SAP C4C Technical Development (SDK) with the #1 Online Training Program",
    heroSubheading: "Become an expert in SAP Cloud Applications Studio, ABSL Scripting, UI Designer, and Integration.",

    title: "SAP C4C Technical",
    description: "The SAP C4C Technical (SDK) Online Training Program from ERPVITS empowers developers to build, extend, and integrate robust cloud solutions. Learn Partner Development Infrastructure (PDI), ABSL, UI Designer, and Mashups from certified experts.",
    badges: ["Rated #1 SAP C4C Technical Training 2025"],
    heroStats: [
        { icon: "award", label: "SAP Certified Trainers" },
        { icon: "star", label: "4.7 Learner Rating" },
        { icon: "clock", label: "24/7 Team Support" },
        { icon: "code", label: "Real-time Projects" }
    ],
    buttonLabels: {
        primary: "Book Your Free Demo Class →",
        secondary: "View Curriculum"
    },
    metaTitle: "SAP C4C Technical Training Online | SDK & PDI Course",
    metaDescription: "Master SAP C4C Technical (SDK) training. Learn Cloud Applications Studio, ABSL, UI Designer, Integration, and Certification preparation. Enroll now.",

    features: [],
    sections: [
        {
            type: 'detailed_features',
            title: "Learn SAP C4C Technical from Certified Experts – 100% Hands-On, Job-Oriented Training",
            subtitle: "Delivered by SAP Cloud architects with deep expertise in PDI and custom development.",
            badge: "Why Choose Us",
            items: [
                {
                    title: "Certified Instructor Expertise",
                    description: "Trainers are SAP C4C certified technical consultants with years of SDK development experience."
                },
                {
                    title: "100% Hands-On Learning",
                    description: "Practical sessions on SAP Cloud Applications Studio (SDK) accessing real tenants."
                },
                {
                    title: "Job-Oriented Curriculum",
                    description: "Focus on common technical requirements: Custom BOs, Extensions, Mashups, and Integration."
                },
                {
                    title: "Interactive Q&A",
                    description: "Resolve your coding queries and logic issues in live sessions."
                },
                {
                    title: "Flexible Timings",
                    description: "Weekend and Weekday batches available to suit working professionals."
                },
                {
                    title: "Small Batch Sizes",
                    description: "Limited seats for effective code reviews and personalized mentoring."
                },
                {
                    title: "Career Support",
                    description: "Resume guidance highlighting technical C4C skills and interview prep."
                },
                {
                    title: "Alumni Network",
                    description: "Connect with developers working in top consulting firms."
                },
                {
                    title: "Post-Training Support",
                    description: "Support for technical queries even after course completion."
                }
            ]
        },
        {
            type: 'content_with_image',
            title: "Why Professionals Choose ERPVITS for SAP C4C Technical Training",
            subtitle: "Technical Excellence & Career Growth",
            videoSrc: "https://www.youtube.com/embed/EtlUBjNMsbM",
            description: "ERPVITS provides the most in-depth technical training for SAP Sales & Service Cloud. Our alumni are successfully building complex custom solutions for global enterprises.",
            items: [
                "Training on latest SAP Cloud Applications Studio version",
                "Deep dive into ABSL, BODL, and Ruby scripting concepts",
                "Real-world scenarios like BO Extensions and mashups",
                "Integration concepts (OData, SOAP, REST)",
                "Guidance on SAP C4C Development Certification",
                "Access to SAP C4C Tenant for practice"
            ]
        },
        {
            type: 'whats_included',
            content: "A comprehensive SAP C4C Technical development course including live training, SDK access, code samples, certification guidance, and placement support.",
            stats: [
                { value: "45-50", label: "Hours of Live Training" },
                { value: "50+", label: "Coding Exercises" },
                { value: "100%", label: "Placement Support" }
            ]
        },
        {
            type: 'detailed_curriculum',
            title: "Comprehensive SAP C4C Technical Course Curriculum",
            modules: [
                {
                    title: "Module 1: Introduction to Cloud Applications Studio (SDK)",
                    duration: "4 Hours",
                    learning_points: [
                        "Overview of SAP C4C Architecture",
                        "Introduction to PDI (Partner Development Infrastructure)",
                        "Installing and conducting Cloud Applications Studio",
                        "Navigating the SDK environment",
                        "Solution Lifecycle Management (Assemble, Download, Upload)"
                    ],
                    hands_on: [
                        "Install SDK",
                        "Create a new Solution",
                        "Explore SDK Views and key features"
                    ]
                },
                {
                    title: "Module 2: Business Objects (BO) and Scripting Basics",
                    duration: "6 Hours",
                    learning_points: [
                        "Understanding Business Objects structure",
                        "Creating Custom Business Objects",
                        "Data Types, Elements, and Associations",
                        "Introduction to BODL (Business Object Definition Language)",
                        "Introduction to ABSL (Advanced Business Script Language)"
                    ],
                    hands_on: [
                        "Create a 'Student' or 'Project' Custom BO",
                        "Define elements and nodes",
                        "Write basic script to create data"
                    ]
                },
                {
                    title: "Module 3: UI Designer and Screen Generation",
                    duration: "6 Hours",
                    learning_points: [
                        "Overview of UI Designer",
                        "Generating Screens for Custom BOs (OWL, QC, TI, TT)",
                        "UI Component Modelling",
                        "Configuring Navigation and Port Types",
                        "Event Handlers and data binding in UI"
                    ],
                    hands_on: [
                        "Generate standard screens for Custom BO",
                        "Customize UI layout",
                        "Implement navigation between screens"
                    ]
                },
                {
                    title: "Module 4: Extensibility (XBO) and Customizing Standard",
                    duration: "6 Hours",
                    learning_points: [
                        "Concept of Business Object Extensions (XBO)",
                        "Extending Standard BOs (e.g., Customer, Opportunity)",
                        "Adding Extension Fields to Standard Screens",
                        "Process Extension Scenarios",
                        "Writing logic in standard BO events (BeforeSave, AfterModify)"
                    ],
                    hands_on: [
                        "Extend 'Customer' BO with new fields",
                        "Add fields to Customer TI screen",
                        "Write validation logic for standard BO"
                    ]
                },
                {
                    title: "Module 5: Advanced Scripting and Logic",
                    duration: "6 Hours",
                    learning_points: [
                        "Advanced ABSL Scripting techniques",
                        "Querying data (QueryByElements)",
                        "Creating and working with Code Lists",
                        "Trace and Debugging in SDK",
                        "Reuse Libraries and Functions",
                        "Actions and Validations"
                    ],
                    hands_on: [
                        "Implement complex calculation logic",
                        "Debug a script using Tracing",
                        "Create specific validations"
                    ]
                },
                {
                    title: "Module 6: Integration and Web Services",
                    duration: "6 Hours",
                    learning_points: [
                        "Creating SOAP Web Services for Custom BOs",
                        "Consuming External Web Services (REST/SOAP)",
                        "Communication Scenarios and Arrangements",
                        "OData Services generation and consumption",
                        "File Input / Output integration"
                    ],
                    hands_on: [
                        "Expose Custom BO as Web Service",
                        "Consume an external public API",
                        "Test services using SOAP UI / Postman"
                    ]
                },
                {
                    title: "Module 7: Analytics and Data Sources",
                    duration: "4 Hours",
                    learning_points: [
                        "Creating Data Sources for Custom BOs",
                        "Joining Data Sources",
                        "Key Figures and Characteristics",
                        "Creating Reports and KPIs in C4C"
                    ],
                    hands_on: [
                        "Create Data Source for Custom BO",
                        "Design a simple Report based on custom data"
                    ]
                },
                {
                    title: "Module 8: Mashups and Approval Processes",
                    duration: "4 Hours",
                    learning_points: [
                        "Types of Mashups (URL, HTML, Data)",
                        "Configuring Mashups in screens",
                        "Approval Process Configuration via SDK",
                        "Notification Rules"
                    ],
                    hands_on: [
                        "Create a Google Maps URL Mashup",
                        "Configure an approval workflow for Custom BO"
                    ]
                },
                {
                    title: "Module 9: Lifecycle Management & Best Practices",
                    duration: "4 Hours",
                    learning_points: [
                        "Patch Management",
                        "Bac elements (BAC)",
                        "Switching on/off business options",
                        "Performance Best Practices",
                        "Coding Standards and Review"
                    ],
                    hands_on: [
                        "Create a Patch solution",
                        "Deploy to target tenant (simulation)"
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
            content: "We Provide Support for SAP Certified Development Associate – SAP Cloud for Customer (Exam Code: C_C4C_2405 / C_C4C_14).",
            imageSrc: "/images/ERPVITS - All Modules Infographics/ERPVITS - SAP C4C Tech Infographic.webp",
            items: [
                {
                    title: "SAP Certified Development Associate – SAP Cloud for Customer",
                    code: "(C_C4C_2405)",
                    focus: "SDK, UI Designer, Extensibility, Integration, Lifecycle Management.",
                    who: "Technical Consultants, Developers, Architects.",
                    relevance: "Validation of expertise in building custom SAP C4C solutions."
                }
            ]
        },
        {
            type: 'detailed_career_opportunities',
            items: [
                {
                    title: "SAP C4C Technical Consultant",
                    salary: "$100,000 - $130,000",
                    responsibilities: "Develop custom solutions, Extend standard C4C, Integrate with ERP.",
                    employers: "Accenture, Deloitte, Capgemini, IBM",
                    path: "2-3 years -> Senior Technical Consultant",
                    icon: "Briefcase",
                    color: "blue"
                },
                {
                    title: "SAP Application Developer (Cloud)",
                    salary: "$95,000 - $125,000",
                    responsibilities: "Write ABSL scripts, Design UIs, Manage deployments.",
                    employers: "Tech Companies, SAP Partners",
                    path: "3-5 years -> System Architect",
                    icon: "Terminal",
                    color: "green"
                },
                {
                    title: "Integration Specialist",
                    salary: "$110,000 - $140,000",
                    responsibilities: "Manage C4C Integrations, CPI flows, Web Services.",
                    employers: "Enterprise Customers, Consulting Firms",
                    path: "4-6 years -> Integration Architect",
                    icon: "Globe",
                    color: "purple"
                }
            ]
        },
        {
            type: 'detailed_companies',
            items: [
                "Accenture", "Deloitte", "IBM", "Capgemini", "Infosys", "Wipro",
                "SAP", "Microsoft", "Salesforce Partners", "Cognizant"
            ]
        },
        {
            type: 'detailed_post_training_journey'
        },
        {
            type: 'detailed_upcoming_batches',
            batches: [
                {
                    name: "Batch 1: Technical (Weekends)",
                    status: "filling_fast",
                    date: "November 2025",
                    schedule: "Sat & Sun | 10:00 AM - 1:00 PM IST",
                    duration: "45-50 Hours",
                    seatsFilled: 6
                },
                {
                    name: "Batch 2: Technical (Weekdays)",
                    status: "open",
                    date: "December 2025",
                    schedule: "Mon-Fri | 7:00 AM - 8:30 AM IST",
                    duration: "45-50 Hours",
                    seatsFilled: 3
                }
            ]
        },
        {
            type: 'detailed_testimonials',
            items: [
                {
                    name: "Rahul Mehta",
                    role: "SAP C4C Technical Consultant",
                    quote: "The deep dive into SDK and ABSL scripting was exactly what I needed. I'm now confidently developing custom BOs for my client."
                },
                {
                    name: "Sarah Jenkins",
                    role: "Integration Developer",
                    quote: "Excellent coverage of Integration and Web Services. The hands-on labs were very helpful."
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
                    q: "What is SAP C4C Technical Training?",
                    a: "It focuses on the SAP Cloud Applications Studio (SDK) for developing custom solutions, extensions, and integrations in SAP Sales & Service Cloud."
                },
                {
                    q: "Do I need to know ABAP?",
                    a: "While PDI/SDK has similarities to ABAP (like objects and scripting), it is not strictly required, but having a developer mindset or ABAP background helps significantly."
                },
                {
                    q: "What is the tool used for development?",
                    a: "We use the SAP Cloud Applications Studio (also known as SDK or PDI) which is installed on your local machine and connects to the C4C tenant."
                },
                {
                    q: "Will I get tenant access?",
                    a: "Yes, ERPVITS provides shared tenant access during the training for hands-on practice."
                }
            ]
        }
    ]
};
