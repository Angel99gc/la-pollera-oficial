import React from 'react'
import { useLanguage } from '../hooks/useLanguage';
import NoImageAvailable from './ui/NoImageAvailable';
import { FaEye } from 'react-icons/fa';


export const ProductCard2 = ({item, index, setSelectedItem}) => {
  const { language, t } = useLanguage();
  return (
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

    
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-white mb-2">
          {item.name[language]}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {item.description[language]}
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex bg-brand-orange text-white px-3 py-1 rounded-full font-bold">
            ₡{item.price}
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
  )
}

export const ProductCard = ({item}) => {
  const { language, t } = useLanguage();

  return (
  <div className="bg-gray-500 text-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">

    {
      item.urlImage==='default'
        ?<NoImageAvailable/>
        :<img
          src={item.urlImage}
          alt={item.name[language]}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
    }
    
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800">{item.name[language]}</h3>
      <p className="text-white mt-2">{item.description[language]}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-xl font-bold text-orange-600">${item.price}</span>
        {/* <button
          onClick={() => addToCart(item)}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
        >
          Add to Cart
        </button> */}
      </div>
    </div>
  </div>
)};