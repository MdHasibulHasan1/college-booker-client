import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { AiFillStar } from "react-icons/ai";
import useColleges from "../../hooks/useColleges";

const ReviewForm = ({ college }) => {
  const [rating, setRating] = useState(0);
  const { user } = useAuth();
  const [comment, setComment] = useState("");
  const [colleges, collegesRefetch] = useColleges();
  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleReviewSubmit = (e) => {
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

    if (user && comment && rating) {
      axios
        .post(
          `https://college-booker.vercel.app/college/review/${college._id}`,
          {
            newReview,
          }
        )
        .then((response) => {
          collegesRefetch();
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Review submitted successfully!",
            confirmButtonText: "OK",
          });
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to submit review.",
            confirmButtonText: "OK",
          });
        });
    } else {
      Swal.fire({
        title: "Please write your comment to review",
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
    <div>
      <form onSubmit={handleReviewSubmit}>
        {/* Rating */}
        <div className="mb-4">
          <label htmlFor="rating" className="block font-medium text-gray-700">
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
          className="hover:bg-blue-500 bg-blue-600 text-white font-medium py-2 px-4 rounded mt-4"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
