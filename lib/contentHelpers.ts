import { Laptop, ShoppingCart, BarChart3, GraduationCap, Building2, CheckCircle2, ShieldCheck, Database, FileText, Star } from "lucide-react";

// --- Ariba Content ---

export const aribaTargetAudience = [
    {
        icon: "Laptop",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "IT & ERP Professionals",
        description: [
            "SAP consultants, system administrators, technical architects, and solution consultants.",
            "Moving from SAP MM/SD/SRM/FICO",
            "ABAP Developers moving to functional",
            "Technical team delivering solutions"
        ]
    },
    {
        icon: "ShoppingCart",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "Procurement & Supply Chain Specialists",
        description: [
            "Procurement managers, analysts, coordinators, and vendor managers.",
            "Purchasing managers leading digital transformation",
            "Supply chain coordinators seeking automation skills",
            "Vendor managers focusing on performance metrics"
        ]
    },
    {
        icon: "BarChart3",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "Finance & Operations Leaders",
        description: [
            "Financial managers, operations directors, and internal audit teams.",
            "Finance managers automating procurement spend",
            "Operations directors optimizing efficiency",
            "Audit teams ensuring compliance"
        ]
    },
    {
        icon: "GraduationCap",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "Fresh Graduates & Career Changers",
        description: [
            "Engineering/MBA graduates and professionals pivoting to SAP careers.",
            "Appearing in Interviews and requiring core",
            "Transcendental ability to navigate software",
            "Business mature ability for consulting"
        ]
    },
    {
        icon: "Building2",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "SAP Ariba Customer Employees",
        description: [
            "Employees at organizations using or implementing SAP Ariba.",
            "Super users learning power uses",
            "Process owners managing SAP Ariba",
            "End users seeking advanced knowledge"
        ]
    }
];

export const aribaPrerequisites = {
    minimum: [
        "Basic understanding of procurement processes",
        "Familiarity with supply chain concepts",
        "Comfortable with web applications",
        "Ability to learn complex tools"
    ],
    nicetohave: [
        "Prior SAP experience (MM, SD, SRM, FICO)",
        "Procurement or finance work experience",
        "Exposure to ERP systems",
        "Intermediate Excel skills"
    ]
};

export const aribaLearningOutcomes = [
    {
        title: "Complete Procurement Lifecycle Management",
        icon: "ShoppingCart",
        points: [
            "Integration strategies for P2P and S2P workflows",
            "Vendor requisitions, POs, receipts, and invoices",
            "Understand budget controls and check tracking",
            "Optimize procure-to-pay (P2P) cycle"
        ]
    },
    {
        title: "Master Data Configuration",
        icon: "Database",
        points: [
            "Create user profiles with role-based access",
            "Onboard and manage suppliers with qualification tracking",
            "Configure accounting strictures and cost centers",
            "Ensure data accuracy across systems"
        ]
    },
    {
        title: "Strategic Sourcing & Supplier Management",
        icon: "ShieldCheck",
        points: [
            "Execute sourcing events (RFI, RFP, Auctions)",
            "Evaluate supplier proposals and criteria",
            "Negotiate contracts and manage terms",
            "Monitor supplier performance with scorecards"
        ]
    },
    {
        title: "Contract Management & Compliance",
        icon: "FileText",
        points: [
            "Manage contract lifecycle from creation to renewal",
            "Implement compliance checks in procurement",
            "Track contract utilization",
            "Ensure regulatory compliance"
        ]
    }
];


// --- Generic Constructors ---

export function getGenericTargetAudience(courseName: string) {
    return [
        {
            icon: "Laptop",
            color: "text-orange-600",
            bg: "bg-orange-50",
            title: "IT & Functional Consultants",
            description: [
                `Professionals looking to specialize in ${courseName}.`,
                "Developers moving to functional consulting",
                "System administrators",
                "Technical architects seeking domain knowledge"
            ]
        },
        {
            icon: "ShoppingCart",
            color: "text-orange-600",
            bg: "bg-orange-50",
            title: "Domain Experts",
            description: [
                "Professionals working in relevant business domains.",
                "Managers leading digital transformation",
                "Process owners seeking automation skills",
                "Operations managers"
            ]
        },
        {
            icon: "GraduationCap",
            color: "text-orange-600",
            bg: "bg-orange-50",
            title: "Students & Freshers",
            description: [
                "MBA/Engineering graduates",
                "Freshers looking for a high-growth career",
                "Individuals with strong analytical skills",
                "Career changers"
            ]
        }
    ];
}

