import React from 'react';
import { Briefcase, Building2, TrendingUp, Users, Settings, BarChart, LineChart, PieChart, Globe, DollarSign, Brain, Target, ShieldCheck, Clock, Zap, MessageSquare, Award, CheckCircle2, Rocket } from 'lucide-react';

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

export const ibpRealWorldScenarios = [
    {
        title: "Consumer Goods Company's S&OP Transformation",
        description: "A global consumer goods manufacturer with 50+ product lines needs SAP IBP to transform fragmented planning processes.",
        role: "Lead SAP IBP Consultant",
        outcome: "95%+ forecast accuracy, 22% inventory reduction, 98% on-shelf availability, $50M+ value realization.",
        responsibilities: [
            "Design integrated S&OP process spanning demand, supply, and finance",
            "Configure demand forecasting models incorporating promotional calendar",
            "Set up supply planning with production constraints",
            "Implement inventory optimization across network",
            "Create financial integration for profitability analysis",
            "Design cross-functional planning workflows and approvals"
        ]
    },
    {
        title: "Retail Company's Demand Sensing and Real-Time Planning",
        description: "A fast-fashion retail company needs SAP IBP to sense real-time demand from point-of-sale data and adjust production/procurement.",
        role: "SAP IBP Consultant",
        outcome: "Demand forecast accuracy improved to 92%, markdown reduction of 25%, 30% reduction in excess inventory.",
        responsibilities: [
            "Integrate real-time POS data into demand planning",
            "Configure statistical forecasting with machine learning",
            "Set up demand sensing and forecast updates",
            "Implement rapid procurement and production adjustments",
            "Design inventory optimization for fashion seasonality",
            "Configure supply chain collaboration with manufacturers"
        ]
    },
    {
        title: "Manufacturing Company's Production Optimization",
        description: "A discrete manufacturing company needs SAP IBP to optimize production planning and manage capacity constraints.",
        role: "Supply Chain Consultant",
        outcome: "On-time delivery improved from 85% to 98%, production lead time reduced by 30%, inventory reduction of 15%.",
        responsibilities: [
            "Design demand forecasting with product mix analysis",
            "Configure production planning with capacity constraints",
            "Set up raw material procurement optimization",
            "Implement constraint-based planning algorithms",
            "Design supply chain collaboration with suppliers",
            "Configure production-to-delivery visibility"
        ]
    },
    {
        title: "Pharmaceutical Company's Regulatory-Compliant Planning",
        description: "A pharma manufacturer needs SAP IBP to improve forecast accuracy while maintaining compliance and managing expiry-based inventory.",
        role: "Solution Architect",
        outcome: "94% forecast accuracy, 20% reduction in expired inventory, 100% regulatory compliance, 99% schedule adherence.",
        responsibilities: [
            "Design forecasting incorporating regulatory requirements",
            "Configure production planning with batch and lot management",
            "Implement expiry-based inventory management",
            "Set up supply chain collaboration with customers and suppliers",
            "Design compliance documentation in planning",
            "Configure scenario planning for market dynamics"
        ]
    }
];

