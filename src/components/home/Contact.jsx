import React from 'react';
import { motion } from 'framer-motion';

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

const Contact = () => {
  return (
    <div className="relative z-10 w-full bg-[var(--color-light)] pb-24 overflow-hidden">
      
      {/* Animated Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

        <div className="absolute top-[25%] left-1/4 -translate-x-1/5 -translate-y-1/2 opacity-[0.05] text-[var(--color-dark)] select-none">
          <img src="/owlpha-logo.png" width="15000" height="15000" alt="Owlpha Logo" />
        </div>
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-[var(--color-primary)]/[0.05] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[-10%] right-[-10%] w-[45rem] h-[45rem] bg-blue-500/[0.05] rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
        
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--color-dark)] mb-6">
              Let's Build the <span className="text-[var(--color-primary)]">Future.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[var(--color-secondary)] max-w-2xl mx-auto">
              Whether you are looking to collaborate, integrate our infrastructure, or join the ecosystem, we are ready to connect.
            </motion.p>
          </motion.div>
        </section>

        {/* Contact Layout */}
        <section className="px-6 max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row gap-12"
          >
            
            {/* Inquiry Form */}
            <motion.div variants={fadeUp} className="flex-1 bg-white/50 backdrop-blur-sm p-8 md:p-10 border border-[var(--color-secondary)]/10 rounded-3xl shadow-sm hover:border-[var(--color-primary)]/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-[var(--color-dark)] mb-6">Send a Message</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-[var(--color-dark)]">Name</label>
                    <input type="text" id="name" placeholder="Enter your name" className="w-full p-4 bg-white border border-[var(--color-secondary)]/20 rounded-xl focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all duration-300" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-[var(--color-dark)]">Email Address</label>
                    <input type="email" id="email" placeholder="Enter your email" className="w-full p-4 bg-white border border-[var(--color-secondary)]/20 rounded-xl focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all duration-300" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-[var(--color-dark)]">Subject</label>
                  <select id="subject" className="w-full p-4 bg-white border border-[var(--color-secondary)]/20 rounded-xl focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all duration-300 text-[var(--color-dark)]">
                    <option>Partnership Inquiry</option>
                    <option>Ecosystem Integration</option>
                    <option>General Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-[var(--color-dark)]">Message</label>
                  <textarea id="message" rows="5" placeholder="How can we collaborate?" className="w-full p-4 bg-white border border-[var(--color-secondary)]/20 rounded-xl focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all duration-300 resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-[var(--color-dark)] text-[var(--color-light)] px-8 py-4 rounded-xl font-bold hover:bg-[var(--color-primary)] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(228,140,42,0.3)]">
                  Submit Inquiry
                </button>
              </form>
            </motion.div>

            {/* Social Links & Info */}
            <motion.div variants={fadeUp} className="md:w-1/3 flex flex-col justify-start space-y-8">
              <div className="p-8 bg-[var(--color-dark)] text-[var(--color-light)] rounded-3xl border border-[var(--color-secondary)]/10 shadow-xl">
                <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
                <p className="text-[var(--color-light)]/60 mb-4">For urgent technical inquiries or direct integration support:</p>
                <a href="mailto:hello@owlphadao.com" className="text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary)]/80 transition-colors">hello@owlphadao.com</a>
              </div>

              <div className="p-8 bg-white/50 backdrop-blur-sm border border-[var(--color-secondary)]/10 rounded-3xl shadow-sm hover:border-[var(--color-primary)]/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-[var(--color-dark)] mb-4">Web3 Networks</h3>
                <div className="space-y-4">
                  <a href="#" className="flex items-center gap-3 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 font-medium">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    X (Twitter)
                  </a>
                  <a href="#" className="flex items-center gap-3 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 font-medium">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
                    Discord Server
                  </a>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Contact;