export function getGenericPrerequisites(courseName: string) {
    return {
        minimum: [
            "Basic understanding of business processes",
            "Computer literacy",
            "Interest in enterprise software",
            "Willingness to learn"
        ],
        nicetohave: [
            "Basic knowledge of SAP",
            "Domain experience in relevant field",
            "Experience with ERP systems",
            "Basic programming knowledge (if technical)"
        ]
    };
}

export function getGenericLearningOutcomes(courseName: string) {
    return [
        {
            title: `Core ${courseName} Concepts`,
            icon: "Database",
            points: [
                "Understand the system architecture",
                "Master core configuration and setup",
                "Navigate the user interface efficiently",
                "Manage user roles and permissions"
            ]
        },
        {
            title: "End-to-End Processes",
            icon: "ShoppingCart",
            points: [
                "Execute complete business cycles",
                "Handle transaction management",
                "Manage reporting and analytics",
                "Troubleshoot common issues"
            ]
        },
        {
            title: "Implementation & Configuration",
            icon: "ShieldCheck",
            points: [
                "Perform system configuration",
                "Manage master data",
                "Implement best practices",
                "Prepare for certification"
            ]
        }
    ];
}

export const aribaRealWorldScenarios = [
    {
        title: "Global Manufacturing Company's Procurement Transformation",
        icon: "Factory",
        iconColor: "text-orange-600",
        bg: "bg-orange-50",
        scenario: "A multinational manufacturer with operations in 15 countries wants to centralize procurement across regional entities.",
        role: "Select Lead SAP Ariba Consultant",
        responsibilities: [
            "Map current procurement processes",
            "Configure user hierarchies for regional approval flows",
            "Set up approval workflows for capital equipment",
            "Implement compliance checks for hazardous materials"
        ],
        outcome: "Unified process, cost savings visibility, global compliance audit trail."
    },
    {
        title: "Retail Organization's Supplier Onboarding Automation",
        icon: "ShoppingBag",
        iconColor: "text-orange-600",
        bg: "bg-orange-50",
        scenario: "A retail chain with 500+ suppliers wants to automate supplier onboarding and reduce manual data entry errors.",
        role: "SAP Ariba Implementation Consultant",
        responsibilities: [
            "Design self-service supplier onboarding portal",
            "Configure automated qualification workflows",
            "Set up integration with ERP for vendor data",
            "Create expiration alerts for supplier certificates"
        ],
        outcome: "Reduced onboarding time by 60%, improved data accuracy, automated reminders."
    },
    {
        title: "Enterprise Guided Buying for Tech Company",
        icon: "Laptop2",
        iconColor: "text-orange-600",
        bg: "bg-orange-50",
        scenario: "A 5,000-employee tech company wants to streamline IT, office supplies, and professional services procurement.",
        role: "Solution Architect / Functional Lead",
        responsibilities: [
            "Design intuitive Guided Buying landing pages",
            "Configure punched-out catalogs for laptops",
            "Implement policies for preferred vendors",
            "Set up tactical sourcing for non-catalog items"
        ],
        outcome: "90% user adoption, compliant spend, reduced maverick spending."
    }
];

export const ficoTargetAudience = [
    {
        icon: "Banknote", // Calculator or Banknote
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "Finance & Accounting Professionals",
        description: [
            "Accountants seeking SAP expertise and career advancement",
            "Finance professionals interested in SAP FICO systems",
            "Cost accountants pursuing controlling specialization",
            "Internal auditors creating financial controls"
        ]
    },
    {
        icon: "Laptop",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "SAP & ERP Professionals",
        description: [
            "SAP consultants shifting to FICO module",
            "ERP system admins acquiring financial domain knowledge",
            "System architects building enterprise finance solutions",
            "DB admins maintaining SAP finance systems"
        ]
    },
    {
        icon: "Building2",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "Finance & CFO Office Leaders",
        description: [
            "Accounting modernized by finance directors",
            "SAP implementation led by accounting managers",
            "Financial controls implemented by CFO office staff",
            "SAP infrastructure managed by finance systems teams"
        ]
    },
    {
        icon: "GraduationCap",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "Fresh Graduates & Career Changers",
        description: [
            "Accounting graduates pursuing SAP consulting",
            "Commerce graduates shifting to enterprise finance systems",
            "MBA graduates in finance wanting technical SAP skills",
            "Career changers in finance or accounting"
        ]
    },
    {
        icon: "Users",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "Existing Employees of SAP FICO Users",
        description: [
            "SAP FICO Employees",
            "Super users wanting to be power users and trainers",
            "Finance teams with SAP systems in organizations",
            "End users seeking advanced knowledge"
        ]
    }
];

