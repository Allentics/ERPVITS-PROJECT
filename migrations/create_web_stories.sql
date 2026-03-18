-- Create Web Stories Table
CREATE TABLE IF NOT EXISTS public.web_stories (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    category text NOT NULL,
    author text DEFAULT 'ERPVITS',
    role text DEFAULT 'ERPVITS Expert',
    image text, -- Cover image
    views text DEFAULT '0',
    type text DEFAULT 'standard', -- 'featured' or 'standard'
    slides jsonb DEFAULT '[]'::jsonb,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.web_stories ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public read access for web_stories" ON public.web_stories FOR SELECT TO anon USING (true);
CREATE POLICY "Admin full access for web_stories" ON public.web_stories FOR ALL TO authenticated USING (true);

-- Updated at trigger
CREATE TRIGGER update_web_stories_updated_at BEFORE UPDATE ON public.web_stories FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
