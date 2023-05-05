/** @format */

import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Footer from "./Footer";

const SignIn = () => {
  const MySwal = withReactContent(Swal);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { userSignIn, googleSignIn, gitHubSignIn, setNavigate, resetPassword } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    if (password.length < 6) {
      setError("Password must six character long");
      return;
    }
    userSignIn(email, password)
      .then((result) => {
        console.log(result.user);
        setEmail("");
        setPassword("");
        navigate(from);
      })
      .catch((error) => setError(error.message));
  };

  const signInWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        // console.log(result.user);
        navigate(from);
      })
      .catch((error) => console.log(error.message));
  };

  const signInWithGithub = () => {
    gitHubSignIn()
      .then((result) => {
        // console.log(result.user);
        navigate(from);
      })
      .catch((error) => console.log(error.message));
  };

  const handleResetPassword = () => {
    setError("");
    if (!email) {
      document.getElementById("email").focus();
      toast("Please provide your email");
      return;
    }
    resetPassword(email)
      .then((res) => {
        MySwal.fire({
          title: <strong>Well Done</strong>,
          html: <i>Your Please check your mail to reset your password</i>,
          icon: "success",
        });
        setEmail("");
      })
      .catch((error) => setError(error.message));
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:py-20 justify-center items-center h-screen bg-[rgb(0,0,0,0.5)]">
        <h2 className="text-3xl pb-4 text-yellow-500 text-center font-bold">
          Please Sign in
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full md:w-1/2 shadow-md rounded px-8 pt-4 pb-4 mb-4"
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
            <p className="py-2 text-red-600">{error && error}</p>
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
              <p
                onClick={handleResetPassword}
                className="btn-link cursor-pointer text-yellow-500"
              >
                Forgot password
              </p>
            </div>
          </div>

          <div className="md:flex  items-center justify-between">
            <button className="button w-1/2 justify-center" type="submit">
              Sign In
            </button>
            <div>
              <p className="font-semibold pt-2 md:pt-0">
                New to Chef-hunt ! Please{" "}
                <Link
                  onClick={() => setNavigate(from)}
                  to="/signup"
                  className="btn-link cursor-pointer text-green-700 font-semibold"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          {/* google and github sign in */}
          <hr className="my-4  border-sky-100 border" />
          <p className="text-gray-600 text-center text-2xl font-bold">
            Sign in with
          </p>
          <hr className="my-4  border-sky-100 border" />
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

export default SignIn;
