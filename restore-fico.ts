import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { ficoContent } from './lib/ficoContent';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function restoreFico() {
    console.log('🔄 Restoring content for fico...');

    // Check content
    const outcomesSection = ficoContent.sections.find((s: any) => s.type === 'detailed_learning_outcomes');
    if (!outcomesSection) {
        console.error('❌ detailed_learning_outcomes section not found in ficoContent');
        return;
    }

    // It uses the imported ficoLearningOutcomes automatically because ficoContent imports it.
    // However, Node.js caching might be tricky if we don't fully reload the module. 
    // But since this is a fresh process execution, it should load the new compiled TS.

    // Update the database
    const { error } = await supabase
        .from('courses')
        .update({ sections: ficoContent.sections })
        .eq('id', 'fico');

    if (error) {
        console.error(`❌ Error updating fico: ${error.message}`);
    } else {
        console.log(`✅ Successfully updated fico with new tabbed outcomes!`);
    }
}

restoreFico();
