import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TechStrip } from '@/components/TechStrip';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { About } from '@/components/About';
import { ProcessSection } from '@/components/ProcessSection';
import { StatsSection } from '@/components/StatsSection';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] overflow-hidden">
      <Navbar />
      <Hero />
      <TechStrip />
      <Services />
      <Portfolio />
      <About />
      <ProcessSection />
      <StatsSection />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
