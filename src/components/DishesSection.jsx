import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { useLanguage } from '@/hooks/useLanguage';
import { dishesData } from '@/data/dishesData';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ProductCard } from './ProductCard';
import NoImageAvailable from './ui/NoImageAvailable';

const DishesSection = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('recommended');
  const [selectedItem, setSelectedItem] = useState(null);


  const categories = [
    { key: 'recommended', label: t.menu.recommended },
    { key: 'favorites', label: t.menu.favorites },
    { key: 'combos', label: t.menu.combos }
  ];

  const selectCategory = (category) => {
    setActiveCategory(category)
  }

  return (
    <section id="dishes" className="py-20 bg-gray-900 text-white">
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
          className="menu-grid"
        >
          {

            !!activeCategory ?
              dishesData[activeCategory].map((item, index) => (
                <ProductCard key={'ProductCard' + index} item={item} index={index} setSelectedItem={setSelectedItem} />
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
                  {
                    selectedItem.urlImage === 'default'
                      ? <NoImageAvailable />
                      : <img
                        alt={selectedItem.name[language]}
                        className="w-full h-full object-cover"
                        src={`menu/${selectedItem.urlImage}`}
                      />

                  }
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">{t.common.description}</h4>
                    <p className="text-gray-400 leading-relaxed">
                      {selectedItem.description[language]}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex bg-brand-orange text-white px-3 py-1 rounded-full font-bold mx-auto">
                      ₡{selectedItem.price}
                    </div>
                    {/* <button
                      onClick={() => addToCart(item)}
                      className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                    >
                      Add to Cart
                    </button> */}
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

export default DishesSection;