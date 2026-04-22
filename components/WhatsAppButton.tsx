'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function WhatsAppButton() {
  const WHATSAPP_URL = "https://wa.me/919006543913?text=Hi%20Maajanki%20Web%20Tech%20Web%20Tech!%20I%20need%20a%20website%20for%20my%20business.";

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center group"
    >
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
}
