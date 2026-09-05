import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, XCircle, ArrowLeft, MessageSquare, ShieldCheck, Clock, User } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function ManagerReview() {
    const { id } = useParams();
    const [comment, setComment] = useState('');
    const [statusAction, setStatusAction] = useState(null);

    return (
        <div className="min-h-screen bg-[#09090b] text-slate-100 p-6 md:p-10 max-w-5xl mx-auto">
            <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 mb-6 transition group">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition" /> Back to Dashboard
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#18181b] border border-[#27272a] rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-xl"
            >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 mb-6 border-b border-[#27272a] gap-4">
                    <div>
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            Evaluation Mode
                        </span>
                        <h1 className="text-3xl font-black mt-2 text-white">Manager Report Review</h1>
                        <p className="text-slate-400 text-sm mt-1">Inspect submission metrics, verify task deliverables, and provide final sign-off.</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#09090b] border border-[#27272a]">
                        <Clock className="h-4 w-4 text-cyan-400" />
                        <span className="text-xs font-semibold text-slate-300">Week: 2026-09-01 to 2026-09-06</span>
                    </div>
                </div>

                {/* Submitter Summary Card */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="p-5 rounded-2xl bg-[#09090b] border border-[#27272a] flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                            <User className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-xs uppercase text-slate-400 font-semibold">Team Member</p>
                            <h4 className="text-base font-bold text-white mt-0.5">Liyanage Kawindu</h4>
                        </div>
                    </div>
                    <div className="p-5 rounded-2xl bg-[#09090b] border border-[#27272a] flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                            <ShieldCheck className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-xs uppercase text-slate-400 font-semibold">Project Module</p>
                            <h4 className="text-base font-bold text-white mt-0.5">SkillPivotlk Platform</h4>
                        </div>
                    </div>
                    <div className="p-5 rounded-2xl bg-[#09090b] border border-[#27272a] flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                            <Check className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-xs uppercase text-slate-400 font-semibold">Current State</p>
                            <h4 className="text-base font-bold text-cyan-400 mt-0.5">Submitted for Review</h4>
                        </div>
                    </div>
                </div>

                {/* Feedback Input Section */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-xs font-semibold uppercase text-slate-300 mb-2 flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-cyan-400" /> Reviewer Structured Comments / Corrections
                        </label>
                        <textarea
                            rows="5"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Provide constructive feedback, specify exact modifications required or approve with praise..."
                            className="w-full bg-[#09090b] border border-[#27272a] rounded-2xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition shadow-inner text-sm leading-relaxed"
                        ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-[#27272a]">
                        <motion.button
                            whileTap={{ scale: 0.96 }}
                            onClick={() => setStatusAction('Needs Correction')}
                            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20 font-bold rounded-xl transition text-sm shadow-lg"
                        >
                            <XCircle className="h-5 w-5" /> Request Changes
                        </motion.button>
                        <motion.button
                            whileTap={{ scale: 0.96 }}
                            onClick={() => setStatusAction('Approved')}
                            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition text-sm shadow-xl shadow-emerald-500/20"
                        >
                            <Check className="h-5 w-5" /> Approve & Sign-Off
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}