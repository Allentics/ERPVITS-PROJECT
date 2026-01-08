
export const tmTargetAudience = [
    {
        icon: "Briefcase",
        title: "Logistics & Supply Chain Specialists",
        description: [
            "Logistics managers seeking digital transformation expertise",
            "Supply chain coordinators aiming for consultant-level skills",
            "Procurement specialists wanting to master transportation optimization",
            "Warehouse managers transitioning to logistics consulting",
            "Inventory planners seeking broader supply chain knowledge"
        ]
    },
    {
        icon: "Cpu",
        title: "SAP & ERP Professionals",
        description: [
            "SAP consultants from MM, SD, LE, EWM modules seeking specialization",
            "ERP system administrators expanding into logistics domain",
            "SAP architects designing enterprise transportation solutions",
            "Technical consultants supporting SAP implementations",
            "ABAP developers interested in TM module customization"
        ]
    },
    {
        icon: "Factory", // Mapped from Manufacturing
        title: "Manufacturing & Automotive Professionals",
        description: [
            "Production planners overseeing inbound/outbound logistics",
            "Plant logistics managers optimizing transportation networks",
            "Supply chain planners managing complex distribution",
            "Quality managers in regulated industries (Pharma, Automotive)",
            "Operations managers driving efficiency improvements"
        ]
    },
    {
        icon: "GraduationCap",
        title: "Fresh Graduates & Career Changers",
        description: [
            "Engineering or MBA graduates targeting SAP careers",
            "Logistics or Supply Chain Management graduates",
            "Business analysts aiming for procurement consulting roles",
            "IT professionals pivoting into enterprise software",
            "Career changers with strong foundational skills in operations"
        ]
    },
    {
        icon: "Users",
        title: "Existing Employees of SAP TM Customers",
        description: [
            "Employees at organizations implementing or using SAP TM",
            "Super-users wanting to become power users and train others",
            "IT teams managing SAP TM in their organizations",
            "Business analysts supporting transportation processes"
        ]
    }
];

export const tmPrerequisites = {
    minimum: [
        "Basic understanding of logistics and transportation processes",
        "Familiarity with supply chain concepts (procurement, inventory, distribution)",
        "Comfortable with web applications and business software",
        "Ability to learn independently and ask clarifying questions",
        "Basic knowledge of ERP systems (any module)"
    ],
    nicetohave: [
        "Prior SAP experience (any module: MM, SD, LE, FICO, EWM)",
        "Logistics or supply chain work experience",
        "Exposure to enterprise software or cloud platforms",
        "Excel skills for data analysis",
        "Understanding of freight and logistics terminology"
    ]
};

export const tmLearningOutcomes = [
    {
        title: "End-to-End Transportation Lifecycle Management",
        description: "Configure and manage complete transportation planning and execution cycles.",
        icon: "Truck",
        points: [
            "Execute freight requirements, order creation, and shipment consolidation workflows",
            "Implement transportation strategies across road, rail, ocean, and air freight modes",
            "Manage cost control and process optimization for freight operations",
            "Ensure compliance with international transportation regulations"
        ]
    },
    {
        title: "Freight Order & Shipment Management",
        description: "Create and manage freight orders from various sources (SD, MM, manual).",
        icon: "Package",
        points: [
            "Build freight units and manage shipment consolidation strategies",
            "Execute forwarding orders for 3PL and Logistics Service Providers",
            "Manage freight order lifecycle from creation to settlement",
            "Configure exception handling and escalation workflows"
        ]
    },
    {
        title: "Transportation Network & Route Optimization",
        description: "Design and maintain transportation networks with zones and lanes.",
        icon: "Map",
        points: [
            "Configure carrier schedules and transportation modes",
            "Execute route optimization for cost and time efficiency",
            "Manage vehicle scheduling and load planning",
            "Optimize shipment consolidation for capacity utilization"
        ]
    },
    {
        title: "Carrier Management & Tendering",
        description: "Manage carrier master data and performance metrics.",
        icon: "Users",
        points: [
            "Execute carrier selection processes based on predefined criteria",
            "Conduct tender management: creation, bidding, evaluation, and award",
            "Manage carrier contracts and rate agreements",
            "Facilitate carrier collaboration through digital platforms"
        ]
    },
    {
        title: "Freight Cost Calculation & Settlement",
        description: "Configure comprehensive freight charge calculation rules.",
        icon: "DollarSign",
        points: [
            "Manage rate tables, surcharges, and pricing agreements",
            "Execute freight settlement and invoice processing",
            "Manage rebate calculations and cost allocations",
            "Resolve billing disputes and credit memo processing"
        ]
    },
    {
        title: "Technical Master Data & S/4HANA Integration", // Combined for brevity
        description: "Manage business partner master data and integrate SAP TM with S/4HANA.",
        icon: "Database",
        points: [
            "Configure organizational units and planning profiles",
            "Set up resources (vehicles, containers, equipment)",
            "Integrate SAP TM with SAP S/4HANA core modules (SD, MM, FI)",
            "Enable real-time data flow between systems"
        ]
    },
    {
        title: "Logistics Business Network & Analytics", // Combined
        description: "Configure LBN connectivity and create custom reports for performance.",
        icon: "BarChart",
        points: [
            "Implement freight collaboration for carrier communication",
            "Manage real-time shipment visibility and tracking",
            "Create custom reports for transportation performance",
            "Execute spend analysis for carrier and route optimization"
        ]
    }
];

