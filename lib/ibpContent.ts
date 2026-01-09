import { Briefcase, Building2, TrendingUp, Users, Settings, BarChart, LineChart, PieChart, Globe, DollarSign, Brain, Target, ShieldCheck, Clock, Zap, MessageSquare } from 'lucide-react';

export const ibpTargetAudience = [
    {
        icon: "TrendingUp",
        title: "Supply Chain & Planning Professionals",
        description: [
            "Demand planners seeking advanced forecasting expertise",
            "Supply planners targeting consultant-level skills",
            "S&OP managers aiming to optimize planning processes",
            "Inventory planners wanting to master network optimization",
            "Supply chain managers transitioning to consulting"
        ]
    },
    {
        icon: "Database",
        title: "SAP & ERP Professionals",
        description: [
            "SAP consultants from MM, SD, DP, PP modules seeking specialization",
            "ERP system administrators expanding into planning domain",
            "SAP architects designing enterprise planning solutions",
            "Technical consultants supporting SAP implementations",
            "Business analysts interested in supply chain planning"
        ]
    },
    {
        icon: "PieChart",
        title: "Finance & Business Planning Professionals",
        description: [
            "Financial planners wanting supply chain integration expertise",
            "Business analysts focusing on supply chain optimization",
            "Cost managers seeking planning expertise",
            "Revenue managers interested in integrated planning",
            "Strategy professionals supporting supply chain transformation"
        ]
    },
    {
        icon: "GraduationCap",
        title: "Fresh Graduates & Career Changers",
        description: [
            "MBA graduates (especially Operations/Supply Chain focus)",
            "Engineering graduates targeting SAP careers",
            "Business analysts aiming for supply chain consulting roles",
            "IT professionals pivoting into enterprise software",
            "Career changers with strong analytical and business acumen"
        ]
    },
    {
        icon: "Building2",
        title: "Existing Employees of SAP IBP Customers",
        description: [
            "Employees at organizations implementing or using SAP IBP",
            "Power users wanting to become certified consultants",
            "IT teams managing SAP IBP in their organizations",
            "Business analysts supporting planning processes"
        ]
    }
];

export const ibpPrerequisites = {
    minimum: [
        "Basic understanding of supply chain concepts (demand, supply, inventory)",
        "Familiarity with business planning and forecasting concepts",
        "Comfortable with spreadsheets and data analysis",
        "Ability to learn independently and ask clarifying questions",
        "Basic knowledge of ERP systems (preferably SAP S/4HANA)"
    ],
    nicetohave: [
        "Prior SAP experience (any module: MM, SD, PP, FICO)",
        "Supply chain or demand planning work experience",
        "Exposure to statistical forecasting or analytics",
        "Excel/Power BI skills for reporting",
        "Understanding of S&OP and planning processes"
    ]
};

export const ibpLearningOutcomes = [
    {
        title: "End-to-End Integrated Business Planning",
        description: "Align sales, marketing, finance, and supply chain through IBP.",
        icon: "Globe",
        points: [
            "Configure and execute complete demand, supply, and finance planning cycles",
            "Implement integrated planning strategies across the organization",
            "Execute multi-scenario planning and what-if analysis",
            "Optimize business outcomes through integrated decision-making"
        ]
    },
    {
        title: "Demand Planning and Forecasting Excellence",
        description: "Design and implement demand forecasting strategies.",
        icon: "LineChart",
        points: [
            "Configure statistical forecasting models and techniques",
            "Incorporate promotional and seasonal factors in forecasts",
            "Perform demand sensing and real-time updates",
            "Manage forecast accuracy and variance analysis"
        ]
    },
    {
        title: "Supply Planning and Optimization",
        description: "Design supply chain strategies and network optimization.",
        icon: "Settings",
        points: [
            "Configure production and procurement planning rules",
            "Implement safety stock optimization algorithms",
            "Execute constraint-based planning with multiple constraints",
            "Perform supply-demand balancing and matching"
        ]
    },
    {
        title: "Inventory and Network Optimization",
        description: "Configure inventory optimization strategies across network.",
        icon: "Box",
        points: [
            "Implement multi-echelon inventory management",
            "Optimize service levels and stock availability",
            "Execute inventory level planning and allocation",
            "Manage inventory aging and obsolescence"
        ]
    },
    {
        title: "Finance-Integrated Planning",
        description: "Integrate financial data into planning processes.",
        icon: "DollarSign",
        points: [
            "Configure cost-based planning and profitability analysis",
            "Execute revenue planning and budget management",
            "Perform working capital impact analysis",
            "Monitor financial KPIs integrated with supply chain"
        ]
    },
    {
        title: "Advanced Analytics and Optimization",
        description: "Implement machine learning and AI-based forecasting.",
        icon: "Brain",
        points: [
            "Configure advanced optimization algorithms",
            "Perform predictive analytics on supply chain",
            "Create advanced dashboards and KPI monitoring",
            "Execute real-time planning and rapid response scenarios"
        ]
    }
];

