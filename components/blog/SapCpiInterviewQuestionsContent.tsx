'use client';
import Link from 'next/link';

export default function SapCpiInterviewQuestionsContent() {
    return (
        <>
            <p className="text-lg text-slate-600 mb-6">
                SAP CPI (Cloud Platform Integration) is becoming essential for enterprises moving to the cloud.
                This comprehensive guide covers the most frequently asked interview questions from basic to advanced level.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Basic SAP CPI Interview Questions</h2>

            <div className="space-y-6 my-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-bold text-blue-900 mb-2">Q1: What is SAP CPI?</h3>
                    <p className="text-slate-600">SAP Cloud Platform Integration (CPI) is a cloud-based integration platform that enables organizations to integrate cloud and on-premise applications, processes, and data. It's part of SAP Business Technology Platform (BTP).</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-bold text-blue-900 mb-2">Q2: What are the key components of SAP CPI?</h3>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                        <li><strong>Integration Flows:</strong> Define the message processing logic</li>
                        <li><strong>Adapters:</strong> Connect to different systems (HTTP, SFTP, SOAP, OData, etc.)</li>
                        <li><strong>Message Mappings:</strong> Transform data between formats</li>
                        <li><strong>Security Artifacts:</strong> Certificates, credentials, and secure parameters</li>
                    </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-bold text-blue-900 mb-2">Q3: What is an Integration Flow (iFlow)?</h3>
                    <p className="text-slate-600">An iFlow is a graphical representation of the integration logic. It defines how messages are received, processed, and sent to target systems. iFlows contain steps like content modifier, splitter, filter, and router.</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-bold text-blue-900 mb-2">Q4: What adapters are available in SAP CPI?</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {['HTTP', 'HTTPS', 'SOAP', 'REST', 'OData', 'SFTP', 'IDoc', 'RFC', 'AMQP', 'Kafka', 'Mail', 'JDBC'].map((adapter) => (
                            <span key={adapter} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">{adapter}</span>
                        ))}
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Intermediate SAP CPI Questions</h2>

            <div className="space-y-6 my-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="font-bold text-green-900 mb-2">Q5: Explain Content Modifier in CPI</h3>
                    <p className="text-slate-600">Content Modifier allows you to modify message headers, properties, and body. You can set, remove, or change values dynamically during message processing. It's one of the most used components in iFlows.</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="font-bold text-green-900 mb-2">Q6: What is the difference between Headers and Properties?</h3>
                    <div className="overflow-x-auto mt-2">
                        <table className="min-w-full border border-gray-300 text-sm">
                            <thead className="bg-green-100">
                                <tr>
                                    <th className="border px-4 py-2 text-left">Headers</th>
                                    <th className="border px-4 py-2 text-left">Properties</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border px-4 py-2">Sent to external systems</td><td className="border px-4 py-2">Stay within the iFlow</td></tr>
                                <tr><td className="border px-4 py-2">Part of HTTP request/response</td><td className="border px-4 py-2">Used for internal processing</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="font-bold text-green-900 mb-2">Q7: How do you handle errors in SAP CPI?</h3>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                        <li><strong>Exception Subprocess:</strong> Handle errors within the flow</li>
                        <li><strong>Error End Event:</strong> Terminate and log errors</li>
                        <li><strong>Try-Catch pattern:</strong> Wrap operations in exception handling</li>
                        <li><strong>Alert notification:</strong> Send email/alerts on failure</li>
                    </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="font-bold text-green-900 mb-2">Q8: What are Externalized Parameters?</h3>
                    <p className="text-slate-600">Externalized parameters allow you to configure integration flows without modifying the design. Values like endpoints, credentials, and file paths can be changed during deployment, making flows portable across environments.</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Advanced SAP CPI Questions</h2>

            <div className="space-y-6 my-6">
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h3 className="font-bold text-purple-900 mb-2">Q9: Explain Groovy Script usage in CPI</h3>
                    <p className="text-slate-600 mb-2">Groovy scripts extend CPI capabilities for complex transformations. Use cases include:</p>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                        <li>Complex data transformations</li>
                        <li>Custom validations and business logic</li>
                        <li>Dynamic endpoint construction</li>
                        <li>XML/JSON manipulation</li>
                        <li>Accessing external variables and headers</li>
                    </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h3 className="font-bold text-purple-900 mb-2">Q10: What is XSLT Mapping?</h3>
                    <p className="text-slate-600">XSLT (Extensible Stylesheet Language Transformations) is used for XML-to-XML transformations. It's powerful for complex structural changes, conditional logic, and templating in message transformations.</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h3 className="font-bold text-purple-900 mb-2">Q11: How does CPI connect to on-premise systems?</h3>
                    <p className="text-slate-600 mb-2">CPI uses SAP Cloud Connector to establish secure connections to on-premise systems:</p>
                    <ul className="list-disc pl-6 text-slate-600 space-y-1">
                        <li>Install Cloud Connector in your network</li>
                        <li>Configure virtual hosts and ports</li>
                        <li>Map on-premise URLs to virtual addresses</li>
                        <li>Use HTTP Destination in CPI to connect</li>
                    </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h3 className="font-bold text-purple-900 mb-2">Q12: Explain Message Processing Log (MPL)</h3>
                    <p className="text-slate-600">MPL provides detailed tracing and monitoring of message processing. You can view timestamps, payloads, headers, and processing steps. Log levels include Trace, Debug, Info, Warn, and Error.</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Scenario-Based Questions</h2>

            <div className="space-y-6 my-6">
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <h3 className="font-bold text-orange-900 mb-2">Q13: How would you integrate SAP S/4HANA with Salesforce?</h3>
                    <p className="text-slate-600 mb-2">Possible approach:</p>
                    <ol className="list-decimal pl-6 text-slate-600 space-y-1">
                        <li>Use OData adapter to connect to S/4HANA</li>
                        <li>Create mapping to transform data structure</li>
                        <li>Use HTTP adapter with OAuth 2.0 for Salesforce</li>
                        <li>Implement error handling and retry logic</li>
                        <li>Set up monitoring and alerting</li>
                    </ol>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <h3 className="font-bold text-orange-900 mb-2">Q14: How do you implement idempotency in CPI?</h3>
                    <p className="text-slate-600">Use the Idempotent Process Call adapter or maintain a datastore to track processed message IDs. This prevents duplicate processing when the same message is received multiple times.</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Tips for CPI Interviews</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
                <li>Practice building iFlows in a trial CPI tenant</li>
                <li>Understand REST vs SOAP integration patterns</li>
                <li>Learn Groovy basics for custom scripting</li>
                <li>Know OAuth 2.0 and certificate-based authentication</li>
                <li>Be familiar with monitoring and troubleshooting tools</li>
                <li>Prepare real-world integration scenarios you've worked on</li>
            </ul>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Master SAP CPI with ERPVITS</h3>
                <p className="text-white mb-6">Get hands-on training with real integration scenarios and expert guidance.</p>
                <div className="space-y-2 text-white">
                    <p><strong>Website:</strong> www.erpvits.com</p>
                    <p><strong>Phone:</strong> +91 84088 78222</p>
                    <p><strong>Email:</strong> info@erpvits.com</p>
                </div>
            </div>
        </>
    );
}
