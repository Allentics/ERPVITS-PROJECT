import { CheckCircle, Globe, Users, Award } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <div className="bg-blue-900 text-white py-20 lg:py-28 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800 opacity-20 transform -skew-x-12"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About ERPVITS</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        We are a global leader in SAP training, dedicated to transforming careers through expert-led education and real-world project experience.
                    </p>
                </div>
            </div>

            {/* Mission */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                At ERPVITS, our mission is to bridging the gap between theoretical knowledge and industry demands.
                                We believe that true learning happens through doing, which is why our curriculum is centered around hands-on projects and real-time scenarios.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                With over a decade of experience, we have helped thousands of professionals and students master SAP technologies
                                and secure high-paying roles in top multinational corporations.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-blue-50 p-6 rounded-xl text-center">
                                <Users className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">6000+</div>
                                <div className="text-sm text-gray-600">Students Trained</div>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl text-center">
                                <Award className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">95%</div>
                                <div className="text-sm text-gray-600">Placement Rate</div>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl text-center">
                                <Globe className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">20+</div>
                                <div className="text-sm text-gray-600">Countries Reach</div>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl text-center">
                                <CheckCircle className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                                <div className="text-sm text-gray-600">Hiring Partners</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why We Are Different</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Instructors</h3>
                            <p className="text-gray-600">
                                Learn from certified SAP professionals with 15+ years of industry experience.
                                Our trainers don't just teach; they mentor.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Real-Time Projects</h3>
                            <p className="text-gray-600">
                                Gain practical experience by working on live projects that mimic real-world business scenarios.
                                Build a portfolio that employers trust.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Career Support</h3>
                            <p className="text-gray-600">
                                From resume building to mock interviews, we provide end-to-end placement assistance
                                to help you land your dream job.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
