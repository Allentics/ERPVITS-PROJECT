INSERT INTO courses (
    id,
    title,
    category,
    hero_heading,
    hero_subheading,
    description,
    meta_title,
    meta_description,
    features,
    sections,
    updated_at
) VALUES (
    'ppds',
    'SAP PPDS',
    'Functional',
    'Transform Your Career with the #1 SAP PPDS Online Training Program',
    'Master Production Planning and Detailed Scheduling with expert-led training.',
    'The SAP PPDS (Production Planning and Detailed Scheduling) Online Training Program from ERPVITS represents a transformative learning pathway for production planning professionals and SAP consultants. Gain expertise in optimizing production schedules, reducing lead times, and driving operational excellence with our comprehensive, job-oriented curriculum.',
    'SAP PPDS Training Online | Production Planning Course',
    'Master advanced production planning with SAP PPDS training. Learn scheduling, optimization, hands-on labs, real projects & certification support. Enroll Now',
    ARRAY[
        'Trusted by 420+ successful SAP PPDS professionals',
        'Alumni at Accenture, Capgemini, Deloitte, Infosys, Wipro',
        'Personalized pre-evaluation and production planning learning path',
        'Active alumni network and community forum',
        '40+ guided lab exercises',
        'Quarterly updated materials',
        'Mock interviews simulating real PPDS scenarios',
        'Dedicated certification prep'
    ]::text[],
    '[]'::jsonb,
    NOW()
)
ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    category = EXCLUDED.category,
    hero_heading = EXCLUDED.hero_heading,
    hero_subheading = EXCLUDED.hero_subheading,
    description = EXCLUDED.description,
    meta_title = EXCLUDED.meta_title,
    meta_description = EXCLUDED.meta_description,
    features = EXCLUDED.features,
    updated_at = NOW();
