import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Dashboard', to: '/' },
  { label: 'Missies', to: '/missies' },
  { label: 'Verdiensten', to: '/verdiensten' },
  { label: 'Vrienden', to: '/vrienden' },
  { label: 'Profiel', to: '/profiel' },
];

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-vvcWhite flex flex-col">
      <header className="shadow-vvc bg-vvcPurple text-white py-4 px-6 flex items-center justify-between">
        <span className="text-xl font-bold tracking-wide">VVC</span>
        <nav className="hidden md:flex gap-6 text-base">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `font-semibold transition-colors ${isActive ? 'underline underline-offset-8 text-vvcBlue' : 'hover:text-vvcBlue'}`
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="flex-1 w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Outlet />
        </motion.div>
      </main>
      <footer className="bg-vvcPurple text-white py-3 text-center mt-8 shadow-vvc">
        <span className="text-sm">&copy; {new Date().getFullYear()} Verdienende Vrienden Club</span>
      </footer>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 z-50 shadow-vvc">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs font-semibold ${isActive ? 'text-vvcPurple' : 'text-gray-500'} hover:text-vvcBlue`
            }
            end={item.to === '/'}
          >
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Layout;
