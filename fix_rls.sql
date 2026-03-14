-- ERPVITS Supabase RLS Fix Script
-- Run this in your Supabase SQL Editor if you see "row-level security policy" errors

-- 1. Ensure the contacts table has all necessary columns
ALTER TABLE public.contacts ADD COLUMN IF NOT EXISTS first_name TEXT;
ALTER TABLE public.contacts ADD COLUMN IF NOT EXISTS last_name TEXT;
ALTER TABLE public.contacts ADD COLUMN IF NOT EXISTS name TEXT;
ALTER TABLE public.contacts ADD COLUMN IF NOT EXISTS email TEXT;
ALTER TABLE public.contacts ADD COLUMN IF NOT EXISTS phone TEXT;
ALTER TABLE public.contacts ADD COLUMN IF NOT EXISTS course TEXT;
ALTER TABLE public.contacts ADD COLUMN IF NOT EXISTS message TEXT;

-- 2. Enable RLS (if not already enabled)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- 3. DROP old policies to avoid conflicts
DROP POLICY IF EXISTS "Enable insert for everyone" ON public.contacts;
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.contacts;
DROP POLICY IF EXISTS "Public insert" ON public.contacts;
DROP POLICY IF EXISTS "Enable insert for all users" ON public.contacts;
DROP POLICY IF EXISTS "Enable read for all users" ON public.contacts;

-- 4. Create NEW permissive policies
-- This allows anyone (anonymous or logged in) to submit the contact form
CREATE POLICY "Enable insert for all users" ON public.contacts
    FOR INSERT
    TO public
    WITH CHECK (true);

-- This allows the Supabase client to read back the inserted row if needed
-- (prevents errors when the client tries to return the inserted data)
CREATE POLICY "Enable read for all users" ON public.contacts
    FOR SELECT
    TO public
    USING (true);

-- 5. Grant permissions to anon and authenticated roles
GRANT ALL ON public.contacts TO anon;
GRANT ALL ON public.contacts TO authenticated;
GRANT ALL ON public.contacts TO service_role;
