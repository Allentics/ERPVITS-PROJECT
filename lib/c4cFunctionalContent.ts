import { Cloud, Users, TrendingUp, MessageSquare, Smartphone, Layout, BarChart, Settings, ShieldCheck, Zap, Briefcase, UserCheck, PhoneCall, Mail, PieChart, Target, Globe, BookOpen } from 'lucide-react';

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
            "Service teams seeking C4C expertise"
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

export const c4cLearningOutcomes = [
    {
        title: "End-to-End Sales Management",
        description: "Configure sales pipeline, forecasting, and opportunity management.",
        icon: "TrendingUp",
        points: [
            "Configure and manage complete sales processes from lead to closure",
            "Implement sales pipeline management and forecasting",
            "Execute opportunity management and tracking workflows",
            "Manage sales team assignments and territory management"
        ]
    },
    {
        title: "Customer Account Management",
        description: "Manage customer hierarchies, contacts, and relationships.",
        icon: "Users",
        points: [
            "Create and maintain customer account hierarchies",
            "Manage customer contacts and communication preferences",
            "Configure account teams and role-based access",
            "Execute account segmentation and analytics"
        ]
    },
    {
        title: "Customer Service Operations",
        description: "Configure service tickets, SLAs, and support workflows.",
        icon: "PhoneCall",
        points: [
            "Configure and manage customer service tickets",
            "Implement service request fulfillment workflows",
            "Manage service team assignments and escalation",
            "Create knowledge base and self-service portals"
        ]
    },
    {
        title: "Marketing and Engagement",
        description: "Execute marketing campaigns and customer engagement.",
        icon: "Target",
        points: [
            "Design and execute marketing campaigns",
            "Manage customer segmentation and targeting",
            "Execute email marketing and multi-channel campaigns",
            "Implement lead management and scoring"
        ]
    },
    {
        title: "Analytics and Dashboards",
        description: "Create real-time CRM dashboards and reports.",
        icon: "PieChart",
        points: [
            "Create custom dashboards for CRM operations",
            "Build sales, service, and marketing reports",
            "Configure KPI monitoring and alerts",
            "Implement predictive analytics"
        ]
    },
    {
        title: "Cloud Integration",
        description: "Integrate C4C with SAP S/4HANA and other systems.",
        icon: "Zap",
        points: [
            "Configure SAP C4C integrations with SAP S/4HANA",
            "Manage master data synchronization",
            "Implement API-based integrations",
            "Execute data import and export workflows"
        ]
    }
];

export const c4cRealWorldScenarios = [
    {
        title: "Global Sales Cloud Implementation",
        description: "A multinational tech company needs to consolidate sales processes and improve forecast accuracy across 30 countries.",
        role: "Lead C4C Consultant",
        outcome: "Sales visibility improved 100%, forecast accuracy increased to 92%, sales productivity improved 35%.",
        responsibilities: [
            "Design global sales process and territory structure",
            "Configure sales pipeline with regional variations",
            "Set up sales team hierarchy and assignments",
            "Implement opportunity management workflows",
            "Create sales forecasting and reporting dashboards",
            "Design sales mobile app for field teams"
        ]
    },
    {
        title: "Retail Company's Service Transformation",
        description: "A retail chain needs to unify customer service operations and improve first-contact resolution across 500+ stores.",
        role: "C4C Functional Consultant",
        outcome: "First-contact resolution improved to 88%, customer satisfaction up to 4.6/5, resolution time reduced by 40%.",
        responsibilities: [
            "Design omnichannel service strategy and workflows",
            "Configure service ticket management",
            "Set up service team hierarchy and assignments",
            "Implement multi-channel ticket routing",
            "Create knowledge base for self-service support",
            "Design service quality dashboards"
        ]
    },
    {
        title: "Financial Services Customer Optimization",
        description: "A financial firm needs to improve customer engagement and execute relationship-based campaigns for 100k+ customers.",
        role: "CRM Consultant",
        outcome: "Customer engagement scores increased 45%, cross-sell opportunities up 60%, retention improved to 91%.",
        responsibilities: [
            "Design customer segmentation strategy",
            "Configure customer account hierarchies",
            "Set up relationship management workflows",
            "Implement customer journey mapping",
            "Create marketing campaign management",
            "Design customer engagement dashboards"
        ]
    },
    {
        title: "Pharma Sales Enablement & Compliance",
        description: "A pharmaceutical company needs to manage sales processes with strict regulatory compliance and track field activities.",
        role: "Solution Architect",
        outcome: "100% regulatory compliance, sales team productivity up 30%, compliance incidents reduced to zero.",
        responsibilities: [
            "Design compliant sales process and workflows",
            "Configure opportunity management with compliance checks",
            "Set up sales activity tracking and validation",
            "Implement approval workflows for regulatory compliance",
            "Configure audit trails and compliance reporting",
            "Design mobile CRM with compliance features"
        ]
    }
];

