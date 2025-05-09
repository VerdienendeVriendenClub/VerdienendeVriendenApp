import React from 'react';

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BadgeEuro } from 'lucide-react';

const Earnings: React.FC = () => {
  return (
    <main className="p-2 md:p-6 max-w-2xl mx-auto flex flex-col gap-8">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-bold text-vvcPurple mb-4 drop-shadow-glow">Verdiensten</motion.h2>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
        <Card className="rounded-3xl shadow-2xl bg-white/50 backdrop-blur-lg border border-white/30 ring-2 ring-vvcPurple/20 hover:ring-vvcBlue/30 transition-all duration-300 text-vvcPurple relative overflow-hidden mb-2 group">
          <CardContent className="flex flex-col items-center justify-center p-8 gap-4">
            <BadgeEuro size={42} className="opacity-90 drop-shadow-glow animate-pulse" />
            <div className="h-48 w-full flex items-center justify-center text-vvcBlue font-semibold text-2xl bg-gradient-to-tr from-vvcBlue/10 to-vvcPurple/10 rounded-2xl shadow-inner mb-4">[Grafiek]</div>
            <motion.button whileHover={{ scale: 1.08 }} className="bg-gradient-to-tr from-vvcBlue to-vvcPurple/80 hover:from-vvcPurple hover:to-vvcBlue transition rounded-xl px-6 py-2 font-semibold flex items-center gap-2 shadow-lg text-white backdrop-blur-md">Exporteer als PDF</motion.button>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
};

export default Earnings;
