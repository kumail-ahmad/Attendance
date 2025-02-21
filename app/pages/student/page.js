"use client";
import React from "react";

const page = () => {
  const handleClick = () => {
    alert("clicked");
  };
  return (
    <div>
      i am a student testttt
      <button onClick={handleClick} className="border-red-800 p-3">
        CLICK ME{" "}
      </button>
    </div>
  );
};

export default page;
