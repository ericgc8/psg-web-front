import React from 'react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 y2k-gradient-text">
          Elevate Your Service Business with Pro Service Growth
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white">
          Boost your online presence and skyrocket your sales with our cutting-edge websites tailored for service professionals.
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="y2k-button text-xl py-3 px-8">
            Start Growing Today
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
