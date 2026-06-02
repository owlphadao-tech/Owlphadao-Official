import React from 'react';
import { Globe, Rocket, Users, Briefcase } from 'lucide-react';

export default function CommunityArchetypes() {
  return (
    <section className="bg-[#0a0a0a] border-y border-[#4D4D4D] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">Every Owlpha Has A Role</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'The Rainmakers', role: 'Opportunity Creators', desc: 'They create opportunities and connect work with talent.', icon: <Globe /> },
            { title: 'The Multipliers', role: 'Mentors & Accelerators', desc: 'They help others move faster through experience and coaching.', icon: <Rocket /> },
            { title: 'The Operators', role: 'Community Builders', desc: 'They organize local events, coordinate initiatives, and strengthen bonds.', icon: <Users /> },
            { title: 'The Builders', role: 'The Talent Engine', desc: 'Developers, designers, marketers, and creators who drive execution.', icon: <Briefcase /> }
          ].map((arch, i) => (
            <div key={i} className="bg-[#000] border border-[#4D4D4D] p-8 rounded-2xl hover:border-[#E48C2A] transition-colors text-left group">
              <div className="text-[#E48C2A] mb-6 group-hover:scale-110 transition-transform">{arch.icon}</div>
              <h3 className="text-xl font-bold mb-1">{arch.title}</h3>
              <p className="text-xs text-[#E48C2A] uppercase tracking-wider font-bold mb-4">{arch.role}</p>
              <p className="text-sm text-gray-400">{arch.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}