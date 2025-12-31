import { aribaContent } from './aribaContent';
import { fieldglassContent } from './fieldglassContent';
import { trmContent } from './trmContent';
import { mmContent } from './mmContent';
import { ficoContent } from './ficoContent';
import { sdContent } from './sdContent';
import { c4cContent } from './c4cContent';
import { cpiContent } from './cpiContent';

export interface FAQ {
  question: string;
  answer: string;
}

export interface CurriculumModule {
  title: string;
  topics: string[];
}

export const defaultFaqs: FAQ[] = [
  { question: "Do you provide certification support?", answer: "Yes, we provide complete guidance for SAP certification, including practice tests, study materials, and exam booking assistance. Our curriculum is 100% aligned with the latest SAP certification exam blueprints." },
  { question: "Are the classes live or recorded?", answer: "All our sessions are live instructor-led online classes. We also provide recordings of every session for your lifetime reference so you can review the concepts anytime." },
  { question: "Do you offer placement assistance?", answer: "Yes, we have a dedicated placement cell that helps with resume building, mock interviews, and connecting you with our 200+ hiring partners across the globe." },
  { question: "What are the prerequisites for these courses?", answer: "Prerequisites vary by module, but generally, a basic understanding of business processes or IT fundamentals is helpful. We provide foundational sessions for beginners to get them up to speed." },
  { question: "Is there a group discount available?", answer: "Yes, we offer attractive discounts for group enrollments (3 or more candidates). Please contact our support team for a personalized quote." }
];

export function getDefaultDetailedFeatures(courseTitle: string) {
  return [
    {
      title: "Certified Industry Experts",
      description: `Learn ${courseTitle} from instructors with 12+ years of global project experience. Our trainers are SAP certified professionals who bring real-world business scenarios directly to the virtual classroom.`
    },
    {
      title: "100% Hands-On Approach",
      description: `Master ${courseTitle} through extensive practical sessions. We provide 24/7 server access and guided lab exercises that simulate real implementation projects, ensuring you gain confidence in system configuration.`
    },
    {
      title: "Job-Oriented Curriculum",
      description: `Our ${courseTitle} training is designed around current market demands. We cover the entire lifecycle — from foundational concepts to advanced configurations — preparing you for global consulting roles.`
    },
    {
      title: "Interactive Live Learning",
      description: `Experience high-impact, live instructor-led sessions for ${courseTitle}. Get your doubts cleared in real-time, participate in interactive Q&As, and benefit from personalized mentorship throughout the program.`
    },
    {
      title: "Small Batch Priority",
      description: `We limit our ${courseTitle} batches to 8-10 students to ensure individual attention. This focused environment allows our experts to monitor your progress and provide custom feedback on your learning journey.`
    },
    {
      title: "Placement & Career Success",
      description: `Our committed career support team helps you build a high-impact profile for ${courseTitle}. We provide resume optimization, conduct mock technical interviews, and connect you with leading global hiring partners.`
    }
  ];
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  company?: string;
  image?: string;
}

export interface Section {
  type: 'rich_text' | 'features' | 'list_checker' | 'curriculum' | 'testimonials' | 'faq' | 'detailed_features';
  title?: string;
  subtitle?: string;
  content?: string;
  items?: string[] | any[];
  modules?: CurriculumModule[];
}

export interface Course {
  id: string;
  title: string;
  heroHeading: string;
  heroSubheading?: string;
  description?: string;
  features: string[];
  category: 'Functional' | 'Technical';
  duration?: string;
  price?: string;
  curriculum: CurriculumModule[];
  faqs: FAQ[];
  inFaqSection?: boolean;
  sections?: Section[];
  metaTitle?: string;
  metaDescription?: string;
  schema?: string;
  heroImage?: string;
  badges?: string[];
}

