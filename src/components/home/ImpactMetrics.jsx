import React from 'react';

export default function ImpactMetrics() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Success Measured Differently</h2>
      <p className="text-gray-400 mb-16 text-lg">Not by token prices. But by lives transformed.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: 'Members Activated', val: '10,000+' },
          { label: 'Skills Acquired', val: '45,000+' },
          { label: 'Jobs Secured', val: '2,500+' },
          { label: 'Mentorship Hours', val: '50,000+' }
        ].map((metric, i) => (
          <div key={i} className="p-8 border border-[#4D4D4D] bg-[#111] rounded-2xl">
            <div className="text-4xl font-black text-[#E48C2A] mb-2">{metric.val}</div>
            <div className="text-sm text-gray-400 font-medium uppercase tracking-wide">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}