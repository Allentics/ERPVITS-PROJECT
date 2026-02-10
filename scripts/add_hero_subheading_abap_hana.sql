-- Add hero_subheading to SAP ABAP on HANA Course
-- Run this in Supabase SQL Editor

UPDATE courses
SET
  hero_subheading = 'The SAP ABAP on HANA Online Training Program from ERPVITS represents a transformative learning pathway for professionals eager to excel in modern enterprise application development, cloud-native programming, and next-generation SAP technology. In today''s digital transformation landscape, organizations urgently need certified SAP ABAP on HANA developers who can build robust applications, optimize database performance, leverage in-memory computing, and drive innovation through intelligent enterprise software. This comprehensive SAP ABAP on HANA training course combines interactive, instructor-led sessions, hands-on coding labs, real-time development projects, performance optimization simulations, and end-to-end certification support—designed specifically for software developers, SAP technicians, database developers, systems architects, and ambitious graduates targeting global ABAP development and SAP technology roles.',
  updated_at = NOW()
WHERE id = 'sap-abap-on-hana';
