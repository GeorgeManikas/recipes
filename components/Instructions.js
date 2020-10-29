import React from "react";

const Instructions = ({ instructions }) => {
  return (
    <>
      <div className="block w-full ">
        <div className="text-md m-4 font-semibold">Instructions </div>
        <div className="m-4 text-md text-gray-700 w-full">{instructions}</div>
      </div>
    </>
  );
};

export default Instructions;
