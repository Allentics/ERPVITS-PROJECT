const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// Try to use service role key if available, otherwise use anon key
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env.local');
    console.error('Need either SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY');
    process.exit(1);
}

console.log('Using Supabase URL:', supabaseUrl);
console.log('Using key type:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Service Role' : 'Anon');

const supabase = createClient(supabaseUrl, supabaseKey);

async function updateCoursePrices() {
    try {
        console.log('\n🔄 Fetching all courses...\n');

        // First, fetch all courses
        const { data: courses, error: fetchError } = await supabase
            .from('courses')
            .select('id, title, price, duration, category');

        if (fetchError) {
            console.error('❌ Error fetching courses:', fetchError);
            return;
        }

        console.log(`📚 Found ${courses.length} courses\n`);
        console.log('Current state:');
        courses.forEach(c => {
            console.log(`  - ${c.title}: ₹${c.price || 'NULL'} / ${c.duration || 'NULL'}`);
        });

        console.log('\n🔄 Updating all courses to ₹45,000 and 50 Hours...\n');

        // Update each course individually with detailed logging
        let successCount = 0;
        let errorCount = 0;

        for (const course of courses) {
            const { data, error } = await supabase
                .from('courses')
                .update({
                    price: '45,000',
                    duration: '50 Hours'
                })
                .eq('id', course.id)
                .select();

            if (error) {
                console.error(`❌ Error updating ${course.title}:`, error.message);
                errorCount++;
            } else {
                console.log(`✅ Updated: ${course.title} -> ₹45,000 / 50 Hours`);
                successCount++;
            }

            // Small delay to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        console.log('\n' + '='.repeat(80));
        console.log(`✅ Successfully updated ${successCount} courses`);
        if (errorCount > 0) {
            console.log(`❌ Failed to update ${errorCount} courses`);
        }
        console.log('='.repeat(80));

        // Wait a bit for database to sync
        console.log('\n⏳ Waiting for database to sync...');
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Fetch and display all courses to verify
        const { data: updatedCourses, error: verifyError } = await supabase
            .from('courses')
            .select('id, title, price, duration, category')
            .order('title', { ascending: true });

        if (verifyError) {
            console.error('❌ Error fetching updated courses:', verifyError);
            return;
        }

        console.log('\n📊 Verified Updated Courses:');
        console.log('='.repeat(80));
        updatedCourses.forEach(course => {
            const price = course.price || 'NULL';
            const duration = course.duration || 'NULL';
            const category = course.category || 'N/A';
            console.log(`${course.title.padEnd(35)} | ₹${price.padEnd(10)} | ${duration.padEnd(15)} | ${category}`);
        });
        console.log('='.repeat(80));
        console.log(`\n✅ Total courses: ${updatedCourses.length}`);

        // Check if all are updated correctly
        const allCorrect = updatedCourses.every(c => c.price === '45,000' && c.duration === '50 Hours');
        if (allCorrect) {
            console.log('\n🎉 All courses have been successfully updated!');
        } else {
            console.log('\n⚠️  Some courses may not have been updated correctly. Please check the output above.');
        }

    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

updateCoursePrices();
