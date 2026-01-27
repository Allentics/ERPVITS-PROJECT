const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const trmDetailedFeatures = {
    type: 'detailed_features',
    title: "Learn SAP TRM from Certified Experts – 100% Hands-On, Job-Oriented Training",
    subtitle: "Our SAP TRM Online Training is executed by certified SAP experts and Treasury and financial systems implementation professionals with 10+ years of direct experience. Unlike self-paced modules or passive video courses, you receive interactive real-time instruction in which instructors share proven methods, answer your direct questions, and walk you through intricate financial scenarios.",
    items: [
        {
            title: "Certified Instructor Expertise",
            description: "Trainers are certified in SAP TRM and have substantial experience conducting enterprise-scale implementations of SAP TRM and overseeing corporate liquidity as the primary executor of corporate liquidity, ranging in the billions. They don’t teach just the theoretical aspects of the subject and instead describe transformative financial implementations in detail."
        },
        {
            title: "100% Hands-On Learning Methodology",
            description: "Conventional training of SAP TRM teaches the concepts using slides and Powerpoint presentations. Our approach is different. Each SAP TRM training session incorporates the teaching of the concepts and later live demonstrations on the SAP S/4HANA TRM systems followed by the learners performing guided lab exercises to authentically recreate the session objectives."
        },
        {
            title: "Job-Oriented Curriculum Design",
            description: "The course objectives have not been constructed in an academic manner as we centered it on the skills, duties and roles, and consultant level problem-solving that an SAP TRM consultant is expected to perform. Integrating cash management processes, configuring hedge accounting, and managing credit limits are typical components."
        },
        {
            title: "Interactive Q&A Sessions",
            description: "After instruction is concluded in the main class, we have dedicated forums and live Q&A sessions during which your instructors answer your questions, discuss complex treasury concepts, and guide you in a way that meets your learning needs."
        },
        {
            title: "Flexible Batch Timings",
            description: "Understanding that several finance specialists have busy schedules along with family and learning responsibilities, we have flexible timings with sessions on weekday evenings (6 PM – 9 PM IST) and on weekends (Saturday & Sunday)."
        },
        {
            title: "Small Batch Sizes for Personalized Attention",
            description: "Capped at 8-10 members, we ensure you each get to know the instructor, and they get to know you, your strengths and weaknesses, and provide you with individual attention on complex financial scenarios."
        },
        {
            title: "Placement & Career Support",
            description: "To get you ready for interviews, we have real treasury and banking interview questions, help you with mock interviews, and guide you in SAP-focused resume building. You also get support on how to effectively present your project experience."
        },
        {
            title: "Active Alumni Network & Community Forum",
            description: "Experience building a network within a community of SAP TRM and treasury technology specialists. Provide and receive career-related assistance, pose queries, and establish connections."
        },
        {
            title: "Ongoing Support Post-Training",
            description: "For six months after training, you'll continue to receive instructor guidance—whether you need help clarifying treasury concepts, troubleshooting real-world financial project challenges, or seeking advice during your first TRM consulting engagements."
        }
    ]
};

async function updateTrm() {
    console.log("Fetching current TRM course...");
    const { data: course, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', 'trm')
        .single();

    if (error) {
        console.error("Error fetching course:", error);
        return;
    }

    let sections = course.sections || [];
    if (typeof sections === 'string') {
        sections = JSON.parse(sections);
    }

    // Find index of existing 'detailed_features' section or add new
    const idx = sections.findIndex(s => s.type === 'detailed_features');
    if (idx !== -1) {
        console.log("Updating existing detailed_features...");
        sections[idx] = trmDetailedFeatures;
    } else {
        console.log("Adding new detailed_features...");
        sections.push(trmDetailedFeatures);
    }

    const { error: updateError } = await supabase
        .from('courses')
        .update({ sections: sections })
        .eq('id', 'trm');

    if (updateError) {
        console.error("Error updating course:", updateError);
    } else {
        console.log("Successfully updated TRM course detailed features!");
    }
}

updateTrm();
