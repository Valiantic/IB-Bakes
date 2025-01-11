import React from 'react'

import { useEffect } from 'react';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images
import packed_cakes from '../assets/images/packed_cakes.jpg';


const About = () => {

    // Animation on scroll
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration in milliseconds
      offset: 200,    // distance the element must be scrolled before it animates
    });
  }, []);



  return (
    <section>
  <div id="about" className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="max-w-3xl">
      <h2 className="text-3xl text-rose-500 font-bold sm:text-4xl">
      "Satisfy your eyes and delight your tummy with IB Bake’s—Oh, so yummy!"
      </h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt=""
          src={packed_cakes}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-gray-600">
          <p>
          IB Bake's, owned by a college Filipina homebaker who found herself into baking way back in 2022. Ib Bake's officially starts its journey into business in 2023 and shares her progress on social media that support her growing business. 
          </p>

          <p>
          Our goal is to deliver high-quality, freshly baked products crafted with love, meet every customer expectation, and ensure their satisfaction to build their loyalty with us by providing them with extraordinary service and relish. 
          </p>
        </article>
      </div>
    </div>
  </div>
</section>
  )
}

export default About
