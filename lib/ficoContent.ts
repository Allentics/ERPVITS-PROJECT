import { ficoTargetAudience, ficoPrerequisites, ficoLearningOutcomes, ficoRealWorldScenarios } from './contentHelpers';

export const ficoContent = {
    title: "SAP FICO",
    heroHeading: "Transform Your Career with the #1 SAP FICO Online Training Program",
    heroSubheading: "Master financial accounting, controlling, and reporting with 100% hands-on, job-oriented training from certified SAP experts.",
    heroLayout: "centered",
    themeColor: "orange",
    syllabusUrl: "/syllabus/ERPVITS Syllabus - Course Contents Pdf/SAP Functional/sap-fico.pdf",
    description: "The SAP FICO Online Training Program offered by ERPVITS is a transformative training opportunity for accountants and SAP consultants looking to strengthen their skills in financial and cost accounting, as well as enterprise resource planning. Organizations are looking for certified SAP FICO professionals as a priority to refine and optimize financial processes, maintain compliance, and improve financial performance. Our program includes live sessions, practical labs, and certification support.",
    badges: ["Rated #1 SAP FICO Training Program 2025"],
    heroStats: [
        { icon: "award", label: "SAP Certified Trainers" },
        { icon: "briefcase", label: "100% Job Assistance" },
        { icon: "infinity", label: "Lifetime Access" }
    ],
    buttonLabels: {
        primary: "Book Free Demo Class →",
        secondary: "View Curriculum"
    },
    metaTitle: "SAP FICO Online Training | Finance & Controlling Certification",
    metaDescription: "Master SAP FICO with ERPVITS — the best SAP FICO Online Training covering G/L, A/P, A/R, Assets & Controlling. 45+ hrs of live sessions, real projects, and global placement support.",

    schema: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Course",
        "name": "SAP FICO Online Training",
        "description": "The SAP FICO Online Training Program by ERPVITS helps finance and accounting professionals master SAP Financial Accounting and Controlling through live online sessions, practical labs, and certification guidance.",
        "provider": {
            "@type": "Organization",
            "name": "ERPVITS",
            "url": "https://www.erpvits.com",
            "logo": "https://www.erpvits.com/images/erpvits-logo.webp",
            "sameAs": [
                "https://www.instagram.com/erp_vits/",
                "https://www.linkedin.com/company/erpvits/",
                "https://www.youtube.com/@ERPVITS"
            ]
        },
        "timeRequired": "PT45H",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "bestRating": "5",
            "ratingCount": "257"
        },
        "location": {
            "@type": "VirtualLocation",
            "url": "https://www.erpvits.com/sap-fico-course/"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "courseSchedule": "Flexible - Weekend & Weekday Batches",
            "duration": "PT45H",
            "location": {
                "@type": "Online",
                "url": "https://www.erpvits.com/sap-fico-course/"
            }
        },
        "mainEntityOfPage": "https://www.erpvits.com/sap-fico-course/",
        "mainEntity": [
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is SAP FICO and how does ERPVITS help me learn it?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "SAP FICO is a complete solution for financial accounting, controlling, and cost management. At ERPVITS, we train FICO by integrating real-world accounting scenarios and guided projects so learners can effectively practice and master financial accounting tools and workflows."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What will I learn in the General Ledger module?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In the General Ledger module, you will learn to create General Ledger accounts, post transactions, perform document reversal, generate reports, manage foreign currency accounting, and perform accounting in SAP FICO."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are Accounts Payable and Accounts Receivable?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ERPVITS covers complete Accounts Payable and Accounts Receivable workflows in SAP FICO. Accounts Payable includes vendor invoices, payments, and dunning, while Accounts Receivable covers customer invoices, receipts, and credit control."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is Asset Management in SAP FICO?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Asset Management in SAP FICO involves managing fixed assets, controlling depreciation, adding and removing assets, and performing depreciation runs within the system."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does SAP FICO support modern accounting operations?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "SAP FICO supports all modules of modern accounting including General Ledger, Accounts Payable, Accounts Receivable, and integrated Asset Management and Reporting. ERPVITS provides practical exposure through real-world implementations of FICO workflows."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why should I join SAP FICO Training at ERPVITS?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ERPVITS provides live online sessions, industry-aligned finance projects, and placement support. You’ll receive guidance for certification, resume building, and interview preparation from SAP experts."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Who can enroll in the SAP FICO Course?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Anyone interested in finance, accounting, or SAP technologies can enroll. The SAP FICO Course by ERPVITS prepares learners for accounting, consulting, and financial management roles."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is SAP FICO Certification and how is it important?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "SAP FICO Certification validates expertise in financial accounting and controlling. ERPVITS prepares students for SAP certification and helps them become certified SAP FICO professionals."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the cost of SAP FICO course in ERPVITS?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The SAP FICO course fees depend on the training mode and program type. ERPVITS ensures high value with hands-on learning, job assistance, and certification support at competitive prices."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the price of SAP FICO Certification?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "SAP FICO Certification pricing is decided by SAP Education. ERPVITS provides complete exam guidance, mock tests, and mentorship to help you pass the certification on the first attempt."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How can I become an SAP FICO Consultant through ERPVITS?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "To become an SAP FICO Consultant, join the structured SAP FICO Training Program, complete financial project assignments, and prepare for certification. ERPVITS offers mentorship and job counseling."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What job opportunities are there after the FICO course?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "After SAP FICO training, you can pursue roles like SAP FICO Consultant, Accounting Manager, Finance Analyst, Controlling Specialist, or SAP Finance Architect."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How SAP FICO integrates with other modules?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ERPVITS covers integration of FICO with Materials Management (MM), Sales and Distribution (SD), and Human Resource (HR) modules for complete enterprise process understanding."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the main FICO functional areas covered?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ERPVITS provides hands-on training in General Ledger, Accounts Payable, Accounts Receivable, Asset Management, Cost Accounting, and Controlling."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is SAP FICO pricing for companies?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "SAP FICO pricing is typically based on per-user or enterprise licenses. ERPVITS discusses these licensing models and offers insights during implementation guidance."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does ERPVITS provide SAP FICO Training with Placement Support?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, ERPVITS provides SAP FICO training with placement support, including resume building, interview preparation, and recruitment assistance."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I take SAP FICO Online Training from anywhere?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. ERPVITS offers live SAP FICO online training accessible from anywhere, with recorded sessions and remote lab access for practical exercises."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is SAP FICO Training available near me?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. ERPVITS offers both online and in-person training options with flexible weekday and weekend batches to suit working professionals."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does ERPVITS help in SAP FICO Careers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ERPVITS supports your SAP FICO career through resume building, interview preparation, and job referrals with top SAP consulting firms and financial organizations."
                        }
                    }
                ]
            }
        ]
    }),
    features: [],
    sections: [
        {
            type: 'detailed_features',
            title: "Learn SAP FICO from Certified Experts – 100% Hands-On, Job-Oriented Training",
            subtitle: "Expert-led learning with real-world experience and proven methodologies from actual enterprise implementations",
            badge: "Why Choose Us",
            items: [
                {
                    title: "Certified Instructor Expertise",
                    description: "Our trainers are certified SAP professionals with 12+ years of direct implementation experience in financial accounting and controlling."
                },
                {
                    title: "100% Hands-On Learning",
                    description: "Every session integrates live demonstrations on SAP systems accompanied by guided lab exercises where you replicate what you have learned."
                },
                {
                    title: "Job-Oriented Curriculum",
                    description: "The course curriculum is built around the skills, responsibilities, and problem-solving frameworks you will encounter as an SAP FICO consultant."
                },
                {
                    title: "Flexible Batch Timings",
                    description: "Weekday evening classes and weekend classes to accommodate working professionals, with recordings available for continuous learning."
                },
                {
                    title: "SAP Certification Support",
                    description: "Complete exam preparation with practice tests, study guides, and strategies for SAP FICO certifications."
                },
                {
                    title: "24/7 Lab Environment Access",
                    description: "Dedicated cloud server access to practice freely from any place, any time, reinforcing your classroom learning."
                },
                {
                    title: "Comprehensive Study Material",
                    description: "Downloadable PDF presentations, configuration checklists, and interview question banks, updated quarterly."
                },
                {
                    title: "Lifetime Recording Access",
                    description: "All live sessions are recorded in HD and available in our LMS for your revision and lifetime reference."
                },
                {
                    title: "Placement & Career Support",
                    description: "Prepare through mock interviews, refine your SAP-focused resume, and study recent hiring trends in finance."
                },
                {
                    title: "6 Months Post Training Support",
                    description: "Continued access to instructors for questions, clarifications, and real-world project guidance after your course."
                },
                {
                    title: "Small Batch Sizes",
                    description: "Limited to 10-12 participants to ensure personalized attention and interactive Q&A sessions."
                },
                {
                    title: "Live Projects & Case Studies",
                    description: "Work on case studies inspired by Fortune 500 companies, covering G/L, A/P, A/R, Assets, and Controlling."
                }
            ]
        },
        {
            type: 'content_with_image',
            title: "Why Professionals Choose ERPVITS for SAP FICO Training",
            subtitle: "Success Guarantee & Credibility",
            description: "ERPVITS has established itself as a trusted training partner for SAP modules, with hundreds of successful learners working at top consulting firms like Accenture, Deloitte, and Infosys. Our comprehensive support ecosystem and alumni network testimonials speak to the quality of instruction and career acceleration our program delivers.",
            items: [
                "Trusted by 500+ successful SAP FICO professionals",
                "Personalized accounting learning paths",
                "45+ guided lab exercises from basic to advanced",
                "Active alumni network and finance community",
                "Mock interviews simulating real consulting scenarios",
                "Dedicated certification prep week before exams"
            ]
        },
        {
            type: 'whats_included'
        },
        {
            type: 'detailed_curriculum',
            title: "SAP FICO Course Curriculum",
            modules: [
                {
                    title: "Module 1: Financial Accounting Foundation",
                    duration: "5 hours",
                    learning_points: [
                        "Architecture of SAP FICO and its organizational structure",
                        "Setup of company code, chart of accounts, and fiscal year",
                        "Document types, posting periods, and field status variants",
                        "Basics of financial accounting master data",
                        "Integration with other SAP modules (MM, SD, and HR)"
                    ],
                    hands_on: [
                        "Navigate the SAP FICO interface",
                        "Setup company codes and chart of accounts",
                        "Configure posting periods and document types",
                        "Create field status variants"
                    ]
                },
                {
                    title: "Module 2: General Ledger (G/L) Accounting",
                    duration: "5 hours",
                    learning_points: [
                        "Creation and maintenance of G/L master records",
                        "Posting normal transactions and document references",
                        "Accounting for and management of foreign currency",
                        "Recurring and sample document management",
                        "Configuration of G/L line items and display reports",
                        "Document reversal and clearing procedures"
                    ],
                    hands_on: [
                        "Create and maintain G/L accounts",
                        "Post normal and reference documents",
                        "Execute foreign currency transactions",
                        "Setup recurring entry documents"
                    ]
                },
                {
                    title: "Module 3: Accounts Payable (A/P)",
                    duration: "6 hours",
                    learning_points: [
                        "Setup and maintenance of vendor master records",
                        "Account groups and associated number ranges",
                        "Workflows for posting invoices and payments",
                        "Down payments and special G/L transactions",
                        "Automatic Payment Program (APP) configuration",
                        "Payment terms and dunning processes"
                    ],
                    hands_on: [
                        "Create vendor masters and account groups",
                        "Post vendor invoices and payments",
                        "Set up the automatic payment program",
                        "Execute payment runs"
                    ]
                },
                {
                    title: "Module 4: Accounts Receivable (A/R)",
                    duration: "6 hours",
                    learning_points: [
                        "Set up and maintain customer master records",
                        "Account groups and number ranges for customers",
                        "Sales invoice posting and payment receipts",
                        "Customer advance payments and accounting",
                        "Configuration for dunning on overdue accounts",
                        "Credit management and customer correspondence"
                    ],
                    hands_on: [
                        "Create customer masters and account groups",
                        "Post customer invoices and payments",
                        "Set up dunning and generate correspondence"
                    ]
                },
                {
                    title: "Module 5: Fixed Assets Accounting",
                    duration: "6 hours",
                    learning_points: [
                        "Create and maintain fixed asset records",
                        "Define depreciation methods and keys",
                        "Acquire, sell, and retire fixed assets",
                        "Execute depreciation runs and month-end procedures",
                        "Asset retirement and transfer methods",
                        "Fixed asset reporting and management"
                    ],
                    hands_on: [
                        "Create asset master records",
                        "Post asset acquisitions and disposals",
                        "Execute depreciation cycles",
                        "Manage retired assets"
                    ]
                },
                {
                    title: "Module 6: Cost Accounting & Controlling",
                    duration: "8 hours",
                    learning_points: [
                        "Set up controlling area and cost elements",
                        "Cost center accounting and hierarchies",
                        "Internal order management and profitability analysis",
                        "Profit center accounting and segment reporting",
                        "Cost allocation methods and cycles",
                        "Overhead calculation and variance analysis"
                    ],
                    hands_on: [
                        "Set up controlling area and cost centers",
                        "Create cost elements and internal orders",
                        "Execute cost allocation cycles",
                        "Generate profitability reports"
                    ]
                },
                {
                    title: "Module 7: Financial Close & Integration",
                    duration: "6 hours",
                    learning_points: [
                        "Month-end and year-end closing procedures",
                        "Accrual and deferral posting",
                        "Reconciliation procedures and error correction",
                        "Financial statement generation and reporting",
                        "FICO integration with MM, SD, and HR modules",
                        "S/4HANA Fiori apps for financial accounting"
                    ],
                    hands_on: [
                        "Execute month-end closing procedures",
                        "Configure MM-to-FI and SD-to-FI integration",
                        "Explore Fiori apps for accounting",
                        "Generate financial statements"
                    ]
                }
            ]
        },
        {
            type: 'detailed_prerequisites',
            items: ficoPrerequisites
        },
        {
            type: 'detailed_target_audience',
            items: ficoTargetAudience
        },
        {
            type: 'detailed_learning_outcomes',
            items: ficoLearningOutcomes
        },
        {
            type: 'real_world_scenarios',
            items: ficoRealWorldScenarios
        },
        {
            type: 'detailed_certification',
            title: "SAP FICO Certification – Your Global Career Credential",
            imageSrc: "/images/ERPVITS - All Modules Infographics/ERPVITS - SAP FICO Infographic.webp",
            items: [
                {
                    title: "SAP Certified Associate – Financial Accounting",
                    code: "(C_TS4FI_2021 or equivalent)",
                    focus: "Financial accounting, controlling, assets, A/P, A/R, reporting",
                    who: "Entry to mid-level consultant positions in finance",
                    relevance: "Demonstrates expertise in end-to-end SAP FICO implementation"
                }
            ]
        },
        {
            type: 'detailed_companies'
        },
        {
            type: 'detailed_career_opportunities',
            items: [
                {
                    title: "SAP FICO Consultant",
                    salary: "$110,000 – $140,000",
                    responsibilities: "Configure FICO modules, manage accounting projects, support end-users",
                    employers: "Accenture, Capgemini, Deloitte, Infosys, Wipro",
                    path: "Junior Consultant -> Senior FICO Consultant",
                    icon: "Briefcase",
                    color: "blue"
                },
                {
                    title: "Accounting Manager / Finance Lead",
                    salary: "$100,000 – $140,000",
                    responsibilities: "Lead accounting operations, manage finance teams, implement controls",
                    employers: "Manufacturing, Finance, Services Firms",
                    path: "Analyst -> Finance Director or CFO",
                    icon: "Building2",
                    color: "green"
                },
                {
                    title: "Cost Accountant / Controlling Specialist",
                    salary: "$95,000 – $135,000",
                    responsibilities: "Manage cost accounting, profitability analysis, variance reporting",
                    employers: "Manufacturing, Retail, Technology",
                    path: "Specialist -> Senior Accounting Manager",
                    icon: "BarChart3",
                    color: "purple"
                },
                {
                    title: "Solutions Architect – Financial Accounting",
                    salary: "$160,000 – $230,000+",
                    responsibilities: "Design enterprise financial solutions, lead implementations, advise on strategy",
                    employers: "Consulting, Banking, Large Enterprises",
                    path: "Architect -> Principal Consultant",
                    icon: "TrendingUp",
                    color: "orange"
                }
            ]
        },
        {
            type: 'detailed_post_training_journey',
            courseName: "SAP FICO",
            items: [
                {
                    title: "Immediate Post-Training",
                    timeline: "Week 1-6",
                    color: "orange",
                    icon: "CheckCircle2",
                    points: [
                        "Receive course completion certificate",
                        "Access lifetime course materials and FICO recordings",
                        "Join alumni network and accounting community forum",
                        "Begin resume updates highlighting SAP FICO expertise",
                        "Apply for SAP FICO Certification exam",
                        "Start job search with career services support"
                    ]
                },
                {
                    title: "Month 2-3",
                    timeline: "First Role",
                    color: "slate",
                    icon: "Rocket",
                    points: [
                        "Secure first SAP FICO consulting opportunity",
                        "Begin real-world financial project experience",
                        "Continue post-training support from instructors"
                    ]
                },
                {
                    title: "First Year in Role",
                    timeline: "On The Job",
                    color: "orange",
                    icon: "TrendingUp",
                    points: [
                        "Learn client's financial processes and accounting operations",
                        "Get hands-on experience with implementations",
                        "Lead small configuration tasks and mentor others",
                        "Build reputation for financial acumen"
                    ]
                },
                {
                    title: "Long-Term Growth",
                    timeline: "1-5 Years",
                    color: "slate",
                    icon: "Award",
                    points: [
                        "Earn SAP FICO certification and related certifications",
                        "Build domain expertise in specific industries",
                        "Develop leadership and project management capabilities",
                        "Transition to senior consulting roles or finance management"
                    ]
                }
            ]
        },
        {
            type: 'detailed_upcoming_batches',
            courseName: "SAP FICO",
            items: [
                {
                    name: "Batch 1: Weekday Evening",
                    status: "Filling Fast",
                    statusColor: "bg-red-100 text-red-600",
                    date: "Starting Soon",
                    schedule: "Mon-Fri | 07:00 PM – 09:00 PM IST",
                    duration: "45 Hours",
                    seatsFilled: 60
                },
                {
                    name: "Batch 2: Weekend Morning",
                    status: "Limited",
                    statusColor: "bg-orange-100 text-orange-600",
                    date: "Next Weekend",
                    schedule: "Sat & Sun | 10:00 AM – 01:00 PM IST",
                    duration: "45 Hours",
                    seatsFilled: 80
                }
            ]
        },
        {
            type: 'detailed_testimonials',
            items: [
                {
                    text: "Outstanding financial accounting training with real project exposure. I landed a consulting role at Deloitte within 9 weeks managing FICO implementations.",
                    name: "Amit Kumar",
                    role: "SAP FICO Consultant",
                    initial: "A",
                    color: "bg-blue-500"
                },
                {
                    text: "The evening flexibility allowed me to learn while working in finance. My employer was so impressed with my SAP skills that they promoted me to Senior Accountant.",
                    name: "Priya Sharma",
                    role: "Senior Accountant",
                    initial: "P",
                    color: "bg-green-500"
                },
                {
                    text: "Best decision I made for my accounting career. The capstone projects were exactly like real client implementations. I walked into my first role feeling confident.",
                    name: "Rajesh Patel",
                    role: "FICO Consultant",
                    initial: "R",
                    color: "bg-purple-500"
                }
            ]
        },
        {
            type: 'detailed_demo_booking'
        },
        {
            type: 'detailed_faq',
            items: [
                { q: "What is SAP FICO and how does ERPVITS help me learn it?", a: "SAP FICO is a complete solution for financial accounting, controlling, and cost management. At ERPVITS, we train FICO by integrating comprehensive real-world accounting scenarios and guided projects so you can effectively practice and learn the financial accounting tools and workflows." },
                { q: "What will I learn in the General Ledger module?", a: "In the General Ledger module, you will learn to create General Ledger accounts, post transactions in the accounts, perform documents reversal, generate reports, manage foreign currency accounting, and perform accounting in SAP FICO." },
                { q: "What are Accounts Payable and Accounts Receivable?", a: "ERPVITS Training System covers complete accounts payable and accounts receivable workflows in SAP FICO. Accounts payable covers vendor invoices, payments, and dunning. While accounts receivable covers customer invoices, receipts, and credit control." },
                { q: "What is Asset Management in SAP FICO?", a: "In SAP FICO, Asset Management includes management of fixed assets, control of depreciation, adding and removing assets, and performing depreciation runs in the system." },
                { q: "How does SAP FICO support modern accounting operations?", a: "In FICO, SAP provides all modules of modern accounting including General Ledger, accounts payable, accounts receivable, and integrated asset management and reporting. ERPVITS has practical exposure for real-world implementations of FICO workflows." },
                { q: "Why should I join SAP FICO Training at ERPVITS?", a: "ERPVITS provides live online training sessions to the participants and covers training in SAP FICO. ERPVITS has industry aligned finance projects and provides job placement. You will train for FICO certification and will receive complete guidance for resume building and interviews." },
                { q: "Who can enroll in the SAP FICO Course?", a: "Anyone can enroll in the SAP FICO Course, if you have interest in finance, accounting, or SAP technologies. ERPVITS SAP FICO Course will prepare you for the job leading accounting." },
                { q: "What is SAP FICO Certification and how is it important?", a: "SAP FICO Certification confirms one owns validation for expertise in financial accounting, and ERPVITS is one of the pathways to prepare one for official certification and become a certified SAP FICO professional." }
            ]
        }
    ]
};
