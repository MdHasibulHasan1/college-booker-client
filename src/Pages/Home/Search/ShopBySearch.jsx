import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useColleges from "../../../hooks/useColleges";
import CollegeCard from "./CollegeCard";
import SearchField from "./SearchField";

const ShopBySearch = () => {
  const { searchQuery } = useParams();
  console.log(searchQuery);
  const { user } = useAuth();
  const [colleges, collegesRefetch] = useColleges();
  const [searchedColleges, setSearchedColleges] = useState(colleges);

  // Update searchedProducts when searchQuery or products change
  useEffect(() => {
    const filteredColleges = colleges.filter((college) =>
      college.name.toLowerCase().includes((searchQuery || "").toLowerCase())
    );
    setSearchedColleges(filteredColleges);
  }, [colleges, searchQuery]);

  return (
    <>
      <SearchField />
      <div className="md:flex justify-between items-center mt-4">
        <h1 className="text-2xl font-bold">
          {searchedColleges?.length} items found for "{searchQuery}"
        </h1>
      </div>
      <div className="md:flex">
        <div className="grid grid-cols-2 w-full justify-center sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {searchedColleges?.map((college) => (
            <CollegeCard key={college._id} college={college} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopBySearch;
