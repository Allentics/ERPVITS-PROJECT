-- Update all courses to have exact price of 45,000 and duration of 50 Hours
UPDATE public.courses 
SET 
    price = '45,000',
    duration = '50 Hours'
WHERE price IS NULL OR price = '' OR price = 'Competitive' OR price = 'Contact for Pricing'
   OR duration IS NULL OR duration = '' OR duration = 'N/A';

-- Also update any courses that might have different durations to standardize to 50 Hours
UPDATE public.courses 
SET duration = '50 Hours'
WHERE duration != '50 Hours' OR duration IS NULL;

-- Update price for any courses that don't have the exact format
UPDATE public.courses 
SET price = '45,000'
WHERE price IS NULL OR price = '' OR price != '45,000';

-- Display all courses with their updated prices and durations
SELECT id, title, price, duration, category 
FROM public.courses 
ORDER BY category, title;
