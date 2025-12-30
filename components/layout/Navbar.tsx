"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, Mail, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { courses } from '@/lib/courseData';
import ContactModal from '../ContactModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const functionalCourses = courses.filter(c => c.category === 'Functional').sort((a, b) => a.title.localeCompare(b.title));
    const technicalCourses = courses.filter(c => c.category === 'Technical').sort((a, b) => a.title.localeCompare(b.title));

    const toggleDropdown = (name: string) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    return (
        <>
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                title="Book Your Free Demo"
            />
            <header className="sticky top-0 z-40 bg-white font-sans shadow-md">
                {/* Top Info Bar */}
                <div className="bg-slate-900 text-white text-xs py-2 px-4 hidden lg:block">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <div className="flex items-center space-x-6">
                            <a href="mailto:info@erpvits.com" className="flex items-center hover:text-orange-400 transition-colors">
                                <Mail className="h-3 w-3 mr-2" /> info@erpvits.com
                            </a>
                            <a href="tel:+918408878222" className="flex items-center hover:text-orange-400 transition-colors">
                                <Phone className="h-3 w-3 mr-2" /> +91 84088 78222
                            </a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center cursor-pointer hover:text-orange-400 transition-colors">
                                <Globe className="h-3 w-3 mr-1" /> EN <ChevronDown className="h-3 w-3 ml-1" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Navbar */}
                <div className="bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-20 items-center">
                            {/* Logo */}
                            <Link href="/" className="flex-shrink-0 flex items-center group">
                                <span className="text-3xl font-extrabold text-blue-900 tracking-tighter group-hover:text-blue-800 transition-colors">
                                    ERP<span className="text-orange-500">VITS</span>
                                </span>
                            </Link>

                            {/* Desktop Menu */}
                            <div className="hidden lg:flex space-x-1 items-center">
                                <Link href="/" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-bold transition-colors rounded-lg hover:bg-gray-50 text-sm xl:text-base">
                                    Home
                                </Link>

                                <Link href="/about" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-bold transition-colors rounded-lg hover:bg-gray-50 text-sm xl:text-base">
                                    About Us
                                </Link>

                                {/* Functional Dropdown */}
                                <div className="relative group">
                                    <button className="px-3 py-2 text-gray-700 group-hover:text-blue-600 font-bold inline-flex items-center transition-colors rounded-lg hover:bg-gray-50 focus:outline-none text-sm xl:text-base">
                                        SAP Functional <ChevronDown className="ml-1 h-4 w-4" />
                                    </button>
                                    <div className="absolute left-0 top-full w-64 bg-white border-t-4 border-orange-500 rounded-b-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left translate-y-2 group-hover:translate-y-0 z-50">
                                        <div className="py-2 max-h-[60vh] overflow-y-auto custom-scrollbar">
                                            {functionalCourses.map((course) => (
                                                <Link key={course.id} href={`/courses/${course.id}`} className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors border-l-4 border-transparent hover:border-orange-500">
                                                    {course.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Technical Dropdown */}
                                <div className="relative group">
                                    <button className="px-3 py-2 text-gray-700 group-hover:text-blue-600 font-bold inline-flex items-center transition-colors rounded-lg hover:bg-gray-50 focus:outline-none text-sm xl:text-base">
                                        SAP Technical <ChevronDown className="ml-1 h-4 w-4" />
                                    </button>
                                    <div className="absolute left-0 top-full w-64 bg-white border-t-4 border-orange-500 rounded-b-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left translate-y-2 group-hover:translate-y-0 z-50">
                                        <div className="py-2 max-h-[60vh] overflow-y-auto custom-scrollbar">
                                            {technicalCourses.map((course) => (
                                                <Link key={course.id} href={`/courses/${course.id}`} className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors border-l-4 border-transparent hover:border-orange-500">
                                                    {course.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Blogs Dropdown */}
                                <Link href="/blog" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-bold transition-colors rounded-lg hover:bg-gray-50 text-sm xl:text-base">
                                    Blogs
                                </Link>

                                <Link href="/contact" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-bold transition-colors rounded-lg hover:bg-gray-50 text-sm xl:text-base">
                                    Contact
                                </Link>

                                <button
                                    onClick={() => setIsContactModalOpen(true)}
                                    className="ml-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-extrabold transition-all shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-0.5 text-sm xl:text-base whitespace-nowrap uppercase tracking-wide"
                                >
                                    Book Free Demo
                                </button>
                            </div>

                            {/* Mobile Button */}
                            <div className="lg:hidden flex items-center">
                                <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-colors">
                                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={cn("lg:hidden bg-white border-t border-gray-100 fixed inset-x-0 bottom-0 top-[6rem] z-40 transition-transform duration-300 ease-in-out transform overflow-y-auto", isOpen ? "translate-x-0" : "translate-x-full")}>
                    <div className="p-4 space-y-2 pb-20">
                        <Link href="/" className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-50" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/about" className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-50" onClick={() => setIsOpen(false)}>About Us</Link>

                        <div>
                            <button onClick={() => toggleDropdown('func')} className="w-full flex justify-between items-center px-4 py-3 rounded-xl text-base font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-50">
                                SAP Functional <ChevronDown className={cn("h-5 w-5 transition-transform", activeDropdown === 'func' && "rotate-180")} />
                            </button>
                            <div className={cn("pl-4 space-y-1 overflow-hidden transition-all duration-300", activeDropdown === 'func' ? "max-h-[500px]" : "max-h-0")}>
                                {functionalCourses.map(course => (
                                    <Link key={course.id} href={`/courses/${course.id}`} className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50" onClick={() => setIsOpen(false)}>
                                        {course.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <button onClick={() => toggleDropdown('tech')} className="w-full flex justify-between items-center px-4 py-3 rounded-xl text-base font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-50">
                                SAP Technical <ChevronDown className={cn("h-5 w-5 transition-transform", activeDropdown === 'tech' && "rotate-180")} />
                            </button>
                            <div className={cn("pl-4 space-y-1 overflow-hidden transition-all duration-300", activeDropdown === 'tech' ? "max-h-[500px]" : "max-h-0")}>
                                {technicalCourses.map(course => (
                                    <Link key={course.id} href={`/courses/${course.id}`} className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50" onClick={() => setIsOpen(false)}>
                                        {course.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link href="/blog" className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-50" onClick={() => setIsOpen(false)}>Blogs</Link>

                        <Link href="/contact" className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-50" onClick={() => setIsOpen(false)}>Contact</Link>

                        <div className="pt-4">
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    setIsContactModalOpen(true);
                                }}
                                className="block w-full text-center bg-orange-500 text-white px-5 py-4 rounded-xl font-bold shadow-lg"
                            >
                                Book Free Demo
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
