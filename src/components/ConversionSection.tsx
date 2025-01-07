// src/components/ConversionSection.tsx

import React from 'react';
import { Link } from 'react-scroll';

const ConversionSection: React.FC = () => {
  return (
    <section className="conversion-section py-16 px-4 bg-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 y2k-gradient-text">
          Still on the Fence?
        </h2>
        <div className="space-y-6 text-white text-lg md:text-xl">
          <p>
            Listen up, beauty boss! 💁‍♀️ In today's digital jungle, your online
            presence is your secret weapon. Without a killer website, you're
            basically invisible to potential clients.
          </p>
          <p>
            Think about it: When was the last time you booked a service without
            checking out their website first? Exactly. Your clients are doing
            the same thing!
          </p>
          <p>
            Your competition is already out there, slaying the game with
            websites that convert visitors into loyal clients. Can you really
            afford to be left behind?
          </p>
          <p className="font-bold text-neon-pink">
            Here's the tea: A good website isn't just nice to have – it's
            essential for your business to thrive.
          </p>
          <p>
            With Pro Service Growth, you're not just getting a pretty website. You're
            investing in a 24/7 sales machine that works while you sleep,
            bringing in bookings and helping your business grow.
          </p>
          <p className="font-bold">
            Don't let doubts hold you back from the success you deserve. It's
            time to level up and show the world what you've got!
          </p>
        </div>
        <Link to="pricing" smooth={true} offset={-70} duration={500}>
          <button className="y2k-button text-xl py-3 px-8 mt-8">
            I'm Ready to Slay! 💅
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ConversionSection;
