import React, { useState, useEffect } from "react";
import axios from "axios";
import useMyColleges from "../../hooks/useMyColleges";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { AiFillStar } from "react-icons/ai";
const MyColleges = ({ userEmail }) => {
  const [myColleges, refetchMyColleges] = useMyColleges();
  const [colleges, setColleges] = useState([]);
  const [rating, setRating] = useState(0);
  const { user } = useAuth();
  const [comment, setComment] = useState("");
  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleReviewSubmit = (e, _id) => {
    e.preventDefault();

    const newReview = {
      //   commentsId: (comments && comments.length + 1) || 1,
      comment,
      rating,
      candidateEmail: user?.email,
      candidateName: user?.displayName,
      photoURL: user?.photoURL,
      date: new Date(),
    };
    console.log("f", _id);
    if (user && comment && rating) {
      axios
        .post(`http://localhost:5000/college/review/${_id}`, {
          newReview,
        })
        .then((response) => {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Review submitted successfully!",
            confirmButtonText: "OK",
          });
          commentRefetch();
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to submit review.",
            confirmButtonText: "OK",
          });
        });
    } else {
      Swal.fire({
        title: "Please Login fast to review",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
  };
  const renderRatingStars = (numStars) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <AiFillStar
          key={i}
          className={i <= numStars ? "text-yellow-500" : "text-gray-500"}
          onClick={() => handleRatingChange(i)}
        />
      );
    }
    return stars;
  };
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
          <h4 className="text-lg font-semibold mt-4 mb-2">Add a Review</h4>
          {/* comments and ratings */}

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Comments</h2>
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
            <form onSubmit={handleReviewSubmit}>
              {/* Rating */}
              <div className="mb-4">
                <label
                  htmlFor="rating"
                  className="block font-medium text-gray-700"
                >
                  Rating
                </label>
                <div>
                  <div className="flex gap-1 items-center">
                    {renderRatingStars(rating)}
                  </div>
                </div>
              </div>
              <textarea
                className="border border-gray-800 p-2 w-full"
                rows="4"
                placeholder="Write your comment..."
                onChange={handleCommentChange}
              ></textarea>
              <button
                type="submit"
                className="hover:bg-orange-500 bg-orange-600 text-white font-medium py-2 px-4 rounded mt-4"
              >
                Submit Review
              </button>
            </form>
          </div>
          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
};

export default MyColleges;
