import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--color-dark)] text-[var(--color-light)] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-bold tracking-tighter cursor-pointer">
            Owlpha<span className="text-[var(--color-primary)]">DAO</span>
          </Link>
          <p className="mt-4 text-[var(--color-secondary)] max-w-sm">
            Amplifying builders and projects with real utility across blockchains. Building the future of decentralized collaboration.
          </p>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="font-bold text-[var(--color-primary)] mb-4">Ecosystem</h4>
          <ul className="space-y-2 text-[var(--color-secondary)]">
            <li><Link to="/products/fow-cap" className="hover:text-[var(--color-light)] transition-colors">Future of Work CAP</Link></li>
            <li><Link to="/products/fow-infra" className="hover:text-[var(--color-light)] transition-colors">Infrastructure</Link></li>
            <li><Link to="/products/tsu" className="hover:text-[var(--color-light)] transition-colors">TSU Platform</Link></li>
            <li><Link to="/products/owlphalab" className="hover:text-[var(--color-light)] transition-colors">Owlphalab</Link></li>
          </ul>
        </div>

        {/* Social / Contact Column */}
        <div>
          <h4 className="font-bold text-[var(--color-primary)] mb-4">Connect</h4>
          <ul className="space-y-2 text-[var(--color-secondary)]">
            <li><a href="#" className="hover:text-[var(--color-light)] transition-colors">X (Twitter)</a></li>
            <li><a href="#" className="hover:text-[var(--color-light)] transition-colors">Discord</a></li>
            <li><Link to="/contact" className="hover:text-[var(--color-light)] transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[var(--color-secondary)]/20 text-center md:text-left text-[var(--color-secondary)] text-sm">
        © {currentYear} OwlphaDAO. All rights reserved. Built with precision and passion.
      </div>
    </footer>
  );
};

export default Footer;