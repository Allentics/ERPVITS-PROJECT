'use client';
import Link from 'next/link';

export default function SapAribaSupplierLoginContent() {
    return (
        <>
            <p className="text-lg text-slate-600 mb-6">
                SAP Ariba Network is one of the largest B2B marketplaces connecting buyers and suppliers worldwide.
                For suppliers, understanding how to properly register, log in, and navigate the Ariba portal is essential
                for successful business transactions.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What is SAP Ariba Network?</h2>
            <p className="text-slate-600 mb-6">
                SAP Ariba Network is a cloud-based procurement platform that connects millions of buyers and suppliers
                globally. It facilitates electronic transactions including purchase orders, invoices, and payments,
                streamlining the entire procure-to-pay process.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Step-by-Step SAP Ariba Supplier Registration</h2>

            <div className="space-y-6 my-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-bold text-blue-900 text-lg mb-2">Step 1: Receive Buyer Invitation Email</h3>
                    <p className="text-slate-600">
                        When a buyer wants to do business with you through Ariba, you'll receive an email invitation
                        with a unique registration link. Click the "Join Now" button to begin the registration process.
                    </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-bold text-blue-900 text-lg mb-2">Step 2: Create Your Ariba Account</h3>
                    <p className="text-slate-600 mb-2">Fill in the required information:</p>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                        <li>Company Name</li>
                        <li>Business Email Address</li>
                        <li>Password (must meet security requirements)</li>
                        <li>Company Address and Contact Information</li>
                    </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-bold text-blue-900 text-lg mb-2">Step 3: Verify Your Email</h3>
                    <p className="text-slate-600">
                        After submitting the registration form, check your email for a verification link.
                        Click the link to activate your account.
                    </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-bold text-blue-900 text-lg mb-2">Step 4: Complete Company Profile</h3>
                    <p className="text-slate-600 mb-2">Add essential business information:</p>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                        <li>Tax ID / VAT Number</li>
                        <li>DUNS Number (if applicable)</li>
                        <li>Product/Service Categories</li>
                        <li>Bank Details for Payments</li>
                        <li>Certifications and Compliance Documents</li>
                    </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-bold text-blue-900 text-lg mb-2">Step 5: Accept Trading Relationship</h3>
                    <p className="text-slate-600">
                        Once your profile is complete, accept the trading relationship request from the buyer
                        to start receiving purchase orders and conducting business.
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How to Log In to SAP Ariba Network</h2>

            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 my-6">
                <h3 className="font-bold text-orange-900 mb-4">Login Steps:</h3>
                <ol className="list-decimal pl-6 space-y-2 text-slate-600">
                    <li>Go to <strong>supplier.ariba.com</strong></li>
                    <li>Click "Log In" in the top right corner</li>
                    <li>Enter your registered email address</li>
                    <li>Enter your password</li>
                    <li>Click "Log In" button</li>
                </ol>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Key Ariba Supplier Portal Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">📄</span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Purchase Orders</h3>
                    <p className="text-slate-600 text-sm">Receive, review, and acknowledge POs electronically. Track order status in real-time.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">💰</span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Invoice Processing</h3>
                    <p className="text-slate-600 text-sm">Create and submit invoices online. Flip POs to invoices automatically.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">📊</span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Catalog Management</h3>
                    <p className="text-slate-600 text-sm">Upload and manage product catalogs. Update pricing and availability.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">📋</span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">RFx Participation</h3>
                    <p className="text-slate-600 text-sm">Respond to RFQs and RFPs. Submit competitive bids for new business.</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Common Ariba Login Issues & Solutions</h2>

            <div className="space-y-4 my-6">
                <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                    <h4 className="font-bold text-red-900 mb-2">❌ Forgot Password?</h4>
                    <p className="text-slate-600">Click "Forgot Password" on login page → Enter email → Check inbox for reset link → Create new password</p>
                </div>
                <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                    <h4 className="font-bold text-red-900 mb-2">❌ Account Locked?</h4>
                    <p className="text-slate-600">Wait 30 minutes and try again, or contact Ariba Customer Support to unlock your account.</p>
                </div>
                <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                    <h4 className="font-bold text-red-900 mb-2">❌ Multiple Account Merge?</h4>
                    <p className="text-slate-600">Contact Ariba Support to merge duplicate accounts into one primary account.</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Ariba Account Types</h2>
            <div className="overflow-x-auto my-6">
                <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-orange-50">
                        <tr>
                            <th className="border border-gray-200 px-6 py-3 text-left font-bold text-gray-900">Account Type</th>
                            <th className="border border-gray-200 px-6 py-3 text-left font-bold text-gray-900">Features</th>
                            <th className="border border-gray-200 px-6 py-3 text-left font-bold text-gray-900">Cost</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr><td className="border px-6 py-3 font-bold text-gray-700">Standard Account</td><td className="border px-6 py-3 text-gray-600">Basic transaction processing, single buyer relationship</td><td className="border px-6 py-3 text-green-600 font-bold">Free</td></tr>
                        <tr className="bg-gray-50"><td className="border px-6 py-3 font-bold text-gray-700">Enterprise Account</td><td className="border px-6 py-3 text-gray-600">Unlimited buyers, advanced analytics, catalog management</td><td className="border px-6 py-3 text-gray-600">Subscription-based</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Best Practices for Ariba Suppliers</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
                <li>Keep your company profile updated with accurate information</li>
                <li>Respond to POs promptly to maintain good buyer relationships</li>
                <li>Use strong, unique passwords and enable two-factor authentication</li>
                <li>Regularly check the portal for new RFx opportunities</li>
                <li>Set up email notifications for important events</li>
                <li>Maintain accurate catalog pricing to avoid disputes</li>
            </ul>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Learn SAP Ariba with ERPVITS</h3>
                <p className="text-gray-700 mb-4">
                    Master SAP Ariba configuration and administration with our comprehensive training program.
                </p>
                <div className="space-y-2 text-gray-700">
                    <p><strong>Website:</strong> <a href="https://www.erpvits.com" className="text-blue-600 hover:underline">www.erpvits.com</a></p>
                    <p><strong>Email:</strong> <a href="mailto:info@erpvits.com" className="text-blue-600 hover:underline">info@erpvits.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+918408878222" className="text-blue-600 hover:underline">+91 84088 78222</a></p>
                </div>
            </div>
        </>
    );
}
