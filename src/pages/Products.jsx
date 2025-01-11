import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../App.css'
import '../index.css'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'
import SearchBar from '../components/SearchBar'

// Images
import butterflyCake from '../assets/images/butterfly_cake.jpg';
import whiteCake from '../assets/images/white_cake.jpg';
import otenCake from '../assets/images/oten_cake.png';
import bilatCake from '../assets/images/bilat_cake.jpg';
import loveCake from '../assets/images/love_cake.jpg';
import valentineCake from '../assets/images/valentine_cake.jpg';
import daisyMeadow from '../assets/images/daisy_meadow.png';
import pinkElegance from '../assets/images/pink_elegance_box.png';

// Move productsData outside the component and export it
export const productsData = [
  { id: 1, name: 'Romantic Ribbon', price: '₱299', category: 'bento', image: valentineCake, description: 'Celebrate love with this elegant cake! Topped with delicate white frosting swirls. this charming creation is a symbol of sweetness.' },
  { id: 2, name: 'Daisy Meadow', price: '₱599', category: 'combo', image: daisyMeadow, description: 'A whimsical green ombre cake adorned with daisies and pearl accents, evoking a serene spring meadow.' },
  { id: 3, name: 'Rosy Delight', price: '₱299', category: 'bento', image: loveCake, description: 'An elegant pink cake with a soft gradient, swirls, and golden pearl-like accents, exuding warmth and celebration.' },
  { id: 4, name: 'Pink Elegant Box', price: '₱599', category: 'combo', image: pinkElegance, description: 'A delightful set featuring a mini pink frosted cake accompanied by eight decadent cupcakes, this box exudes elegance and charm.' },
  { id: 5, name: 'Butterfly Cake', price: '₱299', category: 'bento', image: butterflyCake },
  { id: 6, name: 'White Cake', price: '₱599', category: 'combo', image: whiteCake },
  { id: 7, name: 'Oten Cake', price: '₱299', category: 'bento', image: otenCake },
  { id: 8, name: 'Bilat Cake', price: '₱599', category: 'combo', image: bilatCake },
];

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // Update filtered products when filter changes
  useEffect(() => {
    const filtered = productsData.filter(product => 
      activeFilter === 'all' || product.category === activeFilter
    );
    setFilteredProducts(filtered);
  }, [activeFilter]);

   // Animation on scroll
    useEffect(() => {
      AOS.init({
        duration: 2000, // animation duration in milliseconds
        offset: 200,    // distance the element must be scrolled before it animates
      });
    }, []);

  const handleSearch = (searchTerm) => {
    const filtered = productsData.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeFilter === 'all' || product.category === activeFilter)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-8">
            <SearchBar 
              placeholder="Search products..."
              onSearch={handleSearch}
            />
          </div>
          
          {/* Filter Buttons */}
          <div className="flex justify-end gap-4 mb-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === 'all' 
                ? 'bg-rose-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('bento')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === 'bento' 
                ? 'bg-rose-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Bento
            </button>
            <button
              onClick={() => setActiveFilter('combo')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === 'combo' 
                ? 'bg-rose-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Bento Combo
            </button>
          </div>

          {/* Product Grid */}
          <div data-aos="fade-up"  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts
              .filter(product => activeFilter === 'all' || product.category === activeFilter)
              .map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative pt-[100%]"> {/* Creates a square aspect ratio */}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="absolute top-0 left-0 w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-rose-500 font-medium mt-2">{product.price}</p>
                    <Link 
                      to={`/products/${product.id}`}
                      className="mt-4 block w-full bg-rose-500 text-white py-2 rounded-full hover:bg-rose-600 transition-colors duration-300 text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </main>
      
      <ScrollToTop />
    </div>
  )
}

export default Products
