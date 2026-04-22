'use client';

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden dot-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-primary)] to-[var(--bg-secondary)] -z-10" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl z-10">
          <motion.div variants={item} className="flex items-center gap-2 mb-6">
            <span className="tag-chip">#1 Web Agency in India</span>
          </motion.div>
          <motion.h1 variants={item} className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-[var(--text-primary)]">
            We Build Websites That <span className="gradient-saffron">Grow Your Business</span>
          </motion.h1>
          <motion.p variants={item} className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
            Maajanki Web Tech crafts stunning, SEO-optimised websites and data-driven digital marketing campaigns — turning visitors into loyal customers for businesses across India.
          </motion.p>
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="#contact" className="btn-primary">
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#portfolio" className="btn-outline">
              See Our Work
            </a>
          </motion.div>
          <motion.div variants={item} className="flex flex-wrap gap-4 text-sm font-semibold text-[var(--text-secondary)]">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[var(--accent-saffron)]" /> Website Developer</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[var(--accent-saffron)]" /> WordPress Expert</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[var(--accent-saffron)]" /> E-Commerce Developer</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[var(--accent-saffron)]" /> Business Growth Partners</span>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white float-animate hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/80 to-transparent z-10" />
          <Image 
            src="https://picsum.photos/seed/maajankihero/1200/900" 
            alt="Maajanki Web Tech website development India"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-8 left-8 right-8 z-20 trust-badge bg-white/95 border-b-4 border-[var(--accent-saffron)]">
            <p className="text-base font-bold text-[var(--text-primary)] mb-1">Results Driven 🚀</p>
            <p className="text-sm font-medium text-[var(--text-secondary)]">Over 200+ Indian Businesses Scaled.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
