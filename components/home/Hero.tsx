"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="bg-blue-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6"
                >
                    Empower Your Career with Expert <br className="hidden md:block" />
                    <span className="text-orange-400">SAP Online Training</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-blue-100 font-medium mb-8"
                >
                    Industry-Leading SAP Online Training Institute with 95%+ Placement Success
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl mx-auto text-lg text-blue-200 mb-10 leading-relaxed"
                >
                    Transform your career with ERPVITS, your trusted online SAP training partner. Learn from industry experts with over 15 years of experience in SAP. Get your certification, achieve your dream job and boost your earnings with instructor SAP courses with hands-on projects and placement assistance.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
                >
                    <Link
                        href="/contact"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:shadow-orange-500/40 transition-all transform hover:-translate-y-1"
                    >
                        Start Your SAP Training Journey Today
                    </Link>
                    <Link
                        href="/all-courses"
                        className="bg-transparent border-2 border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-md font-bold text-lg transition-all"
                    >
                        Explore SAP Courses
                    </Link>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10"
                >
                    {[
                        { val: "12+ Years", label: "In SAP Industry" },
                        { val: "6000+", label: "Professionals Trained" },
                        { val: "24/7", label: "Team Support" },
                        { val: "8+", label: "SAP Solution Arthitects" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="flex items-center justify-center text-green-400 font-bold mb-1">
                                <span className="mr-1">✅</span> {stat.val}
                            </div>
                            <div className="text-blue-200 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
