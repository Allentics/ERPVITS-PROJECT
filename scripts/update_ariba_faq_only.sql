-- Update the 'detailed_faq' section for the SAP Ariba course
-- This script safely updates only the 'detailed_faq' element within the 'sections' JSON array.

UPDATE courses
SET sections = (
    SELECT jsonb_agg(
        CASE
            WHEN elem->>'type' = 'detailed_faq' THEN
                '{
                    "type": "detailed_faq",
                    "title": "Frequently Asked Questions (FAQs) – SAP Ariba Training at ERPVITS",
                    "items": [
                        {
                            "question": "What is SAP Ariba and how does ERPVITS help me learn it?",
                            "answer": "SAP Ariba is an important Cloud based solution for your procurement, sourcing, and supplier collaboration. At ERPVITS we offer complete SAP Ariba Training with a focus on important business scenarios, practical sessions, and guided projects. Let us help you master Ariba Software tools and workflows."
                        },
                        {
                            "question": "What can I expect to learn in the SAP Ariba Sourcing module?",
                            "answer": "In the SAP Ariba Sourcing module training at ERPVITS, you learn to configure various Ariba sourcing applications to create sourcing events, administer RFQs, analyze supplier bid proposals, refine negotiation tactics, and facilitate execution through the Ariba sourcing platform."
                        },
                        {
                            "question": "What is SAP Ariba Supplier Network?",
                            "answer": "SAP Ariba Supplier Network connects buyers and suppliers across the world. At ERPVITS, you learn the supplier registration process, catalog management, and the steps within the Ariba Supplier Management system pertaining to transaction processes."
                        },
                        {
                            "question": "What are Ariba Services and Ariba Spend Management?",
                            "answer": "ERPVITS covers Ariba Services and Ariba Spend Management to help learners analyze company spend, automate procurement processes, and achieve cost control through intelligent spend analytics."
                        },
                        {
                            "question": "How does SAP Ariba support modern procurement?",
                            "answer": "SAP Procurement powered by Ariba Procurement simplifies sourcing, contract management, and supplier collaboration. ERPVITS provides practical exposure to SAP Ariba Procurement workflows to prepare you for real-world projects."
                        },
                        {
                            "question": "Why should I join SAP Ariba Training at ERPVITS?",
                            "answer": "ERPVITS offers SAP Ariba Online Training with live sessions, industry-aligned projects, and placement support. You''ll also receive guidance on SAP Ariba Certification, resume preparation, and interview success strategies."
                        },
                        {
                            "question": "Who can enroll in the SAP Ariba Course?",
                            "answer": "Anyone interested in procurement, supply chain, or SAP technologies can join. Whether you''re a fresher, working professional, or consultant—ERPVITS SAP Ariba Course is designed to help you build job-ready skills."
                        },
                        {
                            "question": "What is the SAP Ariba Certification and why is it valuable?",
                            "answer": "SAP Ariba Certification validates your expertise in procurement and supplier management. ERPVITS prepares you for the official certification exam and helps you become a certified SAP Ariba Consultant or Ariba Specialist."
                        },
                        {
                            "question": "What are ERPVITS''s SAP Ariba course fees?",
                            "answer": "ERPVITS offers SAP Ariba courses at reasonable fees. The SAP Ariba Course Fees depend on the course module and the preferred training mode. Pricing at ERPVITS covers all the essentials: hands-on training, learning materials, placement guidance, and assistance with certification."
                        },
                        {
                            "question": "What is the cost for SAP Ariba Certification?",
                            "answer": "The SAP Ariba Certification Cost is set by SAP Education. At ERPVITS, we provide comprehensive guidance for the exam, along with practice tests and mentoring aimed at helping you to obtain the certification on the first attempt."
                        },
                        {
                            "question": "How to become an SAP Ariba Consultant through ERPVITS?",
                            "answer": "ERPVITS provides comprehensive SAP Ariba Training with live project assignments which you are expected to complete and certification preparation. Career counseling and job assistance are also offered at ERPVITS to successfully become an SAP Ariba Consultant."
                        },
                        {
                            "question": "What are the different career opportunities available after completing the Ariba course?",
                            "answer": "After completing SAP Ariba Training at ERPVITS, you become qualified for positions such as Ariba Consultant, Procurement Analyst, Supplier Management Specialist, and SAP Functional Consultant. For the learners, we also provide job opportunities as Ariba Consultants and placement offers exploring various Ariba Careers."
                        },
                        {
                            "question": "How does SAP Ariba integrate with SAP S/4HANA?",
                            "answer": "ERPVITS explains the SAP Ariba integration with S4 HANA in intricate details. Sessions include data flow between Ariba and core SAP systems utilizing the Cloud Integration Gateway (CIG) along with API-driven connections."
                        },
                        {
                            "question": "What are the main SAP Ariba Solutions covered in the course?",
                            "answer": "We include all primary SAP Ariba Solutions in our course, which are SAP Ariba Sourcing, Buying & Invoicing, Contract Management, SAP Ariba Supplier Management, and Joined with practical implementation of use cases."
                        },
                        {
                            "question": "What is SAP Ariba Pricing and how does it work for companies?",
                            "answer": "SAP Ariba Pricing is determined by the scale of the business and usage. In Ariba Software training, ERPVITS discusses the functional aspects of pricing frameworks, licenses, and the costs related to implementation."
                        },
                        {
                            "question": "Does ERPVITS provide SAP Ariba Training with Placement support?",
                            "answer": "Absolutely! ERPVITS provides SAP Ariba Training with Placement assistance. We aid in creating a strong resume, interview preparation, and offer connections with recruiters looking to fill positions related to SAP Ariba Consultant jobs."
                        },
                        {
                            "question": "Can I take SAP Ariba Online Training from anywhere?",
                            "answer": "Absolutely. ERPVITS offers SAP Ariba Online Training obtainable from any place. Engage with live trainers, access recorded sessions, and engage in practical sessions on the Ariba Software system remotely with our Ariba Online Training program."
                        },
                        {
                            "question": "Do you have SAP Ariba Training near me?",
                            "answer": "ERPVITS offers SAP Ariba Online Training for learners across India. We provide SAP Ariba Training in Hyderabad, SAP Ariba Training in Pune, and SAP Ariba Training in Bangalore through live online sessions led by industry experts. Flexible weekend and weekday batches are available for working professionals looking for SAP Ariba Training near me."
                        },
                        {
                            "question": "How does ERPVITS help in Ariba Careers?",
                            "answer": "At ERPVITS, we do provide technical training, but we also assist your SAP Ariba Career with resume preparation, interview coaching, and job placements in top SAP consulting firms for promising Ariba Careers."
                        }
                    ]
                }'::jsonb
            ELSE elem
        END
    )
    FROM jsonb_array_elements(sections) AS elem
)
WHERE id = 'ariba' OR id = 'sap-ariba';
