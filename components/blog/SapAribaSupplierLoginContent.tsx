'use client';
import Link from 'next/link';
import BlogCTA from './BlogCTA';
import BlogCallout from './BlogCallout';

export default function SapAribaSupplierLoginContent() {
    return (
        <div className="prose prose-lg prose-slate max-w-none 
            prose-headings:text-slate-900 prose-headings:font-bold 
            prose-a:text-orange-600 hover:prose-a:text-orange-700 
            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8
            prose-p:leading-relaxed prose-p:text-slate-600
            prose-li:text-slate-600 blog-content">

            <p>
                The <strong>SAP Ariba Network</strong> is one of the largest B2B marketplaces connecting buyers and
                suppliers worldwide. For suppliers, mastering registration, login, and portal navigation is essential for
                streamlining business transactions.
            </p>

            <BlogCallout title="What is the Ariba Network?">
                It is a cloud-based platform facilitating electronic transactions including purchase orders,
                invoices, and payments for millions of global organizations.
            </BlogCallout>

            <h2>Step-by-Step Supplier Registration</h2>
            <div className="space-y-4 my-8">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="!mt-0 text-lg font-bold text-orange-600">Step 1: Invitation</h3>
                    <p className="text-sm border-0 !m-0">Receive a unique registration link via email from your buyer.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="!mt-0 text-lg font-bold text-orange-600">Step 2: Account Creation</h3>
                    <p className="text-sm border-0 !m-0">Provide company name, business email, and security credentials.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="!mt-0 text-lg font-bold text-orange-600">Step 3: Verification</h3>
                    <p className="text-sm border-0 !m-0">Activate your account through the verification link sent to your inbox.</p>
                </div>
            </div>

            <h2>How to Log In</h2>
            <p>To access your dashboard, follow these simple steps:</p>
            <ol className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <li>Visit <strong>supplier.ariba.com</strong></li>
                <li>Enter your registered email and password.</li>
                <li>Click the <strong>Log In</strong> button.</li>
            </ol>

            <h2>Key Portal Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <h4 className="!mt-0 font-bold">📄 PO Management</h4>
                    <p className="text-sm">Acknowledge and track purchase orders in real-time.</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <h4 className="!mt-0 font-bold">💰 Invoicing</h4>
                    <p className="text-sm">Flip POs directly to invoices for faster payments.</p>
                </div>
            </div>

            <h2>Conclusion</h2>
            <p>
                Effective use of the SAP Ariba supplier portal reduces manual errors and strengthens buyer-supplier
                relationships. Keeping your profile updated and responding promptly to RFIs are best practices for growth.
            </p>

            <BlogCTA
                title="Master SAP Ariba Administration"
                description="Learn the ins and outs of Ariba Network management with our expert-led training certification program."
                buttonText="Explore Ariba Training"
                buttonLink="/courses/sap-ariba-training"
            />
        </div>
    );
}

