'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  const WHATSAPP_URL = "https://wa.me/919006543913?text=Hi%20Maajanki%20Web%20Tech%20Web%20Tech!%20I%20need%20a%20website%20for%20my%20business.";

  return (
    <section id="contact" className="py-28 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="tag-chip mb-4">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Let's build something <span className="gradient-indigo">great together.</span></h2>
            <p className="text-lg text-[var(--text-secondary)] mb-10 leading-relaxed">We're based in Bettiah, Bihar, but we work with amazing businesses all across India and the globe.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-[var(--accent-saffron)]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[var(--text-primary)]">Call or WhatsApp</p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-saffron)] transition-colors">+91 90065 43913</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-[var(--accent-indigo)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[var(--text-primary)]">Email Us</p>
                  <a href="mailto:ashish.maajankiweb@gmail.com" className="text-[var(--text-secondary)] hover:text-[var(--accent-indigo)] transition-colors">ashish.maajankiweb@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[var(--text-primary)]">Location</p>
                  <p className="text-[var(--text-secondary)]">Bettiah, Bihar, India - 845438</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-light p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--accent-saffron)] focus:ring-1 focus:ring-[var(--accent-saffron)] bg-[var(--bg-primary)]" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--accent-saffron)] focus:ring-1 focus:ring-[var(--accent-saffron)] bg-[var(--bg-primary)]" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--accent-saffron)] focus:ring-1 focus:ring-[var(--accent-saffron)] bg-[var(--bg-primary)]" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">How can we help?</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--accent-saffron)] focus:ring-1 focus:ring-[var(--accent-saffron)] bg-[var(--bg-primary)]" placeholder="I need a new website for my business..."></textarea>
              </div>
              <button type="submit" className="w-full btn-primary justify-center mt-2 group">
                Send Message <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
