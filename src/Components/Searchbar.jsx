import React from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className="relative w-full max-w-xl">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full pl-10 pr-12 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl
            shadow-sm transition-all duration-200
            placeholder:text-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
            hover:border-gray-300"
        />
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <X 
              className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200" 
              aria-label="Clear search"
            />
          </button>
        )}
      </div>
      
      <div className="absolute inset-0 rounded-xl transition duration-300 pointer-events-none
        bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0
        group-focus-within:from-blue-500/5 group-focus-within:via-blue-500/5 group-focus-within:to-purple-500/5">
      </div>
    </div>
  );
};

export default SearchBar;