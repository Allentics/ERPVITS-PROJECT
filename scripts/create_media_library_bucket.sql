-- ============================================================
-- ERPVITS Media Library – Supabase Storage Setup
-- Run this once in your Supabase SQL editor
-- ============================================================

-- 1. Create the public storage bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'media-library',
  'media-library',
  true,                          -- publicly readable
  5242880,                       -- 5 MB max per file
  ARRAY[
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/svg+xml'
  ]
)
ON CONFLICT (id) DO NOTHING;


-- 2. Allow anyone to READ (download / view) files
CREATE POLICY "Public read access"
  ON storage.objects FOR SELECT
  USING ( bucket_id = 'media-library' );


-- 3. Allow authenticated users (admins) to INSERT files
CREATE POLICY "Authenticated users can upload"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK ( bucket_id = 'media-library' );


-- 4. Allow authenticated users to DELETE files
CREATE POLICY "Authenticated users can delete"
  ON storage.objects FOR DELETE
  TO authenticated
  USING ( bucket_id = 'media-library' );


-- 5. Allow authenticated users to UPDATE (overwrite) files
CREATE POLICY "Authenticated users can update"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING ( bucket_id = 'media-library' );
