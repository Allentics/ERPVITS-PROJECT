import { FileText, Users, Mic, Award } from 'lucide-react';

export default function CareerServices() {
    const services = [
        { icon: Users, title: "Personalized Career Guidance", desc: "One-on-one mentoring to help you choose the right SAP module and career path." },
        { icon: FileText, title: "Resume & LinkedIn Optimization", desc: "Professionally crafted SAP-focused profiles that attract top recruiters." },
        { icon: Mic, title: "Interview Preparation Support", desc: "Mock interviews, technical Q&A, and HR readiness sessions for real confidence." },
        { icon: Award, title: "Global Certification Guidance", desc: "Step-by-step support to prepare for and clear SAP global certification exams." }
    ];

    return (
        <section className="py-20 bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Career Transformation Guaranteed</h2>
                    <p className="text-blue-200 text-lg">Comprehensive career services to ensure your success in landing your dream SAP role</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="bg-blue-800/50 p-6 rounded-xl border border-blue-700 hover:bg-blue-800 transition-colors">
                            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                                <s.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="font-bold text-lg mb-3">{s.title}</h3>
                            <p className="text-blue-200 text-sm leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
