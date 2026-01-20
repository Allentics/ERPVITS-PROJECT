import { Briefcase, Building2, TrendingUp, Users, Settings, Factory, GraduationCap, CheckCircle, Star, Truck, Package, Map, DollarSign, Database, BarChart, ShoppingCart, Globe, Award, Zap, Layout, MonitorSmartphone } from 'lucide-react';

export const ewmTargetAudience = [
    {
        icon: "Briefcase",
        title: "Warehouse & Logistics Professionals",
        description: [
            "Warehouse managers seeking digital transformation expertise",
            "Warehouse coordinators aiming for consultant-level skills",
            "Logistics supervisors wanting to master warehouse automation",
            "Inventory managers transitioning to warehouse consulting",
            "Distribution center operators seeking broader supply chain knowledge"
        ]
    },
    {
        icon: "Cpu",
        title: "SAP & ERP Professionals",
        description: [
            "SAP consultants from MM, SD, LE, TM modules seeking specialization",
            "ERP system administrators expanding into warehouse management domain",
            "SAP architects designing enterprise warehouse solutions",
            "Technical consultants supporting SAP implementations",
            "ABAP developers interested in EWM module customization"
        ]
    },
    {
        icon: "Factory", // Mapped from Manufacturing
        title: "Manufacturing & E-Commerce Professionals",
        description: [
            "Production planners overseeing warehouse operations",
            "E-commerce operations managers optimizing fulfillment",
            "Supply chain planners managing complex distribution networks",
            "Quality assurance managers in regulated industries",
            "Operations managers driving warehouse efficiency improvements"
        ]
    },
    {
        icon: "GraduationCap",
        title: "Fresh Graduates & Career Changers",
        description: [
            "Engineering or MBA graduates targeting SAP careers",
            "Supply Chain Management graduates",
            "Business analysts aiming for warehouse consulting roles",
            "IT professionals pivoting into enterprise software",
            "Career changers with strong foundational skills in operations"
        ]
    },
    {
        icon: "Users",
        title: "Existing Employees of SAP EWM Customers",
        description: [
            "Employees at organizations implementing or using SAP EWM",
            "Super-users wanting to become power users and train others",
            "IT teams managing SAP EWM in their organizations",
            "Business analysts supporting warehouse processes"
        ]
    }
];

export const ewmPrerequisites = {
    minimum: [
        "Basic understanding of warehouse operations and inventory management",
        "Familiarity with supply chain concepts (procurement, distribution, fulfillment)",
        "Comfortable with web applications and business software",
        "Ability to learn independently and ask clarifying questions",
        "Basic knowledge of ERP systems (any module)"
    ],
    nicetohave: [
        "Prior SAP experience (any module: MM, SD, TM, FICO)",
        "Warehouse or logistics work experience",
        "Exposure to enterprise software or cloud platforms",
        "Excel skills for data analysis",
        "Understanding of warehouse terminology and operations"
    ]
};

