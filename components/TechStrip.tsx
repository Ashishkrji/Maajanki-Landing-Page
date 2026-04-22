'use client';

export function TechStrip() {
  const techs = ["WordPress", "Elementor", "Shopify", "WooCommerce", "Next.js", "React", "React Native", "Google Ads", "SEO", "Meta Ads", "Figma", "Tailwind CSS"];
  
  // Duplicate array for infinite scroll
  const duplicatedTechs = [...techs, ...techs, ...techs];

  return (
    <div className="py-10 bg-[var(--bg-dark)] border-y border-white/10 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-dark)] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-dark)] to-transparent z-10" />
      
      <div className="flex gap-16 marquee-track items-center">
        {duplicatedTechs.map((tech, i) => (
          <span key={i} className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-white/30 whitespace-nowrap uppercase tracking-wider">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
