import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <Navbar></Navbar>
      <div className="pt-20">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
