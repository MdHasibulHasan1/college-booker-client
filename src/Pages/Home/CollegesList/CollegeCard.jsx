import { Link } from "react-router-dom";
import StarsRating from "react-awesome-stars-rating";

const CollegeCard = ({ college }) => {
  return (
    <div className="border  transform transition duration-500 ease-in-out hover:scale-105 border-gray-300 p-4 rounded-md shadow-md bg-white">
      <div className="flex justify-center mb-4">
        <div className="relative mb-4 w-full">
          <img
            src={college.image}
            alt={college.name}
            className="w-full h-32 object-cover rounded-t-md"
          />
          <div className="absolute top-2 left-0 px-2 py-1  rounded-md">
            <span className="font-bold text-black bg-white p-2 rounded-md">
              {college.name}
            </span>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2"></h3>

      <div className="mb-4">
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Admission Dates:</span>{" "}
          {college.admissionDates.join(" - ")}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Events:</span>{" "}
          {college.events.join(", ")}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Research History:</span>{" "}
          {college.researchHistory.join(", ")}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Sports:</span>{" "}
          {college.sports.join(", ")}
        </p>
      </div>
      <div className=" flex items-center mb-4">
        <StarsRating
          value={
            college?.reviews
              ?.map((review) => review?.rating)
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              ) / Number(college?.reviews?.length)
          }
          size={16}
          isHalf={true}
          className="flex pointer-events-none"
        />
        <span className="text-gray-600 text-sm">
          ({college?.reviews?.length} Reviews)
        </span>
      </div>
      <Link to={`/details/${college._id}`} key={college._id} className="block">
        <button className="bg-blue-500 block w-full text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600">
          See Details
        </button>
      </Link>
    </div>
  );
};

export default CollegeCard;
