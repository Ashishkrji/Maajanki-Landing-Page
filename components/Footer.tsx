'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-black text-[var(--accent-saffron)] tracking-tight font-[family-name:var(--font-space-grotesk)]">Maajanki</span>
              <br />
              <span className="text-3xl font-bold text-white tracking-tight font-[family-name:var(--font-space-grotesk)]">Web Tech</span>
            </Link>
            <p className="text-white/60 mb-8 max-w-sm">
              Building Websites That Grow Your Business. We are a premier website development company and digital marketing agency in India.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">Services</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-white/60 hover:text-[var(--accent-saffron)] transition-colors">Website Development</Link></li>
              <li><Link href="#services" className="text-white/60 hover:text-[var(--accent-saffron)] transition-colors">SEO Services</Link></li>
              <li><Link href="#services" className="text-white/60 hover:text-[var(--accent-saffron)] transition-colors">Google Ads</Link></li>
              <li><Link href="#services" className="text-white/60 hover:text-[var(--accent-saffron)] transition-colors">Social Media Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-white/60 hover:text-[var(--accent-saffron)] transition-colors">About Us</Link></li>
              <li><Link href="#portfolio" className="text-white/60 hover:text-[var(--accent-saffron)] transition-colors">Portfolio</Link></li>
              <li><Link href="#process" className="text-white/60 hover:text-[var(--accent-saffron)] transition-colors">Our Process</Link></li>
              <li><Link href="#contact" className="text-white/60 hover:text-[var(--accent-saffron)] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-white/60 hover:text-[var(--accent-saffron)] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-[var(--accent-saffron)] transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-[var(--accent-saffron)] transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Maajanki Web Tech. All rights reserved.</p>
          <p>Handcrafted with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