export const ficoPrerequisites = {
    minimum: [
        "Basic accounting principles and financial processes",
        "Accounting concepts (assets, liabilities, income, expense)",
        "Web applications and business software knowledge",
        "Independent learning capability"
    ],
    nicetohave: [
        "Prior SAP experience (any module)",
        "Accounting or finance work experience",
        "Experience with ERP systems or accounting software",
        "Basic financial analysis using Excel"
    ]
};

export const ficoLearningOutcomes = [
    {
        title: "Complete Financial Accounting Cycle",
        icon: "BookOpen", // Using BookOpen for cycle/journal
        points: [
            "Set up and oversee comprehensive accounting workflows",
            "Perform journal entries and handle transactions",
            "Establish financial control pillars and governance",
            "Manage compliance with audits and regulations"
        ]
    },
    {
        title: "Accounts Payables & Receivables",
        icon: "CreditCard",
        points: [
            "Administer vendor/customer portals and workflows",
            "Set up payment automation and dunning",
            "Establish A/P and A/R control systems",
            "Perform reconciliation of accounts"
        ]
    },
    {
        title: "Asset Management & Accounting",
        icon: "Building", // Building or specialized asset icon
        points: [
            "Set up records and manage fixed assets",
            "Administer acquisition, sale, and retirement",
            "Manage depreciation and asset reporting",
            "Reconcile assets with the general ledger"
        ]
    },
    {
        title: "Cost Accounting & Profit Analysis",
        icon: "BarChart3",
        points: [
            "Set up and manage costing and profit centers",
            "Administer project costing and overheads",
            "Manage internal orders and cost distribution",
            "Track and report on profitability"
        ]
    }
];

export const ficoRealWorldScenarios = [
    {
        title: "Global Corporation's Financial System Transformation",
        icon: "Globe", // Globe for Global
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "A global manufacturer consolidates financial processes across 15 countries for visibility and compliance.",
        role: "Lead SAP FICO Consultant",
        responsibilities: [
            "Design organizational structure for financial accounting",
            "Configure chart of accounts and company codes",
            "Establish financial controls and SOD",
            "Implement inter-company reconciliation"
        ],
        outcome: "Unified financial reporting, regulatory compliance, operational efficiency."
    },
    {
        title: "Manufacturing Company's Costing & Profitability",
        icon: "Factory",
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "Manufacturing org implementing FICO for accurate product costing and profit optimization.",
        role: "FICO Consultant (Controlling Focus)",
        responsibilities: [
            "Configure cost and profit centers",
            "Set up cost element accounting",
            "Implement cost allocation and overhead procedures",
            "Create profitability analysis framework"
        ],
        outcome: "Accurate product costing, optimized cost structures, enhanced profit visibility."
    },
    {
        title: "Financial Services Close Process Automation",
        icon: "Clock", // Clock for time/close process
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "Financial services firm implementing FICO to automate month-end close and ensure compliance.",
        role: "FICO Consultant / Solution Architect",
        responsibilities: [
            "Design automated accounting procedures",
            "Configure recurring entries and accrual templates",
            "Implement reconciliation automation",
            "Generate automated financial statements"
        ],
        outcome: "Reduced close time by 40%, automated compliance checks, faster reporting."
    }
];

