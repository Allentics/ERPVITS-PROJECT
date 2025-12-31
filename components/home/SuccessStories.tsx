"use client";

import { Star, PlayCircle } from 'lucide-react';

const stories = [
    {
        name: "Karuna Nimse",
        role: "Senior SAP FICO Consultant",
        company: "Deloitte Consulting",
        hike: "+56.25%",
        course: "SAP FICO Training",
        time: "60 days",
        quote: "ERPVITS played a huge role in my career growth! SAP FICO training was practical, detailed, and perfectly aligned with real project requirements. Within just 2 months of completing the course, I got hired at Deloitte with a 56% salary hike.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Sarah Johnson",
        role: "SAP SD Functional Consultant",
        company: "Accenture",
        hike: "+33.33%",
        course: "SAP SD Training",
        time: "21 days",
        quote: "SAP SD training was incredibly well-structured and industry-focused. The mentors made complex concepts easy to understand with real-time examples. Thanks to their guidance, I secured a new position at Accenture within just 3 weeks.",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        name: "Renuka Mittal",
        role: "SAP Analytics Cloud Developer",
        company: "Google Cloud",
        hike: "+63.64%",
        course: "SAP Analytics Cloud",
        time: "78 days",
        quote: "Initially skeptical about online SAP training, but ERPVITS proved me wrong. It wasn’t easy—the concepts were challenging—but the mentors guided me throughout. Within 2.5 months, I landed a role at Google Cloud with a 63% salary hike.",
        image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
        name: "Mahesh Saraf",
        role: "SAP S/4HANA Program Manager",
        company: "SAP SE",
        hike: "+43.33%",
        course: "SAP S/4HANA MM",
        time: "55 days",
        quote: "Coming from years of SAP experience, I wasn’t sure if another course would make a big difference but ERPVITS changed my perspective. The training was in-depth and pushed me to upskill meaningfully. It took effort, but I advanced to a Program Manager role at SAP SE itself.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Anita Patel",
        role: "Finance Manager (SAP FICO)",
        company: "Morgan Stanley",
        hike: "+33.33%",
        course: "SAP FICO + S/4HANA",
        time: "42 days",
        quote: "Balancing my job and the course wasn’t easy—the sessions were intense. But ERPVITS trainers made complex topics understandable. The effort paid off when I landed a role at Morgan Stanley after finishing the course.",
        image: "https://randomuser.me/api/portraits/women/90.jpg"
    },
    {
        name: "Madhuri Chedda",
        role: "SAP Ariba Senior Consultant",
        company: "Siemens",
        hike: "+57.14%",
        course: "SAP Ariba Training",
        time: "75 days",
        quote: "Moving into a senior SAP Ariba role felt out of reach before joining ERPVITS. The training was challenging at times, but the mentors were deeply knowledgeable. They covered every Ariba module in detail. It took effort, but ERPVITS made it achievable.",
        image: "https://randomuser.me/api/portraits/women/55.jpg"
    }
];

export default function SuccessStories() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">🎉 Meet Our Success Stories</h2>
                    <p className="text-lg text-gray-600">
                        Real People Who Transformed Their Careers with ERPVITS Training
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all relative">
                            <div className="absolute top-6 right-6 flex text-yellow-400">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>

                            <div className="flex items-center mb-6">
                                <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full border-2 border-orange-100 mr-4" />
                                <div>
                                    <h3 className="font-bold text-gray-900">{story.name}</h3>
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{story.role}</p>
                                    <p className="text-xs text-orange-600 font-semibold">{story.company}</p>
                                </div>
                            </div>

                            <div className="bg-green-50 rounded-lg p-4 mb-6 border border-green-100">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs text-gray-500 font-medium">Salary Hike</span>
                                    <span className="text-green-700 font-bold text-lg">{story.hike}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-500 font-medium">Placement Time</span>
                                    <span className="text-gray-900 font-bold">⚡ {story.time}</span>
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm italic mb-6 leading-relaxed">
                                "{story.quote}"
                            </p>

                            <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                                <span className="text-xs text-gray-400 font-medium">{story.course}</span>
                                {i === 0 && (
                                    <button className="text-orange-600 text-xs font-bold flex items-center hover:underline">
                                        <PlayCircle className="w-4 h-4 mr-1" /> Watch Video
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
