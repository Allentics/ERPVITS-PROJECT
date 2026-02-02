
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { aribaContent } from './lib/aribaContent';
import { mmContent } from './lib/mmContent';
import { cpiContent } from './lib/cpiContent';
import { sdContent } from './lib/sdContent';
import { c4cContent } from './lib/c4cContent';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function restoreCourse(id: string, content: any) {
    console.log(`Restoring ${id}...`);

    // Ensure sections exist
    if (!content.sections) {
        console.error(`No sections found for ${id}`);
        return;
    }

    // Prepare sections JSON
    const sectionsJson = JSON.stringify(content.sections);

    const { error } = await supabase
        .from('courses')
        .update({
            sections: sectionsJson,
            updated_at: new Date().toISOString()
        })
        .eq('id', id);

    if (error) {
        console.error(`Error updating ${id}:`, error);
    } else {
        console.log(`✅ Successfully updated ${id} with new tabbed outcomes!`);
    }
}

async function main() {
    console.log('Starting restoration of tabbed learning outcomes...');

    await restoreCourse('ariba', aribaContent);
    await restoreCourse('mm', mmContent);
    await restoreCourse('cpi', cpiContent);
    await restoreCourse('sd', sdContent); // ID verified as 'sd'
    await restoreCourse('c4c-technical', c4cContent); // ID verified as 'c4c-technical'

    console.log('Done!');
}

main().catch(console.error);