export const mmRealWorldScenarios = [
    {
        title: "Global Manufacturing Company's Supply Chain Optimization",
        icon: "Factory",
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "Multinational manufacturer needs to consolidate materials management across 15 countries.",
        role: "SAP MM Functional Consultant",
        responsibilities: [
            "Design organizational structure (Plants, Storage Locations)",
            "Configure material masters and warehouse setup",
            "Implement global valuation systems",
            "Rationalize material codes across regions"
        ],
        outcome: "Unified material catalog, reduced inventory costs, standardized valuation."
    },
    {
        title: "Retail Organization's Inventory Automation",
        icon: "ShoppingBag",
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "Retail chain with 500+ stores seeking automated inventory replenishment.",
        role: "Materials Management Lead",
        responsibilities: [
            "Design centralized MM structure",
            "Configure automated Purchase Order generation (MRP)",
            "Implement inventory optimization strategies",
            "Set up real-time stock monitoring"
        ],
        outcome: "Automated replenishment, reduced stockouts by 40%, optimized inventory levels."
    },
    {
        title: "Pharmaceutical Company's Materials Compliance",
        icon: "Database", // Using Database as placeholder for compliance/pharma
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "Pharma manufacturer implementing SAP MM with strict compliance (batch, dangerous goods).",
        role: "SAP MM/Compliance Solution Architect",
        responsibilities: [
            "Design compliant MM processes for regulated materials",
            "Configure batch and serial number tracking",
            "Set up dangerous goods handling procedures",
            "Implement audit trails for material movements"
        ],
        outcome: "100% compliance with FDA regulations, full traceability, automated safety checks."
    }
];

// --- SD Content ---

export const sdTargetAudience = [
    {
        icon: "ShoppingBag",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "Sales & Marketing Professionals",
        description: [
            "Sales managers looking to understand ERP sales processes",
            "Marketing professionals moving to sales operations",
            "Order management specialists upgrading skills",
            "Customer service leads seeking system expertise"
        ]
    },
    {
        icon: "Laptop",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "SAP & ERP Consultants",
        description: [
            "SAP MM/FICO consultants seeking cross-functional skills",
            "ERP support analysts moving to implementation",
            "Technical consultants (ABAP) shifting to functional SD",
            "Project managers leading SD implementations"
        ]
    },
    {
        icon: "Truck",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "Logistics & Supply Chain Experts",
        description: [
            "Logistics coordinators managing outbound shipping",
            "Supply chain analysts optimizing order fulfillment",
            "Warehouse managers integrating with sales",
            "Transportation planners using SAP LE"
        ]
    },
    {
        icon: "GraduationCap",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "Fresh Graduates & Students",
        description: [
            "MBA (Marketing/Operations) graduates",
            "B.Tech/B.E graduates seeking functional consulting roles",
            "Commerce graduates interested in order-to-cash",
            "Students aspiring for a career in SAP ecosystem"
        ]
    }
];

export const sdPrerequisites = {
    minimum: [
        "Basic understanding of sales and distribution processes",
        "Knowledge of order-to-cash cycle",
        "Computer literacy and familiarity with business software",
        "Strong communication skills"
    ],
    nicetohave: [
        "Prior experience in sales or logistics",
        "Basic knowledge of SAP ERP Basics",
        "Understanding of pricing and billing concepts",
        "Experience with CRM systems"
    ]
};

export const sdLearningOutcomes = [
    {
        title: "Order-to-Cash (O2C) Mastery",
        icon: "ShoppingCart",
        points: [
            "Manage the complete sales lifecycle from inquiry to payment",
            "Configure sales document types and item categories",
            "Handle availability checks and delivery scheduling",
            "Process sales orders and contracts efficiently"
        ]
    },
    {
        title: "Pricing & Billing Configuration",
        icon: "CreditCard",
        points: [
            "Configure complex pricing procedures and conditions",
            "Manage discounts, surcharges, and taxes",
            "Execute billing runs and invoice generation",
            "Handle rebate processing and settlement"
        ]
    },
    {
        title: "Shipping & Logistics Execution",
        icon: "Truck",
        points: [
            "Manage outbound deliveries and picking",
            "Configure shipping points and routes",
            "Handle packing and goods issue",
            "Integrate with Warehouse Management (WM)"
        ]
    },
    {
        title: "Master Data & Org Structure",
        icon: "Database",
        points: [
            "Define enterprise structure for sales",
            "Manage customer and material master data",
            "Configure customer-material info records",
            "Maintain output and text determination"
        ]
    }
];

