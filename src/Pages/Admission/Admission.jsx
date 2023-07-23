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
    setSelectedCollege(college);
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
            onClick={() => handleOpenModal(college)}
          >
            <button className="text-lg font-bold">{college.name}</button>
          </div>
        ))}
      </div>

      {/* Admission Modal */}
      {selectedCollege && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          college={selectedCollege}
        />
      )}
    </div>
  );
};

export default Admission;
