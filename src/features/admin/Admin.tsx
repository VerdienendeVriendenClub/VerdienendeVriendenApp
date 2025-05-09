import React from 'react';

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users, BadgeEuro, Sparkles } from 'lucide-react';

const Admin: React.FC = () => {
  return (
    <main className="p-2 md:p-6 max-w-2xl mx-auto flex flex-col gap-8">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-bold text-vvcPurple mb-4 drop-shadow-glow">Beheerderinterface</motion.h2>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="flex flex-col gap-4">
        <motion.div whileHover={{ scale: 1.02 }}>
          <Card className="rounded-2xl shadow-xl bg-white/60 backdrop-blur-md border border-white/30 transition-all duration-300 overflow-hidden group">
            <CardContent className="flex items-center gap-3 p-6">
              <BadgeEuro className="text-vvcBlue drop-shadow-glow animate-pulse" />
              <span className="font-semibold text-vvcBlue">Missiebeheer</span>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }}>
          <Card className="rounded-2xl shadow-xl bg-gradient-to-tr from-vvcPurple/10 to-vvcBlue/10 backdrop-blur-md border border-white/30 transition-all duration-300 overflow-hidden group">
            <CardContent className="flex items-center gap-3 p-6">
              <Users className="text-vvcPurple drop-shadow-glow animate-pulse-slow" />
              <span className="font-semibold text-vvcPurple">Rollenbeheer</span>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }}>
          <Card className="rounded-2xl shadow-xl bg-white/70 border border-vvcPurple/10 backdrop-blur-md transition-all duration-300 overflow-hidden group">
            <CardContent className="flex items-center gap-3 p-6">
              <Sparkles className="text-vvcBlue drop-shadow-glow animate-pulse-slow" />
              <span className="font-semibold text-gray-700">Gebruikersstatistieken</span>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Admin;
