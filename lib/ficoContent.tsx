import React from 'react';
import { ficoTargetAudience, ficoPrerequisites, ficoLearningOutcomes, ficoRealWorldScenarios } from './contentHelpers';
import { Course } from './courseData';

export const ficoContent: Partial<Course> = {
    id: 'fico',
    title: "SAP FICO",
    heroHeading: <>Transform Your Career with the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] to-red-600 box-decoration-clone">#1 SAP FICO Online Training Program</span></>,
    heroSubheading: "The SAP FICO Online Training Program offered by ERPVITS is a transformative training opportunity for accountants and SAP consultants looking to strengthen their skills in financial and cost accounting, as well as enterprise resource planning. The current business environment is fast-paced and organizations are looking for certified SAP FICO professionals as a priority. Such professionals have the skills to refine and optimize financial processes, streamline accounting for efficiency, maintain compliance with regulations, and improve overall financial performance. This extensive SAP FICO training program has been designed with the help of finance and SAP FICO professionals, and comprises of live, interactive instructor-led training, practical lab activities, appli-cable financial case studies, and complete certification support, targeting financial professionals, accounting professionals, CFO teams, ERP consultants, and aspiring graduates who are looking for opportunities for global consulting and implementation.",
    themeColor: "orange",
    heroLayout: "centered",
    buttonLabels: {
        primary: "Book Your Free Demo Class",
        secondary: "View Curriculum"
    },
    badges: ["Mode: Online/Instructor-Led/Self Paced", "Batches: Weekend/Weekday"],
    heroStats: [
        { icon: "Monitor", label: "Online/Instructor-Led/Self Paced" },
        { icon: "Calendar", label: "Weekend/Weekday" }
    ],
    metaTitle: "SAP FICO Online Training | Finance & Controlling",
    metaDescription: "SAP FICO Online Training with ERPVITS through live instructor-led sessions, real-time projects, and certification support to boost your finance career.",
    schema: JSON.stringify([
        {
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
            }
        },
        {
            "@context": "https://schema.org",
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
                    "name": "Does ERPVITS provide SAP FICO Training with Placement support?",
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
    ]),
    sections: [
        {
            type: 'detailed_features',
            title: "Learn SAP FICO from Certified Experts – 100% Hands-On, Job-Oriented Training",
            textAlign: 'left',
            subtitle: "Our **SAP FICO Online Training** curriculum is delivered exclusively by certified SAP professionals with 12+ years of direct hands-on experience in financial accounting and controlling. Instead of passive video courses or self-paced modules, you get **live, real-time training** with interactive sessions where instructors share industry-proven methodologies, address your questions, and guide you through complex accounting scenarios in a step-by-step manner.",
            badge: "Why Choose Us",
            items: [
                {
                    title: "Certified Instructor Expertise",
                    description: "Each trainer holds official SAP FICO certifications and has successfully led multiple enterprise-scale SAP FICO implementations across finance, manufacturing, and service sectors. They don't just teach theory; they share war stories, common pitfalls, and industry best practices from actual financial transformations."
                },
                {
                    title: "100% Hands-On Learning Methodology",
                    description: "Traditional training teaches SAP FICO concepts through slides and presentations, but our program goes further. Every session integrates live demonstrations on SAP systems accompanied by guided lab exercises where you replicate what you have learned. By the end of the course, you will have created G/L accounts, posted financial transactions, configured cost centers, executed accounting closing procedures, and produced financial reports on real systems."
                },
                {
                    title: "Job-Oriented Curriculum Design",
                    description: "The course curriculum is not academic; it is built around the skills, responsibilities, and problem-solving frameworks you will encounter as an SAP FICO consultant. The training is designed to provide you with realistic solutions, whether you are implementing financial controls, profit center accounting configuration, asset management, or integration issue troubleshooting."
                },
                {
                    title: "Interactive Q&A Sessions",
                    description: "Beyond the primary classroom instruction, you have dedicated Q&A forums and live office hours where instructors provide instruction so you can eliminate your doubts, clarify complex accounting topics, and provide individualized instruction that matches your own learning and career goals."
                },
                {
                    title: "Flexible Batch Timings",
                    description: "To accommodate the busy schedules of working finance professionals who also have family commitments and studying, we provide weekday evening classes (6 PM – 9 PM IST) and weekend classes (Saturday and Sunday). All sessions are recorded, so if you miss a live class, you will be able to catch up without losing continuity."
                },
                {
                    title: "Personalized Attention",
                    description: "While other online courses enroll thousands of students, our courses are designed and structured so that no more than 8-10 participants are admitted to a class. This allows instructors to tailor their teaching, learn your individual strengths and weaknesses, and refine your understanding of challenging financial concepts."
                },
                {
                    title: "Placement & Career support",
                    description: "You will prepare through mock interviews, refine your SAP-focused resume, and practice with real interview questions that are aligned with current hiring trends in finance. You will also receive instructions to help you articulate your project work to enhance your profile to adopt SAP FICO in interviews."
                },
                {
                    title: "Active Alumni Network & Community Forum",
                    description: "Join a thriving community of SAP FICO and finance professionals. Exchange tips, share job opportunities, ask questions, and build professional relationships that can lead to referrals and collaborations."
                },
                {
                    title: "Ongoing support Post-Training",
                    description: "Your learning journey does not end even after completing the SAP FICO course. For the next 6 months after the training, you will still have access to your instructor. This could be guidance for you helping you understand some accounting fundamentals that are tough for you, assistance for you working through some challenges for your financial project that you will be working on in the real world, or some advice for you while you are working on your initial consulting project."
                }
            ]
        },
        {
            type: 'content_with_image',
            title: "Why Professionals Choose ERPVITS for SAP FICO Online Training",
            subtitle: "Success Guarantee & Credibility",
            imageSrc: "/images/ERPVITS - All Modules Infographics/ERPVITS - SAP FICO Infographic.webp",
            description: "ERPVITS is the first trusted training partner for SAP financial modules, positioned in the midst of the hundreds of successful learners who have reached prestigious consulting firms such as Accenture, Capgemini, Deloitte, Infosys, and Wipro. The trust and the testimonials of the alumni is the instructional quality and the career uplift provided through the alumni network.",
            items: [
                "Trusted by 500+ successful SAP FICO professionals",
                "Alumni at Accenture, Capgemini, Deloitte, Infosys, Wipro",
                "Personalized pre-evaluation and accounting learning path",
                "Active alumni network and finance community forum",
                "45+ guided lab exercises from basic to advanced financial scenarios",
                "Quarterly updated materials aligned with latest SAP releases",
                "Mock interviews simulating real FICO consultant scenarios",
                "Dedicated certification prep week before exams"
            ],
            supportTitle: "Complete support Ecosystem",
            supportText: "From pre-evaluation to post-training support, we guide you through every step of your SAP FICO learning journey and accounting career transition."
        },
        {
            type: 'whats_included',
            title: "What's Included in the SAP FICO Training – Complete Learning Package",
            badge: "Complete Learning Package",
            description: "A comprehensive, career-oriented SAP FICO training package that integrates live training, real finance projects, practical sessions, lab work, assistance in certification, and continued support in your career to prepare you to be a job-ready SAP FICO consultant.",
            features: [
                { title: "Live Interactive Classes", description: "35-40 hours of live sessions taught by a mentor via a live video conference, allows real-time Q&A, interactive discussions on accounting, and is spaced out over 8-10 weeks." },
                { title: "Real-World Projects", description: "Work on case studies inspired by Fortune 500 companies. These case studies include working on G/L accounting, accounts payable and receivable, asset management, cost center accounting, and financial reporting." },
                { title: "Hands-On Lab Environment", description: "Full-time access to SAP FICO systems to practice journal entries, customer and vendor transactions, asset management, cost allocation, month-end closing procedures, and other transactions." },
                { title: "Certification Exam Prep", description: "Acquire study guides, practice exams, and bootcam sessions to prep for the certification exam for SAP Certified Associate—Financial Accounting." },
                { title: "Resume & Interview Coaching", description: "Tailored resume enhancement, mock consulting interviews, and SAP FICO technical interview prep." },
                { title: "Complete Study Materials", description: "PDFs, presentations, checklists for accounting configuration, interview questions, and links to official SAP documents." },
                { title: "Lifetime Recording Access", description: "All live sessions are recorded, transcribed, and indexed for you to access and review by topic at any time." },
                { title: "Expert Q&A Sessions", description: "Monthly 60- minute live discussions for clarifying accounting concepts, guiding projects, and mentoring for your career." }
            ],
            stats: [
                { value: "40-45", label: "Hours of Live Training", color: "orange" },
                { value: "45+", label: "Hands-On Lab Exercises", color: "orange" },
                { value: "24/7", label: "SAP FICO Lab Access", color: "orange" }
            ]
        },
        {
            type: 'detailed_curriculum',
            title: "Comprehensive SAP FICO Course Curriculum",
            subtitle: "40-45 hours of expert-led training covering every aspect from basics to advanced financial accounting and controlling",
            syllabusUrl: "/syllabus/ERPVITS Syllabus - Course Contents Pdf/SAP Functional/sap-fico.pdf",
            modules: [
                {
                    title: "Module 1: Financial Accounting Foundation",
                    duration: "5 Hours",
                    learning_points: [
                        "The architecture of SAP FICO and its organizational structure",
                        "Setup of a company code, a chart of accounts and a fiscal year",
                        "Setup of document types, posting periods, and field status variants",
                        "Basics of financial accounting master data and customization",
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
                    duration: "5 Hours",
                    learning_points: [
                        "Creation and maintenance of G/L master record",
                        "Posting of normal transactions and usage of document references",
                        "Accounting for and management of foreign currency",
                        "Recurring and sample document management",
                        "Configuration of G/L account line items and display reports",
                        "Document reversal and clearing of documents"
                    ],
                    hands_on: [
                        "Create and maintain G/L accounts",
                        "Post normal and reference documents",
                        "Execute transactions involving foreign currency",
                        "Setup documents for recurring entries"
                    ]
                },
                {
                    title: "Module 3: Accounts Payable (A/P)",
                    duration: "4 Hours",
                    learning_points: [
                        "Setup and maintenance of the vendor master record",
                        "Groups for vendor accounts and associated number ranges",
                        "Workflows for posting invoices and making payments",
                        "Down payments and special G/L transactions",
                        "Configuration of the Automatic Payment Program (APP)",
                        "Payment terms and dunning"
                    ],
                    hands_on: [
                        "Create vendor masters and account groups.",
                        "Post vendor invoices and payments.",
                        "Set up the automatic payment program.",
                        "Execute payment runs."
                    ]
                },
                {
                    title: "Module 4: Accounts Receivable (A/R)",
                    duration: "4 Hours",
                    learning_points: [
                        "Set up and maintain customer master records.",
                        "Account groups and number ranges for customers.",
                        "Sales invoice posting and receiving payments from customers.",
                        "Down payments and customer advance payments.",
                        "Configuration for dunning on overdue accounts.",
                        "Meeting credit obligations and customer correspondence."
                    ],
                    hands_on: [
                        "Create customer masters and account groups.",
                        "Post customer invoices and payments.",
                        "Set up dunning and generate customer correspondence."
                    ]
                },
                {
                    title: "Module 5: Fixed Assets Accounting",
                    duration: "4 Hours",
                    learning_points: [
                        "Create and maintain records for fixed assets.",
                        "Define and apply various methods for calculating depreciation and depreciation keys.",
                        "Acquire, sell, and junk fixed assets.",
                        "Apply depreciation for a given period and execute month-end procedures.",
                        "Methods for retiring and transferring fixed assets.",
                        "Focus on fixed assets for reporting and management."
                    ],
                    hands_on: [
                        "Create asset master records.",
                        "Post asset acquisitions and disposals.",
                        "Manage assets during depreciation cycles.",
                        "Control retired assets."
                    ]
                },
                {
                    title: "Module 6: Cost Accounting & Controlling",
                    duration: "5 Hours",
                    learning_points: [
                        "Set up a controlling area and create cost elements.",
                        "Cost center accounting and hierarchies.",
                        "Internal order management and profitability analysis",
                        "Profit center accounting and segment reporting",
                        "Cost allocation methods and cycles",
                        "Overhead calculation and variance analysis"
                    ],
                    hands_on: [
                        "Set up a controlling area and cost centers",
                        "Create cost elements and internal orders",
                        "Execute cost allocation cycles",
                        "Generate profitability reports"
                    ]
                },
                {
                    title: "Module 7: Financial Close & Reporting",
                    duration: "4 Hours",
                    learning_points: [
                        "Month-end and year-end closing procedures",
                        "Accrual and deferral posting",
                        "Reconciliation procedures and error correction",
                        "Financial statement generation and reporting",
                        "Intercompany reconciliation",
                        "Balance sheet and P&L consolidation basics"
                    ],
                    hands_on: [
                        "Execute month-end closing procedures",
                        "Post accruals and deferrals",
                        "Reconcile accounts",
                        "Generate financial statements"
                    ]
                },
                {
                    title: "Module 8: Advanced Integration & Optimization",
                    duration: "4 Hours",
                    learning_points: [
                        "FICO integration with Materials Management (MM)",
                        "FICO integration with Sales & Distribution (SD)",
                        "FICO integration with Human Resources (HR/Payroll)",
                        "Real-time financial reporting and analytics",
                        "S/4HANA Fiori apps for financial accounting",
                        "Performance optimization and troubleshooting"
                    ],
                    hands_on: [
                        "Configure MM-to-FI integration",
                        "Configure SD-to-FI integration",
                        "Explore Fiori apps for accounting",
                        "Build financial analytics dashboards"
                    ]
                }
            ]
        },
        {
            type: 'detailed_target_audience',
            title: "Who Can Learn SAP FICO? – Perfect for Diverse Career Paths",
            subtitle: "Perfect for professionals from diverse backgrounds targeting global consulting and implementation roles",
            items: ficoTargetAudience
        },
        {
            type: 'detailed_prerequisites',
            items: ficoPrerequisites
        },
        {
            type: 'detailed_learning_outcomes',
            title: "What You'll Master in This SAP FICO Online Course – Core Competencies",
            subtitle: "Expertise You'll Gain From The SAP FICO Online Course – Core Competencies, after finishing the SAP FICO training offered by ERPVITS, you will be able to:",
            items: ficoLearningOutcomes
        },
        {
            type: 'real_world_scenarios',
            title: "Experience Real-World SAP FICO Scenarios & Business Case Studies",
            items: ficoRealWorldScenarios
        },
        {
            type: 'detailed_certification',
            title: "SAP FICO Certification – Your Global Career Credential",
            subtitle: "We Provide support for Below SAP Certification List",
            imageSrc: "/images/ERPVITS - All Modules Infographics/ERPVITS - SAP FICO Infographic.webp",
            imageSrc2: "/images/ERPVITS - All Modules Infographics/SAP-Certified-logo.webp",
            items: [
                {
                    title: "SAP Certified Associate – Financial Accounting",
                    code: "C_TS4FI",
                    focus: "Financial accounting, controlling, assets, A/P, A/R, reporting",
                    who: "Entry to mid-level consultant positions in finance",
                    relevance: "Validation of expertise in end-to-end SAP FICO implementation"
                }
            ],
            description: `
**SAP Certified Associate – Financial Accounting**
**Exam Code:** C_TFI50_DEC or equivalent FICO certification
**Focus:** Financial accounting, controlling, assets, A/P, A/R, reporting
**Value:** Demonstrates expertise in end-to-end SAP FICO implementation
**Job Relevance:** Entry to mid-level consultant positions in finance

**Our Certification support**
**Targeted Exam Preparation:** We provide study guides tailored to match official exam blueprints.
**Practice Exams:** You will take timed practice exams that replicate the conditions of the actual exam.
**Exam Strategies:** We offer time management techniques, tips for reading questions, and a summary of common mistakes.
**Exam Registration Guidance:** We aid you in exam registration and scheduling.
**Retake support:** In case you do not pass on the first try, we offer additional support and guidance for retaking the exam.

**Why SAP FICO Certification Matters**
**Globally Recognized Credentials:** SAP certifications are internationally acknowledged by employers, financial institutions, and recruitment agencies.
**Accelerated Career Growth:** Certified professionals enjoy higher salaries, with a premium of 15-30% compared to their non-certified counterparts.
**Enhanced Job Application Profile:** Gain a competitive edge in finance job and accounting consulting applications.
**Pursuit of Knowledge:** Certification requires you to thoroughly complete the financial accounting coursework.
**Increased Trust:** Clients and employers are assured that you have met solid professional standards.
`
        },
        {
            type: 'detailed_career_opportunities',
            title: "Career Opportunities After SAP FICO Training",
            items: [
                {
                    title: "SAP FICO Consultant (Entry Level)",
                    salary: "$110,000–$140,000 (USA) | ₹8,00,000–₹11,00,000 (India)",
                    responsibilities: "Configure FICO modules, manage accounting projects, support end-users",
                    employers: "Accenture, Capgemini, Deloitte, Infosys, Wipro",
                    path: "2–3 years → Senior FICO Consultant",
                    icon: "Briefcase",
                    color: "blue"
                },
                {
                    title: "Accounting Manager / Finance Operations Lead",
                    salary: "$100,000–$140,000 (USA) | ₹8,00,000–₹12,00,000 (India)",
                    responsibilities: "Lead accounting operations, manage finance teams, implement controls",
                    employers: "Manufacturing, Finance, Services",
                    path: "3–5 years → Finance Director or CFO",
                    icon: "Building",
                    color: "green"
                },
                {
                    title: "Cost Accountant / Controlling Specialist",
                    salary: "$95,000–$135,000 (USA) | ₹7,00,000–₹10,50,000 (India)",
                    responsibilities: "Manage cost accounting, profitability analysis, variance reporting",
                    employers: "Manufacturing, Retail, Technology",
                    path: "3–5 years → Senior Accounting Manager",
                    icon: "Target",
                    color: "purple"
                },
                {
                    title: "SAP FICO Integration Consultant",
                    salary: "$125,000–$165,000 (USA) | ₹10,00,000–₹14,00,000 (India)",
                    responsibilities: "Configure FICO integrations, manage financial data flows, optimize systems",
                    employers: "Consulting, Technology, Finance",
                    path: "4–6 years → Senior Integration Architect",
                    icon: "Layers",
                    color: "orange"
                },
                {
                    title: "Solutions Architect – Financial Accounting",
                    salary: "$160,000–$230,000+ (USA) | ₹13,00,000–₹19,00,000+ (India)",
                    responsibilities: "Design enterprise financial solutions, lead implementations, advise on strategy",
                    employers: "Consulting, Banking, Large Enterprises",
                    path: "7+ years → Principal Consultant, Finance Practice Lead",
                    icon: "ShieldCheck",
                    color: "blue"
                }
            ]
        },
        {
            type: 'detailed_companies',
            courseName: "SAP FICO"
        },
        {
            type: 'detailed_post_training_journey',
            title: "What to Expect After Completing SAP FICO Training – Your Growth Roadmap",
            items: [
                {
                    title: "Immediate Post-Training",
                    timeline: "Week 1–2",
                    color: "orange",
                    icon: "CheckCircle2",
                    points: [
                        "Receive course completion certificate",
                        "Access lifetime course materials and FICO recordings",
                        "Join alumni network and accounting community forum",
                        "Begin resume updates highlighting SAP FICO expertise"
                    ]
                },
                {
                    title: "Certification & Job Search",
                    timeline: "Week 3–6",
                    color: "slate",
                    icon: "Rocket",
                    points: [
                        "Apply for SAP FICO Certification exam",
                        "Start job search with career services support",
                        "Participate in alumni networking events",
                        "Receive interview coaching and mock interview feedback"
                    ]
                },
                {
                    title: "First Role & Project support",
                    timeline: "Month 2–3",
                    color: "orange",
                    icon: "Briefcase",
                    points: [
                        "Secure first SAP FICO consulting opportunity (typical timeline)",
                        "Begin real-world financial project experience",
                        "Continue post-training support from instructors"
                    ]
                },
                {
                    title: "First Year in Role",
                    timeline: "Month 1–12",
                    color: "slate",
                    icon: "TrendingUp",
                    points: [
                        "**Months 1–3:** Learn your client's financial processes, understand current accounting operations, get hands-on experience with implementations",
                        "**Months 4–6:** Lead small configuration tasks, mentor other junior consultants, build reputation for financial acumen",
                        "**Months 7–12:** Lead components of implementation projects, drive accounting improvements, demonstrate business expertise"
                    ]
                },
                {
                    title: "Long-Term Growth",
                    timeline: "1–5 Years",
                    color: "orange",
                    icon: "Award",
                    points: [
                        "Earn SAP FICO certification and related certifications",
                        "Build domain expertise in specific industries",
                        "Develop leadership and project management capabilities",
                        "Transition to senior consulting roles or finance management",
                        "Explore specializations (controlling, asset management, reporting)"
                    ]
                }
            ]
        },
        {
            type: 'detailed_testimonials',
            title: "Hear from Our Successful SAP FICO Learners – Real Reviews, Real Results",
            items: [
                {
                    name: "Rahul M.",
                    role: "Junior SAP Consultant",
                    quote: "The hands-on lab sessions were the best part of the training. I could practice every concept on a live system."
                },
                {
                    name: "Anita S.",
                    role: "Finance Lead",
                    quote: "Transitioning to SAP FICO was smooth thanks to the expert guidance from ERPVITS trainers."
                },
                {
                    name: "Vikram K.",
                    role: "Chartered Accountant",
                    quote: "The instructor's deep knowledge of both finance and SAP made the technical topics very easy to grasp."
                },
                {
                    name: "Amit Kumar",
                    role: "SAP FICO Consultant at Deloitte",
                    quote: "Outstanding financial accounting training with real project exposure. I landed a consulting role at Deloitte within 9 weeks managing FICO implementations. The hands-on labs and expert instructors made all the difference."
                },
                {
                    name: "Priya Sharma",
                    role: "Senior Accountant",
                    quote: "The evening flexibility allowed me to learn while working in finance. My employer was so impressed with my SAP skills that they promoted me to Senior Accountant. This course accelerated my career by 3 years."
                },
                {
                    name: "Rajesh Patel",
                    role: "FICO Consultant",
                    quote: "Best decision I made for my accounting career. The capstone projects were exactly like real client implementations. I walked into my first role feeling confident. The certification support was exceptional."
                }
            ]
        },

        {
            type: 'detailed_upcoming_batches',
            title: "Join Our Next Live Batch – Limited Seats Available for SAP FICO Training",
            subtitle: "Secure your spot in our upcoming batches with flexible timings designed for working professionals",
            batches: [
                {
                    name: "Batch 1: November 2025 (Weekdays)",
                    date: "November 15, 2025",
                    time: "Weekdays – 7:00 AM – 7:00 PM IST",
                    duration: "40 - 45 Hours",
                    seats: "6/10 Seats Left",
                    status: "Filling Fast",
                    statusColor: "bg-orange-100 text-orange-600"
                },
                {
                    name: "Batch 2: November 2025 (Weekends)",
                    date: "November 16, 2025",
                    time: "Weekends – Saturday & Sunday, 10:00 AM – 7:00 PM IST",
                    duration: "40 - 45 Hours",
                    seats: "2/10 Seats Left",
                    status: "Filling Fast",
                    statusColor: "bg-red-100 text-red-600"
                },
                {
                    name: "Batch 3: December 2025 (Flexible)",
                    date: "December 1, 2025",
                    time: "Flexible timings – customized per batch",
                    duration: "40 - 45 Hours (accelerated)",
                    seats: "5/10 Seats Left",
                    status: "Open",
                    statusColor: "bg-green-100 text-green-600"
                }
            ],
            features: [
                { icon: "Zap", text: "Early-bird discounts (10–15% off) for first 10 registrations" },
                { icon: "Users", text: "Personal FICO learning path consultation" },
                { icon: "ShieldCheck", text: "Priority support and financial mentoring" },
                { icon: "CheckCircle2", text: "Networking with cohort members" },
                { icon: "Users", text: "Guaranteed access to current curriculum and trainers" }
            ]
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
                { q: "What is SAP FICO Certification and how is it important?", a: "SAP FICO Certification confirms one owns validation for expertise in financial accounting, and ERPVITS is one of the pathways to prepare one for official certification and become a certified SAP FICO professional." },
                { q: "What is the cost of SAP FICO course in ERPVITS?", a: "SAP FICO course fees are dependent on the program and training mode. We try to provide the strongest value on the market for the hands on learning, learning support, job assistance, and certification assistance which is why our prices are structured the way they are." },
                { q: "What is the price of SAP FICO Certification?", a: "The cost of SAP FICO Certification is determined by SAP Education, while ERPVITS gives complete exam guidance, enables one to practice mock tests, and mentors one to ensure SAP FICO Certification exam is passed in one attempt." },
                { q: "How can I become an SAP FICO Consultant through ERPVITS?", a: "To become an SAP FICO Consultant, join the structured SAP FICO Training Program, complete financial project assignments, and prepare for certification. ERPVITS offers mentorship and job counseling." },
                { q: "What job opportunities are there after the FICO course?", a: "After SAP FICO training, you can pursue roles like SAP FICO Consultant, Accounting Manager, Finance Analyst, Controlling Specialist, or SAP Finance Architect." },
                { q: "How SAP FICO integrates with other modules?", a: "ERPVITS covers integration of FICO with Materials Management (MM), Sales and Distribution (SD), and Human Resource (HR) modules for complete enterprise process understanding." },
                { q: "What are the main FICO functional areas covered?", a: "ERPVITS provides hands-on training in General Ledger, Accounts Payable, Accounts Receivable, Asset Management, Cost Accounting, and Controlling." },
                { q: "What is SAP FICO pricing for companies?", a: "SAP FICO pricing is typically based on per-user or enterprise licenses. ERPVITS discusses these licensing models and offers insights during implementation guidance." },
                { q: "Does ERPVITS provide SAP FICO Training with Placement support?", a: "Yes, ERPVITS provides SAP FICO training with placement support, including resume building, interview preparation, and recruitment assistance." },
                { q: "Can I take SAP FICO Online Training from anywhere?", a: "Yes. ERPVITS offers live SAP FICO online training accessible from anywhere, with recorded sessions and remote lab access for practical exercises." },
                { q: "Is SAP FICO Training available near me?", a: "Yes. ERPVITS offers both online and in-person training options with flexible weekday and weekend batches to suit working professionals." },
                { q: "How does ERPVITS help in SAP FICO Careers?", a: "ERPVITS supports your SAP FICO career through resume building, interview preparation, and job referrals with top SAP consulting firms and financial organizations." }
            ]
        },
        {
            type: 'detailed_demo_booking',
            courseName: "SAP FICO",
            title: "Ready to Become an SAP FICO Consultant?",
            subtitle: "Book your free demo today and take the first step towards a lucrative SAP FICO career",
            benefits: [
                { title: "Sample Live Class Session", desc: "Observe real FICO training and instructor methodology" },
                { title: "30-Min Career Consultation", desc: "Personalized guidance based on your accounting background" },
                { title: "Q&A with Instructor", desc: "Ask questions about FICO course, certification, and career" },
                { title: "Special Discount Offer", desc: "Exclusive discount for demo attendees" }
            ]
        }
    ]
};
