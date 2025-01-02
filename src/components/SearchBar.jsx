import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ 
  initialValue = '', 
  placeholder = 'Search for cakes, pastries...', 
  onSearch,
  className = '' 
}) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`w-full max-w-lg mx-auto ${className}`}>
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 pl-10 pr-12 
            text-gray-700 bg-white border-2 border-rose-300 
            rounded-full outline-none focus:border-rose-500
            transition-all duration-300
            placeholder:text-gray-400
            focus:ring-2 focus:ring-rose-200"
        />
        <button
          type="submit"
          className="absolute right-0 h-full px-4 
            text-rose-500 hover:text-rose-600 
            transition-colors duration-300"
        >
          <FaSearch className="w-5 h-5" />
        </button>
        <FaSearch className="absolute left-3 w-5 h-5 text-gray-400" />
      </div>
    </form>
  );
};

export default SearchBar;
