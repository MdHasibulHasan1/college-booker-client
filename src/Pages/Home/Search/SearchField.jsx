import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchField = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    if (!e.target.value) {
      SweetAlert.fire({
        icon: "error",
        title: "Empty Search Query",
        text: "Please enter a search query before submitting.",
      });
    } else {
      setSearchQuery(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Search query:", searchQuery);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex md:w-1/2 my-6 w-full mx-auto items-center"
    >
      <input
        type="text"
        placeholder="Search..."
        required
        value={searchQuery}
        onChange={handleSearch}
        className="px-4 py-2 w-full p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <Link to={`/search/${searchQuery}`} key={searchQuery}>
        <button
          type="submit"
          className="px-4 py-2 hover:bg-blue-500 bg-blue-600 text-white font-semibold rounded-r-md  focus:outline-none focus:bg-blue-600"
        >
          Search
        </button>
      </Link>
    </form>
  );
};

export default SearchField;
