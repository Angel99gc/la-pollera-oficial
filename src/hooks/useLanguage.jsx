import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('restaurant-language');
      return saved || 'es';
    } catch (error) {
      return 'es';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('restaurant-language', language);
    } catch (error) {
      console.error("Failed to save language to localStorage", error);
    }
  }, [language]);

  const t = translations[language] || translations.es;



  // const getWord = (key, subKey) => t[key][subKey]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}