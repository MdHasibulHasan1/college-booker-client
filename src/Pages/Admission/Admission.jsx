import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useColleges from "../../hooks/useColleges";
import AdmissionForm from "./AdmissionForm";
import Modal from "./Modal";

const Admission = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [colleges, collegesRefetch] = useColleges();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (college) => {
    setSelectedCollege(college); // Set the selected college before opening the modal
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admission</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colleges.map((college) => (
          <div
            key={college._id}
            className="bg-white rounded-lg shadow p-4 cursor-pointer"
            onClick={() => handleOpenModal(college)} // Pass the college to the handleOpenModal function
          >
            <button className="text-lg font-bold">{college.name}</button>
          </div>
        ))}
      </div>

      {/* Admission Modal */}
      {selectedCollege && ( // Render the modal only if a college is selected
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          college={selectedCollege} // Pass the selected college as a prop to the Modal component
        />
      )}
    </div>
  );
};

export default Admission;
