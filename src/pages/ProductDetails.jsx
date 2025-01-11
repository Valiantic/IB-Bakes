import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { productsData } from './Products'
import ErrorPage from './ErrorPage'

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

  return (
    <div className="min-h-screen flex flex-col font-[Poppins]">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 mt-4">
        {/* Add Breadcrumbs */}
        <nav className="flex mb-8 text-gray-600">
          <Link to="/" className="hover:text-rose-500">Home</Link>
          <span className="mx-2">&gt;</span>
          <Link to="/products" className="hover:text-rose-500">Products</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-rose-500">{product.name}</span>
        </nav>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col">
              <h1 className="text-3xl text-left font-bold text-rose-500 mb-4">{product.name}</h1>
              <p className="text-black-600 text-left mb-6">{product.description}</p>

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

              {/* Display Price */}
              {getPrice() && (
                <p className="text-2xl font-bold text-rose-500 mb-6">
                  ₱{getPrice().toLocaleString()}
                </p>
              )}

              <button 
                className={`bg-rose-500 text-white py-3 px-6 rounded-lg hover:bg-rose-600 transition-colors ${
                  !getPrice() ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={!getPrice()}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductDetails
