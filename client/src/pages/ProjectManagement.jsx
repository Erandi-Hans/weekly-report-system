import React from 'react';
import { Plus, Trash, Edit } from 'lucide-react';

export default function ProjectManagement() {
    const projects = [
        { id: 1, name: 'SkillPivotlk', desc: 'IT Internship Discovery Platform' },
        { id: 2, name: 'Internal Tooling', desc: 'Dashboard & Report Management' },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 p-8 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Project Management</h1>
                <button className="flex items-center gap-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-medium transition shadow-lg shadow-indigo-600/30">
                    <Plus className="h-4 w-4" /> Add Project
                </button>
            </div>

            <div className="space-y-4">
                {projects.map((proj) => (
                    <div key={proj.id} className="flex justify-between items-center p-6 bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-xl">
                        <div>
                            <h3 className="font-bold text-lg">{proj.name}</h3>
                            <p className="text-sm text-slate-400 mt-1">{proj.desc}</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition"><Edit className="h-4 w-4" /></button>
                            <button className="p-2 bg-rose-600/20 hover:bg-rose-600/30 rounded-lg text-rose-400 transition"><Trash className="h-4 w-4" /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}