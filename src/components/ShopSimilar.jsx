import React from 'react';
import { productsData } from '../pages/Products';

const ShopSimilar = ({ currentProductId }) => {
  // Get all products except current one and shuffle them
  const shuffledProducts = productsData
    .filter(product => product.id !== currentProductId)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4); // Show only 4 random products

  const handleProductClick = (productId) => {
    // Force a full page reload by changing window.location
    window.location.href = `/products/${productId}`;
  };

  return (
    <div className="mt-8 md:mt-16 mb-8 px-4 md:px-0">
      <h2 className="text-xl md:text-2xl font-bold text-rose-500 mb-4 md:mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {shuffledProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative pt-[100%]">
              <img 
                src={product.image} 
                alt={product.name}
                className="absolute top-0 left-0 w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <button 
                onClick={() => handleProductClick(product.id)}
                className="mt-4 block w-full bg-rose-500 text-white py-2 rounded-full hover:bg-rose-600 transition-colors duration-300 text-center"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopSimilar;
