-- Add theme columns to courses table if they don't exist
-- Run this first to add the columns
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'courses' AND column_name = 'hero_layout') THEN
        ALTER TABLE courses ADD COLUMN hero_layout TEXT DEFAULT 'default';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'courses' AND column_name = 'theme_color') THEN
        ALTER TABLE courses ADD COLUMN theme_color TEXT DEFAULT 'default';
    END IF;
END $$;

-- Update SAP ABAP on HANA course with black/orange theme
UPDATE courses
SET
  hero_layout = 'centered',
  theme_color = 'black',
  duration = '60-70 Hours',
  hero_heading = 'Master Modern ABAP Development with the #1 SAP ABAP on HANA Online Training Program',
  hero_subheading = 'The SAP ABAP on HANA Online Training Program from ERPVITS represents a transformative learning pathway for professionals eager to excel in modern enterprise application development, cloud-native programming, and next-generation SAP technology. In today''s digital transformation landscape, organizations urgently need certified SAP ABAP on HANA developers who can build robust applications, optimize database performance, leverage in-memory computing, and drive innovation through intelligent enterprise software.',
  description = 'This comprehensive SAP ABAP on HANA training course combines interactive, instructor-led sessions, hands-on coding labs, real-time development projects, performance optimization simulations, and end-to-end certification support—designed specifically for software developers, SAP technicians, database developers, systems architects, and ambitious graduates targeting global ABAP development and SAP technology roles.',
  updated_at = NOW()
WHERE id = 'sap-abap-on-hana';
