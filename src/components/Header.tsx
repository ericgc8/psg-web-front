// src/components/Header.tsx

import React from 'react';
import { Link } from 'react-scroll';

import '../y2k-styles.css';

const Header: React.FC = () => {
  return (
    <header className="y2k-header flex justify-between items-center p-4">
      <h1 className="y2k-logo">Pro Service Growth</h1>
      <nav>
        <ul className="flex space-x-6 list-none">
          <li>
            <Link
              to="boost-sales"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="y2k-nav-link"
            >
              Boost your Sales
            </Link>
          </li>
          <li>
            <Link
              to="pricing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="y2k-nav-link"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="y2k-nav-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
