
-- Seed ALL missing content into site_content and site_settings

-- HOMEPAGE
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
ON CONFLICT (page_path, section_key) DO NOTHING;

-- 2. Custom Training Plan Section
INSERT INTO public.site_content (page_path, section_key, content, order_index) VALUES
('/', 'custom_plan', '{
    "title": "Get Your Personalized SAP Training Plan – It''s FREE!",
    "highlight_word": "SAP Training Plan",
    "description": "Every professional''s journey to proficiency in SAP is unique. We will design a personalized training program just for you based on your background, career objectives, and timeline.",
    "benefits": [
        {"icon": "ClipboardList", "text": "Customized curriculum based on your background"},
        {"icon": "Target", "text": "Career roadmap with salary projections"},
        {"icon": "Award", "text": "Recommended certifications for your target role"},
        {"icon": "Calendar", "text": "Flexible scheduling options to fit your life"}
    ],
    "career_paths_title": "Popular Career Paths:",
    "career_paths": [
        {"role": "SAP Consultant", "salary": "$85K → $150K"},
        {"role": "Technical Architect", "salary": "$110K → $180K"},
        {"role": "Analytics Specialist", "salary": "$75K → $135K"},
        {"role": "Project Manager", "salary": "$95K → $160K"}
    ],
    "form_title": "Get Free Career Guidance",
    "cta_text": "Get My Free Career Roadmap"
}'::jsonb, 3)
ON CONFLICT (page_path, section_key) DO NOTHING;

-- 3. Placement Section
INSERT INTO public.site_content (page_path, section_key, content, order_index) VALUES
('/', 'placement', '{
    "title": "OUR LEARNERS PLACED IN TOP COMPANIES",
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
ON CONFLICT (page_path, section_key) DO NOTHING;

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
ON CONFLICT (page_path, section_key) DO NOTHING;

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
        }
    ],
    "cta": "SPEAK WITH AN ADVISOR - BOOK NOW"
}'::jsonb, 7)
ON CONFLICT (page_path, section_key) DO NOTHING;

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
            "quote": "ERPVITS played a huge role in my career growth!",
            "rating": 5
        }
    ]
}'::jsonb, 8)
ON CONFLICT (page_path, section_key) DO NOTHING;

-- 7. Alumni Community
INSERT INTO public.site_content (page_path, section_key, content, order_index) VALUES
('/', 'alumni', '{
    "title": "Join Our Thriving Alumni Community",
    "subtitle": "Connect with 8000+ SAP professionals worldwide for networking, mentorship, and career opportunities",
    "stats": [
        {"icon": "Users", "value": "8,000+", "label": "Alumni Members Worldwide"},
        {"icon": "Briefcase", "value": "1,200+", "label": "Job Referrals Shared Monthly"},
        {"icon": "Building2", "value": "250+", "label": "Companies Actively Hiring"}
    ],
    "linkedin_url": "https://www.linkedin.com/company/13357826/",
    "whatsapp_url": "https://www.whatsapp.com/channel/0029Vb5u9luHwXb481Y1Dx1X"
}'::jsonb, 12)
ON CONFLICT (page_path, section_key) DO NOTHING;

-- ABOUT PAGE
-- 8. About Values
INSERT INTO public.site_content (page_path, section_key, content, order_index) VALUES
('/about', 'values', '{
    "title": "Why We Are Different",
    "items": [
        {
            "title": "Expert Instructors",
            "description": "Learn from certified SAP professionals with 15+ years of industry experience."
        },
        {
            "title": "Real-Time Projects",
            "description": "Gain practical experience by working on live projects that mimic real-world business scenarios."
        },
        {
            "title": "Career support",
            "description": "From resume building to mock interviews, we provide end-to-end placement assistance."
        }
    ]
}'::jsonb, 3)
ON CONFLICT (page_path, section_key) DO NOTHING;

-- CORPORATE TRAINING PAGE
-- 9. Hero
INSERT INTO public.site_content (page_path, section_key, content, order_index) VALUES
('/corporate-training', 'hero', '{
    "title": "Empower Your Workforce with SAP Excellence",
    "highlight": "SAP Excellence",
    "description": "Customized corporate training solutions designed to upskill your teams, optimize business processes, and drive digital transformation.",
    "cta": "Get a Corporate Quote"
}'::jsonb, 1)
ON CONFLICT (page_path, section_key) DO NOTHING;

-- 10. Offerings
INSERT INTO public.site_content (page_path, section_key, content, order_index) VALUES
('/corporate-training', 'offerings', '{
    "title": "Corporate Training Solutions",
    "subtitle": "Tailored programs to meet your organization''s specific needs.",
    "items": [
        {
            "icon": "Briefcase",
            "title": "Custom Curriculum",
            "description": "Training modules designed around your industry verticals and business processes."
        },
        {
            "icon": "Users",
            "title": "Flexible Delivery",
            "description": "On-site, virtual, or hybrid training options to suit your team''s schedule."
        },
        {
            "icon": "Target",
            "title": "Skill Assessment",
            "description": "Pre and post-training assessments to measure ROI and skill gap closure."
        },
        {
            "icon": "BarChart",
            "title": "Project Mentoring",
            "description": "Expert guidance on live projects to ensure successful implementation."
        }
    ]
}'::jsonb, 2)
ON CONFLICT (page_path, section_key) DO NOTHING;

-- 11. CTA
INSERT INTO public.site_content (page_path, section_key, content, order_index) VALUES
('/corporate-training', 'cta', '{
    "title": "Partner with ERPVITS",
    "description": "Join hundreds of companies that trust us for their SAP training needs. Let''s discuss how we can help your team succeed.",
    "primary_cta": "Contact Us",
    "secondary_cta": "View Catalog"
}'::jsonb, 3)
ON CONFLICT (page_path, section_key) DO NOTHING;

-- SITE SETTINGS
-- 12. Announcement Bar
INSERT INTO public.site_settings (key, value) VALUES
('announcement_text', '"Save 10% on all SAP Online Courses! (Limited Slots)"'),
('announcement_highlight', '"EARLY BIRD SPECIAL:"'),
('announcement_visible', 'true')
ON CONFLICT (key) DO NOTHING;
