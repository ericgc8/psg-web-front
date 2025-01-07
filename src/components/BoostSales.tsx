// src/components/BoostSales.tsx

import React from 'react';

const BoostSales: React.FC = () => {
  return (
    <section id="boost-sales" className="boost-sales-section py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center y2k-gradient-text">
          Boost Your Beauty Business with Pro Service Growth
        </h2>
        <p className="text-2xl mb-12 text-center text-white">
          Elevate your online presence and skyrocket your bookings with our
          high-converting websites! 💅💖
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="y2k-card">
            <h3 className="text-2xl font-bold mb-4 text-neon-pink">
              Beauty-Focused Design
            </h3>
            <p className="text-lg">
              We create stunning websites tailored for makeup artists, lash
              techs, and nail pros, showcasing your skills in the most
              flattering light.
            </p>
          </div>
          <div className="y2k-card">
            <h3 className="text-2xl font-bold mb-4 text-neon-pink">
              Conversion-Optimized
            </h3>
            <p className="text-lg">
              Our designs are strategically crafted to turn visitors into loyal
              clients, maximizing your online booking potential.
            </p>
          </div>
          <div className="y2k-card">
            <h3 className="text-2xl font-bold mb-4 text-neon-pink">
              Mobile-Ready
            </h3>
            <p className="text-lg">
              Your site will look fabulous on any device, ensuring you never
              miss a booking opportunity, whether clients browse on desktop or
              mobile.
            </p>
          </div>
          <div className="y2k-card">
            <h3 className="text-2xl font-bold mb-4 text-neon-pink">
              SEO Optimized
            </h3>
            <p className="text-lg">
              We implement best practices to help your site rank higher in
              search results, attracting more potential clients to your
              business.
            </p>
          </div>
        </div>

        <div className="y2k-container mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center text-blue-accent">
            Our Process
          </h3>
          <ul className="list-none space-y-4">
            <li className="flex items-center">
              <span className="y2k-star mr-2">★</span>
              <span className="text-lg">
                <strong className="text-neon-pink">Consultation:</strong> We
                dive deep into your brand's aesthetic and goals.
              </span>
            </li>
            <li className="flex items-center">
              <span className="y2k-star mr-2">★</span>
              <span className="text-lg">
                <strong className="text-neon-pink">Custom Design:</strong> Our
                designers craft a unique look that reflects your brand identity.
              </span>
            </li>
            <li className="flex items-center">
              <span className="y2k-star mr-2">★</span>
              <span className="text-lg">
                <strong className="text-neon-pink">
                  Conversion Optimization:
                </strong>{' '}
                We implement strategies to turn visitors into clients.
              </span>
            </li>
            <li className="flex items-center">
              <span className="y2k-star mr-2">★</span>
              <span className="text-lg">
                <strong className="text-neon-pink">Launch & Support:</strong>{' '}
                Your new site goes live, backed by our ongoing support.
              </span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6 y2k-gradient-text">
            Ready to Elevate Your Beauty Biz?
          </h3>
          <p className="text-2xl mb-8 text-white">
            Don't let a lackluster online presence hold you back. Click below to
            start your journey to a stunning, client-converting website!
          </p>
          <button className="y2k-button text-xl py-3 px-8">
            Boost My Beauty Biz Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoostSales;
