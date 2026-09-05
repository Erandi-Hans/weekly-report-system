import React, { useState } from 'react';
import { Check, XCircle } from 'lucide-react';

export default function ManagerReview() {
    const [comment, setComment] = useState('');

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 p-8 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-2">Manager Report Review</h1>
            <p className="text-slate-400 text-sm mb-6">Review team member submission and take action (Approve / Request Changes).</p>

            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl space-y-6">
                <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800">
                    <h3 className="font-bold text-lg mb-1">Kawindu Madhushankha - SkillPivotlk</h3>
                    <p className="text-xs text-slate-400">Submitted for Week: 2026-09-01 to 2026-09-06</p>
                </div>

                <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Reviewer Comment / Correction Notes</label>
                    <textarea
                        rows="4"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Describe what needs correction or modification..."
                        className="w-full bg-slate-950/60 border border-slate-800 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500"
                    ></textarea>
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t border-slate-800">
                    <button className="flex items-center gap-2 px-6 py-2.5 bg-rose-600/20 text-rose-400 border border-rose-500/30 hover:bg-rose-600/30 font-semibold rounded-xl transition text-sm">
                        <XCircle className="h-4 w-4" /> Request Changes
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 font-semibold rounded-xl transition text-sm shadow-lg shadow-emerald-600/30">
                        <Check className="h-4 w-4" /> Approve Report
                    </button>
                </div>
            </div>
        </div>
    );
}