export const ewmLearningOutcomes = [
    {
        title: "End-to-End Warehouse Operations Management",
        description: "Configure and manage complete warehouse planning and execution cycles.",
        icon: "Layout",
        points: [
            "Execute goods receipt, goods issue, and inventory movement workflows",
            "Implement warehouse strategies across different operational models (1PL, 3PL, 4PL)",
            "Manage cost control and process optimization for warehouse operations",
            "Ensure compliance with warehouse safety and regulatory requirements"
        ]
    },
    {
        title: "Inbound and Outbound Process Excellence",
        description: "Create and manage goods receipt processes from multiple suppliers.",
        icon: "Truck",
        points: [
            "Configure quality inspection and alternate placement workflows",
            "Execute outbound picking, packing, and shipping operations",
            "Implement advanced picking strategies (batch, cluster, zone, serial)",
            "Manage returns and defective goods handling"
        ]
    },
    {
        title: "Wave Planning and Work Center Optimization",
        description: "Design and execute warehouse waves with resource constraints.",
        icon: "Zap",
        points: [
            "Configure and optimize work centers for different warehouse tasks",
            "Implement labor-efficient picking and packing strategies",
            "Monitor and improve warehouse productivity metrics",
            "Manage RF operations and task routing"
        ]
    },
    {
        title: "Inventory Management and Accuracy",
        description: "Design and execute physical inventory processes.",
        icon: "Package",
        points: [
            "Perform cycle counting and inventory adjustments",
            "Configure bin allocation and putaway strategies",
            "Manage goods movements between storage locations",
            "Ensure inventory accuracy and reconciliation"
        ]
    },
    {
        title: "Technical Master Data and S/4HANA Integration", // Combined
        description: "Manage warehouse organizational hierarchy and integrate with S/4HANA.",
        icon: "Database",
        points: [
            "Configure storage locations, zones, aisles, and bins",
            "Maintain material warehouse data and attributes",
            "Integrate SAP EWM with SAP S/4HANA core modules (SD, MM, PP)",
            "Manage real-time data flow between systems"
        ]
    },
    {
        title: "RF Operations and Mobile Warehouse Management",
        description: "Configure Radio Frequency (RF) devices and operations.",
        icon: "MonitorSmartphone",
        points: [
            "Set up RF transactions for goods receipt, picking, and packing",
            "Implement RF routing and work queues",
            "Manage mobile warehouse applications",
            "Optimize RF performance and user adoption"
        ]
    },
    {
        title: "Analytics, Reporting and Continuous Improvement",
        description: "Create custom dashboards for warehouse performance monitoring.",
        icon: "BarChart",
        points: [
            "Build KPI reports and scorecards for management",
            "Analyze warehouse productivity and efficiency trends",
            "Identify cost optimization opportunities",
            "Implement continuous improvement initiatives"
        ]
    }
];

export const ewmRealWorldScenarios = [
    {
        title: "Global E-Commerce Fulfillment Center Optimization",
        description: "A rapidly growing e-commerce company with 5+ fulfillment centers needs SAP EWM to handle 1,000+ orders daily with 99.5% accuracy.",
        role: "Lead SAP EWM Consultant",
        outcome: "35% reduction in order cycle time, 99.7% order accuracy, 40% improvement in labor productivity, 25% reduction in warehouse operational costs.",
        responsibilities: [
            "Design warehouse organizational structures for high-volume e-commerce",
            "Configure advanced picking strategies (batch, cluster, zone)",
            "Set up wave management for 24x7 fulfillment operations",
            "Implement RF operations for real-time tracking",
            "Configure cross-docking for third-party seller fulfillment",
            "Create KPI dashboards for warehouse performance"
        ]
    },
    {
        title: "Pharmaceutical Company's Regulated Warehouse Implementation",
        description: "A pharmaceutical manufacturer needs SAP EWM to maintain cold chain integrity, track serialization data, and ensure regulatory compliance (GDP, DSCSA).",
        role: "SAP EWM Consultant",
        outcome: "100% regulatory compliance, zero temperature deviations, complete serialization tracking, 95% first-pass audit success.",
        responsibilities: [
            "Design warehouse structures with segregation zones",
            "Configure quality inspection workflows with lot and expiry tracking",
            "Implement serialization tracking throughout warehouse processes",
            "Set up compliance documentation and audit trails",
            "Design cold chain monitoring and temperature deviation alerts",
            "Configure returns management with regulatory reporting"
        ]
    },
    {
        title: "Manufacturing Company's Supply Chain Integration",
        description: "A manufacturing company with 20+ distribution warehouses needs SAP EWM integrated with production planning to optimize inbound raw materials and outbound finished goods.",
        role: "Solution Architect",
        outcome: "45% reduction in warehouse lead times, 50% reduction in safety stock, 30% improvement in on-time delivery.",
        responsibilities: [
            "Design warehouse networks optimized for manufacturing supply chain",
            "Configure inbound processes for raw material receiving",
            "Set up outbound processes linked to production schedules",
            "Implement putaway and picking strategies based on ABC analysis",
            "Configure wave management synchronized with production cycles",
            "Set up supply-demand visibility across warehouses"
        ]
    },
    {
        title: "Third-Party Logistics Provider's Multi-Client EWM Setup",
        description: "A 3PL provider managing warehouse operations for 30+ clients needs SAP EWM to handle multi-tenant operations and client-specific configurations.",
        role: "Senior Consultant",
        outcome: "Support for 50+ concurrent clients, 99.2% order accuracy, 40% improvement in space utilization, enhanced client retention.",
        responsibilities: [
            "Design multi-tenant warehouse organizational structures",
            "Configure client-specific picking, packing, and shipping rules",
            "Set up separate inventory and financial tracking per client",
            "Implement client-facing portals for shipment visibility",
            "Configure automated billing and settlement processes",
            "Design performance metrics by client and warehouse"
        ]
    }
];

