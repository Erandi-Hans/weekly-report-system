import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Send, Plus, Trash2, FileEdit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ReportFormPage() {
    const [tasks, setTasks] = useState([{ taskName: '', priority: 'Medium', actualPercentage: 100, timeSpent: 8, outputDeliverable: '' }]);
    const navigate = useNavigate();

    const addTask = () => {
        setTasks([...tasks, { taskName: '', priority: 'Medium', actualPercentage: 100, timeSpent: 8, outputDeliverable: '' }]);
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/reports/history');
    };

    return (
        <div className="min-h-screen bg-[#09090b] text-slate-100 p-6 md:p-10 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#18181b] border border-[#27272a] rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-xl"
            >
                <div className="pb-6 mb-6 border-b border-[#27272a]">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        Submission Wizard
                    </span>
                    <h1 className="text-3xl font-black mt-2 text-white flex items-center gap-3">
                        <FileEdit className="h-7 w-7 text-cyan-400" /> Create Weekly Work Report
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">Fill in standardized metrics, task outputs, and hours for manager review.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">Week Date Range</label>
                            <input type="text" placeholder="2026-09-01 to 2026-09-06" className="w-full bg-[#09090b] border border-[#27272a] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-cyan-500 transition shadow-inner" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">Project / Category Tag</label>
                            <select className="w-full bg-[#09090b] border border-[#27272a] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-cyan-500 transition shadow-inner">
                                <option className="bg-[#18181b]">SkillPivotlk Platform</option>
                                <option className="bg-[#18181b]">Internal Tooling</option>
                                <option className="bg-[#18181b]">SillaraAI Assistant</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-white">Tasks Completed Matrix</h3>
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                type="button"
                                onClick={addTask}
                                className="flex items-center gap-1.5 px-4 py-2 bg-cyan-500 text-black hover:bg-cyan-400 text-xs font-bold rounded-xl transition shadow-lg shadow-cyan-500/20"
                            >
                                <Plus className="h-4 w-4" /> Add Task Entry
                            </motion.button>
                        </div>

                        <div className="space-y-4">
                            {tasks.map((task, idx) => (
                                <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#09090b] p-4 rounded-2xl border border-[#27272a] relative">
                                    <input type="text" placeholder="Task Name" className="bg-[#18181b] border border-[#27272a] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500" />
                                    <select className="bg-[#18181b] border border-[#27272a] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500">
                                        <option className="bg-[#18181b]">Low Priority</option>
                                        <option className="bg-[#18181b]">Medium Priority</option>
                                        <option className="bg-[#18181b]">High Priority</option>
                                    </select>
                                    <input type="text" placeholder="Deliverable output" className="bg-[#18181b] border border-[#27272a] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500" />
                                    <div className="flex items-center justify-between gap-2">
                                        <input type="number" placeholder="Hours" className="w-full bg-[#18181b] border border-[#27272a] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500" />
                                        <button type="button" onClick={() => removeTask(idx)} className="text-rose-400 hover:text-rose-300 p-2"><Trash2 className="h-4 w-4" /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">Key Blockers / Challenges</label>
                            <textarea rows="3" placeholder="Describe any roadblocks encountered..." className="w-full bg-[#09090b] border border-[#27272a] rounded-2xl p-4 text-white focus:outline-none focus:border-cyan-500 transition shadow-inner text-sm"></textarea>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">Key Achievements / Highlights</label>
                            <textarea rows="3" placeholder="Highlight primary accomplishments..." className="w-full bg-[#09090b] border border-[#27272a] rounded-2xl p-4 text-white focus:outline-none focus:border-cyan-500 transition shadow-inner text-sm"></textarea>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 pt-6 border-t border-[#27272a]">
                        <motion.button whileTap={{ scale: 0.96 }} type="button" className="flex items-center gap-2 px-6 py-3 bg-[#27272a] hover:bg-slate-700 font-bold rounded-xl transition text-sm text-white shadow">
                            <Save className="h-4 w-4" /> Save as Draft
                        </motion.button>
                        <motion.button whileTap={{ scale: 0.96 }} type="submit" className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition text-sm shadow-xl shadow-cyan-500/20">
                            <Send className="h-4 w-4" /> Submit for Review
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}