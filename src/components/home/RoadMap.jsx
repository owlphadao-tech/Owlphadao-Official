import React from 'react';
import { motion } from 'framer-motion';

const Roadmap = () => {
  const phases = [
    { 
      title: "Knowledge Infrastructure", 
      desc: "Deploying decentralized frameworks that empower creators, organizations, and individuals to build structured learning environments, share expertise, and acquire high-demand skills." 
    },
    { 
      title: "Decision Architecture", 
      desc: "Building intuitive platform tools and governance modules to assist communities and enterprises in making data-driven, strategic decisions efficiently." 
    },
    { 
      title: "Talent Acceleration", 
      desc: "Launching optimized placement pipelines and matching systems designed to connect skilled individuals with global organizations, drastically reducing the time it takes to land a job." 
    },
    { 
      title: "Unified Ecosystem", 
      desc: "Integrating education, collaborative decision-making, and employment infrastructure into a single, seamless engine driving the future of work." 
    }
  ];

  return (
    <section className="relative py-32 border-t border-[var(--color-secondary)]/20 overflow-hidden">
      {/* Background Layer with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2000&auto=format&fit=crop" 
          alt="Abstract Path" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay to maintain high contrast for text */}
        <div className="absolute inset-0 bg-[var(--color-dark)]/90 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold text-[var(--color-light)] mb-20 text-center"
        >
          The Path Forward.
        </motion.h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {phases.map((phase, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative border-t-2 border-[var(--color-secondary)]/30 pt-8 group hover:border-[var(--color-primary)] transition-colors duration-300"
            >
              <div className="absolute -top-3 left-0 w-6 h-6 rounded-full bg-[var(--color-secondary)] group-hover:bg-[var(--color-primary)] group-hover:scale-125 transition-all duration-300" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] block mb-1">Phase 0{i + 1}</span>
              <h3 className="text-xl font-bold text-[var(--color-light)] mb-4">{phase.title}</h3>
              <p className="text-[var(--color-light)]/60 font-light text-sm leading-relaxed">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;