export const sdRealWorldScenarios = [
    {
        title: "Automotive Manufacturer's Global Sales Rollout",
        icon: "Globe",
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "A global automotive company needs to standardize sales processes across 20 countries with complex pricing.",
        role: "Lead SAP SD Consultant",
        responsibilities: [
            "Design global enterprise structure",
            "Configure country-specific tax and pricing procedures",
            "Implement inter-company sales processes",
            "Set up output management for invoices"
        ],
        outcome: "Standardized global sales process, automated inter-company billing, compliant local taxation."
    },
    {
        title: "FMCG Company's Order Fulfillment Optimization",
        icon: "ShoppingCart",
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "Fast Moving Consumer Goods company faces stockouts and delivery delays due to inefficient order processing.",
        role: "SAP SD Functional Consultant",
        responsibilities: [
            "Configure availability check (ATP) with checking groups",
            "Implement backorder processing strategies",
            "Optimize delivery scheduling and route determination",
            "Set up dynamic credit checks"
        ],
        outcome: "95% on-time delivery, reduced order processing time, minimized stockouts."
    },
    {
        title: "Retail Chain's Omni-channel Integration",
        icon: "Laptop",
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "Retailer wants to integrate e-commerce orders with SAP SD for unified fulfillment.",
        role: "SAP SD/Integration Specialist",
        responsibilities: [
            "Map external order data to SAP IDocs",
            "Configure special business processes for online orders",
            "Implement returns processing for e-commerce",
            "Set up real-time inventory updates"
        ],
        outcome: "Seamless omni-channel experience, real-time stock visibility, automated order creation."
    }
];

// --- C4C Content ---

export const c4cTargetAudience = [
    {
        icon: "Laptop",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "Developers & Technical Consultants",
        description: [
            "ABAP developers moving to cloud",
            "Java/Web developers interested in SAP ecosystem",
            "Technical consultants seeking C4C expertise",
            "Integration specialists"
        ]
    },
    {
        icon: "Cloud",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "CRM Professionals",
        description: [
            "CRM technical consultants (Salesforce, Dynamics)",
            "SAP CRM on-premise consultants migrating to cloud",
            "CRM architects designing cloud solutions",
            "Customer experience specialists"
        ]
    },
    {
        icon: "Settings",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "System Administrators",
        description: [
            "Basis consultants managing cloud tenants",
            "System admins responsible for user management",
            "IT support staff for C4C",
            "Application managers"
        ]
    }
];

export const c4cPrerequisites = {
    minimum: [
        "Basic understanding of programming (Any language)",
        "Knowledge of CRM concepts",
        "Familiarity with cloud computing basics",
        "Analytical mindset"
    ],
    nicetohave: [
        "Knowledge of C# or Java (for ABSL)",
        "Experience with XML and Web Services",
        "SAP CRM functional or technical knowledge",
        "ABAP experience"
    ]
};

export const c4cLearningOutcomes = [
    {
        title: "Cloud Application Studio Mastery",
        icon: "Laptop",
        points: [
            "Navigate the Cloud Applications Studio (SDK)",
            "Create custom business objects (BOs)",
            "Develop using BODL and ABSL scripting",
            "Manage solution lifecycle and deployment"
        ]
    },
    {
        title: "UI Configuration & Extensibility",
        icon: "Layout",
        points: [
            "Design and modify UI screens with UI Designer",
            "Create embedded components and mashups",
            "Extend standard screens with custom fields",
            "Implement dynamic UI behavior"
        ]
    },
    {
        title: "Integration & Web Services",
        icon: "Globe",
        points: [
            "Create and consume Web Services (SOAP/REST)",
            "Configure communication scenarios",
            "Integrate with external systems (ERP, Marketing)",
            "Monitor and troubleshoot integration flows"
        ]
    },
    {
        title: "Lifecycle Management",
        icon: "Settings",
        points: [
            "Manage patches and solution versions",
            "Backup and restore procedures",
            "Handle tenant management",
            "Perform rigorous testing and debugging"
        ]
    }
];

