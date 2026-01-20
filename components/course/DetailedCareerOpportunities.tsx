import { Briefcase, Building2, TrendingUp, Users, Settings, Award, Link, Cpu } from 'lucide-react';

const iconMap: Record<string, any> = {
    "Briefcase": Briefcase,
    "Building2": Building2,
    "TrendingUp": TrendingUp,
    "Users": Users,
    "Settings": Settings,
    "Award": Award,
    "Link": Link,
    "Cpu": Cpu
};

export default function DetailedCareerOpportunities({ items, courseName = "SAP Ariba" }: { items?: any[], courseName?: string }) {
    const defaultRoles = [
        {
            title: "SAP Ariba Consultant (Entry Level)",
            salary: "$80,000 - $110,000 (USA) | ₹8 - 12 LPA (India)",
            responsibilities: "Configure workflows, manage user roles, support end users",
            employers: "Accenture, Capgemini, Deloitte, Infosys, Wipro",
            path: "2-3 years -> Mid-level Consultant",
            icon: "Users",
            color: "blue"
        },
        {
            title: "Procurement Analyst / Vendor Manager",
            salary: "$60,000 - $90,000 (USA) | ₹6 - 10 LPA (India)",
            responsibilities: "Manage supplier relationships, spend analysis, cost savings",
            employers: "Manufacturing, Retail, Technology, Finance sectors",
            path: "3-5 years -> Senior Analyst / Manager",
            icon: "TrendingUp",
            color: "green"
        },
        {
            title: "Sourcing Specialist",
            salary: "$70,000 - $100,000 (USA) | ₹7 - 11 LPA (India)",
            responsibilities: "Run sourcing events, evaluate suppliers, negotiate contracts",
            employers: "Consulting, Enterprise, Technology",
            path: "3-5 years -> Sourcing Manager",
            icon: "Briefcase",
            color: "purple"
        },
        {
            title: "Spend Management Analyst",
            salary: "$65,000 - $95,000 (USA) | ₹6 - 10 LPA (India)",
            responsibilities: "Conduct spend analysis, identify savings, drive strategies",
            employers: "Consulting firms, Multinationals",
            path: "3-5 years -> Senior Analyst / Manager",
            icon: "TrendingUp",
            color: "orange"
        },
        {
            title: "ERP Integration Consultant",
            salary: "$90,000 - $120,000 (USA) | ₹10 - 15 LPA (India)",
            responsibilities: "Integrate Ariba with S/4HANA, manage data flows, troubleshoot",
            employers: "Consulting, Technology, Pharma",
            path: "3-5 years -> Senior Consultant / Architect",
            icon: "Settings",
            color: "cyan"
        }
    ];

    const roles = items || defaultRoles;

    const getColorClasses = (color: string) => {
        const map: any = {
            blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" },
            green: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-100" },
            purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100" },
            orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-100" },
            cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-100" }
        };
        return map[color] || map.blue;
    };

    return (
        <section className="py-8 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-6">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        Career Paths
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Career Opportunities After {courseName} Training
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Step into global consulting and implementation roles with competitive salaries
                    </p>
                </div>

                {/* Roles List */}
                <div className="space-y-4">
                    {roles.map((role: any, idx: number) => {
                        const colors = getColorClasses(role.color);
                        const Icon = iconMap[role.icon] || Users;
                        return (
                            <div key={idx} className={`bg-white rounded-xl p-6 border ${colors.border} shadow-sm hover:shadow-md transition-all`}>
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                                    {/* Title & Salary */}
                                    <div className="lg:col-span-4">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className={`w-10 h-10 rounded-lg ${colors.bg} ${colors.text} flex items-center justify-center flex-shrink-0`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="font-bold text-slate-900">{role.title}</h3>
                                        </div>
                                        <div className="pl-14">
                                            <div className="text-sm font-semibold text-orange-600 flex items-center gap-1">
                                                <span className="text-slate-400 text-xs font-normal uppercase tracking-wider">Salary:</span>
                                                {role.salary}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Responsibilities */}
                                    <div className="lg:col-span-3">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Responsibilities</div>
                                        <p className="text-sm text-slate-600 leading-relaxed">{role.responsibilities}</p>
                                    </div>

                                    {/* Employers */}
                                    <div className="lg:col-span-3">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Top Employers</div>
                                        <p className="text-sm text-slate-600">{role.employers}</p>
                                    </div>

                                    {/* Career Path */}
                                    <div className="lg:col-span-2">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Career Path</div>
                                        <p className="text-sm text-blue-600 font-medium">{role.path}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
