import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, User, ArrowRight } from 'lucide-react';

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
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-md rounded-3xl bg-slate-900/80 p-8 shadow-2xl backdrop-blur-2xl border border-slate-800"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight">
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h2>
                    <p className="text-slate-400 text-sm mt-2">Weekly Report & Team Dashboard System</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {!isLogin && (
                        <div>
                            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-500" />
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Kawindu Madhushankha"
                                    className="w-full rounded-xl bg-slate-950/60 border border-slate-800 px-4 py-3.5 pl-11 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition"
                                />
                            </div>
                        </div>
                    )}

                    <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-500" />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@company.com"
                                className="w-full rounded-xl bg-slate-950/60 border border-slate-800 px-4 py-3.5 pl-11 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-500" />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full rounded-xl bg-slate-950/60 border border-slate-800 px-4 py-3.5 pl-11 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition"
                            />
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition"
                    >
                        {isLogin ? 'Sign In' : 'Sign Up'}
                        <ArrowRight className="h-5 w-5" />
                    </motion.button>
                </form>

                <div className="mt-6 text-center">
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-sm text-indigo-400 hover:text-indigo-300 transition font-medium"
                    >
                        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
                    </button>
                </div>
            </motion.div>
        </div>
    );
}