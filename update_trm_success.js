const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const trmSuccessSection = {
    type: 'content_with_image',
    title: "Why Professionals Choose ERPVITS for SAP TRM Online Training",
    subtitle: "Success Guarantee & Credibility",
    description: "Since our establishment as a training partner for SAP financial modules, ERPVITS has received positive referrals from learners that have gone on to work for top consulting companies such as Accenture, Capgemini, Deloitte, Infosys, Wipro, and leading financial institutions. Our treasury program alumni network testimonials highlight the program quality and the impact it has on our learners’ career development.",
    items: [
        "Trusted by 300+ successful SAP TRM professionals",
        "Alumni at Accenture, Capgemini, Deloitte, EY, KPMG, major banks",
        "Personalized pre-evaluation and TRM learning path",
        "Active alumni network and treasury finance community forum",
        "50+ guided financial lab exercises from basic to advanced scenarios",
        "Quarterly updated materials aligned with latest SAP releases and regulatory requirements",
        "Mock interviews simulating real TRM consultant scenarios",
        "Dedicated certification prep week before official SAP exams"
    ],
    supportTitle: "Complete Support Ecosystem",
    supportText: "Learning SAP TRM provides end to end learning support during your SAP TRM online traning process and transition to a career in treasury. This is a 100% complete support."
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

    // Find index of existing 'content_with_image' section or add new
    const idx = sections.findIndex(s => s.type === 'content_with_image');
    if (idx !== -1) {
        console.log("Updating existing content_with_image section...");
        // Preserve existing video/image if present, but overwrite text
        const existing = sections[idx];
        sections[idx] = {
            ...trmSuccessSection,
            videoSrc: existing.videoSrc || trmSuccessSection.videoSrc,
            imageSrc: existing.imageSrc || trmSuccessSection.imageSrc
        };
    } else {
        console.log("Adding new content_with_image section...");
        sections.push(trmSuccessSection);
    }

    const { error: updateError } = await supabase
        .from('courses')
        .update({ sections: sections })
        .eq('id', 'trm');

    if (updateError) {
        console.error("Error updating course:", updateError);
    } else {
        console.log("Successfully updated TRM course Success Guarantee section!");
    }
}

updateTrm();
