import React from 'react';
import { motion } from 'framer-motion';

const HeroVision = () => {
  return (
    <section className="relative w-full min-h-screen text-[var(--color-light)]">
      {/* Shared Background Layer */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1499088513455-78ed88b7a5b4?q=80&w=778&auto=format&fit=crop" 
          alt="Moody Digital Frontier" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-dark)]/70 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        
        {/* --- Hero Section --- */}
        <div className="min-h-screen justify-center text-center  mt-5  pt-11 max-w-6xl mx-auto">
      
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[1.05] mb-10"
          >
            Architect the Future. <br />
            <span className="text-[var(--color-primary)] italic">Build Verifiable Utility.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-[var(--color-light)]/70 max-w-2xl md:mb-9 mb-1 m-auto font-light justify-center item-center text-center leading-relaxed"
          >
            OwlphaDAO is the premier decentralized engine transforming raw code into verifiable project utility. Through strategic token economies and gated network access, we provide modern builders with the intelligence infrastructure and verified pipelines needed to scale across global networks.
          </motion.p>
        </div>

        {/* --- Straight Path Moving Vision Animation --- */}
        <div className="w-full overflow-hidden border-y border-[var(--color-light)]/10 bg-[var(--color-dark)]/50 backdrop-blur-sm py-2 whitespace-nowrap">
          <motion.div 
            className="flex gap-20 text-[12px] font-medium tracking-[0.2em] uppercase text-[var(--color-primary)] italic"
            animate={{ x: [0, "-200%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            <div className="flex shrink-0 items-center gap-20 pr-20">
              <span>Our Vision is to anchor decentralized education into a trustless infrastructure</span>
              <span className="text-[var(--color-light)]/30 not-italic">•</span>
              <span>Replacing abstract academic credit with programmatic token incentives</span>
              <span className="text-[var(--color-light)]/30 not-italic">•</span>
              <span>Unlocking deep intelligence repositories via secure NFT keys</span>
              <span className="text-[var(--color-light)]/30 not-italic">•</span>
              <span>And connecting proof-of-skill with global web3 development squads</span>
              <span className="text-[var(--color-light)]/30 not-italic">•</span>
            </div>
            
            <div className="flex shrink-0 items-center gap-20 pr-20" aria-hidden="true">
              <span>Our Vision is to anchor decentralized education into a trustless infrastructure</span>
              <span className="text-[var(--color-light)]/30 not-italic">•</span>
              <span>Replacing abstract academic credit with programmatic token incentives</span>
              <span className="text-[var(--color-light)]/30 not-italic">•</span>
              <span>Unlocking deep intelligence repositories via secure NFT keys</span>
              <span className="text-[var(--color-light)]/30 not-italic">•</span>
              <span>And connecting proof-of-skill with global web3 development squads</span>
              <span className="text-[var(--color-light)]/30 not-italic">•</span>
            </div>
         

                  <div className="flex shrink-0 items-center gap-20 pr-20" aria-hidden="true">
              <span>Our Vision is to anchor decentralized education into a trustless infrastructure</span>
              <span className="text-[var(--color-light)]/30 not-italic">•</span>
              <span>Replacing abstract academic credit with programmatic token incentives</span>
              <span className="text-[var(--color-light)]/30 not-italic">•</span>
              <span>Unlocking deep intelligence repositories via secure NFT keys</span>
              <span className="text-[var(--color-light)]/30 not-italic">•</span>
              <span>And connecting proof-of-skill with global web3 development squads</span>
              <span className="text-[var(--color-light)]/30 not-italic">•</span>
            </div>
          </motion.div>
        </div>

        {/* --- Vision Section --- */}
        <div className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[var(--color-primary)] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The Tokenized Matrix</span>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-8">
                Learn. Do. Earn and <br />
                <span className="text-[var(--color-primary)] italic">govern with NFTs.</span>
              </h2>
              <p className="text-xl text-[var(--color-light)]/70 leading-relaxed font-light">
                We bridge classical learning systems with native Web3 mechanisms. By aligning incentives through precise token asset design and locking ecosystem utilities behind gated access keys, we build an optimized learning-to-employment engine.
              </p>
            </motion.div>

            {/* Tactical Grid */}
            <div className="grid gap-6">
              {[
                { 
                  title: "ADC Tokenomics", 
                  desc: "A finite token economy explicitly crafted to incentivize genuine educational milestones, rewarding actionable knowledge over passive listening." 
                },
                { 
                  title: "NFT Governance Keys", 
                  desc: "225 unique cryptographic keys that grant foundational ecosystem access, giving serious builders direct command over intelligent vaults and resource layers." 
                },
                { 
                  title: "Web3 Edutech Engine", 
                  desc: "Modular learning environments built to provide creators, academic operators, and organizations with trustless validation and fast hiring matching." 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-[var(--color-secondary)]/10 bg-[var(--color-light)]/[0.03] hover:bg-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-[var(--color-light)]/50 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroVision;