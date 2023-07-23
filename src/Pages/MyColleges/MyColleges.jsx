import React, { useState, useEffect } from "react";
import axios from "axios";
import useMyColleges from "../../hooks/useMyColleges";
import ReviewForm from "./ReviewForm";
import SectionTitle from "../Shared/SectionTitle";
const MyColleges = () => {
  const [myColleges, refetchMyColleges] = useMyColleges();

  if (myColleges?.length === 0) {
    return <SectionTitle title="Not Found" />;
  }
  return (
    <div className="py-4 px-6">
      <h2 className="text-2xl font-semibold mb-4">My Colleges</h2>
      {myColleges.map((college) => (
        <div key={college._id} className="mb-4">
          <h3 className="text-xl font-semibold mb-2">{college.name}</h3>
          <ul className="list-disc list-inside">
            <li className="mb-2">Rating: {college.rating}</li>
            <li className="mb-2">
              Admission Dates: {college.admissionDates.join(", ")}
            </li>
          </ul>
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Add a Review</h2>

            <ReviewForm college={college}></ReviewForm>
          </div>
          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
};

export default MyColleges;
