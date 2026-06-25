"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  ChevronDown } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

export default function FAQSection() {
 
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "Do I need to be a tech developer to join?",
      answer: "Not at all. Our movement is built for diverse talents—including creatives, writers, managers, marketers, and virtual assistants. If you are resilient and eager to work, you belong here."
    },
    {
      question: "How does the community actually help me make money?",
      answer: "We do it through subcontracting and direct sharing. Experienced members (Providers) who have too much global work drop projects into our Support Hub, hiring trusted members from within the family instead of outsourcing to strangers."
    },
    {
      question: "What if I am completely new and don't have skills yet?",
      answer: "That is exactly why we built the Academy. You start there to pick up practical digital skills, use the 7-Day Sprint to build your career map, and then enter the Support Hub when you are ready to execute."
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#E48C2A] py-24 lg:py-32 border-t border-white/5">
      
      {/* Subtle Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[500px] bg-gradient-to-b from-[#E48C2A]/10 to-transparent blur-[150px] rounded-full opacity-50" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="text-center mb-16 lg:mb-20"
        >
         

          <h2 className="text-4xl md:text-5xl font-['Space_mono',monospace] font-black tracking-tight leading-[1.1]">
            Questions You <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E48C2A] to-[#ffb15c]">
              Might Have
            </span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="relative group rounded-[1.5rem] p-[1px] transition-all duration-500"
              >
                {/* Border Gradient (Active State) */}
                <div className={`absolute inset-0 bg-gradient-to-r rounded-[1.5rem] transition-opacity duration-500 ${
                  isOpen ? 'from-[#E48C2A]/50 to-white/10 opacity-100' : 'from-white/10 to-white/5 opacity-100 group-hover:from-white/20'
                }`} />
                
                <div className={`relative bg-[#070707] rounded-[calc(1.5rem-1px)] overflow-hidden transition-colors duration-500 ${
                  isOpen ? 'bg-[#0a0a0a]' : ''
                }`}>
                  
                  {/* Clickable Header */}
                  <button 
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full text-left px-8 py-6 flex items-center justify-between gap-6 outline-none"
                  >
                    <h3 className={`text-lg sm:text-xl font-['Space_mono',monospace] font-bold transition-colors duration-300 ${
                      isOpen ? 'text-[#E48C2A]' : 'text-white group-hover:text-gray-200'
                    }`}>
                      {faq.question}
                    </h3>
                    
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${
                      isOpen ? 'border-[#E48C2A]/30 bg-[#E48C2A]/10 rotate-180' : 'border-white/10 bg-white/5 group-hover:bg-white/10'
                    }`}>
                      <ChevronDown size={20} className={isOpen ? 'text-[#E48C2A]' : 'text-white'} />
                    </div>
                  </button>

                  {/* Expandable Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-8 pb-8 pt-2">
                          <div className="w-12 h-[1px] bg-[#E48C2A]/30 mb-6" />
                          <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}