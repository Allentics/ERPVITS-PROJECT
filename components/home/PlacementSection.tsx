import { Building2 } from 'lucide-react';

const stats = [
    { label: "Placement Success Rate", val: "95%+" },
    { label: "Average Time to Job", val: "2-4 Weeks" },
    { label: "Salary Increase", val: "30-80%" },
    { label: "Placements in", val: "15+ Countries" },
    { label: "Active Hiring Partners", val: "300+" },
    { label: "New Positions Monthly", val: "40+" }
]

export default function PlacementSection() {
    return (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Where Do ERPVITS Learners Work?</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                    Learners with practical SAP training from ERPVITS gain access to employment in Fortune 500 companies, multinational corporations, and global consulting firms.
                </p>

                {/* Company Logos Grid Placeholder - Using text for now as I don't have logos */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {['Accenture', 'Deloitte', 'Capgemini', 'IBM', 'Wipro', 'Infosys', 'SAP', 'Microsoft', 'Google', 'Amazon', 'TCS', 'Oracle'].map((brand, i) => (
                        <div key={i} className="bg-white h-16 rounded-lg flex items-center justify-center shadow-sm border border-gray-100 font-bold text-gray-400">
                            {brand}
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="bg-blue-900 rounded-3xl p-10 text-white shadow-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl lg:text-4xl font-extrabold text-orange-400 mb-2">{stat.val}</div>
                                <div className="text-xs md:text-sm font-medium text-blue-200 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
