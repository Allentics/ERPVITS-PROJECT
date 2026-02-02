
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const abapContent = {
    id: "abap-cloud",
    title: "SAP ABAP on Cloud",
    price: "Competitive",
    duration: "30-35 Hours",
    syllabusUrl: "/syllabus/ERPVITS Syllabus - Course Contents Pdf/SAP Technical/sap-abap-on-cloud.pdf",

    // Converting React JSX to text/custom markup for DB
    hero_heading: "Gain Expertise in Cloud Development with <gradient>SAP ABAP Training</gradient>",
    hero_subheading: "The **SAP ABAP Training** offered by **ERPVITS** is a game changer for ABAP developers and SAP consultants interested in advancing their skills in cloud application development, contemporary programming, and enterprise software. In a cutting-edge business era, organizations demand certified SAP ABAB on cloud experts as proficient in cloud-native application development, ABAP Cloud runtime application, implementing clean architecture patterns, and digital transformation initiatives. This fully-fledged and comprehensive **SAP ABAP on Cloud training** features live, interactive instructor training, hands-on labs, cloud development projects, and comprehensive certification geared towards development and implementation for ABAP developers, technical consultants, application architects, cloud specialists, and fresh graduates and is focused on global consulting and implementation positions.",

    badges: ["SAP Certified Trainers", "4.7 Learner Rating", "24/7 Team Support"],

    meta_title: "Learn Cloud-Native ABAP Development with SAP ABAP Training",
    meta_description: "Join SAP ABAP Training by ERPVITS. Learn RAP, OData, cloud architecture, and certification preparation through hands-on labs and live instructor sessions.",

    // Schema
    schema: {
        "@context": "https://schema.org/",
        "@type": "Course",
        "name": "SAP ABAP on Cloud Online Training",
        "description": "Master SAP ABAP on Cloud with ERPVITS through hands-on learning in RAP, OData, Fiori, and cloud integration. Gain job-ready skills, certification prep, and placement support.",
        "provider": {
            "@type": "Organization",
            "name": "ERPVITS",
            "sameAs": "https://www.erpvits.com/",
            "logo": "https://www.erpvits.com/images/erpvits-logo.webp"
        },
        "url": "https://www.erpvits.com/sap-abap-on-cloud-online-training/",
        "educationalCredentialAwarded": "SAP ABAP on Cloud Certification",
        "timeRequired": "PT35H",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "bestRating": "5",
            "ratingCount": "248"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "location": {
                "@type": "VirtualLocation",
                "url": "https://www.erpvits.com/sap-abap-on-cloud-online-training/"
            }
        },
        "mainEntityOfPage": "https://www.erpvits.com/sap-abap-on-cloud-online-training/",
        "faq": [
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is SAP ABAP on Cloud and how does ERPVITS help me learn it?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "SAP ABAP on Cloud is SAP’s cloud-native ABAP runtime on SAP Business Technology Platform (BTP) for modern enterprise applications. ERPVITS provides hands-on training in RAP development, cloud architecture, and modernization best practices."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is RAP (Restful Application Programming)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "RAP is SAP’s programming model for building RESTful applications in the ABAP Cloud environment. ERPVITS teaches RAP concepts, implementation techniques, and best practices for developing cloud-ready applications."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I develop OData services in ABAP Cloud?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ERPVITS covers the creation of OData services using business objects, queries, and performance optimization techniques within ABAP Cloud."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What’s the difference between classic ABAP and ABAP on Cloud?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ABAP on Cloud offers a clean, cloud-native architecture with enhanced modularization and restricted syntax. ERPVITS helps you transition smoothly from classic ABAP to ABAP Cloud."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does SAP ABAP on Cloud support modern cloud development?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ABAP on Cloud supports microservices, event-driven architecture, and API-based integrations. ERPVITS provides hands-on experience with these modern cloud principles."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why should I join SAP ABAP on Cloud Training at ERPVITS?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ERPVITS offers live sessions, hands-on projects, and placement support. You’ll also get help with certification preparation, resume building, and interview readiness."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Who can enroll in the SAP ABAP on Cloud course?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "This course is ideal for ABAP developers, technical consultants, cloud engineers, and professionals interested in modernizing their SAP skills."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the SAP ABAP on Cloud Certification and why is it valuable?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The SAP ABAP on Cloud certification validates your expertise in cloud-based ABAP development. ERPVITS helps you prepare through mock tests and mentoring sessions."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the SAP ABAP on Cloud course fees at ERPVITS?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The fees are competitively priced based on the learning mode. It includes live projects, practical sessions, certification assistance, and placement support."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does SAP ABAP on Cloud Certification cost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The certification fee is set by SAP Education. ERPVITS supports you with preparation materials, mock exams, and complete guidance."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How can I become an SAP ABAP on Cloud Developer through ERPVITS?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Enroll in ERPVITS’s training program, complete cloud-based development projects, and prepare for certification. Career counseling and job assistance are also provided."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What career opportunities are available after completing this course?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You can pursue roles such as ABAP Cloud Developer, Cloud Architect, Modernization Consultant, or Solutions Architect in leading SAP consulting firms."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is business object development in ABAP Cloud?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ERPVITS teaches how to design and implement business objects, behaviors, validations, and authorizations within ABAP Cloud."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does SAP ABAP on Cloud integrate with other SAP systems?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You’ll learn to integrate ABAP Cloud with other SAP systems using APIs, OData services, event handling, and secure connectivity."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the main ABAP Cloud development areas covered in the course?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The course includes RAP, OData, Fiori UI, integration, business objects, security, DevOps, and modernization—reinforced through practical exercises."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does ERPVITS provide placement support after training?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. ERPVITS offers resume support, mock interviews, and connects students with SAP consulting and hiring partners."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I take the SAP ABAP on Cloud Online Training from anywhere?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, ERPVITS provides fully online training accessible globally with live instructor sessions and recorded classes."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is SAP ABAP on Cloud Training available near me?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, ERPVITS offers both online and offline training options with flexible weekday and weekend batches."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does ERPVITS support my SAP ABAP on Cloud career journey?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ERPVITS supports your career with guided certification, resume building, mock interviews, and job referrals to top SAP consulting firms."
                        }
                    }
                ]
            }
        ]
    },

    sections: [
        {
            type: 'detailed_features',
            badge: "Why Choose Us",
            title: "Learn SAP ABAP on Cloud from Certified Experts – 100% Hands-On, Job-Oriented Training",
            subtitle: "Our **SAP ABAP on Cloud online training** curriculum is delivered only by certified SAP professionals, each with 12+ years of direct hands-on **ABAP programming training** along with cloud application modernization experience. Instead of passive video courses with self-paced modules, you get live, real-time training with interactive sessions, hands-on approaches where trainers share industry-proven methodologies, answer your questions, and walk you through difficult cloud development steps in a rational manner.",
            items: [
                {
                    title: "Certified Instructor Expertise",
                    description: "Each Trainer is certified and holds official **SAP ABAP cloud certification** credentials, having successfully delivered and executed multiple enterprise-scale cloud application modernizations by innovatively modernizing existing ABAP systems. They don't just teach the theory; they provide cloud deployment case studies, industry-accepted common pitfalls, and best practices that you will find in practice even during your first **SAP ABAP developer course** consulting engagement. This is the true industry perspective that is always missing."
                },
                {
                    title: "100% Hands-On Learning Methodology",
                    description: "Conventional training focuses on SAP ABAP concepts with slides and presentations. Our **ABAP course** takes a step further. Each training session is accompanied by a live presentation on SAP BTP ABAP Environment and a guided lab where you practice what you saw. By the end of the program, you will have been able to build RESTful applications, perform ABAP Cloud RAP implementations, build OData services, develop UIs, and deploy cloud applications on real cloud systems."
                },
                {
                    title: "Industry-Relevant Curriculum",
                    description: "The **SAP ABAP course** content is not theoretical. It mirrors the skills, functions, and the level of responsibility you need to develop and the real-life problem-solving challenges you will face. Whether you are cloud-native applications, modernizing code with ABAP legacy, implementing clean architecture, or solving cloud issues, the program positions you with actionable skills."
                },
                {
                    title: "Constructive Q&A Sessions",
                    description: "In addition to the primary instruction, the program includes dedicated Q&A forums and live office hours where the program instructors answer your questions and explain advanced development issues. They also outline individualized strategies to help you meet your vision and enhance your **ABAP learning** experience."
                },
                {
                    title: "Flexible Batch Timings",
                    description: "Understanding that ABAP developers are likely balancing complex work, family, and education commitments, we provide weekday evening (6 PM – 9 PM IST) and weekend (Saturday & Sunday) options. Since sessions are recorded, we allow asynchronous participation in case you miss a live class. This is to ensure smooth and uninterrupted progress in the **SAP ABAP training online** course."
                },
                {
                    title: "Small Batch Sizes for Personalized Attention",
                    description: "Our approach is to prioritize community learning. This is why we cap class sizes to 8–10 participants, a stark contrast to huge online programs, where learners remain anonymous in the thousands. This means that the teachers can learn your name and your unique situation and provide the necessary scaffolding in complex cloud development."
                },
                {
                    title: "Placement & Career Support",
                    description: "Learning **SAP ABAP on Cloud** is a means to an end, and we believe that end must be a placement. Our career support renders real value by working with learners to build an SAP targeted resume and helping with mock interviews relevant to the current market with real interview questions, and offering interview prep focused on cloud modernization to position candidates for **ABAP on HANA certification** and ABAP on Cloud key offers."
                },
                {
                    title: "Active Alumni Network & Community Forum",
                    description: "Become part of a community of SAP ABAP on Cloud developers and professionals working with the cloud. Participate in professional exchanges, job referrals, and collaboration. The community forum enables seamless sharing, networking, and support."
                },
                {
                    title: "Post-Training Ongoing Support",
                    description: "Learning does not stop after completing the **SAP ABAP full course** as you have six months of post-training support with your instructor. You will be able to reach out for assistance with clarifying theories, overcoming challenges with real world cloud projects, or guidance during your initial cloud development consulting projects."
                }
            ]
        },
        {
            type: 'content_with_image',
            title: "Why Professionals Choose ERPVITS for SAP ABAP on Cloud Online Training",
            description: "ERPVITS has proven to be a reliable **SAP ABAP training institute** for SAP cloud technologies, with many successful learners employed by leading consulting firms including Accenture, Capgemini, Deloitte, Infosys, and Wipro.",
            items: [
                "Trusted by 480+ successful **SAP ABAP certification** developers",
                "Alumni at Accenture, Capgemini, Deloitte, Infosys, Wipro",
                "Personalized pre-evaluation and cloud ABAP learning path",
                "Active alumni network and cloud ABAP developer community forum",
                "50+ guided lab exercises from basic to advanced cloud scenarios",
                "Quarterly updated materials aligned with latest BTP and ABAP Cloud releases",
                "Mock interviews simulating real **ABAP developer course** scenarios",
                "Dedicated **SAP ABAP certification course** prep and technical bootcamp sessions",
                "Complete Support Ecosystem"
            ],
            supportTitle: "Complete Support Ecosystem",
            supportText: "We assist you on every part of your **SAP ABAP on Cloud online training** learning and transition to a Cloud ABAP career, from pre-evaluation to after training.",
            imageSrc: "/images/ERPVITS - All Modules Infographics/ERPVITS - SAP ABAP on Cloud Infographic.webp"
        },
        {
            type: 'whats_included',
            title: "What's Included in the SAP ABAP on Cloud Training – Complete Learning Package",
            subtitle: "Comprehensive, career-related **SAP ABAP training** comprises live sessions with experts, cloud development projects, labs, career support, and other elements to ensure you are ready to work as an SAP ABAP on Cloud developer.",
            features: [
                {
                    title: "Live Interactive Classes",
                    description: "Participate in weekly sessions with a single instructor for 8–10 weeks to complete 30–35 hours of **ABAP online classes** with interactive sessions on cloud development. Attendees may ask questions and participate in the development sessions."
                },
                {
                    title: "Real-world Projects",
                    description: "You will work with case studies inspired by Fortune 500 companies on cloud application modernization, microservices development, RESTful API, and SAP BTP integration."
                },
                {
                    title: "Hands-On Lab Environment",
                    description: "Enjoy full-time access to SAP Business Technology Platform ABAP Environment for the practical application of ABAP Cloud RAP development, OData services, UI implementation, and cloud deployment."
                },
                {
                    title: "Certification Exam Prep",
                    description: "Acquire the necessary skills and knowledge to successfully take the **SAP Certified Development Associate – SAP ABAP Cloud Platform certification** exam through comprehensive study guides, practice tests, and concentrated bootcamp training."
                },
                {
                    title: "Resume & Interview Coaching",
                    description: "Build your confidence with personalized resume refinement, tailored mock technical interviews, and **SAP ABAP developer training** interview coaching."
                }
            ],
            stats: [
                { value: "30-35", label: "Hours of Live Training" },
                { value: "50+", label: "Hands-On Lab Exercises" },
                { value: "24/7", label: "SAP ABAP Cloud Lab Access" }
            ]
        },
        {
            type: 'detailed_curriculum',
            title: "Comprehensive SAP ABAP on Cloud Course Curriculum",
            subtitle: "30-35 hours of expert-led training covering every aspect from basics to advanced cloud ABAP development with **best SAP ABAP online training** practices",
            syllabusUrl: "/syllabus/ERPVITS Syllabus - Course Contents Pdf/SAP Technical/sap-abap-on-cloud.pdf",
            modules: [
                {
                    title: "Module 1: SAP ABAP on Cloud Foundation (4 Hours)",
                    topics: [
                        "SAP Business Technology Platform (BTP) overview",
                        "ABAP on Cloud architecture and runtime",
                        "SAP ABAP Environment features and benefits",
                        "Development tools and IDE setup",
                        "Cloud Connector and connectivity",
                        "ABAP Cloud lifecycle and deployment"
                    ],
                    hands_on: [
                        "Set up ABAP on Cloud environment",
                        "Navigate ABAP Development Tools (ADT)",
                        "Configure Cloud Connector",
                        "Explore BTP architecture components"
                    ]
                },
                {
                    title: "Module 2: ABAP Cloud RAP (REST API Programming) (8 Hours)",
                    topics: [
                        "Restful Application Programming (RAP) overview",
                        "Business object development",
                        "Data model definition",
                        "Behavior implementation",
                        "Validation and authorization",
                        "Active entity and draft handling",
                        "Request handling and response generation"
                    ],
                    hands_on: [
                        "Create ABAP Cloud business objects",
                        "Implement behavior definitions",
                        "Configure validations and authorizations",
                        "Execute RAP test tools"
                    ]
                },
                {
                    title: "Module 3: OData Service Development (6 Hours)",
                    topics: [
                        "OData protocol fundamentals",
                        "OData service creation from business objects",
                        "Query options (filter, select, expand)",
                        "Custom query implementations",
                        "Performance optimization",
                        "OData security and access control",
                        "Deep insert and complex operations"
                    ],
                    hands_on: [
                        "Implementing OData services",
                        "Building custom queries",
                        "Optimizing OData services",
                        "Testing OData services"
                    ]
                },
                {
                    title: "Module 4: SAP ABAP Cloud UI Development (6 Hours)",
                    topics: [
                        "Fiori applications and UI5",
                        "Annotation driven UI generation",
                        "Composition and customization of UIs",
                        "Adaptive UI patterns",
                        "Responsiveness on mobile devices",
                        "Event driven user interactions",
                        "Translations"
                    ],
                    hands_on: [
                        "Design Fiori applications",
                        "Configure UI annotations",
                        "Implement interactive UIs",
                        "Test UI responsiveness"
                    ]
                },
                {
                    title: "Module 5: Clean Architecture & Modern ABAP (5 Hours)",
                    topics: [
                        "Principals of clean architecture",
                        "Layered architecture to ABAP Cloud",
                        "Dependency injection",
                        "Object oriented designs",
                        "Reusability of code",
                        "Maintainability of code",
                        "Testing (unit & integration)",
                        "Design patterns to cloud applications"
                    ],
                    hands_on: [
                        "Implement clean architecture",
                        "Apply design patterns",
                        "Write testable code",
                        "Perform unit and integration testing"
                    ]
                },
                {
                    title: "Module 6: Integration & Connectivity (5 Hours)",
                    topics: [
                        "Cloud integration",
                        "SAP integration suite connectivity",
                        "APIs and micro services",
                        "Event driven architecture",
                        "External systems",
                        "Authentication & Authorization",
                        "Error resilience"
                    ],
                    hands_on: [
                        "External systems integration",
                        "Micro services",
                        "Event driven integration",
                        "Error resilience"
                    ]
                },
                {
                    title: "Module 7: Security & Data Protection (4 Hours)",
                    topics: [
                        "Cloud security fundamentals",
                        "Identity and access management (IAM)",
                        "Encryption and data protection",
                        "Secure coding practices",
                        "Compliance and audit trails",
                        "Role-based authorization",
                        "Data privacy regulations"
                    ],
                    hands_on: [
                        "Configure security policies",
                        "Implement encryption",
                        "Set up access control",
                        "Audit security implementations"
                    ]
                },
                {
                    title: "Module 8: Deployment, Monitoring & Operations (4 Hours)",
                    topics: [
                        "CI/CD pipelines for ABAP Cloud",
                        "Deployment procedures",
                        "Application monitoring",
                        "Performance tuning",
                        "Error tracking and diagnostics",
                        "Scaling and resilience",
                        "DevOps practices for cloud ABAP"
                    ],
                    hands_on: [
                        "Deploy cloud applications",
                        "Configure monitoring",
                        "Perform performance optimization",
                        "Implement DevOps practices"
                    ]
                },
                {
                    title: "Module 9: Migration & Modernization (4 Hours)",
                    topics: [
                        "Legacy ABAP to Cloud migration strategies",
                        "Code refactoring techniques",
                        "Replacement programming model",
                        "Semantic adapter usage",
                        "Migration tools and approaches",
                        "Best practices for modernization",
                        "Risk mitigation strategies"
                    ],
                    hands_on: [
                        "Refactor existing ABAP code",
                        "Use semantic adapters",
                        "Plan migration scenarios",
                        "Implement modernization strategies"
                    ]
                }
            ]
        },
        {
            type: 'detailed_target_audience',
            title: "Who Can Learn SAP ABAP on Cloud? – Perfect for Diverse Career Paths",
            subtitle: "Ideal for cloud ABAP global consulting and implementation target professionals in any field of study with comprehensive SAP ABAP course details.",
            items: [
                {
                    title: "ABAP Developers & Technical Programmers",
                    description: [
                        "Seeking to modernize cloud ABAP",
                        "Migrating Legacy ABAP to the cloud",
                        "Enterprise background tech devs",
                        "Systems Developers Seeking to specialize in cloud"
                    ],
                    icon: "Code",
                    color: "text-blue-600",
                    bg: "bg-blue-50"
                },
                {
                    title: "SAP Technical Consultants",
                    description: [
                        "Cloud ABAP SAP consultants",
                        "Cloud solution SAP tech architects",
                        "Cloud strategy implementer solution designers",
                        "Technical PM managing cloud projects"
                    ],
                    icon: "Briefcase",
                    color: "text-[#ff4500]",
                    bg: "bg-[#ff4500]/10"
                },
                {
                    title: "Cloud & DevOps Professionals",
                    description: [
                        "Experts in the Cloud shifting focus to SAP",
                        "DevOps specialists executing ABAP deployments",
                        "Platform engineers extending support to cloud applications",
                        "Cloud solution architects crafting enterprise architecture"
                    ],
                    icon: "Cloud",
                    color: "text-purple-600",
                    bg: "bg-purple-50"
                },
                {
                    title: "Fresh Graduates & Career Changers",
                    description: [
                        "Engineering graduates shifting towards SAP cloud",
                        "Graduates in computer science moving towards enterprise development",
                        "IT experts shifting to SAP",
                        "Career changers possessing decent programming skills"
                    ],
                    icon: "GraduationCap",
                    color: "text-green-600",
                    bg: "bg-green-50"
                },
                {
                    title: "Existing SAP Cloud Teams",
                    description: [
                        "Teams moving to cloud from classic ABAP",
                        "ABAP developers in customer SAP organizations",
                        "IT divisions overseeing hybrid cloud landscapes",
                        "Cloud transformation implementation project teams"
                    ],
                    icon: "Users",
                    color: "text-indigo-600",
                    bg: "bg-indigo-50"
                }
            ]
        },
        {
            type: 'detailed_prerequisites',
            title: "Prerequisites for SAP ABAP Training",
            items: {
                minimum: [
                    "Fundamental knowledge of ABAP training or wish to learn SAP ABAP",
                    "Object-oriented programming understanding",
                    "Web services and APIs familiarity",
                    "Cloud computing concepts",
                    "Exceptional problem analysis and solving skills"
                ],
                nicetohave: [
                    "Previous experience in SAP ABAP (on-premise)",
                    "Working in cloud platforms (AWS, Azure, GCP)",
                    "RESTful services",
                    "UI5/Fiori development",
                    "Microservices architecture understanding"
                ]
            }
        },
        {
            type: 'detailed_learning_outcomes',
            title: "What You'll Master in This SAP ABAP on Cloud Online Course – Core Competencies",
            subtitle: "After completing the ERPVITS SAP ABAP course online, you will have the following capabilities:",
            items: {
                tabs: [
                    {
                        name: "Cloud Development Mastery",
                        items: [
                            {
                                title: "Cloud-Native ABAP Application Development",
                                points: [
                                    "Build cloud-native ABAP applications using RAP",
                                    "Execute clean architecture implementation",
                                    "Microservices-based solution designing",
                                    "Deploy and manage cloud applications"
                                ],
                                icon: "Cloud"
                            },
                            {
                                title: "RESTful API & OData Development",
                                points: [
                                    "Develop RESTful APIs with ABAP Cloud",
                                    "Create OData services from business objects",
                                    "Implement complex query operations",
                                    "Optimize API performance"
                                ],
                                icon: "Link"
                            },
                            {
                                title: "User Interface Development",
                                points: [
                                    "Build Fiori applications",
                                    "Design annotation-driven UIs",
                                    "Implement responsive designs",
                                    "Create adaptive user experiences"
                                ],
                                icon: "Layout"
                            },
                            {
                                title: "Business Object & Data Modeling",
                                points: [
                                    "Design cloud business objects",
                                    "Implement data models",
                                    "Configure validation and authorization",
                                    "Handle draft and active entity logic"
                                ],
                                icon: "Database"
                            }
                        ]
                    },
                    {
                        name: "Technical Skills",
                        items: [
                            {
                                title: "Integration & Event Architecture",
                                points: [
                                    "Integrate with external systems",
                                    "Implement event-driven patterns",
                                    "Configure microservices communication",
                                    "Handle asynchronous processing"
                                ],
                                icon: "Server"
                            },
                            {
                                title: "Security & Authentication",
                                points: [
                                    "Implement cloud security measures",
                                    "Configure identity and access management",
                                    "Apply encryption and data protection",
                                    "Ensure compliance and audit trails"
                                ],
                                icon: "Lock"
                            },
                            {
                                title: "CI/CD & DevOps",
                                points: [
                                    "Set up CI/CD pipelines",
                                    "Automate deployments",
                                    "Monitor applications",
                                    "Implement scaling and resilience"
                                ],
                                icon: "Settings"
                            },
                            {
                                title: "Migration & Modernization",
                                points: [
                                    "Migrate legacy ABAP code",
                                    "Refactor applications",
                                    "Apply semantic adapters",
                                    "Execute modernization strategies"
                                ],
                                icon: "RefreshCw"
                            }
                        ]
                    }
                ]
            }
        },
        {
            type: 'real_world_scenarios',
            title: "Experience Real-World SAP ABAP on Cloud Scenarios & Business Case Studies",
            subtitle: "Our capstone projects immerse you in realistic cloud development scenarios through SAP ABAP HANA course methodologies. Here are representative examples:",
            items: [
                {
                    title: "Case Study 1: Enterprise ABAP Modernization to Cloud",
                    scenario: "One of the ABAP cloud key account holders needs to migrate mission-critical ABAP applications to the Cloud from on-premise servers and needs Bare Metal Cloud SAP servers for seamless data migration.",
                    role: "Lead ABAP Cloud Developer",
                    responsibilities: [
                        "Design Cloud-native architecture",
                        "Implement RAP-based business objects",
                        "Develop Cloud OData services",
                        "Develop Fiori end-user interfaces",
                        "Design and implement the migration strategy"
                    ],
                    outcome: "Deliverables: Your outputs will be the migration plan, architecture documentation, application code, and test definitions.",
                    icon: "Cloud",
                    bg: "bg-blue-50",
                    iconColor: "text-blue-600"
                },
                {
                    title: "Case Study 2: Microservices Platform Development",
                    scenario: "A technology company building a microservices platform on SAP BTP using ABAP Cloud as core service layer for customer applications.",
                    role: "Lead ABAP Cloud Developer",
                    responsibilities: [
                        "Design microservices-based architecture",
                        "Implement independent ABAP services",
                        "Build APIs for service communication",
                        "Configure event-driven patterns",
                        "Set up monitoring and resilience"
                    ],
                    outcome: "Deliverables: Service specifications, API documentation, architecture diagrams, and operations guide.",
                    icon: "Server",
                    bg: "bg-[#ff4500]/10",
                    iconColor: "text-[#ff4500]"
                },
                {
                    title: "Case Study 3: Real-Time Integration Hub",
                    scenario: "A manufacturing organization implementing ABAP on Cloud as an integration hub connecting SAP and non-SAP systems with real-time data synchronization.",
                    role: "Lead ABAP Cloud Developer",
                    responsibilities: [
                        "Build integration architecture",
                        "Implement real-time synchronization services",
                        "Configure multi-system connectivity",
                        "Deploy monitoring and alerting",
                        "Implement error recovery"
                    ],
                    outcome: "Deliverables: Integration specs, flow diagrams, deployment procedures, and monitoring setup.",
                    icon: "Link",
                    bg: "bg-green-50",
                    iconColor: "text-green-600"
                }
            ]
        },
        {
            type: 'detailed_certification',
            title: "SAP ABAP on Cloud Certification – Your Global Career Credential",
            subtitle: "We Provide Support for Below SAP Certification List",
            targetAudienceLabel: "Value",
            whyMattersTitle: "Why SAP ABAP on Cloud Certification Matters",
            items: [
                {
                    title: "SAP Certified Development Associate – SAP ABAP Cloud Platform",
                    code: "C_ABAP_2407 or equivalent ABAP Cloud certification",
                    focus: "RAP development, OData services, cloud architecture, security",
                    who: "Demonstrates expertise in end-to-end SAP ABAP certification development",
                    relevance: "Cloud ABAP developer, architect, technical consultant roles"
                }
            ],
            supportFeatures: [
                {
                    title: "Targeted Exam Preparation",
                    subtitle: "Study guides aligned to official exam blueprints"
                },
                {
                    title: "Practice Exams",
                    subtitle: "Timed practice tests mirroring real exam conditions"
                },
                {
                    title: "Exam Strategies",
                    subtitle: "Tips for time management, scenario questions, and common pitfalls"
                },
                {
                    title: "Exam Registration Guidance",
                    subtitle: "We assist with exam registration and scheduling"
                },
                {
                    title: "Retake Support",
                    subtitle: "If you don't pass on your first attempt, we provide additional support and retake guidance"
                }
            ],
            benefits: [
                {
                    title: "Global Credential Recognition",
                    desc: "SAP certifications are recognized worldwide by employers, clients, and recruitment agencies"
                },
                {
                    title: "Career Acceleration",
                    desc: "Certified developers command higher salaries (20–35% premium over non-certified)"
                },
                {
                    title: "Competitive Advantage",
                    desc: "Stand out in cloud development job applications and consulting proposals"
                },
                {
                    title: "Continuous Learning",
                    desc: "Certification pushes you to master cloud ABAP thoroughly"
                },
                {
                    title: "Professional Credibility",
                    desc: "Signals to clients and employers that you've met rigorous technical standards"
                }
            ],
            imageSrc: "/images/ERPVITS - All Modules Infographics/ERPVITS - SAP ABAP on Cloud Infographic.webp"
        },
        {
            type: 'detailed_companies'
        },
        {
            type: 'detailed_career_opportunities',
            items: [
                {
                    title: "SAP ABAP on Cloud Developer (Entry Level)",
                    salary: "$125,000–$160,000 | ₹9.5–12.5 LPA",
                    responsibilities: "Build cloud applications, develop services, support deployments",
                    employers: "Accenture, Capgemini, Deloitte, Infosys, Wipro",
                    path: "2–3 years → Senior Cloud ABAP Developer",
                    icon: "Code",
                    color: "blue"
                },
                {
                    title: "Cloud Application Architect / Technical Specialist",
                    salary: "$150,000–$200,000 | ₹12–16 LPA",
                    responsibilities: "Design cloud architectures, lead implementations, mentor teams",
                    employers: "Consulting, Technology, Enterprise",
                    path: "3–5 years → Senior Architect or Solutions Director",
                    icon: "Layers",
                    color: "purple"
                },
                {
                    title: "SAP ABAP Modernization Consultant",
                    salary: "$140,000–$185,000 | ₹11–15 LPA",
                    responsibilities: "Lead ABAP to Cloud migrations, design strategies, manage transformations",
                    employers: "Consulting Agencies, SAP Partners",
                    path: "3–5 years → Cloud Transformation Lead",
                    icon: "RefreshCw",
                    color: "orange"
                }
            ]
        },
        {
            type: 'detailed_demo_booking'
        }
    ]
};

async function syncCourse() {
    console.log(`Syncing course: \${abapContent.title} (\${abapContent.id})`);

    // Prepare data directly using JSON.stringify for complex objects
    const updateData = {
        title: abapContent.title,
        price: abapContent.price,
        duration: abapContent.duration,
        hero_heading: abapContent.hero_heading,
        hero_subheading: abapContent.hero_subheading,
        meta_title: abapContent.metaTitle,
        meta_description: abapContent.metaDescription,
        sections: abapContent.sections, // Supabase client should handle JSON stringification if column is JSONB
        badges: abapContent.badges,
        schema: abapContent.schema
    };

    const { data, error } = await supabase
        .from('courses')
        .update(updateData)
        .eq('id', abapContent.id);

    if (error) {
        console.error('Error updating course:', error);
    } else {
        console.log('Successfully updated course data!');
    }
}

syncCourse();
