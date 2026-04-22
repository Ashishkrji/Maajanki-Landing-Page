'use client';

import { motion } from 'motion/react';

export function StatsSection() {
  const stats = [
    { num: '200+', label: 'Websites Built' },
    { num: '98%', label: 'Client Satisfaction' },
    { num: '3+', label: 'Years of Excellence' },
    { num: '50+', label: 'Happy Clients' },
  ];

  return (
    <section className="py-20 bg-[var(--accent-indigo)] text-white relative overflow-hidden">
      <div className="absolute inset-0 dot-bg" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring" }}
            >
              <div className="text-4xl md:text-5xl lg:text-7xl font-black font-[family-name:var(--font-space-grotesk)] mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70">
                {stat.num}
              </div>
              <div className="text-sm md:text-base font-semibold text-indigo-100 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
