import React from 'react';
import Logo from '../assets/icons/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg mt-8 w-full font-[Poppins]">
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Logo and Description Section */}
          <div className="space-y-2 md:space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={Logo} 
                alt="IB bake's logo" 
                className="rounded-full h-10 sm:h-12 md:h-16"
              />
              <h2 className="text-lg md:text-xl font-bold">IB Bake's</h2>
            </div>
            <p className="text-gray-600 text-sm md:text-base">Fresh • Delicious • Sweet • Tasty</p>
            <p className="text-gray-600 text-sm md:text-base">We aim to bring joy to your table with delicious, beautifully crafted cakes. Baking isn't just a business—it's our passion.</p>
          </div>

          {/* Contacts Section */}
          <div className="space-y-2 md:space-y-4">
            <h3 className="text-base md:text-lg font-semibold">Contacts</h3>
            <div className="space-y-1 md:space-y-2">
              <p className="flex items-center space-x-2 text-sm md:text-base">
                <span className="text-gray-600">📞</span>
                <a href="tel:0970918914" className="text-gray-600 hover:text-gray-800">0970 918 9134</a>
              </p>
              <p className="flex items-center space-x-2 text-sm md:text-base">
                <span className="text-gray-600">📍</span>
                <span className="text-gray-600">537 Lower Moonlight, Gregoria De Jesus GMA, Cavite</span>
              </p>
              <p className="flex items-center space-x-2 text-sm md:text-base">
                <span className="text-gray-600">✉️</span>
                <a href="mailto:ibbakes1006@gmail.com" className="text-gray-600 hover:text-gray-800">ibbakes1006@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-2 md:space-y-4">
            <h3 className="text-base md:text-lg font-semibold">Links</h3>
            <div className="space-y-1 md:space-y-2">
              <p>
                <a href="https://www.facebook.com/profile.php?id=61551705886952" className="text-gray-600 hover:text-gray-800 text-sm md:text-base">Facebook</a>
              </p>
              <p>
                <a href="https://www.instagram.com/ibbakes074" className="text-gray-600 hover:text-gray-800 text-sm md:text-base">Instagram</a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 md:mt-8 pt-4 border-t text-center text-gray-600 text-xs md:text-sm">
          Baked to perfection, served with love. © IB Bakes 2023.
        </div>
      </div>
    </footer>
  );
};

export default Footer;