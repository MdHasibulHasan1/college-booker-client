import React, { useState } from "react";
import Reveal from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useColleges from "../../hooks/useColleges";
import SectionTitle from "../Shared/SectionTitle";
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
      <Helmet>
        <title>CollegeBooker | Admission</title>
      </Helmet>
      <SectionTitle title="Admission" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colleges.map((college, index) => (
          <Reveal
            key={college._id}
            cascade
            damping={0.1}
            direction="up"
            duration={500}
            delay={index * 100}
          >
            <div
              className="bg-white rounded-lg shadow p-4 cursor-pointer"
              onClick={() => handleOpenModal(college)}
            >
              <button className="text-lg font-bold">{college.name}</button>
            </div>
          </Reveal>
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
