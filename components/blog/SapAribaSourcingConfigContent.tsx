'use client';
import Link from 'next/link';
import BlogCTA from './BlogCTA';
import BlogCallout from './BlogCallout';

export default function SapAribaSourcingConfigContent() {
    return (
        <div className="prose prose-lg prose-slate max-w-none 
            prose-headings:text-slate-900 prose-headings:font-bold 
            prose-a:text-orange-600 hover:prose-a:text-orange-700 
            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8
            prose-p:leading-relaxed prose-p:text-slate-600
            prose-li:text-slate-600 blog-content">

            <p>
                <strong>SAP Ariba Sourcing</strong> is a powerful cloud-based solution for strategic sourcing,
                supplier discovery, and procurement optimization. This comprehensive guide covers the essential configuration
                and best practices for a successful implementation.
            </p>

            <BlogCallout title="System Overview">
                SAP Ariba Sourcing connects buyers with millions of suppliers on the Ariba Network, enabling collaborative
                procurement through RFQs, RFPs, and dynamic auctions.
            </BlogCallout>

            <h2>Key Configuration Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="!mt-0 text-lg font-bold">1. Organizational Setup</h3>
                    <p className="text-sm">Configure purchasing organizations, business units, and approval hierarchies.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="!mt-0 text-lg font-bold">2. User Management</h3>
                    <ul className="text-sm list-none pl-0">
                        <li>• Role-based permissions</li>
                        <li>• SSO / IdP Integration</li>
                    </ul>
                </div>
            </div>

            <h2>Sourcing Event Types</h2>
            <div className="overflow-x-auto my-6">
                <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-orange-50 font-bold">
                        <tr>
                            <th className="border border-gray-200 px-6 py-3 text-left text-gray-900">Event</th>
                            <th className="border border-gray-200 px-6 py-3 text-left text-gray-900">Use Case</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr><td className="border px-6 py-3 font-bold text-orange-600">RFQ</td><td className="border px-6 py-3 text-gray-600">Direct price comparisons and sealed bids.</td></tr>
                        <tr className="bg-gray-50"><td className="border px-6 py-3 font-bold text-orange-600">RFP</td><td className="border px-6 py-3 text-gray-600">Complex proposals with weighted scoring.</td></tr>
                        <tr><td className="border px-6 py-3 font-bold text-orange-600">Auction</td><td className="border px-6 py-3 text-gray-600">Real-time competitive bidding.</td></tr>
                    </tbody>
                </table>
            </div>

            <h2>Scoring and Award Configuration</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
                <li><strong>Price Weighting:</strong> Typically 40-60% of the total score.</li>
                <li><strong>Quality & Compliance:</strong> Certifications and history (20-30%).</li>
                <li><strong>Logistics:</strong> Lead times and delivery capabilities (10-15%).</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
                Mastering SAP Ariba Sourcing ensures that your organization discovers cost-savings while managing
                supplier risks efficiently. Proper configuration is the foundation of strategic procurement success.
            </p>

            <BlogCTA
                title="Level Up Your Ariba Expertise"
                description="Get hands-on training on complete Ariba Sourcing configuration and administration with our industry-led modules."
                buttonText="View Ariba Training"
                buttonLink="/courses/sap-ariba-training"
            />
        </div>
    );
}

