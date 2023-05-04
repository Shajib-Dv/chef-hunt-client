/** @format */

import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col space-y-10 mx-10 justify-center items-center h-screen">
      <progress
        value="40"
        max="100"
        className="progress progress-info w-full"
      ></progress>
      <progress className="progress progress-success w-full"></progress>
      <progress
        value="60"
        max="100"
        className="progress progress-accent w-full"
      ></progress>
      <progress className="progress progress-secondary w-full"></progress>
      <progress
        value="30"
        max="100"
        className="progress progress-warning w-full"
      ></progress>
    </div>
  );
};

export default Loader;
