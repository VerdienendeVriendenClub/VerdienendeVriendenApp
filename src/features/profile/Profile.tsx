import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { User, Bell, ShieldCheck } from 'lucide-react';

const user = {
  name: 'Robin Bakker',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  roles: ['Lid', 'Moderator'],
  notifications: true,
};

const Profile: React.FC = () => {
  return (
    <main className="p-2 md:p-6 max-w-2xl mx-auto flex flex-col gap-8">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-bold text-vvcPurple mb-4 drop-shadow-glow flex items-center gap-2">
        <User className="text-vvcBlue drop-shadow-glow" size={28} /> Profiel
      </motion.h2>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="flex flex-col gap-4">
        <Card className="rounded-2xl shadow-xl bg-white/60 backdrop-blur-md border border-white/30 transition-all duration-300 overflow-hidden group">
          <CardContent className="flex items-center gap-4 p-6">
            <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full border-2 border-vvcPurple/30 shadow" />
            <div className="flex-1">
              <div className="font-semibold text-xl text-vvcPurple drop-shadow-glow">{user.name}</div>
              <div className="text-gray-400 text-xs">Lid sinds 2024</div>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-xl bg-gradient-to-tr from-vvcPurple/10 to-vvcBlue/10 backdrop-blur-md border border-white/30 transition-all duration-300 overflow-hidden group">
          <CardContent className="flex items-center gap-3 p-6">
            <ShieldCheck className="text-vvcPurple drop-shadow-glow animate-pulse-slow" />
            <span className="font-semibold text-vvcPurple">Rollen:</span>
            <span className="flex gap-2">{user.roles.map((r) => <span key={r} className="bg-vvcBlue/20 text-vvcPurple px-2 py-0.5 rounded-full text-xs font-semibold ml-1">{r}</span>)}</span>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-xl bg-white/70 border border-vvcPurple/10 backdrop-blur-md transition-all duration-300 overflow-hidden group">
          <CardContent className="flex items-center gap-3 p-6">
            <Bell className="text-vvcBlue drop-shadow-glow" />
            <span className="font-semibold text-gray-700">Notificaties:</span>
            <span className={user.notifications ? 'text-green-600 font-semibold ml-2' : 'text-gray-400 ml-2'}>{user.notifications ? 'Aan' : 'Uit'}</span>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
};

export default Profile;
