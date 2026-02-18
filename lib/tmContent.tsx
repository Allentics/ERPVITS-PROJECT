import React from 'react';
import { Briefcase, Building2, TrendingUp, Users, Settings, Factory, GraduationCap, CheckCircle, Star, Truck, Package, Map, DollarSign, Database, BarChart, ShoppingCart, Globe, Award, Zap, Layout, MonitorSmartphone, ClipboardCheck, Activity, Smartphone, BarChart3 } from 'lucide-react';

export const tmTargetAudience = [
    {
        icon: "Briefcase",
        title: "Logistics & Supply Chain Specialists",
        bg: "bg-[#ff4500]/10",
        color: "text-[#ff4500]",
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
        bg: "bg-[#ff4500]/10",
        color: "text-[#ff4500]",
        description: [
            "SAP consultants from MM, SD, LE, EWM modules seeking specialization",
            "ERP system administrators expanding into logistics domain",
            "SAP architects designing enterprise transportation solutions",
            "Technical consultants supporting SAP implementations",
            "ABAP developers interested in TM module customization"
        ]
    },
    {
        icon: "Factory",
        title: "Manufacturing & Automotive Professionals",
        bg: "bg-[#ff4500]/10",
        color: "text-[#ff4500]",
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
        bg: "bg-[#ff4500]/10",
        color: "text-[#ff4500]",
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
        bg: "bg-[#ff4500]/10",
        color: "text-[#ff4500]",
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

export const tmRealWorldScenarios = [
    {
        title: "Global Manufacturing Company's Transportation Network Optimization",
        icon: "Factory",
        bg: "bg-[#ff4500]/10",
        iconColor: "text-[#ff4500]",
        description: "A multinational manufacturer with operations in 15 countries operates complex transportation networks managing inbound materials and outbound finished goods across Europe, Asia, and Americas. They're implementing SAP TM to consolidate logistics across regional entities, reduce freight costs, improve on-time delivery, and ensure regulatory compliance.",
        role: "Lead SAP TM Consultant",
        outcome: "25-30% reduction in freight costs, 95%+ on-time delivery achievement, 60% faster freight settlement.",
        responsibilities: [
            "Design a centralized transportation governance model across regions",
            "Configure multi-modal transportation networks (road, rail, ocean, air)",
            "Set up carrier management and tendering processes",
            "Implement transportation planning and optimization rules",
            "Design freight settlement and invoice reconciliation workflows",
            "Configure real-time shipment tracking for customer visibility",
            "Create KPI dashboards for transportation performance"
        ]
    },
    {
        title: "E-Commerce Retailer's Last-Mile Delivery Optimization",
        icon: "ShoppingCart",
        bg: "bg-[#ff4500]/10",
        iconColor: "text-[#ff4500]",
        description: "A rapidly growing e-commerce retailer with 500+ daily shipments across multiple fulfillment centers needs to optimize last-mile delivery operations. They need SAP TM to consolidate shipments, manage carrier capacity, track deliveries in real-time, and provide customer visibility without inflating logistics costs.",
        role: "SAP TM Consultant",
        outcome: "20% improvement in delivery cost per order, 98% on-time delivery rate, improved customer satisfaction scores.",
        responsibilities: [
            "Design shipment consolidation and grouping strategies",
            "Configure last-mile delivery route optimization",
            "Set up carrier booking and capacity management",
            "Implement real-time shipment tracking and event management",
            "Create customer-facing delivery notifications and visibility portal",
            "Configure exception management for delivery failures",
            "Establish performance metrics for carrier and route optimization"
        ]
    },
    {
        title: "Pharmaceutical Company's Cold Chain & Regulatory Compliance",
        icon: "Activity",
        bg: "bg-[#ff4500]/10",
        iconColor: "text-[#ff4500]",
        description: "A pharmaceutical manufacturer distributing temperature-sensitive products through specialized distributors needs SAP TM to maintain cold chain integrity, ensure serialization tracking, and comply with regulatory requirements (DSCSA, GDP) across multiple countries.",
        role: "SAP TM Implementation Specialist",
        outcome: "100% regulatory compliance, zero cold chain violations, streamlined audits, reduced shipping costs by 15%.",
        responsibilities: [
            "Configure temperature-controlled transportation lanes and networks",
            "Set up shipment tracking with serialization data integration",
            "Implement compliance documentation workflows",
            "Design freight settlement with regulatory reporting",
            "Configure exception alerts for temperature deviations",
            "Create audit trails and regulatory reports",
            "Manage international shipping documentation"
        ]
    },
    {
        title: "3PL Provider's Multi-Customer Carrier Management",
        icon: "Users",
        bg: "bg-[#ff4500]/10",
        iconColor: "text-[#ff4500]",
        description: "A Third-Party Logistics (3PL) provider managing shipments for 50+ customers needs SAP TM to centralize freight operations, manage multiple carrier contracts, optimize consolidation opportunities, and provide customer visibility through web portals.",
        role: "Solution Architect",
        outcome: "30% improvement in carrier utilization, 40% faster freight settlement, enhanced customer retention through transparency.",
        responsibilities: [
            "Design multi-customer freight order management",
            "Configure carrier performance monitoring and rating",
            "Set up freight consolidation algorithms",
            "Implement customer-facing shipment visibility portals",
            "Design automated freight settlement and invoicing",
            "Configure carrier collaboration through digital networks",
            "Create operational dashboards for real-time monitoring"
        ]
    }
];

export const tmContent = {
    price: "Competitive",
    duration: "45-50 Hours",
    syllabusUrl: "/syllabus/ERPVITS Syllabus - Course Contents Pdf/SAP Functional/sap-tm.pdf",
    heroHeading: <>Transform Your Logistics Career with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] to-red-600 box-decoration-clone">#1 SAP TM Online Training Program</span></>,
    heroSubheading: "The SAP Transportation Management Online Training Program from ERPVITS represents a transformative learning pathway for professionals eager to excel in logistics optimization, supply chain coordination, and enterprise transportation planning. In today's hyper-competitive business landscape, organizations urgently need certified SAP TM experts who can streamline transportation processes, reduce freight costs, enhance carrier collaboration, and drive supply chain efficiency. This comprehensive SAP TM training course combines interactive, instructor-led sessions, hands-on lab exercises, real-time industry projects, freight management simulations, and end-to-end certification support—designed specifically for logistics professionals, SAP consultants, supply chain specialists, ERP implementers, and ambitious graduates targeting global consulting and implementation roles.",

    title: "SAP TM",
    description: "The SAP Transportation Management Online Training Program from ERPVITS represents a transformative learning pathway for professionals eager to excel in logistics optimization, supply chain coordination, and enterprise transportation planning.",
    badges: ["Mode: Instructor Led/Self Paced", "Batches: Weekend/Weekday"],
    heroStats: [
        { icon: "Monitor", label: "Instructor Led/Self Paced" },
        { icon: "Calendar", label: "Weekend/Weekday" }
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
            subtitle: "Our **SAP TM Online Training** curriculum is delivered exclusively by certified SAP professionals with 12+ years of direct hands-on experience in freight management, logistics networks, and global supply chain operations. Instead of passive video courses or self-paced modules, you get **live, real-time training** with interactive sessions where instructors share industry-proven methodologies, address your questions, and guide you through complex transportation management scenarios in a step-by-step manner.",
            badge: "Why Choose Us",
            items: [
                {
                    title: "Certified Instructor Expertise",
                    description: "Each trainer holds official SAP certifications and has successfully led multiple enterprise-scale SAP TM implementations across manufacturing, retail, automotive, pharmaceutical, and logistics service provider industries. They don't just teach theory; they share real-world war stories, common pitfalls encountered during go-lives, and industry best practices from actual client deployments."
                },
                {
                    title: "100% Hands-On Learning Methodology",
                    description: "Every session includes live demonstrations directly on SAP TM systems, followed by guided lab exercises where you replicate what you've learned. By the end of the course, you've configured transportation networks, managed freight orders, executed shipment consolidation, calculated freight charges, managed carrier selection, and executed supply chain collaboration workflows—all on real systems."
                },
                {
                    title: "Job-Oriented Curriculum Design",
                    description: "The course curriculum is not academic—it's designed around the exact skills, responsibilities, and problem-solving scenarios you'll face as an SAP TM consultant. Whether you're implementing freight planning optimization, configuring transportation cockpit for real-time monitoring, or troubleshooting S/4HANA integration issues, the training ensures you're equipped with practical answers."
                },
                {
                    title: "Interactive Q&A Sessions",
                    description: "Beyond the main classroom instruction, you have dedicated Q&A forums and live office hours where instructors address your doubts, clarify complex topics like route optimization algorithms and freight settlement processes, and provide personalized guidance tailored to your learning pace and career goals."
                },
                {
                    title: "Flexible Batch Timings",
                    description: "Recognizing that many professionals juggle jobs, families, and learning, we offer both weekday evening batches (6 PM – 9 PM IST) and weekend batches (Saturday & Sunday). Sessions are recorded, so if you miss a live class, you can catch up asynchronously without losing continuity."
                },
                {
                    title: "Small Batch Sizes for Personalized Attention",
                    description: "Unlike massive online courses with thousands of anonymous learners, our batches are capped at 8-10 participants. This ensures instructors can provide individualized attention, get to know your strengths and challenges, and offer targeted feedback on your configuration work."
                },
                {
                    title: "Placement & Career support",
                    description: "Our dedicated career support team helps you build an impactful SAP TM-focused resume, prepare through mock interviews, and practice with real-world interview questions from recent hiring trends in logistics and supply chain sectors. You'll also receive guidance on how to present project experience effectively to stand out in SAP TM job interviews."
                },
                {
                    title: "Active Alumni Network & Community Forum",
                    description: "Join a thriving community of SAP TM professionals. Exchange tips, share freight optimization strategies, discuss carrier selection scenarios, ask questions, and build professional relationships that can lead to referrals and collaborations."
                },
                {
                    title: "Ongoing support Post-Training",
                    description: "Your learning journey doesn't end with SAP TM course completion. For six months after training, you'll continue to receive instructor guidance—whether you need help clarifying concepts, troubleshooting real-world project challenges, or seeking advice during your first consulting engagements managing transportation networks."
                }
            ]
        },
        {
            type: 'content_with_image',
            title: "Why Professionals Choose ERPVITS for SAP TM Online Training",
            subtitle: "Success Guarantee & Credibility",
            description: "ERPVITS has established itself as a trusted training partner for SAP Modules, with hundreds of successful learners working at top consulting firms like Accenture, Capgemini, Deloitte, Infosys, and Wipro, as well as leading logistics service providers like DHL, DB Schenker, and XPO Logistics. Our alumni network testimonials speak to the quality of instruction and the career acceleration our program delivers.",
            items: [
                "Trusted by 500+ successful SAP professionals",
                "Alumni at Accenture, Capgemini, Deloitte, Infosys, Wipro, and leading LSP organizations",
                "Personalized pre-evaluation and learning path customization",
                "Active alumni network and community forum for freight professionals",
                "60+ guided lab exercises from basic to advanced freight management scenarios",
                "Quarterly updated materials aligned with latest SAP TM releases and S/4HANA updates",
                "Mock interviews simulating real consultant scenarios in transportation management",
                "Dedicated certification prep week before exams"
            ]
        },
        {
            type: 'whats_included',
            title: "What's Included in the SAP TM Training – Complete Learning Package",
            description: "A complete, career-focused SAP Transportation Management training program combining live expert sessions, real-world projects, hands-on labs, certification preparation, and ongoing career support to help you become a job-ready SAP TM consultant.",
            features: [
                {
                    title: "Live Interactive Classes",
                    description: "45–50 hours of instructor-led sessions over 8–12 weeks via live video conferencing with real-time Q&A and interactive discussions on freight planning, optimization, and settlement scenarios."
                },
                {
                    title: "Real-World Projects",
                    description: "Work on Fortune 500-inspired case studies covering transportation network setup, freight order management, carrier selection, shipment consolidation, and S/4HANA integration."
                },
                {
                    title: "Hands-On Lab Environment",
                    description: "Get full-time access to SAP TM systems to practice master data setup, freight order creation, route optimization, transportation planning, charge management, and freight settlement."
                },
                {
                    title: "Certification Exam Prep",
                    description: "Prepare for SAP Certified Application Associate – Transportation Management in SAP S/4HANA (C_S4TM_2023) certification with study guides, practice exams, and focused bootcamp sessions."
                },
                {
                    title: "Resume & Interview Coaching",
                    description: "Receive personalized resume optimization, mock consulting interviews, and guidance for SAP TM technical interviews focusing on logistics and supply chain topics."
                },
                {
                    title: "Complete Study Materials",
                    description: "Access PDFs, presentations, configuration checklists, interview question banks, freight management templates, and official SAP documentation links."
                },
                {
                    title: "Lifetime Recording Access",
                    description: "All live sessions are recorded, transcribed, and indexed for lifetime access and easy topic revision on freight management and transportation planning."
                },
                {
                    title: "Expert Q&A Sessions",
                    description: "Join weekly 60-minute live Q&A discussions for concept clarification, freight project guidance, and career mentoring from experienced TM consultants."
                }
            ],
            stats: [
                { value: "45-50", label: "Hours of Live Training", color: "orange" },
                { value: "60+", label: "Hands-On Lab Exercises", color: "orange" },
                { value: "100%", label: "Placement support", color: "orange" }
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
                        "Key features and benefits: route optimization, cost reduction, real-time visibility, compliance",
                        "User interface navigation and system architecture",
                        "Transportation business partner types: Shippers, Carriers, LSPs, Freight Forwarders",
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
                        "Business partner master data: Shipper, Carrier, Forwarder, Hub locations",
                        "Location and transportation network setup",
                        "Resources configuration: vehicles, containers, equipment",
                        "Organizational unit hierarchy and planning profile setup",
                        "Integration with ERP master data (Plants, Cost Centers, Companies)"
                    ],
                    hands_on: [
                        "Create and maintain business partner records",
                        "Configure transportation network zones and lanes",
                        "Set up freight unit types and building rules",
                        "Manage charging master data and rate tables",
                        "Validate integration with SAP S/4HANA master data"
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
                        "Route optimization algorithms and cost reduction techniques"
                    ],
                    hands_on: [
                        "Design transportation network for multi-regional operations",
                        "Create carrier schedules for road and ocean freight",
                        "Configure transportation zones and lane routing rules",
                        "Execute manual and automatic route planning",
                        "Perform load optimization and consolidation exercises"
                    ]
                },
                {
                    title: "Module 4: Freight Order Management",
                    duration: "7 Hours",
                    learning_points: [
                        "Freight order creation and lifecycle management",
                        "Order-based transportation requests (OTR) and delivery-based requests (DTR)",
                        "Freight unit building from sales orders and inbound deliveries",
                        "Freight order stages and status management",
                        "Integration with Sales & Distribution (SD) and Materials Management (MM)",
                        "Forwarding order scenarios for 3PL and LSP operations"
                    ],
                    hands_on: [
                        "Create freight orders from various sources (SD, MM)",
                        "Build freight units from sales orders",
                        "Manage multi-shipment consolidation",
                        "Configure freight order types and numbering",
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
                        "Manual planning techniques for complex scenarios",
                        "Exception handling and planning workflow management"
                    ],
                    hands_on: [
                        "Configure transportation cockpit layouts",
                        "Execute automated planning proposals",
                        "Perform manual freight order scheduling",
                        "Configure VSR optimization with constraints",
                        "Analyze planning results and metrics",
                        "Execute what-if analysis for optimization"
                    ]
                },
                {
                    title: "Module 6: Carrier Selection & Tendering",
                    duration: "6 Hours",
                    learning_points: [
                        "Carrier determination strategies",
                        "Means of transport and carrier competencies",
                        "Tendering process: tender creation, bidding, and evaluation",
                        "Carrier rating and performance scoring",
                        "Contract management and rate agreements",
                        "Carrier collaboration and booking process"
                    ],
                    hands_on: [
                        "Create and evaluate carrier tenders",
                        "Configure carrier selection criteria",
                        "Manage carrier rates and freight agreements",
                        "Execute carrier bidding simulation",
                        "Book freight with selected carriers"
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
                        "Dispute management and credit memo processing",
                        "Settlement proposal and freight billing workflows"
                    ],
                    hands_on: [
                        "Configure charge calculation rules",
                        "Execute freight charge calculations",
                        "Process freight invoices and settlement",
                        "Manage carrier rebates and discounts",
                        "Resolve billing disputes",
                        "Generate freight cost reports and analytics"
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
                        "Collaboration portal for carrier communication",
                        "Track & trace integration with SAP Logistics Business Network"
                    ],
                    hands_on: [
                        "Execute goods issue and freight release",
                        "Monitor shipments in transportation cockpit",
                        "Track real-time events and milestones",
                        "Manage exceptions and deviations",
                        "Configure exception workflows",
                        "Analyze transportation performance KPIs"
                    ]
                },
                {
                    title: "Module 9: Supply Chain Collaboration & Integration",
                    duration: "5 Hours",
                    learning_points: [
                        "SAP Logistics Business Network (LBN) overview",
                        "Freight collaboration features and capabilities",
                        "EDI and cXML integration basics",
                        "Integration with SAP S/4HANA core modules",
                        "Cloud Integration Gateway (CIG) concepts",
                        "Extended Warehouse Management (EWM) integration",
                        "International shipment documentation"
                    ],
                    hands_on: [
                        "Configure LBN freight collaboration",
                        "Set up EDI/cXML connectivity",
                        "Integrate with S/4HANA sales orders and deliveries",
                        "Configure EWM pick and pack integration",
                        "Execute international shipment scenarios"
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
                        "Industry best practices from implementations",
                        "Future trends: AI in logistics, autonomous planning",
                        "Change management strategies"
                    ],
                    hands_on: [
                        "Configure advanced optimization scenarios",
                        "Set up performance monitoring dashboards",
                        "Practice troubleshooting scenarios",
                        "Implement compliance configurations",
                        "Build custom reports and analytics"
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
            title: "What You'll Master in This SAP TM Online Course – Core Competencies",
            items: {
                tabs: [
                    {
                        name: "Functional Mastery",
                        items: [
                            {
                                title: "End-to-End Transportation Lifecycle Management",
                                icon: "Building2",
                                points: [
                                    "Configure and manage complete transportation planning and execution cycles",
                                    "Execute freight requirements, order creation, and shipment consolidation workflows",
                                    "Implement transportation strategies across road, rail, ocean, and air freight modes",
                                    "Manage cost control and process optimization for freight operations",
                                    "Ensure compliance with international transportation regulations"
                                ]
                            },
                            {
                                title: "Freight Order & Shipment Management",
                                icon: "Package",
                                points: [
                                    "Create and manage freight orders from various sources (SD, MM, manual)",
                                    "Build freight units and manage shipment consolidation strategies",
                                    "Execute forwarding orders for 3PL and Logistics Service Providers",
                                    "Manage freight order lifecycle from creation to settlement",
                                    "Configure exception handling and escalation workflows"
                                ]
                            },
                            {
                                title: "Transportation Network & Route Optimization",
                                icon: "Map",
                                points: [
                                    "Design and maintain transportation networks with zones and lanes",
                                    "Configure carrier schedules and transportation modes",
                                    "Execute route optimization for cost and time efficiency",
                                    "Manage vehicle scheduling and load planning",
                                    "Optimize shipment consolidation for capacity utilization"
                                ]
                            },
                            {
                                title: "Carrier Management & Tendering",
                                icon: "Users",
                                points: [
                                    "Manage carrier master data and performance metrics",
                                    "Execute carrier selection processes based on predefined criteria",
                                    "Conduct tender management: creation, bidding, evaluation, and award",
                                    "Manage carrier contracts and rate agreements",
                                    "Facilitate carrier collaboration through digital platforms"
                                ]
                            },
                            {
                                title: "Freight Cost Calculation & Settlement",
                                icon: "DollarSign",
                                points: [
                                    "Configure comprehensive freight charge calculation rules",
                                    "Manage rate tables, surcharges, and pricing agreements",
                                    "Execute freight settlement and invoice processing",
                                    "Manage rebate calculations and cost allocations",
                                    "Resolve billing disputes and credit memo processing"
                                ]
                            }
                        ]
                    },
                    {
                        name: "Technical Skills",
                        items: [
                            {
                                title: "Master Data Administration",
                                icon: "Database",
                                points: [
                                    "Manage business partner master data (Shippers, Carriers, Forwarders)",
                                    "Configure organizational units and planning profiles",
                                    "Maintain location and transportation network master data",
                                    "Set up resources (vehicles, containers, equipment)",
                                    "Validate integration with ERP master data repositories"
                                ]
                            },
                            {
                                title: "SAP S/4HANA Integration & Connectivity",
                                icon: "Settings",
                                points: [
                                    "Integrate SAP TM with SAP S/4HANA core modules (SD, MM, FI)",
                                    "Configure order integration and delivery synchronization",
                                    "Manage Cloud Integration Gateway (CIG) connectivity basics",
                                    "Enable real-time data flow between systems",
                                    "Validate end-to-end process execution"
                                ]
                            },
                            {
                                title: "Logistics Business Network & Collaboration",
                                icon: "Globe",
                                points: [
                                    "Configure SAP Logistics Business Network (LBN) connectivity",
                                    "Implement freight collaboration for carrier communication",
                                    "Manage real-time shipment visibility and tracking",
                                    "Configure event management and milestone tracking",
                                    "Enable B2B communication through digital platforms"
                                ]
                            },
                            {
                                title: "Advanced Analytics & Reporting",
                                icon: "BarChart3",
                                points: [
                                    "Create custom reports for transportation performance",
                                    "Build KPI dashboards for freight monitoring",
                                    "Analyze freight costs and optimization opportunities",
                                    "Execute spend analysis for carrier and route optimization",
                                    "Leverage data for continuous improvement initiatives"
                                ]
                            },
                            {
                                title: "Transportation Execution & Monitoring",
                                icon: "Activity",
                                points: [
                                    "Execute goods issue and freight release processes",
                                    "Monitor shipments in real-time through transportation cockpit",
                                    "Manage transportation exceptions and deviations",
                                    "Track delivery performance and on-time metrics",
                                    "Generate operational and compliance reports"
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            type: 'real_world_scenarios',
            items: tmRealWorldScenarios
        },
        {
            type: 'detailed_certification',
            title: "SAP TM Certification – Your Global Career Credential",
            imageSrc: "/images/ERPVITS - All Modules Infographics/ERPVITS - SAP TM Infographic.webp",
            items: [
                {
                    title: "SAP Certified Application Associate – Transportation Management in SAP S/4HANA",
                    code: "C_S4TM_2023",
                    focus: "Transportation Management Overview (21-30%), Charge Calculation & Freight Settlement (21-30%), Transportation Planning (11-20%), Freight Order Management (11-20%), Master Data Management (≤10%).",
                    who: "Exam Details: 180 Mins | 80 Questions | 61% Passing Score.",
                    relevance: "Entry to mid-level consultant positions, logistics coordinator roles, transportation analyst opportunities"
                }
            ],
            supportFeatures: [
                {
                    title: "Targeted Exam Preparation",
                    subtitle: "Study guides aligned to official exam blueprints with focus on real-world scenarios"
                },
                {
                    title: "Practice Exams",
                    subtitle: "Timed practice tests mirroring real exam conditions with detailed explanations"
                },
                {
                    title: "Exam Strategies",
                    subtitle: "Tips for time management, question-reading techniques, and common pitfalls"
                },
                {
                    title: "Exam Registration Guidance",
                    subtitle: "We assist with exam registration, scheduling, and technical setup"
                },
                {
                    title: "Retake support",
                    subtitle: "If you don't pass on your first attempt, we provide additional support and targeted study recommendations"
                }
            ],
            benefits: [
                {
                    title: "Global Credential Recognition",
                    desc: "SAP certifications are recognized worldwide by employers, clients, and consulting firms"
                },
                {
                    title: "Career Acceleration",
                    desc: "Certified professionals command higher salaries (15-30% premium) and faster promotion"
                },
                {
                    title: "Competitive Advantage",
                    desc: "Stand out in job applications, consulting proposals, and client presentations"
                },
                {
                    title: "Continuous Learning",
                    desc: "Certification pushes you to master the platform thoroughly, ensuring job-ready expertise"
                },
                {
                    title: "Professional Credibility",
                    desc: "Signals to clients and employers that you've met rigorous standards set by the world's leading ERP vendor"
                }
            ]
        },
        {
            type: 'detailed_career_opportunities',
            items: [
                {
                    title: "SAP Transportation Management Consultant",
                    salary: "$99,960 - $119,150",
                    responsibilities: "Configure transportation networks, manage freight orders, support transportation planning, ensure data accuracy.",
                    employers: "Accenture, Capgemini, Deloitte, Infosys, Wipro, IBM Consulting",
                    path: "2-3 years → Mid-level Consultant",
                    icon: "Briefcase",
                    color: "blue"
                },
                {
                    title: "Logistics Implementation Specialist",
                    salary: "$85,000 - $115,000",
                    responsibilities: "Lead TM module implementations, manage transportation configurations, optimize freight processes.",
                    employers: "DHL, DB Schenker, XPO Logistics, Manufacturing Giants",
                    path: "3-4 years → Senior Implementation Specialist",
                    icon: "Building2",
                    color: "green"
                },
                {
                    title: "Transportation Analyst",
                    salary: "$80,000 - $110,000",
                    responsibilities: "Analyze transportation data, identify cost-saving opportunities, optimize carrier selection, manage freight settlement.",
                    employers: "Consulting, E-commerce, Manufacturing, 3PL",
                    path: "3-5 years → Transportation Manager",
                    icon: "BarChart",
                    color: "orange"
                },
                {
                    title: "Supply Chain Consultant",
                    salary: "$95,000 - $130,000",
                    responsibilities: "Design transportation solutions, configure end-to-end processes, manage complex projects.",
                    employers: "Global Consulting Firms, Enterprise Companies",
                    path: "4-6 years → Senior Consultant",
                    icon: "Users",
                    color: "purple"
                },
                {
                    title: "SAP TM Solution Architect",
                    salary: "$115,000 - $160,000",
                    responsibilities: "Design enterprise transportation solutions, lead implementation programs, manage stakeholder expectations.",
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
                    employers: "Top Tier Consulting, Global Enterprises",
                    path: "6-10 years → Principal Consultant",
                    icon: "Settings",
                    color: "cyan"
                }
            ]
        },
        {
            type: 'detailed_companies',
            items: [
                "Accenture", "Capgemini", "Deloitte", "EY", "KPMG", "IBM",
                "Infosys", "Wipro", "Cognizant", "TCS",
                "DHL", "DB Schenker", "XPO Logistics", "J.B. Hunt",
                "Amazon", "Microsoft", "Apple", "Google",
                "Volkswagen", "P&G", "Pfizer"
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
                    duration: "45-50 Hours",
                    seatsFilled: 4
                },
                {
                    name: "Batch 2: November 2025 (Weekends)",
                    status: "open",
                    date: "November 16, 2025",
                    schedule: "Sat & Sun | 7:30 AM & 7:00 PM IST",
                    duration: "45-50 Hours",
                    seatsFilled: 6
                },
                {
                    name: "Batch 3: December 2025 (Flexible)",
                    status: "new",
                    date: "December 1, 2025",
                    schedule: "Customized per batch",
                    duration: "45-50 Hours (Accelerated)",
                    seatsFilled: 7
                }
            ]
        },
        {
            type: 'detailed_testimonials',
            items: [
                {
                    name: "Rajesh Patel",
                    role: "SAP TM Consultant at Deloitte",
                    quote: "Outstanding training with crystal-clear explanations of complex TM concepts. I landed a consulting role at Deloitte within 10 weeks of completing the course."
                },
                {
                    name: "Priya Sharma",
                    role: "Supply Chain Manager",
                    quote: "The weekend flexibility allowed me to learn while working in logistics operations. My employer was so impressed with my TM expertise that they promoted me to Supply Chain Manager."
                },
                {
                    name: "Amit Kumar",
                    role: "Senior SAP TM Consultant",
                    quote: "Best investment in my career. The capstone projects were exactly like real client work—managing freight networks, optimizing routes, and configuring settlements."
                },
                {
                    name: "Ananya Singh",
                    role: "Certified SAP TM Professional",
                    quote: "Superb certification preparation. I passed the C_S4TM_2023 exam on my first attempt with 78%. The mock exams and study materials were spot-on."
                },
                {
                    name: "Vikram Desai",
                    role: "Integration Consultant at Capgemini",
                    quote: "The instructor's real-world insights from actual implementations were invaluable. I didn't just learn SAP TM; I learned how to apply it in complex enterprise environments."
                },
                {
                    name: "Sneha Reddy",
                    role: "Transportation Analyst at Infosys",
                    quote: "From zero SAP TM knowledge to landing my dream role in logistics consulting in 4 months! The instructors are patient, knowledgeable, and truly care about student success."
                }
            ]
        },
        {
            type: 'detailed_demo_booking',
            title: "Ready to Become an SAP TM Consultant?",
            subtitle: "Book your free demo today and take the first step towards a lucrative SAP TM career",
            benefits: [
                { title: "Sample Live Class Session", desc: "Observe real training and instructor methodology" },
                { title: "30-Min Career Consultation", desc: "Personalized guidance based on your background and career goals" },
                { title: "Q&A with Instructor", desc: "Ask questions about course content, certification, and career opportunities" },
                { title: "Special Discount Offer", desc: "Exclusive discount for demo attendees (10-15% off course fees)" }
            ]
        },
        {
            type: 'detailed_faq',
            items: [
                {
                    q: "What is SAP TM and how does ERPVITS help me learn it?",
                    a: "SAP Transportation Management (SAP TM) is a powerful cloud-based and on-premise solution for planning, executing, and optimizing transportation and freight processes. At ERPVITS, we provide comprehensive SAP TM Training covering real-time business scenarios, hands-on practice, and guided projects to help you master freight management, route optimization, and logistics coordination."
                },
                {
                    q: "What will I learn in the SAP TM module?",
                    a: "Our SAP TM training teaches you how to create and manage freight orders, design transportation networks, configure route optimization, select carriers, calculate freight charges, manage shipment consolidation, execute transportation planning, and monitor real-time shipments using the SAP TM platform."
                },
                {
                    q: "What is Transportation Planning in SAP TM?",
                    a: "Transportation Planning is the process of determining the optimal way to move goods from origin to destination. ERPVITS training covers manual and automated planning, freight consolidation strategies, route optimization algorithms, and carrier selection methodologies to minimize costs while meeting delivery commitments."
                },
                {
                    q: "What is Freight Order Management in SAP TM?",
                    a: "Freight Order Management covers the complete lifecycle of freight orders—from creation based on sales orders or deliveries, through consolidation with other shipments, to execution and settlement. ERPVITS provides practical exposure to freight order workflows in real-world scenarios."
                },
                {
                    q: "How does SAP TM support supply chain optimization?",
                    a: "SAP TM enables businesses to optimize transportation networks by consolidating shipments, selecting cost-effective carriers, optimizing routes, reducing empty miles, managing freight costs, and providing real-time visibility into logistics operations—all critical for competitive advantage."
                },
                {
                    q: "Why should I join SAP TM Training at ERPVITS?",
                    a: "ERPVITS offers SAP TM Online Training with live sessions from certified experts, industry-aligned projects, hands-on labs, certification support, and comprehensive placement assistance. You'll also receive guidance on TM certification, resume preparation, and interview strategies."
                },
                {
                    q: "Who can enroll in the SAP TM Course?",
                    a: "Anyone interested in logistics, supply chain, transportation, or SAP technologies can join. Whether you're a fresher, working professional, logistician, or consultant—ERPVITS SAP TM Course is designed to help you build job-ready skills in transportation management."
                },
                {
                    q: "What is the SAP TM Certification and why is it valuable?",
                    a: "SAP Certified Application Associate - Transportation Management (C_S4TM_2023) validates your expertise in TM configuration, freight management, and logistics optimization. ERPVITS prepares you for the official certification exam and helps you become a recognized SAP TM professional."
                },
                {
                    q: "What are the SAP TM course fees at ERPVITS?",
                    a: "SAP TM course fees at ERPVITS are competitive and depend on the module, training mode, and batch timing. Our pricing ensures maximum value with hands-on learning, live instruction, lab access, placement assistance, and certification support."
                },
                {
                    q: "How much does SAP TM Certification cost?",
                    a: "The SAP TM Certification exam (C_S4TM_2023) cost is determined by SAP Education (~$560 USD or ₹46,000 in India). ERPVITS provides complete exam guidance, practice tests, and mentoring to help you pass the certification successfully on your first attempt."
                },
                {
                    q: "How can I become an SAP TM Consultant through ERPVITS?",
                    a: "Join our structured SAP TM Training Program, complete the live project assignments, prepare for TM certification, and gain hands-on experience. ERPVITS also offers career counseling and job assistance to help you become a successful SAP TM Consultant."
                },
                {
                    q: "What career options are available after completing the SAP TM course?",
                    a: "After completing SAP TM Training at ERPVITS, you can apply for roles like TM Consultant, Transportation Analyst, Supply Chain Consultant, Logistics Implementation Specialist, or SAP Functional Consultant. We also share TM consultant jobs and placement opportunities with our learners."
                },
                {
                    q: "How does SAP TM integrate with SAP S/4HANA?",
                    a: "ERPVITS provides detailed sessions on SAP TM Integration with S/4HANA, explaining data flow between TM and core SAP systems using Cloud Integration Gateway (CIG), APIs, and real-time synchronization of freight data, master data, and financial transactions."
                },
                {
                    q: "What are the main SAP TM Solutions covered in the course?",
                    a: "Our course covers all major SAP TM Solutions—Transportation Planning and Optimization, Freight Order Management, Charge Calculation and Settlement, Carrier Selection and Booking, Route Optimization, and Logistics Business Network integration with hands-on practice."
                },
                {
                    q: "What is SAP LBN and how does it integrate with SAP TM?",
                    a: "SAP Logistics Business Network (LBN) enables collaborative freight management and visibility. ERPVITS covers LBN freight collaboration features, real-time tracking, carrier communication, and integration with SAP TM for end-to-end supply chain visibility."
                },
                {
                    q: "Does ERPVITS provide SAP TM Training with Placement support?",
                    a: "Yes! ERPVITS offers comprehensive SAP TM Training with Placement assistance. We help you build an impressive profile, prepare for interviews, connect with recruiters, and support your transition into SAP TM consulting roles."
                },
                {
                    q: "Can I take SAP TM Online Training from anywhere?",
                    a: "Absolutely. ERPVITS provides SAP TM Online Training accessible from any location worldwide. Learn with live instructors, access recorded sessions, and practice on TM systems remotely with 24/7 lab access."
                },
                {
                    q: "Is SAP TM Training available near me?",
                    a: "Yes, ERPVITS offers both online and classroom options. We conduct SAP TM Training in Hyderabad, Pune, Bangalore, and other cities, along with flexible weekend and weekday batches for working professionals."
                },
                {
                    q: "How does ERPVITS help in SAP TM Careers?",
                    a: "At ERPVITS, we not only train you technically but also guide you in your SAP TM Career journey with resume building, interview preparation, mock consultations, and job referrals across leading SAP consulting companies and 3PL providers."
                },
                {
                    q: "What makes SAP TM a lucrative career choice in 2025?",
                    a: "SAP TM is a niche skill with high market demand—250%+ increase in job openings, fewer qualified professionals, premium salaries (15-30% higher than non-certified), and growing adoption across manufacturing, retail, automotive, and logistics industries."
                },
                {
                    q: "How long does it take to get a job after SAP TM training?",
                    a: "The average timeline from course completion to first SAP TM role is 2-3 months with active job search and career support from ERPVITS. Many learners secure opportunities within 4-8 weeks of certification completion."
                },
                {
                    q: "What is the difference between SAP TM and other transportation solutions?",
                    a: "SAP TM is an integrated, enterprise-grade solution that combines transportation planning, freight management, route optimization, and real-time monitoring within the SAP ecosystem. It provides unmatched integration with S/4HANA, EWM, and business processes."
                }
            ]
        }
    ]
};
