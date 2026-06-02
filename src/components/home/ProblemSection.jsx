import React from 'react';
import { motion } from 'framer-motion';
import { Target, XCircle, ArrowDownRight } from 'lucide-react';

// --- Complex Animation presets ---


const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const itemScaleX = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const pulseGlow = {
  initial: { opacity: 0.3, scale: 1 },
  animate: {
    opacity: [0.3, 0.5, 0.3],
    scale: [1, 1.05, 1],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  }
};

export default function ProblemSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0501] py-24 lg:py-36 border-b border-white/5">
      
      {/* Dynamic Ambient Background Tech Patterns */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] opacity-70" />
      
      {/* Animated overlapping glowing blurs */}
      <motion.div 
        variants={pulseGlow} initial="initial" animate="animate"
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#E48C2A]/5 blur-[130px] rounded-full pointer-events-none"
      />
      <motion.div 
        variants={pulseGlow} initial="initial" animate="animate"
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#f74f4f]/5 blur-[130px] rounded-full pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
       

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
      

          {/* THE BARRIERS CARD */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={cardContainerVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-xl p-8 lg:p-12 rounded-[2rem] border border-[#f74f4f]/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden group hover:border-[#f74f4f]/30 transition-colors duration-500"
          >
            {/* Ambient Internal Glow Ring */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#f74f4f]/10 blur-[100px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center justify-between mb-10 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#f74f4f]/10 flex items-center justify-center border border-[#f74f4f]/20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  <Target className="text-[#f74f4f]" size={26} />
                </div>
                <h3 className="text-2xl font-['Space_Grotesk',sans-serif] font-bold text-white tracking-wide">The Barriers</h3>
              </div>
              <ArrowDownRight size={20} className="text-gray-600 group-hover:text-[#f74f4f] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </div>

            <ul className="space-y-4 relative z-10">
              {['Legacy Geographic Restrictions', 'Outdated Educational Silos', 'Corporate Gatekeepers & Intermediaries', 'Asymmetric Market Access'].map((item, i) => (
                <motion.li 
                  key={i} variants={itemScaleX}
                  className="flex items-center gap-4 bg-white/[0.01] hover:bg-white/[0.04] p-4 rounded-xl border border-white/[0.03] hover:border-white/[0.08] text-gray-300 font-medium transition-colors duration-300"
                >
                  <XCircle size={22} className="text-[#f74f4f] shrink-0" /> 
                  <span className="text-sm md:text-base tracking-wide">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}