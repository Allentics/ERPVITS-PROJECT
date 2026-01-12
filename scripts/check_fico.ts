
import 'dotenv/config';
import { supabase } from '../lib/supabase';

async function checkFico() {
    console.log('Checking for FICO in DB...');
    const { data, error } = await supabase
        .from('courses')
        .select('*')
        .or('id.eq.fico,id.eq.sap-fico,title.ilike.%fico%');

    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Found courses:', data);
    }
}

checkFico();
