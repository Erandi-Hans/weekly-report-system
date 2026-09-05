import React from 'react';
import { User, FileText, Award } from 'lucide-react';

export default function TeamMemberProfile() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 p-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl mb-6">
                <div className="h-16 w-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <User className="h-8 w-8" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Liyanage Kawindu</h1>
                    <p className="text-sm text-slate-400">Software Engineering Intern • Team Member</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl flex items-center gap-4">
                    <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl"><FileText className="h-6 w-6" /></div>
                    <div><p className="text-xs uppercase text-slate-400 font-semibold">Total Reports Submitted</p><h3 className="text-xl font-bold mt-1">12 Reports</h3></div>
                </div>
                <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl flex items-center gap-4">
                    <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl"><Award className="h-6 w-6" /></div>
                    <div><p className="text-xs uppercase text-slate-400 font-semibold">Approval Rate</p><h3 className="text-xl font-bold mt-1">95%</h3></div>
                </div>
            </div>
        </div>
    );
}