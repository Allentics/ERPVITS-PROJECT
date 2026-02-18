import React from 'react';
import {
    Code, Cloud, Database, Layout, Settings, Smartphone, Zap, MonitorSmartphone,
    Layers, ShieldCheck, Terminal, Globe, UserCheck, Briefcase, GraduationCap,
    Users, BarChart, Link, CheckCircle, Box, Puzzle, Cpu
} from 'lucide-react';

export const c4cTechnicalTargetAudience = [
    {
        title: "Developers & Technical Professionals",
        icon: "Code",
        description: [
            "SAP ABAP developers converting to cloud development",
            "Full-stack developers wanting cloud skills",
            "Technical architects creating cloud solutions",
            "Enterprise systems developers"
        ]
    },
    {
        title: "SAP & Cloud Consultants",
        icon: "Briefcase",
        description: [
            "SAP functional consultants needing technical skills",
            "Cloud consultants wanting SAP C4C",
            "Business analysts wanting to develop",
            "C4C technical consultants"
        ]
    },
    {
        title: "IT & Systems Leaders",
        icon: "Settings",
        description: [
            "IT managers updating systems design",
            "Systems admins wanting to level up their skills",
            "Project managers handling cloud tech projects",
            "Infrastructure teams going cloud-first"
        ]
    },
    {
        title: "Fresh Graduates & Career Changers",
        icon: "GraduationCap",
        description: [
            "Engineering grads wanting to go into cloud SAP jobs",
            "Computer science grads looking to work on enterprise software",
            "IT professionals transforming to SAP",
            "Career changers with solid coding skills"
        ]
    },
    {
        title: "Existing SAP C4C Users & Project Teams",
        icon: "Users",
        description: [
            "People at companies working with SAP C4C systems",
            "Super users wanting to know more about systems development",
            "IT teams working on the C4C SAP cloud implementations",
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
            name: "Development Mastery",
            items: [
                {
                    title: "Custom Business Object Development",
                    icon: "Box",
                    points: [
                        "Create and extend business objects using BODL",
                        "Implement complex business logic with ABSL",
                        "Design object relationships and hierarchies",
                        "Handle data validation and error scenarios"
                    ]
                },
                {
                    title: "Cloud Application Development",
                    icon: "Cloud",
                    points: [
                        "Design and develop cloud applications with UI Designer",
                        "Implement responsive and interactive UIs",
                        "Create forms, tables, and dashboard visualizations",
                        "Implement complex user interactions and workflows"
                    ]
                },
                {
                    title: "Service Integration & Web Services",
                    icon: "Link",
                    points: [
                        "Develop and consume web services",
                        "Integrate external systems and APIs",
                        "Implement asynchronous messaging patterns",
                        "Handle integration errors and retries"
                    ]
                },
                {
                    title: "Extensibility & Customization",
                    icon: "Puzzle",
                    points: [
                        "Extend standard SAP C4C objects",
                        "Add custom fields and embedded components",
                        "Implement custom business logic",
                        "Follow best practices for extensions"
                    ]
                }
            ]
        },
        {
            name: "Technical Skills",
            items: [
                {
                    title: "Analytics & Reporting",
                    icon: "BarChart",
                    points: [
                        "Design analytical data sources and cubes",
                        "Develop reports and dashboards",
                        "Implement performance optimization",
                        "Configure advanced analytics"
                    ]
                },
                {
                    title: "Business Configuration & Workflows",
                    icon: "Settings",
                    points: [
                        "Configure business settings and rules",
                        "Create business configurations for end-users",
                        "Implement approval workflows",
                        "Set up notifications and escalations"
                    ]
                },
                {
                    title: "Testing, Debugging & Performance",
                    icon: "CheckCircle",
                    points: [
                        "Execute comprehensive testing strategies",
                        "Debug applications and troubleshoot issues",
                        "Optimize application performance",
                        "Monitor and analyze system metrics"
                    ]
                },
                {
                    title: "Cloud Development Best Practices",
                    icon: "ShieldCheck",
                    points: [
                        "Follow SAP C4C development standards",
                        "Implement security and access controls",
                        "Manage application lifecycle and versioning",
                        "Document code and configurations"
                    ]
                }
            ]
        }
    ]
};

export const c4cTechnicalRealWorldScenarios = [
    {
        title: "Case Study 1: Global Enterprise's Customer Engagement Platform",
        description: "A multinational enterprise needs custom customer engagement applications in SAP C4C extending standard functionalities. There is complex business logic that needs to be addressed, along with custom UIs and integrations with external systems.",
        role: "Lead SAP C4C Developer",
        outcome: "Delivered a comprehensive engagement platform with custom objects and real-time integrations.",
        responsibilities: [
            "Design custom business objects for customer needs",
            "Develop complex ABSL logic and validations",
            "Create engaging UI experiences",
            "Integrate external data sources and services",
            "Build analytics and reporting dashboards"
        ]
    },
    {
        title: "Case Study 2: Technology Company's Cloud API Platform",
        description: "A technology company is implementing SAP C4C and needs extensive integrations with external systems, where you will need to do some solid API development and web service connections.",
        role: "Integration Engineer",
        outcome: "Seamless connectivity with external legacy systems and real-time data sync.",
        responsibilities: [
            "Develop extensive web service integrations",
            "Implement external system connectivity",
            "Create API adapters and middleware",
            "Set up error handling and retry circulation",
            "Build integration monitoring dashboards"
        ]
    },
    {
        title: "Case Study 3: SaaS Provider's Multi-Tenant Application",
        description: "A SaaS provider developing multi-tenant cloud applications in SAP C4C and needs sub applications for client specific customizations.",
        role: "Cloud Solution Architect",
        outcome: "Scalable multi-tenant architecture with isolated client configurations.",
        responsibilities: [
            "Create business objects that can be expanded",
            "Create configurations for individual tenants",
            "Build end-user customization user interfaces",
            "Optimize applications for performance",
            "Enforce security and maintain data isolation"
        ]
    }
];

