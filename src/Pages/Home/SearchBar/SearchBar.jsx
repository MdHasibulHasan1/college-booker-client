// SearchBar.js

import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form className="search-bar mb-4" onSubmit={handleSearchSubmit}>
      <input
        className="border border-gray-300 rounded py-2 px-4 mr-2"
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for a college name"
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
