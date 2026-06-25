import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, Shield, Users,  BookOpen, 
  Zap, Network, Target, Feather, Globe, 
  ChevronRight
} from 'lucide-react';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
  }
};

const pulseGlow = {
  initial: { scale: 1, opacity: 0.1 },
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.1, 0.15, 0.1],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
  }
};

export default function AboutPage() {
  return (
    <div id='about' className="bg-[#000000] text-[#FFFFFF] font-sans min-h-screen overflow-hidden selection:bg-[#E48C2A] selection:text-[#000000] relative">
      
      {/* Background Grid Pattern with Bottom Fade Mask */}
      <div 
        className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"
        style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-15 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        {/* Animated Background Orb */}
        <motion.div 
          variants={pulseGlow}
          initial="initial"
          animate="animate"
          className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[800px] h-[500px] bg-[#E48C2A] blur-[150px] rounded-full pointer-events-none"
        />
        
        <motion.h1 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="text-5xl font-['Space_mono',monospace] font-black tracking-tighter mb-8 max-w-5xl leading-[1.1]"
        >
          Redefining Economic <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E48C2A] to-[#f74f4f]">
            Sovereignty
          </span>
        </motion.h1>
        
        <motion.p 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="text-[16px] text-gray-400 mb-12 max-w-3xl leading-relaxed font-light"
        >
          OwlphaDAO is a Web3 ecosystem amplifying builders and projects with real utility. We connect communities, host events, and drive adoption through education and innovation.
        </motion.p>
      </section>

      {/* 2. THE CORE PHILOSOPHY */}
      <section className="relative py-24 px-6 bg-[#050505]/80 backdrop-blur-xl border-t border-[#1A1A1A] z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {[
              { icon: Globe, title: "The Why", color: "text-[#E48C2A]", bg: "bg-[#E48C2A]/10", desc: "Talent is distributed evenly, but economic opportunity is trapped. We believe a borderless network of resilient people can bypass gatekeepers entirely by pooling skills, knowledge, and access." },
              { icon: Target, title: "The Mission", color: "text-[#f74f4f]", bg: "bg-[#f74f4f]/10", desc: "To equip every Owlpha with the digital skills, market access, and community backing required to achieve financial sovereignty and actively pull another Owlpha up with them." },
              { icon: Eye, title: "The Vision", color: "text-[#E48C2A]", bg: "bg-[#E48C2A]/10", desc: "A global, self-sustaining ecosystem where 'success' isn’t measured by token price, but by how many individuals move from economic survival to economic impact." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative bg-gradient-to-b from-[#111] to-[#0A0A0A] p-10 rounded-3xl border border-[#222] hover:border-[#E48C2A]/50 transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#E48C2A]/0 to-[#E48C2A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={item.color} size={28} />
                </div>
                <h3 className="text-2xl font-['Space_mono',monospace] font-bold mb-4 text-white group-hover:text-[#E48C2A] transition-colors">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. DECODING THE NAME (Enhanced with Story Imagery) */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-['Space_mono',monospace] font-black mb-6 tracking-tight">
            Anatomy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E48C2A] to-[#f74f4f]">Our Brand</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-[16px]">
            Our identity is deeply rooted in nature, leadership, and decentralized collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Feather, title: "OWL", color: "text-[#E48C2A]", desc: "The Owl represents vision in the dark and silent execution. In the volatile world of Web3, the Owl sees through the noise. It symbolizes the wisdom to learn and the precision to strike.", img: "https://images.unsplash.com/photo-1629640599520-733d44c6673d?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { icon: Shield, title: "PHA", color: "text-[#f74f4f]", desc: "Derived from 'Alpha', representing leadership and taking charge. We don't wait for opportunities; we create them. To be the 'Pha' is to be at the forefront of the future of work.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
            { icon: Network, title: "DAO", color: "text-[#E48C2A]", desc: "Decentralized Autonomous Organization. We are a borderless collective. Ownership, governance, and value flow back to the community that builds it.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
              className="relative p-10 min-h-[450px] flex flex-col justify-end overflow-hidden rounded-3xl border border-[#222] group"
            >
              {/* Story Background Image with Chiaroscuro Finish */}
              <div className="absolute inset-0 z-0 bg-[#050505]">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover background- grayscale contrast-125 brightness-[0.3] group-hover:scale-105 group-hover:brightness-[0.4] transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>

              {/* Animated glow orb behind the icon */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-current opacity-10 blur-[50px] group-hover:opacity-20 transition-opacity z-10" style={{ color: item.color === 'text-[#f74f4f]' ? '#f74f4f' : '#E48C2A' }} />
              
              <div className="relative z-10">
                <motion.div variants={floatAnimation} initial="initial" animate="animate">
                  <item.icon size={40} className={`${item.color} mb-6 opacity-90`} />
                </motion.div>
                <h3 className="text-3xl font-['Space_mono',monospace] font-black text-white mb-4 tracking-widest">{item.title}</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What is an Owlpha Highlight */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
          className="bg-gradient-to-br from-[#E48C2A] to-[#c97a23] text-[#000] rounded-[2.5rem] p-10 md:p-16 text-center max-w-5xl mx-auto relative overflow-hidden shadow-[0_0_50px_rgba(228,140,42,0.2)] hover:shadow-[0_0_80px_rgba(228,140,42,0.3)] transition-shadow duration-500"
        >
          <motion.div 
            animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4 pointer-events-none"
          >
             <Feather size={350} strokeWidth={1} />
          </motion.div>
          
          <h3 className="text-4xl font-['Space_mono',monospace] md:text-5xl font-black mb-8 relative z-10 tracking-tight">Who is an "Owlpha"?</h3>
          <p className="text-lg md:text-2xl font-medium leading-relaxed relative z-10 max-w-3xl mx-auto opacity-90">
            An individual who stands with us. A learner turned executor. A builder who refuses to let geography dictate their economic reality. Above all, an Owlpha lives by a single code:
          </p>
          <div className="mt-10 inline-block bg-black/10 backdrop-blur-sm px-8 py-6 rounded-2xl border border-black/10 relative z-10">
            <span className="font-black italic font-['Space_mono',monospace] text-2xl md:text-3xl tracking-tight">
              "Acquire the skills. Execute the blueprint. Pull another Owlpha up."
            </span>
          </div>
        </motion.div>
      </section>

      {/* 4. THE ECOSYSTEM ARCHITECTURE (Enhanced with Story Imagery) */}
      <section id='ecosystem' className="relative py-30 px-6 bg-[#050505] border-t border-[#1A1A1A] z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] max-w-md bg-[#f74f4f] opacity-[0.03] blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-4xl font-['Space_mono',monospace] font-bold md:text-5xl font-black mb-6">
              The Engine of Empowerment
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-gray-400 text-lg">
              How we transform raw potential into market impact.
            </motion.p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-px bg-[#222] -translate-x-1/2">
              <motion.div 
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-full bg-gradient-to-b from-[#E48C2A] via-[#f74f4f] to-[#E48C2A] shadow-[0_0_15px_rgba(228,140,42,0.5)]"
              />
            </div>

            {[
              {
                title: "Future of Work Academy",
                subtitle: "The Foundation",
                color: "#E48C2A",
                icon: BookOpen,
                align: "left",
                img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
                desc: "The open courtyard of the ecosystem where verified educators teach high-income digital skills. It eliminates the noise of unverified online learning. Anyone in any region can enter to upgrade their raw capacity.",
                points: ["Verified Educators", "High-Income Skill Acquisition", "Borderless Access"]
              },
              {
                title: "Career Activation Platform",
                subtitle: "The Catalyst",
                color: "#f74f4f",
                icon: Zap,
                align: "right",
                img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                desc: "A high-intensity, 7-day sprint that takes a member from passive learner to active execution. They don't just finish a course; they walk out with an Execution Blueprint for their career or self-development.",
                points: ["Passive to Active Execution", "7-Day High-Intensity Sprint", "Delivery of Execution Blueprint™"]
              },
              {
                title: "Talent Support Unit (TSU)",
                subtitle: "The Destination & Engine",
                color: "#E48C2A",
                icon: Users,
                align: "left",
                img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
                desc: "The central node where economic impact actually changes lives. It houses the Talent Network, Events/Gigs, Feedback, and Support. This is where our ecosystem archetypes interact to create mutual wealth.",
                customPoints: (
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-bold text-white mb-1 flex items-center gap-2"><ChevronRight size={16} className="text-[#E48C2A]" /> The Rainmakers</h5>
                      <p className="text-sm text-gray-300 pl-6">Post gigs and safely subcontract work to verified Academy/CAP talent.</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-white mb-1 flex items-center gap-2"><ChevronRight size={16} className="text-[#E48C2A]" /> The Multipliers</h5>
                      <p className="text-sm text-gray-300 pl-6">Review blueprints and mentor newer members emerging from sprints.</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-white mb-1 flex items-center gap-2"><ChevronRight size={16} className="text-[#E48C2A]" /> The Operators</h5>
                      <p className="text-sm text-gray-300 pl-6">Coordinate regional physical meetups to keep localized energy alive.</p>
                    </div>
                  </div>
                )
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} 
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-24 relative ${step.align === 'right' ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Text Block */}
                <div className={`${step.align === 'left' ? 'lg:pr-8 lg:text-right' : 'order-1 lg:order-2 lg:pl-8'}`}>
                  <h3 className="text-3xl font-['Space_mono',monospace] font-bold md:text-4xl font-black mb-3 text-white">{step.title}</h3>
                  <h4 style={{ color: step.color }} className="font-bold mb-6 uppercase tracking-widest text-sm bg-black/50 inline-block px-3 py-1 rounded-full border border-white/5 backdrop-blur-md">
                    {step.subtitle}
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-lg mb-8 lg:mb-0">
                    {step.desc}
                  </p>
                </div>

                {/* Central Floating Icon */}
                <div className="hidden lg:flex absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#0A0A0A] border-4 rounded-full items-center justify-center z-10 shadow-2xl" style={{ borderColor: step.color, boxShadow: `0 0 30px ${step.color}40` }}>
                  <motion.div variants={pulseGlow} initial="initial" animate="animate">
                    <step.icon size={24} style={{ color: step.color }} />
                  </motion.div>
                </div>

                {/* Rich Story Image Card */}
                <div className={`${step.align === 'left' ? 'lg:pl-8' : 'order-2 lg:order-1 lg:pr-8'}`}>
                  <div className="relative rounded-3xl border border-[#222] hover:border-[#444] transition-colors overflow-hidden group min-h-[350px] flex flex-col justify-end shadow-2xl">
                    
                    {/* Story Image Background */}
                    <div className="absolute inset-0 z-0 bg-[#050505]">
                      <img 
                        src={step.img} 
                        alt={step.title} 
                        className="w-full h-full object-cover grayscale contrast-125 brightness-[0.35] group-hover:scale-105 group-hover:brightness-[0.45] transition-all duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
                    </div>

                    {/* Subtle internal glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-gradient-to-br z-0" style={{ backgroundImage: `linear-gradient(to bottom right, transparent, ${step.color})` }} />
                    
                    <div className="relative z-10 p-8 md:p-10">
                      {step.customPoints ? step.customPoints : (
                        <ul className="space-y-5 text-base text-gray-200">
                          {step.points.map((pt, i) => (
                            <li key={i} className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center border border-white/10 shrink-0 backdrop-blur-md">
                                <CheckCircle color={step.color} />
                              </div>
                              <span className="font-medium">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Bottom Fade Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent pointer-events-none z-50" />
    </div>
  );
}

function CheckCircle({ color }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
} 