export const c4cRealWorldScenarios = [
    {
        title: "Service Company's Field Service Mobile App",
        icon: "Smartphone",
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "Field service organization requires a custom mobile experience for technicians with offline capabilities.",
        role: "SAP C4C Technical Consultant",
        responsibilities: [
            "Extend standard Service Ticket object",
            "Develop custom mobile screens in UI Designer",
            "Implement offline data synchronization logic",
            "Create custom actions for signature capture"
        ],
        outcome: "Enhanced technician productivity, real-time service updates, offline capability."
    },
    {
        title: "Manufacturing Firm's Dealer Portal Integration",
        icon: "Globe",
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "Manufacturer wants to expose C4C order status to an external dealer portal.",
        role: "C4C Integration Developer",
        responsibilities: [
            "Design custom OData services in C4C",
            "Configure communication arrangements for external access",
            "Implement secure authentication (OAuth)",
            "Develop ABSL logic to filter data based on dealer ID"
        ],
        outcome: "Self-service dealer portal, reduced support calls, real-time transparency."
    },
    {
        title: "Sales Org's Complex Pricing Logic",
        icon: "Calculator",
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "Sales team needs a custom pricing calculator within the C4C Opportunity screen.",
        role: "SAP C4C Developer",
        responsibilities: [
            "Create embedded component for pricing",
            "Write complex calculation logic in ABSL",
            "Bind UI fields to calculation results",
            "Add validation rules for discounts"
        ],
        outcome: "Accurate quoting inside C4C, automated approval triggers, faster sales cycle."
    }
];

// --- SAP CPI Content ---

export const cpiTargetAudience = [
    {
        icon: "Cloud",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "Integration Developers",
        description: [
            "Middleware specialists",
            "PI/PO consultants moving to cloud integration",
            "Java developers interested in integration",
            "API developers"
        ]
    },
    {
        icon: "Settings",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "Technical Consultants",
        description: [
            "SAP technical consultants (ABAP/Basis)",
            "Cloud architects designing hybrid landscapes",
            "System integrators",
            "Solutions engineers"
        ]
    }
];

export const cpiPrerequisites = {
    minimum: [
        "Basic understanding of XML and JSON",
        "Familiarity with integration concepts (APIs, Protocols)",
        "Basic programming logic",
        "Computer literacy"
    ],
    nicetohave: [
        "Knowledge of SAP PI/PO",
        "Groovy or JavaScript scripting skills",
        "Experience with SOAP and REST web services",
        "Basic Java knowledge"
    ]
};

export const cpiLearningOutcomes = [
    {
        title: "Integration Flow Design",
        icon: "Share2",
        points: [
            "Design and deploy robust integration flows (iFlows)",
            "Use various adapters (SOAP, OData, SFTP, IDoc)",
            "Implement message routing and transformation",
            "Handle exceptions and errors effectively"
        ]
    },
    {
        title: "Advanced Mapping & Logic",
        icon: "Code",
        points: [
            "Perform complex message mappings",
            "Utilize Groovy scripting for custom logic",
            "Use Content Modifier and Enricher",
            "Manage large data volumes"
        ]
    },
    {
        title: "Security & Connectivity",
        icon: "ShieldCheck",
        points: [
            "Configure secure connectivity (SSL, OAuth)",
            "Manage keystores and certificates",
            "Set up SAP Cloud Connector",
            "Implement user authentication and authorization"
        ]
    },
    {
        title: "Monitoring & Operations",
        icon: "Activity",
        points: [
            "Monitor integration artifacts and message processing",
            "Troubleshoot failures and analyze logs",
            "Manage transport and lifecycle of content",
            "Set up alerts for critical failures"
        ]
    }
];

export const cpiRealWorldScenarios = [
    {
        title: "Hybrid HR Integration (SuccessFactors to On-Premise ERP)",
        icon: "Users",
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "Synchronize employee data from SuccessFactors (Cloud) to SAP ERP (On-Premise) for payroll processing.",
        role: "SAP CPI Integration Consultant",
        responsibilities: [
            "Configure SAP Cloud Connector for secure tunnel",
            "Design iFlow to poll SuccessFactors API",
            "Map EC fields to SAP HR IDoc format",
            "Implement error handling for failed updates"
        ],
        outcome: "Automated payroll data sync, secure hybrid connectivity, real-time updates."
    },
    {
        title: "B2B E-Invoicing with Trading Partners",
        icon: "FileText",
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "Automate invoice transmission to trading partners using EDI standards (AS2).",
        role: "Integration Architect",
        responsibilities: [
            "Configure AS2 adapter for secure B2B communication",
            "Transform SAP IDoc invoices to EDIFACT/X12 format",
            "Implement digital signature and encryption",
            "Set up acknowledgment (MDN) handling"
        ],
        outcome: "Automated B2B transactions, reduced manual entry, compliant digital invoicing."
    },
    {
        title: "Third-Party Logistics (3PL) Integration",
        icon: "Truck",
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "Send delivery requests to 3PL provider via SFTP and receive shipment status updates.",
        role: "CPI Developer",
        responsibilities: [
            "Design iFlow to pick up delivery files",
            "Convert CSV format to XML for internal processing",
            "Route messages based on logistics provider",
            "Establish SFTP connectivity and polling"
        ],
        outcome: "Streamlined logistics operations, visibility into shipment status, automated tracking."
    }
];



