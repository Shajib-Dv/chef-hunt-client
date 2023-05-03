/** @format */

import React, { useState } from "react";

function SubscribeSection() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email} subscribed successfully.`);
    // add your logic to subscribe the user here
  };

  return (
    <div className="bg-gray-100 h-full py-12">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-yellow-500 font-semibold tracking-wide uppercase">
            Subscribe to our newsletter
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Stay up to date with our latest news and updates.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Sign up for our newsletter to receive regular updates about our
            products and services.
          </p>
        </div>
        <form className="mt-10 sm:flex" onSubmit={handleSubmit}>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            className="px-4 py-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            type="submit"
            className="mt-3 button w-full px-4 py-3 border border-transparent rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubscribeSection;
