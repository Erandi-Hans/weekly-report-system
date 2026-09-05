import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Edit3 } from 'lucide-react';

export default function ReportHistory() {
    const reports = [
        { id: '1', week: '2026-09-01 to 2026-09-06', project: 'SkillPivotlk', status: 'Approved' },
        { id: '2', week: '2026-08-24 to 2026-08-30', project: 'Internal Tooling', status: 'Needs Correction' },
        { id: '3', week: '2026-08-17 to 2026-08-23', project: 'Client Portal', status: 'Submitted' },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 p-8 max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">My Report History</h1>
                <Link to="/report/new" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-medium transition">+ Create New Report</Link>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-800 bg-slate-900/90 text-xs font-semibold uppercase text-slate-400">
                            <th className="p-4">Week Range</th>
                            <th className="p-4">Project</th>
                            <th className="p-4">Status</th>
                            <th className="p-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-sm">
                        {reports.map((rep) => (
                            <tr key={rep.id} className="hover:bg-slate-800/30 transition">
                                <td className="p-4 font-medium">{rep.week}</td>
                                <td className="p-4 text-slate-400">{rep.project}</td>
                                <td className="p-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${rep.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                            rep.status === 'Needs Correction' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                                                'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                                        }`}>
                                        {rep.status}
                                    </span>
                                </td>
                                <td className="p-4 text-right flex justify-end gap-3">
                                    <Link to={`/report/view/${rep.id}`} className="p-2 bg-slate-800/60 hover:bg-slate-800 rounded-lg text-slate-300 transition"><Eye className="h-4 w-4" /></Link>
                                    <Link to={`/report/edit/${rep.id}`} className="p-2 bg-indigo-600/20 hover:bg-indigo-600/40 rounded-lg text-indigo-400 transition"><Edit3 className="h-4 w-4" /></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}