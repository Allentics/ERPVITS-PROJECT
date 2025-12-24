import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { courses } from '@/lib/courseData';

const Footer = () => {
    // Show top 6 courses in footer
    const popularCourses = courses.slice(0, 6);

    return (
        <footer className="bg-slate-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Column 1: About */}
                    <div>
                        <span className="text-2xl font-bold text-white mb-4 block">ERPVITS</span>
                        <p className="text-sm leading-relaxed mb-4">
                            Industry-leading SAP Online Training Institute with 95%+ placement success.
                            Master SAP with confidence and transform your career.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Column 2: Popular Courses */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-lg">Popular Courses</h3>
                        <ul className="space-y-2">
                            {popularCourses.map(course => (
                                <li key={course.id}>
                                    <Link href={`/courses/${course.id}`} className="hover:text-white text-sm transition-colors">
                                        {course.title}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/all-courses" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                                    View All Courses &rarr;
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/corporate-training" className="hover:text-white transition-colors">Corporate Training</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog & News</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0" />
                                <span>Global Online Training<br />Headquartered in India</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0" />
                                <span>+91 8600 5600 70</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0" />
                                <a href="mailto:info@erpvits.com" className="hover:text-white">info@erpvits.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} ERPVITS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
