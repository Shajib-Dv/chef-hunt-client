/** @format */

import React, { useContext, useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import ActiveLink from "../ActiveLink";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [search, setSearch] = useState("");
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  useEffect(() => {
    const btn = document.getElementById("search-btn");
    document.getElementById("search").addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        btn.click();
        e.target.value = "";
      }
    });
  }, []);

  return (
    <>
      <nav className="w-full bg-[rgb(0,0,0,0.5)] md:pt-10 sticky top-0 z-10">
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
                  <Link to="/user">
                    <div
                      title={user?.displayName || "name not found"}
                      className="w-12 rounded-full"
                    >
                      {user?.photoURL ? (
                        <LazyLoad>
                          <img
                            src={user?.photoURL}
                            alt="user"
                            className="inline-block w-full rounded-full"
                          />
                        </LazyLoad>
                      ) : (
                        <div className="avatar w-full h-full placeholder">
                          <div className="bg-yellow-500 text-neutral-content rounded-full w-16">
                            <span className="text-2xl">
                              {user?.email.slice(0, 2)}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
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
                    id="search"
                    type="text"
                    placeholder="Search by country"
                    className="search w-full"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Link
                    id="search-btn"
                    to={`/origin/chefs/${search}`}
                    className="absolute right-16 h-full w-12 flex items-center justify-center md:right-5"
                  >
                    <FaSearch className="text-yellow-500" />
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
                  <button
                    onClick={() => logOut()}
                    className="btn text-black btn-warning w-full"
                  >
                    Log out
                  </button>
                ) : (
                  <Link to="/signin" className="button justify-center w-full">
                    Sign in
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            {user && (
              <div className="avatar">
                <Link to="/user">
                  <div
                    title={user?.displayName || "name not found"}
                    className="w-16 rounded-full"
                  >
                    {user?.photoURL ? (
                      <LazyLoad>
                        <img
                          src={user?.photoURL}
                          alt="user"
                          className="inline-block w-full rounded-full"
                        />
                      </LazyLoad>
                    ) : (
                      <div className="avatar  placeholder">
                        <div className="bg-yellow-500 text-neutral-content rounded-full w-16">
                          <span className="text-2xl">
                            {user?.email.slice(0, 2)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            )}
            {user ? (
              <button onClick={() => logOut()} className="btn btn-warning">
                Log out
              </button>
            ) : (
              <Link to="/signin" className="button justify-center">
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
