
import React from 'react';
import { CheckCircle, Globe, Users, Award, Clock, Laptop, BookOpen, Target, Rocket, Phone, PlayCircle, Award as CertificateIcon, Server, TrendingUp, Smile } from 'lucide-react';
import { Metadata } from 'next';
import AboutTeamImage from '@/components/AboutTeamImage';

export const metadata: Metadata = {
    title: 'About ERPVITS | Empowering Careers with SAP Training',
    description: 'Learn about ERPVITS, a global leader in SAP online training. Our mission is to empower professionals with expert-led courses and real-world project experience.',
    alternates: {
        canonical: 'https://www.erpvits.com/about',
    },
};

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-100 text-slate-900 pt-16 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/10 transform skew-x-12 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-500/10 transform -skew-x-12 blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight text-slate-900">
                                Empower Your Careers with Leading <br className="hidden md:block" /> SAP Online Training Courses.
                            </h1>
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                At ERPVITS, we have one reason, one goal: to Empower Minds and change careers. As providers of "SAP online training courses", we create a platform between aspirations and proficiencies by providing skills for growth in the ever-evolving ERP world.
                            </p>
                            <p className="text-base text-slate-600 leading-relaxed">
                                Founded by veterans of the industry, ERPVITS courses on SAP are infused with decades of value-based experience in SAP implementation, the new learning methodologies, and skills to provide very high-class training in SAP Ariba, SAP TRM, S/4HANA MM, SAP FICO HANA, and several others.
                            </p>
                        </div>
                        <div className="relative">
                            <AboutTeamImage />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits & Journey Split Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Left Column: Benefits Accordion */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">
                                How SAP Online Training From ERPVITS Could Be Beneficial?
                            </h2>
                            <div className="w-12 h-1 bg-orange-500 mb-8"></div>

                            <div className="space-y-4">
                                {/* Accordion Item 1 */}
                                <div className="border border-slate-200 rounded-lg overflow-hidden">
                                    <details className="group" open>
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 bg-white text-slate-800 hover:bg-slate-50">
                                            <span>Master SAP Technology with Ease</span>
                                            <span className="transition group-open:rotate-45">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 12h12" /><path d="M12 18V6" /></svg>
                                            </span>
                                        </summary>
                                        <div className="text-slate-600 p-4 pt-0 border-t border-slate-100">
                                            Yes, it's one of those SAP things whereby it's not actually complicated! The best SAP online courses make detailed modules such as SAP S/4HANA MM, SAP TRM, and SAP Ariba easier with hands-on server, real-world projects, and mentor guidance. These courses will take you from novice to expert.
                                        </div>
                                    </details>
                                </div>

                                {/* Accordion Item 2 */}
                                <div className="border border-slate-200 rounded-lg overflow-hidden">
                                    <details className="group" open>
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 bg-white text-slate-800 hover:bg-slate-50">
                                            <span>Learn from Top SAP Consultants</span>
                                            <span className="transition group-open:rotate-45">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 12h12" /><path d="M12 18V6" /></svg>
                                            </span>
                                        </summary>
                                        <div className="text-slate-600 p-4 pt-0 border-t border-slate-100">
                                            Learning from certified professionals with 10+ years of experience or more in project implementation, process optimization, and alignment with the business needs.
                                        </div>
                                    </details>
                                </div>

                                {/* Accordion Item 3 */}
                                <div className="border border-slate-200 rounded-lg overflow-hidden">
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 bg-white text-slate-800 hover:bg-slate-50">
                                            <span>Get SAP Online Course with Certificate</span>
                                            <span className="transition group-open:rotate-45">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 12h12" /><path d="M12 18V6" /></svg>
                                            </span>
                                        </summary>
                                        <div className="text-slate-600 p-4 pt-0 border-t border-slate-100">
                                            An SAP Online Course with Certificate Accepted by Employers around the Globe. The Course Will Be Extremely Relevant with Recent Developments at SAP, So You Will Be Updated Whenever There Is a Technological Upgrade.
                                        </div>
                                    </details>
                                </div>

                                {/* Accordion Item 4 */}
                                <div className="border border-slate-200 rounded-lg overflow-hidden">
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 bg-white text-slate-800 hover:bg-slate-50">
                                            <span>A Flexible 24/7 Learning</span>
                                            <span className="transition group-open:rotate-45">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 12h12" /><path d="M12 18V6" /></svg>
                                            </span>
                                        </summary>
                                        <div className="text-slate-600 p-4 pt-0 border-t border-slate-100">
                                            Live Classes, Pre-Recorded Sessions, and Access to Real SAP Servers; This Is a Clever Setup for Working Professionals and Is 24/7 Accessible from Any Place in the World.
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Journey & Text */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">
                                Our Journey, From Vision To Global Impact.
                            </h2>
                            <div className="w-12 h-1 bg-orange-500 mb-8"></div>

                            <div className="prose prose-lg text-slate-600 leading-relaxed mb-8">
                                <p className="mb-4">
                                    Erpvits was founded as a beautiful dream to make the latest SAP education accessible and towards high results. Today, ERPVITS works with Fortune 500 companies, universities, and aspiring professionals to create value in SAP excellence.
                                </p>
                                <p>
                                    The program from ERPVITS has been carrying out training for more than 2000 learners in 11 countries, creating a huge name in SAP online classes and end-to-end ERP training. Well, it did begin with a beautiful dream to make the latest SAP education accessible and oriented towards high results.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                    <div>
                                        <span className="font-bold text-slate-800">Expert-Led Training:</span> <span className="text-slate-600">learned from certified SAP practitioners, with over 10+ years of experience in the industry.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                    <div>
                                        <span className="font-bold text-slate-800">Project-Based Learning:</span> <span className="text-slate-600">Solves real business cases in finance, logistics, and analytics.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                    <div>
                                        <span className="font-bold text-slate-800">Lifetime Learning Access:</span> <span className="text-slate-600">Revisit course materials, updates, and community forums anytime.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Stats Section with Wood Background */}
            <section className="py-12 bg-slate-100 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {/* Stat Item 1 */}
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">2350</div>
                            <div className="w-12 h-1 bg-orange-500 mb-4"></div>
                            <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">
                                Happy Clients
                            </div>
                        </div>

                        {/* Stat Item 2 */}
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">2800</div>
                            <div className="w-12 h-1 bg-orange-500 mb-4"></div>
                            <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">
                                Courses Done
                            </div>
                        </div>

                        {/* Stat Item 3 */}
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">750</div>
                            <div className="w-12 h-1 bg-orange-500 mb-4"></div>
                            <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">
                                Server Access
                            </div>
                        </div>

                        {/* Stat Item 4 */}
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">1200</div>
                            <div className="w-12 h-1 bg-orange-500 mb-4"></div>
                            <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">
                                Business Growth
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Working Process */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            {/* Decorative pin icon if needed, or just plain text */}
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 uppercase">The Working Process : Learn SAP in 3 Easy Steps</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-500 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                            <Phone className="w-12 h-12 text-orange-500 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Step 1: Get in Touch</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Contact our team via call, mail, WhatsApp, or live chat. We will assist you in choosing the right SAP online training program as per your career goals.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-500 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                            <Laptop className="w-12 h-12 text-orange-500 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Step 2: Getting Started</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Attend the Live Instructor-Led Sessions or self-paced classes. Get instant access to SAP sandbox environments for practice.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-500 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                            <CertificateIcon className="w-12 h-12 text-orange-500 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Step 3: Get Certified</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Take exams with mock tests and pass, get your certificate.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 uppercase">Our Vision & Mission</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Vision */}
                        <div className="bg-white p-10 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                            <div className="mb-6">
                                <Rocket className="w-16 h-16 text-red-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-orange-500">Our Vision</h2>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Our vision is to become the global catalyst for SAP-enabled career transformation where every learner is equipped to lead in the digital economy. With accessible and hands-on SAP online training courses, we dream of a world where SAP gets to its full potential, allowing businesses and professionals to innovate, integrate, and inspire.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-white p-10 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                            <div className="mb-6">
                                <Target className="w-16 h-16 text-blue-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-orange-500">Our Mission</h2>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Our mission at ERPVITS is to deliver industry-leading SAP courses in an all-online format, Live Instructor-Led Training combined with Self-Paced Learning, and endless access to the server for real-world practice on an online platform. Make HANA online classes and certification programs affordable, flexible, and focused on getting a job. Provide their students with the most recognized SAP online course certifications. Create an SAP expert community that can drive innovation in ERP, analytics, and enterprise solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

