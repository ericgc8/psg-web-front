// src/components/FAQ.tsx

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Why do I need a website? Can't I just use social media?",
    answer:
      "While social media is important, a website gives you full control over your brand and message. It's a central hub for all your services, helps with SEO, and provides a professional image that can set you apart from competitors who rely solely on social platforms.",
  },
  {
    question: 'How long does it take to get my website up and running?',
    answer:
      'Typically, we can have your website designed, developed, and launched within 2-3 weeks. We work efficiently to get your online presence established as quickly as possible without compromising on quality.',
  },
  {
    question: "What if I'm not tech-savvy? Can I still update my website?",
    answer:
      'Absolutely! We design our websites with user-friendly interfaces that make it easy for you to update content, add new services, or change images. Plus, our support team is always available to help you with any questions or updates you need.',
  },
  {
    question: 'How will a website actually help me get more clients?',
    answer:
      'A well-designed website acts as a 24/7 salesperson. It showcases your work, helps potential clients find you through search engines, provides easy booking options, and builds trust through testimonials and professional presentation. All of these factors work together to convert visitors into paying clients.',
  },
  {
    question: "What if I'm not satisfied with the design?",
    answer:
      "We work closely with you throughout the design process to ensure you're happy with the result. We offer revisions to make sure the final product aligns with your vision. Your satisfaction is our priority!",
  },
];

const FAQItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full text-left p-4 bg-white/20 hover:bg-white/30 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-bold text-white">{item.question}</span>
        <span className="text-2xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-white/10 text-white">{item.answer}</div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="faq-section py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center y2k-gradient-text">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
