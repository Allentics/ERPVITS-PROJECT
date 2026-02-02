'use client';
import Link from 'next/link';
import BlogCTA from './BlogCTA';
import BlogCallout from './BlogCallout';

export default function SapTrmSetupEssentialsContent() {
    return (
        <div className="prose prose-lg prose-slate max-w-none 
            prose-headings:text-slate-900 prose-headings:font-bold 
            prose-a:text-orange-600 hover:prose-a:text-orange-700 
            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8
            prose-p:leading-relaxed prose-p:text-slate-600
            prose-li:text-slate-600 blog-content">

            <p>
                In <strong>SAP Treasury and Risk Management (TRM)</strong>, everything begins with precise master data.
                From financial instruments and business partners to account assignments, these fundamental elements
                dictate the accuracy of your entire treasury system.
            </p>

            <BlogCallout title="Foundation for Strategy">
                A strong master data foundation is more than just a technical requirement—it is the prerequisite
                for <strong>strategic planning</strong> and <strong>real-time risk management</strong>.
            </BlogCallout>

            <h2>Key Master Data Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="!mt-0 font-bold">Business Partners</h4>
                    <p className="text-sm">Counterparties, banks, and issuers for financial transactions.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="!mt-0 font-bold">Financial Instruments</h4>
                    <p className="text-sm">Securities, derivatives, and money market instruments.</p>
                </div>
            </div>

            <h2>Best Practices for Data Maintenance</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Centralized Governance:</strong> Designate dedicated data stewards for treasury master data.</li>
                <li><strong>Validation Rules:</strong> Enforce mandatory fields and standard format tests (e.g., IBAN validation).</li>
                <li><strong>Naming Conventions:</strong> Use consistent identifiers for accounts and instruments to facilitate reporting.</li>
                <li><strong>Automation:</strong> Utilize tools for mass maintenance and periodic data cleanup routines.</li>
            </ul>

            <h2>Essential T-Codes for Configuration</h2>
            <div className="overflow-x-auto my-6">
                <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-orange-50 font-bold">
                        <tr>
                            <th className="border border-gray-200 px-6 py-3 text-left text-gray-900">Area</th>
                            <th className="border border-gray-200 px-6 py-3 text-left text-gray-900">T-Code</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr><td className="border px-6 py-3">Business Partner Maintenance</td><td className="border px-6 py-3 font-mono font-bold text-orange-600">BP</td></tr>
                        <tr className="bg-gray-50"><td className="border px-6 py-3">Bank House Account Maintenance</td><td className="border px-6 py-3 font-mono font-bold text-orange-600">FI12</td></tr>
                        <tr><td className="border px-6 py-3">Market Data Entry</td><td className="border px-6 py-3 font-mono font-bold text-orange-600">S_ALR_87012326</td></tr>
                    </tbody>
                </table>
            </div>

            <h2>Conclusion</h2>
            <p>
                Accurate master data allows for seamless integration between SAP TRM and FI, providing the visibility
                needed to support corporate finance goals. Departments focusing on advanced analytics must prioritize
                data integrity as their first step toward treasury transformation.
            </p>

            <BlogCTA
                title="Master SAP TRM Configuration"
                description="Get hands-on experience with complete TRM setup, from master data to complex hedge accounting, with our certified training."
                buttonText="Start TRM Journey"
                buttonLink="/courses"
            />
        </div>
    );
}

