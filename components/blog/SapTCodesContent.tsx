'use client';
import Link from 'next/link';

export default function SapTCodesContent() {
    return (
        <>
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

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">System Administration TCodes</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-slate-600">
                <li><strong>User Administration:</strong> SU01, SU10</li>
                <li><strong>Role Management:</strong> PFCG</li>
                <li><strong>Transport Management:</strong> SE09, SE10</li>
                <li><strong>System Monitoring:</strong> SM21, ST22</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Complete SAP TCodes Module Overview</h2>

            <div className="overflow-x-auto my-6">
                <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-orange-50">
                        <tr>
                            <th className="border border-gray-200 px-6 py-3 text-left font-bold text-gray-900">Module</th>
                            <th className="border border-gray-200 px-6 py-3 text-left font-bold text-gray-900">Transaction Codes</th>
                            <th className="border border-gray-200 px-6 py-3 text-left font-bold text-gray-900">Key Areas</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr>
                            <td className="border border-gray-200 px-6 py-3 font-bold text-orange-600">Basis & Administration</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">35</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">User Management, System Monitoring, Transport</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-200 px-6 py-3 font-bold text-orange-600">Materials Management (MM)</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">31</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">Procurement, Inventory, Invoice Verification</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-6 py-3 font-bold text-orange-600">Financial Accounting (FI)</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">28</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">GL, AP, AR, Asset Accounting</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-200 px-6 py-3 font-bold text-orange-600">Sales & Distribution (SD)</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">23</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">Sales Orders, Delivery, Billing, Pricing</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-6 py-3 font-bold text-orange-600">ABAP Development</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">18</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">Programming, Debugging, Dictionary</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-200 px-6 py-3 font-bold text-orange-600">Controlling (CO)</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">18</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">Cost Centers, Internal Orders, Profitability</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-6 py-3 font-bold text-orange-600">Production Planning (PP)</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">16</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">MRP, Production Orders, BOM</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-200 px-6 py-3 font-bold text-orange-600">Human Resources (HR)</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">15</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">Personnel, Payroll, Organization</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-6 py-3 font-bold text-orange-600">Plant Maintenance (PM)</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">14</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">Work Orders, Maintenance, Notifications</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-200 px-6 py-3 font-bold text-orange-600">Quality Management (QM)</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">13</td>
                            <td className="border border-gray-200 px-6 py-3 text-gray-600">Inspection, Quality Control, Batch</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* PDF Download Section */}
            <div className="my-10 p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl text-center">
                <div className="flex justify-center mb-4">
                    <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Download Complete SAP TCodes List</h3>
                <p className="text-slate-300 mb-6">Get instant access to 238+ SAP transaction codes in PDF format</p>
                <a
                    href="/downloads/sap-tcodes-list.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download SAP TCodes PDF
                </a>
                <div className="flex justify-center gap-6 mt-4 text-slate-400 text-sm">
                    <span>✓ No registration required</span>
                    <span>✓ Instant download</span>
                </div>
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
                <li><strong>Power User Benefits:</strong> Expert users can perform tasks much faster</li>
                <li><strong>Training Efficiency:</strong> Easier to teach specific functions using TCodes</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How to Find SAP Transaction Codes</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
                <li>Use <strong>SE16</strong> to browse table TSTC for all transaction codes</li>
                <li>Use <strong>/N</strong> prefix to open a TCode in the same window</li>
                <li>Use <strong>/O</strong> prefix to open a TCode in a new window</li>
                <li>Press <strong>F1</strong> on any screen to see the current TCode</li>
                <li>Use <strong>SE93</strong> to find TCode details and descriptions</li>
            </ul>

            <div className="mt-10 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Boost Your SAP Career with ERPVITS Training</h3>
                <p className="text-gray-700 mb-4">
                    Master SAP transaction codes and become an expert in your chosen SAP module.
                    Our comprehensive training programs cover all essential TCodes with hands-on practice.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link href="/courses/sap-fico" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        SAP FICO Training
                    </Link>
                    <Link href="/courses/sap-mm" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        SAP MM Training
                    </Link>
                    <Link href="/courses/sap-sd" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        SAP SD Training
                    </Link>
                </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact ERPVITS</h3>
                <div className="space-y-2 text-gray-700">
                    <p><strong>Website:</strong> <a href="https://www.erpvits.com" className="text-blue-600 hover:underline">www.erpvits.com</a></p>
                    <p><strong>Email:</strong> <a href="mailto:info@erpvits.com" className="text-blue-600 hover:underline">info@erpvits.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+918408878222" className="text-blue-600 hover:underline">+91 84088 78222</a></p>
                </div>
            </div>
        </>
    );
}
