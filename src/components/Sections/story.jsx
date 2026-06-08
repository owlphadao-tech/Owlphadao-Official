import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const storyData = [
  {
    id: 'why',
    tagline: 'The Core Belief',
    title: 'The Why',
    description: 'Talent is distributed evenly across the world, but economic opportunity is trapped behind borders, gatekeepers, and systems that benefit corporations over individuals. We believe a borderless network of resilient people can bypass those systems entirely by pooling their skills, knowledge, and access.',
    // Placeholder image: A glowing digital globe/network
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop', 
    reverse: false,
  },
  {
    id: 'mission',
    tagline: 'Our Objective',
    title: 'The Mission',
    description: 'To equip every Owlpha with the digital skills, market access, and community backing required to achieve financial sovereignty and actively pull another Owlpha up with them.',
    // Placeholder image: Collaboration / Nodes connecting
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    reverse: true,
  },
  {
    id: 'vision',
    tagline: 'The Endgame',
    title: 'The Vision',
    description: 'A global, self-sustaining ecosystem where "success" isn’t measured by token price, but by how many individuals move from economic survival to economic impact.',
    // Placeholder image: Abstract futuristic architecture/growth
    imageUrl: 'https://images.unsplash.com/photo-1540162875225-3f6b56d69fe8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    reverse: false,
  }
];

const StorySection = ({ item, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });

  // Dynamic parallax effect for the images
  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <div ref={ref} className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 py-20`}>
      
      {/* Text Content Block */}
      <motion.div 
        initial={{ opacity: 0, x: item.reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-6"
      >
        <div className="inline-block px-4 py-1.5 rounded-full  bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-mono text-sm tracking-wide shadow-[0_0_15px_rgba(228,140,42,0.15)]">
          {item.tagline}
        </div>
        <h2 className="text-4xl md:text-6xl font-['Space_mono',monospace] font-bold tracking-tight text-slate-50">
          {item.title}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-transparent rounded-full"></div>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
          {item.description}
        </p>
      </motion.div>

      {/* Image Block with Parallax & Hover Animations */}
      <motion.div 
        style={{ y, opacity }}
        className="flex-1 w-full"
      >
        <div className="relative group rounded-3xl overflow-hidden border border-slate-700/50 bg-slate-800 shadow-2xl shadow-slate-950/50">
          {/* Decorative glowing background behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
          
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={item.imageUrl} 
            alt={item.title}
            className="w-full h-[400px] md:h-[500px] object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          {/* Subtle corner accent */}
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-[var(--color-primary)] blur-[80px] opacity-20 z-0"></div>
        </div>
      </motion.div>

    </div>
  );
};

const Story = () => {
  return (
    <div id="story" className="relative z-10 w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 py-32 overflow-hidden px-6 border-y border-slate-800/50">
      
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] opacity-[0.1]"></div>
        <motion.div
          animate={{ y: [0, -50, 0], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[-10%] w-[50rem] h-[50rem] bg-[var(--color-primary)] rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-['Space_mono',monospace]  font-bold text-slate-50 mb-6"
          >
            The <span className="text-[var(--color-primary)]">Manifesto</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-[16px]"
          >
            We are building more than infrastructure. We are building a movement.
          </motion.p>
        </div>

        {/* Story Mapping */}
        <div className="flex flex-col space-y-12 lg:space-y-0">
          {storyData.map((item, index) => (
            <StorySection key={item.id} item={item} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Story;