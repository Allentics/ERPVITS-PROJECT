-- Create tables for ERPVITS Content Management

-- 1. Courses Table
CREATE TABLE IF NOT EXISTS public.courses (
    id text PRIMARY KEY,
    title text NOT NULL,
    hero_heading text,
    hero_subheading text,
    description text,
    category text DEFAULT 'Functional',
    duration text,
    price text,
    hero_image text,
    badges jsonb DEFAULT '[]'::jsonb,
    features jsonb DEFAULT '[]'::jsonb,
    curriculum jsonb DEFAULT '[]'::jsonb,
    faqs jsonb DEFAULT '[]'::jsonb,
    sections jsonb DEFAULT '[]'::jsonb,
    meta_title text,
    meta_description text,
    schema text,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Blog Posts Table
CREATE TABLE IF NOT EXISTS public.blog_posts (
    id text PRIMARY KEY,
    title text NOT NULL,
    description text,
    content text,
    image text,
    date text,
    category text,
    author text DEFAULT 'ERPVITS Expert',
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Enable RLS
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- 4. Policies
-- Public read access
CREATE POLICY "Public read access for courses" ON public.courses FOR SELECT TO anon USING (true);
CREATE POLICY "Public read access for blog_posts" ON public.blog_posts FOR SELECT TO anon USING (true);

-- Admin full access (assuming authenticated users are admins for simplicity initially)
CREATE POLICY "Admin full access for courses" ON public.courses FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access for blog_posts" ON public.blog_posts FOR ALL TO authenticated USING (true);

-- 5. Updated at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated at trigger
CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON public.courses FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON public.blog_posts FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
