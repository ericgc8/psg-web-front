// src/components/Footer.tsx

import React from 'react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  return (
    <footer className="y2k-footer bg-white/10 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left side - Copyright */}
        <div className="text-white text-lg mb-4 md:mb-0">
          Pro Service Growth © {new Date().getFullYear()}
        </div>

        {/* Right side - Navigation and Social Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <nav className="flex space-x-4 mr-4">
            <Link
              to="boost-sales"
              smooth={true}
              offset={-70}
              duration={500}
              className="y2k-nav-link text-white hover:text-blue-accent"
            >
              Boost Sales
            </Link>
            <Link
              to="pricing"
              smooth={true}
              offset={-70}
              duration={500}
              className="y2k-nav-link text-white hover:text-blue-accent"
            >
              Pricing
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              className="y2k-nav-link text-white hover:text-blue-accent"
            >
              Contact
            </Link>
          </nav>

          {/* Instagram Link */}
          <a
            href="https://instagram.com/glam.sites"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-neon-pink transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