export const c4cContent = {
    "title": "SAP C4C Technical",
    "category": "Technical",
    "price": "45,000",
    "duration": "35+ Hours",
    "heroHeading": "End-to-End <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] to-red-600 box-decoration-clone\">SAP C4C Technical Training</span> with Real-Time Implementation",
    "heroSubheading": "For a cloud developer and SAP consultant working in customer relationship management, cloud application development, and enterprise software, the ERPVITS SAP C4C Technical Training Program is a transformative learning experience. Every organization is in great need of certified SAP C4C technical experts who can build cloud applications and customize customer solutions, integrate business objects, and lead digital transformation. This extensive SAP C4C Technical online training is designed for developers, technical consultants, cloud architects, ERP professionals, and aspiring graduates who are looking for global consulting and implementation positions and features instructor-led training, hands-on lab work, cloud development projects from the actual world, and complete certification support.",
    "heroImage": "/images/ERPVITS - All Modules Infographics/ERPVITS - SAP C4C Tech Infographic.webp",
    "description": "For a cloud developer and SAP consultant working in customer relationship management, cloud application development, and enterprise software, the ERPVITS SAP C4C Technical Training Program is a transformative learning experience. Every organization is in great need of certified SAP C4C technical experts who can build cloud applications and customize customer solutions, integrate business objects, and lead digital transformation. This extensive SAP C4C Technical online training is designed for developers, technical consultants, cloud architects, ERP professionals, and aspiring graduates who are looking for global consulting and implementation positions and features instructor-led training, hands-on lab work, cloud development projects from the actual world, and complete certification support.",
    "metaTitle": "SAP C4C Technical Training with Live Projects | Join Now",
    "metaDescription": "Advance your career with ERPVITS SAP C4C Technical Training. Get real-world project experience, certification prep & placement support for global SAP roles.",
    "features": [
        "Trusted by 500+ successful SAP C4C developers.",
        "Alumni at Accenture, Capgemini, Deloitte, Infosys and Wipro",
        "Tailored pre-evaluation and cloud development learning path.",
        "Active alumni network and cloud developer community forum.",
        "Over 40 guided lab exercises from intro to advanced cloud development scenarios.",
        "Materials revised every quarter to align with the latest C4C releases.",
        "Mock interviews simulating C4C developer real world scenarios.",
        "Focused bootcamp sessions for cert preparation and advanced training."
    ],
    "sections": [
        {
            "type": "detailed_features",
            "items": [
                {
                    "title": "Certified Expert Trainers",
                    "description": "Each certified SAP C4C trainer has executed and managed multiple enterprise-scale SAP C4C implementations and cloud development projects. They share with you the theory, and real-world industry cloud deployment best and worst practices. The theory is enlightening, but the best and worst practices are priceless when you land on your first SAP C4C development consulting engagement."
                },
                {
                    "title": "100% Hands-On Learning Methodology",
                    "description": "While most traditional training practices teach SAP C4C concepts using PowerPoint slides and presentations, our program goes beyond that. Every session incorporates live presentations on the SAP C4C systems and subsequent guided lab exercises, and you practice what you just learned. By the time the course is completed, you will have built custom applications, developed UI components, integrated web services, configured business objects, and created backend and front analytics reports—all on real live cloud systems."
                },
                {
                    "title": "Job-Oriented Curriculum Design",
                    "description": "The course curriculum is designed with the appropriate skills, responsibilities, and real-life situational problem solving that you will encounter in the field as an SAP C4C developer. Whether cloud applications are being built, standard objects are being extended, business logic is configured, or integration is troubleshooting, the training prepares you for practical outcomes."
                },
                {
                    "title": "Interactive Q&A Sessions",
                    "description": "In addition to the traditional classroom lectures, you have specific times for questions and answers, as well as live office hours, where the instructors will resolve your questions, explain complicated development issues, and walk you through your personal learning plan that aligns with your career and skills and cover the gaps in your knowledge on the topic."
                },
                {
                    "title": "Flexible Batch Timings",
                    "description": "Developers have to deal with learning, and managing families and work, so we understand the developer's perspective and provide flexibility by offering weekday evening batches (6 PM – 9 PM IST) and weekend batches (Saturday & Sunday). Sessions are recorded, so if you miss a live class, you can catch up asynchronously without losing continuity."
                },
                {
                    "title": "Fewer Students For Personalized Attention",
                    "description": "We are not one of those massive online courses where you are just one of a number of people in a class of thousands. We cap our classes at 8 to 10 people so that your instructor can focus on you. This helps them understand what your strengths are, what your difficulties are, and where they need to focus their attention."
                },
                {
                    "title": "Getting a Job",
                    "description": "Learning SAP C4C is a key part of what we do, but getting placed is what we are aiming for. Getting a SAP C4C Job is not easy and our supportive career staff are here to help you prepare an SAP geared resume, handle mock interviews and practice the latest interview questions asked in SAP C4C jobs. This will help you during your interview to effectively present your project and you will definitely stand out."
                },
                {
                    "title": "Jobs, Ongoing support After Training",
                    "description": "Training is not the end of your learning journey when the SAP C4C course is complete. For six months, the instructor will still be your mentor. You will be able to clarify any concepts that may still not be clear to you, help you during the challenging, real-world, cloud-related projects you are working on, and guide you when you are about to start your first development consulting."
                }
            ],
            "title": "Learn SAP C4C Technical Development from Certified Experts – 100% Hands-On, Job-Oriented Training",
            "subtitle": "Our **SAP C4C Technical Online Training** curriculum is delivered exclusively by certified SAP professionals, each with 12+ years of direct hands-on experience in cloud application development and CRM solutions. Instead of passive video courses or self-paced modules, you get **live, real-time training** with interactive sessions where instructors share industry-proven methodologies, address your questions, and guide you through complex cloud development scenarios in a step-by-step manner.",
            "textAlign": "left"
        },
        {
            "type": "content_with_image",
            "items": [
                "Trusted by 600+ successful SAP C4C developers.",
                "Alumni at Accenture, Capgemini, Deloitte, Infosys and Wipro",
                "Tailored pre-evaluation and cloud development learning path.",
                "Active alumni network and cloud developer community forum.",
                "Over 40 guided lab exercises from intro to advanced cloud development scenarios.",
                "Materials revised every quarter to align with the latest C4C releases.",
                "Mock interviews simulating C4C developer real world scenarios.",
                "Focused bootcamp sessions for cert preparation and advanced training."
            ],
            "title": "Why Professionals Choose ERPVITS for SAP C4C Technical Online Training",
            "subtitle": "Success Guarantee & Credibility",
            "videoSrc": "https://www.youtube.com/embed/EtlUBjNMsbM",
            "description": "ERPVITS is known as a training partner for SAP Cloud technologies because thousands of learners started working with leading consulting firms like Accenture, Capgemini, Deloitte, Infosys, and Wipro. The testimonies from our alumni network show what value our instruction brought them and what leap forward it gave them in their careers.",
            "supportText": "From pre-evaluation to post-training support, we support you at every stage of SAP C4C technical learning and the cloud development career transition.",
            "supportTitle": "Complete support Ecosystem"
        },
        {
            "type": "whats_included",
            "stats": [
                {
                    "color": "blue",
                    "label": "Hours of Live Training",
                    "value": "30-35"
                },
                {
                    "color": "purple",
                    "label": "Hands-On Lab Exercises",
                    "value": "40+"
                },
                {
                    "color": "emerald",
                    "label": "SAP C4C Lab Access",
                    "value": "24/7"
                }
            ],
            "title": "What's Included in the SAP C4C Technical Training – Complete Learning Package",
            "features": [
                {
                    "title": "Live Interactive Classes",
                    "description": "For 8-10 weeks, engage in 30-35 hours of live video-conferenced highly interactive development classes with the opportunity for real-time Q&A."
                },
                {
                    "title": "Real-World Projects",
                    "description": "Work on case studies inspired by Fortune 500 companies that include custom application development, business object extension, UI design, service integration, and the implementation of analytics."
                },
                {
                    "title": "Hands-On Lab Environment",
                    "description": "You will have full-time access to SAP C4C development environments to practice ABSL development, configure UI designer, integrate services, and test and run applications."
                },
                {
                    "title": "Certification Exam Prep",
                    "description": "Prepare for the SAP Certified Development Associate—SAP C4C (Customer Cloud) with study guides, practice exams, and bootcamp review sessions."
                },
                {
                    "title": "Resume & Interview Coaching",
                    "description": "Personalized resume transformations, mock technical interviews, and SAP C4C developer interview preparation."
                },
                {
                    "title": "Complete Study Materials",
                    "description": "You will get PDFs, presentations, code samples, configuration docs, interview question banks, and links to SAP documentation."
                },
                {
                    "title": "Lifetime Recording Access",
                    "description": "All live sessions are recorded, transcribed, indexed, and available for lifetime access for easy revision and concept review."
                },
                {
                    "title": "Expert Q&A Sessions",
                    "description": "You will have 60 min sessions each week for important career cloud development concept clarification and project mentoring that aligns with career mentoring."
                }
            ],
            "subtitle": "To help you get ready for the job, we designed a focused career-oriented SAP C4C technical training program that contains live sessions with experts, real cloud development projects, hands-on lab practice, preparation for certification, and career support that is ongoing."
        },
        {
            "type": "detailed_curriculum",
            "title": "Comprehensive SAP C4C Technical Course Curriculum",
            "modules": [
                {
                    "title": "Module 1: SAP C4C Foundation & Architecture (4 Hours)",
                    "hands_on": [
                        "Set up development environment",
                        "Navigate SAP C4C interface",
                        "Configure system connections",
                        "Explore cloud architecture components"
                    ],
                    "learning_points": [
                        "SAP C4C platform overview and benefits",
                        "Cloud architecture and deployment models",
                        "System environment and IDE setup",
                        "Development tools and configuration environment",
                        "Integration landscape and cloud connectivity",
                        "Security and authentication frameworks"
                    ]
                },
                {
                    "title": "Module 2: BODL & ABSL Development (8 Hours)",
                    "hands_on": [
                        "Create custom business objects",
                        "Write ABSL code for business logic",
                        "Implement actions and events",
                        "Debug and test business logic"
                    ],
                    "learning_points": [
                        "Business Object Definition Language (BODL) fundamentals",
                        "Object hierarchy and relationships",
                        "ABSL (ABAP Simple Logic) introduction and syntax",
                        "Actions, events, and event handlers",
                        "Custom logic and business rule implementation",
                        "Data validation and error handling"
                    ]
                },
                {
                    "title": "Module 3: UI Designer & Application Development (6 Hours)",
                    "hands_on": [
                        "Design custom UI forms",
                        "Configure tables and dashboards",
                        "Implement data binding",
                        "Test UI applications"
                    ],
                    "learning_points": [
                        "UI Designer navigation and components",
                        "Form, table, and chart development",
                        "Layout design and responsive UI",
                        "Data binding and field configuration",
                        "Event handling and user interactions",
                        "Embedded components and component reuse"
                    ]
                },
                {
                    "title": "Module 4: Business Configuration (5 Hours)",
                    "hands_on": [
                        "Create business configurations",
                        "Set up BC Views for business users",
                        "Configure business rules",
                        "Manage configuration data"
                    ],
                    "learning_points": [
                        "Business Configuration basics and architecture",
                        "Configuration views (BC Views) setup",
                        "Customization vs. Configuration",
                        "Configuration data management",
                        "Business rules and validation",
                        "Change logs and audit trails"
                    ]
                },
                {
                    "title": "Module 5: Service Integration & Web Services (5 Hours)",
                    "hands_on": [
                        "Create web services",
                        "Integrate external systems",
                        "Configure service endpoints",
                        "Test service integration"
                    ],
                    "learning_points": [
                        "Web service fundamentals and protocols",
                        "XML and SOAP/REST integration",
                        "External system connectivity",
                        "Service provider and service consumer creation",
                        "Asynchronous messaging patterns",
                        "Error handling and retries"
                    ]
                },
                {
                    "title": "Module 6: Business Object Extension (4 Hours)",
                    "hands_on": [
                        "Extend existing business objects",
                        "Add custom fields",
                        "Implement embedded components",
                        "Test extensions"
                    ],
                    "learning_points": [
                        "Extensibility framework overview",
                        "Extending standard business objects",
                        "Adding custom fields and logic",
                        "Embedded components and extensions",
                        "Compatibility and versioning",
                        "Best practices for extensions"
                    ]
                },
                {
                    "title": "Module 7: Analytics & Reporting (4 Hours)",
                    "hands_on": [
                        "Making data sources",
                        "Designing analytical reports",
                        "Building dashboard visualizations",
                        "Configuring report parameters"
                    ],
                    "learning_points": [
                        "Data source creation for analytics",
                        "Report design and configuration",
                        "OLAP and analytical queries",
                        "Cube design and hierarchies",
                        "Performance optimization",
                        "Visualization and dashboards"
                    ]
                },
                {
                    "title": "Module 8: Notifications & Approvals (3 Hours)",
                    "hands_on": [
                        "Configuring notifications",
                        "Approval process setups",
                        "Routing rule implementations",
                        "Workflow notifications testing"
                    ],
                    "learning_points": [
                        "Notifications approval workflows and conditions",
                        "Escalation and routing rules",
                        "Notifications to be customized",
                        "Multilingual support",
                        "Monitoring and logging"
                    ]
                },
                {
                    "title": "Module 9: Advanced Topics & Lifecycle Management (5 Hours)",
                    "hands_on": [
                        "Mashup development",
                        "Performance optimization",
                        "Issue troubleshooting"
                    ],
                    "learning_points": [
                        "Mashups integration and development",
                        "Extending mobile applications",
                        "Versioning & lifecycle management",
                        "Testing strategies and tools",
                        "Performance tuning",
                        "Troubleshooting and debugging"
                    ]
                }
            ],
            "subtitle": "30-35 hours of expert-led training covering every aspect from basics to advanced cloud application development"
        },
        {
            "type": "detailed_certification",
            "items": [
                {
                    "who": "Developer, technical consultant, solutions architect roles",
                    "code": "C_C4C_90 (or equivalent)",
                    "focus": "Custom development, ABSL programming, UI design, integration",
                    "title": "SAP Certified Development Associate – SAP C4C (Customer Cloud)",
                    "relevance": "Demonstrates expertise in end-to-end SAP C4C development"
                }
            ],
            "title": "SAP C4C Technical Certification – Your Global Career Credential",
            "benefits": [
                {
                    "desc": "SAP certificates are honored everywhere.",
                    "title": "Universal Credential Acknowledgment"
                },
                {
                    "desc": "Certified developers earn 20-35% more than their non-certified counterparts.",
                    "title": "Career Boost"
                },
                {
                    "desc": "You will get priority in developer job applications and cloud consulting proposals.",
                    "title": "Edge"
                },
                {
                    "desc": "Certification will push you to the next level of cloud development.",
                    "title": "Added Knowledge"
                },
                {
                    "desc": "You have proven to potential clients and employers that you meet high professional standards.",
                    "title": "Client Trust"
                }
            ],
            "imageSrc": "/images/ERPVITS - All Modules Infographics/ERPVITS - SAP C4C Tech Infographic.webp",
            "description": "We Provide support for Below SAP Certification List"
        },
        {
            "type": "detailed_career_opportunities",
            "items": [
                {
                    "icon": "Code",
                    "path": "2–3 years → Senior C4C Developer",
                    "color": "blue",
                    "title": "SAP C4C Developer (Entry Level)",
                    "salary": "$120,000–$150,000 (USA) | ₹9,00,000–₹12,00,000 (India)",
                    "employers": "Accenture, Capgemini, Deloitte, Infosys, Wipro",
                    "responsibilities": "Develop cloud applications, customize objects, integrate systems"
                },
                {
                    "icon": "Cloud",
                    "path": "3–5 years → Lead Developer or Architecture team",
                    "color": "green",
                    "title": "Cloud Application Developer / Software Engineer",
                    "salary": "$110,000–$145,000 (USA) | ₹8,50,000–₹11,50,000 (India)",
                    "employers": "Technology, SaaS, Cloud Services",
                    "responsibilities": "Design and develop cloud applications, manage deployments"
                },
                {
                    "icon": "Briefcase",
                    "path": "3–5 years → Senior Technical Consultant",
                    "color": "purple",
                    "title": "Technical Consultant – Cloud Development",
                    "salary": "$130,000–$170,000 (USA) | ₹10,00,000–₹14,00,000 (India)",
                    "employers": "Consulting, Systems Integration, Technology",
                    "responsibilities": "Guide customer implementations, design solutions, mentor teams"
                },
                {
                    "icon": "Layers",
                    "path": "5–7 years → Principal Architect or Director",
                    "color": "orange",
                    "title": "Solutions Architect – Cloud CRM",
                    "salary": "$160,000–$210,000 (USA) | ₹13,00,000–₹17,00,000 (India)",
                    "employers": "Consulting, Enterprise Software, Technology",
                    "responsibilities": "Design enterprise cloud solutions, lead large implementations, technical strategy"
                },
                {
                    "icon": "Users",
                    "path": "7+ years → Director of Engineering or VP Technology",
                    "color": "red",
                    "title": "Technical Lead / Development Manager",
                    "salary": "$150,000–$200,000+ (USA) | ₹12,00,000–₹16,00,000+ (India)",
                    "employers": "Consulting, Technology, Enterprise",
                    "responsibilities": "Lead development teams, manage projects, drive technical strategy"
                }
            ],
            "stats": [
                {
                    "label": "Increase in Job Openings",
                    "value": "190%+"
                },
                {
                    "label": "Companies Hiring",
                    "value": "620+"
                },
                {
                    "label": "Avg Starting Salary",
                    "value": "$120K"
                }
            ],
            "title": "Career Opportunities After SAP C4C Technical Training",
            "subtitle": "Step Into Global Cloud Development and Consulting Roles"
        },
        {
            "type": "detailed_career_roadmap",
            "alumniCount": "600+",
            "items": [
                {
                    "stage": "Start (1-3)",
                    "title": "Jr. C4C Technical Consultant",
                    "description": "Support SDK development, custom object creation, UI designer basics."
                },
                {
                    "stage": "Mid-Level (4-6)",
                    "title": "Sr. C4C Technical Consultant / Architect",
                    "description": "Advanced SDK logic, integration flows, mashups, complex UI enhancements."
                },
                {
                    "stage": "Senior (7-10+)",
                    "title": "Principal Consultant / Manager",
                    "description": "Technical architecture, integration strategy, solution extension design."
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
            ]
        },
        {
            "type": "detailed_companies",
            "courseName": "SAP C4C Technical",
            "customData": {
                "tier1": {
                    "color": "bg-slate-600",
                    "title": "Tier 1 – Global Consulting Firms",
                    "companies": [
                        "Accenture",
                        "Capgemini",
                        "Deloitte Consulting",
                        "EY (Ernst & Young)",
                        "KPMG",
                        "PwC",
                        "IBM Consulting"
                    ],
                    "lightColor": "bg-slate-50"
                },
                "tier2": {
                    "color": "bg-[#ff4500]",
                    "title": "Tier 2 – Enterprise SAP Implementation Partners",
                    "companies": [
                        "Infosys",
                        "Wipro",
                        "Cognizant",
                        "TCS (Tata Consulting Services)",
                        "HCL Technologies",
                        "Tech Mahindra"
                    ],
                    "lightColor": "bg-[#ff4500]/10"
                },
                "tier3": {
                    "color": "bg-slate-600",
                    "title": "Tier 3 – Technology & Cloud Leaders",
                    "companies": [
                        "Salesforce",
                        "Microsoft",
                        "Google Cloud",
                        "Amazon Web Services (AWS)",
                        "Adobe",
                        "Oracle",
                        "ServiceNow",
                        "IBM",
                        "SAP (Direct)"
                    ],
                    "lightColor": "bg-slate-50"
                },
                "tier4": {
                    "color": "bg-[#ff4500]",
                    "title": "Tier 4 – Mid-Market & Specialized Companies",
                    "companies": [
                        "Regional technology partners",
                        "Cloud-focused service providers",
                        "SaaS development companies",
                        "In-house development teams"
                    ],
                    "lightColor": "bg-[#ff4500]/10"
                },
                "hiringTrends": {
                    "stats": [
                        {
                            "color": "blue",
                            "label": "Increase in Job Openings",
                            "value": "190%+"
                        },
                        {
                            "color": "green",
                            "label": "Demand for Cloud Dev",
                            "value": "High"
                        },
                        {
                            "color": "purple",
                            "label": "Salaries for Certified Pros",
                            "value": "Premium"
                        },
                        {
                            "color": "orange",
                            "label": "Remote Opportunities",
                            "value": "Global"
                        }
                    ],
                    "title": "Hiring Trends (2025)"
                }
            }
        },
        {
            "type": "detailed_post_training_journey",
            "items": [
                {
                    "title": "Immediate Post-Training",
                    "points": [
                        "Receive course completion certificate",
                        "Access lifetime course materials and C4C recordings",
                        "Join alumni network and developer community forum",
                        "Begin resume updates highlighting SAP C4C expertise"
                    ],
                    "timeline": "Week 1-2"
                },
                {
                    "title": "Exam Prep & Job Search",
                    "points": [
                        "Apply for SAP C4C certification exam",
                        "Start job search with career services support",
                        "Participate in alumni networking events",
                        "Receive interview coaching and technical interview feedback"
                    ],
                    "timeline": "Week 3-6"
                },
                {
                    "title": "First Role & Projects",
                    "points": [
                        "Secure first SAP C4C development opportunity (typical timeline)",
                        "Begin real-world cloud project experience",
                        "Continue post-training support from instructors"
                    ],
                    "timeline": "Month 2-3"
                },
                {
                    "title": "First Year in Role",
                    "points": [
                        "Months 1–3: Learn project requirements, understand development processes, get hands-on experience with implementations",
                        "Months 4–6: Lead small development tasks, review peer code, build reputation for technical quality",
                        "Months 7–12: Lead development components, design solutions, demonstrate technical and business acumen"
                    ],
                    "timeline": "First Year"
                },
                {
                    "title": "Long-Term Growth",
                    "points": [
                        "Earn SAP C4C certification and related certifications",
                        "Build domain expertise in specific industries (retail, manufacturing, tech, etc.)",
                        "Develop leadership and project management capabilities",
                        "Transition to technical leadership or architecture roles",
                        "Explore specializations (integration, analytics, security)"
                    ],
                    "timeline": "1-5 Years"
                }
            ],
            "title": "What to Expect After Completing SAP C4C Technical Training – Your Growth Roadmap"
        },
        {
            "type": "detailed_upcoming_batches",
            "title": "Join Our Next Live Batch – Limited Seats Available for SAP C4C Technical Training",
            "batches": [
                {
                    "date": "November 15, 2025",
                    "name": "Batch 1: November 2025 (Weekdays – 7:00 AM – 8:00 PM IST)",
                    "time": "Weekdays – 7:00 AM – 8:00 PM IST",
                    "seats": "7/10 Seats Left",
                    "status": "Filling Fast",
                    "duration": "30 - 35 Hours",
                    "statusColor": "bg-orange-100 text-orange-600"
                },
                {
                    "date": "November 16, 2025",
                    "name": "Batch 2: November 2025 (Weekends – Saturday & Sunday, 8:30 AM – 7:00 PM IST)",
                    "time": "Weekends – Saturday & Sunday, 8:30 AM – 7:00 PM IST",
                    "seats": "3/10 Seats Left",
                    "status": "Filling Fast",
                    "duration": "30 - 35 Hours",
                    "statusColor": "bg-orange-100 text-orange-600"
                },
                {
                    "date": "December 1, 2025",
                    "name": "Batch 3: December 2025 (Flexible timings – customized per batch)",
                    "time": "Flexible timings – customized per batch",
                    "seats": "8/10 Seats Left",
                    "status": "Open",
                    "duration": "30 - 35 Hours (accelerated)",
                    "statusColor": "bg-green-100 text-green-600"
                }
            ],
            "features": [
                {
                    "icon": "Zap",
                    "text": "Early-bird discounts (10–15% off) for first 10 registrations"
                },
                {
                    "icon": "Users",
                    "text": "Personal C4C learning path consultation"
                },
                {
                    "icon": "ShieldCheck",
                    "text": "Priority support and technical mentoring"
                },
                {
                    "icon": "CheckCircle2",
                    "text": "Networking with cohort members"
                },
                {
                    "icon": "GraduationCap",
                    "text": "Guaranteed access to current curriculum and experienced trainers"
                }
            ],
            "subtitle": "Secure your spot in our upcoming batches with flexible timings designed for working developers"
        },
        {
            "type": "detailed_testimonials",
            "items": [
                {
                    "name": "Raj Patel",
                    "role": "SAP C4C Developer at Capgemini",
                    "quote": "Outstanding cloud development training with real project exposure. I landed a developer role at Capgemini within 8 weeks managing C4C implementations. The hands-on coding approach and expert instructors made all the difference."
                },
                {
                    "name": "Priya Misra",
                    "role": "Senior Developer",
                    "quote": "The weekend flexibility allowed me to upskill in cloud development while working. My employer was impressed with my C4C skills and promoted me to Senior Developer. This course accelerated my career by 3 years."
                },
                {
                    "name": "Vikram Singh",
                    "role": "Technical Consultant",
                    "quote": "Best decision for my tech career. The capstone projects were exactly like real enterprise development. I walked in confident in both design and coding. The certification support was excellent."
                },
                {
                    "name": "Ananya Gupta",
                    "role": "C4C Lead Developer",
                    "quote": "Superb technical training and certification prep. I passed the SAP C4C exam on my first attempt. The mock exams and code samples were spot-on. Now leading C4C implementations."
                },
                {
                    "name": "Vikram Desai",
                    "role": "Solutions Architect",
                    "quote": "The instructor's real-world insights on architecture and debugging were invaluable. I learned not just C4C but cloud development patterns. The alumni network brought several opportunities."
                },
                {
                    "name": "Sneha Sharma",
                    "role": "C4C Developer at Infosys",
                    "quote": "From junior programmer to cloud developer in 5 months! Patient instructors who provide detailed feedback. Lifetime recording access is invaluable for reference."
                }
            ],
            "title": "Hear from Our Successful SAP C4C Developer Learners – Real Reviews, Real Results",
            "subtitle": "4.7/5 Based on 290+ learner reviews"
        },
        {
            "cta": {
                "text": "Download Free Interview Guide",
                "subText": "Submit Form Below"
            },
            "type": "download_guide",
            "items": [
                {
                    "title": "50+ Technical Questions",
                    "description": "In-depth development questions with expert answers covering all core modules."
                },
                {
                    "title": "ABSL Coding Scenarios",
                    "description": "Real-world coding exercises and debugging patterns you'll face in interviews."
                },
                {
                    "title": "Architecture & Design",
                    "description": "Critical questions on C4C architecture and cloud design patterns."
                },
                {
                    "title": "Behavioral Questions",
                    "description": "Specific behavioral questions tailored for SAP C4C developer roles."
                },
                {
                    "title": "Salary Negotiation Tips",
                    "description": "Expert guidance for cloud developers to negotiate premium salary packages."
                },
                {
                    "title": "Level-Based Prep",
                    "description": "Interview preparation tips for different experience levels from junior to lead."
                }
            ],
            "title": "Download the Most Asked SAP C4C Developer Interview Questions",
            "subtitle": "Complete the form below to download a comprehensive guide covering technical questions, coding exercises, and architecture patterns."
        },
        {
            "type": "detailed_demo_booking",
            "title": "Ready to Become an SAP C4C Developer?",
            "benefits": [
                {
                    "desc": "Observe real C4C development training and coding methodology",
                    "title": "Sample Live Class Session"
                },
                {
                    "desc": "Personalized guidance based on your development background",
                    "title": "30-Min Career Consultation"
                },
                {
                    "desc": "Ask questions about C4C course, certification, and developer career",
                    "title": "Q&A with Instructor"
                },
                {
                    "desc": "Exclusive discount for demo attendees",
                    "title": "Special Discount Offer"
                }
            ],
            "subtitle": "Book your free demo today and take the first step towards a lucrative cloud development career"
        },
        {
            "type": "detailed_faq",
            "items": [
                {
                    "a": "SAP C4C (Customer Cloud) is a cloud-based CRM and ERP solution. At ERPVITS we provide in-depth C4C technical training that includes custom development, API integration, and cloud application design to help you become an expert in enterprise cloud programming.",
                    "q": "What is SAP C4C and how does ERPVITS help me learn it?"
                },
                {
                    "a": "ABSL or ABAP Simple Logic is the scripting language for the business logic of SAP C4C. ERPVITS teaches you the syntax of ABSL, how to handle events, and the intricate logic for constructing robust applications in the cloud.",
                    "q": "What is ABSL, and why is it important in C4C?"
                },
                {
                    "a": "As for the UI Designer, it is SAP C4C's instrument to visually develop user interfaces. In ERPVITS training, you learn form design, how to bind data, handle events, and other UI Designer functionalities.",
                    "q": "What is the UI Designer, and how do I use it?"
                },
                {
                    "a": "To integrate external systems with SAP C4C, ERPVITS teaches the development of web services, designing APIs, and different integration patterns for secure and reliable connection of external systems to SAP C4C.",
                    "q": "How do I integrate external systems with SAP C4C?"
                },
                {
                    "a": "With extensibility, APIs, and analytics, along with other features, SAP C4C offers complete cloud CRM. ERPVITS teaches practical development with exposure to real cloud scenarios.",
                    "q": "How does SAP C4C support modern cloud development?"
                },
                {
                    "a": "With ERPVITS, you get SAP C4C training in a blended format with live sessions, industry-aligned projects, and placement assistance. Guidance on C4C certification is provided along with resume building, interview preparation, and training.",
                    "q": "Why should I join SAP C4C Technical Training at ERPVITS?"
                },
                {
                    "a": "Those who can code and are interested in developing cloud CRMs can enroll. If you're new to SAP or coming from a different platform, ERPVITS builds job-ready cloud development skills.",
                    "q": "Who can enroll in the SAP C4C Technical Course?"
                },
                {
                    "a": "SAP C4C Certification proves one is skilled in developing the cloud. ERPVITS gets you ready for the certified SAP C4C developer official certification exams.",
                    "q": "What is SAP C4C Certification and what is its importance?"
                },
                {
                    "a": "The course fee for SAP C4C is based on the program length and training mode. The training pricing is competitive with the development, placement, certification, and support that we offer.",
                    "q": "What is the course fee for SAP C4C at ERPVITS?"
                },
                {
                    "a": "The cost of the SAP C4C Certification is set by SAP Education. ERPVITS helps with complete exam prep, practice exams, and mentoring to help you pass on the first attempt.",
                    "q": "What is the cost of SAP C4C Certification?"
                },
                {
                    "a": "You complete development projects under our structured SAP C4C Technical training program, and prepare for certification. ERPVITS also provides job assistance and career counseling.",
                    "q": "How can I be an SAP C4C Developer through ERPVITS?"
                },
                {
                    "a": "After you complete training in C4C, you can work as a C4C Developer, Cloud Solutions Architect, Technical Consultant, or Solutions Engineer at various consulting firms and companies.",
                    "q": "What jobs can I get after C4C training?"
                },
                {
                    "a": "The main coding language you’ll be using is ABSL. Having a simple understanding of object-oriented programming and JavaScript will be useful too. ERPVITS teaches all the needed languages and concepts.",
                    "q": "What coding languages should I know?"
                },
                {
                    "a": "ERPVITS teaches all the integration lessons using integration patterns like APIs, web services, and middleware connections to ERP systems, cloud databases, and third-party software applications.",
                    "q": "In what ways does SAP C4C work with business systems?"
                },
                {
                    "a": "ERPVITS teaches C4C development using ABSL, UI Designer, business configuration, web services, analytics, workflows, and extensions. All of these are accompanied by hands-on development experience.",
                    "q": "What main C4C development sections are included?"
                },
                {
                    "a": "Yes! ERPVITS provides SAP C4C training and placement support. We prepare wonderful profiles as developers and help you get in touch with employers.",
                    "q": "Does ERPVITS offer SAP C4C Training with Placement support?"
                },
                {
                    "a": "No problem at all! The SAP C4C online training offered by ERPVITS can be done from any place in the world. You learn alongside a live teacher, get recorded lessons, and can work on projects from home.",
                    "q": "Can I do SAP C4C Online Training from anywhere?"
                },
                {
                    "a": "Of course! ERPVITS has both online and in-person training and has adapted some of their classes for working professionals to be able to attend on the weekends or during the week.",
                    "q": "Is there SAP C4C Training near me?"
                },
                {
                    "a": "ERPVITS helps your C4C career by showing you how to build your resume, preparing you for a technical interview, and referring you to jobs at top SAP consulting and tech companies.",
                    "q": "How does ERPVITS assist in SAP C4C Developer Careers?"
                }
            ],
            "title": "Frequently Asked Questions (FAQs) – SAP C4C Technical Training at ERPVITS"
        }
    ],
    "curriculum": [
        {
            "title": "Module 1: SAP C4C Foundation & Architecture (4 Hours)",
            "topics": [
                "What You'll Learn:",
                "SAP C4C platform overview and benefits",
                "Cloud architecture and deployment models",
                "System environment and IDE setup",
                "Development tools and configuration environment",
                "Integration landscape and cloud connectivity",
                "Security and authentication frameworks",
                "Hands-On Activities:",
                "Set up development environment",
                "Navigate SAP C4C interface",
                "Configure system connections",
                "Explore cloud architecture components"
            ]
        },
        {
            "title": "Module 2: BODL & ABSL Development (8 Hours)",
            "topics": [
                "What You'll Learn:",
                "Business Object Definition Language (BODL) fundamentals",
                "Object hierarchy and relationships",
                "ABSL (ABAP Simple Logic) introduction and syntax",
                "Actions, events, and event handlers",
                "Custom logic and business rule implementation",
                "Data validation and error handling",
                "Hands-On Activities:",
                "Create custom business objects",
                "Write ABSL code for business logic",
                "Implement actions and events",
                "Debug and test business logic"
            ]
        },
        {
            "title": "Module 3: UI Designer & Application Development (6 Hours)",
            "topics": [
                "What You'll Learn:",
                "UI Designer navigation and components",
                "Form, table, and chart development",
                "Layout design and responsive UI",
                "Data binding and field configuration",
                "Event handling and user interactions",
                "Embedded components and component reuse",
                "Hands-On Activities:",
                "Design custom UI forms",
                "Configure tables and dashboards",
                "Implement data binding",
                "Test UI applications"
            ]
        },
        {
            "title": "Module 4: Business Configuration (5 Hours)",
            "topics": [
                "What You'll Learn:",
                "Business Configuration basics and architecture",
                "Configuration views (BC Views) setup",
                "Customization vs. Configuration",
                "Configuration data management",
                "Business rules and validation",
                "Change logs and audit trails",
                "Hands-On Activities:",
                "Create business configurations",
                "Set up BC Views for business users",
                "Configure business rules",
                "Manage configuration data"
            ]
        },
        {
            "title": "Module 5: Service Integration & Web Services (5 Hours)",
            "topics": [
                "What You'll Learn:",
                "Web service fundamentals and protocols",
                "XML and SOAP/REST integration",
                "External system connectivity",
                "Service provider and service consumer creation",
                "Asynchronous messaging patterns",
                "Error handling and retries",
                "Hands-On Activities:",
                "Create web services",
                "Integrate external systems",
                "Configure service endpoints",
                "Test service integration"
            ]
        },
        {
            "title": "Module 6: Business Object Extension (4 Hours)",
            "topics": [
                "What You'll Learn:",
                "Extensibility framework overview",
                "Extending standard business objects",
                "Adding custom fields and logic",
                "Embedded components and extensions",
                "Compatibility and versioning",
                "Best practices for extensions",
                "Hands-On Activities:",
                "Extend existing business objects",
                "Add custom fields",
                "Implement embedded components",
                "Test extensions"
            ]
        },
        {
            "title": "Module 7: Analytics & Reporting (4 Hours)",
            "topics": [
                "What You'll Learn:",
                "Data source creation for analytics",
                "Report design and configuration",
                "OLAP and analytical queries",
                "Cube design and hierarchies",
                "Performance optimization",
                "Visualization and dashboards",
                "Hands-On Activities:",
                "Making data sources",
                "Designing analytical reports",
                "Building dashboard visualizations",
                "Configuring report parameters"
            ]
        },
        {
            "title": "Module 8: Notifications & Approvals (3 Hours)",
            "topics": [
                "What You'll Learn:",
                "Notifications approval workflows and conditions",
                "Escalation and routing rules",
                "Notifications to be customized",
                "Multilingual support",
                "Monitoring and logging",
                "Hands-On Activities:",
                "Configuring notifications",
                "Approval process setups",
                "Routing rule implementations",
                "Workflow notifications testing"
            ]
        },
        {
            "title": "Module 9: Advanced Topics & Lifecycle Management (5 Hours)",
            "topics": [
                "What You'll Learn:",
                "Mashups integration and development",
                "Extending mobile applications",
                "Versioning & lifecycle management",
                "Testing strategies and tools",
                "Performance tuning",
                "Troubleshooting and debugging",
                "Hands-On Activities:",
                "Mashup development",
                "Performance optimization",
                "Issue troubleshooting"
            ]
        }
    ],
    "faqs": [
        {
            "answer": "While beneficial, it is not strictly required. Basic knowledge of programming concepts and object-oriented principles is helpful.",
            "question": "Do I need prior SAP experience?"
        },
        {
            "answer": "Yes, we provide access to the SAP Cloud Applications Studio (SDK) for practice during the training.",
            "question": "Is the SDK access provided?"
        },
        {
            "answer": "The course is approximately 35-40 hours of live instructor-led training.",
            "question": "What is the duration of the course?"
        },
        {
            "answer": "Yes, we provide 100% placement assistance including resume building, mock interviews, and job referrals.",
            "question": "Do you offer placement assistance?"
        }
    ],
    "schema": "{\"test\": \"string\"}"
};
