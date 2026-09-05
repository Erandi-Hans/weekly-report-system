import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ReportFormPage from './pages/ReportFormPage';
import ReportHistory from './pages/ReportHistory';
import ReportDetail from './pages/ReportDetail';
import ManagerReview from './pages/ManagerReview';
import ProjectManagement from './pages/ProjectManagement';
import TeamMemberProfile from './pages/TeamMemberProfile';
import UserManagement from './pages/UserManagement';

// Animated Route Wrapper for Smooth Page Transitions
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -12, scale: 0.99 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full min-h-screen"
      >
        <Routes location={location}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/report/new" element={<ReportFormPage />} />
          <Route path="/report/edit/:id" element={<ReportFormPage />} />
          <Route path="/reports/history" element={<ReportHistory />} />
          <Route path="/report/view/:id" element={<ReportDetail />} />
          <Route path="/manager/review/:id" element={<ManagerReview />} />
          <Route path="/profile/:userId" element={<TeamMemberProfile />} />
          <Route path="/projects" element={<ProjectManagement />} />
          <Route path="/admin/users" element={<UserManagement />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#09090b] text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
        {/* Ambient background glow elements */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

        <AnimatedRoutes />
      </div>
    </Router>
  );
}