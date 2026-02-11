import json

file_path = r"c:\Users\Allenticspun2107\Desktop\ERPVITES-PROJECT-main\courses.json"

# Comprehensive EWM Content
new_sections = [
    {
        "type": "detailed_features",
        "title": "Why Choose Our <span class=\"text-orange-600\">SAP EWM Training?</span>",
        "subtitle": "Master advanced warehousing with a curriculum designed for real-world application.",
        "items": [
            {
                "title": "S/4HANA Embedded EWM",
                "description": "Learn the latest Embedded EWM architecture in SAP S/4HANA 2023.",
                "icon": "Box"
            },
            {
                "title": "RF & Mobile Framework",
                "description": "Hands-on experience with Radio Frequency (RF) gun configurations and mobile screens.",
                "icon": "Smartphone"
            },
            {
                "title": "Real-Time Scenarios",
                "description": "Practice complex Inbound/Outbound flows, Wave Management, and Cross-docking.",
                "icon": "TrendingUp"
            },
            {
                "title": "Certification Ready",
                "description": "Aligned with C_S4EWM_2023 certification exam topics and questions.",
                "icon": "Award"
            },
            {
                "title": "Placement Support",
                "description": "Dedicated placement assistance for EWM Consultants and Logistics Analysts.",
                "icon": "Briefcase"
            },
            {
                "title": "40+ Hours Live",
                "description": "Comprehensive instructor-led training with server access.",
                "icon": "Clock"
            }
        ]
    },
    {
        "type": "detailed_curriculum",
        "title": "SAP EWM Course Curriculum",
        "subtitle": "From Basics to Advanced Warehouse Configuration",
        "items": [
            {
                "title": "Module 1: EWM Overview & Org Structure",
                "topics": [
                     "Introduction to SAP EWM vs. WM",
                     "Deployment Options: Decentralized vs. Embedded",
                     "Organizational Elements: Warehouse Number, Storage Type, Storage Section",
                     "EWM Warehouse Structure Setup"
                ]
            },
            {
                "title": "Module 2: Master Data Configuration",
                "topics": [
                     "Product Master Data & Packaging Specifications",
                     "Storage Bins & Bin Structures",
                     "Supply Chain Unit (SCU) & Business Partners",
                     "Resource Management Master Data"
                ]
            },
            {
                "title": "Module 3: Inbound Processes",
                "topics": [
                     "Inbound Delivery Notification & Goods Receipt",
                     "Deconsolidation & Putaway Strategies",
                     "Process Oriented Storage Control (POSC)",
                     "Layout Oriented Storage Control (LOSC)",
                     "Quality Inspection in EWM"
                ]
            },
            {
                "title": "Module 4: Outbound Processes",
                "topics": [
                     "Outbound Delivery Request & Order Creation",
                     "Wave Management & Wave Templates",
                     "Picking Strategies & Warehouse Orders",
                     "Packing, Staging, and Loading",
                     "Value Added Services (VAS)"
                ]
            },
            {
                "title": "Module 5: Internal Warehouse Processes",
                "topics": [
                     "Physical Inventory Procedures",
                     "Replenishment Strategies",
                     "Rearrangement & Ad-hoc Movements",
                     "Scrapping & Posting Changes"
                ]
            },
            {
                "title": "Module 6: RF Framework & Monitoring",
                "topics": [
                     "Radio Frequency (RF) Framework Configuration",
                     "RF Menu Management & Screen Enhancements",
                     "Warehouse Management Monitor (Using Monitor configured in S/4)",
                     "Exception Handling & Alerts"
                ]
            },
            {
                "title": "Module 7: Yard Management & Cross Docking",
                "topics": [
                     "Yard Management Basics: Check-in/Check-out",
                     "Transportation Units (TU) Management",
                     "Opportunistic Cross Docking",
                     "Merchandise Distribution"
                ]
            },
             {
                "title": "Module 8: Integration & Advanced Topics",
                "topics": [
                     "EWM-ERP Integration (CIF, qRFC)",
                     "Production Supply (PP-EWM Integration)",
                     "Quality Management Integration",
                     "Latest Features in S/4HANA EWM"
                ]
            }
        ]
    },
    {
        "type": "detailed_post_training_journey",
        "courseName": "SAP EWM",
        "title": "What to Expect After Completing SAP EWM Training – Your Growth Roadmap",
        "steps": [
          {
            "title": "Immediate Post-Training",
            "timeline": "Week 1-2",
            "color": "orange",
            "icon": "CheckCircle2",
            "points": [
              "Receive course completion certificate",
              "Access lifetime course materials and recordings",
              "Join alumni network and community forum",
              "Begin resume updates highlighting SAP EWM expertise",
              "Start building your warehouse project portfolio"
            ]
          },
          {
            "title": "Certification & Job Search",
            "timeline": "Week 3-6",
            "color": "slate",
            "icon": "Rocket",
            "points": [
              "Apply for SAP EWM Certification exam (C_S4EWM_2023)",
              "Start job search with career services support",
              "Participate in alumni networking events and webinars",
              "Receive interview coaching and mock interview feedback",
              "Update LinkedIn profile with new certifications"
            ]
          },
          {
            "title": "Landing the Job",
            "timeline": "Month 2-3",
            "color": "orange",
            "icon": "Briefcase",
            "points": [
              "Secure first SAP EWM consulting opportunity (typical timeline)",
              "Begin real-world warehouse project experience",
              "Continue post-training support from instructors",
              "Network with industry peers and warehouse professionals"
            ]
          },
          {
            "title": "First Year - Onboarding",
            "timeline": "Months 1-3",
            "color": "slate",
            "icon": "TrendingUp",
            "points": [
              "Learn your client's warehouse operations, understand current processes",
              "Map out optimization opportunities",
              "Get hands-on experience with actual EWM implementations"
            ]
          },
          {
            "title": "First Year - Execution",
            "timeline": "Months 4-6",
            "color": "orange",
            "icon": "TrendingUp",
            "points": [
              "Lead small configuration tasks, support warehouse planning",
              "Mentor other junior consultants",
              "Build reputation for reliability and quality work"
            ]
          },
          {
            "title": "First Year - Leadership",
            "timeline": "Months 7-12",
            "color": "slate",
            "icon": "Award",
            "points": [
              "Lead warehouse management components, drive process improvements",
              "Demonstrate business acumen alongside technical skills",
              "Contribute to larger implementation programs"
            ]
          },
          {
            "title": "Long-Term Growth",
            "timeline": "1-5 Years",
            "color": "orange",
            "icon": "Rocket",
            "points": [
              "Earn SAP EWM certifications and maintain credentials",
              "Build domain expertise in specific industries",
              "Develop leadership and project management capabilities",
              "Transition to senior consulting roles or warehouse management",
              "Explore specializations (warehouse automation, advanced analytics)",
              "Pursue SAP partnership or independent consulting opportunities"
            ]
          }
        ]
    },
    {
        "type": "detailed_faq",
        "title": "Frequently Asked Questions",
        "items": [
            {
                "question": "Do I need SAP MM or WM knowledge before learning EWM?",
                "answer": "While not strictly mandatory, having a basic understanding of SAP MM (Material Management) or WM (Warehouse Management) concepts is highly beneficial. However, our course covers the fundamentals of warehouse structure to help beginners catch up."
            },
            {
                "question": "Does this course cover Embedded EWM in S/4HANA?",
                "answer": "Yes, this course is designed around the latest SAP S/4HANA Embedded EWM architecture, which is the current industry standard, while also discussing decentralized deployment differences."
            },
            {
                "question": "Is system access provided for practice?",
                "answer": "Yes, we provide 24/7 access to an SAP S/4HANA server with EWM configured for the duration of the course plus an additional practice period to ensure you get hands-on experience."
            },
            {
                "question": "Will I be able to clear the C_S4EWM exam after this?",
                "answer": "Yes, the curriculum is aligned with the C_S4EWM certification. We provide topic-wise guidance, mock questions, and exam preparation tips to help you succeed."
            }
        ]
    },
    {
         "type": "detailed_demo_booking",
         "title": "Book Your Free SAP EWM Demo",
         "courseName": "SAP EWM"
    }
]

# Update Helper
with open(file_path, 'r', encoding='utf-8') as f:
    courses = json.load(f)

found = False
for course in courses:
    if course['id'] == 'sap-ewm':
        course['heroHeading'] = "Master Modern Warehouse Operations with the <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600\">#1 SAP EWM Online Training Program</span>"
        course['heroSubheading'] = "Become an expert in SAP Extended Warehouse Management (EWM) on S/4HANA. Master inbound/outbound processing, RF framework, and complex warehouse logistics with 100% hands-on training."
        course['sections'] = new_sections
        # Also populate the top-level fields for fallback compatibility
        course['features'] = [item['title'] for item in new_sections[0]['items']]
        course['curriculum'] = new_sections[1]['items']
        course['faqs'] = new_sections[3]['items']
        found = True
        break

if found:
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(courses, f, indent=4)
    print("Updated sap-ewm comprehensive content in courses.json")
else:
    print("sap-ewm not found")
