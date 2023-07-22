import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md shadow-md">
      <img
        src={college.image}
        alt={college.name}
        className="w-full h-32 object-cover mb-4 rounded-md"
      />
      <h3 className="text-xl font-semibold">{college.name}</h3>
      <p className="text-gray-600 mb-2">Rating: {college.rating}</p>
      <p className="mb-2">
        Admission Dates: {college.admissionDates.join(" - ")}
      </p>
      <p className="mb-2">Events: {college.events.join(", ")}</p>
      <p className="mb-2">
        Research History: {college.researchHistory.join(", ")}
      </p>
      <p className="mb-2">Sports: {college.sports.join(", ")}</p>

      <Link to={`/details/${college._id}`} key={college._id} className="">
        <button className="bg-blue-500 block w-full text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600">
          Details
        </button>
      </Link>
    </div>
  );
};

export default CollegeCard;
