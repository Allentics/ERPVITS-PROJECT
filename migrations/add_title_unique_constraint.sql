-- Add unique constraint to title to support upsert operations
ALTER TABLE public.web_stories ADD CONSTRAINT web_stories_title_unique UNIQUE (title);
