import React from 'react';
import { motion } from 'framer-motion';
import { User, FileText, Award, Code, Briefcase, CheckCircle2 } from 'lucide-react';

export default function TeamMemberProfile() {
    return (
        <div className="min-h-screen bg-[#09090b] text-slate-100 p-6 md:p-10 max-w-5xl mx-auto">
            {/* Profile Header Card */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-[#18181b] border border-[#27272a] rounded-3xl p-8 shadow-2xl mb-8 backdrop-blur-xl"
            >
                <div className="h-20 w-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-inner">
                    <User className="h-10 w-10" />
                </div>
                <div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        Software Engineering Intern
                    </span>
                    <h1 className="text-3xl font-black mt-2 text-white">Liyanage Kawindu Madhushankha</h1>
                    <p className="text-sm text-slate-400 mt-0.5">University of Vavuniya • BICT (Hons) Software Engineering</p>
                </div>
            </motion.div>

            {/* KPI Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-[#18181b] border border-[#27272a] rounded-2xl flex items-center gap-4 shadow-xl">
                    <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl"><FileText className="h-6 w-6" /></div>
                    <div><p className="text-xs uppercase text-slate-400 font-semibold">Total Reports</p><h3 className="text-2xl font-black mt-1 text-white">16 Reports</h3></div>
                </div>
                <div className="p-6 bg-[#18181b] border border-[#27272a] rounded-2xl flex items-center gap-4 shadow-xl">
                    <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl"><Award className="h-6 w-6" /></div>
                    <div><p className="text-xs uppercase text-slate-400 font-semibold">Approval Rating</p><h3 className="text-2xl font-black mt-1 text-white">96.5%</h3></div>
                </div>
                <div className="p-6 bg-[#18181b] border border-[#27272a] rounded-2xl flex items-center gap-4 shadow-xl">
                    <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl"><Code className="h-6 w-6" /></div>
                    <div><p className="text-xs uppercase text-slate-400 font-semibold">Tech Stack</p><h3 className="text-2xl font-black mt-1 text-white">MERN & .NET</h3></div>
                </div>
            </div>
        </div>
    );
}