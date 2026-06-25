"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Shirt, Fingerprint, ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

export default function CollectiblesSection() {
  const brandColor = "#E48C2A";

  const cards = [
    {
      title: "Digital Collectibles",
      subtitle: "(NFTs, Tokens, & Drops)",
      icon: Hexagon,
      text: "Long before we built our learning tools, we started as a community united by digital assets. Today, our tokens and community drops are your official keys to the ecosystem. Holding them is your proof of membership and unlocks special access across our network.",
      glow: "from-[#E48C2A]/20 to-transparent",
      accent: "#E48C2A",
      bgImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" // Abstract digital/geometric dark matter
    },
    {
      title: "Physical Merchandise",
      subtitle: "Wear the movement",
      icon: Shirt,
      text: "Wear the movement. Our custom clothing and gear are built so Owlphas can easily recognize each other out in the real world, whether you are working from a local coffee shop or gathering at a regional meetup.",
      glow: "from-[#f74f4f]/20 to-transparent",
      accent: "#f74f4f",
      bgImage: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?q=80&w=1000&auto=format&fit=crop" // Cinematic dark fabric/texture
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#E48C2A] py-24 lg:py-32 border-t border-white/5">
      
      {/* Cinematic Background Shadows and Lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[50%] h-[500px] bg-gradient-to-r from-[#E48C2A]/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[50%] h-[500px] bg-gradient-to-l from-[#f74f4f]/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay z-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="text-center mb-20"
        >

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Space_mono',monospace] font-black tracking-tight leading-[1.1]">
            Digital Assets & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E48C2A] to-[#f74f4f]">
              Real-World Gear
            </span>
          </h2>
        </motion.div>

        {/* 2-Column Split Showcase */}
        <motion.div 
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {cards.map((card, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className="relative group h-full"
            >
              {/* Radial Backdrop Glow on Hover */}
              <div className={`absolute -inset-1 bg-gradient-to-b ${card.glow} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none`} />
              
              {/* Card Base */}
              <div className="relative h-full overflow-hidden rounded-[2rem] p-[1px] bg-gradient-to-b from-white/10 to-white/5 transition-all duration-700 group-hover:from-white/20 group-hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)]">
                
                <div className="relative h-full bg-[#050505] rounded-[calc(2rem-1px)] overflow-hidden transition-colors duration-500 group-hover:bg-[#0a0a0a]">
                  
                  {/* Cinematic Background Image Blend */}
                  {card.bgImage && (
                    <>
                      <img 
                        src={card.bgImage} 
                        alt={card.title} 
                        className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-25 mix-blend-luminosity grayscale contrast-150 brightness-50 transition-all duration-1000 scale-105 group-hover:scale-100 z-0"
                      />
                      {/* Heavy Chiaroscuro Vignette Masking */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent z-10" />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_80%)] z-10" />
                    </>
                  )}

                  {/* Inner Content Wrapper */}
                  <div className="relative z-20 p-8 sm:p-12 flex flex-col items-center text-center h-full">
                    
                    {/* Luxury Asset Frame */}
                    <div className="relative mb-8 mt-2 transition-transform duration-700 group-hover:-translate-y-2">
                      <div className="absolute inset-0 blur-2xl opacity-30 rounded-full transition-opacity duration-500 group-hover:opacity-60" style={{ backgroundColor: card.accent }} />
                      <div className="relative w-24 h-24 rounded-2xl flex items-center justify-center border border-white/10 bg-[#070707] shadow-2xl backdrop-blur-sm group-hover:border-white/20 transition-colors duration-500">
                        <card.icon size={40} style={{ color: card.accent }} className="drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
                      </div>
                    </div>

                    {/* Copy Details */}
                    <div className="flex-1 flex flex-col justify-center w-full">
                      <h3 className="text-2xl sm:text-3xl font-['Space_mono',monospace] font-bold text-white mb-2 transition-colors duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400">
                        {card.title}
                      </h3>
                      <h4 className="text-xs font-['Space_mono',monospace] font-bold tracking-[0.15em] uppercase mb-6 opacity-80" style={{ color: card.accent }}>
                        {card.subtitle}
                      </h4>
                      <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-medium transition-colors duration-500 group-hover:text-gray-300">
                        {card.text}
                      </p>
                    </div>

                    {/* Micro Accent Line */}
                    <div className="w-12 h-[2px] rounded-full mt-10 opacity-20 group-hover:opacity-100 group-hover:w-24 transition-all duration-700 ease-out" style={{ backgroundColor: card.accent, boxShadow: `0 0 10px ${card.accent}` }} />

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

        {/* 5. CTA SECTION */}
      <section className="relative pt-10 pb-32 px-6 text-center z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] bg-[#E48C2A] opacity-5 blur-[100px] pointer-events-none rounded-full" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-5xl font-['Space_mono',monospace] font-bold md:text-6xl font-black mb-8 tracking-tight">
            Ready to join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E48C2A] to-[#f74f4f]">movement?</span>
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-gray-400 mb-12 text-[16px] max-w-2xl mx-auto">
            Whether you're here to learn, build, hire, or mentor, there is a place for you in the Owlpha ecosystem.
          </motion.p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-5 bg-[#E48C2A] text-[#000] font-['Space_mono',monospace] font-bold font-black rounded-2xl transition-all flex items-center justify-center gap-3 mx-auto text-lg shadow-[0_0_40px_rgba(228,140,42,0.4)] hover:shadow-[0_0_60px_rgba(228,140,42,0.6)]"
          >
            Become an Owlpha 
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>
    </section>
  );
}