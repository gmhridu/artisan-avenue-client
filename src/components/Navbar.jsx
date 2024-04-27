import React, { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import loginAnim from "../assets/login-anim.gif";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "night" : "light"));
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prevOpen) => !prevOpen);
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

            <div className="dropdown dropdown-end">
              <div
                onClick={handleDropdownToggle}
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              {dropdownOpen && (
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <div className="px-4 py-3 border-b">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      Bonnie Green
                    </span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                      name@flowbite.com
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
                    <a>Logout</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
