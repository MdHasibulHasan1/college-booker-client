import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { saveUser } from "../../Apis/saveUser";
import useAuth from "../../hooks/useAuth";
import LoginWithGoogleGitHub from "../Shared/LoginWithGoogleGitHub";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const { createUser, logOut } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log(data);
    const name = data.firstName + " " + data.lastName;
    const userData = {
      name,
      photoURL: data?.image,
      email: data.email,
    };
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        saveUser(userData);
        setLoading(false);
        // logOut the user
        logOut()
          .then((result) => {
            navigate("/login");
          })
          .catch((error) => console.error(error));
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User created successfully.",
          showConfirmButton: false,
          timer: 1500,
        });

        updateUserProfile(name, data?.image)
          .then((result) => {})
          .catch((error) => setError(error.message));
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });

    // Perform validation and sign-up logic here
  };

  const password = watch("password", "");

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block font-medium">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="border border-gray-800 p-1 mt-1 block w-full"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <p className="text-red-500">First Name is required</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="border border-gray-800 p-1 mt-1 block w-full"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <p className="text-red-500">Last Name is required</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-800 p-1 mt-1 block w-full"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
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
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium">
            Password
          </label>
          <div className="">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="border border-gray-800 p-1 mt-1 block w-full"
              {...register("password", { required: true })}
            />
          </div>
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block font-medium">
            Confirm Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            className="border border-gray-800 p-1 mt-1 block w-full"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === password,
            })}
          />
          {errors.confirmPassword &&
            errors.confirmPassword.type === "required" && (
              <p className="text-red-500">Confirm Password is required</p>
            )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === "validate" && (
              <p className="text-red-500">Passwords do not match</p>
            )}
        </div>
        <input
          type="checkbox"
          id="showPassword"
          checked={showPassword}
          onChange={togglePasswordVisibility}
          className=""
        />
        <label htmlFor="showPassword" className="">
          Show Password
        </label>

        <div className="mb-4">
          <input
            type="checkbox"
            id="termsAndConditions"
            {...register("termsAndConditions", { required: true })}
          />
          <label htmlFor="termsAndConditions" className="ml-2">
            I agree to the Terms and Conditions
          </label>
          {errors.termsAndConditions && (
            <p className="text-red-500">
              Please agree to the Terms and Conditions
            </p>
          )}
        </div>

        <div className="text-black text-center mb-2">
          Already have an account? please{" "}
          <Link to="/login" className="underline font-bold">
            Login
          </Link>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </div>
      </form>
      <LoginWithGoogleGitHub></LoginWithGoogleGitHub>
    </div>
  );
};

export default SignUp;
