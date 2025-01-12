import React from 'react'
import contact_poster from '../assets/images/contact_poster.jpg'
import { Link } from 'react-router-dom';
import { useEffect } from 'react'

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contacts = () => {

    useEffect(() => {
        AOS.init({
          duration: 3000, // animation duration in milliseconds
          offset: 200,    // distance the element must be scrolled before it animates
        });
      }, []);
    

  return (
   
  
  <footer className="bg-white rounded-[14px] mt-auto">
    <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
          See More of our Delicious Treat!
        </h2>

        <p className="mx-auto mt-4 max-w-sm text-gray-500">
           𝙵𝚛𝚎𝚜𝚑 • 𝙳𝚎𝚕𝚒𝚌𝚒𝚘𝚞𝚜 • 𝚂𝚠𝚎𝚎𝚝 • 𝚃𝚊𝚜𝚝𝚢
        </p>

        <Link
          to="/products"
          className="mt-8 inline-block rounded-full border border-pink-600 px-12 py-3 text-sm font-medium text-rose-600 hover:bg-rose-600 hover:text-white focus:outline-none focus:ring active:bg-rose-500"
        >
          See Products
        </Link>
      </div>

      
    </div>
  </footer>


  )
}

export default Contacts
