import Link from 'next/link';
import { Briefcase, BarChart, Users, Target } from 'lucide-react';

export default function CorporateTrainingPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* Hero */}
            <div className="bg-slate-900 text-white py-24 lg:py-32 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Empower Your Workforce with <span className="text-blue-400">SAP Excellence</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Customized corporate training solutions designed to upskill your teams,
                            optimize business processes, and drive digital transformation.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
                        >
                            Get a Corporate Quote
                        </Link>
                    </div>
                </div>
            </div>

            {/* Offerings */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Corporate Training Solutions</h2>
                        <p className="mt-4 text-lg text-gray-600">Tailored programs to meet your organization's specific needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors group">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                                <Briefcase className="h-6 w-6 text-blue-600 group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Curriculum</h3>
                            <p className="text-gray-600 text-sm">Training modules designed around your industry verticals and business processes.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors group">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                                <Users className="h-6 w-6 text-blue-600 group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Delivery</h3>
                            <p className="text-gray-600 text-sm">On-site, virtual, or hybrid training options to suit your team's schedule.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors group">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                                <Target className="h-6 w-6 text-blue-600 group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Skill Assessment</h3>
                            <p className="text-gray-600 text-sm">Pre and post-training assessments to measure ROI and skill gap closure.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors group">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                                <BarChart className="h-6 w-6 text-blue-600 group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Project Mentoring</h3>
                            <p className="text-gray-600 text-sm">Expert guidance on live projects to ensure successful implementation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-blue-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Partner with ERPVITS</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Join hundreds of companies that trust us for their SAP training needs.
                        Let's discuss how we can help your team succeed.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/all-courses"
                            className="px-8 py-3 bg-white text-blue-600 font-bold border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            View Catalog
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
