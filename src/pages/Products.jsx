import React, { useState, useEffect } from 'react'

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
import loveCake from '../assets/images/love_cake.jpg';
import valentineCake from '../assets/images/valentine_cake.jpg';
import whiteCake from '../assets/images/white_cake.jpg';
import daisyMeadow from '../assets/images/daisy_meadow.png';
import pinkElegance from '../assets/images/pink_elegance_box.png';
import marbleBlue from '../assets/images/marble_blue.jpg';
import redRose from '../assets/images/red_rose.jpg';


const Products = () => {
  // Define products array first
  const productsData = [
    { id: 1, name: 'Romantic Ribbon',  category: 'bento', image: valentineCake },
    { id: 2, name: 'Daisy Meadow',  category: 'combo', image: daisyMeadow },
    { id: 3, name: 'Rosy Delight', category: 'bento', image: loveCake },
    { id: 4, name: 'Pink Elegant Box', category: 'combo', image: pinkElegance },
    { id: 5, name: 'White Deluxe', category: 'combo', image: whiteCake },
    { id: 6, name: 'Butterfly Beauty', category: 'combo', image: butterflyCake },
    { id: 7, name: 'Marble Blue', category: 'bento', image: marbleBlue },
    { id: 8, name: 'Red Rose', category: 'bento', image: redRose },
    // Add more products here...
  ];

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
                  <div className="relative pt-[100%]"> 
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="absolute top-0 left-0 w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    <button className="mt-4 w-full bg-rose-500 text-white py-2 rounded-full hover:bg-rose-600 transition-colors duration-300">
                      Buy
                    </button>
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
