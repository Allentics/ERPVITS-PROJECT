'use client';
import Link from 'next/link';
import BlogCTA from './BlogCTA';
import BlogCallout from './BlogCallout';

export default function SapTCodesContent() {
    return (
        <div className="prose prose-lg prose-slate max-w-none 
            prose-headings:text-slate-900 prose-headings:font-bold 
            prose-a:text-orange-600 hover:prose-a:text-orange-700 
            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8
            prose-p:leading-relaxed prose-p:text-slate-600
            prose-li:text-slate-600 blog-content">

            <p>
                In the complex world of SAP ERP, transaction codes (TCodes) are the shortcuts that power professional efficiency.
                Whether you're a functional consultant, a technical developer, or a business user, mastering these shortcuts
                is essential for navigating the SAP landscape with speed and precision.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Comprehensive SAP TCode Categories</h2>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Master Data TCodes</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-slate-600">
                <li><strong>Material Master:</strong> MM01, MM02, MM03</li>
                <li><strong>Customer Master:</strong> XD01, XD02, XD03</li>
                <li><strong>Vendor Master:</strong> XK01, XK02, XK03</li>
                <li><strong>G/L Account Master:</strong> FS00, FSS0, FS04</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Transaction Processing TCodes</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-slate-600">
                <li><strong>Purchase Requisition:</strong> ME51N, ME52N, ME53N</li>
                <li><strong>Goods Receipt:</strong> MIGO, MB01</li>
                <li><strong>Invoice Verification:</strong> MIRO</li>
                <li><strong>Sales Order:</strong> VA01, VA02, VA03</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Reporting TCodes</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-slate-600">
                <li><strong>Financial Statements:</strong> F.01, S_E38, F.03</li>
                <li><strong>Material Reports:</strong> MB52, MB53</li>
                <li><strong>Vendor Reports:</strong> FK10N, FKL0N</li>
                <li><strong>Customer Reports:</strong> FD10N, FD10N</li>
            </ul>

            <BlogCallout title="Expert Tip">
                Use <strong>/N</strong> followed by a TCode to open it in the same window, or <strong>/O</strong> to open it in a new window. This simple trick saves hours of navigation over time.
            </BlogCallout>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Complete SAP TCodes Module Overview</h2>

            <div className="overflow-x-auto my-6">
                <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-orange-50 font-bold">
                        <tr>
                            <th className="border border-gray-200 px-6 py-3 text-left text-gray-900">Module</th>
                            <th className="border border-gray-200 px-6 py-3 text-left text-gray-900">Transaction Codes</th>
                            <th className="border border-gray-200 px-6 py-3 text-left text-gray-900">Key Areas</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr>
                            <td className="border border-gray-200 px-6 py-3 font-bold text-orange-600">Basis & Admin</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">35</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">User Mgmt, Monitoring</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-200 px-6 py-3 font-bold text-orange-600">Materials Mgmt (MM)</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">31</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">Procurement, Inventory</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-6 py-3 font-bold text-orange-600">Finance (FI)</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">28</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">GL, AP, AR, Assets</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* PDF Download Section - Keeping its unique style but refining */}
            <div className="my-10 p-8 bg-slate-900 rounded-2xl text-center shadow-lg">
                <div className="flex justify-center mb-4">
                    <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 !mt-0">Download Complete SAP TCodes List</h3>
                <p className="text-slate-300 mb-6">Get instant access to 238+ SAP transaction codes in PDF format</p>
                <a
                    href="/downloads/sap-tcodes-list.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors no-underline"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download SAP TCodes PDF
                </a>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Top 10 Most Used SAP Transaction Codes</h2>
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-slate-600">
                <li><strong className="text-orange-600">VA01</strong> - Create Sales Order (SD)</li>
                <li><strong className="text-orange-600">ME21N</strong> - Create Purchase Order (MM)</li>
                <li><strong className="text-orange-600">MIGO</strong> - Post Goods Movement (MM)</li>
                <li><strong className="text-orange-600">VL01N</strong> - Create Outbound Delivery (SD)</li>
                <li><strong className="text-orange-600">VF01</strong> - Create Billing Document (SD)</li>
                <li><strong className="text-orange-600">MD01</strong> - MRP Run (PP)</li>
                <li><strong className="text-orange-600">CO01</strong> - Create Production Order (PP)</li>
                <li><strong className="text-orange-600">SE38</strong> - ABAP Editor (ABAP)</li>
                <li><strong className="text-orange-600">SM36</strong> - Define Background Job (Basis)</li>
                <li><strong className="text-orange-600">SU01</strong> - User Maintenance (Basis)</li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Benefits Of Using SAP Transaction Codes</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
                <li><strong>Increased Productivity:</strong> The efficiency gained by avoiding unnecessary menu searches</li>
                <li><strong>Faster Navigation:</strong> Direct access to any function within seconds</li>
                <li><strong>Standardization:</strong> TCodes work consistently across all SAP installations</li>
            </ul>

            <BlogCTA
                title="Master SAP Transaction Codes with Expert Training"
                description="Our comprehensive training programs cover all essential TCodes with hands-on practice in live SAP environments."
                buttonText="Explore SAP Courses"
                buttonLink="/courses"
            />
        </div>
    );
}

