'use client';
import Link from 'next/link';

export default function SapC4cTechnicalScenariosContent() {
    return (
        <>
            <p className="text-lg text-slate-600 mb-6">
                SAP C4C (Cloud for Customer) Technical Consultants need to master various configuration and integration
                scenarios to deliver successful implementations. This guide covers the top 10 technical scenarios
                every consultant should know.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Data Migration and Integration</h2>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-4">
                <h3 className="font-bold text-blue-900 mb-2">Key Tasks:</h3>
                <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>Mass data upload using migration templates</li>
                    <li>Web Services configuration for real-time integration</li>
                    <li>OData API development for custom integrations</li>
                    <li>SAP S/4HANA and ECC integration patterns</li>
                </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Custom Fields and Adaptation</h2>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-4">
                <h3 className="font-bold text-blue-900 mb-2">Extension Scenarios:</h3>
                <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>Creating custom field extensions</li>
                    <li>Configuring screen layouts and UI adaptations</li>
                    <li>Adding custom business objects</li>
                    <li>Implementing custom code lists</li>
                </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Workflow and Approvals</h2>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 my-4">
                <h3 className="font-bold text-green-900 mb-2">Configuration Areas:</h3>
                <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>Multi-level approval workflows</li>
                    <li>Escalation rules configuration</li>
                    <li>Notification templates customization</li>
                    <li>Business rule implementation</li>
                </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Email and Communication Integration</h2>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 my-4">
                <h3 className="font-bold text-green-900 mb-2">Integration Scenarios:</h3>
                <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>Email channel configuration for sales and service</li>
                    <li>CTI (Computer Telephony Integration) setup</li>
                    <li>Social media channel integration</li>
                    <li>Chat and messaging configuration</li>
                </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Reporting and Analytics</h2>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 my-4">
                <h3 className="font-bold text-purple-900 mb-2">Report Types:</h3>
                <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>Standard report customization</li>
                    <li>Custom report development</li>
                    <li>Dashboard configuration</li>
                    <li>KPI design and implementation</li>
                    <li>SAP Analytics Cloud integration</li>
                </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. User Management and Authorization</h2>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 my-4">
                <h3 className="font-bold text-purple-900 mb-2">Security Configuration:</h3>
                <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>Role-based access control setup</li>
                    <li>Work center and view restrictions</li>
                    <li>Data access restrictions (territory, account)</li>
                    <li>SSO configuration (SAML 2.0)</li>
                </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. SDK Development (ABSL)</h2>
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 my-4">
                <h3 className="font-bold text-orange-900 mb-2">Development Skills:</h3>
                <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>ABSL (SAP's scripting language) programming</li>
                    <li>Custom logic implementation</li>
                    <li>Validation rules coding</li>
                    <li>Determination rules development</li>
                    <li>Action implementation</li>
                </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Mobile and Offline Configuration</h2>
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 my-4">
                <h3 className="font-bold text-orange-900 mb-2">Mobile Scenarios:</h3>
                <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>C4C mobile app configuration</li>
                    <li>Offline capability setup</li>
                    <li>Mobile layout customization</li>
                    <li>Push notification configuration</li>
                </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. ERP Integration Patterns</h2>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 my-4">
                <h3 className="font-bold text-slate-900 mb-2">Common Integrations:</h3>
                <div className="overflow-x-auto mt-2">
                    <table className="min-w-full border border-gray-300 text-sm">
                        <thead className="bg-slate-200">
                            <tr>
                                <th className="border px-4 py-2 text-left">Object</th>
                                <th className="border px-4 py-2 text-left">Integration Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="border px-4 py-2">Accounts</td><td className="border px-4 py-2">A2X (Account to Customer/Vendor)</td></tr>
                            <tr><td className="border px-4 py-2">Products</td><td className="border px-4 py-2">Product master replication</td></tr>
                            <tr><td className="border px-4 py-2">Opportunities</td><td className="border px-4 py-2">Sales order creation</td></tr>
                            <tr><td className="border px-4 py-2">Pricing</td><td className="border px-4 py-2">External pricing call (EPC)</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">10. Form Template Development</h2>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 my-4">
                <h3 className="font-bold text-slate-900 mb-2">Template Scenarios:</h3>
                <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>Quote form template design</li>
                    <li>Email template customization</li>
                    <li>PDF output configuration</li>
                    <li>Dynamic content insertion</li>
                </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Skills Required for C4C Technical Consultants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900">Technical Skills</h4>
                    <ul className="list-disc pl-6 text-slate-600 text-sm mt-2">
                        <li>ABSL programming</li>
                        <li>Web Services / OData</li>
                        <li>Integration patterns</li>
                        <li>XML/JSON handling</li>
                    </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-900">Functional Knowledge</h4>
                    <ul className="list-disc pl-6 text-slate-600 text-sm mt-2">
                        <li>Sales processes</li>
                        <li>Service scenarios</li>
                        <li>Marketing automation</li>
                        <li>Lead-to-cash flow</li>
                    </ul>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Career Scope in SAP C4C</h2>
            <div className="overflow-x-auto my-6">
                <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-orange-50">
                        <tr>
                            <th className="border border-gray-200 px-6 py-3 text-left font-bold text-gray-900">Role</th>
                            <th className="border border-gray-200 px-6 py-3 text-left font-bold text-gray-900">Experience</th>
                            <th className="border border-gray-200 px-6 py-3 text-left font-bold text-gray-900">Salary (India)</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr><td className="border px-6 py-3">C4C Technical Consultant</td><td className="border px-6 py-3">2-5 years</td><td className="border px-6 py-3">₹8-15 LPA</td></tr>
                        <tr className="bg-gray-50"><td className="border px-6 py-3">Senior C4C Developer</td><td className="border px-6 py-3">5-8 years</td><td className="border px-6 py-3">₹15-25 LPA</td></tr>
                        <tr><td className="border px-6 py-3">C4C Solution Architect</td><td className="border px-6 py-3">8+ years</td><td className="border px-6 py-3">₹25-40 LPA</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Master SAP C4C with ERPVITS</h3>
                <p className="text-white mb-6">Comprehensive technical training with hands-on project experience.</p>
                <div className="space-y-2 text-white">
                    <p><strong>Website:</strong> www.erpvits.com</p>
                    <p><strong>Phone:</strong> +91 84088 78222</p>
                    <p><strong>Email:</strong> info@erpvits.com</p>
                </div>
            </div>
        </>
    );
}