export const ibpContent = {
    price: "Competitive",
    duration: "35+ Hrs",
    syllabusUrl: "/syllabus/ERPVITS Syllabus - Course Contents Pdf/SAP Functional/sap-ibp.pdf",

    // SEO Metadata
    metaTitle: "SAP IBP Training | Integrated Business Planning Course",
    metaDescription: "Master demand planning with SAP IBP training. Learn forecasting, inventory optimization, real projects, hands-on labs, and certification support. Contact Us",

    // Hero Section
    heroHeading: <>Transform Your Supply Chain Strategy with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] to-red-600 box-decoration-clone">#1 SAP IBP Online Training Program</span></>,
    heroSubheading: "The SAP Integrated Business Planning Online Training Program from ERPVITS represents a transformative learning pathway for professionals eager to excel in demand planning, supply chain optimization, and data-driven business strategy. In today's hyper-competitive business landscape, organizations urgently need certified SAP IBP experts who can align sales, marketing, finance, and supply chain teams through integrated planning, reduce forecast errors, optimize inventory, and enable agile decision-making.",

    badges: ["Rated #1 SAP IBP Training Program 2025"],
    heroStats: [
        { icon: "award", label: "SAP Certified Trainers" },
        { icon: "star", label: "4.8 Learner Rating" },
        { icon: "clock", label: "24/7 Team support" },
        { icon: "briefcase", label: "12+ Years Exp." }
    ],
    buttonLabels: {
        primary: "Book Your Free Demo Class",
        secondary: "View Curriculum"
    },

    // Main Content
    title: "SAP IBP",
    description: "This comprehensive SAP IBP training course combines interactive, instructor-led sessions, hands-on lab exercises, real-time industry projects, demand forecasting simulations, and end-to-end certification support.",

    features: [],
    sections: [
        {
            type: 'detailed_features',
            title: "Learn SAP IBP from Certified Experts – 100% Hands-On, Job-Oriented Training",
            subtitle: "Our SAP Integrated Business Planning Online Training is delivered exclusively by certified SAP professionals with 12+ years of direct implementation experience in demand planning, supply chain strategy, and integrated business planning. Unlike passive video courses or self-paced modules, you receive interactive, real-time instruction where instructors share proven methodologies, address your specific questions, and guide you through complex planning scenarios step-by-step.",
            badge: "Why Choose Us",
            items: [
                {
                    title: "Certified Instructor Expertise",
                    description: "Each trainer holds official SAP certifications and has successfully led multiple enterprise-scale SAP IBP implementations. They share real-world war stories, common planning pitfalls, and industry best practices from actual client deployments managing billions in supply chain optimization."
                },
                {
                    title: "100% Hands-On Learning Methodology",
                    description: "Every session includes live demonstrations directly on SAP IBP systems, followed by guided lab exercises. You'll configure demand plans, execute supply simulations, manage inventory optimization, and perform what-if analysis on real systems."
                },
                {
                    title: "Job-Oriented Curriculum Design",
                    description: "The curriculum is designed around the exact skills, responsibilities, and problem-solving scenarios you'll face as an SAP IBP consultant, from demand forecasting strategies to finance integration."
                },
                {
                    title: "Interactive Q&A Sessions",
                    description: "Dedicated Q&A forums and live office hours where instructors address doubts, clarify complex topics like statistical forecasting algorithms and supply-demand balancing, and provide personalized guidance."
                },
                {
                    title: "Flexible Batch Timings",
                    description: "We offer both weekday evening batches (6 PM – 9 PM IST) and weekend batches (Saturday & Sunday). Sessions are recorded for asynchronous catch-up without losing continuity."
                },
                {
                    title: "Small Batch Sizes",
                    description: "Batches are capped at 8-10 participants to ensure instructors can provide individualized attention, get to know your strengths, and offer targeted feedback on your planning configurations."
                },
                {
                    title: "Placement & Career support",
                    description: "Our dedicated career support team helps you build an impactful SAP IBP-focused resume, prepare through mock interviews, and practice with real-world interview questions."
                },
                {
                    title: "Active Alumni Network",
                    description: "Join a thriving community of SAP IBP professionals. Exchange tips, share demand planning strategies, discuss forecasting challenges, and build professional relationships."
                },
                {
                    title: "Ongoing support Post-Training",
                    description: "For six months after training, receive instructor guidance for clarifying concepts, troubleshooting real-world project challenges, or seeking advice during your first consulting engagements."
                }
            ]
        },
        {
            type: 'content_with_image',
            title: "Why Professionals Choose ERPVITS for SAP IBP Online Training",
            subtitle: "Success Guarantee & Credibility",
            videoSrc: "https://www.youtube.com/embed/ERzLONcYo94",
            description: "ERPVITS has established itself as a trusted training partner for SAP Modules, with hundreds of successful learners working at top consulting firms like Accenture, Capgemini, Deloitte, Infosys, and Wipro, as well as leading consumer goods and technology companies. Our alumni network testimonials speak to the quality of instruction and the career acceleration our program delivers.",
            items: [
                "Trusted by 500+ successful SAP professionals",
                "Alumni at Accenture, Capgemini, Deloitte, Infosys, Wipro, and leading consumer goods organizations",
                "Personalized pre-evaluation and learning path customization",
                "Active alumni network and community forum for supply chain planning professionals",
                "65+ guided lab exercises from basic to advanced demand planning scenarios",
                "Quarterly updated materials aligned with latest SAP IBP releases and S/4HANA updates",
                "Mock interviews simulating real consultant scenarios in integrated planning",
                "Dedicated certification prep week before exams"
            ],
            supportTitle: "Complete support Ecosystem",
            supportText: "From pre-evaluation to post-training support, we guide you through every step of your SAP IBP learning journey and career transition."
        },
        {
            type: 'whats_included',
            title: "What's Included in the SAP IBP Training",
            description: "A complete, career-focused SAP Integrated Business Planning training program combining live expert sessions, real-world projects, hands-on labs, certification preparation, and ongoing career support to help you become a job-ready SAP IBP consultant.",
            features: [
                {
                    title: "Live Interactive Classes",
                    description: "35+ hours of instructor-led sessions over 8–10 weeks via live video conferencing with real-time Q&A"
                },
                {
                    title: "Real-World Projects",
                    description: "Fortune 500-inspired case studies covering demand forecasting, inventory planning, and S&OP"
                },
                {
                    title: "Hands-On Lab Environment",
                    description: "Full-time access to SAP IBP systems for demand planning, supply planning, and scenario management"
                },
                {
                    title: "Certification Exam Prep",
                    description: "Prepare for C_IBPP_2402 with study guides, practice exams, and focused bootcamp sessions"
                },
                {
                    title: "Resume & Interview Coaching",
                    description: "Personalized resume optimization, mock consulting interviews, and technical interview guidance"
                },
                {
                    title: "Complete Study Materials",
                    description: "Access PDFs, presentations, planning templates, interview question banks, and forecasting models"
                },
                {
                    title: "Lifetime Recording Access",
                    description: "All live sessions are recorded, transcribed, and indexed for lifetime access"
                },
                {
                    title: "Expert Q&A Sessions",
                    description: "Weekly 60-minute live Q&A discussions for concept clarification and career mentoring"
                }
            ],
            stats: [
                { value: "35+", label: "Hours of Live Training" },
                { value: "65+", label: "Hands-On Lab Exercises" }
            ]
        },
        {
            type: 'detailed_curriculum',
            title: "Comprehensive SAP IBP Course Curriculum",
            syllabusUrl: "/syllabus/ERPVITS Syllabus - Course Contents Pdf/SAP Functional/sap-ibp.pdf",
            modules: [
                {
                    title: "Module 1: Introduction to SAP IBP and Integrated Planning",
                    duration: "5 Hours",
                    learning_points: [
                        "Overview of SAP IBP and its role in modern supply chain strategy",
                        "Key features: demand forecasting, supply optimization, integrated planning",
                        "SAP IBP architecture and system components",
                        "Planning process overview: demand, supply, finance, inventory",
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
                        "Configure planning calendars and periods",
                        "Validate master data relationships"
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
                        "Incorporate promotional and seasonal factors",
                        "Execute demand collaboration workflows",
                        "Perform what-if analysis on demand scenarios"
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
                        "Manage planning constraints and resources",
                        "Perform supply chain collaboration",
                        "Resolve supply planning exceptions",
                        "Execute supply scenario analysis"
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
                        "Optimize service levels",
                        "Manage inventory aging",
                        "Monitor inventory metrics and trends",
                        "Perform inventory scenario analysis"
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
                        "Perform budget allocation exercises",
                        "Execute financial scenario analysis",
                        "Monitor working capital metrics",
                        "Integrate finance and operations plans"
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
                        "Dashboard creation for scenario comparison",
                        "Decision support through scenario analysis"
                    ],
                    hands_on: [
                        "Create multiple planning scenarios",
                        "Configure scenario comparison views",
                        "Perform sensitivity analysis",
                        "Execute what-if modeling",
                        "Create scenario approval workflows",
                        "Build scenario comparison dashboards",
                        "Analyze scenario impact on KPIs"
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
                        "Real-time supply chain visibility",
                        "Collaboration governance and workflows"
                    ],
                    hands_on: [
                        "Configure collaboration portals",
                        "Execute customer demand collaboration",
                        "Perform supplier communication workflows",
                        "Manage collaborative forecasting",
                        "Monitor supply chain visibility",
                        "Set up collaboration KPIs",
                        "Execute end-to-end S&OP cycle"
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
                        "Real-time planning and rapid response",
                        "Performance tuning and optimization"
                    ],
                    hands_on: [
                        "Configure advanced forecasting models",
                        "Implement predictive analytics",
                        "Execute machine learning-based forecasts",
                        "Perform advanced optimization",
                        "Monitor system performance",
                        "Implement real-time planning scenarios",
                        "Build advanced analytical dashboards"
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
                        "Industry best practices and case studies",
                        "Future trends in integrated business planning"
                    ],
                    hands_on: [
                        "Execute complete S&OP cycle",
                        "Configure S&OP workflows and approvals",
                        "Develop change management plans",
                        "Create governance frameworks",
                        "Build KPI dashboards for S&OP",
                        "Analyze real-world planning scenarios",
                        "Develop best practice recommendations"
                    ]
                }
            ]
        },
        {
            type: 'detailed_target_audience',
            title: "Who Can Learn SAP IBP? – Perfect for Diverse Career Paths",
            subtitle: "Perfect for professionals from diverse backgrounds targeting global consulting and strategic planning roles",
            items: ibpTargetAudience
        },
        {
            type: 'detailed_prerequisites',
            items: ibpPrerequisites
        },
        {
            type: 'detailed_learning_outcomes',
            title: "What You'll Master in This SAP IBP Online Course",
            subtitle: "Comprehensive competencies you'll acquire to excel as an SAP IBP professional",
            items: {
                tabs: [
                    {
                        name: "Functional Mastery",
                        items: [
                            {
                                title: "End-to-End Integrated Planning",
                                titleKeywords: "Planning",
                                points: [
                                    "Configure/execute demand, supply, finance planning",
                                    "Align sales, marketing, finance, supply chain",
                                    "Execute multi-scenario planning and what-if analysis",
                                    "Optimize outcomes through integrated decisions"
                                ]
                            },
                            {
                                title: "Demand Planning Excellence",
                                titleKeywords: "Demand",
                                points: [
                                    "Design demand forecasting strategies",
                                    "Configure statistical forecasting models",
                                    "Incorporate promotional/seasonal factors",
                                    "Perform demand sensing and real-time updates"
                                ]
                            },
                            {
                                title: "Supply Planning Optimization",
                                titleKeywords: "Supply",
                                points: [
                                    "Design supply chain strategies/network optimization",
                                    "Configure production/procurement planning rules",
                                    "Implement safety stock optimization algorithms",
                                    "Execute constraint-based planning"
                                ]
                            },
                            {
                                title: "Inventory Network Optimization",
                                titleKeywords: "Inventory",
                                points: [
                                    "Implement multi-echelon inventory management",
                                    "Optimize service levels and stock availability",
                                    "Execute inventory level planning/allocation",
                                    "Manage inventory aging and obsolescence"
                                ]
                            },
                            {
                                title: "Finance-Integrated Planning",
                                titleKeywords: "Finance",
                                points: [
                                    "Integrate financial data into planning",
                                    "Configure cost-based planning/profitability",
                                    "Execute revenue planning/budget management",
                                    "Perform working capital impact analysis"
                                ]
                            }
                        ]
                    },
                    {
                        name: "Technical Skills",
                        items: [
                            {
                                title: "Master Data Config",
                                titleKeywords: "Data",
                                points: [
                                    "Manage product, location, org master data",
                                    "Configure planning calendars/time series",
                                    "Establish planning hierarchies",
                                    "Validate data consistency across systems"
                                ]
                            },
                            {
                                title: "S/4HANA Integration",
                                titleKeywords: "Integration",
                                points: [
                                    "Integrate SAP IBP with S/4HANA (MM, SD, PP, FI)",
                                    "Configure real-time data synchronization",
                                    "Manage order integration/transactional sync",
                                    "Enable seamless planning-to-execution"
                                ]
                            },
                            {
                                title: "Scenario Analytics",
                                titleKeywords: "Analytics",
                                points: [
                                    "Create/manage multiple scenarios",
                                    "Configure scenario comparison tools",
                                    "Perform sensitivity analysis/what-if modeling",
                                    "Generate scenario-based insights"
                                ]
                            },
                            {
                                title: "Collaboration",
                                titleKeywords: "Collaboration",
                                points: [
                                    "Configure collaboration portals",
                                    "Implement collaborative forecasting",
                                    "Manage real-time visibility",
                                    "Execute S&OP cycles/governance"
                                ]
                            },
                            {
                                title: "Advanced Optimization",
                                titleKeywords: "Optimization",
                                points: [
                                    "Implement ML and AI-based forecasting",
                                    "Configure advanced optimization algorithms",
                                    "Perform predictive analytics",
                                    "Create advanced dashboards/KPI monitoring"
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            type: 'real_world_scenarios',
            items: ibpRealWorldScenarios // This variable is already defined and correctly matches content
        },
        {
            type: 'detailed_certification',
            title: "SAP IBP Certification – Your Global Career Credential",
            subtitle: "We Provide support for Below SAP Certification",
            stats: [
                { label: "Exam Code", value: "C_IBPP_2402" },
                { label: "Passing Score", value: "61%" },
                { label: "Questions", value: "80 (Duration: 180 mins)" }
            ],
            description: `
**SAP Certified Associate – Integrated Business Planning**
**Exam Code:** C_IBPP_2402
**Focus:** Demand Planning, Supply Planning, Inventory Optimization, Finance Integration
**Value:** Demonstrates expertise in SAP IBP configuration and integrated planning
**Job Relevance:** Supply chain planning roles, S&OP coordinators, consulting opportunities

**Focus Areas:**
* IBP Overview and Business Processes (15-20%)
* Demand Planning and Forecasting (20-30%)
* Supply Planning and Optimization (20-30%)
* Inventory Planning and Level Planning (15-20%)
* Finance Integration in Planning (10-15%)
* Analytics, Reporting, and Collaboration (10-15%)

**Our Certification support:**
* **Targeted Exam Preparation:** Study guides aligned to official blueprints.
* **Practice Exams:** Timed tests mirroring real exam conditions.
* **Exam Strategies:** Time management and question-reading techniques.
* **Registration Guidance:** Assistance with scheduling and setup.
* **Retake support:** Targeted study recommendations if needed.

**Why Certification Matters:**
* **Global Recognition:** Recognized by employers worldwide.
* **Career Acceleration:** Certified professionals command 15-30% higher salaries.
* **Competitive Advantage:** Stand out in job applications.
`,
            imageSrc: "/images/ERPVITS - All Modules Infographics/ERPVITS - SAP IBP Infographic.webp"
        },
        {
            type: 'detailed_companies',
            title: "Top Companies Hiring SAP IBP Professionals",
            subtitle: "Our alumni work at the world's leading consulting firms and Fortune 500 companies",
            items: [
                "Accenture", "Capgemini", "Deloitte", "EY", "KPMG", "PwC", "IBM",
                "Infosys", "Wipro", "Cognizant", "TCS", "HCL", "Tech Mahindra",
                "Nestlé", "Unilever", "P&G", "Reckitt", "Colgate", "Henkel",
                "Walmart", "Amazon", "Target", "Microsoft", "Apple", "Pfizer",
                "Johnson & Johnson", "AstraZeneca", "Siemens", "ABB", "Schneider Electric"
            ],
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
                    title: "Hiring Trends",
                    stats: [
                        { value: "300%", label: "Increase in Job Openings", color: "blue" },
                        { value: "700+", label: "Hiring Companies", color: "orange" },
                        { value: "$118k", label: "Avg Starting Salary", color: "green" },
                        { value: "High", label: "Market Demand", color: "purple" }
                    ]
                }
            }
        },
        {
            type: 'detailed_career_opportunities',
            items: [
                {
                    title: "SAP IBP Consultant (Entry Level)",
                    salary: "$105k - $125k",
                    responsibilities: "Configure plans, support S&OP, manage forecasting models",
                    employers: "Accenture, Deloitte, Nestlé",
                    path: "Entry -> Mid-level Consultant",
                    color: "blue",
                    icon: "Briefcase"
                },
                {
                    title: "Demand Planning Specialist",
                    salary: "$90k - $120k",
                    responsibilities: "Develop forecasts, manage S&OP cycle, optimize inventory",
                    employers: "Consumer Goods, Retail",
                    path: "Analyst -> Senior Manager",
                    color: "orange",
                    icon: "LineChart"
                },
                {
                    title: "Supply Chain Consultant",
                    salary: "$100k - $135k",
                    responsibilities: "Design strategies, configure IBP, drive optimization",
                    employers: "Global Consulting Firms",
                    path: "Consultant -> Architect",
                    color: "emerald",
                    icon: "TrendingUp"
                },
                {
                    title: "Business Intelligence Specialist",
                    salary: "$95k - $130k",
                    responsibilities: "Build dashboards, predictive analytics, forecast models",
                    employers: "Consulting, Technology",
                    path: "Specialist -> Manager",
                    color: "purple",
                    icon: "BarChart"
                },
                {
                    title: "Solution Architect",
                    salary: "$120k - $170k",
                    responsibilities: "Design enterprise solutions, lead programs, drive innovation",
                    employers: "Tech, Enterprise",
                    path: "Architect -> Principal",
                    color: "blue",
                    icon: "Building2"
                }
            ]
        },
        {
            type: 'detailed_career_roadmap',
            items: [
                {
                    year: "Years 1-2",
                    title: "SAP IBP Consultant",
                    description: "support clients in demand and supply planning, system configuration, S&OP implementation on small to medium projects"
                },
                {
                    year: "Years 3-4",
                    title: "Mid-Level Consultant",
                    description: "Lead IBP implementation projects, mentor junior consultants, drive best practices across engagements, manage planning clients"
                },
                {
                    year: "Years 5-7",
                    title: "Senior Consultant / Architect",
                    description: "Design enterprise-wide planning solutions, manage high-value accounts, drive business growth, thought leadership in planning"
                },
                {
                    year: "Years 7+",
                    title: "Principal Consultant / Manager",
                    description: "Lead strategic planning accounts, develop methodology, shape company offerings, executive strategic planning engagement"
                }
            ]
        },
        {
            type: 'detailed_post_training_journey',
            title: "What to Expect After Completing SAP IBP Training – Your Growth Roadmap",
            items: [
                {
                    title: "Immediate Post-Training",
                    timeline: "Week 1-2",
                    color: "orange",
                    icon: "CheckCircle2",
                    points: [
                        "Receive course completion certificate",
                        "Access lifetime course materials/recordings",
                        "Join alumni network and forum",
                        "Start building planning project portfolio"
                    ]
                },
                {
                    title: "Certification & Job Search",
                    timeline: "Week 3-6",
                    color: "slate",
                    icon: "Rocket",
                    points: [
                        "Apply for SAP IBP Certification (C_IBPP_2402)",
                        "Start job search with career services",
                        "Participate in networking events",
                        "Receive interview coaching and mock feedback"
                    ]
                },
                {
                    title: "First Role & support",
                    timeline: "Month 2-3",
                    color: "orange",
                    icon: "Briefcase",
                    points: [
                        "Secure first SAP IBP consulting opportunity",
                        "Begin real-world implementation experience",
                        "Continue post-training instructor support"
                    ]
                },
                {
                    title: "First Year in Role",
                    timeline: "Year 1",
                    color: "slate",
                    icon: "TrendingUp",
                    points: [
                        "Learn client business/planning processes",
                        "Lead demand/supply configurations",
                        "support S&OP cycle setup",
                        "Drive process improvements"
                    ]
                },
                {
                    title: "Long-Term Growth",
                    timeline: "1-5 Years",
                    color: "orange",
                    icon: "Award",
                    points: [
                        "Earn advanced certifications",
                        "Build domain expertise (Pharma, Retail)",
                        "Develop strategic leadership capabilities",
                        "Transition to Solution Architect roles"
                    ]
                }
            ]
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
                    duration: "48-56 Hours",
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
                    quote: "Outstanding training. I landed a consulting role within 11 weeks. The hands-on demand forecasting labs and S&OP simulation made all the difference."
                },
                {
                    name: "Rajesh Kumar",
                    role: "Supply Chain Manager",
                    quote: "My employer was so impressed with my IBP expertise that they promoted me. This course accelerated my career by 5 years, and certification was the tipping point."
                },
                {
                    name: "Amit Patel",
                    role: "Senior IBP Consultant",
                    quote: "Best investment. The capstone projects were exactly like real client work. I walked into my first consulting role feeling confident."
                },
                {
                    name: "Sneha Reddy",
                    role: "Certified SAP IBP Professional",
                    quote: "Superb certification preparation. I passed the C_IBPP_2402 exam on my first attempt with 79%. The mock exams were thorough and realistic."
                },
                {
                    name: "Vikram Desai",
                    role: "Planning Consultant at Accenture",
                    quote: "I didn't just learn IBP; I learned how to align sales, marketing, and finance through integrated planning. Alumni network brought opportunities."
                },
                {
                    name: "Ananya Singh",
                    role: "S&OP Analyst at P&G",
                    quote: "From zero SAP IBP knowledge to landing my dream role in 4 months! Instructors are patient and genuinely invested in student success."
                }
            ]
        },
        {
            type: 'detailed_demo_booking',
            title: "Ready to Become an SAP IBP Consultant?",
            subtitle: "Book your free demo today and take the first step towards a lucrative career in strategic supply chain planning",
            benefits: [
                { title: "Sample Live Class", desc: "Observe real training and instructor methodology" },
                { title: "Career Consultation", desc: "Personalized guidance based on your background" },
                { title: "Q&A with Instructor", desc: "Ask about course content and certification" },
                { title: "Special Discount", desc: "10-15% off course fees for demo attendees" }
            ]
        },
        {
            type: 'detailed_faq',
            items: [
                {
                    q: "What is SAP IBP and how does ERPVITS help me learn it?",
                    a: "SAP Integrated Business Planning (SAP IBP) is a powerful cloud-native solution for demand planning, supply optimization, inventory management, and integrated business planning. At ERPVITS, we provide comprehensive SAP IBP Training covering real-world business scenarios, hands-on practice, and guided projects to help you master demand forecasting, supply chain optimization, and strategic planning."
                },
                {
                    q: "What will I learn in the SAP IBP module?",
                    a: "Our SAP IBP training teaches you how to create demand plans, optimize supply chains, manage inventory levels, integrate finance into planning, perform scenario analysis, and execute S&OP cycles using the SAP IBP platform."
                },
                {
                    q: "What is Demand Planning in SAP IBP?",
                    a: "Demand planning in SAP IBP is the process of forecasting customer demand using statistical techniques, external data, and collaboration. ERPVITS training covers statistical forecasting, causal forecasting, demand sensing, and collaborative planning in realistic business scenarios."
                },
                {
                    q: "What is the difference between traditional ERP planning and SAP IBP?",
                    a: "Traditional ERP planning (SAP MM, SD) is transactional and focuses on execution. SAP IBP is strategic and focuses on planning, optimization, and cross-functional alignment. IBP provides advanced forecasting, scenario management, and real-time collaboration—making it ideal for modern supply chains."
                },
                {
                    q: "How does SAP IBP support supply chain optimization?",
                    a: "SAP IBP enables businesses to optimize supply chains by improving demand forecasting accuracy, optimizing inventory levels, aligning production with demand, integrating financial perspectives into planning, and enabling rapid response to market changes—all critical for competitive advantage."
                },
                {
                    q: "Why should I join SAP IBP Training at ERPVITS?",
                    a: "ERPVITS offers SAP IBP Online Training with live sessions from certified experts, industry-aligned projects, hands-on planning labs, certification support, and comprehensive placement assistance. You'll also receive guidance on IBP certification, resume preparation, and strategic planning interview strategies."
                },
                {
                    q: "Who can enroll in the SAP IBP Course?",
                    a: "Anyone interested in supply chain planning, demand forecasting, supply chain optimization, or SAP technologies can join. Whether you're a fresher, working professional, planner, or consultant—ERPVITS SAP IBP Course is designed to help you build strategic planning skills."
                },
                {
                    q: "What is the SAP IBP Certification and why is it valuable?",
                    a: "SAP Certified Associate - Integrated Business Planning (C_IBPP_2402) validates your expertise in demand and supply planning, inventory optimization, and finance integration. ERPVITS prepares you for the official certification exam and helps you become a recognized SAP IBP professional."
                },
                {
                    q: "What is the SAP IBP certification cost?",
                    a: "The SAP IBP Certification exam (C_IBPP_2402) cost is determined by SAP Education (~$560 USD or ₹46,000 in India). ERPVITS provides complete exam guidance, practice tests, and mentoring to help you pass the certification successfully on your first attempt."
                },
                {
                    q: "What are the SAP IBP course fees at ERPVITS?",
                    a: "SAP IBP course fees at ERPVITS are competitive and depend on the module, training mode, and batch timing. Our pricing ensures maximum value with hands-on learning, live instruction, lab access, placement assistance, and certification support."
                },
                {
                    q: "How can I become an SAP IBP Consultant through ERPVITS?",
                    a: "Join our structured SAP IBP Training Program, complete the live planning projects, prepare for IBP certification, and gain hands-on experience. ERPVITS also offers career counseling and job assistance to help you become a successful SAP IBP Consultant."
                },
                {
                    q: "What career options are available after completing the SAP IBP course?",
                    a: "After completing SAP IBP Training at ERPVITS, you can apply for roles like IBP Consultant, Demand Planner, S&OP Coordinator, Supply Chain Analyst, or Supply Chain Manager. We also share IBP consultant jobs and placement opportunities with our learners."
                },
                {
                    q: "How does SAP IBP integrate with SAP S/4HANA?",
                    a: "ERPVITS provides detailed sessions on SAP IBP Integration with S/4HANA, explaining real-time data flows between IBP and core SAP systems (MM, SD, PP, FI), ensuring seamless planning-to-execution workflows."
                },
                {
                    q: "What are the main SAP IBP Solutions covered in the course?",
                    a: "Our course covers all major SAP IBP Solutions—Demand Planning, Supply Planning, Inventory Optimization, Finance Integration, Scenario Management, and S&OP process support with hands-on practice and real-world scenarios."
                },
                {
                    q: "What is S&OP (Sales and Operations Planning) and how does IBP support it?",
                    a: "S&OP is a monthly business review process aligning sales, finance, supply chain, and operations. SAP IBP enables integrated S&OP by consolidating demand, supply, and financial plans into a unified system, facilitating cross-functional decision-making and business alignment."
                },
                {
                    q: "Does ERPVITS provide SAP IBP Training with Placement support?",
                    a: "Yes! ERPVITS offers comprehensive SAP IBP Training with Placement assistance. We help you build an impressive profile, prepare for interviews, connect with recruiters, and support your transition into SAP IBP consulting and supply chain planning roles."
                },
                {
                    q: "Can I take SAP IBP Online Training from anywhere?",
                    a: "Absolutely. ERPVITS provides SAP IBP Online Training accessible from any location worldwide. Learn with live instructors, access recorded sessions, and practice on IBP systems remotely with 24/7 lab access."
                },
                {
                    q: "Is SAP IBP Training available near me?",
                    a: "Yes, ERPVITS offers both online and classroom options. We conduct SAP IBP Training in Hyderabad, Pune, Bangalore, and other cities, along with flexible weekend and weekday batches for working professionals."
                },
                {
                    q: "How does ERPVITS help in SAP IBP Careers?",
                    a: "At ERPVITS, we not only train you technically but also guide you in your SAP IBP Career journey with resume building, interview preparation, mock consultations, and job referrals across leading SAP consulting companies and supply chain organizations."
                },
                {
                    q: "What makes SAP IBP a lucrative career choice in 2025?",
                    a: "SAP IBP is a high-demand strategic planning tool with significant market adoption—300%+ increase in job openings, fewer qualified professionals, premium salaries (15-30% higher than traditional supply chain roles), and expanding opportunities across all industries."
                },
                {
                    q: "How long does it take to get a job after SAP IBP training?",
                    a: "The average timeline from course completion to first SAP IBP role is 2-3 months with active job search and career support from ERPVITS. Many learners secure opportunities within 4-8 weeks of certification completion."
                },
                {
                    q: "What is the difference between SAP IBP and traditional demand planning tools?",
                    a: "SAP IBP is cloud-native, AI-enabled, and provides integrated planning across demand, supply, and finance. Traditional tools are point solutions focused on forecasting only. IBP enables holistic supply chain optimization and cross-functional collaboration."
                }
            ]
        }
    ]
};
