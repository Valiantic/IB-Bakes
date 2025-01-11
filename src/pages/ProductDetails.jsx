import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { productsData } from './Products'
import ErrorPage from './ErrorPage'

const ProductDetails = () => {
  const { id } = useParams()
  const product = productsData.find(p => p.id === parseInt(id))

  if (!product) {
    return <ErrorPage/>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 mt-4">
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
              <p className="text-2xl font-bold text-rose-500 mb-6">{product.price}</p>
              <button className="bg-rose-500 text-white py-3 px-6 rounded-lg hover:bg-rose-600 transition-colors">
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
