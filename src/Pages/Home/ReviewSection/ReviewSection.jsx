import React, { useState, useEffect } from "react";
import axios from "axios";
import useColleges from "../../../hooks/useColleges";
import StarsRating from "react-awesome-stars-rating";
import SectionTitle from "../../Shared/SectionTitle";
import Reveal from "react-awesome-reveal";

const ReviewSection = () => {
  const [colleges, collegesRefetch] = useColleges();
  return (
    <div className="px-8 mx-auto py-8">
      <SectionTitle title="College Reviews" />
      <div className="grid md:grid-cols-2 gap-3">
        {colleges?.map((college, index) => (
          <Reveal
            key={college?._id}
            cascade
            damping={0.1}
            direction="up"
            duration={500}
            delay={index * 100}
          >
            <div className="border rounded-lg shadow-lg p-4 mb-4">
              <h2 className="text-xl font-semibold mb-2">{college.name}</h2>
              <div className="flex items-center mb-2">
                <span className="mr-2">Rating:</span>
                <div className="-ml-2 flex">
                  <StarsRating
                    value={
                      college?.reviews
                        ?.map((review) => review?.rating)
                        .reduce(
                          (accumulator, currentValue) =>
                            accumulator + currentValue,
                          0
                        ) / Number(college?.reviews?.length)
                    }
                    size={20}
                    isHalf={true}
                    className="flex ml-1 pointer-events-none"
                  />
                </div>

                <span>({college?.reviews?.length})</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="mr-2">Admission Dates:</span>
                <span>{college?.admissionDates?.join(" to ")}</span>
              </div>
              <div className="flex items-start mb-2">
                <div className="mr-2">Events:</div>
                <ul className="flex gap-2">
                  {college?.events?.map((event, i) => (
                    <li className="rounded-lg bg-gray-50 px-2" key={i}>
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Add more college details as needed */}
              <hr className="my-4" />
              <h3 className="text-lg font-semibold mb-2">Reviews</h3>
              <div className="flex flex-wrap gap-2">
                {college?.reviews?.map((review, index) => (
                  <div
                    key={index}
                    className="border flex-grow rounded-lg p-4 bg-white shadow-md"
                  >
                    <img
                      className="w-12 h-12 mx-auto rounded-full"
                      src={review?.photoURL}
                      alt=""
                    />
                    <p className="text-gray-600 text-center mt-2">
                      Comment: {review.comment}
                    </p>
                    <div className="flex items-center justify-center mt-2">
                      <div className=" flex">
                        <span className="mr-2">Rating:</span>
                        <StarsRating
                          value={review.rating}
                          size={20}
                          isHalf={true}
                          className="flex ml-1 pointer-events-none"
                        />{" "}
                        ({review?.rating})
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
