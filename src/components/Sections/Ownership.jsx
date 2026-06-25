"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, ShieldCheck } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function OwnershipPromiseSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#E48C2A] py-24 lg:py-32 border-t border-white/5">
      
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center">
        <div className="absolute w-[60%] h-[400px] bg-gradient-to-r from-[#E48C2A]/10 to-[#f74f4f]/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="w-full"
        >
         

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Space_mono',monospace] font-black tracking-tight leading-[1.1] mb-12">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E48C2A] to-[#f74f4f]">Ownership</span> Promise
          </h2>

          {/* Manifesto Card with Cinematic Chiaroscuro Overlay */}
          <div className="relative group overflow-hidden rounded-[2rem] p-[1px] transition-all duration-700 mx-auto max-w-3xl shadow-[0_20px_50px_-15px_rgba(228,140,42,0.15)]">
            {/* Animated Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E48C2A]/40 via-white/5 to-[#f74f4f]/40 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Inner Content */}
            <div className="relative h-full bg-[#070707] rounded-[calc(2rem-1px)] p-8 md:p-12 lg:p-16 flex flex-col items-center overflow-hidden">
              
              {/* Digital Ownership / Abstract Ledger Aesthetic Background */}
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop" 
                alt="Digital Ownership Structure" 
                className="absolute inset-0 w-full h-full object-cover opacity-[0.08] group-hover:opacity-[0.15] mix-blend-luminosity grayscale contrast-150 brightness-50 transition-all duration-1000 scale-105 group-hover:scale-100 z-0"
              />
              {/* Heavy Chiaroscuro Vignette Masking */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#070707] via-transparent to-[#070707] z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#070707_85%)] z-10" />

              <div className="relative z-20 flex flex-col items-center">
                {/* Icon Orb */}
                <div className="relative mb-10 group-hover:-translate-y-1 transition-transform duration-500">
                  <div className="absolute inset-0 bg-[#E48C2A] blur-2xl opacity-20 rounded-full" />
                  <div className="relative w-20 h-20 rounded-full flex items-center justify-center border border-white/10 bg-[#0a0a0a] shadow-2xl backdrop-blur-sm group-hover:border-[#E48C2A]/40 transition-colors duration-500">
                    <Fingerprint size={36} className="text-[#E48C2A]" />
                  </div>
                </div>

                {/* Core Text */}
                <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed font-medium">
                  Owlpha is built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 font-bold">true digital ownership</span>. You own your data, you own your career map, and you <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 font-bold">keep the value you create</span>. The ecosystem grows because we trade verifiable value with each other, not because we pay rent to a middleman.
                </p>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}