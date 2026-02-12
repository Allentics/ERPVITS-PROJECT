
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const ewmContent = {
    id: 'sap-ewm',
    title: 'SAP EWM Training',
    metaTitle: 'SAP EWM Training Online – Warehouse Management Course',
    metaDescription: 'Advance your logistics career with SAP EWM training covering warehouse automation, order fulfillment, and S/4HANA integration. Get certification support.',

    heroHeading: 'Master Modern Warehouse Operations with the <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">#1 SAP EWM Online Training Program</span>',
    heroSubheading: 'The SAP Extended Warehouse Management Online Training Program from ERPVITS represents a transformative learning pathway for professionals eager to excel in warehouse optimization, inventory management, and advanced logistics operations.',
    description: "The SAP Extended Warehouse Management Online Training Program from ERPVITS represents a transformative learning pathway for professionals eager to excel in warehouse optimization, inventory management, and advanced logistics operations. In today's hyper-competitive business landscape, organizations urgently need certified SAP EWM experts who can streamline warehouse processes, reduce operational costs, enhance order fulfillment accuracy, and drive supply chain efficiency through intelligent automation. This comprehensive SAP EWM training course combines interactive, instructor-led sessions, hands-on lab exercises, real-time industry projects, warehouse automation simulations, and end-to-end certification support—designed specifically for warehouse managers, logistics professionals, SAP consultants, supply chain specialists, ERP implementers, and ambitious graduates targeting global consulting and implementation roles.",

    features: ["SAP Certified Trainers", "4.8 Learner Rating", "24/7 Team Support", "12+ Years Implementation Experience"],

    sections: [
        {
            "type": "detailed_features",
            "title": "Learn SAP EWM from Certified Experts – <span class=\"text-orange-600\">100% Hands-On, Job-Oriented Training</span>",
            "subtitle": "Our SAP Extended Warehouse Management Online Training is delivered exclusively by certified SAP professionals with 12+ years of direct implementation experience in warehouse operations, logistics networks, and advanced inventory management.",
            "items": [
                {
                    "title": "Certified Instructor Expertise",
                    "description": "Each trainer holds official SAP certifications and has successfully led multiple enterprise-scale SAP EWM implementations.",
                    "icon": "Award"
                },
                {
                    "title": "100% Hands-On Learning Methodology",
                    "description": "Every session includes live demonstrations directly on SAP EWM systems, followed by guided lab exercises.",
                    "icon": "Laptop"
                },
                {
                    "title": "Job-Oriented Curriculum Design",
                    "description": "The course curriculum is designed around the exact skills, responsibilities, and problem-solving scenarios you'll face as an SAP EWM consultant.",
                    "icon": "Briefcase"
                },
                {
                    "title": "Success Guarantee & Credibility",
                    "description": "Trusted by 500+ successful SAP professionals at top consulting firms like Accenture, Capgemini, and Deloitte. Our alumni network validates our quality.",
                    "icon": "ShieldCheck"
                },
                {
                    "title": "Complete Support Ecosystem",
                    "description": "From pre-evaluation to post-training support, we guide you through every step of your SAP EWM learning journey and career transition.",
                    "icon": "Headphones"
                },
                {
                    "title": "Interactive Q&A Sessions",
                    "description": "Dedicated Q&A forums and live office hours where instructors address your doubts and clarify complex topics.",
                    "icon": "MessageCircle"
                }
            ]
        },
        {
            "type": "whats_included",
            "title": "What's Included in the SAP EWM Training – <span class=\"text-orange-600\">Complete Learning Package</span>",
            "items": [
                { "title": "Live Interactive Classes", "description": "50–60 hours of instructor-led sessions over 10–14 weeks.", "icon": "Video" },
                { "title": "Real-World Projects", "description": "Work on Fortune 500-inspired case studies covering warehouse network design.", "icon": "Briefcase" },
                { "title": "Hands-On Lab Environment", "description": "Get full-time access to SAP EWM systems to practice master data setup.", "icon": "Laptop" },
                { "title": "Certification Exam Prep", "description": "Prepare for C_S4EWM_2023 with study guides and mock exams.", "icon": "Award" },
                { "title": "Resume & Interview Coaching", "description": "Received personalized resume optimization and mock interviews.", "icon": "FileCheck" },
                { "title": "Complete Study Materials", "description": "Access PDFs, configuration checklists, and official SAP documentation.", "icon": "BookOpen" },
                { "title": "Lifetime Recording Access", "description": "All live sessions are recorded for lifetime access and revision.", "icon": "Video" },
                { "title": "Expert Q&A Sessions", "description": "Join weekly live Q&A discussions for concept clarification.", "icon": "MessageCircle" }
            ]
        },
        {
            "type": "detailed_curriculum",
            "title": "Comprehensive SAP EWM Course Curriculum",
            "subtitle": "50-60 hours of expert-led training covering every aspect from basics to advanced implementation",
            "items": [
                {
                    "title": "Module 1: Introduction to SAP EWM and Warehouse Operations (5 Hours)",
                    "topics": [
                        "Overview of SAP EWM and its role in the logistics ecosystem",
                        "Key features and benefits: automation, accuracy, cost reduction",
                        "User interface navigation and system architecture",
                        "Warehouse organization structures and planning zones",
                        "Warehouse types and operational models (1PL, 3PL, 4PL scenarios)",
                        "Basic system setup and organizational hierarchy"
                    ]
                },
                {
                    "title": "Module 2: Warehouse Master Data Management (MDM) (7 Hours)",
                    "topics": [
                        "Role of MDM in warehouse operations",
                        "Warehouse organizational structures and hierarchy",
                        "Storage locations, zones, aisles, and bins configuration",
                        "Material master data with warehouse-specific attributes",
                        "Bin types and storage strategies",
                        "Resource master data: equipment, personnel"
                    ]
                },
                {
                    "title": "Module 3: Inbound Processing and Goods Receipt (8 Hours)",
                    "topics": [
                        "Purchase order integration from SAP S/4HANA",
                        "Goods receipt process and workflows",
                        "RF (Radio Frequency) operations for goods receipt",
                        "Quality inspection and alternate bin placement",
                        "Returns and defective goods handling",
                        "Inbound document management and exception handling"
                    ]
                },
                {
                    "title": "Module 4: Outbound Processing and Picking Strategies (9 Hours)",
                    "topics": [
                        "Sales order integration from SAP S/4HANA",
                        "Picking strategies: serial picking, batch picking, cluster picking",
                        "Wave planning and release management",
                        "RF operations for picking and packing",
                        "Packing and shipment preparation",
                        "Outbound document management and parcel tracking"
                    ]
                },
                {
                    "title": "Module 5: Warehouse Inventory Management (6 Hours)",
                    "topics": [
                        "Physical inventory process and cycle counting",
                        "Inventory adjustments and corrections",
                        "Stock movement within the warehouse",
                        "Bin allocation strategies and putaway rules",
                        "Goods movements: inter-bin, inter-zone, inter-warehouse",
                        "Inventory accuracy and reconciliation processes"
                    ]
                },
                {
                    "title": "Module 6: Wave Management and Work Centers (7 Hours)",
                    "topics": [
                        "Wave creation, planning, and release strategies",
                        "Work center configuration and resource allocation",
                        "Labor management and productivity metrics",
                        "RF routing and work queue management",
                        "Task list management and task sequencing",
                        "Wave analysis and optimization techniques"
                    ]
                },
                {
                    "title": "Module 7: Advanced Warehouse Processes (6 Hours)",
                    "topics": [
                        "Automated Storage and Retrieval Systems (ASRS) integration",
                        "Cross-docking operations and through-put handling",
                        "Consolidation strategies for shipments",
                        "Kitting and de-kitting processes",
                        "Returns management and reverse logistics",
                        "Hazmat and dangerous goods handling"
                    ]
                },
                {
                    "title": "Module 8: SAP S/4HANA Integration and Connectivity (6 Hours)",
                    "topics": [
                        "Integration points between EWM and S/4HANA core modules",
                        "Real-time data synchronization mechanisms",
                        "Order management integration (Sales & Purchasing)",
                        "Accounting integration and financial impact",
                        "Quality management integration",
                        "Forecasting and demand planning integration"
                    ]
                },
                {
                    "title": "Module 9: Warehouse Analytics, Reporting & Performance Management (5 Hours)",
                    "topics": [
                        "Key Performance Indicators (KPIs) in warehouse operations",
                        "Dashboard creation and real-time monitoring",
                        "Reporting tools and query techniques",
                        "Warehouse productivity analysis",
                        "Cost analysis and optimization opportunities",
                        "Benchmarking and continuous improvement"
                    ]
                },
                {
                    "title": "Module 10: Advanced Topics, Best Practices (6 Hours)",
                    "topics": [
                        "Cloud deployment options for SAP EWM",
                        "Performance tuning and system optimization",
                        "Troubleshooting common warehouse issues",
                        "Change management and user adoption strategies",
                        "Industry best practices from implementations",
                        "Future trends: AI, IoT, and automation"
                    ]
                }
            ]
        },
        {
            "type": "detailed_target_audience",
            "title": "Who Can Learn This Course? – <span class=\"text-orange-600\">Perfect for Diverse Career Paths</span>",
            "items": [
                {
                    "title": "Warehouse & Logistics Pros",
                    "icon": "Building2",
                    "description": [
                        "Warehouse managers seeking digital transformation",
                        "Logistics supervisors wanting to master automation",
                        "Inventory managers transitioning to consulting"
                    ]
                },
                {
                    "title": "SAP & ERP Professionals",
                    "icon": "Laptop",
                    "description": [
                        "SAP consultants (MM, SD, LE, TM) seeking specialization",
                        "ERP system admins expanding into warehouse management",
                        "SAP architects designing enterprise solutions"
                    ]
                },
                {
                    "title": "Manufacturing & E-Commerce",
                    "icon": "ShoppingCart",
                    "description": [
                        "Production planners overseeing warehouse operations",
                        "E-commerce operations managers optimizing fulfillment",
                        "Supply chain planners managing distribution networks"
                    ]
                },
                {
                    "title": "Fresh Graduates & Career Changers",
                    "icon": "GraduationCap",
                    "description": [
                        "Engineering or MBA graduates targeting SAP careers",
                        "Supply Chain Management graduates",
                        "Business analysts aiming for warehouse roles"
                    ]
                }
            ]
        },
        {
            "type": "detailed_prerequisites",
            "title": "Prerequisites for <span class=\"text-orange-600\">SAP EWM Training</span>",
            "items": {
                "minimum": [
                    "Basic understanding of warehouse operations",
                    "Familiarity with supply chain concepts",
                    "Comfortable with web applications",
                    "Ability to learn independently"
                ],
                "nicetohave": [
                    "Prior SAP experience (MM, SD, TM)",
                    "Warehouse or logistics work experience",
                    "Exposure to enterprise software",
                    "Excel skills for data analysis"
                ]
            }
        },
        {
            "type": "detailed_learning_outcomes",
            "title": "What You'll Master in This <span class=\"text-orange-600\">SAP EWM Online Course</span>",
            "items": {
                "tabs": [
                    {
                        "name": "Functional Mastery",
                        "items": [
                            {
                                "title": "End-to-End Warehouse Ops",
                                "icon": "Building2",
                                "points": ["Configure warehouse cycles", "Manage inventory workflows", "Ensure safety compliance"]
                            },
                            {
                                "title": "Inbound & Outbound",
                                "icon": "Truck",
                                "points": ["Manage goods receipt", "Execute picking strategies", "Handle returns"]
                            },
                            {
                                "title": "Inventory Management",
                                "icon": "BarChart3",
                                "points": ["Execute physical inventory", "Configure bin allocation", "Ensure accuracy"]
                            }
                        ]
                    },
                    {
                        "name": "Technical Skills",
                        "items": [
                            {
                                "title": "Master Data & Integration",
                                "icon": "Database",
                                "points": ["Manage warehouse hierarchy", "Integrate with S/4HANA", "Configure storage bins"]
                            },
                            {
                                "title": "RF Ops & Automation",
                                "icon": "Laptop",
                                "points": ["Configure RF devices", "Set up RF transactions", "Optimize user adoption"]
                            },
                            {
                                "title": "Analytics & Reports",
                                "icon": "TrendingUp",
                                "points": ["Create dashboards", "Build KPI reports", "Analyze productivity"]
                            }
                        ]
                    }
                ]
            }
        },
        {
            "type": "real_world_scenarios",
            "title": "Experience Real-World Scenarios & <span class=\"text-orange-600\">Business Case Studies</span>",
            "items": [
                {
                    "title": "E-Commerce Fulfillment Optimization",
                    "icon": "ShoppingCart",
                    "bg": "bg-orange-50",
                    "iconColor": "text-orange-600",
                    "scenario": "A rapidly growing e-commerce company needs SAP EWM to handle 1,000+ orders daily with 99.5% accuracy.",
                    "role": "Lead SAP EWM Consultant",
                    "responsibilities": ["Design structure", "Configure picking", "Set up wave mgmt"],
                    "outcome": "35% reduction in cycle time, 99.7% accuracy."
                },
                {
                    "title": "Pharma Regulated Warehouse",
                    "icon": "Database",
                    "bg": "bg-orange-50",
                    "iconColor": "text-orange-600",
                    "scenario": "Manufacturer needs EWM for cold chain integrity and regulatory compliance (GDP, DSCSA).",
                    "role": "SAP EWM Consultant",
                    "responsibilities": ["Design cold chain zones", "Configure lot tracking", "Implement serialization"],
                    "outcome": "100% compliance, zero temperature deviations."
                },
                {
                    "title": "Manufacturing Supply Chain Integration",
                    "icon": "Factory",
                    "bg": "bg-orange-50",
                    "iconColor": "text-orange-600",
                    "scenario": "Manufacturing company needs to optimize inbound raw materials and outbound finished goods.",
                    "role": "Supply Chain Integration Lead",
                    "responsibilities": ["Design network", "Configure inbound/outbound", "Set up visibility"],
                    "outcome": "45% lead time reduction, 50% safety stock reduction."
                }
            ]
        },
        {
            "type": "detailed_certification",
            "title": "SAP EWM Certification – <span class=\"text-orange-600\">Your Global Career Credential</span>",
            "subtitle": "Support for SAP Certified Application Associate – Warehouse Management in SAP S/4HANA",
            "badge": "Exam Code: C_S4EWM_2023",
            "imageSrc": "/images/certification-badge.png",
            "description": "Demonstrates expertise in SAP EWM configuration, warehouse operations, picking strategies, and S/4HANA integration.",
            "benefits": [
                "Global Credential Recognition",
                "Career Acceleration & Higher Salaries",
                "Competitive Advantage in Job Market",
                "Professional Credibility"
            ],
            "supportFeatures": [
                "Targeted Exam Preparation with Study Guides",
                "Timed Practice Exams Mirroring Real Conditions",
                "Exam Strategy & Time Management Tips",
                "Registration Guidance & Retake Support"
            ]
        },
        {
            "type": "detailed_companies",
            "title": "Top Companies Hiring <span class=\"text-orange-600\">SAP EWM Professionals</span>",
            "customData": {
                "tier1": {
                    "title": "Tier 1 - Global Consulting",
                    "companies": ["Accenture", "Capgemini", "Deloitte", "EY", "KPMG", "PwC", "IBM Consulting"],
                    "color": "bg-slate-600",
                    "lightColor": "bg-slate-50"
                },
                "tier2": {
                    "title": "Tier 2 - Enterprise Partners",
                    "companies": ["Infosys", "Wipro", "Cognizant", "TCS", "HCL", "Tech Mahindra"],
                    "color": "bg-[#ff4500]",
                    "lightColor": "bg-[#ff4500]/10"
                },
                "tier3": {
                    "title": "Tier 3 - Logistics Leaders",
                    "companies": ["Amazon", "DHL", "Blue Yonder", "Fedex", "DPDgroup"],
                    "color": "bg-slate-600",
                    "lightColor": "bg-slate-50"
                },
                "tier4": {
                    "title": "Tier 4 - Manufacturing",
                    "companies": ["Volkswagen", "BMW", "P&G", "Unilever", "Walmart", "Siemens"],
                    "color": "bg-[#ff4500]",
                    "lightColor": "bg-[#ff4500]/10"
                }
            }
        },
        {
            "type": "detailed_career_opportunities",
            "title": "Career Opportunities After <span class=\"text-orange-600\">SAP EWM Training</span>",
            "items": [
                {
                    "role": "SAP EWM Consultant",
                    "salary": "$99k - $119k",
                    "description": "Configure warehouse processes, manage goods movements, support planning."
                },
                {
                    "role": "Warehouse Operations Consultant",
                    "salary": "$85k - $115k",
                    "description": "Lead implementations, manage configurations, optimize fulfillment."
                },
                {
                    "role": "Warehouse Analyst",
                    "salary": "$80k - $110k",
                    "description": "Analyze performance data, identify optimization, configure picking."
                },
                {
                    "role": "Supply Chain Consultant",
                    "salary": "$95k - $130k",
                    "description": "Design warehouse solutions, manage complex projects."
                },
                {
                    "role": "SAP EWM Solution Architect",
                    "salary": "$115k - $160k",
                    "description": "Design enterprise solutions, lead programs, manage stakeholders."
                }
            ]
        },
        {
            "type": "detailed_career_roadmap",
            "items": [
                {
                    "year": "Years 1-2",
                    "role": "SAP EWM Consultant",
                    "description": "Support clients in warehouse process design, system configuration, and go-live execution for small to medium warehouses."
                },
                {
                    "year": "Years 3-4",
                    "role": "Mid-Level Consultant",
                    "description": "Lead EWM implementation projects, mentor junior consultants, drive best practices, and manage warehouse clients."
                },
                {
                    "year": "Years 5-7",
                    "role": "Senior Consultant / Architect",
                    "description": "Design enterprise-wide warehouse solutions, manage high-value accounts, drive business growth, and thought leadership."
                },
                {
                    "year": "Years 7+",
                    "role": "Principal Consultant / Manager",
                    "description": "Lead strategic warehouse accounts, develop methodology, shape company offerings, and executive client engagement."
                }
            ],
            "stats": [
                { "value": "280%+", "label": "Increase in Job Openings" },
                { "value": "650+", "label": "Companies Actively Hiring" },
                { "value": "$115K", "label": "Average Starting Salary" }
            ]
        },
        {
            "type": "detailed_post_training_journey",
            "title": "What to Expect After Completing Training – <span class=\"text-orange-600\">Your Growth Roadmap</span>",
            "items": [
                {
                    "title": "Immediate Post-Training",
                    "timeline": "Week 1-2",
                    "points": ["Receive certificate", "Access materials", "Join alumni network"]
                },
                {
                    "title": "Certification & Job Search",
                    "timeline": "Week 3-6",
                    "points": ["Apply for C_S4EWM_2023", "Start job search", "Resume coaching"]
                },
                {
                    "title": "Landing the Job",
                    "timeline": "Month 2-3",
                    "points": ["Secure first consulting role", "Begin project experience", "Network with peers"]
                },
                {
                    "title": "First Year in Role",
                    "timeline": "Months 1-12",
                    "points": ["Learn client operations", "Lead small configurations", "Drive improvements"]
                },
                {
                    "title": "Long-Term Growth",
                    "timeline": "1-5 Years",
                    "points": ["Earn advanced certifications", "Build domain expertise", "Senior consulting roles"]
                }
            ]
        },
        {
            "type": "detailed_upcoming_batches",
            "title": "Join Our Next Live Batch – <span class=\"text-orange-600\">Limited Seats Available</span>",
            "items": [
                {
                    "title": "Batch 1: November 2025 (Weekdays – 7:00 AM | 8:00 PM IST)",
                    "date": "November 15, 2025",
                    "time": "7:00 AM | 8:00 PM IST",
                    "duration": "50-60 Hours",
                    "status": "filling-fast",
                    "seats": "3/10 Seats Left"
                },
                {
                    "title": "Batch 2: November 2025 (Weekends – Saturday & Sunday, 7:30 AM | 7:00 PM IST)",
                    "date": "November 16, 2025",
                    "time": "Sat & Sun | 7:30 AM | 7:00 PM IST",
                    "duration": "50-60 Hours",
                    "status": "available",
                    "seats": "5/10 Seats Left"
                },
                {
                    "title": "Batch 3: December 2025 (Flexible timings – customized per batch)",
                    "date": "December 1, 2025",
                    "time": "Flexible timings",
                    "duration": "50-60 Hours (accelerated)",
                    "status": "available",
                    "seats": "6/10 Seats Left"
                }
            ]
        },
        {
            "type": "detailed_testimonials",
            "title": "Hear from Our Successful <span class=\"text-orange-600\">SAP EWM Learners</span>",
            "items": [
                { "name": "Priya Sharma", "role": "SAP EWM Consultant at Capgemini", "quote": "Landed a role within 12 weeks. Hands-on simulations made the difference.", "image": "/images/testimonials/priya.jpg" },
                { "name": "Rajesh Kumar", "role": "Warehouse Operations Manager", "quote": "Promoted to Manager. Accelerated my career by 5 years.", "image": "/images/testimonials/rajesh.jpg" },
                { "name": "Amit Patel", "role": "Senior SAP EWM Consultant", "quote": "Best investment. Capstone projects were exactly like real implementations.", "image": "/images/testimonials/amit.jpg" },
                { "name": "Sneha Reddy", "role": "Certified SAP EWM Professional", "quote": "Passed C_S4EWM_2023 on first attempt with 82%.", "image": "/images/testimonials/sneha.jpg" },
                { "name": "Vikram Desai", "role": "Logistics Consultant at DHL", "quote": "Real-world insights from e-commerce warehouse implementations were invaluable.", "image": "/images/testimonials/vikram.jpg" },
                { "name": "Ananya Singh", "role": "Warehouse Analyst at Amazon", "quote": "From zero to dream role in 4 months. Instructors are patient and knowledgeable.", "image": "/images/testimonials/ananya.jpg" }
            ]
        },
        {
            "type": "detailed_demo_booking",
            "title": "Ready to Become an SAP EWM Consultant?",
            "courseName": "SAP EWM",
            "features": ["Sample Live Class Session", "Career Consultation", "Q&A with Instructor", "Personalized Learning Path"]
        },
        {
            "type": "detailed_faq",
            "title": "Frequently Asked Questions (FAQs)",
            "subtitle": "Everything you need to know about SAP EWM Training",
            "items": [
                { "question": "What is SAP EWM and how does ERPVITS help me learn it?", "answer": "SAP Extended Warehouse Management (SAP EWM) is a solution for optimizing warehouse operations. ERPVITS provides comprehensive training covering real-time scenarios, hands-on practice, and guided projects." },
                { "question": "What will I learn in the SAP EWM module?", "answer": "You'll learn to manage warehouse operations, design inbound/outbound processes, configure picking strategies, manage waves, execute RF operations, and more using the SAP EWM platform." },
                { "question": "What is Warehouse Management in SAP EWM?", "answer": "It encompasses planning, executing, and monitoring all warehouse operations including receiving goods, storing inventory, picking orders, packing shipments, and shipping products." },
                { "question": "What is Picking Strategy in SAP EWM?", "answer": "Picking strategies determine how orders are picked. Types include serial picking, batch picking, cluster picking, and zone picking. ERPVITS provides hands-on practice with all these strategies." },
                { "question": "How does SAP EWM support warehouse optimization?", "answer": "It optimizes operations by automating picking, reducing labor costs, improving order accuracy, providing real-time visibility, and supporting advanced strategies like wave management." },
                { "question": "Why should I join SAP EWM Training at ERPVITS?", "answer": "We offer live sessions from certified experts, hands-on labs, certification support, and placement assistance. You get guidance on resume preparation and interview strategies." },
                { "question": "Who can enroll in the SAP EWM Course?", "answer": "Anyone interested in warehouse management or supply chain. Whether you're a fresher, professional, manager, or consultant, our course is designed to build job-ready skills." },
                { "question": "What is the SAP EWM Certification and why is it valuable?", "answer": "The C_S4EWM_2023 certification validates your expertise. It is globally recognized and commands premium salaries. We provide complete exam guidance." },
                { "question": "What are the SAP EWM course fees at ERPVITS?", "answer": "Fees are competitive and depend on the module/timing. Our pricing ensures maximum value with live instruction and lab access." },
                { "question": "How much does SAP EWM Certification cost?", "answer": "The exam cost is determined by SAP Education (~$560 USD). We provide mentoring to help you pass on your first attempt." },
                { "question": "How can I become an SAP EWM Consultant through ERPVITS?", "answer": "Join our training, complete live projects, prepare for certification, and use our career counseling and job assistance services." },
                { "question": "What career options are available after completing the SAP EWM course?", "answer": "Roles include EWM Consultant, Warehouse Manager, Operations Specialist, Supply Chain Consultant, and SAP Logistics Consultant." },
                { "question": "How does SAP EWM integrate with SAP S/4HANA?", "answer": "We cover integration using CIG, APIs, and real-time synchronization of warehouse data with core SAP systems like Sales & Purchasing." },
                { "question": "What are the main SAP EWM Solutions covered?", "answer": "Warehouse Planning, Inbound Processing, Outbound Fulfillment, Inventory Management, Wave Management, RF Operations, and S/4HANA integration." },
                { "question": "Does ERPVITS provide SAP EWM Training with Placement Support?", "answer": "Yes, we offer comprehensive placement assistance, resume building, mock interviews, and job referrals." },
                { "question": "What makes SAP EWM a lucrative career choice in 2025?", "answer": "High demand (280%+ increase in openings), premium salaries, and expanding opportunities in e-commerce and logistics." }
            ]
        }
    ]
};

async function updateEwmContent() {
    console.log(`Updating EWM content for ID: ${ewmContent.id}`);

    const { error } = await supabase
        .from('courses')
        .update({
            title: ewmContent.title,
            hero_heading: ewmContent.heroHeading,
            hero_subheading: ewmContent.heroSubheading,
            description: ewmContent.description,
            meta_title: ewmContent.metaTitle,
            meta_description: ewmContent.metaDescription,
            features: ewmContent.features,
            sections: ewmContent.sections,
            updated_at: new Date()
        })
        .eq('id', ewmContent.id);

    if (error) {
        console.error('Error updating course:', error);
    } else {
        console.log('Successfully updated SAP EWM course content!');
    }
}

updateEwmContent();
