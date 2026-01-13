-- SAFE Insert for SAP Ariba
-- This will create the course if it doesn't exist.
-- If it DOES exist, it will ONLY ensure it is in the "Functional" category and has a price.
-- It will NOT overwrite your title, description, or images if they are already there.

INSERT INTO public.courses (
    id, 
    title, 
    category, 
    duration, 
    price, 
    hero_heading,
    hero_image,
    description,
    meta_title,
    meta_description
) VALUES (
    'ariba',
    'SAP Ariba',
    'Functional',
    '50 Hours',
    '45,000',
    'Transform Your Procurement with SAP Ariba',
    '/images/ERPVITS - All Modules Infographics/ERPVITS - SAP Ariba Infographic.webp',
    'Master SAP Ariba procurement and sourcing with comprehensive training covering all modules.',
    'SAP Ariba Training | Online Certification Course',
    'Learn SAP Ariba from experts. Comprehensive module covering Sourcing, Contracts, SLP, Buying & Invoicing. 100% Practical Training with Placement Assistance.'
)
ON CONFLICT (id) DO UPDATE SET
    -- ONLY update these fields to ensure it appears in the menu and has a price
    category = 'Functional',
    price = CASE WHEN courses.price IS NULL OR courses.price = '' OR courses.price ILIKE '%Competitive%' THEN '45,000' ELSE courses.price END,
    duration = CASE WHEN courses.duration IS NULL OR courses.duration = '' THEN '50 Hours' ELSE courses.duration END;

-- Verify
SELECT * FROM courses WHERE id = 'ariba';
