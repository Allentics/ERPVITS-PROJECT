'use client';
import Link from 'next/link';
import BlogCTA from './BlogCTA';
import BlogCallout from './BlogCallout';

export default function SapFicoCashJournalContent() {
    return (
        <div className="prose prose-lg prose-slate max-w-none 
            prose-headings:text-slate-900 prose-headings:font-bold 
            prose-a:text-orange-600 hover:prose-a:text-orange-700 
            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8
            prose-p:leading-relaxed prose-p:text-slate-600
            prose-li:text-slate-600 blog-content">

            <p>
                The <strong>Cash Journal in SAP FICO</strong> is a powerful tool designed to record and manage petty cash
                transactions within an organization. It streamlines cash handling through a systematic approach to recording
                receipts and payments, tracking balances, and generating accurate financial reports.
            </p>

            <BlogCallout title="Expert Guide">
                If you're looking to master this feature along with other essential financial processes, our SAP FICO training
                program provides comprehensive hands-on instruction.
            </BlogCallout>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Key Features of Cash Journal in SAP</h2>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">1. Simplified Cash Transactions Recording</h3>
            <p>
                The Cash Journal in SAP is specifically designed to handle low-value cash transactions such as petty cash expenses,
                employee reimbursements, and daily cash operations. Every transaction is recorded systematically within SAP,
                minimizing errors and ensuring accurate documentation.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">2. User-Friendly Interface</h3>
            <p>
                Unlike complex financial posting screens in SAP, the Cash Journal offers a simplified and intuitive interface
                where users can easily record transactions. This makes it ideal for cashiers and non-technical staff.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">3. Integration with Financial Accounting (FI)</h3>
            <p>
                Each entry in the Cash Journal automatically updates the General Ledger (G/L), Accounts Payable (AP),
                and Accounts Receivable (AR) based on the transaction type.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Step-by-Step Cash Journal Configuration</h2>

            <div className="space-y-6 my-6">
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-bold text-slate-900 mb-2">Step 1: Define Number Range (FBN1)</h4>
                    <p className="text-sm">Create unique document number series for cash journal entries and link them to document types like KR or KZ.</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-bold text-slate-900 mb-2">Step 2: Configure Document Types (OBA7)</h4>
                    <p className="text-sm">Define document types for cash transactions (KR, KZ, KG) and set account types allowed.</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Configuration T-Codes Summary</h2>
            <div className="overflow-x-auto my-6">
                <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-orange-50 font-bold">
                        <tr>
                            <th className="border border-gray-200 px-6 py-3 text-left text-gray-900">T-Code</th>
                            <th className="border border-gray-200 px-6 py-3 text-left text-gray-900">Description</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr><td className="border px-6 py-3 font-bold text-orange-600">FBN1</td><td className="border px-6 py-3 text-gray-600">Document number ranges</td></tr>
                        <tr className="bg-gray-50"><td className="border px-6 py-3 font-bold text-orange-600">OBA7</td><td className="border px-6 py-3 text-gray-600">Define document types</td></tr>
                        <tr><td className="border px-6 py-3 font-bold text-orange-600">FS00</td><td className="border px-6 py-3 text-gray-600">G/L master data creation</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Posting Rules for Transactions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">Cash Receipts</h4>
                    <p className="text-sm">Debit to cash account, Credit to customer or revenue.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">Cash Payments</h4>
                    <p className="text-sm">Credit to cash account, Debit to expense or vendor.</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Conclusion</h2>
            <p>
                The <strong>Cash Journal in SAP FICO</strong> is an essential tool for managing day-to-day cash transactions
                efficiently and accurately. By mastering its configuration and usage, SAP professionals can streamline
                financial operations and enhance compliance.
            </p>

            <BlogCTA
                title="Master SAP FICO with Industry Experts"
                description="Gain the expertise needed to excel in real-world SAP implementations with our comprehensive training program."
                buttonText="Enroll Now"
                buttonLink="/courses/sap-fico"
            />
        </div>
    );
}

