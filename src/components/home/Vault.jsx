import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Vault = () => (
  <div className="min-h-screen bg-[var(--color-dark)] text-[var(--color-light)] px-6 py-20">
    <div className="max-w-7xl mx-auto">
      
      {/* Vault Header */}
      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
          The <span className="text-[var(--color-primary)]">Educator’s Vault.</span>
        </h1>
        <p className="text-xl text-[var(--color-light)]/60 max-w-2xl font-light">
          A centralized resource management system designed to accelerate Web3 literacy and provide clear, data-driven insights for the vanguard.
        </p>
      </motion.div>

      {/* Side-by-Side Flex Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column: Resource Management */}
        <div className="flex-1 border border-[var(--color-secondary)]/30 p-8 rounded-3xl bg-[var(--color-light)]/[0.02]">
          <h3 className="text-2xl font-bold mb-8">Resource Library</h3>
          <div className="space-y-6">
            {["Web3 Fundamentals", "DAO Architecture", "Tokenomics 101", "Community Building"].map((res, i) => (
              <div key={i} className="flex items-center justify-between p-4 border-b border-[var(--color-secondary)]/20">
                <span className="text-lg">{res}</span>
                <button className="text-[var(--color-primary)] font-bold text-sm uppercase tracking-widest">Access</button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Data Visualization/Dashboard */}
        <div className="flex-1 border border-[var(--color-secondary)]/30 p-8 rounded-3xl bg-[var(--color-light)]/[0.02]">
          <h3 className="text-2xl font-bold mb-8">Vanguard Analytics</h3>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-[var(--color-secondary)]/30 rounded-2xl">
            <p className="text-[var(--color-secondary)] italic">Data visualization metrics loading...</p>
          </div>
          <div className="mt-8">
            <p className="text-[var(--color-light)]/60 text-sm leading-relaxed">
              Track educational outreach and resource engagement in real-time. This dashboard empowers educators to visualize the impact of their curricula across the entire community.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Vault;