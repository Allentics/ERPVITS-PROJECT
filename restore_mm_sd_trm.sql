
-- Restore SAP MM
INSERT INTO public.courses (id, title, hero_heading, hero_subheading, description, category, duration, price, hero_image, badges, features, curriculum, faqs, sections, meta_title, meta_description, schema)
VALUES (
    'sap-mm',
    'SAP S/4HANA MM',
    'Upskill Your Career with SAP S/4HANA MM Online Training',
    'The ERPVITS SAP S/4HANA MM Online Training Program is a step toward a new career track for supply chain professionals and SAP consultants focusing on inventory management, procurement, and enterprise resource planning.',
    'This SAP S/4HANA MM training course is specifically tailored for supply chain professionals, inventory managers, and procurement specialists. It combines hands-on system training, expert instruction, and a curriculum designed for certification.',
    'Functional',
    '45+ Hours',
    'Competitive',
    '/images/ERPVITS - All Modules Infographics/ERPVITS - SAP MM Infographic.webp',
    '["SAP Certified Trainers", "4.8 Learner Rating", "24/7 Team support"]'::jsonb,
    '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb,
    'SAP S/4HANA MM Online Training | ERPVITS Certification',
    'Master SAP S/4HANA MM Online Training with ERPVITS. Learn procurement, inventory, and supply chain management with real-time projects.',
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

-- Restore SAP SD
INSERT INTO public.courses (id, title, hero_heading, hero_subheading, description, category, duration, price, hero_image, badges, features, curriculum, faqs, sections, meta_title, meta_description, schema)
VALUES (
    'sap-sd',
    'SAP SD',
    'Transform Your Career with SAP SD',
    'Master sales & distribution management with 100% hands-on, job-oriented training. Learn order management, billing, and ERP integration.',
    'The SAP SD Online Training Program from ERPVITS offers transformational learning opportunities in order management, billing, shipping, and ERP integration with live sessions, real-world projects, and certification preparation.',
    'Functional',
    '35 Hours',
    'Competitive',
    '/images/ERPVITS - All Modules Infographics/ERPVITS - SAP SD Infographic.webp',
    '["SAP Certified Trainers", "4.8 Learner Rating", "24/7 Team support"]'::jsonb,
    '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb,
    'SAP SD Online Training | ERPVITS Certification',
    'Master SAP SD Online Training with ERPVITS. Learn order management, billing, and ERP integration with live projects.',
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

-- Restore SAP TRM
INSERT INTO public.courses (id, title, hero_heading, hero_subheading, description, category, duration, price, hero_image, badges, features, curriculum, faqs, sections, meta_title, meta_description, schema)
VALUES (
    'sap-trm',
    'SAP TRM',
    'Master the Future of Corporate Treasury with SAP TRM Online Training',
    'Unlock premium treasury consulting careers with SAP TRM Online Training. Learn with hands-on training, work with real financial workflows.',
    'The SAP Treasury and Risk Management (TRM) training course by ERPVITS is designed to help you master the end-to-end treasury processes in SAP S/4HANA. Covers Transaction Manager, Risk Management, and Hedge Management.',
    'Functional',
    '50 Hours',
    'Competitive',
    '/images/ERPVITS - All Modules Infographics/ERPVITS - SAP TRM Infographic.webp',
    '["SAP Certified Trainers", "4.8 Learner Rating", "24/7 Team support"]'::jsonb,
    '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb,
    'SAP TRM Online Training | ERPVITS Certification',
    'Master SAP TRM Online Training with ERPVITS. Learn cash management, financial instruments & risk analysis through live projects.',
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
