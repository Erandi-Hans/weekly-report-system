import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash, Edit, Kanban, FolderGit2, CheckCircle2, Clock, Users } from 'lucide-react';

export default function ProjectManagement() {
    const [projects, setProjects] = useState([
        { id: 1, name: 'SkillPivotlk', desc: 'IT Internship Discovery Platform', status: 'In Progress', members: 4, deadline: '2026-09-30' },
        { id: 2, name: 'Internal Tooling', desc: 'Weekly Report & Analytics System', status: 'Active', members: 3, deadline: '2026-10-15' },
        { id: 3, name: 'SillaraAI Integration', desc: 'Automated AI Inventory Assistant', status: 'Planning', members: 2, deadline: '2026-11-01' },
    ]);

    return (
        <div className="min-h-screen bg-[#09090b] text-slate-100 p-6 md:p-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-[#27272a] gap-4">
                <div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        Pipeline Control
                    </span>
                    <h1 className="text-3xl font-black mt-2 text-white flex items-center gap-3">
                        <FolderGit2 className="h-7 w-7 text-cyan-400" /> Project Management Hub
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">Organize sprints, monitor resource allocation, and oversee deliverables.</p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center gap-2 px-5 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl text-sm transition shadow-xl shadow-cyan-500/20"
                >
                    <Plus className="h-4 w-4" /> Add New Project
                </motion.button>
            </div>

            {/* Kanban / Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((proj, idx) => (
                    <motion.div
                        key={proj.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6 shadow-xl flex flex-col justify-between relative overflow-hidden group"
                    >
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                    {proj.status}
                                </span>
                                <div className="flex gap-1.5">
                                    <button className="p-2 bg-[#09090b] border border-[#27272a] hover:border-cyan-500/50 rounded-xl text-slate-400 hover:text-white transition">
                                        <Edit className="h-3.5 w-3.5" />
                                    </button>
                                    <button className="p-2 bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 rounded-xl text-rose-400 transition">
                                        <Trash className="h-3.5 w-3.5" />
                                    </button>
                                </div>
                            </div>

                            <h3 className="text-xl font-black text-white mb-2">{proj.name}</h3>
                            <p className="text-sm text-slate-400 mb-6 leading-relaxed">{proj.desc}</p>
                        </div>

                        <div className="pt-4 border-t border-[#27272a] flex justify-between items-center text-xs text-slate-400">
                            <span className="flex items-center gap-1.5 font-medium"><Users className="h-4 w-4 text-cyan-400" /> {proj.members} Assigned</span>
                            <span className="flex items-center gap-1.5 font-medium"><Clock className="h-4 w-4 text-emerald-400" /> {proj.deadline}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}