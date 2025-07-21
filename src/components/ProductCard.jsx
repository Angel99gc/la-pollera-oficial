import React from 'react'
import { useLanguage } from '../hooks/useLanguage';
import NoImageAvailable from './ui/NoImageAvailable';

//TODO: FALTA ACTUALIZAR DESCRIPCION DE MENU, PRECIOS EN DIFERENTES MONEDAS Y ACTUALIZAR IMAGENES
export const ProductCard = ({item, index, setSelectedItem}) => {
  const { language, t } = useLanguage();
  return (
    <button
      key={item.id}
      data-aos="fade-up" data-aos-delay={index * 50}
      className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden card-hover group border border-gray-700 cursor-pointer"
      onClick={() => setSelectedItem(item)}
    >
      <div className="relative h-64 overflow-hidden">
        {
          item.urlImage==='default'
            ?<NoImageAvailable/>
            :<img
              src={`menu/${item.urlImage}`}
              alt={item.name[language]}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
        // <img alt={item.name[language]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />

        }
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* <button
          onClick={() => setSelectedItem(item)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
        >
          <FaEye className="w-5 h-5 text-gray-700" />
        </button> */}

    
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-white mb-2">
          {item.name[language]}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {item.description[language]}
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex bg-brand-orange text-white px-3 py-1 rounded-full font-bold mx-auto">
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
    </button>
  )
}
