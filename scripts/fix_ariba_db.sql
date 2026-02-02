
-- Delete the duplicate 'sap-ariba' course
DELETE FROM courses WHERE id = 'sap-ariba';

-- Ensure the 'ariba' course has the correct title and category if needed
-- (The content update is handled by the massive update query, but we can verify here)
UPDATE courses SET title = 'SAP Ariba', category = 'Functional' WHERE id = 'ariba';
