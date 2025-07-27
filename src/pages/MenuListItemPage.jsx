import { useState } from "react";

import { menu as menuData } from '@/data/menu';
import { useLanguage } from "../hooks/useLanguage";
import { ProductCard } from "../components/ProductCard";
import { DialogProduct } from "../components/DialogProduct";
import ProductItem from "../components/ProductItem";


export default function MenuListItemPage() {
  const [activeCategory, setActiveCategory] = useState("foods");
  const [activeSubCategory, setActiveSubCategory] = useState("Rices");
  const [cartItems, setCartItems] = useState([]);
  const { language, t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState(null);


  const onSelectCategory = (category) => {
    setActiveSubCategory('')
    setActiveCategory(category)
  }

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };


  return (
    <>
      <main>
        <section id="menu" className="relative min-h-screen flex items-start justify-center overflow-hidden max-w-[1400px] mx-auto">

          {/* Body */}
          <div className="grid md:grid-cols-4 gap-8 px-4 py-20">

            {/* Filtro */}
            <div className="md:col-span-1">
              <div className="bg-gray-900 text-white rounded-lg shadow-md p-4">
                <h2 className="text-xl font-semibold mb-4">{t.nav.menu}</h2>
                <div className="space-y-4">
                  {Object.entries(menuData).map(([category, subcategories]) => (
                    <div key={category} className="space-y-2">
                      <button onClick={() => onSelectCategory(category)} className={`w-full text-left px-4 py-2 rounded-lg 
                      ${activeCategory === category ? "bg-gradient-to-r from-red-700 to-brand-orange text-white shadow-lg transform scale-105"
                          : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"}`}>
                        {t.menu[category]}
                      </button>
                      {activeCategory === category && (
                        <div className="ml-4 space-y-1">
                          {Object.keys(subcategories).map((subCategory) => (
                            <button key={subCategory} onClick={() => setActiveSubCategory(subCategory)} className={`w-full text-left px-4 py-1 rounded-lg text-sm ${activeSubCategory === subCategory
                              ? " bg-gradient-to-r from-brand-orange to-brand-yellow text-white shadow-lg transform scale-105"
                              : "text-gray-500 hover:bg-orange-50"}`}>
                              {menuData[category][subCategory].name[language]}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="md:col-span-3">
              <ul role="list" class=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                {
                  !activeSubCategory ?

                    Object.keys(menuData[activeCategory]).map(subCategoryKey => menuData[activeCategory][subCategoryKey].items.map((item, index) => {
                      return (
                        <ProductItem key={'ProductItem' + index} item={item} index={index} setSelectedItem={setSelectedItem} />
                      )
                    })
                    )

                    : menuData[activeCategory][activeSubCategory].items.map((item, index) => (
                      <ProductItem key={'ProductCard' + index} item={item} index={index} setSelectedItem={setSelectedItem} subCategory={activeSubCategory} />
                    ))
                }

              </ul>
            </div>
            {/* <div className="md:col-span-3">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                  !activeSubCategory ?
                    Object.keys(menuData[activeCategory]).map(subCategoryKey => menuData[activeCategory][subCategoryKey].items.map((item, index) => {
                      return <ProductItem key={'ProductCard' + index} item={item} index={index} setSelectedItem={setSelectedItem} subCategory={activeSubCategory} />
                    })
                    )

                    : menuData[activeCategory][activeSubCategory].items.map((item, index) => (
                      <ProductItem key={'ProductCard' + index} item={item} index={index} setSelectedItem={setSelectedItem} subCategory={activeSubCategory} />
                    ))

                }

              </div>

            </div> */}
          </div>

          {/* Producto Selecionado en un Dialog */}
          <DialogProduct selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

        </section>

      </main >

    </>
  );
};
