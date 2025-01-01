import React from 'react'

import '../App.css'
import '../index.css'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'
import SearchBar from '../components/SearchBar'


const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="my-8 sm:my-12">
            <SearchBar />
      </div>
      <ScrollToTop />
    </div>
  )
}

export default Products
