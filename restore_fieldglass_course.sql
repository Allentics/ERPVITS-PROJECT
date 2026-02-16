
INSERT INTO public.courses (id, title, hero_heading, hero_subheading, description, category, duration, price, hero_image, badges, features, curriculum, faqs, sections, meta_title, meta_description, schema)
VALUES (
    'sap-fieldglass', 
    'SAP Fieldglass', 
    'Become a Leader in Managing a Contingent Workforce with SAP Fieldglass Training', 
    'Learn SAP Fieldglass from Certified Experts – 100% Hands-On, Job-Oriented Training. Master contingent workforce management with real-world scenarios.', 
    'This SAP Fieldglass training course is specifically tailored for HR professionals, procurement professionals, IT consultants, and work program managers. It combines hands-on system training, expert instruction, and a curriculum designed for certification.', 
    'Functional', 
    '35+ Hours', 
    'Competitive', 
    '/images/ERPVITS - All Modules Infographics/ERPVITS - SAP FG Infographic.webp', 
    '["SAP Certified Trainers", "4.7 Learner Rating", "24/7 Team support"]'::jsonb, 
    '[]'::jsonb, 
    '[]'::jsonb, 
    '[]'::jsonb, 
    '[]'::jsonb, 
    'SAP Fieldglass Online Training | ERPVITS Certification', 
    'Master SAP Fieldglass Online Training with ERPVITS. Learn VMS, Contingent Workforce, SOW modules, and integration with SAP S/4HANA.', 
    ''
)
ON CONFLICT (id) DO UPDATE SET 
    title = EXCLUDED.title, 
    description = EXCLUDED.description, 
    category = EXCLUDED.category, 
    hero_image = EXCLUDED.hero_image,
    hero_heading = EXCLUDED.hero_heading,
    hero_subheading = EXCLUDED.hero_subheading,
    duration = EXCLUDED.duration,
    meta_title = EXCLUDED.meta_title,
    meta_description = EXCLUDED.meta_description;
