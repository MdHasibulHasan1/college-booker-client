import React, { useState } from "react";
import AddedForm from "../Home/Form";
import AdmissionForm from "./AdmissionForm";

const Modal = ({ isOpen, onClose, college }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40"></div>}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-md">
            {/* Modal content */}
            <h2 className="text-2xl font-semibold mb-4">{college.name}</h2>
            <AdmissionForm college={college} />
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
