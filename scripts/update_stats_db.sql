-- Update Home Hero Stats
UPDATE site_content 
SET content = content || '{"stats": [
    {"val": "15+ Years", "label": "In SAP Industry"},
    {"val": "8000+", "label": "Professionals Trained"},
    {"val": "24/7", "label": "Team support"},
    {"val": "8+", "label": "SAP Solution Architects"}
]}'::jsonb
WHERE page_path = '/' AND section_key = 'hero';

-- Update Why Choose Us Subtitle
UPDATE site_content
SET content = jsonb_set(
    content, 
    '{subtitle}', 
    '"Transform Your Career with Certified SAP Online Training – 8000+ Professionals Trained & Successfully Placed Globally"'::jsonb
)
WHERE page_path = '/' AND section_key = 'why_choose_us';

-- Update About Page Stats (if exists in DB)
UPDATE site_content
SET content = jsonb_set(
    content,
    '{stats,0,val}',
    '"8000+"'::jsonb
)
WHERE page_path = '/about' AND section_key = 'mission';
