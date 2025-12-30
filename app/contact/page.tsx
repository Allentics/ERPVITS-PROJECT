'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="bg-blue-900 text-white py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-blue-100 text-lg">We'd love to hear from you. Reach out for course details or career guidance.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Have questions about our SAP courses? Want to schedule a free demo?
                                Fill out the form or contact us directly. Our team is available 24/7.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                    <Phone className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Phone & WhatsApp</h3>
                                    <p className="text-gray-600">+91 8600 5600 70</p>
                                    <p className="text-sm text-gray-500">Available 9 AM - 9 PM IST</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                    <Mail className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Email</h3>
                                    <a href="mailto:info@erpvits.com" className="text-gray-600 hover:text-blue-600">info@erpvits.com</a>
                                    <p className="text-sm text-gray-500">We reply within 2 hours.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                    <MapPin className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Training Center</h3>
                                    <p className="text-gray-600">
                                        ERPVITS Global Headquarters<br />
                                        Hitech City, Hyderabad,<br />
                                        India - 500081
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <ContactForm />
                    </div>

                </div>
            </div>
        </div>
    );
}