export const ewmContent = {
    price: "Competitive",
    duration: "35-40 Hours",
    syllabusUrl: "/syllabus/ERPVITS Syllabus - Course Contents Pdf/SAP Functional/sap-ewm.pdf",
    heroHeading: "Master Modern Warehouse Operations with the #1 SAP EWM Online Training Program",
    heroSubheading: "The SAP Extended Warehouse Management Online Training Program from ERPVITS represents a transformative learning pathway for professionals eager to excel in warehouse optimization, inventory management, and advanced logistics operations. In today's hyper-competitive business landscape, organizations urgently need certified SAP EWM experts who can streamline warehouse processes, reduce operational costs, enhance order fulfillment accuracy, and drive supply chain efficiency through intelligent automation. This comprehensive SAP EWM training course combines interactive, instructor-led sessions, hands-on lab exercises, real-time industry projects, warehouse automation simulations, and end-to-end certification support—designed specifically for warehouse managers, logistics professionals, SAP consultants, supply chain specialists, ERP implementers, and ambitious graduates targeting global consulting and implementation roles.",

    title: "SAP EWM",
    description: "The SAP Extended Warehouse Management Online Training Program from ERPVITS offers a transformative learning pathway for professionals to excel in warehouse optimization, inventory management, and logistics.",
    badges: ["Rated #1 SAP EWM Training Program 2025"],
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
    metaTitle: "SAP EWM Training Online – Warehouse Management Course",
    metaDescription: "Advance your logistics career with SAP EWM training covering warehouse automation, order fulfillment, and S/4HANA integration. Get certification support.",

    features: [],
    sections: [
        {
            type: 'detailed_features',
            title: "Learn SAP EWM from Certified Experts – 100% Hands-On, Job-Oriented Training",
            subtitle: "Our SAP Extended Warehouse Management Online Training is delivered exclusively by certified SAP professionals with 12+ years of direct implementation experience in warehouse operations, logistics networks, and advanced inventory management. Unlike passive video courses or self-paced modules, you receive interactive, real-time instruction where instructors share proven methodologies, address your specific questions, and guide you through complex warehouse scenarios step-by-step.",
            badge: "Why Choose Us",
            items: [
                {
                    title: "Certified Instructor Expertise",
                    description: "Each trainer holds official SAP certifications and has successfully led multiple enterprise-scale SAP EWM implementations across manufacturing, retail, e-commerce, pharmaceutical, and third-party logistics provider industries. They don't just teach theory; they share real-world war stories, common pitfalls encountered during warehouse go-lives, and industry best practices from actual client deployments managing millions of pallets annually. This real-world perspective is invaluable when you enter your first SAP EWM consulting engagement optimizing warehouse networks."
                },
                {
                    title: "100% Hands-On Learning Methodology",
                    description: "Traditional training teaches SAP EWM concepts through slides and presentations. Our program goes further. Every session includes live demonstrations directly on SAP EWM systems, followed by guided lab exercises where you replicate what you've learned. By the end of the course, you've configured warehouse structures, managed inbound and outbound processes, executed picking and packing operations, handled goods movements, integrated with other modules, and executed supply chain collaboration workflows—all on real systems."
                },
                {
                    title: "Job-Oriented Curriculum Design",
                    description: "The course curriculum is not academic—it's designed around the exact skills, responsibilities, and problem-solving scenarios you'll face as an SAP EWM consultant. Whether you're implementing warehouse automation strategies, configuring advanced picking strategies, or troubleshooting S/4HANA integration issues, the training ensures you're equipped with practical answers."
                },
                {
                    title: "Interactive Q&A Sessions",
                    description: "Beyond the main classroom instruction, you have dedicated Q&A forums and live office hours where instructors address your doubts, clarify complex topics like RF/Putaway strategy optimization and wave management processes, and provide personalized guidance tailored to your learning pace and career goals."
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
                    title: "Placement & Career Support",
                    description: "Learning SAP EWM is only half the journey—getting placed is the goal. Our dedicated career support team helps you build an impactful SAP EWM-focused resume, prepare through mock interviews, and practice with real-world interview questions from recent hiring trends in warehouse and logistics sectors. You'll also receive guidance on how to present project experience effectively to stand out in SAP EWM job interviews."
                },
                {
                    title: "Active Alumni Network & Community Forum",
                    description: "Join a thriving community of SAP EWM professionals. Exchange tips, share warehouse optimization strategies, discuss wave planning scenarios, ask questions, and build professional relationships that can lead to referrals and collaborations."
                },
                {
                    title: "Ongoing Support Post-Training",
                    description: "Your learning journey doesn't end with SAP EWM course completion. For six months after training, you'll continue to receive instructor guidance—whether you need help clarifying concepts, troubleshooting real-world project challenges, or seeking advice during your first consulting engagements managing warehouse operations."
                }
            ]
        },
        {
            type: 'content_with_image',
            title: "Why Professionals Choose ERPVITS for SAP EWM Online Training",
            subtitle: "Complete Support Ecosystem",
            description: "ERPVITS has established itself as a trusted training partner for SAP Modules, with hundreds of successful learners working at top consulting firms like Accenture, Capgemini, Deloitte, Infosys, and Wipro, as well as leading logistics and e-commerce companies like Amazon, Flipkart, DHL, and Blue Yonder. Our alumni network testimonials speak to the quality of instruction and the career acceleration our program delivers.\n\nFrom pre-evaluation to post-training support, we guide you through every step of your SAP EWM learning journey and career transition.",
            items: [
                "Trusted by 500+ successful SAP professionals",
                "Alumni at Accenture, Capgemini, Deloitte, Infosys, Wipro, and leading logistics organizations",
                "Personalized pre-evaluation and learning path customization",
                "Active alumni network and community forum for warehouse professionals",
                "70+ guided lab exercises from basic to advanced warehouse management scenarios",
                "Quarterly updated materials aligned with latest SAP EWM releases and S/4HANA updates",
                "Mock interviews simulating real consultant scenarios in warehouse operations",
                "Dedicated certification prep week before exams"
            ]
        },
        {
            type: 'whats_included',
            title: "What's Included in the SAP EWM Training – Complete Learning Package",
            description: "A complete, career-focused SAP Extended Warehouse Management training program combining live expert sessions, real-world projects, hands-on labs, certification preparation, and ongoing career support to help you become a job-ready SAP EWM consultant.",
            features: [
                {
                    title: "Live Interactive Classes",
                    description: "50–60 hours of instructor-led sessions over 10–14 weeks via live video conferencing with real-time Q&A and interactive discussions on warehouse planning, optimization, and execution scenarios."
                },
                {
                    title: "Real-World Projects",
                    description: "Work on Fortune 500-inspired case studies covering warehouse network design, inbound and outbound processing, wave management, picking strategy optimization, and S/4HANA integration."
                },
                {
                    title: "Hands-On Lab Environment",
                    description: "Get full-time access to SAP EWM systems to practice warehouse master data setup, goods receipt, goods issue, picking and packing operations, bin management, and goods movement workflows."
                },
                {
                    title: "Certification Exam Prep",
                    description: "Prepare for SAP Certified Application Associate – Warehouse Management in SAP S/4HANA (C_S4EWM_2023) certification with study guides, practice exams, and focused bootcamp sessions."
                },
                {
                    title: "Resume & Interview Coaching",
                    description: "Receive personalized resume optimization, mock consulting interviews, and guidance for SAP EWM technical interviews focusing on warehouse operations and logistics topics."
                },
                {
                    title: "Complete Study Materials",
                    description: "Access PDFs, presentations, configuration checklists, interview question banks, warehouse management templates, and official SAP documentation links."
                },
                {
                    title: "Lifetime Recording Access",
                    description: "All live sessions are recorded, transcribed, and indexed for lifetime access and easy topic revision on warehouse operations and management."
                },
                {
                    title: "Expert Q&A Sessions",
                    description: "Join weekly 60-minute live Q&A discussions for concept clarification, warehouse project guidance, and career mentoring from experienced EWM consultants."
                }
            ],
            stats: [
                { value: "50-60", label: "Hours of Live Training", color: "orange" },
                { value: "70+", label: "Hands-On Lab Exercises", color: "orange" },
                { value: "24/7", label: "SAP EWM Lab Access", color: "orange" }
            ]
        },
        {
            type: 'detailed_curriculum',
            title: "Comprehensive SAP EWM Course Curriculum",
            modules: [
                {
                    title: "Module 1: Introduction to SAP EWM and Warehouse Operations",
                    duration: "5 Hours",
                    learning_points: [
                        "Overview of SAP EWM and its role in logistics",
                        "Key features: automation, accuracy, cost reduction, visibility",
                        "User interface navigation and system architecture",
                        "Warehouse organization structures and planning zones",
                        "Warehouse types and operational models (1PL, 3PL, 4PL)",
                        "Basic system setup and organizational hierarchy"
                    ],
                    hands_on: [
                        "Navigate SAP EWM Fiori interface",
                        "Explore warehouse organization master data",
                        "Understand bin and storage area concepts",
                        "Create basic warehouse configurations"
                    ]
                },
                {
                    title: "Module 2: Warehouse Master Data Management (MDM)",
                    duration: "7 Hours",
                    learning_points: [
                        "Role of MDM in warehouse operations",
                        "Warehouse organizational structures and hierarchy",
                        "Storage locations, zones, aisles, and bins configuration",
                        "Material master data with warehouse-specific attributes",
                        "Bin types and storage strategies",
                        "Resource master data: equipment, personnel, dock doors"
                    ],
                    hands_on: [
                        "Create warehouse organizational structures",
                        "Configure storage locations and zones",
                        "Set up bin hierarchies and bin types",
                        "Maintain material warehouse data"
                    ]
                },
                {
                    title: "Module 3: Inbound Processing and Goods Receipt",
                    duration: "8 Hours",
                    learning_points: [
                        "Purchase order integration from SAP S/4HANA",
                        "Goods receipt process and workflows",
                        "RF (Radio Frequency) operations for goods receipt",
                        "Quality inspection and alternate bin placement",
                        "Returns and defective goods handling",
                        "Inbound document management and exception handling"
                    ],
                    hands_on: [
                        "Create and manage purchase orders",
                        "Execute goods receipt transactions",
                        "Perform RF-based goods receipt operations",
                        "Handle quality inspections and deviations"
                    ]
                },
                {
                    title: "Module 4: Outbound Processing and Picking Strategies",
                    duration: "9 Hours",
                    learning_points: [
                        "Sales order integration from SAP S/4HANA",
                        "Picking strategies: serial, batch, cluster, zone",
                        "Wave planning and release management",
                        "RF operations for picking and packing",
                        "Packing and shipment preparation",
                        "Outbound document management and parcel tracking"
                    ],
                    hands_on: [
                        "Create sales orders with warehouse picking requirements",
                        "Configure and execute different picking strategies",
                        "Create and manage picking waves",
                        "Perform RF-based picking and packing operations"
                    ]
                },
                {
                    title: "Module 5: Warehouse Inventory Management",
                    duration: "6 Hours",
                    learning_points: [
                        "Physical inventory process and cycle counting",
                        "Inventory adjustments and corrections",
                        "Stock movement within the warehouse",
                        "Bin allocation strategies and putaway rules",
                        "Goods movements: inter-bin, inter-zone, inter-warehouse",
                        "Inventory accuracy and reconciliation processes"
                    ],
                    hands_on: [
                        "Create and execute physical inventory",
                        "Perform cycle counting operations",
                        "Execute goods movements between bins",
                        "Configure putaway strategies"
                    ]
                },
                {
                    title: "Module 6: Wave Management and Work Centers",
                    duration: "7 Hours",
                    learning_points: [
                        "Wave creation, planning, and release strategies",
                        "Work center configuration and resource allocation",
                        "Labor management and productivity metrics",
                        "RF routing and work queue management",
                        "Task list management and task sequencing",
                        "Wave analysis and optimization techniques"
                    ],
                    hands_on: [
                        "Create and manage warehouse waves",
                        "Configure work centers and resource assignments",
                        "Set up RF routing for different warehouse roles",
                        "Monitor work queue and task execution"
                    ]
                },
                {
                    title: "Module 7: Advanced Warehouse Processes",
                    duration: "6 Hours",
                    learning_points: [
                        "Automated Storage and Retrieval Systems (ASRS) integration",
                        "Cross-docking operations and through-put handling",
                        "Consolidation strategies for shipments",
                        "Kitting and de-kitting processes",
                        "Returns management and reverse logistics",
                        "Hazmat and dangerous goods handling"
                    ],
                    hands_on: [
                        "Configure ASRS integration scenarios",
                        "Execute cross-docking processes",
                        "Perform kitting and consolidation operations",
                        "Manage returns and reverse logistics workflows"
                    ]
                },
                {
                    title: "Module 8: SAP S/4HANA Integration and Connectivity",
                    duration: "6 Hours",
                    learning_points: [
                        "Integration points between EWM and S/4HANA core modules",
                        "Real-time data synchronization mechanisms",
                        "Order management integration (Sales & Purchasing)",
                        "Accounting integration and financial impact",
                        "Quality management integration",
                        "Forecasting and demand planning integration"
                    ],
                    hands_on: [
                        "Configure order-to-warehouse integration",
                        "Set up real-time synchronization workflows",
                        "Execute end-to-end processes with S/4HANA",
                        "Validate accounting postings"
                    ]
                },
                {
                    title: "Module 9: Warehouse Analytics, Reporting & Performance Management",
                    duration: "5 Hours",
                    learning_points: [
                        "Key Performance Indicators (KPIs) in warehouse operations",
                        "Dashboard creation and real-time monitoring",
                        "Reporting tools and query techniques",
                        "Warehouse productivity analysis",
                        "Cost analysis and optimization opportunities",
                        "Benchmarking and continuous improvement"
                    ],
                    hands_on: [
                        "Create custom dashboards and reports",
                        "Monitor warehouse performance KPIs",
                        "Analyze productivity trends",
                        "Generate cost analysis reports"
                    ]
                },
                {
                    title: "Module 10: Advanced Topics, Best Practices & Troubleshooting",
                    duration: "6 Hours",
                    learning_points: [
                        "Cloud deployment options for SAP EWM",
                        "Performance tuning and system optimization",
                        "Troubleshooting common warehouse issues",
                        "Change management and user adoption strategies",
                        "Industry best practices from implementations",
                        "Future trends: AI, IoT, and automation"
                    ],
                    hands_on: [
                        "Configure advanced optimization scenarios",
                        "Set up performance monitoring frameworks",
                        "Practice troubleshooting scenarios",
                        "Develop change management plans"
                    ]
                }
            ]
        },
        {
            type: 'detailed_target_audience',
            items: ewmTargetAudience
        },
        {
            type: 'detailed_prerequisites',
            items: ewmPrerequisites
        },
        {
            type: 'detailed_learning_outcomes',
            title: "What You'll Master in This Course",
            subtitle: "Comprehensive competencies you'll acquire to excel as a professional",
            items: {
                tabs: [
                    {
                        name: "Functional Mastery",
                        items: [
                            {
                                title: "End-to-End Warehouse Operations Management",
                                icon: "Building",
                                points: [
                                    "Execute goods receipt, goods issue, and inventory movement workflows",
                                    "Implement warehouse strategies across different operational models (1PL, 3PL, 4PL)",
                                    "Manage cost control and process optimization for warehouse operations",
                                    "Ensure compliance with warehouse safety and regulatory requirements"
                                ]
                            },
                            {
                                title: "Inbound and Outbound Process Excellence",
                                icon: "Layout",
                                points: [
                                    "Configure quality inspection and alternate placement workflows",
                                    "Execute outbound picking, packing, and shipping operations",
                                    "Implement advanced picking strategies (batch, cluster, zone, serial)",
                                    "Manage returns and defective goods handling"
                                ]
                            },
                            {
                                title: "Wave Planning and Work Center Optimization",
                                icon: "Activity",
                                points: [
                                    "Configure and optimize work centers for different warehouse tasks",
                                    "Implement labor-efficient picking and packing strategies",
                                    "Monitor and improve warehouse productivity metrics",
                                    "Manage RF operations and task routing"
                                ]
                            },
                            {
                                title: "Inventory Management and Accuracy",
                                icon: "ClipboardCheck",
                                points: [
                                    "Perform cycle counting and inventory adjustments",
                                    "Configure bin allocation and putaway strategies",
                                    "Manage goods movements between storage locations",
                                    "Ensure inventory accuracy and reconciliation"
                                ]
                            }
                        ]
                    },
                    {
                        name: "Technical Skills",
                        items: [
                            {
                                title: "Technical Master Data and S/4HANA Integration",
                                icon: "Database",
                                points: [
                                    "Configure storage locations, zones, aisles, and bins",
                                    "Maintain material warehouse data and attributes",
                                    "Integrate SAP EWM with SAP S/4HANA core modules (SD, MM, PP)",
                                    "Manage real-time data flow between systems"
                                ]
                            },
                            {
                                title: "RF Operations and Mobile Warehouse Management",
                                icon: "Smartphone",
                                points: [
                                    "Set up RF transactions for goods receipt, picking, and packing",
                                    "Implement RF routing and work queues",
                                    "Manage mobile warehouse applications",
                                    "Optimize RF performance and user adoption"
                                ]
                            },
                            {
                                title: "Analytics, Reporting and Continuous Improvement",
                                icon: "BarChart3",
                                points: [
                                    "Build KPI reports and scorecards for management",
                                    "Analyze warehouse productivity and efficiency trends",
                                    "Identify cost optimization opportunities",
                                    "Implement continuous improvement initiatives"
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            type: 'real_world_scenarios',
            items: ewmRealWorldScenarios
        },
        {
            type: 'detailed_certification',
            title: "SAP EWM Certification – Your Global Career Credential",
            imageSrc: "/images/ERPVITS - All Modules Infographics/ERPVITS - SAP EWM Infographic.webp",
            items: [
                {
                    title: "SAP Certified Application Associate – Warehouse Management in SAP S/4HANA",
                    code: "C_S4EWM_2023",
                    focus: "Warehouse Management Overview (20-30%), Inbound/Outbound Processing (20-30%), Picking (20-30%), Inventory Management (10-20%), Labor Management (≤10%), S/4HANA Integration (≤10%), Advanced Warehouse Operations (≤10%).",
                    who: "Exam Details: 180 Mins | 80 Questions | 61% Passing Score. Value: Demonstrates expertise in SAP EWM configuration, warehouse operations, and S/4HANA integration.",
                    relevance: "Entry to mid-level consultant positions, warehouse coordinator roles, logistics management opportunities"
                }
            ],
            supportFeatures: [
                {
                    title: "Targeted Exam Preparation",
                    subtitle: "Study guides aligned to official exam blueprints with focus on real-world warehouse scenarios"
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
                    title: "Retake Support",
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
                    desc: "Certified professionals command 15-30% higher salaries over non-certified peers"
                },
                {
                    title: "Competitive Advantage",
                    desc: "Stand out in job applications, consulting proposals, and warehouse management roles"
                },
                {
                    title: "Continuous Learning",
                    desc: "Certification pushes you to master the platform thoroughly, ensuring job-ready expertise"
                },
                {
                    title: "Professional Credibility",
                    desc: "Signals to clients and employers that you've met rigorous standards set by SAP"
                }
            ]
        },
        {
            type: 'detailed_career_opportunities',
            items: [
                {
                    title: "SAP EWM Consultant (Entry Level)",
                    salary: "$99,960 - $119,150",
                    responsibilities: "Configure warehouse processes, manage goods movements, ensure data accuracy.",
                    employers: "Accenture, Capgemini, Deloitte, Amazon, DHL",
                    path: "2-3 years -> Mid-level Consultant",
                    icon: "Briefcase",
                    color: "blue"
                },
                {
                    title: "Warehouse Operations Consultant",
                    salary: "$85,000 - $115,000",
                    responsibilities: "Lead EWM implementations, manage configurations, optimize fulfillment processes.",
                    employers: "E-commerce, Manufacturing, Retail, Pharma",
                    path: "3-4 years -> Senior Operations Consultant",
                    icon: "Settings",
                    color: "green"
                },
                {
                    title: "Warehouse Analyst",
                    salary: "$80,000 - $110,000",
                    responsibilities: "Analyze performance data, identify optimization opportunities, configure picking strategies.",
                    employers: "Consulting, E-commerce, 3PL",
                    path: "3-5 years -> Warehouse Manager",
                    icon: "TrendingUp",
                    color: "orange"
                },
                {
                    title: "Supply Chain Consultant",
                    salary: "$95,000 - $130,000",
                    responsibilities: "Design warehouse solutions, configure end-to-end processes, drive optimization.",
                    employers: "Global Consulting Firms, Enterprise Companies",
                    path: "4-6 years -> Senior Consultant",
                    icon: "Users",
                    color: "purple"
                },
                {
                    title: "SAP EWM Consultant",
                    salary: "$115,000 - $160,000",
                    responsibilities: "Design enterprise warehouse solutions, lead implementation programs, drive innovation.",
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
                "Amazon", "Flipkart", "DHL", "Blue Yonder", "Fedex",
                "Volkswagen", "P&G", "Walmart", "Samsung", "Siemens"
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
                    seatsFilled: 3
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
                    role: "SAP EWM Consultant at Capgemini",
                    quote: "Outstanding training with crystal-clear explanations. I landed a consulting role at Capgemini within 12 weeks of completing the course."
                },
                {
                    name: "Rajesh Kumar",
                    role: "Warehouse Operations Manager",
                    quote: "The weekend flexibility allowed me to learn while managing a warehouse. My employer promoted me to Warehouse Operations Manager."
                },
                {
                    name: "Amit Patel",
                    role: "Senior SAP EWM Consultant",
                    quote: "Best investment in my career. The capstone projects were exactly like real warehouse implementations. The certification support was exceptional."
                },
                {
                    name: "Sneha Reddy",
                    role: "Certified SAP EWM Professional",
                    quote: "Superb certification preparation. I passed the C_S4EWM_2023 exam on my first attempt with 82%. Highly recommended!"
                }
            ]
        },
        {
            type: 'detailed_demo_booking',
            title: "Ready to Become an SAP EWM Consultant?",
            subtitle: "Book your free demo today and take the first step towards a lucrative SAP EWM warehouse management career",
            benefits: [
                { title: "Live Session Insight", desc: "Observe real SAP EWM training and instructor methodology" },
                { title: "Career Consultation", desc: "Personalized guidance based on your logistics background" },
                { title: "Instructor Q&A", desc: "Ask questions about SAP EWM course, certification, and career" },
                { title: "Special Offer", desc: "Exclusive discount for demo attendees" }
            ]
        },
        {
            type: 'detailed_faq',
            items: [
                {
                    q: "What is SAP EWM and how does ERPVITS help me learn it?",
                    a: "SAP Extended Warehouse Management (SAP EWM) is a powerful solution for warehouse operations. ERPVITS provides comprehensive training covering real-time business scenarios, hands-on practice, and guided projects."
                },
                {
                    q: "What will I learn in the SAP EWM module?",
                    a: "You will learn warehouse operations, inbound/outbound processes, picking strategies, wave management, RF operations, and performance monitoring."
                },
                {
                    q: "What is Picking Strategy in SAP EWM?",
                    a: "Picking strategies determine how orders are picked. We cover serial, batch, cluster, and zone picking with hands-on practice."
                },
                {
                    q: "How does SAP EWM support warehouse optimization?",
                    a: "It automates picking, reduces labor costs, improves accuracy, and provides real-time visibility through features like wave management."
                },
                {
                    q: "Does ERPVITS provide placement support?",
                    a: "Yes, we provide 100% placement assistance including resume building, mock interviews, and job referrals."
                }
            ]
        }
    ]
};
