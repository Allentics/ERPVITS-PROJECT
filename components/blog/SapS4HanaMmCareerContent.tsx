'use client';
import Link from 'next/link';
import BlogCTA from './BlogCTA';
import BlogCallout from './BlogCallout';

export default function SapS4HanaMmCareerContent() {
    return (
        <div className="prose prose-lg prose-slate max-w-none 
            prose-headings:text-slate-900 prose-headings:font-bold 
            prose-a:text-orange-600 hover:prose-a:text-orange-700 
            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8
            prose-p:leading-relaxed prose-p:text-slate-600
            prose-li:text-slate-600 blog-content">

            <p>
                <strong>SAP S/4HANA MM (Materials Management)</strong> is the most sought-after functional module in the SAP space.
                As businesses worldwide migrate from legacy SAP ECC systems to S/4HANA, the demand for MM professionals
                has reached an all-time high.
            </p>

            <BlogCallout title="Industry Insight">
                SAP S/4HANA MM isn't just about procurement; it's the heart of the digital supply chain,
                integrating seamlessly with Finance, Production, and Logistics.
            </BlogCallout>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Core Functional Areas</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
                <li>Purchasing and strategic procurement</li>
                <li>Digital Inventory Management</li>
                <li>Material and Vendor Master Data</li>
                <li>Automated Invoice Verification</li>
                <li>Consumption-based Planning</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Salary Scope in India</h2>
            <div className="overflow-x-auto my-6">
                <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-orange-50 font-bold">
                        <tr>
                            <th className="border border-gray-200 px-6 py-3 text-left text-gray-900">Experience</th>
                            <th className="border border-gray-200 px-6 py-3 text-left text-gray-900">Salary Range (INR)</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr><td className="border px-6 py-3 font-bold text-orange-600">Fresher</td><td className="border px-6 py-3 text-gray-600">₹4 – 7 LPA</td></tr>
                        <tr className="bg-gray-50"><td className="border px-6 py-3 font-bold text-orange-600">3–5 Years</td><td className="border px-6 py-3 text-gray-600">₹8 – 15 LPA</td></tr>
                        <tr><td className="border px-6 py-3 font-bold text-orange-600">Senior Lead</td><td className="border px-6 py-3 text-gray-600">₹18 – 30+ LPA</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Who Should Learn SAP S/4HANA MM?</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
                <li>Graduates (B.Com, BBA, MBA, Engineering)</li>
                <li>Supply Chain and Procurement professionals</li>
                <li>Existing SAP ECC consultants looking to upgrade</li>
                <li>Logistics and Warehouse managers</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Conclusion</h2>
            <p>
                A career in SAP S/4HANA MM offer stability, high growth, and global opportunities.
                With the right training and certification, you can position yourself at the forefront of the ERP industry.
            </p>

            <BlogCTA
                title="Launch Your SAP S/4HANA MM Career"
                description="Master the core of materials management with our industrial-grade training program."
                buttonText="Start Now"
                buttonLink="/courses/sap-mm"
            />
        </div>
    );
}

