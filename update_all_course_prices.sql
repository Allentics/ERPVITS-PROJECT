-- ========================================
-- SAFE Update for Course Prices and Durations
-- ========================================

-- 1. Fix Prices: Only update if price is missing, "Competitive", or "Contact for Pricing"
UPDATE courses 
SET price = '45,000'
WHERE 
    price IS NULL 
    OR price = '' 
    OR price ILIKE '%Competitive%' 
    OR price ILIKE '%Contact%';

-- 2. Fix Durations: Only update if duration is missing, "N/A", or variable like "40-50 Hours"
UPDATE courses 
SET duration = '50 Hours'
WHERE 
    duration IS NULL 
    OR duration = '' 
    OR duration ILIKE '%N/A%'
    OR duration ILIKE '%40-50%'
    OR duration ILIKE '%45 Hours%';

-- 3. Verify the results
SELECT id, title, price, duration, category 
FROM courses 
ORDER BY title;
