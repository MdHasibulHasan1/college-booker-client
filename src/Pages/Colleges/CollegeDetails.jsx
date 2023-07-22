import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useColleges from "../../hooks/useColleges";

const CollegeDetails = () => {
  const { Id } = useParams();
  console.log(Id);
  const [colleges, collegesRefetch] = useColleges();

  let college;
  if (Id) {
    college = colleges?.find((college) => {
      return college._id == Id;
    });
  }

  const { user, setLoading } = useAuth();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{college.name}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            src={college.image}
            alt={college.name}
            className="w-full h-40 object-cover rounded-md"
          />
          <p className="mt-2">Rating: {college.rating}</p>
          <p className="mt-2">
            Admission Dates: {college.admissionDates.join(" - ")}
          </p>
          <p className="mt-2">Research Count: {college.researchCount}</p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Events</h2>
          <ul>
            {college.events.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
          <h2 className="text-lg font-bold mt-4 mb-2">Sports Facilities</h2>
          <ul>
            {college.sports.map((sport, index) => (
              <li key={index}>{sport}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
