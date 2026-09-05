import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ReportFormPage from './pages/ReportFormPage';
import ReportHistory from './pages/ReportHistory';
import ReportDetail from './pages/ReportDetail';
import ManagerReview from './pages/ManagerReview';
import TeamMemberProfile from './pages/TeamMemberProfile';
import ProjectManagement from './pages/ProjectManagement';
import UserManagement from './pages/UserManagement';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
        <Routes>
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
      </div>
    </Router>
  );
}

export default App;