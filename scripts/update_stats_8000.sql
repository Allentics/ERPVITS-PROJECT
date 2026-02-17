-- Update stats to 8000+ Professionals Trained
UPDATE public.site_content
SET content = jsonb_set(
    content,
    '{stats,1,val}',
    '"8000+"'::jsonb
)
WHERE page_path = '/' AND section_key = 'hero';

UPDATE public.site_content
SET content = jsonb_set(
    jsonb_set(
        content,
        '{stats,0,val}',
        '"8000+"'::jsonb
    ),
    '{stats,0,label}',
    '"Professionals Trained"'::jsonb
)
WHERE page_path = '/about' AND section_key = 'mission';

UPDATE public.site_content
SET content = jsonb_set(
    content,
    '{subtitle}',
    '"Transform Your Career with Certified SAP Online Training – 8000+ Professionals Trained & Successfully Placed Globally"'::jsonb
)
WHERE page_path = '/' AND section_key = 'why_choose_us';
