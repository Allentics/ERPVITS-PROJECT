import {
    cpiTargetAudience,
    cpiPrerequisites,
    cpiLearningOutcomes,
    cpiRealWorldScenarios
} from './contentHelpers';
import { Section } from './courseData';

export const cpiContent = {
    heroHeading: "Master SAP CPI / Cloud Integration with Real-Time Projects",
    badges: ["New Batch Starting Soon", "100% Job Oriented"],
    description: "The SAP CPI (Cloud Platform Integration) training course by ERPVITS is designed to help you master SAP's cloud-based integration layer. As businesses move to hybrid landscapes, the demand for SAP CPI consultants to connect On-Premise (S/4HANA, ECC) with Cloud applications (SuccessFactors, Ariba, C4C, Salesforce) is skyrocketing. This comprehensive course covers iFlow design, standard adapters (SOAP, OData, IDoc, SFTP), Groovy scripting, security, and monitoring. Whether you are an SAP PI/PO consultant upskilling or a developer starting fresh, our SAP CPI training prepares you for the future of enterprise integration.",
    metaTitle: "SAP CPI Training Online | Cloud Integration Certification",
    metaDescription: "Become an SAP CPI expert with ERPVITS. Learn Cloud Integration, Groovy Scripting, and real-time adapters like OData, SOAP, and IDoc with live projects.",
    sections: [
        {
            type: 'detailed_features',
            title: "Why Professionals Choose ERPVITS for SAP CPI Online Training",
            items: [
                "Trusted by 500+ successful SAP Consultants",
                "Alumni at Accenture, IBM, Deloitte, Capgemini, and TCS",
                "Tailored learning path for PI/PO consultants and freshers",
                "Active alumni network and integration community",
                "40+ guided lab exercises on real-time integration flows",
                "Materials updated for SAP Integration Suite / BTP",
                "Mock interviews simulating real-world client scenarios",
                "Dedicated certification preparation sessions"
            ]
        },
        {
            type: 'detailed_curriculum',
            title: "Comprehensive SAP CPI Course Curriculum",
            modules: [
                {
                    title: "Module 1: Introduction to SAP Cloud Platform Integration (4 Hours)",
                    topics: [
                        "Evolution of SAP Integration (XI/PI/PO to CPI)",
                        "SAP BTP Integration Suite Overview",
                        "CPI Architecture and Tenants",
                        "Eclipse vs. Web UI (Operations View)",
                        "Pre-packaged content vs. Custom iFlows",
                        "Setting up the trial account and environment"
                    ]
                },
                {
                    title: "Module 2: Developing Integration Flows (iFlows) (6 Hours)",
                    topics: [
                        "Navigation in the Design View",
                        "Creating your first 'Hello World' iFlow",
                        "Message Transformers (Content Modifier, Converter, Encoder/Decoder)",
                        "Message Routing (Router, Multicast, Splitter, Aggregator)",
                        "Persisting messages (Data Store)",
                        "Hands-On: Build an iFlow to rout messages based on content"
                    ]
                },
                {
                    title: "Module 3: Connectivity & Adapters (8 Hours)",
                    topics: [
                        "SOAP (1.x, RM) Adapter configuration",
                        "OData Adapter (V2/V4) for querying and updating",
                        "HTTP and IDoc (SOAP) Adapters",
                        "File and SFTP Adapters (Polling, PGP Encryption)",
                        "Mail Adapter (SMTP/IMAP)",
                        "SuccessFactors Adapter basics",
                        "Hands-On: Integrate a 3rd party public API using HTTP/OData"
                    ]
                },
                {
                    title: "Module 4: Message Mapping & Transformation (6 Hours)",
                    topics: [
                        "Message Mapping Editor basics",
                        "Standard functions (String, Boolean, Date)",
                        "User Defined Functions (UDF) using Groovy",
                        "XSLT Mappings",
                        "JSON to XML and XML to JSON converters",
                        "Hands-On: Map a complex nested structure from XML to JSON"
                    ]
                },
                {
                    title: "Module 5: Groovy Scripting for Logic (5 Hours)",
                    topics: [
                        "Basics of Groovy Scripting in CPI",
                        "Accessing Message Headers and Properties",
                        "Parsing XML/JSON with Groovy",
                        "Exception Handling in Scripts",
                        "Logging and Trace in Scripting",
                        "Hands-On: Write a script to calculate total value from line items"
                    ]
                },
                {
                    title: "Module 6: Cloud Connector & Hybrid Integration (4 Hours)",
                    topics: [
                        "Role of SAP Cloud Connector (SCC)",
                        "Installation and Configuration of SCC",
                        "Exposing On-Premise systems (ECC/S4) to Cloud",
                        "Access Control Lists",
                        "Principal Propagation setup",
                        "Hands-On: Simulate On-Prem connection"
                    ]
                },
                {
                    title: "Module 7: Security & Operations (4 Hours)",
                    topics: [
                        "Security Material (User Credentials, OAuth, Keys)",
                        "Certificate Management (Keystore)",
                        "Message Monitoring and Logging steps",
                        "Error Handling Sub-processes",
                        "Alert Notification setup",
                        "Transport Management (MTAR / CTS+)",
                        "Hands-On: Configure OAuth authentication for an iFlow"
                    ]
                },
                {
                    title: "Module 8: Advanced Topics & Real-world Scenarios (3 Hours)",
                    topics: [
                        "Open Connectors introduction",
                        "API Management integration basics",
                        "B2B Trading Partner Management (TPM) overview",
                        "Migration Tool (PI/PO to CPI)",
                        "Best Practices and Naming Conventions"
                    ]
                }
            ]
        },
        {
            type: 'detailed_prerequisites',
            title: "SAP CPI Training Prerequisites",
            items: cpiPrerequisites
        },
        {
            type: 'detailed_target_audience',
            title: "Who Should Learn SAP CPI?",
            items: cpiTargetAudience
        },
        {
            type: 'detailed_learning_outcomes',
            title: "What You Will Master",
            items: cpiLearningOutcomes
        },
        {
            type: 'real_world_scenarios',
            title: "Real-World SAP CPI Scenarios",
            items: cpiRealWorldScenarios
        },
        {
            type: 'detailed_certification',
            title: "SAP CPI Certification – Proof of Your Integration Skills",
            subtitle: "We provide complete support for C_CPI_14 / C_CPI_15 (SAP Certified Development Associate - SAP Integration Suite) exam.",
            badge: "Career Booster",
            content: "Certification demonstrates your ability to design, deploy, and manage complex integration scenarios in SAP BTP. It is highly valued by global employers.",
            items: [
                {
                    title: "Certification Roadmap",
                    description: "Detailed walkthrough of the exam structure, weightage, and registration process."
                },
                {
                    title: "Mock Test Series",
                    description: "Access to 3+ full-length mock exams with questions similar to the actual certification."
                },
                {
                    title: "Key Topic Focus",
                    description: "Revision sessions focusing on challenging areas like Security, Groovy Scripting, and Adapters."
                },
                {
                    title: "Post-Training Support",
                    description: "Continued access to training materials and forum support even after course completion."
                }
            ]
        },
        {
            type: 'detailed_career_opportunities',
            title: "Career Paths After SAP CPI Training",
            items: [
                {
                    role: "SAP CPI / Integration Consultant",
                    salary: "₹9L - ₹16L",
                    description: "Design and build integrations between SAP and non-SAP systems."
                },
                {
                    role: "Integration Architect",
                    salary: "₹20L - ₹35L",
                    description: "Define enterprise integration strategy and hybrid landscapes."
                },
                {
                    role: "SAP BTP Developer",
                    salary: "₹12L - ₹22L",
                    description: "Build extensions and integrations using the broader BTP capabilities."
                },
                {
                    role: "Middleware Administrator",
                    salary: "₹8L - ₹14L",
                    description: "Manage and monitor integration platforms and ensure uptime."
                }
            ]
        },
        {
            type: 'detailed_testimonials',
            title: "Student Success Stories",
            items: [
                {
                    name: "Vikram Singh",
                    role: "SAP Integration Lead",
                    quote: "The deep dive into Groovy scripting was exactly what I needed. I can now handle complex mapping logic that standard functions can't touch.",
                    image: "/images/testimonials/vikram-cpi.webp"
                },
                {
                    name: "Anita Desai",
                    role: "PI/PO Consultant -> CPI",
                    quote: "Transitioning from PI/PO to CPI felt daunting, but this course made the cloud concepts very clear. The Cloud Connector module was excellent.",
                    image: "/images/testimonials/anita-cpi.webp"
                },
                {
                    name: "James Wilson",
                    role: "Java Developer",
                    quote: "I had no SAP background, but the trainer explained the concepts from the ground up. I'm now working on my first integration project.",
                    image: "/images/testimonials/james-cpi.webp"
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
                { q: "What is SAP CPI and why is it important?", a: "SAP Cloud Platform Integration (CPI), now part of SAP Integration Suite, is SAP's middleware for connecting cloud and on-premise applications. It is crucial for modern hybrid landscapes (e.g., S/4HANA to SuccessFactors)." },
                { q: "How is CPI different from PI/PO?", a: "PI/PO is an on-premise middleware, while CPI is cloud-based. CPI offers pre-packaged content, a web-based UI, and is managed by SAP, reducing infrastructure overhead. This course focuses on CPI." },
                { q: "Do I need to know Java or Groovy?", a: "While you can do a lot with standard configuration, knowing basic scripting logic helps for complex transformations. We cover the necessary Groovy scripting from scratch." },
                { q: "Does the training include SAP Cloud Connector?", a: "Yes, we have a dedicated module on installing and configuring the Cloud Connector to securely connect on-premise systems to the cloud." },
                { q: "How do I practice? Do you provide server access?", a: "We guide you on how to set up a free trial account on SAP BTP, which gives you access to the Integration Suite for practice. We also simulate on-premise endpoints." },
                { q: "Is certification support included?", a: "Yes, we cover the topics for the SAP Certified Development Associate - SAP Integration Suite exam and provide mock questions." },
                { q: "Can I get a job with just CPI knowledge?", a: "Yes, CPI is a niche and high-demand skill. However, having background knowledge of general integration concepts or other SAP modules adds value." },
                { q: "What protocols/adapters are covered?", a: "We cover the most common adapters: SOAP, OData (REST), HTTP, IDoc, SFTP, and Mail." }
            ]
        }
    ],
    schema: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Course",
        "name": "SAP CPI Online Training",
        "description": "Master SAP Cloud Platform Integration (CPI) with ERPVITS. Learn iFlows, Groovy Scripting, and Cloud Adapters through real-world projects and expert training.",
        "provider": {
            "@type": "Organization",
            "name": "ERPVITS",
            "url": "https://www.erpvits.com",
            "logo": "https://www.erpvits.com/images/erpvits-logo.webp"
        },
        "url": "https://www.erpvits.com/sap-cpi-online-training/",
        "image": "https://www.erpvits.com/images/erpvits-logo.webp",
        "audience": {
            "@type": "Audience",
            "audienceType": ["Integration Developers", "SAP Consultants", "Java Developers", "Technical Architects"]
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "courseWorkload": "PT40H"
        }
    })
};
