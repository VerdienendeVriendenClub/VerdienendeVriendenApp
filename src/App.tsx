import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

// Feature pages
import Dashboard from './features/dashboard/Dashboard';
import Missions from './features/missions/Missions';
import Earnings from './features/earnings/Earnings';
import Friends from '@/features/friends/Friends';
import AuthPage from '@/features/auth/Auth';
import Profile from './features/profile/Profile';
import Moderator from './features/moderator/Moderator';
import Admin from './features/admin/Admin';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="missies/*" element={<Missions />} />
        <Route path="verdiensten" element={<Earnings />} />
        <Route path="vrienden" element={<Friends />} />
        <Route path="profiel" element={<Profile />} />
<Route path="login" element={<AuthPage />} />
        <Route path="moderator" element={<Moderator />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
