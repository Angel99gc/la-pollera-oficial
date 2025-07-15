import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/hooks/useLanguage';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen scroll-smooth bg-gray-900 font-sans">
        <Helmet>
          <title>La Pollera Bar y Restaurante | El Mejor Sabor</title>
          <meta
            name="description"
            content="Disfruta de la mejor comida y un ambiente increíble en La Pollera Bar y Restaurante. Platos deliciosos, bebidas refrescantes y la mejor atención."
          />
          <meta name="keywords" content="restaurante, bar, la pollera, comida, pollo, carnes, bebidas" />
          <meta property="og:title" content="La Pollera Bar y Restaurante" />
          <meta property="og:description" content="El mejor sabor y ambiente en un solo lugar." />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://lapollera.com" />
        </Helmet>

        <Header />
        
        <main>
          <Hero />
          <MenuSection />
          <AboutSection />
          <ContactSection />
        </main>
        
        <Footer />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

export default App;