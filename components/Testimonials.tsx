'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    { name: "Rahul Sharma", company: "Sharma Retailers", text: "Maajanki Web Tech transformed our local business. The new website brings us daily inquiries. Highly recommended for Indian business owners!" },
    { name: "Priya Singh", company: "Elegant Interiors", text: "Ashish and his team are simply the best. They delivered my portfolio website within a week and the design is absolutely stunning." },
    { name: "Vikram Tech", company: "Startup Hub", text: "Their SEO services actually work. We are now ranking on the first page of Google for all our targeted keywords." }
  ];

  return (
    <section className="py-28 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tag-chip mb-4"
          >
            Client Reviews
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Loved by <span className="gradient-saffron">Our Clients</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card-light p-8"
            >
              <div className="flex text-[var(--accent-gold)] mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-lg text-[var(--text-secondary)] italic mb-8">"{review.text}"</p>
              <div>
                <h4 className="font-bold text-[var(--text-primary)]">{review.name}</h4>
                <p className="text-sm text-[var(--text-muted)]">{review.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
