import React from 'react';

interface CurriculumItem {
    session: string;
    topic: string;
    description: string;
    hours: string;
}

export default function CurriculumTable({ title, items }: { title: string, items: CurriculumItem[] }) {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Course Syllabus</span>
                    <h2 className="text-3xl font-bold text-slate-900 mt-2">{title}</h2>
                </div>

                <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-100">
                    <table className="w-full text-left border-collapse bg-white">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="p-4 font-bold border-r border-gray-800 w-24 text-center">Session</th>
                                <th className="p-4 font-bold border-r border-gray-800 w-1/4">Module/Topic</th>
                                <th className="p-4 font-bold border-r border-gray-800 w-24 text-center">Hours</th>
                                <th className="p-4 font-bold">Description / Hands-On Activities</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {items.map((item, idx) => (
                                <tr key={idx} className="hover:bg-orange-50 transition-colors even:bg-gray-50/50">
                                    <td className="p-4 text-center font-bold text-slate-700">{item.session}</td>
                                    <td className="p-4 font-bold text-orange-600">{item.topic}</td>
                                    <td className="p-4 text-center font-medium text-slate-600">{item.hours}</td>
                                    <td className="p-4 text-slate-700">{item.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
