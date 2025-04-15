import React from 'react';
import { Users, Clock, Code, Award } from 'lucide-react';

const StatCard = ({ icon: Icon, number, label }: { icon: any, number: string, label: string }) => (
  <div className="bg-gradient-to-br from-[#1A6CC1] to-[#446BAA] p-8 rounded-[50px] text-white text-center opacity-80">
    <Icon className="w-12 h-12 mx-auto mb-4" />
    <div className="text-3xl font-bold mb-2">{number}</div>
    <div className="text-sm uppercase tracking-wider">{label}</div>
  </div>
);

const Stats = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
      <StatCard icon={Users} number="4+" label="Clients satisfaits" />
      <StatCard icon={Clock} number="7/12" label="Jours de réalisation" />
      <StatCard icon={Code} number="1000+" label="Heures de codage" />
      <StatCard icon={Award} number="7" label="Technologies utilisées" />
    </div>
  );
};

export default Stats;