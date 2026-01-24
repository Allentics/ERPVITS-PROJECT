
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://xwcpxwjxqllfwferproi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3Y3B4d2p4cWxsZndmZXJwcm9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1NTQ3OTcsImV4cCI6MjA4MjEzMDc5N30.aBZ4VrjvQMHDqLBpxuvYl1_dOZoBt3_PEnHn0s7kVNI';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
    console.log("Testing Supabase connection...");
    const startTime = Date.now();
    try {
        const { data, error } = await supabase.from('pages').select('count', { count: 'exact', head: true });
        const duration = Date.now() - startTime;
        if (error) {
            console.error("Error connecting:", error);
        } else {
            console.log("Connection successful! Duration:", duration, "ms");
            console.log("Data:", data);
        }
    } catch (e) {
        console.error("Exception:", e);
    }
}

testConnection();
