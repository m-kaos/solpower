import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BenefitsSection from './components/BenefitsSection';
import BillingTableSection from './components/BillingTableSection';
import QuoterSection from './components/QuoterSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://solpower.com.mx/",
      "name": "SOLPOWER",
      "alternateName": "SOLPOWER Monterrey",
      "description": "Instalación de paneles solares en Monterrey. Reduce tu factura de CFE hasta 95% con energía solar limpia y renovable.",
      "url": "https://solpower.com.mx/",
      "logo": "https://solpower.com.mx/logo.png",
      "image": "https://solpower.com.mx/og-image.jpg",
      "telephone": "+52-81-3681-6486",
      "email": "contacto@solpower.com.mx",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "",
        "addressLocality": "Monterrey",
        "addressRegion": "Nuevo León",
        "postalCode": "",
        "addressCountry": "MX"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.6866",
        "longitude": "-100.3161"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "priceRange": "$$$",
      "areaServed": {
        "@type": "State",
        "name": "Nuevo León"
      },
      "slogan": "Reduce tu factura de CFE hasta en un 95%",
      "parentOrganization": {
        "@type": "Organization",
        "name": "Doctor Manzana Monterrey",
        "url": "https://doctormanzana.com.mx/"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127"
      },
      "sameAs": [
        "https://www.facebook.com/solpower",
        "https://www.instagram.com/solpower"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