// --- SAP TRM Content ---

export const trmTargetAudience = [
    {
        icon: "Banknote",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "Finance & Treasury Professionals",
        description: [
            "Treasury managers and analysts",
            "Cash managers",
            "Financial risk managers",
            "Corporate finance professionals"
        ]
    },
    {
        icon: "Laptop",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "SAP FICO Consultants",
        description: [
            "FICO consultants specializing in Treasury",
            "SAP Financials experts",
            "Functional consultants broadening skills",
            "System architects for finance"
        ]
    },
    {
        icon: "Landmark",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "Banking Professionals",
        description: [
            "Bankers moving to corporate treasury",
            "Bank relationship managers",
            "Financial instrument specialists",
            "Risk analysts"
        ]
    }
];

export const trmPrerequisites = {
    minimum: [
        "Strong understanding of financial accounting",
        "Knowledge of treasury products (FX, Money Market)",
        "Familiarity with financial risk management",
        "Basic SAP FICO knowledge"
    ],
    nicetohave: [
        "Experience in corporate treasury",
        "Deep knowledge of financial instruments",
        "SAP FICO certification",
        "Understanding of hedge accounting"
    ]
};

export const trmLearningOutcomes = [
    {
        title: "Treasury Management",
        icon: "Briefcase",
        points: [
            "Manage money market and foreign exchange deals",
            "Handle securities and derivatives",
            "Execute back-office settlement processes",
            "Manage correspondence with banks"
        ]
    },
    {
        title: "Risk Management",
        icon: "ShieldAlert",
        points: [
            "Analyze market and credit risk",
            "Monitor exposure and limits",
            "Perform value-at-risk (VaR) analysis",
            "Implement hedge strategies"
        ]
    },
    {
        title: "Cash & Liquidity Mgmt",
        icon: "Banknote",
        points: [
            "Perform cash flow forecasting",
            "Manage in-house cash",
            "Optimize liquidity and bank accounts",
            "Reconcile bank statements"
        ]
    },
    {
        title: "Accounting & Compliance",
        icon: "FileText",
        points: [
            "Configure treasury accounting settings",
            "Manage hedge accounting (IFRS 9 / FAS 133)",
            "Perform month-end valuation and closing",
            "Ensure regulatory compliance"
        ]
    }
];

export const trmRealWorldScenarios = [
    {
        title: "Global Cash Consolidation & Transformation",
        icon: "Globe",
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "Multinational with 15 countries needs centralized cash management and visibility.",
        role: "Treasury Solution Architect",
        responsibilities: [
            "Design In-House Cash (IHC) structure",
            "Configure electronic bank statement processing",
            "Implement cash pooling structures",
            "Set up global cash position reporting"
        ],
        outcome: "Real-time global cash visibility, reduced bank fees, optimized liquidity."
    },
    {
        title: "Bank's Risk Management Upgrade",
        icon: "Landmark",
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "Financial institution replacing legacy systems with SAP TRM for derivatives and risk.",
        role: "TRM Risk Consultant",
        responsibilities: [
            "Configure complex derivative instruments",
            "Implement Market Risk Analyzer",
            "Set up limit management for counterparties",
            "Design risk reporting dashboards"
        ],
        outcome: "Robust risk framework, automated limit checks, compliance with extensive regulations."
    },
    {
        title: "Asset Manager's Portfolio System",
        icon: "TrendingUp",
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "Investment firm needs to streamline securities trading and portfolio analysis.",
        role: "TRM Functional Consultant",
        responsibilities: [
            "Configure securities master data and classes",
            "Implement trade capture and settlement workflows",
            "Set up portfolio valuation and yield analysis",
            "Automate corporate actions processing"
        ],
        outcome: "Streamlined trading desk, accurate portfolio valuation, automated back-office."
    }
];


// --- Fieldglass Content ---

