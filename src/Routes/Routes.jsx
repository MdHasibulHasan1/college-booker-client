import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Admission from "../Pages/Admission/Admission";
import CollegeDetails from "../Pages/Colleges/CollegeDetails";
import Colleges from "../Pages/Colleges/Colleges";
import Details from "../Pages/Home/CollegeCardSection/Details";
import Home from "../Pages/Home/Home";
import ShopBySearch from "../Pages/Home/Search/ShopBySearch";
import Login from "../Pages/Login";
import MyColleges from "../Pages/MyColleges/MyColleges";
import SignUp from "../Pages/SignUp/SignUp";
import UserProfile from "../Pages/UserProfile";

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
        element: <SignUp />,
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
        path: "/details/:Id",
        element: <Details />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
      {
        path: "/search/:searchQuery",
        element: <ShopBySearch />,
      },
      {
        path: "/my-college",
        element: <MyColleges />,
      },
    ],
  },
]);
