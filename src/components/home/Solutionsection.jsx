import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Rocket, Coins, Users, Flame, ArrowRight } from 'lucide-react';

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// Story-driven framework steps with curated high-contrast imagery
const frameworkSteps = [
  {
    phase: '01',
    title: 'Learn',
    description: 'Acquire high-income digital skills and web3 native operational capabilities through structured cohort learning. We strip away the noise, focusing strictly on verifiable execution and real-world utility.',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
  },
  {
    phase: '02',
    title: 'Activate',
    description: 'Knowledge without deployment is dead weight. Step into our sandboxes to deploy your skills, participate in governance simulations, and stress-test your capabilities within live ecosystem testbeds.',
    icon: Rocket,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
  },
  {
    phase: '03',
    title: 'Earn',
    description: 'Transition from simulation to sovereignty. Unlock decentralized income streams, execute smart-contract matching bounties, and tap into our liquid human capital networks to monetize your mastery.',
    icon: Coins,
    image: 'https://plus.unsplash.com/premium_photo-1661425505025-238c888750f7?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    phase: '04',
    title: 'Mentor',
    description: 'True authority is built by pulling others up. Guide the incoming cohort of builders. This phase stress-tests your own foundational mastery while reinforcing the structural integrity of our community architecture.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    phase: '05',
    title: 'Multiply',
    description: 'The endgame is localized impact at a global scale. Scale community-led ventures, compound regional treasury assets, and spin off independent sub-DAOs to redefine the economic reality of your region.',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
  }
];

export default function StorySolutionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#030303] py-24 lg:py-36 font-sans text-white">
      
      {/* Deep Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(ellipse_at_top,#E48C2A_0%,transparent_60%)] opacity-[0.03] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* HERO NARRATIVE BLOCK */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={fadeUp}
          className="max-w-4xl mb-32 border-l-4 border-[#E48C2A] pl-8 md:pl-12"
        >
         
          <h2 className="text-4xl md:text-6xl font-['Space_mono',monospace] font-bold mb-8 tracking-tighter leading-[1.1]">
            Talent is everywhere. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
              Opportunity is not.
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-[16px] font-light leading-relaxed max-w-2xl">
            We are engineering resilient coordination systems that bypass legacy gatekeepers. This is not just education; it is a sequential blueprint for economic sovereignty.
          </p>
        </motion.div>

        {/* STORY-DRIVEN TIMELINE */}
        <div className="relative">
          {/* Central Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E48C2A]/20 to-transparent -translate-x-1/2" />

          <div className="space-y-32 md:space-y-40">
            {frameworkSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = step.icon;

              return (
                <div 
                  key={step.phase}
                  className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Central Node Indicator */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#050505] border border-[#E48C2A]/30 rounded-full items-center justify-center z-20 shadow-[0_0_20px_rgba(228,140,42,0.1)]"
                  >
                    <div className="w-2 h-2 bg-[#E48C2A] rounded-full" />
                  </motion.div>

                  {/* IMAGE CONTAINER (The Chiaroscuro Aesthetic) */}
                  <motion.div 
                    variants={isEven ? slideInLeft : slideInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full lg:w-1/2 relative group"
                  >
                    <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/5">
                      {/* Image styling: High contrast, monochrome, low-key lighting */}
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover grayscale contrast-125 brightness-[0.6] group-hover:brightness-[0.8] transition-all duration-700 ease-in-out"
                      />
                      
                      {/* Deep dramatic shadow vignettes to mimic studio spotlighting */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)] opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80" />
                      
                      {/* Floating Phase Badge over image */}
                      <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 overflow-hidden">
                        <span className="block text-[6rem] lg:text-[8rem] font-black leading-none text-white/5 font-mono translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          {step.phase}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* TEXT CONTENT CONTAINER */}
                  <motion.div 
                    variants={isEven ? slideInRight : slideInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full lg:w-1/2 flex flex-col justify-center"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-[#111] border border-white/10 flex items-center justify-center shrink-0 shadow-[inset_0_4px_20px_rgba(0,0,0,0.5)]">
                        <IconComponent className="text-[#E48C2A]" size={24} />
                      </div>
                      <div>
                        <span className="text-xs font-mono tracking-widest text-gray-500 uppercase block mb-1">
                          Phase {step.phase}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-black text-4xl md:text-6xl font-['Space_mono',monospace] tracking-tight text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-8">
                      {step.description}
                    </p>

                    <button className="flex items-center gap-3 text-sm font-bold text-white uppercase tracking-wider group w-max">
                      <span className="relative pb-1">
                        Explore Blueprint
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E48C2A] transition-all duration-300 group-hover:w-full" />
                      </span>
                      <ArrowRight size={16} className="text-[#E48C2A] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}