import React from 'react';

export default function CallToAction() {
  return (
    <section className="relative py-32 px-6 text-center bg-gradient-to-b from-[#000] to-[#E48C2A]/10 border-t border-[#4D4D4D]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#E48C2A]">
          "Pull yourself up. Pull another Owlpha up. Repeat."
        </h2>
        <p className="text-xl text-gray-300 mb-16">
          OwlphaDAO isn't simply teaching skills. It's creating a self-sustaining economic ecosystem where every successful member has the ability—and responsibility—to elevate another.
        </p>
        
        <h3 className="text-3xl font-bold mb-6 text-white">Your Journey From Potential To Impact Starts Here</h3>
        <p className="text-gray-400 mb-10 flex flex-wrap justify-center gap-4 text-sm uppercase tracking-widest font-semibold">
          <span>Acquire skills</span> • <span>Build clarity</span> • <span>Access opportunity</span> • <span>Create wealth</span> • <span className="text-[#E48C2A]">Empower others</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-[#E48C2A] text-[#000] font-bold rounded-lg hover:bg-[#c97a23] transition-all">Join OwlphaDAO</button>
          <button className="px-8 py-4 bg-[#111] border border-[#4D4D4D] text-white font-bold rounded-lg hover:bg-[#222] transition-all">Become An Educator</button>
          <button className="px-8 py-4 bg-transparent border border-[#4D4D4D] text-white font-bold rounded-lg hover:border-[#E48C2A] transition-all">Partner With Us</button>
        </div>
      </div>
    </section>
  );
}