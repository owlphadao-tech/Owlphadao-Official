import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#000] border-t border-[#4D4D4D] pt-16 pb-8 px-6 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        <div>
          <h4 className="text-white font-bold mb-4">Ecosystem</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-[#E48C2A]">Academy</a></li>
            <li><a href="#" className="hover:text-[#E48C2A]">CAP</a></li>
            <li><a href="#" className="hover:text-[#E48C2A]">TSU</a></li>
            <li><a href="#" className="hover:text-[#E48C2A]">Community</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Socials</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-[#E48C2A]">X (Twitter)</a></li>
            <li><a href="#" className="hover:text-[#E48C2A]">Discord</a></li>
            <li><a href="#" className="hover:text-[#E48C2A]">Telegram</a></li>
            <li><a href="#" className="hover:text-[#E48C2A]">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-[#E48C2A]">Partnerships</a></li>
            <li><a href="#" className="hover:text-[#E48C2A]">Educators</a></li>
            <li><a href="#" className="hover:text-[#E48C2A]">Community Support</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-[#4D4D4D] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-gray-500 text-xs">OwlphaDAO — Building a Borderless Future of Opportunity.</p>
      </div>
    </footer>
  );
}