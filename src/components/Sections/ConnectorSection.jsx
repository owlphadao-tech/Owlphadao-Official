"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, User, Activity, Zap } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

export default function ConnectorSection() {
  const roleColor = "#E48C2A"; // The Connector's warm, inviting orange

  const details = [
    {
      label: "Who they are",
      icon: User,
      text: "Natural community builders who believe that the strongest professional relationships happen when we look beyond our computer screens.",
      isHighlight: false
    },
    {
      label: "What they do",
      icon: Activity,
      text: "They take the initiative to organize regional online hangouts, local coffee shop co-working days, and physical meetups in their respective cities.",
      isHighlight: false
    },
    {
      label: "The Impact",
      icon: Zap,
      text: "They break the crushing isolation of remote learning and remote work, ensuring that our borderless movement feels like a close-knit family on the ground.",
      isHighlight: true,
      // Stylized community/gathering background for the highlight card
      bgImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#E48C2A] py-24 lg:py-32 border-t border-white/5 pb-32">
      
      {/* Ambient Background Elements tailored to The Connector's color */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -left-1/4 -translate-y-1/2 w-[60%] h-[600px] bg-gradient-to-r from-[#E48C2A]/15 to-transparent blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Role Identity & Editorial Portrait */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="lg:col-span-5 flex flex-col h-full justify-center"
          >
          
            
            <h2 className="text-5xl lg:text-7xl font-['Space_mono',monospace] font-black tracking-tight leading-[1.1] mb-6">
              The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E48C2A] to-[#ffb15c]">
                Connector
              </span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-md mb-10">
              The heartbeat of the community. Connectors bridge the gap between the digital and the physical, turning a global network into a local family.
            </p>

            {/* Cinematic Portrait Image Frame */}
            <div className="relative w-full aspect-[4/5] max-w-md rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-[#E48C2A] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 z-0" />
              
              {/* Community/Meeting Visual */}
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop" 
                alt="The Connector" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[40%] contrast-125 brightness-[75%] group-hover:scale-105 transition-transform duration-1000 z-10"
              />
              
              {/* Editorial Chiaroscuro Shadow Casts */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent z-20" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/80 via-transparent to-transparent z-20" />
              
              {/* Inner Label Overlay */}
              <div className="absolute bottom-8 left-8 z-30 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center border border-[#E48C2A]/30 bg-[#070707]/80 backdrop-blur-md">
                  <Users size={24} color={roleColor} />
                </div>
                <div>
                  <div className="text-white font-['Space_mono',monospace] font-bold text-sm tracking-widest uppercase">Uniting</div>
                  <div className="text-[#E48C2A] text-xs">Local Communities</div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Detail Breakdown Cards */}
          <motion.div 
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {details.map((detail, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className={`relative overflow-hidden rounded-[1.5rem] p-[1px] transition-all duration-500 hover:-translate-y-1 ${
                  detail.isHighlight ? 'shadow-[0_20px_50px_-15px_rgba(228,140,42,0.3)] lg:ml-12 mt-4' : ''
                }`}
              >
                {/* Border Gradient styling */}
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  detail.isHighlight ? 'from-[#E48C2A] to-[#E48C2A]/20' : 'from-white/10 to-white/5'
                }`} />
                
                {/* Inner Content Block */}
                <div className={`relative h-full rounded-[calc(1.5rem-1px)] p-8 sm:p-10 overflow-hidden ${
                  detail.isHighlight ? 'bg-[#070707]' : 'bg-[#0a0a0a]'
                }`}>
                  
                  {/* Dynamic Backdrop Masking for the Highlight Card */}
                  {detail.isHighlight && detail.bgImage && (
                    <>
                      <img 
                        src={detail.bgImage} 
                        alt="Community Impact" 
                        className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-luminosity scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/90 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070707] to-transparent" />
                    </>
                  )}

                  <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                    
                    {/* Focal Point Icon Container */}
                    <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center border backdrop-blur-sm ${
                      detail.isHighlight ? 'border-[#E48C2A]/50 bg-[#E48C2A]/20 shadow-[0_0_20px_rgba(228,140,42,0.2)]' : 'border-white/10 bg-white/5'
                    }`}>
                      <detail.icon size={26} color={detail.isHighlight ? roleColor : "#a3a3a3"} />
                    </div>
                    
                    {/* Typography Stack */}
                    <div>
                      <h4 className="font-['Space_mono',monospace] font-bold tracking-widest text-xs uppercase mb-3" style={{ color: detail.isHighlight ? roleColor : "#a3a3a3" }}>
                        {detail.label}
                      </h4>
                      <p className={`text-base sm:text-lg leading-relaxed ${
                        detail.isHighlight ? 'text-white font-semibold' : 'text-gray-400 font-medium'
                      }`}>
                        {detail.text}
                      </p>
                    </div>

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