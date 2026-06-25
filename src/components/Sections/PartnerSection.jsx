"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2 } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function PartnerSection() {
  

  const handleScrollToHub = () => {
    const hubSection = document.getElementById('support-hub-section');
    if (hubSection) {
      hubSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#E48C2A] py-24 lg:py-32 border-t border-white/5">
      
      {/* Cinematic Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[50%] h-[500px] bg-gradient-to-l from-[#E48C2A]/10 to-transparent blur-[140px] rounded-full opacity-60" />
        <div className="absolute top-0 left-1/4 w-[40%] h-[400px] bg-gradient-to-r from-white/5 to-transparent blur-[120px] rounded-full opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Main Card */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="relative overflow-hidden rounded-[2.5rem] p-[1px] bg-gradient-to-b from-white/10 to-transparent shadow-2xl"
        >
          {/* Inner Content Container */}
          <div className="relative bg-[#050505] rounded-[calc(2.5rem-1px)] p-10 md:p-16 lg:p-20 overflow-hidden">
            
            {/* Dark Architectural Texture Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-[#050505]" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Branding */}
              <div className="lg:col-span-5 flex flex-col items-start">
               

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Space_mono',monospace] font-black tracking-tight leading-[1.1] mb-6">
                  Partner <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E48C2A] to-[#ffb15c]">
                    With Us
                  </span>
                </h2>

                <div className="hidden lg:flex items-center gap-4 text-white/10 mt-6">
                  <Building2 size={48} strokeWidth={1} />
                  <div className="w-16 h-[1px] bg-white/10" />
                </div>
              </div>

              {/* Right Column: Copy & CTA */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-10">
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                    Are you an organization, business owner, or educator looking to collaborate with global talent? We route all partnerships and inquiries directly through our <span className="text-[#E48C2A] font-['Space_mono',monospace] font-bold">Talent Support Unit (TSU)</span>.
                  </p>
                  
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                    By plugging straight into our Support Hub, your opportunities don't get lost in corporate emails. Instead, they go directly to the people who can execute them, connecting you instantly with our verified Providers, Guides, and Connectors.
                  </p>
                </div>

                {/* Call to Action Button */}
                <div className="pt-4">
                  <button 
                    onClick={handleScrollToHub}
                    className="group relative inline-flex items-center gap-4 px-8 py-5 bg-[#FFFFFF] text-[#000000] font-bold text-sm tracking-wider uppercase rounded-xl overflow-hidden transition-all duration-300 hover:bg-[#E48C2A] hover:text-[#FFFFFF] active:scale-[0.98] shadow-xl hover:shadow-[0_0_30px_rgba(228,140,42,0.3)]"
                  >
                    <span className="font-['Space_mono',monospace]">Submit an Inquiry</span>
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}