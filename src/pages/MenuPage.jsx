import React, { useState } from "react";
import { FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Header from '@/components/Header';
import { menu as menuData } from '@/data/menu';
import { useLanguage } from "../hooks/useLanguage";
import { ProductCard } from "../components/ProductCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import NoImageAvailable from "../components/ui/NoImageAvailable";
import { DialogProduct } from "../components/DialogProduct";


const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("foods");
  const [activeSubCategory, setActiveSubCategory] = useState("Rices");
  const [cartItems, setCartItems] = useState([]);
  const { language, t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState(null);

  // const menuData = {
  //   foods: {
  //     appetizers: [
  //       {
  //         id: 1,
  //         name: "Bruschetta",
  //         description: "Fresh tomatoes, garlic, basil on toasted bread",
  //         price: 8.99,
  //         image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f",
  //         dietary: ["vegetarian"]
  //       },
  //       {
  //         id: 2,
  //         name: "Calamari",
  //         description: "Crispy fried squid with marinara sauce",
  //         price: 12.99,
  //         image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
  //         dietary: ["seafood"]
  //       }
  //     ],
  //     mainCourses: [
  //       {
  //         id: 3,
  //         name: "Ribeye Steak",
  //         description: "12oz premium cut with roasted vegetables",
  //         price: 32.99,
  //         image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef",
  //         dietary: ["gluten-free"]
  //       }
  //     ]
  //   },
  //   drinks: {
  //     softDrinks: [
  //       {
  //         id: 4,
  //         name: "Fresh Lemonade",
  //         description: "House-made with real lemons",
  //         price: 4.99,
  //         image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859",
  //         dietary: ["vegan"]
  //       }
  //     ]
  //   }
  // };

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
        <section id="menu" className="relative min-h-screen flex items-start justify-center overflow-hidden">
          {/* <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
                  alt="Restaurant Logo"
                  className="h-12 w-12 rounded-full"
                />
                <h1 className="text-2xl font-bold text-gray-800">Gourmet Haven</h1>
              </div>

              <div className="hidden md:flex items-center space-x-6">
                <button
                  onClick={() => setLanguage(language === "en" ? "es" : "en")}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {language === "en" ? "ES" : "EN"}
                </button>
                <button className="relative">
                  <FiShoppingCart className="h-6 w-6 text-gray-600" />
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </span>
                </button>
              </div>

              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <FiX className="h-6 w-6 text-gray-600" />
                ) : (
                  <FiMenu className="h-6 w-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </header> */}

          <div className="grid md:grid-cols-4 gap-8 px-4 py-20">
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

            <div className="md:col-span-3">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                  !activeSubCategory ?
                    Object.keys(menuData[activeCategory]).map(subCategoryKey => menuData[activeCategory][subCategoryKey].items.map((item, index) => {
                      return <ProductCard key={'ProductCard' + index} item={item} index={index} setSelectedItem={setSelectedItem} subCategory={activeSubCategory} />
                    })
                    )

                    : menuData[activeCategory][activeSubCategory].items.map((item, index) => (
                      <ProductCard key={'ProductCard' + index} item={item} index={index} setSelectedItem={setSelectedItem} subCategory={activeSubCategory} />
                    ))

                }

              </div>

            </div>
          </div>

          {/* <footer className="bg-gray-800 text-white mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p>123 Gourmet Street</p>
                <p>Foodie City, FC 12345</p>
                <p>Phone: (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Hours</h3>
                <p>Mon-Fri: 11:00 AM - 10:00 PM</p>
                <p>Sat-Sun: 10:00 AM - 11:00 PM</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <FaFacebook className="h-6 w-6" />
                  <FaTwitter className="h-6 w-6" />
                  <FaInstagram className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-l-lg w-full text-gray-800"
                  />
                  <button className="bg-orange-500 px-4 py-2 rounded-r-lg hover:bg-orange-600 transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-400">
              <p>© 2024 Gourmet Haven. All rights reserved.</p>
            </div>
          </div>
        </footer> */}
          <DialogProduct selectedItem={selectedItem} setSelectedItem={setSelectedItem} />


        </section>

      </main>

    </>
  );
};

export default MenuPage;