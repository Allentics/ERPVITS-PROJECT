"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, Mail, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { courses as localCourses } from '@/lib/courseData';
import { supabase } from '@/lib/supabase';
import ContactModal from '../ContactModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [dynCourses, setDynCourses] = useState(localCourses);
    const [settings, setSettings] = useState({
        site_email: "info@erpvits.com",
        site_phone: "+91 84088 78222"
    });

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch Settings
                const { data: settingsData } = await supabase
                    .from('site_settings')
                    .select('key, value');

                if (settingsData) {
                    const mapped = settingsData.reduce((acc: any, item: any) => {
                        acc[item.key] = item.value;
                        return acc;
                    }, {});
                    setSettings(prev => ({ ...prev, ...mapped }));
                }

                // Fetch Courses for Dropdowns
                const { data: coursesData } = await supabase
                    .from('courses')
                    .select('id, title, category');

                if (coursesData && coursesData.length > 0) {
                    setDynCourses(coursesData);
                }
            } catch (err) {
                console.error('Error in Navbar fetchData:', err);
            }
        }
        fetchData();
    }, []);

    const functionalCourses = dynCourses
        .filter(c => c.category === 'Functional')
        .filter((c, index, self) => index === self.findIndex((t) => t.title === c.title))
        .sort((a, b) => a.title.localeCompare(b.title));

    const technicalCourses = dynCourses
        .filter(c => c.category === 'Technical')
        .filter((c, index, self) => index === self.findIndex((t) => t.title === c.title))
        .sort((a, b) => a.title.localeCompare(b.title));

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
            <header className="sticky top-0 z-40 bg-black font-sans shadow-md">
                {/* Top Info Bar */}
                <div className="bg-slate-900 text-white text-xs py-2.5 px-4 hidden lg:block border-b border-white/10">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <div className="flex items-center space-x-6 text-[11px] font-bold tracking-wide">
                            <a href={`mailto:${settings.site_email}`} className="flex items-center hover:text-orange-400 transition-colors uppercase">
                                <Mail className="h-3.5 w-3.5 mr-2" /> {settings.site_email}
                            </a>
                            <a href={`tel:${settings.site_phone.replace(/\s+/g, '')}`} className="flex items-center hover:text-orange-400 transition-colors uppercase">
                                <Phone className="h-3.5 w-3.5 mr-2" /> {settings.site_phone}
                            </a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center cursor-default hover:text-orange-400 transition-all font-black text-[12px]">
                                <Globe className="h-4 w-4 mr-1.5" /> EN
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Navbar */}
                <div className="bg-black">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-20 items-center">
                            {/* Logo */}
                            <Link href="/" className="flex-shrink-0 flex items-center">
                                <img
                                    src="/images/logo.webp"
                                    alt="ERPVITS"
                                    className="h-12 w-auto"
                                />
                            </Link>

                            {/* Desktop Menu */}
                            <div className="hidden lg:flex space-x-1 items-center">
                                <Link href="/" className="px-3 py-2 text-white hover:text-orange-500 font-bold transition-colors rounded-lg hover:bg-white/10 text-sm xl:text-base">
                                    Home
                                </Link>

                                <Link href="/about" className="px-3 py-2 text-white hover:text-orange-500 font-bold transition-colors rounded-lg hover:bg-white/10 text-sm xl:text-base">
                                    About Us
                                </Link>

                                {/* Functional Dropdown */}
                                <div className="relative group">
                                    <button className="px-3 py-2 text-white group-hover:text-orange-500 font-bold inline-flex items-center transition-colors rounded-lg hover:bg-white/10 focus:outline-none text-sm xl:text-base">
                                        SAP Functional <ChevronDown className="ml-1 h-4 w-4" />
                                    </button>
                                    <div className="absolute left-0 top-full w-64 bg-white border-t-4 border-orange-500 rounded-b-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left translate-y-2 group-hover:translate-y-0 z-50">
                                        <div className="py-2 max-h-[60vh] overflow-y-auto custom-scrollbar">
                                            {functionalCourses.map((course) => (
                                                <Link key={course.id} href={`/courses/${course.id}`} className="block px-4 py-3 text-sm text-slate-900 hover:bg-orange-50 hover:text-orange-600 transition-colors border-l-4 border-transparent hover:border-orange-500">
                                                    {course.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Technical Dropdown */}
                                <div className="relative group">
                                    <button className="px-3 py-2 text-white group-hover:text-orange-500 font-bold inline-flex items-center transition-colors rounded-lg hover:bg-white/10 focus:outline-none text-sm xl:text-base">
                                        SAP Technical <ChevronDown className="ml-1 h-4 w-4" />
                                    </button>
                                    <div className="absolute left-0 top-full w-64 bg-white border-t-4 border-orange-500 rounded-b-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left translate-y-2 group-hover:translate-y-0 z-50">
                                        <div className="py-2 max-h-[60vh] overflow-y-auto custom-scrollbar">
                                            {technicalCourses.map((course) => (
                                                <Link key={course.id} href={`/courses/${course.id}`} className="block px-4 py-3 text-sm text-slate-900 hover:bg-orange-50 hover:text-orange-600 transition-colors border-l-4 border-transparent hover:border-orange-500">
                                                    {course.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Blogs Dropdown */}
                                <Link href="/blog" className="px-3 py-2 text-white hover:text-orange-500 font-bold transition-colors rounded-lg hover:bg-white/10 text-sm xl:text-base">
                                    Blogs
                                </Link>

                                <Link href="/contact" className="px-3 py-2 text-white hover:text-orange-500 font-bold transition-colors rounded-lg hover:bg-white/10 text-sm xl:text-base">
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
                                <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-white hover:text-orange-500 hover:bg-white/10 focus:outline-none transition-colors">
                                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={cn("lg:hidden bg-slate-900 border-t border-white/10 fixed inset-x-0 bottom-0 top-[6rem] z-40 transition-transform duration-300 ease-in-out transform overflow-y-auto", isOpen ? "translate-x-0" : "translate-x-full")}>
                    <div className="p-4 space-y-2 pb-20">
                        <Link href="/" className="block px-4 py-3 rounded-xl text-base font-semibold text-white hover:text-orange-500 hover:bg-white/5" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/about" className="block px-4 py-3 rounded-xl text-base font-semibold text-white hover:text-orange-500 hover:bg-white/5" onClick={() => setIsOpen(false)}>About Us</Link>

                        <div>
                            <button onClick={() => toggleDropdown('func')} className="w-full flex justify-between items-center px-4 py-3 rounded-xl text-base font-semibold text-white hover:text-orange-500 hover:bg-white/5">
                                SAP Functional <ChevronDown className={cn("h-5 w-5 transition-transform", activeDropdown === 'func' && "rotate-180")} />
                            </button>
                            <div className={cn("pl-4 space-y-1 overflow-hidden transition-all duration-300", activeDropdown === 'func' ? "max-h-[500px]" : "max-h-0")}>
                                {functionalCourses.map(course => (
                                    <Link key={course.id} href={`/courses/${course.id}`} className="block px-4 py-2 rounded-lg text-sm text-slate-300 hover:text-orange-500 hover:bg-white/5" onClick={() => setIsOpen(false)}>
                                        {course.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <button onClick={() => toggleDropdown('tech')} className="w-full flex justify-between items-center px-4 py-3 rounded-xl text-base font-semibold text-white hover:text-orange-500 hover:bg-white/5">
                                SAP Technical <ChevronDown className={cn("h-5 w-5 transition-transform", activeDropdown === 'tech' && "rotate-180")} />
                            </button>
                            <div className={cn("pl-4 space-y-1 overflow-hidden transition-all duration-300", activeDropdown === 'tech' ? "max-h-[500px]" : "max-h-0")}>
                                {technicalCourses.map(course => (
                                    <Link key={course.id} href={`/courses/${course.id}`} className="block px-4 py-2 rounded-lg text-sm text-slate-300 hover:text-orange-500 hover:bg-white/5" onClick={() => setIsOpen(false)}>
                                        {course.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link href="/blog" className="block px-4 py-3 rounded-xl text-base font-semibold text-white hover:text-orange-500 hover:bg-white/5" onClick={() => setIsOpen(false)}>Blogs</Link>

                        <Link href="/contact" className="block px-4 py-3 rounded-xl text-base font-semibold text-white hover:text-orange-500 hover:bg-white/5" onClick={() => setIsOpen(false)}>Contact</Link>

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
