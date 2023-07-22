import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Admission from "../Pages/Admission/Admission";
import CollegeDetails from "../Pages/Colleges/CollegeDetails";
import Colleges from "../Pages/Colleges/Colleges";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";

import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/colleges/:Id",
        element: <CollegeDetails />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
    ],
  },
]);
