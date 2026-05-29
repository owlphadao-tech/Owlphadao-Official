import React from 'react';
import { motion } from 'framer-motion';

const OwlphaStory = () => {
  return (
    <section className="relative py-32 overflow-hidden border-t border-b border-[var(--color-secondary)]/20">
      {/* Dynamic Animated Background */}
      <motion.div 
        animate={{ 
          background: [
            "radial-gradient(circle at 0% 0%, #1a1a1a 0%, #0a0a0a 100%)",
            "radial-gradient(circle at 100% 100%, #2d1e0d 0%, #0a0a0a 100%)",
            "radial-gradient(circle at 0% 0%, #1a1a1a 0%, #0a0a0a 100%)"
          ] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Narrative Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[var(--color-primary)] font-bold tracking-widest uppercase mb-4 text-sm">The Genesis</p>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-[var(--color-light)] mb-8">
            The Owl sees <br/>what others cannot.
          </h2>
          <div className="space-y-6 text-xl text-[var(--color-light)]/70 font-light leading-relaxed">
            <p>
              OwlphaDAO was forged out of necessity. In a Web3 landscape defined by chaos, scattered efforts, and structural opacity, we identified the need for a unifying vision.
            </p>
            <p>
              The owl does not fear the night; it masters it. We act as the apex observer, cutting through the digital noise to gather builders, creators, and visionaries into a singular, unstoppable vanguard.
            </p>
            <p>
              We don't just survive the dark frontier, we map it, building the infrastructure that transforms raw potential into verifiable, high-impact output.
            </p>
          </div>
        </motion.div>

        {/* Visual Side: The Apex Observer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.02 }}
          className="h-[600px] rounded-[3rem] overflow-hidden relative shadow-[0_0_50px_rgba(228,140,42,0.3)] border border-[var(--color-primary)]/30"
        >
          <img 
            src="https://images.unsplash.com/photo-1628126907372-761f54441c1b?q=80&w=387&auto=format&fit=crop" 
            alt="Intense Owl Eye - Apex Observer" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/30 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default OwlphaStory;