export const ibpRealWorldScenarios = [
    {
        title: "Consumer Goods Company's S&OP Transformation",
        description: "A global consumer goods manufacturer needs SAP IBP to transform fragmented planning processes, promising to improve demand forecast accuracy to 95%.",
        role: "Lead SAP IBP Consultant",
        outcome: "95%+ forecast accuracy, 22% inventory reduction, 98% on-shelf availability, $50M+ value realization.",
        responsibilities: [
            "Design integrated S&OP process spanning demand, supply, and finance",
            "Configure demand forecasting models with promotional calendar",
            "Set up supply planning with production constraints",
            "Implement inventory optimization across network",
            "Create financial integration for profitability analysis",
            "Configure executive dashboards for S&OP governance"
        ]
    },
    {
        title: "Retail Company's Demand Sensing and Real-Time Planning",
        description: "A fast-fashion retail company needs SAP IBP to sense real-time demand from POS data and adjust production/procurement.",
        role: "SAP IBP Consultant",
        outcome: "92% forecast accuracy, 25% markdown reduction, 30% reduction in excess inventory, faster response to trends.",
        responsibilities: [
            "Integrate real-time POS data into demand planning",
            "Configure statistical forecasting with machine learning",
            "Set up demand sensing and rapid response",
            "Implement inventory optimization for fashion seasonality",
            "Configure supply chain collaboration with manufacturers",
            "Create real-time dashboards for visibility"
        ]
    },
    {
        title: "Manufacturing Company's Production Optimization",
        description: "A discrete manufacturing company needs SAP IBP to optimize production planning, manage capacity constraints, and minimize delays.",
        role: "Supply Chain Consultant",
        outcome: "On-time delivery improved to 98%, 30% lead time reduction, 15% inventory reduction, 50% faster planning cycle.",
        responsibilities: [
            "Design demand forecasting with product mix analysis",
            "Configure production planning with capacity constraints",
            "Set up raw material procurement optimization",
            "Implement constraint-based planning algorithms",
            "Configure production-to-delivery visibility",
            "Implement KPI monitoring for on-time delivery"
        ]
    },
    {
        title: "Pharmaceutical Company's Regulatory-Compliant Planning",
        description: "A pharma manufacturer needs SAP IBP to improve forecast accuracy while maintaining compliance and managing expiry-based inventory.",
        role: "Solution Architect",
        outcome: "94% forecast accuracy, 20% reduction in expired inventory, 100% regulatory compliance, 99% schedule adherence.",
        responsibilities: [
            "Design forecasting incorporating regulatory requirements",
            "Configure production planning with batch/lot management",
            "Implement expiry-based inventory management",
            "Set up supply chain collaboration",
            "Design compliance documentation in planning",
            "Create regulatory-ready audit trails"
        ]
    }
];

