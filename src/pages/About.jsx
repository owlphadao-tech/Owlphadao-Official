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
      title: 'Decentralized Innovation',
      description: 'Through Owlphalab, we incubate and deploy the next wave of Web3 utilities, ensuring builders have the structural backbone needed to scale.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      )
    },
    {
      title: 'Operational Excellence',
      description: 'Our TSU Platform provides advanced administrative suites featuring real-time data tracking and streamlined operational management for modern DAOs.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Future of Work',
      description: 'We prioritize global Web3 literacy and career advancement through comprehensive educational modules and specialized infrastructure.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full flex flex-col items-center bg-[var(--color-light)] text-[var(--color-dark)] overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto min-h-[60vh] flex flex-col justify-center items-center px-6 py-32 text-center">
        {/* Soft Ambient Glows for Light Mode */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-[var(--color-primary)]/5 rounded-full blur-[150px] pointer-events-none" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl"
        >
          <motion.div variants={fadeUp} className="mb-6 inline-block px-4 py-1.5 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10">
            <span className="text-sm font-semibold tracking-wide text-[var(--color-primary)] uppercase">
              About OwlphaDAO
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-[var(--color-dark)]">
            Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-blue-500">Backbone</span> of Web3.
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We are a decentralized collective of builders, educators, and innovators dedicated to bridging the gap between complex blockchain infrastructure and accessible, real-world utility.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. Our Mission & Vision (Light Mode Split) */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-24 z-10">
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
            className="relative p-10 lg:p-14 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <h2 className="text-3xl font-bold mb-6 text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors duration-300">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower global communities by providing the high-impact tools, scalable infrastructure, and educational frameworks required to thrive in a decentralized digital economy. We don't just build software; we build ecosystems that sustain growth.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            variants={fadeUp}
            className="relative p-10 lg:p-14 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden group"
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <h2 className="text-3xl font-bold mb-6 text-[var(--color-dark)] group-hover:text-blue-500 transition-colors duration-300">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A borderless future where administrative friction is eliminated, and global talent is seamlessly connected with verified opportunities through transparent, trustless protocols and robust incubation labs.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. Core Values (Clean Grid) */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-24 z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--color-dark)]">
            Our Core <span className="text-[var(--color-primary)]">Pillars</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
            The foundational principles that drive our development sprints, community initiatives, and product architecture.
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
              className="group relative flex flex-col p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:border-[var(--color-primary)]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center mb-6 text-gray-400 group-hover:text-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. CTA Section */}
      <section className="relative w-full max-w-5xl mx-auto px-6 py-32 text-center z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative p-12 lg:p-20 rounded-[3rem] bg-gray-50 border border-gray-200 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[var(--color-primary)]/5 blur-3xl pointer-events-none" />
          
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-dark)] relative z-10">
            Ready to Build the Future?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto relative z-10">
            Join thousands of builders, creators, and innovators scaling the decentralized web.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Link to="/community" className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-bold hover:bg-[var(--color-dark)] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Join the DAO
            </Link>
            <Link to="/contact" className="bg-white text-[var(--color-dark)] border border-gray-300 px-8 py-4 rounded-full font-bold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
};

export default About;