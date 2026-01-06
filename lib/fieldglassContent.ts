import {
    fieldglassTargetAudience,
    fieldglassPrerequisites,
    fieldglassLearningOutcomes,
    fieldglassRealWorldScenarios
} from './contentHelpers';
import { Section } from './courseData';

export const fieldglassContent = {
    heroHeading: "Master SAP Fieldglass Training – Contingent Workforce & Services Procurement",
    badges: ["New Batch Starting Soon", "100% Job Oriented"],
    description: "SAP Fieldglass is the market-leading Vendor Management System (VMS) used by global enterprises to manage flexible workforces and services procurement. This SAP Fieldglass training by ERPVITS covers the complete lifecycle of contingent workforce management, statement of work (SOW) projects, and vendor management. You will learn to configure the Fieldglass application, manage worker onboarding/offboarding, handle timesheets and invoicing, and integrate with SAP S/4HANA. Whether you are an HR professional, procurement specialist, or SAP consultant, this expert-led course prepares you for the SAP Fieldglass Certification and high-paying consulting roles.",
    metaTitle: "SAP Fieldglass Training Online | VMS & Contingent Workforce Course",
    metaDescription: "Become an SAP Fieldglass expert with ERPVITS. Learn Vendor Management System (VMS), Contingent Worker modules, and SOW Service Procurement with real-world projects.",
    sections: [
        {
            type: 'detailed_features',
            title: "Why Professionals Choose ERPVITS for SAP Fieldglass Online Training",
            items: [
                "Trusted by 450+ SAP Fieldglass Consultants worldwide",
                "Training by Certified Fieldglass Architects with 10+ years experience",
                "Hands-on labs on SAP Fieldglass VMS environment",
                "Real-time projects on Contingent Workforce & SOW",
                "Comprehensive configuration and administration guides",
                "Mock interviews tailored for VMS consultant roles",
                "Placement assistance with top consulting firms",
                "Certification support for SAP Certified Application Associate - Fieldglass"
            ]
        },
        {
            type: 'detailed_curriculum',
            title: "Comprehensive SAP Fieldglass Course Curriculum",
            modules: [
                {
                    title: "Module 1: Introduction to SAP Fieldglass & VMS (3 Hours)",
                    topics: [
                        "Overview of External Workforce Management",
                        "SAP Fieldglass Architecture and Cloud Platform",
                        "Navigation and User Interface",
                        "Dashboard and Analytics Overview",
                        "Key Terminology: VMS, MSP, SOW"
                    ]
                },
                {
                    title: "Module 2: Administration & Usage Settings (5 Hours)",
                    topics: [
                        "Company Structure and Business Units",
                        "User Management and Role-Based Permissions (RBAC)",
                        "Financial Data Setup (Cost Centers, GL Accounts)",
                        "Message Center and Notification Configuration",
                        "System Configuration and Thresholds"
                    ]
                },
                {
                    title: "Module 3: Contingent Workforce Management (8 Hours)",
                    topics: [
                        "Job Postings and Requisition Management",
                        "Candidate Review and Shortlisting",
                        "Work Order Creation and Approval Workflows",
                        "Worker Onboarding and Compliance Checks",
                        "Time and Expense Management",
                        "Worker Offboarding and Tenure Policy"
                    ]
                },
                {
                    title: "Module 4: Services Procurement (Statement of Work) (6 Hours)",
                    topics: [
                        "SOW Creation and Clause Management",
                        "SOW Bidding and Vendor Selection",
                        "Project Milestones and Deliverables",
                        "Budget Tracking and SOW Revision",
                        "Service Entry Sheets and Acceptance",
                        "Fees and Miscellaneous Invoices"
                    ]
                },
                {
                    title: "Module 5: Vendor & Master Data Management (5 Hours)",
                    topics: [
                        "Supplier Enablement and Onboarding",
                        "Vendor Master Data Maintenance",
                        "Rate Cards and Job Taxonomies",
                        "Catalog Management",
                        "Supplier Performance Review (Scorecards)"
                    ]
                },
                {
                    title: "Module 6: Invoicing & Finance (4 Hours)",
                    topics: [
                        "Invoice Generation and Consolidated Invoicing",
                        "Tax Calculation and Adjustments",
                        "Invoice Approval and Reconciliation",
                        "Credit Memos and Miscellaneous Adjustments",
                        "Payment Status Updates"
                    ]
                },
                {
                    title: "Module 7: Integration & Reporting (4 Hours)",
                    topics: [
                        "SAP Fieldglass Integration with SAP S/4HANA / Ariba",
                        "Connector Setup (CIG/Open Connectors)",
                        "Master Data Upload/Download",
                        "Standard Reports and Ad-hoc Reporting",
                        "Visual Intelligence Analytics"
                    ]
                },
                {
                    title: "Module 8: Advanced Configuration & Automation (3 Hours)",
                    topics: [
                        "Approval Matrix Configuration",
                        "Custom Field Creation (Picklists, Text)",
                        "Business Rules and Policy Violations",
                        "XSLT for custom file formats (Basic)",
                        "System Administration Best Practices"
                    ]
                }
            ]
        },
        {
            type: 'detailed_target_audience',
            title: "Who Can Learn SAP Fieldglass? – Perfect for Diverse Career Paths",
            subtitle: "Ideal for individuals from various professional backgrounds aiming for global consulting and implementation positions in contingent workforce management.",
            items: [
                {
                    icon: "Users",
                    color: "text-pink-600",
                    bg: "bg-pink-50",
                    title: "HR & Recruitment Professionals",
                    description: [
                        "HR managers and Recruitment specialists interested in automating procurement processes including VMS expertise."
                    ]
                },
                {
                    icon: "ShoppingCart",
                    color: "text-green-600",
                    bg: "bg-green-50",
                    title: "Procurement & Vendor Management Specialists",
                    description: [
                        "Procurement managers aiming for expertise in service procurement and vendor managers who want to learn about the Fieldglass platform."
                    ]
                },
                {
                    icon: "Laptop",
                    color: "text-blue-600",
                    bg: "bg-blue-50",
                    title: "IT & ERP Professionals",
                    description: [
                        "SAP consultants moving into contingent workforce, ERP sys admins, and Technical Architects."
                    ]
                },
                {
                    icon: "BarChart3",
                    color: "text-purple-600",
                    bg: "bg-purple-50",
                    title: "Finance & Operations Leaders",
                    description: [
                        "Finance managers and Operations directors optimizing supply chain efficiency and cost control."
                    ]
                },
                {
                    icon: "GraduationCap",
                    color: "text-orange-600",
                    bg: "bg-orange-50",
                    title: "Fresh Graduates & Career Changers",
                    description: [
                        "MBA or HR graduates aspiring to SAP workforce management careers and IT professionals shifting to enterprise workforce solutions."
                    ]
                }
            ]
        },
        {
            type: 'detailed_prerequisites',
            title: "SAP Fieldglass Training Prerequisites",
            items: {
                minimum: [
                    "Understanding of HR processes (hiring, onboarding)",
                    "Contingent workforce concepts",
                    "Familiarity with web applications"
                ],
                nicetohave: [
                    "Experience with SAP (HR, MM, FICO)",
                    "HR/Procurement experience",
                    "Excel skills"
                ]
            }
        },
        {
            type: 'detailed_learning_outcomes',
            title: "What You'll Master in This SAP Fieldglass Online Course",
            items: [
                {
                    title: "Functional Mastery",
                    icon: "CheckCircle2",
                    points: [
                        "End-to-End Contingent Worker Lifecycle: Onboarding/offboarding, requisitions, timesheets, cost optimization.",
                        "Statement of Work (SOW): Manage SOW lifecycle, bidding, billing models, and service providers.",
                        "Vendor & Supplier Management: Vendor onboarding, self-service portals, and compliance.",
                        "Contingent Workforce Compliance: Automation for compliance, worker classification, and audit trails."
                    ]
                },
                {
                    title: "Technical Skills",
                    icon: "Settings",
                    points: [
                        "Master Data & System Administration: Users/roles, org structures, and data consistency.",
                        "Integration: Connect Fieldglass with S/4HANA, automate exchange, troubleshoot integration.",
                        "Analytics & Reporting: Analyze spend, measure performance, design dashboards.",
                        "Advanced Workflows: Develop complex approval structures and custom forms."
                    ]
                }
            ]
        },
        {
            type: 'real_world_scenarios',
            title: "Experience Real-World SAP Fieldglass Scenarios",
            items: [
                {
                    title: "Global IT Services Company's Contingent Workforce Platform",
                    icon: "Globe",
                    iconColor: "text-blue-600",
                    bg: "bg-blue-50",
                    scenario: "Multinational IT services company with 50,000+ contingent workers needs centralized Fieldglass implementation across 12 countries.",
                    role: "Your Role",
                    responsibilities: [
                        "Design corporate governance",
                        "Configure onboarding and automate timesheets/invoices",
                        "Establish analytic dashboards"
                    ],
                    outcome: "Configuration docs, training materials, go-live checklist."
                },
                {
                    title: "Retail Organization's Vendor Management Automation",
                    icon: "ShoppingCart",
                    iconColor: "text-pink-600",
                    bg: "bg-pink-50",
                    scenario: "Retail company with 500+ vendors seeks to streamline vendor management.",
                    role: "Your Role",
                    responsibilities: [
                        "Develop self-service onboarding portal",
                        "Automate qualification workflows",
                        "Establish performance dashboards"
                    ],
                    outcome: "Portal design, workflow diagrams, vendor guides."
                },
                {
                    title: "Enterprise Statement of Work Implementation",
                    icon: "Building2",
                    iconColor: "text-purple-600",
                    bg: "bg-purple-50",
                    scenario: "Global services company with $500M annual revenue adopting Fieldglass SOW module.",
                    role: "Your Role",
                    responsibilities: [
                        "Develop SOW project structures",
                        "Configure bidding workflows",
                        "Establish milestone billing"
                    ],
                    outcome: "SOW process docs, configuration specs, adoption strategy."
                }
            ]
        },
        {
            type: 'detailed_certification',
            title: "SAP Fieldglass Certification – Your Global Career Credential",
            subtitle: "We Provide Support for SAP Certified Application Associate – Fieldglass Services and External Workforce Management.",
            badge: "Career Boost",
            content: "Certification demonstrates your proficiency in end-to-end VMS implementation, complete Fieldglass configuration, SOW workflows, and compliance.",
            items: [
                {
                    title: "SAP Certified Application Associate – SAP Fieldglass Services and External Workforce Management",
                    code: "(C_SF_2201)",
                    focus: "Complete Fieldglass configuration, contingent worker management, SOW workflows, compliance strategies.",
                    who: "SAP Consultants, Procurement Professionals, and HR Technology Specialists",
                    relevance: "Validates expertise for global consulting roles; typically commands 20-35% higher salary."
                }
            ],
            stats: [
                { value: "1", label: "Certification Track" },
                { value: "100%", label: "Placement Assistance" },
                { value: "30%", label: "Salary Premium" }
            ]
        },
        {
            type: 'detailed_career_opportunities',
            title: "Career Opportunities After SAP Fieldglass Training",
            items: [
                {
                    title: "SAP Fieldglass Functional Consultant (Entry Level)",
                    salary: "$115k-$145k / ₹8L-₹12L",
                    responsibilities: "Configure simple SOW/Contingent workflows, support UAT, manage user access.",
                    employers: "Accenture, Capgemini, Deloitte, Infosys, Wipro",
                    path: "1-3 years -> Senior Consultant",
                    icon: "Briefcase",
                    color: "blue"
                },
                {
                    title: "Contingent Workforce Program Manager / VMS Lead",
                    salary: "$135k-$175k / ₹11L-₹16L",
                    responsibilities: "Oversee external workforce strategy, vendor relations, and compliance audits.",
                    employers: "Large Enterprise HR/Procurement Depts (Pharma, Tech, Mfg)",
                    path: "3-5 years -> Director of Contingent Workforce",
                    icon: "Users",
                    color: "green"
                },
                {
                    title: "Fieldglass Integration Consultant",
                    salary: "$140k-$190k / ₹12L-₹18L",
                    responsibilities: "Integrate Fieldglass with S/4HANA, Ariba, and SuccessFactors using CIG/API.",
                    employers: "Specialized Tech Consulting Firms",
                    path: "3-5 years -> Integration Architect",
                    icon: "Settings",
                    color: "purple"
                },
                {
                    title: "Solutions Architect – Fieldglass",
                    salary: "$180k-$250k+ / ₹16L-₹25L+",
                    responsibilities: "Design comprehensive workforce solutions, multi-country rollouts, and governance.",
                    employers: "Big 4 Consulting, Global MSPs",
                    path: "5-8 years -> Practice Head / Partner",
                    icon: "Building2",
                    color: "orange"
                }
            ]
        },
        {
            type: 'detailed_features',
            title: "Top Companies Hiring SAP Fieldglass Professionals",
            items: [
                "Global Consulting: Accenture, Capgemini, Deloitte, EY, KPMG, PwC, IBM",
                "Implementation Partners: Infosys, Wipro, Cognizant, TCS, HCL",
                "Major Global Services: HP, Dell, Adobe, Salesforce, Microsoft, Amazon, Google",
                "Hiring Trends: High demand for S/4HANA integration expertise and remote opportunities."
            ]
        },
        {
            type: 'detailed_post_training_journey',
            title: "What to Expect After Completing SAP Fieldglass Training",
            courseName: "SAP Fieldglass",
            items: [
                {
                    title: "Immediate Post-Training",
                    timeline: "Week 1-6",
                    points: [
                        "Receive course completion certificate & lifetime access",
                        "Apply for SAP Certification & start job search",
                        "Join alumni networking & receive interview coaching"
                    ]
                },
                {
                    title: "Month 2-3",
                    timeline: "Career Launch",
                    points: [
                        "Secure first SAP Fieldglass consulting opportunity",
                        "Complete post-training mentorship"
                    ]
                },
                {
                    title: "First Year in Role",
                    timeline: "On The Job",
                    points: [
                        "Months 1-3: Learn client ops & VMS processes",
                        "Months 4-6: Lead small configuration tasks",
                        "Months 7-12: Lead implementation components"
                    ]
                },
                {
                    title: "Long-Term Growth",
                    timeline: "1-5 Years",
                    points: [
                        "Earn advanced certifications",
                        "Build domain expertise",
                        "Transition to solution architect roles"
                    ]
                }
            ]
        },
        {
            type: 'detailed_testimonials',
            title: "Hear from Our Successful SAP Fieldglass Learners",
            items: [
                {
                    name: "Raj Patel",
                    role: "SAP Fieldglass Consultant at Accenture",
                    quote: "Outstanding VMS training with real project exposure. I landed a consulting role at Accenture within 9 weeks managing Fieldglass implementations. The hands-on approach and expert instructors made all the difference.",
                    initial: "R",
                    color: "bg-blue-500"
                },
                {
                    name: "Priya Desai",
                    role: "Contingent Workforce Manager",
                    quote: "The weekend flexibility allowed me to learn while working in HR. My organization was so impressed with my Fieldglass skills that they promoted me to Contingent Workforce Manager. This course accelerated my career by 4 years.",
                    initial: "P",
                    color: "bg-pink-500"
                },
                {
                    name: "Vikram Mishra",
                    role: "Senior VMS Consultant",
                    quote: "Best decision I made for my SAP career. The capstone projects were exactly like real client VMS work. I walked into my first consulting engagement feeling confident, not intimidated. The certification support was exceptional.",
                    initial: "V",
                    color: "bg-purple-500"
                },
                {
                    name: "Ananya Singh",
                    role: "Certified SAP Professional",
                    quote: "Superb Fieldglass certification preparation. I passed the SAP Fieldglass exam on my first attempt. The mock exams and study materials were spot-on. Highly recommended for VMS careers!",
                    initial: "A",
                    color: "bg-green-500"
                },
                {
                    name: "Sneha Reddy",
                    role: "Contingent Workforce Analyst",
                    quote: "From zero Fieldglass knowledge to landing my dream VMS consulting job in 5 months! The instructors are patient, knowledgeable, and truly care about learner success. Lifetime recording access is a huge bonus.",
                    initial: "S",
                    color: "bg-orange-500"
                }
            ]
        },
        {
            type: 'detailed_demo_booking'
        },
        {
            type: 'detailed_faq',
            title: "Frequently Asked Questions",
            items: [
                { q: "What is SAP Fieldglass?", a: "SAP Fieldglass is a cloud-based Vendor Management System (VMS) to manage services procurement and external workforce (contingent workers, SOW based services)." },
                { q: "Do I need SAP experience?", a: "No, prior SAP experience is not mandatory. However, knowledge of HR or Procurement processes is beneficial." },
                { q: "Is the training hands-on?", a: "Yes, the course includes extensive hands-on practice on a SAP Fieldglass training environment to configure workflows and transactions." },
                { q: "What is the certification code?", a: "The popular certification is C_SF_2201 - SAP Certified Application Associate – SAP Fieldglass Services and External Workforce Management." },
                { q: "Does the course cover SOW?", a: "Yes, specific modules are dedicated to Services Procurement and Statement of Work (SOW) management." },
                { q: "How is Fieldglass different from Ariba?", a: "Ariba focuses on goods and general procurement, while Fieldglass is specialized for services, contingent labor, and external workforce management." },
                { q: "What are the job prospects?", a: "Demand for Fieldglass consultants is high as companies increasingly rely on contingent workforce and need systems to manage compliance and spend." },
                { q: "Do you provide placement assistance?", a: "Yes, we have a dedicated placement cell that helps with resume building, interview prep, and connecting with hiring partners." }
            ]
        }
    ],
    schema: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Course",
        "name": "SAP Fieldglass Online Training",
        "description": "Master SAP Fieldglass VMS with ERPVITS.",
        "provider": {
            "@type": "Organization",
            "name": "ERPVITS"
        }
    })
};
