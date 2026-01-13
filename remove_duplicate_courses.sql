-- Remove duplicate course entries with long IDs
-- This script removes entries with prefixed IDs (sap-mm, sap-fico, etc.)
-- keeping only the short ID versions (mm, fico, etc.)

-- Remove sap-mm (keep mm)
DELETE FROM public.courses WHERE id = 'sap-mm';

-- Remove sap-sd (keep sd)
DELETE FROM public.courses WHERE id = 'sap-sd';

-- Remove sap-fico (keep fico)
DELETE FROM public.courses WHERE id = 'sap-fico';

-- Remove sap-ariba (keep ariba)
DELETE FROM public.courses WHERE id = 'sap-ariba';

-- Remove sap-fieldglass (keep fieldglass)
DELETE FROM public.courses WHERE id = 'sap-fieldglass';

-- Remove sap-trm (keep trm)
DELETE FROM public.courses WHERE id = 'sap-trm';

-- Remove sap-abap (keep abap)
DELETE FROM public.courses WHERE id = 'sap-abap';

-- Remove sap-analytics-cloud (keep analytics-cloud)
DELETE FROM public.courses WHERE id = 'sap-analytics-cloud';

-- Verify remaining courses
SELECT id, title, category FROM public.courses ORDER BY id;
