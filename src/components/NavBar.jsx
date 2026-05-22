import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Ecosystem', path: '/ecosystem' },
    { name: 'About Us', path: '/about' },
    { name: 'Community & Events', path: '/community' },
    { name: 'Contact', path: '/contact' }, 
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--color-light)]/90 backdrop-blur-md border-b border-[var(--color-secondary)]/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link to="/" className="text-2xl flex gap-2 font-bold tracking-tighter text-[var(--color-dark)] cursor-pointer select-none">
          <img src="https://owlphadao.com/_next/image?url=%2Fowlpha-logo.png&w=384&q=75" width={10} height={10}   alt="" />
          Owlpha<span className="text-[var(--color-primary)]">DAO</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-secondary)] hover:text-[var(--color-primary)]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          {/* Call to Action */}
          <button className="bg-[var(--color-dark)] text-[var(--color-light)] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[var(--color-primary)] hover:shadow-lg transition-all duration-300">
            Connect Web3
          </button>
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
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full bg-[var(--color-dark)] text-[var(--color-light)] px-5 py-3 rounded-md text-sm font-semibold hover:bg-[var(--color-primary)]">
            Connect Web3
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;