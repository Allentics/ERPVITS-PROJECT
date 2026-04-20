
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const dotenv = require('dotenv');

const envConfig = dotenv.parse(fs.readFileSync('.env.local'));
const supabaseUrl = envConfig.NEXT_PUBLIC_SUPABASE_URL.replace(/['"\s]/g, '').trim();
const supabaseAnonKey = envConfig.NEXT_PUBLIC_SUPABASE_ANON_KEY.replace(/['"\s]/g, '').trim();

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function update() {
    console.log('Fetching course data...');
    const { data, error } = await supabase
        .from('courses')
        .select('sections')
        .eq('id', 'sap-abap-on-hana')
        .single();

    if (error) {
        console.error('Error fetching:', error);
        return;
    }

    const sections = data.sections;
    const targetSectionIdx = sections.findIndex(s => s.title && s.title.includes('Get SAP ABP mastery over HANA'));

    if (targetSectionIdx !== -1) {
        const itemIdx = sections[targetSectionIdx].items.findIndex(item => item.title && item.title.includes('In-Memory Computing Expertise'));
        if (itemIdx !== -1) {
            console.log(`Updating icon for "${sections[targetSectionIdx].items[itemIdx].title}"...`);
            sections[targetSectionIdx].items[itemIdx].icon = 'CheckCircle2';

            const { error: updateError } = await supabase
                .from('courses')
                .update({ sections })
                .eq('id', 'sap-abap-on-hana');

            if (updateError) {
                console.error('Update Error:', updateError);
            } else {
                console.log('Success! Icon updated to CheckCircle2.');

                // Trigger revalidation
                try {
                    await fetch(supabaseUrl.replace('.supabase.co', '.supabase.co') + '/rest/v1/', { method: 'GET' }); // ignore, just checking connectivity
                    console.log('Pushing to GitHub next to deploy...');
                } catch (e) { }
            }
        } else {
            console.log('Item not found inside section.');
        }
    } else {
        console.log('Section not found.');
    }
}

update();
