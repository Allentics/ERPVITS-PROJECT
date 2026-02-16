
-- Seed ALL missing homepage sections and static pages content into site_content

-- 1. Urgency Section
INSERT INTO public.site_content (page_path, section_key, content, order_index) VALUES
('/', 'urgency', '{
    "title": "Next Live Batch Starting Soon!",
    "days": 2,
    "hours": 14,
    "minutes": 22,
    "batch_details": [
        {"icon": "📅", "label": "Date", "value": "Next Monday"},
        {"icon": "⏰", "label": "Time", "value": "7:00 AM"},
        {"icon": "👨‍🏫", "label": "Format", "value": "Instructor-Led (Online)"}
    ],
    "cta_primary": "RESERVE YOUR SEAT NOW - LIMITED SPOTS!",
    "cta_secondary": "SECURE SPOT WITH 30% Fees Now - PAY REST LATER"
}'::jsonb, 1)
ON CONFLICT (page_path, section_key) DO UPDATE SET content = EXCLUDED.content;

-- 2. Custom Training Plan Section
INSERT INTO public.site_content (page_path, section_key, content, order_index) VALUES
('/', 'custom_plan', '{
    "title": "Get Your Personalized SAP Training Plan – It''s FREE!",
    "highlight_word": "SAP Training Plan",
    "description": "Every professional''s journey to proficiency in SAP is unique. We will design a personalized training program just for you based on your background, career objectives, and timeline.",
    "benefits": [
        "Customized curriculum based on your background",
        "Career roadmap with salary projections",
        "Recommended certifications for your target role",
        "Flexible scheduling options to fit your life"
    ],
    "career_paths": [
        {"role": "SAP Consultant", "salary": "$85K → $150K"},
        {"role": "Technical Architect", "salary": "$110K → $180K"},
        {"role": "Analytics Specialist", "salary": "$75K → $135K"},
        {"role": "Project Manager", "salary": "$95K → $160K"}
    ],
    "form_title": "Get Free Career Guidance",
    "cta_text": "Get My Free Career Roadmap"
}'::jsonb, 3)
ON CONFLICT (page_path, section_key) DO UPDATE SET content = EXCLUDED.content;

-- 3. Placement Section
INSERT INTO public.site_content (page_path, section_key, content, order_index) VALUES
('/', 'placement', '{
    "title": "100% Job Placement Assistance Program",
    "subtitle": "We don''t just train you; we launch your career. Join the thousands who have transitioned to top MNCs through ERPVITS.",
    "stats": [
        {"label": "Placement Success Rate", "val": "95%+"},
        {"label": "Average Time to Job", "val": "2-4 Weeks"},
        {"label": "Salary Increase", "val": "30-80%"},
        {"label": "Placements in", "val": "15+ Countries"},
        {"label": "Active Hiring Partners", "val": "300+"},
        {"label": "New Positions Monthly", "val": "40+"}
    ],
    "companies": [
        {"name": "Deloitte", "logo": "/images/partners/deloitte.png"},
        {"name": "Accenture", "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1200px-Accenture.svg.png"},
        {"name": "PwC", "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/1200px-PricewaterhouseCoopers_Logo.svg.png"},
        {"name": "EY", "logo": "/images/partners/ey.png"},
        {"name": "SAP SE", "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/1200px-SAP_2011_logo.svg.png"},
        {"name": "Microsoft", "logo": "/images/partners/microsoft.png"}
    ]
}'::jsonb, 5)
ON CONFLICT (page_path, section_key) DO UPDATE SET content = EXCLUDED.content;

-- 4. Proven Results Section
INSERT INTO public.site_content (page_path, section_key, content, order_index) VALUES
('/', 'proven_results', '{
    "title": "Proven Results – Thousands of Success Stories",
    "subtitle": "Industry-leading placement rates and career transformation outcomes",
    "stats": [
        {"icon": "Target", "value": "95%+", "label": "95%+ Placement Success Rate", "color": "text-red-500"},
        {"icon": "TrendingUp", "value": "40%+", "label": "30-80% Average Salary Increase", "color": "text-yellow-500"},
        {"icon": "Users", "value": "8000+", "label": "8000+ Professionals Trained", "color": "text-slate-700"},
        {"icon": "Globe", "value": "15+", "label": "Global Presence: 15+ Countries", "color": "text-blue-500"},
        {"icon": "BookOpen", "value": "25+", "label": "Expert Guidance on 25+ SAP Certifications", "color": "text-green-600"},
        {"icon": "Clock", "value": "2 Weeks", "label": "2-4 Weeks to Placement", "color": "text-slate-500"}
    ]
}'::jsonb, 6)
ON CONFLICT (page_path, section_key) DO UPDATE SET content = EXCLUDED.content;

