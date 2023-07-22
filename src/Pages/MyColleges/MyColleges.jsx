import React, { useState, useEffect } from "react";
import axios from "axios";
import useMyColleges from "../../hooks/useMyColleges";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { AiFillStar } from "react-icons/ai";
import ReviewForm from "./ReviewForm";
const MyColleges = () => {
  const [myColleges, refetchMyColleges] = useMyColleges();

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
            {/* Display other details */}
          </ul>

          {/* comments and ratings */}

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Add a Review</h2>
            {/* <div>
             {comments &&
              comments?.map((comment) => (
                <div key={comment._id} className="bg-gray-50 p-3 border">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <img
                        src={comment?.photo}
                        alt="Not Found"
                        className="rounded-full w-8 h-8 mr-2"
                      />
                      <div>
                        <p className="font-bold">{comment.customerName}</p>
                        <p className="text-gray-500">
                          {new Date(comment.date).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleLikes(comment?.commentsId)}
                      className="flex items-center text-orange-500 p-2 rounded-full disabled:text-black disabled:cursor-not-allowed"
                      disabled={comment?.likes?.find(
                        (email) => email === user?.email
                      )}
                    >
                      <AiFillLike />
                      <span className="text-gray-500">
                        {comment?.likes?.length}
                      </span>
                    </button>
                  </div>
                  <p className="mb-4">{comment.comment}</p>

                  <div className="-ml-2 flex">
                    <StarsRating
                      value={comment.rating}
                      size={20}
                      isHalf={true}
                      className="flex ml-1 pointer-events-none"
                    />
                    ({comment.rating})
                  </div>
                  <p>Customer Email: {comment.customerEmail}</p>
                </div>
              ))}
          </div> */}
            <ReviewForm college={college}></ReviewForm>
          </div>
          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
};

export default MyColleges;
