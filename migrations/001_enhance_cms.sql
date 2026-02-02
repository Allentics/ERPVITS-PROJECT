-- Add meta columns to blog_posts
ALTER TABLE public.blog_posts ADD COLUMN IF NOT EXISTS meta_title text;
ALTER TABLE public.blog_posts ADD COLUMN IF NOT EXISTS meta_description text;
ALTER TABLE public.blog_posts ADD COLUMN IF NOT EXISTS schema_markup text;

-- Create pages table for static page metadata
CREATE TABLE IF NOT EXISTS public.pages (
    path text PRIMARY KEY,
    name text,
    meta_title text,
    meta_description text,
    schema_markup text,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;

-- Policies for pages
CREATE POLICY "Public read access for pages" ON public.pages FOR SELECT TO anon USING (true);
CREATE POLICY "Admin full access for pages" ON public.pages FOR ALL TO authenticated USING (true);

-- Insert default pages (Upsert)
INSERT INTO public.pages (path, name) VALUES 
('/', 'Home Page'), 
('/about', 'About Us'), 
('/contact', 'Contact Us'),
('/corporate-training', 'Corporate Training'),
('/courses', 'All Courses')
ON CONFLICT (path) DO NOTHING;
