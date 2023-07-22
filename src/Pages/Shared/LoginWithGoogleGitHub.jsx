import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { saveUser } from "../../Apis/saveUser";
const LoginWithGoogleGitHub = ({ children }) => {
  const { signInWithGoogle, signInWithGitHub } = useAuth();
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        const userData = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        saveUser(userData);
        toast.success("Login successful!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGitHubSignIn = () => {
    signInWithGitHub()
      .then((result) => {
        const loggedUser = result.user;
        console.log("login", loggedUser);
        const userData = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        saveUser(userData);
        toast.success("Login successful!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <div className="text-black text-center">----Or {children} With----</div>
      </div>
      <div className="flex gap-3 h-12 justify-center items-center">
        <FcGoogle onClick={handleGoogleSignIn} className="w-7 h-7"></FcGoogle>
        <FaGithub
          onClick={handleGitHubSignIn}
          className="text-black w-6 h-6"
        ></FaGithub>
      </div>
    </>
  );
};

export default LoginWithGoogleGitHub;
