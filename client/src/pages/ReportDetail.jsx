import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, FileText, Award } from 'lucide-react';

export default function ReportDetail() {
    const { id } = useParams();

    return (
        <div className="min-h-screen bg-[#09090b] text-slate-100 p-6 md:p-10 max-w-4xl mx-auto">
            <Link to="/reports/history" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 mb-6 group">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition" /> Back to History
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#18181b] border border-[#27272a] rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-xl space-y-8"
            >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-[#27272a] gap-4">
                    <div>
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            Deep-Dive Report Breakdown
                        </span>
                        <h1 className="text-3xl font-black mt-2 text-white">Week: 2026-09-01 to 2026-09-06</h1>
                    </div>
                    <span className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-2 shadow-sm">
                        <CheckCircle2 className="h-4 w-4" /> Approved & Verified
                    </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded-2xl bg-[#09090b] border border-[#27272a]">
                        <span className="text-xs uppercase text-slate-400 font-semibold">Project</span>
                        <h4 className="text-base font-bold text-white mt-1">SkillPivotlk</h4>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#09090b] border border-[#27272a]">
                        <span className="text-xs uppercase text-slate-400 font-semibold">Total Hours</span>
                        <h4 className="text-base font-bold text-cyan-400 mt-1">32 Hours</h4>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#09090b] border border-[#27272a]">
                        <span className="text-xs uppercase text-slate-400 font-semibold">Task Completion</span>
                        <h4 className="text-base font-bold text-emerald-400 mt-1">100% Achieved</h4>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#09090b] border border-[#27272a]">
                        <span className="text-xs uppercase text-slate-400 font-semibold">Reviewer</span>
                        <h4 className="text-base font-bold text-purple-400 mt-1">Lead Manager</h4>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-3 text-white flex items-center gap-2">
                        <FileText className="h-5 w-5 text-cyan-400" /> Completed Tasks & Deliverables
                    </h3>
                    <div className="p-5 rounded-2xl bg-[#09090b] border border-[#27272a] text-sm text-slate-300 leading-relaxed">
                        Successfully configured MERN backend architecture, established Swagger UI endpoint documentation, and deployed interactive React + Tailwind CSS client dashboard with Framer Motion animations.
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-[#09090b] border border-[#27272a]">
                        <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Key Blockers Overcome</h4>
                        <p className="text-sm text-slate-300 leading-relaxed">Resolved CORS and JWT session handshake latency across local development clusters.</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-[#09090b] border border-[#27272a]">
                        <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Key Achievements</h4>
                        <p className="text-sm text-slate-300 leading-relaxed">Delivered end-to-end review/correction cycle ahead of sprint milestone schedule.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}