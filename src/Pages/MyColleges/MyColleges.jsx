import React, { useState, useEffect } from "react";
import axios from "axios";
import useMyColleges from "../../hooks/useMyColleges";
import ReviewForm from "./ReviewForm";
import SectionTitle from "../Shared/SectionTitle";
import useAuth from "../../hooks/useAuth";
import CandidateInfo from "./CandidateInfo";
import Reveal from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
const MyColleges = () => {
  const [myColleges, myCollegesLoading] = useMyColleges();
  const { user } = useAuth();

  let content;
  if (myColleges?.length === 0) {
    content = <SectionTitle title="Not Found" />;
  } else {
    content = (
      <div className="container mx-auto ">
        <Helmet>
          <title>CollegeBooker | My College</title>
        </Helmet>
        {myColleges.map((college, index) => (
          <Reveal
            key={college._id}
            cascade
            damping={0.1}
            direction="up"
            duration={500}
            delay={index * 100}
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">{college?.name}</h3>
              <img
                src={college.image}
                alt={college.name}
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <div className="grid md:grid-cols-2 items-start gap-3">
                <CandidateInfo
                  myColleges={myColleges}
                  candidateEmail={user?.email}
                />
                <div>
                  <p className="font-bold text-lg">Admission Details:</p>
                  <ul>
                    <li>
                      Courses Offered:{" "}
                      {college?.admission_details?.courses_offered?.join(", ")}
                    </li>
                    <li>
                      Eligibility Criteria:{" "}
                      {college?.admission_details?.eligibility_criteria}
                    </li>
                    <li>
                      Application Deadline:{" "}
                      {college?.admission_details?.application_deadline}
                    </li>
                    <li>
                      Admission Process:{" "}
                      {college?.admission_details?.admission_process}
                    </li>
                    <li>
                      Tuition Fees:{" "}
                      {college?.admission_details?.fees_details.tuition}
                    </li>
                    <li>
                      Hostel Fees:{" "}
                      {college?.admission_details?.fees_details.hostel}
                    </li>
                    <li>
                      Other Fees:{" "}
                      {college?.admission_details?.fees_details?.other_fees}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Add a Review</h2>

                <ReviewForm college={college}></ReviewForm>
              </div>
              <hr className="my-4" />
            </div>
          </Reveal>
        ))}
      </div>
    );
  }
  return (
    <div className="py-4 px-6">
      <h2 className="text-2xl font-semibold mb-4">My Colleges</h2>
      {content}
    </div>
  );
};

export default MyColleges;
