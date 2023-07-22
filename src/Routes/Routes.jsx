import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import BlogPage from "../Pages/BlogPage/BlogPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
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
        path: "/blogs",
        element: <BlogPage></BlogPage>,
      },
    ],
  },
]);
