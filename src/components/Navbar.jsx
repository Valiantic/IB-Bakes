import { useState } from 'react';
import logo from "../assets/icons/logo.png";
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white rounded-[14px] bg-opacity-50">
      <div className="mx-auto max-w-screen-xl px-2 sm:px-4 lg:px-6">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          <div className="md:flex md:items-center md:gap-8">
            <Link className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <img className="h-12 sm:h-16 md:h-20" src={logo} alt="Logo" />
            </Link>
            <Link className="block" to="/">
              <span className="sr-only">Home</span>
              <h1 className="flex hidden md:block font-sans md:font-serif text-xl md:text-2xl">
                IB <span className="font-style: italic text-rose-600">Bakes</span>
              </h1>
            </Link>
          </div>

          <div className="hidden md:block ml-auto">
            <nav>
              <ul className="flex items-center gap-8 lg:gap-20 text-base lg:text-xl font-poppins">
                <li className="relative">
                  <Link className="text-gray-700 transition-colors hover:text-rose-500 
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                    after:bg-rose-500 after:transition-all after:duration-300 
                    hover:after:w-full" 
                    to="/products"> 
                    Products 
                  </Link>
                </li>
                <li className="relative">
                  <Link className="text-gray-700 transition-colors hover:text-rose-500 
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                    after:bg-rose-500 after:transition-all after:duration-300 
                    hover:after:w-full" 
                    to="/faqs"> 
                    FAQs
                  </Link>
                </li>
                <li className="relative">
                  <Link className="text-gray-700 transition-colors hover:text-rose-500 
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                    after:bg-rose-500 after:transition-all after:duration-300 
                    hover:after:w-full" 
                    to="#contacts"> 
                    Contacts 
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="block md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-black-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
          <nav className="mt-2 pb-4">
            <ul className="flex flex-col items-center gap-2 text-base sm:text-lg font-poppins">
              <li className="w-full text-center">
                <Link 
                  className="block w-full py-2 text-gray-700 hover:text-rose-500" 
                  to="/products"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li className="w-full text-center">
                <Link 
                  className="block w-full py-2 text-gray-700 hover:text-rose-500" 
                  to="/faqs"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQs
                </Link>
              </li>
              <li className="w-full text-center">
                <Link 
                  className="block w-full py-2 text-gray-700 hover:text-rose-500" 
                  to="#contacts"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
