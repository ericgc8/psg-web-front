import React from 'react';

const PricingTable: React.FC = () => {
  return (
    <section id="pricing" className="pricing-section py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center y2k-gradient-text">
          Choose Your Growth Package
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Starter Package */}
          <div className="y2k-pricing-card flex flex-col">
            <div className="flex-grow">
              <h3 className="text-3xl font-bold mb-4 text-neon-pink">Starter</h3>
              <p className="text-4xl font-bold mb-2 text-blue-accent">$400</p>
              <p className="text-lg mb-4 text-white">
                💳 Buy Now, Pay Later Options Available
              </p>
              <ul className="mb-8 space-y-2 flex-grow">
                <li className="flex items-center">
                  <span className="y2k-star mr-2">★</span>
                  <span>Fully customized website tailored to your brand</span>
                </li>
                <li className="flex items-center">
                  <span className="y2k-star mr-2">★</span>
                  <span>3 customizable pages (e.g., Home, Services, Contact)</span>
                </li>
                <li className="flex items-center">
                  <span className="y2k-star mr-2">★</span>
                  <span>Basic SEO Optimization for better search engine visibility</span>
                </li>
                <li className="flex items-center">
                  <span className="y2k-star mr-2">★</span>
                  <span>Social media integration (links to Instagram, Facebook, TikTok, etc.)</span>
                </li>
                <li className="flex items-center">
                  <span className="y2k-star mr-2">★</span>
                  <span>Mobile-friendly and responsive design</span>
                </li>
                <li className="flex items-center">
                  <span className="y2k-star mr-2">★</span>
                  <span>Online booking system with appointment notifications</span>
                </li>
              </ul>
            </div>
            <button className="y2k-button w-full text-xl py-3 px-8 mt-auto">
              Get Starter Package
            </button>
          </div>

          {/* Pro Package */}
          <div className="y2k-pricing-card y2k-pricing-card-pro flex flex-col">
            <div className="flex-grow">
              <h3 className="text-3xl font-bold mb-4 text-blue-accent">Pro</h3>
              <p className="text-4xl font-bold mb-2 text-blue-accent">$700</p>
              <p className="text-lg mb-4 text-white">
                💳 Buy Now, Pay Later Options Available
              </p>
              <ul className="mb-8 space-y-2 flex-grow">
                <li className="flex items-center">
                  <span className="y2k-star mr-2">★</span>
                  <span>Everything in the Starter package, plus:</span>
                </li>
                <li className="flex items-center">
                  <span className="y2k-star mr-2">★</span>
                  <span>5 customizable pages (e.g., Home, Services, Portfolio, About, Contact)</span>
                </li>
                <li className="flex items-center">
                  <span className="y2k-star mr-2">★</span>
                  <span>Advanced SEO Optimization, including keyword research and image optimization</span>
                </li>
                <li className="flex items-center">
                  <span className="y2k-star mr-2">★</span>
                  <span>Priority support with a 24-hour response guarantee</span>
                </li>
                <li className="flex items-center">
                  <span className="y2k-star mr-2">★</span>
                  <span>Portfolio gallery to showcase your best work in high-quality</span>
                </li>
                <li className="flex items-center">
                  <span className="y2k-star mr-2">★</span>
                  <span>Monthly website performance reports</span>
                </li>
                <li className="flex items-center">
                  <span className="y2k-star mr-2">★</span>
                  <span>Integration with email marketing tools (e.g., Mailchimp, ConvertKit)</span>
                </li>
                <li className="flex items-center">
                  <span className="y2k-star mr-2">★</span>
                  <span>Pop-up feature for promotions or mailing list sign-ups (Helps boost sales)</span>
                </li>
              </ul>
            </div>
            <button className="y2k-button w-full text-xl py-3 px-8 mt-auto">
              Get Pro Package
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
