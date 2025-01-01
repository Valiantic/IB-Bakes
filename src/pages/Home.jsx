import React from 'react'

import '../App.css'
import '../index.css'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import HightlightProduct from '../components/HighlightProduct'
import About from '../components/About'
import Contacts from '../components/Contacts'
import ScrollToTop from '../components/ScrollToTop'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel />
          <div className="my-8 sm:my-12">
            <HightlightProduct />
          </div>
          <div className="my-8 sm:my-12">
            <About />
          </div>
          <div className="my-8 sm:my-12">
            <Contacts />
          </div>
        </div>
      </main>
      <ScrollToTop />
    </div>
  )
}

export default Home
