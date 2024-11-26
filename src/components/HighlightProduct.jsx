import React from 'react';

import { useEffect } from 'react';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images
import butterflyCake from '../assets/images/butterfly_cake.jpg';
import loveCake from '../assets/images/love_cake.jpg';
import valentineCake from '../assets/images/valentine_cake.jpg';
import whiteCake from '../assets/images/white_cake.jpg';

import daisyMeadow from '../assets/images/daisy_meadow.png';
import pinkElegance from '../assets/images/pink_elegance_box.png';




// Passing props to ProductCard
const ProductCard = ({ image, price, title, description }) => (

 

  // Product Card
  <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="relative h-64 bg-gray-200">
      <img src={image} alt={title} className="h-full w-full object-cover" />
      
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      <button className="mt-4 w-full bg-rose-400 text-white font-semibold py-2 rounded-lg hover:bg-rose-600">
        <a href="https://www.facebook.com/profile.php?id=61551705886952">Check-Out</a>
      </button>
    </div>
  </div>

);

// Store the product information here 
const HiglightProduct = () => {
  const products = [
    { image: valentineCake,  title: 'Romantic Ribbon', description: 'Celebrate love with this elegant cake! Topped with delicate white frosting swirls. this charming creation is a symbol of sweetness.' },
    { image: daisyMeadow,  title: 'Daisy Meadow', description: 'A whimsical green ombre cake adorned with daisies and pearl accents, evoking a serene spring meadow.' },
    { image: butterflyCake,  title: 'Rosy Delight', description: 'An elegant pink cake with a soft gradient, swirls, and golden pearl-like accents, exuding warmth and celebration.' },
    { image: pinkElegance, title: 'Pink Elegance Box', description: 'A delightful set featuring a mini pink frosted cake accompanied by eight decadent cupcakes, this box exudes elegance and charm. ' },
  ];

  // Animation on scroll
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration in milliseconds
      offset: 200,    // distance the element must be scrolled before it animates
    });
  }, []);

  return (
    <div id="products" data-aos="fade-up" className="max-w-screen-lg mx-auto p-6">
      <h2 className="text-4xl font-montserrat font-bold mb-4 mt-7 text-rose-600">Checkout our Best Sellers!</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HiglightProduct;
