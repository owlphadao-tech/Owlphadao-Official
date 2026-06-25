import  { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Ecosystem', to: 'ecosystem' },
    { name: 'About Us', to: 'about' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-black border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand Logo - Scrolls to top */}
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="text-2xl flex font-bold tracking-tighter text-white cursor-pointer select-none"
        >
          <img src="/owlpha-logo.png" width={50} alt="Owlpha Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-[#E48C2A]"
              className="text-sm font-medium text-white hover:text-[#E48C2A] transition-colors duration-300 cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          
          {/* External Community Link using native anchor tag */}
          <a 
            href="https://tsu.owlphadao.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#E48C2A] hover:text-white transition-all duration-300 cursor-pointer"
          >
            Community
          </a>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <div className="md:hidden z-10 flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none transition-transform duration-300 hover:text-[#E48C2A]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/10 transition-all duration-300 ease-in-out z-50 ${
          isOpen ? 'opacity-100 max-h-96 visible' : 'opacity-0 max-h-0 overflow-hidden invisible'
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-[#E48C2A]"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#E48C2A] font-medium transition-colors cursor-pointer block py-2"
            >
              {link.name}
            </Link>
          ))}
          
          {/* External Community Action for Mobile */}
          <a 
            href="https://tsu.owlphadao.com" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full bg-white text-black text-center px-5 py-3 rounded-full text-sm font-semibold hover:bg-[#E48C2A] hover:text-white transition-all duration-300 block"
          >
            Community
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;