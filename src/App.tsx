import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BenefitsSection from './components/BenefitsSection';
import BillingTableSection from './components/BillingTableSection';
import QuoterSection from './components/QuoterSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="App font-sans antialiased">
      <Navbar />
      <Hero />
      <BenefitsSection />
      <BillingTableSection />
      <QuoterSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
