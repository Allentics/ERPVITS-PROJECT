const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function updateC4CVideo() {
    try {
        console.log('Fetching current C4C Technical course data...');

        const { data: currentCourse, error: fetchError } = await supabase
            .from('courses')
            .select('*')
            .eq('id', 'c4c-technical')
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

        // Add the demo video section at the beginning
        const videoSection = {
            type: 'content_with_image',
            title: 'Why Professionals Choose ERPVITS for **SAP C4C Technical** Online Training',
            subtitle: 'FROM THE TRAINER',
            description: 'ERPVITS is known as a training partner for SAP Cloud technologies because thousands of learners started working with leading consulting firms like Accenture, Capgemini, Deloitte, Infosys, and Wipro. The testimonies from our alumni network show what value our instruction brought them and what leap forward it gave them in their careers.',
            videoSrc: 'https://www.youtube.com/embed/EtlUBjNMsbM',
            layout: 'left',
            items: [
                'Trusted by 450+ successful SAP C4C developers.',
                'Alumni at Accenture, Capgemini, Deloitte, Infosys and Wipro',
                'Tailored pre-evaluation and cloud development learning path.',
                'Active alumni network and cloud developer community forum.',
                'Over 40 guided lab exercises from intro to advanced cloud development scenarios.',
                'Materials revised every quarter to align with the latest C4C releases.',
                'Mock interviews simulating C4C developer real world scenarios.',
                'Focused bootcamp sessions for cert preparation and advanced training.'
            ]
        };

        // Add video section at the beginning
        sections.unshift(videoSection);

        console.log('Updating course with demo video section...');

        const { data, error } = await supabase
            .from('courses')
            .update({ sections: sections })
            .eq('id', 'c4c-technical')
            .select();

        if (error) {
            console.error('Error updating course:', error);
            return;
        }

        console.log('✅ Successfully added demo video to C4C Technical course!');
        console.log('Video URL: https://www.youtube.com/embed/EtlUBjNMsbM');
        console.log('Total sections now:', sections.length);

    } catch (err) {
        console.error('Script error:', err);
    }
}

updateC4CVideo();
