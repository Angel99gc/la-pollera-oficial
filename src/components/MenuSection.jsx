import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { useLanguage } from '@/hooks/useLanguage';
import { menu } from '@/data/menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const MenuSection = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('');
  const [activeSubCategory, setActiveSubCategory] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    { key: 'Foods', label: t.menu.foods },
    { key: 'Drinks', label: t.menu.drinks },
    // { key: 'Ofertas', label: t.menu.drinks }// TODO: FALTA AGREGAR COMBOS

  ];

  const selectCategory = (category) => {
    setActiveCategory(category)
    setActiveSubCategory('')
  }

  return (
    <section id="menu" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4" dangerouslySetInnerHTML={{ __html: t.menu.title }}>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.menu.subtitle}
          </p>
        </div>

        <div
          data-aos="fade-up" data-aos-delay="100"
          className="flex flex-wrap justify-center mb-12 gap-4"
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => selectCategory(category.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 
                ${activeCategory === category.key
                  ? 'bg-gradient-to-r from-brand-orange to-brand-yellow text-white shadow-lg transform scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div
          data-aos="fade-up" data-aos-delay="100"
          className="flex flex-wrap justify-center mb-12 gap-4"
        >
          {

            !!activeCategory ? menu[activeCategory].map(({ name }) => (
              <button
                key={name[language]}
                onClick={() => setActiveSubCategory(name[language])}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 
                  ${activeSubCategory === name[language]
                    ? 'bg-gradient-to-r from-brand-orange to-brand-yellow text-white shadow-lg transform scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                  }`}
              >
                {name[language]}
              </button>
            ))
              : <></>

          }
        </div>
        <div
          className="menu-grid"
        >
          {

            !!activeSubCategory ?
              menu[activeCategory].find(product => product.name[language] === activeSubCategory).items?.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-up" data-aos-delay={index * 50}
                  className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden card-hover group border border-gray-700"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img alt={item.name[language]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <button
                      onClick={() => setSelectedItem(item)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                    >
                      <FaEye className="w-5 h-5 text-gray-700" />
                    </button>

                    <div className="absolute bottom-4 left-4 bg-brand-orange text-white px-3 py-1 rounded-full font-bold">
                      {item.price}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-white mb-2">
                      {item.name[language]}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description[language]}
                    </p>
                  </div>
                </div>
              ))
              : <></>
          }
        </div>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-2xl bg-gray-800 border-gray-700 text-white">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl font-bold text-brand-orange">
                  {selectedItem.name[language]}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img alt={selectedItem.name[language]} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-brand-orange">
                      {selectedItem.price}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Descripción</h4>
                    <p className="text-gray-400 leading-relaxed">
                      {selectedItem.description[language]}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">{t.common.ingredients}</h4>
                    <p className="text-gray-400">
                      {selectedItem.ingredients[language]}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MenuSection;