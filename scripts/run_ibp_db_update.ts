import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

// Load env vars
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase credentials in .env.local");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const heroSubheading = '<span>Our SAP IBP Training aims to equip professionals with the skills to effectively and efficiently optimize end-to-end supply chain processes with SAP Integrated Business Planning (IBP). Through hands-on, live sessions, you will acquire skills in demand planning, supply planning, inventory optimization and sales and operations planning (S&OP) using IBP.</span><br class="block md:hidden" /><br class="block md:hidden" /><span>This SAP IBP course covers real-world scenarios and practical exercises, providing the essential knowledge you need to configure planning models, generate forecasts, manage alerts and generate actionable insights that facilitate effective decision-making. Perfect for supply chain professionals, planners and consultants seeking SAP IBP certification as well as those looking to increase efficiency, collaboration and performance within their organizations\' supply chains, this training equips learners to drive efficiency, collaboration and performance across their supply chains.</span>';

async function updateDb() {
    console.log("Updating SAP IBP course hero subheading in Supabase...");

    const { data, error } = await supabase
        .from('courses')
        .update({ hero_subheading: heroSubheading })
        .eq('id', 'sap-ibp')
        .select();

    if (error) {
        console.error("Error updating database:", error.message);
    } else {
        console.log("Successfully updated the database! New content applied for sap-ibp.");
        console.log(data);
    }
}

updateDb();
