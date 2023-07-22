import CollegeCard from "./CollegeCard";

const CollegeCardSection = ({ colleges }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {colleges.map((college) => (
        <CollegeCard key={college._id} college={college} />
      ))}
    </div>
  );
};
export default CollegeCardSection;
