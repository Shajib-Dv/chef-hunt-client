/** @format */

import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import ActiveLink from "../ActiveLink";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [search, setSearch] = useState("");
  const user = true;
  console.log(search);
  return (
    <>
      <nav className="w-full backdrop-blur-md bg-transparent md:pt-10">
        <div className="justify-between px-4 mx-auto md:pb-6 lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/">
                <h1 className="text-3xl text-yellow-500 font-extrabold">
                  Chef-hunt
                </h1>
              </Link>
              {user && (
                <div className="avatar md:hidden">
                  <div title={"coming"} className="w-12 rounded-full">
                    <img
                      src={logo}
                      alt="user"
                      className="inline-block w-full"
                    />
                  </div>
                </div>
              )}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center font-bold  justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="relative flex items-center ">
                  <input
                    type="text"
                    placeholder="Search your destination"
                    className="search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Link
                    to={`/origin/chefs/${search}`}
                    className="absolute right-5"
                  >
                    <FaSearch />
                  </Link>
                </li>
                <li className="text-white hover:text-yellow-500">
                  <ActiveLink to="/">Home</ActiveLink>
                </li>
                <li className="text-white hover:text-yellow-500">
                  <ActiveLink to="/chefs">Chefs</ActiveLink>
                </li>
                <li className="text-white hover:text-yellow-500">
                  <ActiveLink to="/blog">Blog</ActiveLink>
                </li>
                <li className="text-white hover:text-yellow-500">
                  <ActiveLink to="/contact">Contact us</ActiveLink>
                </li>
              </ul>
              <div className="mt-3 space-y-2 lg:hidden md:hidden">
                {user ? (
                  <button className="btn btn-warning w-full">Log out</button>
                ) : (
                  <Link
                    to="/signin"
                    className="inline-block w-full px-4 py-2 text-center text-black hover:text-white bg-yellow-500 rounded-md shadow hover:bg-gray-800"
                  >
                    Sign in
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            {user && (
              <div className="avatar">
                <div title={"coming soon"} className="w-16 rounded-full">
                  <img src={logo} alt="user" className="inline-block w-full" />
                </div>
              </div>
            )}
            {user ? (
              <button className="btn btn-warning">Log out</button>
            ) : (
              <Link
                to="/signin"
                className="px-4 py-2 text-black hover:text-white bg-yellow-500 rounded-md shadow hover:bg-gray-800"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
