
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import { createClient } from '@supabase/supabase-js';
import { aribaContent } from '../lib/aribaContent';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

console.log('Supabase URL:', supabaseUrl ? 'Found' : 'Missing');
console.log('Supabase Key used:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Service Role' : 'Anon');

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials!');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function syncAriba() {
    console.log('Syncing Ariba content to database...');

    const courseId = 'sap-ariba'; // Primary ID

    const updateData = {
        title: aribaContent.title,
        hero_heading: aribaContent.heroHeading || '',
        hero_subheading: aribaContent.heroSubheading || '',
        hero_image: (aribaContent as any).heroImage || null,
        description: aribaContent.description || '',
        meta_title: aribaContent.metaTitle,
        meta_description: aribaContent.metaDescription,
        features: aribaContent.features,
        sections: aribaContent.sections,
        // Add other fields if necessary
        updated_at: new Date().toISOString()
    };

    const updateDataWithId = {
        id: courseId,
        ...updateData
    };

    const { data, error } = await supabase
        .from('courses')
        .upsert(updateDataWithId)
        .select();

    if (error) {
        console.error('Error upserting course:', error);
    } else {
        console.log('Successfully upserted course:', data);
    }
}

syncAriba();

