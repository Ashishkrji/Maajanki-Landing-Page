'use client';

import { motion } from 'motion/react';

export function ProcessSection() {
  const steps = [
    { num: '01', title: 'Discovery & Strategy', desc: 'Understanding your business goals and audience.' },
    { num: '02', title: 'UI/UX Design', desc: 'Creating blueprints and beautiful mockups.' },
    { num: '03', title: 'Development', desc: 'Building the website optimized for speed.' },
    { num: '04', title: 'Launch & Grow', desc: 'Marketing campaigns to drive traffic.' },
  ];

  return (
    <section id="process" className="py-28 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tag-chip mb-4"
          >
            How We Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Our Simple <span className="gradient-saffron">4-Step Process</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 rounded-3xl bg-white shadow-sm border border-orange-50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-6xl font-black text-orange-50 mb-6 font-[family-name:var(--font-space-grotesk)] -ml-4 -mt-4">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--accent-saffron)]">{step.title}</h3>
              <p className="text-[var(--text-secondary)]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
