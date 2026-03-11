-- Fix the localhost link in the SAP EWM Yard Management blog post
UPDATE public.blog_posts 
SET content = REPLACE(content, 'http://localhost:3000/courses/sap-ewm', '/courses/sap-ewm')
WHERE id = 'understanding-the-process-flow-of-sap-ewm-yard-management';
