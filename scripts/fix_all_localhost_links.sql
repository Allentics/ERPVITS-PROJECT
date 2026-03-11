-- Fix all localhost:3000 links in the blog_posts table
UPDATE public.blog_posts 
SET content = REPLACE(content, 'http://localhost:3000/courses/sap-ewm', '/courses/sap-ewm')
WHERE content LIKE '%http://localhost:3000/courses/sap-ewm%';

UPDATE public.blog_posts 
SET content = REPLACE(content, 'http://localhost:3000/courses/sap-mdg', '/courses/sap-mdg')
WHERE content LIKE '%http://localhost:3000/courses/sap-mdg%';

UPDATE public.blog_posts 
SET content = REPLACE(content, 'http://localhost:3000/courses/sap-fieldglass', '/courses/sap-fieldglass')
WHERE content LIKE '%http://localhost:3000/courses/sap-fieldglass%';

UPDATE public.blog_posts 
SET content = REPLACE(content, 'http://localhost:3000/courses/ariba', '/courses/ariba')
WHERE content LIKE '%http://localhost:3000/courses/ariba%';
