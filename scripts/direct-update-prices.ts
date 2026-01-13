import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const updates = [
    { id: 'fico', price: '45,000', duration: '40-50 Hours' },
    { id: 'mm', price: '45,000', duration: '40-50 Hours' },
    { id: 'sd', price: '45,000', duration: '40-50 Hours' },
    { id: 'ppds', price: '45,000', duration: '40-50 Hours' },
    { id: 'sap-ewm', price: '45,000', duration: '40-50 Hours' },
    { id: 'sap-ibp', price: '45,000', duration: '40-50 Hours' },
    { id: 'sap-mdg', price: '45,000', duration: '40-50 Hours' },
    { id: 'abap-cloud', price: '45,000', duration: '40-50 Hours' },
    { id: 'sap-abap-on-hana', price: '45,000', duration: '40-50 Hours' },
    { id: 'c4c-functional', price: '45,000', duration: '40-50 Hours' },
];

async function updatePrices() {
    console.log('Updating prices...\n');

    for (const course of updates) {
        const { error, count } = await supabase
            .from('courses')
            .update({
                price: course.price,
                duration: course.duration
            })
            .eq('id', course.id);

        if (error) {
            console.error(`❌ ${course.id}:`, error.message);
        } else {
            console.log(`✓ ${course.id}: Updated (count: ${count})`);
        }
    }

    console.log('\nVerifying updates...\n');

    for (const course of updates) {
        const { data } = await supabase
            .from('courses')
            .select('id, price, duration')
            .eq('id', course.id)
            .single();

        if (data) {
            console.log(`${course.id}: price=${data.price}, duration=${data.duration}`);
        }
    }
}

updatePrices();
