import logo from "../assets/icons/logo.png";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="bg-white rounded-[14px] bg-opacity-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-9">
        <div className="flex h-18 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <img className="h-20" src={logo} alt="Logo" />
            </Link>
            <Link className="block" to="/">
              <span className="sr-only">Home</span>
              <h1 className="flex hidden md:block font-sans md:font-serif text-2xl">
                IB <span className="font-style: italic text-rose-600">Bakes</span>
              </h1>
            </Link>
          </div>

          <div className="hidden md:block ml-auto">
            <nav>
              <ul className="flex items-center gap-20 text-xl font-poppins">
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
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-black-600/75">
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
      </div>
    </header>
  );
};

export default Nav;
