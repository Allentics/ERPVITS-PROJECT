-- Run this in Supabase SQL Editor to clean blog posts
-- This will update all blog_posts to have clean, minimal placeholder content
-- You can then add proper content through the admin panel

-- First, let's see what we have
SELECT id, title, LENGTH(content) as content_length FROM blog_posts;

-- Update each blog post with clean placeholder content
-- You should replace this with actual clean content later

UPDATE blog_posts SET content = '<h2>Introduction</h2>
<p>This is a comprehensive guide about ' || title || '. Please check back soon for the full content.</p>
<h2>Key Topics Covered</h2>
<p>Our experts at ERPVITS are updating this article with the latest content. Stay tuned!</p>
<p><strong>Contact us:</strong> info@erpvits.com | +91 8408878222</p>'
WHERE id LIKE '%';

-- Verify the update
SELECT id, title, LEFT(content, 200) as content_preview FROM blog_posts;
