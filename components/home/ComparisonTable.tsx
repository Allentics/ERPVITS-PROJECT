import { Check, X } from 'lucide-react';

export default function ComparisonTable() {
    return (
        <div className="overflow-x-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Why ERPVITS is the Best Choice?</h3>
            <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <thead>
                    <tr className="bg-slate-900 text-white">
                        <th className="p-4 text-sm md:text-base">Learning Aspects</th>
                        <th className="p-4 text-sm md:text-base border-l border-slate-700 bg-orange-600">ERPVITS (Leading SAP Institute)</th>
                        <th className="p-4 text-sm md:text-base border-l border-slate-700">Local SAP Training Institute</th>
                    </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-semibold text-gray-700">Trainer Experience (Avg.)</td>
                        <td className="p-4 border-l border-gray-100 bg-orange-50 font-bold text-gray-900">✅ 13+ Years</td>
                        <td className="p-4 border-l border-gray-100 text-gray-500">10–12 Years (or 5-8 Years)</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-semibold text-gray-700">Real-Time Project Scenarios</td>
                        <td className="p-4 border-l border-gray-100 bg-orange-50 font-bold text-green-600">✅ Yes</td>
                        <td className="p-4 border-l border-gray-100 text-gray-500">Limited</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-semibold text-gray-700">Guided Project Implementation</td>
                        <td className="p-4 border-l border-gray-100 bg-orange-50 font-bold text-green-600">✅ Yes</td>
                        <td className="p-4 border-l border-gray-100 text-red-400">❌ No</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-semibold text-gray-700">Placement Support</td>
                        <td className="p-4 border-l border-gray-100 bg-orange-50 font-bold text-green-600">✅ Resume & Interview Prep</td>
                        <td className="p-4 border-l border-gray-100 text-gray-500">Limited / None</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-semibold text-gray-700">Global Certification Guidance</td>
                        <td className="p-4 border-l border-gray-100 bg-orange-50 font-bold text-green-600">✅ Yes</td>
                        <td className="p-4 border-l border-gray-100 text-red-400">❌ No</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-semibold text-gray-700">Lifetime Recorded Sessions</td>
                        <td className="p-4 border-l border-gray-100 bg-orange-50 font-bold text-green-600">✅ Yes</td>
                        <td className="p-4 border-l border-gray-100 text-gray-500">Limited (6–12 Months)</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-semibold text-gray-700">Post-Training Assistance</td>
                        <td className="p-4 border-l border-gray-100 bg-orange-50 font-bold text-gray-900">✅ Resume & Interview Guidance</td>
                        <td className="p-4 border-l border-gray-100 text-gray-500">Feedback & Certificate Only</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-semibold text-gray-700">Learning Quality vs Pricing</td>
                        <td className="p-4 border-l border-gray-100 bg-orange-50 font-bold text-gray-900">💼 Justified Pricing (Quality-Focused)</td>
                        <td className="p-4 border-l border-gray-100 text-gray-500">Premium or Low (Limited Depth)</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-semibold text-gray-700">Learner Satisfaction</td>
                        <td className="p-4 border-l border-gray-100 bg-orange-50 font-bold text-green-600">✅ 4.8/5 Rating</td>
                        <td className="p-4 border-l border-gray-100 text-gray-500">3.8/5 - 4.5/5 Rating</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
