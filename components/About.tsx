'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Target, Users, Zap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-28 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden relative border-8 border-white shadow-2xl">
            <Image 
              src="https://picsum.photos/seed/ashish/800/1000"
              alt="Ashish Kumar - Founder of Maajanki Web Tech"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl trust-badge max-w-xs hidden md:block">
            <p className="font-bold text-xl text-[var(--accent-saffron)]">Ashish Kumar</p>
            <p className="text-sm text-[var(--text-secondary)]">Founder & Lead Developer</p>
          </div>
        </motion.div>

        <div>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tag-chip mb-4"
          >
            Digital Agency India
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            World-class digital presence for <span className="gradient-indigo">Indian Businesses</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed"
          >
            Founded by Ashish Kumar, a passionate Website & WordPress developer and digital marketer, Maajanki Web Tech was built with one mission: to give Indian businesses the same world-class digital presence enjoyed by global brands — at affordable prices.
          </motion.p>

          <div className="space-y-6">
            {[
              { icon: <Target />, title: "Results-Oriented approach", desc: "We focus on ROI, not just pretty designs." },
              { icon: <Zap />, title: "Lightning Fast Delivery", desc: "Your website live in days, not months." },
              { icon: <Users />, title: "Dedicated Support", desc: "Local support from our base in Bettiah, Bihar." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-[var(--accent-indigo)] flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{feature.title}</h4>
                  <p className="text-[var(--text-secondary)]">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
