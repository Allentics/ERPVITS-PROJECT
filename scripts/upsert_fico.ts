
import path from 'path';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Explicitly load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing Supabase credentials. Content of env:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'URL Present' : 'URL Missing');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function upsertFico() {
    console.log('Upserting SAP FICO...');
    const course = {
        id: 'sap-fico',
        title: 'SAP FICO',
        hero_heading: 'Master Financial Accounting & Controlling',
        hero_subheading: '',
        description: 'Master SAP FICO with our comprehensive training. Learn General Ledger, AP, AR, Asset Accounting, and Controlling with hands-on labs and real-world projects.',
        category: 'Functional',
        duration: '40-50 Hours',
        price: 'Competitive',
        hero_image: '/images/ERPVITS - All Modules Infographics/ERPVITS - SAP FICO Infographic.webp',
        badges: [],
        features: [],
        curriculum: [],
        faqs: [],
        sections: [],
        meta_title: 'SAP FICO Training',
        meta_description: 'Master SAP FICO with our comprehensive training.',
        schema: ''
    };

    const { data, error } = await supabase
        .from('courses')
        .upsert(course, { onConflict: 'id' })
        .select();

    if (error) {
        console.error('Error upserting FICO:', error);
    } else {
        console.log('Success:', data);
    }
}

upsertFico();
