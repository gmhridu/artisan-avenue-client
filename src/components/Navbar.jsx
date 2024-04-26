import React, { useEffect, useState } from "react";
import { FaHouseUser, FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

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
    setDropdownOpen((prevOpen) => !prevOpen); // Toggle dropdown visibility
  };

  return (
    <div className="my-2">
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
            <div className=" hover:bg-yellow-500 
            rounded-full p-1 focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-900 cursor-pointer">
               <img src={`https://i.postimg.cc/JhSzqPbg/logo.jpg`} className="h-8 rounded-full" alt="" />
           </div>
            <Link to={'/'} className="text-lg font-bold lg:text-xl ml-2">Artisan Avenue</Link>
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
        <label className="input hidden bg-gray-100 rounded-2xl lg:flex items-center gap-2">
          <input type="text" className="grow outline-none border-none focus:outline-none" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <div>
          <div>
            <button className="btn flex focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg dark:focus:ring-yellow-900">
              <span>
                <FaRegUser className="text-md hover:text-[#cfae7a]"/>
              </span>
              Sign In</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
