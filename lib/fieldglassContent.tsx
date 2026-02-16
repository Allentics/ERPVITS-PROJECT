import React from 'react';

// Icons are now referenced by string names to avoid serialization issues with Client Components

export const fieldglassContent = {
    price: "45,000",
    duration: "35+ Hours",
    syllabusUrl: "/syllabus/ERPVITS Syllabus - Course Contents Pdf/SAP Functional/sap-fieldglass.pdf",
    heroHeading: <>Become a Leader in Managing a Contingent Workforce with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] to-red-600 box-decoration-clone">SAP Fieldglass Training</span></>,
    themeColor: "orange",
    heroSubheading: "This SAP Fieldglass training course is specifically tailored for HR professionals, procurement professionals, IT consultants, work program managers, and other professionals who aspire to work in global contingent workforce and services procurement consulting. This SAP Fieldglass course combines hands-on system training, expert instruction with real-world application, and a curriculum designed to a certification.",
    badges: ["SAP Certified Trainers", "4.7 Learner Rating", "24/7 Team support"],
    description: "This SAP Fieldglass training course is specifically tailored for HR professionals, procurement professionals, IT consultants, work program managers, and other professionals who aspire to work in global contingent workforce and services procurement consulting. This SAP Fieldglass course combines hands-on system training, expert instruction with real-world application, and a curriculum designed to a certification.",
    metaTitle: "SAP Fieldglass Online Training | ERPVITS Certification",
    metaDescription: "Master SAP Fieldglass Online Training with ERPVITS. Learn VMS, Contingent Workforce, SOW modules, and integration with SAP S/4HANA. Get certification help.",
    keywords: "sap fieldglass training, vendor management system fieldglass, sap fieldglass certification, sap fieldglass contingent workforce management, sap fieldglass course, sap fieldglass online training, fieldglass certification",

    schema: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "SAP Fieldglass Online Training",
        "description": "Master SAP Fieldglass with ERPVITS — a complete hands-on online training program for Vendor Management, Contingent Workforce, and SOW projects. Learn real-time Fieldglass workflows, integration with SAP S/4HANA, and get ready for global certification and placement support.",
        "provider": {
            "@type": "Organization",
            "name": "ERPVITS",
            "url": "https://www.erpvits.com/",
            "logo": "https://www.erpvits.com/images/erpvits-logo.webp",
            "sameAs": [
                "https://www.instagram.com/erp_vits/",
                "https://www.linkedin.com/company/erpvits/",
                "https://www.youtube.com/@ERPVITS"
            ]
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "inLanguage": "English",
            "courseWorkload": "35 Hours",
            "location": {
                "@type": "VirtualLocation",
                "url": "https://www.erpvits.com/sap-fieldglass-training/"
            },
            "offers": {
                "@type": "Offer",
                "price": "45000",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "url": "https://www.erpvits.com/sap-fieldglass-training/",
                "eligibleRegion": {
                    "@type": "Place",
                    "name": "Global"
                }
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "bestRating": "5",
            "ratingCount": "254",
            "reviewCount": "254"
        },
        "review": {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "Anjali Verma"
            },
            "reviewBody": "ERPVITS SAP Fieldglass Training gave me strong practical exposure to real-time VMS workflows. The live sessions and guided projects helped me crack my Fieldglass Consultant interview easily.",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            }
        }
    }),

    sections: [
        {
            type: 'detailed_features',
            title: "Learn SAP Fieldglass from Certified Experts – 100% Hands-On, Job-Oriented Training",
            subtitle: "Unlike passive video courses or self-paced modules, our SAP Fieldglass Online Training offers direct training from a SAP certified trainer who has over 10 years of experience in contingent workforce management. Your training is interactive in real-time where trainers explain methodologies and work with you on complex workforce problems",
            items: [
                {
                    title: "Certified Instructor Expertise",
                    description: "Every one of our trainers has official SAP Fieldglass certifications and has managed numerous enterprise SAP Fieldglass implementations for Fortune 500 companies. Trainers are not just teaching theories; they bring real client stories, common implementation challenges, and industry best practices from live deployments of VMS systems that manage thousands of contingent workers. Having this real-world experience is a game-changer for your first SAP Fieldglass consulting assignment.",
                },
                {
                    title: "100% Hands-On Learning Methodology",
                    description: "Conventional training teaches Fieldglass System concepts through slide decks and classroom training. Our SAP Fieldglass Training does a lot more. Each of the training sessions has live demonstration and training using SAP Fieldglass systems and afterwards you are given real hands-on Fieldglass system training/labs to complete the exercises. At the end of the course, you will have configured and onboarded worker onboarding workflows, created and managed SOW project structures, handled contingent worker profile management, invoice processing, and risk analytic execution. All of these will be completed on live systems.",
                },
                {
                    title: "Job-Oriented Curriculum Design",
                    description: "The course curriculum is designed to fit the real-world skills, tasks, responsibilities, and problem-solving challenges you will encounter in the field as an SAP Fieldglass consultant. Whether you are deploying processes for contingent workforce, configuring vendor portal, streamlined automation for invoicing, or compliance workflows, this training will provide you with actionable clarity that will help you.",
                },
                {
                    title: "Interactive Q&A Sessions",
                    description: "In addition to the primary teaching sessions, you have interactive Q&A sessions, as well as live office hours, during which you can post questions, receive clarifications on the more intricate VMS elements, and obtain guidance that is customized to your individual learning velocity and career aspirations.",
                },
                {
                    title: "Flexible Batch Timings",
                    description: "Understanding that numerous professionals balance a job, a family, and studies, we provide evening sessions on the weekdays (Monday to Friday, 6 PM to 9 PM IST) and weekend classes (Saturday and Sunday). Sessions are recorded, so if you miss a live class, you can catch up asynchronously without losing continuity.",
                },
                {
                    title: "Small Batch Sizes for Personalized Attention",
                    description: "Unlike massive online courses, which may have thousands of anonymous learners, our classes are limited to 8-10 participants. This allows instructors to tailor their teaching to your particular learning and provide individual constructive attention.",
                },
                {
                    title: "Placement & Career support",
                    description: "Learning SAP Fieldglass is half the journey; for most learners, getting placed constitutes the goal of the course. Our career support team is focused on helping you construct a Fieldglass-centered resume, assists you with mock interviews, and provides you with Fieldglass interview questions based on recent hiring inquiries within the VMS and contingent workforce space. You will receive instruction on effectively framing your project experiences to make a positive impression during SAP Fieldglass job interviews.",
                },
                {
                    title: "Active Alumni Network & Community Forum",
                    description: "Participate in the active and vibrant community of professionals using SAP Fieldglass. Network with professionals to gain insights and share job leads, ask questions, and create relationships that may result in referrals and partnerships in consulting for contingent work.",
                },
                {
                    title: "Ongoing support Post-Training",
                    description: "The SAP Fieldglass course and training may mark the end of formal training, but the learning journey will not end there. For any challenge related to concept clarification, any real-world challenges related to the VMS project the participant is working on, and initial consulting work in the area, there will be instructor support for the participant for six months post training.",
                }
            ],
            badge: "Why Choose Us"
        },
        {
            type: 'content_with_image',
            title: "Why Professionals Choose ERPVITS for SAP Fieldglass Online Training",
            description: "ERPVITS's SAP Fieldglass training quality describes the company as a reliable SAP training institute for SAP solutions with hundreds of learners with successful training working in top consulting firms such as Accenture, Capgemini, Deloitte, Infosys, and Wipro in the contingent workforce and vendor management area. The alumni network reinforces the instructor quality and proceeds career transition that the Fieldglass course offers.",
            videoSrc: "https://www.youtube.com/embed/ESsjk0atabg",
            items: [
                "Over 450 SAP Fieldglass professionals have put their trust in us",
                "Custom pre-evaluations and personalized VMS learning paths",
                "Active alumni network and contingent workforce community",
                "Over 40 guided lab exercises from basic worker setups to advanced analytics",
                "Materials aligned with the latest Fieldglass releases updated on a quarterly basis",
                "Mock interviews designed to provide a real-life VMS consultant experience",
                "A whole week dedicated to review before the exam for certification",
                "Complete support Ecosystem from pre-evaluation to post-training"
            ]
        },
        {
            type: 'whats_included'
        },
        {
            type: 'detailed_curriculum',
            title: "Comprehensive SAP Fieldglass Course Curriculum",
            subtitle: "35+ hours of expert-led training covering every aspect from basics to advanced VMS implementation",
            syllabusUrl: "/syllabus/ERPVITS Syllabus - Course Contents Pdf/SAP Functional/sap-fieldglass.pdf",
            modules: [
                {
                    title: "Module 1: Introduction to SAP Fieldglass & Vendor Management System (VMS) (3 Hours)",
                    learning_points: [
                        "Overview of SAP Fieldglass platform and VMS role in enterprise",
                        "Key features and benefits: cost optimization, compliance management, process automation",
                        "Fieldglass user interface navigation and system architecture",
                        "VMS modules overview (Contingent, SOW, Profile Worker, Admin)",
                        "Real-world use cases across industries"
                    ],
                    hands_on: [
                        "Navigate SAP Fieldglass interface and explore key modules",
                        "Understand VMS data models and module relationships",
                        "Explore pre-built reports and analytics dashboards"
                    ]
                },
                {
                    title: "Module 2: Admin Configuration & User Management (6 Hours)",
                    learning_points: [
                        "System setup and initialization",
                        "User management: creating profiles, assigning roles (Admin, Manager, Requestor), defining permissions",
                        "Supplier/Vendor management and onboarding workflows",
                        "Company structure setup and organizational hierarchy configuration",
                        "Multi-instance management and realms setup"
                    ],
                    hands_on: [
                        "Create user profiles with appropriate role-based access",
                        "Onboard vendors and set up vendor hierarchies",
                        "Configure company structure mirroring organizational chart",
                        "Set up role-based access controls and permission matrices for contingent operations"
                    ]
                },
                {
                    title: "Module 3: Contingent Worker Module & Lifecycle Management (5 Hours)",
                    learning_points: [
                        "Management of the contingent worker lifecycle.",
                        "Creation of worker requisitions and the sourcing process.",
                        "Onboarding workers and the verification of compliance checks.",
                        "Submission and approval of timesheets.",
                        "Management of expenses and the procedures for offboarding a worker.",
                        "Classification of workers and monitoring compliance."
                    ],
                    hands_on: [
                        "Creation of worker requisitions and the workflows for sourcing them.",
                        "Onboarding contingent workers, including compliance checks.",
                        "Establishment of timesheet and expense submission workflows.",
                        "Configuration of offboarding and exit procedures for workers.",
                        "Implementation of worker classification policies."
                    ]
                },
                {
                    title: "Module 4: Statement of Work (SOW) Module & Services Procurement (4 Hours)",
                    learning_points: [
                        "Creation and management workflows for SOW projects.",
                        "SOW project structures and various billing models.",
                        "Understanding the bidding process and vendor selection for SOW.",
                        "Automating billing and invoicing based on project milestones.",
                        "Collaboration with service providers and tracking performance.",
                        "Governance and compliance frameworks for SOW."
                    ],
                    hands_on: [
                        "Design comprehensive SOW process flows.",
                        "Manage bidding workflows for your created SOW projects.",
                        "Establish systems for milestone-driven billing and invoicing.",
                        "Execute compliance for SOW and tracking procedures."
                    ]
                },
                {
                    title: "Module 5: Invoicing & Payment Automation (4 Hours)",
                    learning_points: [
                        "The integration of timesheet with invoice workflows.",
                        "Comparison of automated invoicing with manual processes.",
                        "Validation of invoices and management of exceptions.",
                        "Implementation of a three-way match (Timesheet, PO, Invoice).",
                        "Processing payments, settlement, and closures.",
                        "Reconciliation and management of disputes."
                    ],
                    hands_on: [
                        "Control timesheet to invoice workflow processing.",
                        "Setup rules for automated invoicing.",
                        "Manage exceptions and discrepancies of invoices.",
                        "The reconciliation and payment workflows."
                    ]
                },
                {
                    title: "Module 6: Master Data Management & Compliance (5 Hours)",
                    learning_points: [
                        "The significance of master data and its governance",
                        "Maintenance of vendor/supplier master data",
                        "Configuring worker profile and associated skills",
                        "Tracking and documenting compliance",
                        "Audit trails and compliance reporting",
                        "Data consistency and validation processes"
                    ],
                    hands_on: [
                        "Maintain and validate master data across systems",
                        "Compliance framework tracking",
                        "Report generation on audits and compliance reporting",
                        "Data validation and quality check implementation"
                    ]
                },
                {
                    title: "Module 7: Integration & Analytics (5 Hours)",
                    learning_points: [
                        "Fieldglass data integration with SAP S/4HANA",
                        "Upload and download data processes",
                        "VMS integration with Cloud Integration Gateway (CIG)",
                        "Fieldglass analytics and reporting",
                        "Workforce analytics dashboards",
                        "Performance metrics and KPI tracking"
                    ],
                    hands_on: [
                        "Configure systems integration with ERP",
                        "Data upload and download executions",
                        "Workforce management analytics dashboards",
                        "KPI reports generation for management access",
                        "Integration issues resolution"
                    ]
                },
                {
                    title: "Module 8: Advanced Workflows & Customization (3 Hours)",
                    learning_points: [
                        "Crafting advanced approval workflows with conditional routing",
                        "Custom form development for specific business requirements",
                        "Workflow streamlining and automation methods",
                        "Business rules with automation engines"
                    ],
                    hands_on: [
                        "Complex workflows and their troubleshooting",
                        "Custom form creation for specific business requirements",
                        "Test and troubleshoot workflow scenarios"
                    ]
                }
            ]
        },
        {
            type: 'detailed_target_audience',
            title: "Who Can Learn SAP Fieldglass? – Perfect for Diverse Career Paths",
            subtitle: "Ideal for individuals from various professional backgrounds aiming for global consulting and implementation positions in contingent workforce management",
            items: [
                {
                    title: "HR & Recruitment Professionals",
                    description: [
                        "HR managers who want to understand VMS and contingent workforce management",
                        "Recruitment specialists interested in automating procurement processes",
                        "HR operations coordinators hoping to achieve consultant-level VMS expertise",
                        "Talent acquisition managers interested in technology for managing contingent workforces"
                    ],
                    icon: "Users",
                    color: "text-blue-600",
                    bg: "bg-blue-50"
                },
                {
                    title: "Procurement & Vendor Management Specialists",
                    description: [
                        "Procurement managers aiming for expertise in service procurement",
                        "Vendor managers who want to learn about the Fieldglass platform",
                        "Procurement analysts who want to specialize in VMS",
                        "Category managers who manage spending on the contingent workforce"
                    ],
                    icon: "ShoppingCart",
                    color: "text-[#ff4500]",
                    bg: "bg-[#ff4500]/10"
                },
                {
                    title: "IT & ERP Professionals",
                    description: [
                        "SAP consultants moving into the contingent workforce area",
                        "ERP system administrators who want to acquire specialized VMS expertise",
                        "Technical architects developing enterprise solutions for the contingent workforce",
                        "Database administrators who support SAP Fieldglass systems"
                    ],
                    icon: "Laptop",
                    color: "text-green-600",
                    bg: "bg-green-50"
                },
                {
                    title: "Finance & Operations Leaders",
                    description: [
                        "Finance managers who manage spending and budgets for the contingent workforce",
                        "Operations directors who work on efficiency optimization for the contingent workforce",
                        "CFO offices implementing measures for controlling spending on contingent work",
                        "Internal audit teams who ensure compliance of the contingent workforce"
                    ],
                    icon: "TrendingUp",
                    color: "text-purple-600",
                    bg: "bg-purple-50"
                },
                {
                    title: "Fresh Graduates & Career Changers",
                    description: [
                        "MBA or HR graduates aspiring to SAP workforce management careers",
                        "IT professionals shifting to enterprise workforce solutions",
                        "Business analysts who are targeting consulting roles in VMS",
                        "Career changers with foundational human resource or procurement competencies."
                    ],
                    icon: "Globe",
                    color: "text-indigo-600",
                    bg: "bg-indigo-50"
                }
            ]
        },
        {
            type: 'detailed_prerequisites',
            title: "Prerequisites",
            items: {
                minimum: [
                    "Understanding the fundamentals of HR processes such as hiring, onboarding, and vendor management.",
                    "Understanding of contingent workforce and some HR operations.",
                    "Experience with web and business applications.",
                    "Ability to operate unsupervised and seek relevant questions."
                ],
                nicetohave: [
                    "Some experience with SAP (HR, MM, FICO or any other module).",
                    "Some experience in HR or procurement.",
                    "Understanding of ERP systems or enterprise workforce applications.",
                    "Reporting in Excel."
                ]
            }
        },
        {
            type: 'detailed_learning_outcomes',
            title: "What You'll Master in This SAP Fieldglass Online Course – Core Competencies",
            subtitle: "Compete competencies you'll acquire",
            items: {
                tabs: [
                    {
                        name: "Functional Mastery",
                        items: [
                            {
                                title: "End-to-End Contingent Worker Lifecycle",
                                titleKeywords: "Worker Lifecycle",
                                points: [
                                    "Set up and supervise the entire contingent worker onboarding and offboarding processes.",
                                    "Manage requisitions, worker assignments, and timesheet approval processes.",
                                    "Execute contingent workforce strategies, compliance, and cost control.",
                                    "Optimize processes and external talent acquisition cost."
                                ]
                            },
                            {
                                title: "Statement of Work (SOW) Services Procurement",
                                titleKeywords: "SOW",
                                points: [
                                    "Manage the end to end lifecycle of SOW project including creation, bidding, and awarding.",
                                    "Configure SOW structure, billing models, and approval process.",
                                    "Facilitate SOW-related service provider onboarding and performance management.",
                                    "Automation of invoicing and payment collection for rendered services."
                                ]
                            },
                            {
                                title: "Vendor & Supplier Management",
                                titleKeywords: "Vendor Management",
                                points: [
                                    "Formulate and construct vendor onboarding and qualification processes.",
                                    "Provide accurate vendor master data and vendor performance metrics.",
                                    "Create vendor self-service portals and establish vendor collaboration.",
                                    "Oversee vendor relationship management and vendor compliance."
                                ]
                            },
                            {
                                title: "Contingent Workforce Compliance & Risk",
                                titleKeywords: "Compliance",
                                points: [
                                    "Design automation for compliance and governance control.",
                                    "Implement worker classification and compliance control.",
                                    "Produce compliance documentation and audit trail.",
                                    "Disseminate compliance and control for regulations within a set of rules for multiple jurisdictions."
                                ]
                            }
                        ]
                    },
                    {
                        name: "Technical Skills",
                        items: [
                            {
                                title: "Master Data & System Administration",
                                titleKeywords: "Master Data",
                                points: [
                                    "Oversee Users, roles, permissions, and approval processes.",
                                    "Arrange organizational and managerial structures.",
                                    "Ensure consistency of data for employees, vendors, and businesses.",
                                    "Manage continuity of architecture and control of the system."
                                ]
                            },
                            {
                                title: "Integration & System Connectivity",
                                titleKeywords: "Integration",
                                points: [
                                    "Connect SAP Fieldglass with SAP S/4HANA and other ERPs.",
                                    "Provide seamless automation of processes and data exchange.",
                                    "Create integration flow for worker data and invoice.",
                                    "Test and troubleshoot to ensure synchronization."
                                ]
                            },
                            {
                                title: "Analytics & Reporting",
                                titleKeywords: "Analytics",
                                points: [
                                    "Analyze spending of the contingent workforce.",
                                    "Measure vendor performance and worker performance.",
                                    "Design management dashboards and KPI reports, illustrating performance and operational metrics.",
                                    "Use workforce analytics to make a strategic operational framework and business plan."
                                ]
                            },
                            {
                                title: "Advanced Workflows & Customization",
                                titleKeywords: "Workflows",
                                points: [
                                    "Develop complex approval structures, with a hierarchy of conditional routing.",
                                    "For specific vendor management system (VMS) needs, custom form creation.",
                                    "Implement optimized and automated workflows",
                                    "Identify and solve complex workflow problem."
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            type: 'real_world_scenarios',
            title: "Experience Real-World SAP Fieldglass Scenarios & Business Case Studies",
            items: [
                {
                    title: "Global IT Services Company's Contingent Workforce Platform",
                    scenario: "A multinational IT services company with over 50,000 contingent workers globally needs to centralize their Fieldglass implementation. They intend to implement SAP Fieldglass as a 12 country operational cost control, workforce management, and compliance solution.",
                    role: "Lead SAP Fieldglass Consultant",
                    responsibilities: [
                        "Designing a corporate governance structure to be implemented in global and regional operations",
                        "Configuring workflows for contingent worker onboarding and compliance",
                        "Designing automation for timesheet and invoicing processes",
                        "Establishing analytic dashboards for workforce visibility",
                        "Designing frameworks for compliance and governance",
                        "Formulating training and adoption plans"
                    ],
                    outcome: "Deliverables: Configuration documentation, training Materials, a checklist for go-live, and post-implementation support.",
                    icon: "Globe",
                    bg: "bg-blue-100",
                    iconColor: "text-blue-600"
                },
                {
                    title: "Retail Organization's Vendor Management Automation",
                    scenario: "A retail company with over 500 vendor staffing seeks to replace manual processes in vendor management with streamlined and automated systems. They require Fieldglass vendor onboarding, performance tracking, and automation that scales.",
                    role: "SAP Fieldglass Consultant",
                    responsibilities: [
                        "Develop a self-service vendor onboarding portal",
                        "Automate vendor qualification workflows",
                        "Establish vendor performance dashboards and KPI tracking",
                        "Create vendor compliance checking procedures",
                        "Develop vendor collaboration workflows",
                        "Integrate vendor risk assessment workflows",
                        "Build risk assessment and monitoring workflows"
                    ],
                    outcome: "Deliverables: Portal design documentation, workflow diagrams, vendor guides, and support procedures.",
                    icon: "ShoppingBag",
                    bg: "bg-[#ff4500]/10",
                    iconColor: "text-[#ff4500]"
                },
                {
                    title: "Enterprise Statement of Work Implementation for Global Services Company",
                    scenario: "A global services company with over 500 million dollars in annual revenue from managed services/statement of work projects is adopting Fieldglass SOW module for projects streamlining setup, bidding, and invoicing capabilities.",
                    role: "SOW Implementation Specialist",
                    responsibilities: [
                        "Develop SOW project structures for various engagement models",
                        "Configure vendor bidding and awarding workflows",
                        "Establish milestone-based billing procedures",
                        "Design collaboration workflows for service providers",
                        "Develop analytical dashboards for tracking SOWs",
                        "Establish compliance and governance procedures"
                    ],
                    outcome: "Deliverables: SOW process documentation, specification detailing what will be configured, and training documentation and materials for adoption strategy.",
                    icon: "Laptop",
                    bg: "bg-purple-100",
                    iconColor: "text-purple-600"
                }
            ]
        },
        {
            type: 'detailed_certification',
            title: "SAP Fieldglass Certification – Your Global Career Credential",
            subtitle: "We Provide support for Below SAP Fieldglass Certification",
            stats: [
                { label: "Exam Code", value: "C_FG_SRV_90" },
                { label: "Certification Value", value: "Global Recognition" },
                { label: "Job Relevance", value: "High Demand" }
            ],
            items: [
                {
                    title: "SAP Certified Application Associate – Fieldglass Services and External Workforce Management",
                    code: "(C_FG_SRV_90 or current equivalent)",
                    focus: "Complete Fieldglass configuration, contingent worker management, SOW workflows, compliance",
                    who: "Entry to mid-level consultant positions, VMS specialist roles",
                    relevance: "Demonstrates expertise in end-to-end VMS implementation and external workforce management"
                }
            ],
            supportFeatures: [
                { title: "Focused Exam Prep", subtitle: "Comprehensive guides that match SAP exam blueprints" },
                { title: "Mock Exams", subtitle: "Practice exams to simulate time constraints and real exam scenarios for Fieldglass" },
                { title: "Exam Techniques", subtitle: "Time management tips, question-reading strategies, and pitfalls to avoid" },
                { title: "Exam Scheduling Assistance", subtitle: "Help with exam enrollment and scheduling coordination" },
                { title: "Retake Guidance", subtitle: "If you don’t pass on your first attempt, we will provide tailored Fieldglass support regarding the exam's content and guide you on how to retake it." }
            ],
            benefits: [
                { title: "Globally Recognized Credentials", desc: "SAP Fieldglass certifications are widely acknowledged by employers, clients, and VMS recruitment agencies worldwide.", icon: "Globe" },
                { title: "Increased Earning Potential", desc: "Certified Fieldglass professionals earn between 20-35% more than their non-certified peers.", icon: "TrendingUp" },
                { title: "Enhanced Professional Reputation", desc: "Clients and employers will regard you more highly for having met the industry’s demanding VMS standards.", icon: "Award" },
                { title: "Market Differentiation", desc: "FA Certified Fieldglass professionals also enjoy less competition for VMS job applications and contingent workforce consulting proposals.", icon: "CheckCircle2" },
                { title: "Motivated to Learn", desc: "Certification motivates you to master the evolving VMS platform.", icon: "BookOpen" }
            ],
            imageSrc: "/images/ERPVITS - All Modules Infographics/ERPVITS - SAP FG Infographic.webp"
        },
        {
            type: 'detailed_companies',
            customData: {
                tier1: {
                    title: "Tier 1 - Global Consulting Firms",
                    companies: ["Accenture", "Deloitte", "Solution Consulting", "PWC", "EY", "IBM Consulting"],
                    color: "bg-slate-600",
                    lightColor: "bg-slate-50"
                },
                tier2: {
                    title: "Tier 2 - Enterprise SAP Implementation Partners",
                    companies: ["Infosys", "Wipro", "Capgemini", "TCS", "HCL Tech", "Tech Mahindra"],
                    color: "bg-[#ff4500]",
                    lightColor: "bg-[#ff4500]/10"
                },
                tier3: {
                    title: "Tier 3 - Fortune 500 Enterprises",
                    companies: ["Amazon", "Microsoft", "Apple", "Google", "P&G", "Unilever", "Volkswagen", "Pfizer", "J&J"],
                    color: "bg-slate-600",
                    lightColor: "bg-slate-50"
                },
                tier4: {
                    title: "Tier 4 - Mid-Market & Regional Leaders",
                    companies: ["Regional consulting firms", "Industry specific service providers", "In-house procurement teams", "SAP system integrators"],
                    color: "bg-[#ff4500]",
                    lightColor: "bg-[#ff4500]/10"
                },
                tier5: {
                    title: "Tier 5 - Niche Players",
                    companies: ["Specialized firms"],
                    color: "bg-slate-600",
                    lightColor: "bg-slate-50"
                },
                hiringTrends: {
                    title: "Hiring Trends (2025)",
                    stats: [
                        { value: "150%+", label: "Increase in Job Openings", color: "blue" },
                        { value: "400+", label: "Companies Hiring", color: "orange" },
                        { value: "$115K", label: "Average Starting Salary", color: "purple" },
                        { value: "High Demand", label: "S/4HANA Integration Expertise", color: "green" }
                    ]
                }
            }
        },
        {
            type: 'detailed_career_opportunities',
            title: "Career Opportunities After SAP Fieldglass Training",
            subtitle: "Step Into Global VMS and Contingent Workforce Consulting Roles",
            items: [
                {
                    title: "SAP Fieldglass Functional Consultant (Entry Level)",
                    salary: "$115,000–$145,000 (USA) | ₹8–12 LPA (India)",
                    responsibilities: "Configure Fieldglass workflows, manage VMS projects, support contingent workforce implementations",
                    employers: "Accenture, Capgemini, Deloitte, Infosys, Wipro",
                    path: "2–3 years → Senior VMS Consultant",
                    icon: "Award",
                    color: "blue"
                },
                {
                    title: "Contingent Workforce Program Manager / VMS Lead",
                    salary: "$135,000–$175,000 (USA) | ₹11–16 LPA (India)",
                    responsibilities: "Lead Fieldglass implementations, manage VMS teams, optimize contingent operations",
                    employers: "IT Services, Consulting, Large Enterprises",
                    path: "3–5 years → VMS Director or VP-level",
                    icon: "Briefcase",
                    color: "green"
                },
                {
                    title: "Fieldglass Integration Consultant",
                    salary: "$140,000–$190,000 (USA) | ₹12–18 LPA (India)",
                    responsibilities: "Integrate Fieldglass with ERPs, manage contingent workforce data flows, troubleshoot VMS issues",
                    employers: "Consulting, Technology, Large Services Organizations",
                    path: "4–6 years → Senior Integration Architect",
                    icon: "Link",
                    color: "purple"
                },
                {
                    title: "Vendor Management Specialist / SOW Services Consultant",
                    salary: "$120,000–$160,000 (USA) | ₹9–14 LPA (India)",
                    responsibilities: "Manage SOW implementations, optimize vendor workflows, conduct spend analysis",
                    employers: "Consulting, Services, Multi-sector",
                    path: "3–5 years → Senior Services Procurement Manager",
                    icon: "Users",
                    color: "orange"
                },
                {
                    title: "Solutions Architect – Fieldglass / Contingent Workforce Solutions",
                    salary: "$180,000–$250,000+ (USA) | ₹16–25+ LPA (India)",
                    responsibilities: "Design enterprise VMS strategies, lead large-scale Fieldglass implementations, advise on contingent workforce technology",
                    employers: "Consulting, Financial Services, Enterprise",
                    path: "7+ years → Principal Consultant, VMS Practice Lead",
                    icon: "Cpu",
                    color: "indigo"
                }
            ]
        },
        {
            type: 'detailed_career_roadmap'
        },
        {
            type: 'detailed_post_training_journey',
            title: "What to Expect After Completing SAP Fieldglass Training – Your Growth Roadmap",
            items: [
                {
                    title: "Immediate Post-Training",
                    timeline: "Week 1-2",
                    color: "orange",
                    icon: "CheckCircle2",
                    points: [
                        "Receive course completion certificate",
                        "Access lifetime course materials and Fieldglass recordings",
                        "Join alumni network and VMS community forum",
                        "Begin resume updates highlighting SAP Fieldglass expertise"
                    ]
                },
                {
                    title: "Certification & Job Search",
                    timeline: "Week 3-6",
                    color: "slate",
                    icon: "Award",
                    points: [
                        "Apply for SAP Fieldglass Certification exam",
                        "Start job search with career services support",
                        "Participate in alumni networking events",
                        "Receive interview coaching and mock VMS interview feedback"
                    ]
                },
                {
                    title: "First Role Secured",
                    timeline: "Month 2-3",
                    color: "orange",
                    icon: "Briefcase",
                    points: [
                        "Secure first SAP Fieldglass consulting opportunity (typical timeline)",
                        "Begin real-world contingent workforce project experience",
                        "Continue post-training support from instructors",
                        "Prepare for certification with focused guidance"
                    ]
                },
                {
                    title: "First Year in Role",
                    timeline: "Month 1-12",
                    color: "slate",
                    icon: "TrendingUp",
                    points: [
                        "**Month 1-3:** Learn client's contingent workforce operations, understand current VMS processes, get hands-on experience.",
                        "**Month 4-6:** Lead small configuration tasks, mentor other junior Fieldglass consultants, build reputation for reliability.",
                        "**Month 7-12:** Lead components of Fieldglass implementation projects, drive process improvements, demonstrate business acumen."
                    ]
                },
                {
                    title: "Long-Term Growth",
                    timeline: "1-5 Years",
                    color: "orange",
                    icon: "TrendingUp",
                    points: [
                        "Earn SAP Fieldglass certification and related VMS credentials",
                        "Build domain expertise in specific industries (IT services, staffing, finance, etc.)",
                        "Develop leadership and project management capabilities for large VMS programs",
                        "Transition to senior consulting roles or contingent workforce program management",
                        "Explore specializations (VMS analytics, integration architecture, governance)"
                    ]
                }
            ]
        },
        {
            type: 'detailed_upcoming_batches',
            title: "Join Our Next Live Batch – Limited Seats Available for SAP Fieldglass Training",
            subtitle: "Secure your spot in our upcoming batches with flexible timings designed for working professionals",
            batches: [
                {
                    name: "Batch 1: November 2025 (Weekday)",
                    date: "November 15, 2025",
                    time: "Weekdays – 7:00 AM | 8:00 PM IST",
                    duration: "35+ Hours",
                    seats: "4/10 Seats Left",
                    status: "Filling Fast",
                    statusColor: "bg-orange-100 text-orange-600"
                },
                {
                    name: "Batch 2: November 2025 (Weekends)",
                    date: "November 16, 2025",
                    time: "Weekends – Saturday & Sunday, 7:30 AM | 7:00 PM IST",
                    duration: "35+ Hours",
                    seats: "6/10 Seats Left",
                    status: "Filling Fast",
                    statusColor: "bg-orange-100 text-orange-600"
                },
                {
                    name: "Batch 3: December 2025 (Flexible)",
                    date: "December 1, 2025",
                    time: "Flexible timings – customized per batch",
                    duration: "35+ Hours (accelerated)",
                    seats: "7/10 Seats Left",
                    status: "Open",
                    statusColor: "bg-green-100 text-green-600"
                }
            ],
            features: [
                { icon: "Zap", text: "Early-bird discounts (10–15% off) for first 10 registrations" },
                { icon: "Users", text: "Personal VMS learning path consultation" },
                { icon: "ShieldCheck", text: "Priority support and mentoring on Fieldglass" },
                { icon: "CheckCircle2", text: "Networking with cohort members in contingent workforce domain" },
                { icon: "Users", text: "Guaranteed access to current curriculum and experienced trainers" }
            ]
        },
        {
            type: 'detailed_testimonials',
            title: "Hear from Our Successful SAP Fieldglass Learners – Real Reviews, Real Results",
            items: [
                {
                    name: "Raj Patel",
                    role: "SAP Fieldglass Consultant at Accenture",
                    quote: "Outstanding VMS training with real project exposure. I landed a consulting role at Accenture within 9 weeks managing Fieldglass implementations. The hands-on approach and expert instructors made all the difference.",
                    initial: "R",
                    color: "bg-blue-500"
                },
                {
                    name: "Priya Desai",
                    role: "Contingent Workforce Manager",
                    quote: "The weekend flexibility allowed me to learn while working in HR. My organization was so impressed with my Fieldglass skills that they promoted me to Contingent Workforce Manager. This course accelerated my career by 4 years.",
                    initial: "P",
                    color: "bg-green-500"
                },
                {
                    name: "Vikram Mishra",
                    role: "Senior VMS Consultant",
                    quote: "Best decision I made for my SAP career. The capstone projects were exactly like real client VMS work. I walked into my first consulting engagement feeling confident, not intimidated. The certification support was exceptional.",
                    initial: "V",
                    color: "bg-[#ff4500]"
                },
                {
                    name: "Ananya Singh",
                    role: "Certified SAP Fieldglass Professional",
                    quote: "Superb Fieldglass certification preparation. I passed the SAP Fieldglass exam on my first attempt. The mock exams and study materials were spot-on. Highly recommended for VMS careers!",
                    initial: "A",
                    color: "bg-purple-500"
                },
                {
                    name: "Vikram Desai",
                    role: "Integration Consultant at Deloitte",
                    quote: "The instructor's real-world VMS insights were invaluable. I didn't just learn Fieldglass; I learned how to think like a contingent workforce consultant. The alumni network has brought several implementation opportunities my way.",
                    initial: "V",
                    color: "bg-red-500"
                },
                {
                    name: "Sneha Reddy",
                    role: "Contingent Workforce Analyst at Infosys",
                    quote: "From zero Fieldglass knowledge to landing my dream VMS consulting job in 5 months! The instructors are patient, knowledgeable, and truly care about learner success. Lifetime recording access is a huge bonus.",
                    initial: "S",
                    color: "bg-indigo-500"
                }
            ]
        },
        {
            type: 'detailed_demo_booking',
            title: "Ready to Become an SAP Fieldglass Consultant?",
            subtitle: "Book your free demo today and take the first step towards a lucrative SAP Fieldglass VMS career",
            benefits: [
                { title: "Live Session Insight", desc: "Observe real SAP Fieldglass training and instructor methodology" },
                { title: "Career Consultation", desc: "Personalized guidance based on your background" },
                { title: "Instructor Q&A", desc: "Ask questions about SAP Fieldglass course, certification, and career" },
                { title: "Special Offer", desc: "Exclusive discount for demo attendees" }
            ]
        },
        {
            type: 'detailed_faq',
            items: [
                {
                    q: "What is SAP Fieldglass and how does ERPVITS help me learn it?",
                    a: "SAP Fieldglass is a cloud solution for vendor and contingent workforce management. At ERPVITS, we train SAP Fieldglass with real-time VMS scenarios, hands-on practice, and guided projects to master Fieldglass workflows and contingent operations."
                },
                {
                    q: "What will I learn in the SAP Fieldglass Contingent Worker module?",
                    a: "SAP Fieldglass Contingent Worker training covers the entire worker lifecycle with requisition and onboarding, timesheet processing, invoicing, and offboarding using the Fieldglass contingent module."
                },
                {
                    q: "What is SAP Fieldglass Statement of Work (SOW)?",
                    a: "SAP Fieldglass SOW module deals with services procurement and project-based contingent work. ERPVITS supports your understanding of SOW project creation, bidding, service provider management, milestone billing, and compliance tracking."
                },
                {
                    q: "What is the Fieldglass Vendor Management System (VMS)?",
                    a: "The VMS in Fieldglass enables centralized vendor onboarding, performance management, and contingent workforce operations. ERPVITS training covers complete vendor lifecycle management and VMS optimization."
                },
                {
                    q: "In what ways does SAP Fieldglass assist in the management of a contingent workforce?",
                    a: "With SAP Fieldglass, all aspects of contingent workforce management are handled seamlessly, including onboarding, compliance documentation, timesheet processing, invoicing, and reporting analysis. ERPVITS equips you with practical Fieldglass contingent workflow exposure to prepare you for client implementation."
                },
                {
                    q: "What are the reasons to attend ERPVITS SAP Fieldglass Training?",
                    a: "With SAP Fieldglass Online Training at ERPVITS, you can expect live sessions, real VMS projects, and placement assistance. You'll also get Fieldglass Certification guidance and interview readiness strategies."
                },
                {
                    q: "Who is eligible for the SAP Fieldglass Course?",
                    a: "Individuals focused on HR, contingent workforce management, procurement, or SAP technologies are eligible. ERPVITS SAP Fieldglass Course is for freshers, working professionals, and consultants to gain job-ready skills."
                },
                {
                    q: "What does the SAP Fieldglass Certification entail, and what are its benefits?",
                    a: "SAP Fieldglass Certification validates your skills in contingent workforce and vendor management. ERPVITS helps you prepare for certification to become a certified SAP Fieldglass consultant."
                },
                {
                    q: "How much are the SAP Fieldglass course fees at ERPVITS?",
                    a: "At ERPVITS, SAP Fieldglass course fees are set at ₹45,000 INR and include practical sessions, learning materials, certification guidance, and placement support."
                },
                {
                    q: "What is the cost for SAP Fieldglass Certification?",
                    a: "The cost is determined by SAP Education. ERPVITS provides complete guidance, practice tests, and mentoring to help you clear the exam on your first try."
                },
                {
                    q: "How can I become an SAP Fieldglass Consultant through ERPVITS?",
                    a: "Join the structured SAP Fieldglass Training Program at ERPVITS, complete live VMS projects, prepare for certification, and get career guidance and job support to become a successful consultant."
                },
                {
                    q: "What Fieldglass course career options are there?",
                    a: "After completing SAP Fieldglass Training, you can become a Fieldglass Consultant, VMS Specialist, Contingent Workforce Manager, or SAP Functional Consultant. ERPVITS also shares job openings regularly."
                },
                {
                    q: "How does SAP Fieldglass work with SAP S/4HANA?",
                    a: "ERPVITS explains Fieldglass integration with S/4HANA, data flow between systems, and Cloud Integration Gateway and API use for smooth synchronization."
                },
                {
                    q: "What are the main SAP Fieldglass Solutions covered?",
                    a: "The course covers Contingent Worker Management, SOW, Vendor Management, Profile Worker, and Admin Configuration, with live applications and client use cases."
                },
                {
                    q: "How does SAP Fieldglass pricing work?",
                    a: "Fieldglass pricing depends on company size and usage. ERPVITS explains licensing architecture, implementation costs, and functional pricing models."
                },
                {
                    q: "Does ERPVITS have SAP Fieldglass Training with Placement support?",
                    a: "Yes! ERPVITS offers SAP Fieldglass Training with resume preparation, mock interviews, and recruiter connections for SAP Fieldglass consultant jobs."
                },
                {
                    q: "Can I take SAP Fieldglass Online Training from anywhere?",
                    a: "Yes. ERPVITS offers SAP Fieldglass Online Training accessible globally with live instructors, recorded sessions, and hands-on system practice."
                },
                {
                    q: "Is SAP Fieldglass Training available near me?",
                    a: "Yes. ERPVITS provides SAP Fieldglass Training online and in-class in Hyderabad, Pune, and Bangalore with flexible weekday and weekend batches."
                },
                {
                    q: "How does ERPVITS help in Fieldglass Careers?",
                    a: "ERPVITS not only provides technical training but also assists with resume writing, mock interviews, and job referrals to leading SAP consulting firms."
                }
            ]
        }
    ]
};
