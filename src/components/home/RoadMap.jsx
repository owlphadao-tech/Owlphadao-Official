import React from 'react';

export default function Roadmap() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">The Next Evolution</h2>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#E48C2A] before:to-[#4D4D4D]">
        {[
          { phase: 'Phase 1', title: 'Foundation', items: ['Academy Launch', 'Educator Network'] },
          { phase: 'Phase 2', title: 'Activation', items: ['CAP Expansion', 'Blueprint Automation'] },
          { phase: 'Phase 3', title: 'Economic Network', items: ['TSU Marketplace', 'Regional Chapters'] },
          { phase: 'Phase 4', title: 'Global Scale', items: ['International Partnerships', 'Ecosystem Expansion'] }
        ].map((step, i) => (
          <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#000] bg-[#E48C2A] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow ml-0 md:ml-auto md:mr-auto z-10"></div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#111] p-6 rounded-2xl border border-[#4D4D4D] hover:border-[#E48C2A] transition-colors">
              <span className="text-[#E48C2A] font-bold text-sm mb-1 block">{step.phase}</span>
              <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                {step.items.map((item, idx) => <li key={idx}>• {item}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}