import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated paths to match section IDs instead of routes
  const navLinks = [
    { name: 'Ecosystem', to: 'ecosystem' },
    { name: 'About Us', to: 'about' },
    { name: 'Community & Events', to: 'community' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--color-light)]/90 backdrop-blur-md border-b border-[var(--color-secondary)]/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand Logo - Scrolls to top */}
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="text-2xl flex font-bold tracking-tighter text-[var(--color-dark)] cursor-pointer select-none"
        >
          <img src="/owlpha-logo.png" className='-mt-2' width={70} alt="Owlpha Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70} // Adjust this based on your navbar height
              duration={500}
              activeClass="text-[var(--color-primary)]"
              className="text-sm font-medium text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Call to Action */}
          <Link 
            to="contact" 
            smooth={true} 
            offset={-70} 
            duration={500}
          >
            <button className="bg-[var(--color-dark)] text-[var(--color-light)] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[var(--color-primary)] hover:shadow-lg transition-all duration-300 cursor-pointer">
              Connect 
            </button>
          </Link>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--color-dark)] focus:outline-none transition-transform duration-300 hover:text-[var(--color-primary)]"
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

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-[var(--color-light)] border-t border-[var(--color-secondary)]/10 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-[var(--color-primary)]"
              onClick={() => setIsOpen(false)} // Closes menu on click
              className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] font-medium transition-colors cursor-pointer block py-2"
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            to="contact" 
            smooth={true} 
            offset={-70} 
            duration={500} 
            onClick={() => setIsOpen(false)}
          >
            <button className="w-full bg-[var(--color-dark)] text-[var(--color-light)] px-5 py-3 rounded-md text-sm font-semibold hover:bg-[var(--color-primary)]">
              Connect Web3
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;