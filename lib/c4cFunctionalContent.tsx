import React from 'react';
import { Cloud, Users, TrendingUp, MessageSquare, Smartphone, Layout, BarChart, Settings, ShieldCheck, Zap, Briefcase, UserCheck, PhoneCall, Mail, PieChart, Target, Globe, BookOpen, Star, Clock, CheckCircle, Award, MonitorSmartphone, Database, Lock, RefreshCw, Server, Search } from 'lucide-react';

export const c4cTargetAudience = [
    {
        icon: "Users",
        title: "Sales and Customer Service Professionals",
        description: [
            "Sales managers seeking cloud CRM platform expertise",
            "Sales representatives wanting to master modern CRM systems",
            "Customer service managers aiming for consultant-level skills",
            "Account executives transitioning to CRM consulting",
            "Sales operations professionals seeking CRM specialization"
        ]
    },
    {
        icon: "Settings",
        title: "SAP and ERP Professionals",
        description: [
            "SAP consultants from CRM, SD, MM modules seeking cloud specialization",
            "ERP system administrators expanding into cloud CRM domain",
            "SAP architects designing enterprise customer engagement solutions",
            "Business analysts supporting CRM implementations",
            "Technical consultants interested in cloud-based CRM"
        ]
    },
    {
        icon: "BarChart",
        title: "Marketing and Business Professionals",
        description: [
            "Marketing managers seeking CRM platform expertise",
            "Business analysts aiming for CRM consulting roles",
            "Marketing operations professionals interested in automation",
            "Product managers wanting customer engagement knowledge",
            "Business process owners focused on customer experience"
        ]
    },
    {
        icon: "Briefcase",
        title: "Fresh Graduates and Career Changers",
        description: [
            "MBA graduates (especially Sales, Marketing, Business focus)",
            "Business administration graduates targeting CRM careers",
            "Sales or marketing professionals entering CRM consulting",
            "IT professionals pivoting into cloud CRM solutions",
            "Career changers with strong customer-facing experience"
        ]
    },
    {
        icon: "Cloud",
        title: "Existing Employees of SAP C4C Customers",
        description: [
            "Employees at organizations implementing or using SAP C4C",
            "Power users wanting to become certified CRM consultants",
            "Sales teams wanting to master C4C platform",
            "Service teams seeking C4C expertise",
            "IT teams supporting C4C implementations"
        ]
    }
];

export const c4cPrerequisites = {
    minimum: [
        "Basic understanding of sales and customer service processes",
        "Familiarity with CRM concepts (customers, opportunities, accounts)",
        "Comfortable with web-based applications and cloud software",
        "Ability to learn independently and ask clarifying questions",
        "Basic business acumen and organizational knowledge"
    ],
    nicetohave: [
        "Prior CRM experience (Salesforce, Microsoft Dynamics, SAP CRM)",
        "Sales or customer service work experience",
        "Exposure to cloud platforms or SaaS solutions",
        "Business process knowledge (sales, service, marketing)",
        "Understanding of cloud technology basics"
    ]
};

