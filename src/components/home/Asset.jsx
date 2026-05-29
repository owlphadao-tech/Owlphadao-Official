import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Assets = () => {
  // Placeholder images for the top 3 NFTs (Update the src URLs with your actual NFT assets)
  const nftImages = [
    "/Owlman1.jpg",
    "/Owlman2.jpg",
    "/Owlman3.jpg"
  ];

  return (
    <section className="relative py-32 overflow-hidden border-t border-[var(--color-secondary)]/20">
      {/* Background Layer with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop" 
          alt="Technical Foundation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-dark)]/90 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Narrative Side: The Foundation */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <span className="text-[var(--color-primary)] font-bold tracking-[0.2em] uppercase text-xs">The Foundation</span>
          <h2 className="text-5xl font-extrabold tracking-tighter text-[var(--color-light)]">
            Built on <span className="text-[var(--color-primary)] italic">ADC Tokenomics.</span>
          </h2>
          <p className="text-xl text-[var(--color-light)]/70 leading-relaxed font-light">
            Our economic model is engineered for sustainability. With a capped supply of 948,916 ADC tokens, we prioritize scarcity and utility, ensuring that the heartbeat of our ecosystem rewards long-term builders, not short-term noise.
          </p>
          <p className="text-xl text-[var(--color-light)]/70 leading-relaxed font-light">
            Completing our tokenomics, our 225 unique NFTs act as governance keys, providing holders with direct access to our infrastructure and the inner circle of the Vanguard.
          </p>
        </motion.div>

        {/* NFT Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 border border-[var(--color-secondary)]/20 rounded-[2rem] bg-[var(--color-light)]/[0.03] backdrop-blur-sm hover:border-[var(--color-primary)]/50 transition-colors"
        >
          <h4 className="text-[var(--color-primary)] font-bold uppercase tracking-widest mb-6">The Vanguard Collection</h4>
          <p className="text-[var(--color-light)]/60 leading-relaxed mb-8">
            More than just digital assets, our NFTs are the master keys to the ecosystem. They unlock exclusive governance rights, secure infrastructure access, and cement your position at the core of the OwlphaDAO vision.
          </p>
          <Link to="https://magiceden.io/marketplace/the_owl_man" target="_blank" rel="noopener noreferrer">
          <div className="grid grid-cols-3 gap-4">
             {nftImages.map((src, index) => (
               <div key={index} className="aspect-square rounded-2xl bg-[var(--color-secondary)]/10 overflow-hidden border border-[var(--color-secondary)]/20 hover:border-[var(--color-primary)] transition-colors relative group">
                 <img 
                   src={src} 
                   alt={`Vanguard NFT ${index + 1}`} 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 />
               </div>
             ))}
          </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Assets;