import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-40 bg-[var(--color-dark)] flex flex-col justify-center items-center text-center px-6 border-t border-[var(--color-secondary)]/20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-[var(--color-light)] mb-10">
          The Vanguard is waiting.
        </h2>
        <p className="text-xl text-[var(--color-light)]/60 mb-12 font-light">
          Join 2,000+ members mapping the digital frontier. Connect your wallet, claim your status, and help build the future of OwlphaDAO.
        </p>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link 
            to="/community" 
            className="inline-block px-12 py-6 bg-[var(--color-primary)] text-[var(--color-dark)] rounded-full text-lg font-bold hover:shadow-[0_0_40px_rgba(228,140,42,0.4)] transition-all"
          >
            Join OwlphaDAO
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;