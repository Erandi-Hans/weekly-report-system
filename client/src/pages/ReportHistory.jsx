import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Edit3, Search, History, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ReportHistory() {
    const [searchTerm, setSearchTerm] = useState('');

    const reports = [
        { id: '1', week: '2026-09-01 to 2026-09-06', project: 'SkillPivotlk', status: 'Approved' },
        { id: '2', week: '2026-08-24 to 2026-08-30', project: 'Internal Tooling', status: 'Needs Correction' },
        { id: '3', week: '2026-08-17 to 2026-08-23', project: 'SillaraAI', status: 'Submitted' },
    ];

    const filteredReports = reports.filter(r => r.project.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="min-h-screen bg-[#09090b] text-slate-100 p-6 md:p-10 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-[#27272a] gap-4">
                <div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        Audit Archive
                    </span>
                    <h1 className="text-3xl font-black mt-2 text-white flex items-center gap-3">
                        <History className="h-7 w-7 text-cyan-400" /> Historical Reports Log
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">Track past submissions, review timestamps, and approval statuses.</p>
                </div>
                <Link to="/report/new">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.96 }}
                        className="px-5 py-3 bg-cyan-500 text-black hover:bg-cyan-400 rounded-xl text-sm font-bold transition shadow-xl shadow-cyan-500/20"
                    >
                        + Create New Report
                    </motion.button>
                </Link>
            </div>

            {/* Search Filter Bar */}
            <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search by project or category tag..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-[#18181b] border border-[#27272a] rounded-2xl px-4 py-3 pl-12 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 shadow-inner text-sm"
                    />
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-[#18181b] border border-[#27272a] rounded-2xl overflow-hidden shadow-xl"
            >
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-[#27272a] bg-[#18181b] text-xs font-semibold uppercase text-slate-400 tracking-wider">
                            <th className="p-5">Week Range</th>
                            <th className="p-5">Project / Category</th>
                            <th className="p-5">Status</th>
                            <th className="p-5 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#27272a] text-sm">
                        {filteredReports.map((rep) => (
                            <tr key={rep.id} className="hover:bg-[#27272a]/40 transition group">
                                <td className="p-5 font-semibold text-white">{rep.week}</td>
                                <td className="p-5 text-slate-300 font-medium">{rep.project}</td>
                                <td className="p-5">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${rep.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25' :
                                            rep.status === 'Needs Correction' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/25' :
                                                'bg-cyan-500/10 text-cyan-400 border border-cyan-500/25'
                                        }`}>
                                        {rep.status}
                                    </span>
                                </td>
                                <td className="p-5 text-right flex justify-end gap-2.5">
                                    <Link to={`/report/view/${rep.id}`} className="p-2.5 bg-[#09090b] border border-[#27272a] hover:border-cyan-500/50 rounded-xl text-slate-300 transition shadow">
                                        <Eye className="h-4 w-4" />
                                    </Link>
                                    <Link to={`/report/edit/${rep.id}`} className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 rounded-xl text-cyan-400 transition shadow">
                                        <Edit3 className="h-4 w-4" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>
        </div>
    );
}