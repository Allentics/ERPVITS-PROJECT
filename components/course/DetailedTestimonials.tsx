import React from 'react';
import { Star, Quote, CheckCircle2, Download, FileText, User, Mail, Briefcase, Calendar } from 'lucide-react';

export default function DetailedTestimonials() {
    const reviews = [
        {
            text: "Outstanding training and real project exposure. I landed a consulting role at Accenture within 2 weeks of completing the course. The hands-on approach and expert instructors made all the difference.",
            author: "Rahul Mehta",
            role: "SAP Ariba Consultant at Accenture",
            initial: "R",
            color: "bg-orange-500"
        },
        {
            text: "The weekend flexibility allowed me to learn while working. My employer was so impressed with my skills that they promoted me to Procurement Manager. The course accelerated my career by 2 years.",
            author: "Priya Sharma",
            role: "Procurement Manager",
            initial: "P",
            color: "bg-blue-500"
        },
        {
            text: "Best decision I made. The capstone projects were exactly like real client work. I walked into my first consulting role feeling confident and job-ready. The continuous support was exceptional!",
            author: "Rajesh S.",
            role: "Senior SAP Consultant",
            initial: "R",
            color: "bg-green-500"
        },
        {
            text: "Superb certification preparation. I passed all three SAP Ariba exams on my first attempt. The study material and mock tests were spot on. Highly recommended!",
            author: "Aditya Singh",
            role: "Certified SAP Ariba Professional",
            initial: "A",
            color: "bg-purple-500"
        },
        {
            text: "The instructor's real-world insights were invaluable. I didn't just learn SAP Ariba; I learned how to apply it in complex enterprise environments. The alumni network has already brought networking opportunities my way.",
            author: "Vikram Desai",
            role: "Integration Consultant at Deloitte",
            initial: "V",
            color: "bg-red-500"
        },
        {
            text: "From zero SAP knowledge to landing my dream job in 3 months! The instructors are patient, knowledgeable, and truly care about student success. The lifetime recording access is a huge bonus.",
            author: "Sneha Reddy",
            role: "Procurement Analyst at Infosys",
            initial: "S",
            color: "bg-indigo-500"
        }
    ];

    const benefits = [
        "50+ real interview questions with expert answers",
        "Behavioral questions common in SAP consulting interviews",
        "Scenario-based problem-solving questions",
        "Career growth and salary negotiation tips",
        "Interview tips specific to each role"
    ];

    return (
        <section className="py-20 bg-orange-50/30">
            <div className="max-w-7xl mx-auto px-4">

                {/* Testimonials Header */}
                <div className="text-center mb-16">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        Student Success Stories
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Hear from Our Successful <span className="text-orange-600">SAP Ariba Learners</span>
                    </h2>
                    <p className="text-gray-600">Real reviews, real results from professionals who transformed their careers</p>

                    <div className="mt-8 flex justify-center">
                        <div className="bg-white px-8 py-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
                            <div className="flex gap-1 mb-2">
                                {[1, 2, 3, 4, 5].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <div className="font-bold text-2xl text-slate-900">4.9/5</div>
                            <div className="text-xs text-slate-500">Based on 500+ student reviews</div>
                        </div>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative">
                            <Quote className="w-8 h-8 text-orange-100 absolute top-6 right-6 fill-orange-50" />
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-full ${review.color} text-white flex items-center justify-center font-bold text-sm`}>
                                    {review.initial}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 text-sm">{review.author}</div>
                                    <div className="text-xs text-slate-500">{review.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-24">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        Start Your Success Story Today
                    </button>
                    <p className="mt-4 text-sm text-slate-500">Join 5,000+ successful graduates</p>
                </div>

                {/* Lead Magnet / Interview Guide Section */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 md:p-12 lg:p-16 bg-slate-50 flex flex-col justify-center">
                            <span className="text-green-600 font-bold tracking-wider text-sm mb-2 uppercase">Free Resource</span>
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                Download the Most Asked <br />
                                <span className="text-blue-600">SAP Ariba Interview Questions</span>
                            </h3>
                            <p className="text-slate-600 mb-8 max-w-md">
                                Get a comprehensive guide to help you ace your SAP Ariba interviews and land your dream consulting role.
                            </p>
                            <div className="space-y-4">
                                {benefits.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <button className="w-full bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl p-4 flex items-center gap-4 transition-all group text-left">
                                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-blue-600/20">
                                        <Download className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">Instant Download</div>
                                        <div className="text-sm text-slate-600">PDF guide sent directly to your email</div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="p-8 md:p-12 lg:p-16 bg-white">
                            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                                    <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                                        <Download className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">Download Free Guide</div>
                                        <div className="text-xs text-slate-500">Fill out the form below</div>
                                    </div>
                                </div>

                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Full Name</label>
                                        <div className="relative">
                                            <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                                            <input type="text" placeholder="Enter your name" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Email Address</label>
                                        <div className="relative">
                                            <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                                            <input type="email" placeholder="your.email@example.com" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Desired Role</label>
                                            <div className="relative">
                                                <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                                                <select className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none text-slate-600">
                                                    <option>Select role</option>
                                                    <option>Consultant</option>
                                                    <option>End User</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Years Experience</label>
                                            <div className="relative">
                                                <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                                                <select className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none text-slate-600">
                                                    <option>Select years</option>
                                                    <option>0-2 Years</option>
                                                    <option>3-5 Years</option>
                                                    <option>5+ Years</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="button" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all mt-2 flex items-center justify-center gap-2">
                                        <Download className="w-4 h-4" /> Download Interview Guide
                                    </button>
                                    <p className="text-[10px] text-center text-slate-400 mt-2">
                                        By downloading, you agree to receive updates about our SAP Ariba training programs.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
