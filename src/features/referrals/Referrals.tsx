import React from 'react';

const Referrals: React.FC = () => {
  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-vvcBlue">Vriendennetwerk</h2>
      {/* Referral-code en boomstructuur placeholder */}
      <div className="rounded-3xl bg-vvcWhite shadow-vvc p-6">
        <div className="mb-4">Jouw unieke referral-code: <span className="font-mono bg-vvcPurple/10 px-2 py-1 rounded">[CODE]</span></div>
        <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 font-semibold">[Boomstructuur]</div>
      </div>
    </main>
  );
};

export default Referrals;
