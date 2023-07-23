import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useColleges from "../../../hooks/useColleges";
import CollegeCard from "./CollegeCard";
import CollegeSearch from "./CollegeSearch";

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
      <CollegeSearch />
      <div className=" mt-4">
        <h1 className="text-2xl font-bold text-center">
          {searchedColleges?.length} items found for "{searchQuery}"
        </h1>
      </div>

      <div className="grid sm:grid-cols-2 justify-between lg:grid-cols-3 gap-2 mt-4">
        {searchedColleges?.map((college) => (
          <CollegeCard key={college._id} college={college} />
        ))}
      </div>
    </>
  );
};

export default ShopBySearch;
