import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ placeholder = 'Search for cakes, pastries...', onSearch }) => {
  const handleChange = (e) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="relative flex items-center">
        <input
          type="text"
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 pl-10 pr-12 
            text-gray-700 bg-white border-2 border-rose-300 
            rounded-full outline-none focus:border-rose-500
            transition-all duration-300
            placeholder:text-gray-400
            focus:ring-2 focus:ring-rose-200"
        />
        <FaSearch className="absolute left-3 w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;
