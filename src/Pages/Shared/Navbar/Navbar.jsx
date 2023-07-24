import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  // Handle logout functionality
  const handleLogout = () => {
    logOut()
      .then((result) => {
        toast.success("Logout successful!");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="bg-white px-4 mx-auto font-semibold  fixed z-30 w-full">
      <div className="relative py-2 flex items-center justify-between">
        <div className="grid grid-cols-2 justify-between items-center">
          <div>
            <span className="ml-2 text-2xl font-bold tracking-wide ">
              CollegeBooker
            </span>
          </div>
          <ul className="items-center hidden space-x-8 flex-grow lg:flex">
            {/* Navigation links */}
            <li tabIndex={0}>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#3a85eb]  border-b-blue-500 border-b-2"
                    : "text-[#666666]"
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
                  isActive
                    ? "text-[#3a85eb] border-b-blue-500 border-b-2"
                    : "text-[#666666]"
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
                isActive
                  ? "text-[#3a85eb] border-b-blue-500 border-b-2"
                  : "text-[#666666]"
              }
            >
              Admission
            </NavLink>
            {user && (
              <li>
                <NavLink
                  to="/my-college"
                  aria-label="My College"
                  title="My College"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#3a85eb] border-b-blue-500 border-b-2"
                      : "text-[#666666]"
                  }
                >
                  My College
                </NavLink>
              </li>
            )}
            {user && <li onClick={handleLogout}>LogOut</li>}
            {!user && (
              <li>
                <NavLink
                  to="/signUp"
                  aria-label="Sign Up"
                  title="Sign Up"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#3a85eb] border-b-blue-500 border-b-2"
                      : "text-[#666666]"
                  }
                >
                  Sign Up
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        {user && (
          <div className="ml-auto">
            <NavLink
              to="/profile"
              aria-label="Profile"
              title="Profile"
              className={({ isActive }) =>
                isActive
                  ? "text-[#3a85eb] border-b-blue-500 border-b-2"
                  : "text-[#666666]"
              }
            >
              {user?.displayName}
            </NavLink>
          </div>
        )}
        {/*  {user && (
          <div className="dropdown dropdown-end ml-auto">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  className="ring ring-blue-300 md:ring-blue-500 rounded-full block w-8"
                  src={user?.photoURL}
                  alt="not found"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between" to="/profile">
                  Profile
                </Link>
              </li>

              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        )} */}
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
            <div className="absolute z-10 top-0 bg-white left-0 w-full">
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
                          isActive
                            ? "text-[#3a85eb] border-b-blue-500 border-b-2"
                            : "text-[#666666]"
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
                          isActive
                            ? "text-[#3a85eb] border-b-blue-500 border-b-2"
                            : "text-[#666666]"
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
                        isActive
                          ? "text-[#3a85eb] border-b-blue-500 border-b-2"
                          : "text-[#666666]"
                      }
                    >
                      Admission
                    </NavLink>
                    {user && (
                      <li>
                        <NavLink
                          to="/my-college"
                          aria-label="My College"
                          title="My College"
                          className={({ isActive }) =>
                            isActive
                              ? "text-[#3a85eb] border-b-blue-500 border-b-2"
                              : "text-[#666666]"
                          }
                        >
                          My College
                        </NavLink>
                      </li>
                    )}
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
