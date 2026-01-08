'use client';
import React from 'react';
import BlogCTA from './BlogCTA';
import BlogCallout from './BlogCallout';

const MasterSapAribaIndustryContent = () => {
    return (
        <div className="prose prose-lg prose-slate max-w-none 
            prose-headings:text-slate-900 prose-headings:font-bold 
            prose-a:text-orange-600 hover:prose-a:text-orange-700 
            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8
            prose-p:leading-relaxed prose-p:text-slate-600
            prose-li:text-slate-600 blog-content">

            <p>
                Are you ready to boost your career in procurement and supply chain management?
                <strong>SAP Ariba</strong> is transforming how businesses handle procurement and supplier collaboration.
                With 5.4 million organizations on its platform, the demand for experts is skyrocketing.
            </p>

            <BlogCallout title="Why Choose ERPVITS?">
                We offer tailored SAP Ariba training with 24/7 server access, expert-led workshops, and 100% placement support
                to make you industry-ready.
            </BlogCallout>

            <h2>Core Components of SAP Ariba Training</h2>
            <p>Our program is designed around five essential modules, offering a comprehensive look at the procurement lifecycle.</p>
            <ol>
                <li><strong>Ariba Procurement:</strong> Creating purchase requisitions and managing approval workflows.</li>
                <li><strong>Supplier Management:</strong> Onboarding suppliers and monitoring performance.</li>
                <li><strong>Sourcing & Contracts:</strong> Evaluating bids and negotiating strategic contracts.</li>
                <li><strong>Integration:</strong> Connecting Ariba with existing ERP enterprise systems.</li>
                <li><strong>Collaboration:</strong> Supplier discovery and global marketplace networking.</li>
            </ol>

            <h2>Hands-On Learning with Live Projects</h2>
            <p>
                Practical learning is at the heart of our training. We provide access to SAP environments preloaded with
                realistic data, allowing you to test complex scenarios in a risk-free environment.
            </p>

            <h3>Career Paths After Training</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-bold text-center">Procurement Analyst</div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-bold text-center">Integration Specialist</div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-bold text-center">Solution Architect</div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-bold text-center">Supplier Manager</div>
            </div>

            <h2>Conclusion</h2>
            <p>
                Our SAP Ariba training empowers you with practical skills that directly impact your career trajectory.
                Whether you are a beginner or looking to upgrade your skills, this course is your gateway to high-demand opportunities.
            </p>

            <BlogCTA
                title="Earn Your SAP Ariba Certification"
                description="Invest in your future with professional SAP Ariba training. Gain hands-on experience and unlock your potential in the global marketplace."
                buttonText="Start Ariba Training"
                buttonLink="/courses/sap-ariba-training"
            />
        </div>
    );
};

export default MasterSapAribaIndustryContent;

