import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ReportDetail() {
    const { id } = useParams();

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 p-8 max-w-4xl mx-auto">
            <Link to="/reports/history" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-6 transition">
                <ArrowLeft className="h-4 w-4" /> Back to History
            </Link>

            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl space-y-6">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Weekly Report Detail</span>
                        <h1 className="text-2xl font-bold mt-1">Week: 2026-09-01 to 2026-09-06</h1>
                    </div>
                    <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4" /> Approved
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-950/40 border border-slate-800 text-sm">
                    <div><span className="text-slate-400">Project:</span> SkillPivotlk</div>
                    <div><span className="text-slate-400">Total Hours:</span> 30 Hours</div>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-3">Completed Tasks</h3>
                    <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 text-sm text-slate-300">
                        Successfully configured backend database, integrated Swagger UI documentation, and implemented React routing structure.
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800">
                        <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Key Blockers</h4>
                        <p className="text-sm text-slate-300">None reported for this week.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800">
                        <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Key Achievements</h4>
                        <p className="text-sm text-slate-300">Completed full MERN backend setup and routing architecture.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}