import React from 'react';

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles } from 'lucide-react';

const Moderator: React.FC = () => {
  return (
    <main className="p-2 md:p-6 max-w-2xl mx-auto flex flex-col gap-8">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-bold text-vvcPurple mb-4 drop-shadow-glow">Moderatorinterface</motion.h2>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="flex flex-col gap-4">
        <motion.div whileHover={{ scale: 1.02 }}>
          <Card className="rounded-2xl shadow-xl bg-white/60 backdrop-blur-md border border-white/30 transition-all duration-300 overflow-hidden group">
            <CardContent className="flex items-center gap-3 p-6">
              <Sparkles className="text-vvcBlue drop-shadow-glow animate-pulse" />
              <span className="font-semibold text-gray-700">Te beoordelen bewijsstuk</span>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }}>
          <Card className="rounded-2xl shadow-xl bg-gradient-to-tr from-vvcPurple/10 to-vvcBlue/10 backdrop-blur-md border border-white/30 transition-all duration-300 overflow-hidden group">
            <CardContent className="flex items-center gap-3 p-6">
              <span className="font-semibold text-vvcPurple">Feedbackveld</span>
            </CardContent>
          </Card>
        </motion.div>
        <div className="flex gap-2">
          <motion.button whileHover={{ scale: 1.08 }} className="bg-vvcBlue text-white px-4 py-2 rounded-xl font-bold shadow hover:bg-vvcPurple/80 transition">Goedkeuren</motion.button>
          <motion.button whileHover={{ scale: 1.08 }} className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold shadow hover:bg-red-600 transition">Afkeuren</motion.button>
        </div>
      </motion.div>
    </main>
  );
};

export default Moderator;
