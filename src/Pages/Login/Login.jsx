import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import LoginWithGoogleGitHub from "../Shared/LoginWithGoogleGitHub";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Lottie from "lottie-react";

import animationData from "../../assets/loginAnimation.json";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(data);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        toast.success("Login successful!");
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 mx-auto lg:w-11/12 shadow-2xl p-20 -mt-20 bg-slate-50 justify-center  items-center md:h-screen">
        <div className="">
          <Lottie
            style={{ width: "100%", height: "100%" }}
            animationData={animationData}
            loop
            autoplay
          />
        </div>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl text-gray-800 font-bold mb-6">
            Please Login
          </h2>
          <div className="flex justify-center">
            <BiUserCircle className="w-14 text-[#3a85eb] block h-14"></BiUserCircle>
          </div>

          <div className="mb-4">
            {/* <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label> */}
            <input
              placeholder="Enter your email address"
              type="email"
              className="w-full border-x-0 border-t-0 border-b-2 border-b-black border px-3 py-2 outline-none  text-black"
              {...register("email", { required: true, maxLength: 120 })}
              required
            />
          </div>
          <div className="mb-4 relative">
            {/*   <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label> */}
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", { required: true, maxLength: 120 })}
              className="w-full border-x-0 border-t-0 border-b-2 border-b-black border px-3 py-2 outline-none  text-black"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute bottom-1 right-0 mt-3 mr-3 text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
            >
              {showPassword ? (
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="eye-invisible"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
                  <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path>
                </svg>
              ) : (
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="eye"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                </svg>
              )}
            </button>
          </div>
          <div className="text-black text-center mb-2">
            New to here?
            <Link to="/signUp" className="underline font-bold">
              Create an account
            </Link>
          </div>
          <button
            type="submit"
            className="w-6/12 mx-auto block bg-[#3a85eb] text-white py-2 px-4 rounded-md hover:bg-[#666666] focus:outline-none"
          >
            Login
          </button>
          <div className="text-black">{error}</div>
          <LoginWithGoogleGitHub>Login</LoginWithGoogleGitHub>
        </form>
      </div>
    </div>
  );
};

export default Login;
