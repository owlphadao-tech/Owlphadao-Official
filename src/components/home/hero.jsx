import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// --- Custom CountUp Component ---
const CountUp = ({ end, duration = 2.5, useSeparator = false }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // easeOutQuart for a smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOut * end));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {useSeparator ? count.toLocaleString() : count}
    </span>
  );
};

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function HeroSection() {
  return (
    // Fixed overflow: Removed max-w-full and added strict overflow-x-hidden
    <section className="relative w-full min-h-screen  bg-[#0a0501] flex items-center">
      
   

      {/* TWO-COLUMN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full -mt-15 min-h-screen relative z-10">
        
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="flex flex-col justify-center px-8 lg:px-20 py-20">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.h1 
              variants={fadeInUp}
              // Changed font: Added a distinct Web3-style font stack
              className="text-4xl lg:text-5xl font-['Space_mono',monospace] font-bold tracking-tight mb-6 text-white leading-[1.15]"
            >
              The Future of <br />
              <span className="text-[#E48C2A]">Decentralized Work</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-sm text-gray-300 mb-10 leading-relaxed font-light tracking-wide"
            >
              OwlphaDAO is a global Web3 ecosystem helping individuals acquire future-proof digital skills, activate real-world opportunities, and build sustainable income through collaboration, education, and innovation.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp} 
              className="flex  gap-4 mb-7"
            >
              <button className="px-4 py-2 bg-[#E48C2A] font-['Space_mono',monospace]  text-[#0a0501] font-bold rounded-xl transition-all hover:shadow-[0_0_35px_rgba(228,140,42,0.4)] flex items-center justify-center gap-2">
                Join The Ecosystem <ArrowRight size={20} />
              </button>
              
             
            </motion.div>

            {/* STATS SECTION WITH COUNT UP */}
            <motion.div 
              variants={fadeInUp}
              className="flex items-center font-['Space_mono',monospace]  gap-8 pt-3  border-white/10"
            >
              <div>
                <h4 className="text-3xl  font-bold text-white mb-1 font-['Space_Grotesk',sans-serif]">
                  <CountUp end={225} duration={2} />
                </h4>
                <p className="text-[16px] sm:text-sm text-[#E48C2A] font-medium tracking-wider uppercase">
                  Owlman Collection NFTs
                </p>
              </div>
              
              {/* Vertical Divider */}
              <div className="w-[1px] h-12 bg-white/10"></div>
              
              <div>
                <h4 className="text-3xl font-bold text-white mb-1 font-['Space_Grotesk',sans-serif]">
                  <CountUp end={948916} duration={2.5} useSeparator={true} />
                </h4>
                <p className="text-[16px] sm:text-sm text-[#E48C2A] font-medium tracking-wider uppercase">
                  Total $ADC Supply
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* RIGHT COLUMN: FULL IMAGE WITH MASK */}
        <div className="relative w-full h-full min-h-[400px] lg:min-h-screen">
          <img 
            src="https://images.unsplash.com/photo-1627787489784-4abd690c03c2?q=80&w=1200&auto=format&fit=crop" 
            alt="OwlphaDAO" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Seamless Blend Masks */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0501] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0501] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0501] via-transparent to-transparent"></div>
        </div>

      </div>
    </section>
  );
}