export const tmRealWorldScenarios = [
    {
        title: "Global Manufacturing Company's Transportation Network Optimization",
        description: "A multinational manufacturer with operations in 15 countries operates complex transportation networks managing inbound materials and outbound finished goods across Europe, Asia, and Americas.",
        role: "Lead SAP TM Consultant",
        outcome: "25-30% reduction in freight costs, 95%+ on-time delivery achievement, 60% faster freight settlement.",
        responsibilities: [
            "Design a centralized transportation governance model across regions",
            "Configure multi-modal transportation networks (road, rail, ocean, air)",
            "Set up carrier management and tendering processes",
            "Implement transportation planning and optimization rules",
            "Design freight settlement and invoice reconciliation workflows",
            "Configure real-time shipment tracking for customer visibility"
        ]
    },
    {
        title: "E-Commerce Retailer's Last-Mile Delivery Optimization",
        description: "A rapidly growing e-commerce retailer with 500+ daily shipments needs to optimize last-mile delivery operations to consolidate shipments and manage carrier capacity.",
        role: "SAP TM Consultant",
        outcome: "20% improvement in delivery cost per order, 98% on-time delivery rate, improved customer satisfaction scores.",
        responsibilities: [
            "Design shipment consolidation and grouping strategies",
            "Configure last-mile delivery route optimization",
            "Set up carrier booking and capacity management",
            "Implement real-time shipment tracking and event management",
            "Create customer-facing delivery notifications and visibility portal",
            "Establish performance metrics for carrier and route optimization"
        ]
    },
    {
        title: "Pharmaceutical Company's Cold Chain & Regulatory Compliance",
        description: "A pharmaceutical manufacturer needs SAP TM to maintain cold chain integrity, ensure serialization tracking, and comply with regulatory requirements (DSCSA, GDP).",
        role: "SAP TM Implementation Specialist",
        outcome: "100% regulatory compliance, zero cold chain violations, streamlined audits, reduced shipping costs by 15%.",
        responsibilities: [
            "Configure temperature-controlled transportation lanes and networks",
            "Set up shipment tracking with serialization data integration",
            "Implement compliance documentation workflows",
            "Design freight settlement with regulatory reporting",
            "Configure exception alerts for temperature deviations",
            "Create audit trails and regulatory reports"
        ]
    },
    {
        title: "3PL Provider's Multi-Customer Carrier Management",
        description: "A Third-Party Logistics (3PL) provider managing shipments for 50+ customers needs SAP TM to centralize freight operations and manage multiple carrier contracts.",
        role: "Solution Architect",
        outcome: "30% improvement in carrier utilization, 40% faster freight settlement, enhanced customer retention through transparency.",
        responsibilities: [
            "Design multi-customer freight order management",
            "Configure carrier performance monitoring and rating",
            "Set up freight consolidation algorithms",
            "Implement customer-facing shipment visibility portals",
            "Design automated freight settlement and invoicing",
            "Configure carrier collaboration through digital networks"
        ]
    }
];

