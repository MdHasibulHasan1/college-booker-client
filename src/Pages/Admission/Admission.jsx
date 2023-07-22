import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useColleges from "../../hooks/useColleges";
import AdmissionForm from "./AdmissionForm";

const Admission = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [colleges, collegesRefetch] = useColleges();

  const handleCollegeClick = (college) => {
    setSelectedCollege(college);
  };

  const onSubmit = (data) => {
    console.log(data);
    // Submit the form data to your backend or perform any other actions
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admission</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colleges.map((college) => (
          <div
            key={college._id}
            className="bg-white rounded-lg shadow p-4 cursor-pointer"
            onClick={() => handleCollegeClick(college)}
          >
            <h2 className="text-lg font-bold">{college.name}</h2>
            {selectedCollege && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-lg font-bold mb-4">
                    Admission Form for {selectedCollege.name}
                  </h2>
                  <AdmissionForm college={college} />
                  <button
                    onClick={() => setSelectedCollege(null)}
                    className="text-gray-500 mt-4 hover:text-gray-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Admission Modal */}
    </div>
  );
};

export default Admission;
