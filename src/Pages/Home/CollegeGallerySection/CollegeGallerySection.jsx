import React, { useState, useEffect } from "react";
import SectionTitle from "../../Shared/SectionTitle";

const CollegeGallerySection = ({ colleges }) => {
  const [selectedCollege, setSelectedCollege] = useState("");

  const handleCollegeClick = (college) => {
    setSelectedCollege(college);
  };
  useEffect(() => {
    setSelectedCollege(colleges[0]);
  }, [colleges]);

  return (
    <div className="mx-auto p-4">
      <SectionTitle title="College Image Gallery" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {colleges.map((college) => (
          <div
            key={college._id}
            className={`bg-white rounded-lg shadow p-4 ${
              selectedCollege === college ? "border border-blue-500" : ""
            }`}
          >
            <div onClick={() => handleCollegeClick(college)} className="tabs">
              <a
                className={`tab tab-lifted cursor-pointer ${
                  selectedCollege === college ? "active" : ""
                }`}
              >
                {college.name}
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedCollege && selectedCollege.image_gallery && (
        <div className="bg-white mt-4 rounded-lg shadow p-4">
          <h2 className="text-2xl font-bold mb-4">
            {selectedCollege.name} Image Gallery
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {selectedCollege.image_gallery.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`${selectedCollege.name} Graduate ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => setSelectedCollege(null)}
            className="text-gray-500 mt-4 hover:text-gray-700"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default CollegeGallerySection;
