import React from "react";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";

const CollegeCard = ({ college }) => {
  return (
    <div className="border border-gray-300 shadow-md p-4 rounded-lg mx-4 my-4">
      <div className="relative">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-40 object-cover rounded-t-lg"
        />{" "}
        <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 hover:opacity-80  duration-300">
          <Link
            to={`/details/${college._id}`}
            key={college._id}
            className="block text-white"
          >
            <BsEye size={24} />
          </Link>
        </div>
      </div>

      <div className="mt-2">
        <h2 className="text-xl font-bold">{college.name}</h2>
        <p className="text-gray-600">Rating: {college.rating}</p>
        <p className="text-gray-600">
          Admission Dates: {college.admissionDates.join(", ")}
        </p>
        <p className="text-gray-600">
          Number of Researches: {college.researchCount}
        </p>
        <p className="text-gray-600">Events: {college.events.join(", ")}</p>
        <p className="text-gray-600">
          Research History: {college.researchHistory.join(", ")}
        </p>
        <p className="text-gray-600">Sports: {college.sports.join(", ")}</p>
      </div>
    </div>
  );
};

export default CollegeCard;
