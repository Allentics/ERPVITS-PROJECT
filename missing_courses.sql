INSERT INTO public.courses (id, title, hero_heading, hero_subheading, description, category, duration, price, hero_image, badges, features, curriculum, faqs, sections, meta_title, meta_description, schema)
VALUES ('sap-tm', 'SAP TM', 'Master Transportation Management', '', 'Master logistics optimization with SAP TM training online. Learn freight management, planning, hands-on labs, real projects, and certification support.', 'Functional', '40-50 Hours', 'Competitive', '/images/ERPVITS - All Modules Infographics/ERPVITS - SAP TM Infographic.webp', '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, 'SAP TM Training', 'Master SAP TM with our comprehensive training.', '')
ON CONFLICT (id) DO UPDATE SET 
    title = EXCLUDED.title, 
    hero_heading = EXCLUDED.hero_heading, 
    hero_subheading = EXCLUDED.hero_subheading, 
    description = EXCLUDED.description, 
    category = EXCLUDED.category, 
    duration = EXCLUDED.duration, 
    price = EXCLUDED.price, 
    hero_image = EXCLUDED.hero_image,
    badges = EXCLUDED.badges,
    features = EXCLUDED.features,
    curriculum = EXCLUDED.curriculum,
    faqs = EXCLUDED.faqs,
    sections = EXCLUDED.sections,
    meta_title = EXCLUDED.meta_title,
    meta_description = EXCLUDED.meta_description,
    schema = EXCLUDED.schema;

INSERT INTO public.courses (id, title, hero_heading, hero_subheading, description, category, duration, price, hero_image, badges, features, curriculum, faqs, sections, meta_title, meta_description, schema)
VALUES ('sap-ewm', 'SAP EWM', 'Master Modern Warehouse Operations', '', 'Master modern warehouse operations with SAP EWM training online. Learn warehouse optimization, inventory management, RF operations, and S/4HANA integration.', 'Functional', '40-50 Hours', 'Competitive', '/images/ERPVITS - All Modules Infographics/ERPVITS - SAP EWM Infographic.webp', '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, 'SAP EWM Training', 'Master SAP EWM with our comprehensive training.', '')
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, category = EXCLUDED.category, hero_image = EXCLUDED.hero_image;

INSERT INTO public.courses (id, title, hero_heading, hero_subheading, description, category, duration, price, hero_image, badges, features, curriculum, faqs, sections, meta_title, meta_description, schema)
VALUES ('sap-ibp', 'SAP IBP', 'Transform Your Supply Chain', '', 'Transform your supply chain with SAP IBP training. Master demand planning, inventory optimization, and S&OP cycles with hands-on labs and real-world projects.', 'Functional', '40-50 Hours', 'Competitive', '/images/ERPVITS - All Modules Infographics/ERPVITS - SAP IBP Infographic.webp', '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, 'SAP IBP Training', 'Master SAP IBP with our comprehensive training.', '')
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, category = EXCLUDED.category, hero_image = EXCLUDED.hero_image;

INSERT INTO public.courses (id, title, hero_heading, hero_subheading, description, category, duration, price, hero_image, badges, features, curriculum, faqs, sections, meta_title, meta_description, schema)
VALUES ('sap-mdg', 'SAP MDG', 'Master Enterprise Data Governance', '', 'Master enterprise data governance with SAP MDG training. Learn to manage master data quality, implement governance frameworks, and ensure compliance across the organization.', 'Functional', '40-50 Hours', 'Competitive', '/images/ERPVITS - All Modules Infographics/ERPVITS - SAP MDG Infographic.webp', '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, 'SAP MDG Training', 'Master SAP MDG with our comprehensive training.', '')
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, category = EXCLUDED.category, hero_image = EXCLUDED.hero_image;

INSERT INTO public.courses (id, title, hero_heading, hero_subheading, description, category, duration, price, hero_image, badges, features, curriculum, faqs, sections, meta_title, meta_description, schema)
VALUES ('sap-c4c-functional', 'SAP C4C Functional', 'Master Cloud-Based CRM with the #1 SAP C4C Functional Online Training Program', '', 'Excel in cloud-based customer relationship management, sales operations, and customer service transformation with our comprehensive SAP C4C Functional training.', 'Functional', '40-50 Hours', 'Competitive', '/images/ERPVITS - All Modules Infographics/ERPVITS - SAP C4C Func Infographic.webp', '[]'::jsonb, '["Certified SAP CRM Instructors", "Hands-on Sales & Service Cloud Labs", "Real-world Business Case Studies", "100% Placement & Interview Support", "Global Certification Guidance"]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, 'SAP C4C Functional Training', 'Master SAP C4C Functional with our comprehensive training.', '')
ON CONFLICT (id) DO UPDATE SET 
    title = EXCLUDED.title, 
    hero_heading = EXCLUDED.hero_heading, 
    hero_subheading = EXCLUDED.hero_subheading, 
    description = EXCLUDED.description, 
    category = EXCLUDED.category, 
    duration = EXCLUDED.duration, 
    price = EXCLUDED.price, 
    hero_image = EXCLUDED.hero_image,
    badges = EXCLUDED.badges,
    features = EXCLUDED.features,
    curriculum = EXCLUDED.curriculum,
    faqs = EXCLUDED.faqs,
    sections = EXCLUDED.sections,
    meta_title = EXCLUDED.meta_title,
    meta_description = EXCLUDED.meta_description,
    schema = EXCLUDED.schema;

INSERT INTO public.courses (id, title, hero_heading, hero_subheading, description, category, duration, price, hero_image, badges, features, curriculum, faqs, sections, meta_title, meta_description, schema)
VALUES ('sap-abap-on-hana', 'SAP ABAP on HANA', 'Master Modern ABAP Development', '', 'Master Modern ABAP Development with the #1 SAP ABAP on HANA Online Training Program. Learn performance tuning, coding labs, real projects, and certification support.', 'Technical', '40-50 Hours', 'Competitive', '/images/ERPVITS - All Modules Infographics/ERPVITS - SAP ABAP on HANA Infographic.webp', '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, 'SAP ABAP on HANA Training', 'Master SAP ABAP on HANA with our comprehensive training.', '')
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, category = EXCLUDED.category, hero_image = EXCLUDED.hero_image;

INSERT INTO public.courses (id, title, hero_heading, hero_subheading, description, category, duration, price, hero_image, badges, features, curriculum, faqs, sections, meta_title, meta_description, schema)
VALUES ('analytics-cloud', 'SAP Analytics Cloud', 'Master Cloud-Based Analytics with the #1 SAP Analytics Cloud Online Training Program', '', 'Transform your career with SAP Analytics Cloud training online. Master business intelligence, augmented analytics, planning, and real-time visualization with expert guidance.', 'Technical', '40-50 Hours', 'Competitive', '/images/ERPVITS - All Modules Infographics/ERPVITS - SAP Analytics Cloud Infographic.webp', '[]'::jsonb, '["Global Credential Recognition", "Career Acceleration", "Competitive Advantage", "Continuous Learning", "Professional Credibility"]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, 'SAP Analytics Cloud Training', 'Master SAP Analytics Cloud with our comprehensive training.', '')
ON CONFLICT (id) DO UPDATE SET 
    title = EXCLUDED.title, 
    hero_heading = EXCLUDED.hero_heading, 
    hero_subheading = EXCLUDED.hero_subheading, 
    description = EXCLUDED.description, 
    category = EXCLUDED.category, 
    duration = EXCLUDED.duration, 
    price = EXCLUDED.price, 
    hero_image = EXCLUDED.hero_image,
    badges = EXCLUDED.badges,
    features = EXCLUDED.features,
    curriculum = EXCLUDED.curriculum,
    faqs = EXCLUDED.faqs,
    sections = EXCLUDED.sections,
    meta_title = EXCLUDED.meta_title,
    meta_description = EXCLUDED.meta_description,
    schema = EXCLUDED.schema;

INSERT INTO public.courses (id, title, hero_heading, hero_subheading, description, category, duration, price, hero_image, badges, features, curriculum, faqs, sections, meta_title, meta_description, schema)
VALUES ('python-aiml', 'Python AI & ML', 'Artificial Intelligence & Machine Learning with Python', '', 'Master the future with Python, AI, and Machine Learning. Get hands-on experience with real-world projects, expert mentoring, and 100% placement support.', 'Technical', '45 Hours', 'Competitive', '/images/ERPVITS - All Modules Infographics/ERPVITS - SAP Python AI ML Infographic.webp', '["Most Popular AI Course"]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, 'Python AI & ML Training', 'Master Python AI & ML with our comprehensive training.', '')
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, category = EXCLUDED.category, hero_image = EXCLUDED.hero_image;

INSERT INTO public.courses (id, title, hero_heading, hero_subheading, description, category, duration, price, hero_image, badges, features, curriculum, faqs, sections, meta_title, meta_description, schema)
VALUES ('sap-abap', 'SAP ABAP', 'Master the Foundation of SAP Development', '', 'Master the Foundation of SAP Development with our comprehensive SAP ABAP training.', 'Technical', '40-50 Hours', 'Competitive', '/images/sap-abap-tips.png', '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, 'SAP ABAP Training', 'Master SAP ABAP with our comprehensive training.', '')
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, category = EXCLUDED.category, hero_image = EXCLUDED.hero_image;
