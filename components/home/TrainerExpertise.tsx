import { CheckCircle2, UserCheck } from 'lucide-react';

export default function TrainerExpertise() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full font-bold text-sm mb-6">World-Class Faculty</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Learn from Industry's Best – <span className="text-blue-600">15+ Years of SAP Expertise</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our trainers bring real-world experience from Fortune 500 companies and global implementations. They don't just teach theory; they prepare you for the actual job.
                        </p>

                        <div className="space-y-6 mb-10">
                            {[
                                { title: "15+ Years Average Experience", desc: "Hands-on implementation and consulting experience across multiple industries." },
                                { title: "Industry Certifications", desc: "All trainers hold multiple SAP certifications and stay current with latest tech." },
                                { title: "Fortune 500 Project Experience", desc: "Direct experience with IBM, Accenture, Deloitte, and more." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-bold shadow-lg transition-colors">
                            Meet Our Expert SAP Trainers
                        </button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-orange-400 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
                        <div className="bg-gray-100 rounded-3xl p-8 relative overflow-hidden h-[500px] flex items-center justify-center">
                            <UserCheck className="w-32 h-32 text-gray-300" />
                            <p className="text-gray-400 mt-4">Trainer Profiles Grid Placeholder</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
