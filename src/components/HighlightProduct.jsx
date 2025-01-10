import React from 'react';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../pages/Products';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images
import butterflyCake from '../assets/images/butterfly_cake.jpg';
import valentineCake from '../assets/images/valentine_cake.jpg';
import daisyMeadow from '../assets/images/daisy_meadow.png';
import pinkElegance from '../assets/images/pink_elegance_box.png';

// Passing props to ProductCard
const ProductCard = ({ image, price, title, description }) => (
  <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
    <div className="relative h-64 bg-gray-200 flex-shrink-0">
      <img src={image} alt={title} className="h-full w-full object-cover" />
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500 flex-grow">{description}</p>
      <Link to="/products" className="mt-4">
        <button className="w-full bg-rose-400 text-white font-semibold py-2 rounded-lg hover:bg-rose-600 transition-colors">
          Check-Out
        </button>
      </Link>
    </div>
  </div>
);

// Store the product information here 
const HiglightProduct = () => {
  // Replace the hardcoded products with filtered productsData
  const highlightedProducts = productsData.slice(0, 4); // Get first 4 products

  // Animation on scroll
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration in milliseconds
      offset: 200,    // distance the element must be scrolled before it animates
    });
  }, []);

  return (
    <div id="products" data-aos="fade-up" className="max-w-screen-xl mx-auto p-6">
      <h2 className="text-4xl font-montserrat font-bold mb-8 mt-7 text-rose-600">Checkout our Best Sellers!</h2>
      <div className="grid gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-stretch">
        {highlightedProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default HiglightProduct;
