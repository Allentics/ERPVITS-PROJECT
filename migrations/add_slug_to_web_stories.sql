-- Migration to add slug column to web_stories
ALTER TABLE public.web_stories ADD COLUMN IF NOT EXISTS slug text;

-- Generate initial slugs from titles for existing records (if any)
UPDATE public.web_stories 
SET slug = lower(regexp_replace(title, '[^a-zA-Z0-9]+', '-', 'g'))
WHERE slug IS NULL OR slug = '';

-- Make slug NOT NULL and UNIQUE after backfilling
-- WARNING: Only do this if you are sure all existing records have unique titles
-- ALTER TABLE public.web_stories ALTER COLUMN slug SET NOT NULL;
-- ALTER TABLE public.web_stories ADD CONSTRAINT web_stories_slug_unique UNIQUE (slug);
