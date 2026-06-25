"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {  Hexagon, Route, Target } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

export default function EcosystemSection() {
  

  const pillars = [
    {
      title: "Built for the Long Run",
      icon: Hexagon,
      text: "We do not subscribe to the popular culture of rushing to \"ship fast\" just to create temporary noise. We approach our ecosystem like architects, focusing on scalable foundations that ensure long-term stability and real security for our members.",
      bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop" // Abstract architectural lines
    },
    {
      title: "A Unified Pipeline",
      icon: Route,
      text: "We are highly intentional about how our tools connect. The Academy feeds into the 7-Day Sprint, which opens the doors to the Support Hub. This creates a reliable conveyor belt that takes you from raw potential to active earning.",
      bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop" // Structural geometric light paths
    },
    {
      title: "Grounded Metrics",
      icon: Target,
      text: "We don't measure the success of this movement by social media hype or empty metrics. We measure our success by one concrete number: the amount of real-world economic impact experienced by individual Owlphas across the globe.",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" // Moody, raw data/focal interface
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#E48C2A] py-24 lg:py-32 border-t border-white/5">
      
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-gradient-to-b from-[#E48C2A]/8 via-[#f74f4f]/4 to-transparent blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Manifesto Area */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="max-w-5xl mx-auto text-center mb-28"
        >
        

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Space_mono',monospace] font-black tracking-tight leading-[1.1] mb-12">
            Why We Are an <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E48C2A] to-[#f74f4f]">Ecosystem</span>, <br className="hidden md:block" />
            Not a Company
          </h2>

          {/* Core Belief Box transformed into a high-end Asymmetric Split Layout */}
          <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent overflow-hidden text-left shadow-2xl">
            <div className="bg-[#070707]/90 backdrop-blur-xl rounded-[calc(1.5rem-1px)] grid lg:grid-cols-12 overflow-hidden">
              
              {/* Text Side */}
              <div className="p-8 md:p-12 lg:col-span-7 flex flex-col justify-center">
                <h3 className="text-[#E48C2A] font-['Space_mono',monospace] font-bold tracking-widest text-xs uppercase mb-4 opacity-70">
                  The Core Belief
                </h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
                  Traditional corporate structures are built to benefit a few people at the top. We chose to build a decentralized ecosystem because we believe individuals should completely own their economy rather than relying on systems or subscription models they cannot control. Here, the value created by the network goes directly back to the people doing the work.
                </p>
              </div>

              {/* Master Visual Side (Chiaroscuro Blueprint/Ecosystem Visual) */}
              <div className="relative lg:col-span-5 min-h-[300px] lg:min-h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-white/5 group">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" 
                  alt="Decentralized System Structure" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 contrast-125 brightness-50 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#070707] lg:via-transparent lg:to-transparent z-10" />
                
                {/* Subtle graphic layout indicator inside the photo */}
                <div className="absolute bottom-6 right-6 z-20 font-['Space_mono',monospace] text-[10px] tracking-[0.3em] uppercase opacity-30 text-white">
                  [ System.Architecture_v1.0 ]
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* 3-Pillar Grid Area */}
        <div className="space-y-12">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center"
          >
            <h3 className="text-2xl font-['Space_mono',monospace] font-bold text-white tracking-tight">
              How We Shape Our Movement Intentionally
            </h3>
          </motion.div>

          <motion.div 
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="relative group overflow-hidden rounded-[1.5rem] p-[1px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(228,140,42,0.25)]"
              >
                {/* Border Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent group-hover:from-[#E48C2A] group-hover:to-[#f74f4f]/40 transition-colors duration-500" />
                
                {/* Inner Card */}
                <div className="relative h-full bg-[#0a0a0a] rounded-[calc(1.5rem-1px)] p-8 flex flex-col items-start overflow-hidden transition-colors duration-500 group-hover:bg-gradient-to-br group-hover:from-[#0d0702] group-hover:to-[#050505]">
                  
                  {/* Blended Background Story Image */}
                  {pillar.bgImage && (
                    <>
                      <img 
                        src={pillar.bgImage} 
                        alt={pillar.title} 
                        className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-[0.12] mix-blend-luminosity contrast-125 brightness-75 transition-all duration-700 scale-105 group-hover:scale-100 z-0"
                      />
                      {/* Dark Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10" />
                    </>
                  )}
                  
                  {/* Content Wrappers forcing relative z-index layout */}
                  <div className="relative z-20 w-full flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 mb-6 group-hover:border-[#E48C2A]/30 group-hover:bg-[#E48C2A]/10 transition-colors duration-500">
                      <pillar.icon size={24} className="text-gray-400 group-hover:text-[#E48C2A] transition-colors duration-500" />
                    </div>
                    
                    <h4 className="text-xl font-['Space_mono',monospace] font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#E48C2A] group-hover:to-[#ffb15c] transition-all duration-500">
                      {pillar.title}
                    </h4>
                    
                    <p className="text-sm text-gray-400 leading-relaxed font-medium group-hover:text-gray-300 transition-colors duration-500">
                      {pillar.text}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}