export const fieldglassTargetAudience = [
    {
        icon: "Laptop",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "HR & Recruitment Professionals",
        description: [
            "HR managers mastering VMS",
            "Recruitment specialists automating procurement",
            "Talent acquisition managers",
            "HR operations coordinators"
        ]
    },
    {
        icon: "ShoppingCart",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "Procurement & Vendor Specialists",
        description: [
            "Procurement managers in service procurement",
            "Vendor managers using Fieldglass",
            "Procurement analysts specializing in VMS",
            "Category managers for contingent spend"
        ]
    },
    {
        icon: "Database",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "IT & ERP Professionals",
        description: [
            "SAP consultants shifting to contingent workforce",
            "ERP admins seeking VMS expertise",
            "Technical architects for enterprise solutions",
            "DB admins supporting Fieldglass"
        ]
    },
    {
        icon: "Building2",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "Finance & Operations Leaders",
        description: [
            "Finance managers managing workforce spend",
            "Operations directors optimizing efficiency",
            "CFO offices controlling contingent costs",
            "Internal audit teams ensuring compliance"
        ]
    },
    {
        icon: "GraduationCap",
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "Fresh Graduates & Career Changers",
        description: [
            "MBA/HR graduates aspiring for SAP careers",
            "IT professionals shifting to enterprise solutions",
            "Business analysts targeting VMS consulting",
            "Career changers with HR/procurement skills"
        ]
    }
];

export const fieldglassPrerequisites = {
    minimum: [
        "Understanding of HR processes (hiring, onboarding)",
        "Knowledge of contingent workforce operations",
        "Experience with web/business applications",
        "Ability to operate unsupervised"
    ],
    nicetohave: [
        "Prior SAP experience (HR, MM, FICO)",
        "Experience in HR or procurement domain",
        "Understanding of ERP systems",
        "Reporting skills in Excel"
    ]
};

export const fieldglassLearningOutcomes = [
    {
        title: "Contingent Work Lifecycle",
        icon: "Users",
        points: [
            "Manage worker onboarding & offboarding",
            "Handle requisitions & assignments",
            "Process timesheets & approvals",
            "Ensure compliance & cost control"
        ]
    },
    {
        title: "SOW Services Procurement",
        icon: "FileText",
        points: [
            "Manage SOW lifecycle & bidding",
            "Configure billing models & structures",
            "Automate invoicing & payments",
            "Track service provider performance"
        ]
    },
    {
        title: "Vendor Management (VMS)",
        icon: "Building",
        points: [
            "Formulate vendor onboarding processes",
            "Maintain vendor master data",
            "Create vendor self-service portals",
            "Oversee vendor compliance"
        ]
    },
    {
        title: "Integration & Analytics",
        icon: "BarChart3",
        points: [
            "Connect Fieldglass with SAP S/4HANA",
            "Analyze contingent workforce spend",
            "Design KPI dashboards & reports",
            "Troubleshoot integration flows"
        ]
    }
];

export const fieldglassRealWorldScenarios = [
    {
        title: "Global IT Services Contingent Platform",
        icon: "Globe",
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "MNC with 50,000 contingent workers needs centralized VMS for 12 countries.",
        role: "Lead SAP Fieldglass Consultant",
        responsibilities: [
            "Design corporate governance structure",
            "Configure onboarding & compliance workflows",
            "Automate timesheet & invoicing processes",
            "Establish workforce analytic dashboards"
        ],
        outcome: "Centralized control, operational cost reduction, global compliance visibility."
    },
    {
        title: "Retail Vendor Management Automation",
        icon: "ShoppingBag",
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "Retail company with 500+ vendors needs to replace manual processes.",
        role: "Fieldglass Implementation Lead",
        responsibilities: [
            "Develop vendor self-service onboarding portal",
            "Automate qualification & performance tracking",
            "Create vendor compliance checking procedures",
            "Build risk assessment workflows"
        ],
        outcome: "Streamlined onboarding, automated scaling, enhanced vendor performance tracking."
    },
    {
        title: "Enterprise SOW Implementation",
        icon: "FileText",
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
        scenario: "Global services company adopting Fieldglass SOW for $500M annual spend projects.",
        role: "Solution Architect / SOW Specialist",
        responsibilities: [
            "Develop SOW structures for engagement models",
            "Configure bidding & milestone billing",
            "Design collaboration workflows",
            "Establish governance procedures"
        ],
        outcome: "Streamlined project setup, automated invoicing, improved spend visibility."
    }
];
