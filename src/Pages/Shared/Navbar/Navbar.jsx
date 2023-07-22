import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  // Handle logout functionality
  const handleLogout = () => {
    logOut()
      .then((result) => {
        toast.success("Logout successful!");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="bg-white px-4 mx-auto  fixed z-50 w-full">
      <div className="relative py-2 flex items-center justify-between">
        <a href="#">
          <span className="ml-2 text-2xl font-bold tracking-wide ">
            CollegeBooker
          </span>
        </a>
        <ul className="items-center hidden space-x-8 lg:flex">
          {/* Navigation links */}
          <li tabIndex={0}>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) =>
                isActive ? "text-[#3a85eb]" : "text-[#666666]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/colleges"
              aria-label="Colleges"
              title="Colleges"
              className={({ isActive }) =>
                isActive ? "text-[#3a85eb]" : "text-[#666666]"
              }
            >
              Colleges
            </NavLink>
          </li>

          <NavLink
            to="/admission"
            aria-label="Admission"
            title="Admission"
            className={({ isActive }) =>
              isActive ? "text-[#3a85eb]" : "text-[#666666]"
            }
          >
            Admission
          </NavLink>
          <li>
            <NavLink
              to="/my-college"
              aria-label="My College"
              title="My College"
              className={({ isActive }) =>
                isActive ? "text-[#3a85eb]" : "text-[#666666]"
              }
            >
              My College
            </NavLink>
          </li>
        </ul>
        <div></div>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline "
            onClick={() => setIsMenuOpen(true)}
          >
            {!isMenuOpen && (
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            )}
          </button>
          {isMenuOpen && (
            <div className="absolute z-10 top-0 left-0 w-full">
              <div className="p-5 bg-primary-500 border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4 relative">
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mt-2 -mr-2 absolute transition top-0 right-0 duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {/* Navigation links */}
                    <li tabIndex={0}>
                      <NavLink
                        to="/"
                        aria-label="Home"
                        title="Home"
                        className={({ isActive }) =>
                          isActive ? "text-[#3a85eb]" : "text-[#666666]"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/colleges"
                        aria-label="Colleges"
                        title="Colleges"
                        className={({ isActive }) =>
                          isActive ? "text-[#3a85eb]" : "text-[#666666]"
                        }
                      >
                        Colleges
                      </NavLink>
                    </li>

                    <NavLink
                      to="/admission"
                      aria-label="Admission"
                      title="Admission"
                      className={({ isActive }) =>
                        isActive ? "text-[#3a85eb]" : "text-[#666666]"
                      }
                    >
                      Admission
                    </NavLink>
                    <li>
                      <NavLink
                        to="/my-college"
                        aria-label="My College"
                        title="My College"
                        className={({ isActive }) =>
                          isActive ? "text-[#3a85eb]" : "text-[#666666]"
                        }
                      >
                        My College
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
