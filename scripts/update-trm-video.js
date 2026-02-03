const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function updateTRMVideo() {
    try {
        console.log('Fetching current SAP TRM course data...');

        const { data: currentCourse, error: fetchError } = await supabase
            .from('courses')
            .select('*')
            .eq('id', 'trm')
            .single();

        if (fetchError) {
            console.error('Error fetching course:', fetchError);
            return;
        }

        console.log('Current course found:', currentCourse.title);
        console.log('Current sections:', currentCourse.sections ? 'exists' : 'null');

        // Parse sections if it's a string
        let sections = currentCourse.sections;
        if (typeof sections === 'string') {
            sections = JSON.parse(sections);
        }

        // Initialize sections array if it doesn't exist
        if (!sections || !Array.isArray(sections)) {
            sections = [];
        }

        // Check if video section already exists
        const hasVideoSection = sections.some(s => s.type === 'content_with_image' && s.videoSrc);
        if (hasVideoSection) {
            console.log('Video section already exists. Updating it...');
            const videoSectionIndex = sections.findIndex(s => s.type === 'content_with_image' && s.videoSrc);
            sections[videoSectionIndex].videoSrc = 'https://www.youtube.com/embed/u6GCE8eAOAc';
        } else {
            console.log('Adding new video section...');
            // Add the demo video section at the beginning
            const videoSection = {
                type: 'content_with_image',
                title: 'Why Professionals Choose ERPVITS for **SAP TRM** Online Training',
                subtitle: 'SUCCESS GUARANTEE & CREDIBILITY',
                description: 'Since our establishment as a training partner for SAP financial modules, ERPVITS has received positive referrals from learners that have gone on to work for top consulting companies such as Accenture, Capgemini, Deloitte, Infosys, Wipro, and leading financial institutions. Our treasury program alumni network testimonials highlight the program quality and the impact it has on our learners\' career development.',
                videoSrc: 'https://www.youtube.com/embed/u6GCE8eAOAc',
                layout: 'left',
                items: [
                    'Trusted by 320+ treasury and financial systems professionals',
                    'Alumni at Accenture, Capgemini, Deloitte, Infosys, Wipro, and financial institutions',
                    'Tailored pre-evaluation and treasury learning path',
                    'Active alumni network and treasury community forum',
                    'Over 50 guided treasury labs from basic to advanced scenarios',
                    'Materials updated every quarter to align with TRM standards',
                    'Mock interviews simulating real TRM consultant scenarios',
                    'Focused bootcamp sessions for certification prep'
                ]
            };

            // Add video section at the beginning
            sections.unshift(videoSection);
        }

        console.log('Updating course with demo video section...');

        const { data, error } = await supabase
            .from('courses')
            .update({ sections: sections })
            .eq('id', 'trm')
            .select();

        if (error) {
            console.error('Error updating course:', error);
            return;
        }

        console.log('✅ Successfully added demo video to SAP TRM course!');
        console.log('Video URL: https://www.youtube.com/embed/u6GCE8eAOAc');
        console.log('Total sections now:', sections.length);

    } catch (err) {
        console.error('Script error:', err);
    }
}

updateTRMVideo();
