import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Rocket, Coins, Users, Flame, ArrowRight } from 'lucide-react';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const frameworkSteps = [
  {
    phase: '01',
    title: 'Learn',
    description: 'Acquire high-income digital skills and web3 native operational capabilities through structured cohort learning.',
    icon: BookOpen,
  },
  {
    phase: '02',
    title: 'Activate',
    description: 'Deploy knowledge in sandboxes, participating in governance simulations and live ecosystem testbeds.',
    icon: Rocket,
  },
  {
    phase: '03',
    title: 'Earn',
    description: 'Unlock decentralized income streams, smart-contract matching bounties, and liquid human capital networks.',
    icon: Coins,
  },
  {
    phase: '04',
    title: 'Mentor',
    description: 'Guide the incoming cohort, stress-testing your own mastery while reinforcing community architecture.',
    icon: Users,
  },
  {
    phase: '05',
    title: 'Multiply',
    description: 'Scale community-led ventures, compound regional treasury assets, and spin off independent sub-DAOs.',
    icon: Flame,
  }
];

export default function SolutionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0501] py-24 lg:py-36 border-b border-white/5">
      
      {/* Background Glow Geometry */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[600px] bg-[#E48C2A]/[0.03] blur-[140px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* HERO QUOTE BLOCK */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={fadeInUp}
          className="max-w-5xl mx-auto text-center mb-28"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-['Space_Grotesk',sans-serif] font-black mb-8 text-white tracking-tight leading-[1.15]">
            “Talent is distributed evenly across the world. <br className="hidden md:block" />
            <span className="text-[#E48C2A]">Opportunity is not.”</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            At <span className="text-white font-medium">OwlphaDAO</span>, we build resilient coordination systems that bypass legacy gatekeepers, creating direct, alternative pathways to global prosperity.
          </p>
        </motion.div>

        {/* FRAMEWORK CONTAINER */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="relative bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-2xl rounded-[2.5rem] border border-white/5 p-8 md:p-12 lg:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
        >
          {/* Header Inside Card */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#E48C2A] uppercase mb-2 block">Strategic Architecture</span>
              <h3 className="text-2xl md:text-3xl font-['Space_Grotesk',sans-serif] font-bold text-white">
                The Owlpha Economic Empowerment Framework
              </h3>
            </div>
            <p className="text-gray-400 text-sm md:text-base max-w-xs font-light">
              A dynamic, circular pathway engineering the journey from localized learning to global wealth multiplication.
            </p>
          </div>

          {/* FLOW ROADMAP / CARDS GRID */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
          >
            {frameworkSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -6, bg: "rgba(255, 255, 255, 0.03)", borderColor: "rgba(228, 140, 42, 0.3)" }}
                  className="relative bg-white/[0.01] border border-white/[0.04] p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 group overflow-hidden"
                >
                  {/* Internal Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#E48C2A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    {/* Top Meta Line */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-[#E48C2A]/60 group-hover:text-[#E48C2A] transition-colors duration-300 font-bold">
                        PHASE {step.phase}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-[#E48C2A]/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E48C2A]/10 transition-all duration-300">
                        <IconComponent className="text-gray-400 group-hover:text-[#E48C2A] transition-colors duration-300" size={18} />
                      </div>
                    </div>

                    {/* Content */}
                    <h4 className="text-xl font-['Space_Grotesk',sans-serif] font-bold text-white mb-3 tracking-wide">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Connective Arrows for Large Screens */}
                  {index < 4 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 pointer-events-none transform translate-x-1/2 text-gray-700 group-hover:text-[#E48C2A] group-hover:translate-x-[6px] transition-all duration-300">
                      <ArrowRight size={16} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}