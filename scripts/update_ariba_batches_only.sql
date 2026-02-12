-- Update the 'detailed_upcoming_batches' section for the SAP Ariba course
-- This script safely updates only the 'detailed_upcoming_batches' element within the 'sections' JSON array.

UPDATE courses
SET sections = (
    SELECT jsonb_agg(
        CASE
            WHEN elem->>'type' = 'detailed_upcoming_batches' THEN
                '{
                    "type": "detailed_upcoming_batches",
                    "batches": [
                        {
                            "name": "Batch 1: November 2025 (Weekdays)",
                            "status": "Filling Fast",
                            "statusColor": "bg-red-100 text-red-600",
                            "date": "November 15, 2025",
                            "schedule": "Mon-Fri | 07:00 AM | 08:00 PM IST",
                            "duration": "45-50 Hours",
                            "seats": "4/10"
                        },
                        {
                            "name": "Batch 2: November 2025 (Weekends)",
                            "status": "Booking Open",
                            "statusColor": "bg-green-100 text-green-600",
                            "date": "November 16, 2025",
                            "schedule": "Sat-Sun | 07:30 AM | 07:00 PM IST",
                            "duration": "45-50 Hours",
                            "seats": "6/10"
                        },
                        {
                            "name": "Batch 3: December 2025 (Flexible)",
                            "status": "Booking Open",
                            "statusColor": "bg-blue-100 text-blue-600",
                            "date": "December 1, 2025",
                            "schedule": "Flexible timings – customized per batch",
                            "duration": "45-50 Hours (accelerated)",
                            "seats": "7/10"
                        }
                    ],
                    "features": [
                        { "icon": "Zap", "text": "Early-bird discounts (10-15% off) for first 10 registrations" },
                        { "icon": "Users", "text": "Personal learning path consultation" },
                        { "icon": "ShieldCheck", "text": "Priority support and mentoring" },
                        { "icon": "CheckCircle2", "text": "Networking with cohort members" },
                        { "icon": "Users", "text": "Guaranteed access to current curriculum and trainers" }
                    ]
                }'::jsonb
            ELSE elem
        END
    )
    FROM jsonb_array_elements(sections) AS elem
)
WHERE id = 'ariba' OR id = 'sap-ariba';
