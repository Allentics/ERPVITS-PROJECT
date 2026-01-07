-- Update script for SAP Ariba Course Content
-- Run this in your Supabase SQL Editor if you wish to persist these changes to the database.
-- Note: The application currently prioritizes the local file content for 'sap-ariba', so this is for synchronization/backup.

UPDATE courses
SET 
  hero_image = NULL,
  sections = '[
    {
        "type": "detailed_features",
        "title": "Learn SAP Ariba from Certified Experts – 100% Hands-On, Job-Oriented Training",
        "subtitle": "Expert-led learning with real-world experience and proven methodologies from actual enterprise implementations",
        "badge": "Why Choose Us",
        "items": [
            {
                "title": "Certified Instructor Expertise",
                "description": "Our trainers are certified SAP professionals with real enterprise project insights."
            },
            {
                "title": "100% Hands-On Learning",
                "description": "Live demonstrations, guided lab exercises, and real system configurations - not just theory."
            },
            {
                "title": "Job Oriented Curriculum",
                "description": "Designed around actual consulting scenarios and tasks/activities you''ll face in real SAP Ariba projects."
            },
            {
                "title": "Flexible Batch Timings",
                "description": "Weekday evenings and weekend batches with recorded sessions for maximum flexibility."
            },
            {
                "title": "SAP Certification Support",
                "description": "Complete exam preparation with practice tests, study guides, and strategies for all three SAP Ariba certifications."
            },
            {
                "title": "24/7 Lab Environment Access",
                "description": "Dedicated cloud server access to practice freely from any place, any time."
            },
            {
                "title": "Comprehensive Study Material",
                "description": "Downloadable PDF presentations, checklists, and interview reference materials, updated quarterly."
            },
            {
                "title": "Lifetime Recording Access",
                "description": "Access session recordings easily recorded in HD in our LMS for revision and continuous learning."
            },
            {
                "title": "Career Services",
                "description": "Resume building, interview preparation, mock interviews, and ongoing career guidance."
            },
            {
                "title": "3 Months Post Training Support",
                "description": "Continued access to instructors for questions, clarifications, and real-world guidance after placement."
            },
            {
                "title": "Small Batch Sizes",
                "description": "Limited to 10-12 participants ensuring personalized attention and interactive sessions."
            },
            {
                "title": "Live Projects & Case Studies",
                "description": "Work on real-world business scenarios from Fortune 500 implementations and virtual client projects."
            }
        ]
    },
    {
        "type": "content_with_image",
        "title": "Why Professionals Choose ERPVITS for SAP Ariba Training",
        "subtitle": "Success Guarantee & Credibility",
        "description": "ERPVITS has established itself as a trusted training partner for SAP modules, with hundreds of successful learners working at top consulting firms. Our comprehensive support ecosystem and alumni network testimonials speak to the quality of instruction and career acceleration our program delivers.",
        "imageSrc": "/images/sap-ariba-certification-tips.png",
        "layout": "left",
        "items": [
            "Trained by 500+ successful SAP professionals",
            "Personalized peer evaluations and learning paths",
            "30+ guided lab sessions from basic to advanced",
            "Active alumni networking and cloud/VMS ecosystem",
            "Mock interviews simulating real client/tech scenarios",
            "Guaranteed certification prep with buffer weeks"
        ]
    },
    {
        "type": "curriculum",
        "title": "SAP Ariba Course Curriculum",
        "modules": [
            {
                "title": "Introduction to SAP Ariba & Ariba Network",
                "topics": [
                    "Overview of Intelligent Spend Management",
                    "Ariba Network Architecture",
                    "Upstream vs. Downstream Modules",
                    "Navigation and Dashboard Customization"
                ]
            },
            {
                "title": "Supplier Lifecycle & Performance (SLP)",
                "topics": [
                    "Supplier Request & Registration",
                    "Qualification & Preferred Status",
                    "Supplier Risk Management",
                    "Modular Questionnaires"
                ]
            },
            {
                "title": "SAP Ariba Sourcing",
                "topics": [
                    "Creating Sourcing Projects",
                    "RFI, RFP, and Auctions",
                    "Event Management & Monitoring",
                    "Awarding & Sourcing Library"
                ]
            },
            {
                "title": "Contract Management",
                "topics": [
                    "Contract Requests & Workspaces",
                    "Authoring Contracts & Clauses",
                    "Review & Approval Workflows",
                    "Integration with Sourcing"
                ]
            },
            {
                "title": "Buying & Invoicing (Procure-to-Pay)",
                "topics": [
                    "Guided Buying Configuration",
                    "Requisitioning & Approval Rules",
                    "Purchase Orders & Goods Receipts",
                    "Invoice Reconciliation & Exception Handling"
                ]
            },
            {
                "title": "Integration (CIG)",
                "topics": [
                    "Overview of Cloud Integration Gateway",
                    "Connecting Ariba to S/4HANA",
                    "Master Data Synchronization",
                    "Transaction Data Flow"
                ]
            }
        ]
    }
  ]'::jsonb
WHERE id = 'sap-ariba' OR id = 'ariba';
