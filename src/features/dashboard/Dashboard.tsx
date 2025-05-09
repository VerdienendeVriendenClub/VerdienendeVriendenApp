import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { BadgeEuro, Users, Newspaper, Sparkles } from 'lucide-react';

const saldo = 130.0;
const missies = [
  { title: 'Online evenement organiseren', reward: 50, progress: 0.7, badge: 'Nieuw', color: 'from-vvcPurple via-blue-400/30 to-vvcBlue' },
  { title: 'Social media strategie', reward: 75, progress: 0.4, badge: null, color: 'from-vvcBlue via-purple-400/30 to-vvcPurple' },
];
const nieuws = [
  { title: 'Nieuwe Missies Beschikbaar', date: '08-05-2025', desc: 'Bekijk de nieuwste missies en verdien extra VVC-credits!', icon: <Sparkles className="text-vvcPurple drop-shadow-glow animate-pulse" size={20} /> },
  { title: 'Community Webinar', date: '05-05-2025', desc: 'Doe mee met ons maandelijkse webinar over ondernemerschap en netwerken.', icon: <Newspaper className="text-vvcBlue drop-shadow-glow animate-pulse-slow" size={20} /> },
];

const AnimatedSaldo: React.FC<{ value: number }> = ({ value }) => {
  const spring = useSpring(value, { stiffness: 80, damping: 18 });
  const rounded = useTransform(spring, (v) => v.toFixed(2));
  React.useEffect(() => { spring.set(value); }, [value]);
  return (
    <motion.span className="text-3xl md:text-4xl font-bold tracking-tight">
      €<motion.span>{rounded}</motion.span>
    </motion.span>
  );
};

const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold shadow-md bg-gradient-to-tr from-vvcPurple/80 to-vvcBlue/80 text-white border border-white/30 backdrop-blur-md ${className ?? ''}`}>{children}</span>
);

const Dashboard: React.FC = () => {
  return (
    <main className="p-2 md:p-6 max-w-2xl mx-auto flex flex-col gap-8">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-bold text-vvcPurple mb-2 drop-shadow-glow">Verdienende Vrienden Club</motion.h1>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
        <Card className="rounded-3xl shadow-2xl bg-white/50 backdrop-blur-lg border border-white/30 ring-2 ring-vvcPurple/20 hover:ring-vvcBlue/30 transition-all duration-300 text-vvcPurple relative overflow-hidden mb-2 group">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
            <CardContent className="flex flex-col md:flex-row items-center justify-between p-6 gap-4">
              <div className="flex items-center gap-3">
                <motion.div whileHover={{ scale: 1.15, rotate: 8 }} className="transition-transform">
                  <BadgeEuro size={42} className="opacity-90 drop-shadow-glow" />
                </motion.div>
                <div>
                  <div className="text-base font-medium opacity-80 mb-1">Jouw VVC-Saldo</div>
                  <AnimatedSaldo value={saldo} />
                </div>
              </div>
              <motion.button whileHover={{ scale: 1.08 }} className="bg-gradient-to-tr from-vvcBlue to-vvcPurple/80 hover:from-vvcPurple hover:to-vvcBlue transition rounded-xl px-4 py-2 font-semibold mt-2 md:mt-0 flex items-center gap-2 shadow-lg text-white backdrop-blur-md">
                <BadgeEuro size={18} /> Bekijk Verdiensten
              </motion.button>
            </CardContent>
          </motion.div>
        </Card>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <div className="flex items-center gap-2 mb-2">
          <Users className="text-vvcBlue drop-shadow-glow" size={22} />
          <span className="text-lg font-semibold text-vvcBlue">Actieve Missies</span>
        </div>
        <div className="flex flex-col gap-4">
          {missies.map((m, i) => (
            <motion.div key={i} whileHover={{ scale: 1.025, boxShadow: "0 8px 32px 0 rgba(80,60,200,0.12)" }} transition={{ type: "spring", stiffness: 200 }}>
              <Card className={`rounded-2xl shadow-xl bg-gradient-to-tr ${m.color} bg-clip-padding backdrop-blur-md bg-opacity-70 border border-white/30 transition-all duration-300 relative overflow-hidden group`}>
                <CardContent className="flex flex-col md:flex-row items-center justify-between p-4 gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-base md:text-lg font-bold drop-shadow-glow flex items-center gap-2">
                      {m.title}
                      {m.badge && <Badge className="animate-pulse-slow ml-2">{m.badge}</Badge>}
                    </span>
                    <span className="text-xs opacity-80">Beloning: <span className="font-semibold">€{m.reward}</span></span>
                  </div>
                  <div className="flex flex-col items-end gap-2 w-32">
                    <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
                      <motion.div className="h-2 bg-gradient-to-r from-vvcBlue to-vvcPurple rounded-full shadow-md" initial={{ width: 0 }} animate={{ width: `${m.progress * 100}%` }} transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }} />
                    </div>
                    <motion.button whileHover={{ scale: 1.1 }} className="bg-white/30 hover:bg-white/50 transition rounded-xl px-3 py-1 text-xs font-semibold shadow backdrop-blur-md text-vvcPurple border border-white/30">Bekijk</motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <div className="flex items-center gap-2 mb-2 mt-4">
          <Newspaper className="text-vvcPurple drop-shadow-glow" size={22} />
          <span className="text-lg font-semibold text-vvcPurple">Nieuws & Updates</span>
        </div>
        <div className="flex flex-col gap-2 max-h-44 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-vvcBlue/30 scrollbar-track-transparent">
          {nieuws.map((n, i) => (
            <motion.div key={i} whileHover={{ scale: 1.01, boxShadow: "0 4px 20px 0 rgba(120,80,200,0.11)" }}>
              <Card className="rounded-2xl shadow bg-white/70 border border-vvcPurple/10 backdrop-blur-md">
                <CardContent className="flex gap-3 items-center p-4">
                  <div>{n.icon}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-vvcPurple text-sm mb-0.5 drop-shadow-glow">{n.title}</div>
                    <div className="text-xs text-gray-700 mb-1">{n.desc}</div>
                    <div className="text-xs text-vvcBlue/80 font-mono">{n.date}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
};

export default Dashboard;
