import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import BlogCallout from './BlogCallout';
import BlogCTA from './BlogCTA';

const SapFicoCashJournalContent = () => {
    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-sans text-gray-800 leading-relaxed">

            {/* Introduction */}
            <div className="mb-12">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    The <strong>Cash Journal in SAP FICO</strong> is a powerful tool designed to record and manage petty cash transactions within an organization. It streamlines cash handling through a systematic approach to recording receipts and payments, tracking balances, and generating accurate financial reports. With its user-friendly interface, businesses can ensure transparency, reduce errors, and maintain compliance with accounting standards.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    If you're looking to master this feature along with other essential financial processes, our <strong>SAP FICO online training program</strong> provides comprehensive hands-on instruction. From configuration to real-world scenarios, you'll gain the skills needed to manage financial operations efficiently and advance your SAP career.
                </p>
            </div>

            {/* Key Features */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-orange-500 inline-block pb-2">
                    Key Features of Cash Journal in SAP
                </h2>

                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-semibold mb-3 flex items-center text-orange-600">
                            1. Simplified Cash Transactions Recording
                        </h3>
                        <p className="text-gray-600">
                            The Cash Journal in SAP is specifically designed to handle low-value cash transactions such as petty cash expenses, employee reimbursements, and daily cash operations. Instead of maintaining manual registers or spreadsheets, every transaction is recorded systematically within SAP, minimizing errors and ensuring accurate documentation.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-semibold mb-3 flex items-center text-orange-600">
                            2. User-Friendly Interface
                        </h3>
                        <p className="text-gray-600">
                            Unlike complex financial posting screens in SAP, the Cash Journal offers a simplified and intuitive interface where users can easily record transactions. This makes it ideal for cashiers and non-technical staff who may not have extensive accounting knowledge, significantly speeding up the data entry process.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-semibold mb-3 flex items-center text-orange-600">
                            3. Integration with Financial Accounting (FI)
                        </h3>
                        <p className="text-gray-600">
                            One of the most powerful aspects of the Cash Journal is its tight integration with the SAP Financial Accounting (FI) module. Each entry in the Cash Journal automatically updates the General Ledger (G/L), Accounts Payable (AP), and Accounts Receivable (AR) based on the transaction type, ensuring consistent financial data across the system.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-semibold mb-3 flex items-center text-orange-600">
                            4. Support for Multiple Cash Journals
                        </h3>
                        <p className="text-gray-600">
                            SAP allows organizations to create multiple cash journals based on business requirements. For instance, you can set up separate journals for different company codes, currencies, or business units. This flexibility ensures that cash handling is organized and managed according to the organizational structure.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-semibold mb-3 flex items-center text-orange-600">
                            5. Automatic Account Determination
                        </h3>
                        <p className="text-gray-600">
                            When transactions are recorded in the Cash Journal, the system automatically identifies and assigns the appropriate General Ledger accounts. This not only saves time but also reduces the risk of accounting errors by eliminating manual account selection.
                        </p>
                    </div>
                </div>
            </section>

            {/* Importance */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-orange-500 inline-block pb-2">
                    Importance of Cash Journal in Financial Accounting
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                    The <strong>Cash Journal in SAP FICO</strong> plays a crucial role in streamlining day-to-day cash transactions within organizations. It ensures accurate financial reporting and smooth cash flow management. Key points highlighting its importance include:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-start bg-gray-50 p-4 rounded-md">
                        <div>
                            <strong className="block text-gray-900 mb-1">Efficient Management</strong>
                            <span className="text-gray-600 text-sm">Track, record, and reconcile petty cash transactions in real-time.</span>
                        </div>
                    </li>
                    <li className="flex items-start bg-gray-50 p-4 rounded-md">
                        <div>
                            <strong className="block text-gray-900 mb-1">Improved Accuracy</strong>
                            <span className="text-gray-600 text-sm">Automates posting to reduce manual effort and ensure compliance.</span>
                        </div>
                    </li>
                    <li className="flex items-start bg-gray-50 p-4 rounded-md">
                        <div>
                            <strong className="block text-gray-900 mb-1">Enhanced Financial Control</strong>
                            <span className="text-gray-600 text-sm">Better visibility into cash movements to prevent misuse.</span>
                        </div>
                    </li>
                    <li className="flex items-start bg-gray-50 p-4 rounded-md">
                        <div>
                            <strong className="block text-gray-900 mb-1">Seamless Integration</strong>
                            <span className="text-gray-600 text-sm">Seamless data flow across the finance landscape (AP, AR).</span>
                        </div>
                    </li>
                </ul>
            </section>


            {/* Configuration Flow Diagram Image */}
            <section className="my-10">
                <div className="relative w-full h-auto rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <Image
                        src="/images/step-by-step-cash-journal-sap-fico.webp"
                        alt="Step-by-Step Cash Journal Configuration Process Flow in SAP FICO"
                        width={1200}
                        height={600}
                        className="w-full object-cover"
                    />
                </div>
            </section>

            {/* Step-by-Step Configuration */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-orange-500 inline-block pb-2">
                    Step-by-Step Cash Journal Configuration in SAP FICO
                </h2>

                <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="bg-white border-l-4 border-orange-500 p-6 shadow-md rounded-r-lg">
                        <h3 className="text-xl font-bold text-orange-900 mb-3">1. Define Number Range for Cash Journal Documents</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-orange-50 p-3 rounded">
                                <span className="font-semibold text-orange-800 block text-xs uppercase tracking-wider">Transaction Code</span>
                                <span className="text-lg font-mono text-gray-800">FBN1</span>
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-700"><strong>Purpose:</strong> Create unique document number series for cash journal entries</p>
                                <p className="text-gray-700"><strong>Configuration:</strong> Set number ranges (e.g., 51000000-59999999)</p>
                                <p className="text-gray-700"><strong>Assignment:</strong> Link number range to document type (e.g., KR, KZ)</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white border-l-4 border-orange-500 p-6 shadow-md rounded-r-lg">
                        <h3 className="text-xl font-bold text-orange-900 mb-3">2. Configure Document Types</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-orange-50 p-3 rounded">
                                <span className="font-semibold text-orange-800 block text-xs uppercase tracking-wider">Transaction Code</span>
                                <span className="text-lg font-mono text-gray-800">OBA7</span>
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-700"><strong>Setup:</strong> Define document types for cash transactions (KR, KZ, KG)</p>
                                <p className="text-gray-700"><strong>Parameters:</strong> Set number range assignment, account types allowed, posting keys</p>
                                <p className="text-gray-700"><strong>Control:</strong> Configure field status and validation rules</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white border-l-4 border-orange-500 p-6 shadow-md rounded-r-lg">
                        <h3 className="text-xl font-bold text-orange-900 mb-3">3. Define Posting Keys</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-orange-50 p-3 rounded">
                                <span className="font-semibold text-orange-800 block text-xs uppercase tracking-wider">Transaction Code</span>
                                <span className="text-lg font-mono text-gray-800">OB41</span>
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-700"><strong>Purpose:</strong> Create/modify posting keys for cash transactions</p>
                                <p className="text-gray-700"><strong>Standard Keys:</strong> 40 (Debit G/L), 50 (Credit G/L), 01 (Customer Debit), 11 (Customer Credit)</p>
                                <p className="text-gray-700"><strong>Customization:</strong> Configure field statuses and mandatory fields</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-white border-l-4 border-orange-500 p-6 shadow-md rounded-r-lg">
                        <h3 className="text-xl font-bold text-orange-900 mb-3">4. Configure Account Groups and Master Data</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-orange-50 p-3 rounded">
                                <span className="font-semibold text-orange-800 block text-xs uppercase tracking-wider">Transaction Code</span>
                                <span className="text-lg font-mono text-gray-800">OBD4</span>
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-700"><strong>Setup:</strong> Define account groups for cash, bank, and petty cash accounts</p>
                                <p className="text-gray-700"><strong>Master Data:</strong> Create G/L accounts (FS00) for cash management</p>
                                <p className="text-gray-700"><strong>Field Status:</strong> Configure mandatory and optional fields</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="bg-white border-l-4 border-orange-500 p-6 shadow-md rounded-r-lg">
                        <h3 className="text-xl font-bold text-orange-900 mb-3">5. Set Up Cash Journal Business Area</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-orange-50 p-3 rounded">
                                <span className="font-semibold text-orange-800 block text-xs uppercase tracking-wider">Transaction Code</span>
                                <span className="text-lg font-mono text-gray-800">OKKP</span>
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-700"><strong>Configuration:</strong> Define business areas if required for reporting</p>
                                <p className="text-gray-700"><strong>Assignment:</strong> Link business areas to cash journal transactions</p>
                                <p className="text-gray-700"><strong>Reporting:</strong> Enable business area-wise cash flow analysis</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 6 */}
                    <div className="bg-white border-l-4 border-orange-500 p-6 shadow-md rounded-r-lg">
                        <h3 className="text-xl font-bold text-orange-900 mb-3">6. Define Tolerance Groups</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-orange-50 p-3 rounded">
                                <span className="font-semibold text-orange-800 block text-xs uppercase tracking-wider">Transaction Code</span>
                                <span className="text-lg font-mono text-gray-800">OBA4</span>
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-700"><strong>Purpose:</strong> Set tolerance limits for cash journal postings</p>
                                <p className="text-gray-700"><strong>Parameters:</strong> Maximum amount per document, payment difference tolerance</p>
                                <p className="text-gray-700"><strong>User Assignment:</strong> Assign tolerance groups to users (SU01)</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 7 */}
                    <div className="bg-white border-l-4 border-orange-500 p-6 shadow-md rounded-r-lg">
                        <h3 className="text-xl font-bold text-orange-900 mb-3">7. Configure Substitution and Validation Rules</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-orange-50 p-3 rounded">
                                <span className="font-semibold text-orange-800 block text-xs uppercase tracking-wider">Transaction Code</span>
                                <span className="text-lg font-mono text-gray-800">OB28</span>
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-700"><strong>Validation:</strong> Create business rules for data validation</p>
                                <p className="text-gray-700"><strong>Substitution:</strong> Define automatic field population rules</p>
                                <p className="text-gray-700"><strong>Control:</strong> Set up error handling and warning messages</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advantages */}
            <section className="mb-12 bg-gray-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Advantages of Using Cash Journal in SAP FICO</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg text-orange-800 mb-2">Operational Efficiency</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Single interface for multiple accounts</li>
                            <li>60-70% time savings</li>
                            <li>Built-in validation</li>
                            <li>Batch processing capabilities</li>
                        </ul>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg text-orange-800 mb-2">Enhanced User Experience</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Intuitive interface</li>
                            <li>Easy navigation</li>
                            <li>Automatic population of data</li>
                            <li>Real-time validation</li>
                        </ul>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg text-orange-800 mb-2">Improved Financial Control</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>User-specific posting limits</li>
                            <li>Complete audit trail</li>
                            <li>Multi-level approval workflows</li>
                            <li>Segregation of duties</li>
                        </ul>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg text-orange-800 mb-2">Real-Time Financial Reporting</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Immediate posting to G/L</li>
                            <li>Real-time cash position visibility</li>
                            <li>Up-to-date data for decisions</li>
                            <li>Seamless integration</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Challenges & Best Practices */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Challenges and Best Practices</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                            Challenges
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="font-bold text-gray-800 mr-2 min-w-[120px]">Manual Errors:</span>
                                <span className="text-gray-600">Incorrect entries, duplicate postings, or missing transactions.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold text-gray-800 mr-2 min-w-[120px]">Fraud Risks:</span>
                                <span className="text-gray-600">Handling physical cash without proper controls can lead to misuse.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold text-gray-800 mr-2 min-w-[120px]">Compliance:</span>
                                <span className="text-gray-600">Failure to meet audit requirements due to poor documentation.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold text-gray-800 mr-2 min-w-[120px]">Transparency:</span>
                                <span className="text-gray-600">Poor reporting makes it difficult to track daily cash movements.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                            Best Practices
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="font-bold text-gray-800 mr-2">Controls:</span>
                                <span className="text-gray-600">Restrict access and assign roles for segregation of duties.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold text-gray-800 mr-2">Automate:</span>
                                <span className="text-gray-600">Use validation rules and workflows to prevent errors.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold text-gray-800 mr-2">Reconcile:</span>
                                <span className="text-gray-600">Frequently match entries with bank balances and petty cash.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold text-gray-800 mr-2">Train:</span>
                                <span className="text-gray-600">Provide ongoing training for end-users on posting and reporting.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Document Flow */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-orange-500 inline-block pb-2">Document Flow in Cash Journal Transactions</h2>
                <div className="space-y-6">
                    <div className="flex">
                        <div className="flex-shrink-0 mr-4">
                            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">1</div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900">Document Creation Process</h4>
                            <p className="text-gray-600">Users enter transaction details in FB50, and the system assigns a document number, validates that debits equal credits, and performs mandatory field checks before posting.</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex-shrink-0 mr-4">
                            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">2</div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900">Posting Sequence</h4>
                            <p className="text-gray-600">The document header records date, currency, and reference information. Line items capture individual account postings with amounts. The system updates G/L accounts and subsidiary ledgers in real-time.</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex-shrink-0 mr-4">
                            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">3</div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900">System Updates</h4>
                            <p className="text-gray-600">Immediate posting to General Ledger accounts occurs, with automatic updates to Customer/Vendor ledgers, real-time cash position updates, and instant reflection in financial statements.</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex-shrink-0 mr-4">
                            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">4</div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900">Document Status Tracking</h4>
                            <p className="text-gray-600">Documents are marked as "posted" and locked for editing. Reversal is possible using FB08. Complete audit trails are maintained for all changes.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Posting Rules */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-orange-500 inline-block pb-2">Posting Rules for Different Cash Journal Transactions</h2>
                <p className="text-gray-600 mb-6">In SAP FICO, posting rules determine how cash transactions are recorded in the system. These rules ensure that each cash movement is properly posted to the General Ledger (G/L) for accuracy.</p>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-3 px-4 border-b text-left font-bold text-gray-700">Transaction Type</th>
                                <th className="py-3 px-4 border-b text-left font-bold text-gray-700">Rule Description</th>
                                <th className="py-3 px-4 border-b text-left font-bold text-gray-700">Example</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="py-3 px-4 font-semibold text-orange-900">Cash Receipts</td>
                                <td className="py-3 px-4 text-gray-600">Debit Cash Account, Credit Customer/Revenue Account</td>
                                <td className="py-3 px-4 text-gray-600">Customer payment: Debit Cash, Credit Customer</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 font-semibold text-orange-900">Cash Payments</td>
                                <td className="py-3 px-4 text-gray-600">Credit Cash Account, Debit Expense/Vendor Account</td>
                                <td className="py-3 px-4 text-gray-600">Vendor payment: Credit Cash, Debit Vendor</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 font-semibold text-orange-900">Petty Cash</td>
                                <td className="py-3 px-4 text-gray-600">Credit Petty Cash Account, Debit Expense Account</td>
                                <td className="py-3 px-4 text-gray-600">Office supplies: Debit Supplies, Credit Petty Cash</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 font-semibold text-orange-900">Cash Transfers</td>
                                <td className="py-3 px-4 text-gray-600">Credit Origin Account, Debit Destination Account</td>
                                <td className="py-3 px-4 text-gray-600">Main to Branch: Credit Main, Debit Branch</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Configuration T-Codes */}
            <section className="mb-12 bg-gray-50 p-8 rounded-xl border border-gray-100">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Configuration T-Codes for Cash Journal in SAP FICO</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        ['FBN1', 'Number Ranges'], ['OBA7', 'Document Types'],
                        ['OBU1', 'Assign Ranges'], ['FS00', 'G/L Master Data'],
                        ['OB41', 'Posting Keys'], ['OBA4', 'Tolerance Groups'],
                        ['OB28', 'Validation Rules'], ['OKKP', 'Business Areas']
                    ].map(([code, desc]) => (
                        <div key={code} className="bg-white p-3 rounded shadow-sm text-center">
                            <span className="block font-mono font-bold text-orange-600 text-lg">{code}</span>
                            <span className="text-xs text-gray-500 uppercase">{desc}</span>
                        </div>
                    ))}
                </div>
            </section>

            <BlogCallout title="Start Your SAP FICO Journey">
                <p className="mb-4">Master Cash Journal and other essential SAP FICO configurations with our expert-led training.</p>
                <Link href="/courses/sap-fico" className="font-bold text-orange-600 hover:text-orange-700">
                    View SAP FICO Course →
                </Link>
            </BlogCallout>

            <BlogCTA
                title="Ready to Master SAP FICO?"
                description="Enroll in ERPVITS SAP FICO online training today and gain the expertise needed to excel in real-world SAP implementations."
                buttonText="Book Free Demo"
                buttonLink="/contact"
            />

        </article>
    );
};

export default SapFicoCashJournalContent;
