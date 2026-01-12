
INSERT INTO public.courses (id, title, hero_heading, hero_subheading, description, category, duration, price, hero_image, badges, features, curriculum, faqs, sections, meta_title, meta_description, schema)
VALUES ('sap-fico', 'SAP FICO', 'Master Financial Accounting & Controlling', '', 'Master SAP FICO with our comprehensive training. Learn General Ledger, AP, AR, Asset Accounting, and Controlling with hands-on labs and real-world projects.', 'Functional', '40-50 Hours', 'Competitive', '/images/ERPVITS - All Modules Infographics/ERPVITS - SAP FICO Infographic.webp', '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, '[]'::jsonb, 'SAP FICO Training', 'Master SAP FICO with our comprehensive training.', '')
ON CONFLICT (id) DO UPDATE SET 
title = EXCLUDED.title, 
description = EXCLUDED.description, 
category = EXCLUDED.category, 
hero_image = EXCLUDED.hero_image,
hero_heading = EXCLUDED.hero_heading;
