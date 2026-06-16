import { motion } from 'framer-motion';


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const spreadVariants = {
  hidden: { opacity: 0, y: 150, scale: 0.8 },
  visible: (index) => ({
    opacity: 1,
    y: Math.abs(index - 1) * 40,
    x: (index - 1) * 140,
    rotate: (index - 1) * 14,
    transition: { type: "spring", stiffness: 70, damping: 15, delay: 0.2 + index * 0.15 }
  })
};

export default function NftCollectionSection() {
  const topNfts = [
    { id: 1, name: "Owl Man #054", image: "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fwe-assets.pinit.io%2F5ttk4AZXSTEkfXdjn2gMx7gmnJc5W4BLjgnfUJ3vS2R8%2Ff4c4de0b-0ffa-4419-976b-d93f2683840f%2F53", trait: "Top Collection" },
    { id: 2, name: "Owl Man #014", image: "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fwe-assets.pinit.io%2F5ttk4AZXSTEkfXdjn2gMx7gmnJc5W4BLjgnfUJ3vS2R8%2Ff4c4de0b-0ffa-4419-976b-d93f2683840f%2F13", trait: "Top Collection" },
    { id: 3, name: "Owl Man #152", image: "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fwe-assets.pinit.io%2F5ttk4AZXSTEkfXdjn2gMx7gmnJc5W4BLjgnfUJ3vS2R8%2Ff4c4de0b-0ffa-4419-976b-d93f2683840f%2F151", trait: "Top Collection" }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-[#E48C2A] via-[#000000] to-[#E48C2A]">
      
      {/* Dynamic Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute -top-32 -left-32 w-96 h-96 bg-[#E48C2A] rounded-full mix-blend-multiply filter blur-[100px]" />
        <motion.div animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -bottom-32 -right-32 w-[40rem] h-[40rem] bg-[#E48C2A] rounded-full mix-blend-multiply filter blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Column: Text */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
            variants={fadeInUp}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-6xl font-['Space_mono',monospace] font-bold mb-6 leading-tight text-[#E48C2A]">
              The <span className="text-[#ffffff]">OwlMan</span> Collection
            </h2>
            <div className="space-y-6 text-[#ffffff] text-lg leading-relaxed font-medium">
              <p>The Owl Man collection represents unity and collaboration, urging participants, irrespective of differences, to join hands for collective growth.</p>
              <p>Like diverse traits in the collection, individuals contribute uniquely, forming a vital part of the community.</p>
            </div>
            
            <motion.a 
              href="https://magiceden.io/marketplace/the_owl_man" target='_blank'
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="inline-block text-center mt-10 px-8 py-4 font-['Space_mono',monospace] font-bold bg-[#E48C2A] text-white rounded-full transition-colors duration-300 shadow-[0_10px_25px_rgba(228,140,42,0.4)]"
            >
              View Full Collection
            </motion.a>
          </motion.div>

          

          {/* Right Column: Cards */}
          <div className="relative h-[400px] w-full lg:w-1/2 flex items-center justify-center perspective-[1200px]">
            {topNfts.map((nft, index) => (
              <motion.div
                key={nft.id}
                custom={index}
                variants={spreadVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ zIndex: index === 1 ? 20 : 10 }} 
                className="absolute w-60 h-60 md:w-80 md:h-80 rounded-3xl overflow-hidden border-[6px] border-white bg-white shadow-2xl origin-bottom"
              >
                <img src={nft.image} alt={nft.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#E48C2A]/20 to-transparent p-6 flex flex-col justify-end">
                  <p className="text-[#A7F3D0] text-xs font-bold tracking-widest uppercase">{nft.trait}</p>
                  <h4 className="text-white text-2xl font-extrabold">{nft.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}