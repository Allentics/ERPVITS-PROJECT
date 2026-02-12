-- Update the 'detailed_testimonials' section for the SAP Ariba course with extended reviews and stats
-- This script safely updates only the 'detailed_testimonials' element within the 'sections' JSON array.

UPDATE courses
SET sections = (
    SELECT jsonb_agg(
        CASE
            WHEN elem->>'type' = 'detailed_testimonials' THEN
                '{
                    "type": "detailed_testimonials",
                    "title": "Hear from Our Successful SAP Ariba Learners – Real Reviews, Real Results",
                    "stats": {
                        "rating": "4.8/5",
                        "reviews": "320+ learner reviews",
                        "label": "Student Success Stories"
                    },
                    "items": [
                        {
                            "name": "Amit Kumar",
                            "role": "SAP Ariba Consultant at Accenture",
                            "quote": "Outstanding training and real project exposure. I landed a consulting role at Accenture within 8 weeks of completing the course. The hands-on approach and expert instructors made all the difference.",
                            "image": "/images/testimonials/amit.jpg"
                        },
                        {
                            "name": "Priya Sharma",
                            "role": "Procurement Manager",
                            "quote": "The weekend flexibility allowed me to learn while working. My employer was so impressed with my skills that they promoted me to Procurement Manager. This course accelerated my career by 3 years.",
                            "image": "/images/testimonials/priya.jpg"
                        },
                        {
                            "name": "Rajesh Patel",
                            "role": "Senior SAP Consultant",
                            "quote": "Best decision I made. The capstone projects were exactly like real client work. I walked into my first consulting role feeling confident, not intimidated. The certification support was exceptional.",
                            "image": "/images/testimonials/rajesh.jpg"
                        },
                        {
                            "name": "Ananya Singh",
                            "role": "Certified SAP Ariba Professional",
                            "quote": "Superb certification preparation. I passed all three SAP Ariba exams on my first attempt. The mock exams and study materials were spot-on. Highly recommended!",
                            "image": "/images/testimonials/ananya.jpg"
                        },
                        {
                            "name": "Vikram Desai",
                            "role": "Integration Consultant at Deloitte",
                            "quote": "The instructor''s real-world insights were invaluable. I didn''t just learn SAP Ariba; I learned how to apply it in complex enterprise environments. The alumni network has already brought consulting opportunities my way.",
                            "image": "/images/testimonials/vikram.jpg"
                        },
                        {
                            "name": "Sneha Reddy",
                            "role": "Procurement Analyst at Infosys",
                            "quote": "From zero SAP knowledge to landing my dream job in 4 months! The instructors are patient, knowledgeable, and truly care about learner success. The lifetime recording access is a huge bonus.",
                            "image": "/images/testimonials/sneha.jpg"
                        }
                    ]
                }'::jsonb
            ELSE elem
        END
    )
    FROM jsonb_array_elements(sections) AS elem
)
WHERE id = 'ariba' OR id = 'sap-ariba';
