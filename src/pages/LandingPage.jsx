import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DishesSection from '@/components/DishesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

export const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToId = location.state?.scrollToId;
    if (scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <main>
        <Hero />
        <DishesSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  )
}
