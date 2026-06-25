"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LogIn, Route, Unlock, ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
  }
};

export default function StepsSection() {
  const steps = [
    {
      num: "01",
      title: "Step Through the Gate",
      icon: LogIn,
      text: "Click the \"Join\" button to enter our community and set up your profile. This is where you introduce yourself and choose whether you want to start as a Provider, Guide, or Connector.",
      color: "#E48C2A",
      gradient: "from-[#E48C2A] to-[#ffb15c]",
      bgImage: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=800&auto=format&fit=crop" // Cinematic dark doorway/light sliver
    },
    {
      num: "02",
      title: "Take the 7-Day Sprint",
      icon: Route,
      text: "Jump straight into our short career sprint. You will map out your current skills and walk away with a clear, realistic execution plan for your professional growth.",
      color: "#f06e3c", 
      gradient: "from-[#f06e3c] to-[#ff8c5a]",
      bgImage: "https://images.unsplash.com/photo-1554147090-e1221a04a025?q=80&w=800&auto=format&fit=crop" // Abstract motion/pathway
    },
    {
      num: "03",
      title: "Unlock the Hub",
      icon: Unlock,
      text: "Once your map is ready, you gain full access to the Support Hub. This is where you start connecting with other members, sharing work, and picking up gigs.",
      color: "#f74f4f",
      gradient: "from-[#f74f4f] to-[#ff8585]",
      bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop" // Dark structural depth/vault aesthetic
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#E48C2A] py-24 lg:py-32 border-t border-white/5">
      
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-b from-[#E48C2A]/10 via-[#f74f4f]/5 to-transparent blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="text-center mb-16 lg:mb-28 relative"
        >
         
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Space_mono',monospace] font-black tracking-tight leading-[1.1]">
            Your First <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E48C2A] to-[#f74f4f]">Three Steps</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            The clear, intentional path from raw potential to active earning. No guesswork required.
          </p>
        </motion.div>

        {/* The Path Sequence */}
        <div className="relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[15%] right-[15%] h-[1px] bg-white/5 z-0">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-gradient-to-r from-[#E48C2A] via-[#f06e3c] to-[#f74f4f] origin-left"
            />
            {/* Ambient glow for the line */}
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 h-[10px] -top-[4px] blur-sm bg-gradient-to-r from-[#E48C2A] via-[#f06e3c] to-[#f74f4f] origin-left"
            />
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10"
          >
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="relative group flex flex-col h-full"
              >
                {/* Step Indicator Orb */}
                <div className="flex justify-center mb-10 relative">
                  <div className="absolute inset-0 blur-[30px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-full" style={{ backgroundColor: step.color }} />
                  <div className="w-20 h-20 rounded-full bg-[#070707] border border-white/10 flex items-center justify-center relative z-10 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                    {/* Dynamic Circle border gradient */}
                    <div className="absolute inset-0 rounded-full border-[2px] border-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-700" style={{ backgroundImage: `linear-gradient(#070707, #070707), linear-gradient(to right, ${step.color}, transparent)`, backgroundOrigin: "border-box", backgroundClip: "content-box, border-box" }} />
                    <step.icon size={30} style={{ color: step.color }} className="transition-transform duration-500 group-hover:scale-110" />
                    
                    {/* Mini Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-['Space_mono',monospace] font-bold text-white bg-[#0a0a0a] border border-white/20 shadow-lg" style={{ boxShadow: `0 0 20px ${step.color}30` }}>
                      {step.num}
                    </div>
                  </div>
                </div>

                {/* Card Content with Chiaroscuro Texture */}
                <div className="relative flex-1 rounded-[1.5rem] p-[1px] overflow-hidden transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)]">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 transition-colors duration-500 group-hover:from-white/20" />
                  
                  <div className="relative h-full bg-[#0a0a0a] rounded-[calc(1.5rem-1px)] flex flex-col overflow-hidden transition-colors duration-500 group-hover:bg-[#0c0c0c]">
                    
                    {/* Cinematic Background Image Blend */}
                    {step.bgImage && (
                      <>
                        <img 
                          src={step.bgImage} 
                          alt={`Step ${step.num} Background`} 
                          className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 mix-blend-luminosity grayscale contrast-125 brightness-75 transition-all duration-1000 scale-105 group-hover:scale-100 z-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]/50 z-10" />
                      </>
                    )}

                    <div className="relative z-20 p-8 flex flex-col h-full">
                      <h3 className={`text-2xl font-['Space_mono',monospace] font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${step.gradient}`}>
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed font-medium group-hover:text-gray-300 transition-colors duration-500">
                        {step.text}
                      </p>
                    </div>

                    {/* Mobile Only: Down Arrow between steps */}
                    {idx < steps.length - 1 && (
                      <div className="lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-white/20 z-30">
                        <ArrowRight className="rotate-90" size={24} style={{ color: step.color }} />
                      </div>
                    )}
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