export const tmContent = {
    heroHeading: "Transform Your Logistics Career with the #1 SAP TM Online Training Program",
    heroSubheading: "Master logistics optimization, supply chain coordination, and enterprise transportation planning with hands-on, job-oriented training.",

    title: "SAP TM",
    description: "The SAP Transportation Management Online Training Program from ERPVITS represents a transformative learning pathway for professionals eager to excel in logistics optimization, supply chain coordination, and enterprise transportation planning.",
    badges: ["Rated #1 SAP TM Training Program 2025"],
    heroStats: [
        { icon: "award", label: "SAP Certified Trainers" },
        { icon: "star", label: "4.8 Learner Rating" },
        { icon: "clock", label: "24/7 Team Support" },
        { icon: "briefcase", label: "10+ Years Experience" }
    ],
    buttonLabels: {
        primary: "Book Your Free Demo Class →",
        secondary: "View Curriculum"
    },
    metaTitle: "SAP TM Training Online | Certification & Real-Time Projects",
    metaDescription: "Master logistics optimization with SAP TM training online. Learn freight management, planning, hands-on labs, real projects, and certification support.",

    features: [],
    sections: [
        {
            type: 'detailed_features',
            title: "Learn SAP TM from Certified Experts – 100% Hands-On, Job-Oriented Training",
            subtitle: "Our SAP Transportation Management Online Training is delivered exclusively by certified SAP professionals with 12+ years of direct implementation experience.",
            badge: "Why Choose Us",
            items: [
                {
                    title: "Certified Instructor Expertise",
                    description: "Trainers hold official SAP certifications and have led multiple enterprise-scale SAP TM implementations."
                },
                {
                    title: "100% Hands-On Learning Methodology",
                    description: "Sessions include live demonstrations and guided lab exercises to configure networks, manage orders, and execute workflows on real systems."
                },
                {
                    title: "Job-Oriented Curriculum Design",
                    description: "Designed around exact skills, responsibilities, and problem-solving scenarios faced by SAP TM consultants."
                },
                {
                    title: "Interactive Q&A Sessions",
                    description: "Dedicated forums and live office hours for addressing doubts and clarifying complex topics like route optimization."
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
                    description: "Resume building, mock interviews, and practice with real-world interview questions from logistics hiring trends."
                },
                {
                    title: "Active Alumni Network",
                    description: "Join a thriving community of SAP TM professionals to exchange tips and build relationships."
                },
                {
                    title: "Ongoing Support Post-Training",
                    description: "Six months of instructor guidance after training for concept clarification and project challenges."
                }
            ]
        },
        {
            type: 'content_with_image',
            title: "Why Professionals Choose ERPVITS for SAP TM Online Training",
            subtitle: "Success Guarantee & Credibility",
            description: "ERPVITS has established itself as a trusted training partner for SAP Modules, with hundreds of successful learners working at top consulting firms like Accenture, Capgemini, and Deloitte. Our alumni network testimonials speak to the quality of instruction and the career acceleration our program delivers.",
            items: [
                "Trusted by 500+ successful SAP professionals",
                "Alumni at Accenture, Capgemini, Deloitte, Infosys, Wipro, and leading LSPs",
                "Personalized pre-evaluation and learning path customization",
                "Active alumni network and community forum for freight professionals",
                "60+ guided lab exercises from basic to advanced freight management",
                "Quarterly updated materials aligned with latest SAP TM releases",
                "Mock interviews simulating real consultant scenarios",
                "Dedicated certification prep week before exams"
            ]
        },
        {
            type: 'whats_included',
            content: "A complete, career-focused SAP Transportation Management training program combining live expert sessions, real-world projects, hands-on labs, certification preparation, and ongoing career support.",
            stats: [
                { value: "45-50", label: "Hours of Live Training" },
                { value: "60+", label: "Hands-On Lab Exercises" },
                { value: "100%", label: "Placement Support" }
            ]
        },
        {
            type: 'detailed_curriculum',
            title: "Comprehensive SAP TM Course Curriculum",
            modules: [
                {
                    title: "Module 1: Introduction to SAP Transportation Management",
                    duration: "5 Hours",
                    learning_points: [
                        "Overview of SAP TM and its role in the logistics ecosystem",
                        "Key features: route optimization, cost reduction, real-time visibility",
                        "User interface navigation and system architecture",
                        "Transportation business partner types: Shippers, Carriers, LSPs",
                        "Transportation modes: Road, Rail, Air, Ocean freight management",
                        "Basic system setup and organizational structure"
                    ],
                    hands_on: [
                        "Navigate SAP TM Fiori interface and SAP NetWeaver client",
                        "Create your first transportation requirement",
                        "Set up organizational master data",
                        "Explore transportation cockpit basics"
                    ]
                },
                {
                    title: "Module 2: Master Data Management (MDM) in SAP TM",
                    duration: "6 Hours",
                    learning_points: [
                        "Role of MDM in transportation operations",
                        "Business partner master data: Shipper, Carrier, Forwarder",
                        "Location and transportation network setup",
                        "Resources configuration: vehicles, containers, equipment",
                        "Organizational unit hierarchy and planning profile setup",
                        "Integration with ERP master data"
                    ],
                    hands_on: [
                        "Create and maintain business partner records",
                        "Configure transportation network zones and lanes",
                        "Set up freight unit types and building rules",
                        "Manage charging master data and rate tables"
                    ]
                },
                {
                    title: "Module 3: Transportation Network & Route Planning",
                    duration: "7 Hours",
                    learning_points: [
                        "Transportation network design principles",
                        "Default routes, zones, lanes, and trans-shipment locations",
                        "Carrier schedule configuration",
                        "Port schedules and departure/destination rules",
                        "Load planning and freight consolidation strategies",
                        "Route optimization algorithms"
                    ],
                    hands_on: [
                        "Design transportation network for multi-regional operations",
                        "Create carrier schedules for road and ocean freight",
                        "Configure transportation zones and lane routing rules",
                        "Execute manual and automatic route planning"
                    ]
                },
                {
                    title: "Module 4: Freight Order Management",
                    duration: "7 Hours",
                    learning_points: [
                        "Freight order creation and lifecycle management",
                        "Order-based (OTR) and delivery-based (DTR) requests",
                        "Freight unit building from sales orders/deliveries",
                        "Freight order stages and status management",
                        "Integration with Sales & Distribution (SD) and Materials Management (MM)",
                        "Forwarding order scenarios for 3PL"
                    ],
                    hands_on: [
                        "Create freight orders from various sources (SD, MM)",
                        "Build freight units from sales orders",
                        "Manage multi-shipment consolidation",
                        "Execute end-to-end freight order workflow"
                    ]
                },
                {
                    title: "Module 5: Transportation Planning & Optimization",
                    duration: "8 Hours",
                    learning_points: [
                        "Transportation planning strategies and profiles",
                        "Planning cockpit configuration and usage",
                        "Automated planning and Vehicle Scheduling Request (VSR) optimization",
                        "Load planning and vehicle assignment strategies",
                        "Manual planning techniques",
                        "Exception handling and planning workflow"
                    ],
                    hands_on: [
                        "Configure transportation cockpit layouts",
                        "Execute automated planning proposals",
                        "Perform manual freight order scheduling",
                        "Configure VSR optimization with constraints"
                    ]
                },
                {
                    title: "Module 6: Carrier Selection & Tendering",
                    duration: "6 Hours",
                    learning_points: [
                        "Carrier determination strategies",
                        "Means of transport and carrier competencies",
                        "Tendering process: creation, bidding, evaluation",
                        "Carrier rating and performance scoring",
                        "Contract management and rate agreements",
                        "Carrier collaboration and booking process"
                    ],
                    hands_on: [
                        "Create and evaluate carrier tenders",
                        "Configure carrier selection criteria",
                        "Manage carrier rates and freight agreements",
                        "Execute carrier bidding simulation"
                    ]
                },
                {
                    title: "Module 7: Freight Cost Management & Settlement",
                    duration: "7 Hours",
                    learning_points: [
                        "Freight charge calculation setup",
                        "Calculation sheets, rate tables, and surcharges",
                        "Freight settlement and invoice processing",
                        "Rebate management and cost allocation",
                        "Integration with Financial Accounting (FI)",
                        "Dispute management and credit memo processing"
                    ],
                    hands_on: [
                        "Configure charge calculation rules",
                        "Execute freight charge calculations",
                        "Process freight invoices and settlement",
                        "Manage carrier rebates and discounts"
                    ]
                },
                {
                    title: "Module 8: Transportation Execution & Monitoring",
                    duration: "5 Hours",
                    learning_points: [
                        "Goods issue and transportation execution",
                        "Real-time shipment tracking and visibility",
                        "Event management and milestone tracking",
                        "Exception management and alerts",
                        "Performance monitoring and KPI tracking",
                        "Collaboration portal for carrier communication"
                    ],
                    hands_on: [
                        "Execute goods issue and freight release",
                        "Monitor shipments in transportation cockpit",
                        "Track real-time events and milestones",
                        "Manage exceptions and deviations"
                    ]
                },
                {
                    title: "Module 9: Supply Chain Collaboration & Integration",
                    duration: "5 Hours",
                    learning_points: [
                        "SAP Logistics Business Network (LBN) overview",
                        "Freight collaboration features",
                        "EDI and cXML integration basics",
                        "Integration with S/4HANA core modules",
                        "Cloud Integration Gateway (CIG) concepts",
                        "Extended Warehouse Management (EWM) integration"
                    ],
                    hands_on: [
                        "Configure LBN freight collaboration",
                        "Set up EDI/cXML connectivity",
                        "Integrate with S/4HANA sales orders",
                        "Configure EWM pick and pack integration"
                    ]
                },
                {
                    title: "Module 10: Advanced Topics & Best Practices",
                    duration: "4 Hours",
                    learning_points: [
                        "Cloud deployment scenarios for SAP TM",
                        "Performance tuning and system optimization",
                        "Troubleshooting common issues",
                        "Compliance and data security",
                        "Industry best practices",
                        "Future trends: AI in logistics"
                    ],
                    hands_on: [
                        "Configure advanced optimization scenarios",
                        "Set up performance monitoring dashboards",
                        "Practice troubleshooting scenarios",
                        "Implement compliance configurations"
                    ]
                }
            ]
        },
        {
            type: 'detailed_target_audience',
            items: tmTargetAudience
        },
        {
            type: 'detailed_prerequisites',
            items: tmPrerequisites
        },
        {
            type: 'detailed_learning_outcomes',
            items: tmLearningOutcomes
        },
        {
            type: 'real_world_scenarios',
            items: tmRealWorldScenarios
        },
        {
            type: 'detailed_certification',
            content: "We Provide Support for SAP Certified Application Associate – Transportation Management in SAP S/4HANA (Exam Code: C_S4TM_2023).",
            items: [
                {
                    title: "SAP Certified Application Associate - Transportation Management in SAP S/4HANA",
                    code: "(C_S4TM_2023)",
                    focus: "Transportation network, freight order management, planning, charge calculation, and settlement.",
                    who: "Functional consultants, planners, and solution architects.",
                    relevance: "Essential for SAP TM consultant roles and S/4HANA logistics projects."
                }
            ]
        },
        {
            type: 'detailed_career_opportunities',
            items: [
                {
                    title: "SAP TM Consultant (Entry Level)",
                    salary: "$99,960 - $119,150",
                    responsibilities: "Configure TM scenarios, manage freight orders, support end-users.",
                    employers: "Accenture, Capgemini, Deloitte, IBM",
                    path: "Junior Consultant -> Senior Consultant",
                    icon: "Briefcase",
                    color: "blue"
                },
                {
                    title: "Logistics Implementation Specialist",
                    salary: "$85,000 - $115,000",
                    responsibilities: "Implement transportation networks, define zones/lanes, optimizing routing.",
                    employers: "DHL, DB Schenker, Maersk, Kuehne+Nagel",
                    path: "Specialist -> Logistics Manager",
                    icon: "TrendingUp",
                    color: "green"
                },
                {
                    title: "Transportation Analyst",
                    salary: "$80,000 - $110,000",
                    responsibilities: "Analyze freight costs, monitor carrier performance, optimize load planning.",
                    employers: "Manufacturing & Retail Giants (e.g., Walmart, Nestle)",
                    path: "Analyst -> Supply Chain Manager",
                    icon: "Users",
                    color: "orange"
                },
                {
                    title: "Supply Chain Consultant",
                    salary: "$95,000 - $130,000",
                    responsibilities: "Design end-to-end supply chain visibility, integrate TM with EWM/ERP.",
                    employers: "Consulting Firms, Tech Solutions",
                    path: "Consultant -> Solution Architect",
                    icon: "Settings",
                    color: "purple"
                },
                {
                    title: "SAP TM Solution Architect",
                    salary: "$115,000 - $160,000",
                    responsibilities: "Lead TM implementations, design complex architectures, integration with S/4HANA.",
                    employers: "Top Tier Consulting, Global Enterprises",
                    path: "Architect -> Practice Head / Director",
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
                "DHL", "DB Schenker", "XPO Logistics", "Amazon", "Microsoft"
            ]
        },
        {
            type: 'detailed_post_training_journey'
        },
        {
            type: 'detailed_upcoming_batches',
            batches: [
                {
                    name: "Batch 1: November 2025 (Weekday)",
                    status: "filling_fast",
                    date: "November 15, 2025",
                    schedule: "Mon-Fri | 7:00 AM & 8:00 PM IST",
                    duration: "45-50 Hours",
                    seatsFilled: 40
                },
                {
                    name: "Batch 2: November 2025 (Weekend)",
                    status: "open",
                    date: "November 16, 2025",
                    schedule: "Sat & Sun | 7:30 AM & 7:00 PM IST",
                    duration: "45-50 Hours",
                    seatsFilled: 60
                },
                {
                    name: "Batch 3: December 2025 (Flexible)",
                    status: "new",
                    date: "December 1, 2025",
                    schedule: "Customized per batch",
                    duration: "45-50 Hours (Accelerated)",
                    seatsFilled: 70
                }
            ]
        },
        {
            type: 'detailed_testimonials',
            items: [
                {
                    name: "Rajesh Patel",
                    role: "SAP TM Consultant at Deloitte",
                    quote: "Outstanding training with crystal-clear explanations. I landed a consulting role at Deloitte within 10 weeks of completing the course."
                },
                {
                    name: "Priya Sharma",
                    role: "Supply Chain Manager",
                    quote: "The weekend flexibility allowed me to learn while working. My employer promoted me to Supply Chain Manager. Accelerated my career by 4 years."
                },
                {
                    name: "Amit Kumar",
                    role: "Senior SAP TM Consultant",
                    quote: "Best investment in my career. The capstone projects were exactly like real client work. The certification support was exceptional."
                },
                {
                    name: "Ananya Singh",
                    role: "Certified SAP TM Professional",
                    quote: "Superb certification preparation. I passed the C_S4TM_2023 exam on my first attempt with 78%. Highly recommended!"
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
                    q: "What is SAP TM and how does ERPVITS help me learn it?",
                    a: "SAP Transportation Management (SAP TM) is a solution for optimizing transportation and freight processes. ERPVITS provides comprehensive training covering real-time business scenarios, hands-on practice, and guided projects."
                },
                {
                    q: "What will I learn in the SAP TM module?",
                    a: "You will learn freight order management, network design, route optimization, carrier selection, freight charge calculation, and real-time shipment monitoring."
                },
                {
                    q: "What is Transportation Planning in SAP TM?",
                    a: "It is the process of determining optimal movment of goods. We cover manual and automated planning, freight consolidation, and route optimization."
                },
                {
                    q: "Does ERPVITS provide placement support?",
                    a: "Yes, we provide 100% placement assistance including resume building, mock interviews, and job referrals."
                },
                {
                    q: "Is the training live or recorded?",
                    a: "It is 100% live interactive training led by certified experts. You also get lifetime access to class recordings."
                }
            ]
        }
    ]
};
