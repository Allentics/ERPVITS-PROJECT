-- ========================================
-- Update All Course Prices and Durations
-- ========================================
-- This script updates all courses to have:
-- Price: 45,000
-- Duration: 50 Hours
-- ========================================

-- First, let's see the current state
SELECT 
    id, 
    title, 
    price, 
    duration, 
    category 
FROM courses 
ORDER BY title;

-- Update all courses to have price = 45,000 and duration = 50 Hours
UPDATE courses 
SET 
    price = '45,000',
    duration = '50 Hours'
WHERE id IS NOT NULL;

-- Verify the updates
SELECT 
    id, 
    title, 
    price, 
    duration, 
    category 
FROM courses 
ORDER BY title;

-- Count how many courses were updated
SELECT 
    COUNT(*) as total_courses,
    COUNT(CASE WHEN price = '45,000' THEN 1 END) as courses_with_correct_price,
    COUNT(CASE WHEN duration = '50 Hours' THEN 1 END) as courses_with_correct_duration
FROM courses;
