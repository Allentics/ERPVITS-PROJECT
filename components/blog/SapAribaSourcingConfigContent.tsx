'use client';
import Link from 'next/link';

export default function SapAribaSourcingConfigContent() {
    return (
        <>
            <p className="text-lg text-slate-600 mb-6">
                SAP Ariba Sourcing is a powerful cloud-based solution for strategic sourcing, supplier discovery,
                and procurement optimization. This comprehensive guide covers the complete configuration setup
                and best practices for successful implementation.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What is SAP Ariba Sourcing?</h2>
            <p className="text-slate-600 mb-6">
                SAP Ariba Sourcing enables organizations to create, manage, and analyze sourcing events like
                RFQs (Request for Quotation), RFPs (Request for Proposal), and reverse auctions. It connects
                buyers with suppliers on the Ariba Network for collaborative procurement.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Key Configuration Areas</h2>

            <div className="space-y-6 my-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-bold text-blue-900 text-lg mb-2">1. Organizational Setup</h3>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                        <li>Configure company structure and purchasing organization</li>
                        <li>Set up business units and cost centers</li>
                        <li>Define approval hierarchies</li>
                        <li>Configure currency and language settings</li>
                    </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-bold text-blue-900 text-lg mb-2">2. User and Role Management</h3>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                        <li>Create user groups (Sourcing Managers, Buyers, Approvers)</li>
                        <li>Configure role-based permissions</li>
                        <li>Set up SSO integration with corporate IdP</li>
                        <li>Define delegate and proxy settings</li>
                    </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-bold text-green-900 text-lg mb-2">3. Sourcing Template Configuration</h3>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                        <li>Create RFQ, RFP, and Auction templates</li>
                        <li>Define questionnaire sections and scoring rules</li>
                        <li>Configure lot structures and item categories</li>
                        <li>Set up collaboration team templates</li>
                    </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-bold text-green-900 text-lg mb-2">4. Workflow Configuration</h3>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                        <li>Multi-level approval workflows</li>
                        <li>Parallel and sequential approval paths</li>
                        <li>Escalation rules and timeout actions</li>
                        <li>Email notification templates</li>
                    </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <h3 className="font-bold text-purple-900 text-lg mb-2">5. Supplier Management</h3>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                        <li>Supplier qualification questionnaires</li>
                        <li>Preferred supplier lists</li>
                        <li>Supplier performance scorecards</li>
                        <li>Risk assessment integration</li>
                    </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <h3 className="font-bold text-purple-900 text-lg mb-2">6. Integration Setup</h3>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                        <li>SAP S/4HANA integration for contracts</li>
                        <li>ERP vendor master synchronization</li>
                        <li>Catalog integration for pricing</li>
                        <li>Analytics and reporting connectors</li>
                    </ul>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Sourcing Event Types</h2>
            <div className="overflow-x-auto my-6">
                <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-orange-50">
                        <tr>
                            <th className="border border-gray-200 px-6 py-3 text-left font-bold text-gray-900">Event Type</th>
                            <th className="border border-gray-200 px-6 py-3 text-left font-bold text-gray-900">Use Case</th>
                            <th className="border border-gray-200 px-6 py-3 text-left font-bold text-gray-900">Key Features</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr>
                            <td className="border px-6 py-3 font-bold text-orange-600">RFI</td>
                            <td className="border px-6 py-3 text-gray-600">Information gathering</td>
                            <td className="border px-6 py-3 text-gray-600">Supplier discovery, market research</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border px-6 py-3 font-bold text-orange-600">RFQ</td>
                            <td className="border px-6 py-3 text-gray-600">Price quotations</td>
                            <td className="border px-6 py-3 text-gray-600">Sealed bids, price comparison</td>
                        </tr>
                        <tr>
                            <td className="border px-6 py-3 font-bold text-orange-600">RFP</td>
                            <td className="border px-6 py-3 text-gray-600">Complex proposals</td>
                            <td className="border px-6 py-3 text-gray-600">Weighted scoring, narrative responses</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border px-6 py-3 font-bold text-orange-600">Auction</td>
                            <td className="border px-6 py-3 text-gray-600">Competitive bidding</td>
                            <td className="border px-6 py-3 text-gray-600">Real-time bidding, dynamic pricing</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Best Practices for Ariba Sourcing</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                    <h4 className="font-bold text-green-900 mb-2">✓ Do</h4>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1 text-sm">
                        <li>Create standardized templates for repeat events</li>
                        <li>Define clear evaluation criteria before event launch</li>
                        <li>Use supplier qualification to pre-screen vendors</li>
                        <li>Enable collaboration features for team input</li>
                    </ul>
                </div>
                <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                    <h4 className="font-bold text-red-900 mb-2">✗ Avoid</h4>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1 text-sm">
                        <li>Launching events without clear requirements</li>
                        <li>Overly complex questionnaires that burden suppliers</li>
                        <li>Skipping supplier training on event participation</li>
                        <li>Ignoring analytics for continuous improvement</li>
                    </ul>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Scoring and Award Configuration</h2>
            <p className="text-slate-600 mb-4">Configure weighted scoring models to objectively evaluate supplier bids:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
                <li><strong>Price Score (40-60%):</strong> Total cost, unit pricing, volume discounts</li>
                <li><strong>Quality Score (20-30%):</strong> Certifications, samples, quality history</li>
                <li><strong>Delivery Score (10-15%):</strong> Lead times, logistics capability</li>
                <li><strong>Service Score (10-15%):</strong> Support, warranty, payment terms</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Post-Award Contract Creation</h2>
            <p className="text-slate-600 mb-4">After awarding a sourcing event:</p>
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-slate-600">
                <li>Generate contract document from winning bid</li>
                <li>Route for legal and compliance approval</li>
                <li>Obtain supplier e-signature</li>
                <li>Activate contract for requisitioning</li>
                <li>Set up contract compliance monitoring</li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Analytics and Reporting</h2>
            <div className="bg-slate-50 p-6 rounded-lg my-6">
                <h3 className="font-bold text-slate-900 mb-4">Key Metrics to Track:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <p className="text-2xl font-bold text-orange-600">Savings %</p>
                        <p className="text-slate-600 text-sm">Awarded vs. baseline price</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <p className="text-2xl font-bold text-blue-600">Cycle Time</p>
                        <p className="text-slate-600 text-sm">Event creation to award</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <p className="text-2xl font-bold text-green-600">Participation</p>
                        <p className="text-slate-600 text-sm">Supplier response rate</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Master SAP Ariba Sourcing with ERPVITS</h3>
                <p className="text-white mb-6">Get hands-on training on complete Ariba Sourcing configuration and administration.</p>
                <div className="space-y-2 text-white">
                    <p><strong>Website:</strong> www.erpvits.com</p>
                    <p><strong>Phone:</strong> +91 84088 78222</p>
                    <p><strong>Email:</strong> info@erpvits.com</p>
                </div>
            </div>
        </>
    );
}
