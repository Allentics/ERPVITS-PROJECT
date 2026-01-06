
import dotenv from 'dotenv';
import path from 'path';
import { aribaContent } from '../lib/aribaContent';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials!');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function fixAribaDuplicates() {
    console.log('Fixing Ariba duplicates...');

    // 1. Update 'ariba' with the latest content
    const updateData = {
        title: aribaContent.title,
        hero_heading: aribaContent.heroHeading,
        hero_subheading: aribaContent.heroSubheading,
        hero_image: aribaContent.heroImage,
        description: aribaContent.description,
        meta_title: aribaContent.metaTitle,
        meta_description: aribaContent.metaDescription,
        features: aribaContent.features,
        sections: aribaContent.sections,
        updated_at: new Date().toISOString()
    };

    const { error: updateError } = await supabase
        .from('courses')
        .update(updateData)
        .eq('id', 'ariba');

    if (updateError) {
        console.error('Error updating ariba:', updateError);
    } else {
        console.log('Successfully updated "ariba" with latest content.');
    }

    // 2. Delete 'sap-ariba'
    const { error: deleteError } = await supabase
        .from('courses')
        .delete()
        .eq('id', 'sap-ariba');

    if (deleteError) {
        console.error('Error deleting sap-ariba:', deleteError);
    } else {
        console.log('Successfully deleted "sap-ariba".');
    }
}

fixAribaDuplicates();
