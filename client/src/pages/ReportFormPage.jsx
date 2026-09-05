import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Send, Plus, Trash2 } from 'lucide-react';

export default function ReportFormPage() {
    const [tasks, setTasks] = useState([{ taskName: '', priority: 'Medium', status: 'In Progress', timeSpent: 8 }]);

    const addTask = () => {
        setTasks([...tasks, { taskName: '', priority: 'Medium', status: 'In Progress', timeSpent: 8 }]);
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 p-8 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
                <h1 className="text-2xl font-bold mb-2">Create / Edit Weekly Report</h1>
                <p className="text-slate-400 text-sm mb-6">Fill in your task progress, blockers, and hours for the week.</p>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Week Date Range</label>
                            <input type="text" placeholder="2026-09-01 to 2026-09-06" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Project Category</label>
                            <select className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500">
                                <option>SkillPivotlk (Internal Tooling)</option>
                                <option>Client Portal API</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold">Tasks Completed</h3>
                            <button type="button" onClick={addTask} className="flex items-center gap-1 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold rounded-lg transition">
                                <Plus className="h-4 w-4" /> Add Task
                            </button>
                        </div>

                        <div className="space-y-4">
                            {tasks.map((task, idx) => (
                                <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
                                    <input type="text" placeholder="Task Name" className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white" />
                                    <select className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white">
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                    <input type="text" placeholder="Deliverable output" className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white" />
                                    <div className="flex items-center justify-between">
                                        <input type="number" placeholder="Hours" className="w-20 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white" />
                                        <button type="button" onClick={() => removeTask(idx)} className="text-rose-400 hover:text-rose-300 p-2"><Trash2 className="h-4 w-4" /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Key Blockers / Challenges</label>
                            <textarea rows="3" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500"></textarea>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Key Achievements / Highlights</label>
                            <textarea rows="3" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500"></textarea>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 pt-4 border-t border-slate-800">
                        <button type="button" className="flex items-center gap-2 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 font-semibold rounded-xl transition text-sm">
                            <Save className="h-4 w-4" /> Save as Draft
                        </button>
                        <button type="submit" className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 font-semibold rounded-xl transition text-sm shadow-lg shadow-indigo-600/30">
                            <Send className="h-4 w-4" /> Submit Report
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}