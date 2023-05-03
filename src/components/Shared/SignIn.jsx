/** @format */

import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FaGooglePlusSquare, FaGithubSquare } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userSignIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    userSignIn(email, password)
      .then((result) => {
        console.log(result.user);
        setEmail("");
        setPassword("");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen backdrop-blur-md bg-transparent">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-1/2 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center pb-4">
            <div>
              <input type="checkbox" name="check" id="check" />
              <label
                className="inline-block pl-2 text-green-700"
                htmlFor="check"
              >
                Remember me
              </label>
            </div>
            <div>
              <p className="btn-link cursor-pointer text-yellow-500">
                Forgot password
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button className="button" type="submit">
              Sign In
            </button>
            <div>
              <p>
                New to Chef-hunt ! Please{" "}
                <Link
                  to="/signup"
                  className="btn-link cursor-pointer text-green-700 font-semibold"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          {/* google and github sign in */}
          <hr className="my-4 border-yellow-500 border-2" />
          <div className="pt-4 space-y-2">
            <button className=" button justify-center gap-4 w-full">
              <span className="text-2xl">
                <FaGooglePlusSquare />
              </span>
              Sign in with google
            </button>
            <button className=" button justify-center gap-4 w-full">
              <span className="text-2xl">
                <FaGithubSquare />
              </span>
              Sign in with github
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
