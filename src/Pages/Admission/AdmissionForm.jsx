import axios from "axios";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useColleges from "../../hooks/useColleges";
import useMyColleges from "../../hooks/useMyColleges";
const AdmissionForm = ({ college }) => {
  const [colleges, collegesRefetch] = useColleges();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [myColleges, refetchMyColleges] = useMyColleges();
  const { user } = useAuth();
  const found = college?.candidate?.find(
    (cand) => cand.candidateEmail === user?.email
  );
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  const onSubmit = (data) => {
    data.phoneNumber = phoneNumber;
    console.log(data);
    // candidates
    if (user && data && college) {
      axios
        .post(`http://localhost:5000/candidates/${college?._id}`, {
          data,
        })
        .then((response) => {
          console.log(response);
          if (response?.data) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Your are now candidate of this college!",
              confirmButtonText: "OK",
            });
            collegesRefetch();
            refetchMyColleges();
          }
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to submit.",
            confirmButtonText: "OK",
          });
        });
    } else {
      Swal.fire({
        title: "Please Login fast to submit",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="p-4 z-40">
      <h1 className="text-2xl font-bold mb-4">Admission</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="  w-full ">
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
              value={user?.email}
              readOnly
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

            <PhoneInput
              value={phoneNumber}
              defaultCountry="BD"
              required
              onChange={handlePhoneChange}
              placeholder="Phone Number"
              className=" p-2 mt-1 block w-full border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500 hover:ring-blue-500"
            />
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
        <div className="form-control w-full mt-4">
          <label className="block font-medium">Image</label>
          <input
            required
            type="url"
            {...register("image", { required: true })}
            className="border border-gray-800 p-1 mt-1 block w-full"
          />
        </div>

        <div>
          <button
            disabled={found}
            type="submit"
            className="bg-blue-500 block w-full text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600"
          >
            {found ? "already booked" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
