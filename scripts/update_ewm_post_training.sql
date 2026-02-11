-- Check if sap-ewm exists, if not, we can't update it easily without more info, but we assume it exists based on previous checks.
-- Only update the sections column.

UPDATE courses
SET sections = '[
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
          "Learn your client''s warehouse operations, understand current processes",
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
          "Build domain expertise in specific industries (Manufacturing, E-commerce, Pharma, Logistics)",
          "Develop leadership and project management capabilities",
          "Transition to senior consulting roles or warehouse management",
          "Explore specializations (warehouse automation, advanced analytics, optimization)",
          "Pursue SAP partnership or independent consulting opportunities"
        ]
      }
    ]
  }
]'::jsonb,
updated_at = NOW()
WHERE id = 'sap-ewm';
