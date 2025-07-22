export const dishesData = {
  recommended: [
    {
      id: 1,
      name: { es: 'Arroz con Pollo', en: 'Chicken Rice', fr: 'Riz au Poulet' },
      description: { es: 'Clásico arroz con pollo, acompañado de papas fritas y ensalada.', en: 'Classic chicken rice, served with french fries and salad.', fr: 'Riz au poulet classique, servi avec frites et salade.' },
      price: '3800',
      image: 'A hearty plate of yellow rice with shredded chicken and vegetables',
      urlImage: 'default',
      ingredients: { es: 'Arroz, pollo, vegetales, papas, ensalada', en: 'Rice, chicken, vegetables, potatoes, salad', fr: 'Riz, poulet, légumes, pommes de terre, salade' }
    },
    {
      id: 2,
      name: { es: 'Churrasco', en: 'Churrasco Steak', fr: 'Steak Churrasco' },
      description: { es: 'Jugoso corte de churrasco a la parrilla, con dos acompañamientos.', en: 'Juicy grilled churrasco steak, with two side dishes.', fr: 'Steak de churrasco juteux grillé, avec deux accompagnements.' },
      price: '7000',
      image: 'A thick, juicy grilled churrasco steak with grill marks',
      urlImage: 'default',
      ingredients: { es: 'Churrasco, sal, pimienta, acompañamientos a elegir', en: 'Churrasco, salt, pepper, choice of side dishes', fr: 'Churrasco, sel, poivre, choix d\'accompagnements' }
    },
    {
      id: 3,
      name: { es: 'Corvina a la Plancha', en: 'Grilled Corvina', fr: 'Corvina Grillée' },
      description: { es: 'Filete de corvina fresca a la plancha con un toque de ajo y limón.', en: 'Fresh corvina fillet grilled with a touch of garlic and lemon.', fr: 'Filet de corvina frais grillé avec une touche d\'ail et de citron.' },
      price: '4900',
      image: 'A perfectly grilled white fish fillet with lemon slices',
      urlImage: 'default',
      ingredients: { es: 'Filete de corvina, ajo, limón, aceite de oliva', en: 'Corvina fillet, garlic, lemon, olive oil', fr: 'Filet de corvina, ail, citron, huile d\'olive' }
    },
    {
      id: 4,
      name: { es: 'Pollo a la Plancha', en: 'Grilled Chicken', fr: 'Poulet Grillé' },
      description: { es: 'Pechuga de pollo a la plancha, sazonada con finas hierbas.', en: 'Grilled chicken breast, seasoned with fine herbs.', fr: 'Poitrine de poulet grillée, assaisonnée aux fines herbes.' },
      price: '4500',
      image: 'A golden-brown grilled chicken breast, sliced and fanned out',
      urlImage: 'default',
      ingredients: { es: 'Pechuga de pollo, hierbas, sal, pimienta', en: 'Chicken breast, herbs, salt, pepper', fr: 'Poitrine de poulet, herbes, sel, poivre' }
    }
  ],
  favorites: [
    {
      id: 7,
      name: { es: 'Chifrijo', en: 'Chifrijo', fr: 'Chifrijo' },
      description: { es: 'Deliciosa combinación de chicharrones, frijoles, arroz y pico de gallo.', en: 'Delicious combination of pork rinds, beans, rice, and pico de gallo.', fr: 'Délicieuse combinaison de couenne de porc, haricots, riz et pico de gallo.' },
      price: '3200',
      image: 'A bowl of chifrijo with layers of beans, rice, and pork, topped with pico de gallo',
      urlImage: 'default',
      ingredients: { es: 'Chicharrón, frijoles, arroz, pico de gallo, tortillas', en: 'Pork rinds, beans, rice, pico de gallo, tortilla chips', fr: 'Couenne de porc, haricots, riz, pico de gallo, chips de tortilla' }
    },
    {
      id: 8,
      name: { es: 'Alitas', en: 'Chicken Wings', fr: 'Ailes de Poulet' },
      description: { es: 'Alitas de pollo crujientes bañadas en tu salsa preferida.', en: 'Crispy chicken wings tossed in your favorite sauce.', fr: 'Ailes de poulet croustillantes nappées de votre sauce préférée.' },
      price: '4500',
      image: 'A basket of glossy BBQ chicken wings with a side of ranch dressing',
      urlImage: 'default',
      ingredients: { es: 'Alitas de pollo, salsa BBQ o picante, aderezo', en: 'Chicken wings, BBQ or hot sauce, dressing', fr: 'Ailes de poulet, sauce BBQ ou piquante, vinaigrette' }
    }
  ],
  combos: [
    {
      id: 100,
      "name": {
        "es": "Hamburguesa + Refresco",
        "en": "Burger + Soft Drink",
        "fr": "Hamburger + Boisson Gazeuse"
      },
      "description": {
        "es": "Una deliciosa hamburguesa acompañada de un refresco frío. ¡El combo ideal para saciar tu hambre rápidamente!",
        "en": "A delicious burger served with a cold soft drink. The perfect combo to satisfy your hunger fast!",
        "fr": "Un délicieux hamburger accompagné d'une boisson gazeuse bien fraîche. Le combo parfait pour calmer votre faim rapidement !"
      },
      "price": 3200,
      "image": "",
      "urlImage": "default"
    },
    {
      id: 110,
      "name": {
        "es": "Casado + Tropical",
        "en": "Typical Food + Tropical",
        "fr": "Plat Typique + Tropical"
      },
      "description": {
        "es": "Disfruta de un casado típico costarricense con tu bebida Tropical favorita. Ideal para un almuerzo completo y sabroso.",
        "en": "Enjoy a traditional Costa Rican casado with your favorite Tropical drink. Perfect for a complete and tasty lunch.",
        "fr": "Savourez un casado traditionnel costaricien avec votre boisson Tropical préférée. Parfait pour un déjeuner complet et savoureux."
      },
      "price": 3800,
      "image": "",
      "urlImage": "default"
    },
    {
      "id": 120,
      "name": {
        "es": "6x5 Cervezas Nacionales",
        "en": "6x5 National Beers",
        "fr": "6x5 Bières Nationales"
      },
      "description": {
        "es": "Llévate 6 cervezas nacionales por el precio de 5. ¡Perfecto para compartir con amigos!",
        "en": "Get 6 national beers for the price of 5. Perfect for sharing with friends!",
        "fr": "Prenez 6 bières nationales pour le prix de 5. Idéal pour partager entre amis !"
      },
      "price": 6750,
      "image": "",
      "urlImage": "default"
    }
  ]
};