import React from "react";
import { Link } from "react-router-dom";
import useColleges from "../../hooks/useColleges";
import StarsRating from "react-awesome-stars-rating";
import Reveal from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../Shared/SectionTitle";
const Colleges = () => {
  const [colleges, collegesRefetch] = useColleges();
  console.log(colleges);
  return (
    <div className="p-4">
      <Helmet>
        <title>CollegeBooker | Colleges</title>
      </Helmet>
      <SectionTitle title="Colleges" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colleges.map((college, index) => (
          <Reveal
            key={college._id}
            cascade
            damping={0.1}
            direction="up"
            duration={500}
            delay={index * 100}
          >
            <div
              key={college._id}
              className="bg-gray-100   transform transition duration-500 ease-in-out hover:scale-105 rounded-lg shadow p-4"
            >
              <img
                src={college.image}
                alt={college.name}
                className="w-full h-32 object-cover rounded-md"
              />
              <h2 className="text-lg font-bold mt-2">{college.name}</h2>
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
              <p className="text-gray-600">
                Admission Dates: {college.admissionDates?.join(" - ")}
              </p>
              <p className="text-gray-600">
                Research Count: {college.researchCount}
              </p>
              <Link
                to={`/colleges/${college._id}`}
                key={college._id}
                className=""
              >
                <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600">
                  Details
                </button>
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
