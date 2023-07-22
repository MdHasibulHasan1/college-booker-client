import React from "react";
import { useForm } from "react-hook-form";

const AdmissionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission logic here
  };

  return (
    <div className="p-4 z-40">
      <h1 className="text-2xl font-bold mb-4">Admission</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="candidateName">Candidate Name:</label>
            <input
              type="text"
              id="candidateName"
              {...register("candidateName", {
                required: "Candidate name is required",
              })}
              className="border border-gray-800 p-1 mt-1 block w-full"
            />
            {errors.candidateName && (
              <p className="text-red-500">{errors.candidateName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              {...register("subject", { required: "Subject is required" })}
              className="border border-gray-800 p-1 mt-1 block w-full"
            />
            {errors.subject && (
              <p className="text-red-500">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="candidateEmail">Candidate Email:</label>
            <input
              type="email"
              id="candidateEmail"
              {...register("candidateEmail", {
                required: "Candidate email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                  message: "Invalid email format",
                },
              })}
              className="border border-gray-800 p-1 mt-1 block w-full"
            />
            {errors.candidateEmail && (
              <p className="text-red-500">{errors.candidateEmail.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="candidatePhoneNumber">
              Candidate Phone Number:
            </label>
            <input
              type="tel"
              id="candidatePhoneNumber"
              {...register("candidatePhoneNumber", {
                required: "Candidate phone number is required",
                pattern: {
                  value: /^\d{10}$/i,
                  message: "Invalid phone number format (e.g., 1234567890)",
                },
              })}
              className="border border-gray-800 p-1 mt-1 block w-full"
            />
            {errors.candidatePhoneNumber && (
              <p className="text-red-500">
                {errors.candidatePhoneNumber.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              {...register("address", { required: "Address is required" })}
              className="border border-gray-800 p-1 mt-1 block w-full"
            />
            {errors.address && (
              <p className="text-red-500">{errors.address.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              {...register("dateOfBirth", {
                required: "Date of birth is required",
              })}
              className="border border-gray-800 p-1 mt-1 block w-full"
            />
            {errors.dateOfBirth && (
              <p className="text-red-500">{errors.dateOfBirth.message}</p>
            )}
          </div>
        </div>
        {/* Add image field using "input type='file'" here */}

        <div>
          <button
            type="submit"
            className="bg-blue-500 block w-full text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
