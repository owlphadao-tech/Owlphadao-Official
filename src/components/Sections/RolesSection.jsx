"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Compass, Users, ArrowUpRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function RolesSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const roles = [
    {
      title: "The Provider",
      icon: Briefcase,
      color: "#E48C2A",
      bgGradient: "from-[#E48C2A]/20 via-transparent to-transparent",
      hoverBorder: "from-[#E48C2A] to-white/5",
      description: "Experienced professionals and business owners bringing steady workstreams into the community."
    },
    {
      title: "The Guide",
      icon: Compass,
      color: "#f74f4f",
      bgGradient: "from-[#f74f4f]/20 via-transparent to-transparent",
      hoverBorder: "from-[#f74f4f] to-white/5",
      description: "Career winners providing high-level mentorship to accelerate the next generation."
    },
    {
      title: "The Connector",
      icon: Users,
      color: "#E48C2A",
      bgGradient: "from-[#E48C2A]/20 via-transparent to-transparent",
      hoverBorder: "from-[#E48C2A] to-white/5",
      description: "Community-driven leaders organizing regional meetups and bridging the physical gap."
    }
  ];

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#E48C2A] flex items-center justify-center">
      
      {/* Animated Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-b from-[#E48C2A]/5 to-transparent blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 mask-image-[radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 w-full relative z-10 flex flex-col justify-center h-full">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="text-center mb-10 lg:mb-16 relative"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E48C2A] animate-pulse" />
            <h3 className="text-[#E48C2A] font-['Space_mono',monospace] font-bold tracking-widest text-xs uppercase">Your Seat at the Table</h3>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Space_mono',monospace] font-black tracking-tight leading-[1.1]">
            What do you want <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E48C2A] to-[#f74f4f]">
              to become?
            </span>
          </h2>
        </motion.div>

        {/* Roles Grid */}
        <motion.div 
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-4 md:gap-6"
        >
          {roles.map((role, idx) => {
            const isHovered = hoveredIdx === idx;
            const isAnotherHovered = hoveredIdx !== null && hoveredIdx !== idx;

            return (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative group rounded-[2rem] p-[2px] transition-all duration-700 ease-out cursor-pointer
                  ${isAnotherHovered ? 'opacity-40 scale-[0.98] blur-[2px]' : 'opacity-100 scale-100'}
                  ${isHovered ? '-translate-y-2 shadow-[0_30px_60px_-15px_rgba(228,140,42,0.2)]' : ''}
                `}
              >
                {/* Gradient Border Wrapper */}
                <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-b ${isHovered ? role.hoverBorder : 'from-white/10 to-transparent'} transition-colors duration-500`} />
                
                {/* Inner Card */}
                <div className={`relative h-full bg-[#070707] rounded-[calc(2rem-2px)] p-8 overflow-hidden bg-gradient-to-br ${role.bgGradient} flex flex-col justify-between`}>
                  
                  <div>
                    {/* Glowing Icon Orb */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-current blur-xl opacity-20" style={{ color: role.color }} />
                      <div className="relative w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 bg-black/50 backdrop-blur-xl z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <role.icon size={28} style={{ color: role.color }} />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-['Space_mono',monospace] font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-300">
                      {role.title}
                    </h3>
                    
                    <p className="text-sm text-gray-400 leading-relaxed font-medium">
                      {role.description}
                    </p>
                  </div>

                  {/* Hidden CTA that reveals on hover */}
                  <div className={`mt-8 overflow-hidden transition-all duration-500 flex items-center gap-2 text-sm font-['Space_mono',monospace] font-bold ${isHovered ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'}`} style={{ color: role.color }}>
                    Explore this path <ArrowUpRight size={16} />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}