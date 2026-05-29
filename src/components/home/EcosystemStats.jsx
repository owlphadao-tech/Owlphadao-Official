import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, animate } from 'framer-motion';

// Helper component for the count-up animation
const Counter = ({ value, suffix = "" }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });
  
  // Clean string value to get a raw number
  const numericValue = parseInt(value.replace(/,/g, ""));

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2,
        onUpdate(value) {
          nodeRef.current.textContent = Math.floor(value).toLocaleString() + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue, suffix]);

  return <span ref={nodeRef} />;
};

const EcosystemStats = () => {
  const stats = [
    { label: "Community Members", value: "2000", suffix: "+" },
    { label: "NFT Collection", value: "225", suffix: "" },
    { label: "ADC Token Supply", value: "948916", suffix: "" },
    { label: "Strategic Partners", value: "3", suffix: "" }
  ];

  return (
    <section className="relative py-24 bg-orange-50 z-10 border-t border-orange-200">
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-orange-900 mb-3">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-orange-700/80 uppercase tracking-[0.2em] text-xs font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemStats;