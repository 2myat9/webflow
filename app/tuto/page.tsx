"use client";

import { checkElementStyles } from "../checkElementStyles";

export default function Page() {
  const handleClick = () => {
    checkElementStyles();
  };

  return (
    <div className="flex flex-col gap-4 p-2">
      <h1>Tutorial 1:</h1>
      <p>You are given a flexbox element with 3 children elements inside it.</p>
      <p>
        Your goal: Center the children elements on both the horizontal and the
        vertical axes.
      </p>
      <p>
        Once you are satisfied with the changes you made, select the Body
        element in the left sidebar and click the Check button below.
      </p>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={handleClick}
      >
        Check
      </button>
    </div>
  );
}
