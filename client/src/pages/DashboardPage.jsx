import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { FileText, CheckCircle, AlertCircle, Users, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const data = [
    { name: 'Week 1', submitted: 12, approved: 10 },
    { name: 'Week 2', submitted: 15, approved: 14 },
    { name: 'Week 3', submitted: 18, approved: 16 },
    { name: 'Week 4', submitted: 14, approved: 12 },
];

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Manager Dashboard</h1>
                    <p className="text-slate-400 text-sm mt-1">Monitor team compliance, reports, and real-time project analytics.</p>
                </div>
                <div className="flex gap-4">
                    <Link to="/reports/history" className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 rounded-xl text-sm font-medium transition border border-slate-800">View All Reports</Link>
                    <Link to="/report/new" className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-medium transition shadow-lg shadow-indigo-600/30">+ New Report</Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                    { title: 'Total Submitted', value: '18/20', icon: FileText, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
                    { title: 'Compliance Rate', value: '90%', icon: CheckCircle, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                    { title: 'Needs Correction', value: '3', icon: AlertCircle, color: 'text-amber-400', bg: 'bg-amber-500/10' },
                    { title: 'Active Team', value: '12 Members', icon: Users, color: 'text-purple-400', bg: 'bg-purple-500/10' },
                ].map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 backdrop-blur-xl"
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">{stat.title}</p>
                                <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                            </div>
                            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                                <stat.icon className="h-6 w-6" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="lg:col-span-2 rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6"
                >
                    <h3 className="text-lg font-bold mb-4">Submission Trends Over Time</h3>
                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                                <XAxis dataKey="name" stroke="#64748b" />
                                <YAxis stroke="#64748b" />
                                <Tooltip contentStyle={{ backgroundColor: '#090d16', borderColor: '#1e293b', borderRadius: '0.75rem', color: '#f8fafc' }} />
                                <Bar dataKey="submitted" fill="#6366f1" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="approved" fill="#10b981" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                <div className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Navigation</h3>
                        <div className="space-y-3">
                            <Link to="/projects" className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/50 hover:bg-slate-800 transition border border-slate-800/50">
                                <span className="text-sm font-medium">Project Management</span>
                                <ArrowUpRight className="h-4 w-4 text-slate-400" />
                            </Link>
                            <Link to="/admin/users" className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/50 hover:bg-slate-800 transition border border-slate-800/50">
                                <span className="text-sm font-medium">User Roles & Admin</span>
                                <ArrowUpRight className="h-4 w-4 text-slate-400" />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-6 p-4 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-xs text-indigo-300">
                        💡 Pro Tip: Use the review workflow to easily track weekly project blockers.
                    </div>
                </div>
            </div>
        </div>
    );
}