export const ibpContent = {
    syllabusUrl: "/syllabus/ERPVITS Syllabus - Course Contents Pdf/SAP Functional/sap-ibp.pdf",
    heroHeading: "Transform Your Supply Chain Strategy with the #1 SAP IBP Online Training Program",
    heroSubheading: "Excel in demand planning, supply chain optimization, and data-driven business strategy with expert-led training.",

    title: "SAP IBP",
    description: "The SAP Integrated Business Planning Online Training Program from ERPVITS offers a transformative learning pathway for professionals to excel in demand planning, supply chain optimization, and data-driven strategy.",
    badges: ["Rated #1 SAP IBP Training Program 2025"],
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
    metaTitle: "SAP IBP Training | Integrated Business Planning Course",
    metaDescription: "Master demand planning with SAP IBP training. Learn forecasting, inventory optimization, real projects, hands-on labs, and certification support.",

    features: [],
    sections: [
        {
            type: 'detailed_features',
            title: "Learn SAP IBP from Certified Experts – 100% Hands-On, Job-Oriented Training",
            subtitle: "Delivered exclusively by certified SAP professionals with 12+ years of direct implementation experience in demand planning and supply chain strategy.",
            badge: "Why Choose Us",
            items: [
                {
                    title: "Certified Instructor Expertise",
                    description: "Trainers hold official SAP certifications and have led multiple enterprise-scale SAP IBP implementations."
                },
                {
                    title: "100% Hands-On Learning Methodology",
                    description: "Every session includes live demonstrations and guided lab exercises to configure demand plans and execute simulations."
                },
                {
                    title: "Job-Oriented Curriculum Design",
                    description: "Designed around the exact skills, responsibilities, and problem-solving scenarios faced by SAP IBP consultants."
                },
                {
                    title: "Interactive Q&A Sessions",
                    description: "Dedicated forums and live office hours for addressing doubts and clarifying complex topics like statistical forecasting."
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
                    description: "Resume building, mock interviews, and practice with real-world interview questions from supply chain planning trends."
                },
                {
                    title: "Active Alumni Network",
                    description: "Join a thriving community of SAP IBP professionals to exchange tips and build relationships."
                },
                {
                    title: "Ongoing Support Post-Training",
                    description: "Six months of instructor guidance after training for clarification and project challenges."
                }
            ]
        },
        {
            type: 'content_with_image',
            title: "Why Professionals Choose ERPVITS for SAP IBP Online Training",
            subtitle: "Success Guarantee & Credibility",
            description: "ERPVITS has established itself as a trusted training partner, with hundreds of successful learners working at top consulting firms like Accenture, Capgemini, and Deloitte. Our alumni network testimonials speak to the quality of instruction and career acceleration.",
            items: [
                "Trusted by 500+ successful SAP professionals",
                "Alumni at Accenture, Capgemini, Deloitte, Infosys, Wipro",
                "Personalized pre-evaluation and learning path customization",
                "Active alumni network and community forum",
                "65+ guided lab exercises from basic to advanced planning scenarios",
                "Quarterly updated materials aligned with latest SAP IBP releases",
                "Mock interviews simulating real consultant scenarios",
                "Dedicated certification prep week before exams"
            ]
        },
        {
            type: 'whats_included',
            content: "A complete, career-focused SAP Integrated Business Planning training program combining live expert sessions, real-world projects, hands-on labs, certification preparation, and ongoing career support.",
            stats: [
                { value: "48-56", label: "Hours of Live Training" },
                { value: "65+", label: "Hands-On Lab Exercises" },
                { value: "100%", label: "Placement Support" }
            ]
        },
        {
            type: 'detailed_curriculum',
            title: "Comprehensive SAP IBP Course Curriculum",
            modules: [
                {
                    title: "Module 1: Introduction to SAP IBP and Integrated Planning",
                    duration: "5 Hours",
                    learning_points: [
                        "Overview of SAP IBP and its role in modern supply chain strategy",
                        "Key features: demand forecasting, supply optimization, scenario management",
                        "SAP IBP architecture and system components",
                        "Planning process: demand, supply, finance, and inventory",
                        "User interface navigation and reporting capabilities",
                        "Integration with SAP S/4HANA and other systems"
                    ],
                    hands_on: [
                        "Navigate SAP IBP interface and dashboard environment",
                        "Explore sample demand and supply plans",
                        "Understand KPI dashboards and planning views",
                        "Execute basic planning transactions"
                    ]
                },
                {
                    title: "Module 2: Master Data Management for Planning",
                    duration: "6 Hours",
                    learning_points: [
                        "Role of master data in integrated business planning",
                        "Product master data and classification for planning",
                        "Location and network setup for demand and supply planning",
                        "Customer and supplier master data for planning",
                        "Planning calendar and time series configuration",
                        "Organizational hierarchy for planning"
                    ],
                    hands_on: [
                        "Create and maintain product planning data",
                        "Configure location hierarchies for demand planning",
                        "Set up customer and supplier relationships",
                        "Configure planning calendars and periods"
                    ]
                },
                {
                    title: "Module 3: Demand Planning and Forecasting",
                    duration: "10 Hours",
                    learning_points: [
                        "Demand planning process and methodology",
                        "Statistical forecasting techniques and algorithms",
                        "Causal forecasting and external data integration",
                        "Demand sensing and real-time demand updates",
                        "Promotional planning and seasonal adjustments",
                        "Demand collaboration with sales and marketing teams",
                        "Forecast accuracy metrics and monitoring"
                    ],
                    hands_on: [
                        "Create and execute demand plans",
                        "Configure statistical forecasting models",
                        "Perform manual forecast adjustments",
                        "Analyze forecast accuracy metrics",
                        "Incorporate promotional and seasonal factors"
                    ]
                },
                {
                    title: "Module 4: Supply Planning and Optimization",
                    duration: "10 Hours",
                    learning_points: [
                        "Supply planning process and strategies",
                        "Production and procurement planning",
                        "Safety stock calculation and strategies",
                        "Supply optimization algorithms",
                        "Constraint-based planning (capacity, material, resources)",
                        "Supply chain collaboration",
                        "Exception management and planning alerts"
                    ],
                    hands_on: [
                        "Create and execute supply plans",
                        "Configure production and procurement strategies",
                        "Set up safety stock parameters",
                        "Execute supply optimization",
                        "Manage planning constraints and resources"
                    ]
                },
                {
                    title: "Module 5: Inventory Optimization and Level Planning",
                    duration: "7 Hours",
                    learning_points: [
                        "Inventory optimization strategies and techniques",
                        "Service level planning and stock availability",
                        "Multi-echelon inventory optimization",
                        "Inventory level planning across the network",
                        "Inventory aging and obsolescence management",
                        "Supply-demand matching and balancing",
                        "Inventory KPI monitoring"
                    ],
                    hands_on: [
                        "Configure inventory optimization parameters",
                        "Execute inventory level planning",
                        "Analyze inventory distribution across network",
                        "Optimize service levels"
                    ]
                },
                {
                    title: "Module 6: Finance Integration and Integrated Planning",
                    duration: "8 Hours",
                    learning_points: [
                        "Finance and supply chain integration",
                        "Cost-based planning and profitability analysis",
                        "Revenue planning and management",
                        "Budget allocation and variance analysis",
                        "Working capital impact of supply chain decisions",
                        "Financial KPIs and planning metrics",
                        "Scenario analysis with financial impact"
                    ],
                    hands_on: [
                        "Configure cost elements for planning",
                        "Execute finance-integrated supply planning",
                        "Analyze profitability impacts",
                        "Perform budget allocation exercises"
                    ]
                },
                {
                    title: "Module 7: Scenario Management and Simulation",
                    duration: "6 Hours",
                    learning_points: [
                        "Scenario planning concepts and methodology",
                        "Creating and comparing multiple scenarios",
                        "Sensitivity analysis techniques",
                        "What-if scenario modeling",
                        "Scenario versioning and approval workflows",
                        "Dashboard creation for scenario comparison"
                    ],
                    hands_on: [
                        "Create multiple planning scenarios",
                        "Configure scenario comparison views",
                        "Perform sensitivity analysis",
                        "Execute what-if modeling"
                    ]
                },
                {
                    title: "Module 8: Supply Chain Collaboration and Visibility",
                    duration: "5 Hours",
                    learning_points: [
                        "Collaborative demand and supply planning",
                        "Customer and supplier collaboration portals",
                        "Demand visibility and information sharing",
                        "Supply collaboration for material availability",
                        "Collaborative forecasting and S&OP",
                        "Real-time supply chain visibility"
                    ],
                    hands_on: [
                        "Configure collaboration portals",
                        "Execute customer demand collaboration",
                        "Perform supplier communication workflows",
                        "Manage collaborative forecasting"
                    ]
                },
                {
                    title: "Module 9: SAP IBP Advanced Topics and Analytics",
                    duration: "5 Hours",
                    learning_points: [
                        "Advanced forecasting and AI/ML capabilities",
                        "Predictive analytics for supply chain",
                        "Machine learning models in demand forecasting",
                        "Advanced optimization algorithms",
                        "Cloud integration and data management",
                        "Real-time planning and rapid response"
                    ],
                    hands_on: [
                        "Configure advanced forecasting models",
                        "Implement predictive analytics",
                        "Execute machine learning-based forecasts",
                        "Perform advanced optimization"
                    ]
                },
                {
                    title: "Module 10: S&OP, Transformation and Best Practices",
                    duration: "4 Hours",
                    learning_points: [
                        "Sales and Operations Planning (S&OP) process",
                        "S&OP cycle integration with IBP",
                        "Change management for planning transformations",
                        "Organizational alignment and governance",
                        "KPI frameworks and monitoring",
                        "Industry best practices and case studies"
                    ],
                    hands_on: [
                        "Execute complete S&OP cycle",
                        "Configure S&OP workflows and approvals",
                        "Develop change management plans",
                        "Create governance frameworks"
                    ]
                }
            ]
        },
        {
            type: 'detailed_target_audience',
            items: ibpTargetAudience
        },
        {
            type: 'detailed_prerequisites',
            items: ibpPrerequisites
        },
        {
            type: 'detailed_learning_outcomes',
            items: ibpLearningOutcomes
        },
        {
            type: 'real_world_scenarios',
            items: ibpRealWorldScenarios
        },
        {
            type: 'detailed_certification',
            content: "We Provide Support for SAP Certified Associate – Integrated Business Planning (Exam Code: C_IBPP_2402).",
            imageSrc: "/images/ERPVITS - All Modules Infographics/ERPVITS - SAP IBP Infographic.webp",
            items: [
                {
                    title: "SAP Certified Associate – Integrated Business Planning",
                    code: "(C_IBPP_2402)",
                    focus: "Demand Planning, Supply Planning, Inventory Optimization, Finance Integration.",
                    who: "Supply chain planners, demand planners, S&OP coordinators.",
                    relevance: "Essential for supply chain consulting and planning leadership roles."
                }
            ]
        },
        {
            type: 'detailed_career_opportunities',
            items: [
                {
                    title: "SAP IBP Consultant (Entry Level)",
                    salary: "$105,000 - $125,000",
                    responsibilities: "Configure demand/supply plans, support S&OP implementation, manage forecasting models.",
                    employers: "Accenture, Capgemini, Deloitte, Nestlé, Unilever",
                    path: "2-3 years -> Mid-level Consultant",
                    icon: "Briefcase",
                    color: "blue"
                },
                {
                    title: "Demand Planning Specialist",
                    salary: "$90,000 - $120,000",
                    responsibilities: "Develop demand forecasts, manage S&OP cycle, optimize inventory levels.",
                    employers: "Consumer Goods, Retail, Manufacturing",
                    path: "3-4 years -> Senior Planning Manager",
                    icon: "LineChart",
                    color: "green"
                },
                {
                    title: "Supply Chain Planning Consultant",
                    salary: "$100,000 - $135,000",
                    responsibilities: "Design integrated planning strategies, configure IBP solutions, drive optimization.",
                    employers: "Global Consulting Firms, Enterprise Companies",
                    path: "4-6 years -> Senior Consultant",
                    icon: "TrendingUp",
                    color: "orange"
                },
                {
                    title: "Business Intelligence Specialist",
                    salary: "$95,000 - $130,000",
                    responsibilities: "Build planning dashboards, predictive analytics, forecast models.",
                    employers: "Consulting, Technology, Consumer Goods",
                    path: "3-5 years -> Senior Analytics Manager",
                    icon: "BarChart",
                    color: "purple"
                },
                {
                    title: "SAP IBP Solution Architect",
                    salary: "$120,000 - $170,000",
                    responsibilities: "Design enterprise planning solutions, lead implementation programs, drive innovation.",
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
                "Nestlé", "Unilever", "P&G", "Walmart", "Amazon",
                "Microsoft", "Pfizer", "Siemens", "ABB", "Target"
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
                    role: "SAP IBP Consultant at Deloitte",
                    quote: "Outstanding training. I landed a consulting role within 11 weeks. The S&OP simulation made all the difference in understanding real supply chain planning."
                },
                {
                    name: "Rajesh Kumar",
                    role: "Supply Chain Manager",
                    quote: "My employer was so impressed with my IBP expertise that they promoted me to Supply Chain Manager. This course accelerated my career by 5 years."
                },
                {
                    name: "Amit Patel",
                    role: "Senior IBP Consultant",
                    quote: "Best investment. The capstone projects were exactly like real client work building forecasting models. Certification support was exceptional."
                },
                {
                    name: "Sneha Reddy",
                    role: "Certified SAP IBP Professional",
                    quote: "Superb certification preparation. I passed the C_IBPP_2402 exam on my first attempt with 79%. Highly recommended!"
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
                    q: "What is SAP IBP and how does ERPVITS help me learn it?",
                    a: "SAP Integrated Business Planning (IBP) is a powerful cloud solution for supply chain planning. ERPVITS provides comprehensive training covering real-world business scenarios, hands-on practice, and guided projects."
                },
                {
                    q: "What will I learn in the SAP IBP module?",
                    a: "You will learn demand planning, supply optimization, inventory management, finance integration, scenario analysis, and S&OP cycles."
                },
                {
                    q: "What is Demand Planning in SAP IBP?",
                    a: "It's the process of forecasting customer demand using statistical techniques. We cover statistical forecasting, causal forecasting, and collaborative planning."
                },
                {
                    q: "How does SAP IBP support supply chain optimization?",
                    a: "IBP improves forecast accuracy, optimizes inventory, aligns production with demand, and integrates financial perspectives for better decision-making."
                },
                {
                    q: "Does ERPVITS provide placement support?",
                    a: "Yes, we provide 100% placement assistance including resume building, mock interviews, and job referrals."
                }
            ]
        }
    ]
};
