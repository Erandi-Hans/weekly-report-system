import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area
} from 'recharts';
import {
    FileText, CheckCircle2, AlertTriangle, Users, ArrowUpRight, Plus,
    TrendingUp, ShieldCheck, Clock, Activity, ChevronRight, Sparkles
} from 'lucide-react';

const submissionData = [
    { name: 'Week 1', submitted: 14, approved: 12 },
    { name: 'Week 2', submitted: 18, approved: 16 },
    { name: 'Week 3', submitted: 22, approved: 19 },
    { name: 'Week 4', submitted: 20, approved: 18 },
];

const performanceData = [
    { day: 'Mon', hours: 32 },
    { day: 'Tue', hours: 45 },
    { day: 'Wed', hours: 50 },
    { day: 'Thu', hours: 42 },
    { day: 'Fri', hours: 38 },
];

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="min-h-screen bg-[#09090b] text-slate-100 p-6 md:p-10 max-w-7xl mx-auto">
            {/* Top Header Bar */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-[#27272a] pb-6"
            >
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            Manager Command Center
                        </span>
                        <span className="text-xs text-slate-500">• Live Analytics</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
                        Team Intelligence <Sparkles className="h-6 w-6 text-cyan-400" />
                    </h1>
                </div>

                <div className="flex items-center gap-3">
                    <Link to="/reports/history">
                        <motion.button
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            className="px-4 py-2.5 bg-[#18181b] hover:bg-[#27272a] text-slate-200 rounded-xl text-sm font-medium transition border border-[#27272a] shadow-lg"
                        >
                            All Reports
                        </motion.button>
                    </Link>
                    <Link to="/report/new">
                        <motion.button
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black rounded-xl text-sm font-bold transition shadow-xl shadow-cyan-500/20"
                        >
                            <Plus className="h-4 w-4" /> New Weekly Report
                        </motion.button>
                    </Link>
                </div>
            </motion.div>

            {/* Bento Grid Metrics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    { title: 'Reports Submitted', value: '20/22', change: '+12% this week', icon: FileText, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
                    { title: 'Compliance Rate', value: '91%', change: 'Optimal threshold', icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                    { title: 'Needs Correction', value: '2 Items', change: 'Requires review', icon: AlertTriangle, color: 'text-amber-400', bg: 'bg-amber-500/10' },
                    { title: 'Active Developers', value: '14 Active', change: '100% attendance', icon: Users, color: 'text-purple-400', bg: 'bg-purple-500/10' },
                ].map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="rounded-2xl bg-[#18181b] border border-[#27272a] p-6 shadow-xl relative overflow-hidden group"
                    >
                        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition duration-500" />
                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <span className="text-[11px] font-semibold text-slate-400 bg-[#09090b] px-2.5 py-1 rounded-lg border border-[#27272a]">
                                {stat.change}
                            </span>
                        </div>
                        <div className="relative z-10">
                            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">{stat.title}</p>
                            <h3 className="text-3xl font-black mt-1 text-white tracking-tight">{stat.value}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bento Grid Main Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Main Chart Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="lg:col-span-2 rounded-2xl bg-[#18181b] border border-[#27272a] p-6 shadow-xl flex flex-col justify-between"
                >
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-cyan-400" /> Submission & Approval Analytics
                            </h3>
                            <p className="text-xs text-slate-400 mt-0.5">Comparative metrics across consecutive sprint weeks</p>
                        </div>
                        <div className="flex gap-2">
                            {['Monthly', 'Weekly'].map((t) => (
                                <button key={t} className="px-3 py-1 text-xs font-semibold rounded-lg bg-[#09090b] border border-[#27272a] text-slate-300 hover:text-white transition">
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={submissionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                                <XAxis dataKey="name" stroke="#71717a" fontSize={12} tickLine={false} />
                                <YAxis stroke="#71717a" fontSize={12} tickLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '1rem', color: '#fff', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)' }}
                                />
                                <Bar dataKey="submitted" fill="#06b6d4" radius={[6, 6, 0, 0]} name="Submitted" />
                                <Bar dataKey="approved" fill="#10b981" radius={[6, 6, 0, 0]} name="Approved" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                {/* Side Performance Widget */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="rounded-2xl bg-[#18181b] border border-[#27272a] p-6 shadow-xl flex flex-col justify-between"
                >
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <Activity className="h-5 w-5 text-emerald-400" /> Workload Pulse
                            </h3>
                            <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-semibold">Live</span>
                        </div>
                        <p className="text-xs text-slate-400 mb-6">Total development engineering hours logged daily.</p>

                        <div className="h-44 w-full mb-6">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={performanceData}>
                                    <defs>
                                        <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <Tooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '0.5rem', color: '#fff' }} />
                                    <Area type="monotone" dataKey="hours" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorHours)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-[#27272a]">
                        <Link to="/projects" className="flex items-center justify-between p-3.5 rounded-xl bg-[#09090b] border border-[#27272a] hover:border-cyan-500/50 transition group">
                            <span className="text-sm font-medium text-slate-200 group-hover:text-cyan-400 transition">Project Management Pipelines</span>
                            <ChevronRight className="h-4 w-4 text-slate-500 group-hover:translate-x-1 transition" />
                        </Link>
                        <Link to="/admin/users" className="flex items-center justify-between p-3.5 rounded-xl bg-[#09090b] border border-[#27272a] hover:border-cyan-500/50 transition group">
                            <span className="text-sm font-medium text-slate-200 group-hover:text-cyan-400 transition">User Access & Roles Admin</span>
                            <ChevronRight className="h-4 w-4 text-slate-500 group-hover:translate-x-1 transition" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}