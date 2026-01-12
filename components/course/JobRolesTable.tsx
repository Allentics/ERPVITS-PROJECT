import React from 'react';

interface JobRole {
    role: string;
    skills: string;
    companies: string;
    salary: string;
}

interface JobRolesTableProps {
    title: string;
    description: string;
    items: JobRole[];
}

export default function JobRolesTable({ title, description, items }: JobRolesTableProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
            {/* Orange Underline */}
            <div className="w-16 h-1 bg-orange-500 rounded-full mb-8"></div>

            {/* Content text */}
            <div className="prose prose-lg text-slate-600 mb-12 max-w-none">
                {/* This handles the paragraph splits if the description contains newlines, 
                     though typically we might pass content as an array or use a rich text parser. 
                     For simplicity, we'll split by double newline. */}
                {description && description.split('\n\n').map((para, idx) => (
                    <p key={idx} className="mb-4">{para}</p>
                ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                <table className="w-full text-left border-collapse bg-white">
                    <thead className="bg-gray-50 text-slate-800">
                        <tr>
                            <th className="p-4 font-bold border-r border-b border-gray-200 w-1/5">Job Role</th>
                            <th className="p-4 font-bold border-r border-b border-gray-200 w-1/3">Skills Required</th>
                            <th className="p-4 font-bold border-r border-b border-gray-200 w-1/4">Top Hiring Companies</th>
                            <th className="p-4 font-bold border-b border-gray-200 w-1/6">Avg. Salary (Freshers)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {items.map((item, idx) => (
                            <tr key={idx} className="">
                                <td className="p-4 border-r border-gray-200 text-slate-700 font-medium align-top">{item.role}</td>
                                <td className="p-4 border-r border-gray-200 text-slate-600 align-top">{item.skills}</td>
                                <td className="p-4 border-r border-gray-200 text-slate-600 align-top">{item.companies}</td>
                                <td className="p-4 text-slate-700 font-semibold align-top">{item.salary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
