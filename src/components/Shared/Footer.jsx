/** @format */

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-4 py-10 md:py-20 md:px-28">
      <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10">
        <div className="col-span-2">
          <h1 className="text-yellow-500 text-3xl font-extrabold">Chef-hunt</h1>
          <p className="text-gray-400 my-5">
            Chef hunt is collection of best chefs around the world. We provides
            our best service with our best chefs.
          </p>
        </div>
        <div>
          <h3 className="mb-5 text-yellow-500 text-xl font-semibold">
            Features
          </h3>
          <ul className="grid gap-3 text-gray-400">
            <li>About Us</li>
            <li>Work</li>
            <li>Latest News</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-5 text-yellow-500 text-xl font-semibold">
            Product
          </h3>
          <ul className="grid gap-3 text-gray-400">
            <li>Restaurant</li>
            <li>Free shipping</li>
            <li>Customers</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-5 text-yellow-500 text-xl font-semibold">
            Support
          </h3>
          <ul className="grid gap-3 text-gray-400">
            <li>Dish serve</li>
            <li>Sales</li>
            <li>Marketing</li>
            <li>Donate</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-5 text-yellow-500 text-xl font-semibold">
            Contact
          </h3>
          <ul className="grid gap-3 text-gray-400">
            <li>524 Norway , NYC</li>
            <li>+1 0123 - 978 - 9999</li>
          </ul>
        </div>
      </div>
      <div className="border-b border-gray-600 my-12"></div>
      <div className="text-gray-400 flex-row md:flex md:justify-between text-sm text-center">
        <p>@2023 Chef-hunt. All Rights Reserved</p>
        <p>
          Powered by <button className="btn-link">Chef-hunt</button>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
