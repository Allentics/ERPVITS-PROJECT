'use client';
import Link from 'next/link';

export default function SapFicoCashJournalContent() {
    return (
        <>
            <p className="text-lg text-slate-600 mb-6">
                The <strong>Cash Journal in SAP FICO</strong> is a powerful tool designed to record and manage petty cash
                transactions within an organization. It streamlines cash handling through a systematic approach to recording
                receipts and payments, tracking balances, and generating accurate financial reports.
            </p>

            <p className="text-slate-600 mb-6">
                If you're looking to master this feature along with other essential financial processes, our{' '}
                <Link href="/courses/sap-fico" className="text-blue-600 hover:underline">SAP FICO online training</Link>{' '}
                program provides comprehensive hands-on instruction.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Key Features of Cash Journal in SAP</h2>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">1. Simplified Cash Transactions Recording</h3>
            <p className="text-slate-600 mb-4">
                The Cash Journal in SAP is specifically designed to handle low-value cash transactions such as petty cash expenses,
                employee reimbursements, and daily cash operations. Every transaction is recorded systematically within SAP,
                minimizing errors and ensuring accurate documentation.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">2. User-Friendly Interface</h3>
            <p className="text-slate-600 mb-4">
                Unlike complex financial posting screens in SAP, the Cash Journal offers a simplified and intuitive interface
                where users can easily record transactions. This makes it ideal for cashiers and non-technical staff.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">3. Integration with Financial Accounting (FI)</h3>
            <p className="text-slate-600 mb-4">
                Each entry in the Cash Journal automatically updates the General Ledger (G/L), Accounts Payable (AP),
                and Accounts Receivable (AR) based on the transaction type.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">4. Support for Multiple Cash Journals</h3>
            <p className="text-slate-600 mb-4">
                SAP allows organizations to create multiple cash journals based on business requirements -
                separate journals for different company codes, currencies, or business units.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">5. Automatic Account Determination</h3>
            <p className="text-slate-600 mb-6">
                The system automatically identifies and assigns the appropriate General Ledger accounts when transactions
                are recorded, saving time and reducing accounting errors.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Step-by-Step Cash Journal Configuration</h2>

            <div className="space-y-6 my-6">
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-bold text-slate-900 mb-2">Step 1: Define Number Range (FBN1)</h4>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                        <li>Create unique document number series for cash journal entries</li>
                        <li>Set number ranges (e.g., 51000000-59999999)</li>
                        <li>Link number range to document type (KR - Cash Receipt, KZ - Cash Payment)</li>
                    </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-bold text-slate-900 mb-2">Step 2: Configure Document Types (OBA7)</h4>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                        <li>Define document types for cash transactions (KR, KZ, KG)</li>
                        <li>Set number range assignment, account types allowed, posting keys</li>
                        <li>Configure field status and validation rules</li>
                    </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-bold text-slate-900 mb-2">Step 3: Define Posting Keys (OB41)</h4>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                        <li>Standard Keys: 40 (Debit G/L), 50 (Credit G/L), 01 (Customer Debit), 11 (Customer Credit)</li>
                        <li>Configure field statuses and mandatory fields</li>
                    </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-bold text-slate-900 mb-2">Step 4: Configure Account Groups (OBD4)</h4>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                        <li>Define account groups for cash, bank, and petty cash accounts</li>
                        <li>Create G/L accounts (FS00) for cash management</li>
                    </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-bold text-slate-900 mb-2">Step 5: Define Tolerance Groups (OBA4)</h4>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                        <li>Set tolerance limits for cash journal postings</li>
                        <li>Maximum amount per document, payment difference tolerance</li>
                        <li>Assign tolerance groups to users (SU01)</li>
                    </ul>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Configuration T-Codes Summary</h2>
            <div className="overflow-x-auto my-6">
                <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-orange-50">
                        <tr>
                            <th className="border border-gray-200 px-6 py-3 text-left font-bold text-gray-900">T-Code</th>
                            <th className="border border-gray-200 px-6 py-3 text-left font-bold text-gray-900">Description</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr><td className="border px-6 py-3 font-bold text-orange-600">FBN1</td><td className="border px-6 py-3 text-gray-600">Create number ranges for cash journal documents</td></tr>
                        <tr className="bg-gray-50"><td className="border px-6 py-3 font-bold text-orange-600">OBA7</td><td className="border px-6 py-3 text-gray-600">Define document types (KR, KZ, KG)</td></tr>
                        <tr><td className="border px-6 py-3 font-bold text-orange-600">OBU1</td><td className="border px-6 py-3 text-gray-600">Assign number ranges to document types</td></tr>
                        <tr className="bg-gray-50"><td className="border px-6 py-3 font-bold text-orange-600">FS00</td><td className="border px-6 py-3 text-gray-600">Create G/L master data for cash/bank accounts</td></tr>
                        <tr><td className="border px-6 py-3 font-bold text-orange-600">OB41</td><td className="border px-6 py-3 text-gray-600">Configure posting keys for cash transactions</td></tr>
                        <tr className="bg-gray-50"><td className="border px-6 py-3 font-bold text-orange-600">OBA4</td><td className="border px-6 py-3 text-gray-600">Set tolerance groups for posting limits</td></tr>
                        <tr><td className="border px-6 py-3 font-bold text-orange-600">OB28</td><td className="border px-6 py-3 text-gray-600">Define validation/substitution rules</td></tr>
                        <tr className="bg-gray-50"><td className="border px-6 py-3 font-bold text-orange-600">SU01</td><td className="border px-6 py-3 text-gray-600">Assign user authorizations and tolerance groups</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Posting Rules for Cash Journal Transactions</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                    <h4 className="font-bold text-green-900 mb-2">Cash Receipts</h4>
                    <p className="text-slate-600 text-sm">Debit to cash account, Credit to customer or revenue account</p>
                </div>
                <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                    <h4 className="font-bold text-red-900 mb-2">Cash Payments</h4>
                    <p className="text-slate-600 text-sm">Credit to cash account, Debit to expense or vendor account</p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-2">Petty Cash</h4>
                    <p className="text-slate-600 text-sm">Debit to expense account, Credit to petty cash ledger</p>
                </div>
                <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
                    <h4 className="font-bold text-purple-900 mb-2">Cash Transfers</h4>
                    <p className="text-slate-600 text-sm">Entries in both cash journals with proper debit/credit</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Conclusion</h2>
            <p className="text-slate-600 mb-6">
                The <strong>Cash Journal in SAP FICO</strong> is an essential tool for managing day-to-day cash transactions
                efficiently and accurately. By mastering its configuration and usage, SAP professionals can streamline
                financial operations, enhance compliance, and deliver significant value to their organizations.
            </p>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Enroll in ERPVITS SAP FICO Training</h3>
                <p className="text-gray-700 mb-4">
                    Gain the expertise needed to excel in real-world SAP implementations with our comprehensive training program.
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
