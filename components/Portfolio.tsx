'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function Portfolio() {
  const projects = [
    { title: "E-Commerce Store", category: "Shopify / Web Design", image: "https://picsum.photos/seed/project1/800/600" },
    { title: "Corporate Agency", category: "WordPress / Elementor", image: "https://picsum.photos/seed/project2/800/600" },
    { title: "Healthcare Portal", category: "Next.js / Tailwind", image: "https://picsum.photos/seed/project3/800/600" },
    { title: "Real Estate App", category: "UI/UX Design", image: "https://picsum.photos/seed/project4/800/600" },
  ];

  return (
    <section id="portfolio" className="py-28 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="tag-chip mb-4"
            >
              Our Work
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black"
            >
              Recent <span className="gradient-saffron">Success Stories</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="#contact" className="btn-outline">
              View All Projects <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] relative">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/90 via-[var(--bg-dark)]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[var(--accent-saffron)] font-bold mb-2">{project.category}</p>
                <h3 className="text-3xl font-bold text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