export const c4cFunctionalContent = {
    price: "Competitive",
    duration: "45-50 Hours",
    syllabusUrl: "/syllabus/ERPVITS Syllabus - Course Contents Pdf/SAP Functional/sap-c4c-functional.pdf",
    heroHeading: "Master Cloud-Based Customer Relationship Management with the #1 SAP C4C Functional Online Training Program",
    heroSubheading: "Excel in cloud-based customer relationship management, sales operations, and customer service transformation.",

    title: "SAP C4C Functional",
    description: "The SAP Cloud for Customer Online Functional Training Program from ERPVITS offers a transformative learning pathway for professionals to excel in cloud CRM, sales operations, and service management.",
    badges: ["Rated #1 SAP C4C Functional Training 2025"],
    heroStats: [
        { icon: "award", label: "SAP Certified Trainers" },
        { icon: "star", label: "4.8 Learner Rating" },
        { icon: "clock", label: "24/7 Team Support" },
        { icon: "cloud", label: "12+ Years Experience" }
    ],
    buttonLabels: {
        primary: "Book Your Free Demo Class →",
        secondary: "View Curriculum"
    },
    metaTitle: "SAP C4C Functional Training Online | Cloud CRM Course",
    metaDescription: "Master SAP C4C Functional training with verified experts. Learn Sales Cloud, Service Cloud, and CRM configuration. Enroll now for certification support.",

    features: [],
    sections: [
        {
            type: 'detailed_features',
            title: "Learn SAP C4C Functional from Certified Experts – 100% Hands-On, Job-Oriented Training",
            subtitle: "Delivered exclusively by certified SAP professionals with 12+ years of direct implementation experience in cloud CRM.",
            badge: "Why Choose Us",
            items: [
                {
                    title: "Certified Instructor Expertise",
                    description: "Trainers hold official SAP certifications and have led multiple enterprise-scale SAP C4C implementations."
                },
                {
                    title: "100% Hands-On Learning Methodology",
                    description: "Every session includes live demonstrations directly on SAP C4C cloud systems, followed by guided lab exercises."
                },
                {
                    title: "Job-Oriented Curriculum Design",
                    description: "Designed around the exact skills, responsibilities, and problem-solving scenarios faced by SAP C4C functional consultants."
                },
                {
                    title: "Interactive Q&A Sessions",
                    description: "Dedicated forums and live office hours for clarifying complex topics like opportunity management and service workflows."
                },
                {
                    title: "Flexible Batch Timings",
                    description: "Weekday evening batches (6 PM – 9 PM IST) and weekend batches (Saturday & Sunday). Sessions are recorded."
                },
                {
                    title: "Small Batch Sizes",
                    description: "Capped at 8-10 participants to ensure personalized attention and targeted feedback on configurations."
                },
                {
                    title: "Placement & Career Support",
                    description: "Resume building, mock interviews, and practice with real-world interview questions from cloud CRM hiring trends."
                },
                {
                    title: "Active Alumni Network",
                    description: "Join a thriving community of SAP C4C professionals to exchange tips and build relationships."
                },
                {
                    title: "Ongoing Support Post-Training",
                    description: "Six months of instructor guidance after training for clarification and troubleshooting real-world challenges."
                }
            ]
        },
        {
            type: 'content_with_image',
            title: "Why Professionals Choose ERPVITS for SAP C4C Functional Online Training",
            subtitle: "Success Guarantee & Credibility",
            videoSrc: "https://www.youtube.com/embed/X8NW74XjShI",
            description: "ERPVITS is a trusted training partner with successful learners at top firms like Accenture, Capgemini, and Deloitte. Our program delivers career acceleration in the cloud CRM space.",
            items: [
                "Trusted by 500+ successful SAP professionals",
                "Alumni at Accenture, Capgemini, Deloitte, Salesforce, Microsoft",
                "Personalized pre-evaluation and learning path customization",
                "Active alumni network and community forum",
                "75+ guided lab exercises from basic to advanced scenarios",
                "Quarterly updated materials aligned with latest SAP C4C releases",
                "Mock interviews simulating real consultant scenarios",
                "Dedicated certification prep and cloud skills development"
            ]
        },
        {
            type: 'whats_included',
            content: "A complete, career-focused SAP Cloud for Customer functional training program combining live expert sessions, real-world projects, hands-on labs, certification preparation, and ongoing career support.",
            stats: [
                { value: "50-60", label: "Hours of Live Training" },
                { value: "75+", label: "Hands-On Lab Exercises" },
                { value: "100%", label: "Placement Support" }
            ]
        },
        {
            type: 'detailed_curriculum',
            title: "Comprehensive SAP C4C Functional Course Curriculum",
            modules: [
                {
                    title: "Module 1: Introduction to SAP C4C and Cloud CRM Strategy",
                    duration: "5 Hours",
                    learning_points: [
                        "Overview of SAP Cloud for Customer and modern CRM",
                        "Key features: Sales Cloud, Service Cloud, Marketing Cloud",
                        "SAP C4C architecture and system components",
                        "User interface navigation and core concepts",
                        "Cloud CRM implementation approaches",
                        "Organizational alignment for CRM transformation"
                    ],
                    hands_on: [
                        "Navigate SAP C4C interface and dashboard",
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
                        "Customer contact and relationship management",
                        "Account team and role configuration",
                        "Customer communication preferences",
                        "Account segmentation and analytics"
                    ],
                    hands_on: [
                        "Create and manage customer accounts",
                        "Set up account hierarchies and relationships",
                        "Manage customer contacts and roles",
                        "Configure account teams and permissions"
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
                        "Sales analytics and performance tracking"
                    ],
                    hands_on: [
                        "Create and manage sales opportunities",
                        "Configure sales pipeline stages",
                        "Perform sales forecasting",
                        "Manage quotes and proposals",
                        "Execute territory management"
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
                        "Multi-channel service support"
                    ],
                    hands_on: [
                        "Create and manage service tickets",
                        "Configure service request workflows",
                        "Set up service team assignments",
                        "Create knowledge articles",
                        "Execute service SLA management"
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
                        "Team collaboration on activities"
                    ],
                    hands_on: [
                        "Create and manage activities",
                        "Execute email integration",
                        "Set up activity automation",
                        "Manage team schedules",
                        "Execute activity workflows"
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
                        "Marketing analytics and ROI tracking"
                    ],
                    hands_on: [
                        "Create marketing campaigns",
                        "Execute segmentation and targeting",
                        "Set up email campaigns",
                        "Manage lead scoring",
                        "Create customer journey maps"
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
                        "Real-time performance monitoring"
                    ],
                    hands_on: [
                        "Create custom dashboards",
                        "Build standard and custom reports",
                        "Configure KPI monitoring",
                        "Perform predictive analytics"
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
                        "Mobile security and data protection"
                    ],
                    hands_on: [
                        "Configure mobile CRM settings",
                        "Test mobile workflows",
                        "Set up mobile notifications",
                        "Manage offline synchronization"
                    ]
                },
                {
                    title: "Module 9: Integration and Data Management",
                    duration: "5 Hours",
                    learning_points: [
                        "SAP C4C integration architecture",
                        "Integration with SAP S/4HANA and ERP systems",
                        "Data synchronization mechanisms",
                        "Master data management in C4C",
                        "Data quality and validation",
                        "Import and export capabilities"
                    ],
                    hands_on: [
                        "Configure C4C integrations",
                        "Execute data synchronization",
                        "Manage master data",
                        "Perform data validation",
                        "Execute data import/export"
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
                        "Cloud security and compliance"
                    ],
                    hands_on: [
                        "Develop CRM transformation roadmap",
                        "Create change management plans",
                        "Build CRM governance frameworks",
                        "Create optimization strategies"
                    ]
                }
            ]
        },
        {
            type: 'detailed_target_audience',
            items: c4cTargetAudience
        },
        {
            type: 'detailed_prerequisites',
            items: c4cPrerequisites
        },
        {
            type: 'detailed_learning_outcomes',
            items: c4cLearningOutcomes
        },
        {
            type: 'real_world_scenarios',
            items: c4cRealWorldScenarios
        },
        {
            type: 'detailed_certification',
            content: "We Provide Support for SAP Certified Application Associate – SAP C4C (Exam Code: C_C4C14_2404).",
            imageSrc: "/images/ERPVITS - All Modules Infographics/ERPVITS - SAP C4C Func Infographic.webp",
            items: [
                {
                    title: "SAP Certified Application Associate – SAP C4C",
                    code: "(C_C4C14_2404)",
                    focus: "SAP C4C Overview, Customer Account/Master Data, Sales Cloud, Service Cloud.",
                    who: "Cloud CRM consultants, sales operations managers, service managers.",
                    relevance: "Essential for global CRM consulting and implementation roles."
                }
            ]
        },
        {
            type: 'detailed_career_opportunities',
            items: [
                {
                    title: "SAP C4C Functional Consultant",
                    salary: "$110,000 - $130,000",
                    responsibilities: "Configure sales/service processes, manage workflows, support engagement.",
                    employers: "Accenture, Capgemini, Deloitte, Salesforce Partners",
                    path: "2-3 years -> Mid-level Consultant",
                    icon: "Briefcase",
                    color: "blue"
                },
                {
                    title: "Sales Operations Manager",
                    salary: "$95,000 - $125,000",
                    responsibilities: "Manage sales ops, optimize workflows, analyze performance.",
                    employers: "Technology, Financial Services, Healthcare",
                    path: "3-4 years -> Senior Sales Operations Manager",
                    icon: "TrendingUp",
                    color: "green"
                },
                {
                    title: "Cloud CRM Consultant",
                    salary: "$105,000 - $140,000",
                    responsibilities: "Design CRM solutions, implement C4C, drive optimization.",
                    employers: "Global Consulting Firms, Cloud Solutions Providers",
                    path: "4-6 years -> Senior Consultant",
                    icon: "Cloud",
                    color: "orange"
                },
                {
                    title: "Customer Service Manager",
                    salary: "$100,000 - $135,000",
                    responsibilities: "Manage service ops, optimize service workflows, lead service teams.",
                    employers: "Retail, Technology, Financial Services",
                    path: "3-5 years -> Senior Customer Success Manager",
                    icon: "PhoneCall",
                    color: "purple"
                },
                {
                    title: "SAP C4C Solution Architect",
                    salary: "$125,000 - $180,000",
                    responsibilities: "Design enterprise CRM solutions, lead implementation, drive innovation.",
                    employers: "Consulting, Technology, Enterprise",
                    path: "6-10 years -> Principal Consultant",
                    icon: "Layout",
                    color: "cyan"
                }
            ]
        },
        {
            type: 'detailed_companies',
            items: [
                "Accenture", "Capgemini", "Deloitte", "EY", "KPMG", "IBM",
                "Infosys", "Wipro", "Cognizant", "TCS",
                "Microsoft", "Google", "Amazon", "Salesforce", "Oracle",
                "JPMorgan Chase", "Goldman Sachs", "Walmart", "Apple", "Samsung"
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
                    duration: "50-60 Hours",
                    seatsFilled: 4
                },
                {
                    name: "Batch 2: November 2025 (Weekends)",
                    status: "open",
                    date: "November 16, 2025",
                    schedule: "Sat & Sun | 7:30 AM & 7:00 PM IST",
                    duration: "50-60 Hours",
                    seatsFilled: 5
                },
                {
                    name: "Batch 3: December 2025 (Flexible)",
                    status: "new",
                    date: "December 1, 2025",
                    schedule: "Customized per batch",
                    duration: "50-60 Hours (Accelerated)",
                    seatsFilled: 6
                }
            ]
        },
        {
            type: 'detailed_testimonials',
            items: [
                {
                    name: "Priya Sharma",
                    role: "SAP C4C Functional Consultant at Deloitte",
                    quote: "Outstanding functional training. Landed a role within 10 weeks. The sales pipeline and service ticket labs were excellent."
                },
                {
                    name: "Rajesh Kumar",
                    role: "Sales Operations Manager",
                    quote: "Promoted to Sales Operations Manager thanks to this course. It accelerated my career by 4 years."
                },
                {
                    name: "Amit Patel",
                    role: "Senior C4C Functional Consultant",
                    quote: "Best investment. Capstone projects were exactly like real work. Certification support was exceptional."
                },
                {
                    name: "Sneha Reddy",
                    role: "Certified SAP C4C Professional",
                    quote: "Passed C_C4C14_2404 on first attempt with 84%. Mock exams and scenario practice were thorough."
                }
            ]
        },
        {
            type: 'detailed_demo_booking',
            title: "Ready to Become an SAP C4C Functional Consultant?",
            subtitle: "Book your free demo today and take the first step towards a lucrative SAP cloud CRM career",
            benefits: [
                { title: "Live Session Insight", desc: "Observe real SAP C4C training and instructor methodology" },
                { title: "Career Consultation", desc: "Personalized guidance based on your background" },
                { title: "Instructor Q&A", desc: "Ask questions about SAP C4C course, certification, and career" },
                { title: "Special Offer", desc: "Exclusive discount for demo attendees" }
            ]
        },
        {
            type: 'detailed_faq',
            items: [
                {
                    q: "What is SAP C4C Functional and how does ERPVITS help me learn it?",
                    a: "SAP C4C Functional training focuses on configuration and business processes of Sales, Service, and Marketing clouds. ERPVITS provides hands-on practice and real-world scenarios."
                },
                {
                    q: "What will I learn in the SAP C4C Functional course?",
                    a: "You will learn to configure sales processes, manage customer accounts, set up service operations, manage activities, and create CRM dashboards."
                },
                {
                    q: "What is Sales Cloud in SAP C4C?",
                    a: "Sales Cloud enables managing opportunities, tracking accounts, executing pipelines, and forecasting. We cover practical implementation."
                },
                {
                    q: "What is Service Cloud in SAP C4C?",
                    a: "Service Cloud manages tickets, customer issues, SLAs, and customer satisfaction. We provide hands-on training for service cloud configuration."
                },
                {
                    q: "Does ERPVITS provide placement support?",
                    a: "Yes, 100% placement assistance including resume building, mock interviews, and job referrals."
                }
            ]
        }
    ]
};
