/** @format */

import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Footer from "./Footer";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [imgLink, setImgLink] = useState("");
  const { userSignUp, navigate, user, googleSignIn, gitHubSignIn } =
    useContext(AuthContext);
  const navigator = useNavigate();

  const handleSubmit = (event) => {
    setPasswordError("");
    event.preventDefault();
    if (password.length < 6) {
      setPasswordError("Password must be six character long");
      return;
    }
    userSignUp(email, password)
      .then((result) => {
        // console.log(result.user);
        setFirstName("");
        setLastName("");
        setImgLink("");
        setEmail("");
        setPassword("");
        updateProfile(result.user, {
          displayName: `${firstName} ${lastName}`,
          photoURL: imgLink || null,
        });
        navigator(navigate || "/");
      })
      .catch((error) => setPasswordError(error.message));
  };

  // sign in method

  const signInWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        // console.log(result.user);
        navigator(navigate);
      })
      .catch((error) => console.log(error.message));
  };

  const signInWithGithub = () => {
    gitHubSignIn()
      .then((result) => {
        // console.log(result.user);
        navigator(navigate);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:py-20 justify-center items-center h-screen bg-[rgb(0,0,0,0.5)]">
        <h2 className="text-3xl pb-4 text-yellow-500 text-center font-bold">
          Please Sign up
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-4 pb-4 mb-4"
        >
          <div className="mb-4">
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
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
          <div className="mb-6">
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
            {passwordError && (
              <p className="pt-2 text-red-600">{passwordError}</p>
            )}
          </div>
          <div className="md:flex items-center justify-between">
            <button className="button" type="submit">
              Sign up
            </button>
            <div>
              <p className="font-semibold pt-2 md:pt-0">
                Already have an account ! Please{" "}
                <Link
                  to="/signin"
                  className="btn-link cursor-pointer text-green-700 font-semibold"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
          {/* google and github sign in */}
          <hr className="border-sky-100 border" />
          <p className="text-gray-600 my-4 text-center text-2xl font-bold">
            Sign up with
          </p>
          <hr className="border-sky-100 border" />
          <div className="pt-4 flex justify-center items-center gap-4">
            <button
              onClick={signInWithGoogle}
              className="bg-[rgb(0,0,0,0.8)] w-14 h-14 flex items-center justify-center  rounded-full "
            >
              <FaGoogle className="text-3xl text-yellow-500" />
            </button>
            <span className="text-2xl">or</span>
            <button
              onClick={signInWithGithub}
              className="bg-[rgb(0,0,0,0.8)] w-14 h-14 flex items-center justify-center  rounded-full "
            >
              <FaGithub className="text-3xl text-yellow-500" />
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
