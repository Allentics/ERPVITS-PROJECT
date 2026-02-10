import json
import os

file_path = r"c:\Users\Allenticspun2107\Desktop\ERPVITES-PROJECT-main\courses.json"

# The new C4C Technical object
new_c4c_obj = {
    "id": "c4c-technical",
    "syllabusUrl": "/syllabus/ERPVITS Syllabus - Course Contents Pdf/SAP Technical/sap-c4c-technical.pdf",
    "title": "SAP C4C Technical",
    "category": "Technical",
    "duration": "35+ Hours",
    "price": "45,000",
    "demoVideo": "https://www.youtube.com/embed/EtlUBjNMsbM",
    "heroHeading": "End-to-End <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600\">SAP C4C Technical Training</span> with Real-Time Implementation",
    "heroSubheading": "Master SAP Cloud for Customer (C4C) technical development with our expert-led training. Gain hands-on experience in ABSL, BODL, UI Designer, and integration scenarios. Become a certified SAP C4C developer and accelerate your career in the cloud ecosystem.",
    "heroImage": None,
    "description": "For a cloud developer and SAP consultant working in customer relationship management, cloud application development, and enterprise software, the ERPVITS SAP C4C Technical Training Program is a transformative learning experience. Every organization is in great need of certified SAP C4C technical experts who can build cloud applications and customize customer solutions, integrate business objects, and lead digital transformation. This extensive SAP C4C Technical online training is designed for developers, technical consultants, cloud architects, ERP professionals, and aspiring graduates who are looking for global consulting and implementation positions and features instructor-led training, hands-on lab work, cloud development projects from the actual world, and complete certification support.",
    "features": [
      "Trusted by 450+ successful SAP C4C developers.",
      "Alumni at Accenture, Capgemini, Deloitte, Infosys and Wipro",
      "Tailored pre-evaluation and cloud development learning path.",
      "Active alumni network and cloud developer community forum.",
      "Over 40 guided lab exercises from intro to advanced cloud development scenarios.",
      "Materials revised every quarter to align with the latest C4C releases.",
      "Mock interviews simulating C4C developer real world scenarios.",
      "Focused bootcamp sessions for cert preparation and advanced training."
    ],
    "curriculum": [
      {
        "title": "Module 1: SAP C4C Foundation & Architecture (4 Hours)",
        "topics": [
          "What You'll Learn:",
          "SAP C4C platform overview and benefits",
          "Cloud architecture and deployment models",
          "System environment and IDE setup",
          "Development tools and configuration environment",
          "Integration landscape and cloud connectivity",
          "Security and authentication frameworks",
          "Hands-On Activities:",
          "Set up development environment",
          "Navigate SAP C4C interface",
          "Configure system connections",
          "Explore cloud architecture components"
        ]
      },
      {
        "title": "Module 2: BODL & ABSL Development (8 Hours)",
        "topics": [
          "What You'll Learn:",
          "Business Object Definition Language (BODL) fundamentals",
          "Object hierarchy and relationships",
          "ABSL (ABAP Simple Logic) introduction and syntax",
          "Actions, events, and event handlers",
          "Custom logic and business rule implementation",
          "Data validation and error handling",
          "Hands-On Activities:",
          "Create custom business objects",
          "Write ABSL code for business logic",
          "Implement actions and events",
          "Debug and test business logic"
        ]
      },
      {
        "title": "Module 3: UI Designer & Application Development (6 Hours)",
        "topics": [
          "What You'll Learn:",
          "UI Designer navigation and components",
          "Form, table, and chart development",
          "Layout design and responsive UI",
          "Data binding and field configuration",
          "Event handling and user interactions",
          "Embedded components and component reuse",
          "Hands-On Activities:",
          "Design custom UI forms",
          "Configure tables and dashboards",
          "Implement data binding",
          "Test UI applications"
        ]
      },
      {
        "title": "Module 4: Business Configuration (5 Hours)",
        "topics": [
          "What You'll Learn:",
          "Business Configuration basics and architecture",
          "Configuration views (BC Views) setup",
          "Customization vs. Configuration",
          "Configuration data management",
          "Business rules and validation",
          "Change logs and audit trails",
          "Hands-On Activities:",
          "Create business configurations",
          "Set up BC Views for business users",
          "Configure business rules",
          "Manage configuration data"
        ]
      },
      {
        "title": "Module 5: Service Integration & Web Services (5 Hours)",
        "topics": [
          "What You'll Learn:",
          "Web service fundamentals and protocols",
          "XML and SOAP/REST integration",
          "External system connectivity",
          "Service provider and service consumer creation",
          "Asynchronous messaging patterns",
          "Error handling and retries",
          "Hands-On Activities:",
          "Create web services",
          "Integrate external systems",
          "Configure service endpoints",
          "Test service integration"
        ]
      },
      {
        "title": "Module 6: Business Object Extension (4 Hours)",
        "topics": [
          "What You'll Learn:",
          "Extensibility framework overview",
          "Extending standard business objects",
          "Adding custom fields and logic",
          "Embedded components and extensions",
          "Compatibility and versioning",
          "Best practices for extensions",
          "Hands-On Activities:",
          "Extend existing business objects",
          "Add custom fields",
          "Implement embedded components",
          "Test extensions"
        ]
      },
      {
        "title": "Module 7: Analytics & Reporting (4 Hours)",
        "topics": [
          "What You'll Learn:",
          "Data source creation for analytics",
          "Report design and configuration",
          "OLAP and analytical queries",
          "Cube design and hierarchies",
          "Performance optimization",
          "Visualization and dashboards",
          "Hands-On Activities:",
          "Making data sources",
          "Designing analytical reports",
          "Building dashboard visualizations",
          "Configuring report parameters"
        ]
      },
      {
        "title": "Module 8: Notifications & Approvals (3 Hours)",
        "topics": [
          "What You'll Learn:",
          "Notifications approval workflows and conditions",
          "Escalation and routing rules",
          "Notifications to be customized",
          "Multilingual support",
          "Monitoring and logging",
          "Hands-On Activities:",
          "Configuring notifications",
          "Approval process setups",
          "Routing rule implementations",
          "Workflow notifications testing"
        ]
      },
      {
        "title": "Module 9: Advanced Topics & Lifecycle Management (5 Hours)",
        "topics": [
          "What You'll Learn:",
          "Mashups integration and development",
          "Extending mobile applications",
          "Versioning & lifecycle management",
          "Testing strategies and tools",
          "Performance tuning",
          "Troubleshooting and debugging",
          "Hands-On Activities:",
          "Mashup development",
          "Performance optimization",
          "Issue troubleshooting"
        ]
      }
    ],
    "sections": [
      {
        "type": "detailed_features",
        "badge": "Why Choose Us",
        "title": "Learn SAP C4C Technical from Certified Experts – **100% Hands-On**, Job-Oriented Training",
        "subtitle": "Expert-led learning with real-world experience and proven methodologies from actual enterprise implementations",
        "items": [
          {
            "title": "Certified Expert Trainers",
            "description": "Each certified SAP C4C trainer has executed and managed multiple enterprise-scale SAP C4C implementations and cloud development projects. They share with you the theory, and real-world industry cloud deployment best and worst practices."
          },
          {
            "title": "100% Hands-On Learning Methodology",
            "description": "Every session incorporates live presentations on the SAP C4C systems and subsequent guided lab exercises. By the time the course is completed, you will have built custom applications, developed UI components, and integrated web services."
          },
          {
            "title": "Job-Oriented Curriculum Design",
            "description": "The course curriculum is designed with the appropriate skills, responsibilities, and real-life situational problem solving that you will encounter in the field as an SAP C4C developer."
          },
          {
            "title": "Interactive Q&A Sessions",
            "description": "In addition to the traditional classroom lectures, you have specific times for questions and answers, as well as live office hours, where the instructors will resolve your questions and explain complicated development issues."
          },
          {
            "title": "Flexible Batch Timings",
            "description": "We understand the developer's perspective and provide flexibility by offering weekday evening batches (6 PM – 9 PM IST) and weekend batches (Saturday & Sunday). Sessions are recorded for asynchronous catch-up."
          },
          {
            "title": "Fewer Students For Personalized Attention",
            "description": "We cap our classes at 8 to 10 people so that your instructor can focus on you. This helps them understand what your strengths are, what your difficulties are, and where they need to focus their attention."
          }
        ]
      },
      {
        "type": "content_with_image",
        "title": "Success Guarantee & Credibility",
        "subtitle": "Why Professionals Choose ERPVITS for **SAP C4C Technical** Online Training",
        "description": "ERPVITS is known as a training partner for SAP Cloud technologies because thousands of learners started working with leading consulting firms like Accenture, Capgemini, Deloitte, Infosys, and Wipro. The testimonies from our alumni network show what value our instruction brought them and what leap forward it gave them in their careers.",
        "videoSrc": "https://www.youtube.com/embed/EtlUBjNMsbM",
        "layout": "left",
        "items": [
          "Trusted by 450+ successful SAP C4C developers.",
          "Alumni at Accenture, Capgemini, Deloitte, Infosys and Wipro",
          "Tailored pre-evaluation and cloud development learning path.",
          "Active alumni network and cloud developer community forum.",
          "Over 40 guided lab exercises from intro to advanced cloud development scenarios.",
          "Materials revised every quarter to align with the latest C4C releases.",
          "Mock interviews simulating C4C developer real world scenarios.",
          "Focused bootcamp sessions for cert preparation and advanced training."
        ]
      },
      {
        "type": "whats_included",
        "items": [
          {
            "title": "Live Interactive Classes",
            "description": "For 8-10 weeks, engage in 30-35 hours of live video-conferenced highly interactive development classes with the opportunity for real-time Q&A."
          },
          {
            "title": "Real-World Projects",
            "description": "Work on case studies inspired by Fortune 500 companies that include custom application development, business object extension, UI design, service integration, and the implementation of analytics."
          },
          {
            "title": "Hands-On Lab Environment",
            "description": "You will have full-time access to SAP C4C development environments to practice ABSL development, configure UI designer, integrate services, and test and run applications."
          },
          {
            "title": "Certification Exam Prep",
            "description": "Prepare for the SAP Certified Development Associate—SAP C4C (Customer Cloud) with study guides, practice exams, and bootcamp review sessions."
          },
          {
            "title": "Resume & Interview Coaching",
            "description": "Personalized resume transformations, mock technical interviews, and SAP C4C developer interview preparation."
          },
          {
            "title": "Complete Study Materials",
            "description": "You will get PDFs, presentations, code samples, configuration docs, interview question banks, and links to SAP documentation."
          }
        ]
      },
      {
        "type": "detailed_curriculum",
        "title": "SAP C4C Technical Course Curriculum",
        "subtitle": "Comprehensive coverage of SAP Cloud for Customer technical development",
         "modules": [
          {
            "title": "Module 1: SAP C4C Foundation & Architecture (4 Hours)",
            "topics": [
              "What You'll Learn:",
              "SAP C4C platform overview and benefits",
              "Cloud architecture and deployment models",
              "System environment and IDE setup",
              "Development tools and configuration environment",
              "Integration landscape and cloud connectivity",
              "Security and authentication frameworks",
              "Hands-On Activities:",
              "Set up development environment",
              "Navigate SAP C4C interface",
              "Configure system connections",
              "Explore cloud architecture components"
            ]
          },
          {
            "title": "Module 2: BODL & ABSL Development (8 Hours)",
            "topics": [
              "What You'll Learn:",
              "Business Object Definition Language (BODL) fundamentals",
              "Object hierarchy and relationships",
              "ABSL (ABAP Simple Logic) introduction and syntax",
              "Actions, events, and event handlers",
              "Custom logic and business rule implementation",
              "Data validation and error handling",
              "Hands-On Activities:",
              "Create custom business objects",
              "Write ABSL code for business logic",
              "Implement actions and events",
              "Debug and test business logic"
            ]
          },
          {
            "title": "Module 3: UI Designer & Application Development (6 Hours)",
            "topics": [
              "What You'll Learn:",
              "UI Designer navigation and components",
              "Form, table, and chart development",
              "Layout design and responsive UI",
              "Data binding and field configuration",
              "Event handling and user interactions",
              "Embedded components and component reuse",
              "Hands-On Activities:",
              "Design custom UI forms",
              "Configure tables and dashboards",
              "Implement data binding",
              "Test UI applications"
            ]
          },
          {
            "title": "Module 4: Business Configuration (5 Hours)",
            "topics": [
              "What You'll Learn:",
              "Business Configuration basics and architecture",
              "Configuration views (BC Views) setup",
              "Customization vs. Configuration",
              "Configuration data management",
              "Business rules and validation",
              "Change logs and audit trails",
              "Hands-On Activities:",
              "Create business configurations",
              "Set up BC Views for business users",
              "Configure business rules",
              "Manage configuration data"
            ]
          },
          {
            "title": "Module 5: Service Integration & Web Services (5 Hours)",
            "topics": [
              "What You'll Learn:",
              "Web service fundamentals and protocols",
              "XML and SOAP/REST integration",
              "External system connectivity",
              "Service provider and service consumer creation",
              "Asynchronous messaging patterns",
              "Error handling and retries",
              "Hands-On Activities:",
              "Create web services",
              "Integrate external systems",
              "Configure service endpoints",
              "Test service integration"
            ]
          },
          {
            "title": "Module 6: Business Object Extension (4 Hours)",
            "topics": [
              "What You'll Learn:",
              "Extensibility framework overview",
              "Extending standard business objects",
              "Adding custom fields and logic",
              "Embedded components and extensions",
              "Compatibility and versioning",
              "Best practices for extensions",
              "Hands-On Activities:",
              "Extend existing business objects",
              "Add custom fields",
              "Implement embedded components",
              "Test extensions"
            ]
          },
          {
            "title": "Module 7: Analytics & Reporting (4 Hours)",
            "topics": [
              "What You'll Learn:",
              "Data source creation for analytics",
              "Report design and configuration",
              "OLAP and analytical queries",
              "Cube design and hierarchies",
              "Performance optimization",
              "Visualization and dashboards",
              "Hands-On Activities:",
              "Making data sources",
              "Designing analytical reports",
              "Building dashboard visualizations",
              "Configuring report parameters"
            ]
          },
          {
            "title": "Module 8: Notifications & Approvals (3 Hours)",
            "topics": [
              "What You'll Learn:",
              "Notifications approval workflows and conditions",
              "Escalation and routing rules",
              "Notifications to be customized",
              "Multilingual support",
              "Monitoring and logging",
              "Hands-On Activities:",
              "Configuring notifications",
              "Approval process setups",
              "Routing rule implementations",
              "Workflow notifications testing"
            ]
          },
          {
            "title": "Module 9: Advanced Topics & Lifecycle Management (5 Hours)",
            "topics": [
              "What You'll Learn:",
              "Mashups integration and development",
              "Extending mobile applications",
              "Versioning & lifecycle management",
              "Testing strategies and tools",
              "Performance tuning",
              "Troubleshooting and debugging",
              "Hands-On Activities:",
              "Mashup development",
              "Performance optimization",
              "Issue troubleshooting"
            ]
          }
        ]
      },
      {
        "type": "detailed_target_audience",
        "title": "Who Should Attend",
        "subtitle": "This course is ideal for:",
        "items": [
           {
             "title": "Developers & Technical Professionals",
             "description": "SAP ABAP developers converting to cloud development, Full-stack developers wanting cloud skills, Technical architects creating cloud solutions"
           },
           {
             "title": "SAP & Cloud Consultants",
             "description": "SAP functional consultants needing technical skills, Cloud consultants wanting SAP C4C, C4C technical consultants"
           },
           {
             "title": "IT & Systems Leaders",
             "description": "IT managers updating systems design, Systems admins wanting to level up their skills, Project managers handling cloud tech projects"
           },
           {
             "title": "Fresh Graduates & Career Changers",
             "description": "Engineering grads wanting to go into cloud SAP jobs, Computer science grads looking to work on enterprise software"
           },
           {
             "title": "Existing SAP C4C Users",
             "description": "People at companies working with SAP C4C systems, Super users wanting to know more about systems development"
           }
        ]
      },
      {
        "type": "detailed_prerequisites",
        "items": [
          "Fundamental knowledge of ABAP training or wish to learn SAP ABAP",
          "Object-oriented programming understanding",
          "Web services and APIs familiarity",
          "Cloud computing concepts",
          "Exceptional problem analysis and solving skills",
          "**Nice-to-Have (But Not Required):**",
          "Previous experience in SAP ABAP (on-premise)",
          "Working in cloud platforms (AWS, Azure, GCP)",
          "RESTful services",
          "UI5/Fiori development",
          "Microservices architecture understanding"
        ]
      },
      {
        "type": "detailed_learning_outcomes",
        "title": "What You Will Achieve",
        "subtitle": "After completing the ERPVITS SAP C4C Technical course, you will have the following capabilities:",
        "items": [
           {
              "title": "Cloud Application Development",
              "description": "Build and deploy robust cloud applications using C4C SDK and Cloud Applications Studio."
           },
           {
              "title": "Business Object Modeling",
              "description": "Master BODL to define and manage custom business objects and data models."
           },
           {
              "title": "Advanced Logic Implementation",
              "description": "Write complex business logic using ABSL for actions, events, and validations."
           },
           {
              "title": "UI Design & Configuration",
              "description": "create responsive and user-friendly interfaces using the UI Designer."
           },
           {
              "title": "Integration Mastery",
              "description": "Integrate C4C with on-premise and other cloud systems using web services and APIs."
           },
           {
              "title": "Analytics & Reporting",
              "description": "Design and implement custom reports and key performance indicators."
           }
        ]
      },
      {
        "type": "real_world_scenarios",
        "items": [
          {
            "title": "Scenario 1: Retail Client CRM Customization",
            "description": "A major retail chain needs to extend the standard Customer object to track loyalty points and integrate with their POS system.",
            "role": "Your Role: Define custom fields, implement logic to update points, and create a web service for POS integration."
          },
          {
            "title": "Scenario 2: Manufacturing Service Request Automation",
            "description": "A manufacturing firm requires automated routing of service tickets based on technician availability and location.",
            "role": "Your Role: Implement complex routing rules using ABSL and configure workflow notifications."
          }
        ]
      },
      {
       "type": "detailed_certification",
       "title": "SAP Certified Development Associate - SAP Cloud for Customer",
       "subtitle": "Validate your expertise with a globally recognized certification",
       "badge": "Certification Code: C_C4C50_2021",
       "stats": [
         {
           "label": "Pass Rate",
           "value": "95%"
         },
          {
           "label": "Average Salary Hike",
           "value": "30%"
         }
       ],
       "description": "Our training is aligned with the SAP Certified Development Associate - SAP Cloud for Customer exam. We provide comprehensive preparation to ensure you pass with confidence.",
       "supportFeatures": [
         "Topic-wise study guides",
         "Practice exams simulating real test conditions",
         "Review sessions for difficult topics",
         "Tips and tricks for the exam"
       ],
       "benefits": [
         "Global recognition of your skills",
         "Better job opportunities and higher salary",
         "Digital badge to showcase on LinkedIn",
         "Access to exclusive SAP community resources"
       ]
      },
      {
        "type": "detailed_companies",
        "courseName": "SAP C4C Technical"
      },
      {
       "type": "detailed_career_opportunities",
       "items": [
         "SAP C4C Technical Consultant",
         "Cloud Application Developer",
         "SAP Cloud Architect",
         "Integration Specialist",
         "CRM Technical Lead"
       ]
      },
      {
        "type": "detailed_career_roadmap",
        "items": [
           {
             "title": "Phase 1: Foundation",
             "description": "Master C4C logic, SDK, and Architecture basics."
           },
           {
             "title": "Phase 2: Advanced Development",
             "description": "Deep dive into UI Designer, Integration, and Extensions."
           },
           {
             "title": "Phase 3: Certification",
             "description": "Complete the C4C Development Associate certification."
           },
           {
             "title": "Phase 4: Expert Level",
             "description": "Lead complex implementations and mentor junior developers."
           }
        ],
         "stats": [
            {
               "value": "40%",
               "label": "Growth Rate"
            },
            {
               "value": "$120k",
               "label": "Avg Senior Salary"
            }
         ]
      },
      {
        "type": "detailed_post_training_journey",
        "courseName": "SAP C4C Technical",
        "items": [
          {
            "title": "Mock Interviews",
            "description": "Rigorous technical mock interviews to prepare you for the toughest questions."
          },
           {
            "title": "Resume Building",
            "description": "Expert assistance in crafting a resume that highlights your specialized C4C skills."
          },
           {
            "title": "Job Placement",
            "description": "Direct referrals to our partner network of top consulting firms."
          },
           {
            "title": "On-Job Support",
            "description": "6 months of support after you land a job to help you navigate your first project."
          }
        ]
      },
      {
        "type": "detailed_upcoming_batches",
        "courseName": "SAP C4C Technical",
         "items": [
           {
             "startDate": "Next Monday",
             "time": "7:00 AM - 9:00 AM EST",
             "days": "Mon - Fri",
             "mode": "Online Live",
             "status": "filling_fast"
           },
           {
             "startDate": "Next Saturday",
             "time": "9:00 AM - 12:00 PM EST",
             "days": "Sat - Sun",
             "mode": "Online Live",
             "status": "open"
           }
         ]
      },
      {
        "type": "detailed_testimonials",
         "items": [
           {
             "name": "Sarah J.",
             "role": "SAP C4C Consultant",
             "quote": "The hands-on labs were a game changer. I felt confident starting my first project immediately after the course.",
             "image": "/images/testimonials/sarah.jpg"
           },
           {
             "name": "Michael R.",
             "role": "Cloud Architect",
             "quote": "Excellent training on the integration aspects. The instructors really know their stuff.",
             "image": "/images/testimonials/michael.jpg"
           },
           {
             "name": "Priya K.",
             "role": "Developer",
             "quote": "I passed my certification on the first try thanks to the prep materials provided.",
             "image": "/images/testimonials/priya.jpg"
           }
         ]
      },
      {
        "type": "detailed_demo_booking",
        "courseName": "SAP C4C Technical"
      },
      {
        "type": "detailed_faq",
        "items": [
           {
             "question": "Do I need prior SAP experience?",
             "answer": "While beneficial, it is not strictly required. Basic knowledge of programming concepts and object-oriented principles is helpful."
           },
           {
             "question": "Is the SDK access provided?",
             "answer": "Yes, we provide access to the SAP Cloud Applications Studio (SDK) for practice during the training."
           },
           {
             "question": "What is the duration of the course?",
             "answer": "The course is approximately 35-40 hours of live instructor-led training."
           },
           {
             "question": "Do you offer placement assistance?",
             "answer": "Yes, we provide 100% placement assistance including resume building, mock interviews, and job referrals."
           }
        ]
      }
    ],
    "faqs": [
       {
         "question": "Do I need prior SAP experience?",
         "answer": "While beneficial, it is not strictly required. Basic knowledge of programming concepts and object-oriented principles is helpful."
       },
       {
         "question": "Is the SDK access provided?",
         "answer": "Yes, we provide access to the SAP Cloud Applications Studio (SDK) for practice during the training."
       },
       {
         "question": "What is the duration of the course?",
         "answer": "The course is approximately 35-40 hours of live instructor-led training."
       },
       {
         "question": "Do you offer placement assistance?",
         "answer": "Yes, we provide 100% placement assistance including resume building, mock interviews, and job referrals."
       }
    ],
    "inFaqSection": False
}

with open(file_path, 'r', encoding='utf-8') as f:
    courses = json.load(f)

# Find index of c4c-technical
index_to_update = -1
for i, course in enumerate(courses):
    if course['id'] == 'c4c-technical':
        index_to_update = i
        break

if index_to_update != -1:
    courses[index_to_update] = new_c4c_obj
    print(f"Updated c4c-technical at index {index_to_update}")
else:
    print("c4c-technical not found in courses.json")

# Write back
with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(courses, f, indent=4)

print("Done.")
