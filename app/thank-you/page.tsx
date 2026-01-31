import Link from 'next/link';
import { CheckCircle, Home, BookOpen, ArrowRight } from 'lucide-react';

export default function ThankYouPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden animate-in zoom-in-95 duration-500">
                <div className="p-12 text-center space-y-8">

                    {/* Icon Animation */}
                    <div className="relative">
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-bounce-slow">
                            <CheckCircle className="w-12 h-12 text-green-600" />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-green-50 rounded-full -z-10 animate-pulse"></div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                            Thank You!
                        </h1>
                        <p className="text-lg text-slate-600 max-w-lg mx-auto leading-relaxed">
                            Your request has been received successfully. We have sent the detailed syllabus to your registered email address.
                        </p>
                    </div>

                    {/* Information Box */}
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-left">
                        <h3 className="text-blue-900 font-bold mb-2 flex items-center gap-2">
                            <span className="bg-blue-200 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">i</span>
                            What happens next?
                        </h3>
                        <ul className="space-y-3 text-blue-800/80 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0"></span>
                                Check your inbox (and spam folder) for the syllabus PDF.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0"></span>
                                One of our academic counselors may reach out to you shortly to answer your queries.
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-lg shadow-slate-200 group"
                        >
                            <Home className="w-5 h-5 mr-2" />
                            Back to Home
                        </Link>

                        <Link
                            href="/#courses"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all hover:-translate-y-1 shadow-lg shadow-orange-200 group"
                        >
                            <BookOpen className="w-5 h-5 mr-2" />
                            Explore Courses
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                </div>

                {/* Decorative Bottom Bar */}
                <div className="h-2 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600"></div>
            </div>
        </div>
    );
}
