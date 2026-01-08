'use client';
import Link from 'next/link';
import BlogCTA from './BlogCTA';
import BlogCallout from './BlogCallout';

export default function SapCpiInterviewQuestionsContent() {
    return (
        <div className="prose prose-lg prose-slate max-w-none 
            prose-headings:text-slate-900 prose-headings:font-bold 
            prose-a:text-orange-600 hover:prose-a:text-orange-700 
            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8
            prose-p:leading-relaxed prose-p:text-slate-600
            prose-li:text-slate-600 blog-content">

            <p>
                <strong>SAP CPI (Cloud Integration)</strong> is the backbone of modern SAP landscapes. As enterprises
                migrate to SAP BTP, the demand for skilled integration experts is skyrocketing. This guide covers the
                essential interview questions to help you ace your next technical round.
            </p>

            <BlogCallout title="Preparation Tip">
                Focus on <strong>iFlow design patterns</strong>, <strong>exception handling</strong>, and <strong>Cloud Connector</strong>
                setup, as these are the most tested areas in senior roles.
            </BlogCallout>

            <h2>Core Interview Questions</h2>
            <div className="space-y-6 my-8">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="!mt-0 text-lg font-bold">Q1: What is SAP CPI?</h3>
                    <p className="text-sm">It is a cloud-native integration platform (iPaaS) within SAP BTP that connects cloud and on-premise applications seamlessly.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="!mt-0 text-lg font-bold">Q2: Explain the Role of Groovy Scripts.</h3>
                    <p className="text-sm">Groovy is used to implement custom logic that standard components can't handle, such as complex payload manipulations or dynamic header settings.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="!mt-0 text-lg font-bold">Q3: How do you handle Errors in CPI?</h3>
                    <p className="text-sm">Using <strong>Exception Subprocesses</strong> to catch failures and send notifications or perform automated retries.</p>
                </div>
            </div>

            <h2>Essential Adapters</h2>
            <div className="flex flex-wrap gap-3 my-6">
                {['OData', 'SOAP', 'HTTP', 'SFTP', 'IDoc', 'RFC', 'AMQP', 'Kafka'].map((adapter) => (
                    <span key={adapter} className="px-4 py-2 bg-orange-50 text-orange-700 rounded-lg border border-orange-100 font-bold text-sm">
                        {adapter}
                    </span>
                ))}
            </div>

            <h2>CPI Deployment Best Practices</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Externalization:</strong> Always externalize URLs and credentials for environment portability.</li>
                <li><strong>Security:</strong> Use OAuth 2.0 or Client Certificate authentication over Basic Auth.</li>
                <li><strong>Trace Level:</strong> Keep logging at 'Info' or 'Error' in production to avoid performance overhead.</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
                Mastering SAP CPI requires hands-on experience with diverse integration scenarios. Use these questions
                as a foundation to deepen your technical understanding of the BTP Integration Suite.
            </p>

            <BlogCTA
                title="Ace Your CPI Interview"
                description="Get expert-led training on SAP BTP Integration Suite with real-time projects and placement assistance."
                buttonText="View CPI Course"
                buttonLink="/courses"
            />
        </div>
    );
}

