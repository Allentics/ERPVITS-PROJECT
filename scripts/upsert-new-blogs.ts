import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const blogPosts = [
    {
        id: "sap-mm-course-complete-guide",
        title: "SAP MM Course: Complete Guide to Materials Management Professional Excellence",
        description: "Join the best SAP MM course at ERPVITS. Get certified with expert-led training in Materials Management, S/4HANA, and procurement. Enroll now!",
        image: "/images/sap-mm-course.png",
        date: "2026-01-07",
        category: "SAP MM",
        author: "ERPVITS Expert",
        content: "CONTENT_MANAGED_LOCALLY"
    },
    {
        id: "how-sap-ariba-is-powering-intelligent-spend-management",
        title: "Revolutionizing Procurement: How SAP Ariba is Powering Intelligent Spend Management in 2025",
        description: "Discover how SAP Ariba is transforming procurement with intelligent spend management in 2025. Boost your career with SAP Ariba training & certification.",
        image: "/images/blog/sap-ariba-spend-management.webp",
        date: "2026-01-06",
        category: "SAP Ariba",
        author: "ERPVITS Expert",
        content: "CONTENT_MANAGED_LOCALLY"
    },
    {
        id: "top-ten-tools-techniques-for-efficient-abap-on-cloud-programming",
        title: "Mastering ABAP on Cloud: Essential Tools and Techniques Every Developer Should Know",
        description: "Master SAP ABAP on Cloud with modern tools and methods. Build faster, smarter apps through SAP ABAP online training and real-time projects.",
        image: "/images/blog/top-10-tools-abap-cloud.webp",
        date: "2026-01-05",
        category: "SAP Technical",
        author: "ERPVITS Expert",
        content: "CONTENT_MANAGED_LOCALLY"
    },
    {
        id: "how-sap-fieldglass-transforming-global-contingent-workforce-market",
        title: "How SAP Fieldglass is Transforming the Global Contingent Workforce Market",
        description: "Learn SAP Fieldglass online and master global contingent workforce management. Boost your SAP career with ERPVITS training and real-time projects.",
        image: "/images/blog/sap-fieldglass-transformation.webp",
        date: "2026-01-04",
        category: "SAP Fieldglass",
        author: "ERPVITS Expert",
        content: "CONTENT_MANAGED_LOCALLY"
    },
    {
        id: "sap-trm-setup-essentials",
        title: "Laying the Foundation: Essential SAP TRM Master Data for Treasury Success",
        description: "Laying the Foundation with Essential SAP TRM Master Data Ensures Accurate, Compliant Treasury Operations. Explore Best Practices with ERPVITS.",
        image: "/images/blog/sap-trm-master-data.webp",
        date: "2026-01-03",
        category: "SAP TRM",
        author: "ERPVITS Expert",
        content: "CONTENT_MANAGED_LOCALLY"
    },
    {
        id: "mto-and-sto-process-in-sap",
        title: "MTO & STO Process in SAP: Enhance Supply Chain Performance Through Integrated MM And SD Modules",
        description: "Discover the difference between the MTO and STO processes in SAP and how SAP MM & SD integration boosts supply chain efficiency with ERPVITS expert training.",
        image: "/images/blog/mto-sto-process.webp",
        date: "2026-01-02",
        category: "SAP Functional",
        author: "ERPVITS Expert",
        content: "CONTENT_MANAGED_LOCALLY"
    },
    {
        id: "master-sap-ariba-with-industry-leading-online-training",
        title: "Master SAP Ariba with Industry-Leading Online Training",
        description: "Enhance your career with SAP Ariba training, focusing on procurement skills, hands-on projects, and job support for professionals.",
        image: "/images/blog/master-sap-ariba.webp",
        date: "2026-01-01",
        category: "SAP Ariba",
        author: "ERPVITS Expert",
        content: "CONTENT_MANAGED_LOCALLY"
    },
    {
        id: "sap-trm-complementary-technologies",
        title: "SAP TRM Complementary Technologies for Modern Treasury and Risk Management",
        description: "Explore how SAP TRM integrates with analytics, automation, and compliance tools to enable real-time insights, risk control, and digital treasury transformation.",
        image: "/images/blog/sap-trm-complementary.png",
        date: "2025-12-18",
        category: "SAP TRM",
        author: "ERPVITS Expert",
        content: "CONTENT_MANAGED_LOCALLY"
    }
];

async function upsertBlogs() {
    console.log('Starting blog upsert...\n');

    for (const post of blogPosts) {
        console.log(`Upserting: ${post.id}`);
        const { error } = await supabase
            .from('blog_posts')
            .upsert(post, { onConflict: 'id' });

        if (error) {
            console.log(`  ❌ Error: ${error.message}`);
        } else {
            console.log(`  ✓ Success\n`);
        }
    }

    console.log('\n✓ Blog upsert complete!');
}

upsertBlogs();
