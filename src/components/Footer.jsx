import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 w-full bg-[var(--color-dark)] text-[var(--color-light)] pt-20 pb-12 px-6 border-t border-[var(--color-secondary)]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-5">
          <Link to="/" className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2">
            Owlpha<span className="text-[var(--color-primary)]">DAO</span>
          </Link>
          <p className="mt-4 text-[var(--color-secondary)] max-w-sm leading-relaxed">
            Amplifying builders and projects with real utility across blockchains. Building the future of decentralized collaboration.
          </p>
        </div>

        {/* Ecosystem Links */}
        <div className="col-span-1 md:col-span-3">
          <h4 className="font-bold text-[var(--color-primary)] mb-6 uppercase tracking-wider text-xs">Ecosystem</h4>
          <ul className="space-y-4 text-[var(--color-secondary)]">
            <li><Link to="/products/fow-cap" className="hover:text-[var(--color-primary)] transition-all duration-300">Future of Work CAP</Link></li>
            <li><Link to="/products/fow-infra" className="hover:text-[var(--color-primary)] transition-all duration-300">Infrastructure</Link></li>
            <li><Link to="/products/tsu" className="hover:text-[var(--color-primary)] transition-all duration-300">TSU Platform</Link></li>
            <li><Link to="/products/owlphalab" className="hover:text-[var(--color-primary)] transition-all duration-300">Owlphalab</Link></li>
          </ul>
        </div>

        {/* Connect Links */}
        <div className="col-span-1 md:col-span-4">
          <h4 className="font-bold text-[var(--color-primary)] mb-6 uppercase tracking-wider text-xs">Connect</h4>
          <ul className="space-y-4 text-[var(--color-secondary)]">
            <li><a href="#" className="hover:text-[var(--color-primary)] transition-all duration-300">X (Twitter)</a></li>
            <li><a href="#" className="hover:text-[var(--color-primary)] transition-all duration-300">Discord</a></li>
            <li><Link to="/contact" className="hover:text-[var(--color-primary)] transition-all duration-300">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[var(--color-secondary)]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[var(--color-secondary)] text-sm">
        <p>© {currentYear} OwlphaDAO. All rights reserved.</p>
        <p className="font-medium text-[var(--color-secondary)]/60">Built with precision and passion.</p>
      </div>
    </footer>
  );
};

export default Footer;