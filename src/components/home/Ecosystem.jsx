import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const Ecosystem = () => {
  const products = [
    {
      id: 'fow-cap',
      title: 'Future of Work CAP',
      path: '/products/fow-cap',
      subtitle: 'Career Advancement & Education',
      description: 'FOW Career Activation Platform (CAP) is a 7-day structured sprint designed to help builders, creatives, founders, and ambitious people get clarity and momentum on their ideas/projects.',
      features: ['Educator Dashboard', 'Progress Analytics', 'Web3 Curriculum'],
      align: 'left',
      image: '/fow-cap.png' 
    },
    {
      id: 'fow-infra',
      title: 'Future Of Work Infrastructure',
      path: '/products/fow-infra',
      subtitle: 'Edu-Tech Infrastructure',
      description: 'Future of Work is a decentralized Infrastructure that enables educators and creators scale learning ecosystems, focusing on skill-based learning. ',
      features: ['Digital Asset Vault', 'Session Management', 'Scalable Architecture'],
      align: 'right',
      image: '/images/fow-infra-mock.jpg'
    },
    {
      id: 'tsu',
      title: 'TSU Platform',
      path: '/products/tsu',
      subtitle: 'Advanced Administrative Suite',
      description: ' Talent Support Unit (TSU) operates as a router for the digital elite, which connect you directly to the networks and high-impact opportunities that define modern careers.',
      features: ['Real-Time Donation Tracking', 'Admin Opportunities', 'Feedback Loops'],
      align: 'left',
      image: '/tsu.png'
    },
    {
      id: 'owlphalab',
      title: 'Owlphalab',
      path: '/products/owlphalab',
      subtitle: 'Web3 Innovation Hub',
      description: 'Owlphalab is a decentralized NFT marketing platform which enables artists create and launch their NFTs, giving them opputunities to also work with investors  ',
      features: ['Utility Incubation', 'Developer Collaboration', 'Protocol Testing'],
      align: 'right',
      image: '/images/owlphalab-mock.jpg'
    }
  ];

  return (
    <div className="relative z-10 w-full bg-[var(--color-light)] border-t border-[var(--color-secondary)]/20 pb-24 overflow-hidden">
      
      {/* Animated Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* The Owl Face Watermark */}

        <div className="absolute top-[20%] left-1/4 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-[var(--color-dark)] select-none">
          <img src="/owlpha-logo.png" width="15000" height="15000" alt="Owlpha Logo" />
        </div>

        <div className="absolute top-[52%] left-1/4 -translate-x-1/4 -translate-y-1/2 opacity-[0.03] text-[var(--color-dark)] select-none">
          <img src="/owlpha-logo.png" width="15000" height="15000" alt="Owlpha Logo" />
        </div>

         <div className="absolute top-[70%] left-1/2 -translate-x-1/5 -translate-y-1/6 opacity-[0.03] text-[var(--color-dark)] select-none">
          <img src="/owlpha-logo.png" width="15000" height="15000" alt="Owlpha Logo" />
        </div>

        {/* Floating Blobs */}
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] left-[-10%] w-[40rem] h-[40rem] bg-[var(--color-primary)]/5 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ y: [0, 50, 0], x: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] right-[-10%] w-[45rem] h-[45rem] bg-blue-500/5 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10">
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--color-dark)] mb-6">
              The <span className="text-[var(--color-primary)]">Ecosystem</span>
            </motion.h1>
          </motion.div>
        </section>

        <section className="px-6 max-w-7xl mx-auto">
          <div className="space-y-32">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
                variants={staggerContainer}
                className={`flex flex-col ${product.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
              >
                <div className="flex-1 space-y-6">
                  <motion.div variants={fadeUp}>
                    <span className="text-sm font-bold tracking-widest text-[var(--color-primary)] uppercase">0{index + 1} — {product.subtitle}</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)] mt-2">{product.title}</h2>
                  </motion.div>
                  
                  <motion.p variants={fadeUp} className="text-[var(--color-secondary)] text-lg leading-relaxed">{product.description}</motion.p>
                  
                  <motion.div variants={fadeUp} className="pt-4">
                    <Link 
                      to={product.path} 
                      className="inline-block bg-[var(--color-dark)] text-[var(--color-light)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-primary)] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(228,140,42,0.4)]"
                    >
                      Explore Platform
                    </Link>
                  </motion.div>
                </div>

                <motion.div variants={fadeUp} className="flex-1 w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[var(--color-secondary)]/10 shadow-xl bg-white/50 backdrop-blur-sm">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/800x600?text=Project+Visual'; }} 
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ecosystem;