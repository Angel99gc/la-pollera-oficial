
import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      menu: 'Menú',
      about: 'Nosotros',
      contact: 'Contacto',
      reservation: 'Reservar'
    },
    hero: {
      badge: 'El Mejor Sabor',
      title: 'La Pollera <span class="gradient-text-red">Bar & Restaurante</span>',
      subtitle: 'Donde cada bocado es una celebración',
      description: 'Descubre nuestro menú lleno de platos irresistibles, desde el pollo más crujiente hasta las carnes más jugosas.',
      cta: 'Ver Menú',
      reserve: 'Reservar Mesa'
    },
    menu: {
      title: 'Nuestro <span class="text-brand-red">Menú</span>',
      subtitle: 'Sabores que te encantarán, preparados con los mejores ingredientes.',
      appetizers: 'Bocas',
      mains: 'Platos Fuertes',
      desserts: 'Postres',
      drinks: 'Bebidas'
    },
    about: {
      title: 'Nuestra <span class="text-brand-red">Historia</span>',
      subtitle: 'Pasión por el sabor y la buena comida',
      description: 'Desde nuestros inicios, en La Pollera nos hemos dedicado a crear experiencias inolvidables, combinando ingredientes frescos y recetas auténticas en un ambiente familiar y moderno.',
      experience: 'Años de Experiencia',
      dishes: 'Platos Únicos',
      customers: 'Clientes Satisfechos'
    },
    contact: {
      title: 'Contáctanos',
      subtitle: 'Estamos aquí para servirte',
      address: 'Dirección',
      phone: 'Teléfono',
      email: 'Email',
      hours: 'Horarios',
      location: 'Nuestra Ubicación'
    },
    footer: {
      description: 'El auténtico sabor que une a todos.',
      quickLinks: 'Enlaces Rápidos',
      followUs: 'Síguenos',
      rights: 'Todos los derechos reservados'
    },
    common: {
      viewDetails: 'Ver Detalles',
      close: 'Cerrar',
      price: 'Precio',
      ingredients: 'Ingredientes',
      notImplemented: '🚧 Esta función aún no está implementada—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo mensaje! 🚀'
    }
  },
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      about: 'About',
      contact: 'Contact',
      reservation: 'Reservation'
    },
    hero: {
      badge: 'The Best Flavor',
      title: 'La Pollera <span class="gradient-text-red">Bar & Restaurant</span>',
      subtitle: 'Where every bite is a celebration',
      description: 'Discover our menu full of irresistible dishes, from the crispiest chicken to the juiciest meats.',
      cta: 'View Menu',
      reserve: 'Reserve Table'
    },
    menu: {
      title: 'Our <span class="text-brand-red">Menu</span>',
      subtitle: 'Flavors you will love, prepared with the best ingredients.',
      appetizers: 'Appetizers',
      mains: 'Main Courses',
      desserts: 'Desserts',
      drinks: 'Drinks'
    },
    about: {
      title: 'Our <span class="text-brand-red">Story</span>',
      subtitle: 'Passion for flavor and good food',
      description: 'Since our beginning, at La Pollera we have dedicated ourselves to creating unforgettable experiences, combining fresh ingredients and authentic recipes in a family and modern atmosphere.',
      experience: 'Years of Experience',
      dishes: 'Unique Dishes',
      customers: 'Satisfied Customers'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are here to serve you',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Hours',
      location: 'Our Location'
    },
    footer: {
      description: 'The authentic flavor that unites everyone.',
      quickLinks: 'Quick Links',
      followUs: 'Follow Us',
      rights: 'All rights reserved'
    },
    common: {
      viewDetails: 'View Details',
      close: 'Close',
      price: 'Price',
      ingredients: 'Ingredients',
      notImplemented: '🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      menu: 'Menu',
      about: 'À Propos',
      contact: 'Contact',
      reservation: 'Réservation'
    },
    hero: {
      badge: 'La Meilleure Saveur',
      title: 'La Pollera <span class="gradient-text-red">Bar & Restaurant</span>',
      subtitle: 'Où chaque bouchée est une célébration',
      description: 'Découvrez notre menu plein de plats irrésistibles, du poulet le plus croustillant aux viandes les plus juteuses.',
      cta: 'Voir le Menu',
      reserve: 'Réserver une Table'
    },
    menu: {
      title: 'Notre <span class="text-brand-red">Menu</span>',
      subtitle: 'Des saveurs que vous allez adorer, préparées avec les meilleurs ingrédients.',
      appetizers: 'Entrées',
      mains: 'Plats Principaux',
      desserts: 'Desserts',
      drinks: 'Boissons'
    },
    about: {
      title: 'Notre <span class="text-brand-red">Histoire</span>',
      subtitle: 'Passion pour la saveur et la bonne nourriture',
      description: 'Depuis nos débuts, à La Pollera, nous nous consacrons à la création d\'expériences inoubliables, en combinant des ingrédients frais et des recettes authentiques dans une atmosphère familiale et moderne.',
      experience: 'Années d\'Expérience',
      dishes: 'Plats Uniques',
      customers: 'Clients Satisfaits'
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Nous sommes là pour vous servir',
      address: 'Adresse',
      phone: 'Téléphone',
      email: 'Email',
      hours: 'Horaires',
      location: 'Notre Emplacement'
    },
    footer: {
      description: 'La saveur authentique qui unit tout le monde.',
      quickLinks: 'Liens Rapides',
      followUs: 'Suivez-nous',
      rights: 'Tous droits réservés'
    },
    common: {
      viewDetails: 'Voir les Détails',
      close: 'Fermer',
      price: 'Prix',
      ingredients: 'Ingrédients',
      notImplemented: '🚧 Cette fonctionnalité n\'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochain message ! 🚀'
    }
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('restaurant-language');
    return saved || 'es';
  });

  useEffect(() => {
    localStorage.setItem('restaurant-language', language);
  }, [language]);

  const t = translations[language] || translations.es;

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
