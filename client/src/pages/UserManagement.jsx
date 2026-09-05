import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, UserPlus, Trash2, Users } from 'lucide-react';

export default function UserManagement() {
    const [users, setUsers] = useState([
        { id: 1, name: 'Liyanage Kawindu', email: 'kawindu@company.com', role: 'Team Member' },
        { id: 2, name: 'Alex Manager', email: 'alex@company.com', role: 'Manager' },
        { id: 3, name: 'Admin Sarah', email: 'sarah@company.com', role: 'Admin' },
    ]);

    return (
        <div className="min-h-screen bg-[#09090b] text-slate-100 p-6 md:p-10 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-[#27272a] gap-4">
                <div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        Access Control
                    </span>
                    <h1 className="text-3xl font-black mt-2 text-white flex items-center gap-3">
                        <Users className="h-7 w-7 text-cyan-400" /> User & Role Management Admin
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">Modify RBAC permissions, invite members, and audit workspace credentials.</p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center gap-2 px-5 py-3 bg-cyan-500 text-black hover:bg-cyan-400 rounded-xl text-sm font-bold transition shadow-xl shadow-cyan-500/20"
                >
                    <UserPlus className="h-4 w-4" /> Invite Team Member
                </motion.button>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-[#18181b] border border-[#27272a] rounded-2xl overflow-hidden shadow-xl"
            >
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-[#27272a] bg-[#18181b] text-xs font-semibold uppercase text-slate-400 tracking-wider">
                            <th className="p-5">User Name</th>
                            <th className="p-5">Email Address</th>
                            <th className="p-5">Assigned Role</th>
                            <th className="p-5 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#27272a] text-sm">
                        {users.map((u) => (
                            <tr key={u.id} className="hover:bg-[#27272a]/40 transition">
                                <td className="p-5 font-bold flex items-center gap-3 text-white">
                                    <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                        <Shield className="h-4 w-4" />
                                    </div>
                                    {u.name}
                                </td>
                                <td className="p-5 text-slate-300 font-medium">{u.email}</td>
                                <td className="p-5">
                                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
                                        {u.role}
                                    </span>
                                </td>
                                <td className="p-5 text-right">
                                    <button className="px-3.5 py-2 bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 rounded-xl text-rose-400 text-xs font-bold transition shadow">
                                        Revoke Access
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>
        </div>
    );
}