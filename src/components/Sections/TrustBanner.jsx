import React from 'react';

export default function TrustBanner() {
  // We create an array with 4 items to ensure the text repeats enough times 
  // to fill ultra-wide screens and loop seamlessly.
  const tickerItems = new Array(4).fill(null);

  return (
    <section className="relative flex overflow-hidden border-y border-[#4D4D4D] bg-[#050505] py-1">
      {/* 
        Inline styles for the infinite marquee animation. 
        Translating to -50% ensures a mathematically perfect, seamless loop 
        because the second half of the track is identical to the first.
      */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
          /* Optional: Pause the ticker when the user hovers over it to read */
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee items-center">
        {tickerItems.map((_, index) => (
          <div key={index} className="flex items-center space-x-6 px-3">
            <span className="text-[#4D4D4D] font-semibold tracking-widest uppercase text-sm whitespace-nowrap">
              Built Around Real Utility
            </span>
            <span className="text-gray-400 text-sm whitespace-nowrap">
              We collaborate with builders, educators, communities, founders, and innovators across the Web3 landscape to create measurable impact beyond speculation.
            </span>
            {/* Separator icon between loops */}
            <span className="text-[#4D4D4D]/50 text-sm px-3">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}