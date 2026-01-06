import {
    sdTargetAudience,
    sdPrerequisites,
    sdLearningOutcomes,
    sdRealWorldScenarios
} from './contentHelpers';
import { Section } from './courseData';

export const sdContent = {
    heroHeading: "Master SAP Order-to-Cash with SAP SD Training",
    badges: ["New Batch Starting Soon", "100% Job Oriented"],
    description: "The SAP SD Training (Sales and Distribution) course by ERPVITS is designed to help you become an expert in the Order-to-Cash (O2C) cycle. SAP SD is one of the most critical modules in SAP S/4HANA and ECC, managing everything from customer orders and shipping to billing and payment. This comprehensive course covers sales order processing, pricing, delivery, billing, and credit management, along with real-time integration with MM, FICO, and PP modules. Whether you are a fresher or an experienced professional, our SAP SD training will equip you with the practical skills needed for a successful consulting career.",
    metaTitle: "SAP SD Training Online | Sales & Distribution Certification Course",
    metaDescription: "Master SAP Sales and Distribution (SD) with ERPVITS. Learn Order-to-Cash, Pricing, Billing, and Credit Management through real-world projects and expert training.",
    sections: [
        {
            type: 'features',
            title: "Why Professionals Choose ERPVITS for SAP SD Online Training",
            items: [
                "Trusted by 500+ successful SAP SD Consultants",
                "Alumni working at Accenture, Deloitte, Capgemini, TCS, and IBM",
                "Tailored learning path for freshers and experienced professionals",
                "Active alumni network and career support community",
                "40+ guided lab exercises covering O2C, Pricing, and Billing",
                "Materials updated for SAP S/4HANA 2023 release",
                "Mock interviews simulating real-world client scenarios",
                "Dedicated certification preparation sessions"
            ]
        },
        {
            type: 'detailed_curriculum',
            title: "Comprehensive SAP SD Course Curriculum",
            modules: [
                {
                    title: "Module 1: Introduction to SAP SD & Enterprise Structure (4 Hours)",
                    topics: [
                        "Overview of SAP S/4HANA and SD Module",
                        "Role of SD in Supply Chain Management",
                        "Definition of Enterprise Structure (Sales Org, Distribution Channel, Division)",
                        "Assignment of Enterprise Structure elements",
                        "Customer Master Data vs. Business Partner (BP) concept",
                        "Material Master Data views for SD",
                        "Hands-On: Configure complete Enterprise Structure for a dummy company"
                    ]
                },
                {
                    title: "Module 2: Sales Document Processing (5 Hours)",
                    topics: [
                        "Sales Document Structure (Header, Item, Schedule Line)",
                        "Sales Document Types (IN, QT, OR, RO, CS)",
                        "Item Categories and determination logic",
                        "Schedule Line Categories and determination",
                        "Copy Control interactions",
                        "Inquiry to Quotation to Order flow",
                        "Hands-On: Create and customize new Sales Order types"
                    ]
                },
                {
                    title: "Module 3: Pricing and Tax Determination (6 Hours)",
                    topics: [
                        "Condition Technique in Pricing (Tables, Access Seq, Types)",
                        "Pricing Procedures and Determination",
                        "Condition Records and Scales",
                        "Special Pricing Functions (Exclusion, Uplift)",
                        "Tax Determination logic",
                        "Free Goods and Rebate Processing (Condition Contract Management)",
                        "Hands-On: Configure a complex Pricing Procedure with discounts and taxes"
                    ]
                },
                {
                    title: "Module 4: Availability Check & Transfer of Requirements (4 Hours)",
                    topics: [
                        "Availability Check (ATP) logic and controls",
                        "Transfer of Requirements features",
                        "Backorder Processing in S/4HANA",
                        "Rescheduling and delivery proposals",
                        "Product Allocation basics",
                        "Hands-On: Test ATP scenarios with limited stock"
                    ]
                },
                {
                    title: "Module 5: Shipping and Delivery (5 Hours)",
                    topics: [
                        "Shipping Point Determination",
                        "Route Determination logic",
                        "Delivery Document types and customization",
                        "Picking, Packing, and Post Goods Issue (PGI)",
                        "Integration with Warehouse Management (Light)",
                        "Returnable Packaging handling",
                        "Hands-On: Execute complete Delivery cycle with PGI"
                    ]
                },
                {
                    title: "Module 6: Billing and Invoicing (5 Hours)",
                    topics: [
                        "Billing Document types (F2, F1, Credit/Debit Memo)",
                        "Invoice Lists and Billing Plans",
                        "Revenue Account Determination (SD-FI Integration)",
                        "Inter-company Billing configuration",
                        "Rebate Settlement (Settlement Management)",
                        "Hands-On: Configure Revenue Account Determination and post invoices"
                    ]
                },
                {
                    title: "Module 7: Credit Management (FSCM) (3 Hours)",
                    topics: [
                        "Overview of SAP Credit Management (FSCM vs. Classic)",
                        "Credit Control Area and Risk Classes",
                        "Credit Limit Checks (Static, Dynamic, Deepest)",
                        "Blocking and Releasing Sales Orders",
                        "Credit Exposure reports",
                        "Hands-On: Set up Automatic Credit Control and test blocking"
                    ]
                },
                {
                    title: "Module 8: Special Business Processes (4 Hours)",
                    topics: [
                        "Consignment Process (Fill-up, Issue, Pick-up, Return)",
                        "Third-Party Sales Process",
                        "Individual Purchase Order (IPO)",
                        "Inter-company Stock Transfer (STO)",
                        "Bill of Material (BOM) in Sales",
                        "Hands-On: Execute Third-Party and Consignment cycles"
                    ]
                },
                {
                    title: "Module 9: Real-Time Integration & Reporting (4 Hours)",
                    topics: [
                        "Integration with MM (Availability, PGI)",
                        "Integration with PP (MRP transfer)",
                        "Integration with FICO (Revenue Account, Credit)",
                        "Standard SD Reports (SIS) and Fiori Analytics",
                        "Idocs and EDI basics for SD",
                        "Output Determination (BRF+ awareness)",
                        "Hands-On: Troubleshoot integration errors during posting"
                    ]
                }
            ]
        },
        {
            type: 'detailed_prerequisites',
            title: "SAP SD Training Prerequisites",
            items: sdPrerequisites
        },
        {
            type: 'detailed_target_audience',
            title: "Who Should Learn SAP SD?",
            items: sdTargetAudience
        },
        {
            type: 'detailed_learning_outcomes',
            title: "What You Will Master",
            items: sdLearningOutcomes
        },
        {
            type: 'real_world_scenarios',
            title: "Real-World SAP SD Scenarios",
            items: sdRealWorldScenarios
        },
        {
            type: 'detailed_certification',
            title: "SAP SD Certification – Your Passport to Global Opportunities",
            subtitle: "We provide complete support for C_TS462_2022 / C_TS462_2023 (SAP Certified Application Associate - SAP S/4HANA Sales) exam.",
            badge: "Career Milestone",
            content: "Achieving SAP SD certification validates your ability to configure and manage key sales processes, making you a preferred candidate for top-tier consulting firms. It demonstrates your expertise in S/4HANA Sales innovations.",
            items: [
                {
                    title: "Exam Application Support",
                    description: "Step-by-step guidance on registering for the certification exam and navigating the SAP Certification Hub."
                },
                {
                    title: "Comprehensive Mock Exams",
                    description: "Access to 5+ full-length mock exams designed to mirror the actual certification difficulty and question format."
                },
                {
                    title: "Topic-Wise Revision",
                    description: "Focused revision sessions on high-weightage topics like Pricing, Billing, and Sales Documents."
                },
                {
                    title: "Digital Badge Guidance",
                    description: "Guidance on how to showcase your SAP Digital Badge on LinkedIn and your resume for maximum visibility."
                }
            ]
        },
        {
            type: 'detailed_career_opportunities',
            title: "Career Paths After SAP SD Training",
            items: [
                {
                    role: "SAP SD Functional Consultant",
                    salary: "₹8L - ₹15L",
                    description: "Implement and support SAP SD solutions, gathering requirements and configuring the system."
                },
                {
                    role: "SAP S/4HANA Sales Lead",
                    salary: "₹18L - ₹30L",
                    description: "Lead large-scale S/4HANA sales implementation projects and design end-to-end solutions."
                },
                {
                    role: "Logistics Solution Architect",
                    salary: "₹25L - ₹45L",
                    description: "Design integrated logistics solutions involving SD, MM, and EWM modules."
                },
                {
                    role: "SAPSD Support Analyst",
                    salary: "₹6L - ₹10L",
                    description: "Provide ongoing support and troubleshooting for existing SAP SD implementations."
                }
            ]
        },
        {
            type: 'detailed_testimonials',
            title: "Success Stories",
            items: [
                {
                    name: "Rahul Verma",
                    role: "SAP SD Consultant at TCS",
                    quote: "The deep dive into Pricing procedures was a game changer. I could confidently clear my interview at TCS. The hands-on labs were very detailed.",
                    image: "/images/testimonials/rahul-sd.webp"
                },
                {
                    name: "Samantha Jones",
                    role: "Supply Chain Analyst",
                    quote: "Coming from a non-IT background, the step-by-step approach helped me grasp complex O2C concepts easily. Highly recommend ERPVITS.",
                    image: "/images/testimonials/samantha-sd.webp"
                },
                {
                    name: "Amit Patel",
                    role: "Sales Manager -> SAP Consultant",
                    quote: "After 10 years in sales, I switched to SAP SD. This course bridged the gap between my domain knowledge and system configuration perfectly.",
                    image: "/images/testimonials/amit-sd.webp"
                }
            ]
        },
        {
            type: 'detailed_demo_booking',
            title: "Experience the Training Before You Commit",
            subtitle: "Join a free live demo session to interact with our expert trainers, see the learning environment, and understand how we can help you achieve your career goals.",
            link: "/book-demo"
        },
        {
            type: 'detailed_faq',
            title: "Frequently Asked Questions",
            items: [
                { q: "Is it possible to register for SAP SD Online Training from any location?", a: "Of course. SAP SD Online training from ERPVITS is reachable from any location. Learning occurs with real-time trainers, where recorded sessions are available afterward for remote practice" },
                { q: "Is there SAP SD Training offered close to my location?", a: "Indeed, ERPVITS has both online and in-person training with convenient scheduling for working professionals on weekends or weekdays." },
                { q: "In what ways does ERPVITS assist with SAP SD Careers", a: "For every stage of your SAP SD career, ERPVITS supports every aspect, which includes, but is not limited to, resume crafting, mock interviews, and job referrals for positions at top SAP consulting firms and companies." }
            ]
        }
    ],
    schema: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "SAP SD Online Training",
        "description": "The SAP Sales & Distribution Online Training Program from ERPVITS provides in-depth learning in order management, billing, shipping, and ERP integration with live sessions, real-world projects, and certification preparation.",
        "provider": {
            "@type": "Organization",
            "name": "ERPVITS",
            "url": "https://www.erpvits.com/",
            "logo": "https://www.erpvits.com/images/erpvits-logo.webp",
            "sameAs": [
                "https://www.instagram.com/erp_vits/",
                "https://www.linkedin.com/company/erpvits/",
                "https://www.youtube.com/@ERPVITS"
            ]
        },
        "url": "https://www.erpvits.com/sap-sd-training/",
        "image": "https://www.erpvits.com/images/erpvits-logo.webp",
        "courseMode": "Online",
        "educationalCredentialAwarded": "SAP SD Certification",
        "timeRequired": "PT35H",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "bestRating": "5",
            "ratingCount": "327"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "instructor": {
                "@type": "Person",
                "name": "Certified SAP SD Trainer",
                "description": "SAP Certified Professional with 10+ years of experience in Sales & Distribution implementation and consulting."
            },
            "duration": "35 Hours"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.erpvits.com/sap-sd-training/"
        },
        "hasPart": {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What does SAP SD cover, and how does ERPVITS facilitate its acquisition?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sales and Distribution (SAP SD) is SAP’s most global and complete solution for order management, shipping, and billing. At ERPVITS, we cover comprehensive SD training with real-life sales scenarios, order-to-cash workflows, hands-on training, and guidance on relevant projects."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What will I learn in the Sales Order module?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "In our Sales Order training, we teach how to create a quotation and sales order, manage inquiry and sales order, convert inquiry to sales order, configure item category, and perform availability check in SAP SD."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the Delivery & Shipping process in SAP SD?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "In ERPVITS, SAP SD training covers all outbound delivery processes, picking and packing, goods issue, and shipping point management."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is Billing & Invoicing in SAP SD?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Invoicing in SD covers the complete billing cycle, including down payments, billing controls, and managing billing documents in real-world scenarios."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does SAP SD support current sales operations?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "SAP SD covers order-to-cash processes such as sales order, delivery, billing, and customer management. ERPVITS provides practical experience with SD workflows used in real implementations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why Join SAP SD Training at ERPVITS?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "ERPVITS provides SAP SD Online Training that includes live sessions, industry-aligned sales projects, certification guidance, and placement assistance with resume and interview support."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Who Can Take SAP SD Course?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Anyone interested in sales operations, order management, or SAP technologies can take the SAP SD course. It suits freshers, professionals, and ERP consultants aiming for job-ready skills."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the SAP SD Certification and Why is it Important?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "SAP SD Certification validates your expertise in sales and distribution. ERPVITS prepares you for the official SAP certification exam and helps you become a certified SAP SD professional."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What Are the Fees for SAP SD Course at ERPVITS?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "SAP SD course fees depend on the selected program and training mode, remaining affordable while offering hands-on learning, placement support, and certification assistance."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the Cost of SAP SD Certification?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "SAP Education determines the certification exam fee. ERPVITS provides full guidance, mentoring, and practice tests to help you pass the exam on your first attempt."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I become an SAP SD Consultant via ERPVITS?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "To become an SAP SD Consultant, register for ERPVITS’s SAP SD program, complete real-world sales projects, and pass certification exams. ERPVITS also supports career guidance and job placement."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What job prospects do I have after the SD course?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "After completing the SAP SD course, you can pursue roles like SAP SD Consultant, Order Management Manager, Billing Specialist, Sales Analyst, or SAP Sales Architect."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does SAP SD collaborate with your other modules?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "ERPVITS provides sessions on how SAP SD integrates with other SAP modules such as Materials Management (MM), Financial Accounting (FI), and Warehouse Management (WM)."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the main functions in the SD area?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The main functions of SAP SD include Sales Orders, Deliveries, Billing, Master Data, Pricing, and the complete Order-to-Cash cycle."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the SAP SD corporate pricing options?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Corporate pricing for SAP SD training depends on license type and company requirements. ERPVITS provides guidance on per-user or enterprise license structures and implementation costs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does ERPVITS provide SAP SD Training with Placement Support?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. ERPVITS provides SAP SD training with placement support, resume development, interview preparation, and recruiter assistance for job placement."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is it possible to register for SAP SD Online Training from any location?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. SAP SD Online Training from ERPVITS is available globally with live interactive sessions and recorded classes for flexible practice."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is there SAP SD Training offered close to my location?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. ERPVITS offers both online and in-person SAP SD training with flexible scheduling options for working professionals."
                    }
                },
                {
                    "@type": "Question",
                    "name": "In what ways does ERPVITS assist with SAP SD Careers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "ERPVITS supports SAP SD career growth with resume building, mock interviews, job referrals, and placement support with top SAP consulting companies."
                    }
                }
            ]
        }
    })
};
