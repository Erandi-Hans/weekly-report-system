import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, User, ArrowRight, Shield, Sparkles } from 'lucide-react';

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#09090b] p-6 relative overflow-hidden">
            {/* Immersive Glowing Background Blobs */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-md rounded-3xl bg-[#18181b] p-8 md:p-10 shadow-2xl border border-[#27272a] relative z-10 backdrop-blur-2xl"
            >
                <div className="text-center mb-8">
                    <div className="inline-flex p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4 shadow-inner">
                        <Shield className="h-7 w-7" />
                    </div>
                    <h2 className="text-3xl font-black tracking-tight text-white flex items-center justify-center gap-2">
                        {isLogin ? 'Welcome Back' : 'Create Account'} <Sparkles className="h-5 w-5 text-cyan-400" />
                    </h2>
                    <p className="text-slate-400 text-sm mt-1.5">Weekly Report & Team Intelligence Dashboard</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {!isLogin && (
                        <div>
                            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-500" />
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Liyanage Kawindu"
                                    className="w-full rounded-xl bg-[#09090b] border border-[#27272a] px-4 py-3.5 pl-11 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition shadow-inner"
                                />
                            </div>
                        </div>
                    )}

                    <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-500" />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="kawindu@university.ac.lk"
                                className="w-full rounded-xl bg-[#09090b] border border-[#27272a] px-4 py-3.5 pl-11 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition shadow-inner"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-500" />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••••••"
                                className="w-full rounded-xl bg-[#09090b] border border-[#27272a] px-4 py-3.5 pl-11 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition shadow-inner"
                            />
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-cyan-500 py-4 font-bold text-black shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition mt-2"
                    >
                        {isLogin ? 'Sign In to Workspace' : 'Complete Registration'}
                        <ArrowRight className="h-5 w-5" />
                    </motion.button>
                </form>

                <div className="mt-8 text-center pt-6 border-t border-[#27272a]">
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-sm text-slate-400 hover:text-cyan-400 transition underline underline-offset-4 font-medium"
                    >
                        {isLogin ? "Don't have an account yet? Sign Up" : "Already have an account? Sign In"}
                    </button>
                </div>
            </motion.div>
        </div>
    );
}