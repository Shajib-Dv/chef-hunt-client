/** @format */

import React, { useState } from "react";
import Navbar from "./Navbar";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgLink, setImgLink] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
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
              onChange={(e) => setPassword(e.target.value)}
            />
            {<p className="pt-2 text-red-600">err</p>}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Photo-url
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="img-url"
              type="text"
              placeholder="Photo url"
              value={imgLink}
              onChange={(e) => setImgLink(e.target.value)}
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
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
