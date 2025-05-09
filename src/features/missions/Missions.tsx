import React from 'react';

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const missions = [
  { title: 'Online evenement organiseren', reward: 50, progress: 0.7, badge: 'Nieuw', status: 'actief' },
  { title: 'Social media strategie', reward: 75, progress: 1, badge: 'Voltooid', status: 'voltooid' },
];

const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold shadow-md bg-gradient-to-tr from-vvcPurple/80 to-vvcBlue/80 text-white border border-white/30 backdrop-blur-md ${className ?? ''}`}>{children}</span>
);

const Missions: React.FC = () => {
  return (
    <main className="p-2 md:p-6 max-w-2xl mx-auto flex flex-col gap-8">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-bold text-vvcBlue mb-4 drop-shadow-glow">Missies</motion.h2>
      {/* Tabs: Actief / Voltooid */}
      <div className="flex gap-2 mb-4">
        <button className="px-4 py-2 rounded-xl bg-vvcPurple text-white font-semibold shadow-lg hover:scale-105 transition">Actief</button>
        <button className="px-4 py-2 rounded-xl bg-gray-200 text-gray-800 font-semibold hover:bg-vvcPurple/10 hover:text-vvcPurple transition">Voltooid</button>
      </div>
      <div className="flex flex-col gap-4">
        {missions.map((m, i) => (
          <motion.div key={i} whileHover={{ scale: 1.02, boxShadow: "0 4px 20px 0 rgba(80,60,200,0.09)" }}>
            <Card className="rounded-2xl shadow-xl bg-white/60 backdrop-blur-md border border-white/30 transition-all duration-300 relative overflow-hidden group">
              <CardContent className="flex flex-col md:flex-row items-center justify-between p-4 gap-3">
                <div className="flex flex-col gap-1">
                  <span className="text-base md:text-lg font-bold drop-shadow-glow flex items-center gap-2">
                    {m.title}
                    {m.badge && <Badge className={m.status === 'voltooid' ? 'bg-green-400/80 text-white' : ''}>{m.badge}</Badge>}
                  </span>
                  <span className="text-xs opacity-80">Beloning: <span className="font-semibold">€{m.reward}</span></span>
                </div>
                <div className="flex flex-col items-end gap-2 w-32">
                  <div className="w-full h-2 bg-vvcBlue/20 rounded-full overflow-hidden">
                    <motion.div className={`h-2 ${m.status === 'voltooid' ? 'bg-green-400' : 'bg-gradient-to-r from-vvcBlue to-vvcPurple'} rounded-full shadow-md`} initial={{ width: 0 }} animate={{ width: `${m.progress * 100}%` }} transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }} />
                  </div>
                  <motion.button whileHover={{ scale: 1.08 }} className="bg-white/30 hover:bg-white/50 transition rounded-xl px-3 py-1 text-xs font-semibold shadow backdrop-blur-md text-vvcPurple border border-white/30">Bekijk</motion.button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Missions;