export const courses: Course[] = [
  {
    "id": "sap-ariba",
    "title": "SAP Ariba",
    "heroHeading": aribaContent.heroHeading,
    "badges": aribaContent.badges,
    "description": aribaContent.description,
    "heroImage": "/images/sap-ariba-tips.png",
    "features": [
      "12+ Years Expert Instructors",
      "100% Hands-On Training",
      "SAP Certification Support",
      "Real-World Projects",
      "Trusted by 500+ Successful Students"
    ],
    "curriculum": [],
    "faqs": [],
    "inFaqSection": false,
    "duration": "45-50 hours",
    "price": "45,000/- INR",
    "category": "Functional",
    "sections": aribaContent.sections as Section[],
    "metaTitle": aribaContent.metaTitle,
    "metaDescription": aribaContent.metaDescription,
    "schema": aribaContent.schema
  },
  {
    "id": "sap-fieldglass",
    "title": "SAP Fieldglass",
    "heroHeading": fieldglassContent.heroHeading,
    "badges": fieldglassContent.badges,
    "description": fieldglassContent.description,
    "heroImage": "/images/sap-fieldglass-tips.png",
    "features": [
      "SAP Certified Trainers",
      "4.7 Learner Rating",
      "24/7 Team Support",
      "100% Hands-On Training",
      "Job-Oriented Curriculum"
    ],
    "curriculum": [],
    "faqs": [],
    "inFaqSection": false,
    "duration": "35+ hours",
    "price": "45,000/- INR",
    "category": "Functional",
    "sections": fieldglassContent.sections as Section[],
    "metaTitle": fieldglassContent.metaTitle,
    "metaDescription": fieldglassContent.metaDescription,
    "schema": fieldglassContent.schema
  },


  {
    "id": "sap-mm",
    "title": "SAP S/4HANA MM",
    "heroHeading": mmContent.heroHeading,
    "badges": mmContent.badges,
    "description": mmContent.description,
    "heroImage": "/images/sap-mm-tips.png",
    "features": [
      "SAP Certified Trainers",
      "4.8 Learner Rating",
      "24/7 Team Support",
      "100% Hands-On Labs",
      "Job-Oriented Curriculum"
    ],
    "curriculum": [],
    "faqs": [],
    "inFaqSection": false,
    "duration": "45-50 hours",
    "price": "45,000/- INR",
    "category": "Functional",
    "sections": mmContent.sections as Section[],
    "metaTitle": mmContent.metaTitle,
    "metaDescription": mmContent.metaDescription,
    "schema": mmContent.schema
  },
  {
    "id": "fico",
    "title": "SAP FICO",
    "heroHeading": ficoContent.heroHeading,
    "badges": ficoContent.badges,
    "description": ficoContent.description,
    "heroImage": "/images/sap-fico-tips.png",
    "features": [
      "SAP Certified Trainers",
      "Real-Time Finance Scenarios",
      "Certification Exam Support",
      "Placement Assistance",
      "Lifetime Recording Access"
    ],
    "curriculum": [],
    "faqs": [],
    "inFaqSection": false,
    "duration": "40-45 hours",
    "price": "40,000/- INR",
    "category": "Functional",
    "sections": ficoContent.sections as Section[],
    "metaTitle": ficoContent.metaTitle,
    "metaDescription": ficoContent.metaDescription,
    "schema": ficoContent.schema
  },
  {
    "id": "sd",
    "title": "SAP SD",
    "heroHeading": sdContent.heroHeading,
    "badges": sdContent.badges,
    "description": sdContent.description,
    "heroImage": "/images/sap-sd-tips.png",
    "features": [
      "SAP Certified Trainers",
      "Real-Time Sales Scenarios",
      "Certification Exam Support",
      "Placement Assistance",
      "Lifetime Recording Access"
    ],
    "curriculum": [],
    "faqs": [],
    "inFaqSection": false,
    "duration": "30-35 hours",
    "price": "35,000/- INR",
    "category": "Functional",
    "sections": sdContent.sections as Section[],
    "metaTitle": sdContent.metaTitle,
    "metaDescription": sdContent.metaDescription,
    "schema": sdContent.schema
  },
  {
    "id": "c4c-technical",
    "title": "SAP C4C Technical",
    "heroHeading": c4cContent.heroHeading,
    "badges": c4cContent.badges,
    "description": c4cContent.description,
    "heroImage": "/images/sap-c4c-technical-tips.png",
    "features": [
      "SAP Certified Trainers",
      "Real-World Development Projects",
      "Certification Exam Support",
      "Placement Assistance",
      "Lifetime Recording Access"
    ],
    "curriculum": [],
    "faqs": [],
    "inFaqSection": false,
    "duration": "30-35 hours",
    "price": "45,000/- INR",
    "category": "Technical",
    "sections": c4cContent.sections as Section[],
    "metaTitle": c4cContent.metaTitle,
    "metaDescription": c4cContent.metaDescription,
    "schema": c4cContent.schema
  },

  {
    id: 'cpi',
    title: 'SAP CPI',
    heroHeading: cpiContent.heroHeading,
    badges: cpiContent.badges,
    description: cpiContent.description,
    heroImage: "/images/sap-cpi-tips.png",
    features: [],
    curriculum: [],
    faqs: [],
    inFaqSection: false,
    duration: '30-35 Hours',
    price: '45,000/- INR',
    category: 'Technical',
    sections: cpiContent.sections as Section[],
    metaTitle: cpiContent.metaTitle,
    metaDescription: cpiContent.metaDescription,
    schema: cpiContent.schema
  },
  {
    "id": "abap-cloud",
    "title": "SAP ABAP on Cloud",
    "heroHeading": "Gain Expertise in Cloud Development with SAP ABAP Training",
    "badges": ["New Batch Starting Soon", "100% Job Oriented"],
    "description": "The SAP ABAP Training offered by ERPVITS is a game changer for ABAP developers and SAP consultants interested in advancing their skills in cloud application development, contemporary programming, and enterprise software. In a cutting-edge business era, organizations demand certified SAP ABAB on cloud experts as proficient in cloud-native application development, ABAP Cloud runtime application, implementing clean architecture patterns, and digital transformation initiatives. This fully-fledged and comprehensive SAP ABAP on Cloud training features live, interactive instructor training, hands-on labs, cloud development projects, and comprehensive certification geared towards development and implementation for ABAP developers, technical consultants, application architects, cloud specialists, and fresh graduates and is focused on global consulting and implementation positions.\n\n\n\n✅ SAP Certified Trainers ✅ 4.7 Learner Rating ✅ 24/7 Team Support\n\nOur SAP ABAP on Cloud online training curriculum is delivered only by certified SAP professionals, each with 12+ years of direct hands-on ABAP programming training along with cloud application modernization experience. Instead of passive video courses with self-paced modules, you get live, real-time training with interactive sessions, hands-on approaches where trainers share industry-proven methodologies, answer your questions, and walk you through difficult cloud development steps in a rational manner.\n\nCertified Instructor Expertise: Each Trainer is certified and holds official SAP ABAP cloud certification credentials, having successfully delivered and executed multiple enterprise-scale cloud application modernizations by innovatively modernizing existing ABAP systems. They don't just teach the theory; they provide cloud deployment case studies, industry-accepted common pitfalls, and best practices that you will find in practice even during your first SAP ABAP developer course consulting engagement. This is the true industry perspective that is always missing.\n\n100% Hands-On Learning Methodology: Conventional training focuses on SAP ABAP concepts with slides and presentations. Our ABAP course takes a step further. Each training session is accompanied by a live presentation on SAP BTP ABAP Environment and a guided lab where you practice what you saw. By the end of the program, you will have been able to build RESTful applications, perform ABAP Cloud RAP implementations, build OData services, develop UIs, and deploy cloud applications on real cloud systems.\n\nIndustry-Relevant Curriculum: The SAP ABAP course content is not theoretical. It mirrors the skills, functions, and the level of responsibility you need to develop and the real-life problem-solving challenges you will face. Whether you are cloud-native applications, modernizing code with ABAP legacy, implementing clean architecture, or solving cloud issues, the program positions you with actionable skills.\n\nConstructive Q&A Sessions: In addition to the primary instruction, the program includes dedicated Q&A forums and live office hours where the program instructors answer your questions and explain advanced development issues. They also outline individualized strategies to help you meet your vision and enhance your ABAP learning experience.\n\nFlexible Batch Timings: Understanding that ABAP developers are likely balancing complex work, family, and education commitments, we provide weekday evening (6 PM – 9 PM IST) and weekend (Saturday & Sunday) options. Since sessions are recorded, we allow asynchronous participation in case you miss a live class. This is to ensure smooth and uninterrupted progress in the SAP ABAP training online course.\n\nSmall Batch Sizes for Personalized Attention: Our approach is to prioritize community learning. This is why we cap class sizes to 8–10 participants, a stark contrast to huge online programs, where learners remain anonymous in the thousands. This means that the teachers can learn your name and your unique situation and provide the necessary scaffolding in complex cloud development.\n\nPlacement & Career Support: Learning SAP ABAP on Cloud is a means to an end, and we believe that end must be a placement. Our career support renders real value by working with learners to build an SAP targeted resume and helping with mock interviews relevant to the current market with real interview questions, and offering interview prep focused on cloud modernization to position candidates for ABAP on HANA certification and ABAP on Cloud key offers.\n\nActive Alumni Network & Community Forum: Become part of a community of SAP ABAP on Cloud developers and professionals working with the cloud. Participate in professional exchanges, job referrals, and collaboration. The community forum enables seamless sharing, networking, and support.\n\nPost-Training Ongoing Support: Learning does not stop after completing the SAP ABAP full course as you have six months of post-training support with your instructor. You will be able to reach out for assistance with clarifying theories, overcoming challenges with real world cloud projects, or guidance during your initial cloud development consulting projects. You will be able to reach out to your instructor for support during your post-training support period to clarify cloud consulting development theories, troubleshoot complex real world projects, or query during your initial engagements.\n\nERPVITS has proven to be a reliable SAP ABAP training institute for SAP cloud technologies, with many successful learners employed by leading consulting firms including Accenture, Capgemini, Deloitte, Infosys, and Wipro.\n\nWe assist you on every part of your SAP ABAP on Cloud online training learning and transition to a Cloud ABAP career, from pre-evaluation to after training.\n\nComprehensive, career-related SAP ABAP training comprises live sessions with experts, cloud development projects, labs, career support, and other elements to ensure you are ready to work as an SAP ABAP on Cloud developer.\n\nLive Interactive Classes: Participate in weekly sessions with a single instructor for 8–10 weeks to complete 30–35 hours of ABAP online classes with interactive sessions on cloud development. Attendees may ask questions and participate in the development sessions.\n\nReal-world Projects: You will work with case studies inspired by Fortune 500 companies on cloud application modernization, microservices development, RESTful API, and SAP BTP integration.\n\nHands-On Lab Environment: Enjoy full-time access to SAP Business Technology Platform ABAP Environment for the practical application of ABAP Cloud RAP development, OData services, UI implementation, and cloud deployment.\n\nCertification Exam Prep: Acquire the necessary skills and knowledge to successfully take the SAP Certified Development Associate – SAP ABAP Cloud Platform certification exam through comprehensive study guides, practice tests, and concentrated bootcamp training.\n\nResume & Interview Coaching: Build your confidence with personalized resume refinement, tailored mock technical interviews, and SAP ABAP developer training interview coaching.\n\nComplete Study Materials: Enjoy comprehensive study resources including PDFs, presentations, code samples, architecture documents, interview question banks, and links to official SAP resources.\n\nLifetime Recording Access: All live sessions on cloud development are recorded, transcribed, and indexed for easy access, revision, and lifelong retention of essential, actionable information.\n\nExpert Q&A Sessions: Actively participate in weekly 60-minute live sessions, which focus on cloud ABAP development concepts, offering project guidance and career mentoring.\n\n30-35 hours of expert-led training covering every aspect from basics to advanced cloud ABAP development with best SAP ABAP online training practices",
    "heroImage": "/images/sap-abap-cloud-tips.png",
    "features": [
      "Trusted by 480+ successful SAP ABAP certification developers",
      "Alumni at Accenture, Capgemini, Deloitte, Infosys, Wipro",
      "Personalized pre-evaluation and cloud ABAP learning path",
      "Active alumni network and cloud ABAP developer community forum",
      "50+ guided lab exercises from basic to advanced cloud scenarios",
      "Quarterly updated materials aligned with latest BTP and ABAP Cloud releases",
      "Mock interviews simulating real ABAP developer course scenarios",
      "Dedicated SAP ABAP certification course prep and technical bootcamp sessions"
    ],
    "curriculum": [
      {
        "title": "Module 1: SAP ABAP on Cloud Foundation (4 Hours)",
        "topics": [
          "What You'll Learn:",
          "SAP Business Technology Platform (BTP) overview",
          "ABAP on Cloud architecture and runtime",
          "SAP ABAP Environment features and benefits",
          "Development tools and IDE setup",
          "Cloud Connector and connectivity",
          "ABAP Cloud lifecycle and deployment",
          "Hands-On Activities:",
          "Set up ABAP on Cloud environment",
          "Navigate ABAP Development Tools (ADT)",
          "Configure Cloud Connector",
          "Explore BTP architecture components"
        ]
      },
      {
        "title": "Module 2: ABAP Cloud RAP (REST API Programming) (8 Hours)",
        "topics": [
          "What You'll Learn:",
          "Restful Application Programming (RAP) overview",
          "Business object development",
          "Data model definition",
          "Behavior implementation",
          "Validation and authorization",
          "Active entity and draft handling",
          "Request handling and response generation",
          "Hands-On Activities:",
          "Create ABAP Cloud business objects",
          "Implement behavior definitions",
          "Configure validations and authorizations",
          "Execute RAP test tools"
        ]
      },
      {
        "title": "Module 3: OData Service Development (6 Hours)",
        "topics": [
          "What You'll Learn:",
          "OData protocol fundamentals",
          "OData service creation from business objects",
          "Query options (filter, select, expand)",
          "Custom query implementations",
          "Performance optimization",
          "OData security and access control",
          "Deep insert and complex operations",
          "Hands-On Activities:",
          "Implementing OData services",
          "Building custom queries",
          "Optimizing OData services",
          "Testing OData services"
        ]
      },
      {
        "title": "Module 4: SAP ABAP Cloud UI Development (6 Hours)",
        "topics": [
          "What You'll Learn:",
          "Fiori applications and UI5",
          "Annotation driven UI generation",
          "Composition and customization of UIs",
          "Adaptive UI patterns",
          "Responsiveness on mobile devices",
          "Event driven user interactions",
          "Translations",
          "Hands-On Activities:",
          "Design Fiori applications",
          "Configure UI annotations",
          "Implement interactive UIs",
          "Test UI responsiveness"
        ]
      },
      {
        "title": "Module 5: Clean Architecture & Modern ABAP (5 Hours)",
        "topics": [
          "What You'll Learn:",
          "Principals of clean architecture",
          "Layered architecture to ABAP Cloud",
          "Dependency injection",
          "Object oriented designs",
          "Reusability of code",
          "Maintainability of code",
          "Testing (unit & integration)",
          "Design patterns to cloud applications",
          "Hands-On Activities:",
          "Implement clean architecture",
          "Apply design patterns",
          "Write testable code",
          "Perform unit and integration testing"
        ]
      },
      {
        "title": "Module 6: Integration & Connectivity (5 Hours)",
        "topics": [
          "What You'll Learn:",
          "Cloud integration",
          "SAP integration suite connectivity",
          "APIs and micro services",
          "Event driven architecture",
          "External systems",
          "Authentication & Authorization",
          "Error resilience",
          "Hands-On Activities:",
          "External systems integration",
          "Micro services",
          "Event driven integration",
          "Error resilience"
        ]
      },
      {
        "title": "Module 7: Security & Data Protection (4 Hours)",
        "topics": [
          "What You'll Learn:",
          "Cloud security fundamentals",
          "Identity and access management (IAM)",
          "Encryption and data protection",
          "Secure coding practices",
          "Compliance and audit trails",
          "Role-based authorization",
          "Data privacy regulations",
          "Hands-On Activities:",
          "Configure security policies",
          "Implement encryption",
          "Set up access control",
          "Audit security implementations"
        ]
      },
      {
        "title": "Module 8: Deployment, Monitoring & Operations (4 Hours)",
        "topics": [
          "What You'll Learn:",
          "CI/CD pipelines for ABAP Cloud",
          "Deployment procedures",
          "Application monitoring",
          "Performance tuning",
          "Error tracking and diagnostics",
          "Scaling and resilience",
          "DevOps practices for cloud ABAP",
          "Hands-On Activities:",
          "Deploy cloud applications",
          "Configure monitoring",
          "Perform performance optimization",
          "Implement DevOps practices"
        ]
      },
      {
        "title": "Module 9: Migration & Modernization (4 Hours)",
        "topics": [
          "What You'll Learn:",
          "Legacy ABAP to Cloud migration strategies",
          "Code refactoring techniques",
          "Replacement programming model",
          "Semantic adapter usage",
          "Migration tools and approaches",
          "Best practices for modernization",
          "Risk mitigation strategies",
          "Hands-On Activities:",
          "Refactor existing ABAP code",
          "Use semantic adapters",
          "Plan migration scenarios",
          "Implement modernization strategies",
          "Ideal for cloud ABAP global consulting and implementation target professionals in any field of study with comprehensive SAP ABAP course details.",
          "Seeking to modernize cloud ABAP",
          "Migrating Legacy ABAP to the cloud",
          "Enterprise background tech devs",
          "Systems Developers Seeking to specialize in cloud",
          "Cloud ABAP SAP consultants",
          "Cloud solution SAP tech architects",
          "Cloud strategy implementer solution designers",
          "Technical PM managing cloud projects",
          "Experts in the Cloud shifting focus to SAP",
          "DevOps specialists executing ABAP deployments",
          "Platform engineers extending support to cloud applications",
          "Cloud solution architects crafting enterprise architecture",
          "Engineering graduates shifting towards SAP cloud",
          "Graduates in computer science moving towards enterprise development",
          "IT experts shifting to SAP",
          "Career changers possessing decent programming skills",
          "Teams moving to cloud from classic ABAP",
          "ABAP developers in customer SAP organizations",
          "IT divisions overseeing hybrid cloud landscapes",
          "Cloud transformation implementation project teams",
          "Minimum Requirements:",
          "Fundamental knowledge of ABAP training or wish to learn SAP ABAP",
          "Object-oriented programming understanding",
          "Web services and APIs familiarity",
          "Cloud computing concepts",
          "Exceptional problem analysis and solving skills",
          "Nice-to-Have (But Not Required):",
          "Previous experience in SAP ABAP (on-premise)",
          "Working in cloud platforms (AWS, Azure, GCP)",
          "RESTful services",
          "UI5/Fiori development",
          "Microservices architecture understanding",
          "After completing the ERPVITS SAP ABAP course online, you will have the following capabilities:",
          "1. Cloud-Native ABAP Application Development",
          "✅ Build cloud-native ABAP applications using RAP",
          "✅ Execute clean architecture implementation",
          "✅ Microservices-based solution designing",
          "✅ Deploy and manage cloud applications",
          "2. RESTful API & OData Development",
          "✅ Develop RESTful APIs with ABAP Cloud",
          "✅ Create OData services from business objects",
          "✅ Implement complex query operations",
          "✅ Optimize API performance",
          "3. User Interface Development",
          "✅ Build Fiori applications",
          "✅ Design annotation-driven UIs",
          "✅ Implement responsive designs",
          "✅ Create adaptive user experiences",
          "4. Business Object & Data Modeling",
          "✅ Design cloud business objects",
          "✅ Implement data models",
          "✅ Configure validation and authorization",
          "✅ Handle draft and active entity logic",
          "5. Integration & Event Architecture",
          "✅ Integrate with external systems",
          "✅ Implement event-driven patterns",
          "✅ Configure microservices communication",
          "✅ Handle asynchronous processing",
          "6. Security & Authentication",
          "✅ Implement cloud security measures",
          "✅ Configure identity and access management",
          "✅ Apply encryption and data protection",
          "✅ Ensure compliance and audit trails",
          "7. CI/CD & DevOps",
          "✅ Set up CI/CD pipelines",
          "✅ Automate deployments",
          "✅ Monitor applications",
          "✅ Implement scaling and resilience",
          "8. Migration & Modernization",
          "✅ Migrate legacy ABAP code",
          "✅ Refactor applications",
          "✅ Apply semantic adapters",
          "✅ Execute modernization strategies",
          "Our capstone projects immerse you in realistic cloud development scenarios through SAP ABAP HANA course methodologies. Here are representative examples:",
          "Scenario: One of the ABAP cloud key account holders needs to migrate mission-critical ABAP applications to the Cloud from on-premise servers and needs Bare Metal Cloud SAP servers for seamless data migration and the incorporation of new Cloud-native capabilities with little to no disruption to the ongoing on-premise business operations.",
          "Your Role: As the lead ABAP Cloud developer, you will:",
          "Design Cloud-native architecture",
          "Implement RAP-based business objects",
          "Develop Cloud OData services",
          "Develop Fiori end-user interfaces",
          "Design and implement the migration strategy",
          "Deliverables: Your outputs will be the migration plan, architecture documentation, application code, and test definitions.",
          "Scenario: A technology company building a microservices platform on SAP BTP using ABAP Cloud as core service layer for customer applications.",
          "Your Role: You will:",
          "Design microservices-based architecture",
          "Implement independent ABAP services",
          "Build APIs for service communication",
          "Configure event-driven patterns",
          "Set up monitoring and resilience",
          "Deliverables: Service specifications, API documentation, architecture diagrams, and operations guide.",
          "Scenario: A manufacturing organization implementing ABAP on Cloud as an integration hub connecting SAP and non-SAP systems with real-time data synchronization.",
          "Your Role: You will:",
          "Build integration architecture",
          "Implement real-time synchronization services",
          "Configure multi-system connectivity",
          "Deploy monitoring and alerting",
          "Implement error recovery",
          "Deliverables: Integration specs, flow diagrams, deployment procedures, and monitoring setup.",
          "By completing these projects, you gain the experience of solving real-world problems, as well as graduating with portfolio pieces. This experience is invaluable as you embark on your first cloud ABAP certification engagement.",
          "SAP Certified Development Associate – SAP ABAP Cloud Platform",
          "Exam Code: C_ABAP_2407 or equivalent ABAP Cloud certification",
          "Focus: RAP development, OData services, cloud architecture, security",
          "Value: Demonstrates expertise in end-to-end SAP ABAP certification development",
          "Job Relevance: Cloud ABAP developer, architect, technical consultant roles",
          "Targeted Exam Preparation: Study guides aligned to official exam blueprints",
          "Practice Exams: Timed practice tests mirroring real exam conditions",
          "Exam Strategies: Tips for time management, scenario questions, and common pitfalls Exam Registration Guidance: We assist with exam registration and scheduling",
          "Retake Support: If you don't pass on your first attempt, we provide additional support and retake guidance",
          "Global Credential Recognition: SAP certifications are recognized worldwide by employers, clients, and recruitment agencies",
          "Career Acceleration: Certified developers command higher salaries (20–35% premium over non-certified)",
          "Competitive Advantage: Stand out in cloud development job applications and consulting proposals",
          "Continuous Learning: Certification pushes you to master cloud ABAP thoroughly",
          "Professional Credibility: Signals to clients and employers that you've met rigorous technical standards",
          "Step Into Global Cloud Development and Architecture Roles with SAP developer course expertise"
        ]
      }
    ],
    "faqs": [],
    "inFaqSection": false,
    "duration": "30-35 hours",
    "price": "45,000/- INR",
    "category": "Technical"
  },
  {
    "id": "trm",
    "title": "SAP TRM",
    "heroHeading": trmContent.heroHeading,
    "badges": trmContent.badges,
    "description": trmContent.description,
    "heroImage": "/images/sap-trm-tips.png",
    "features": [
      "SAP Certified Trainers",
      "4.8 Learner Rating",
      "24/7 Team Support",
      "100% Hands-On Labs",
      "Job-Oriented Curriculum"
    ],
    "curriculum": [],
    "faqs": [],
    "inFaqSection": false,
    "duration": "50 hours",
    "price": "45,000/- INR",
    "category": "Functional",
    "sections": trmContent.sections as Section[],
    "metaTitle": trmContent.metaTitle,
    "metaDescription": trmContent.metaDescription,
    "schema": trmContent.schema
  }
];

export function getCourse(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}
