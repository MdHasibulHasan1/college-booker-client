import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import LoginWithGoogleGitHub from "./Shared/LoginWithGoogleGitHub";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { signIn, auth, setLoading, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          icon: "success",
          title: "Login successful!",
          text: "Welcome back!",
        });
        navigate(from, { replace: true });
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          icon: "error",
          title: "Login failed!",
          text: "Invalid credentials.",
        });
      });
    // Perform validation and sign-up logic here
  };

  const handleResetPassword = () => {
    console.log("emal", email);
    if (email == "") {
      return toast.success("Enter Your Email!");
    }
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        return toast.success("Check Your Email!");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="max-w-md mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          {/* <input
              required
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input p-2 mt-1 block w-full border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500 hover:ring-blue-500"
            /> */}
          <input
            type="email"
            id="email"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-800 p-1 mt-1 block w-full"
            // {...register("email", { required: true })}
          />
          {/* {errors.email && <p className="text-red-500">Email is required</p>} */}
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
              // {...register("password", { required: true })}
            />
          </div>
          {/* {errors.password && (
            <p className="text-red-500">Password is required</p>
          )} */}
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div>
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={togglePasswordVisibility}
              className=""
            />
            <label htmlFor="showPassword" className="ml-2">
              Show Password
            </label>
          </div>
          <label className="label">
            <div
              onClick={() => handleResetPassword()}
              // type="submit"
              className="label-text-alt link link-hover"
            >
              Forgot password?
            </div>
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
        >
          Login
        </button>
        <div className="text-red-600">{error}</div>
        <LoginWithGoogleGitHub>Login</LoginWithGoogleGitHub>
        <div className="text-black text-center mb-2">
          don't have an account? please{" "}
          <Link to="/signUp" className="underline font-bold">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
