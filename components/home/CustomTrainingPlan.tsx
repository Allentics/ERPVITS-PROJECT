import { ClipboardList, Target, Award, Calendar } from 'lucide-react';

export default function CustomTrainingPlan() {
    return (
        <section className="bg-blue-900 text-white py-20 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Get Your Personalized <span className="text-orange-400">SAP Training Plan</span> – It's FREE!
                        </h2>
                        <p className="text-blue-200 text-lg mb-8 leading-relaxed">
                            Every professional's journey to proficiency in SAP is unique. We will design a personalized training program just for you based on your background, career objectives, and timeline.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: ClipboardList, text: "Customized curriculum based on your background" },
                                { icon: Target, text: "Career roadmap with salary projections" },
                                { icon: Award, text: "Recommended certifications for your target role" },
                                { icon: Calendar, text: "Flexible scheduling options to fit your life" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                                        <item.icon className="h-5 w-5 text-orange-400" />
                                    </div>
                                    <span className="font-medium text-lg">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-2xl text-gray-800">
                        <h3 className="text-2xl font-bold mb-6 text-center text-blue-900">Request Your Custom Plan</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1">Full Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="+91 98765 43210" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Current Role / Background</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                                    <option>Select your background...</option>
                                    <option>Student / Fresher</option>
                                    <option>Finance Professional</option>
                                    <option>Supply Chain Professional</option>
                                    <option>HR Professional</option>
                                    <option>IT / Developer</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all mt-4">
                                Get My Free Career Roadmap
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
