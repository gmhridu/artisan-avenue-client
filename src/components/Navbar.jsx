import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import loginAnim from "../assets/login-anim.gif";
import uploadIcon from "../assets/uploadIcon.gif";
import { AuthContext } from "../utils/AuthProvider";
import axios from "axios";
import { FaCircleUser } from "react-icons/fa6";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut, setLoading } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate()


  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  useEffect(() => {
    if (user) {
      fetchUserData(user?.uid);
    } else {
      console.error("Error fetching user data");
    }
  }, [user]);

  const fetchUserData = (uid) => {
    axios
      .get(`http://localhost:5000/users?uid=${uid}`)
      .then((response) => {
        const { name, email, image } = response?.data[0];
        setUserData({ name, email, image });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "night" : "light"));
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prevOpen) => !prevOpen);
  };

  // logOut
  const handleLogOut = () => {
    setLoading(true); 
    logOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Logged out successfully",
          icon: "success",
        }).then(() => {
          navigate("/signIn");
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Failed to log out",
          icon: "error",
        });
      });
  };
  return (
    <div className="my-2 mx-auto px-2">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={handleDropdownToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {dropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            )}
          </div>
          <div className="flex items-center">
            <div
              className=" hover:bg-yellow-500 
            rounded-full p-1 focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-900 cursor-pointer"
            >
              <img
                src={`https://i.postimg.cc/JhSzqPbg/logo.jpg`}
                className="h-8 rounded-full hidden md:block"
                alt=""
              />
            </div>
            <Link
              to={"/"}
              className="text-lg font-bold lg:text-xl ml-2 text-nowrap"
            >
              Artisan Avenue
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="flex flex-col lg:flex-row  gap-6 items-center justify-center">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#cfae7a] font font-medium text-base"
                    : "font-medium leading-snug text-base"
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#cfae7a] font font-medium text-base"
                    : "font-medium leading-snug text-base"
                }
              >
                About
              </NavLink>
              <NavLink
                to={"/services"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#cfae7a] font font-medium text-base"
                    : "font-medium leading-snug text-base"
                }
              >
                Services
              </NavLink>
              <NavLink
                to={"/testimonials"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#cfae7a] font font-medium text-base"
                    : "font-medium leading-snug text-base"
                }
              >
                Testimonials
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#cfae7a] font font-medium text-base"
                    : "font-medium leading-snug text-base"
                }
              >
                Contact
              </NavLink>
            </div>
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <Link
            to={"/uploadProduct"}
            className="hidden md:block border border-yellow-300 px-3 rounded-xl hover:bg-gray-200"
          >
            <button className="flex bg-transparent items-center text-lg gap-2 font-semibold px-2 py-2">
              <span>
                <img src={uploadIcon} className="h-6" alt="" />
              </span>
              Add Craft Item
            </button>
          </Link>
          <fieldset className="hidden md:block space-y-1 dark:text-gray-800">
            <label htmlFor="Search" className="hidden">
              Search
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="button"
                  title="search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 dark:text-gray-800"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600"
              />
            </div>
          </fieldset>

          <div className="flex items-center gap-6">
            {/* toggle night and light mood */}
            <div>
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  className="sr-only"
                  onChange={handleToggle}
                />

                {/* sun icon */}
                <svg
                  className="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-off fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  onClick={handleDropdownToggle}
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    {userData?.image ? (
                      <img
                        src={userData?.image}
                        alt=""
                        className="rounded-full"
                      />
                    ) : (
                      <FaCircleUser className="text-3xl flex items-center justify-center" />
                    )}
                  </div>
                </div>
                {dropdownOpen && (
                  <ul
                    tabIndex={0}
                    className="mt-3 flex flex-col items-start justify-start shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-72 z-50 border"
                  >
                    <div className="px-4 py-3 border-b pb-1">
                      <span className="block text-sm text-gray-900 dark:text-white">
                        {userData ? userData.name : "Bonnie Green"}
                      </span>
                      <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                        {userData ? userData.email : "name@flowbite.com"}
                      </span>
                    </div>
                    <li>
                      <a className="justify-between pt-2">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <Link onClick={handleLogOut}>Logout</Link>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <Link
                to={"/signIn"}
                className="hidden md:block border border-yellow-300 px-3 rounded-xl hover:bg-gray-200"
              >
                <button className="flex items-center text-lg font-semibold">
                  <span>
                    <img src={loginAnim} className="h-11" alt="" />
                  </span>
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
