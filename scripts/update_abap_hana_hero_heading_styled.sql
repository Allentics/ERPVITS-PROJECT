-- Update SAP ABAP on HANA Hero Heading with Orange Styling
-- This adds the orange color gradient to "#1 SAP ABAP on HANA Online Training Program"
-- Run this in Supabase SQL Editor

UPDATE courses
SET
  hero_heading = 'Master Modern ABAP Development with the <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] to-red-600 box-decoration-clone">#1 SAP ABAP on HANA Online Training Program</span>',
  updated_at = NOW()
WHERE id = 'sap-abap-on-hana';
