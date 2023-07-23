import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import useAuth from "../hooks/useAuth";
import { AiOutlineLoading } from "react-icons/ai";
import SectionTitle from "./Shared/SectionTitle";
import useUserData from "../hooks/useUserData";

const UserProfile = () => {
  const [userData, refetchUser] = useUserData();
  const { user, updateUserProfile } = useAuth();
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };
  console.log("................", userData);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(userData);
    try {
      const response = await axios.post(
        `https://college-booker.vercel.app/profile/update/${userData?._id}`,
        {
          name,
          photoURL,
          phoneNumber,
          address,
          email,
          gender,
          university,
        }
      );
      console.log(university);
      if (response.data.acknowledged) {
        updateUserProfile(name, photoURL);
        refetchUser();
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Profile Updated",
          text: "Your profile has been successfully updated.",
        });
      }

      // Clear form fields
      setName("");
      setPhotoURL("");
      setPhoneNumber("");
      setAddress("");
      setGender("");
      setEmail("");
      setUniversity("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-11/12 mx-auto mb-5">
      <div className="bg-white rounded shadow p-4">
        <div className="flex items-center mb-4">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={user?.photoURL}
            alt="Profile"
          />
          <h2 className="text-xl font-semibold">{userData?.name}</h2>
        </div>
        <div>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Email:</span> {userData?.email}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">University:</span>{" "}
            {userData?.university}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Address:</span> {userData?.address}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Gender:</span> {userData?.gender}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Phone Number:</span>{" "}
            {userData?.phoneNumber}
          </p>
        </div>
      </div>
      <SectionTitle subTitle="Your Profile" title="Update" />
      <form onSubmit={handleSubmit} className="">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Name:
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input p-2 mt-1 block w-full border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500 hover:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="photoURL"
              className="block text-gray-700 font-semibold"
            >
              Image:
            </label>
            <input
              type="url"
              id="photoURL"
              name="photoURL"
              value={photoURL}
              required
              onChange={(e) => setPhotoURL(e.target.value)}
              className="form-input p-2 mt-1 block w-full border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500 hover:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-semibold"
            >
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-input p-2 mt-1 block w-full border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500 hover:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-gray-700 font-semibold"
            >
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="form-select p-2 mt-1 block w-full border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500 hover:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold"
            >
              Email:
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              readOnly
              value={userData?.email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input p-2 mt-1 block w-full border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500 hover:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="university"
              className="block text-gray-700 font-semibold"
            >
              University:
            </label>
            <input
              type="text"
              id="university"
              name="university"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              className="form-input p-2 mt-1 block w-full border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500 hover:ring-blue-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <PhoneInput
            value={phoneNumber}
            defaultCountry="BD"
            onChange={handlePhoneChange}
            placeholder="Phone Number"
            className=" p-2 mt-1 block w-full border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500 hover:ring-blue-500"
          />
        </div>
        <div className="flex grow items-center justify-center">
          <button
            type="submit"
            className="px-4 text-center flex  w-full py-2 mx-auto justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none"
          >
            {loading ? (
              <AiOutlineLoading className="m-auto animate-spin"></AiOutlineLoading>
            ) : (
              "Update"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
