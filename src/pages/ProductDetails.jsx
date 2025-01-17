import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { productsData } from './Products'
import ErrorPage from './ErrorPage'
import ShopSimilar from '../components/ShopSimilar'
import Swal from 'sweetalert2'

const cakeBases = {
  chiffon: {
    CHOCOLATE: {
      "4\" x 4\"": 240,
      "7\" x 3\"": 550,
      "7\" x 5\"": 849,
      "7\" x 7\"": 1299
    },
    VANILLA: {
      "4\" x 4\"": 230,
      "7\" x 3\"": 550,
      "7\" x 5\"": 849,
      "7\" x 7\"": 1299
    },
    MOCHA: {
      "4\" x 4\"": 240,
      "7\" x 3\"": 550,
      "7\" x 5\"": 849,
      "7\" x 7\"": 1299
    },
    UBE: {
      "4\" x 4\"": 240,
      "7\" x 3\"": 499,
      "7\" x 5\"": 799,
      "7\" x 7\"": 1299
    }
  },
  moist: {
    CHOCOLATE: {
      "4\" x 4\"": 250,
      "7\" x 3\"": 600,
      "7\" x 5\"": 899,
      "7\" x 7\"": 1499
    }
  }
};

const ProductDetails = () => {
  const { id } = useParams()
  const product = productsData.find(p => p.id === parseInt(id))
  const [selectedBase, setSelectedBase] = useState('');
  const [selectedFlavor, setSelectedFlavor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  if (!product) {
    return <ErrorPage/>
  }

  const getPrice = () => {
    if (selectedBase && selectedFlavor && selectedSize) {
      return cakeBases[selectedBase][selectedFlavor][selectedSize];
    }
    return null;
  }

  const handleBuyNow = () => {
    Swal.fire({
      title: 'Order Details',
      html: `
        <div class="text-left">
          <p class="mb-2"><strong>Product:</strong> ${product.name}</p>
          <p class="mb-2"><strong>Base:</strong> ${selectedBase}</p>
          <p class="mb-2"><strong>Flavor:</strong> ${selectedFlavor}</p>
          <p class="mb-2"><strong>Size:</strong> ${selectedSize}</p>
          <p class="mb-2"><strong>Price:</strong> ₱${getPrice().toLocaleString()}</p>
        </div>
      `,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Proceed to Order',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#f43f5e',
      cancelButtonColor: '#666',
      customClass: {
        container: 'sweet-alert-container',
        popup: 'sweet-alert-popup',
        title: 'sweet-alert-title',
        htmlContainer: 'sweet-alert-content',
        confirmButton: 'sweet-alert-confirm',
        cancelButton: 'sweet-alert-cancel'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Order Placed!',
          text: 'Thank you for your order. We will contact you shortly.',
          icon: 'success',
          confirmButtonColor: '#f43f5e'
        });
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-[Poppins]">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-4 md:py-8 mt-2 md:mt-4">
        {/* Breadcrumbs */}
        <nav className="flex mb-4 md:mb-8 text-gray-600 text-sm md:text-base overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-rose-500">Home</Link>
          <span className="mx-2">&gt;</span>
          <Link to="/products" className="hover:text-rose-500">Products</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-rose-500">{product.name}</span>
        </nav>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {/* Product Image */}
            <div className="w-full md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 flex flex-col">
              <h1 className="text-2xl md:text-3xl text-left font-bold text-rose-500 mb-2 md:mb-4">
                {product.name}
              </h1>
              <p className="text-black-600 text-left text-sm md:text-base mb-4 md:mb-6">
                {product.description}
              </p>

              {/* Selection Dropdowns */}
              <div className="space-y-3 md:space-y-4">
                {/* Base Selection */}
                <div className="mb-4">
                  <label className="text-sm text-left font-medium text-gray-700 mb-1 block">
                    Select Base
                  </label>
                  <select 
                    value={selectedBase}
                    onChange={(e) => {
                      setSelectedBase(e.target.value);
                      setSelectedFlavor('');
                      setSelectedSize('');
                    }}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                  >
                    <option value="">Choose a base</option>
                    <option value="chiffon">Chiffon Base</option>
                    <option value="moist">Moist Base</option>
                  </select>
                </div>

                {/* Flavor Selection */}
                {selectedBase && (
                  <div className="mb-4">
                    <label className="text-sm text-left font-medium text-gray-700 mb-1 block">
                      Select Flavor
                    </label>
                    <select 
                      value={selectedFlavor}
                      onChange={(e) => {
                        setSelectedFlavor(e.target.value);
                        setSelectedSize('');
                      }}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    >
                      <option value="">Choose a flavor</option>
                      {Object.keys(cakeBases[selectedBase]).map(flavor => (
                        <option key={flavor} value={flavor}>{flavor}</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Size Selection */}
                {selectedFlavor && (
                  <div className="mb-6">
                    <label className="text-sm text-left font-medium text-gray-700 mb-1 block">
                      Select Size
                    </label>
                    <select 
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    >
                      <option value="">Choose a size</option>
                      {Object.keys(cakeBases[selectedBase][selectedFlavor]).map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Price */}
              {getPrice() && (
                <p className="text-xl md:text-2xl font-bold text-rose-500 my-4 md:mb-6">
                  ₱{getPrice().toLocaleString()}
                </p>
              )}

              {/* Buy Button */}
              <button 
                className={`w-full md:w-auto bg-rose-500 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-rose-600 transition-colors ${
                  !getPrice() ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={!getPrice()}
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        
        {/* Shop Similar section */}
        <ShopSimilar currentProductId={parseInt(id)} />
      </main>
    </div>
  );
};

export default ProductDetails;
