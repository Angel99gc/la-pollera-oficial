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
    if (sectionId === 'menu' || sectionId === 'menu2' || sectionId === 'menu3') {
      navigate(`/${sectionId}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(`/`, { state: { scrollToId: sectionId } });
    }
    setIsMenuOpen(false)
  };



  const navItems = [
    { key: 'home', label: t.nav.home, id: 'hero' },
    { key: 'dishes', label: t.about.dishes, id: 'dishes' },
    { key: 'about', label: t.nav.about, id: 'about' },
    { key: 'contact', label: t.nav.contact, id: 'contact' },
    {
      key: 'menu', label: t.nav.menu, id: 'menu', subItems: [
        { key: 'menu', label: 'Menu 1', id: 'menu' },
        { key: 'menu2', label: 'Menu 2', id: 'menu2' }
        // { key: 'menu3', label: 'Menu 3', id: 'menu3' },
      ]
    }
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
              item.subItems ? (
                // Item con Listado de subitems
                <div className="relative group">
                  <button
                    className={`flex gap-1 items-center font-medium transition-colors duration-300 text-gray-200 hover:text-brand-orange`}
                  >
                    <span className="font-medium">
                      {item.label}
                    </span>
                    <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="-mr-1 size-5 text-gray-400">
                      <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                    </svg>
                  </button>
                  <div className="absolute top-full right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem.key}
                        onClick={() => navigateToSection(subItem.id)}
                        className={`flex w-full justify-center font-medium transition-colors duration-300 text-gray-200 hover:text-brand-orange hover:bg-gray-100`}

                      >
                        <span className="font-medium">{subItem.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )
                // Item sin subitems
                : <button
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
              className="flex items-center space-x-2 bg-gradient-to-r from-green-700 to-green-300 text-white px-6 py-2 rounded-full font-medium hover:from-green-200 hover:to-green-700 transition-all duration-300 shadow-lg transform hover:scale-105"
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
                item.subItems ? (
                  <>
                    <button
                      key={item.key}
                      className="block w-full text-left px-6 py-3 text-gray-200 hover:bg-gray-700 transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                    <div className="ml-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <button key={subItem.key} onClick={() => navigateToSection(subItem.id)} className={`w-full text-left px-4 py-1 rounded-lg text-sm text-gray-500 hover:bg-orange-50
                     
                          `}>
                          {/* ${activeSubCategory === subItem.id
                          ? " bg-gradient-to-r from-brand-orange to-brand-yellow text-white shadow-lg transform scale-105"
                          : "text-gray-500 hover:bg-orange-50"} */}
                          {subItem.label}                        </button>
                      ))}
                    </div>
                  </>
                )
                  : <button
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
                className="flex w-full text-left px-6 py-3 text-green-700 font-medium hover:bg-gray-700 transition-colors duration-200 gap-2 items-center"
              >
                <FaPhone className="w-4 h-4" />
                {t.nav.reservation}

              </a>
            </div>
          </div>
        )}
      </div>
    </header >
  );
};

export default Header;