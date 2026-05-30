import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      delayChildren: 0.2,
    }
  }
};

const About = () => {
  const coreValues = [
    {
      title: 'Real Utility',
      description: 'Amplifying builders and projects by focusing on practical, real-world applications and utility across various blockchains.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      )
    },
    {
      title: 'Community & Events',
      description: 'Connecting diverse communities and hosting high-impact events to foster a strong, collaborative Web3 environment.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Education & Innovation',
      description: 'Driving mass adoption by providing the educational resources and innovative frameworks necessary for Web3 success.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div  id='about' className="relative z-10 w-full min-h-screen flex flex-col items-center bg-black text-white overflow-hidden">
      
      {/* 1. Hero Section - Set alignment to start/left */}
      <section className="relative w-full max-w-7xl mx-auto min-h-[60vh] flex flex-col justify-center items-start px-6 py-32 text-left">
        {/* Soft Ambient Glows for Dark Mode */}
        <div className="absolute top-1/4 left-1/5 -translate-x-1/2 w-[40rem] h-[40rem] bg-[var(--ordinary-red)]/40 rounded-full blur-[150px] pointer-events-none" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl"
        >
          <motion.div variants={fadeUp} className="mb-6 inline-block px-4 py-1.5 rounded-full ">
            <span className="text-sm font-bold tracking-wide text-[var(--color-primary)] uppercase">
              About OwlphaDAO
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-white">
            Amplifying <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-blue-500">Builders</span> & Projects.
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
            OwlphaDAO is a Web3 ecosystem amplifying builders and projects with real utility across blockchains. We connect communities, host events, and drive adoption through education, collaboration, and innovation.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. Our Mission & Vision (Dark Mode Split) */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-24 z-10 border-t border-white/10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Mission Card */}
          <motion.div 
            variants={fadeUp}
            className="relative p-10 lg:p-14 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-[var(--color-primary)]/30 transition-colors duration-500 overflow-hidden group backdrop-blur-md text-left"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <h2 className="text-3xl font-bold mb-6 text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              To connect communities, host impactful events, and drive widespread Web3 adoption through focused education, seamless collaboration, and relentless innovation.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            variants={fadeUp}
            className="relative p-10 lg:p-14 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-colors duration-500 overflow-hidden group backdrop-blur-md text-left"
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <h2 className="text-3xl font-bold mb-6 text-white group-hover:text-blue-500 transition-colors duration-300">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              To build a thriving Web3 ecosystem that amplifies builders and projects, ensuring that real utility scales across all blockchains to create lasting, real-world value.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. Core Values (Dark Grid) - Set alignment to left */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-24 z-10 border-t border-white/10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 text-left"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Our Core <span className="text-[var(--color-primary)]">Pillars</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-2xl font-light">
            The foundational principles driving our ecosystem, events, and commitment to Web3 adoption.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {coreValues.map((value, index) => (
            <motion.div 
              key={index} 
              variants={fadeUp} 
              className="group relative flex flex-col p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-[var(--color-primary)]/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm text-left"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-gray-400 group-hover:text-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. CTA Section (Dark Theme) - Set alignment to left */}
      <section className="relative w-full max-w-5xl mx-auto px-6 py-32 text-center z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative p-12 lg:p-20 rounded-[3rem] bg-white/[0.03] border border-white/10 overflow-hidden backdrop-blur-md"
        >
          <div className="absolute inset-0 bg-[var(--color-primary)]/10 blur-3xl pointer-events-none" />
          
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6 text-white relative z-10">
            Ready to Drive Adoption?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl item-center text-center text-gray-300 mb-10 max-w-2xl relative z-10 font-light">
            Join our Web3 ecosystem to collaborate, innovate, and amplify projects with real utility.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Link to="/community" className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all duration-300 shadow-[0_0_20px_rgba(228,140,42,0.3)] hover:shadow-[0_0_30px_rgba(228,140,42,0.5)] hover:-translate-y-1 text-center">
              Join the Ecosystem
            </Link>
            <Link to="/contact" className="bg-transparent text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/5 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 text-center">
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
};

export default About;