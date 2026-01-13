-- Insert SAP Ariba course into the database
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
    title = EXCLUDED.title,
    category = EXCLUDED.category,
    duration = EXCLUDED.duration,
    price = EXCLUDED.price,
    hero_heading = EXCLUDED.hero_heading,
    hero_image = EXCLUDED.hero_image,
    description = EXCLUDED.description,
    meta_title = EXCLUDED.meta_title,
    meta_description = EXCLUDED.meta_description;

-- Verify the insert
SELECT id, title, category, price, duration FROM courses WHERE id = 'ariba';
