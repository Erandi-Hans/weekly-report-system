import React from 'react';
import { Shield, UserPlus } from 'lucide-react';

export default function UserManagement() {
    const users = [
        { id: 1, name: 'Liyanage Kawindu', email: 'kawindu@company.com', role: 'Team Member' },
        { id: 2, name: 'Manager Alex', email: 'alex@company.com', role: 'Manager' },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 p-8 max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">User Management (Admin)</h1>
                <button className="flex items-center gap-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-medium transition shadow-lg shadow-indigo-600/30">
                    <UserPlus className="h-4 w-4" /> Invite User
                </button>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-800 bg-slate-900/90 text-xs font-semibold uppercase text-slate-400">
                            <th className="p-4">Name</th>
                            <th className="p-4">Email</th>
                            <th className="p-4">Role</th>
                            <th className="p-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-sm">
                        {users.map((u) => (
                            <tr key={u.id} className="hover:bg-slate-800/30 transition">
                                <td className="p-4 font-medium flex items-center gap-2"><Shield className="h-4 w-4 text-indigo-400" /> {u.name}</td>
                                <td className="p-4 text-slate-400">{u.email}</td>
                                <td className="p-4"><span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">{u.role}</span></td>
                                <td className="p-4 text-right"><button className="text-rose-400 hover:underline text-xs font-semibold">Remove</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}