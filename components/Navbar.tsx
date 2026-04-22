'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="text-2xl font-black text-[var(--accent-saffron)] tracking-tight font-[family-name:var(--font-space-grotesk)]">Maajanki</span>
          <span className="text-2xl font-bold text-[var(--text-primary)] tracking-tight font-[family-name:var(--font-space-grotesk)]">Web Tech</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-saffron)] transition-colors">
              {link.name}
            </Link>
          ))}
          <a href="#contact" className="btn-primary text-sm px-5 py-2">
            Get Proposal
          </a>
        </nav>

        <button className="md:hidden z-50 text-[var(--text-primary)]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 bg-white shadow-xl p-6 pt-24 flex flex-col gap-6 md:hidden border-b border-gray-100"
            >
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-[var(--text-primary)] hover:text-[var(--accent-saffron)]">
                  {link.name}
                </Link>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary justify-center">
                Get Free Consultation
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
