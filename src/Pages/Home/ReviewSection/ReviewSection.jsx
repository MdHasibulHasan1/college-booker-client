import React, { useState, useEffect } from "react";
import axios from "axios";
import useColleges from "../../../hooks/useColleges";

const ReviewSection = () => {
  const [colleges, collegesRefetch] = useColleges();
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">College Reviews</h1>
      <div className="grid md:grid-cols-2 gap-3">
        {colleges?.map((college) => (
          <div
            key={college?._id}
            className="border rounded-lg shadow-lg p-4 mb-4"
          >
            <h2 className="text-xl font-semibold mb-2">{college.name}</h2>
            <div className="flex items-center mb-2">
              <span className="mr-2">Rating:</span>
              <span>{college?.rating}</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-2">Admission Dates:</span>
              <span>{college?.admissionDates?.join(" to ")}</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-2">Events:</span>
              <ul>
                {college?.events?.map((event) => (
                  <li key={event}>{event}</li>
                ))}
              </ul>
            </div>
            {/* Add more college details as needed */}
            <hr className="my-4" />
            <h3 className="text-lg font-semibold mb-2">Reviews</h3>
            {college?.reviews?.map((review, index) => (
              <div key={index} className="mb-2">
                <p className="text-gray-600">{review.comment}</p>
                <div className="flex items-center mt-1">
                  <span className="mr-2">Rating:</span>
                  <span>{review.rating}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
