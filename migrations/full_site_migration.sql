-- Create tables for Site Content and Settings

-- 1. Site Content Table (Modular Sections)
CREATE TABLE IF NOT EXISTS public.site_content (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    page_path text NOT NULL, -- e.g. '/', '/about'
    section_key text NOT NULL, -- e.g. 'hero', 'pricing', 'mission'
    content jsonb NOT NULL DEFAULT '{}'::jsonb,
    order_index integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(page_path, section_key)
);

-- 2. Site Settings Table (Global Config)
CREATE TABLE IF NOT EXISTS public.site_settings (
    key text PRIMARY KEY,
    value text, -- can be string or stringified JSON
    description text,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Ensure description column exists in case table was created earlier
ALTER TABLE public.site_settings ADD COLUMN IF NOT EXISTS description text;

-- 3. Enable RLS
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- 4. Policies
-- Public read access
CREATE POLICY "Public read access for site_content" ON public.site_content FOR SELECT TO anon USING (true);
CREATE POLICY "Public read access for site_settings" ON public.site_settings FOR SELECT TO anon USING (true);

-- Admin full access
CREATE POLICY "Admin full access for site_content" ON public.site_content FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access for site_settings" ON public.site_settings FOR ALL TO authenticated USING (true);

-- 5. Seed Initial Data

-- Seed Global Settings
INSERT INTO public.site_settings (key, value, description) VALUES
('site_email', 'info@erpvits.com', 'Primary contact email'),
('site_phone', '+91 84088 78222', 'Primary contact phone'),
('site_address', 'Pune, India', 'Office address'),
('social_linkedin', 'https://linkedin.com/company/erpvits', 'LinkedIn profile URL'),
('social_facebook', 'https://facebook.com/erpvits', 'Facebook profile URL')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

-- Seed Homepage Hero
INSERT INTO public.site_content (page_path, section_key, content, order_index) VALUES
('/', 'hero', '{
    "heading": "Empower Your Career with Expert SAP Online Training",
    "highlight_text": "SAP Online Training",
    "subheading": "Industry-Leading SAP Online Training Institute with 95%+ Placement Success",
    "description": "Transform your career with ERPVITS, your trusted online SAP training partner. Learn from industry experts with over 15 years of experience in SAP. Get your certification, achieve your dream job and boost your earnings with instructor SAP courses with hands-on projects and placement assistance.",
    "cta_primary": "Start Your SAP Training Journey Today",
    "cta_secondary": "Explore SAP Courses",
    "stats": [
        {"val": "12+ Years", "label": "In SAP Industry"},
        {"val": "6000+", "label": "Professionals Trained"},
        {"val": "24/7", "label": "Team Support"},
        {"val": "8+", "label": "SAP Solution Architects"}
    ]
}'::jsonb, 0)
ON CONFLICT (page_path, section_key) DO UPDATE SET content = EXCLUDED.content;

-- Seed Homepage Pricing
INSERT INTO public.site_content (page_path, section_key, content, order_index) VALUES
('/', 'pricing', '{
    "title": "Affordable SAP Training – Flexible Pricing",
    "subtitle": "Choose the program that fits your budget with flexible payment options available",
    "plans": [
        {
            "name": "Self-Paced Program",
            "desc": "Ideal for independent learners",
            "price": "Lifetime Access",
            "features": [
                "Lifetime access to recordings",
                "Learning materials included",
                "Self-study assistance",
                "Flexible learning timeline",
                "Certification guidance provided",
                "24/7 Portal Access",
                "Resume preparation tips"
            ],
            "cta": "Start Learning Now",
            "color": "blue",
            "popular": false
        },
        {
            "name": "Instructor-Led Program",
            "desc": "Best for career switchers",
            "price": "Live Batches",
            "features": [
                "Live classes with expert trainers",
                "Access to study materials & recordings",
                "Job support included",
                "Real SAP system access",
                "Project-based learning"
            ],
            "cta": "Join Upcoming Batch",
            "color": "orange",
            "popular": true
        },
        {
            "name": "Corporate Training",
            "desc": "For teams and organizations",
            "price": "Custom",
            "features": [
                "Tailored curriculum for team needs",
                "Dedicated trainer for your organization",
                "Team coordination & project alignment",
                "Flexible training schedule",
                "Post-training support & reports"
            ],
            "cta": "Request Corporate Quote",
            "color": "gray",
            "popular": false
        }
    ]
}'::jsonb, 1)
ON CONFLICT (page_path, section_key) DO UPDATE SET content = EXCLUDED.content;

-- Seed About Page
INSERT INTO public.site_content (page_path, section_key, content, order_index) VALUES
('/about', 'hero', '{
    "title": "About ERPVITS",
    "description": "We are a global leader in SAP training, dedicated to transforming careers through expert-led education and real-world project experience."
}'::jsonb, 0),
('/about', 'mission', '{
    "title": "Our Mission",
    "description": "At ERPVITS, our mission is to bridging the gap between theoretical knowledge and industry demands. We believe that true learning happens through doing, which is why our curriculum is centered around hands-on projects and real-time scenarios.",
    "secondary_description": "With over a decade of experience, we have helped thousands of professionals and students master SAP technologies and secure high-paying roles in top multinational corporations.",
    "stats": [
        {"val": "6000+", "label": "Students Trained"},
        {"val": "95%", "label": "Placement Rate"},
        {"val": "20+", "label": "Countries Reach"},
        {"val": "500+", "label": "Hiring Partners"}
    ]
}'::jsonb, 1)
ON CONFLICT (page_path, section_key) DO UPDATE SET content = EXCLUDED.content;

-- Seed Homepage WhyChooseUs
INSERT INTO public.site_content (page_path, section_key, content, order_index) VALUES
('/', 'why_choose_us', '{
    "title": "Why Choose ERPVITS for Your SAP Online Training?",
    "subtitle": "Transform Your Career with Certified SAP Online Training – 6000+ Professionals Trained & Successfully Placed Globally",
    "benefits": [
        {
            "icon": "Monitor",
            "title": "Expert SAP Training with Industry Leaders",
            "desc": "Instructors with 15+ years of practical SAP experience. Learn from experts who have undertaken SAP projects in Fortune 500 companies."
        },
        {
            "icon": "Zap",
            "title": "Real-Time, Instructor-Led SAP Courses",
            "desc": "Interactive live sessions with real-time Q&A. No pre-recorded content. Engage in discussions and receive prompt responses."
        },
        {
            "icon": "Briefcase",
            "title": "Hands-On Project-Based SAP Learning",
            "desc": "Practice with live SAP environments. Complete end-to-end projects from requirement gathering to implementation."
        },
        {
            "icon": "Award",
            "title": "Job Placement Support & Career Support",
            "desc": "Placement success rate of >95%. Comprehensive support including resume prep, mock interviews, and hiring partner connections."
        },
        {
            "icon": "ShieldCheck",
            "title": "Guidance for Multiple SAP Certifications",
            "desc": "Support for global certifications (Ariba, FICO, S/4HANA, etc.). Align coursework with exam requirements."
        },
        {
            "icon": "Clock",
            "title": "Flexible SAP Learning Formats for Your Schedule",
            "desc": "Instructor-Led, Self-Paced, and Corporate options. Weekend and evening batches available for working professionals."
        },
        {
            "icon": "Calculator",
            "title": "Affordable SAP Course Charges",
            "desc": "Competitive pricing with flexible installment plans. High quality training that doesn''t break the bank."
        },
        {
            "icon": "Users",
            "title": "Lifetime Career Support & Mentorship",
            "desc": "Lifetime access to mentors, alumni network, and professional development resources even after course completion."
        }
    ]
}'::jsonb, 2)
ON CONFLICT (page_path, section_key) DO UPDATE SET content = EXCLUDED.content;