-- 5. Career Advisors Section
INSERT INTO public.site_content (page_path, section_key, content, order_index) VALUES
('/', 'career_advisors', '{
    "title": "Speak With SAP Career Advisors - Free 30-Minute Consultation",
    "subtitle": "Get Expert Guidance on Your SAP Career Path from Industry Veterans",
    "advisors": [
        {
            "name": "Gaurav Deshpande",
            "role": "SAP Finance & Treasury Specialist",
            "experience": "15 Years Experience",
            "expertise": ["Financial Transformation", "Treasury Operations", "Risk Management"],
            "image": "👨‍💼",
            "availability": "Available 10AM - 4PM"
        },
        {
            "name": "Nitin Patil",
            "role": "SAP Procurement & Vendor Management Specialist",
            "experience": "12 Years Experience",
            "expertise": ["Digital Sourcing", "Procurement Automation", "Supplier Collaboration"],
            "image": "👨‍💻",
            "availability": "Available 10AM - 6PM"
        },
        {
            "name": "Anasuya Joshi",
            "role": "SAP Supply Chain & Logistics Specialist",
            "experience": "14 Years Experience",
            "expertise": ["Supply Chain Planning", "Manufacturing", "Master Data Governance"],
            "image": "👩‍💼",
            "availability": "Available 4PM - 9PM"
        },
        {
            "name": "Santosh Kumar",
            "role": "SAP Customer Experience & Cloud Technology Specialist",
            "experience": "13 Years Experience",
            "expertise": ["CX Solutions", "Cloud Integrations", "SAP BTP Extensions"],
            "image": "👨‍💻",
            "availability": "Available 6PM - 10PM"
        }
    ],
    "cta": "SPEAK WITH AN ADVISOR - BOOK NOW"
}'::jsonb, 7)
ON CONFLICT (page_path, section_key) DO UPDATE SET content = EXCLUDED.content;

-- 6. Success Stories
INSERT INTO public.site_content (page_path, section_key, content, order_index) VALUES
('/', 'success_stories', '{
    "title": "Meet Our Success Stories",
    "subtitle": "People Who Transformed Their Careers with ERPVITS Training",
    "stories": [
        {
            "name": "Karuna Nimse",
            "role": "Senior SAP FICO Consultant",
            "company": "Deloitte Consulting",
            "hike": "+56.25%",
            "course": "SAP FICO Training",
            "time": "60 days",
            "quote": "ERPVITS played a huge role in my career growth! SAP FICO training was practical, detailed, and perfectly aligned with real project requirements.",
            "rating": 5
        },
        {
            "name": "Sarah Johnson",
            "role": "SAP SD Functional Consultant",
            "company": "Accenture",
            "hike": "+33.33%",
            "course": "SAP SD Training",
            "time": "21 days",
            "quote": "SAP SD training was incredibly well-structured and industry-focused. Thanks to their guidance, I secured a new position at Accenture within just 3 weeks.",
            "rating": 5
        }
    ]
}'::jsonb, 8)
ON CONFLICT (page_path, section_key) DO UPDATE SET content = EXCLUDED.content;

-- 7. Home FAQ
INSERT INTO public.site_content (page_path, section_key, content, order_index) VALUES
('/', 'faq', '{
    "title": "Frequently Asked Questions",
    "subtitle": "Common questions about SAP Training & Certification",
    "faqs": [
        {"q": "What is SAP training?", "a": "An SAP training course is professional training to understand the SAP integrated software used in enterprise resource planning (ERP)."},
        {"q": "How to learn SAP online?", "a": "Learning SAP online is possible through self-paced and instructor-led AU classes and project work."},
        {"q": "What is the price of SAP training?", "a": "SAP training price ranges based on the training module and methodology."}
    ]
}'::jsonb, 10)
ON CONFLICT (page_path, section_key) DO UPDATE SET content = EXCLUDED.content;

-- 8. Alumni Community
INSERT INTO public.site_content (page_path, section_key, content, order_index) VALUES
('/', 'alumni', '{
    "title": "Join Our Thriving Alumni Community",
    "subtitle": "Connect with 8000+ SAP professionals worldwide for networking, mentorship, and career opportunities",
    "stats": [
        {"icon": "Users", "value": "8,000+", "label": "Alumni Members Worldwide"},
        {"icon": "Briefcase", "value": "1,200+", "label": "Job Referrals Shared Monthly"},
        {"icon": "Building2", "value": "250+", "label": "Companies Actively Hiring"}
    ],
    "linkedin_url": "https://linkedin.com",
    "whatsapp_url": "https://whatsapp.com"
}'::jsonb, 12)
ON CONFLICT (page_path, section_key) DO UPDATE SET content = EXCLUDED.content;
