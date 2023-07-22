const CollegeCard = ({ college }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <img
        className="h-48 w-full object-cover"
        src={college.image}
        alt={college.name}
      />
      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold">{college.name}</h1>
        <p className="mt-2 text-gray-600">Rating: {college.rating}</p>
        <p className="mt-2 text-gray-600">
          Admission Dates: {college.admissionDates.join(", ")}
        </p>
        <p className="mt-2 text-gray-600">
          Research Count: {college.researchCount}
        </p>
        {/* Add more information as needed */}
      </div>
    </div>
  );
};

export default CollegeCard;
