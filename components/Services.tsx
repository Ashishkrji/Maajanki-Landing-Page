'use client';

import { motion } from 'motion/react';
import { Code2, Globe, Lightbulb, Megaphone, PenTool, Search } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: "Website Development",
      description: "Fast, beautiful, mobile-first websites built on WordPress, Elementor, and custom stacks. Designed to convert visitors into paying customers.",
      icon: <Globe className="w-8 h-8" />,
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      title: "SEO Services",
      description: "Rank on Page 1 of Google. Technical SEO, keyword research, on-page optimisation, and high-quality link building tailored for Indian businesses.",
      icon: <Search className="w-8 h-8" />,
      color: "text-[var(--accent-saffron)]",
      bg: "bg-orange-100"
    },
    {
      title: "Google & Meta Ads",
      description: "ROI-focused paid ad campaigns. We manage every rupee of your ad budget for maximum returns.",
      icon: <Megaphone className="w-8 h-8" />,
      color: "text-[var(--accent-indigo)]",
      bg: "bg-indigo-100"
    },
    {
      title: "E-Commerce Solutions",
      description: "Complete online stores on Shopify and WooCommerce to start selling products across India and globally.",
      icon: <Code2 className="w-8 h-8" />,
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      title: "Social Media Marketing",
      description: "Brand-building content calendars and targeted campaigns on Instagram, Facebook, and LinkedIn.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "text-pink-600",
      bg: "bg-pink-100"
    },
    {
      title: "UI/UX & Logo Design",
      description: "Pixel-perfect logos, brand identities, and landing pages that make your business stand out from competitors.",
      icon: <PenTool className="w-8 h-8" />,
      color: "text-purple-600",
      bg: "bg-purple-100"
    }
  ];

  return (
    <section id="services" className="py-28 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tag-chip mb-4"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Digital Services to <span className="gradient-indigo">Scale Your Brand</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--text-secondary)]"
          >
            We offer end-to-end web and marketing solutions to help Indian small businesses succeed online.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-light p-8 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
