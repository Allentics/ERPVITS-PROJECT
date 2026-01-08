'use client';
import Link from 'next/link';
import BlogCTA from './BlogCTA';
import BlogCallout from './BlogCallout';

export default function SapSdProcessFlowContent() {
    return (
        <div className="prose prose-lg prose-slate max-w-none 
            prose-headings:text-slate-900 prose-headings:font-bold 
            prose-a:text-orange-600 hover:prose-a:text-orange-700 
            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8
            prose-p:leading-relaxed prose-p:text-slate-600
            prose-li:text-slate-600 blog-content">

            <p>
                Streamlining your sales and distribution operations is important for your success in today's business world.
                Using the <strong>SAP SD (Sales and Distribution)</strong> module helps your business efficiently manage customer relationships,
                sales orders and delivery logistics, and order-to-cash processes.
            </p>

            <p>
                This guide aims to provide an overview of the SAP sales and distribution process flow by explaining the
                components of the SAP SD module and helping you understand the flow of transactions from an order inquiry
                all the way to payment.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What is SAP SD (Sales and Distribution)?</h2>
            <p>
                SAP SD is the SAP ERP's core functional module responsible for all sales and distribution activities
                accomplished from the first customer contact to order processing, fulfillment, shipment, billing, and payment collection.
            </p>

            <BlogCallout title="Key Integration">
                The SD module integrates with several other SAP modules like <strong>SAP MM</strong> (Materials Management), <strong>SAP FI</strong> (Financial Accounting),
                <strong>SAP PP</strong> (Production Planning), and <strong>SAP QM</strong> (Quality Management), enhancing cross-departmental coordination.
            </BlogCallout>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Complete SAP Sales and Distribution Process Flow</h2>
            <p>
                The SAP Sales and Distribution Process Flow contains multiple stages and interconnections. Let's analyze each step:
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">1. Pre-Sales Activities</h3>
            <h4 className="text-lg font-semibold text-orange-600 mt-4 mb-2">Customer Inquiry (VA11)</h4>
            <p>
                A sales process begins when a customer shows interest. Sales personnel record requirements in the system using transaction <strong>VA11</strong>.
            </p>

            <h4 className="text-lg font-semibold text-orange-600 mt-4 mb-2">Quotation (VA21)</h4>
            <p>
                After an inquiry, a company formalizes a quotation with product specifications and terms of delivery using <strong>VA21</strong>.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">2. Sales Order Processing (VA01)</h3>
            <p>
                The SAP SD flow starts with creating sales orders. Upon order execution, the system performs several crucial tasks:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
                <li><strong>Credit Check:</strong> Ensures the customer is within their credit limit.</li>
                <li><strong>ATP Check:</strong> Verifies material availability in real-time.</li>
                <li><strong>Pricing:</strong> Automatically applies discounts, taxes, and conditions.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">3. Delivery Processing (VL01N)</h3>
            <p>
                The delivery phase begins with a delivery document (<strong>VL01N</strong>), which starts the picking process from the warehouse.
            </p>

            <BlogCallout title="Goods Issue (VL02N)">
                SAP records a goods issue when the physical item leaves the warehouse. This reduces inventory and automatically posts the <strong>Cost of Goods Sold (COGS)</strong> to accounting.
            </BlogCallout>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">4. Billing and Invoicing (VF01)</h3>
            <p>
                The billing document (invoice) is created using <strong>VF01</strong>. Invoices can be created for complete, partial, or multiple deliveries.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">5. Payment and Settlement</h3>
            <p>
                The final step is capturing customer payment in <strong>SAP FI</strong> using transaction <strong>F-28</strong>.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Visual Representation of SAP SD Flow</h2>
            <div className="bg-slate-900 text-slate-100 p-8 rounded-2xl my-8 font-mono text-xs sm:text-sm">
                <div className="flex flex-wrap items-center justify-center gap-4 text-center">
                    <div className="bg-orange-500/20 p-2 rounded border border-orange-500/30 text-orange-400">Inquiry</div>
                    <span className="text-slate-500">→</span>
                    <div className="bg-orange-500/20 p-2 rounded border border-orange-500/30 text-orange-400">Quotation</div>
                    <span className="text-slate-500">→</span>
                    <div className="bg-orange-500/20 p-2 rounded border border-orange-500/30 text-orange-400">Sales Order</div>
                    <span className="text-slate-500">→</span>
                    <div className="bg-orange-500/20 p-2 rounded border border-orange-500/30 text-orange-400">Delivery</div>
                    <span className="text-slate-500">→</span>
                    <div className="bg-orange-500/20 p-2 rounded border border-orange-500/30 text-orange-400">Billing</div>
                    <span className="text-slate-500">→</span>
                    <div className="bg-orange-500/20 p-2 rounded border border-orange-500/30 text-orange-400">Payment</div>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Advanced Features in SAP SD Workflow</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">Credit Management</h4>
                    <p className="text-sm">Automatically performs credit limit checks at Order Entry, Delivery, and Billing stages.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">Availability Check (ATP)</h4>
                    <p className="text-sm">Assessing current availability, considering expected items, and factoring in production.</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Conclusion</h2>
            <p>
                The SAP SD workflow is designed to optimize the management of the order-to-cash cycle.
                Mastering these processes is essential for any SAP professional working in sales and logistics.
            </p>

            <BlogCTA
                title="Master SAP SD with Industry Experts"
                description="Specializing in SAP SD training and optimization. Join our hands-on course to learn the complete order-to-cash cycle."
                buttonText="Start SAP SD Training"
                buttonLink="/courses/sap-sd"
            />
        </div>
    );
}

