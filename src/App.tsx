// src/App.tsx

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BoostSales from './components/BoostSales';
import WebsiteImpactChart from './components/WebsiteImpactChart';
import PricingTable from './components/PricingTable';
import ConversionSection from './components/ConversionSection';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './y2k-styles.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen full-page-gradient">
      <Header />
      <Hero />
      <BoostSales />
      <WebsiteImpactChart />
      <PricingTable />
      <ConversionSection />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
