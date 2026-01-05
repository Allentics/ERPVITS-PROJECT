"use client";

import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactRegistration() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Information */}
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Us to Register</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Interested in our upcoming events or specific training programs? Fill out the form, and our team will get back to you with all the details and registration confirmation.
                        </p>

                        <div className="space-y-8 mt-12">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0 mr-4">
                                    <Phone className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
                                    <p className="text-slate-600">+91 95574 08911</p>
                                    <p className="text-slate-500 text-sm">Mon-Fri from 9am to 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 mr-4">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
                                    <p className="text-slate-600">info@erpvits.com</p>
                                    <p className="text-slate-500 text-sm">We'll respond within 24 hours</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0 mr-4">
                                    <MapPin className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Visit Us</h3>
                                    <p className="text-slate-600">Pune, Maharashtra, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900">Event Registration & Inquiry</h3>
                            <p className="text-slate-500 text-sm mt-1">Fill in your details below</p>
                        </div>
                        <ContactForm
                            showLabels={true}
                            successMessage="Thanks! We've received your registration inquiry. We'll be in touch soon."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
