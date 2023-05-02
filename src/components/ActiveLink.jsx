/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "bg-yellow-500 text-black px-3 py-2 rounded-md"
          : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
