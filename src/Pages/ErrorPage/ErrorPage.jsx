import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import Lottie from "react-lottie";

import errorAnimation from "../../assets/errorAnimation.json";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: errorAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="flex items-center h-screen text-blue-600">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto">
        <div className="w-3/12 h-1/3 mx-auto">
          <Lottie options={animationOptions} />
        </div>
        <div className="max-w-md text-center">
          <h2 className="mb-4 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-4">
            {error?.message}
          </p>

          <button
            type="button"
            onClick={handleGoBack}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
          >
            Back to homepage
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
