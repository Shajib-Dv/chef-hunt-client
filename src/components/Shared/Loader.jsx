/** @format */

import React from "react";

const Loader = () => {
  return (
    <div className="my-20">
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
