import React from 'react';
import { motion } from 'framer-motion';

interface StatProps {
  label: string;
  value: string;
}

const StatItem: React.FC<StatProps> = ({ label, value }) => (
  <div className="flex flex-col items-center p-4">
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-3xl md:text-4xl font-bold text-white mb-2"
    >
      {value}
    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="text-md md:text-lg text-gray-400 uppercase tracking-wider"
    >
      {label}
    </motion.p>
  </div>
);

export const QuickStats: React.FC = () => {
  const stats = [
    { label: "Artworks", value: "110+" },
    { label: "Artists", value: "29" },
    { label: "Collectors", value: "3400+" },
    { label: "Orders", value: "2844" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto bg-neutral-900 rounded-lg shadow-lg p-8 flex flex-wrap justify-around items-center gap-8">
        {stats.map((stat) => (
          <StatItem key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>
    </section>
  );
}; 