import logo from "../assets/icons/logo.png";

const Nav = () => {
  return (
    <header className="bg-white rounded-[14px] bg-opacity-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-9">
        <div className="flex h-18 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/?page=home">
              <span className="sr-only">Home</span>
              <img className="h-20" src={logo} alt="Logo" />
            </a>
            <a className="block" href="/?page=home">
              <span className="sr-only">Home</span>
              <h1 className="flex hidden md:block font-sans md:font-serif text-2xl">
                IB <span className="font-style: italic text-rose-600">Bakes</span>
              </h1>
            </a>
          </div>

          <div className="hidden md:block ml-auto">
            <nav>
              <ul className="flex items-center gap-20 text-xl">
                <li>
                  <a className="text-gray-700 font-sans md:font-serif transition hover:text-rose-500/75 hover:text-2xl" href="/?page=products"> Products </a>
                </li>
                <li>
                  <a className="text-gray-700 font-sans md:font-serif transition hover:text-rose-500/75 hover:text-2xl" href="#about"> About </a>
                </li>
                <li>
                  <a className="text-gray-700 font-sans md:font-serif transition hover:text-rose-500/75 hover:text-2xl" href="#contacts"> Contacts </a>
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
