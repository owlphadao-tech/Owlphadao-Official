import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function NftCollectionSection() {
  // Replace these with the actual paths to your top 3 NFT images
  const topNfts = [
    {
      id: 1,
      name: "Owl Man #054",
      image: "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fwe-assets.pinit.io%2F5ttk4AZXSTEkfXdjn2gMx7gmnJc5W4BLjgnfUJ3vS2R8%2Ff4c4de0b-0ffa-4419-976b-d93f2683840f%2F53",
      trait: "Top Collection",
    },
    {
      id: 2,
      name: "Owl Man #014",
      image: "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fwe-assets.pinit.io%2F5ttk4AZXSTEkfXdjn2gMx7gmnJc5W4BLjgnfUJ3vS2R8%2Ff4c4de0b-0ffa-4419-976b-d93f2683840f%2F13",
      trait: "Top Collection",
    },
    {
      id: 3,
      name: "Owl Man #152",
      image: "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fwe-assets.pinit.io%2F5ttk4AZXSTEkfXdjn2gMx7gmnJc5W4BLjgnfUJ3vS2R8%2Ff4c4de0b-0ffa-4419-976b-d93f2683840f%2F151",
      trait: "Top Collection",
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#000000] border-y border-[#4D4D4D] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#E48C2A] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & Philosophy */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-['Space_mono',monospace] font-bold  md:text-5xl font-bold mb-6 text-[#FFFFFF]">
              The <span className="text-[#E48C2A]">Owl Man</span> Collection
            </h2>
            <div className="space-y-6 text-gray-400 text-[16px] leading-relaxed">
              <p>
                The Owl Man collection represents unity and collaboration, urging participants, irrespective of differences, to join hands for collective growth.
              </p>
              <p>
                Like diverse traits in the collection, individuals contribute uniquely, forming a vital part of the community. 
              </p>
              <p>
                The call for collaboration emphasizes shared efforts and underscores that each participant plays a crucial role in the success and development of OwlphaDAO.
              </p>
            </div>
            
          
            
            <button className="mt-10 px-8 py-3 font-['Space_mono',monospace] font-bold  bg-transparent border-2 border-[#E48C2A] text-[#E48C2A] font-bold rounded-lg hover:bg-[#E48C2A] hover:text-[#000] transition-all">
              View Full Collection
            </button>
          </motion.div>

          {/* Right Column: NFT Showcase Gallery */}
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* 
               We use a masonry-style or staggered grid layout for 3 items.
               The second column will shift down slightly for a dynamic look.
            */}
            <div className="space-y-6 sm:mt-12">
              <motion.div variants={fadeInUp} className="group relative rounded-2xl overflow-hidden border border-[#4D4D4D] bg-[#111] hover:border-[#E48C2A] transition-colors p-2">
                <div className="aspect-square rounded-xl overflow-hidden bg-[#222]">
                  <img 
                    src={topNfts[0].image} 
                    alt={topNfts[0].name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-[#E48C2A] font-['Space_mono',monospace] font-bold tracking-wider uppercase mb-1">{topNfts[0].trait}</p>
                  <h4 className="text-white font-bold">{topNfts[0].name}</h4>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="group relative rounded-2xl overflow-hidden border border-[#4D4D4D] bg-[#111] hover:border-[#E48C2A] transition-colors p-2">
                <div className="aspect-square rounded-xl overflow-hidden bg-[#222]">
                  <img 
                    src={topNfts[1].image} 
                    alt={topNfts[1].name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-[#E48C2A] font-['Space_mono',monospace] font-bold tracking-wider uppercase mb-1">{topNfts[1].trait}</p>
                  <h4 className="text-white font-bold">{topNfts[1].name}</h4>
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div variants={fadeInUp} className="group relative rounded-2xl overflow-hidden border border-[#4D4D4D] bg-[#111] hover:border-[#E48C2A] transition-colors p-2">
                <div className="aspect-square rounded-xl overflow-hidden bg-[#222]">
                  <img 
                    src={topNfts[2].image} 
                    alt={topNfts[2].name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-[#E48C2A] font-['Space_mono',monospace] font-bold tracking-wider uppercase mb-1">{topNfts[2].trait}</p>
                  <h4 className="text-white font-bold">{topNfts[2].name}</h4>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}