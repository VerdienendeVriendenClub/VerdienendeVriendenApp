import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users, UserPlus, UserCheck } from "lucide-react";

const friends = [
  { name: "Sanne Jansen", status: "actief", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Joris van Dijk", status: "inactief", avatar: "https://randomuser.me/api/portraits/men/44.jpg" },
  { name: "Kim de Vries", status: "actief", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
];

const referralCode = "VVC-1234-ABCD";

const Friends: React.FC = () => {
  // Kopieer referral-code
  const [copied, setCopied] = React.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <main className="p-2 md:p-6 max-w-2xl mx-auto flex flex-col gap-8">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-bold text-vvcBlue mb-4 drop-shadow-glow flex items-center gap-2">
        <Users className="text-vvcPurple drop-shadow-glow" size={28} /> Vriendennetwerk
      </motion.h2>
      {/* Referral-code card */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Card className="rounded-3xl shadow-2xl bg-white/60 backdrop-blur-lg border border-white/30 p-0 overflow-hidden group">
          <CardContent className="flex flex-col gap-4 p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between">
              <span className="font-semibold text-vvcPurple">Jouw unieke referral-code:</span>
              <span className="bg-vvcBlue/10 px-3 py-1 rounded-lg font-mono tracking-wider text-vvcBlue border border-vvcBlue/20 select-all">{referralCode}</span>
              <button onClick={handleCopy} className="ml-0 md:ml-2 px-3 py-1 rounded-xl bg-gradient-to-tr from-vvcPurple to-vvcBlue text-white font-semibold text-xs shadow hover:scale-105 active:scale-95 transition">
                {copied ? 'Gekopieerd!' : 'Kopieer'}
              </button>
            </div>
            {/* Simpele boomstructuur */}
            <div className="bg-vvcBlue/10 rounded-2xl p-6 flex flex-col items-center gap-3 min-h-[120px]">
              <span className="font-semibold text-vvcPurple mb-2">Jouw netwerk</span>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex flex-col items-center">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Jij" className="w-12 h-12 rounded-full border-2 border-vvcPurple/50 shadow mb-1" />
                  <span className="text-xs font-semibold text-vvcPurple">Jij</span>
                </div>
                <span className="text-vvcBlue font-bold text-xl">→</span>
                {friends.map((f, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <img src={f.avatar} alt={f.name} className="w-12 h-12 rounded-full border-2 border-vvcBlue/40 shadow mb-1" />
                    <span className="text-xs font-semibold text-vvcBlue">{f.name.split(' ')[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      {/* Vriendenlijst cards */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="flex flex-col gap-4">
        {friends.map((f, i) => (
          <motion.div key={i} whileHover={{ scale: 1.02 }}>
            <Card className="rounded-2xl shadow-xl bg-white/60 backdrop-blur-md border border-white/30 transition-all duration-300 overflow-hidden group">
              <CardContent className="flex items-center gap-4 p-4">
                <img src={f.avatar} alt={f.name} className="w-14 h-14 rounded-full border-2 border-vvcPurple/30 shadow" />
                <div className="flex-1">
                  <div className="font-semibold text-lg text-vvcPurple drop-shadow-glow">{f.name}</div>
                  <div className={f.status === "actief" ? "text-green-600 font-semibold text-xs" : "text-gray-400 text-xs"}>{f.status}</div>
                </div>
                {f.status === "actief" ? (
                  <button className="flex items-center gap-1 bg-vvcBlue/90 hover:bg-vvcPurple/80 text-white px-3 py-1 rounded-xl font-semibold text-xs shadow transition"><UserCheck size={16} /> Actief</button>
                ) : (
                  <button className="flex items-center gap-1 bg-gray-200 hover:bg-vvcBlue/20 text-vvcPurple px-3 py-1 rounded-xl font-semibold text-xs shadow transition"><UserPlus size={16} /> Nodig uit</button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default Friends;
