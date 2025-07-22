
import { useLanguage } from '@/hooks/useLanguage';
import { dishesData } from '@/data/dishesData';
import { ProductCard } from './ProductCard';
import { DialogProduct } from './DialogProduct';
import { useState } from 'react';

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

      <DialogProduct selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

    </section>
  );
};

export default DishesSection;