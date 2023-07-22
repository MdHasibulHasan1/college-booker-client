import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CollegeCard from "./CollegeCard";
import { Link } from "react-router-dom";

const CollegeSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: colleges,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(
    ["search-colleges", searchQuery],
    async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/search-colleges/${searchQuery}`
        );
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch colleges");
      }
    },
    {
      enabled: false,
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery("");
    refetch();
  };
  return (
    <div className="py-4">
      <form
        onSubmit={handleSubmit}
        className="flex md:w-1/2 my-6 w-full mx-auto items-center"
      >
        <input
          type="text"
          placeholder="Search..."
          required
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 w-full p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <Link to={`/search/${searchQuery}`} key={searchQuery}>
          <button
            disabled={searchQuery === ""}
            type="submit"
            className="px-4 py-2 hover:bg-blue-500 bg-blue-600 text-white font-semibold rounded-r-md  focus:outline-none focus:bg-blue-600"
          >
            Search
          </button>
        </Link>
      </form>

      {isLoading && searchQuery !== "" && (
        <p className="my-4 text-center">Loading...</p>
      )}

      {isError && <p className="my-4 text-red-500">Error: {error.message}</p>}

      {colleges && colleges.length > 0 && (
        <div className="my-4">
          <h2 className="text-xl font-semibold">Search Results:</h2>
          <div className="mt-2">
            {colleges.map((college) => (
              <CollegeCard key={college._id} college={college} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegeSearch;
