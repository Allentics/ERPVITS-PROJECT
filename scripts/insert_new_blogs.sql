-- SQL to insert new blog posts into the blog_posts table
INSERT INTO blog_posts (id, title, description, image, date, category, author, content)
VALUES 
('sap-mm-course-complete-guide', 'SAP MM Course: Complete Guide to Materials Management Professional Excellence', 'Join the best SAP MM course at ERPVITS. Get certified with expert-led training in Materials Management, S/4HANA, and procurement. Enroll now!', '/images/sap-mm-course.png', '2026-01-07', 'SAP MM', 'ERPVITS Expert', 'CONTENT_MANAGED_LOCALLY'),
('how-sap-ariba-is-powering-intelligent-spend-management', 'Revolutionizing Procurement: How SAP Ariba is Powering Intelligent Spend Management in 2025', 'Discover how SAP Ariba is transforming procurement with intelligent spend management in 2025. Boost your career with SAP Ariba training & certification.', '/images/blog/sap-ariba-spend-management.webp', '2026-01-06', 'SAP Ariba', 'ERPVITS Expert', 'CONTENT_MANAGED_LOCALLY'),
('top-ten-tools-techniques-for-efficient-abap-on-cloud-programming', 'Mastering ABAP on Cloud: Essential Tools and Techniques Every Developer Should Know', 'Master SAP ABAP on Cloud with modern tools and methods. Build faster, smarter apps through SAP ABAP online training and real-time projects.', '/images/blog/top-10-tools-abap-cloud.webp', '2026-01-05', 'SAP Technical', 'ERPVITS Expert', 'CONTENT_MANAGED_LOCALLY'),
('how-sap-fieldglass-transforming-global-contingent-workforce-market', 'How SAP Fieldglass is Transforming the Global Contingent Workforce Market', 'Learn SAP Fieldglass online and master global contingent workforce management. Boost your SAP career with ERPVITS training and real-time projects.', '/images/blog/sap-fieldglass-transformation.webp', '2026-01-04', 'SAP Fieldglass', 'ERPVITS Expert', 'CONTENT_MANAGED_LOCALLY'),
('sap-trm-setup-essentials', 'Laying the Foundation: Essential SAP TRM Master Data for Treasury Success', 'Laying the Foundation with Essential SAP TRM Master Data Ensures Accurate, Compliant Treasury Operations. Explore Best Practices with ERPVITS.', '/images/blog/sap-trm-master-data.webp', '2026-01-03', 'SAP TRM', 'ERPVITS Expert', 'CONTENT_MANAGED_LOCALLY'),
('mto-and-sto-process-in-sap', 'MTO & STO Process in SAP: Enhance Supply Chain Performance Through Integrated MM And SD Modules', 'Discover the difference between the MTO and STO processes in SAP and how SAP MM & SD integration boosts supply chain efficiency with ERPVITS expert training.', '/images/blog/mto-sto-process.webp', '2026-01-02', 'SAP Functional', 'ERPVITS Expert', 'CONTENT_MANAGED_LOCALLY'),
('master-sap-ariba-with-industry-leading-online-training', 'Master SAP Ariba with Industry-Leading Online Training', 'Enhance your career with SAP Ariba training, focusing on procurement skills, hands-on projects, and job support for professionals.', '/images/blog/master-sap-ariba.webp', '2026-01-01', 'SAP Ariba', 'ERPVITS Expert', 'CONTENT_MANAGED_LOCALLY'),
('sap-trm-complementary-technologies', 'SAP TRM Complementary Technologies for Modern Treasury and Risk Management', 'Explore how SAP TRM integrates with analytics, automation, and compliance tools to enable real-time insights, risk control, and digital treasury transformation.', '/images/blog/sap-trm-complementary.png', '2025-12-18', 'SAP TRM', 'ERPVITS Expert', 'CONTENT_MANAGED_LOCALLY')
ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    image = EXCLUDED.image,
    date = EXCLUDED.date,
    category = EXCLUDED.category,
    author = EXCLUDED.author,
    content = EXCLUDED.content;
