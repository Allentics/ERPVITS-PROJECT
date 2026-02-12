const fs = require('fs');

const ewmContent = {
    sections: [
        {
            type: 'detailed_features',
            title: "Learn SAP EWM from Certified Experts – <span class=\"text-orange-600\">100% Hands-On, Job-Oriented Training</span>",
            subtitle: "Our SAP Extended Warehouse Management Online Training is delivered exclusively by certified SAP professionals with 12+ years of direct implementation experience in warehouse operations, logistics networks, and advanced inventory management. Unlike passive video courses or self-paced modules, you receive interactive, real-time instruction where instructors share proven methodologies, address your specific questions, and guide you through complex warehouse scenarios step-by-step.",
            badge: "Why Choose Us",
            items: [
                {
                    title: "Certified Instructor Expertise",
                    description: "Each trainer holds official SAP certifications and has successfully led multiple enterprise-scale SAP EWM implementations across manufacturing, retail, e-commerce, pharmaceutical, and third-party logistics provider industries. They don't just teach theory; they share real-world war stories, common pitfalls encountered during warehouse go-lives, and industry best practices from actual client deployments managing millions of pallets annually. This real-world perspective is invaluable when you enter your first SAP EWM consulting engagement optimizing warehouse networks.",
                    icon: "Award"
                },
                {
                    title: "100% Hands-On Learning Methodology",
                    description: "Traditional training teaches SAP EWM concepts through slides and presentations. Our program goes further. Every session includes live demonstrations directly on SAP EWM systems, followed by guided lab exercises where you replicate what you've learned. By the end of the course, you've configured warehouse structures, managed inbound and outbound processes, executed picking and packing operations, handled goods movements, integrated with other modules, and executed supply chain collaboration workflows—all on real systems.",
                    icon: "Laptop"
                },
                {
                    title: "Job-Oriented Curriculum Design",
                    description: "The course curriculum is not academic—it's designed around the exact skills, responsibilities, and problem-solving scenarios you'll face as an SAP EWM consultant. Whether you're implementing warehouse automation strategies, configuring advanced picking strategies, or troubleshooting S/4HANA integration issues, the training ensures you're equipped with practical answers.",
                    icon: "Briefcase"
                },
                {
                    title: "Interactive Q&A Sessions",
                    description: "Beyond the main classroom instruction, you have dedicated Q&A forums and live office hours where instructors address your doubts, clarify complex topics like RF/Putaway strategy optimization and wave management processes, and provide personalized guidance tailored to your learning pace and career goals.",
                    icon: "MessageCircle"
                },
                {
                    title: "Flexible Batch Timings",
                    description: "Recognizing that many professionals juggle jobs, families, and learning, we offer both weekday evening batches (6 PM – 9 PM IST) and weekend batches (Saturday & Sunday). Sessions are recorded, so if you miss a live class, you can catch up asynchronously without losing continuity.",
                    icon: "Clock"
                },
                {
                    title: "Small Batch Sizes for Personalized Attention",
                    description: "Unlike massive online courses with thousands of anonymous learners, our batches are capped at 8-10 participants. This ensures instructors can provide individualized attention, get to know your strengths and challenges, and offer targeted feedback on your configuration work.",
                    icon: "Users"
                },
                {
                    title: "Placement & Career Support",
                    description: "Learning SAP EWM is only half the journey—getting placed is the goal. Our dedicated career support team helps you build an impactful SAP EWM-focused resume, prepare through mock interviews, and practice with real-world interview questions from recent hiring trends in warehouse and logistics sectors. You'll also receive guidance on how to present project experience effectively to stand out in SAP EWM job interviews.",
                    icon: "TrendingUp"
                },
                {
                    title: "Active Alumni Network & Community Forum",
                    description: "Join a thriving community of SAP EWM professionals. Exchange tips, share warehouse optimization strategies, discuss wave planning scenarios, ask questions, and build professional relationships that can lead to referrals and collaborations.",
                    icon: "Globe"
                },
                {
                    title: "Ongoing Support Post-Training",
                    description: "Your learning journey doesn't end with SAP EWM course completion. For six months after training, you'll continue to receive instructor guidance—whether you need help clarifying concepts, troubleshooting real-world project challenges, or seeking advice during your first consulting engagements managing warehouse operations.",
                    icon: "Headphones"
                }
            ]
        },
        // ... (Other sections can be copied similarly, but for brevity I'm focusing on the Critical Updated Sections: Batches and Timeline)
        // Ideally I should copy ALL provided content from lib/ewmContent.tsx to be safe.
        // For now, I will create the object structure that matches lib/ewmContent.tsx exactly.

        {
            type: 'detailed_upcoming_batches',
            title: "Join Our Next Live Batch – <span class=\"text-orange-600\">Limited Seats Available for SAP EWM Training</span>",
            subtitle: "Secure your spot in our upcoming batches with flexible timings designed for working professionals",
            features: [
                { icon: "Zap", text: "Early-bird discounts (10-15% off) for first 10 registrations" },
                { icon: "Users", text: "Personal learning path consultation with trainers" },
                { icon: "ShieldCheck", text: "Priority support and mentoring throughout course" },
                { icon: "CheckCircle2", text: "Networking with cohort members aspiring for warehouse roles" },
                { icon: "ShieldCheck", text: "Guaranteed access to current curriculum and certified trainers" },
                { icon: "Users", text: "Access to latest SAP EWM and S/4HANA updates" }
            ],
            batches: [
                {
                    title: "Batch 1: November 2025 (Weekdays – 7:00 AM | 8:00 PM IST)",
                    date: "November 15, 2025",
                    time: "7:00 AM | 8:00 PM IST",
                    duration: "50-60 Hours",
                    status: "filling-fast",
                    seats: "3/10 Seats Left",
                    seatsFilled: 70
                },
                {
                    title: "Batch 2: November 2025 (Weekends – Saturday & Sunday, 7:30 AM | 7:00 PM IST)",
                    date: "November 16, 2025",
                    time: "Sat & Sun | 7:30 AM | 7:00 PM IST",
                    duration: "50-60 Hours",
                    status: "available",
                    seats: "5/10 Seats Left",
                    seatsFilled: 50
                },
                {
                    title: "Batch 3: December 2025 (Flexible timings – customized per batch)",
                    date: "December 1, 2025",
                    time: "Flexible timings",
                    duration: "50-60 Hours (accelerated)",
                    status: "available",
                    seats: "6/10 Seats Left",
                    seatsFilled: 40
                }
            ]
        },
        {
            type: 'detailed_post_training_journey',
            title: "What to Expect After Completing Training – <span class=\"text-orange-600\">Your Growth Roadmap</span>",
            stats: [
                { icon: "Clock", label: "Average Time to First Role", value: "2-3 Months" },
                { icon: "Briefcase", label: "Career Support Provided", value: "100%" },
                { icon: "Headphones", label: "Post-Training Support", value: "6 Months" },
                { icon: "Users", label: "Alumni Network Access", value: "Lifetime" }
            ],
            items: [
                {
                    icon: "CheckCircle2",
                    title: "Immediate Post-Training",
                    timeline: "Week 1-2",
                    color: "orange",
                    points: [
                        "Receive course completion certificate",
                        "Access lifetime course materials and recordings",
                        "Join alumni network and community forum",
                        "Begin resume updates highlighting SAP EWM expertise",
                        "Start building your warehouse project portfolio"
                    ]
                },
                {
                    icon: "Rocket",
                    title: "Certification & Job Search",
                    timeline: "Week 3-6",
                    color: "slate",
                    points: [
                        "Apply for SAP EWM Certification exam (C_S4EWM_2023)",
                        "Start job search with career services support",
                        "Participate in alumni networking events and webinars",
                        "Receive interview coaching and mock interview feedback",
                        "Update LinkedIn profile with new certifications"
                    ]
                },
                {
                    icon: "TrendingUp",
                    title: "Landing the Job",
                    timeline: "Month 2-3",
                    color: "orange",
                    points: [
                        "Secure first SAP EWM consulting opportunity (typical timeline)",
                        "Begin real-world warehouse project experience",
                        "Continue post-training support from instructors",
                        "Network with industry peers and warehouse professionals"
                    ]
                },
                {
                    icon: "Briefcase",
                    title: "First Year in Role",
                    timeline: "Months 1-12",
                    color: "slate",
                    points: [
                        "Months 1-3: Learn client's warehouse operations, understand current processes, map out optimization opportunities, get hands-on experience with actual EWM implementations",
                        "Months 4-6: Lead small configuration tasks, support warehouse planning, mentor other junior consultants, build reputation for reliability and quality work",
                        "Months 7-12: Lead warehouse management components, drive process improvements, demonstrate business acumen alongside technical skills, contribute to larger implementation programs"
                    ]
                },
                {
                    icon: "Award",
                    title: "Long-Term Growth",
                    timeline: "1-5 Years",
                    color: "orange",
                    points: [
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
    ]
};

// NOTE: In a real scenario I would duplicate ALL other sections here too. 
// For this task, assuming the user only modified these specific sections and wants them updated in DB.
// However, UPDATE courses SET sections = ... overwrites the whole column.
// So I MUST preserve the other sections.
// I will read the existing update_ewm_complete.sql to get the FULL JSON, parse it, update the 2 sections, and write back.

const existingSqlPath = 'scripts/update_ewm_complete.sql';
const existingSql = fs.readFileSync(existingSqlPath, 'utf8');

// Extract the JSON array from the SQL
// It looks like: sections = '[...]'::jsonb,
const match = existingSql.match(/sections = '(\[.*\])'::jsonb/s);

if (match && match[1]) {
    let sections;
    try {
        // The SQL might have escaped quotes like '' instead of '. 
        // We need to unescape them to parse JSON.
        // Postgres strings use '' for a single quote.
        const jsonStr = match[1].replace(/''/g, "'");
        sections = JSON.parse(jsonStr);
    } catch (e) {
        console.error("Failed to parse JSON from SQL:", e);
        process.exit(1);
    }

    // Update detailed_upcoming_batches
    const batchesIndex = sections.findIndex(s => s.type === 'detailed_upcoming_batches');
    if (batchesIndex !== -1) {
        sections[batchesIndex] = ewmContent.sections.find(s => s.type === 'detailed_upcoming_batches');
    } else {
        sections.push(ewmContent.sections.find(s => s.type === 'detailed_upcoming_batches'));
    }

    // Update detailed_post_training_journey
    const roadmapIndex = sections.findIndex(s => s.type === 'detailed_post_training_journey');
    if (roadmapIndex !== -1) {
        sections[roadmapIndex] = ewmContent.sections.find(s => s.type === 'detailed_post_training_journey');
    } else {
        sections.push(ewmContent.sections.find(s => s.type === 'detailed_post_training_journey'));
    }

    // Serialize back to string, escaping single quotes for SQL
    const newJsonStr = JSON.stringify(sections).replace(/'/g, "''");

    // Construct new SQL
    const newSql = existingSql.replace(
        /sections = '\[.*\]'::jsonb/s,
        `sections = '${newJsonStr}'::jsonb`
    );

    fs.writeFileSync('scripts/final_update_ewm.sql', newSql);
    console.log("Generated scripts/final_update_ewm.sql");

} else {
    console.error("Could not find sections JSON in existing SQL file.");
}
