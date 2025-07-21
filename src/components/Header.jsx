import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { useLanguage } from '@/hooks/useLanguage';
import { useToast } from '@/components/ui/use-toast';
import LanguageSelector from '@/components/LanguageSelector';
import { useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  // const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (sectionId) => {
    if (sectionId == 'menu') {
      navigate('/la-pollera-oficial/menu');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(`/la-pollera-oficial`, { state: { scrollToId: sectionId } });
    }
    setIsMenuOpen(false)
  };



  const navItems = [
    { key: 'home', label: t.nav.home, id: 'hero' },
    { key: 'dishes', label: t.about.dishes, id: 'dishes' },
    { key: 'about', label: t.nav.about, id: 'about' },
    { key: 'contact', label: t.nav.contact, id: 'contact' },
    { key: 'menu', label: t.nav.menu, id: 'menu' }
  ];

  // const categoryItems = [
  //   { key: 'home', label: t.nav.home, id: 'hero' },
  //   { key: 'foods', label: t.nav.foods, id: 'food' },
  //   { key: 'drinks', label: t.nav.drinks, id: 'drinks' },
  //   { key: 'combos', label: t.nav.menu, id: 'combos' },
  // ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all  duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between h-20 ">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            {/* Cambiar a logo oficial y hacer redondo. */}
            <img src="Logo.png" alt="La Pollera Logo" className="w-14 h-14" />
            <span className={`font-display text-xl font-bold text-white`}>
              La Pollera
            </span>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => navigateToSection(item.id)}
                className={`font-medium transition-colors duration-300 text-gray-200 hover:text-brand-orange`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <a
              target='_blank'
              href={'tel:+50624780213'}
              className="flex items-center space-x-2 bg-gradient-to-r from-brand-orange to-brand-yellow text-white px-6 py-2 rounded-full font-medium hover:from-brand-yellow hover:to-brand-orange transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              <FaPhone className="w-4 h-4" />
              <span>{t.nav.reservation}</span>

            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 text-white hover:bg-white/10`}
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden overflow-hidden bg-gray-800 rounded-lg shadow-xl mt-2 animate-accordion-down">
            <div className="py-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => navigateToSection(item.id)}
                  className="block w-full text-left px-6 py-3 text-gray-200 hover:bg-gray-700 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <a
                target='_blank'
                href={'tel:+50624780213'}
                className="block w-full text-left px-6 py-3 text-brand-orange font-medium hover:bg-gray-700 transition-colors duration-200"
              >
                {t.nav.reservation}

              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;