export const c4cFunctionalContent = {
    price: "Competitive",
    duration: "50-60 Hours",
    syllabusUrl: "/syllabus/ERPVITS Syllabus - Course Contents Pdf/SAP Functional/sap-c4c-functional.pdf",

    heroHeading: <>Master Cloud-Based Customer Relationship Management with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] to-red-600 box-decoration-clone">#1 SAP C4C Functional Online Training Program</span></>,
    heroSubheading: "The SAP Cloud for Customer Online Functional Training Program from ERPVITS represents a transformative learning pathway for professionals eager to excel in cloud-based customer relationship management, sales operations, and customer service transformation. In today's cloud-first business landscape, organizations urgently need certified SAP C4C functional experts who can streamline sales processes, enhance customer service operations, improve customer collaboration, and drive digital transformation through modern cloud CRM solutions.",

    heroLayout: "centered",
    themeColor: "orange",

    badge: "Rated #1 SAP C4C Functional Training 2025",
    badges: ["Mode: Instructor Led/Self Paced", "Batches: Weekend/Weekday"],
    heroStats: [
        { icon: "Monitor", label: "Instructor Led/Self Paced" },
        { icon: "Calendar", label: "Weekend/Weekday" }
    ],

    buttonLabels: {
        primary: "Book Your Free Demo Class →",
        secondary: "View Curriculum"
    },

    title: "SAP C4C Functional",
    description: "The SAP Cloud for Customer functional training program combines interactive, instructor-led sessions, hands-on lab exercises, and real-time industry projects designed specifically for sales professionals, customer service specialists, and SAP consultants.",

    metaTitle: "SAP C4C Functional Training Online | Cloud CRM Course",
    metaDescription: "SAP C4C functional training for SAP consultants and CRM professionals with hands-on labs and real-time projects. Enroll & Get Certified with C4C Course.",
    keywords: "sap c4c functional, sap c4c functional jobs, sap c4c functional training, sap c4c functional consultant jobs",

    features: [],
    sections: [
        {
            type: 'detailed_features',
            title: "Learn SAP C4C Functional from Certified Experts – 100% Hands-On, Job-Oriented Training",
            textAlign: 'left',
            subtitle: "Our **SAP C4C Functional Online Training** curriculum is delivered exclusively by certified SAP professionals, each with 12+ years of direct hands-on experience in cloud CRM, sales cloud, and customer service engagement. Instead of passive video courses or self-paced modules, you get **live, real-time training** with interactive sessions where instructors share industry-proven methodologies, address your questions, and guide you through complex functional CRM scenarios in a step-by-step manner.",
            badge: "Why Choose Us",
            items: [
                {
                    title: "Certified Instructor Expertise",
                    description: "Each trainer holds official SAP certifications and has successfully led multiple enterprise-scale SAP C4C implementations. They don't just teach theory; they share real-world war stories, common CRM implementation pitfalls, and industry best practices."
                },
                {
                    title: "100% Hands-On Learning Methodology",
                    description: "Every session includes live demonstrations directly on SAP C4C cloud systems, followed by guided lab exercises where you replicate what you've learned. You'll configure sales pipelines, manage customer accounts, and execute workflows on real cloud systems."
                },
                {
                    title: "Job-Oriented Curriculum Design",
                    description: "Designed around the exact skills, responsibilities, and problem-solving scenarios you'll face as an SAP C4C functional consultant, whether implementing sales process transformation or troubleshooting cloud CRM issues."
                },
                {
                    title: "Interactive Q&A Sessions",
                    description: "Dedicated Q&A forums and live office hours where instructors address your doubts, clarify complex topics, and provide personalized guidance tailored to your learning pace."
                },
                {
                    title: "Flexible Batch Timings",
                    description: "We offer both weekday evening batches (6 PM – 9 PM IST) and weekend batches (Saturday & Sunday). Sessions are recorded for asynchronous learning."
                },
                {
                    title: "Small Batch Sizes",
                    description: "Batches are capped at 8-10 participants to ensure personalized attention, allowing instructors to provide targeted feedback on your CRM configurations."
                },
                {
                    title: "Placement & Career support",
                    description: "Our dedicated career support team helps you build an impactful SAP C4C-focused resume, prepare through mock interviews, and practice with real-world interview questions from recent hiring trends."
                },
                {
                    title: "Active Alumni Network",
                    description: "Join a thriving community of SAP C4C professionals. Exchange tips, share CRM best practices, and build professional relationships that can lead to referrals."
                },
                {
                    title: "Ongoing support Post-Training",
                    description: "For six months after training, you'll continue to receive instructor guidance for clarifying concepts or troubleshooting real-world CRM challenges."
                }
            ]
        },
        {
            type: 'content_with_image',
            title: "Why Professionals Choose ERPVITS for SAP C4C Functional Online Training",
            subtitle: "Success Guarantee & Credibility",
            videoSrc: "https://www.youtube.com/embed/X8NW74XjShI",
            description: "ERPVITS has established itself as a trusted training partner for SAP Modules, with hundreds of successful learners working at top consulting firms like Accenture, Capgemini, Deloitte, Infosys, and Wipro.",
            items: [
                "Trusted by 500+ successful SAP professionals",
                "Alumni at Accenture, Capgemini, Deloitte, Infosys, Wipro",
                "Personalized pre-evaluation and learning path customization",
                "Active alumni network and community forum for cloud CRM professionals",
                "75+ guided lab exercises from basic to advanced customer engagement scenarios",
                "Quarterly updated materials aligned with latest SAP C4C releases",
                "Mock interviews simulating real consultant scenarios",
                "Dedicated certification prep and cloud skills development workshops"
            ],
            supportTitle: "Complete support Ecosystem",
            supportText: "From pre-evaluation to post-training support, we guide you through every step of your SAP C4C functional learning journey and career transition."
        },
        {
            type: 'whats_included',
            content: "A complete, career-focused SAP Cloud for Customer functional training program combining live expert sessions, real-world projects, hands-on labs, certification preparation, and ongoing career support.",
            stats: [
                { value: "50-60", label: "Hours of Live Training", color: "blue" },
                { value: "75+", label: "Hands-On Lab Exercises", color: "purple" },
                { value: "100%", label: "Placement support", color: "orange" }
            ],
            features: [
                { title: "Live Interactive Classes", description: "50–60 hours of instructor-led sessions over 10–14 weeks via live video conferencing." },
                { title: "Real-World Projects", description: "Work on Fortune 500-inspired case studies covering sales pipeline and service ticket workflows." },
                { title: "Hands-On Lab Environment", description: "Get full-time access to SAP C4C cloud systems to practice account management and CRM analytics." },
                { title: "Certification Exam Prep", description: "Prepare for SAP Certified Application Associate – SAP C4C (C_C4C14_2404) with study guides and practice exams." },
                { title: "Resume & Interview Coaching", description: "Personalized resume optimization and mock consulting interviews focusing on CRM operations." },
                { title: "Complete Study Materials", description: "Access PDFs, presentations, configuration checklists, and interview question banks." },
                { title: "Lifetime Recording Access", description: "All live sessions are recorded, transcribed, and indexed for lifetime access." },
                { title: "Expert Q&A Sessions", description: "Weekly 60-minute live Q&A discussions for concept clarification and career mentoring." }
            ]
        },
        {
            type: 'detailed_curriculum',
            title: "Comprehensive SAP C4C Functional Course Curriculum",
            subtitle: "50-60 hours of expert-led training covering every aspect from basics to advanced implementation",
            modules: [
                {
                    title: "Module 1: Introduction to SAP C4C and Cloud CRM Strategy",
                    duration: "5 Hours",
                    learning_points: [
                        "Overview of SAP Cloud for Customer and its role in modern CRM",
                        "Key features and benefits: cloud-based, real-time visibility",
                        "SAP C4C architecture and system components",
                        "CRM functional areas: Sales Cloud, Service Cloud, Marketing Cloud",
                        "User interface navigation and core concepts",
                        "Cloud CRM implementation approaches",
                        "Organizational alignment for CRM transformation"
                    ],
                    hands_on: [
                        "Navigate SAP C4C interface and dashboard environment",
                        "Explore core CRM modules and functionality",
                        "Understand data structures and relationships",
                        "Create basic CRM configurations"
                    ]
                },
                {
                    title: "Module 2: Customer Account Management and Master Data",
                    duration: "6 Hours",
                    learning_points: [
                        "Customer account setup and management",
                        "Account hierarchies and organizational structures",
                        "Customer contact and relationships management",
                        "Account team and role configuration",
                        "Customer communication preferences",
                        "Account segmentation and classification",
                        "Account analytics and insights"
                    ],
                    hands_on: [
                        "Create and manage customer accounts",
                        "Set up account hierarchies and relationships",
                        "Manage customer contacts and roles",
                        "Configure account teams and permissions",
                        "Execute account segmentation",
                        "Create account analytics reports"
                    ]
                },
                {
                    title: "Module 3: Sales Cloud and Opportunity Management",
                    duration: "9 Hours",
                    learning_points: [
                        "Sales process and methodology in C4C",
                        "Opportunity management lifecycle",
                        "Sales pipeline configuration and stages",
                        "Opportunity forecasting and reporting",
                        "Sales team management and assignments",
                        "Quote and proposal management",
                        "Sales analytics and performance tracking",
                        "Territory management and routing"
                    ],
                    hands_on: [
                        "Create and manage sales opportunities",
                        "Configure sales pipeline stages",
                        "Perform sales forecasting and pipeline analysis",
                        "Manage quotes and proposals",
                        "Execute territory management",
                        "Create sales team assignments",
                        "Analyze sales performance metrics"
                    ]
                },
                {
                    title: "Module 4: Service Cloud and Ticket Management",
                    duration: "8 Hours",
                    learning_points: [
                        "Customer service operations and ticketing",
                        "Service ticket creation and lifecycle management",
                        "Service request fulfillment workflows",
                        "Service team assignment and escalation",
                        "Knowledge base and self-service management",
                        "Service SLAs and performance monitoring",
                        "Service analytics and customer satisfaction metrics",
                        "Multi-channel service support (email, phone, chat)"
                    ],
                    hands_on: [
                        "Create and manage service tickets",
                        "Configure service request workflows",
                        "Set up service team assignments and escalation",
                        "Create knowledge articles",
                        "Execute service SLA management",
                        "Manage customer satisfaction surveys",
                        "Analyze service performance metrics"
                    ]
                },
                {
                    title: "Module 5: Activity Management and Customer Communication",
                    duration: "7 Hours",
                    learning_points: [
                        "Activity management (tasks, calls, meetings, emails)",
                        "Calendar and scheduling functionality",
                        "Email integration with CRM",
                        "Communication history and timeline",
                        "Activity automation and workflows",
                        "Team collaboration on activities",
                        "Activity reporting and insights"
                    ],
                    hands_on: [
                        "Create and manage activities",
                        "Execute email integration with CRM",
                        "Set up activity automation",
                        "Manage team schedules",
                        "Execute activity workflows",
                        "Create activity dashboards",
                        "Perform activity analytics"
                    ]
                },
                {
                    title: "Module 6: Marketing Cloud and Customer Engagement",
                    duration: "6 Hours",
                    learning_points: [
                        "Marketing campaign management",
                        "Segmentation and targeting capabilities",
                        "Email marketing and campaigns",
                        "Lead management and scoring",
                        "Customer journey mapping",
                        "Event management and execution",
                        "Marketing analytics and ROI tracking",
                        "Multi-channel marketing orchestration"
                    ],
                    hands_on: [
                        "Create marketing campaigns",
                        "Execute segmentation and targeting",
                        "Set up email campaigns",
                        "Manage lead scoring",
                        "Create customer journey maps",
                        "Manage events and registrations",
                        "Analyze marketing performance"
                    ]
                },
                {
                    title: "Module 7: Analytics, Reporting and Dashboards",
                    duration: "6 Hours",
                    learning_points: [
                        "C4C analytics and reporting capabilities",
                        "Dashboard creation and customization",
                        "Standard and custom reports",
                        "KPI definition and monitoring",
                        "Predictive analytics and AI insights",
                        "Real-time performance monitoring",
                        "Sales, service, and marketing analytics",
                        "Data visualization best practices"
                    ],
                    hands_on: [
                        "Create custom dashboards",
                        "Build standard and custom reports",
                        "Configure KPI monitoring",
                        "Perform predictive analytics",
                        "Create sales performance dashboards",
                        "Build service quality dashboards",
                        "Analyze customer engagement metrics"
                    ]
                },
                {
                    title: "Module 8: Mobile CRM and Offline Capabilities",
                    duration: "4 Hours",
                    learning_points: [
                        "Mobile CRM capabilities and design",
                        "Offline access and synchronization",
                        "Mobile user experience optimization",
                        "Push notifications and alerts",
                        "Mobile-specific workflows",
                        "Mobile security and data protection",
                        "Mobile analytics and usage tracking"
                    ],
                    hands_on: [
                        "Configure mobile CRM settings",
                        "Test mobile workflows",
                        "Set up mobile notifications",
                        "Manage offline synchronization",
                        "Execute mobile user training",
                        "Monitor mobile usage"
                    ]
                },
                {
                    title: "Module 9: Integration and Data Management",
                    duration: "5 Hours",
                    learning_points: [
                        "SAP C4C integration architecture",
                        "Integration with SAP S/4HANA and ERP systems",
                        "Data synchronization mechanisms",
                        "API and web services in C4C",
                        "Master data management in C4C",
                        "Data quality and validation",
                        "Import and export capabilities"
                    ],
                    hands_on: [
                        "Configure C4C integrations",
                        "Execute data synchronization",
                        "Test API connectivity",
                        "Manage master data",
                        "Perform data validation",
                        "Execute data import/export",
                        "Troubleshoot integration issues"
                    ]
                },
                {
                    title: "Module 10: Advanced Topics, Best Practices and Transformation",
                    duration: "4 Hours",
                    learning_points: [
                        "Cloud CRM transformation programs",
                        "Change management and user adoption",
                        "CRM governance and best practices",
                        "Organizational alignment for CRM success",
                        "Industry-specific CRM strategies",
                        "Future trends in cloud CRM and AI",
                        "Cloud security and compliance",
                        "CRM optimization and continuous improvement"
                    ],
                    hands_on: [
                        "Develop CRM transformation roadmap",
                        "Create change management plans",
                        "Build CRM governance frameworks",
                        "Analyze industry best practices",
                        "Create optimization strategies",
                        "Plan CRM training and adoption"
                    ]
                }
            ]
        },
        {
            type: 'detailed_target_audience',
            title: "Who Can Learn SAP C4C Functional? – Perfect for Diverse Career Paths",
            items: c4cTargetAudience
        },
        {
            type: 'detailed_prerequisites',
            title: "Prerequisites for SAP C4C Functional Training",
            items: c4cPrerequisites
        },
        {
            type: 'detailed_learning_outcomes',
            title: "What You'll Master in This SAP C4C Functional Online Course",
            items: {
                tabs: [
                    {
                        name: "Functional Mastery",
                        items: [
                            {
                                title: "End-to-End Sales Management",
                                points: [
                                    "Configure and manage complete sales processes",
                                    "Implement sales pipeline management",
                                    "Execute opportunity management workflows",
                                    "Manage sales team assignments"
                                ],
                                icon: "TrendingUp"
                            },
                            {
                                title: "Customer Account Management",
                                points: [
                                    "Create and maintain customer hierarchies",
                                    "Manage customer contacts and communication",
                                    "Configure account teams and access",
                                    "Execute account segmentation"
                                ],
                                icon: "Users"
                            },
                            {
                                title: "Customer Service Operations",
                                points: [
                                    "Configure and manage customer service tickets",
                                    "Implement service request workflows",
                                    "Manage service team assignments",
                                    "Create knowledge base portals"
                                ],
                                icon: "PhoneCall"
                            },
                            {
                                title: "Activity & Communication",
                                points: [
                                    "Manage tasks, calls, meetings, emails",
                                    "Execute team collaboration workflows",
                                    "Implement activity automation",
                                    "Integrate email with CRM processes"
                                ],
                                icon: "MessageSquare"
                            },
                            {
                                title: "Marketing & Engagement",
                                points: [
                                    "Design and execute marketing campaigns",
                                    "Manage customer segmentation",
                                    "Execute multi-channel campaigns",
                                    "Implement lead scoring"
                                ],
                                icon: "Target"
                            }
                        ]
                    },
                    {
                        name: "Technical Skills",
                        items: [
                            {
                                title: "Master Data Configuration",
                                points: [
                                    "Create customer account structures",
                                    "Configure hierarchies and relationships",
                                    "Manage organizational structures",
                                    "Validate master data quality"
                                ],
                                icon: "Database"
                            },
                            {
                                title: "Sales Cloud Configuration",
                                points: [
                                    "Configure sales processes and stages",
                                    "Set up opportunity workflows",
                                    "Create quote management",
                                    "Configure sales forecasting"
                                ],
                                icon: "Settings"
                            },
                            {
                                title: "Service Cloud Operations",
                                points: [
                                    "Configure service ticket management",
                                    "Set up service operations",
                                    "Implement knowledge management",
                                    "Configure SLA monitoring"
                                ],
                                icon: "Headphones"
                            },
                            {
                                title: "Analytics & Reporting",
                                points: [
                                    "Create custom dashboards",
                                    "Build sales and service reports",
                                    "Configure KPI monitoring",
                                    "Implement predictive analytics"
                                ],
                                icon: "BarChart"
                            },
                            {
                                title: "Integration & Data",
                                points: [
                                    "Configure SAP C4C integrations",
                                    "Manage master data synchronization",
                                    "Implement API-based integrations",
                                    "Execute data import/export"
                                ],
                                icon: "RefreshCw"
                            }
                        ]
                    }
                ]
            }
        },
        {
            type: 'real_world_scenarios',
            title: "Experience Real-World SAP C4C Scenarios & Business Case Studies",
            items: [
                {
                    title: "Tech Company's Global Sales Cloud",
                    scenario: "A multinational technology company with 50+ sales teams across 30 countries needs SAP C4C to consolidate sales processes and improve forecast accuracy.",
                    role: "Lead SAP C4C Consultant",
                    responsibilities: [
                        "Design global sales process structure",
                        "Configure sales pipeline with variations",
                        "Implement opportunity workflows",
                        "Create sales forecasting dashboards"
                    ],
                    outcome: "Sales visibility improved 100%, forecast accuracy increased to 92%, sales team productivity improved 35%.",
                    icon: "Globe",
                    bg: "bg-[#ff4500]/10",
                    iconColor: "text-[#ff4500]"
                },
                {
                    title: "Retail Customer Service Transformation",
                    scenario: "A retail chain with 500+ stores needs SAP C4C to unify customer service operations and provide omnichannel support.",
                    role: "Functional Consultant",
                    responsibilities: [
                        "Design omnichannel service strategy",
                        "Configure service ticket management",
                        "Implement multi-channel routing",
                        "Configure service SLAs and escalation"
                    ],
                    outcome: "Answer resolution improved to 88%, customer satisfaction increased to 4.6/5, resolution time reduced by 40%.",
                    icon: "ShoppingCart",
                    bg: "bg-[#ff4500]/10",
                    iconColor: "text-[#ff4500]"
                },
                {
                    title: "Financial Services Relationship Optimization",
                    scenario: "A financial services firm managing 100,000+ customers needs SAP C4C to execute relationship-based campaigns and enhance lifecycle management.",
                    role: "CRM Consultant",
                    responsibilities: [
                        "Design customer segmentation strategy",
                        "Configure relationship workflows",
                        "Implement customer journey mapping",
                        "Design customer engagement dashboards"
                    ],
                    outcome: "Customer engagement scores increased 45%, cross-sell opportunities up 60%, retention improved to 91%.",
                    icon: "BarChart3",
                    bg: "bg-[#ff4500]/10",
                    iconColor: "text-[#ff4500]"
                },
                {
                    title: "Pharma Sales Enablement & Compliance",
                    scenario: "A pharmaceutical manufacturer needs SAP C4C to manage complex sales processes with regulatory compliance and track field activities.",
                    role: "Solution Architect",
                    responsibilities: [
                        "Design compliant sales workflows",
                        "Configure compliance checks",
                        "Set up activity tracking",
                        "Configure audit trails and reporting"
                    ],
                    outcome: "100% regulatory compliance achieved, sales productivity improved 30%, compliance incidents reduced to zero.",
                    icon: "ShieldCheck",
                    bg: "bg-[#ff4500]/10",
                    iconColor: "text-[#ff4500]"
                }
            ]
        },
        {
            type: 'detailed_certification',
            title: "SAP C4C Functional Certification – Your Global Career Credential",
            description: "We Provide support for SAP Certified Application Associate – SAP C4C (C_C4C14_2404)",
            imageSrc: "/images/ERPVITS - All Modules Infographics/ERPVITS - SAP C4C Func Infographic.webp",
            items: [
                {
                    title: "SAP Certified Application Associate – SAP C4C",
                    code: "C_C4C14_2404",
                    focus: "SAP C4C Fundamentals, Sales Cloud, Service Cloud, Account Management",
                    who: "Cloud CRM consultants, job seekers, functional experts",
                    relevance: "Demonstrates expertise in SAP C4C functional configuration and operations."
                }
            ]
        },
        {
            type: 'detailed_career_opportunities',
            items: [
                {
                    title: "SAP C4C Functional Consultant",
                    salary: "$110,000 - $130,000",
                    responsibilities: "Configure sales/service processes, manage workflows, train users.",
                    employers: "Accenture, Capgemini, Deloitte, Infosys, Wipro",
                    path: "2-3 years -> Mid-level Consultant",
                    icon: "Briefcase",
                    color: "blue"
                },
                {
                    title: "Sales Operations Manager",
                    salary: "$95,000 - $125,000",
                    responsibilities: "Manage sales ops, optimize workflows, analyze performance.",
                    employers: "Technology, Financial Services, Healthcare",
                    path: "3-4 years -> Senior Sales Ops Manager",
                    icon: "TrendingUp",
                    color: "green"
                },
                {
                    title: "Cloud CRM Consultant",
                    salary: "$105,000 - $140,000",
                    responsibilities: "Design CRM solutions, implement C4C, drive engagement.",
                    employers: "Consulting Firms, Cloud Solutions Providers",
                    path: "4-6 years -> Senior Consultant",
                    icon: "Cloud",
                    color: "orange"
                },
                {
                    title: "Customer Service Manager",
                    salary: "$100,000 - $135,000",
                    responsibilities: "Manage service ops, optimize service workflows, lead teams.",
                    employers: "Retail, Technology, Financial Services",
                    path: "3-5 years -> Senior Customer Success Manager",
                    icon: "Headphones",
                    color: "purple"
                },
                {
                    title: "SAP C4C Solution Architect",
                    salary: "$125,000 - $180,000",
                    responsibilities: "Design enterprise CRM solutions, led programs, drive roadmap.",
                    employers: "Consulting, Technology, Enterprise",
                    path: "6-10 years -> Principal Consultant",
                    icon: "Layout",
                    color: "red"
                }
            ]
        },
        {
            type: 'detailed_companies',
            title: "Top Companies Hiring SAP C4C Functional Professionals",
            customData: {
                tier1: {
                    title: "Tier 1 - Global Consulting Firms",
                    companies: ["Accenture", "Capgemini", "Deloitte Consulting", "EY", "KPMG", "PwC", "IBM Consulting"],
                    color: "bg-slate-600",
                    lightColor: "bg-slate-50"
                },
                tier2: {
                    title: "Tier 2 - Enterprise SAP Partners",
                    companies: ["Infosys", "Wipro", "Cognizant", "TCS", "HCL Technologies", "Tech Mahindra"],
                    color: "bg-[#ff4500]",
                    lightColor: "bg-[#ff4500]/10"
                },
                tier3: {
                    title: "Tier 3 - Tech & Cloud Solutions",
                    companies: ["Microsoft", "Google", "Amazon", "Salesforce", "Oracle", "SAP"],
                    color: "bg-slate-600",
                    lightColor: "bg-slate-50"
                },
                tier4: {
                    title: "Tier 4 - Financial & Tech Leaders",
                    companies: ["JPMorgan Chase", "Goldman Sachs", "Bank of America", "Apple", "Samsung", "IBM"],
                    color: "bg-[#ff4500]",
                    lightColor: "bg-[#ff4500]/10"
                },
                tier5: {
                    title: "Tier 5 - Retail & E-Commerce",
                    companies: ["Walmart", "Amazon", "Shopify", "Target", "Carrefour", "Flipkart"],
                    color: "bg-slate-600",
                    lightColor: "bg-slate-50"
                },
                tier6: {
                    title: "Tier 6 - Mid-Market & Regional",
                    companies: ["Regional CRM firms", "Industry-specific providers", "In-house CRM teams", "SaaS providers"],
                    color: "bg-[#ff4500]",
                    lightColor: "bg-[#ff4500]/10"
                },
                hiringTrends: {
                    title: "Hiring Trends (2025)",
                    stats: [
                        { value: "350%+", label: "Increase in Job Openings", subLabel: "For C4C Consultants", color: "blue" },
                        { value: "High", label: "Demand for Cloud CRM", subLabel: "Enterprise Adoption", color: "green" },
                        { value: "Premium", label: "Salaries for Certified", subLabel: "15-30% Higher Pay", color: "purple" },
                        { value: "Global", label: "Remote Opportunities", subLabel: "Mid to Senior Levels", color: "orange" }
                    ]
                }
            }
        },
        {
            type: 'detailed_post_training_journey',
            title: "What to Expect After Completing SAP C4C Functional Training",
            items: [
                {
                    timeline: "Week 1-2",
                    title: "Immediate Post-Training",
                    points: [
                        "Receive course completion certificate",
                        "Access lifetime course materials/recordings",
                        "Join alumni network and forum",
                        "Begin resume updates with C4C expertise"
                    ]
                },
                {
                    timeline: "Week 3-6",
                    title: "Exam Prep & Job Search",
                    points: [
                        "Apply for SAP C4C Functional Certification",
                        "Start job search with career services",
                        "Participate in networking events",
                        "Receive interview coaching"
                    ]
                },
                {
                    timeline: "Month 2-3",
                    title: "First Role & Projects",
                    points: [
                        "Secure first SAP C4C opportunity",
                        "Begin real-world CRM implementation",
                        "Continue post-training support",
                        "Network with professionals"
                    ]
                }
            ]
        },
        {
            type: 'detailed_upcoming_batches',
            title: "Join Our Next Live Batch – Limited Seats Available for SAP C4C Functional Training",
            subtitle: "Secure your spot in our upcoming batches with flexible timings designed for working professionals",
            batches: [
                {
                    name: "Batch 1: November 2025 (Weekdays)",
                    date: "November 15, 2025",
                    time: "Weekdays – 7:00 AM | 8:00 PM IST",
                    duration: "50-60 Hours",
                    seats: "4/10 Seats Left",
                    status: "Filling Fast",
                    statusColor: "bg-orange-100 text-orange-600"
                },
                {
                    name: "Batch 2: November 2025 (Weekends)",
                    date: "November 16, 2025",
                    time: "Weekends – Saturday & Sunday, 7:30 AM | 7:00 PM IST",
                    duration: "50-60 Hours",
                    seats: "5/10 Seats Left",
                    status: "Filling Fast",
                    statusColor: "bg-orange-100 text-orange-600"
                },
                {
                    name: "Batch 3: December 2025 (Flexible)",
                    date: "December 1, 2025",
                    time: "Flexible timings – customized per batch",
                    duration: "50-60 Hours (accelerated)",
                    seats: "6/10 Seats Left",
                    status: "Open",
                    statusColor: "bg-green-100 text-green-600"
                }
            ],
            features: [
                { icon: "Zap", text: "Early-bird discounts (10-15% off) for first 10 registrations" },
                { icon: "Users", text: "Personal learning path consultation with trainers" },
                { icon: "ShieldCheck", text: "Priority support and mentoring throughout course" },
                { icon: "CheckCircle2", text: "Networking with cohort members targeting CRM roles" },
                { icon: "Users", text: "Guaranteed access to current curriculum and certified trainers" },
                { icon: "Cloud", text: "Access to latest SAP C4C and cloud CRM updates" },
                { icon: "BarChart", text: "Exclusive access to customer engagement strategy workshops" }
            ]
        },
        {
            type: 'detailed_testimonials',
            title: "Hear from Our Successful SAP C4C Functional Learners",
            items: [
                {
                    name: "Priya Sharma",
                    role: "SAP C4C Functional Consultant at Deloitte",
                    quote: "Outstanding training on cloud CRM. I landed a consulting role at Deloitte within 10 weeks. The hands-on sales pipeline and service ticket labs made all the difference.",
                    image: "/images/testimonials/priya-c4c.webp"
                },
                {
                    name: "Rajesh Kumar",
                    role: "Sales Operations Manager",
                    quote: "The weekend flexibility allowed me to learn while working. My employer promoted me to Sales Ops Manager after seeing my C4C expertise. Accelerated my career by 4 years.",
                    image: "/images/testimonials/rajesh-c4c.webp"
                },
                {
                    name: "Amit Patel",
                    role: "Senior C4C Functional Consultant",
                    quote: "Best investment. The capstone projects were exactly like real CRM work. I walked into my first consulting role feeling confident. Certification support was exceptional.",
                    image: "/images/testimonials/amit-c4c.webp"
                },
                {
                    name: "Sneha Reddy",
                    role: "Certified SAP C4C Professional",
                    quote: "Superb certification preparation. I passed the C_C4C14_2404 exam on my first attempt with 84%. The mock exams and CRM scenario practice were thorough.",
                    image: "/images/testimonials/sneha-c4c.webp"
                },
                {
                    name: "Vikram Desai",
                    role: "Cloud CRM Consultant at Accenture",
                    quote: "The instructor's real-world insights were invaluable. I learned how to transform customer engagement, not just C4C. The alumni network brought CRM opportunities my way.",
                    image: "/images/testimonials/vikram-c4c.webp"
                },
                {
                    name: "Ananya Singh",
                    role: "CRM Analyst at Microsoft",
                    quote: "From zero SAP C4C knowledge to landing my dream role in 4 months! The instructors cares about student success. Lifetime recording access is invaluable.",
                    image: "/images/testimonials/ananya-c4c.webp"
                }
            ]
        },
        {
            type: 'detailed_demo_booking',
            title: "Ready to Become an SAP C4C Functional Consultant?",
            subtitle: "Book your free demo today and take the first step towards a lucrative career in cloud customer relationship management",
            benefits: [
                { title: "Sample Live Class", desc: "Observe real training and instructor methodology" },
                { title: "Career Consultation", desc: "Personalized guidance based on your background" },
                { title: "Instructor Q&A", desc: "Ask questions about course, certification, and career" },
                { title: "Special Discount", desc: "Exclusive discount for demo attendees (10-15% off)" }
            ]
        },
        {
            type: 'detailed_faq',
            items: [
                {
                    q: "What is SAP C4C Functional and how does ERPVITS help me learn it?",
                    a: "SAP Cloud for Customer (C4C) Functional training focuses on configuration and business processes of Sales, Service, and Marketing clouds. ERPVITS provides comprehensive training with real-world scenarios, hands-on practice, and guided projects to help you master functional configuration."
                },
                {
                    q: "What will I learn in the SAP C4C Functional course?",
                    a: "You will learn to configure sales processes, manage customer accounts, set up service operations, create customer campaigns, manage activities, execute team collaboration, and implement real-time CRM dashboards using the SAP C4C platform."
                },
                {
                    q: "What is Sales Cloud in SAP C4C?",
                    a: "Sales Cloud in SAP C4C is the sales module that enables sales teams to manage opportunities, track accounts, execute pipelines, perform forecasting, and optimize sales processes. ERPVITS training covers practical sales cloud implementation."
                },
                {
                    q: "What is Service Cloud in SAP C4C?",
                    a: "Service Cloud in SAP C4C is the customer service module that enables service teams to manage tickets, track customer issues, manage knowledge base, optimize SLAs, and improve customer satisfaction. We provide hands-on service cloud implementation training."
                },
                {
                    q: "How does SAP C4C support cloud-based customer engagement?",
                    a: "SAP C4C enables businesses to engage customers through modern cloud-based interfaces, real-time collaboration, mobile access, AI-powered insights, omnichannel support, and seamless integration—all critical for competitive customer relationships."
                },
                {
                    q: "Why should I join SAP C4C Functional Training at ERPVITS?",
                    a: "ERPVITS offers live sessions from certified cloud CRM experts, industry-aligned projects, hands-on CRM labs, certification support, and comprehensive placement assistance including resume preparation and interview strategies."
                },
                {
                    q: "Who can enroll in the SAP C4C Functional Course?",
                    a: "Anyone interested in cloud CRM, sales operations, customer service, or SAP technologies can join. Whether you're a fresher, working professional, or sales manager, our course is designed to help you build job-ready CRM skills."
                },
                {
                    q: "What is the SAP C4C Functional Certification and why is it valuable?",
                    a: "The SAP Certified Application Associate – SAP C4C (C_C4C14_2404) validates your expertise in cloud CRM configuration and operations. ERPVITS prepares you for the official certification, helping you become a recognized professional."
                },
                {
                    q: "What are the SAP C4C Functional course fees at ERPVITS?",
                    a: "Our course fees are competitive and offer maximum value with hands-on learning, live instruction, lab access, placement assistance, and certification support. Contact us for specific pricing on current batches."
                },
                {
                    q: "How much does SAP C4C Functional Certification cost?",
                    a: "The exam cost is determined by SAP Education (approx. $560 USD or ₹46,000 in India). ERPVITS provides complete exam guidance, practice tests, and mentoring to help you pass on your first attempt."
                },
                {
                    q: "How can I become an SAP C4C Functional Consultant through ERPVITS?",
                    a: "Join our structured training, complete live CRM projects, prepare for certification, and gain hands-on experience. ERPVITS provides career counseling and job assistance to support your transition."
                },
                {
                    q: "What career options are available after completing the SAP C4C Functional course?",
                    a: "You can apply for roles like C4C Functional Consultant, Sales Operations Manager, Customer Service Manager, CRM Analyst, or Cloud CRM Architect. We also share job openings with our learners."
                },
                {
                    q: "How does SAP C4C Functional differ from SAP C4C Technical?",
                    a: "Functional focuses on business processes, configuration, and user experience (for consultants/business users). Technical focuses on programming, customization, and SDK development (for developers)."
                },
                {
                    q: "What are the main SAP C4C Functional modules covered?",
                    a: "We cover Sales Cloud, Service Cloud, Marketing Cloud, Activity Management, Account Management, Analytics, and integration with SAP S/4HANA, with hands-on practice."
                },
                {
                    q: "What do SAP C4C Functional jobs entail?",
                    a: "These jobs involve managing sales/service operations, customer engagement, and CRM implementations—specifically process design, system configuration, user training, and consulting."
                },
                {
                    q: "Does ERPVITS provide placement support?",
                    a: "Yes, we offer comprehensive placement assistance including resume building, mock interviews, and job referrals to connect you with leading SAP consulting companies and organizations."
                },
                {
                    q: "Can I take SAP C4C Functional Online Training from anywhere?",
                    a: "Absolutely. Our online training is accessible globally. You can learn with live instructors, access recorded sessions, and practice on C4C systems remotely with 24/7 lab access."
                },
                {
                    q: "Is SAP C4C Functional Training available in multiple cities?",
                    a: "Yes, we offer online options globally and classroom options in select cities like Hyderabad, Pune, and Bangalore, with flexible schedules for working professionals."
                },
                {
                    q: "How does ERPVITS help in SAP C4C Functional Careers?",
                    a: "We guide your career journey with technical training, resume building, interview prep, mock consultations, and job referrals across leading SAP consulting and cloud CRM companies."
                },
                {
                    q: "What makes SAP C4C Functional a lucrative career in 2025?",
                    a: "It's a high-demand skill with 350%+ growth in job openings, a shortage of qualified professionals, premium salaries (15-30% higher), and expanding opportunities across major industries."
                },
                {
                    q: "How long does it take to get a job after training?",
                    a: "The average timeline is 2-3 months with active job search and our career support. Many learners secure roles within 4-8 weeks of certification."
                },
                {
                    q: "What is the job outlook for 2025?",
                    a: "The outlook is very positive with strong demand from enterprises adopting cloud CRM, 350%+ growth in openings, and increasing strategic importance of customer engagement expertise."
                }
            ]
        }
    ]
};
