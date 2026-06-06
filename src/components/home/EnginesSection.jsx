import { motion } from 'framer-motion';
import { BookOpen, Users } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function EnginesSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold">One Ecosystem. Three Powerful Engines.</h2>
      </div>

      <div className="space-y-24">
        {/* Phase 1 */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#E48C2A] uppercase mb-2 block">Phase 01</span>
            <h3 className="text-3xl font-bold mb-4">Future of Work Academy</h3>
            <p className="text-xl text-gray-300 mb-4">Learn The Skills That Create Modern Economic Freedom</p>
            <p className="text-gray-400 mb-8">
              An open learning environment where verified educators teach practical, high-income digital skills preparing members for the evolving future of work.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Web3 Education', 'AI & Automation', 'Design & Dev', 'Digital Marketing'].map((feature, i) => (
                <div key={i} className="bg-[#111] p-4 rounded-lg border border-[#4D4D4D] flex items-center gap-3">
                  <BookOpen size={18} className="text-[#E48C2A]" /> <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#111] border border-[#4D4D4D] rounded-2xl p-8 relative">
            <h4 className="text-xl font-bold mb-6 border-b border-[#4D4D4D] pb-4">Learn From Verified Builders</h4>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-4 bg-[#000] p-4 rounded-xl border border-[#4D4D4D]">
                  <div className="w-12 h-12 bg-[#4D4D4D] rounded-full"></div>
                  <div>
                    <h5 className="font-bold text-sm">Verified Educator {i}</h5>
                    <p className="text-xs text-[#E48C2A]">Blockchain & Web3 Architecture</p>
                  </div>
                  <div className="ml-auto text-yellow-500 text-sm">★ 4.9</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Phase 2 */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold tracking-widest text-[#E48C2A] uppercase mb-2 block">Phase 02</span>
            <h3 className="text-3xl font-bold mb-4">Career Activation Platform (CAP)</h3>
            <p className="text-xl text-gray-300 mb-4">Knowledge Becomes Action</p>
            <p className="text-gray-400 mb-8">
              Most people complete courses and remain stuck. CAP is a focused 7-Day Sprint designed to transform learning into execution. Every participant leaves with an Execution Blueprint™.
            </p>
          </div>
          <div className="order-2 lg:order-1 bg-[#111] border border-[#4D4D4D] rounded-2xl p-8">
             <h4 className="font-bold text-[#E48C2A] mb-6">7-Day Sprint Timeline</h4>
             <div className="space-y-3">
               {['Vision', 'Skills Audit', 'Market Positioning', 'Portfolio Strategy', 'Opportunity Mapping', 'Execution Planning', 'Blueprint Delivery'].map((day, i) => (
                 <div key={i} className="flex items-center gap-4">
                   <div className="w-8 h-8 rounded bg-[#1a1a1a] text-[#E48C2A] flex items-center justify-center font-bold text-xs">D{i+1}</div>
                   <span className="text-sm text-gray-300">{day}</span>
                 </div>
               ))}
             </div>
          </div>
        </motion.div>

        {/* Phase 3 */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#E48C2A] uppercase mb-2 block">Phase 03</span>
            <h3 className="text-3xl font-bold mb-4">Talent Support Unit (TSU)</h3>
            <p className="text-xl text-gray-300 mb-4">Where Economic Impact Happens</p>
            <p className="text-gray-400 mb-8">
              TSU is the operational engine of the ecosystem. It connects talent, opportunities, support systems, events, and mentorship into one living network.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Talent Marketplace', 'Gig Opportunities', 'Mentorship', 'Regional Meetups'].map((feature, i) => (
                <span key={i} className="px-4 py-2 bg-[#E48C2A]/10 text-[#E48C2A] border border-[#E48C2A]/30 rounded-full text-sm">
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-[#111] border border-[#4D4D4D] rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
            <div className="relative w-full h-full flex items-center justify-center">
               <div className="absolute w-32 h-32 bg-[#E48C2A]/20 rounded-full animate-pulse"></div>
               <Users size={48} className="text-[#E48C2A] z-10" />
               <div className="absolute top-0 left-0 bg-[#000] p-3 rounded-lg border border-[#4D4D4D] text-xs">Marketplace</div>
               <div className="absolute bottom-0 right-0 bg-[#000] p-3 rounded-lg border border-[#4D4D4D] text-xs">Support Hub</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}