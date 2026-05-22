import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const Home = () => {
  const ecosystemProducts = [
    {
      title: 'Future of Work CAP',
      description: 'Career advancement and educational modules designed to accelerate global Web3 literacy and opportunity.',
      path: '/ecosystem'
    },
    {
      title: 'Future Of Work Infrastructure',
      description: 'The structural backbone and technical frameworks supporting decentralized digital environments.',
      path: '/ecosystem'
    },
    {
      title: 'TSU Platform',
      description: 'Advanced administrative suites featuring real-time data tracking, streamlined feedback, and operational management.',
      path: '/ecosystem'
    },
    {
      title: 'Owlphalab',
      description: 'Our core innovation hub and incubation center, testing and deploying the next wave of Web3 utilities.',
      path: '/ecosystem'
    }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* 1. Hero Section with 3D Animation */}
      <section className="relative -m-5 w-full max-w-7xl mx-auto min-h-[85vh] flex flex-col md:flex-row justify-center items-center px-6 py-20 gap-8 overflow-hidden">
        
        {/* Left: Text Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex-1 w-full z-10"
        >
          <motion.div variants={fadeUp} className="mb-6 inline-block px-4 py-1.5 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
            <span className="text-sm font-semibold tracking-wide text-[var(--color-primary)] uppercase">
              Global Web3 Ecosystem
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[var(--color-dark)] leading-[1.1] mb-8">
            Amplifying Builders & Projects with <span className="text-[var(--color-primary)]">Real Utility.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-[var(--color-secondary)] max-w-xl mb-12 leading-relaxed">
            OwlphaDAO connects communities and drives global adoption through education, collaboration, and high-impact infrastructure.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link to="/ecosystem" className="bg-[var(--color-dark)] text-[var(--color-light)] px-8 py-4 rounded-full text-center font-semibold hover:bg-[var(--color-primary)] transition-all duration-300 shadow-lg hover:shadow-[var(--color-primary)]/20">
              Explore Our Tools
            </Link>
            <Link to="/community" className="bg-transparent text-[var(--color-dark)] border border-[var(--color-secondary)]/30 px-8 py-4 rounded-full text-center font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300">
              Join the Community
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: 3D Spline Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex-1 w-full h-[400px] -mt-21 mr-4 md:h-[400px] relative z-0 flex justify-center items-center pointer-events-none"
        >
          {/* pointer-events-none disables all mouse interactions on the canvas */}
          <Suspense fallback={<div className=" w-300 h-300 bg-[var(--color-secondary)]/10 rounded-full blur-3xl"></div>}>
            {/* PASTE YOUR NEW SPLINE URL HERE */}
             <Spline scene="https://prod.spline.design/IE9jhPkJF5GhEROd/scene.splinecode" />
          </Suspense>
        </motion.div>
      </section>

     <section className="relative w-full bg-[#0a0a0a] text-[var(--color-light)] py-32 px-6 overflow-hidden">
  {/* Dynamic Ambient Background Glows */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-[120px] pointer-events-none" />
  <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

  <div className="relative z-10 max-w-7xl mx-auto">
    {/* Header Structure */}
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8"
    >
      <div className="max-w-2xl">
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
          <span className="text-xs font-semibold tracking-widest uppercase text-white/70">Ecosystem</span>
        </motion.div>
        <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-tight">
          Built for the <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-blue-400">
            Decentralized Future
          </span>
        </motion.h2>
        <motion.p variants={fadeUp} className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl">
          We design and ship robust tools that power the next generation of work, administration, and Web3 incubation.
        </motion.p>
      </div>
      
      <motion.div variants={fadeUp} className="shrink-0">
        <Link 
          to="/ecosystem" 
          className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-[var(--color-primary)]/50 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10">View All Products</span>
          <svg className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.div>
    </motion.div>

    {/* Bento Box Grid Structure */}
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
    >
      {ecosystemProducts.map((product, index) => (
        <motion.div 
          key={index} 
          variants={fadeUp} 
          className="group relative flex flex-col justify-between p-8 lg:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl hover:bg-white/[0.04] hover:border-[var(--color-primary)]/30 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
        >
          {/* Card Corner Glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-[var(--color-primary)]/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10 flex-1">
            {/* Dynamic Geometric Icon Box */}
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-white/50 group-hover:text-[var(--color-primary)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">
              {product.title}
            </h3>
            <p className="text-white/50 leading-relaxed text-base lg:text-lg">
              {product.description}
            </p>
          </div>

          {/* Structured Card Footer */}
          <div className="relative z-10 mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
            <Link 
              to={product.path}
              className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white/40 group-hover:text-[var(--color-light)] transition-colors duration-300 before:absolute before:inset-0"
            >
              Explore Details
            </Link>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)] transition-all duration-300">
              <svg className="w-4 h-4 text-white/40 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

    </div>
  );
};

export default Home;