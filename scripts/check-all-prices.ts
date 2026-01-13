import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkAllPrices() {
    const { data, error } = await supabase
        .from('courses')
        .select('id, title, price, duration')
        .order('title');

    if (error) {
        console.error('Error fetching courses:', error);
    } else {
        console.log(`\nFound ${data?.length} courses:\n`);
        data?.forEach(course => {
            const priceStatus = course.price ? '✓' : '✗';
            const durationStatus = course.duration ? '✓' : '✗';
            console.log(`${priceStatus}${durationStatus} ${course.id.padEnd(25)} | Price: ${(course.price || 'MISSING').padEnd(15)} | Duration: ${course.duration || 'MISSING'}`);
        });
    }
}

checkAllPrices();
