// src/components/Contact.tsx

import React, { useState, FormEvent } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact-section py-16 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center y2k-gradient-text">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="y2k-container space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-white">
              Name <span className="text-neon-pink">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-white/10 border border-blue-accent text-white focus:outline-none focus:ring-2 focus:ring-neon-pink"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-white">
              Email <span className="text-neon-pink">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-white/10 border border-blue-accent text-white focus:outline-none focus:ring-2 focus:ring-neon-pink"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 text-white">
              Phone Number <span className="text-neon-pink">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 bg-white/10 border border-blue-accent text-white focus:outline-none focus:ring-2 focus:ring-neon-pink"
            />
          </div>

          <div>
            <label htmlFor="instagram" className="block mb-2 text-white">
              Instagram Username
            </label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="w-full p-2 bg-white/10 border border-blue-accent text-white focus:outline-none focus:ring-2 focus:ring-neon-pink"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-white">
              Message <span className="text-neon-pink">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 bg-white/10 border border-blue-accent text-white focus:outline-none focus:ring-2 focus:ring-neon-pink"
            />
          </div>

          <div className="text-center">
            <button type="submit" className="y2k-button text-xl py-3 px-8">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
