
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';

// Load env
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function generateSeed() {
    console.log('Fetching current data from Supabase for fresh backup...');

    const { data: courses, error: coursesError } = await supabase.from('courses').select('*');
    const { data: blogs, error: blogsError } = await supabase.from('blog_posts').select('*');

    if (coursesError || blogsError) {
        console.error('Error fetching data:', coursesError || blogsError);
        return;
    }

    const timestamp = new Date().toISOString();
    const content = `
/**
 * UPDATED BACKUP SEED FILE - GENERATED AFTER PROPER RESEED
 * Date: ${timestamp}
 * 
 * This file contains the latest data from the Supabase database.
 */

export const coursesData = ${JSON.stringify(courses, null, 2)};
export const blogPostsData = ${JSON.stringify(blogs, null, 2)};
`;

    fs.writeFileSync(path.resolve(process.cwd(), 'scripts/seed_backup.ts'), content);
    console.log('Successfully updated scripts/seed_backup.ts with current database content.');
}

generateSeed().catch(console.error);
