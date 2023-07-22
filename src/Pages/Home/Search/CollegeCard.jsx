import React from "react";

const CollegeCard = ({ college }) => {
  return (
    <div className="border border-gray-300 shadow-md p-4 rounded-lg w-64 mx-4 my-4">
      <img
        src={college.image}
        alt={college.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
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
        <button
          onClick={() => console.log(`Details of ${college.name}`)}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default CollegeCard;
